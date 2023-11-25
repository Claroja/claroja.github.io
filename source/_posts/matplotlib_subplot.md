在画板(`figure`)中进行布局, 将画板分割成`nrows`行和`ncols`列
# 参数
`matplotlib.figure.Figure.subplots(nrows=1, ncols=1, *, sharex=False, sharey=False, squeeze=True, width_ratios=None, height_ratios=None, subplot_kw=None, gridspec_kw=None)`

参数|描述|例子
--|--|--
nrows=1|指定分割成几行
ncols=1|指定分割成几列
sharex=False|是否共享x轴
sharey=False|是否共享y轴

# 返回
返回多个坐标系`axes`

# 例子

## 创建多个坐标系
下面我们创建了一个2行2列的子图，并在每个子图中显示 4 个不同的图像。
```python
import matplotlib.pyplot as plt
fig = plt.figure()
axs = fig.subplots(2,2)
"""
`fig.subplots(2,2)`返回了一个二维的列表, 每个元素是一个坐标系(axes)
array([[<AxesSubplot: >, <AxesSubplot: >],
       [<AxesSubplot: >, <AxesSubplot: >]], dtype=object)
"""
axs[0][0].plot([1,2,3])
fig.show()
```


# matplotlib.pyplot.subplots
`pyplot.subplots`是`Figure.subplots`快捷方式, 底层执行了:
1. `fig = plt.figure()`
2. `axs = fig.subplots(2,2)`

```python
import numpy as np
import matplotlib.pyplot as plt

# First create some toy data:
x = np.linspace(0, 2*np.pi, 400)
y = np.sin(x**2)

# Create two subplots and unpack the output array immediately
f, (ax1, ax2) = plt.subplots(1, 2, sharey=True)
ax1.plot(x, y)
ax2.scatter(x, y)
```



# subplot_mosaic

```python
fig, axd = plt.subplot_mosaic([['upleft', 'right'],
                               ['lowleft', 'right']], layout='constrained')
axd['upleft'].set_title('upleft')
axd['lowleft'].set_title('lowleft')
axd['right'].set_title('right')
```

参考:
https://matplotlib.org/stable/api/figure_api.html#matplotlib.figure.Figure.subplots
https://matplotlib.org/stable/tutorials/introductory/quick_start.html#working-with-multiple-figures-and-axes