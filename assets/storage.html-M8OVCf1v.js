import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-9tftCahk.js";const t={},o=e(`<h1 id="storage" tabindex="-1"><a class="header-anchor" href="#storage" aria-hidden="true">#</a> storage</h1><p><code>tensor</code>由头信息区(<code>Tensor</code>)和存储区(<code>Storage</code>).</p><ul><li>头信息区主要保存着<code>Tensor</code>的形状(size),步长(stride),数据类型(type)等信息</li><li>存储区则保存真正的数据, 是连续的数组</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> torch
a <span class="token operator">=</span> torch<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>  <span class="token comment"># tensor([0, 1, 2, 3, 4, 5])</span>
a<span class="token punctuation">.</span>storage<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">##  0</span>
<span class="token comment">##  1</span>
<span class="token comment">##  2</span>
<span class="token comment">##  3</span>
<span class="token comment">##  4</span>
<span class="token comment">##  5</span>
<span class="token comment">## [torch.LongStorage of size 6]</span>
b <span class="token operator">=</span> a<span class="token punctuation">.</span>view<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment">## tensor([[0, 1, 2],</span>
<span class="token comment">##         [3, 4, 5]])</span>
b<span class="token punctuation">.</span>storage<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">##  0</span>
<span class="token comment">##  1</span>
<span class="token comment">##  2</span>
<span class="token comment">##  3</span>
<span class="token comment">##  4</span>
<span class="token comment">##  5</span>
<span class="token comment">## [torch.LongStorage of size 6]</span>
<span class="token builtin">id</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">id</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>  <span class="token comment"># False</span>
<span class="token builtin">id</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>storage<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">id</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>storage<span class="token punctuation">)</span>  <span class="token comment"># True</span>

c <span class="token operator">=</span> a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token punctuation">]</span>  <span class="token comment"># tensor([2, 3, 4, 5])</span>
<span class="token comment">## c.storage()</span>
<span class="token comment">##  0</span>
<span class="token comment">##  1</span>
<span class="token comment">##  2</span>
<span class="token comment">##  3</span>
<span class="token comment">##  4</span>
<span class="token comment">##  5</span>
<span class="token comment">## [torch.LongStorage of size 6]</span>
<span class="token builtin">id</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>storage<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">id</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>storage<span class="token punctuation">)</span>  <span class="token comment"># True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>绝大多数操作, 如<code>view()</code>, 不会修改<code>tensor</code>的存储区, 而是修改了<code>tensor</code>的头信息. 这种方法更节省内存, 计算更高效. 如果有些操作导致<code>tensor</code>的存储区不连续, 只需要调用<code>torch.contiguous</code>方法将其编程连续的数据, 该方法会复制数据到新的内存.</p>`,5),c=[o];function p(i,l){return s(),a("div",null,c)}const r=n(t,[["render",p],["__file","storage.html.vue"]]);export{r as default};
