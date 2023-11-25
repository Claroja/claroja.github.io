
## hexo markdown渲染器对比
Hexo使用MD渲染器将markdown文档渲染成html, 常用的渲染器有: hexo-renderer-marked，hexo-renderer-kramed， hexo-renderer-pandoc， hexo-renderer-markdown-it， hexo-renderer-markdown-it-plus.

- [hexo-renderer-marked](https://github.com/hexojs/hexo-renderer-marked): Hexo默认的Markdown的渲染器, 不支持Mathjax，不支持插件扩展，不支持emoji表情, 功能最弱, 速度也满
- [hexo-renderer-kramed](https://github.com/sun11/hexo-renderer-kramed): 基于hexo-renderer-marked二次开发的渲染器，完善了对Mathjax的支持，仍然不支持插件的扩展，不支持emoji表情
- [hexo-renderer-pandoc](https://github.com/wzpan/hexo-renderer-pandoc): 与hexo-renderer-marked类似，支持Mathjax语法，不仅可以渲染markdown，还支持textile，reStructedText和许多其他格式，仍然不支持emoji表情；内建的汇总文件db.json将来可能会非常大，同步到 Github 可能会比较慢，博客内建的搜索功能也可能会变得非常慢
- [hexo-renderer-markdown-it](https://github.com/hexojs/hexo-renderer-markdown-it): 支持Mathjax语法（支持不太好），支持Markdown以及CommonMark语法，渲染速度比hexo-renderer-marked快，支持插件配置，支持标题带安全的id信息，支持脚注（上标，下标，下划线）
- [hexo-renderer-markdown-it-plus](https://github.com/CHENXCHEN/hexo-renderer-markdown-it-plus): 支持Katex插件并默认启用，默认启用插件列表：markdown-it-emoji，markdown-it-sub，markdown-it-sup，markdown-it-deflist，markdown-it-abbr，markdown-it-footnote，markdown-it-ins，markdown-it-mark，@iktakahiro/markdown-it-katex，markdown-it-toc-and-anchor

最优选择是hexo-renderer-markdown-it-plus.


## hexo-renderer-markdown-it-plus


名称|描述|语法|示例
--|--|--|--
markdown-it-abbr|悬停注释, 如简写全称,英文翻译等|`*[HTML]: 超文本标记语言`|HTML
markdown-it-emoji|表情, 不建议, 使用输入法直接输入|:)|😃
markdown-it-footnote|脚注|`参考文献[^1]`|参考文献[^1]
markdown-it-ins|下划线|`++下划线++`|++下划线++
markdown-it-mark|突出显示|`==标记==`|==标记==
markdown-it-sub|下标|`H~2~O`|H~2~O
markdown-it-sup|上标|`X^2^`|H~2~O
markdown-it-checkbox|复选框|`未选：- [ ]选中：- [x]`|未选：- [ ]选中：- [x]
markdown-it-katex|数学渲染|`$\frac{a}{b}$`|$\frac{a}{b}$
markdown-it-toc-and-anchor|增加目录|


*[HTML]: 超文本标记语言
[^1]: 参考文献内容


## 参考:
- [Hexo的多种Markdown渲染器对比分析](https://bugwz.com/2019/09/17/hexo-markdown-renderer/)
- [hexo-renderer-markdown-it](https://blog.csdn.net/qq_42951560/article/details/123596899)
- [hexo-renderer-markdown-it 插件](https://www.jianshu.com/p/588ab3d22eb8)
- [论文中的引用与注释详解](https://www.sohu.com/a/416834350_120846753)