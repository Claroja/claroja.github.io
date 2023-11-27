# evaluate



## dataset

ID| labels_name|labels_num
--|--|--
0|relevant|1
1|irrelevant|0
2|relevant|1
3|irrelevant|0
4|irrelevant|0
5|relevant|1
6|relevant|1
7|irrelevant|0


## precision @k
Precision means: "of all examples I predicted to be TRUE, how many were actually TRUE?"
$precision @k$("Precision at k") is simply Precision evaluated only up to the $k-th$ prediction, i.e.:

$$ Precision@k = \frac{truePositives @k}{(truePositives @k)+(falsePositives @k)}$$


<center>Predicted relevance scores (Sorted)</center>

ID| labels_name|labels_num|predict|k|precision @k
--|--|--|--|--|--
6|relevant|1|0.9|1|1
3|irrelevant|0|0.85|2|0.5
5|relevant|1|0.71|3|0.66
0|relevant|1|0.63|4|0.75
4|irrelevant|0|0.47|5|0.60
2|relevant|1|0.36|6|0.66
1|irrelevant|0|0.24|7|0.57
7|irrelevant|0|0.16|8|0.50

eg: $Precision @4$
$Precision @4$ only takes into account predictions up to $k=4$:

$$ Precision@4 = \frac{truePositives @4}{(truePositives @4)+(falsePositives @4)} = \frac{3}{3+1} = 0.75$$


## Recall @k
Recall means: "of all examples that were actually TRUE, how many I predicted to be TRUE?"

$Recall @k$("Recall at k") is simply Recall evaluated only up to the k-th prediction, i.e.:

$$ Recall@k = \frac{truePositives @k}{(truePositives @k)+(falseNegatives @k)}$$

ID| labels_name|labels_num|predict|k|precision @k
--|--|--|--|--|--
6|relevant|1|0.9|1|0.25
3|irrelevant|0|0.85|2|0.25
5|relevant|1|0.71|3|0.5
0|relevant|1|0.63|4|0.75
4|irrelevant|0|0.47|5|0.75
2|relevant|1|0.36|6|1
1|irrelevant|0|0.24|7|1
7|irrelevant|0|0.16|8|1

eg: $Recall @4$

$$ Recall@k = \frac{truePositives @k}{(truePositives @k)+(falseNegatives @k)} = \frac{3}{3+1}=0.75$$



## $F1 @k$

$F1-score$ (alternatively, F1-Measure), is a mixed metric that takes into account both Precision and Recall.

Similarly to $precision @k$ and $Recall @k$ is a rank-based metric.

$$ F1@k = 2 \cdot \frac{(Precision@k)\cdot(Recall@k)}{(Precision@k)+(Recall@k)} $$

eg: $F1@4$

$$ F1@4 = 2 \cdot \frac{(Precision@4)\cdot(Recall@4)}{(Precision@4)+(Recall@4)} = 2 \cdot \frac{0.75 \code 0.75}{0.75 + 0.75}=0.75$$


## AP: Average Precision
AP(Average Precision) is a metric that tells you how much of the relevant documents are concentrated in the highest ranked predictions.

$$ AP = \sum_k(Recall@k - Recall@k-1) \cdot Precision@k $$

You can calculate the AP using the following algorithm:

CorrectPredictions $\leftarrow 0$
RunningSum $\leftarrow 0$
for $k \leftarrow 1$ to $K$ do
&emsp;if document at rank $k$ is relevant then
&emsp;&emsp;CorrectPredictions $\leftarrow$ CorrectPredictions + 1
&emsp;&emsp;RunningSum $\leftarrow$ RunningSum + $\frac{CorrectPredictions}{k}$
&emsp;end if
end for
AP = $\frac{RunningSum}{TotalNumberOfRelevantDocuments}$


ID| labels_name|labels_num
--|--|--
6|relevant|1
3|irrelevant|0
5|relevant|1
0|relevant|1
4|irrelevant|0
2|relevant|1
1|irrelevant|0
7|irrelevant|0

eg:

- At rank 1:
  - $RunningSum = 0 + \frac{1}{1}=1,CorrectPredictions = 1$
- At rank 2:
  - we don't count when there's a wrong prediction.
- At rank 3:
  - $RunningSum = 1 + \frac{2}{3}=1.8,CorrectPredictions = 2$
