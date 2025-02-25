import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as l,c as p,b as s,d as a,a as n}from"./app-7knaTE3M.js";const e="/assets/1-kpKDXFOm.png",i="/assets/2-5__3phsK.png",c={},o=s("h1",{id:"卡方分布",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#卡方分布","aria-hidden":"true"},"#"),a(" 卡方分布")],-1),m=s("p",null,[a("卡方分布(chi-square distribution): "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"Z"),s("mn",null,"1")]),s("mo",{separator:"true"},","),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"Z"),s("mi",null,"n")])]),s("annotation",{encoding:"application/x-tex"},"Z_1,...,Z_n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"Z"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0715em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"..."),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"Z"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0715em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),a("服从N(0,1), 则Y=\\sum_{i=1}"),s("sup",null,"nZ_i"),a("2"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mtext",null,"服从自由度为"),s("mi",null,"n"),s("mtext",null,"的卡方分布"),s("mo",{separator:"true"},","),s("mtext",null,"记为")]),s("annotation",{encoding:"application/x-tex"},"服从自由度为n的卡方分布,记为")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),s("span",{class:"mord cjk_fallback"},"服从自由度为"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mord cjk_fallback"},"的卡方分布"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord cjk_fallback"},"记为")])])]),a("\\chi^2(n)$")],-1),r=s("p",null,[a("使用python构造一个服从标准正态分布的卡方分布. 这里, 我们从标准正态分布中随机抽取容量为10的样本, 然后取其平方和, 这样的过程重复100万次. 这样的话, 就相当于从"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msubsup",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mn",null,"10")]),s("msubsup",null,[s("mi",null,"Z"),s("mi",null,"i"),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"},"\\sum_{i=1}^{10}Z_i^2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.2537em","vertical-align":"-0.2997em"}}),s("span",{class:"mop"},[s("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"∑"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.954em"}},[s("span",{style:{top:"-2.4003em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.2029em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"10")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2997em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"Z"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-2.4413em","margin-left":"-0.0715em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])]),s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2587em"}},[s("span")])])])])])])])]),a("中随机抽取样本量为100万的样本数据.")],-1),u=n(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>n <span class="token operator">=</span> <span class="token number">10</span>
rv <span class="token operator">=</span> stats<span class="token punctuation">.</span>norm<span class="token punctuation">(</span><span class="token punctuation">)</span>
sample_size <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token number">1e6</span><span class="token punctuation">)</span>
<span class="token comment">## 从标准正态分布中随机抽取10×100万的容量</span>
Zs_sample <span class="token operator">=</span> rv<span class="token punctuation">.</span>rvs<span class="token punctuation">(</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> sample_size<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">## 在axis=0的方向上求和，得到标准正态分布的平方和的标本数据</span>
chi2_sample <span class="token operator">=</span> np<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span>Zs_sample<span class="token operator">**</span><span class="token number">2</span><span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),h=s("p",null,[a("因为是10个标准正态分布的平方和, 所以应该是自由度为10的卡方分布.在"),s("code",null,"scipy.stats"),a("中, 可以用"),s("code",null,"chi2"),a("函数构造服从卡方分布的随机变量, 在第1个参数指定自由度. 将从"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msubsup",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mn",null,"10")]),s("msubsup",null,[s("mi",null,"Z"),s("mi",null,"i"),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"},"\\sum_{i=1}^{10}Z_i^2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.2537em","vertical-align":"-0.2997em"}}),s("span",{class:"mop"},[s("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"∑"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.954em"}},[s("span",{style:{top:"-2.4003em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.2029em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"10")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2997em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"Z"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-2.4413em","margin-left":"-0.0715em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])]),s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2587em"}},[s("span")])])])])])])])]),a("中随机抽取的样本数据的直方图和"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",null,"χ"),s("mn",null,"2")]),s("mo",{stretchy:"false"},"("),s("mn",null,"10"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"\\chi^2(10)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"10"),s("span",{class:"mclose"},")")])])]),a("的密度函数可视化, 如图:")],-1),g=n(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fig <span class="token operator">=</span> plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span>figsize<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
ax <span class="token operator">=</span> fig<span class="token punctuation">.</span>add_subplot<span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span>

