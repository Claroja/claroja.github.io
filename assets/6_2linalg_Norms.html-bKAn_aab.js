import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,e as t,a as s,b as a}from"./app-A10JnHE0.js";const i={},m=t(`<h1 id="linalg" tabindex="-1"><a class="header-anchor" href="#linalg" aria-hidden="true">#</a> linalg</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>linalg<span class="token punctuation">.</span>norm<span class="token punctuation">(</span>
    x<span class="token punctuation">,</span>                  <span class="token comment"># 表示矩阵（也可以是一维）</span>
    <span class="token builtin">ord</span><span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>           <span class="token comment"># 范数类型</span>
    axis<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>          <span class="token comment"># 计算轴, 1表示行向量, 0表示列向量, None表示矩阵范数</span>
    keepdims<span class="token operator">=</span><span class="token boolean">False</span>      <span class="token comment"># 是否保持矩阵的二维特性</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="范数-ord" tabindex="-1"><a class="header-anchor" href="#范数-ord" aria-hidden="true">#</a> 范数(ord)</h2><h3 id="向量的范数" tabindex="-1"><a class="header-anchor" href="#向量的范数" aria-hidden="true">#</a> 向量的范数</h3>`,4),r=s("ol",null,[s("li",null,[a("ord=1: 一范数, "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"l"),s("mn",null,"1")]),s("mo",null,"="),s("mi",{mathvariant:"normal"},"∣"),s("msub",null,[s("mi",null,"x"),s("mn",null,"1")]),s("mi",{mathvariant:"normal"},"∣"),s("mo",null,"+"),s("mi",{mathvariant:"normal"},"∣"),s("msub",null,[s("mi",null,"x"),s("mn",null,"2")]),s("mi",{mathvariant:"normal"},"∣"),s("mo",null,"+"),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mo",null,"+"),s("mi",{mathvariant:"normal"},"∣"),s("msub",null,[s("mi",null,"x"),s("mi",null,"n")]),s("mi",{mathvariant:"normal"},"∣")]),s("annotation",{encoding:"application/x-tex"},"l_1=|x_1| + |x_2| + ... + |x_n|")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8444em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0197em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"∣"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord"},"∣"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"∣"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord"},"∣"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"..."),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"∣"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord"},"∣")])])])]),s("li",null,[a("ord=2(默认): 二范数, "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"l"),s("mn",null,"2")]),s("mo",null,"="),s("msqrt",null,[s("mrow",null,[s("msubsup",null,[s("mi",null,"x"),s("mn",null,"1"),s("mn",null,"2")]),s("mo",null,"+"),s("msubsup",null,[s("mi",null,"x"),s("mn",null,"2"),s("mn",null,"2")]),s("mo",null,"+"),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mo",null,"+"),s("msubsup",null,[s("mi",null,"x"),s("mi",null,"n"),s("mn",null,"2")])])])]),s("annotation",{encoding:"application/x-tex"},"l_2=\\sqrt{x_1^2 + x_2^2 + ... + x_n^2}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8444em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0197em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.24em","vertical-align":"-0.2902em"}}),s("span",{class:"mord sqrt"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9498em"}},[s("span",{class:"svg-align",style:{top:"-3.2em"}},[s("span",{class:"pstrut",style:{height:"3.2em"}}),s("span",{class:"mord",style:{"padding-left":"1em"}},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7959em"}},[s("span",{style:{top:"-2.4337em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])]),s("span",{style:{top:"-3.0448em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2663em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7959em"}},[s("span",{style:{top:"-2.4337em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])]),s("span",{style:{top:"-3.0448em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2663em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"..."),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7401em"}},[s("span",{style:{top:"-2.453em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])]),s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.247em"}},[s("span")])])])])])])]),s("span",{style:{top:"-2.9098em"}},[s("span",{class:"pstrut",style:{height:"3.2em"}}),s("span",{class:"hide-tail",style:{"min-width":"1.02em",height:"1.28em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.28em",viewBox:"0 0 400000 1296",preserveAspectRatio:"xMinYMin slice"},[s("path",{d:`M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z`})])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2902em"}},[s("span")])])])])])])])]),s("li",null,[a("ord=np.inf: 无穷范数, "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"l"),s("mi",{mathvariant:"normal"},"∞")]),s("mo",null,"="),s("mi",null,"m"),s("mi",null,"a"),s("mi",null,"x"),s("mo",{stretchy:"false"},"("),s("mi",{mathvariant:"normal"},"∣"),s("msub",null,[s("mi",null,"x"),s("mi",null,"i")]),s("mi",{mathvariant:"normal"},"∣"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"l_\\infty = max(|x_i|)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8444em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0197em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"∞")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"ma"),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"∣"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord"},"∣"),s("span",{class:"mclose"},")")])])])])],-1),p=t('<h3 id="矩阵的范数" tabindex="-1"><a class="header-anchor" href="#矩阵的范数" aria-hidden="true">#</a> 矩阵的范数</h3><ol><li>ord=1：列和的最大值</li><li>ord=2：|λE-ATA|=0，求特征值，然后求最大特征值得算术平方根</li><li>ord=∞：行和的最大值</li></ol><h2 id="norms-and-other-numbers" tabindex="-1"><a class="header-anchor" href="#norms-and-other-numbers" aria-hidden="true">#</a> Norms and other numbers</h2><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>linalg.norm(x[, ord, axis, keepdims])</td><td>求范数， 默认是二范数</td></tr><tr><td>linalg.cond(x[, p])</td><td>Compute the condition number of a matrix.</td></tr><tr><td>linalg.det(a)</td><td>Compute the determinant of an array.</td></tr><tr><td>linalg.matrix_rank(M[, tol, hermitian])</td><td>Return matrix rank of array using SVD method</td></tr><tr><td>linalg.slogdet(a)</td><td>Compute the sign and (natural) logarithm of the determinant of an array.</td></tr><tr><td>trace(a[, offset, axis1, axis2, dtype, out])</td><td>Return the sum along diagonals of the array.</td></tr></tbody></table><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考:</h2><ol><li>https://docs.scipy.org/doc/numpy/reference/routines.linalg.html</li></ol>',6),c=[m,r,p];function h(o,g){return n(),e("div",null,c)}const v=l(i,[["render",h],["__file","6_2linalg_Norms.html.vue"]]);export{v as default};
