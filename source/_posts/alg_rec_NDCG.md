NDCG: Normalized Discounted Cumulative Gain(归一化折损累计增益)

# dataset

item|relevance
--|--
A|0.5
B|0.9
C|0.3
D|0.6
E|0.1

# G
Gain represents the score of item relevance to a query. 

$$ G = rel(i) $$
where $i$ is the Id of a item, and $rel(i)$ is labeled by person.

# CG
Cumulative Gain represents the result of cumulative of all the `Gain` of the items.

$$ CG_k = \sum_{i=1}^{k}rel(i) $$

note that `CG` only consider the cumulative of quantity into account, excluding the position of the items

eg:

if return $[A,B,C,D,E]$, then $CG_1 = 0.5+0.9+0.3+0.6+0.1=2.4$
if return $[D,A,E,C,B]$, then $CG_2 = 0.6+0.5+0.1+0.3+0.9=2.4$

it is nothing about rank.

# DCG
DCG considers the rank into account that make the top-ranked item gain higher and discount the bottom-ranked item.

$$ DCG_k=\sum_{i=1}^{k}\frac{rel(i)}{log_2{(i+1)}} $$

DCG use the $log_2(i+1) as denominator, the bigger $i$ is, the bigger $log_2(i+1)$$ is, and the bigger discount is.

eg:
as above, if return $[A,B,C,D,E]$:

i|$rel(i)$|$log(i+1)$|$rel(i)/log(i+1)$
--|--|--|--
1 = A|0.5|1|0.5
2 = B|0.9|1.59|0.57
3 = C|0.3|2|0.15
4 = D|0.6|2.32|0.26
5 = E|0.1|2.59|0.04

if return $[D,A,E,C,B]$:

i|$rel(i)$|$log(i+1)$|$rel(i)/log(i+1)$
--|--|--|--
1 = D|0.6|1|0.6
2 = A|0.5|1.59|0.31
3 = E|0.1|2|0.05
4 = C|0.3|2.32|0.13
5 = B|0.9|2.59|0.35

$DCG_1= 0.5+0.57+0.15+0.26+0.04=1.52$
$DCG_2= 0.6+0.31+0.05+0.13+0.35=1.44$

DCG_1 > DCG_2, $[A,B,C,D,E]$ is more effcient than $[D,A,E,C,B]$


# NDCG(Normalized DCG)

## IDGC(ideal DCG)
IDGC is the best rank, eg: $[B,D,A,C,E]$

i|$rel(i)$|$log(i+1)$|$rel(i)/log(i+1)$
--|--|--|--
1 = B|0.9|1|0.9
2 = D|0.6|1.59|0.38
3 = A|0.5|2|0.25
4 = C|0.3|2.32|0.13
5 = E|0.1|2.59|0.04

$DCG_best = 0.9+0.38+0.25+0.13+0.04=1.7$, of course, $IDCG>DCG_1$ and $IDCG>DCG_2$.

## NDCG
different queries have different results of different length, so we cant evaluate different queries with DCG. The more results a query return, the higher score the query will get. so we should normalize the different queries with NDCG.

$$ NDCG = \frac{DCG}{IDCG}  $$



refs:
https://zhuanlan.zhihu.com/p/448686098