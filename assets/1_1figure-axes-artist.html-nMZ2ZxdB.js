import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as c,c as i,a,b as n,d as t,w as u,e}from"./app-jdLxCr9I.js";const r={},d=e('<h1 id="word2vector" tabindex="-1"><a class="header-anchor" href="#word2vector" aria-hidden="true">#</a> word2vector</h1><h2 id="认识matplotlib对象" tabindex="-1"><a class="header-anchor" href="#认识matplotlib对象" aria-hidden="true">#</a> 认识matplotlib对象</h2><figure><img src="https://matplotlib.org/stable/_images/anatomy.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><code>matplotlib</code>组成对象:</p><ol><li>画框(Figure)画板里面包含了很多坐标系(Axes)</li><li>每个坐标系(Axes)中又包含了很多艺术对象(artists), 比如: 标题(titles), 图例(legends), Line2D(直线)</li><li>每个坐标系(Axes)还包含了多个轴(axis), 二维平面是是2个轴(axis), 三维是3个轴(axis)</li><li>每个轴(axis)包含了一些列的Tick</li></ol>',5),k=a("code",null,"artist",-1),m=e(`<h2 id="matplotlib的两种作图风格" tabindex="-1"><a class="header-anchor" href="#matplotlib的两种作图风格" aria-hidden="true">#</a> matplotlib的两种作图风格</h2><p>建议使用<code>object-oriented</code>风格来作图.作图的步骤为:</p><ol><li><code>fig, ax = plt.subplots() </code>创建画板和坐标系, 如果一个画板里包含多个坐标系则使用<code>fig, axs = plt.subplots(2, 2)</code>, 此时<code>axs</code>是一个列表包含了多个坐标系.</li><li>使用<code>ax</code>绘制图像主题, 比如<code>ax.plot()</code>, <code>ax.scatter()</code></li><li>使用<code>ax</code>绘制图像装饰, 比如<code>ax.set_xlabel</code>, <code>ax.set_ylabel</code>等</li></ol><h3 id="object-oriented-style" tabindex="-1"><a class="header-anchor" href="#object-oriented-style" aria-hidden="true">#</a> object-oriented style</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> np<span class="token punctuation">.</span>linspace<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>  <span class="token comment"># Sample data.</span>
fig<span class="token punctuation">,</span> ax <span class="token operator">=</span> plt<span class="token punctuation">.</span>subplots<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># Create a figure and an axes. 后台使用\`.pyplot.figure\`创建fig对象</span>
ax<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>x<span class="token punctuation">,</span> x<span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string">&#39;linear&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># Plot some data on the axes.</span>
ax<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>x<span class="token punctuation">,</span> x<span class="token operator">**</span><span class="token number">2</span><span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string">&#39;quadratic&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># Plot more data on the axes...</span>
ax<span class="token punctuation">.</span>set_xlabel<span class="token punctuation">(</span><span class="token string">&#39;x label&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># Add an x-label to the axes.</span>
ax<span class="token punctuation">.</span>set_ylabel<span class="token punctuation">(</span><span class="token string">&#39;y label&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># Add a y-label to the axes.</span>
ax<span class="token punctuation">.</span>set_title<span class="token punctuation">(</span><span class="token string">&quot;Simple Plot&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># Add a title to the axes.</span>
ax<span class="token punctuation">.</span>legend<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># Add a legend.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pyplot-style" tabindex="-1"><a class="header-anchor" href="#pyplot-style" aria-hidden="true">#</a> pyplot-style</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> np<span class="token punctuation">.</span>linspace<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>  <span class="token comment"># Sample data.</span>
plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>x<span class="token punctuation">,</span> x<span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string">&#39;linear&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># Plot some data on the (implicit) axes.</span>
plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>x<span class="token punctuation">,</span> x<span class="token operator">**</span><span class="token number">2</span><span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string">&#39;quadratic&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># etc.</span>
plt<span class="token punctuation">.</span>xlabel<span class="token punctuation">(</span><span class="token string">&#39;x label&#39;</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">&#39;y label&#39;</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">&quot;Simple Plot&quot;</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>legend<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="作图的案例" tabindex="-1"><a class="header-anchor" href="#作图的案例" aria-hidden="true">#</a> 作图的案例</h2>`,8),b={href:"https://matplotlib.org/stable/gallery/index.html",target:"_blank",rel:"noopener noreferrer"},x=a("p",null,"参考: https://matplotlib.org/stable/tutorials/introductory/usage.html",-1);function h(g,v){const p=s("RouterLink"),o=s("ExternalLinkIcon");return c(),i("div",null,[d,a("p",null,[n("这些对象统称为"),k,n(", 参考"),t(p,{to:"/matplotlib_artist/"},{default:u(()=>[n("matplotlib_artist")]),_:1})]),m,a("p",null,[n("可以在这个"),a("a",b,[n("连接"),t(o)]),n("里找自己想要做的图形来参考.")]),x])}const y=l(r,[["render",h],["__file","1_1figure-axes-artist.html.vue"]]);export{y as default};
