import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-XqA98pG8.js";const t={},p=e(`<h1 id="iter-next" tabindex="-1"><a class="header-anchor" href="#iter-next" aria-hidden="true">#</a> <strong>iter&amp;next</strong></h1><p><code>iter(object)</code>会调用object的<code>__iter__</code>方法，所以需要在<code>__iter__</code>方法中返回一个可迭代的对象。 可迭代对象应该实现<code>__next__</code>方法，供<code>next</code>方法来调用，以实现迭代效果。</p><p>下例中<code>iter(A())</code>调用了A中的<code>__iter__</code>方法，返回了B的对象实例。 <code>next(obj)</code>调用B对象实例中的<code>__next__</code>方法来进行迭代</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__iter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> B<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">def</span> <span class="token function">__next__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>data <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>data

obj <span class="token operator">=</span> <span class="token builtin">iter</span><span class="token punctuation">(</span>A<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token builtin">next</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应用1：实现range</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MyRange</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>start <span class="token operator">=</span> <span class="token number">0</span>
        self<span class="token punctuation">.</span>end <span class="token operator">=</span> end

    <span class="token keyword">def</span> <span class="token function">__iter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self

    <span class="token keyword">def</span> <span class="token function">__next__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>start <span class="token operator">&lt;</span> self<span class="token punctuation">.</span>end<span class="token punctuation">:</span>
            ret <span class="token operator">=</span> self<span class="token punctuation">.</span>start
            self<span class="token punctuation">.</span>start <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">return</span> ret
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">raise</span> StopIteration

a <span class="token operator">=</span> MyRange<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> a<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考： https://blog.csdn.net/xmlbm/article/details/99985678</p>`,7),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","python___iter_next__.html.vue"]]);export{r as default};
