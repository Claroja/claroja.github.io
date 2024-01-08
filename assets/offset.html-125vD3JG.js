import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-YE2Hltoy.js";const p={},e=t(`<h1 id="offset" tabindex="-1"><a class="header-anchor" href="#offset" aria-hidden="true">#</a> offset</h1><p>offset 翻译过来就是偏移量， 我们使用 offset 系列相关属性可以动态的得到该元素的位置（偏移）、大小等。</p><ol><li>获得元素距离带有定位父元素的位置</li><li>获得元素自身的大小（宽度高度） 注意： 返回的数值都不带单位</li></ol><h2 id="offset系列属性" tabindex="-1"><a class="header-anchor" href="#offset系列属性" aria-hidden="true">#</a> offset系列属性</h2><table><thead><tr><th>offset系列属性</th><th>作用</th></tr></thead><tbody><tr><td>element.offsetParent</td><td>返回作为该元素带有定位的父级元素如果父级都没有定位则返回body</td></tr><tr><td>element.offsetTop</td><td>返回元素相对带有定位父元素上方的偏移</td></tr><tr><td>element.offsetLeft</td><td>返回元素相对带有定位父元素左边框的偏移</td></tr><tr><td>element.offsetWidth</td><td>返回自身包括padding边框、内容区的宽度, 返回数值不带单位</td></tr><tr><td>elementoffsetHeight</td><td>返回自身包括padding边框、内容区的高度, 返回数值不带单位</td></tr></tbody></table><h2 id="offset-与-style-区别" tabindex="-1"><a class="header-anchor" href="#offset-与-style-区别" aria-hidden="true">#</a> offset 与 style 区别</h2><table><thead><tr><th>offset</th><th>style</th></tr></thead><tbody><tr><td>offset 可以得到任意样式表中的样式值</td><td>style 只能得到行内样式表中的样式值</td></tr><tr><td>offset 系列获得的数值是没有单位的</td><td></td></tr><tr><td>offsetWidth 包含padding+border+width</td><td>style.width 获得不包含padding和border 的值</td></tr><tr><td>offsetWidth 等属性是只读属性，只能获取不能赋值</td><td>style.width 是可读写属性，可以获取也可以赋值</td></tr><tr><td>所以，我们想要获取元素大小位置，用offset更合适</td><td>所以，我们想要给元素更改值，则需要用style改变</td></tr></tbody></table><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><p>获取鼠标在盒子里的距离</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.box</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// 我们在盒子内点击， 想要得到鼠标距离盒子左右的距离。</span>
        <span class="token comment">// 1. 首先得到鼠标在页面中的坐标（ e.pageX, e.pageY）</span>
        <span class="token comment">// 2. 其次得到盒子在页面中的距离(box.offsetLeft, box.offsetTop)</span>
        <span class="token comment">// 3. 用鼠标距离页面的坐标减去盒子在页面中的距离， 得到 鼠标在盒子内的坐标</span>
        <span class="token keyword">var</span> box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        box<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> x <span class="token operator">=</span> e<span class="token punctuation">.</span>pageX <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offsetLeft<span class="token punctuation">;</span>
            <span class="token keyword">var</span> y <span class="token operator">=</span> e<span class="token punctuation">.</span>pageY <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offsetTop<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;x坐标是&#39;</span> <span class="token operator">+</span> x <span class="token operator">+</span> <span class="token string">&#39; y坐标是&#39;</span> <span class="token operator">+</span> y<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应用: 拖动元素</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
        div <span class="token punctuation">{</span>
            <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
            background<span class="token operator">-</span>color<span class="token operator">:</span> red<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;div&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
        <span class="token keyword">var</span> title <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// (1) 当我们鼠标按下， 就获得鼠标在盒子内的坐标</span>
        title<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousedown&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> x <span class="token operator">=</span> e<span class="token punctuation">.</span>pageX <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offsetLeft<span class="token punctuation">;</span>
            <span class="token keyword">var</span> y <span class="token operator">=</span> e<span class="token punctuation">.</span>pageY <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offsetTop<span class="token punctuation">;</span>
        <span class="token comment">// (2) 鼠标移动的时候，把鼠标在页面中的坐标，减去 鼠标在盒子内的坐标就是模态框的left和top值</span>
            document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span> move<span class="token punctuation">)</span>
            <span class="token keyword">function</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
                title<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> e<span class="token punctuation">.</span>pageX <span class="token operator">-</span> x <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span> <span class="token comment">//这里的this不是title</span>
                title<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> e<span class="token punctuation">.</span>pageY <span class="token operator">-</span> y <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token comment">// (3) 鼠标弹起，就让鼠标移动事件移除</span>
            document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mouseup&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                document<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span> move<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[e];function c(l,i){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","offset.html.vue"]]);export{d as default};
