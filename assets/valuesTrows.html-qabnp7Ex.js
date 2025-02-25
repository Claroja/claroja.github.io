import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,a as e}from"./app-nD1Z-e8V.js";const t={},i=e(`<h1 id="valuestrows" tabindex="-1"><a class="header-anchor" href="#valuestrows" aria-hidden="true">#</a> valuesTrows</h1><div class="language-data line-numbers-mode" data-ext="data"><pre class="language-data"><code>id | name    
1  | a,b,c    
2  | b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-data line-numbers-mode" data-ext="data"><pre class="language-data"><code>id | name    
1  | a    
1  | b    
1  | c    
2  | b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="values-to-rows" tabindex="-1"><a class="header-anchor" href="#values-to-rows" aria-hidden="true">#</a> values to rows</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> t<span class="token punctuation">.</span>id<span class="token punctuation">,</span> j<span class="token punctuation">.</span>name
<span class="token keyword">from</span> mytable t
<span class="token keyword">join</span> json_table<span class="token punctuation">(</span>
  <span class="token keyword">replace</span><span class="token punctuation">(</span>json_array<span class="token punctuation">(</span>t<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&quot;,&quot;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token string">&#39;$[*]&#39;</span> <span class="token keyword">columns</span> <span class="token punctuation">(</span>name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> path <span class="token string">&#39;$&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> j
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rows-to-values" tabindex="-1"><a class="header-anchor" href="#rows-to-values" aria-hidden="true">#</a> rows to values</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> id<span class="token punctuation">,</span>
   GROUP_CONCAT<span class="token punctuation">(</span>name SEPARATOR <span class="token string">&#39;, &#39;</span><span class="token punctuation">)</span>
<span class="token keyword">FROM</span> mytable
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> id<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>refs: https://stackoverflow.com/questions/17942508/sql-split-values-to-multiple-rows https://stackoverflow.com/questions/276927/can-i-concatenate-multiple-mysql-rows-into-one-field</p>`,8),l=[i];function o(c,d){return n(),a("div",null,l)}const u=s(t,[["render",o],["__file","valuesTrows.html.vue"]]);export{u as default};
