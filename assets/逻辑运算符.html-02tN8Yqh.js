import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,e}from"./app-SnI5rGHA.js";const p={},o=e(`<h1 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h1><h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. 逻辑与 &amp;&amp;  and 两侧都为true  结果才是 true  只要有一侧为false  结果就为false </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token operator">&amp;&amp;</span> <span class="token number">3</span> <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">&lt;</span> <span class="token number">5</span> <span class="token operator">&amp;&amp;</span> <span class="token number">3</span> <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token comment">// 2. 逻辑或 || or  两侧都为false  结果才是假 false  只要有一侧为true  结果就是true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token operator">||</span> <span class="token number">3</span> <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token operator">||</span> <span class="token number">3</span> <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token comment">// 3. 逻辑非  not  ！ </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="逻辑中断" tabindex="-1"><a class="header-anchor" href="#逻辑中断" aria-hidden="true">#</a> 逻辑中断</h2><p>逻辑中断是指当进行逻辑判断时, 只有前面的逻辑判断为真的时候, 后面的逻辑才会继续判断, 例如:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>  <span class="token comment">// 前面的逻辑为true, 才执行了console</span>
<span class="token boolean">false</span> <span class="token operator">&amp;&amp;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>  <span class="token comment">// 前面的逻辑为false, 所以没有执行console</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&amp;&amp;</code>和<code>||</code> 不仅可以用于布尔型的值，还可以用于非布尔值，并且返回的结果可以是任何类型的值，例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> bool <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span>  <span class="token comment">// 返回值为 true</span>
<span class="token keyword">let</span> bool <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&#39;haha&#39;</span> <span class="token comment">// 返回值为&#39;haha&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>由于这个特性, 除了<code>false</code>之外, 以下非布尔值也可以让逻辑中断</p><ul><li>null</li><li>NaN</li><li>0</li><li>空字符串(&quot;&quot; or &#39;&#39; or \`\`)</li><li>undefined</li></ul><p>例如:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;haha&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">true</span> <span class="token comment">// 返回值为 null</span>
<span class="token string">&#39;haha&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">true</span> <span class="token comment">// 返回值为 0</span>
<span class="token string">&#39;haha&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&#39;&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">true</span> <span class="token comment">// 返回值为 &#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),t=[o];function l(c,r){return n(),a("div",null,t)}const k=s(p,[["render",l],["__file","逻辑运算符.html.vue"]]);export{k as default};
