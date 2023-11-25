import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as t,c as l,a as n,e as s,b as p,d as o}from"./app-j3zK2x6_.js";const r={},c=o(`<h1 id="多行模式" tabindex="-1"><a class="header-anchor" href="#多行模式" aria-hidden="true">#</a> 多行模式</h1><p>Python 的 re 模块内置函数几乎都有一个 flags 参数, 其中有两个模式：单行（re.DOTALL, 或者re.S）和多行（re.MULTILINE, 或者re.M）模式。</p><p>单行模式突破换行符 \\n 的阻碍，将匹配视野扩大到整个字符串 多行模式实现换行符 \\n 的分隔，将匹配视野缩小到一行之内，并且按行分别匹配。</p><h2 id="多行单行的概念" tabindex="-1"><a class="header-anchor" href="#多行单行的概念" aria-hidden="true">#</a> 多行单行的概念</h2><p>新建一个文件，名字叫 a.txt ，内容是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat
dog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>用文本编辑器打开，看到的是两行文字，每行有三个字符, 是个二维的表示. 文件的保存形式只能是一维的字节流，之所以能让编辑器表示为二维形状，都是因为字节流中包含了换行符。 用 xxd 命令看下这个 a.txt 文件的二进制表达：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ xxd a
0000000: <span class="token number">6361</span> 740a 646f 670a                      cat.dog.                                   g.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这就是文件 a.txt 真实保存的形式，0a 就是换行符，在编程语言里用 \\n 表示</p><p>结论：一段多行文本，尽管在文本编辑器中显示为二维的形状，但是在正则表达式解析器看来，文件是一维的字符串。在碰到包含换行符的字符串时，有多种匹配模式，分别能得到不同的结果。</p><h2 id="普通模式" tabindex="-1"><a class="header-anchor" href="#普通模式" aria-hidden="true">#</a> 普通模式</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token string">&#39;This is the first line.\\nThis is the second line.\\nThis is the third line.&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
This is the first line.
This is the second line.
This is the third line.
&quot;&quot;&quot;</span>

<span class="token keyword">import</span> re
p <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">r&#39;This.*line\\.&#39;</span> <span class="token punctuation">,</span>a<span class="token punctuation">)</span> 
p<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token string">&#39;This is the first line.&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>普通模式下，点号（.）不能匹配换行符，匹配动作遇到换行符即停止。即使是默认的贪婪（greedy）模式，仍然在第一行的结尾初停止了匹配。</p><h2 id="单行模式" tabindex="-1"><a class="header-anchor" href="#单行模式" aria-hidden="true">#</a> 单行模式</h2><p>当使用 re.DOTALL 时，点号将同时匹配换行符，实现了跨行匹配。匹配结果里包含了换行符 \\n 和 全部的三行。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>q <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">r&#39;This.*line\\.&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> flags<span class="token operator">=</span>re<span class="token punctuation">.</span>DOTALL<span class="token punctuation">)</span>
q<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token string">&#39;This is the first line.\\nThis is the second line.\\nThis is the third line.&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结论： 单行模式下，点号（.）也能匹配换行符，多行文本被当作一行匹配。</p><h2 id="多行模式-1" tabindex="-1"><a class="header-anchor" href="#多行模式-1" aria-hidden="true">#</a> 多行模式</h2><p>找出 所有 以 This 开头，以 line 结尾的行。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token string">&#39;This is the first line.\\nThis is the second line.\\nThis is the third line.&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
This is the first line.
This is the second line.
This is the third line.
&quot;&quot;&quot;</span>
<span class="token keyword">import</span> re
re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">r&#39;^This.*line\\.$&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
[]
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>匹配结果为空的原因是：从 上一节 我们知道，点号不匹配换行符，最多只能匹配到第一个 line，但是第一个 line 后面并没有行尾符 $，假如我们改用 单行模式</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">r&#39;^This.*line\\.$&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> flags<span class="token operator">=</span>re<span class="token punctuation">.</span>DOTALL<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
[&#39;This is the first line.\\nThis is the second line.\\nThis is the third line.&#39;]
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>匹配模式中的 line 就匹配到了第三个line，结果就是匹配出了整个字符串，但这并不是我们想要的， 因为原字符串的三行都满足匹配条件，我们希望有三条结果。</p><p>真正的原因是因为正常情况下，行首符 ^ 和行尾符 $ 仅仅匹配整个字符串的起始和结尾。为了扩大 ^ 和 $ 的匹配范围，引入了多行模式。在这种模式下：</p><ol><li>将换行符 &#39;\\n&#39; 后面的位置也看作行首，可以用 ^ 匹配</li><li>将换行符 &#39;\\n&#39; 前面的位置也看作行尾，可以用 $ 匹配</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">r&#39;^This.*line\\.$&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> flags<span class="token operator">=</span>re<span class="token punctuation">.</span>MULTILINE<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
[&#39;This is the first line.&#39;, &#39;This is the second line.&#39;, &#39;This is the third line.&#39;]
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结论：多行模式改变了^和 $ 符号的匹配策略，当字符串中间有 换行符 \\n 时，将字符串当作独立的多行对待</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>当需要在一个文本文件里跨行匹配时，单行和多行模式尤其有用。 单行模式和多行模式，从名字上看是互斥的，但是实际上，两者可以共存。因为它们二者分别扩展不同的匹配符：点号 . 和 ^、 $</p>`,29),d={href:"https://www.lfhacks.com/tech/python-re-single-multiline/",target:"_blank",rel:"noopener noreferrer"};function u(h,v){const a=i("ExternalLinkIcon");return t(),l("div",null,[c,n("p",null,[s("参考: "),n("a",d,[s("Python 正则表达式里的单行s和多行m模式"),p(a)])])])}const b=e(r,[["render",u],["__file","正则表达式_多行模式.html.vue"]]);export{b as default};
