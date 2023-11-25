
# 应用

```python
import matplotlib.pyplot as plt
import numpy as np

# make data:
np.random.seed(3)
x = 0.5 + np.arange(8)
y = np.random.uniform(2, 7, len(x))

# plot
fig, ax = plt.subplots()

ax.bar(x, y, width=1, edgecolor="white", linewidth=0.7)

ax.set(xlim=(0, 8), xticks=np.arange(1, 8),
       ylim=(0, 8), yticks=np.arange(1, 8))

fig.show()
```


# API
`Axes.bar(x, height, width=0.8, bottom=None, *, align='center', data=None, **kwargs)`
## 参数
参数|描述
--|--
`x: float or array-like`| x轴坐标, 对应每个矩形的中心
`height: float or array-like`|y轴坐标, 对应矩形的长度
`width: float or array-like, default: 0.8`|矩形的宽度
`bottom: float or array-like, default: 0`|矩形距离底部的距离
`align: {'center', 'edge'}, default: 'center'`|对齐方式, 默认是中心

## 返回
返回`BarContainer`对象, 包含了所有的bar对象

参考:
https://matplotlib.org/stable/plot_types/basic/bar.html