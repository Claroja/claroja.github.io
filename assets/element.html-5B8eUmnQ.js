import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e as p}from"./app-0JgdiRQ-.js";const t={},e=p(`<h1 id="element" tabindex="-1"><a class="header-anchor" href="#element" aria-hidden="true">#</a> element</h1><h2 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h2><h3 id="一维" tabindex="-1"><a class="header-anchor" href="#一维" aria-hidden="true">#</a> 一维</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
data<span class="token operator">=</span>np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>  <span class="token comment"># 1 单个索引, 传入整型</span>
data<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span>  <span class="token comment"># array([2, 4]), 多个索引传入列表</span>
data<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token boolean">True</span><span class="token punctuation">,</span><span class="token boolean">False</span><span class="token punctuation">,</span><span class="token boolean">True</span><span class="token punctuation">,</span><span class="token boolean">False</span><span class="token punctuation">]</span><span class="token punctuation">]</span>  <span class="token comment"># array([1, 3]), 多个索引, 传入等长的Boolean数组</span>
data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>  <span class="token comment"># array([1,2]) 切片索引, 使用&quot;:&quot;号, 注意是左闭右开的</span>
data<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token punctuation">]</span>  <span class="token comment"># 从倒数第二个数开始切片</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二维" tabindex="-1"><a class="header-anchor" href="#二维" aria-hidden="true">#</a> 二维</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
data <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>  <span class="token comment"># 5, 索引单值, 第一个是第一维下标, 第二个是第二维下标. 等价于data[1][1]</span>
data<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment"># array([5, 8]),  索引多值, 取第一行和第二行, 取第一列</span>
data<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token boolean">True</span><span class="token punctuation">,</span><span class="token boolean">False</span><span class="token punctuation">,</span><span class="token boolean">True</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token boolean">False</span><span class="token punctuation">,</span><span class="token boolean">False</span><span class="token punctuation">,</span><span class="token boolean">True</span><span class="token punctuation">]</span><span class="token punctuation">]</span>  <span class="token comment"># array([3, 9])</span>
data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment"># array([2, 5]),  索引多行单列, &quot;:&quot;用法参考一维</span>
data<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>  <span class="token comment"># array([2, 5, 8]), 取所有行, 和第一列</span>
data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">:</span><span class="token punctuation">]</span>  <span class="token comment"># array([4, 5, 6]), 取第一行, 和所有列</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="步长索引" tabindex="-1"><a class="header-anchor" href="#步长索引" aria-hidden="true">#</a> 步长索引</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
data<span class="token operator">=</span>np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
data<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>  <span class="token comment"># array([4, 3, 2, 1])</span>
data<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>  <span class="token comment"># array([3, 2]), 此时第一位的1, 是从反转后的数组array([4, 3, 2, 1]), 右边边开始数, 仍然是闭区间. 第二维是从右边开始数, 仍然是开区间</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h2><p><code>np.sort()</code> 返回排序后的数组</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最大值最小值" tabindex="-1"><a class="header-anchor" href="#最大值最小值" aria-hidden="true">#</a> 最大值最小值</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
a<span class="token operator">=</span>np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
a<span class="token punctuation">.</span><span class="token builtin">max</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
a<span class="token punctuation">.</span>argmax<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">#返回第一个最大值的索引</span>
a<span class="token punctuation">.</span><span class="token builtin">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
a<span class="token punctuation">.</span>argmin<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">#返回第一个最小值的索引</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="条件筛选" tabindex="-1"><a class="header-anchor" href="#条件筛选" aria-hidden="true">#</a> 条件筛选</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
x<span class="token operator">=</span>np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
np<span class="token punctuation">.</span>where<span class="token punctuation">(</span>x<span class="token operator">&gt;</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># 返回大于1元素的下标 (array([1, 2, 3], dtype=int64),) 注意这里返回的是二元数组, 取得下标还需要使用索引np.where(x&gt;1)[0]</span>
x<span class="token punctuation">[</span>np<span class="token punctuation">.</span>where<span class="token punctuation">(</span>x<span class="token operator">&gt;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span>  <span class="token comment"># 取出大于1的元素, 真奇怪, 这个不用索引就可以用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),o=[e];function c(u,l){return a(),s("div",null,o)}const k=n(t,[["render",c],["__file","element.html.vue"]]);export{k as default};
