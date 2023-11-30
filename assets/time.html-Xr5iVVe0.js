import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-0JgdiRQ-.js";const e={},p=t(`<h1 id="time" tabindex="-1"><a class="header-anchor" href="#time" aria-hidden="true">#</a> time</h1><h2 id="settimeout-定时器" tabindex="-1"><a class="header-anchor" href="#settimeout-定时器" aria-hidden="true">#</a> setTimeout() 定时器</h2><p>setTimeout() 方法用于设置一个定时器，该定时器在定时器到期后执行调用函数。 语法: <code>window.setTimeout(调用函数, [延迟的毫秒数]);</code> 创建定时器 <code>clearTimeout()</code> 删除定时器 注意：</p><ol><li>window 可以省略。</li><li>延迟的毫秒数省略默认是 0，如果写，必须是毫秒。</li><li>因为定时器可能有很多，所以我们经常给定时器赋值一个标识符。</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">function</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;爆炸了&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
        <span class="token keyword">var</span> timer1 <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> timer2 <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//删除定时器</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="setinterval-间隔定时器" tabindex="-1"><a class="header-anchor" href="#setinterval-间隔定时器" aria-hidden="true">#</a> setInterval 间隔定时器</h2><p>setInterval() 方法重复调用一个函数，每隔这个时间，就去调用一次回调函数。 语法: <code>window.setInterval(回调函数, [间隔的毫秒数]);</code> 创建定时器 <code>clearInterval(timer)</code> 清除定时器 注意：</p><ol><li>window 可以省略。</li><li>间隔的毫秒数省略默认是 0，如果写，必须是毫秒，表示每隔多少毫秒就自动调用这个函数。</li><li>因为定时器可能有很多，所以我们经常给定时器赋值一个标识符。</li><li>第一次执行也是间隔毫秒数之后执行，之后每隔毫秒数就执行一次。</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// 1. setInterval </span>
        <span class="token comment">// 语法规范：  window.setInterval(调用函数, 延时时间);</span>
        <span class="token keyword">var</span> timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;继续输出&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// clearInterval(timer) 清除定时器</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[p];function o(l,i){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","time.html.vue"]]);export{d as default};
