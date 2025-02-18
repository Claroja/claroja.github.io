# onehot独热编码





## 案例
```python
import pandas as pd
df = pd.DataFrame({'carduser_id': [12345,223432,343424],
                   'gender': ['男','男','女']})
dummies = pd.get_dummies(df)
dummies
#    carduser_id  gender_女  gender_男
# 0        12345         0         1
# 1       223432         0         1
# 2       343424         1         0
```
应该是通过每列的类型自动识别了分类变量, 从而进行one-hot编码
```python
df.dtypes
# carduser_id     int64
# gender         object
# dtype: object
```

## 参考


- https://blog.csdn.net/xiaoyw71/article/details/121981847






