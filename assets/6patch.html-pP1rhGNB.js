import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as e,c as o,a,b as n,d as c,e as l}from"./app-jdLxCr9I.js";const i={},u=l(`<h1 id="patch" tabindex="-1"><a class="header-anchor" href="#patch" aria-hidden="true">#</a> patch</h1><p>指的是matplotlib.patches包里面的一些列对象，比如我们常见的箭头，正方形，椭圆等等，也称之为“块”. 做一个圆形:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> matplotlib <span class="token keyword">import</span> patches
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt

fig <span class="token operator">=</span> plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span>figsize<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
ax <span class="token operator">=</span> fig<span class="token punctuation">.</span>add_subplot<span class="token punctuation">(</span><span class="token punctuation">)</span>
ax<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span>xlim<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>ylim<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">## 创建一个圆</span>
circle <span class="token operator">=</span> patches<span class="token punctuation">.</span>Circle<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span>
<span class="token comment">## 将圆加入到axes中</span>
ax<span class="token punctuation">.</span>add_patch<span class="token punctuation">(</span>circle<span class="token punctuation">)</span>
fig<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>`,4),r={href:"https://matplotlib.org/stable/api/patches_api.html",target:"_blank",rel:"noopener noreferrer"},k=a("p",null,"参考: https://blog.csdn.net/qq_27825451/article/details/82967904",-1);function d(m,h){const s=p("ExternalLinkIcon");return e(),o("div",null,[u,a("p",null,[n("详细信息参考"),a("a",r,[n("官网"),c(s)]),n(" 可以做圆, 椭圆等")]),k])}const _=t(i,[["render",d],["__file","6patch.html.vue"]]);export{_ as default};
