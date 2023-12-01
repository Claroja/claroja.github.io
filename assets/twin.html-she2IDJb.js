import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-MTzDpLgJ.js";const p={},o=t(`<h1 id="twin" tabindex="-1"><a class="header-anchor" href="#twin" aria-hidden="true">#</a> twin</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
fig<span class="token punctuation">,</span> ax <span class="token operator">=</span> plt<span class="token punctuation">.</span>subplots<span class="token punctuation">(</span><span class="token punctuation">)</span>
twin <span class="token operator">=</span> ax<span class="token punctuation">.</span>twinx<span class="token punctuation">(</span><span class="token punctuation">)</span>
ax<span class="token punctuation">.</span>set_xlabel<span class="token punctuation">(</span><span class="token string">&quot;Distance&quot;</span><span class="token punctuation">)</span>
ax<span class="token punctuation">.</span>set_ylabel<span class="token punctuation">(</span><span class="token string">&quot;Density&quot;</span><span class="token punctuation">,</span>color<span class="token operator">=</span><span class="token string">&quot;red&quot;</span><span class="token punctuation">)</span>
twin<span class="token punctuation">.</span>set_ylabel<span class="token punctuation">(</span><span class="token string">&quot;Temperature&quot;</span><span class="token punctuation">,</span>color<span class="token operator">=</span><span class="token string">&quot;blue&quot;</span><span class="token punctuation">)</span>
p1<span class="token punctuation">,</span> <span class="token operator">=</span> ax<span class="token punctuation">.</span>plot<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string">&quot;Density&quot;</span><span class="token punctuation">,</span>color<span class="token operator">=</span><span class="token string">&quot;red&quot;</span><span class="token punctuation">)</span>
p2<span class="token punctuation">,</span> <span class="token operator">=</span> twin<span class="token punctuation">.</span>plot<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string">&quot;Temperature&quot;</span><span class="token punctuation">,</span>color<span class="token operator">=</span><span class="token string">&quot;blue&quot;</span><span class="token punctuation">)</span>
ax<span class="token punctuation">.</span>legend<span class="token punctuation">(</span><span class="token punctuation">)</span>
twin<span class="token punctuation">.</span>legend<span class="token punctuation">(</span><span class="token punctuation">)</span>
fig<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),e=[o];function c(u,l){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","twin.html.vue"]]);export{r as default};
