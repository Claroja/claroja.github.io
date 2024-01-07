import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as m,a as s,b as a}from"./app-SnI5rGHA.js";const t={},e=s("h1",{id:"tree-xgboost-classification",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#tree-xgboost-classification","aria-hidden":"true"},"#"),a(" tree_xgboost_classification")],-1),i=s("p",null,[a("The very first step in fitting xgboost to the training data is to make an initial prediction.This prediction can be anything, by default it is 0.5, regardless of whether you are using xgboost for regression or classification.In other words, regardless of the dosage, the default prediction is that there is a 50% chance the drug is effective. "),s("a",{href:"1.png"},"1.png"),a(" Now, just like we did for regression, we fit an xgboost tree to the residuals, however, since we are using xgboost for classification, we have a new formula for the similarity scores.")],-1),r=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"S"),s("mi",null,"i"),s("mi",null,"m"),s("mi",null,"i"),s("mi",null,"l"),s("mi",null,"a"),s("mi",null,"r"),s("mi",null,"i"),s("mi",null,"t"),s("mi",null,"y"),s("mo",null,"="),s("mfrac",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mo",null,"∑"),s("mi",null,"R"),s("mi",null,"u"),s("mi",null,"s"),s("mi",null,"i"),s("mi",null,"d"),s("mi",null,"u"),s("mi",null,"a"),s("mi",null,"l"),s("msub",null,[s("mi",null,"s"),s("mi",null,"i")]),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mn",null,"2")])]),s("mrow",null,[s("mo",null,"∑"),s("mo",{stretchy:"false"},"("),s("mi",null,"P"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"v"),s("mi",null,"i"),s("mi",null,"o"),s("mi",null,"u"),s("mi",null,"s"),s("mi",null,"P"),s("mi",null,"r"),s("mi",null,"o"),s("mi",null,"b"),s("mi",null,"a"),s("mi",null,"b"),s("mi",null,"i"),s("mi",null,"l"),s("mi",null,"i"),s("mi",null,"t"),s("msub",null,[s("mi",null,"y"),s("mi",null,"i")]),s("mo",null,"∗"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("mi",null,"P"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"v"),s("mi",null,"i"),s("mi",null,"o"),s("mi",null,"u"),s("mi",null,"s"),s("mi",null,"P"),s("mi",null,"r"),s("mi",null,"o"),s("mi",null,"b"),s("mi",null,"a"),s("mi",null,"b"),s("mi",null,"i"),s("mi",null,"l"),s("mi",null,"i"),s("mi",null,"t"),s("msub",null,[s("mi",null,"y"),s("mi",null,"i")]),s("mo",{stretchy:"false"},")"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mn",null,"2")]),s("mo",null,"+"),s("mi",null,"λ")])])]),s("annotation",{encoding:"application/x-tex"}," Similarity = \\frac{(\\sum Rusiduals_i)^2}{\\sum (PreviousProbability_i * (1-PreviousProbability_i))^2+\\lambda} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"mord mathnormal"},"imi"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.4271em","vertical-align":"-0.936em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.4911em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"∑"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal"},"u"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mord mathnormal"},"ro"),s("span",{class:"mord mathnormal"},"babi"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal"},"u"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mord mathnormal"},"ro"),s("span",{class:"mord mathnormal"},"babi"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},")"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7401em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"λ")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mopen"},"("),s("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"∑"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),s("span",{class:"mord mathnormal"},"u"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mord mathnormal"},"u"),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"s"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.936em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])])],-1),o=s("h2",{id:"cover",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#cover","aria-hidden":"true"},"#"),a(" cover")],-1),c=s("p",null,[a("xgboost also has a threshold for the minimum number of residuals in each leaf. The minimum number of residuals in each leaf is determined by calculating something called "),s("code",null,"cover"),a(". Cover is defined as the denominator of the Similarity Score minus "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"λ")]),s("annotation",{encoding:"application/x-tex"},"\\lambda")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"λ")])])]),a(".")],-1),p=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mo",null,"∑"),s("mo",{stretchy:"false"},"("),s("mi",null,"P"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"v"),s("mi",null,"i"),s("mi",null,"o"),s("mi",null,"u"),s("mi",null,"s"),s("mi",null,"P"),s("mi",null,"r"),s("mi",null,"o"),s("mi",null,"b"),s("mi",null,"a"),s("mi",null,"b"),s("mi",null,"i"),s("mi",null,"l"),s("mi",null,"i"),s("mi",null,"t"),s("msub",null,[s("mi",null,"y"),s("mi",null,"i")]),s("mo",null,"∗"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("mi",null,"P"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"v"),s("mi",null,"i"),s("mi",null,"o"),s("mi",null,"u"),s("mi",null,"s"),s("mi",null,"P"),s("mi",null,"r"),s("mi",null,"o"),s("mi",null,"b"),s("mi",null,"a"),s("mi",null,"b"),s("mi",null,"i"),s("mi",null,"l"),s("mi",null,"i"),s("mi",null,"t"),s("msub",null,[s("mi",null,"y"),s("mi",null,"i")]),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," \\sum (PreviousProbability_i * (1-PreviousProbability_i)) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.6em","vertical-align":"-0.55em"}}),s("span",{class:"mop op-symbol large-op",style:{position:"relative",top:"0em"}},"∑"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal"},"u"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mord mathnormal"},"ro"),s("span",{class:"mord mathnormal"},"babi"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal"},"u"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mord mathnormal"},"ro"),s("span",{class:"mord mathnormal"},"babi"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},"))")])])])])],-1),h=s("p",null,"In contrast, when xgboost is used for regression and we are using this formula for the similarity score then cover is equal to",-1),u=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"N"),s("mi",null,"u"),s("mi",null,"m"),s("mi",null,"b"),s("mi",null,"e"),s("mi",null,"r"),s("mi",null,"O"),s("mi",null,"f"),s("mi",null,"R"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"i"),s("mi",null,"d"),s("mi",null,"u"),s("mi",null,"a"),s("mi",null,"l"),s("mi",null,"s")]),s("annotation",{encoding:"application/x-tex"}," NumberOfResiduals ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"mord mathnormal"},"u"),s("span",{class:"mord mathnormal"},"mb"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"er"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),s("span",{class:"mord mathnormal"},"es"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mord mathnormal"},"u"),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"s")])])])])],-1),g=s("p",null,"By default, the minimum value for cover is 1. Thus, by default, when we use xgboost for regression, we can have as few as 1 residual per leaf. In other words, when we use xgboost for regression and use the default minimum value for cover, cover has no effect on how we grow the tree.In contrast, things are way more complicated when we use xgboost for classification because cover depends on the previously predicted probability of each residual in a leaf. For example, the cover for this leaf is:",-1),d=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"c"),s("mi",null,"o"),s("mi",null,"v"),s("mi",null,"e"),s("mi",null,"r"),s("mo",null,"="),s("mn",null,"0.5"),s("mo",null,"∗"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("mn",null,"0.5"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mn",null,"0.25")]),s("annotation",{encoding:"application/x-tex"}," cover = 0.5 * (1-0.5) = 0.25 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"co"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"er"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0.5"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"0.5"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0.25")])])])])],-1),y=s("p",null,[a("And since the default value for the minimum cover is 1, xgboost would not allow this leaf. "),s("a",{href:"2.png"},"2.png"),a(" for teaching, let's set the minimum value for "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"c"),s("mi",null,"o"),s("mi",null,"v"),s("mi",null,"e"),s("mi",null,"r"),s("mo",null,"="),s("mn",null,"0")]),s("annotation",{encoding:"application/x-tex"},"cover = 0")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"co"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"er"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0")])])]),a(".")],-1),v=s("h2",{id:"predict",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#predict","aria-hidden":"true"},"#"),a(" predict")],-1),b=s("p",null,[a("However, just like with unextreme gradient boost for classification, we need to convert this probability to a "),s("code",null,"log(odds)"),a(" value.")],-1),f=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"o"),s("mi",null,"d"),s("mi",null,"d"),s("mi",null,"s"),s("mo",null,"="),s("mfrac",null,[s("mi",null,"p"),s("mrow",null,[s("mn",null,"1"),s("mo",null,"−"),s("mi",null,"p")])])]),s("annotation",{encoding:"application/x-tex"}," odds = \\frac{p}{1-p} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal"},"dd"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.988em","vertical-align":"-0.8804em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.1076em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"p")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"p")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8804em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])])],-1),w=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mi",null,"o"),s("mi",null,"d"),s("mi",null,"d"),s("mi",null,"s"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mfrac",null,[s("mi",null,"p"),s("mrow",null,[s("mn",null,"1"),s("mo",null,"−"),s("mi",null,"p")])]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," log(odds) = log(\\frac{p}{1-p}) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal"},"dd"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.988em","vertical-align":"-0.8804em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.1076em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"p")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"p")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8804em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose"},")")])])])])],-1),x=s("p",null,[a("in this case we plug in "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"p"),s("mo",null,"="),s("mn",null,"0.5")]),s("annotation",{encoding:"application/x-tex"},"p=0.5")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0.5")])])])],-1),k=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mi",null,"o"),s("mi",null,"d"),s("mi",null,"d"),s("mi",null,"s"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mfrac",null,[s("mi",null,"p"),s("mrow",null,[s("mn",null,"1"),s("mo",null,"−"),s("mi",null,"p")])]),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mfrac",null,[s("mn",null,"0.5"),s("mrow",null,[s("mn",null,"1"),s("mo",null,"−"),s("mn",null,"0.5")])]),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mn",null,"0")]),s("annotation",{encoding:"application/x-tex"}," log(odds) = log(\\frac{p}{1-p}) = log(\\frac{0.5}{1-0.5})=0 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal"},"dd"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.988em","vertical-align":"-0.8804em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.1076em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"p")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"p")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8804em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.0908em","vertical-align":"-0.7693em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3214em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"0.5")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"0.5")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7693em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0")])])])])],-1),_=s("p",null,[a("Now, just like unextreme gradient boost for classification, we add the "),s("code",null,"log(odds)"),a(" of the initial prediction to the output of the tree, scaled by a learning rate. xgboost calls the learning rate "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"η")]),s("annotation",{encoding:"application/x-tex"},"\\eta")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"η")])])]),a(" and the default value is 0.3, so that's what we'll use. Thus, the new predicted value for this observation, with "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"d"),s("mi",null,"o"),s("mi",null,"s"),s("mi",null,"a"),s("mi",null,"g"),s("mi",null,"e"),s("mo",null,"="),s("mn",null,"2")]),s("annotation",{encoding:"application/x-tex"},"dosage = 2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mord mathnormal"},"os"),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2")])])]),a(", is the log(odds) of original prediction,0,plus the learning rate "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"η")]),s("annotation",{encoding:"application/x-tex"},"\\eta")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"η")])])]),a(", 0.3, times the output value, -2, and that gives us a "),s("code",null,"log(odds)"),a(" value = -0.6. To convert a "),s("code",null,"log(odds)"),a(" value into a probability, we plug it into the Logistic Function.")],-1),M=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"P"),s("mi",null,"r"),s("mi",null,"o"),s("mi",null,"b"),s("mi",null,"a"),s("mi",null,"b"),s("mi",null,"i"),s("mi",null,"l"),s("mi",null,"i"),s("mi",null,"t"),s("mi",null,"y"),s("mo",null,"="),s("mfrac",null,[s("msup",null,[s("mi",null,"e"),s("mrow",null,[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mi",null,"o"),s("mi",null,"d"),s("mi",null,"d"),s("mi",null,"s"),s("mo",{stretchy:"false"},")")])]),s("mrow",null,[s("mn",null,"1"),s("mo",null,"+"),s("msup",null,[s("mi",null,"e"),s("mrow",null,[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mi",null,"o"),s("mi",null,"d"),s("mi",null,"d"),s("mi",null,"s"),s("mo",{stretchy:"false"},")")])])])]),s("mo",null,"="),s("mn",null,"0.35")]),s("annotation",{encoding:"application/x-tex"}," Probability = \\frac{e^{log(odds)}}{1+e^{log(odds)}} = 0.35 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mord mathnormal"},"ro"),s("span",{class:"mord mathnormal"},"babi"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.3523em","vertical-align":"-0.7873em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.565em"}},[s("span",{style:{top:"-2.296em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"e"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.814em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal mtight"},"o"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen mtight"},"("),s("span",{class:"mord mathnormal mtight"},"o"),s("span",{class:"mord mathnormal mtight"},"dd"),s("span",{class:"mord mathnormal mtight"},"s"),s("span",{class:"mclose mtight"},")")])])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"e"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.888em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal mtight"},"o"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen mtight"},"("),s("span",{class:"mord mathnormal mtight"},"o"),s("span",{class:"mord mathnormal mtight"},"dd"),s("span",{class:"mord mathnormal mtight"},"s"),s("span",{class:"mclose mtight"},")")])])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7873em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0.35")])])])])],-1),z=s("p",null,[a("the new residual is smaller than before(0.5), so we have taken a small step in the right direction. "),s("a",{href:"3.gif"},"3.gif")],-1),P=s("p",null,"refs: https://www.youtube.com/watch?v=8b1JEDvenQU",-1),L=[e,i,r,o,c,p,h,u,g,d,y,v,b,f,w,x,k,_,M,z,P];function N(T,R){return n(),m("div",null,L)}const I=l(t,[["render",N],["__file","xgboostClassification.html.vue"]]);export{I as default};
