import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as o,e as c}from"./app-SnI5rGHA.js";const t={},a=c(`<h1 id="cache" tabindex="-1"><a class="header-anchor" href="#cache" aria-hidden="true">#</a> cache</h1><h2 id="基础命令" tabindex="-1"><a class="header-anchor" href="#基础命令" aria-hidden="true">#</a> 基础命令</h2><p><code>:help [keyword]</code> 打印命令说明 <code>:e [file]</code> 打开或创建文件 <code>:w</code> 保存文件 <code>:w [filename]</code> 保存指定文件 <code>:wq</code> 保存并退出 <code>:q!</code> 不保存退出</p><h2 id="移动" tabindex="-1"><a class="header-anchor" href="#移动" aria-hidden="true">#</a> 移动</h2><ol><li>上下移动 <code>[n]j</code> 向下移动n行,默认为1行 <code>[n]k</code> 向上移动n行,默认为1行 <code>[n]G</code> 移动到第n行,默认移动到最后一行 <code>gg</code> 移动到第一行</li><li>左右移动 <code>[n]h</code> 向左移动n个字符,默认为1个字符 <code>[n]l</code> 向右移动n个字符,默认为1个字符 <code>^</code>移动到行首 <code>$</code>移动到行尾部 <code>f [char]</code> 移动到行内指定的字母 <code>[n]w</code> 向右移动n个单词,默认为1个单词 <code>[n]b</code> 向左移动n个单词,默认为1个单词</li></ol><p>3.其他 <code>&#39;&#39;</code>移动到上一次的位置</p><h2 id="修改" tabindex="-1"><a class="header-anchor" href="#修改" aria-hidden="true">#</a> 修改</h2><h3 id="常规操作" tabindex="-1"><a class="header-anchor" href="#常规操作" aria-hidden="true">#</a> 常规操作</h3><table><thead><tr><th>目标</th><th>修改</th><th>删除</th><th>复制</th></tr></thead><tbody><tr><td>一个单词</td><td>cw</td><td>dw</td><td>yw</td></tr><tr><td>一行</td><td>cc</td><td>dd</td><td>yy</td></tr><tr><td>到行尾</td><td>c$</td><td>d$</td><td>y$</td></tr><tr><td>到行首</td><td>c0</td><td>d0</td><td>y0</td></tr><tr><td>单个字符</td><td>s</td><td>x</td><td>yl或yh</td></tr></tbody></table><h3 id="多行编辑" tabindex="-1"><a class="header-anchor" href="#多行编辑" aria-hidden="true">#</a> 多行编辑</h3><p><code>ctrl+v</code> 按行选择 <code>v</code> 选择多个文件 <code>V</code> 选择多行文本</p><h3 id="撤销操作" tabindex="-1"><a class="header-anchor" href="#撤销操作" aria-hidden="true">#</a> 撤销操作</h3><p><code>u</code> 撤销上次的操作 <code>ctrl + r</code> 撤销上次的撤销</p><h3 id="插入" tabindex="-1"><a class="header-anchor" href="#插入" aria-hidden="true">#</a> 插入</h3><p><code>i I a A o O r R</code></p><h3 id="合并两行" tabindex="-1"><a class="header-anchor" href="#合并两行" aria-hidden="true">#</a> 合并两行</h3><p><code>J</code></p><h2 id="查找" tabindex="-1"><a class="header-anchor" href="#查找" aria-hidden="true">#</a> 查找</h2><table><thead><tr><th>命令</th><th>描述</th></tr></thead><tbody><tr><td><code>/[keyword]</code></td><td>在光标以下范围查找</td></tr><tr><td><code>?[keyword]</code></td><td>在光标以上范围查找</td></tr><tr><td><code>G ? or gg /</code></td><td>先到行首或行尾实现全文查找</td></tr><tr><td><code>n</code></td><td>查找下一个匹配的对象</td></tr><tr><td><code>N</code></td><td>查找上一个匹配的对象</td></tr></tbody></table><p><strong>tips</strong>: <code>/the</code>会查询包含<code>the</code>三个字母的所有字符 <code>/\\&lt;the</code> 单词首是<code>the</code><code>/the\\&gt;</code> 单词尾部是<code>the</code><code>/\\&lt;the\\&gt;</code> 只查询<code>the</code>不包含<code>there</code> <code>other</code>等 <code>/the&amp;</code> 只查询行末是<code>the</code>的 <code>/^the</code> 只查询行首是<code>the</code>的 <code>/^the&amp;</code> 整行是<code>the</code>的</p><h2 id="替换" tabindex="-1"><a class="header-anchor" href="#替换" aria-hidden="true">#</a> 替换</h2><p><code>:[range]s/from/to/[flags]</code> <code>:{作用范围}s/{目标}/{替换}/{替换标志}</code></p><ol><li><p><code>range</code>:表示作用范围 范围|描述 <code>:%</code>|表示命令作用于全部行 <code>:.</code>|表示当前行 <code>:1,5</code>|表示在1到5行范围内搜索 <code>:1,$</code>|表示当前行到末尾行 <code>:1,$-5</code>|表示当前行到倒数第五行之前 <code>:4</code>|表示在第4行搜索</p></li><li><p><code>s</code>:substitute的缩写,表示替换操作</p></li><li><p><code>from</code>:原始字符</p></li><li><p><code>to</code>:互换后的字符</p></li><li><p><code>[flags]</code> 表示做用范围，默认只替换第一个匹配的,加上<code>g</code>则全部替换 g，global表示全部替换 c，confirm每次替换询问 i, 区分大小写</p></li></ol><h2 id="分屏" tabindex="-1"><a class="header-anchor" href="#分屏" aria-hidden="true">#</a> 分屏</h2><p><code>:bn</code> 切换到下一个打开的文件 <code>:bp</code> 切换到上一个打开的文件 <code>.</code>重复上一步操作, 可以快速切换文件</p><p>ctrl+w s 水平打开一个窗口 ctrl+w v 垂直打开一个窗口 ctrl+w h 跳转到左边的窗口 ctrl+w j 跳转到下面的窗口 ctrl+w k 跳转到上面的窗口 ctrl+w l 跳转到右边的窗口</p><h2 id="折叠" tabindex="-1"><a class="header-anchor" href="#折叠" aria-hidden="true">#</a> 折叠</h2><p><code>zo</code> 打开fold(O pen) <code>zc</code> 关闭fold(C lose) <code>za</code> 打开或关闭fold</p><h2 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode" aria-hidden="true">#</a> vscode</h2><p>//禁用括号自动补全(和vscode本身有重叠)</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;vim.matchpairs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参考: https://www.dazhuanlan.com/loomoo/topics/1022354 https://abp.today/blog/2016/06/14/cvim</p>`,32),r=[a];function h(i,n){return e(),o("div",null,r)}const p=d(t,[["render",h],["__file","vim.html.vue"]]);export{p as default};
