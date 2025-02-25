import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,a as e}from"./app-nD1Z-e8V.js";const o={},p=e(`<h1 id="union" tabindex="-1"><a class="header-anchor" href="#union" aria-hidden="true">#</a> union</h1><p><code>UNION</code> removes duplicate records <code>UNION</code> ALL does not.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token string">&#39;foo&#39;</span> <span class="token keyword">AS</span> bar <span class="token keyword">UNION</span> <span class="token keyword">SELECT</span> <span class="token string">&#39;foo&#39;</span> <span class="token keyword">AS</span> bar
<span class="token operator">+</span><span class="token comment">-----+</span>
<span class="token operator">|</span> bar <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----+</span>
<span class="token operator">|</span> foo <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token string">&#39;foo&#39;</span> <span class="token keyword">AS</span> bar <span class="token keyword">UNION</span> <span class="token keyword">ALL</span> <span class="token keyword">SELECT</span> <span class="token string">&#39;foo&#39;</span> <span class="token keyword">AS</span> bar
<span class="token operator">+</span><span class="token comment">-----+</span>
<span class="token operator">|</span> bar <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----+</span>
<span class="token operator">|</span> foo <span class="token operator">|</span>
<span class="token operator">|</span> foo <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>refs: https://stackoverflow.com/questions/49925/what-is-the-difference-between-union-and-union-all</p>`,5),r=[p];function t(l,c){return n(),a("div",null,r)}const k=s(o,[["render",t],["__file","union.html.vue"]]);export{k as default};
