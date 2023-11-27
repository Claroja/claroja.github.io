import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-O0xqlHfm.js";const o={},t=e(`<h1 id="位置与大小" tabindex="-1"><a class="header-anchor" href="#位置与大小" aria-hidden="true">#</a> 位置与大小</h1><h2 id="位置与大小-1" tabindex="-1"><a class="header-anchor" href="#位置与大小-1" aria-hidden="true">#</a> 位置与大小</h2><p><code>window.screenX</code>和<code>window.screenY</code>属性，返回浏览器窗口左上角相对于当前屏幕左上角的水平距离和垂直距离（单位像素）。这两个属性只读。</p><p><code>window.innerHeight</code>和<code>window.innerWidth</code>属性，返回网页在当前窗口中可见部分的高度和宽度，即“视口”（viewport）的大小（单位像素）。这两个属性只读。 用户放大网页的时候（比如将网页从100%的大小放大为200%），这两个属性会变小。因为这时网页的像素大小不变（比如宽度还是960像素），只是每个像素占据的屏幕空间变大了，因为可见部分（视口）就变小了。 注意，这两个属性值包括滚动条的高度和宽度。</p><p><code>window.outerHeight</code>和<code>window.outerWidth</code>属性返回浏览器窗口的高度和宽度，包括浏览器菜单和边框（单位像素）。这两个属性只读。</p><p><code>window.moveTo()</code>方法用于移动浏览器窗口到指定位置。它接受两个参数，分别是窗口左上角距离屏幕左上角的水平距离和垂直距离，单位为像素。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>  <span class="token comment">// 将窗口移动到屏幕(100, 200)的位置。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>window.moveBy</code>方法将窗口移动到一个相对位置。它接受两个参数，分布是窗口左上角向右移动的水平距离和向下移动的垂直距离，单位为像素。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">moveBy</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span>  <span class="token comment">// 将窗口向右移动25像素、向下移动50像素。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为了防止有人滥用这两个方法，随意移动用户的窗口，目前只有一种情况，浏览器允许用脚本移动窗口：该窗口是用window.open方法新建的，并且它所在的 Tab 页是当前窗口里面唯一的。除此以外的情况，使用上面两个方法都是无效的。</p><p><code>window.resizeTo()</code>方法用于缩放窗口到指定大小。</p><p>它接受两个参数，第一个是缩放后的窗口宽度（outerWidth属性，包含滚动条、标题栏等等），第二个是缩放后的窗口高度（outerHeight属性）。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">resizeTo</span><span class="token punctuation">(</span>
  window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>availWidth <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span>
  window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>availHeight <span class="token operator">/</span> <span class="token number">2</span>
<span class="token punctuation">)</span> <span class="token comment">// 将当前窗口缩放到，屏幕可用区域的一半宽度和高度。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>window.resizeBy()</code>方法用于缩放窗口。它与window.resizeTo()的区别是，它按照相对的量缩放，window.resizeTo()需要给出缩放后的绝对大小。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">resizeBy</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">200</span><span class="token punctuation">)</span>  <span class="token comment">//将当前窗口的宽度和高度，都缩小200像素。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15),c=[t];function p(i,d){return s(),a("div",null,c)}const u=n(o,[["render",p],["__file","位置与大小.html.vue"]]);export{u as default};
