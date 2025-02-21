import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,e}from"./app-jdLxCr9I.js";const t={},p=e(`<h1 id="variable" tabindex="-1"><a class="header-anchor" href="#variable" aria-hidden="true">#</a> variable</h1><h2 id="user-defined-variables-prefixed-with" tabindex="-1"><a class="header-anchor" href="#user-defined-variables-prefixed-with" aria-hidden="true">#</a> User-defined variables (prefixed with @)</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> <span class="token variable">@start</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token variable">@finish</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token variable">@start</span> :<span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token variable">@finish</span> :<span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token variable">@price</span> :<span class="token operator">=</span> <span class="token function">MAX</span><span class="token punctuation">(</span>product<span class="token punctuation">.</span>price<span class="token punctuation">)</span> <span class="token keyword">FROM</span> product 

<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">\`</span>t<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>c<span class="token punctuation">\`</span></span><span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token variable">@a</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>scope: User-defined variables are session-specific. That is, a user variable defined by one client cannot be seen or used by other clients.</p><h3 id="not-identifier" tabindex="-1"><a class="header-anchor" href="#not-identifier" aria-hidden="true">#</a> not identifier</h3><p>User variables are intended to provide data values. They cannot be used directly in an SQL statement as an identifier.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">set</span> <span class="token variable">@tablename</span> <span class="token operator">=</span> <span class="token string">&#39;test&#39;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token variable">@tablename</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>This produces the following error: Must declare the table variable &quot;@tablename&quot;</p><p><code>@tablename</code> is a string</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">set</span> <span class="token variable">@tablename</span> <span class="token operator">=</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">set</span> <span class="token variable">@sql</span> <span class="token operator">=</span> <span class="token string">&#39;select * from &#39;</span> <span class="token operator">+</span> <span class="token variable">@tablename</span><span class="token punctuation">;</span>
<span class="token keyword">PREPARE</span> myquery <span class="token keyword">FROM</span> <span class="token variable">@sql</span><span class="token punctuation">;</span>
<span class="token keyword">EXECUTE</span> myquery<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="local-variables-no-prefix" tabindex="-1"><a class="header-anchor" href="#local-variables-no-prefix" aria-hidden="true">#</a> Local Variables (no prefix) :</h2><p>Local variables needs to be declared using DECLARE before accessing it. They can be used as local variables and the input parameters inside a stored procedure:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> sp_test<span class="token punctuation">(</span>var1 <span class="token keyword">INT</span><span class="token punctuation">)</span> 
<span class="token keyword">BEGIN</span>   
    <span class="token keyword">DECLARE</span> <span class="token keyword">start</span>  <span class="token keyword">INT</span> <span class="token keyword">unsigned</span> <span class="token keyword">DEFAULT</span> <span class="token number">1</span><span class="token punctuation">;</span>  
    <span class="token keyword">DECLARE</span> finish <span class="token keyword">INT</span> <span class="token keyword">unsigned</span> <span class="token keyword">DEFAULT</span> <span class="token number">10</span><span class="token punctuation">;</span>

    <span class="token keyword">SELECT</span>  var1<span class="token punctuation">,</span> <span class="token keyword">start</span><span class="token punctuation">,</span> finish<span class="token punctuation">;</span>

    <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> places <span class="token keyword">WHERE</span> place <span class="token operator">BETWEEN</span> <span class="token keyword">start</span> <span class="token operator">AND</span> finish<span class="token punctuation">;</span> 
<span class="token keyword">END</span><span class="token punctuation">;</span> 
<span class="token keyword">CALL</span> sp_test<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>scope: The scope of a local variable is the BEGIN ... END block within which it is declared.</p><h2 id="server-system-variables-prefixed-with" tabindex="-1"><a class="header-anchor" href="#server-system-variables-prefixed-with" aria-hidden="true">#</a> Server System Variables (prefixed with @@):</h2><p>The MySQL server maintains many system variables configured to a default value.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> @<span class="token variable">@sort_buffer_size</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>refs: https://stackoverflow.com/questions/11754781/how-to-declare-a-variable-in-mysql https://stackoverflow.com/questions/2838490/a-table-name-as-a-variable https://dev.mysql.com/doc/refman/8.0/en/user-variables.html</p>`,18),o=[p];function l(i,r){return a(),n("div",null,o)}const u=s(t,[["render",l],["__file","variable.html.vue"]]);export{u as default};
