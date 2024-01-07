import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-SnI5rGHA.js";const t={},p=e(`<h1 id="yield" tabindex="-1"><a class="header-anchor" href="#yield" aria-hidden="true">#</a> yield</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">yield</span> <span class="token comment"># 暂停代码 保存现场</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span>

gen_func <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token punctuation">)</span>
gen_func<span class="token punctuation">.</span>__next__<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 或者调用next(gen_func)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以在异步调用读写io方法后使用yield来切换不同的函数，实现协程</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">import</span> time

<span class="token keyword">def</span> <span class="token function">task_1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;--This is task 1!--before&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">yield</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;--This is task 1!--after&quot;</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">task_2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;--This is task 2!--before&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">yield</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;--This is task 2!--after&quot;</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>
        
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    t1 <span class="token operator">=</span> task_1<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 生成器对象</span>
    t2 <span class="token operator">=</span> task_2<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># print(t1, t2)</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token builtin">next</span><span class="token punctuation">(</span>t1<span class="token punctuation">)</span>  <span class="token comment"># 1、唤醒生成器t1，执行到yield后，保存上下文，挂起任务；下次再次唤醒之后，从yield继续往下执行</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\\nThe main thread!\\n&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 2、继续往下执行</span>
        <span class="token builtin">next</span><span class="token punctuation">(</span>t2<span class="token punctuation">)</span>  <span class="token comment"># 3、唤醒生成器t2，....</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),i=[p];function o(c,l){return s(),a("div",null,i)}const k=n(t,[["render",o],["__file","yield.html.vue"]]);export{k as default};
