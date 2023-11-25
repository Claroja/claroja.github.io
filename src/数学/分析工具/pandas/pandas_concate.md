# concate

横向合并表优先考虑使用`Merge`, 备选使用`join`和`concat`
纵向合并表优先考虑使用`concat`, 备选使用`append`

## 方法的解释
1. `Concat` gives the flexibility to join based on the axis( all rows or all columns)
2. `Append` is the specific case(axis=0, join='outer') of concat (being deprecated use concat)
3. `Join` is based on the indexes (set by set_index) on how variable =['left','right','inner','couter']
4. `Merge` is based on any particular column each of the two dataframes, this columns are variables on like 'left_on', 'right_on', 'on'

## 数据准备
```python
df1 = pd.DataFrame(
    {
        "A": ["A0", "A1", "A2", "A3"],
        "B": ["B0", "B1", "B2", "B3"],
        "C": ["C0", "C1", "C2", "C3"],
        "D": ["D0", "D1", "D2", "D3"],
    },
    index=[0, 1, 2, 3],
)

df2 = pd.DataFrame(
    {
        "B": ["B2", "B3", "B6", "B7"],
        "D": ["D2", "D3", "D6", "D7"],
        "F": ["F2", "F3", "F6", "F7"],
    },
    index=[2, 3, 6, 7],
)
```

## 横向合并
Merge method|SQL Join Name|Description
--|--|--
left|LEFT OUTER JOIN|Use keys from left frame only
right|RIGHT OUTER JOIN|Use keys from right frame only
outer|FULL OUTER JOIN|Use union of keys from both frames
inner|INNER JOIN|Use intersection of keys from both frames
cross|CROSS JOIN|Create the cartesian product of rows of both frames

### left

#### 按column
1. `B0,B1`在右表中查询不到, 所以`D_y,F`为`NaN`
2. `D_x`是左表的`D`列, `D_y`是右表的`D`列
```python
pd.merge(left, right, how="left", on="B")
##     A   B   C D_x  D_y    F
## 0  A0  B0  C0  D0  NaN  NaN
## 1  A1  B1  C1  D1  NaN  NaN
## 2  A2  B2  C2  D2   D2   F2
## 3  A3  B3  C3  D3   D3   F3
```

#### 按index
```python
pd.merge(left, right, how="left",left_index=True, right_index=True)
left.join(right,how="left",lsuffix='_x', rsuffix='_y')  # 等价
##     A B_x   C D_x  B_y  D_y    F
## 0  A0  B0  C0  D0  NaN  NaN  NaN
## 1  A1  B1  C1  D1  NaN  NaN  NaN
## 2  A2  B2  C2  D2   B2   D2   F2
## 3  A3  B3  C3  D3   B3   D3   F3
```


### right
#### 按column
1. `B6,B7`在左表中查询不到, 所以`D_y,F`为`NaN`
2. `D_x`是左表的`D`列, `D_y`是右表的`D`列
```python
pd.merge(left, right, how="right", on="B")
##      A   B    C  D_x D_y   F
## 0   A2  B2   C2   D2  D2  F2
## 1   A3  B3   C3   D3  D3  F3
## 2  NaN  B6  NaN  NaN  D6  F6
## 3  NaN  B7  NaN  NaN  D7  F7
```


#### 按index
```python
pd.merge(left, right, how="right",left_index=True, right_index=True)
left.join(right,how="right",lsuffix='_x', rsuffix='_y')  # 等价
##      A  B_x    C  D_x B_y D_y   F
## 2   A2   B2   C2   D2  B2  D2  F2
## 3   A3   B3   C3   D3  B3  D3  F3
## 6  NaN  NaN  NaN  NaN  B6  D6  F6
## 7  NaN  NaN  NaN  NaN  B7  D7  F7


```

### outer

#### 按column
```python
pd.merge(left, right, how="outer", on="B")
pd.concat([left,right], ignore_index=True, join = "outer",axis=1) # 等价
##      A   B    C  D_x  D_y    F
## 0   A0  B0   C0   D0  NaN  NaN
## 1   A1  B1   C1   D1  NaN  NaN
## 2   A2  B2   C2   D2   D2   F2
## 3   A3  B3   C3   D3   D3   F3
## 4  NaN  B6  NaN  NaN   D6   F6
## 5  NaN  B7  NaN  NaN   D7   F7
```

