import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-7knaTE3M.js";const t={},o=e(`<h1 id="detach" tabindex="-1"><a class="header-anchor" href="#detach" aria-hidden="true">#</a> detach</h1><p><code>tensor.detach()</code>可以取到tensor的数据和并且<code>requires_grad=False</code>, 而且二者共享存储空间, 既改变一个, 另外一个也会改变.</p><p>当想要将<code>tensor</code>转换为numpy的array时, 需要先<code>detach()</code>, 然后再调用<code>numpy()</code>.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> torch

a <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> a<span class="token punctuation">.</span>detach<span class="token punctuation">(</span><span class="token punctuation">)</span>
b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token comment">## tensor([0, 1, 1])</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token comment">## tensor([0, 1, 1])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tensor-detach-与-tensor-data" tabindex="-1"><a class="header-anchor" href="#tensor-detach-与-tensor-data" aria-hidden="true">#</a> tensor.detach() 与 tensor.data</h2><p>PyTorch 的自动求导不会追踪<code>tensor.data</code>的变化, 而会追踪<code>tensor.detach()</code>的变化, 所以更安全(tensor的值变化后会报错)</p><ul><li>使用<code>tensor.detach</code>会报错</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3.</span><span class="token punctuation">]</span><span class="token punctuation">,</span> requires_grad <span class="token operator">=</span> <span class="token boolean">True</span><span class="token punctuation">)</span>
out <span class="token operator">=</span> a<span class="token punctuation">.</span>sigmoid<span class="token punctuation">(</span><span class="token punctuation">)</span>
c <span class="token operator">=</span> out<span class="token punctuation">.</span>detach<span class="token punctuation">(</span><span class="token punctuation">)</span>
c<span class="token punctuation">.</span>zero_<span class="token punctuation">(</span><span class="token punctuation">)</span>  
<span class="token comment">## tensor([ 0.,  0.,  0.])</span>

out  <span class="token comment"># modified by c.zero_() !!</span>
<span class="token comment">## tensor([ 0.,  0.,  0.])</span>

out<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>backward<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># Requires the original value of out, but that was overwritten by c.zero_()</span>
<span class="token comment">## RuntimeError: one of the variables needed for gradient computation has been modified by an inplace operation</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用<code>tensor.data</code>不会报错</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3.</span><span class="token punctuation">]</span><span class="token punctuation">,</span> requires_grad <span class="token operator">=</span> <span class="token boolean">True</span><span class="token punctuation">)</span>
out <span class="token operator">=</span> a<span class="token punctuation">.</span>sigmoid<span class="token punctuation">(</span><span class="token punctuation">)</span>
c <span class="token operator">=</span> out<span class="token punctuation">.</span>data
c<span class="token punctuation">.</span>zero_<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## tensor([ 0.,  0.,  0.])</span>

out  <span class="token comment"># out  was modified by c.zero_()</span>
<span class="token comment">## tensor([ 0.,  0.,  0.])</span>

out<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>backward<span class="token punctuation">(</span><span class="token punctuation">)</span>
a<span class="token punctuation">.</span>grad  <span class="token comment"># The result is very, very wrong because \`out\` changed!</span>
<span class="token comment">## tensor([ 0.,  0.,  0.])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://github.com/pytorch/pytorch/issues/6990</p>`,11),p=[o];function c(i,u){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","detach.html.vue"]]);export{d as default};
