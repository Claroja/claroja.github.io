import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-jdLxCr9I.js";const e={},i=t(`<h1 id="index" tabindex="-1"><a class="header-anchor" href="#index" aria-hidden="true">#</a> index</h1><p>通过<code>dataFrame.index</code>可以获得数据框的索引</p><h2 id="准备数据" tabindex="-1"><a class="header-anchor" href="#准备数据" aria-hidden="true">#</a> 准备数据</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
   a  b  c  d
0  1  a  A  3
1  2  b  B  2
2  3  c  C  1
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="set-index" tabindex="-1"><a class="header-anchor" href="#set-index" aria-hidden="true">#</a> set_index</h2><h3 id="将单列设置成索引" tabindex="-1"><a class="header-anchor" href="#将单列设置成索引" aria-hidden="true">#</a> 将单列设置成索引</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df1 <span class="token operator">=</span> df<span class="token punctuation">.</span>set_index<span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
   a  b  d
c         
A  1  a  3
B  2  b  2
C  3  c  1
&quot;&quot;&quot;</span>
df1<span class="token punctuation">.</span>loc<span class="token punctuation">[</span><span class="token string">&#39;B&#39;</span><span class="token punctuation">]</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
a    2
b    b
d    2
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将多列设置成索引" tabindex="-1"><a class="header-anchor" href="#将多列设置成索引" aria-hidden="true">#</a> 将多列设置成索引</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df2 <span class="token operator">=</span> df<span class="token punctuation">.</span>set_index<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">#　将两列设置成索引</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
     a  d
b c      
a A  1  3
b B  2  2
c C  3  1
&quot;&quot;&quot;</span>

df2<span class="token punctuation">.</span>loc<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;B&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token comment"># 双列索引取值</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
a    2
d    2
&quot;&quot;&quot;</span>

df2<span class="token punctuation">.</span>loc<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
   a  d
c      
B  2  2
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>keys</td><td>type:list of labels, 作为索引的列</td></tr><tr><td>deop</td><td>type:bool;default:True, 是否丢弃作为索引的列</td></tr></tbody></table><h2 id="reset-index" tabindex="-1"><a class="header-anchor" href="#reset-index" aria-hidden="true">#</a> reset_index</h2><p><code>reset_index</code>是<code>set_index</code>的逆向操作, 索引列被重新使用数字排序, 之前的索引列, 被当成一个一个普通列对待.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df1<span class="token punctuation">.</span>reset_index<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
   c  a  b  d
0  A  1  a  3
1  B  2  b  2
2  C  3  c  1
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>drop</td><td>default False, 是否丢弃索引列</td></tr></tbody></table><p>参考: https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.reset_index.html#pandas.DataFrame.reset_index</p>`,15),p=[i];function o(c,d){return s(),a("div",null,p)}const r=n(e,[["render",o],["__file","索引index_set-reset-index.html.vue"]]);export{r as default};
