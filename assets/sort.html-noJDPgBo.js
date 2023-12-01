import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-MTzDpLgJ.js";const e={},p=t(`<h1 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort</h1><h2 id="_1-sort-values应用" tabindex="-1"><a class="header-anchor" href="#_1-sort-values应用" aria-hidden="true">#</a> 1.sort_values应用</h2><p>1）单行排序</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df<span class="token punctuation">.</span>sort_values<span class="token punctuation">(</span>by<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;col1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2）多行排序</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df<span class="token punctuation">.</span>sort_values<span class="token punctuation">(</span>by<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;col1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;col2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-sort-index应用" tabindex="-1"><a class="header-anchor" href="#_2-sort-index应用" aria-hidden="true">#</a> 2.sort_index应用</h2><p>index不能通过sort_values传入，所以有单独的方法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> index<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">29</span><span class="token punctuation">,</span> <span class="token number">234</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                  columns<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
df<span class="token punctuation">.</span>sort_index<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[p];function c(u,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","sort.html.vue"]]);export{d as default};
