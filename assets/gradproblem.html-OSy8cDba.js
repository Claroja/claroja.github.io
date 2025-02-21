import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as l,c as e,e as n,a as s,b as a}from"./app-jdLxCr9I.js";const p="/assets/1-wxahkpGb.png",c="/assets/2-3z3CjST3.png",o="/assets/3-VYtDGki_.png",i="/assets/4-7ACFD-Db.png",m="/assets/5-3zv0uhA6.png",r={},h=n('<h1 id="gradproblem" tabindex="-1"><a class="header-anchor" href="#gradproblem" aria-hidden="true">#</a> gradproblem</h1><p><img src="'+p+'" alt="" loading="lazy"> 这里考虑长度为T的时序数据, 时间方向上的梯度, 可以反向传播经历了tanh, &quot;+&quot;, MatMul运算. &quot;+&quot;的反向传播会将上游的穿戴的梯度原样传给下游, 因此梯度值不变.</p><h2 id="tanh" tabindex="-1"><a class="header-anchor" href="#tanh" aria-hidden="true">#</a> &quot;tanh&quot;</h2>',3),u=s("p",null,[a("当"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"y"),s("mo",null,"="),s("mi",null,"t"),s("mi",null,"a"),s("mi",null,"n"),s("mi",null,"h"),s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"y=tanh(x)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal"},"anh"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose"},")")])])]),a("时, 导数是"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mfrac",null,[s("mrow",null,[s("mi",null,"d"),s("mi",null,"y")]),s("mrow",null,[s("mi",null,"d"),s("mi",null,"x")])]),s("mo",null,"="),s("mn",null,"1"),s("mo",null,"−"),s("msup",null,[s("mi",null,"y"),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"},"\\frac{dy}{dx}=1-y^2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.2772em","vertical-align":"-0.345em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9322em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"d"),s("span",{class:"mord mathnormal mtight"},"x")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.4461em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"d"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"y")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0085em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])]),a(", 如下图: "),s("img",{src:c,alt:"",loading:"lazy"}),a(" 虚线是导数, 可以看出, 它的值小于1, 并且随着x远离0, 它的值在变小. 当反向传播的梯度过tanh节点时, 它的值会越来越小. 因此如果经过tanh函数T次, 则梯度也会减小T次")],-1),d=s("h2",{id:"matmul",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#matmul","aria-hidden":"true"},"#"),a(" MatMul")],-1),g=s("p",null,[a("这里我们忽略tanh的计算 "),s("img",{src:o,alt:"",loading:"lazy"}),a(" 从上游传来的梯度为"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"d"),s("mi",null,"h")]),s("annotation",{encoding:"application/x-tex"},"dh")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mord mathnormal"},"h")])])]),a(", 此时通过MatMul节点的反向传播通过矩阵乘积"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"d"),s("mi",null,"h"),s("msubsup",null,[s("mi",null,"W"),s("mi",null,"h"),s("mi",null,"T")])]),s("annotation",{encoding:"application/x-tex"},"dhW_h^T")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.1244em","vertical-align":"-0.2831em"}}),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"W"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8413em"}},[s("span",{style:{top:"-2.4169em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"h")])]),s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.13889em"}},"T")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2831em"}},[s("span")])])])])])])])]),a("计算梯度. 之后, 根据时序数据的时间步长, 将计算重复相应次数. 注意, 每次矩阵乘积计算都是使用相同的权重"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"W"),s("mi",null,"h")])]),s("annotation",{encoding:"application/x-tex"},"W_h")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"W"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"h")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),a(".")],-1),k=n(`<p>通过python来实验, 反向传播时梯度的值通过MatMul节点时的变化.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
N <span class="token operator">=</span> <span class="token number">2</span>  <span class="token comment"># mini-batch的大小</span>
H <span class="token operator">=</span> <span class="token number">3</span>  <span class="token comment"># 隐藏状态向量的维数</span>
T <span class="token operator">=</span> <span class="token number">20</span>  <span class="token comment"># 时序数据的长度</span>
dh <span class="token operator">=</span> np<span class="token punctuation">.</span>ones<span class="token punctuation">(</span><span class="token punctuation">(</span>N<span class="token punctuation">,</span> H<span class="token punctuation">)</span><span class="token punctuation">)</span>
np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>seed<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>  <span class="token comment"># 为了复现，固定随机数种子</span>
Wh <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>randn<span class="token punctuation">(</span>H<span class="token punctuation">,</span> H<span class="token punctuation">)</span>
norm_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> t <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>T<span class="token punctuation">)</span><span class="token punctuation">:</span>
    dh <span class="token operator">=</span> np<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>dh<span class="token punctuation">,</span> Wh<span class="token punctuation">.</span>T<span class="token punctuation">)</span>
    norm <span class="token operator">=</span> np<span class="token punctuation">.</span>sqrt<span class="token punctuation">(</span>np<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span>dh<span class="token operator">**</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> N
    norm_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>norm<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>np.ones()</code>初始化<code>dh</code>.然后根据反向传播的MatMul节点的数量更新<code>dh</code>相应次数, 并将各步的<code>dh</code>的大小添加到<code>norm_list</code>中.<code>dh</code>的大小是<code>mini-batch</code>中的平均<code>L2</code>范数.</p><p><img src="`+i+`" alt="" loading="lazy"> 如图, 梯度的大小随着时间步长呈指数级增加, 这就是梯度爆炸(exploding gradients). 梯度爆炸会导致溢出, 出现<code>NaN</code>之类的值.</p><p>下面实现梯度消失, 将<code>Wh</code>的值改一下.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## Wh = np.random.randn(H, H)      # before</span>
Wh <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>randn<span class="token punctuation">(</span>H<span class="token punctuation">,</span> H<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.5</span>  <span class="token comment"># after</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+m+'" alt="" loading="lazy"> 如图, 梯度的大小随着时间步长呈指数级减小, 这就是梯度消失(vanishing gradients). 梯度消失会导致权重不能被更新, 模型无法学习长期的依赖关系.</p><p>如果<code>Wh</code>是标量, 当<code>Wh</code>大于1时, 梯度呈现指数级增加, 当<code>Wh</code>小于1时, 梯度呈指数级减小. 如果<code>Wh</code>是矩阵时, 矩阵的奇异值将成为指标. 奇异值表示数据的离散程度, 根据奇异值是否大于1, 可以预测梯度大小的变化. 如果奇异值的最大值大于1, 则梯度很有可能会呈现指数级增加, 如果奇异值的最大值小于1, 则梯度会呈指数级减小. 奇异值大小只是必要条件, 分充分条件.</p><h2 id="梯度爆炸对策" tabindex="-1"><a class="header-anchor" href="#梯度爆炸对策" aria-hidden="true">#</a> 梯度爆炸对策</h2><p>解决梯度爆炸的方法是,梯度裁剪(gradients clipping), 伪代码:</p>',10),v=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"i"),s("mi",null,"f"),s("mi",{mathvariant:"normal"},"∣"),s("mi",{mathvariant:"normal"},"∣"),s("mover",{accent:"true"},[s("mi",null,"g"),s("mo",null,"^")]),s("mi",{mathvariant:"normal"},"∣"),s("mi",{mathvariant:"normal"},"∣"),s("mo",null,"≥"),s("mi",null,"t"),s("mi",null,"h"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"h"),s("mi",null,"o"),s("mi",null,"l"),s("mi",null,"d"),s("mo",{separator:"true"},";")]),s("annotation",{encoding:"application/x-tex"}," if ||\\hat{g}|| \\geq threshold; ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mord"},"∣∣"),s("span",{class:"mord accent"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6944em"}},[s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g")]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"accent-body",style:{left:"-0.2222em"}},[s("span",{class:"mord"},"^")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1944em"}},[s("span")])])])]),s("span",{class:"mord"},"∣∣"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≥"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mord mathnormal"},"res"),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mpunct"},";")])])])])],-1),y=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mover",{accent:"true"},[s("mi",null,"g"),s("mo",null,"^")]),s("mo",null,"="),s("mfrac",null,[s("mrow",null,[s("mi",null,"t"),s("mi",null,"h"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"h"),s("mi",null,"o"),s("mi",null,"l"),s("mi",null,"d")]),s("mrow",null,[s("mi",{mathvariant:"normal"},"∣"),s("mi",{mathvariant:"normal"},"∣"),s("mover",{accent:"true"},[s("mi",null,"g"),s("mo",null,"^")]),s("mi",{mathvariant:"normal"},"∣"),s("mi",{mathvariant:"normal"},"∣")])]),s("mover",{accent:"true"},[s("mi",null,"g"),s("mo",null,"^")])]),s("annotation",{encoding:"application/x-tex"}," \\hat{g}=\\frac{threshold}{||\\hat{g}||}\\hat{g} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord accent"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6944em"}},[s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g")]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"accent-body",style:{left:"-0.2222em"}},[s("span",{class:"mord"},"^")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1944em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.3074em","vertical-align":"-0.936em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3714em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"∣∣"),s("span",{class:"mord accent"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6944em"}},[s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g")]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"accent-body",style:{left:"-0.2222em"}},[s("span",{class:"mord"},"^")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1944em"}},[s("span")])])])]),s("span",{class:"mord"},"∣∣")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mord mathnormal"},"res"),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"d")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.936em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mord accent"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6944em"}},[s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g")]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"accent-body",style:{left:"-0.2222em"}},[s("span",{class:"mord"},"^")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1944em"}},[s("span")])])])])])])])])],-1),b=s("p",null,[a("这里假设可以将神经网络用到的所有参数的梯度整合成一个, 并用符号"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mover",{accent:"true"},[s("mi",null,"g"),s("mo",null,"^")])]),s("annotation",{encoding:"application/x-tex"},"\\hat{g}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord accent"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6944em"}},[s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g")]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"accent-body",style:{left:"-0.2222em"}},[s("span",{class:"mord"},"^")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1944em"}},[s("span")])])])])])])]),a("表示. 贾昂阈值设置为threshold. 如果梯度的L2范数"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"normal"},"∣"),s("mi",{mathvariant:"normal"},"∣"),s("mover",{accent:"true"},[s("mi",null,"g"),s("mo",null,"^")])]),s("annotation",{encoding:"application/x-tex"},"||\\hat{g}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"∣∣"),s("span",{class:"mord accent"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6944em"}},[s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g")]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"accent-body",style:{left:"-0.2222em"}},[s("span",{class:"mord"},"^")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1944em"}},[s("span")])])])])])])]),a("大于或等于阈值, 就按照上面的方法修正梯度. python实现:")],-1),x=n(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
dW1 <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>rand<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span>
dW2 <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>rand<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span>
grads <span class="token operator">=</span> <span class="token punctuation">[</span>dW1<span class="token punctuation">,</span> dW2<span class="token punctuation">]</span>
max_norm <span class="token operator">=</span> <span class="token number">5.0</span>
<span class="token keyword">def</span> <span class="token function">clip_grads</span><span class="token punctuation">(</span>grads<span class="token punctuation">,</span> max_norm<span class="token punctuation">)</span><span class="token punctuation">:</span>
    total_norm <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> grad <span class="token keyword">in</span> grads<span class="token punctuation">:</span>
        total_norm <span class="token operator">+=</span> np<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span>grad <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">)</span>
    total_norm <span class="token operator">=</span> np<span class="token punctuation">.</span>sqrt<span class="token punctuation">(</span>total_norm<span class="token punctuation">)</span>
    rate <span class="token operator">=</span> max_norm <span class="token operator">/</span> <span class="token punctuation">(</span>total_norm <span class="token operator">+</span> <span class="token number">1e-6</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> rate <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> grad <span class="token keyword">in</span> grads<span class="token punctuation">:</span>
            grad <span class="token operator">*=</span> rate
clip_grads<span class="token punctuation">(</span>grads<span class="token punctuation">,</span> max_norm<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数 <code>grads</code> 是梯度的列表，<code>max_norm</code> 是阈值，</p><h2 id="梯度消失对策" tabindex="-1"><a class="header-anchor" href="#梯度消失对策" aria-hidden="true">#</a> 梯度消失对策</h2><p>使用lstm</p>`,4),w=[h,u,d,g,k,v,y,b,x];function _(f,M){return l(),e("div",null,w)}const L=t(r,[["render",_],["__file","gradproblem.html.vue"]]);export{L as default};
