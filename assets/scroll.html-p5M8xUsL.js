import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-0JgdiRQ-.js";const p={},e=t(`<h1 id="scroll" tabindex="-1"><a class="header-anchor" href="#scroll" aria-hidden="true">#</a> scroll</h1><p>使用scroll系列的相关属性可以动态的得到该元素的大小、滚动距离等。</p><p><a href="1.png">1.png</a></p><table><thead><tr><th>scroll系列属性</th><th>作用</th></tr></thead><tbody><tr><td>element.scrollTop</td><td>返回被卷去的上侧距离,返回数值不带单位</td></tr><tr><td>element.scrollLeft</td><td>返回被卷去的左侧距离，返回数值不带单位</td></tr><tr><td>element.scrollWidth</td><td>返回自身实际的宽度，不含边框，返回数值不带单位</td></tr><tr><td>element.scrollHeight</td><td>返回自身实际的高度，不含边框，返回数值不带单位</td></tr></tbody></table><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">div</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 10px solid red<span class="token punctuation">;</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// scroll 系列</span>
        <span class="token keyword">var</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>div<span class="token punctuation">.</span>scrollHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>div<span class="token punctuation">.</span>clientHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// scroll滚动事件当我们滚动条发生变化会触发的事件</span>
        div<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>div<span class="token punctuation">.</span>scrollTop<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[e];function l(o,i){return s(),a("div",null,c)}const r=n(p,[["render",l],["__file","scroll.html.vue"]]);export{r as default};
