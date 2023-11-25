
`match(pattern, string, flags=0)` 用正则表达式匹配字符串 成功返回匹配对象 否则返回None
`search(pattern, string, flags=0)` 搜索字符串中第一次出现正则表达式的模式 成功返回匹配对象 否则返回None

参数:
参数|描述
--|--
pattern|匹配的正则表达式
string|要匹配的字符串。
flags|标志位，用于控制正则表达式的匹配方式，如：是否区分大小写，多行匹配等等。

返回:
`re.Match`对象, 使用`re.Match.group()`来获得最终的匹配的字符串



# re.match与re.search的区别
re.match只匹配字符串的开始，如果字符串开始不符合正则表达式，则匹配失败，函数返回None；而re.search匹配整个字符串，直到找到一个匹配。
```python
import re
re.match('super', 'superstition').span()  # (0, 5)
re.match('super','insuperable')  # None
re.search('super','superstition').span()  # (0, 5)
re.search('super','insuperable').span()  # (2, 7)
```

参考:
https://www.cnblogs.com/thankcat/p/17121194.html