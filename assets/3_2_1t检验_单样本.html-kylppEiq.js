import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-A10JnHE0.js";const p={},e=t(`<p>下面是一个单样本 t 检验的示例代码，用于检验样本均值是否等于某个值。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> scipy<span class="token punctuation">.</span>stats <span class="token keyword">import</span> ttest_1samp
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

<span class="token comment"># 示例数据</span>
data <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">99</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">102</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># 原假设: 样本均值为 100</span>
t_stat<span class="token punctuation">,</span> p_value <span class="token operator">=</span> ttest_1samp<span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;t-statistic:&quot;</span><span class="token punctuation">,</span> t_stat<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;p-value:&quot;</span><span class="token punctuation">,</span> p_value<span class="token punctuation">)</span>

<span class="token keyword">if</span> p_value <span class="token operator">&lt;</span> <span class="token number">0.05</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;拒绝原假设，样本均值显著不等于 100&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;不能拒绝原假设，样本均值不显著不同于 100&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,u){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","3_2_1t检验_单样本.html.vue"]]);export{k as default};
