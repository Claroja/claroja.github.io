Python 的 re 模块提供了re.sub用于替换字符串中的匹配项，sub是substitute表示替换。
语法:
`sub(pattern, repl, string, count=0, flags=0)`
参数:
参数|描述
--|--
pattern|该参数表示正则中的模式字符串；
repl|如果是字符串，则处理其中的反斜杠转义。如果是match对象，并且必须返回要使用的替换字符串
string|该参数表示要被处理（查找替换）的原始字符串；
count|可选参数，表示是要替换的最大次数，而且必须是非负整数，该参数默认为0，即所有的匹配都会被替换；
flags|可选参数，表示编译时用的匹配模式（如忽略大小写、多行模式等），数字形式，默认为0。


# 应用
1. 普通替换
```python
import re
#替换s中的hello为123,
s = "hello,world!!!"
print(re.sub(r'hello', r"123", s))
#123,world!!!
```

2. 分组替换
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

3. repl传函数
```python
import re

def fun(m):
    return m.group(1).title()+' '+m.group(2).title()  #首字符大写
str1='hello world ~~~~~~~~~'
str1=re.sub(r"(\w+) (\w+)",fun,str1)
print(str1)
# Hello World ~~~~~~~~~
```

4. count替换次数
```python
import re

# 替换字符串中的空格为123，只替换一次
s = "We are happy"
print(re.sub(" ", "123", s, count=1))
# We123are happy
```

5. subn方法使用
```python
# 替换字符串中的空格为123
s = "We are happy"
print(re.subn(" ", "123", s)) 
#('We123are123happy', 2)
```

参考:
https://www.cnblogs.com/lvhuayan/p/15260375.html