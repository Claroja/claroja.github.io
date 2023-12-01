import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,e as o}from"./app-MTzDpLgJ.js";const t={},p=o(`<h1 id="符号-控制流" tabindex="-1"><a class="header-anchor" href="#符号-控制流" aria-hidden="true">#</a> 符号&amp;&amp;控制流</h1><p><code>$$</code>连接多个语句时, 只有在前面的条件判定为true时, 后面的才会继续执行判断. 这样的特性就可以用来实现&quot;前面必须为真才执行后面&quot;的逻辑. 参考operator文章中的逻辑中断章节.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span> <span class="token comment">// hello, 前面半句是true, 所以console执行了</span>
<span class="token boolean">false</span> <span class="token operator">&amp;&amp;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span> <span class="token comment">// false, 前面的逻辑是false, 所以console没有执行</span>
<span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">false</span> <span class="token comment">//false</span>
<span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">false</span> <span class="token operator">&amp;&amp;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span> <span class="token comment">//false, 因为前面 true &amp;&amp; false的结果为false, 所以后面没有执行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>又因为空字符串<code>&quot;&quot;</code>和<code>0</code>都会中断逻辑, 所以也可以实现以下的逻辑判断:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;&quot;</span> <span class="token operator">&amp;&amp;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>  <span class="token comment">//&#39;&#39;</span>
<span class="token string">&quot;123&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;&quot;</span> <span class="token operator">&amp;&amp;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span> <span class="token comment">//&#39;&#39;</span>
<span class="token string">&quot;123&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;123&quot;</span> <span class="token operator">&amp;&amp;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span> <span class="token comment">//hello</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),e=[p];function c(l,u){return n(),a("div",null,e)}const k=s(t,[["render",c],["__file","符号__控制流.html.vue"]]);export{k as default};
