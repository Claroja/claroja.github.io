import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-YE2Hltoy.js";const e={},p=t(`<h1 id="global" tabindex="-1"><a class="header-anchor" href="#global" aria-hidden="true">#</a> global</h1><p>当在函数内部使用变量时，会首先在函数内部查找局部变量，如果找不到再去全局查找</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>number<span class="token operator">=</span><span class="token number">1</span> <span class="token comment">#全局变量</span>

<span class="token keyword">def</span> <span class="token function">testGlobal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
     number<span class="token operator">=</span><span class="token number">2</span> <span class="token comment">#局部变量</span>
     <span class="token keyword">return</span> number

num<span class="token operator">=</span>testGlobal<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;局部number:</span><span class="token interpolation"><span class="token punctuation">{</span>num<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>  <span class="token comment"># 2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;全局number:</span><span class="token interpolation"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span> <span class="token comment"># 1</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数内部没有时, 直接使用全局</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>number<span class="token operator">=</span><span class="token number">1</span> <span class="token comment">#全局变量</span>

<span class="token keyword">def</span> <span class="token function">testGlobal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> number

num<span class="token operator">=</span>testGlobal<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;局部number:</span><span class="token interpolation"><span class="token punctuation">{</span>num<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>  <span class="token comment"># 1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;全局number:</span><span class="token interpolation"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span> <span class="token comment"># 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果在函数内部直接使用全局变量，则需要使用global关键字</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>number<span class="token operator">=</span><span class="token number">1</span> <span class="token comment">#全局变量</span>

<span class="token keyword">def</span> <span class="token function">testGlobal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> number<span class="token comment">#告诉编译器我这里的number指的是全局变量number</span>
    number<span class="token operator">=</span><span class="token number">2</span>
    <span class="token keyword">return</span> number

num<span class="token operator">=</span>testGlobal<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;局部number:</span><span class="token interpolation"><span class="token punctuation">{</span>num<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>  <span class="token comment"># 2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;全局number:</span><span class="token interpolation"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span> <span class="token comment"># 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[p];function l(c,i){return s(),a("div",null,o)}const k=n(e,[["render",l],["__file","global.html.vue"]]);export{k as default};
