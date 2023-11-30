import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-0JgdiRQ-.js";const e={},p=t(`<h1 id="typebasic" tabindex="-1"><a class="header-anchor" href="#typebasic" aria-hidden="true">#</a> typeBasic</h1><h2 id="integers" tabindex="-1"><a class="header-anchor" href="#integers" aria-hidden="true">#</a> Integers</h2><p>Integer类型可以有多重表示的方法, 无论使用哪一种表示方法, 最终的结果都一样, 不仅是内存二进制存储一样, python打印的也一样</p><table><thead><tr><th>前缀</th><th>表示</th><th>进制</th></tr></thead><tbody><tr><td><code>0b</code>或<code>0B</code></td><td>Binary</td><td>2</td></tr><tr><td><code>0o</code>或<code>0O</code></td><td>Octal</td><td>8</td></tr><tr><td>无</td><td>decimal</td><td>10</td></tr><tr><td><code>0x</code>或<code>0X</code></td><td>Hexadecimal</td><td>16</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">0b10</span><span class="token punctuation">)</span> <span class="token comment"># 2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">0o10</span><span class="token punctuation">)</span> <span class="token comment"># 8</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment"># 10</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">0x10</span><span class="token punctuation">)</span> <span class="token comment"># 16</span>

<span class="token builtin">type</span><span class="token punctuation">(</span><span class="token number">0b10</span><span class="token punctuation">)</span> <span class="token comment"># &lt;class &#39;int&#39;&gt;</span>
<span class="token builtin">type</span><span class="token punctuation">(</span><span class="token number">0o10</span><span class="token punctuation">)</span> <span class="token comment"># &lt;class &#39;int&#39;&gt;</span>
<span class="token builtin">type</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment"># &lt;class &#39;int&#39;&gt;</span>
<span class="token builtin">type</span><span class="token punctuation">(</span><span class="token number">0x10</span><span class="token punctuation">)</span> <span class="token comment"># &lt;class &#39;int&#39;&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="floating-point-numbers" tabindex="-1"><a class="header-anchor" href="#floating-point-numbers" aria-hidden="true">#</a> Floating-Point Numbers</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token number">4.2</span>  <span class="token comment"># 4.2 完整形式</span>
<span class="token builtin">type</span><span class="token punctuation">(</span><span class="token number">4.2</span><span class="token punctuation">)</span>  <span class="token comment"># &lt;class &#39;float&#39;&gt;</span>
<span class="token number">4.</span>  <span class="token comment"># 4.0 简写形式</span>
<span class="token number">.2</span>  <span class="token comment"># 0.2 简写形式</span>
<span class="token number">.4e7</span>  <span class="token comment"># 4000000.0 科学计数法 0.4 * 10^7</span>
<span class="token builtin">type</span><span class="token punctuation">(</span><span class="token number">.4e7</span><span class="token punctuation">)</span>  <span class="token comment"># &lt;class &#39;float&#39;&gt;</span>
<span class="token number">4.2e-4</span>  <span class="token comment"># 0.00042 科学技术发 4.2 * 10^-4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="strings" tabindex="-1"><a class="header-anchor" href="#strings" aria-hidden="true">#</a> Strings</h2><p>单引号和双引号都可以表示字符串</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;This string contains a single quote (&#39;</span><span class="token punctuation">)</span> character<span class="token punctuation">.</span>&#39;<span class="token punctuation">)</span>  <span class="token comment"># 错误的写法</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;This string contains a single quote (&#39;) character.&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 双引号+ 单引号是比较正常的写法</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;This string contains a double quote (&quot;) character.&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 单引号 + 双引号也是可取的</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;This string contains a single quote (\\&#39;) character.&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 转义符 是比较正规的写法</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;This string contains a double quote (\\&quot;) character.&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 转义符 是比较正规的写法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="转义字符" tabindex="-1"><a class="header-anchor" href="#转义字符" aria-hidden="true">#</a> 转义字符</h3><h4 id="改变python特殊符号的解释-suppress-the-usual-special-interpretation-of-a-character-in-a-string" tabindex="-1"><a class="header-anchor" href="#改变python特殊符号的解释-suppress-the-usual-special-interpretation-of-a-character-in-a-string" aria-hidden="true">#</a> 改变python特殊符号的解释(suppress the usual special interpretation of a character in a string)</h4><table><thead><tr><th>转义符号</th><th>正常的解释</th><th>转义后的解释</th></tr></thead><tbody><tr><td><code>\\&#39;</code></td><td>单引号, 表示字符串</td><td>字符单引号<code>&#39;</code></td></tr><tr><td><code>\\&quot;</code></td><td>双引号, 表示字符串</td><td>字符双引号<code>&quot;</code></td></tr><tr><td><code>\\&lt;newline&gt;</code></td><td>新的一行</td><td>新的一行被忽略, 多行变成一行</td></tr><tr><td><code>\\\\</code></td><td>后面的被转义</td><td>字符<code>&#39;\\</code>&#39;</td></tr></tbody></table><h4 id="给字符新的含义" tabindex="-1"><a class="header-anchor" href="#给字符新的含义" aria-hidden="true">#</a> 给字符新的含义</h4><table><thead><tr><th>Escape Sequence</th><th>“Escaped” Interpretation</th></tr></thead><tbody><tr><td><code>\\a</code></td><td>ASCII Bell (BEL) character</td></tr><tr><td><code>\\b</code></td><td>ASCII Backspace (BS) character</td></tr><tr><td><code>\\f</code></td><td>ASCII Formfeed (FF) character</td></tr><tr><td><code>\\n</code></td><td>ASCII Linefeed (LF) character</td></tr><tr><td><code>\\N{&lt;name&gt;}</code></td><td>Character from Unicode database with given <code>&lt;name&gt;</code></td></tr><tr><td><code>\\r</code></td><td>ASCII Carriage Return (CR) character</td></tr><tr><td><code>\\t</code></td><td>ASCII Horizontal Tab (TAB) character</td></tr><tr><td><code>\\uxxxx</code></td><td>Unicode character with 16-bit hex value xxxx</td></tr><tr><td><code>\\Uxxxxxxxx</code></td><td>Unicode character with 32-bit hex value xxxxxxxx</td></tr><tr><td><code>\\v</code></td><td>ASCII Vertical Tab (VT) character</td></tr><tr><td><code>\\ooo</code></td><td>Character with octal value ooo</td></tr><tr><td><code>\\xhh</code></td><td>Character with hex value hh</td></tr></tbody></table><h4 id="rawstring" tabindex="-1"><a class="header-anchor" href="#rawstring" aria-hidden="true">#</a> rawstring</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;foo\\nbar&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## foo</span>
<span class="token comment">## bar</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">r&#39;foo\\nbar&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## foo\\nbar</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;foo\\\\nbar&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## foo\\nbar</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="boolean-type-boolean-context-and-truthiness" tabindex="-1"><a class="header-anchor" href="#boolean-type-boolean-context-and-truthiness" aria-hidden="true">#</a> Boolean Type, Boolean Context, and “Truthiness”</h2><h2 id="int和str类型转换" tabindex="-1"><a class="header-anchor" href="#int和str类型转换" aria-hidden="true">#</a> int和str类型转换</h2><h3 id="str转int" tabindex="-1"><a class="header-anchor" href="#str转int" aria-hidden="true">#</a> str转int</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 10  默认十进制</span>
<span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>base<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span>  <span class="token comment"># 10 完整写法</span>
<span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>base<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment"># 2 二进制</span>
<span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">&quot;0b10&quot;</span><span class="token punctuation">,</span>base<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment"># 2  完整写法</span>
<span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>base<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">)</span>  <span class="token comment"># 8 八进制</span>
<span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">&quot;0o10&quot;</span><span class="token punctuation">,</span>base<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">)</span> <span class="token comment"># 8 完整写法</span>
<span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>base<span class="token operator">=</span><span class="token number">16</span><span class="token punctuation">)</span>  <span class="token comment"># 16 十六进制</span>
<span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">&quot;0x10&quot;</span><span class="token punctuation">,</span>base<span class="token operator">=</span><span class="token number">16</span><span class="token punctuation">)</span>  <span class="token comment"># 16 完整写法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="int转str" tabindex="-1"><a class="header-anchor" href="#int转str" aria-hidden="true">#</a> int转str</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token builtin">str</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>  <span class="token comment"># &#39;10&#39;</span>
<span class="token builtin">str</span><span class="token punctuation">(</span><span class="token number">0b10</span><span class="token punctuation">)</span> <span class="token comment"># &#39;2&#39; 默认都以十进制表示</span>
<span class="token comment">## 可以指定字符串的表显形式</span>
<span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">:</span><span class="token format-spec">b</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span> <span class="token comment"># &#39;1010&#39; 二进制表示</span>
<span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">:</span><span class="token format-spec">d</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span> <span class="token comment"># &#39;10&#39; 十进制表示</span>
<span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">:</span><span class="token format-spec">o</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>  <span class="token comment"># &#39;12&#39; 八进制表示</span>
<span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">:</span><span class="token format-spec">x</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>  <span class="token comment"># &#39;a&#39; 十六进制表示</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://realpython.com/python-data-types/</p>`,24),o=[p];function c(i,l){return s(),a("div",null,o)}const u=n(e,[["render",c],["__file","typeBasic.html.vue"]]);export{u as default};
