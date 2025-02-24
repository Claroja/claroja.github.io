import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as i,c,a as n,b as e,d as t,e as a}from"./app-A10JnHE0.js";const l={},r=a(`<h1 id="stringformat" tabindex="-1"><a class="header-anchor" href="#stringformat" aria-hidden="true">#</a> stringformat</h1><h2 id="string-template" tabindex="-1"><a class="header-anchor" href="#string-template" aria-hidden="true">#</a> string.Template</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token string">&quot;wang&quot;</span>
age <span class="token operator">=</span> <span class="token number">18</span>
s <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">\\t</span><span class="token interpolation"><span class="token punctuation">{</span>age<span class="token punctuation">}</span></span><span class="token string">\\t</span><span class="token interpolation"><span class="token punctuation">{</span>age<span class="token punctuation">:</span><span class="token format-spec">.2f</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>  <span class="token comment"># wang    18      18.00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d={href:"https://www.python.org/dev/peps/pep-0498/",target:"_blank",rel:"noopener noreferrer"},u=a(`<h2 id="str-format" tabindex="-1"><a class="header-anchor" href="#str-format" aria-hidden="true">#</a> <code>str.format()</code></h2><p><code>format</code>函数中前面可以以<code>*arg</code>列表形式填充值, 后面可以以<code>**kwargs</code>来填充值</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;{}\\t{age}\\t{:.2f}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;wang&quot;</span><span class="token punctuation">,</span> age<span class="token operator">=</span><span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>  <span class="token comment"># wang    18      18.00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),m={href:"https://docs.python.org/3/library/string.html#formatstrings",target:"_blank",rel:"noopener noreferrer"},k=a(`<h2 id="格式化数字" tabindex="-1"><a class="header-anchor" href="#格式化数字" aria-hidden="true">#</a> 格式化数字</h2><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><p>两种写法, <code>:</code>是用来区分<code>被格式化的数字</code>与<code>模板</code>. <code>被格式化的数字</code>在前, <code>模板</code>在后.</p><ol><li><code>f{}</code>写法是常规写法</li><li><code>format</code>的写法将<code>被格式化的数字</code>作为参数</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>num <span class="token operator">=</span> <span class="token number">5</span>
<span class="token comment">## 语法1: f&quot;{}&quot;&quot;</span>
<span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>num<span class="token punctuation">:</span><span class="token format-spec">#&lt;+06.1f</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>  <span class="token comment"># &#39;+5.0##&#39;</span>
<span class="token comment">## 语法2: .format</span>
<span class="token string">&quot;{:#&lt;+06.1f}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>  <span class="token comment"># &#39;+5.0##&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="格式" tabindex="-1"><a class="header-anchor" href="#格式" aria-hidden="true">#</a> 格式</h3><ol><li>格式语法: <code>[[fill]align][sign][#][0][width][grouping_option][.precision][type]</code></li><li>参数详解: <ol><li><p>fill, 指定左对齐和右对齐空白填充的字符, <code>&lt;any character&gt;</code></p></li><li><p>align, 对齐方式(只有在指定最小宽度<code>minimumwidth</code>大于字符串本来宽度才生效) &quot;&lt;&quot; | &quot;&gt;&quot; | &quot;=&quot; | &quot;^&quot;</p><ol><li><code>&lt;</code> 左对齐, 默认</li><li><code>&gt;</code> 右对齐</li><li><code>^</code> 中对齐</li><li><code>=</code> 正负号对齐, 如&#39;+000000120&#39;</li></ol></li><li><p>sign, 正负号</p><ol><li><code>+</code> 表示正负值都要有符号</li><li><code>-</code> 表示只有负值有符号, 默认</li><li><code></code> 表示正值前面使用空格</li></ol></li><li><p><code>#</code>表示 binary, octal, and hexadecimal需要使用前缀&#39;0b&#39;, &#39;0o&#39;, and &#39;0x&#39;</p></li><li><p><code>0</code>表示填充二进制,八进制,十六进制开头的数字</p></li><li><p>width, 指定宽度, 如果不指定, 则使用字符串本身的宽度</p></li><li><p>grouping_option, 对浮点表示类型和整数表示类型&#39;d&#39;使用下划线作为千位分隔符。 对于整数表示类型&#39;b&#39;,&#39;o&#39;,&#39;x&#39;和&#39;X&#39;，将为每 4 个数位插入一个下划线。 对于其他表示类型指定此选项则将导致错误。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token string">&#39;{:,}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">1234567890</span><span class="token punctuation">)</span>  <span class="token comment"># &#39;1,234,567,890&#39;</span>
<span class="token string">&#39;{:_}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">1234567890</span><span class="token punctuation">)</span>  <span class="token comment"># &#39;1_234_567_890&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>.precision, 小数点后面保存的位数</p></li><li><p>type</p><ol><li><code>f</code> 表示浮点数</li><li><code>b</code> 表示二进制, binary</li><li><code>c</code> 表示字符, Character</li><li><code>d</code> 表示整型, Decimal Integer</li><li><code>o</code> 表示八进制, Octal</li><li><code>x</code> 表示小写十六进制, Hex</li><li><code>X</code> 表示大写十六进制, Hex</li><li><code>%</code> 百分比。将数字乘以100并显示为定点（f）格式，后面带一个百分号。</li></ol></li></ol></li></ol><h3 id="本节参考" tabindex="-1"><a class="header-anchor" href="#本节参考" aria-hidden="true">#</a> 本节参考</h3><ul><li>https://zhuanlan.zhihu.com/p/424862897</li></ul><h2 id="早期的-formatting-不建议使用" tabindex="-1"><a class="header-anchor" href="#早期的-formatting-不建议使用" aria-hidden="true">#</a> 早期的<code>%-formatting</code>(不建议使用)</h2>`,10),h={href:"https://docs.python.org/3/library/stdtypes.html#printf-style-string-formatting",target:"_blank",rel:"noopener noreferrer"},g=a(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;%s\\t%d&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token string">&quot;wang&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>  <span class="token comment"># wang	18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中<code>%s</code>是字符串占位符, 另外还有<code>%d</code>整型占位符. <code>%</code>是固定语法. <code>(value1,value2)</code>是要填充的值,这里是元组形式<code>()</code></p><p><code>%</code>后面也可以跟字典<code>{}</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;%(name)s\\t%(age)d&quot;</span> <span class="token operator">%</span> <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;wang&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span><span class="token number">18</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>  <span class="token comment"># wang	18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>%[(name)][flags][width].[precision]typecode</code></p><ul><li>(name)为命名</li><li>flags可以有+,-,&#39; &#39;或0。+表示右对齐。-表示左对齐。&#39; &#39;为一个空格，表示在正数的左侧填充一个空格，从而与负数对齐。0表示使用0填充。</li><li>width表示显示宽度</li><li>precision表示小数点后精度</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;%05.2f&quot;</span> <span class="token operator">%</span> <span class="token number">5</span><span class="token punctuation">)</span>  <span class="token comment"># 05.00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>flags = 0, 表示多余的位使用0填充</li><li>width = 5, 表示数字整体宽度是5(包含小数点),</li><li>precision = 2, 表示小数点后面保留2位, 因为width=5, 所以小数点前面也是2位</li></ul><h2 id="文章参考" tabindex="-1"><a class="header-anchor" href="#文章参考" aria-hidden="true">#</a> 文章参考:</h2><p>https://www.python.org/dev/peps/pep-0498/ https://realpython.com/python-formatted-output/</p>`,10);function v(b,f){const s=p("ExternalLinkIcon");return i(),c("div",null,[r,n("p",null,[n("a",d,[e("参考"),t(s)])]),u,n("p",null,[n("a",m,[e("参考"),t(s)])]),k,n("p",null,[n("a",h,[e("参考"),t(s)])]),g])}const q=o(l,[["render",v],["__file","格式化字符串(stringformat).html.vue"]]);export{q as default};
