# 分组定义
分组是用圆括号“()”括起来的正则表达式，匹配出的内容就表示一个分组。

1. 序号分组`(exp)`: 把括号内的正则作为一个分组，系统自动分配组号，可以通过分组号引用该分组, 比如 `\1`,`\2`.
2. 命名分组`(?P<name>exp)`: 定义一个命名分组，系统为该分组分配分组号，可以通过分组名或分组号引用该分组；
3. 不捕获分组`(?:exp)` ：定义一个不捕获分组，该分组只在当前位置匹配文本，在该分组之后，无法引用该分组，因为该分组没有分组名，没有分组号，也不会占用分组编号；


# 分组引用
引用分组的目的是对重复出现的文本进行匹配，注意，不是出现重复的模式，而是出现重复的文本。由于分组有编号和名称，因此，可以通过名称和编号来引用前面已经出现的分组。

正则表达式中，可以通过分组名或分组号来引用：
1. `\n`：使用分组的编号来引用分组，分组按照正则表达式中出现的顺序编号1、2、3、... `(\w+)\1`等价于`(\w+)(\w+)`, 也就是是`\1`表示第一个分组`(\w+)`
2. `(?P=name)`：引用名称为name的分组, `(?P<word>\w+)(?P=word)`等价于`(\w+)(\w+)`, 也就是`(?P=word)`表示组名为`word`的`(?P<word>\w+)`


# python引用分组结果
在python中, 正则表达式匹配的结果, 是`re.Match`对象, 需要通过`group()`方法来获取最终的字符串.

## group()
获取序号分组的结果:
- `group()`默认参数是`0`, 即`group(0)`就是匹配正则表达式整体结果
- `group(1)` 列出第一个括号匹配部分，`group(2)` 列出第二个括号匹配部分，`group(3)` 列出第三个括号匹配部分。


```python
import re
a = "123abc456"
re.search("([0-9]*)([a-z]*)([0-9]*)",a).group(0)   #123abc456,返回整体
re.search("([0-9]*)([a-z]*)([0-9]*)",a).group(1)   #123
re.search("([0-9]*)([a-z]*)([0-9]*)",a).group(2)   #abc
re.search("([0-9]*)([a-z]*)([0-9]*)",a).group(3)   #456
```
## groupdict()
获取命名分组的结果
```python
m = re.match(r'(?P<user>\w+)@(?P<website>\w+)\.(?P<extension>\w+)','myname@hackerrank.com')
m.groupdict()
{'website': 'hackerrank', 'user': 'myname', 'extension': 'com'}
```



## groups()
它返回一个包含所有匹配子群的元组。
```python
m = re.match(r"(\d+)\.(\d+)", "24.1632")
m.groups()
# ('24', '1632')
```

# 分组序号
在正则表达式中，分组编号是自动进行的。当使用圆括号表示分组时，从正则表达式的左边开始看，看到的第一个左括号 “(” 表示第一个分组，第二个 "(" 表示第二个分组，依次类推，需要注意的是，有一个隐含的全局分组（分组编号是0），就是整个正则表达式。
```python
import re

str = 'abcabcabcabcdedede'
result = re.match('((abc)+)((de)+)', str)
print(result.group(1))  # abcabcabcabc
print(result.group(2))  # abc
print(result.group(3))  # dedede
print(result.group(4))  # de
```


# 应用

## 有条件的筛选
```python
# 将整个字符串用字符串某个部分替换
re.sub(r'\d\d(\d)\d', r'\1' ,'2131')
```


## 字符串对换位置
```python
import re
# 替换时间格式 01/11/2021 替换成 2021/01/11
s = "today is 09-12-2021"
day = re.sub(r'(\d{2})-(\d{2})-(\d{4})', r'\3-\2-\1', s)
print(day) # today is 2021-12-09

# 也可以用g<3>-g<2>-g<1>
day2 = re.sub(r'(\d{2})-(\d{2})-(\d{4})', r'g<3>-g<2>-g<1>', s)
print(day) # today is 2021-12-09
```



参考:
https://www.cnblogs.com/ljhdo/p/10678281.htm
[本段参考](https://blog.csdn.net/chr1991/article/details/80945455)