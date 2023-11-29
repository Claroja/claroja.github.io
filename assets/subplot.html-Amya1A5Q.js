import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e as t}from"./app-M6UUlHgF.js";const p="/assets/2-06Yv8qm_.png",e={},o=t(`<h1 id="subplot" tabindex="-1"><a class="header-anchor" href="#subplot" aria-hidden="true">#</a> subplot</h1><p><code>fig.add_subplot</code>仅仅返回指定位置的1个坐标系(axes), 不同于<code>fig.subplots</code>同时返回多个坐标系(axes)</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><p><code>fig.add_subplot(nrows, ncols, index)</code></p><p>nrows 与 ncols 表示要划分几行几列的子区域（nrows*nclos表示子图数量），index 的初始值为1，用来选定具体的某个子区域。 例如： add_subplot(233)表示在当前画布的右上角创建一个两行三列的绘图区域（如下图所示），同时，选择在第 3 个位置绘制子图。 需要注意的是, 其他没有选择的区域并没有绘制任何图形 ![1.png]</p><h2 id="返回" tabindex="-1"><a class="header-anchor" href="#返回" aria-hidden="true">#</a> 返回</h2><p><code>fig.add_subplot</code>仅仅返回指定位置的1个坐标系(axes)</p><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
fig <span class="token operator">=</span> plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span><span class="token punctuation">)</span>
ax1 <span class="token operator">=</span> fig<span class="token punctuation">.</span>add_subplot<span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span>
ax1<span class="token punctuation">.</span>plot<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
ax2 <span class="token operator">=</span> fig<span class="token punctuation">.</span>add_subplot<span class="token punctuation">(</span><span class="token number">221</span><span class="token punctuation">,</span> facecolor<span class="token operator">=</span><span class="token string">&#39;y&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 覆盖第一次绘画的区域</span>
ax2<span class="token punctuation">.</span>plot<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>参考: https://matplotlib.org/stable/api/figure_api.html#matplotlib.figure.Figure.add_subplot http://m.biancheng.net/matplotlib/subplot.html</p>',11),c=[o];function l(i,u){return a(),s("div",null,c)}const k=n(e,[["render",l],["__file","subplot.html.vue"]]);export{k as default};
