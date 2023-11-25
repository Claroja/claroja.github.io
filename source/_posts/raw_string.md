# 转义
转义字符`\`有两个作用:
1. 将特殊的字符变成普通字符, 比如表字符串的单引号`'`和双引号`"`, 以及转义字符`\`本身
2. 给字符赋予特殊含义




## 转换为普通字符
一些字符是python解释器当成的特殊的字符, 比如单引号`'`, 如果在字符串里直接使用会报错.

```python
print('This string contains a single quote (') character.')
# SyntaxError: invalid syntax
```
这时, 可以使用`\`来讲特殊字符变为普通字符, `\`被称为转义(escape)

```python
print('This string contains a single quote (\') character.')
```


escape|描述
--|--
`\'`|将字符串单引号变成普通字符, `print('\'') # '`
`\"`|将字符串双引号变成普通字符, `print("\"") # "`
`\<newline>`|python编辑器中多行输入
`\\`|将转义字符变成普通字符, `print("\\") # \`

**注意**
`\<newline>`的一个坑
```python
list1 = ["a"\
        "b"]  # ["ab"] 没有加逗号会自动合并成一个字符串
list2 = ["a", \
        "b"]  # ["a","b"]

```


例子:
1. `\<newline>`
```python
print('a\
... b\
... c')
# abc
```

## 赋予特殊含义
Escape Sequence|“Escaped” Interpretation
--|--
`\a`|ASCII Bell (BEL) character, `print("\a")`
`\b`|ASCII Backspace (BS) character, `print("Hello \b World!") # Hello  World!`
`\f`|ASCII Formfeed (FF) character, `print("Hello \f World!") # Hello  World!`
`\n`|ASCII Linefeed (LF) character, `print("Hello \n World!")`
`\N{<name>`}|Character from Unicode database with given `<name>`
`\r`|ASCII Carriage Return (CR) character, `print("Hello \r World!")`
`\t`|ASCII Horizontal Tab (TAB) character, `print("Hello \t World!") # Hello 	 World!`
`\uxxxx`|Unicode character with 16-bit hex value xxxx
`\Uxxxxxxxx`|Unicode character with 32-bit hex value xxxxxxxx
`\v`|ASCII Vertical Tab (VT) character, `print("Hello \v World!") # Hello  World!`
`\ooo`|Character with octal value ooo, `print("\110\145\154\154\157\40\127\157\162\154\144\41") # Hello World!`
`\xhh`|Character with hex value hh, `print("\x48\x65\x6c\x6c\x6f\x20\x57\x6f\x72\x6c\x64\x21") # Hello World!`

例子:
1. `\ooo`八进制ascii码表示
也就是说, 每位小于8的组合, 加上转义字符都有特殊含义:
八进制ascii|十六进制ascii|十进制ascii|ascii
--|--|--|--
`'\0'`|`'\x00'`|`0`|`null`
`'\1'`|`'\x01'`|`1`|`soh`
`'\11'`|`'\x09'`|`9`|`'\t'`
`'\111'`|`'\x49'`|`73`|`'I'`
注意超过八进制的计数范围的数字不会进行转码
```python
print('\97')  # \97
print('\79')  # 9 # `\7`被当成八进制进行了转码
```

注意, 可以在python console中直接观察输入字符串后, 解释器的处理行为:
```python
'\1'  # '\x01' 直接转换成字节
print('\1')  # 空, 因为`\x01`没有办法显示
"\\1"  # '\\1'
print('\\1')  # \1
"\t" # '\t' 转换成字节, 并用ascii码表示
print("\t")  # 制表符
"\d"  # '\\d' 转换成字节码, 由于`\d`不是特殊含义字符, 所以字节码中先用`\\`表示一个`\`, 然后ascii码表示字节
print("\d")  # \d
```





# raw string
字符串前以`r`或`R`开头表示该字符串内的`\`不进行解释.
```python
print('foo\nbar')
# foo
# bar
print(r'foo\nbar')
# foo\nbar
print('foo\\bar')
# foo\bar
print(R'foo\\bar')
# foo\\bar
```

## 应用
在正则表达式中, 定义了一些可以赋予特殊含义的转义字符如:
1. `\w`表示字符
2. `\s`表示空白
3. `\d`表示数字
4. `\b`表示单词的开始和结束
5. `\1`表示分组

其中1,2,3使用普通字符串就可以表示, 但是4,5中的`\b`和`\1`在字符串中有特殊含义, 会先被python解释器转义.这时就需要使用到`raw string`或者给`\`前加`\`进行转义, 既`\\b`和`\\1`

```python
re.search('\w', 'abc') # a
re.search(r'\w', 'abc') # a
re.search('\s', 'a b') # 空
re.search(r'\s', 'a b') # 空
re.search('\d', '123') # 1
re.search(r'\d', '123') # 1
re.search('\bfoo\b', 'bar.foo') # None `\b`被转义成了'\x08'所以无法正常匹配
re.search(r'\bfoo\b', 'bar.foo') # foo , 另一种解法`re.search('\\bfoo\\b','bar.foo')`
re.search('(a)\1','aa') # None `\1`被转义成了`\x01`所以正则无法匹配
re.search(r'(a)\1','aa') # aa, 另一种解法`re.search(r'(a)\\1','aa')`
```
**建议在regex中如果遇到了`\`就使用raw string, 或者无脑对所有字符串都使用raw string, 因为不转义的string和raw string也是一样的.**

一个小问题, 看是不是能真正理解字符串的转义:
```python
re.search('\\\167', 'abc') # a 等价re.search('\w', 'abc'), 因为`\\`被python解释器转义为`\`, 而`\167`是ascii码`w`八进制表示, 下面的同理:
re.search('\\\163', 'a b') # 空
re.search('\\\144', '123') # 1
re.search('\\\142foo\\\142', 'bar.foo') # foo
re.search('(a)\\\61','aa') # aa
```





参考:
https://realpython.com/python-data-types/#strings