import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c as p,b as n,d as s,e as c,a as l}from"./app-7knaTE3M.js";const i={},u=l(`<h1 id="浮点型" tabindex="-1"><a class="header-anchor" href="#浮点型" aria-hidden="true">#</a> 浮点型</h1><p>| Name | Description | Size* | Range*signed: | | -- | -- | -- | -- | -- | | float | Floating point number.(浮点型) | 4bytes | +/- 3.4e +/- 38 (~7 digits) | double | Double precision floating point number.(双精度浮点型) | 8bytes | +/- 1.7e +/- 308 (~15 digits)</p><ol><li>默认用double类型保存小数</li><li>后缀f或者F表示float类型</li><li>后缀l或者L表示long double类型</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>	<span class="token keyword">float</span> a <span class="token operator">=</span> <span class="token number">3.14f</span><span class="token punctuation">;</span> <span class="token comment">//或3.14F</span>
	<span class="token keyword">double</span> b <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>

	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a = %f\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;b = %lf\\n&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">//科学法赋值</span>
	a <span class="token operator">=</span> <span class="token number">3.2e3f</span><span class="token punctuation">;</span> <span class="token comment">//3.2*1000 = 32000，e可以写E</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a1 = %f\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>%2.2f</code>表示打印时保留两位整数(一般无效)和两位小数</p>`,5),r={href:"https://www.cnblogs.com/zhugehq/p/5918599.html",target:"_blank",rel:"noopener noreferrer"};function d(k,m){const a=t("ExternalLinkIcon");return o(),p("div",null,[u,n("p",null,[s("参考文献: "),n("a",r,[s("浮点型存储"),c(a)])])])}const v=e(i,[["render",d],["__file","1_2浮点型.html.vue"]]);export{v as default};
