import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-yeyEmHfz.js";const e={},o=t(`<h1 id="contextlib" tabindex="-1"><a class="header-anchor" href="#contextlib" aria-hidden="true">#</a> contextlib</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> contextlib <span class="token keyword">import</span> contextmanager
<span class="token decorator annotation punctuation">@contextmanager</span>
<span class="token keyword">def</span> <span class="token function">wfunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;类似__enter__&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">yield</span> <span class="token comment"># 这里隔断__enter__和__exit__</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;类似__exit__&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">with</span> wfunc<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> 类似__enter__
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> hello world
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> 类似__exit__
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>closing</code>会自动调用实例的<code>close</code>方法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> contextlib <span class="token keyword">import</span> closing
<span class="token keyword">class</span> <span class="token class-name">Door</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">open</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Door is opened&#39;</span><span class="token punctuation">)</span>
 
    <span class="token keyword">def</span> <span class="token function">close</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Door is closed&#39;</span><span class="token punctuation">)</span>
 
<span class="token keyword">with</span> closing<span class="token punctuation">(</span>Door<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">as</span> door<span class="token punctuation">:</span>
    door<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>源码:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">class</span> <span class="token class-name">closing</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;Context to automatically close something at the end of a block.
    Code like this:
        with closing(&lt;module&gt;.open(&lt;arguments&gt;)) as f:
            &lt;block&gt;
    is equivalent to this:
        f = &lt;module&gt;.open(&lt;arguments&gt;)
        try:
            &lt;block&gt;
        finally:
            f.close()
    &quot;&quot;&quot;</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> thing<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>thing <span class="token operator">=</span> thing
    <span class="token keyword">def</span> <span class="token function">__enter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>thing
    <span class="token keyword">def</span> <span class="token function">__exit__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">*</span>exc_info<span class="token punctuation">)</span><span class="token punctuation">:</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考： https://blog.csdn.net/emaste_r/article/details/78105713 https://docs.python.org/dev/library/contextlib.html</p>`,7),p=[o];function i(l,c){return s(),a("div",null,p)}const r=n(e,[["render",i],["__file","contextlib.html.vue"]]);export{r as default};
