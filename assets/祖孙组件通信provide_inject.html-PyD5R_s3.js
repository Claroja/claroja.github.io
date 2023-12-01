import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-MTzDpLgJ.js";const p={},t=e(`<h1 id="祖孙组件通信provide-inject" tabindex="-1"><a class="header-anchor" href="#祖孙组件通信provide-inject" aria-hidden="true">#</a> 祖孙组件通信provide&amp;inject</h1><p>实现祖孙组件间通信, 父组件有一个 <code>provide</code> 选项来提供数据，后代组件有一个 <code>inject</code> 选项来开始使用这些数据</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 祖组件中：</span>
<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token operator">...</span><span class="token operator">...</span>
<span class="token keyword">let</span> car <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;奔驰&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">price</span><span class="token operator">:</span><span class="token string">&#39;40万&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;car&#39;</span><span class="token punctuation">,</span>car<span class="token punctuation">)</span>
<span class="token operator">...</span><span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//后代组件中：</span>
<span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span>context</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token operator">...</span><span class="token operator">...</span>
    <span class="token keyword">const</span> car <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;car&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>car<span class="token punctuation">}</span>
<span class="token operator">...</span><span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[t];function c(i,r){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","祖孙组件通信provide_inject.html.vue"]]);export{d as default};
