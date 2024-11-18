

使用GiniImpurity







## 分类

```python
from sklearn.tree import plot_tree
from sklearn.datasets import load_iris
from sklearn.tree import DecisionTreeClassifier
import matplotlib.pyplot as plt
iris = load_iris()
clf = DecisionTreeClassifier(criterion='entropy').fit(iris.data, iris.target)
plt.figure()
plot_tree(clf, filled=True)
plt.show()
```



## 回归







## 参考
1. https://www.zhihu.com/tardis/bd/art/339380585







