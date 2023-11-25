

this task arises in many other applications:

1. Search Engines — Given a user profile (location, age, sex, …) a textual query, sort web pages results by relevance.
2. Recommender Systems — Given a user profile and purchase history, sort the other items to find new potentially interesting products for the user.


Ranking models typically work by predicting a relevance score `s = f(x)` for each input `x = (q, d)` where `q` is a `query` and `d` is a `document`. Once we have the relevance of each document, we can sort (i.e. rank) the documents according to those scores.


The scoring model can be implemented using various approaches:

1. `Vector Space Models` – Compute a vector embedding (e.g. using `Tf-Idf` or `BERT`) for each query and document, and then compute the relevance score `f(x) = f(q, d)` as the cosine similarity between the vectors embeddings of `q` and `d`.
2. `Learning to Rank` – The scoring model is a Machine Learning model that learns to predict a score s given an input `x = (q, d)` during a training phase where some sort of ranking loss is minimized.


# Evaluation

define `inputs`, `outputs` and `loss function`.

1. `Input` – For a query `q` we have `n` documents `D = {d₁, …, dₙ}` to be ranked by relevance. The elements `xᵢ = (q, dᵢ)` are the inputs to our model.
2. `Output` - For a query-document input `xᵢ = (q, dᵢ)`, we assume there exists a true relevance score `yᵢ`. Our model outputs a predicted score `sᵢ = f(xᵢ)`.

# Machine Learning Models to Rank

The choice of the loss function is the distinctive element for Learning to Rank models.

1. Pointwise Methods – The total loss is computed as the sum of loss terms defined on each document `dᵢ` (hence pointwise) as the distance between the predicted score `sᵢ` and the ground truth `yᵢ`, for `i=1…n`. By doing this, we transform our task into a `regression problem`, where we train a model to predict y.

2. Pairwise Methods – The total loss is computed as the sum of loss terms defined on each pair of documents `dᵢ`, `dⱼ` (hence pairwise) , for `i, j=1…n`. The objective on which the model is trained is to predict whether `yᵢ > yⱼ` or not, i.e. which of two documents is more relevant. By doing this, we transform our task into a binary classification problem.

3. Listwise Methods – The loss is directly computed on the whole list of documents (hence listwise) with corresponding predicted ranks. In this way, ranking metrics can be more directly incorporated into the loss.

![img](https://miro.medium.com/max/1400/1*s3CQuNRWcQNkQKd8Met-MA.png)


# Pointwise Methods
The loss directly measures the distance between ground true score yᵢ and predicted sᵢ so we treat this task by effectively solving a regression problem.loss function is `Mean Square Error (MSE)`

shortcomings: we only know which document in a list of documents was chosen by a user (and therefore is more relevant), but we don’t know exactly how relevant is any of these documents!

# Pairwise Methods
## RankNet

given two documents, we want to predict if the first is more relevant than the second. This way we solve a binary classification task where we only need the ground truth `yᵢⱼ (=1 if yᵢ > yⱼ, 0 otherwise)` and we map from the model outputs to probabilities using a logistic function: `sᵢⱼ = σ(sᵢ – sⱼ)`.This approach was first used by `RankNet`, which used a `Binary Cross Entropy (BCE)` loss.


shortcoming:
RankNet is an improvement over pointwise methods, but all documents are still given the same importance during training, while we would want to give more importance to documents in higher ranks (as the DCG metric does with the discount terms).


## LambdaRank
to run Gradient Descent optimization we don’t need a loss function, we only need its gradient! LambdaRank defines the gradients of an implicit loss function so that documents with high rank have much bigger gradients:



# Listwise Methods



refs:
https://towardsdatascience.com/learning-to-rank-a-complete-guide-to-ranking-using-machine-learning-4c9688d370d4
https://queirozf.com/entries/evaluation-metrics-for-ranking-problems-introduction-and-examples
