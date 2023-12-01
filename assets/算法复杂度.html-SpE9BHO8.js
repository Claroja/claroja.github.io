import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e}from"./app-MTzDpLgJ.js";const p={},t=e(`<h1 id="containers" tabindex="-1"><a class="header-anchor" href="#containers" aria-hidden="true">#</a> Containers</h1><p>时间维度(时间复杂度):算法所消耗的时间。 空间维度(空间复杂度):算法需要占用多少内存空间。</p><h2 id="时间复杂度测量" tabindex="-1"><a class="header-anchor" href="#时间复杂度测量" aria-hidden="true">#</a> 时间复杂度测量</h2><p>由于直接测试程序运行时间, 可能会受到外界因素影响, 比如CPU时间等 大O符号表示法, 即 T(n) = O(f(n))</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span>
    j<span class="token operator">--</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一行执行1次 第二行执行n次 第三行执行n次 所以总时间是1+n+n=2n+1 既f(n)=2n+1, 当n无线大时,常数1和系数2可忽略, 则有: T(n) = O(f(n)) = O(2n+1) = O(n)</p><p>常见的时间复杂度量级有:</p><ol><li>常数阶O(1) 只要没有循环,比如hashMap查询</li><li>线性阶O(n)</li><li>对数阶O(logN)</li></ol><p>循环内, i每次*2倍, 所以每次循环都是双倍, 假设运行了x次循环, 则2^x=n, 所以x = log_2^n</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    i <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>线性对数阶O(nlogN)</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        i <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>平方阶O(n²)</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>立方阶O(n³)</li><li>K次方阶O(n^k)</li><li>指数阶(2^n)</li></ol>`,15),o=[t];function l(i,c){return a(),s("div",null,o)}const d=n(p,[["render",l],["__file","算法复杂度.html.vue"]]);export{d as default};
