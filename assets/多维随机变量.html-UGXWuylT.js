import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as m,a as s,b as a}from"./app-SnI5rGHA.js";const n="/assets/1-GlpX2-xm.png",e="/assets/2-V3XSXpjB.png",r="/assets/3-72aCLdKB.png",i="/assets/4-9iEzTcDR.png",p="/assets/5-OyLr109d.png",c={},o=s("h1",{id:"多维随机变量",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#多维随机变量","aria-hidden":"true"},"#"),a(" 多维随机变量")],-1),h=s("h2",{id:"多维随机变量的联合概率密度函数",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#多维随机变量的联合概率密度函数","aria-hidden":"true"},"#"),a(" 多维随机变量的联合概率密度函数")],-1),g=s("p",null,"有两个同事早上到达公司的时间分别是随机变量X、Y，都服从均匀分布：",-1),y=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"X"),s("mo",null,"∼"),s("mi",null,"U"),s("mo",{stretchy:"false"},"("),s("mn",null,"8"),s("mo",{separator:"true"},","),s("mn",null,"10"),s("mo",{stretchy:"false"},")"),s("mo",{separator:"true"},","),s("mspace",{width:"1em"}),s("mi",null,"Y"),s("mo",null,"∼"),s("mi",null,"U"),s("mo",{stretchy:"false"},"("),s("mn",null,"8"),s("mo",{separator:"true"},","),s("mn",null,"10"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," X\\sim U(8,10),\\quad Y\\sim U(8,10) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"∼"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"U"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"8"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"10"),s("span",{class:"mclose"},")"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"1em"}}),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"∼"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"U"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"8"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"10"),s("span",{class:"mclose"},")")])])])])],-1),d=s("p",null,[a("其中"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"U"),s("mo",{stretchy:"false"},"("),s("mn",null,"8"),s("mo",{separator:"true"},","),s("mn",null,"10"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"U(8,10)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"U"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"8"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"10"),s("span",{class:"mclose"},")")])])]),a("表示到达公司的时间为8点到10点之间。如果把这两个随机变量联合起来看就可以知道两个人上班时间的情况，下图中的(8,9)这个点表示的就是一个人在8点钟到且另外一个人在9点到： "),s("img",{src:n,alt:"",loading:"lazy"}),a(" 两个人上班时间的所有可能性就在上面这个矩形中随机，很显然每个点的概率都是一样的，所以这也是一种均匀分布. 正如单随机变量的均匀分布一样，这里用“概率1”（代表所有的可能性）除以面积就可以得到这两个随机变量联合起来的概率密度，简称联合概率密度： "),s("img",{src:e,alt:"",loading:"lazy"}),a(" 具体到这个问题而言可以得到如下的联合概率密度函数，这个函数也可以称为"),s("code",null,"二维均匀分布"),a("：")],-1),u=s("p",{cases:""},"p(x,y)= \\begin{cases} \\frac{1}{(10-8)(10-8)}=\\frac{1}{4},&x,y\\in[8,10]\\ 0,&其它 \\end",-1),x=s("h3",{id:"概率的求解",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#概率的求解","aria-hidden":"true"},"#"),a(" 概率的求解")],-1),v=s("p",null,"有了这个联合概率密度函数就方便求：",-1),_=s("ul",null,[s("li",null,"两个人都没有迟到的概率"),s("li",null,"两个人到达公司时间间隔相差不到10分钟"),s("li",null,"其中某人早于另外一个同事到公司的概率")],-1),b=s("p",null,[a("下面来求下两个人都没有迟到的概率吧。假设公司规定9点之前不算迟到的话，那么橙色矩形内的点就表示两人都没有迟到： "),s("img",{src:r,alt:"",loading:"lazy"}),a(" 这个橙色矩形代表的概率可以通过联合概率密度函数求出：")],-1),f=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mtable",{rowspacing:"0.25em",columnalign:"right left",columnspacing:"0em"},[s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mi",null,"P"),s("mo",{stretchy:"false"},"("),s("mi",null,"X"),s("mo",null,"≤"),s("mn",null,"9"),s("mo",{separator:"true"},","),s("mi",null,"Y"),s("mo",null,"≤"),s("mn",null,"9"),s("mo",{stretchy:"false"},")")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mrow"),s("mo",null,"="),s("mi",null,"P"),s("mo",{stretchy:"false"},"("),s("mi",null,"X"),s("mo",null,"≤"),s("mn",null,"9"),s("mtext",null," "),s("mstyle",{mathcolor:"red"},[s("mtext",null,"且 "),s("mi",null,"Y"),s("mo",null,"≤"),s("mn",null,"9"),s("mo",{stretchy:"false"},")")])])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow")])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mrow"),s("mo",null,"="),s("msubsup",null,[s("mo",null,"∫"),s("mn",null,"8"),s("mn",null,"9")]),s("msubsup",null,[s("mo",null,"∫"),s("mn",null,"8"),s("mn",null,"9")]),s("mi",null,"p"),s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",{separator:"true"},","),s("mi",null,"y"),s("mo",{stretchy:"false"},")"),s("mi",{mathvariant:"normal"},"d"),s("mi",null,"x"),s("mi",{mathvariant:"normal"},"d"),s("mi",null,"y"),s("mo",null,"="),s("mfrac",null,[s("mn",null,"1"),s("mn",null,"4")])])])])])]),s("annotation",{encoding:"application/x-tex"}," \\begin{aligned} P(X\\le 9, Y\\le 9) &=P(X\\le 9\\ \\color{red}{且}\\ Y\\le 9)\\\\ &=\\int_{8}^{9}\\int_{8}^{9}p(x,y)\\mathrm{d}x\\mathrm{d}y=\\frac{1}{4} \\end{aligned} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"4.276em","vertical-align":"-1.888em"}}),s("span",{class:"mord"},[s("span",{class:"mtable"},[s("span",{class:"col-align-r"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.388em"}},[s("span",{style:{top:"-5.112em"}},[s("span",{class:"pstrut",style:{height:"3.564em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≤"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},"9"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≤"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},"9"),s("span",{class:"mclose"},")")])]),s("span",{style:{top:"-2.888em"}},[s("span",{class:"pstrut",style:{height:"3.564em"}}),s("span",{class:"mord"})])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.888em"}},[s("span")])])])]),s("span",{class:"col-align-l"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.388em"}},[s("span",{style:{top:"-5.112em"}},[s("span",{class:"pstrut",style:{height:"3.564em"}}),s("span",{class:"mord"},[s("span",{class:"mord"}),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≤"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},"9"),s("span",{class:"mspace"}," "),s("span",{class:"mord",style:{color:"red"}},[s("span",{class:"mord cjk_fallback",style:{color:"red"}},"且")]),s("span",{class:"mspace",style:{color:"red"}},[s("span",{style:{color:"red"}}," ")]),s("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em",color:"red"}},"Y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel",style:{color:"red"}},"≤"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord",style:{color:"red"}},"9"),s("span",{class:"mclose",style:{color:"red"}},")")])]),s("span",{style:{top:"-2.888em"}},[s("span",{class:"pstrut",style:{height:"3.564em"}}),s("span",{class:"mord"},[s("span",{class:"mord"}),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mop"},[s("span",{class:"mop op-symbol large-op",style:{"margin-right":"0.44445em",position:"relative",top:"-0.0011em"}},"∫"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.564em"}},[s("span",{style:{top:"-1.7881em","margin-left":"-0.4445em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"8")])])]),s("span",{style:{top:"-3.8129em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"9")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9119em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop"},[s("span",{class:"mop op-symbol large-op",style:{"margin-right":"0.44445em",position:"relative",top:"-0.0011em"}},"∫"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.564em"}},[s("span",{style:{top:"-1.7881em","margin-left":"-0.4445em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"8")])])]),s("span",{style:{top:"-3.8129em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"9")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9119em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},")"),s("span",{class:"mord mathrm"},"d"),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mord mathrm"},"d"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3214em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"4")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.888em"}},[s("span")])])])])])])])])])])],-1),k=s("h3",{id:"单点的概率",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#单点的概率","aria-hidden":"true"},"#"),a(" 单点的概率")],-1),w=s("p",null,"同样的道理，单点的概率依然为0，比如之前说过的(8,9)点的概率：",-1),z=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"P"),s("mo",{stretchy:"false"},"("),s("mi",null,"X"),s("mo",null,"="),s("mn",null,"8"),s("mo",{separator:"true"},","),s("mi",null,"Y"),s("mo",null,"="),s("mn",null,"9"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("msubsup",null,[s("mo",null,"∫"),s("mn",null,"9"),s("mn",null,"9")]),s("msubsup",null,[s("mo",null,"∫"),s("mn",null,"8"),s("mn",null,"8")]),s("mi",null,"p"),s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",{separator:"true"},","),s("mi",null,"y"),s("mo",{stretchy:"false"},")"),s("mi",{mathvariant:"normal"},"d"),s("mi",null,"x"),s("mi",{mathvariant:"normal"},"d"),s("mi",null,"y"),s("mo",null,"="),s("mn",null,"0")]),s("annotation",{encoding:"application/x-tex"}," P(X=8, Y=9)=\\int_{9}^{9}\\int_{8}^{8}p(x,y)\\mathrm{d}x\\mathrm{d}y=0 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},"8"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"9"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.476em","vertical-align":"-0.9119em"}}),s("span",{class:"mop"},[s("span",{class:"mop op-symbol large-op",style:{"margin-right":"0.44445em",position:"relative",top:"-0.0011em"}},"∫"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.564em"}},[s("span",{style:{top:"-1.7881em","margin-left":"-0.4445em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"9")])])]),s("span",{style:{top:"-3.8129em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"9")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9119em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop"},[s("span",{class:"mop op-symbol large-op",style:{"margin-right":"0.44445em",position:"relative",top:"-0.0011em"}},"∫"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.564em"}},[s("span",{style:{top:"-1.7881em","margin-left":"-0.4445em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"8")])])]),s("span",{style:{top:"-3.8129em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"8")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9119em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},")"),s("span",{class:"mord mathrm"},"d"),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mord mathrm"},"d"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0")])])])])],-1),X=s("p",null,"在这里0依然表示“几乎不可能事件”，而并非“不可能事件”。",-1),M=s("h3",{id:"联合概率密度函数",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#联合概率密度函数","aria-hidden":"true"},"#"),a(" 联合概率密度函数")],-1),Y=s("blockquote",null,[s("p",null,"对于某二维随机变量(X,Y)存在二元函数p(x,y)满足： 非负性：")],-1),P=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"p"),s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",{separator:"true"},","),s("mi",null,"y"),s("mo",{stretchy:"false"},")"),s("mo",null,"≥"),s("mn",null,"0")]),s("annotation",{encoding:"application/x-tex"}," p(x,y)\\ge 0 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≥"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0")])])])])],-1),F=s("p",null,"规范性和可加性（连续的都通过积分来相加）：",-1),L=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("msubsup",null,[s("mo",null,"∫"),s("mrow",null,[s("mo",null,"−"),s("mi",{mathvariant:"normal"},"∞")]),s("mrow",null,[s("mo",null,"+"),s("mi",{mathvariant:"normal"},"∞")])]),s("msubsup",null,[s("mo",null,"∫"),s("mrow",null,[s("mo",null,"−"),s("mi",{mathvariant:"normal"},"∞")]),s("mrow",null,[s("mo",null,"+"),s("mi",{mathvariant:"normal"},"∞")])]),s("mi",null,"p"),s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",{separator:"true"},","),s("mi",null,"y"),s("mo",{stretchy:"false"},")"),s("mi",{mathvariant:"normal"},"d"),s("mi",null,"x"),s("mi",{mathvariant:"normal"},"d"),s("mi",null,"y"),s("mo",null,"="),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"}," \\int_{-\\infty}^{+\\infty}\\int_{-\\infty}^{+\\infty}p(x,y)\\mathrm{d}x\\mathrm{d}y=1 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.4915em","vertical-align":"-0.9703em"}}),s("span",{class:"mop"},[s("span",{class:"mop op-symbol large-op",style:{"margin-right":"0.44445em",position:"relative",top:"-0.0011em"}},"∫"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.5212em"}},[s("span",{style:{top:"-1.7881em","margin-left":"-0.4445em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"−"),s("span",{class:"mord mtight"},"∞")])])]),s("span",{style:{top:"-3.8129em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"+"),s("span",{class:"mord mtight"},"∞")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9703em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop"},[s("span",{class:"mop op-symbol large-op",style:{"margin-right":"0.44445em",position:"relative",top:"-0.0011em"}},"∫"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.5212em"}},[s("span",{style:{top:"-1.7881em","margin-left":"-0.4445em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"−"),s("span",{class:"mord mtight"},"∞")])])]),s("span",{style:{top:"-3.8129em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"+"),s("span",{class:"mord mtight"},"∞")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9703em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},")"),s("span",{class:"mord mathrm"},"d"),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mord mathrm"},"d"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])])])],-1),U=s("p",null,[a("则称此函数为(X,Y)的"),s("code",null,"联合概率密度函数"),a("（Joint Probability Density Function），此定义可以推广到多维连续随机变量上去。")],-1),B=s("h2",{id:"联合累积分布函数",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#联合累积分布函数","aria-hidden":"true"},"#"),a(" 联合累积分布函数")],-1),j=s("p",null,"离散随机变量有概率质量函数，连续随机变量有概率密度函数，但它们的累积分布函数定义是相同的：",-1),q=s("blockquote",null,[s("p",null,"设(X,Y)是二维随机变量，对于任意实数x、y，可以定义一个二元函数来表示两个事件同时发生的概率：")],-1),D=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"F"),s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",{separator:"true"},","),s("mi",null,"y"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mi",null,"P"),s("mo",{fence:"false",stretchy:"true",minsize:"1.8em",maxsize:"1.8em"},"("),s("mo",{stretchy:"false"},"{"),s("mi",null,"X"),s("mo",null,"≤"),s("mi",null,"x"),s("mo",{stretchy:"false"},"}"),s("mtext",null," "),s("mstyle",{mathcolor:"red"},[s("mtext",null,"且 "),s("mo",{stretchy:"false"},"{"),s("mi",null,"Y"),s("mo",null,"≤"),s("mi",null,"y"),s("mo",{stretchy:"false"},"}"),s("mo",{fence:"false",stretchy:"true",minsize:"1.8em",maxsize:"1.8em"},")"),s("mo",null,"="),s("mi",null,"P"),s("mo",{stretchy:"false"},"("),s("mi",null,"X"),s("mo",null,"≤"),s("mi",null,"x"),s("mo",{separator:"true"},","),s("mi",null,"Y"),s("mo",null,"≤"),s("mi",null,"y"),s("mo",{stretchy:"false"},")")])]),s("annotation",{encoding:"application/x-tex"}," F(x,y)=P\\Big(\\{X\\le x\\}\\ \\color{red}{且}\\ \\{Y\\le y\\}\\Big)=P(X\\le x, Y\\le y) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"F"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.8em","vertical-align":"-0.65em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mord"},[s("span",{class:"delimsizing size2"},"(")]),s("span",{class:"mopen"},"{"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≤"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose"},"}"),s("span",{class:"mspace"}," "),s("span",{class:"mord",style:{color:"red"}},[s("span",{class:"mord cjk_fallback",style:{color:"red"}},"且")]),s("span",{class:"mspace",style:{color:"red"}},[s("span",{style:{color:"red"}}," ")]),s("span",{class:"mopen",style:{color:"red"}},"{"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em",color:"red"}},"Y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel",style:{color:"red"}},"≤"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.8em","vertical-align":"-0.65em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em",color:"red"}},"y"),s("span",{class:"mclose",style:{color:"red"}},"}"),s("span",{class:"mord",style:{color:"red"}},[s("span",{class:"delimsizing size2",style:{color:"red"}},[s("span",{style:{color:"red"}},")")])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel",style:{color:"red"}},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em",color:"red"}},"P"),s("span",{class:"mopen",style:{color:"red"}},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em",color:"red"}},"X"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel",style:{color:"red"}},"≤"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{color:"red"}},"x"),s("span",{class:"mpunct",style:{color:"red"}},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em",color:"red"}},"Y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel",style:{color:"red"}},"≤"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em",color:"red"}},"y"),s("span",{class:"mclose",style:{color:"red"}},")")])])])])],-1),V=s("p",null,[a("称为二维随机变量(X,Y)的"),s("code",null,"联合累积分布函数"),a("（Joint Cumulative Distribution Function），如果混合偏导存在的话，那么：")],-1),C=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mfrac",null,[s("mrow",null,[s("mi",{mathvariant:"normal"},"∂"),s("mi",null,"F"),s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",{separator:"true"},","),s("mi",null,"y"),s("mo",{stretchy:"false"},")")]),s("mrow",null,[s("mi",{mathvariant:"normal"},"∂"),s("mi",null,"x"),s("mi",{mathvariant:"normal"},"∂"),s("mi",null,"y")])]),s("mo",null,"="),s("mi",null,"p"),s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",{separator:"true"},","),s("mi",null,"y"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," \\frac{\\partial F(x,y)}{\\partial x \\partial y}=p(x,y) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.3074em","vertical-align":"-0.8804em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.427em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord",style:{"margin-right":"0.05556em"}},"∂"),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mord",style:{"margin-right":"0.05556em"}},"∂"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord",style:{"margin-right":"0.05556em"}},"∂"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"F"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},")")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8804em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},")")])])])])],-1),E=s("p",null,"得到p(x,y)就是此分布的概率密度函数。此定义和性质可以推广到多维随机变量。",-1),J=s("p",null,[a("在刚才的二维均匀分布中，F(x,y)的几何意义下面阴影对应的概率： "),s("img",{src:i,alt:"",loading:"lazy"}),a(" 但因为矩形外概率为0，所以F(x,y)相当于橙色矩形对应的概率： "),s("img",{src:p,alt:"",loading:"lazy"})],-1),N=s("p",null,"参考: 马同学",-1),T=[o,h,g,y,d,u,x,v,_,b,f,k,w,z,X,M,Y,P,F,L,U,B,j,q,D,V,C,E,J,N];function G(K,O){return t(),m("div",null,T)}const A=l(c,[["render",G],["__file","多维随机变量.html.vue"]]);export{A as default};
