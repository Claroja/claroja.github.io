import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as e,c as o,a as n,b as s,d as c,e as l}from"./app-jdLxCr9I.js";const i={},u=l(`<h1 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> path</h1><p>和其他绘图工具中的<code>path</code>路径概念是一样的</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
<span class="token keyword">from</span> matplotlib<span class="token punctuation">.</span>path <span class="token keyword">import</span> Path
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>patches <span class="token keyword">as</span> patches

<span class="token comment">#第一步：创建画图对象以及创建子图对象</span>
fig <span class="token operator">=</span> plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span><span class="token punctuation">)</span>
ax <span class="token operator">=</span> fig<span class="token punctuation">.</span>add_subplot<span class="token punctuation">(</span><span class="token punctuation">)</span>
ax<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span>xlim<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">0.5</span><span class="token punctuation">,</span><span class="token number">1.5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>ylim<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">0.5</span><span class="token punctuation">,</span><span class="token number">1.5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>


<span class="token comment">#第二步：创建一个patch，路径依然也是通过patch实现的，只不过叫做pathpatch</span>
verts <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">(</span><span class="token number">0.</span><span class="token punctuation">,</span> <span class="token number">0.</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment"># 矩形左下角的坐标(left,bottom)</span>
    <span class="token punctuation">(</span><span class="token number">0.</span><span class="token punctuation">,</span> <span class="token number">1.</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment"># 矩形左上角的坐标(left,top)</span>
    <span class="token punctuation">(</span><span class="token number">1.</span><span class="token punctuation">,</span> <span class="token number">1.</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment"># 矩形右上角的坐标(right,top)</span>
    <span class="token punctuation">(</span><span class="token number">1.</span><span class="token punctuation">,</span> <span class="token number">0.</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment"># 矩形右下角的坐标(right, bottom)</span>
    <span class="token punctuation">(</span><span class="token number">0.</span><span class="token punctuation">,</span> <span class="token number">0.</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment"># 封闭到起点    ]</span>
<span class="token punctuation">]</span>

codes <span class="token operator">=</span> <span class="token punctuation">[</span>
    Path<span class="token punctuation">.</span>MOVETO<span class="token punctuation">,</span>
    Path<span class="token punctuation">.</span>LINETO<span class="token punctuation">,</span>
    Path<span class="token punctuation">.</span>LINETO<span class="token punctuation">,</span>
    Path<span class="token punctuation">.</span>LINETO<span class="token punctuation">,</span>
    Path<span class="token punctuation">.</span>CLOSEPOLY<span class="token punctuation">,</span>
<span class="token punctuation">]</span>
patch <span class="token operator">=</span> patches<span class="token punctuation">.</span>PathPatch<span class="token punctuation">(</span>Path<span class="token punctuation">(</span>verts<span class="token punctuation">,</span> codes<span class="token punctuation">)</span><span class="token punctuation">,</span> facecolor<span class="token operator">=</span><span class="token string">&#39;orange&#39;</span><span class="token punctuation">,</span> lw<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>

<span class="token comment">#第三步：将创建的patch添加到axes对象中</span>
ax<span class="token punctuation">.</span>add_patch<span class="token punctuation">(</span>patch<span class="token punctuation">)</span>
<span class="token comment">#显示</span>
fig<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>`,4),r={href:"https://matplotlib.org/stable/api/path_api.html",target:"_blank",rel:"noopener noreferrer"},k=n("p",null,"参考: https://blog.csdn.net/qq_27825451/article/details/82967904",-1);function d(m,v){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,n("p",null,[s("参考"),n("a",r,[s("官网"),c(a)])]),k])}const _=t(i,[["render",d],["__file","6path.html.vue"]]);export{_ as default};
