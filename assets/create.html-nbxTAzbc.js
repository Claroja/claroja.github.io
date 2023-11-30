import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as p}from"./app-0JgdiRQ-.js";const e={},t=p(`<h1 id="create" tabindex="-1"><a class="header-anchor" href="#create" aria-hidden="true">#</a> create</h1><ol><li>使用列表创建</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 使用数组创建</span>
<span class="token comment">## array([[1, 2, 3],</span>
<span class="token comment">##        [4, 5, 6]])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>内置函数</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>np<span class="token punctuation">.</span>full<span class="token punctuation">(</span>shape<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> fill_value<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment"># 使用指定的fill_value来初始化</span>
<span class="token comment">## array([[2, 2],</span>
<span class="token comment">##        [2, 2]])</span>
np<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span>shape<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 使用0来初始化数组</span>
<span class="token comment">## array([[0., 0.],</span>
<span class="token comment">##        [0., 0.]])</span>
np<span class="token punctuation">.</span>ones<span class="token punctuation">(</span>shape<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 使用0来初始化数组</span>
<span class="token comment">## array([[1., 1.],</span>
<span class="token comment">##        [1., 1.]])</span>
np<span class="token punctuation">.</span>empty<span class="token punctuation">(</span>shape<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 随机初始化元素, 速度不计较快</span>
<span class="token comment">## array([[1., 1.],</span>
<span class="token comment">##        [1., 1.]])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>序列生成创建</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token punctuation">)</span>  <span class="token comment"># 从10到30每隔5生成一个数</span>
<span class="token comment">## array([10, 15, 20, 25])</span>
np<span class="token punctuation">.</span>linspace<span class="token punctuation">(</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span> <span class="token punctuation">)</span>  <span class="token comment"># 从0-2中间生成9个数</span>
<span class="token comment">## array([0.        , 0.66666667, 1.33333333, 2.        ])</span>
np<span class="token punctuation">.</span>linspace<span class="token punctuation">(</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span> <span class="token punctuation">)</span><span class="token punctuation">.</span>reshape<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment"># 转换形状成2维数组</span>
<span class="token comment">## array([[0.        , 0.66666667],</span>
<span class="token comment">##        [1.33333333, 2.        ]])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[t];function o(l,u){return s(),a("div",null,c)}const k=n(e,[["render",o],["__file","create.html.vue"]]);export{k as default};
