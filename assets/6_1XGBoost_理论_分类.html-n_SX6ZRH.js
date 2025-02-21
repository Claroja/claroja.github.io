import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as m,c as n,e as t,a as s,b as a}from"./app-jdLxCr9I.js";const e="/assets/1-k3sfmKkK.png",i="/assets/2-haEclLyR.png",r="/assets/3-wdpAJ8pU.gif",p={},c=t('<h1 id="tree-xgboost-classification" tabindex="-1"><a class="header-anchor" href="#tree-xgboost-classification" aria-hidden="true">#</a> tree_xgboost_classification</h1><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><ol><li>初始预测值是0.5, 无论分类还是回归</li><li></li></ol><p>xgbosst的第一步是做初始预测, 无论是分类还是回归, 默认值是0.5. 在分类中意味着不考虑药剂量(dosage)时, 默认的预测是50%有效, 50%无效.</p><figure><img src="'+e+'" alt="1.png" tabindex="0" loading="lazy"><figcaption>1.png</figcaption></figure><p>就像在用xgboost做回归一样, 我们要拟合残差, 不同的是, 分类问题的相似度得分(similarity score)有不同的计算公式:</p>',6),o=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"S"),s("mi",null,"i"),s("mi",null,"m"),s("mi",null,"i"),s("mi",null,"l"),s("mi",null,"a"),s("mi",null,"r"),s("mi",null,"i"),s("mi",null,"t"),s("mi",null,"y"),s("mo",null,"="),s("mfrac",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mo",null,"∑"),s("mi",null,"R"),s("mi",null,"u"),s("mi",null,"s"),s("mi",null,"i"),s("mi",null,"d"),s("mi",null,"u"),s("mi",null,"a"),s("mi",null,"l"),s("msub",null,[s("mi",null,"s"),s("mi",null,"i")]),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mn",null,"2")])]),s("mrow",null,[s("mo",null,"∑"),s("mo",{stretchy:"false"},"("),s("mi",null,"P"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"v"),s("mi",null,"i"),s("mi",null,"o"),s("mi",null,"u"),s("mi",null,"s"),s("mi",null,"P"),s("mi",null,"r"),s("mi",null,"o"),s("mi",null,"b"),s("mi",null,"a"),s("mi",null,"b"),s("mi",null,"i"),s("mi",null,"l"),s("mi",null,"i"),s("mi",null,"t"),s("msub",null,[s("mi",null,"y"),s("mi",null,"i")]),s("mo",null,"∗"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("mi",null,"P"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"v"),s("mi",null,"i"),s("mi",null,"o"),s("mi",null,"u"),s("mi",null,"s"),s("mi",null,"P"),s("mi",null,"r"),s("mi",null,"o"),s("mi",null,"b"),s("mi",null,"a"),s("mi",null,"b"),s("mi",null,"i"),s("mi",null,"l"),s("mi",null,"i"),s("mi",null,"t"),s("msub",null,[s("mi",null,"y"),s("mi",null,"i")]),s("mo",{stretchy:"false"},")"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mn",null,"2")]),s("mo",null,"+"),s("mi",null,"λ")])])]),s("annotation",{encoding:"application/x-tex"}," Similarity = \\frac{(\\sum Rusiduals_i)^2}{\\sum (PreviousProbability_i * (1-PreviousProbability_i))^2+\\lambda} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"mord mathnormal"},"imi"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.4271em","vertical-align":"-0.936em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.4911em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"∑"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal"},"u"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mord mathnormal"},"ro"),s("span",{class:"mord mathnormal"},"babi"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal"},"u"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mord mathnormal"},"ro"),s("span",{class:"mord mathnormal"},"babi"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},")"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7401em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"λ")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mopen"},"("),s("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"∑"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),s("span",{class:"mord mathnormal"},"u"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mord mathnormal"},"u"),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"s"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.936em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])])],-1),h=s("h2",{id:"cover",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#cover","aria-hidden":"true"},"#"),a(" cover")],-1),g=s("p",null,"xgboost每个叶子节点有个残差个数最小的阈值, 称为cover.",-1),u=s("p",null,[a("分类问题中, cover的计算公式是相似度得分减去"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"λ")]),s("annotation",{encoding:"application/x-tex"},"\\lambda")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"λ")])])]),a(".")],-1),d=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mo",null,"∑"),s("mo",{stretchy:"false"},"("),s("mi",null,"P"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"v"),s("mi",null,"i"),s("mi",null,"o"),s("mi",null,"u"),s("mi",null,"s"),s("mi",null,"P"),s("mi",null,"r"),s("mi",null,"o"),s("mi",null,"b"),s("mi",null,"a"),s("mi",null,"b"),s("mi",null,"i"),s("mi",null,"l"),s("mi",null,"i"),s("mi",null,"t"),s("msub",null,[s("mi",null,"y"),s("mi",null,"i")]),s("mo",null,"∗"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("mi",null,"P"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"v"),s("mi",null,"i"),s("mi",null,"o"),s("mi",null,"u"),s("mi",null,"s"),s("mi",null,"P"),s("mi",null,"r"),s("mi",null,"o"),s("mi",null,"b"),s("mi",null,"a"),s("mi",null,"b"),s("mi",null,"i"),s("mi",null,"l"),s("mi",null,"i"),s("mi",null,"t"),s("msub",null,[s("mi",null,"y"),s("mi",null,"i")]),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," \\sum (PreviousProbability_i * (1-PreviousProbability_i)) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.6em","vertical-align":"-0.55em"}}),s("span",{class:"mop op-symbol large-op",style:{position:"relative",top:"0em"}},"∑"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal"},"u"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mord mathnormal"},"ro"),s("span",{class:"mord mathnormal"},"babi"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal"},"u"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mord mathnormal"},"ro"),s("span",{class:"mord mathnormal"},"babi"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},"))")])])])])],-1),y=s("p",null,"回归问题中, cover等价于",-1),v=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"N"),s("mi",null,"u"),s("mi",null,"m"),s("mi",null,"b"),s("mi",null,"e"),s("mi",null,"r"),s("mi",null,"O"),s("mi",null,"f"),s("mi",null,"R"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"i"),s("mi",null,"d"),s("mi",null,"u"),s("mi",null,"a"),s("mi",null,"l"),s("mi",null,"s")]),s("annotation",{encoding:"application/x-tex"}," NumberOfResiduals ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"mord mathnormal"},"u"),s("span",{class:"mord mathnormal"},"mb"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"er"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),s("span",{class:"mord mathnormal"},"es"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mord mathnormal"},"u"),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"s")])])])])],-1),b=s("p",null,"默认, cover的最小值为1.",-1),x=s("p",null,"在回归问题中, cover没有影响树的生长. 相反, 在分类问题中, 相对复杂, 因为cover的值是由之前的概率值决定的, 例如这个节点的cover值是:",-1),_=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"c"),s("mi",null,"o"),s("mi",null,"v"),s("mi",null,"e"),s("mi",null,"r"),s("mo",null,"="),s("mn",null,"0.5"),s("mo",null,"∗"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("mn",null,"0.5"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mn",null,"0.25")]),s("annotation",{encoding:"application/x-tex"}," cover = 0.5 * (1-0.5) = 0.25 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"co"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"er"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0.5"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"0.5"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0.25")])])])])],-1),f=s("p",null,"由于默认的cover最小值是1, xgboost不会允许该叶子节点存在:",-1),w=s("figure",null,[s("img",{src:i,alt:"2.png",tabindex:"0",loading:"lazy"}),s("figcaption",null,"2.png")],-1),k=s("p",null,"为了教学, 我们设置cover的值为0.",-1),M=s("h2",{id:"预测",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#预测","aria-hidden":"true"},"#"),a(" 预测")],-1),z=s("p",null,[a("将预测概率转换为"),s("code",null,"log(odds)")],-1),P=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"o"),s("mi",null,"d"),s("mi",null,"d"),s("mi",null,"s"),s("mo",null,"="),s("mfrac",null,[s("mi",null,"p"),s("mrow",null,[s("mn",null,"1"),s("mo",null,"−"),s("mi",null,"p")])])]),s("annotation",{encoding:"application/x-tex"}," odds = \\frac{p}{1-p} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal"},"dd"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.988em","vertical-align":"-0.8804em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.1076em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"p")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"p")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8804em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])])],-1),L=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mi",null,"o"),s("mi",null,"d"),s("mi",null,"d"),s("mi",null,"s"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mfrac",null,[s("mi",null,"p"),s("mrow",null,[s("mn",null,"1"),s("mo",null,"−"),s("mi",null,"p")])]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," log(odds) = log(\\frac{p}{1-p}) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal"},"dd"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.988em","vertical-align":"-0.8804em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.1076em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"p")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"p")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8804em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose"},")")])])])])],-1),R=s("p",null,"在这个案例中:",-1),N=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"p"),s("mo",null,"="),s("mn",null,"0.5")]),s("annotation",{encoding:"application/x-tex"}," p=0.5 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0.5")])])])])],-1),B=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mi",null,"o"),s("mi",null,"d"),s("mi",null,"d"),s("mi",null,"s"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mfrac",null,[s("mi",null,"p"),s("mrow",null,[s("mn",null,"1"),s("mo",null,"−"),s("mi",null,"p")])]),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mfrac",null,[s("mn",null,"0.5"),s("mrow",null,[s("mn",null,"1"),s("mo",null,"−"),s("mn",null,"0.5")])]),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mn",null,"0")]),s("annotation",{encoding:"application/x-tex"}," log(odds) = log(\\frac{p}{1-p}) = log(\\frac{0.5}{1-0.5})=0 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal"},"dd"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.988em","vertical-align":"-0.8804em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.1076em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"p")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"p")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8804em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.0908em","vertical-align":"-0.7693em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3214em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"0.5")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"0.5")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7693em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0")])])])])],-1),S=s("p",null,[a("新的预测值对于药剂量=2的观测点, 是初始的预测值0, 加上学习率"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"η"),s("mo",null,"="),s("mn",null,"0.3")]),s("annotation",{encoding:"application/x-tex"},"\\eta=0.3")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"η"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0.3")])])]),a(", 乘以输出的值-2, 结果是"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mi",null,"o"),s("mi",null,"d"),s("mi",null,"d"),s("mi",null,"s"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mo",null,"−"),s("mn",null,"0.6")]),s("annotation",{encoding:"application/x-tex"},"log(odds)=-0.6")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal"},"dd"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"−"),s("span",{class:"mord"},"0.6")])])]),a(", 然后我们将这个值转化为概率:")],-1),E=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"P"),s("mi",null,"r"),s("mi",null,"o"),s("mi",null,"b"),s("mi",null,"a"),s("mi",null,"b"),s("mi",null,"i"),s("mi",null,"l"),s("mi",null,"i"),s("mi",null,"t"),s("mi",null,"y"),s("mo",null,"="),s("mfrac",null,[s("msup",null,[s("mi",null,"e"),s("mrow",null,[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mi",null,"o"),s("mi",null,"d"),s("mi",null,"d"),s("mi",null,"s"),s("mo",{stretchy:"false"},")")])]),s("mrow",null,[s("mn",null,"1"),s("mo",null,"+"),s("msup",null,[s("mi",null,"e"),s("mrow",null,[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mi",null,"o"),s("mi",null,"d"),s("mi",null,"d"),s("mi",null,"s"),s("mo",{stretchy:"false"},")")])])])]),s("mo",null,"="),s("mn",null,"0.35")]),s("annotation",{encoding:"application/x-tex"}," Probability = \\frac{e^{log(odds)}}{1+e^{log(odds)}} = 0.35 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mord mathnormal"},"ro"),s("span",{class:"mord mathnormal"},"babi"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.3523em","vertical-align":"-0.7873em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.565em"}},[s("span",{style:{top:"-2.296em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"e"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.814em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal mtight"},"o"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen mtight"},"("),s("span",{class:"mord mathnormal mtight"},"o"),s("span",{class:"mord mathnormal mtight"},"dd"),s("span",{class:"mord mathnormal mtight"},"s"),s("span",{class:"mclose mtight"},")")])])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"e"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.888em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal mtight"},"o"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen mtight"},"("),s("span",{class:"mord mathnormal mtight"},"o"),s("span",{class:"mord mathnormal mtight"},"dd"),s("span",{class:"mord mathnormal mtight"},"s"),s("span",{class:"mclose mtight"},")")])])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7873em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0.35")])])])])],-1),O=s("p",null,"新的预测是0.35小于初始的0.5, 说明我们在正确的方向上移动了一步.",-1),V=s("figure",null,[s("img",{src:r,alt:"3.gif",tabindex:"0",loading:"lazy"}),s("figcaption",null,"3.gif")],-1),G=s("h2",{id:"参考",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),a(" 参考")],-1),J=s("ol",null,[s("li",null,"https://www.youtube.com/watch?v=8b1JEDvenQU")],-1),K=[c,o,h,g,u,d,y,v,b,x,_,f,w,k,M,z,P,L,R,N,B,S,E,O,V,G,J];function U(X,A){return m(),n("div",null,K)}const T=l(p,[["render",U],["__file","6_1XGBoost_理论_分类.html.vue"]]);export{T as default};
