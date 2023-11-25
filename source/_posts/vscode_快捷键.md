

# 文件操作
1. 新建文件
- `Ctrl+n`
- `Ctrl+s` 保存时输入文件名
2. 重命名文件
- `Ctrl+b e`跳转到左边的导航
- `F2`重命名文件
- `Ctrl+e g`回到文件编辑器
注意: 关闭vscode默认的`ctrl+w`快捷键, 不然可能会以外关闭编辑器
3. 删除文件
- `Ctrl+b e`跳转到左边的导航
- `Shift + Del`删除文件

4. 搜索文件名
使用vscode快捷键`ctrl+p`进行搜索

# 编辑器(editor)
因为编辑器的英文名是`editor`,所以先导快捷键以`e`开头
快捷键|描述
--|--
`Ctrl + e Enter`| 定位到编辑器
`Ctrl + e h` | 前一个编辑器
`Ctrl + e l` | 后一个编辑器
`Ctrl + e s`|分割编辑器组（分成两组）
`Ctrl+e Ctrl+h`| 前一组编辑器
`Ctrl+e Ctrl+j`| 后一个编辑器
`Ctrl + c`| 复制, 不建议使用yy进行复制, 因为不能在不同的vscode程序中切换
`Ctrl + v`| 粘贴, 不建议使用p进行粘贴, 因为不能在不同的vscode程序中切换 

# 侧边栏(bar)
因为侧边栏的英文是`side bar`, 所以先导快捷键以`b`开头
快捷键|描述
--|--
`Ctrl + b Enter`|定位到侧边栏
`Ctrl + b Ctrl + b`| 侧边栏显示
`Ctrl + b e`| 侧边栏文件
`Ctrl + b g`| 侧边栏git
`Ctrl + b d`| 侧边栏debug

# 文本编辑
## 移动
`Alt`表示移动
`Alt+Shift`表示移动和选择
`Ctrl+Alt+Shift`表示特殊光标动作

一下快捷键根据vim进行操作
快捷键|描述
--|--
`Alt+h,j,k,l`|光标左下上右移动
`Alt+6,4`|光标移动到行最前和最后(模仿vim的shift+6和shift+4)
`Alt+Shift+6,4`|光标移动的行最前最后,并选择
`Alt+Shift+h,j,k,l`|光标左下上右移动并选择
`Ctrl+Alt+Shit+j,k`|光标多行选择
## 查找和替换
2. 单文件搜索和替换文件内容
- 使用vim的搜索和替换
- 使用`Ctrl + F` + `Ctrl+H` 
    - `TAB`來切換搜索和替換
    - `Enter` 下一個搜索結果 `Shift+Enter` 上一個搜索結果

3. 多个文件搜索和替换文件内容
- `Ctrl+Shift+H` 搜索和替換 `Ctrl+Shift+F` 搜索
- `Alt + r` 切換正則表達式
- `TAB` 來切換搜索框和替換框
- `Alt + Enter` 打開搜索結果



#　其他
在vscode中`ctrl + p` 直接输入可以查找文件
在vscode中`ctrl + p` 输入`>`可以查看vscode的命令
