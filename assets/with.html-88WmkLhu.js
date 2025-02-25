import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-7knaTE3M.js";const t={},c=e(`<h1 id="with" tabindex="-1"><a class="header-anchor" href="#with" aria-hidden="true">#</a> with</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">test</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__enter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;enter&quot;</span>
    <span class="token keyword">def</span> <span class="token function">__exit__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> exc_type<span class="token punctuation">,</span> exc_value<span class="token punctuation">,</span> traceback<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> exc_type <span class="token operator">==</span> IndexError<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>exc_value<span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token punctuation">(</span>exc_value<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>traceback<span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">True</span>

<span class="token keyword">with</span> test<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> test<span class="token punctuation">:</span> <span class="token comment"># test()不是调用的__call__方法，而是__enter__方法</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span>
    a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>__enter__</code>在<code>with</code>语句后自动调用，可以给<code>as</code>后的变量赋值</p><p><code>__exit__</code>用于捕获异常，返回<code>boolean</code>对象，如果为<code>True</code>异常被忽略，如果为<code>False</code>异常被抛出 三个参数分别是： 1.<code>exc_type</code> 异常类型 2.<code>exc_value</code>异常值 3.<code>traceback</code></p><p>参考： https://www.jianshu.com/p/fc25fe7d7cf2</p>`,5),p=[c];function o(i,l){return s(),a("div",null,p)}const r=n(t,[["render",o],["__file","with.html.vue"]]);export{r as default};
