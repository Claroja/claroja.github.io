const n=JSON.parse(`{"key":"v-74fb387e","path":"/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86/singlabelClassification.html","title":"singlabelClassification","lang":"zh-CN","frontmatter":{"description":"singlabelClassification import pandas as pd from datasets import Dataset,DatasetDict from transformers import AutoTokenizer from torch.utils.data import DataLoader from torch.optim import AdamW import torch from transformers import AutoModelForSequenceClassification from sklearn.model_selection import train_test_split from sklearn import preprocessing from sklearn.metrics import accuracy_score ## 1. create test data df = pd.DataFrame({ \\"text\\":[\\"text0\\",\\"text1\\",\\"text2\\",\\"text3\\",\\"text4\\",\\"text5\\",\\"text6\\"], \\"target\\":[\\"a\\",\\"b\\",\\"b\\",\\"a\\",\\"b\\",\\"a\\",\\"a\\"] }) ## 2. label the target labels = df[\\"target\\"].value_counts().index.tolist() le = preprocessing.LabelEncoder() le.fit(labels) le.classes_ = [\\"a\\",\\"b\\"] # specify the lable order df[\\"labels\\"] = le.transform(df[\\"target\\"]) text_column_name = \\"text\\" labels_column_name = \\"labels\\" ## 3. split into train and test df_with_index = df.reset_index() X_train, X_test, y_train, y_test = train_test_split(df_with_index[[\\"index\\",text_column_name]].values,df_with_index[labels_column_name].values,test_size=0.5) df_with_index.loc[df_with_index[\\"index\\"].isin(X_train[:,0]),\\"splitmark\\"] = \\"test\\" df_with_index.loc[df_with_index[\\"index\\"].isin(X_test[:,0]), \\"splitmark\\"] = \\"train\\" df_with_splitmark = df_with_index.set_index(\\"index\\") ## 4. tokenize and create dataloader dataset_train = Dataset.from_pandas(df_with_splitmark.loc[df_with_index[\\"splitmark\\"]==\\"train\\",[\\"text\\",\\"labels\\"]]) dataset_test = Dataset.from_pandas(df_with_splitmark.loc[df_with_index[\\"splitmark\\"]==\\"test\\",[\\"text\\",\\"labels\\"]]) datadict = DatasetDict({\\"train\\":dataset_train,\\"test\\":dataset_test}) tokenizer = AutoTokenizer.from_pretrained(\\"./pretrained_model/distilbert-base-uncased\\") tokenized_datadict = datadict.map(lambda x:tokenizer(x[text_column_name], padding='max_length', truncation=True, max_length=512,), batched=True,remove_columns = [\\"index\\",text_column_name]) tokenized_datadict.set_format(\\"torch\\") train_dataloader = DataLoader(tokenized_datadict[\\"train\\"], shuffle=True, batch_size=1) test_dataloader = DataLoader(tokenized_datadict[\\"test\\"], batch_size=1) ## 5. create model model = AutoModelForSequenceClassification.from_pretrained(\\"./pretrained_model/distilbert-base-uncased\\", num_labels=len(labels)) ## 6. train and evaluate optimizer = AdamW(model.parameters(), lr=5e-5) for epoch in range(2): model.train() for batch in train_dataloader: batch = {k: v.to(\\"cpu\\") for k, v in batch.items()} outputs = model(**batch) loss = outputs.loss loss.backward() optimizer.step() optimizer.zero_grad() model.eval() y_pred = [] y_label = [] for batch in test_dataloader: batch = {k: v.to(\\"cpu\\") for k, v in batch.items()} with torch.no_grad(): outputs = model(**batch) # -1 would thus map to the last dimension, -2 to the preceding one, etc. logits = outputs.logits predictions = torch.argmax(logits, dim=-1) y_pred.extend(predictions.numpy().tolist()) y_label.extend(batch[\\"labels\\"].numpy().tolist()) print(epoch,accuracy_score(y_label,y_pred))","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86/singlabelClassification.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"singlabelClassification"}],["meta",{"property":"og:description","content":"singlabelClassification import pandas as pd from datasets import Dataset,DatasetDict from transformers import AutoTokenizer from torch.utils.data import DataLoader from torch.optim import AdamW import torch from transformers import AutoModelForSequenceClassification from sklearn.model_selection import train_test_split from sklearn import preprocessing from sklearn.metrics import accuracy_score ## 1. create test data df = pd.DataFrame({ \\"text\\":[\\"text0\\",\\"text1\\",\\"text2\\",\\"text3\\",\\"text4\\",\\"text5\\",\\"text6\\"], \\"target\\":[\\"a\\",\\"b\\",\\"b\\",\\"a\\",\\"b\\",\\"a\\",\\"a\\"] }) ## 2. label the target labels = df[\\"target\\"].value_counts().index.tolist() le = preprocessing.LabelEncoder() le.fit(labels) le.classes_ = [\\"a\\",\\"b\\"] # specify the lable order df[\\"labels\\"] = le.transform(df[\\"target\\"]) text_column_name = \\"text\\" labels_column_name = \\"labels\\" ## 3. split into train and test df_with_index = df.reset_index() X_train, X_test, y_train, y_test = train_test_split(df_with_index[[\\"index\\",text_column_name]].values,df_with_index[labels_column_name].values,test_size=0.5) df_with_index.loc[df_with_index[\\"index\\"].isin(X_train[:,0]),\\"splitmark\\"] = \\"test\\" df_with_index.loc[df_with_index[\\"index\\"].isin(X_test[:,0]), \\"splitmark\\"] = \\"train\\" df_with_splitmark = df_with_index.set_index(\\"index\\") ## 4. tokenize and create dataloader dataset_train = Dataset.from_pandas(df_with_splitmark.loc[df_with_index[\\"splitmark\\"]==\\"train\\",[\\"text\\",\\"labels\\"]]) dataset_test = Dataset.from_pandas(df_with_splitmark.loc[df_with_index[\\"splitmark\\"]==\\"test\\",[\\"text\\",\\"labels\\"]]) datadict = DatasetDict({\\"train\\":dataset_train,\\"test\\":dataset_test}) tokenizer = AutoTokenizer.from_pretrained(\\"./pretrained_model/distilbert-base-uncased\\") tokenized_datadict = datadict.map(lambda x:tokenizer(x[text_column_name], padding='max_length', truncation=True, max_length=512,), batched=True,remove_columns = [\\"index\\",text_column_name]) tokenized_datadict.set_format(\\"torch\\") train_dataloader = DataLoader(tokenized_datadict[\\"train\\"], shuffle=True, batch_size=1) test_dataloader = DataLoader(tokenized_datadict[\\"test\\"], batch_size=1) ## 5. create model model = AutoModelForSequenceClassification.from_pretrained(\\"./pretrained_model/distilbert-base-uncased\\", num_labels=len(labels)) ## 6. train and evaluate optimizer = AdamW(model.parameters(), lr=5e-5) for epoch in range(2): model.train() for batch in train_dataloader: batch = {k: v.to(\\"cpu\\") for k, v in batch.items()} outputs = model(**batch) loss = outputs.loss loss.backward() optimizer.step() optimizer.zero_grad() model.eval() y_pred = [] y_label = [] for batch in test_dataloader: batch = {k: v.to(\\"cpu\\") for k, v in batch.items()} with torch.no_grad(): outputs = model(**batch) # -1 would thus map to the last dimension, -2 to the preceding one, etc. logits = outputs.logits predictions = torch.argmax(logits, dim=-1) y_pred.extend(predictions.numpy().tolist()) y_label.extend(batch[\\"labels\\"].numpy().tolist()) print(epoch,accuracy_score(y_label,y_pred))"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:17:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:17:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"singlabelClassification\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-27T13:17:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1701091021000,"updatedTime":1701091021000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.01,"words":302},"filePathRelative":"机器学习/自然语言处理/自然语言处理/singlabelClassification.md","localizedDate":"2023年11月27日","excerpt":"<h1> singlabelClassification</h1>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> pandas <span class=\\"token keyword\\">as</span> pd\\n<span class=\\"token keyword\\">from</span> datasets <span class=\\"token keyword\\">import</span> Dataset<span class=\\"token punctuation\\">,</span>DatasetDict\\n<span class=\\"token keyword\\">from</span> transformers <span class=\\"token keyword\\">import</span> AutoTokenizer\\n<span class=\\"token keyword\\">from</span> torch<span class=\\"token punctuation\\">.</span>utils<span class=\\"token punctuation\\">.</span>data <span class=\\"token keyword\\">import</span> DataLoader\\n<span class=\\"token keyword\\">from</span> torch<span class=\\"token punctuation\\">.</span>optim <span class=\\"token keyword\\">import</span> AdamW\\n<span class=\\"token keyword\\">import</span> torch\\n<span class=\\"token keyword\\">from</span> transformers <span class=\\"token keyword\\">import</span> AutoModelForSequenceClassification\\n<span class=\\"token keyword\\">from</span> sklearn<span class=\\"token punctuation\\">.</span>model_selection <span class=\\"token keyword\\">import</span> train_test_split\\n<span class=\\"token keyword\\">from</span> sklearn <span class=\\"token keyword\\">import</span> preprocessing\\n<span class=\\"token keyword\\">from</span> sklearn<span class=\\"token punctuation\\">.</span>metrics <span class=\\"token keyword\\">import</span> accuracy_score\\n\\n\\n\\n<span class=\\"token comment\\">## 1. create test data</span>\\ndf <span class=\\"token operator\\">=</span> pd<span class=\\"token punctuation\\">.</span>DataFrame<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token string\\">\\"text\\"</span><span class=\\"token punctuation\\">:</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"text0\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"text1\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"text2\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"text3\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"text4\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"text5\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"text6\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">\\"target\\"</span><span class=\\"token punctuation\\">:</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"a\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"b\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"b\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"a\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"b\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"a\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"a\\"</span><span class=\\"token punctuation\\">]</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">## 2. label the target</span>\\n\\nlabels <span class=\\"token operator\\">=</span> df<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"target\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span>value_counts<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>index<span class=\\"token punctuation\\">.</span>tolist<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\nle <span class=\\"token operator\\">=</span> preprocessing<span class=\\"token punctuation\\">.</span>LabelEncoder<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\nle<span class=\\"token punctuation\\">.</span>fit<span class=\\"token punctuation\\">(</span>labels<span class=\\"token punctuation\\">)</span>\\nle<span class=\\"token punctuation\\">.</span>classes_ <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"a\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"b\\"</span><span class=\\"token punctuation\\">]</span> <span class=\\"token comment\\"># specify the lable order</span>\\ndf<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"labels\\"</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> le<span class=\\"token punctuation\\">.</span>transform<span class=\\"token punctuation\\">(</span>df<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"target\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\ntext_column_name <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"text\\"</span>\\nlabels_column_name <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"labels\\"</span>\\n\\n<span class=\\"token comment\\">## 3. split into train and test</span>\\ndf_with_index <span class=\\"token operator\\">=</span> df<span class=\\"token punctuation\\">.</span>reset_index<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\nX_train<span class=\\"token punctuation\\">,</span> X_test<span class=\\"token punctuation\\">,</span> y_train<span class=\\"token punctuation\\">,</span> y_test <span class=\\"token operator\\">=</span> train_test_split<span class=\\"token punctuation\\">(</span>df_with_index<span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"index\\"</span><span class=\\"token punctuation\\">,</span>text_column_name<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span>values<span class=\\"token punctuation\\">,</span>df_with_index<span class=\\"token punctuation\\">[</span>labels_column_name<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span>values<span class=\\"token punctuation\\">,</span>test_size<span class=\\"token operator\\">=</span><span class=\\"token number\\">0.5</span><span class=\\"token punctuation\\">)</span>\\ndf_with_index<span class=\\"token punctuation\\">.</span>loc<span class=\\"token punctuation\\">[</span>df_with_index<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"index\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span>isin<span class=\\"token punctuation\\">(</span>X_train<span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">:</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"splitmark\\"</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"test\\"</span>\\ndf_with_index<span class=\\"token punctuation\\">.</span>loc<span class=\\"token punctuation\\">[</span>df_with_index<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"index\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span>isin<span class=\\"token punctuation\\">(</span>X_test<span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">:</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"splitmark\\"</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"train\\"</span>\\ndf_with_splitmark <span class=\\"token operator\\">=</span> df_with_index<span class=\\"token punctuation\\">.</span>set_index<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"index\\"</span><span class=\\"token punctuation\\">)</span>\\n\\n\\n<span class=\\"token comment\\">## 4. tokenize and create dataloader</span>\\ndataset_train <span class=\\"token operator\\">=</span> Dataset<span class=\\"token punctuation\\">.</span>from_pandas<span class=\\"token punctuation\\">(</span>df_with_splitmark<span class=\\"token punctuation\\">.</span>loc<span class=\\"token punctuation\\">[</span>df_with_index<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"splitmark\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">==</span><span class=\\"token string\\">\\"train\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"text\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"labels\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\ndataset_test <span class=\\"token operator\\">=</span> Dataset<span class=\\"token punctuation\\">.</span>from_pandas<span class=\\"token punctuation\\">(</span>df_with_splitmark<span class=\\"token punctuation\\">.</span>loc<span class=\\"token punctuation\\">[</span>df_with_index<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"splitmark\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">==</span><span class=\\"token string\\">\\"test\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"text\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"labels\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\ndatadict <span class=\\"token operator\\">=</span> DatasetDict<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span><span class=\\"token string\\">\\"train\\"</span><span class=\\"token punctuation\\">:</span>dataset_train<span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"test\\"</span><span class=\\"token punctuation\\">:</span>dataset_test<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\ntokenizer <span class=\\"token operator\\">=</span> AutoTokenizer<span class=\\"token punctuation\\">.</span>from_pretrained<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"./pretrained_model/distilbert-base-uncased\\"</span><span class=\\"token punctuation\\">)</span>\\ntokenized_datadict <span class=\\"token operator\\">=</span> datadict<span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">map</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">lambda</span> x<span class=\\"token punctuation\\">:</span>tokenizer<span class=\\"token punctuation\\">(</span>x<span class=\\"token punctuation\\">[</span>text_column_name<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> padding<span class=\\"token operator\\">=</span><span class=\\"token string\\">'max_length'</span><span class=\\"token punctuation\\">,</span> truncation<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">,</span> max_length<span class=\\"token operator\\">=</span><span class=\\"token number\\">512</span><span class=\\"token punctuation\\">,</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n                                batched<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">,</span>remove_columns <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"index\\"</span><span class=\\"token punctuation\\">,</span>text_column_name<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\ntokenized_datadict<span class=\\"token punctuation\\">.</span>set_format<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"torch\\"</span><span class=\\"token punctuation\\">)</span>\\ntrain_dataloader <span class=\\"token operator\\">=</span> DataLoader<span class=\\"token punctuation\\">(</span>tokenized_datadict<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"train\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> shuffle<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">,</span> batch_size<span class=\\"token operator\\">=</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\ntest_dataloader <span class=\\"token operator\\">=</span> DataLoader<span class=\\"token punctuation\\">(</span>tokenized_datadict<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"test\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> batch_size<span class=\\"token operator\\">=</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\n\\n\\n\\n<span class=\\"token comment\\">## 5. create model</span>\\nmodel <span class=\\"token operator\\">=</span> AutoModelForSequenceClassification<span class=\\"token punctuation\\">.</span>from_pretrained<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"./pretrained_model/distilbert-base-uncased\\"</span><span class=\\"token punctuation\\">,</span> \\n                                                            num_labels<span class=\\"token operator\\">=</span><span class=\\"token builtin\\">len</span><span class=\\"token punctuation\\">(</span>labels<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">## 6. train and evaluate</span>\\noptimizer <span class=\\"token operator\\">=</span> AdamW<span class=\\"token punctuation\\">(</span>model<span class=\\"token punctuation\\">.</span>parameters<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> lr<span class=\\"token operator\\">=</span><span class=\\"token number\\">5e-5</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">for</span> epoch <span class=\\"token keyword\\">in</span> <span class=\\"token builtin\\">range</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    model<span class=\\"token punctuation\\">.</span>train<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">for</span> batch <span class=\\"token keyword\\">in</span> train_dataloader<span class=\\"token punctuation\\">:</span>\\n        batch <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>k<span class=\\"token punctuation\\">:</span> v<span class=\\"token punctuation\\">.</span>to<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"cpu\\"</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">for</span> k<span class=\\"token punctuation\\">,</span> v <span class=\\"token keyword\\">in</span> batch<span class=\\"token punctuation\\">.</span>items<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">}</span>\\n        outputs <span class=\\"token operator\\">=</span> model<span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">**</span>batch<span class=\\"token punctuation\\">)</span>\\n        loss <span class=\\"token operator\\">=</span> outputs<span class=\\"token punctuation\\">.</span>loss\\n\\n        loss<span class=\\"token punctuation\\">.</span>backward<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n        optimizer<span class=\\"token punctuation\\">.</span>step<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n        optimizer<span class=\\"token punctuation\\">.</span>zero_grad<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n    model<span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">eval</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n    y_pred <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span>\\n    y_label <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span>\\n    <span class=\\"token keyword\\">for</span> batch <span class=\\"token keyword\\">in</span> test_dataloader<span class=\\"token punctuation\\">:</span>\\n        batch <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>k<span class=\\"token punctuation\\">:</span> v<span class=\\"token punctuation\\">.</span>to<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"cpu\\"</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">for</span> k<span class=\\"token punctuation\\">,</span> v <span class=\\"token keyword\\">in</span> batch<span class=\\"token punctuation\\">.</span>items<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">with</span> torch<span class=\\"token punctuation\\">.</span>no_grad<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n            outputs <span class=\\"token operator\\">=</span> model<span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">**</span>batch<span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># -1 would thus map to the last dimension, -2 to the preceding one, etc.</span>\\n        logits <span class=\\"token operator\\">=</span> outputs<span class=\\"token punctuation\\">.</span>logits\\n        predictions <span class=\\"token operator\\">=</span> torch<span class=\\"token punctuation\\">.</span>argmax<span class=\\"token punctuation\\">(</span>logits<span class=\\"token punctuation\\">,</span> dim<span class=\\"token operator\\">=</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\n        y_pred<span class=\\"token punctuation\\">.</span>extend<span class=\\"token punctuation\\">(</span>predictions<span class=\\"token punctuation\\">.</span>numpy<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>tolist<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n        y_label<span class=\\"token punctuation\\">.</span>extend<span class=\\"token punctuation\\">(</span>batch<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"labels\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span>numpy<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>tolist<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>epoch<span class=\\"token punctuation\\">,</span>accuracy_score<span class=\\"token punctuation\\">(</span>y_label<span class=\\"token punctuation\\">,</span>y_pred<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