- At rank 4:
  - $RunningSum = 1.8 + \frac{3}{4}=2.55,CorrectPredictions = 3$
- At rank 5:
  - we don't count when there's a wrong prediction.
- At rank 6:
  - $RunningSum = 2.55 + \frac{4}{6}=3.22,CorrectPredictions = 4$
- At rank 7:
  - we don't count when there's a wrong prediction.
- At rank 8:
  - we don't count when there's a wrong prediction.

$AP = \frac{RunningSum}{CorrectPredictions}=\frac{3.22}{4}=0.8$

## MAP
AP (Average Precision) is a metric that tells you how a single sorted prediction compares with the ground truth. E.g. AP would tell you how correct a single ranking of documents is, with respect to a single query.

But what if you need to know how your model's rankings perform when evaluated on a whole validation set? After all, it is really of no use if your trained model correctly ranks classes for some examples but not for others.

This is where MAP (Mean Average Precision) comes in. All you need to do is to sum the AP value for each example in a validation dataset and then divide by the number of examples. In other words, take the mean of the AP over all examples.

search phone rank|search phone relevance| search watch rank| search watch relevance
--|--|--|--
1|true|1|false
2|true|2|true
3|false|3|true
4|false|4|false
5|true|5|false
6|false|6|true
7|false|7|true

$AP(1)=(1*1+2/2*1+2/3*0+2/4*0+3/5*1+3/6*0+3/7*0)/3=13/15$
$AP(2)=(0*0+1/2*1+2/3*1+2/4*0+2/5*0+3/6*0+4/7*1)/4=47/84$
$MAP(Q) = \frac{AP(1)+AP(2)}{2}=599/420$


## DCG: Discounted Cumulative Gain
One advantage of DCG over other metrics is that it also works if document relevances are a real number. In other words, when each document is not simply relevant/non-relevant (as in the example), but has a relevance score instead.

$$ DCG@k = \sum_{i=1}^{k}\frac{2^{rel_i}-1}{log_2(i+1)}  $$

where $rel_i$ is the relevance of the document at index $i$. Since we are dealing with binary relevances, $rel_i$ equals 1 if document $i$ is relevant and 0 otherwise.

ID| labels_name|labels_num|DCG@K
--|--|--|--
6|relevant|1|1
3|irrelevant|0|1
5|relevant|1|1.5
0|relevant|1|1.93
4|irrelevant|0|1.93
2|relevant|1|2.29
1|irrelevant|0|2.29
7|irrelevant|0|2.29

## NDCG: Normalized Discounted Cumulative
As you can see in the previous section, DCG either goes up with  or it stays the same. This means that queries that return larger result sets will probably always have higher DCG scores than queries that return small result sets.
A way to make comparison across queries fairer is to normalize the DCG score by the maximum possible DCG at each threshold $k$.

$$ NDCG@k = \frac{DCG@k}{IDCG@k} $$

Where $IDCG@k$ is the best possible value for $DCG@k$,i.e. the value of DCG for the best possible ranking of relevant documents at threshold $k$, i.e.:

$$ IDCG@k = \sum_{i=1}^{relevant doc at k}\frac{2^{rel_i}-1}{log_2(i+1)} $$

eg:
ID| labels_name|labels_num|DCG@K
--|--|--|--
6|relevant|1|1|1|1
3|irrelevant|0|1|1.63|0.61
5|relevant|1|1.5|2.13|0.7
0|relevant|1|1.93|2.56|0.75
4|irrelevant|0|1.93|2.56|0.75
2|relevant|1|2.29|2.56|0.89
1|irrelevant|0|2.29|2.56|0.89
7|irrelevant|0|2.29|2.56|0.89

## DCG & NDCG


label|NDCG
--|--
Returns absolute values	| Returns normalized values
Does not allow comparison between queries| Allows comparison between queries
Cannot be used to gauge the performance of a ranking model on a whole validation dataset | Can be used to measure a model across a full dataset.


refs:
https://queirozf.com/entries/evaluation-metrics-for-ranking-problems-introduction-and-examples
https://www.cnblogs.com/genyuan/p/9788294.html
https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/MSR-TR-2010-82.pdf
https://zhuanlan.zhihu.com/p/448686098