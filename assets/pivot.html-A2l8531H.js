import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-MTzDpLgJ.js";const p={},e=t(`<h1 id="pivot" tabindex="-1"><a class="header-anchor" href="#pivot" aria-hidden="true">#</a> pivot</h1><table><thead><tr><th>company_name</th><th>action</th><th>pagecount</th></tr></thead><tbody><tr><td>Company A</td><td>PRINT</td><td>3</td></tr><tr><td>Company A</td><td>PRINT</td><td>2</td></tr><tr><td>Company A</td><td>PRINT</td><td>3</td></tr><tr><td>Company B</td><td>EMAIL</td><td></td></tr><tr><td>Company B</td><td>PRINT</td><td>2</td></tr><tr><td>Company B</td><td>PRINT</td><td>2</td></tr><tr><td>Company B</td><td>PRINT</td><td>1</td></tr><tr><td>Company A</td><td>PRINT</td><td>3</td></tr></tbody></table><table><thead><tr><th>company_name</th><th>EMAIL</th><th>PRINT 1 pages</th><th>PRINT 2 pages</th><th>PRINT 3 pages</th></tr></thead><tbody><tr><td>CompanyA</td><td>0</td><td>0</td><td>1</td><td>3</td></tr><tr><td>CompanyB</td><td>1</td><td>1</td><td>2</td><td>0</td></tr></tbody></table><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>  P<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>company_name<span class="token punctuation">\`</span></span><span class="token punctuation">,</span>
    <span class="token function">COUNT</span><span class="token punctuation">(</span>
        <span class="token keyword">CASE</span> 
            <span class="token keyword">WHEN</span> P<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>action<span class="token punctuation">\`</span></span><span class="token operator">=</span><span class="token string">&#39;EMAIL&#39;</span> 
            <span class="token keyword">THEN</span> <span class="token number">1</span> 
            <span class="token keyword">ELSE</span> <span class="token boolean">NULL</span> 
        <span class="token keyword">END</span>
    <span class="token punctuation">)</span> <span class="token keyword">AS</span> <span class="token string">&#39;EMAIL&#39;</span><span class="token punctuation">,</span>
    <span class="token function">COUNT</span><span class="token punctuation">(</span>
        <span class="token keyword">CASE</span> 
            <span class="token keyword">WHEN</span> P<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>action<span class="token punctuation">\`</span></span><span class="token operator">=</span><span class="token string">&#39;PRINT&#39;</span> <span class="token operator">AND</span> P<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>pagecount<span class="token punctuation">\`</span></span> <span class="token operator">=</span> <span class="token string">&#39;1&#39;</span> 
            <span class="token keyword">THEN</span> P<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>pagecount<span class="token punctuation">\`</span></span> 
            <span class="token keyword">ELSE</span> <span class="token boolean">NULL</span> 
        <span class="token keyword">END</span>
    <span class="token punctuation">)</span> <span class="token keyword">AS</span> <span class="token string">&#39;PRINT 1 pages&#39;</span><span class="token punctuation">,</span>
    <span class="token function">COUNT</span><span class="token punctuation">(</span>
        <span class="token keyword">CASE</span> 
            <span class="token keyword">WHEN</span> P<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>action<span class="token punctuation">\`</span></span><span class="token operator">=</span><span class="token string">&#39;PRINT&#39;</span> <span class="token operator">AND</span> P<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>pagecount<span class="token punctuation">\`</span></span> <span class="token operator">=</span> <span class="token string">&#39;2&#39;</span> 
            <span class="token keyword">THEN</span> P<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>pagecount<span class="token punctuation">\`</span></span> 
            <span class="token keyword">ELSE</span> <span class="token boolean">NULL</span> 
        <span class="token keyword">END</span>
    <span class="token punctuation">)</span> <span class="token keyword">AS</span> <span class="token string">&#39;PRINT 2 pages&#39;</span><span class="token punctuation">,</span>
    <span class="token function">COUNT</span><span class="token punctuation">(</span>
        <span class="token keyword">CASE</span> 
            <span class="token keyword">WHEN</span> P<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>action<span class="token punctuation">\`</span></span><span class="token operator">=</span><span class="token string">&#39;PRINT&#39;</span> <span class="token operator">AND</span> P<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>pagecount<span class="token punctuation">\`</span></span> <span class="token operator">=</span> <span class="token string">&#39;3&#39;</span> 
            <span class="token keyword">THEN</span> P<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>pagecount<span class="token punctuation">\`</span></span> 
            <span class="token keyword">ELSE</span> <span class="token boolean">NULL</span> 
        <span class="token keyword">END</span>
    <span class="token punctuation">)</span> <span class="token keyword">AS</span> <span class="token string">&#39;PRINT 3 pages&#39;</span>
<span class="token keyword">FROM</span>    test_pivot P
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> P<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>company_name<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>refs: https://stackoverflow.com/questions/7674786/how-can-i-return-pivot-table-output-in-mysql</p>`,5),o=[e];function c(i,l){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","pivot.html.vue"]]);export{u as default};
