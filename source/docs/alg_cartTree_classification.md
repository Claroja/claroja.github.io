CART uses Gini Impurity in the process of splitting the dataset into a decision tree.
Mathematically, we can write Gini Impurity as following:
$$I_{Gini} = 1 - \sum_{i=1}^{j}p_i^2$$
$$I_{Gini} = 1 - (theProbabilityOfTarget"No")^2 - (theProbabilityOfTarget"YES")^2$$




## Classification
Simple simulation with [Heart Disease Data set](https://www.kaggle.com/datasets/johnsmith88/heart-disease-dataset?resource=download) with 303 rows and has 13 attributes. Target consist 138 value 0 and 165 value 1.

In this simulation, only use the sex, fbs(fasting blood sugar), exang(exercise induced angina), and target attributes.

### 1. Measure Gini Impurity in Sex
![](./alg_cartTree_classification/1.png)
![](./alg_cartTree_classification/2.png)

### 2. Measure Gini Impurity in Fbs
![](./alg_cartTree_classification/3.png)
![](./alg_cartTree_classification/4.png)

### 3. Measure Gini Impurity in Exang
![](./alg_cartTree_classification/5.png)
![](./alg_cartTree_classification/6.png)

### 4. select the root node
Fbs (fasting blood sugar) has the lowest Gini Impurity, so well use it at the Root Node

As we know, we have Fbs as Root Node, when we divide all of the patients using Fbs, we end up with "impure" leaf nodes. Each leaf contained with and without heart disease.

![](./alg_cartTree_classification/7.png)

### 5.
We need to figure how well Sex and Exang separate these patient in left node of Fbs.
![](./alg_cartTree_classification/8.png)


Exang has the lowest Gini Impurity,we will use it at this node to separate patients.
![](./alg_cartTree_classification/9.png)
In the left node of Exang, how well it separate these 49 patients(24 with heart disease and 25 without heart disease. Since only the attribute sex is left, we put sex attribute in the left node of Exang)
![](./alg_cartTree_classification/10.png)

As we can see, we have final leaf nodes on this branch, but why is the leaf node circled including the final node?
Note: the leaf node circled, 89% don't have heart diseases.
Do these new leaves separate patients better than what we had before?
In order to answer those question,we must compare Gini Impurity using attribute sex and Gini Impurity before using attribute sex to separate patients.
![](./alg_cartTree_classification/11.png)
The Gini Impurity before using sex to separate patients is lowest, so we don't separate this node using Sex. The final leaf node on this branch of tree:
![](./alg_cartTree_classification/12.png)
Do the same thing on the right branch, so the end result of a tree in this case is:
![](./alg_cartTree_classification/13.png)

Main point when process the splitting of the dataset:
1. calculate all of the Gini impurity score
2. compare the Gini impurity score, after $n$ before using new attribute to separate data. If the node itself has the lowest score, than there is no point in separating the data.
3. If separating the data result in an improvement, than pick the separation with the lowest impurity score.




##  calculate Gini Impurity in continuous data
such as weight which is one of the attributes to determine heart disease, for example we have weight attribute:
![](./alg_cartTree_classification/14.png)

step 1: Order dta by ascending
![](./alg_cartTree_classification/15.png)

step 2: Calculate the average weight
![](./alg_cartTree_classification/16.png)

step 3: Calculate Gini Impurity values for each average weight
![](./alg_cartTree_classification/17.png)

The lowest Gini impurity is Weight < 205, this is the cutoff and impurity value if used when we compare with another attribute.

## calculate Gini Impurity in categorical data
we have a favorite color attribute to determine a person’s gender
![](./alg_cartTree_classification/18.png)
In order to know Gini Impurity this attribute, calculate an impurity score for each one as well as each possible combination.

refs:
https://medium.com/analytics-vidhya/classification-in-decision-tree-a-step-by-step-cart-classification-and-regression-tree-8e5f5228b11e