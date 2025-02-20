import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as p,c as l,b as s,d as n,e,a as c}from"./app-9tftCahk.js";const i={},r=s("h1",{id:"join",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#join","aria-hidden":"true"},"#"),n(" join")],-1),d={href:"https://en.wikipedia.org/wiki/Venn_diagram",target:"_blank",rel:"noopener noreferrer"},u={href:"https://en.wikipedia.org/wiki/Venn_diagram",target:"_blank",rel:"noopener noreferrer"},k=c(`<p>Suppose you have two tables, with a single column each, and data as follows:</p><table><thead><tr><th>A</th><th>B</th></tr></thead><tbody><tr><td>1</td><td>3</td></tr><tr><td>2</td><td>4</td></tr><tr><td>3</td><td>5</td></tr><tr><td>4</td><td>6</td></tr><tr><td>Note that (1,2) are unique to A, (3,4) are common, and (5,6) are unique to B.</td><td></td></tr></tbody></table><h2 id="inner-join" tabindex="-1"><a class="header-anchor" href="#inner-join" aria-hidden="true">#</a> Inner join</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> a <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> b <span class="token keyword">on</span> a<span class="token punctuation">.</span>a <span class="token operator">=</span> b<span class="token punctuation">.</span>b<span class="token punctuation">;</span>
<span class="token keyword">select</span> a<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span> b<span class="token punctuation">.</span><span class="token operator">*</span>  <span class="token keyword">from</span> a<span class="token punctuation">,</span>b <span class="token keyword">where</span> a<span class="token punctuation">.</span>a <span class="token operator">=</span> b<span class="token punctuation">.</span>b<span class="token punctuation">;</span>
<span class="token comment">-- a | b</span>
<span class="token comment">-- --+--</span>
<span class="token comment">-- 3 | 3</span>
<span class="token comment">-- 4 | 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="left-outer-join" tabindex="-1"><a class="header-anchor" href="#left-outer-join" aria-hidden="true">#</a> Left outer join</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> a <span class="token keyword">LEFT</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span> b <span class="token keyword">on</span> a<span class="token punctuation">.</span>a <span class="token operator">=</span> b<span class="token punctuation">.</span>b<span class="token punctuation">;</span>
<span class="token keyword">select</span> a<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span> b<span class="token punctuation">.</span><span class="token operator">*</span>  <span class="token keyword">from</span> a<span class="token punctuation">,</span>b <span class="token keyword">where</span> a<span class="token punctuation">.</span>a <span class="token operator">=</span> b<span class="token punctuation">.</span>b<span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- a |  b</span>
<span class="token comment">-- --+-----</span>
<span class="token comment">-- 1 | null</span>
<span class="token comment">-- 2 | null</span>
<span class="token comment">-- 3 |    3</span>
<span class="token comment">-- 4 |    4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="right-outer-join" tabindex="-1"><a class="header-anchor" href="#right-outer-join" aria-hidden="true">#</a> Right outer join</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> a <span class="token keyword">RIGHT</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span> b <span class="token keyword">on</span> a<span class="token punctuation">.</span>a <span class="token operator">=</span> b<span class="token punctuation">.</span>b<span class="token punctuation">;</span>
<span class="token keyword">select</span> a<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span> b<span class="token punctuation">.</span><span class="token operator">*</span>  <span class="token keyword">from</span> a<span class="token punctuation">,</span>b <span class="token keyword">where</span> a<span class="token punctuation">.</span>a<span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span> <span class="token operator">=</span> b<span class="token punctuation">.</span>b<span class="token punctuation">;</span>

<span class="token comment">-- a    |  b</span>
<span class="token comment">-- -----+----</span>
<span class="token comment">-- 3    |  3</span>
<span class="token comment">-- 4    |  4</span>
<span class="token comment">-- null |  5</span>
<span class="token comment">-- null |  6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="full-outer-join" tabindex="-1"><a class="header-anchor" href="#full-outer-join" aria-hidden="true">#</a> Full outer join</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> a <span class="token keyword">FULL</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span> b <span class="token keyword">on</span> a<span class="token punctuation">.</span>a <span class="token operator">=</span> b<span class="token punctuation">.</span>b<span class="token punctuation">;</span>

<span class="token comment">--  a   |  b</span>
<span class="token comment">-- -----+-----</span>
<span class="token comment">--    1 | null</span>
<span class="token comment">--    2 | null</span>
<span class="token comment">--    3 |    3</span>
<span class="token comment">--    4 |    4</span>
<span class="token comment">-- null |    6</span>
<span class="token comment">-- null |    5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="self-join" tabindex="-1"><a class="header-anchor" href="#self-join" aria-hidden="true">#</a> self join</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> c<span class="token punctuation">.</span>id<span class="token punctuation">,</span> c<span class="token punctuation">.</span>title<span class="token punctuation">,</span> c<span class="token punctuation">.</span>pid<span class="token punctuation">,</span> p<span class="token punctuation">.</span>title <span class="token keyword">from</span> areas <span class="token keyword">as</span> c <span class="token keyword">inner</span> <span class="token keyword">join</span> areas <span class="token keyword">as</span> p <span class="token keyword">on</span> c<span class="token punctuation">.</span>pid <span class="token operator">=</span> p<span class="token punctuation">.</span>id <span class="token keyword">where</span> p<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&#39;山西省&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>refs: https://stackoverflow.com/questions/38549/what-is-the-difference-between-inner-join-and-outer-join https://en.wikipedia.org/wiki/Venn_diagram https://blog.csdn.net/claroja/article/details/107941316</p>`,13);function m(v,b){const a=o("ExternalLinkIcon");return p(),l("div",null,[r,s("p",null,[n("An inner join of A and B gives the result of A intersect B, i.e. the inner part of a "),s("a",d,[n("Venn diagram"),e(a)]),n(" intersection.")]),s("p",null,[n("An outer join of A and B gives the results of A union B, i.e. the outer parts of a "),s("a",u,[n("Venn diagram"),e(a)]),n(" union.")]),k])}const f=t(i,[["render",m],["__file","join.html.vue"]]);export{f as default};
