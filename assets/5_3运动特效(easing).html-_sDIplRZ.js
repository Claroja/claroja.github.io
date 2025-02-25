import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c as p,b as s,d as n,e as c,a as i}from"./app-7knaTE3M.js";const l={},u=i(`<h1 id="easing" tabindex="-1"><a class="header-anchor" href="#easing" aria-hidden="true">#</a> Easing</h1><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> draw <span class="token operator">=</span> <span class="token constant">SVG</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span><span class="token string">&#39;#test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> runner <span class="token operator">=</span> draw<span class="token punctuation">.</span><span class="token function">rect</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;now&#39;</span><span class="token punctuation">)</span>
runner<span class="token punctuation">.</span><span class="token function">ease</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token number">180</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><ol><li><code>&lt;&gt;</code>: ease in and out</li><li><code>&gt;</code>: ease out</li><li><code>&lt;</code>: ease in</li><li><code>-</code>: linear</li><li><code>a function</code></li><li><code>beziere(x1, y1, x2, y2)</code></li><li><code>step(steps, stepPosition)</code></li></ol>`,5),r={href:"https://github.com/svgdotjs/svg.easing.js",target:"_blank",rel:"noopener noreferrer"};function d(k,_){const a=t("ExternalLinkIcon");return o(),p("div",null,[u,s("p",null,[n("插件"),s("a",r,[n("svg.easing.js"),c(a)]),n("现在报错, 但是可以直接使用里面的方法, 作为ease()的参数.")])])}const g=e(l,[["render",d],["__file","5_3运动特效(easing).html.vue"]]);export{g as default};
