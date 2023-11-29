import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-M6UUlHgF.js";const t={},p=e(`<h1 id="procedure" tabindex="-1"><a class="header-anchor" href="#procedure" aria-hidden="true">#</a> procedure</h1><h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> syntax</h2><h3 id="create" tabindex="-1"><a class="header-anchor" href="#create" aria-hidden="true">#</a> create</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">Create</span> <span class="token keyword">Procedure</span> <span class="token punctuation">[</span><span class="token keyword">Procedure</span> Name<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>Parameter <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>Parameter <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>Parameter <span class="token number">3</span><span class="token punctuation">]</span> <span class="token punctuation">)</span>
<span class="token keyword">Begin</span>
<span class="token keyword">SQL</span> Queries<span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">End</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> use</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CALL</span> <span class="token punctuation">[</span><span class="token keyword">Procedure</span> Name<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>Parameters<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> example</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 求1到100之间的和</span>
<span class="token keyword">create</span> <span class="token keyword">procedure</span> my_pro2<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">begin</span>
    <span class="token comment">-- 创建局部变量</span>
    <span class="token keyword">declare</span> i <span class="token keyword">int</span> <span class="token keyword">default</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token comment">-- 会话变量</span>
    <span class="token keyword">set</span> <span class="token variable">@sum</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">-- 开始循环获取结果</span>
    <span class="token keyword">while</span> i <span class="token operator">&lt;=</span> <span class="token number">100</span> <span class="token keyword">do</span>
        <span class="token keyword">set</span> <span class="token variable">@sum</span> <span class="token operator">=</span> <span class="token variable">@sum</span> <span class="token operator">+</span> i<span class="token punctuation">;</span>
        <span class="token keyword">set</span> i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">end</span> <span class="token keyword">while</span><span class="token punctuation">;</span>
    <span class="token keyword">select</span> <span class="token variable">@sum</span><span class="token punctuation">;</span>
<span class="token keyword">end</span>

<span class="token keyword">call</span> my_pro2<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="difference-between-function" tabindex="-1"><a class="header-anchor" href="#difference-between-function" aria-hidden="true">#</a> difference between function</h2><ol><li>过程无返回值类型，不能将结果直接赋值给变量；函数有返回值类型，调用时，除了在select中，必须将返回值赋值给变量</li><li>函数可以再select语句中直接使用，而过程不能</li></ol><p>refs: https://www.sqlshack.com/learn-mysql-the-basics-of-mysql-stored-procedures/ https://www.jb51.net/article/251743.htm</p>`,11),c=[p];function o(l,i){return s(),a("div",null,c)}const u=n(t,[["render",o],["__file","procedure.html.vue"]]);export{u as default};
