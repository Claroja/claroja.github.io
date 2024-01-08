import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-YE2Hltoy.js";const t={},o=e(`<h1 id="yield" tabindex="-1"><a class="header-anchor" href="#yield" aria-hidden="true">#</a> yield</h1><p>To understand what <code>yield</code> does, you must understand what <code>generators</code> are. And before you can understand generators, you must understand <code>iterables</code>.</p><h2 id="iterables" tabindex="-1"><a class="header-anchor" href="#iterables" aria-hidden="true">#</a> Iterables</h2><p>When you create a list, you can read its items one by one. Reading its items one by one is called iteration:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>mylist <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> mylist<span class="token punctuation">:</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token comment">## 1</span>
<span class="token comment">## 2</span>
<span class="token comment">## 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Everything you can use <code>for... in...</code> on is an <code>iterable</code>; lists, strings, files...</p><p>These iterables are handy because you can read them as much as you wish, but you store all the values in memory and this is not always what you want when you have a lot of values.</p><h2 id="generators" tabindex="-1"><a class="header-anchor" href="#generators" aria-hidden="true">#</a> Generators</h2><p><code>Generators</code> are <code>iterators</code>, a kind of iterable you can <strong>only iterate over once</strong>. Generators do not store all the values in memory, they generate the values on the fly:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>mygenerator <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token operator">*</span>x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> mygenerator<span class="token punctuation">:</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token comment">## 0</span>
<span class="token comment">## 1</span>
<span class="token comment">## 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It is just the same except you used <code>()</code> instead of <code>[]</code>. BUT, you cannot perform for i in mygenerator a second time since generators can only be used once: they calculate 0, then forget about it and calculate 1, and end calculating 4, one by one.</p><h2 id="yield-1" tabindex="-1"><a class="header-anchor" href="#yield-1" aria-hidden="true">#</a> yield</h2><p><code>yield</code> is a keyword that is used like return, except the function will return a generator.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">create_generator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
   mylist <span class="token operator">=</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
   <span class="token keyword">for</span> i <span class="token keyword">in</span> mylist<span class="token punctuation">:</span>
       <span class="token keyword">yield</span> i<span class="token operator">*</span>i
mygenerator <span class="token operator">=</span> create_generator<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># create a generator</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> mygenerator<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token comment">## 0</span>
<span class="token comment">## 1</span>
<span class="token comment">## 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The first time the <code>for</code> calls the generator object created from your function, it will run the code in your function from the beginning until it hits <code>yield</code>, then it&#39;ll return the first value of the loop. Then, each subsequent call will run another iteration of the loop you have written in the function and return the next value. This will continue until the <code>generator</code> is considered empty, which happens when the function runs without hitting <code>yield</code>. That can be because the loop has come to an end, or because you no longer satisfy an &quot;if/else&quot;. To master yield, you must understand that when you call the function, the code you have written in the function body does not run. The function only returns the generator object, this is a bit tricky. your function will return a huge set of values that you will only need to read once.</p><p>python提供yield表达式，简化迭代器的创建。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> collections<span class="token punctuation">.</span>abc <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">def</span> <span class="token function">MyRange</span><span class="token punctuation">(</span>end<span class="token punctuation">)</span><span class="token punctuation">:</span>
    start <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> start <span class="token operator">&lt;</span> end<span class="token punctuation">:</span>
        <span class="token keyword">yield</span> start
        start <span class="token operator">+=</span> <span class="token number">1</span>



a <span class="token operator">=</span> MyRange<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">isinstance</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> Iterator<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">isinstance</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> Iterable<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> a<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.当我们调用这个生成器函数的时候，它返回的是一个迭代器叫做生成器。生成器是一种特殊的迭代器。 2.yield经常配合while使用 3.上述代码等同于等同于 在python <strong>iter</strong>&amp;__next__中已经实现了迭代器和迭代对象，如下</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MyRange</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考： https://stackoverflow.com/questions/231767/what-does-the-yield-keyword-do/231855#231855 https://www.jianshu.com/p/5ee724a8c366</p>`,20),p=[o];function i(c,l){return s(),a("div",null,p)}const d=n(t,[["render",i],["__file","yield.html.vue"]]);export{d as default};
