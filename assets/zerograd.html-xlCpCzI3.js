import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-A10JnHE0.js";const p={},e=t(`<h1 id="zerograd" tabindex="-1"><a class="header-anchor" href="#zerograd" aria-hidden="true">#</a> zerograd</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> torch
<span class="token keyword">import</span> torch<span class="token punctuation">.</span>nn <span class="token keyword">as</span> nn

<span class="token keyword">class</span> <span class="token class-name">Simple</span><span class="token punctuation">(</span>nn<span class="token punctuation">.</span>Module<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>linear <span class="token operator">=</span> nn<span class="token punctuation">.</span>Linear<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span>bias<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">forward</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span>
        x <span class="token operator">=</span> self<span class="token punctuation">.</span>linear<span class="token punctuation">(</span>x<span class="token punctuation">)</span>
        <span class="token keyword">return</span> x


model <span class="token operator">=</span> Simple<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">for</span> m <span class="token keyword">in</span> model<span class="token punctuation">.</span>parameters<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>  <span class="token comment"># tensor([[-0.1925, -0.1296,  0.1730]], requires_grad=True)</span>
    m<span class="token punctuation">.</span>detach<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>fill_<span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span>  <span class="token comment"># tensor赋值时必须先使用detach()方法脱离图(但是共享空间), 然后再赋值</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>  <span class="token comment"># tensor([[0.1000, 0.1000, 0.1000]], requires_grad=True)</span>

criterion <span class="token operator">=</span> nn<span class="token punctuation">.</span>MSELoss<span class="token punctuation">(</span><span class="token punctuation">)</span>
optimizer <span class="token operator">=</span> torch<span class="token punctuation">.</span>optim<span class="token punctuation">.</span>SGD<span class="token punctuation">(</span>model<span class="token punctuation">.</span>parameters<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> lr<span class="token operator">=</span><span class="token number">1.0</span><span class="token punctuation">)</span>

model<span class="token punctuation">.</span>train<span class="token punctuation">(</span><span class="token punctuation">)</span>

images <span class="token operator">=</span> torch<span class="token punctuation">.</span>ones<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
targets <span class="token operator">=</span> torch<span class="token punctuation">.</span>ones<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

output <span class="token operator">=</span> model<span class="token punctuation">(</span>images<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>output<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>  <span class="token comment"># torch.Size([8, 1])</span>

loss <span class="token operator">=</span> criterion<span class="token punctuation">(</span>output<span class="token punctuation">,</span> targets<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>model<span class="token punctuation">.</span>linear<span class="token punctuation">.</span>weight<span class="token punctuation">.</span>grad<span class="token punctuation">)</span>  <span class="token comment"># None, 此时还未进行反向传播, 所以为None</span>
loss<span class="token punctuation">.</span>backward<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>model<span class="token punctuation">.</span>linear<span class="token punctuation">.</span>weight<span class="token punctuation">.</span>grad<span class="token punctuation">)</span>  <span class="token comment"># tensor([[-1.4000, -1.4000, -1.4000]]), 通过一次反向传播，计算出网络参数的导数，</span>
optimizer<span class="token punctuation">.</span>step<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>model<span class="token punctuation">.</span>linear<span class="token punctuation">.</span>weight<span class="token punctuation">)</span>  <span class="token comment">#tensor([[1.5000, 1.5000, 1.5000]], requires_grad=True), 原始权重减去梯度, 对应上0.1 - (-1.4) = 1.5</span>
optimizer<span class="token punctuation">.</span>zero_grad<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 等价于调用\`model.zero_grad()\`, 但\`optimizer.zero_grad()\`更符合逻辑</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>model<span class="token punctuation">.</span>linear<span class="token punctuation">.</span>weight<span class="token punctuation">.</span>grad<span class="token punctuation">)</span>  <span class="token comment"># tensor([[0., 0., 0.]]), 将权重的梯度重置为0, 不然会累加</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 下面验证累加</span>
output <span class="token operator">=</span> model<span class="token punctuation">(</span>images<span class="token punctuation">)</span>
loss <span class="token operator">=</span> criterion<span class="token punctuation">(</span>output<span class="token punctuation">,</span> targets<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>model<span class="token punctuation">.</span>linear<span class="token punctuation">.</span>weight<span class="token punctuation">.</span>grad<span class="token punctuation">)</span>  <span class="token comment"># tensor([[0., 0., 0.]]), 由于上面调用了zero_grad(), 所以重置为0了</span>
loss<span class="token punctuation">.</span>backward<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>model<span class="token punctuation">.</span>linear<span class="token punctuation">.</span>weight<span class="token punctuation">.</span>grad<span class="token punctuation">)</span>  <span class="token comment"># tensor([[7.0000, 7.0000, 7.0000]]), 第一次梯度的计算结果</span>

<span class="token comment">## 第二轮</span>
output <span class="token operator">=</span> model<span class="token punctuation">(</span>images<span class="token punctuation">)</span>
loss <span class="token operator">=</span> criterion<span class="token punctuation">(</span>output<span class="token punctuation">,</span> targets<span class="token punctuation">)</span>
loss<span class="token punctuation">.</span>backward<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>model<span class="token punctuation">.</span>linear<span class="token punctuation">.</span>weight<span class="token punctuation">.</span>grad<span class="token punctuation">)</span>  <span class="token comment"># tensor([[14.0000, 14.0000, 14.0000]])  # 第二次的梯度累加在第一次梯度上, 所以是2倍</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","zerograd.html.vue"]]);export{k as default};
