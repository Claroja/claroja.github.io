# single labels
```python
import pandas as pd
from datasets import Dataset,DatasetDict
from transformers import AutoTokenizer
from torch.utils.data import DataLoader
from torch.optim import AdamW
import torch
from transformers import AutoModelForSequenceClassification
from sklearn.model_selection import train_test_split
from sklearn import preprocessing
from sklearn.metrics import accuracy_score



# 1. create test data
df = pd.DataFrame({
    "text":["text0","text1","text2","text3","text4","text5","text6"],
    "target":["a","b","b","a","b","a","a"]
})

# 2. label the target

labels = df["target"].value_counts().index.tolist()
le = preprocessing.LabelEncoder()
le.fit(labels)
df["labels"] = le.transform(df["target"])
text_column_name = "text"
labels_column_name = "labels"

# 3. split into train and test
df_with_index = df.reset_index()
X_train, X_test, y_train, y_test = train_test_split(df_with_index[["index",text_column_name]].values,df_with_index[labels_column_name].values,test_size=0.5)
df_with_index.loc[df_with_index["index"].isin(X_train[:,0]),"splitmark"] = "test"
df_with_index.loc[df_with_index["index"].isin(X_test[:,0]), "splitmark"] = "train"
df_with_splitmark = df_with_index.set_index("index")


# 4. tokenize and create dataloader
dataset_train = Dataset.from_pandas(df_with_splitmark.loc[df_with_index["splitmark"]=="train",["text","labels"]])
dataset_test = Dataset.from_pandas(df_with_splitmark.loc[df_with_index["splitmark"]=="test",["text","labels"]])
datadict = DatasetDict({"train":dataset_train,"test":dataset_test})
tokenizer = AutoTokenizer.from_pretrained("./pretrained_model/distilbert-base-uncased")
tokenized_datadict = datadict.map(lambda x:tokenizer(x[text_column_name], padding='max_length', truncation=True, max_length=512,),
                                batched=True,remove_columns = ["index",text_column_name])
tokenized_datadict.set_format("torch")
train_dataloader = DataLoader(tokenized_datadict["train"], shuffle=True, batch_size=1)
test_dataloader = DataLoader(tokenized_datadict["test"], batch_size=1)
```



# multi labels
```python
import pandas as pd
from datasets import Dataset,DatasetDict
from skmultilearn.model_selection import iterative_train_test_split
from transformers import AutoTokenizer
from torch.utils.data import DataLoader
from sklearn.preprocessing import MultiLabelBinarizer
from torch.optim import AdamW
import torch
from transformers import AutoModelForSequenceClassification
import numpy as np
from sklearn.metrics import accuracy_score

# 1. create test data
df = pd.DataFrame({
    "text":["text0","text1","text2","text3","text4","text5","text6"],
    "target":["","b,c","b,c","","c","b,c","b"]
})

# 2. one-hot the target into multicolumns
df["labels_list"] = df["target"].str.split(",")
labels = df["labels_list"].explode().value_counts().index.tolist()
labels.remove("")  # write into config, next time, use config.
mlb = MultiLabelBinarizer(classes = labels)
mlb.fit(df["labels_list"])
df[labels] = mlb.transform(df["labels_list"])


# 3. split into train and test
text_column_name = "text"
labels_column_names = labels

df_with_index = df.reset_index() # create "index" column for indexing back.
X_train, y_train, X_test, y_test = iterative_train_test_split(df_with_index[["index",text_column_name]].values,df_with_index[labels_column_names].values,test_size=0.5)
df_with_index.loc[df_with_index["index"].isin(X_train[:,0]),"splitmark"] = "test"  # index back
df_with_index.loc[df_with_index["index"].isin(X_test[:,0]), "splitmark"] = "train" # index back
df_with_splitmark = df_with_index.set_index("index") # set the index column to real index


# 4. tokenize and create dataloader
dataset_train = Dataset.from_pandas(df_with_splitmark.loc[df_with_index["splitmark"]=="train",["text","labels"]])
dataset_test = Dataset.from_pandas(df_with_splitmark.loc[df_with_index["splitmark"]=="test",["text","labels"]])
datadict = DatasetDict({"train":dataset_train,"test":dataset_test})
tokenizer = AutoTokenizer.from_pretrained("./pretrained_model/distilbert-base-uncased")
tokenized_datadict = datadict.map(lambda x:tokenizer(x[text_column_name], padding='max_length', truncation=True, max_length=512,),
                                batched=True,remove_columns = ["index",text_column_name])
tokenized_datadict.set_format("torch")
train_dataloader = DataLoader(tokenized_datadict["train"], shuffle=True, batch_size=1)
test_dataloader = DataLoader(tokenized_datadict["test"], batch_size=1)
```


refs:
http://scikit.ml/userguide.html
https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.LabelEncoder.html#sklearn.preprocessing.LabelEncoder