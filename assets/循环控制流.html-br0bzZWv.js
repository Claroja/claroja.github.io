import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-7knaTE3M.js";const p={},t=e(`<h1 id="循环控制流" tabindex="-1"><a class="header-anchor" href="#循环控制流" aria-hidden="true">#</a> 循环控制流</h1><h2 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h2><p>语法:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span>初始化变量<span class="token punctuation">;</span> 条件表达式<span class="token punctuation">;</span> 操作表达式<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 循环体</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>初始化变量 就是用var 声明的一个普通变量， 通常用于作为计数器使用</li><li>条件表达式 就是用来决定每一次循环是否继续执行 就是终止的条件</li><li>操作表达式 是每次循环最后执行的代码 经常用于我们计数器变量进行更新（递增或者递减）</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;你好吗&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本遍历-for" tabindex="-1"><a class="header-anchor" href="#基本遍历-for" aria-hidden="true">#</a> 基本遍历 for</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">9</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  str <span class="token operator">=</span> str <span class="token operator">+</span> i<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="遍历数组-for-of" tabindex="-1"><a class="header-anchor" href="#遍历数组-for-of" aria-hidden="true">#</a> 遍历数组 for...of</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> array1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> element <span class="token keyword">of</span> array1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Expected output: &quot;a&quot;</span>
<span class="token comment">// Expected output: &quot;b&quot;</span>
<span class="token comment">// Expected output: &quot;c&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="遍历对象-for-in" tabindex="-1"><a class="header-anchor" href="#遍历对象-for-in" aria-hidden="true">#</a> 遍历对象 for...in</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> prop <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;obj.&quot;</span> <span class="token operator">+</span> prop <span class="token operator">+</span> <span class="token string">&quot; = &quot;</span> <span class="token operator">+</span> obj<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Output:</span>
<span class="token comment">// &quot;obj.a = 1&quot;</span>
<span class="token comment">// &quot;obj.b = 2&quot;</span>
<span class="token comment">// &quot;obj.c = 3&quot;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="while" tabindex="-1"><a class="header-anchor" href="#while" aria-hidden="true">#</a> while</h2><p>语法:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">while</span> <span class="token punctuation">(</span>条件表达式<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 循环体</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行逻辑: 当条件表达式结果为true 则执行循环体 否则 退出循环</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;好啊有&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    num
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>do while 语法: // 1.do while 循环 语法结构</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token comment">// 循环体</span>
<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>条件表达式<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行逻辑: 跟while不同的地方在于 do while 先执行一次循环体 在判断条件 如果条件表达式结果为真，则继续执行循环体，否则退出循环</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">do</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;how are you?&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="continue" tabindex="-1"><a class="header-anchor" href="#continue" aria-hidden="true">#</a> continue</h2><p>continue 退出本次当前次的循环, 继续执行剩余次数循环</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">continue</span><span class="token punctuation">;</span> <span class="token comment">// 只要遇见 continue就退出本次循环 直接跳到 i++</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我正在吃第&#39;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&#39;个包子&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="break" tabindex="-1"><a class="header-anchor" href="#break" aria-hidden="true">#</a> break</h2><p>break 退出整个循环</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我正在吃第&#39;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&#39;个包子&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><p>https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in</p>`,29),o=[t];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","循环控制流.html.vue"]]);export{d as default};
