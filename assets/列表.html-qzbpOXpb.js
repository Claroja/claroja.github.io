import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as i,c as p,a as n,b as s,d as e,e as o}from"./app-O0xqlHfm.js";const c={},d=o(`<h1 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h1><h2 id="md原理" tabindex="-1"><a class="header-anchor" href="#md原理" aria-hidden="true">#</a> MD原理</h2><h3 id="渲染" tabindex="-1"><a class="header-anchor" href="#渲染" aria-hidden="true">#</a> 渲染</h3><ul><li><p>单行直接渲染成<code>&lt;li&gt;</code>标签:</p><ul><li><p>MD源码</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">1.</span> 项目1
<span class="token list punctuation">2.</span> 项目2
<span class="token list punctuation">3.</span> 项目3
<span class="token list punctuation">4.</span> 项目4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>HTML渲染结果</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>项目1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>项目2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>项目3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>项目4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>多行会被渲染成<code>&lt;li&gt;&lt;p&gt;&lt;/li&gt;</code></p><ul><li><p>MD源码, 12之间使用的是MD的换行; 34之间使用的是MD的段落</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">1.</span> 项目1  
项目1.1
<span class="token list punctuation">2.</span> 项目2

<span class="token list punctuation">3.</span> 项目3

<span class="token code keyword">    项目3.1</span>
<span class="token list punctuation">4.</span> 项目4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>HTML渲染结果, 12换行, 是在一个<code>&lt;p&gt;</code>标签中加入了<code>&lt;br&gt;</code>标签; 34段落, 是直接生成了两个<code>&lt;p&gt;</code>标签</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>项目1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>  项目1.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>项目2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>项目3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span> 项目3.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>项目4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><blockquote><p>在HTML中, 使用CSS来实现段落的换行效果:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0.75em<span class="token punctuation">;</span> // 每个段落间隔
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是<code>&lt;li&gt;</code>中签到了<code>&lt;p&gt;</code>会将列表元素行间距打乱, 所以要特别配置一下:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">li p</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0em<span class="token punctuation">;</span> //列表内的\`&lt;p&gt;\`标签不空行
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote></li></ul><h3 id="实际效果" tabindex="-1"><a class="header-anchor" href="#实际效果" aria-hidden="true">#</a> 实际效果</h3><ul><li><p>列表外部的分段处理:</p><ul><li><p>两个段落中间加入列表时, 列表与第二段要使用空行进行分段, 如下:</p><ul><li><p>markdown内容:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>这是第一段落, 紧跟了列表:
1. 元素1
2. 元素2  

这是第二个段落
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>展示效果:</p><p>这时第一段落, 紧跟了列表:</p><ol><li>元素1</li><li>元素2</li></ol><p>这是第二个段落</p></li></ul></li><li><p>如果不使用空行, 则第二个段落会变成列表的第二个元素, 如下:</p><ul><li><p>markdown内容:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>这时第一段落, 紧跟了列表:
1. 元素1
2. 元素2  
这是第二个段落
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>展示效果:</p><p>这时第一段落, 紧跟了列表:</p><ol><li>元素1</li><li>元素2 这是第二个段落</li></ol></li></ul></li></ul></li><li><p>列表内部的分段处理, 尽量使用空行来表示段落换行:</p><ul><li><p>或者使用换行来分段, 用缩进表示同一元素(<code>建议</code>)</p><ul><li><p>markdown内容:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>这时第一段落, 紧跟了列表:
1. 元素1
2. 元素2第一段

    元素2的第二段

这是第二个段落
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>展示效果:</p><p>这时第一段落, 紧跟了列表:</p><ol><li><p>元素1</p></li><li><p>元素2第一段</p><p>元素2的第二段</p></li></ol><p>这是第二个段落</p></li></ul></li><li><p>元素是多行时, 使用两个空格来分段, 用缩进表示同一元素(<code>不建议</code>)</p><ul><li><p>markdown内容:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>这时第一段落, 紧跟了列表:
1. 元素1
2. 元素2第一段  
元素2的第二段

这是第二个段落
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>展示效果:</p><p>这时第一段落, 紧跟了列表:</p><ol><li>元素1</li><li>元素2第一段<br> 元素2的第二段</li></ol><p>这是第二个段落</p></li></ul></li></ul></li></ul><h2 id="内容书写建议" tabindex="-1"><a class="header-anchor" href="#内容书写建议" aria-hidden="true">#</a> 内容书写建议</h2><h3 id="有序列表和无序列表" tabindex="-1"><a class="header-anchor" href="#有序列表和无序列表" aria-hidden="true">#</a> 有序列表和无序列表</h3><p>无序列表(Unordered lists): 各个元素之间属于<code>并列</code>关系，<code>没有顺序</code>之分, 如:</p><p>When you configure the computer, you can use the program to set the following items:</p><ul><li>Date and time</li><li>Passwords</li><li>Drive startup sequence</li></ul><p>有序列表(Ordered lists): 各元素属于<code>先后</code>关系, 技术文档中常用于描述具体的操作步骤</p><p>Write comment statements according to the following rules:</p><ol><li>Use an asterisk in the first column.</li><li>Do not exceed 80 characters.</li><li>Do not place a comment statement between an instruction and its continuation line.</li></ol><h3 id="列表前的介绍性句子" tabindex="-1"><a class="header-anchor" href="#列表前的介绍性句子" aria-hidden="true">#</a> 列表前的介绍性句子</h3><p>列表前的介绍性引入句子可以以冒号结束，也可以以句号结束。通常，如果紧接着列表内容，则使用冒号；如果在介绍性句子和列表之间还有其它内容（如注意事项），则使用句号。建议尽量使用一个完整的句子，而非需要列表项才能补全的句子片段。例如，以 To 开头的不定式短语，可以使用，但不建议使用。</p><ul><li><p>错误示例:</p><p>Use the Submit button to:</p><ul><li>submit the form</li><li>indicate that you&#39;re done</li><li>allow the next person to enter their data</li></ul></li><li><p>正确示例：</p><p>Use the Submit button for any of the following purposes:</p><ul><li>To submit the form.</li><li>To indicate that you&#39;re done.</li><li>To allow the next person to enter their data.</li></ul></li></ul><h3 id="列表内容的大小写" tabindex="-1"><a class="header-anchor" href="#列表内容的大小写" aria-hidden="true">#</a> 列表内容的大小写</h3><p>在垂直列表中，每个列表项第一个单词的首字母需大写，特殊情况除外。</p><ul><li><p>正确示例：</p><p>The routine makes the following conversions:</p><ul><li>An EBCDIC value to a real number</li><li>A real number to an EBCDIC value</li><li>An EBCDIC value to an integer</li><li>An integer to an EBCDIC value</li></ul></li></ul><h3 id="列表内容的平行语法" tabindex="-1"><a class="header-anchor" href="#列表内容的平行语法" aria-hidden="true">#</a> 列表内容的平行语法</h3><p>在同一个列表中，各列表项尽量使用相同的语法或结构，或者说，尽量让各列表项在语法上保持平行。例如，尽量做到要么各列表项都是完整的句子，要么都不是。</p><ul><li><p>错误示例：</p><p>XYZ Manager has the following features:</p><ul><li>A graphical user interface.</li><li>It is compatible with ABC Manager.</li><li>It can be used on many types of systems.</li></ul></li><li><p>正确示例：</p><p>XYZ Manager has the following features:</p><ul><li>It has a graphical user interface.</li><li>It is compatible with ABC Manager.</li><li>It can be used on many types of systems.</li></ul></li></ul><h3 id="列表项的标点" tabindex="-1"><a class="header-anchor" href="#列表项的标点" aria-hidden="true">#</a> 列表项的标点</h3><p>列表项末尾的标点要根据列表类型和具体内容而定:</p><ul><li>如果列表项都是完整的句子，在末尾加句号。</li><li>如果列表项是一个短语，末尾不加标点。</li><li>如果列表项不包含动词，末尾不加标点。</li><li>如果列表项只包含一个词，末尾不加标点。</li><li>如果列表中的某个列表项以短语开头，一个或多个短语之后紧接的是完整的句子。此时，短语和完整句子后面都加句号。</li></ul><p>下面是两个例子:</p><ul><li><p>错误示例：</p><p>Session management can store session-related information in several ways:</p><ul><li>In application server memory. This storage option is local to the application server and cannot be shared with other application servers.</li><li>In a database</li><li>In another WebSphere Application Server instance</li></ul></li><li><p>正确示例：</p><p>Session management can store session-related information in several ways:</p><ul><li>In application server memory. This storage option is local to the application server and cannot be shared with other application servers.</li><li>In a database.</li><li>In another WebSphere Application Server instance.</li></ul></li></ul><h3 id="列表的长度" tabindex="-1"><a class="header-anchor" href="#列表的长度" aria-hidden="true">#</a> 列表的长度</h3><p>有序列表中，需至少包含<code>两个</code>列表项。 无序列表中，如果是为了跟同一部分其它无序列表的格式保持一致，<code>可以只包含一个</code>列表项。 列表不可过长，根据 IBM 的文档规范，<code>最多可包含 9 个列表项</code>。如果列表项的数目超过了此限制，可考虑使用多个列表。 如果是 Reference 文档中<code>按字母顺序排列的列表</code>，那么列表较长也是可以接受的。因为用户不会从头读到尾，而是会根据字母顺序找到所需的部分</p><h3 id="列表嵌套" tabindex="-1"><a class="header-anchor" href="#列表嵌套" aria-hidden="true">#</a> 列表嵌套</h3><p>关于无序列表和有序列表中的嵌套列表，IBM 要求尽量<code>避免列表嵌套超过两级，最多三级</code>。Google 规范中无明确说明，但<code>通常最多三级</code>。</p><ul><li><p>正确示例：</p><ol><li>Remove the cover.</li><li>Install the adapter: <ol><li>Insert the adapter into the slot.</li><li>Connect the adapter cable to the connector on the system board.</li></ol></li><li>Install the cover.</li></ol></li></ul><h2 id="表示列表的字" tabindex="-1"><a class="header-anchor" href="#表示列表的字" aria-hidden="true">#</a> 表示列表的字</h2><ol><li>阿拉伯数字: 1,2,3,4</li><li>字母大小写: a,b,c,d/i,j,k/x,y,z</li><li>汉字: 一, 二, 三, 四</li><li>天干: 甲, 乙, 丙, 丁</li><li>地支: 子, 丑, 寅, 卯</li><li>八卦: 乾, 坎, 艮, 震, 巽, 离, 坤, 兑</li><li>天, 地, 玄, 黄, 宇, 宙, 洪, 荒</li><li>宫, 商, 角, 徵, 羽 参考:</li></ol>`,35),u={href:"https://zhuanlan.zhihu.com/p/61673634",target:"_blank",rel:"noopener noreferrer"},r={href:"https://zhuanlan.zhihu.com/p/59875202",target:"_blank",rel:"noopener noreferrer"};function v(g,k){const a=t("ExternalLinkIcon");return i(),p("div",null,[d,n("ul",null,[n("li",null,[n("a",u,[s("英语技术文档中如何正确使用无序列表和有序列表？"),e(a)])]),n("li",null,[n("a",r,[s("一元、两仪、三才、四象、五行、六合、七星、八卦、九宫、十方详"),e(a)])])])])}const b=l(c,[["render",v],["__file","列表.html.vue"]]);export{b as default};