#### 按index
```python
pd.merge(left, right, how="outer",left_index=True, right_index=True)
left.join(right,how="outer",lsuffix='_x', rsuffix='_y')
##      A  B_x    C  D_x  B_y  D_y    F
## 0   A0   B0   C0   D0  NaN  NaN  NaN
## 1   A1   B1   C1   D1  NaN  NaN  NaN
## 2   A2   B2   C2   D2   B2   D2   F2
## 3   A3   B3   C3   D3   B3   D3   F3
## 6  NaN  NaN  NaN  NaN   B6   D6   F6
## 7  NaN  NaN  NaN  NaN   B7   D7   F7
```


### inner
#### 按column
```python
pd.merge(left, right, how="inner", on="B")
pd.concat([left,right], ignore_index=True, join = "inner",axis=1)  # 等价
##     A   B   C D_x D_y   F
## 0  A2  B2  C2  D2  D2  F2
## 1  A3  B3  C3  D3  D3  F3
```

#### 按索引
```python
pd.merge(left, right, how="inner",left_index=True, right_index=True)
left.join(right,how="inner",lsuffix='_x', rsuffix='_y')  # 等价
##     A B_x   C D_x B_y D_y   F
## 2  A2  B2  C2  D2  B2  D2  F2
## 3  A3  B3  C3  D3  B3  D3  F3
```


### cross
```python
pd.merge(left, right, how="cross")
##      A B_x   C D_x B_y D_y   F
## 0   A0  B0  C0  D0  B2  D2  F2
## 1   A0  B0  C0  D0  B3  D3  F3
## 2   A0  B0  C0  D0  B6  D6  F6
## 3   A0  B0  C0  D0  B7  D7  F7
## 4   A1  B1  C1  D1  B2  D2  F2
## 5   A1  B1  C1  D1  B3  D3  F3
## 6   A1  B1  C1  D1  B6  D6  F6
## 7   A1  B1  C1  D1  B7  D7  F7
## 8   A2  B2  C2  D2  B2  D2  F2
## 9   A2  B2  C2  D2  B3  D3  F3
## 10  A2  B2  C2  D2  B6  D6  F6
## 11  A2  B2  C2  D2  B7  D7  F7
## 12  A3  B3  C3  D3  B2  D2  F2
## 13  A3  B3  C3  D3  B3  D3  F3
## 14  A3  B3  C3  D3  B6  D6  F6
## 15  A3  B3  C3  D3  B7  D7  F7
```

## 纵向拼贴
1. axis控制拼贴的方向
    ```python
    pd.concat([df1, df2], ignore_index=False,axis=0)
    """
        A   B    C   D    F
    0   A0  B0   C0  D0  NaN
    1   A1  B1   C1  D1  NaN
    2   A2  B2   C2  D2  NaN
    3   A3  B3   C3  D3  NaN
    2  NaN  B2  NaN  D2   F2
    3  NaN  B3  NaN  D3   F3
    4  NaN  B6  NaN  D6   F6
    5  NaN  B7  NaN  D7   F7
    """
    ```

2. `ignore_index`相当于合并后进行`reset_index()`, 重新生成索引
    ```python
    pd.concat([df1, df2], ignore_index=True,axis=0)
    """
        A   B    C   D    F
    0   A0  B0   C0  D0  NaN
    1   A1  B1   C1  D1  NaN
    2   A2  B2   C2  D2  NaN
    3   A3  B3   C3  D3  NaN
    4  NaN  B2  NaN  D2   F2
    5  NaN  B3  NaN  D3   F3
    6  NaN  B6  NaN  D6   F6
    7  NaN  B7  NaN  D7   F7
    """
    ```

3. `inner`
    ```python
    pd.concat([df1, df2], ignore_index=True,join="inner",axis=0)
    """
        B   D
    0  B0  D0
    1  B1  D1
    2  B2  D2
    3  B3  D3
    4  B2  D2
    5  B3  D3
    6  B6  D6
    7  B7  D7
    """
    ```

4. 拼贴Series
    ```python
    s = pd.Series(["X0", "X1", "X2", "X3"], index=["A", "B", "C", "D"])
    """
    A    X0
    B    X1
    C    X2
    D    X3
    """

    pd.concat([df1, s.to_frame().T], ignore_index=True)
    """
        A   B   C   D
    0  A0  B0  C0  D0
    1  A1  B1  C1  D1
    2  A2  B2  C2  D2
    3  A3  B3  C3  D3
    4  X0  X1  X2  X3
    """
    ```


## repeat rows

```python
import pandas as pd
df = pd.DataFrame({
    "a":[1,2,3,4,5],
    "b":[6,7,8,9,10]
})

pd.concat([df,*([df[df["b"] == 9]] *10)])
```

参考:
https://pandas.pydata.org/docs/user_guide/merging.html#concatenating-objects
https://pandas.pydata.org/docs/user_guide/merging.html#database-style-dataframe-or-named-series-joining-merging
