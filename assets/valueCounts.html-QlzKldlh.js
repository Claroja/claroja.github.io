import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-M6UUlHgF.js";const e={},p=t(`<h1 id="valuecounts" tabindex="-1"><a class="header-anchor" href="#valuecounts" aria-hidden="true">#</a> valueCounts</h1><p>use <code>value_counts</code> and <code>explode</code> to count the nested data.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> pd<span class="token punctuation">.</span>Series<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span>explode<span class="token punctuation">(</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span>explode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value_counts<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>refs: https://pandas.pydata.org/docs/reference/api/pandas.Series.value_counts.html https://pandas.pydata.org/docs/reference/api/pandas.Series.explode.html https://stackoverflow.com/questions/51813266/get-unique-values-from-pandas-series-of-lists</p>`,4),o=[p];function c(u,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","valueCounts.html.vue"]]);export{r as default};
