import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as m,c as t,b as s,d as a,a as l}from"./app-9tftCahk.js";const e="/assets/2-M-73nwPs.gif",i="/assets/3-_fqGeCfc.gif",r="/assets/4-T9FCyLXf.png",p="/assets/5-YbGq67X0.png",c="/assets/6-vNHSNP0Q.png",o="/assets/7-V7eO3kG7.png",h="/assets/8-HYE6JjsW.png",g="/assets/9-gJFmxR04.png",u="/assets/10-4lSrxXBB.gif",d={},y=s("h1",{id:"gradientboostclassification",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#gradientboostclassification","aria-hidden":"true"},"#"),a(" gradientBoostClassification")],-1),b=s("p",null,[a("在分类问题中, 我们使用"),s("code",null,"log"),a("(odds)来计算预测的均值(类比回归问题的均值). 本例中有4人"),s("code",null,"Loves Troll 2 = Yes"),a(", 有2人"),s("code",null,"Loves Troll 2 = No"),a(", 所以"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mfrac",null,[s("mn",null,"4"),s("mn",null,"2")]),s("mo",null,"="),s("mn",null,"0.7")]),s("annotation",{encoding:"application/x-tex"},"log\\frac{4}{2}=0.7")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.1901em","vertical-align":"-0.345em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8451em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"4")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0.7")])])]),a("就是第一个叶子节点的预测值.")],-1),v=s("p",null,[a("就像逻辑回归一样, 最简单使用"),s("code",null,"log(odds)"),a("进行分类的方法是将其转换为概率, 公式如下:")],-1),f=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"P"),s("mi",null,"r"),s("mi",null,"o"),s("mi",null,"b"),s("mi",null,"a"),s("mi",null,"b"),s("mi",null,"i"),s("mi",null,"l"),s("mi",null,"i"),s("mi",null,"t"),s("mi",null,"y"),s("mi",null,"O"),s("mi",null,"f"),s("mi",null,"L"),s("mi",null,"o"),s("mi",null,"v"),s("mi",null,"i"),s("mi",null,"n"),s("mi",null,"g"),s("mi",null,"T"),s("mi",null,"r"),s("mi",null,"o"),s("mi",null,"l"),s("mi",null,"l"),s("mn",null,"2"),s("mo",null,"="),s("mfrac",null,[s("msup",null,[s("mi",null,"e"),s("mrow",null,[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mi",null,"o"),s("mi",null,"d"),s("mi",null,"d"),s("mi",null,"s"),s("mo",{stretchy:"false"},")")])]),s("mrow",null,[s("mn",null,"1"),s("mo",null,"+"),s("msup",null,[s("mi",null,"e"),s("mrow",null,[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mi",null,"o"),s("mi",null,"d"),s("mi",null,"d"),s("mi",null,"s"),s("mo",{stretchy:"false"},")")])])])]),s("mo",null,"="),s("mfrac",null,[s("msup",null,[s("mi",null,"e"),s("mrow",null,[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mn",null,"4"),s("mi",{mathvariant:"normal"},"/"),s("mn",null,"2"),s("mo",{stretchy:"false"},")")])]),s("mrow",null,[s("mn",null,"1"),s("mo",null,"+"),s("msup",null,[s("mi",null,"e"),s("mrow",null,[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mn",null,"4"),s("mi",{mathvariant:"normal"},"/"),s("mn",null,"2"),s("mo",{stretchy:"false"},")")])])])]),s("mo",null,"="),s("mn",null,"0.7")]),s("annotation",{encoding:"application/x-tex"}," ProbabilityOfLovingTroll2 = \\frac{e^{log(odds)}}{1+e^{log(odds)}} = \\frac{e^{log(4/2)}}{1+e^{log(4/2)}} = 0.7 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mord mathnormal"},"ro"),s("span",{class:"mord mathnormal"},"babi"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mord mathnormal"},"L"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),s("span",{class:"mord mathnormal"},"in"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),s("span",{class:"mord mathnormal"},"ro"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"ll"),s("span",{class:"mord"},"2"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.3523em","vertical-align":"-0.7873em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.565em"}},[s("span",{style:{top:"-2.296em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"e"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.814em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal mtight"},"o"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen mtight"},"("),s("span",{class:"mord mathnormal mtight"},"o"),s("span",{class:"mord mathnormal mtight"},"dd"),s("span",{class:"mord mathnormal mtight"},"s"),s("span",{class:"mclose mtight"},")")])])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"e"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.888em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal mtight"},"o"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen mtight"},"("),s("span",{class:"mord mathnormal mtight"},"o"),s("span",{class:"mord mathnormal mtight"},"dd"),s("span",{class:"mord mathnormal mtight"},"s"),s("span",{class:"mclose mtight"},")")])])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7873em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.3523em","vertical-align":"-0.7873em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.565em"}},[s("span",{style:{top:"-2.296em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"e"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.814em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal mtight"},"o"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen mtight"},"("),s("span",{class:"mord mtight"},"4/2"),s("span",{class:"mclose mtight"},")")])])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"e"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.888em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal mtight"},"o"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen mtight"},"("),s("span",{class:"mord mtight"},"4/2"),s("span",{class:"mclose mtight"},")")])])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7873em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0.7")])])])])],-1),x=s("p",null,"计算伪残差:",-1),_=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"R"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"i"),s("mi",null,"d"),s("mi",null,"u"),s("mi",null,"a"),s("mi",null,"l"),s("mo",null,"="),s("mo",{stretchy:"false"},"("),s("mi",null,"o"),s("mi",null,"b"),s("mi",null,"s"),s("mi",null,"e"),s("mi",null,"r"),s("mi",null,"v"),s("mi",null,"e"),s("mi",null,"d"),s("mo",null,"−"),s("mi",null,"p"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"d"),s("mi",null,"i"),s("mi",null,"c"),s("mi",null,"t"),s("mi",null,"e"),s("mi",null,"d"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," Residual = (observed - predicted) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),s("span",{class:"mord mathnormal"},"es"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mord mathnormal"},"u"),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal"},"b"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"ser"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"c"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mclose"},")")])])])])],-1),w=l('<figure><img src="'+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>现在建立第2棵树来预测残差. 我们限制叶子节点个数是3.</p><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>当使用梯度提升进行回归预测时, 仅包含一个残差的叶子节点的输出值就是那个残差值.</p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>相反的, 当使用梯度提升进行分类预测时, 因为预测值是和概率相关的<code>log(odds)</code>, 所以我们不能简单的相加.</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>需要使用如下的公式进行转换:</p>',8),k=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mfrac",null,[s("mrow",null,[s("mo",null,"∑"),s("mi",null,"R"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"i"),s("mi",null,"d"),s("mi",null,"u"),s("mi",null,"a"),s("msub",null,[s("mi",null,"l"),s("mi",null,"i")])]),s("mrow",null,[s("mo",null,"∑"),s("mo",{stretchy:"false"},"("),s("mi",null,"P"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"v"),s("mi",null,"i"),s("mi",null,"o"),s("mi",null,"u"),s("mi",null,"s"),s("mi",null,"P"),s("mi",null,"r"),s("mi",null,"o"),s("mi",null,"b"),s("mi",null,"a"),s("mi",null,"b"),s("mi",null,"i"),s("mi",null,"l"),s("mi",null,"i"),s("mi",null,"t"),s("msub",null,[s("mi",null,"y"),s("mi",null,"i")]),s("mo",null,"⋅"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("mi",null,"P"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"v"),s("mi",null,"i"),s("mi",null,"o"),s("mi",null,"u"),s("mi",null,"s"),s("mi",null,"P"),s("mi",null,"r"),s("mi",null,"o"),s("mi",null,"b"),s("mi",null,"a"),s("mi",null,"b"),s("mi",null,"i"),s("mi",null,"l"),s("mi",null,"i"),s("mi",null,"t"),s("msub",null,[s("mi",null,"y"),s("mi",null,"i")]),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")")])])]),s("annotation",{encoding:"application/x-tex"}," \\frac{\\sum Residual_i}{\\sum(Previous Probability_i \\cdot (1-Previous Probability_i))} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.363em","vertical-align":"-0.936em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.427em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"∑"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal"},"u"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mord mathnormal"},"ro"),s("span",{class:"mord mathnormal"},"babi"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⋅"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal"},"u"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mord mathnormal"},"ro"),s("span",{class:"mord mathnormal"},"babi"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},"))")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"∑"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),s("span",{class:"mord mathnormal"},"es"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mord mathnormal"},"u"),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0197em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.936em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])])],-1),z=s("p",null,"本例中计算结果为:",-1),M=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mfrac",null,[s("mrow",null,[s("mo",null,"−"),s("mn",null,"0.7")]),s("mrow",null,[s("mn",null,"0.7"),s("mo",null,"⋅"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("mn",null,"0.7"),s("mo",{stretchy:"false"},")")])]),s("mo",null,"="),s("mo",null,"−"),s("mn",null,"3.3")]),s("annotation",{encoding:"application/x-tex"}," \\frac{-0.7}{0.7 \\cdot (1 - 0.7)} =-3.3 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.2574em","vertical-align":"-0.936em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3214em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"0.7"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⋅"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"0.7"),s("span",{class:"mclose"},")")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"−"),s("span",{class:"mord"},"0.7")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.936em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"−"),s("span",{class:"mord"},"3.3")])])])])],-1),P=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mfrac",null,[s("mrow",null,[s("mn",null,"0.3"),s("mo",null,"−"),s("mn",null,"0.7")]),s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mn",null,"0.7"),s("mo",null,"∗"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("mn",null,"0.7"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")"),s("mo",null,"+"),s("mo",{stretchy:"false"},"("),s("mn",null,"0.7"),s("mo",null,"∗"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("mn",null,"0.7"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")")])]),s("mo",null,"="),s("mo",null,"−"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"}," \\frac{0.3-0.7}{(0.7 * (1-0.7))+ (0.7 * (1-0.7))} = -1 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.2574em","vertical-align":"-0.936em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3214em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mopen"},"("),s("span",{class:"mord"},"0.7"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"0.7"),s("span",{class:"mclose"},"))"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"0.7"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"0.7"),s("span",{class:"mclose"},"))")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"0.3"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"0.7")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.936em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"−"),s("span",{class:"mord"},"1")])])])])],-1),L=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mfrac",null,[s("mrow",null,[s("mn",null,"0.3"),s("mo",null,"+"),s("mn",null,"0.3"),s("mo",null,"+"),s("mn",null,"0.3")]),s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mn",null,"0.7"),s("mo",null,"∗"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("mn",null,"0.7"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")"),s("mo",null,"+"),s("mo",{stretchy:"false"},"("),s("mn",null,"0.7"),s("mo",null,"∗"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("mn",null,"0.7"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")"),s("mo",null,"+"),s("mo",{stretchy:"false"},"("),s("mn",null,"0.7"),s("mo",null,"∗"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("mn",null,"0.7"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")")])]),s("mo",null,"="),s("mn",null,"1.4")]),s("annotation",{encoding:"application/x-tex"}," \\frac{0.3+0.3+0.3}{(0.7 * (1-0.7))+(0.7 * (1-0.7))+(0.7 * (1-0.7))} = 1.4 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.2574em","vertical-align":"-0.936em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3214em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mopen"},"("),s("span",{class:"mord"},"0.7"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"0.7"),s("span",{class:"mclose"},"))"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"0.7"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"0.7"),s("span",{class:"mclose"},"))"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"0.7"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"0.7"),s("span",{class:"mclose"},"))")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"0.3"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"0.3"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"0.3")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.936em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1.4")])])])])],-1),N=s("figure",null,[s("img",{src:c,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),R=s("p",null,"现在接合初始叶子节点和第二棵树来更新预测结果. 给第二棵树设置学习率是0.8, 所以第一个样本的结果是:",-1),T=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mi",null,"o"),s("mi",null,"d"),s("mi",null,"d"),s("mi",null,"s"),s("mo",{stretchy:"false"},")"),s("mi",null,"P"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"d"),s("mi",null,"i"),s("mi",null,"c"),s("mi",null,"t"),s("mi",null,"i"),s("mi",null,"o"),s("mi",null,"n"),s("mo",null,"="),s("mn",null,"0.7"),s("mo",null,"+"),s("mo",{stretchy:"false"},"("),s("mn",null,"0.8"),s("mo",null,"∗"),s("mn",null,"1.4"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mn",null,"1.8")]),s("annotation",{encoding:"application/x-tex"}," log(odds)Prediction = 0.7+(0.8*1.4)= 1.8 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal"},"dd"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mclose"},")"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"c"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"0.7"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"0.8"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1.4"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1.8")])])])])],-1),B=s("figure",null,[s("img",{src:o,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),C=s("p",null,[a("将新的"),s("code",null,"log(odds)"),a("值转化为概率:")],-1),O=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"P"),s("mi",null,"r"),s("mi",null,"o"),s("mi",null,"b"),s("mi",null,"a"),s("mi",null,"b"),s("mi",null,"i"),s("mi",null,"l"),s("mi",null,"i"),s("mi",null,"t"),s("mi",null,"y"),s("mo",null,"="),s("mfrac",null,[s("mrow",null,[s("msup",null,[s("mi",null,"e"),s("mn",null,"1")]),s("mi",{mathvariant:"normal"},"."),s("mn",null,"8")]),s("mrow",null,[s("mn",null,"1"),s("mo",null,"+"),s("msup",null,[s("mi",null,"e"),s("mn",null,"1")]),s("mi",{mathvariant:"normal"},"."),s("mn",null,"8")])]),s("mo",null,"="),s("mn",null,"0.9")]),s("annotation",{encoding:"application/x-tex"}," Probability = \\frac{e^1.8}{1+e^1.8}=0.9 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mord mathnormal"},"ro"),s("span",{class:"mord mathnormal"},"babi"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.2604em","vertical-align":"-0.7693em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.4911em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"e"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7401em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])])])])])]),s("span",{class:"mord"},".8")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"e"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])])])])])]),s("span",{class:"mord"},".8")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7693em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0.9")])])])])],-1),V=l('<p>可以看到和正确的结果更近了一步. 依次计算剩下的人:</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>和之前一样, 再次计算伪残差:</p><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>继续创建第3棵树..., 最终完成梯度提升算法.</p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://www.youtube.com/watch?v=jxuNLH5dXCs</li></ol>',8),X=[y,b,v,f,x,_,w,k,z,M,P,L,N,R,T,B,C,O,V];function G(H,S){return m(),t("div",null,X)}const q=n(d,[["render",G],["__file","5梯度提升_分类.html.vue"]]);export{q as default};
