alg_rec_notes


# 类型1
## [A systematic review and research perspective on recommender systems](https://journalofbigdata.springeropen.com/articles/10.1186/s40537-022-00592-5)
[(PDF)A systematic review and research perspective on recommender systems](https://journalofbigdata.springeropen.com/track/pdf/10.1186/s40537-022-00592-5.pdf)



This paper aims to undergo a systematic review on various recent contributions in the domain of recommender systems.

Recommender systems primarily aim to reduce the user’s effort and time required for searching relevant information over the internet.

In essence, recommender systems deal with two entities—users and items, where each user gives a rating (or preference value) to an item (or product).




- `Content-based recommender system`
In content-based recommender systems, all the data items are collected into different item profiles based on their description or features.
approach: linear similarity, cosine similarity, embedding


- `Collaborative filtering-based recommender system`
Collaborative approaches make use of the measure of similarity between users.

  - `Memory-based collaborative`
    - In the `user-based` approach, the user rating of a new item is calculated by finding other users from the user neighbourhood who has previously rated that same item. 
    - In the `item-based` approach, an item-neighbourhood is built consisting of all similar items which the user has rated previously.
  
  - `Model-based`
        Model-based systems use various data mining and machine learning algorithms to develop a model for predicting the user’s rating for an unrated item. 
        approach: Matrix factorization, K-Means Clustering, Decision Tree, Bayesian Net Work, SVM, ANN

- `Hybrid filtering`
A hybrid technique is an aggregation of two or more techniques employed together for addressing the limitations of individual recommender techniques.


## [Recommender Systems: Behind the Scenes of Machine Learning-Based Personalization](https://www.altexsoft.com/blog/recommender-system-personalization/)

## [Understanding Recommendation Systems: Using Various Filtering Techniques](https://www.mariogerard.com/recommendation-systems-filtering-techniques/)

`Demographic Recommendation systems`
These systems take all available demographic information like gender, age, education, profession, occupation, race, ethnicity, income level, location.


`Knowledge-Based Recommendation Systems`
Knowledge-based recommendation systems take into account the explicit knowledge of a variety of user preferences and criteria to make recommendations.Take for example recommending houses for a user, the system would need to take into account a vast combination of attributes of houses as well as user preferences to make recommendations.


`Community-Based Recommendation Systems`
This is a system that gets recommendations from your friends and people you follow.



## [Recommendation System Algorithms: An Overview](https://www.kdnuggets.com/2017/08/recommendation-system-algorithms-overview.html)

## [Basic Concepts and Architecture of a Recommender System](https://www.alibabacloud.com/blog/basic-concepts-and-architecture-of-a-recommender-system_596642)

## [How to build Recommender System using Machine Learning?](https://www.enjoyalgorithms.com/blog/recommender-system-using-machine-learning)

## [Implementing an Enterprise Recommendation System](https://towardsdatascience.com/implementing-an-enterprise-recommendation-system-89dd439db444)


## [Next Generation Recommender Systems Overview](https://www.xenonstack.com/blog/recommender-systems)

## [Amazon's Product Recommendation System In 2021: How Does The Algorithm Of The eCommerce Giant Work?](https://recostream.com/blog/amazon-recommendation-system)

# tec

## [How to Build a Deep Learning Powered Recommender System, Part 2](https://developer.nvidia.com/blog/how-to-build-a-winning-recommendation-system-part-2-deep-learning-for-recommender-systems/)

[Neutral Collaborative Filtering](https://github.com/NVIDIA/DeepLearningExamples/tree/master/TensorFlow/Recommendation/NCF)
[VAE-CF](https://github.com/NVIDIA/DeepLearningExamples/tree/master/TensorFlow/Recommendation/VAE-CF)
[Wide and Deep](https://github.com/NVIDIA/DeepLearningExamples/tree/master/TensorFlow2/Recommendation/WideAndDeep)
[How to Build a Winning Recommendation System, Part 1](https://developer.nvidia.com/blog/how-to-build-a-winning-recommendation-system-part-1/)




## [Deep Neural Networks for YouTube Recommendations](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/45530.pdf)
## [Design and development of a video-streaming recommendation system](https://aaltodoc.aalto.fi/bitstream/handle/123456789/40879/master_Elguero_Tejera_Jaime_2019.pdf?sequence=1&isAllowed=y)

## [An introduction to the most popular recommendation system algorithms](https://www.digitalscaler.eu/blog/digital-data/how-do-recommendation-systems-work/)

## [Inside Spotify’s Recommender System: A Complete Guide to Spotify Recommendation Algorithms](https://www.music-tomorrow.com/blog/how-spotify-recommendation-system-works-a-complete-guide-2022)

# python
## [Deploying a recommender system for the movie-lens dataset – Part 1](https://blog.codecentric.de/en/2019/07/recommender-system-movie-lens-dataset/)

## [Recommendation System Tutorial with Python using Collaborative Filtering](https://pub.towardsai.net/recommendation-system-in-depth-tutorial-with-python-for-netflix-using-collaborative-filtering-533ff8a0e444)

## [YouTube Recommendation System – Machine Learning Project with Source Code](https://data-flair.training/blogs/youtube-video-recommendation-system-ml/)

## [The anatomy of high-performance recommender systems – Part IV](https://www.algolia.com/blog/ai/the-anatomy-of-high-performance-recommender-systems-part-iv/)

## [Recommender Systems through Collaborative Filtering](https://www.dominodatalab.com/blog/recommender-systems-collaborative-filtering)