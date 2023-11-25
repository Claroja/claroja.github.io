# rec_design





offline:
feature engineering
representation learning

online:


`Candidate retrieval` is a fast—but coarse—step to narrow down millions of items into hundreds of candidates(e.g., from millions to hundreds, a 99.99% reduction). 
Most contemporary retrieval methods:

    - APPROXIMATE NEAREST NEIGHBORS
    - graphs (DoorDash) 
    - decision trees (LinkedIn)

`Ranking` is a slower—but more precise—step to score and rank top candidates. Such features include item and user data, and contextual information. We can also use more sophisticated models with more layers and parameters.

    - learning-to-rank 
    - classification task
    - deep learning
        - final output layer is either a softmax over a catalog of items
        - a sigmoid predicting the likelihood of user interaction (e.g., click, purchase) for each user-item pair.

refs:
https://eugeneyan.com/writing/system-design-for-discovery/
[APPROXIMATE NEAREST NEIGHBORS](https://zhuanlan.zhihu.com/p/454511736)
https://upcommons.upc.edu/bitstream/handle/2099.1/16121/85330.pdf?sequence=1&isAllowed=y