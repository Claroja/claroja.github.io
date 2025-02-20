import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-9tftCahk.js";const e={},p=t(`<h1 id="iterable-iterator" tabindex="-1"><a class="header-anchor" href="#iterable-iterator" aria-hidden="true">#</a> iterable&amp;iterator</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> collections<span class="token punctuation">.</span>abc <span class="token keyword">import</span> Iterable<span class="token punctuation">,</span>Iterator
<span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__next__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

<span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__iter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> B<span class="token punctuation">(</span><span class="token punctuation">)</span>
a <span class="token operator">=</span> A<span class="token punctuation">(</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> B<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">isinstance</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> Iterable<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True 实现了__iter__方法</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">isinstance</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> Iterator<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># False 实现了__iter__ 未实现__next__</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">isinstance</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> Iterable<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># False 未实现__iter__方法</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">isinstance</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> Iterator<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># False 未实现__iter__方法_next__方法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(i,l){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","iterable_iterator.html.vue"]]);export{k as default};
