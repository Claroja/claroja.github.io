import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-7knaTE3M.js";const p={},t=e(`<h1 id="条件控制流" tabindex="-1"><a class="header-anchor" href="#条件控制流" aria-hidden="true">#</a> 条件控制流</h1><h2 id="if条件" tabindex="-1"><a class="header-anchor" href="#if条件" aria-hidden="true">#</a> if条件</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>条件表达式<span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 语句1;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>条件表达式<span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 语句2;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>条件表达式<span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 语句3;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 最后的语句;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三元表达式" tabindex="-1"><a class="header-anchor" href="#三元表达式" aria-hidden="true">#</a> 三元表达式</h2><ul><li>语法: <code>条件表达式 ？ 表达式1 ： 表达式2</code></li><li>执行思路: 如果条件表达式结果为真 则 返回 表达式1 的值 如果条件表达式结果为假 则返回 表达式2 的值</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> result <span class="token operator">=</span> num <span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token operator">?</span> <span class="token string">&#39;是的&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;不是的&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 我们知道表达式是有返回值的</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// if (num &gt; 5) {</span>
<span class="token comment">//     result = &#39;是的&#39;;</span>
<span class="token comment">// } else {</span>
<span class="token comment">//     result = &#39;不是的&#39;;</span>
<span class="token comment">// }</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> switch</h2><p>switch 转换、开关 case 小例子或者选项的意思</p><ul><li><p>语法:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">switch</span> <span class="token punctuation">(</span>表达式<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token literal-property property">value1</span><span class="token operator">:</span>
        执行语句<span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token literal-property property">value2</span><span class="token operator">:</span>
        执行语句<span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token operator">...</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
            执行最后的语句<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>执行逻辑: 利用我们的表达式的值 和 case 后面的选项值相匹配 如果匹配上，就执行该case 里面的语句 如果都没有匹配上，那么执行 default里面的语句</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 1. 我们开发里面 表达式我们经常写成变量</span>
<span class="token comment">// 2. 我们num 的值 和 case 里面的值相匹配的时候是 全等   必须是值和数据类型一致才可以 num === 1</span>
<span class="token comment">// 3. break 如果当前的case里面没有break 则不会退出switch 是继续执行下一个case</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),c=[t];function o(l,i){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","条件控制流.html.vue"]]);export{d as default};
