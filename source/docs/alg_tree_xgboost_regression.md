## 总结
1. 第一步和GBDT一样是做一个初始化的预测，一般是均值
2. 第二步和GBDT一样是创建一棵树来拟合残差，XGBOOST在拟合的时候


## 推导

NOTE:XGBoost was designed to be used with large, complicated data sets.

On the x-axis, we have different `drug dosages` and on the y-axis, we measured `drug effectiveness`.
![](./alg_tree_xgboost_regression/1.png)

The very first step in fitting XGBoost to the training data is to make an initial prediction. This prediction can be anything, but by default it is 0.5, regardless of whether you are using XGBoost for regression or classification. The prediction, 0.5, corresponds to this thick, black, horizontal line and the residuals,the differences between observed and predicted values, show us how good the initial prediction is.
![](./alg_tree_xgboost_regression/2.png)


Now, just like gradient boost, xgboost fits a regression tree to the residuals. However, unlike gradient boost, which typically uses regular, off-the-shelf, regression tree. Xgboost uses a unique regression tree that I call an xgboost tree.

Each tree starts out as a single leaf and all of the `residuals` go to the leaf.
![](./alg_tree_xgboost_regression/3.gif)

Now we calculate a `quality score`, or `similarity score` for the residuals. let $\lambda = 0$
$$ Similarity Score = \frac{Sum of Residuals, Squared}{Number of Residuals + \lambda} = \frac{(-10.5+6.5+7.5-7.5)^2}{4+0}=4$$

Now the question is whether or not we can do a better job clustering similar residuals if we split them into two groups. To answer this, we first focus on the two observations with the lowest dosages. Their average Dosage is 15, and that corresponds to this dotted red line.So we split the observations into two groups, based on whether or not the $dosage < 15$.Then we put the split residuals into leaves.
![](./alg_tree_xgboost_regression/4.gif)

Now we calculate the similarity score for the leaf on the left:
$$ Similarity Score = \frac{Sum of Residuals, Squared}{Number of Residuals + \lambda} = \frac{(-10.5)^2}{1+0}=110.25$$
calculate the similarity score for the residuals that go to the leaf on the right:
$$ Similarity Score = \frac{Sum of Residuals, Squared}{Number of Residuals + \lambda} = \frac{(6.5+7.5-7.5)^2}{3+0}=14.8$$
![](./alg_tree_xgboost_regression/5.png)
Now we need to quantify how much better the leaves cluster similar residuals than the root.We do this by calculating the `gain` of splitting the residuals into two groups.
$$ Gain = Left_{similarity}+Right_{similarity}-Root_(similarity)  = 110.25 + 14.08 - 4 = 120.33 $$
Now that we have calculated the gain for the threshold $dosage < 15$, we can compare it to the gain calculated for other thresholds.
calculate the gain of $dosage < 22.5$:
![](./alg_tree_xgboost_regression/6.png)

$$ Gain = Left_{similarity}+Right_{similarity}-Root_(similarity)  = 8 + 0 - 4 = 4 $$
Since the gain for $dosage<22.5(gain=4)$ is less than the gain for $dosage<15(gain=120.33)$$, $dosage < 15$ is better at splitting the residuals into clusters of similar values.

calculate the gain of $dosage < 30$:

![](./alg_tree_xgboost_regression/7.png)

$$ Gain = Left_{similarity}+Right_{similarity}-Root_(similarity)  = 4.08 + 56.25-4 = 56.33 $$
Again, since the grain for $dosage < 30(gain=56.33)$ is less than the gain for $dosage < 15(gain=120.33)$, $dosage < 15$ is better at splitting the observations.

And since we can't shift the threshold over any further to the right, we are done comparing different thresholds.And we will use the threshold that gave us the largest gain, $dosage < 15$, for the first branch in the tree.
![](./alg_tree_xgboost_regression/8.png)

Now, since there is only one residual in the leaf on the left, we can't split it any further.However, we can split the 3 residuals in the leaf on the right. as above, we finish the tree.
![](./alg_tree_xgboost_regression/9.png)
NOTE:To keep this example from getting out of hand, I've limited the tree depth to two levels and this means we'll not split this leaf any further, and we are done building this tree.However, the default is to allow up to 6 levels.

