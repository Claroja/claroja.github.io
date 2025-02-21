import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as p}from"./app-jdLxCr9I.js";const t={},e=p(`<h1 id="numpy数组操作" tabindex="-1"><a class="header-anchor" href="#numpy数组操作" aria-hidden="true">#</a> numpy数组操作</h1><ol><li>索引 (1) 一维</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
data<span class="token operator">=</span>np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>  <span class="token comment"># 1 单个索引, 传入整型</span>
data<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span>  <span class="token comment"># array([2, 4]), 多个索引传入列表</span>
data<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token boolean">True</span><span class="token punctuation">,</span><span class="token boolean">False</span><span class="token punctuation">,</span><span class="token boolean">True</span><span class="token punctuation">,</span><span class="token boolean">False</span><span class="token punctuation">]</span><span class="token punctuation">]</span>  <span class="token comment"># array([1, 3]), 多个索引, 传入等长的Boolean数组</span>
data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>  <span class="token comment"># array([1,2]) 切片索引, 使用&quot;:&quot;号, 注意是左闭右开的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2) 二维</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
data <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>  <span class="token comment"># 5, 索引单值, 第一个是第一维下标, 第二个是第二维下标. 等价于data[1][1]</span>
data<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment"># array([5, 8]),  索引多值, 取第一行和第二行, 取第一列</span>
data<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token boolean">True</span><span class="token punctuation">,</span><span class="token boolean">False</span><span class="token punctuation">,</span><span class="token boolean">True</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token boolean">False</span><span class="token punctuation">,</span><span class="token boolean">False</span><span class="token punctuation">,</span><span class="token boolean">True</span><span class="token punctuation">]</span><span class="token punctuation">]</span>  <span class="token comment"># array([3, 9])</span>
data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment"># array([2, 5]),  索引多行单列, &quot;:&quot;用法参考一维</span>
data<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>  <span class="token comment"># array([2, 5, 8]), 取所有行, 和第一列</span>
data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">:</span><span class="token punctuation">]</span>  <span class="token comment"># array([4, 5, 6]), 取第一行, 和所有列</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(3) -1</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
data<span class="token operator">=</span>np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
data<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>  <span class="token comment"># array([4, 3, 2, 1])</span>
data<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>  <span class="token comment"># array([3, 2]), 此时第一位的1, 是从反转后的数组array([4, 3, 2, 1]), 右边边开始数, 仍然是闭区间. 第二维是从右边开始数, 仍然是开区间</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>排序 <code>np.sort()</code> 返回排序后的数组</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
x <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
np<span class="token punctuation">.</span>sort<span class="token punctuation">(</span>x<span class="token punctuation">,</span>axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment"># 行方向排序</span>
np<span class="token punctuation">.</span>sort<span class="token punctuation">(</span>x<span class="token punctuation">,</span>axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># 列方向排序</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kind参数是排序的算法:&#39;quicksort&#39;(快排), &#39;mergesort&#39;(归并), &#39;heapsort&#39;(堆排序), &#39;stable&#39;(稳定排序)</p><p><code>np.argsort()</code>返回元素的排名</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
np<span class="token punctuation">.</span>argsort<span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token comment">## array([1, 2, 0])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>np.flipud()</code>反向排序</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
a <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> np<span class="token punctuation">.</span>flipud<span class="token punctuation">(</span>a<span class="token punctuation">)</span>  <span class="token comment"># [6 5 4 3 2 1]</span>

b<span class="token operator">=</span>a<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment"># 另外一个简单的方法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>最大值最小值</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
a<span class="token operator">=</span>np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
a<span class="token punctuation">.</span><span class="token builtin">max</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
a<span class="token punctuation">.</span>argmax<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">#返回第一个最大值的索引</span>
a<span class="token punctuation">.</span><span class="token builtin">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
a<span class="token punctuation">.</span>argmin<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">#返回第一个最小值的索引</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>条件筛选</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
x<span class="token operator">=</span>np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
np<span class="token punctuation">.</span>where<span class="token punctuation">(</span>x<span class="token operator">&gt;</span><span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment"># 返回大于2的元素</span>
np<span class="token punctuation">.</span>argwhere<span class="token punctuation">(</span>x<span class="token operator">&gt;</span><span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment"># 返回大于2的下标</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),o=[e];function c(u,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","numpy数组操作.html.vue"]]);export{r as default};
