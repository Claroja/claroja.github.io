import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o,c,a as s,b as n,d as i,e as a}from"./app-O0xqlHfm.js";const u={},r=a(`<h1 id="requiresgrad" tabindex="-1"><a class="header-anchor" href="#requiresgrad" aria-hidden="true">#</a> requiresgrad</h1><p>tensor被创建的时候, 默认<code>tensor.requires_grad</code>为<code>False</code>, 既不需要求导.</p><p>在tensor的计算中, 如果输入中, 有一个输入需要求导<code>tensor.requires_grad=True</code>, 输出一定会需要求导. 只有当所有输入都不需要求导的时候, 输出才会不需要求导.</p><p>比如我们喂给模型的数据(<code>DataLoader</code>取出的数据), 这些数据是不需要求导的. 网络的输出也是不需要求导的. 但是, 损失值loss是自动求导的, 因为虽然输入的训练数据是默认不求导的, 而model中的所有参数是默认求导的, 正是, 只要输入一个需要求导, 那么输出的网络结果必定会需要求导.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> torch
<span class="token keyword">import</span> torch<span class="token punctuation">.</span>nn <span class="token keyword">as</span> nn

<span class="token builtin">input</span> <span class="token operator">=</span> torch<span class="token punctuation">.</span>randn<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">.</span>requires_grad<span class="token punctuation">)</span>
<span class="token comment">## False</span>

net <span class="token operator">=</span> nn<span class="token punctuation">.</span>Sequential<span class="token punctuation">(</span>nn<span class="token punctuation">.</span>Linear<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> param <span class="token keyword">in</span> net<span class="token punctuation">.</span>named_parameters<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>param<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> param<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>requires_grad<span class="token punctuation">)</span>
<span class="token comment">## 0.weight True</span>
<span class="token comment">## 0.bias True</span>

output <span class="token operator">=</span> net<span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>output<span class="token punctuation">.</span>requires_grad<span class="token punctuation">)</span>
<span class="token comment">## True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意, 不要把网络的输入的<code>requires_grad</code>设置为<code>True</code>. 虽然不会影响反向传播, 但是需要额外计算导数, 会增加运算量. 只需要模型中的参数求导, 来更新网络即可.</p><h2 id="finetuning" tabindex="-1"><a class="header-anchor" href="#finetuning" aria-hidden="true">#</a> Finetuning</h2>`,7),l=s("code",null,"requires_grad=False",-1),d={href:"https://pytorch.org/tutorials/beginner/blitz/autograd_tutorial.html#exclusion-from-the-dag",target:"_blank",rel:"noopener noreferrer"},k=a(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>model <span class="token operator">=</span> torchvision<span class="token punctuation">.</span>models<span class="token punctuation">.</span>resnet18<span class="token punctuation">(</span>pretrained<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> param <span class="token keyword">in</span> model<span class="token punctuation">.</span>parameters<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    param<span class="token punctuation">.</span>requires_grad <span class="token operator">=</span> <span class="token boolean">False</span>
<span class="token comment">## 用一个新的 fc 层来取代之前的全连接层, 默认 requires_grad=True</span>
model<span class="token punctuation">.</span>fc <span class="token operator">=</span> nn<span class="token punctuation">.</span>Linear<span class="token punctuation">(</span><span class="token number">512</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token comment">## 只更新 fc 层的参数</span>
optimizer <span class="token operator">=</span> optim<span class="token punctuation">.</span>SGD<span class="token punctuation">(</span>model<span class="token punctuation">.</span>fc<span class="token punctuation">.</span>parameters<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> lr<span class="token operator">=</span><span class="token number">1e-2</span><span class="token punctuation">,</span> momentum<span class="token operator">=</span><span class="token number">0.9</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="torch-no-grad" tabindex="-1"><a class="header-anchor" href="#torch-no-grad" aria-hidden="true">#</a> torch.no_grad</h2><p><code>require_grad=False</code>的上下文函数, 可以简单实现暂时不需要追踪参数导数的目的.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> torch

x <span class="token operator">=</span> torch<span class="token punctuation">.</span>randn<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> requires_grad <span class="token operator">=</span> <span class="token boolean">True</span><span class="token punctuation">)</span>
y <span class="token operator">=</span> x<span class="token operator">*</span>x
<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>requires_grad<span class="token punctuation">)</span>  <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>y<span class="token punctuation">.</span>requires_grad<span class="token punctuation">)</span>  <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token operator">*</span>x<span class="token punctuation">)</span><span class="token punctuation">.</span>requires_grad<span class="token punctuation">)</span>  <span class="token comment"># True</span>

<span class="token keyword">with</span> torch<span class="token punctuation">.</span>no_grad<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>requires_grad<span class="token punctuation">)</span>  <span class="token comment"># True</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>y<span class="token punctuation">.</span>requires_grad<span class="token punctuation">)</span>  <span class="token comment"># True</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x <span class="token operator">*</span> x<span class="token punctuation">)</span><span class="token punctuation">.</span>requires_grad<span class="token punctuation">)</span>  <span class="token comment"># False</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>requires_grad<span class="token punctuation">)</span>  <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>y<span class="token punctuation">.</span>requires_grad<span class="token punctuation">)</span>  <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x <span class="token operator">*</span> x<span class="token punctuation">)</span><span class="token punctuation">.</span>requires_grad<span class="token punctuation">)</span>  <span class="token comment"># True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function m(v,b){const e=p("ExternalLinkIcon");return o(),c("div",null,[r,s("p",null,[n("如果我们想进行Finetuning(迁移学习), 既在训练过程中冻结部分网络, 部分网络的参数不再更新. 就可通过设置"),l,n("来实现."),s("a",d,[n("官网参考"),i(e)]),n(" 下面的代码中, 冻结了 resnet 前边的所有层，在训练过程中只更新最后的fc层中的参数。")]),k])}const _=t(u,[["render",m],["__file","requiresgrad.html.vue"]]);export{_ as default};
