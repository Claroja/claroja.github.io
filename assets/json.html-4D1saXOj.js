import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-SnI5rGHA.js";const e={},o=t(`<h1 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> json</h1><ol><li><code>JSON.parse()</code> 字符串转对象</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token string">&#39;{&quot;result&quot;:true, &quot;count&quot;:42}&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><code>JSON.stringify()</code> 对象转字符串</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参考: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON</p>`,6),p=[o];function c(l,i){return s(),a("div",null,p)}const d=n(e,[["render",c],["__file","json.html.vue"]]);export{d as default};
