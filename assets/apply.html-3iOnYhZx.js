import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,a as e}from"./app-9tftCahk.js";const p={},t=e(`<h1 id="apply" tabindex="-1"><a class="header-anchor" href="#apply" aria-hidden="true">#</a> apply</h1><p><code>apply()</code>遍历行(<code>axis=1</code>)或遍历列(<code>axis=0</code>)对其应用某个函数(<code>lambda</code>).</p><h2 id="数据" tabindex="-1"><a class="header-anchor" href="#数据" aria-hidden="true">#</a> 数据</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df<span class="token operator">=</span>pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">*</span><span class="token number">3</span><span class="token punctuation">,</span>columns <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;B&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
df
<span class="token comment">##    A  B</span>
<span class="token comment">## 0  4  9</span>
<span class="token comment">## 1  4  9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="行遍历操作-axis-1" tabindex="-1"><a class="header-anchor" href="#行遍历操作-axis-1" aria-hidden="true">#</a> 行遍历操作(axis=1)</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df<span class="token punctuation">.</span><span class="token builtin">apply</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> row<span class="token punctuation">:</span> row<span class="token punctuation">.</span>mean<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>axis <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># lambda row: row.mean() 可以写成  np.meam</span>
<span class="token comment">## 0    6.5</span>
<span class="token comment">## 1    6.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="列遍历操作-axis-0" tabindex="-1"><a class="header-anchor" href="#列遍历操作-axis-0" aria-hidden="true">#</a> 列遍历操作(axis=0)</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df<span class="token punctuation">.</span><span class="token builtin">apply</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> col<span class="token punctuation">:</span> col<span class="token punctuation">.</span>mean<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># lambda row: row.mean() 可以写成  np.meam</span>
<span class="token comment">## A    4.0</span>
<span class="token comment">## B    9.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[t];function c(i,l){return a(),s("div",null,o)}const r=n(p,[["render",c],["__file","apply.html.vue"]]);export{r as default};
