import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e as t}from"./app-A10JnHE0.js";const i="/assets/1-SiWTCCQt.png",e="/assets/2-sBuAwalW.png",r="/assets/3-nQ7vrzIc.png",c="/assets/4-i725Ueb8.png",d="/assets/5-wNbo08CW.png",l={},o=t('<h1 id="网格项布局" tabindex="-1"><a class="header-anchor" href="#网格项布局" aria-hidden="true">#</a> 网格项布局</h1><p>在网格容器中，每条网格线都根据其在网格上的位置给出一个编号。第一条网格线（行或列）的编号为 1，第二条为 2，依此类推。</p><p>例如，下图在一个三列两行的网格容器上存在的网格线的数量，其中列线是橙色圆圈内从 1 到 4 的数字，而行线是蓝色圆圈内的数字从 1 到 3 圈。</p><figure><img src="'+i+`" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><p>CSS Grid 提供了一些属性来控制网格项目沿这些网格线的位置，以及它们在水平和垂直方向上跨越的宽度。</p><ol><li>grid-column-start</li><li>grid-column-end</li><li>grid-row-start</li><li>grid-row-end</li></ol><h2 id="grid-column-start" tabindex="-1"><a class="header-anchor" href="#grid-column-start" aria-hidden="true">#</a> grid-column-start</h2><p>可以使用 grid-column-start 属性来指定网格项沿网格容器内的列网格线的水平起始位置。这个开始位置定义了网格项目左边缘的开始。</p><p>如下例, 第一个网格项现在从第 2 列开始，而其他网格项被移动，换行到了新行或在网格上创建了空白空间。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container div:nth-of-type(1)</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column-start</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+e+`" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h2 id="grid-column-end" tabindex="-1"><a class="header-anchor" href="#grid-column-end" aria-hidden="true">#</a> grid-column-end</h2><p>使用 grid-column-end属性设置网格项的结束位置。</p><p>下例中, 使得第一个网格项从第 2 列开始，跨越两条网格线，并在第 4 行结束。使用 grid-column-start 和 grid-column-end 属性，可以有效地控制网格的水平起始位置以及它跨越网格的宽度。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container div:nth-of-type(1)</span> <span class="token punctuation">{</span>
    <span class="token property">grid-column-start</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
    <span class="token property">grid-column-end</span><span class="token punctuation">:</span> 4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+`" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h2 id="grid-row-start" tabindex="-1"><a class="header-anchor" href="#grid-row-start" aria-hidden="true">#</a> grid-row-start</h2><p>grid-row-start 属性来指定网格项沿网格容器内水平（行）网格线的垂直起始位置。它用于设置网格项开始的行。</p><p>下例中, 使用 grid-row-start属性将第二个 div 元素的垂直起始位置设置为第 1 行。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container div:nth-of-type(2)</span> <span class="token punctuation">{</span>
    <span class="token property">grid-row-start</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+`" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h2 id="grid-row-end" tabindex="-1"><a class="header-anchor" href="#grid-row-end" aria-hidden="true">#</a> grid-row-end</h2><p>可以使用 grid-row-end 属性来指定网格项沿网格容器内水平（行）网格线的垂直结束位置。</p><p>下例中, 第二个网格项从第一行开始，跨越三个网格线，在第 4 行结束。使用 grid-row-start和 grid-row-end 属性，可以有效地控制网格项的垂直起始位置及其在网格中的高度。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container div:nth-of-type(2)</span> <span class="token punctuation">{</span>
   <span class="token property">grid-row-start</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
   <span class="token property">grid-row-start</span><span class="token punctuation">:</span> 4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://zhangqiang.work/lab/css_layout_grid/</li><li>https://www.toutiao.com/article/7173980850827117096/</li><li>https://www.zhangxinxu.com/wordpress/2018/11/display-grid-css-css3/</li></ol>',28),p=[o];function u(g,m){return a(),s("div",null,p)}const b=n(l,[["render",u],["__file","5网格项布局.html.vue"]]);export{b as default};
