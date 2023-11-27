import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as p}from"./app-O0xqlHfm.js";const t={},e=p(`<h1 id="shape" tabindex="-1"><a class="header-anchor" href="#shape" aria-hidden="true">#</a> shape</h1><h2 id="更改形状1-shape" tabindex="-1"><a class="header-anchor" href="#更改形状1-shape" aria-hidden="true">#</a> 更改形状1: shape</h2><p>使用reshape来更改数组的形状, 包含了flatten的操作</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>z <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
z<span class="token punctuation">.</span>shape
<span class="token comment">## (2, 4)</span>
z<span class="token punctuation">.</span>reshape<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># 将z变成1维, 行自动计算</span>
<span class="token comment">## array([1, 2, 3, 4, 5, 6, 7, 8])</span>
z<span class="token punctuation">.</span>reshape<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># 将z变成1维, ?行1列, 行自动计算</span>
<span class="token comment">## array([[1],</span>
<span class="token comment">##         [2],</span>
<span class="token comment">##         [3],</span>
<span class="token comment">##         [4],</span>
<span class="token comment">##         [5],</span>
<span class="token comment">##         [6],</span>
<span class="token comment">##         [7],</span>
<span class="token comment">##         [8]])</span>
z<span class="token punctuation">.</span>reshape<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment"># 将z变成2维,  ?行2列, 行自动计算</span>
<span class="token comment">## array([[1, 2],</span>
<span class="token comment">##        [3, 4],</span>
<span class="token comment">##        [5, 6],</span>
<span class="token comment">##        [7, 8]])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更改形状2-expand-dims和unsqueeze" tabindex="-1"><a class="header-anchor" href="#更改形状2-expand-dims和unsqueeze" aria-hidden="true">#</a> 更改形状2: expand_dims和unsqueeze</h2><p>(1) 增加维度 <code>expand_dims(a, axis)</code>: 在指定维度的左边增加一个维度.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
x <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># array([1, 2, 3])</span>
x<span class="token punctuation">.</span>shape  <span class="token comment"># 1dim</span>

y <span class="token operator">=</span> np<span class="token punctuation">.</span>expand_dims<span class="token punctuation">(</span>x<span class="token punctuation">,</span>axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment"># array([[1, 2, 3]])</span>
y<span class="token punctuation">.</span>shape  <span class="token comment"># (1,3) 2dim, 在原有的1dim左边添加一个维度</span>

z <span class="token operator">=</span> np<span class="token punctuation">.</span>expand_dims<span class="token punctuation">(</span>x<span class="token punctuation">,</span>axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">## array([[1],</span>
<span class="token comment">##        [2],</span>
<span class="token comment">##        [3]])</span>
z<span class="token punctuation">.</span>shape  <span class="token comment"># (3, 1) 2dim, 在原有的1dim右边边添加一个维度</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2) 减少维度 <code>squeeze(a, axis=None)</code>去掉长度为1的维度</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
x <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
x<span class="token punctuation">.</span>shape  <span class="token comment"># (1, 3, 1)</span>
y <span class="token operator">=</span> np<span class="token punctuation">.</span>squeeze<span class="token punctuation">(</span>x<span class="token punctuation">)</span>  <span class="token comment"># array([0, 1, 2]), 去掉所有长度为1的维度</span>
y<span class="token punctuation">.</span>shape  <span class="token comment"># (3,)</span>

z <span class="token operator">=</span> np<span class="token punctuation">.</span>squeeze<span class="token punctuation">(</span>x<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment"># 仅去掉dim=0的维度</span>
<span class="token comment">## array([[0],</span>
<span class="token comment">##        [1],</span>
<span class="token comment">##        [2]])</span>
z<span class="token punctuation">.</span>shape <span class="token comment"># (3, 1)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拼合" tabindex="-1"><a class="header-anchor" href="#拼合" aria-hidden="true">#</a> 拼合</h2><p><code>vstack</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
np<span class="token punctuation">.</span>vstack<span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">## array([[1],</span>
<span class="token comment">##        [2],</span>
<span class="token comment">##        [3],</span>
<span class="token comment">##        [4],</span>
<span class="token comment">##        [5],</span>
<span class="token comment">##        [6]])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>hstack</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
np<span class="token punctuation">.</span>hstack<span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">## array([[1, 4],</span>
<span class="token comment">##        [2, 5],</span>
<span class="token comment">##        [3, 6]])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="转置" tabindex="-1"><a class="header-anchor" href="#转置" aria-hidden="true">#</a> 转置</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
a <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
a<span class="token punctuation">.</span>T <span class="token comment"># 转置</span>
a<span class="token punctuation">.</span>transpose<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># transpose进行的操作其实是将各个维度重置，原来的维度的排序是(0,1), 转换成(1,0)相当于进行了转置</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),c=[e];function o(u,l){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","shape.html.vue"]]);export{r as default};
