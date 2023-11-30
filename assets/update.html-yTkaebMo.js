import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,e}from"./app-0JgdiRQ-.js";const t={},o=e(`<h1 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> update</h1><p>1）利用关联查询更改</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">UPDATE</span> table_name
<span class="token keyword">SET</span> column1<span class="token operator">=</span>value1<span class="token punctuation">,</span>column2<span class="token operator">=</span>value2<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">WHERE</span> some_column<span class="token operator">=</span>some_value<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）利用关联查询更改</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 把该语句中from 后的语句理解为一张虚表  </span>
<span class="token keyword">update</span> goods g <span class="token keyword">inner</span> <span class="token keyword">join</span> good_cates gc <span class="token keyword">on</span> g<span class="token punctuation">.</span>cate_name<span class="token operator">=</span>gc<span class="token punctuation">.</span>name <span class="token keyword">set</span> g<span class="token punctuation">.</span>cate_name<span class="token operator">=</span>gc<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,5),p=[o];function c(l,d){return n(),s("div",null,p)}const u=a(t,[["render",c],["__file","update.html.vue"]]);export{u as default};
