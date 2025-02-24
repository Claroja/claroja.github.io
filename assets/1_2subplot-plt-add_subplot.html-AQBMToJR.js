import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as r,c as d,a as t,b as n,d as s,e}from"./app-A10JnHE0.js";const p="/assets/2-06Yv8qm_.png",i={},c=e(`<h1 id="subplot" tabindex="-1"><a class="header-anchor" href="#subplot" aria-hidden="true">#</a> subplot</h1><p><code>fig.add_subplot</code>仅仅返回指定位置的1个坐标系(axes), 不同于<code>fig.subplots</code>同时返回多个坐标系(axes)</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><p><code>fig.add_subplot(nrows, ncols, index)</code></p><p>nrows 与 ncols 表示要划分几行几列的子区域（nrows*nclos表示子图数量），index 的初始值为1，用来选定具体的某个子区域。 例如： add_subplot(233)表示在当前画布的右上角创建一个两行三列的绘图区域（如下图所示），同时，选择在第 3 个位置绘制子图。 需要注意的是, 其他没有选择的区域并没有绘制任何图形</p><p>![1.png]</p><h2 id="返回" tabindex="-1"><a class="header-anchor" href="#返回" aria-hidden="true">#</a> 返回</h2><p><code>fig.add_subplot</code>仅仅返回指定位置的1个坐标系(axes)</p><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
fig <span class="token operator">=</span> plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span><span class="token punctuation">)</span>
ax1 <span class="token operator">=</span> fig<span class="token punctuation">.</span>add_subplot<span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span>
ax1<span class="token punctuation">.</span>plot<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
ax2 <span class="token operator">=</span> fig<span class="token punctuation">.</span>add_subplot<span class="token punctuation">(</span><span class="token number">221</span><span class="token punctuation">,</span> facecolor<span class="token operator">=</span><span class="token string">&#39;y&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 覆盖第一次绘画的区域</span>
ax2<span class="token punctuation">.</span>plot<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="plot" tabindex="-1"><a class="header-anchor" href="#plot" aria-hidden="true">#</a> plot</h2><h2 id="应用-1" tabindex="-1"><a class="header-anchor" href="#应用-1" aria-hidden="true">#</a> 应用</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
t <span class="token operator">=</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">0.</span><span class="token punctuation">,</span> <span class="token number">5.</span><span class="token punctuation">,</span> <span class="token number">0.2</span><span class="token punctuation">)</span>
fig<span class="token punctuation">,</span> axe <span class="token operator">=</span> plt<span class="token punctuation">.</span>subplots<span class="token punctuation">(</span><span class="token punctuation">)</span>
lines <span class="token operator">=</span> axe<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>t<span class="token punctuation">,</span> t<span class="token punctuation">,</span> <span class="token string">&#39;r--o&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 等价于axe.plot(t, t, c=&#39;r&#39;, ls=&#39;--&#39;, marker=&#39;o&#39;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><p><code>matplotlib.pyplot.plot(*args, scalex=True, scaley=True, data=None, **kwargs)</code></p><h3 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h3>`,17),u=t("thead",null,[t("tr",null,[t("th",null,"参数"),t("th",null,"描述")])],-1),h=t("tr",null,[t("td",null,"x"),t("td",null,"x axis")],-1),m=t("tr",null,[t("td",null,"y"),t("td",null,"y axis")],-1),k=t("tr",null,[t("td",null,"alpha"),t("td",null,"透明度")],-1),b=t("tr",null,[t("td",null,"color or c"),t("td",null,"颜色")],-1),_=t("tr",null,[t("td",null,"fillstyle"),t("td",null,"填充样式")],-1),g=t("tr",null,[t("td",null,"label"),t("td",null,"标签, 名称, 和legend关联")],-1),f=t("tr",null,[t("td",null,"linestyle or ls"),t("td",null,"'-' or 'solid' , '--' or 'dashed', '-.' or 'dashdot', ':' or 'dotted'")],-1),y=t("tr",null,[t("td",null,"linewidth or lw"),t("td",null,"线宽")],-1),x=t("td",null,"marker",-1),v={href:"https://matplotlib.org/stable/api/markers_api.html#module-matplotlib.markers",target:"_blank",rel:"noopener noreferrer"},w=t("tr",null,[t("td",null,"markeredgecolor or mec"),t("td")],-1),L=t("tr",null,[t("td",null,"markeredgewidth or mew"),t("td")],-1),N=t("tr",null,[t("td",null,"markerfacecolor or mfc"),t("td")],-1),V=t("tr",null,[t("td",null,"markersize or ms"),t("td")],-1),B=t("tr",null,[t("td",null,"fmt"),t("td",null,[n("maker, line, with的快捷方法, 详细见下面的小节"),t("code",null,"[marker][line][color]")])],-1),D=t("h3",{id:"返回-1",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#返回-1","aria-hidden":"true"},"#"),n(" 返回")],-1),E={href:"https://matplotlib.org/stable/api/_as_gen/matplotlib.lines.Line2D.html#matplotlib.lines.Line2D",target:"_blank",rel:"noopener noreferrer"},I=t("h2",{id:"样式设置",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#样式设置","aria-hidden":"true"},"#"),n(" 样式设置")],-1),S=t("p",null,[n("通过"),t("code",null,"markers"),n(", "),t("code",null,"linestyle"),n(", "),t("code",null,"color"),n("来控制折线的样式.")],-1),T=t("h3",{id:"markers",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#markers","aria-hidden":"true"},"#"),n(" Markers")],-1),z={href:"https://matplotlib.org/stable/api/markers_api.html#module-matplotlib.markers",target:"_blank",rel:"noopener noreferrer"},A=e('<table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>&#39;.&#39;</td><td>point marker</td></tr><tr><td>&#39;,&#39;</td><td>pixel marker</td></tr><tr><td>&#39;o&#39;</td><td>circle marker</td></tr><tr><td>&#39;v&#39;</td><td>triangle_down marker</td></tr><tr><td>&#39;^&#39;</td><td>triangle_up marker</td></tr><tr><td>&#39;&lt;&#39;</td><td>triangle_left marker</td></tr><tr><td>&#39;&gt;&#39;</td><td>triangle_right marker</td></tr></tbody></table><h3 id="line-styles" tabindex="-1"><a class="header-anchor" href="#line-styles" aria-hidden="true">#</a> Line Styles</h3><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>&#39;-&#39;</td><td>solid line style</td></tr><tr><td>&#39;--&#39;</td><td>dashed line style</td></tr><tr><td>&#39;-.&#39;</td><td>dash-dot line style</td></tr><tr><td>&#39;:&#39;</td><td>dotted line style</td></tr></tbody></table><h3 id="colors" tabindex="-1"><a class="header-anchor" href="#colors" aria-hidden="true">#</a> colors</h3>',4),F={href:"https://matplotlib.org/stable/tutorials/colors/colormaps.html",target:"_blank",rel:"noopener noreferrer"},P=e('<table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>&#39;b&#39;</td><td>blue</td></tr><tr><td>&#39;g&#39;</td><td>green</td></tr><tr><td>&#39;r&#39;</td><td>red</td></tr><tr><td>&#39;c&#39;</td><td>cyan</td></tr><tr><td>&#39;m&#39;</td><td>magenta</td></tr><tr><td>&#39;y&#39;</td><td>yellow</td></tr><tr><td>&#39;k&#39;</td><td>black</td></tr><tr><td>&#39;w&#39;</td><td>white</td></tr></tbody></table><h2 id="format-strings" tabindex="-1"><a class="header-anchor" href="#format-strings" aria-hidden="true">#</a> Format Strings</h2><p>plot的第三个参数， 用来设置折线的样式。 语法: <code>fmt = &#39;[marker][line][color]&#39;</code></p><p>参考: https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot</p><p>参考: https://matplotlib.org/stable/api/figure_api.html#matplotlib.figure.Figure.add_subplot http://m.biancheng.net/matplotlib/subplot.html</p>',5);function q(C,M){const a=o("ExternalLinkIcon");return r(),d("div",null,[c,t("table",null,[u,t("tbody",null,[h,m,k,b,_,g,f,y,t("tr",null,[x,t("td",null,[n("数据对应点的形状,具体"),t("a",v,[n("参考"),s(a)])])]),w,L,N,V,B])]),D,t("p",null,[n("list of "),t("a",E,[n("Line2D"),s(a)])]),I,S,T,t("p",null,[t("a",z,[n("参考"),s(a)])]),A,t("p",null,[t("a",F,[n("参考"),s(a)]),n(" 可以使用简称'b',或全称'blue', 或'#008000'")]),P])}const G=l(i,[["render",q],["__file","1_2subplot-plt-add_subplot.html.vue"]]);export{G as default};
