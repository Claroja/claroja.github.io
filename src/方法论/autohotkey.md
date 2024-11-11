


## 输入

### 热键

符号|含义
--|--
`#`|Win(Windows 徽标键)
`!`|Alt
`^`|Ctrl
`+`|Shift



🍐`^j`等价于`Ctrl & j`:
```ahk
#Requires AutoHotkey v2.0
; ^j::MsgBox "My First Script"
Ctrl & j::MsgBox "My First Script"
```

### 热子串
需要再输入法中一起输入
```ahk
#Requires AutoHotkey v2.0
::btw::
{
    MsgBox "You typed btw."
}
```

## 输出
[所有的key列表](https://wyagd001.github.io/v2/docs/lib/Send.htm#keynames)
```ahk
#Requires AutoHotkey v2.0
LCtrl::
{
    Send "{Ctrl down}s{Ctrl up}"  ; 表示发送 CTRL+S
}
```


需要注意特殊符号:
符号|描述
--|--
`!`|发送 Alt 键. 例如, Send "This is text!a" 将发送按键序列 "This is text" 并接着按下 Alt+A. 注意: !A 在某些程序中产生的效果与 !a 不同. 这是因为 !A 表示按下 Alt+Shift+A 而 !a 表示按下 Alt+A. 如果不确定, 请使用小写字母.
`+`|发送 Shift 键. 例如, Send "+abC" 会发送文本 "AbC", 而 Send "!+a" 会按下 Alt+Shift+A.
`^`|发送 Ctrl(Ctrl) 键. 例如, Send "^!a" 会按下 Ctrl+Alt+A, 而 Send "^{Home}" 则发送 Ctrl+Home. 注意: ^A 在某些程序中产生与 ^a 不同的效果. 这是因为 ^A 表示按下 Ctrl+Shift+A 而 ^a 表示按下 Ctrl+A. 如果不确定, 请使用小写字母.
`#`|发送 Win 键(带有 Windows logo 的按键), 因此 Send "#e" 会在按住 Win 键时按下字母 "e".

```ahk
#Requires AutoHotkey v2.0
LCtrl::
{
    Send "{Ctrl down}s{Ctrl up}"  ; 表示发送 CTRL+S
}

```


```ahk
#Requires AutoHotkey v2.0

Alt & h::Send "{Left}"
Alt & l::Send "{Right}"
Alt & k::Send "{Up}"
Alt & j::Send "{Down}"
```




## 参考
- https://wyagd001.github.io/v2/docs/index.htm
- https://github.com/spyoungtech/ahk