rv_true <span class="token operator">=</span> stats<span class="token punctuation">.</span>chi2<span class="token punctuation">(</span>n<span class="token punctuation">)</span>
xs <span class="token operator">=</span> np<span class="token punctuation">.</span>linspace<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
ax<span class="token punctuation">.</span>hist<span class="token punctuation">(</span>chi2_sample<span class="token punctuation">,</span> bins<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">,</span> density<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
        alpha<span class="token operator">=</span><span class="token number">0.5</span><span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string">&#39;chi2_sample&#39;</span><span class="token punctuation">)</span>
ax<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>xs<span class="token punctuation">,</span> rv_true<span class="token punctuation">.</span>pdf<span class="token punctuation">(</span>xs<span class="token punctuation">)</span><span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string-interpolation"><span class="token string">f&#39;chi2(</span><span class="token interpolation"><span class="token punctuation">{</span>n<span class="token punctuation">}</span></span><span class="token string">)&#39;</span></span><span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token string">&#39;gray&#39;</span><span class="token punctuation">)</span>

ax<span class="token punctuation">.</span>legend<span class="token punctuation">(</span><span class="token punctuation">)</span>
ax<span class="token punctuation">.</span>set_xlim<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),d=s("p",null,[s("img",{src:e,alt:"",loading:"lazy"}),a(" 直方图和密度函数非常吻合, 则"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msubsup",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mn",null,"10")]),s("msubsup",null,[s("mi",null,"Z"),s("mi",null,"i"),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"},"\\sum_{i=1}^{10}Z_i^2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.2537em","vertical-align":"-0.2997em"}}),s("span",{class:"mop"},[s("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"∑"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.954em"}},[s("span",{style:{top:"-2.4003em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.2029em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"10")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2997em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"Z"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-2.4413em","margin-left":"-0.0715em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])]),s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2587em"}},[s("span")])])])])])])])]),a("可以确认是"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",null,"χ"),s("mn",null,"2")]),s("mo",{stretchy:"false"},"("),s("mn",null,"10"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"\\chi^2(10)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"10"),s("span",{class:"mclose"},")")])])]),a("分布. 接下来看卡方分布随自由度n是怎样变化的. 这里让自由度n在3,5,10中进行变化, 做出图像:")],-1),k=n(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fig <span class="token operator">=</span> plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span>figsize<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
ax <span class="token operator">=</span> fig<span class="token punctuation">.</span>add_subplot<span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span>

xs <span class="token operator">=</span> np<span class="token punctuation">.</span>linspace<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> n<span class="token punctuation">,</span> ls <span class="token keyword">in</span> <span class="token builtin">zip</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> linestyles<span class="token punctuation">)</span><span class="token punctuation">:</span>
    rv <span class="token operator">=</span> stats<span class="token punctuation">.</span>chi2<span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    ax<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>xs<span class="token punctuation">,</span> rv<span class="token punctuation">.</span>pdf<span class="token punctuation">(</span>xs<span class="token punctuation">)</span><span class="token punctuation">,</span>
            label<span class="token operator">=</span><span class="token string-interpolation"><span class="token string">f&#39;chi2(</span><span class="token interpolation"><span class="token punctuation">{</span>n<span class="token punctuation">}</span></span><span class="token string">)&#39;</span></span><span class="token punctuation">,</span> ls<span class="token operator">=</span>ls<span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token string">&#39;gray&#39;</span><span class="token punctuation">)</span>
    
ax<span class="token punctuation">.</span>legend<span class="token punctuation">(</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>卡方分布特征有3个:</p><ol><li>左右不对称, 向右偏斜</li><li>自由度越大, 就越接近左右对称</li><li>分布峰值在自由度附近</li></ol>',4),v=s("p",null,[a("与标准正态分布一样, 经常会使用卡方分布的上次100"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"α")]),s("annotation",{encoding:"application/x-tex"},"\\alpha")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.0037em"}},"α")])])]),a("%分为点, 因此, 将自由度为n的卡方分布的上侧100"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"α")]),s("annotation",{encoding:"application/x-tex"},"\\alpha")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.0037em"}},"α")])])]),a("%分位点记为"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msubsup",null,[s("mi",null,"χ"),s("mi",null,"α"),s("mn",null,"2")]),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"\\chi^2_\\alpha(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-2.453em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.0037em"}},"α")])]),s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.247em"}},[s("span")])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a(", 可以使用"),s("code",null,"isf"),a("函数计算"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msubsup",null,[s("mi",null,"χ"),s("mi",null,"α"),s("mn",null,"2")]),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"\\chi^2_\\alpha(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-2.453em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.0037em"}},"α")])]),s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.247em"}},[s("span")])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a(", 比如计算"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msubsup",null,[s("mi",null,"χ"),s("mi",null,"α"),s("mn",null,"2")]),s("mo",{stretchy:"false"},"("),s("mn",null,"5"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"\\chi^2_\\alpha(5)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-2.453em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.0037em"}},"α")])]),s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.247em"}},[s("span")])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"5"),s("span",{class:"mclose"},")")])])]),a(", 可以执行以下操作:")],-1),y=n(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rv <span class="token operator">=</span> stats<span class="token punctuation">.</span>chi2<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
rv<span class="token punctuation">.</span>isf<span class="token punctuation">(</span><span class="token number">0.05</span><span class="token punctuation">)</span>  <span class="token comment"># 11.070497693516355</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><table><thead><tr><th>标签</th><th>描述</th></tr></thead><tbody><tr><td>参数</td><td>n</td></tr><tr><td>可取值</td><td>非负实数</td></tr><tr><td>scipy.stats</td><td>chi2(n)</td></tr></tbody></table>`,3),b=[o,m,r,u,h,g,d,k,v,y];function x(z,_){return l(),p("div",null,b)}const M=t(c,[["render",x],["__file","卡方分布.html.vue"]]);export{M as default};
