Gradient boosting 是 boosting 的其中一种方法. 所谓 Boosting, 就是将弱分离器 $f_i(X)$ 组合起来形成强分类器 F(X) 的一种方法。
所以 Boosting 有三个要素:

1. A loss function to be optimized: 例如分类问题中用 cross entropy，回归问题用 mean squared error
1. A weak learner to make predictions: 例如决策树
1. An additive model: 将多个弱学习器累加起来组成强学习器，进而使目标损失函数达到极小



两种Gradient boosting: 
1. 通过加入新的弱学习器，来努力纠正前面所有弱学习器的残差，最终这样多个学习器相加在一起用来进行最终预测，准确率就会比单独的一个要高。之所以称为 Gradient，是因为在添加新模型时使用了梯度下降算法来最小化的损失
2. 将多个弱分类器，通过投票的手段来改变各个分类器的权值，使分错的分类器获得较大权值。同时在每一次循环中也改变样本的分布，这样被错误分类的样本也会受到更多的关注。如AdaBoost（Adaptive Boosting）