## prune
Now we need to talk about how to prune the tree, we prune an xgboost tree based on its gain values.we start by picking a number, for example, 130.Xgboost calls this number $\gamma$.we then calculate the difference between the gain associated with the lowest branch in the tree and the value for $\gamma$. if the difference between the gain and the $\gamma$ is negative, we'll remove the branch, and if the difference between the gain and the $\gamma$ is positive, we will not remove the branch. In this case, when we plug in gain and the value for $\gamma$, 130, we got positive number, so we'll not remove the branch and we are done pruning.
NOTE:The gain for root, 120.3, is less than 130, the value for $\gamma$, so the difference will be negative. However because we did not remove the first branch, we'll not remove the root.
In contrast, if we set $\gamma$ equal to 150, then we will remove the branch because 140.17 minus 150 equals negative number, so let's move this branch.Now we'll subtract $\gamma$ from the gain for the root. since 120.33 minus 150 equals a negative number, we'll remove the root. and all we will be left with is original prediction which is pretty extreme pruning.
![](./alg_tree_xgboost_regression/10.gif)


## lambda
this time, when we calculate similarity score, we will set $\lambda = 1$. Remember $\lambda$ is a regularization parameter, which means that it is intended to reduce the prediction's sensitivity to individual observations.Now the similarity score for the root is:
$$ Similarity Score = \frac{(-10.5+6.5+6.5-7.5)}{4+1}=3.2 $$
which is 8/10 of what we got when $\lambda = 0$, continue...
![](./alg_tree_xgboost_regression/11.png)
so, one thing we see when $\lambda > 0$, the similarity scores are smaller an the amount of decrease is inversely proportional to the number of residuals in the node.In other words, the leaf on the left only have 1 residual, and it had largest decrease in similarity score, 50%.In contrast, the root had all 4 residuals and the smallest decrease, 20%.
then we calculate the gain...

Now just for comparison, these were gain values when $\lambda = 0$, when we first talking about pruning tree, we set $\gamma = 130$, and because,for the lowest branch in the first tree, $gain - \gamma = positive$, we did not prune at all.

Now with $\lambda =1$, the values for gain are both less than 130, so we would prune the whole tree away.
![](./alg_tree_xgboost_regression/12.png)

by setting $\lambda=1$, it prevented over fitting the training data.


## output
For now , regardless of $\lambda$ and $\gamma$, let's assume this is the tree we are working with and determine output value for the leaves.
$$ Output Values = \frac{Sum Of Residuals}{Number Of Residuals + \lambda} $$
NOTE:The output value equation is like the similarity score except we do not square the sum of the residuals.
So for this leaf we plug in the residual, -10.5, the number of residuals in the leaf,1, and the value for the regularization parameter, $\lambda$.
if $\lambda = 0$, $Output Value = \frac{-10.5}{1+0}=-10.5$
if $\lambda = 1$, $Output Value = \frac{-10.5}{1+2}=-5.25$
In other words, when $\lambda > 0$, it will reduce the amount that this individual observation adds to the overall prediction.Thus,$\lambda$,the regularization parameter, will reduce the prediction's sensitivity to this individual observation.

## gradient
Now, at long last, the first tree is complete. Since we have built the first tree, we can make new predictions. And just like gradient boost,xgboost makes new predictions by starting with the initial prediction and adding the output of the tree scaled by a learning rate.Xgboost calls the learning rate,$\eta$, and the default value is 0.3.
Thus, the new predicted value for this observation, with $dosage = 10$, is the original prediction, 0.5, puls the learning rate $\eta$, 0.3, times output value, -10.5, and that gives us -2.65. and we see the new residual is smaller than before, so we've taken a small step in the right direction.
![](./alg_tree_xgboost_regression/13.png)
Now we build another tree based on the new residuals and make new predictions that give us even smaller residuals and then build another tree based on the newest rediduals and we keep building trees until the residuals are super small, or we have reached the maximum number.
![](./alg_tree_xgboost_regression/14.png)



refs:
https://www.youtube.com/watch?v=OtD8wVaFm6E





