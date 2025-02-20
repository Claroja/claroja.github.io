import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-9tftCahk.js";const p={},e=t(`<h1 id="mouseevent" tabindex="-1"><a class="header-anchor" href="#mouseevent" aria-hidden="true">#</a> mouseEvent</h1><h2 id="常见的鼠标事件" tabindex="-1"><a class="header-anchor" href="#常见的鼠标事件" aria-hidden="true">#</a> 常见的鼠标事件:</h2><table><thead><tr><th>鼠标事件</th><th>触发条件</th></tr></thead><tbody><tr><td>onclick</td><td>鼠标点击左键触发</td></tr><tr><td>onmouseover</td><td>鼠标经过触发, 子盒子也会触发</td></tr><tr><td>mouseenter</td><td>鼠标经过触发, 子盒子不会触发</td></tr><tr><td>onmouseout</td><td>鼠标离开触发</td></tr><tr><td>onfocus</td><td>获得鼠标焦点触发</td></tr><tr><td>onblur</td><td>失去鼠标焦点触发</td></tr><tr><td>onmousemove</td><td>鼠标移动触发</td></tr><tr><td>onmouseup</td><td>鼠标弹起触发</td></tr><tr><td>onmousedown</td><td>鼠标按下触发</td></tr><tr><td>contextmenu</td><td>禁止鼠标右键菜单</td></tr><tr><td>selectstart</td><td>禁止鼠标选中</td></tr></tbody></table><p>应用: 禁止鼠标右键</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    我是一段不愿意分享的文字
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// 1. contextmenu 我们可以禁用右键菜单</span>
        document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;contextmenu&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment">// 2. 禁止选中文字 selectstart</span>
        document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;selectstart&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mouseover和mouseenter 两者之间的差别是mouseover 鼠标经过自身盒子会触发，经过子盒子还会触发。 mouseenter 只会经过自身盒子触发之所以这样，就是因为mouseenter不会冒泡</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.father</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 100px auto<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token selector">.son</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>father<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>son<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">var</span> father <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.father&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> son <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.son&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        father<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mouseenter&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="鼠标事件对象" tabindex="-1"><a class="header-anchor" href="#鼠标事件对象" aria-hidden="true">#</a> 鼠标事件对象</h2><table><thead><tr><th>鼠标事件对象</th><th>说明</th></tr></thead><tbody><tr><td>e.pageX**（重点）**</td><td>返回鼠标相对于文档页面的X坐标IE9+支持</td></tr><tr><td>e.pageY**（重点）**</td><td>返回鼠标相对于文档页面的Y坐标IE9+支持</td></tr><tr><td>e.clientX</td><td>返回鼠标相对于浏览器窗口可视区的X坐标</td></tr><tr><td>e.clientY</td><td>返回鼠标相对于浏览器窗口可视区的Y坐标</td></tr><tr><td>e.screenX</td><td>返回鼠标相对于电脑屏幕的X坐标</td></tr><tr><td>e.screenY</td><td>返回鼠标相对于电脑屏幕的Y坐标</td></tr></tbody></table><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// 鼠标事件对象 MouseEvent</span>
        document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 1. client 鼠标在可视区的x和y坐标</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>clientX<span class="token punctuation">)</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>clientY<span class="token punctuation">)</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;---------------------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 2. page 鼠标在页面文档的x和y坐标</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>pageX<span class="token punctuation">)</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>pageY<span class="token punctuation">)</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;---------------------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 3. screen 鼠标在电脑屏幕的x和y坐标</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>screenX<span class="token punctuation">)</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>screenY<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应用: 元素随着鼠标移动</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">div</span> <span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">var</span> pic <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 1. mousemove只要我们鼠标移动1px 就会触发这个事件</span>
            <span class="token comment">// 2.核心原理： 每次鼠标移动，我们都会获得最新的鼠标坐标， 把这个x和y坐标做为图片的top和left 值就可以移动图片</span>
            <span class="token keyword">var</span> x <span class="token operator">=</span> e<span class="token punctuation">.</span>pageX<span class="token punctuation">;</span>
            <span class="token keyword">var</span> y <span class="token operator">=</span> e<span class="token punctuation">.</span>pageY<span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;x坐标是&#39;</span> <span class="token operator">+</span> x<span class="token punctuation">,</span> <span class="token string">&#39;y坐标是&#39;</span> <span class="token operator">+</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//3 . 千万不要忘记给left 和top 添加px 单位</span>
            pic<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> x <span class="token operator">-</span> <span class="token number">50</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
            pic<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> y <span class="token operator">-</span> <span class="token number">40</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[e];function o(l,u){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","mouseEvent.html.vue"]]);export{d as default};
