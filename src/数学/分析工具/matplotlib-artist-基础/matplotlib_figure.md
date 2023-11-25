# figure

最高等级的container Artist是`matplotlib.figure.Figure`, 可以使用`matplotlib.pyplot.figure()`来创建.
当添加subplots(`subplots(), add_subplot()`)或axes(`add_axes()`)是, 这些对象会被添加到`Figure.axes`列表中.
```python
fig = plt.figure()
ax1 = fig.add_subplot(211)
ax2 = fig.add_axes([0.1, 0.1, 0.7, 0.3])
ax1  # <AxesSubplot:>
print(fig.axes)  # [<AxesSubplot:>, <matplotlib.axes._axes.Axes object at 0x7f0768702be0>]
```

## 参数
参数|描述
--|--
`num` |`int or str` |`figure`的id
`figsize`|`(float, float)`, 默认`[6.4, 4.8]`, Width, height in inches
`dpi`|`float`, 默认`100.0`, The resolution of the figure in dots-per-inch.
`facecolor`|`color`, 默认`white`, 背景颜色
`edgecolor`|`color`, 默认`white`, 边框颜色


## 返回
```python
class matplotlib.figure.Figure(figsize=None, dpi=None, *, facecolor=None, edgecolor=None, linewidth=0.0, frameon=None, subplotpars=None, tight_layout=None, constrained_layout=None, layout=None, **kwargs)[source]
```



参考:
https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.figure.html
https://matplotlib.org/stable/api/figure_api.html#matplotlib.figure.Figure