import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as c,c as l,a as n,e as s,b as p,d as a}from"./app-j3zK2x6_.js";const i={},r=a(`<h1 id="color" tabindex="-1"><a class="header-anchor" href="#color" aria-hidden="true">#</a> color</h1><h2 id="artist的颜色设置" tabindex="-1"><a class="header-anchor" href="#artist的颜色设置" aria-hidden="true">#</a> artist的颜色设置</h2><h3 id="_1维对象" tabindex="-1"><a class="header-anchor" href="#_1维对象" aria-hidden="true">#</a> 1维对象</h3><p>比如折线图, 通常使用<code>color</code>参数来设置</p><h3 id="_2维对象" tabindex="-1"><a class="header-anchor" href="#_2维对象" aria-hidden="true">#</a> 2维对象</h3><p>比如散点图, 通常使用<code>facecolor</code>来设置背景颜色, <code>edgecolor</code>来设置边框颜色</p><h2 id="color-bar" tabindex="-1"><a class="header-anchor" href="#color-bar" aria-hidden="true">#</a> color bar</h2><p>颜色渐变指示器</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt

fig<span class="token punctuation">,</span> ax <span class="token operator">=</span> plt<span class="token punctuation">.</span>subplots<span class="token punctuation">(</span><span class="token punctuation">)</span>

sc <span class="token operator">=</span> ax<span class="token punctuation">.</span>scatter<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> c<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
ax<span class="token punctuation">.</span>set_ylabel<span class="token punctuation">(</span><span class="token string">&#39;YLabel&#39;</span><span class="token punctuation">,</span> loc<span class="token operator">=</span><span class="token string">&#39;top&#39;</span><span class="token punctuation">)</span>
ax<span class="token punctuation">.</span>set_xlabel<span class="token punctuation">(</span><span class="token string">&#39;XLabel&#39;</span><span class="token punctuation">,</span> loc<span class="token operator">=</span><span class="token string">&#39;left&#39;</span><span class="token punctuation">)</span>
cbar <span class="token operator">=</span> fig<span class="token punctuation">.</span>colorbar<span class="token punctuation">(</span>sc<span class="token punctuation">)</span>
cbar<span class="token punctuation">.</span>set_label<span class="token punctuation">(</span><span class="token string">&quot;ZLabel&quot;</span><span class="token punctuation">,</span> loc<span class="token operator">=</span><span class="token string">&#39;top&#39;</span><span class="token punctuation">)</span>

plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="教程" tabindex="-1"><a class="header-anchor" href="#教程" aria-hidden="true">#</a> 教程</h2><h3 id="指定颜色的格式" tabindex="-1"><a class="header-anchor" href="#指定颜色的格式" aria-hidden="true">#</a> 指定颜色的格式</h3>`,11),u={href:"https://matplotlib.org/stable/tutorials/colors/colors.html",target:"_blank",rel:"noopener noreferrer"},d=a('<table><thead><tr><th>Format</th><th>例子</th></tr></thead><tbody><tr><td>RGB or RGBA (red, green, blue, alpha) tuple of float values in a closed interval [0, 1].</td><td><code>(0.1, 0.2, 0.5, 0.3)</code></td></tr><tr><td>Case-insensitive hex RGB or RGBA string.</td><td><code>#0f0f0f80</code></td></tr><tr><td>Case-insensitive RGB or RGBA string equivalent hex shorthand</td><td><code>#fb1</code> as <code>#ffbb11</code></td></tr><tr><td>String representation of float value in closed interval [0, 1] for grayscale values.</td><td><code>0</code> as black, <code>1</code> as white</td></tr><tr><td>Single character shorthand notation for some basic colors.</td><td>&#39;b&#39; as blue</td></tr></tbody></table><h3 id="colorbars" tabindex="-1"><a class="header-anchor" href="#colorbars" aria-hidden="true">#</a> Colorbars</h3>',2),k={href:"https://matplotlib.org/stable/tutorials/colors/colorbar_only.html",target:"_blank",rel:"noopener noreferrer"},m=a(`<h4 id="continuous-colorbar" tabindex="-1"><a class="header-anchor" href="#continuous-colorbar" aria-hidden="true">#</a> continuous colorbar</h4><p>绘制连续的渐变色</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
<span class="token keyword">import</span> matplotlib <span class="token keyword">as</span> mpl

fig<span class="token punctuation">,</span> ax <span class="token operator">=</span> plt<span class="token punctuation">.</span>subplots<span class="token punctuation">(</span>figsize<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
fig<span class="token punctuation">.</span>subplots_adjust<span class="token punctuation">(</span>bottom<span class="token operator">=</span><span class="token number">0.5</span><span class="token punctuation">)</span>

cmap <span class="token operator">=</span> mpl<span class="token punctuation">.</span>cm<span class="token punctuation">.</span>cool  <span class="token comment"># 冷色系颜色组(从天蓝色变成紫色)</span>
norm <span class="token operator">=</span> mpl<span class="token punctuation">.</span>colors<span class="token punctuation">.</span>Normalize<span class="token punctuation">(</span>vmin<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span> vmax<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span>  <span class="token comment"># 标准化, 5为最小值对应的颜色, 10为最大值对应的颜色</span>

fig<span class="token punctuation">.</span>colorbar<span class="token punctuation">(</span>mpl<span class="token punctuation">.</span>cm<span class="token punctuation">.</span>ScalarMappable<span class="token punctuation">(</span>norm<span class="token operator">=</span>norm<span class="token punctuation">,</span> cmap<span class="token operator">=</span>cmap<span class="token punctuation">)</span><span class="token punctuation">,</span>
            cax<span class="token operator">=</span>ax<span class="token punctuation">,</span> orientation<span class="token operator">=</span><span class="token string">&#39;horizontal&#39;</span><span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string">&#39;Some Units&#39;</span><span class="token punctuation">)</span>
fig<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="discrete-colorbar" tabindex="-1"><a class="header-anchor" href="#discrete-colorbar" aria-hidden="true">#</a> discrete colorbar</h4><p>绘制离散的渐变色</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
<span class="token keyword">import</span> matplotlib <span class="token keyword">as</span> mpl

fig<span class="token punctuation">,</span> ax <span class="token operator">=</span> plt<span class="token punctuation">.</span>subplots<span class="token punctuation">(</span>figsize<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
fig<span class="token punctuation">.</span>subplots_adjust<span class="token punctuation">(</span>bottom<span class="token operator">=</span><span class="token number">0.5</span><span class="token punctuation">)</span>

cmap <span class="token operator">=</span> mpl<span class="token punctuation">.</span>cm<span class="token punctuation">.</span>viridis <span class="token comment"># 翠绿色系, 颜色从深蓝色变成黄绿色</span>
bounds <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span>
norm <span class="token operator">=</span> mpl<span class="token punctuation">.</span>colors<span class="token punctuation">.</span>BoundaryNorm<span class="token punctuation">(</span>bounds<span class="token punctuation">,</span> cmap<span class="token punctuation">.</span>N<span class="token punctuation">,</span> extend<span class="token operator">=</span><span class="token string">&#39;both&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 离散标准化</span>

fig<span class="token punctuation">.</span>colorbar<span class="token punctuation">(</span>mpl<span class="token punctuation">.</span>cm<span class="token punctuation">.</span>ScalarMappable<span class="token punctuation">(</span>norm<span class="token operator">=</span>norm<span class="token punctuation">,</span> cmap<span class="token operator">=</span>cmap<span class="token punctuation">)</span><span class="token punctuation">,</span>
            cax<span class="token operator">=</span>ax<span class="token punctuation">,</span> orientation<span class="token operator">=</span><span class="token string">&#39;horizontal&#39;</span><span class="token punctuation">,</span>
            label<span class="token operator">=</span><span class="token string">&quot;Discrete intervals with extend=&#39;both&#39; keyword&quot;</span><span class="token punctuation">)</span>
            
fig<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="colormaps" tabindex="-1"><a class="header-anchor" href="#colormaps" aria-hidden="true">#</a> colormaps</h3><p>数值(scalar)和颜色的映射</p><h4 id="listedcolormap" tabindex="-1"><a class="header-anchor" href="#listedcolormap" aria-hidden="true">#</a> ListedColormap</h4><p><code>ListedColormap</code>在<code>.color</code>属性下存储颜色的值.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
<span class="token keyword">import</span> matplotlib <span class="token keyword">as</span> mpl
<span class="token keyword">from</span> matplotlib<span class="token punctuation">.</span>colors <span class="token keyword">import</span> ListedColormap<span class="token punctuation">,</span> LinearSegmentedColormap

viridis <span class="token operator">=</span> mpl<span class="token punctuation">.</span>colormaps<span class="token punctuation">[</span><span class="token string">&#39;viridis&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>resampled<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>  <span class="token comment"># 选取8个颜色</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>viridis<span class="token punctuation">(</span><span class="token number">0.56</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 0.56对应的色值</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;viridis.colors&#39;</span><span class="token punctuation">,</span> viridis<span class="token punctuation">.</span>colors<span class="token punctuation">)</span>  <span class="token comment"># 查看所有颜色</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;viridis(range(8))&#39;</span><span class="token punctuation">,</span> viridis<span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># </span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;viridis(np.linspace(0, 1, 8))&#39;</span><span class="token punctuation">,</span> viridis<span class="token punctuation">(</span>np<span class="token punctuation">.</span>linspace<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="linearsegmentedcolormap" tabindex="-1"><a class="header-anchor" href="#linearsegmentedcolormap" aria-hidden="true">#</a> LinearSegmentedColormap</h4><p>没有<code>.color</code>属性</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>copper <span class="token operator">=</span> mpl<span class="token punctuation">.</span>colormaps<span class="token punctuation">[</span><span class="token string">&#39;copper&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>resampled<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;copper(range(8))&#39;</span><span class="token punctuation">,</span> copper<span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;copper(np.linspace(0, 1, 8))&#39;</span><span class="token punctuation">,</span> copper<span class="token punctuation">(</span>np<span class="token punctuation">.</span>linspace<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>https://matplotlib.org/stable/tutorials/introductory/quick_start.html#color-mapped-data</p><p><a href="">参考官网</a></p>`,16);function b(v,h){const t=e("ExternalLinkIcon");return c(),l("div",null,[r,n("p",null,[n("a",u,[s("参考"),p(t)]),s(". Matplotlib可以通过以下格式来指定颜色:")]),d,n("p",null,[s("将标量(scalar)和颜色映射起来, "),n("a",k,[s("参考"),p(t)])]),m])}const y=o(i,[["render",b],["__file","matplotlib_color.html.vue"]]);export{y as default};
