in order to talk about entropy, first we have to understand surprise. In some way, inversely related to probability.In other words, if the probability of something is low, the surprise is high.


# how to calculate surprise.
Because we know there is a type of inverse relationship between probability and surprise ,it's tempting to just use the inverse of probability to calculate surprise.
$$\frac{1}{probability}$$
but it has a problem, if the $p=0$, denominator = 0, we can't calculate this, but log function can:
$$log(\frac{1}{0})=log(1)-log(0) $$
so we use log to solve this problem.
$$\frac{1}{log(probability)}$$

In fancy statistics notation, we say that entropy is the expected value of the surprise.
$$ E(Surprise)= \sum xP(X=x) $$
where $x$ is specific value for surprise, and the $P(X=x)$ is the probability of observing that specific value for surprise.
Now, personally, once I saw the entropy was just the average surprise that we could expect
$$ E(Surprise)= \sum log(\frac{1}{p(x)})p(x) $$
$$ E(Surprise)= -\sum log(p(x))p(x) $$
refs:
https://www.youtube.com/watch?v=YtebGVx-Fxw