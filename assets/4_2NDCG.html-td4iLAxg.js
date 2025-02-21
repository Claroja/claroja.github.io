import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as n,e as m,a as s,b as l}from"./app-jdLxCr9I.js";const e="/assets/1-snO5HgjH.png",i={},r=m('<h1 id="ndcg" tabindex="-1"><a class="header-anchor" href="#ndcg" aria-hidden="true">#</a> NDCG</h1><p>NDCG: Normalized Discounted Cumulative Gain(归一化折损累计增益)</p><p>当我们检索推荐排序，网页返回了与推荐排序相关的链接列表。列表可能会是[A,B,C,G,D,E,F],也可能是[C,F,A,E,D]，现在问题来了，当系统返回这些列表时，怎么评价哪个列表更好？</p><h2 id="dataset" tabindex="-1"><a class="header-anchor" href="#dataset" aria-hidden="true">#</a> dataset</h2><table><thead><tr><th>item</th><th>relevance</th></tr></thead><tbody><tr><td>A</td><td>0.5</td></tr><tr><td>B</td><td>0.9</td></tr><tr><td>C</td><td>0.3</td></tr><tr><td>D</td><td>0.6</td></tr><tr><td>E</td><td>0.1</td></tr></tbody></table><h2 id="g-gain" tabindex="-1"><a class="header-anchor" href="#g-gain" aria-hidden="true">#</a> G(Gain)</h2><p>表示物品(item)和请求(query)的相关性得分:</p>',7),c=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"G"),s("mo",null,"="),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"l"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," G = rel(i) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal"},"G"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},")")])])])])],-1),o=s("p",null,"其中:",-1),p=s("ol",null,[s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"i")]),s("annotation",{encoding:"application/x-tex"},"i")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6595em"}}),s("span",{class:"mord mathnormal"},"i")])])]),l(" 是物品的ID")]),s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"l"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"rel(i)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},")")])])]),l(" 相关性得分, 由人工标注.")])],-1),h=s("h2",{id:"cg-cumulative-gain",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#cg-cumulative-gain","aria-hidden":"true"},"#"),l(" CG(Cumulative Gain)")],-1),u=s("p",null,"表示对K个item的Gain进行累加。",-1),d=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"C"),s("msub",null,[s("mi",null,"G"),s("mi",null,"k")]),s("mo",null,"="),s("munderover",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"k")]),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"l"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," CG_k = \\sum_{i=1}^{k}rel(i) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"G"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03148em"}},"k")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"3.1138em","vertical-align":"-1.2777em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.8361em"}},[s("span",{style:{top:"-1.8723em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.05em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",null,[s("span",{class:"mop op-symbol large-op"},"∑")])]),s("span",{style:{top:"-4.3em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03148em"}},"k")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.2777em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},")")])])])])],-1),g=s("p",null,"CG只是单纯累加相关性，不考虑位置信息。",-1),y=s("ol",null,[s("li",null,"如果返回一个list_1=[A,B,C,D,E]，那list_1的CG为0.5+0.9+0.3+0.6+0.1=2.4"),s("li",null,"如果返回一个list_2=[D,A,E,C,B]，那list_2的CG为0.6+0.5+0.1+0.3+0.9=2.4")],-1),x=s("p",null,"所以，顺序不影响CG得分。如果我们想评估不同顺序的影响，就需要使用另一个指标DCG来评估。",-1),_=s("h2",{id:"dcg-discounted-cumulative-gain",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#dcg-discounted-cumulative-gain","aria-hidden":"true"},"#"),l(" DCG(Discounted Cumulative Gain)")],-1),v=s("p",null,"考虑排序顺序的因素，使得排名靠前的item增益更高，对排名靠后的item进行折损。DCG的思想是：list中item的顺序很重要，不同位置的贡献不同，一般来说，排在前面的item影响更大，排在后面的item影响较小。（例如一个返回的网页，肯定是排在前面的item会有更多人点击）。所以，相对CG来说，DCG使排在前面的item增加其影响，排在后面的item减弱其影响。",-1),w=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"D"),s("mi",null,"C"),s("msub",null,[s("mi",null,"G"),s("mi",null,"k")]),s("mo",null,"="),s("munderover",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"k")]),s("mfrac",null,[s("mrow",null,[s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"l"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{stretchy:"false"},")")]),s("mrow",null,[s("mi",null,"l"),s("mi",null,"o"),s("msub",null,[s("mi",null,"g"),s("mn",null,"2")]),s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",null,"+"),s("mn",null,"1"),s("mo",{stretchy:"false"},")")])])])]),s("annotation",{encoding:"application/x-tex"}," DCG_k=\\sum_{i=1}^{k}\\frac{rel(i)}{log_2{(i+1)}} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"G"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03148em"}},"k")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"3.1138em","vertical-align":"-1.2777em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.8361em"}},[s("span",{style:{top:"-1.8723em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.05em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",null,[s("span",{class:"mop op-symbol large-op"},"∑")])]),s("span",{style:{top:"-4.3em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03148em"}},"k")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.2777em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.427em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord"},[s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},")")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.936em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])])],-1),k=s("p",null,"怎么实现这个思想呢？DCG在CG的基础上，给每个item的相关性比上log2(i+1)，i越大，log2(i+1)的值越大，相当于给每个item的相关性打个折扣，item越靠后，折扣越大。",-1),b=s("p",null,"例如, list_1=[A,B,C,D,E], 其对应计算如下：",-1),C=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"i"),s("th",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"l"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"rel(i)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},")")])])])]),s("th",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",null,"+"),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"log(i+1)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])])]),s("th",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"l"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{stretchy:"false"},")"),s("mi",{mathvariant:"normal"},"/"),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",null,"+"),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"rel(i)/log(i+1)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},")"),s("span",{class:"mord"},"/"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])])])])]),s("tbody",null,[s("tr",null,[s("td",null,"1 = A"),s("td",null,"0.5"),s("td",null,"1"),s("td",null,"0.5")]),s("tr",null,[s("td",null,"2 = B"),s("td",null,"0.9"),s("td",null,"1.59"),s("td",null,"0.57")]),s("tr",null,[s("td",null,"3 = C"),s("td",null,"0.3"),s("td",null,"2"),s("td",null,"0.15")]),s("tr",null,[s("td",null,"4 = D"),s("td",null,"0.6"),s("td",null,"2.32"),s("td",null,"0.26")]),s("tr",null,[s("td",null,"5 = E"),s("td",null,"0.1"),s("td",null,"2.59"),s("td",null,"0.04")])])],-1),G=s("p",null,"list_1的 DCG_1= 0.5+0.57+0.15+0.26+0.04=1.52",-1),f=s("p",null,"list_2=[D,A,E,C,B]，其对应计算如下：",-1),D=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"i"),s("th",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"l"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"rel(i)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},")")])])])]),s("th",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",null,"+"),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"log(i+1)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])])]),s("th",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"l"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{stretchy:"false"},")"),s("mi",{mathvariant:"normal"},"/"),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",null,"+"),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"rel(i)/log(i+1)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},")"),s("span",{class:"mord"},"/"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])])])])]),s("tbody",null,[s("tr",null,[s("td",null,"1 = D"),s("td",null,"0.6"),s("td",null,"1"),s("td",null,"0.6")]),s("tr",null,[s("td",null,"2 = A"),s("td",null,"0.5"),s("td",null,"1.59"),s("td",null,"0.31")]),s("tr",null,[s("td",null,"3 = E"),s("td",null,"0.1"),s("td",null,"2"),s("td",null,"0.05")]),s("tr",null,[s("td",null,"4 = C"),s("td",null,"0.3"),s("td",null,"2.32"),s("td",null,"0.13")]),s("tr",null,[s("td",null,"5 = B"),s("td",null,"0.9"),s("td",null,"2.59"),s("td",null,"0.35")])])],-1),M=s("p",null,"list_2的 DCG_2= 0.6+0.31+0.05+0.13+0.35=1.44",-1),z=s("p",null,"DCG_1 > DCG_2, 所以在这个例子里list_1优于list_2。",-1),N=s("h2",{id:"ndcg-normalized-dcg",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#ndcg-normalized-dcg","aria-hidden":"true"},"#"),l(" NDCG(Normalized DCG)")],-1),L=s("h3",{id:"idgc-ideal-dcg",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#idgc-ideal-dcg","aria-hidden":"true"},"#"),l(" IDGC(ideal DCG)")],-1),B=s("p",null,"在NDCG之前，先了解一些IDGC(ideal DCG)--理想的DCG，IDCG的依据是：是根据rel(i)降序排列，即排列到最好状态。算出最好排列的DCG，就是IDCG。IDCG=最好排列的DCG",-1),E=s("p",null,"对于上述的例子，按照rel(i)进行降序排列的最好状态为list_best=[B,D,A,C,E]",-1),I=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"i"),s("th",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"l"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"rel(i)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},")")])])])]),s("th",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",null,"+"),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"log(i+1)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])])]),s("th",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"l"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{stretchy:"false"},")"),s("mi",{mathvariant:"normal"},"/"),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",null,"+"),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"rel(i)/log(i+1)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},")"),s("span",{class:"mord"},"/"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])])])])]),s("tbody",null,[s("tr",null,[s("td",null,"1 = B"),s("td",null,"0.9"),s("td",null,"1"),s("td",null,"0.9")]),s("tr",null,[s("td",null,"2 = D"),s("td",null,"0.6"),s("td",null,"1.59"),s("td",null,"0.38")]),s("tr",null,[s("td",null,"3 = A"),s("td",null,"0.5"),s("td",null,"2"),s("td",null,"0.25")]),s("tr",null,[s("td",null,"4 = C"),s("td",null,"0.3"),s("td",null,"2.32"),s("td",null,"0.13")]),s("tr",null,[s("td",null,"5 = E"),s("td",null,"0.1"),s("td",null,"2.59"),s("td",null,"0.04")])])],-1),A=s("p",null,"IDCG = DCG_best = 0.9+0.38+0.25+0.13+0.04=1.7 (理所当然，IDCG>DCG_1和DCG_2)",-1),q=s("h3",{id:"ndcg-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#ndcg-1","aria-hidden":"true"},"#"),l(" NDCG")],-1),V=s("p",null,"因为不同query的搜索结果有多有少，所以不同query的DCG值就没有办法来做对比。所以提出NDCG。",-1),F=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"N"),s("mi",null,"D"),s("mi",null,"C"),s("mi",null,"G"),s("mo",null,"="),s("mfrac",null,[s("mrow",null,[s("mi",null,"D"),s("mi",null,"C"),s("mi",null,"G")]),s("mrow",null,[s("mi",null,"I"),s("mi",null,"D"),s("mi",null,"C"),s("mi",null,"G")])])]),s("annotation",{encoding:"application/x-tex"}," NDCG = \\frac{DCG}{IDCG} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D"),s("span",{class:"mord mathnormal"},"CG"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.0463em","vertical-align":"-0.686em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3603em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D"),s("span",{class:"mord mathnormal"},"CG")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D"),s("span",{class:"mord mathnormal"},"CG")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])])],-1),H=s("p",null,"所以NDGC使用DCG/IDCG来表示，这样的话，NDCG就是一个相对值，那么不同query之间就可以通过NDCG值进行比较评估。",-1),j=s("figure",null,[s("img",{src:e,alt:"alt text",tabindex:"0",loading:"lazy"}),s("figcaption",null,"alt text")],-1),K=s("h2",{id:"参考",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),l(" 参考")],-1),O=s("ol",null,[s("li",null,"https://zhuanlan.zhihu.com/p/448686098"),s("li",null,"https://towardsdatascience.com/learning-to-rank-a-complete-guide-to-ranking-using-machine-learning-4c9688d370d4")],-1),S=[r,c,o,p,h,u,d,g,y,x,_,v,w,k,b,C,G,f,D,M,z,N,L,B,E,I,A,q,V,F,H,j,K,O];function T(J,P){return t(),n("div",null,S)}const U=a(i,[["render",T],["__file","4_2NDCG.html.vue"]]);export{U as default};
