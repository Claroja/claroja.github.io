import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-7knaTE3M.js";const t={},p=e(`<h1 id="keyframe" tabindex="-1"><a class="header-anchor" href="#keyframe" aria-hidden="true">#</a> keyframe</h1><h2 id="keyframe-1" tabindex="-1"><a class="header-anchor" href="#keyframe-1" aria-hidden="true">#</a> keyframe</h2><ol><li><p>使用 @keyframes 定义动画, 该动画使一个元素从透明变成不透明</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> slidein</span> <span class="token punctuation">{</span>
    <span class="token selector">from</span> <span class="token punctuation">{</span> <span class="token comment">/*等价于0%*/</span>
        <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">to</span> <span class="token punctuation">{</span> <span class="token comment">/*等价于100%*/</span>
        <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>通过 animation 属性将其应用到 HTML 元素上。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.fade-in-element</span> <span class="token punctuation">{</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> fadeIn 1s ease-in-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="javascript控制动画" tabindex="-1"><a class="header-anchor" href="#javascript控制动画" aria-hidden="true">#</a> javascript控制动画</h2><h3 id="javascript-触发-css-动画" tabindex="-1"><a class="header-anchor" href="#javascript-触发-css-动画" aria-hidden="true">#</a> JavaScript 触发 CSS 动画</h3><p>JavaScript 可以用来添加或移除元素的类，从而触发或停止 CSS 动画。以下是一个例子，展示了如何使用 JavaScript 来触发之前定义的 fadeIn 动画。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 获取需要触发动画的元素</span>
<span class="token keyword">var</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.element-to-fade-in&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用JavaScript添加类来触发动画</span>
element<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;fade-in-element&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript-控制动画的播放状态" tabindex="-1"><a class="header-anchor" href="#javascript-控制动画的播放状态" aria-hidden="true">#</a> JavaScript 控制动画的播放状态</h3><p>JavaScript 还可以用来控制动画的播放状态，例如暂停、播放、反转等。以下是如何使用 Element.animate() 方法来控制动画。下例中, element.animate() 方法接受关键帧和动画选项作为参数，从而实现动画的播放。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 获取需要控制动画的元素</span>
<span class="token keyword">var</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.animated-element&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 定义动画关键帧</span>
<span class="token keyword">var</span> keyframes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">&#39;translateX(0)&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">&#39;translateX(100px)&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 定义动画选项</span>
<span class="token keyword">var</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">iterations</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 使用Element.animate()播放动画</span>
element<span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>keyframes<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript-事件监听与动画控制" tabindex="-1"><a class="header-anchor" href="#javascript-事件监听与动画控制" aria-hidden="true">#</a> javascript 事件监听与动画控制</h3><ol><li><p>通过监听 animationend 和 animationstart 事件，我们可以在动画开始和结束时执行特定的逻辑，比如更新用户界面或状态提示。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 获取需要绑定动画事件的元素</span>
<span class="token keyword">var</span> animatedElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.animated-element&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 监听动画结束事件</span>
animatedElement<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;animationend&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;动画结束&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 监听动画开始事件</span>
animatedElement<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;animationstart&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;动画开始&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>通过 Element.pause() 和 Element.play() 方法来控制动画的暂停和播放。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 获取需要控制动画的元素</span>
<span class="token keyword">var</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.animated-element&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 暂停动画</span>
element<span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 播放动画</span>
element<span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://developer.mozilla.org/zh-CN/docs/Web/CSS/@keyframes</li><li>https://my.oschina.net/emacs_8525177/blog/16583651</li></ol>`,14),c=[p];function i(o,l){return s(),a("div",null,c)}const d=n(t,[["render",i],["__file","6_2_2关键帧(keyframe).html.vue"]]);export{d as default};
