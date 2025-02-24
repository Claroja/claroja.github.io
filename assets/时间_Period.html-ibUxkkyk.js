import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,e}from"./app-A10JnHE0.js";const t={},o=e(`<h1 id="period" tabindex="-1"><a class="header-anchor" href="#period" aria-hidden="true">#</a> Period</h1><p>带有间距(Period)的pandas时间戳, 简化了pandas时间戳的计算</p><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pd<span class="token punctuation">.</span>Period<span class="token punctuation">(</span><span class="token string">&quot;2012-1-1&quot;</span><span class="token punctuation">,</span> freq<span class="token operator">=</span><span class="token string">&quot;D&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>  <span class="token comment"># Period(&#39;2012-01-02&#39;, &#39;D&#39;)</span>
pd<span class="token punctuation">.</span>Timestamp<span class="token punctuation">(</span><span class="token string">&quot;2012-1-1&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> pd<span class="token punctuation">.</span>Timedelta<span class="token punctuation">(</span>days<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># Timestamp(&#39;2012-01-02 00:00:00&#39;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://pandas.pydata.org/docs/user_guide/timeseries.html#time-span-representation</li></ol>`,6),p=[o];function i(c,r){return n(),s("div",null,p)}const u=a(t,[["render",i],["__file","时间_Period.html.vue"]]);export{u as default};
