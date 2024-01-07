import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as p,c as e,a as n,b as a,e as s}from"./app-SnI5rGHA.js";const o="/assets/1-SgWO180r.png",c="/assets/2-_cbruLwQ.png",l={},u=n("h1",{id:"dot",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#dot","aria-hidden":"true"},"#"),a(" dot")],-1),i=n("h2",{id:"矩阵乘法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#矩阵乘法","aria-hidden":"true"},"#"),a(" 矩阵乘法")],-1),r=n("p",null,[n("img",{src:o,alt:"",loading:"lazy"}),a(" 矩阵的乘积是通过左边矩阵的行（横向）和右边矩阵的列（纵向）以"),n("strong",null,"对应元素"),a("的方式相"),n("strong",null,"乘"),a("后再求"),n("strong",null,"和"),a("而得到的。 结果中, "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"A")]),n("annotation",{encoding:"application/x-tex"},"A")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6833em"}}),n("span",{class:"mord mathnormal"},"A")])])]),a("决定了行, "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"B")]),n("annotation",{encoding:"application/x-tex"},"B")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6833em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.05017em"}},"B")])])]),a("决定了列。")],-1),m=s(`<p>python实现</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>A <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
A<span class="token punctuation">.</span>shape
B <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
B<span class="token punctuation">.</span>shape
np<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>A<span class="token punctuation">,</span> B<span class="token punctuation">)</span>

<span class="token comment">## array([[19, 22],</span>
<span class="token comment">##        [43, 50]])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),k=n("p",null,[n("img",{src:c,alt:"",loading:"lazy"}),a(" 注意"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"A")]),n("annotation",{encoding:"application/x-tex"},"A")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6833em"}}),n("span",{class:"mord mathnormal"},"A")])])]),a("的列数要与"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"B")]),n("annotation",{encoding:"application/x-tex"},"B")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6833em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.05017em"}},"B")])])]),a("的行数保持一致")],-1),d=s(`<p>python实现</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>A <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
B <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
np<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>A<span class="token punctuation">,</span> B<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="直觉理解-intuition" tabindex="-1"><a class="header-anchor" href="#直觉理解-intuition" aria-hidden="true">#</a> 直觉理解(intuition)</h2>`,3),h=n("p",null,[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"A")]),n("annotation",{encoding:"application/x-tex"},"A")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6833em"}}),n("span",{class:"mord mathnormal"},"A")])])]),a(" 行数可以看成有多少条数据, 每一行可以看成一条数据. 列数可以看成每条数据有多少个特征. "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"B")]),n("annotation",{encoding:"application/x-tex"},"B")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6833em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.05017em"}},"B")])])]),a(" 行数可以看成特征对应的权重个数, 列数可以看成有多少组权重, 每一列可以看成一组权重")],-1),b=[u,i,r,m,k,d,h];function x(g,_){return p(),e("div",null,b)}const y=t(l,[["render",x],["__file","dot.html.vue"]]);export{y as default};
