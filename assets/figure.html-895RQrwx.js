import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,e as t}from"./app-0JgdiRQ-.js";const e={},o=t(`<h1 id="figure" tabindex="-1"><a class="header-anchor" href="#figure" aria-hidden="true">#</a> figure</h1><p>最高等级的container Artist是<code>matplotlib.figure.Figure</code>, 可以使用<code>matplotlib.pyplot.figure()</code>来创建. 当添加subplots(<code>subplots(), add_subplot()</code>)或axes(<code>add_axes()</code>)是, 这些对象会被添加到<code>Figure.axes</code>列表中.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fig <span class="token operator">=</span> plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span><span class="token punctuation">)</span>
ax1 <span class="token operator">=</span> fig<span class="token punctuation">.</span>add_subplot<span class="token punctuation">(</span><span class="token number">211</span><span class="token punctuation">)</span>
ax2 <span class="token operator">=</span> fig<span class="token punctuation">.</span>add_axes<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token number">0.7</span><span class="token punctuation">,</span> <span class="token number">0.3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
ax1  <span class="token comment"># &lt;AxesSubplot:&gt;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>fig<span class="token punctuation">.</span>axes<span class="token punctuation">)</span>  <span class="token comment"># [&lt;AxesSubplot:&gt;, &lt;matplotlib.axes._axes.Axes object at 0x7f0768702be0&gt;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>num</code></td><td><code>int or str</code></td></tr><tr><td><code>figsize</code></td><td><code>(float, float)</code>, 默认<code>[6.4, 4.8]</code>, Width, height in inches</td></tr><tr><td><code>dpi</code></td><td><code>float</code>, 默认<code>100.0</code>, The resolution of the figure in dots-per-inch.</td></tr><tr><td><code>facecolor</code></td><td><code>color</code>, 默认<code>white</code>, 背景颜色</td></tr><tr><td><code>edgecolor</code></td><td><code>color</code>, 默认<code>white</code>, 边框颜色</td></tr></tbody></table><h2 id="返回" tabindex="-1"><a class="header-anchor" href="#返回" aria-hidden="true">#</a> 返回</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">matplotlib</span><span class="token punctuation">.</span>figure<span class="token punctuation">.</span>Figure<span class="token punctuation">(</span>figsize<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> dpi<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token punctuation">,</span> facecolor<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> edgecolor<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> linewidth<span class="token operator">=</span><span class="token number">0.0</span><span class="token punctuation">,</span> frameon<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> subplotpars<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> tight_layout<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> constrained_layout<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> layout<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">[</span>source<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参考: https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.figure.html https://matplotlib.org/stable/api/figure_api.html#matplotlib.figure.Figure</p>`,8),p=[o];function c(l,i){return n(),s("div",null,p)}const u=a(e,[["render",c],["__file","figure.html.vue"]]);export{u as default};
