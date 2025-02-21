import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,e as d}from"./app-jdLxCr9I.js";const s={},c=d(`<h1 id="command" tabindex="-1"><a class="header-anchor" href="#command" aria-hidden="true">#</a> command</h1><h2 id="cp" tabindex="-1"><a class="header-anchor" href="#cp" aria-hidden="true">#</a> cp</h2><p>复制文件和文件夹</p><p>cp的语法结构 cp [OPTION] SOURCE DIRECTORY 例子: <code>cp -r --parents ./code ./temp</code></p><ol><li><code>-r</code>递归复制</li><li><code>-t</code>目标文件, 命令也可以写成<code>cp -t DIRECTORY SOURCE</code></li><li><code>--parents</code> 以SOURCE为根节点, 将路径也一起复制进来</li></ol><h2 id="grep" tabindex="-1"><a class="header-anchor" href="#grep" aria-hidden="true">#</a> grep</h2><p><code>Global Regular Expression Print</code>, 在文本中搜索, 依次处理文件的每一行, 返回匹配模式所在的行</p><ul><li><code>E</code> 开启正则表达式</li><li><code>v</code> 反向查找, 将未匹配到的展示出来</li></ul><h2 id="awk" tabindex="-1"><a class="header-anchor" href="#awk" aria-hidden="true">#</a> awk</h2><p>它依次处理文件的每一行，并读取里面的每一个字段。对于日志、CSV 那样的每行格式相同的文本文件，awk可能是最方便的工具。</p><p>awk的语法结构: <code>awk 动作 文件名</code> 例子: <code>awk -F &#39;,&#39; &#39;{print $0}&#39; demo.txt</code></p><ul><li><code>demo.txt</code>是要处理的文件名, 也可以写成<code>cat demo.txt | awk {print $0}</code></li><li><code>print $0</code> 是每一行要处理的动作, <code>print</code>表示打印, <code>$0</code>表示当前行, <code>$1</code>表示第一个字段, <code>$NF</code> 表示最后一个字段</li><li><code>-F</code>表示分隔符, 默认使用空白符(空格,制表符)</li><li>变量<code>NF</code>表示移动有多少个字段, 所以<code>$NF</code>表示最后一个字段, <code>$(NF-1)</code>表示倒数第二个字段</li></ul><p>参考: https://www.ruanyifeng.com/blog/2018/11/awk.html</p><h2 id="xargs" tabindex="-1"><a class="header-anchor" href="#xargs" aria-hidden="true">#</a> xargs</h2><p><code>xargs</code>实现的是将管道传递过来的stdin进行处理然后传递到命令的参数位置上。 管道<code>|</code>是将前面的输出<code>stdout</code>作为后面的输入<code>stdin</code>，但是有些命令不接受管道的传递方式。例如：<code>ls</code>命令希望管道传递过来的是参数，但是直接使用管道有时无法传递到命令的参数位。</p><p>xargs的两个作用:</p><ol><li>处理管道传输过来的stdin <ol><li>对数据的分割, <code>(xargs、xargs -d、xargs -0)</code></li><li>对数据的分批, <code>（xargs -n、xargs -L）</code></li></ol></li><li>将处理后的数据传递到正确的位置 <code>(xargs -i)</code></li></ol><p>xargs的语法结构: <code>stdout | args -d -n -i command</code></p><ol><li>默认<code>command</code>是<code>echo</code></li><li>默认<code>-d</code>是空白符</li><li>默认<code>-n</code>等于1, 每次调用<code>command</code>中传入一个参数</li><li>默认按位置传入参数, 使用<code>-i</code>可以用<code>{}</code>来指明参数的位置</li></ol><p>如果不想使用管道, 也可以使用<code>-a</code>参数, <code>-a file 从文件中读入作为 stdin</code>, 等价于<code>cat file | xargs</code></p><p>准备测试文件<code>test.txt</code>, 第一行使用<code>\\t</code>分割, 第二行使用<code>空格</code>分割, 注意第一行和第二行是使用<code>\\n</code>换行符分割.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>a   b
c d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分割" tabindex="-1"><a class="header-anchor" href="#分割" aria-hidden="true">#</a> 分割</h3><p><code>xargs</code>命令会将接收的stdin所有的空白（空格<code>space</code>、制表符<code>\\t</code>、换行符<code>\\n</code>）转换为空格, 默认使用空格来切分数据. 可以通过<code>-d</code>参数来指定分隔符. <code>xargs -d</code>可以指定分割符，可以是单个符号、字母或者数字。如指定o为分割符：xargs -d &quot;o&quot;； <code>xargs -d</code>是分割阶段的选项，所以会优先于分批选项（-n、-L、-i）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 默认对 space,\\t,\\n 来分割</span>
<span class="token function">cat</span> test.txt <span class="token operator">|</span> <span class="token function">xargs</span>  <span class="token comment"># a b c d</span>

<span class="token comment">## -d参数可以指定分隔符</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;a@b@c@d&#39;</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;@&#39;</span> <span class="token builtin class-name">echo</span>  <span class="token comment"># # a b c d @被作为分隔符, 此时空白符失效</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分批" tabindex="-1"><a class="header-anchor" href="#分批" aria-hidden="true">#</a> 分批</h3><p>该选项表示将xargs生成的命令行参数，每次传递几个参数给其后面的命令执行，例如如果xargs从标准输入中读入内容，然后以分隔符分割之后生成的命令行参数有4个，使用 -n 1 之后表示一次传递给xargs后面的命令是1个参数，因为一共有5个参数，所以要执行4次，才能将参数用完。例如：</p><div class="language-s line-numbers-mode" data-ext="s"><pre class="language-s"><code>cat test.txt | xargs -n 1 # 每行仅保留一个参数
## a
## b
## c
## d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="传入参数" tabindex="-1"><a class="header-anchor" href="#传入参数" aria-hidden="true">#</a> 传入参数</h3><p>用于将参数用{}替代： <code>echo &#39;test.txt&#39; | xargs -i cp {} /root/</code></p><h3 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h3><p>通过 find 查找特定的文件或目录，再将结果传递给 xargs，对找到的结果执行特定的操作。</p><ol><li><p>删除指定路径下的文件夹 <code>find . -type d | xargs rmdir</code> xargs 从标准输入读取命令参数时，会以空格作为分隔符来识别多个选项。而文件和目录的名字有时候也会包含空格，导致一个文件名被 xargs 识别为两个参数。安全一点的做法是使用 <code>-0</code>(等价于 <code>-d &#39;\\0&#39;</code>) 选项。<code>-0</code> 选项可以指定 <code>xargs</code> 在读取标准输入时使用 <code>null</code> 作为分隔符。而 <code>find</code> 命令的 <code>-print0</code> 选项同样可以将输出指定为使用 null 进行分割。 <code>find . -type d -print0 | xargs -0 rmdir</code></p></li><li><p>删除 /tmp 路径下最近两周内未做改动的文件：<code>find /tmp -type f -mtime +14 | xargs rm</code></p></li><li><p>查找当前路径下所有的 PNG 图片并将它们归档到 images.tar.gz 压缩包中 <code>find . -name &quot;*.png&quot; -type f -print0 | xargs -0 tar -cvzf images.tar.gz</code></p></li></ol><p>参考: https://www.jianshu.com/p/61a683fa2b0c https://www.jianshu.com/p/676353506f0b</p><h2 id="综合应用" tabindex="-1"><a class="header-anchor" href="#综合应用" aria-hidden="true">#</a> 综合应用</h2><ol><li>将git仓库中更新和新添加的文件复制到某路径下 <code>git status | grep -E &quot;modified|new file&quot; | awk &#39;{print $NF}&#39; | xargs -i cp --parents {} ./temp</code></li></ol><h2 id="cut" tabindex="-1"><a class="header-anchor" href="#cut" aria-hidden="true">#</a> cut</h2><p>显示行中的指定部分</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><p>cut OPTION... [FILE]...</p><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>-f: 选取指定字段(field), 从第一列开始. <code>-f 1</code>选取第一列, <code>-f 1,3</code>选取1列和3列, <code>-f 1-3</code>选取1到3列 -d: 分隔符(delimiter), 指定分隔符, 默认是空白分隔符 --complement: 提取指定字段以外的列</p><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><p>有如下数据:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>No Name Mark Percent
01 tom 69 91
02 jack 71 87
03 alex 68 98
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 选取第一列</span>
<span class="token function">cut</span> <span class="token parameter variable">-f</span> <span class="token number">1</span> test.txt
<span class="token comment">## No</span>
<span class="token comment">## 01</span>
<span class="token comment">## 02</span>
<span class="token comment">## 03</span>

<span class="token comment">## 选取除第二列的其他列</span>
<span class="token function">cut</span> <span class="token parameter variable">-f2</span> <span class="token parameter variable">--complement</span> test.txt
<span class="token comment">## No Mark Percent</span>
<span class="token comment">## 01 69 91</span>
<span class="token comment">## 02 71 87</span>
<span class="token comment">## 03 68 98</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort</h2><p>对文本进行排序:</p><ol><li>以行为单位，每一行作为一个字符串</li><li>默认首字母开始依次向后按ASCII码值进行比较</li><li>默认升序输出</li></ol><h3 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1" aria-hidden="true">#</a> 语法</h3><p>sort [OPTION]... [FILE]...</p><h3 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h3><p>-u: unique 唯一, 既删除重复数据 -r: reverse 倒序 -n: number 数值比较,非ascii码, 只适用于纯数字字符串 -t: -t, --field-separator 指定分隔符, 与<code>-k</code>配合使用 -k: 指定按第几列排序</p><h3 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1" aria-hidden="true">#</a> 使用</h3><h2 id="uniq" tabindex="-1"><a class="header-anchor" href="#uniq" aria-hidden="true">#</a> uniq</h2><p>删除重复出现的行列,</p><h3 id="语法-2" tabindex="-1"><a class="header-anchor" href="#语法-2" aria-hidden="true">#</a> 语法</h3><p>uniq [OPTION]... [INPUT [OUTPUT]]</p><h3 id="参数-2" tabindex="-1"><a class="header-anchor" href="#参数-2" aria-hidden="true">#</a> 参数</h3><p>-u: unique, <code>sort -u</code>是删除重复的数据,仅保留一条, <code>uniq -u</code>是删除重复的数据, 一条也不保留 -c: count, 显示重复出现的次数</p><h3 id="使用-2" tabindex="-1"><a class="header-anchor" href="#使用-2" aria-hidden="true">#</a> 使用</h3><p>数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>重复
重复
不重复
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">uniq</span> <span class="token parameter variable">-u</span> text.txt
<span class="token comment">## 不重复</span>
<span class="token function">sort</span> <span class="token parameter variable">-u</span> text.txt
<span class="token comment">## 不重复</span>
<span class="token comment">## 重复</span>
<span class="token function">uniq</span> <span class="token parameter variable">-c</span> text.txt
<span class="token comment">## 2 重复</span>
<span class="token comment">## 1 不重复</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,64),i=[c];function o(r,t){return a(),n("div",null,i)}const h=e(s,[["render",o],["__file","command.html.vue"]]);export{h as default};
