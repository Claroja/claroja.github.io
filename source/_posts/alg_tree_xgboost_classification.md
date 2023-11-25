
The very first step in fitting xgboost to the training data is to make an initial prediction.This prediction can be anything, by default it is 0.5, regardless of whether you are using xgboost for regression or classification.In other words, regardless of the dosage, the default prediction is that there is a 50% chance the drug is effective.
[1.png](1.png)
Now, just like we did for regression, we fit an xgboost tree to the residuals, however, since we are using xgboost for classification, we have a new formula for the similarity scores.
$$Similarity = \frac{(\sum Rusiduals_i)^2}{\sum (PreviousProbability_i * (1-PreviousProbability_i))^2+\lambda} $$



# cover
xgboost also has a threshold for the minimum number of residuals in each leaf. The minimum number of residuals in each leaf is determined by calculating something called `cover`.
Cover is defined as the denominator of the Similarity Score minus $\lambda$.

$$ \sum (PreviousProbability_i * (1-PreviousProbability_i)) $$

In contrast, when xgboost is used for regression and we are using this formula for the similarity score then cover is equal to
$$ NumberOfResiduals $$
By default, the minimum value for cover is 1. Thus, by default, when we use xgboost for regression, we can have as few as 1 residual per leaf.
In other words, when we use xgboost for regression and use the default minimum value for cover, cover has no effect on how we grow the tree.In contrast, things are way more complicated when we use xgboost for classification because cover depends on the previously predicted probability of each residual in a leaf.
For example, the cover for this leaf is:
$$ cover = 0.5 * (1-0.5)  = 0.25 $$ 
And since the default value for the minimum cover is 1, xgboost would not allow this leaf.
[2.png](2.png)
for teaching, let's set the minimum value for $cover = 0$.

# predict
However, just like with unextreme gradient boost for classification, we need to convert this probability to a `log(odds)` value.
$$ odds = \frac{p}{1-p} $$
$$ log(odds) = log(\frac{p}{1-p}) $$ 

in this case we plug in $p=0.5$
$$ log(odds) = log(\frac{p}{1-p}) = log(\frac{0.5}{1-0.5})=0 $$

Now, just like unextreme gradient boost for classification, we add the `log(odds)` of the initial prediction to the output of the tree, scaled by a learning rate. xgboost calls the learning rate $\eta$ and the default value is 0.3, so that's what we'll use.
Thus, the new predicted value for this observation, with $dosage = 2$, is the log(odds) of original prediction,0,plus the learning rate $\eta$, 0.3, times the output value, -2, and that gives us a `log(odds)` value = -0.6. To convert a `log(odds)` value into a probability, we plug it into the Logistic Function.
$$ Probability = \frac{e^{log(odds)}}{1+e^{log(odds)}}  = 0.35$$

the new residual is smaller than before(0.5), so we have taken a small step in the right direction.
[3.gif](3.gif)


refs:
https://www.youtube.com/watch?v=8b1JEDvenQU