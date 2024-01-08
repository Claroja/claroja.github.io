import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e as t}from"./app-YE2Hltoy.js";const e={},p=t(`<h1 id="bar" tabindex="-1"><a class="header-anchor" href="#bar" aria-hidden="true">#</a> bar</h1><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

<span class="token comment">## make data:</span>
np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>seed<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
x <span class="token operator">=</span> <span class="token number">0.5</span> <span class="token operator">+</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
y <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>uniform<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## plot</span>
fig<span class="token punctuation">,</span> ax <span class="token operator">=</span> plt<span class="token punctuation">.</span>subplots<span class="token punctuation">(</span><span class="token punctuation">)</span>

ax<span class="token punctuation">.</span>bar<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> width<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> edgecolor<span class="token operator">=</span><span class="token string">&quot;white&quot;</span><span class="token punctuation">,</span> linewidth<span class="token operator">=</span><span class="token number">0.7</span><span class="token punctuation">)</span>

ax<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span>xlim<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">,</span> xticks<span class="token operator">=</span>np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       ylim<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">,</span> yticks<span class="token operator">=</span>np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

fig<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><p><code>Axes.bar(x, height, width=0.8, bottom=None, *, align=&#39;center&#39;, data=None, **kwargs)</code></p><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>x: float or array-like</code></td><td>x轴坐标, 对应每个矩形的中心</td></tr><tr><td><code>height: float or array-like</code></td><td>y轴坐标, 对应矩形的长度</td></tr><tr><td><code>width: float or array-like, default: 0.8</code></td><td>矩形的宽度</td></tr><tr><td><code>bottom: float or array-like, default: 0</code></td><td>矩形距离底部的距离</td></tr><tr><td><code>align: {&#39;center&#39;, &#39;edge&#39;}, default: &#39;center&#39;</code></td><td>对齐方式, 默认是中心</td></tr></tbody></table><h3 id="返回" tabindex="-1"><a class="header-anchor" href="#返回" aria-hidden="true">#</a> 返回</h3><p>返回<code>BarContainer</code>对象, 包含了所有的bar对象</p><p>参考: https://matplotlib.org/stable/plot_types/basic/bar.html</p>`,10),o=[p];function c(l,i){return a(),s("div",null,o)}const d=n(e,[["render",c],["__file","bar.html.vue"]]);export{d as default};
