import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as t,a as s,b as a}from"./app-0JgdiRQ-.js";const m="/assets/1-Lqaym2IW.png",e="/assets/2-Dntmlxim.png",i="/assets/3-pfyCjd4G.png",r="/assets/4-xC3dVw2y.png",c="/assets/5-i0ZIDU3v.png",p="/assets/6-yLWtK1Z3.gif",o={},h=s("h1",{id:"regularization",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#regularization","aria-hidden":"true"},"#"),a(" regularization")],-1),u=s("p",null,[a("Let's start by collecting "),s("code",null,"weight"),a(" and "),s("code",null,"size"),a(" measurements from a bunch of mice.Since these data look relatively linear, we will use linear regression, AKA least squares, to model the relationship between weight and size.In others words, we find the line that results in the minimum sum of squared residuals. "),s("img",{src:m,alt:"",loading:"lazy"}),a(" Ultimately, we end up with this equation for the line:"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"S"),s("mi",null,"i"),s("mi",null,"z"),s("mi",null,"e"),s("mo",null,"="),s("mn",null,"0.9"),s("mo",null,"+"),s("mn",null,"0.75"),s("mo",null,"∗"),s("mi",null,"w"),s("mi",null,"e"),s("mi",null,"i"),s("mi",null,"g"),s("mi",null,"h"),s("mi",null,"t")]),s("annotation",{encoding:"application/x-tex"},"Size = 0.9 + 0.75 * weight")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"ze"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"0.9"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0.75"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mord mathnormal"},"t")])])]),a(". The line has two parameters: a y-axis intercept(0.9) and a slope(0.75). When we have a lot of measurements, we can be fairly confident that the "),s("code",null,"Least Squares"),a(" line accurately reflects the relationship between "),s("code",null,"Size"),a(" and "),s("code",null,"Weight"),a(". But what if we only have two measurements? We fit a new line(red) with least squares. Since the new line overlaps the two data points, the minimum sum of squares residuals = 0.Ultimately, we end up with this equation for the new line:"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"S"),s("mi",null,"i"),s("mi",null,"z"),s("mi",null,"e"),s("mo",null,"="),s("mn",null,"0.4"),s("mo",null,"+"),s("mn",null,"1.3"),s("mo",null,"∗"),s("mi",null,"w"),s("mi",null,"e"),s("mi",null,"i"),s("mi",null,"g"),s("mi",null,"h"),s("mi",null,"t")]),s("annotation",{encoding:"application/x-tex"},"Size=0.4+1.3*weight")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"ze"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"0.4"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1.3"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mord mathnormal"},"t")])])]),s("img",{src:e,alt:"",loading:"lazy"}),a(" NOTE: Here are the original data and the original line(grey) for comparison.Let's call the two red dots the training data, and the remaining green dots the testing data. "),s("img",{src:i,alt:"",loading:"lazy"})],-1),g=s("p",null,[a("The sum of the squared residuals for just the two red points, the training data, is small(in this case it is 0),but the sum of the squared residuals for the green points, the testing data, is large and that means that the new line(red) has high variance. "),s("img",{src:r,alt:"",loading:"lazy"})],-1),d=s("p",null,[a("The main idea behind "),s("code",null,"ridge regression"),a(" is to find a new line(blue) that doesn't fit the training data as well "),s("img",{src:c,alt:"",loading:"lazy"}),a(" Now let's dive into the nitty-gritty and learn how ridge regression works. When least squares determines values for the parameters in this equation:")],-1),y=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"S"),s("mi",null,"i"),s("mi",null,"z"),s("mi",null,"e"),s("mo",null,"="),s("mi",null,"y"),s("mo",null,"−"),s("mi",null,"a"),s("mi",null,"x"),s("mi",null,"i"),s("mi",null,"s"),s("mi",null,"I"),s("mi",null,"n"),s("mi",null,"t"),s("mi",null,"e"),s("mi",null,"r"),s("mi",null,"c"),s("mi",null,"e"),s("mi",null,"p"),s("mi",null,"t"),s("mo",null,"+"),s("mi",null,"s"),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"p"),s("mi",null,"e"),s("mo",null,"⋅"),s("mi",null,"w"),s("mi",null,"e"),s("mi",null,"i"),s("mi",null,"g"),s("mi",null,"h"),s("mi",null,"t")]),s("annotation",{encoding:"application/x-tex"}," Size = y-axis Intercept + slope \\cdot weight ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"ze"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7778em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal"},"erce"),s("span",{class:"mord mathnormal"},"pt"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⋅"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mord mathnormal"},"t")])])])])],-1),w=s("p",null,"it minimizes the sum of the squared residuals. In contrast, when ridge regression determines values for the parameters in this equation",-1),x=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"S"),s("mi",null,"i"),s("mi",null,"z"),s("mi",null,"e"),s("mo",null,"="),s("mi",null,"y"),s("mo",null,"−"),s("mi",null,"a"),s("mi",null,"x"),s("mi",null,"i"),s("mi",null,"s"),s("mi",null,"I"),s("mi",null,"n"),s("mi",null,"t"),s("mi",null,"e"),s("mi",null,"r"),s("mi",null,"c"),s("mi",null,"e"),s("mi",null,"p"),s("mi",null,"t"),s("mo",null,"+"),s("mi",null,"s"),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"p"),s("mi",null,"e"),s("mo",null,"⋅"),s("mi",null,"w"),s("mi",null,"e"),s("mi",null,"i"),s("mi",null,"g"),s("mi",null,"h"),s("mi",null,"t")]),s("annotation",{encoding:"application/x-tex"}," Size = y-axis Intercept + slope \\cdot weight ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"ze"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7778em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal"},"erce"),s("span",{class:"mord mathnormal"},"pt"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⋅"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mord mathnormal"},"t")])])])])],-1),b=s("p",null,[a("it minimizes the sum of the squared residuals plus "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"λ"),s("mo",null,"⋅"),s("mi",null,"s"),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"p"),s("msup",null,[s("mi",null,"e"),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"},"\\lambda \\cdot slope^2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"λ"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⋅"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0085em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"e"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])]),a(" To get a better idea of what's going on, lets plug in some numbers. Let's start by plugging in the numbers that correspond to the least squares fit. The sum of squared of the least squares fit is 0(because the line overlaps the data points) and the slope is 1.3 and let "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"λ"),s("mo",null,"="),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"\\lambda = 1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"λ"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])])],-1),k=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"S"),s("mi",null,"i"),s("mi",null,"z"),s("mi",null,"e"),s("mo",null,"="),s("mn",null,"0.4"),s("mo",null,"+"),s("mn",null,"1.4"),s("mo",null,"⋅"),s("mi",null,"w"),s("mi",null,"e"),s("mi",null,"i"),s("mi",null,"g"),s("mi",null,"h"),s("mi",null,"t")]),s("annotation",{encoding:"application/x-tex"}," Size = 0.4 + 1.4 \\cdot weight ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"ze"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"0.4"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1.4"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⋅"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mord mathnormal"},"t")])])])])],-1),v=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"i"),s("mi",null,"d"),s("mi",null,"u"),s("mi",null,"a"),s("mi",null,"l"),s("mo",null,"+"),s("mi",null,"λ"),s("mstyle",{mathcolor:"#cc0000"},[s("mtext",null,"\\codt")]),s("mi",null,"s"),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"p"),s("msup",null,[s("mi",null,"e"),s("mn",null,"2")]),s("mo",null,"="),s("mn",null,"0"),s("mo",null,"+"),s("mn",null,"1"),s("mi",null,"cot"),s("mo",null,"⁡"),s("mn",null,"1."),s("msup",null,[s("mn",null,"3"),s("mn",null,"2")]),s("mo",null,"="),s("mn",null,"1.69")]),s("annotation",{encoding:"application/x-tex"}," residual + \\lambda \\codt slope^2 = 0 + 1 \\cot 1.3^2 = 1.69 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7778em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal"},"res"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mord mathnormal"},"u"),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.1141em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"λ"),s("span",{class:"mord text",style:{color:"#cc0000"}},[s("span",{class:"mord",style:{color:"#cc0000"}},"\\codt")]),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"e"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"0"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8641em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop"},"cot"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"1."),s("span",{class:"mord"},[s("span",{class:"mord"},"3"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1.69")])])])])],-1),_=s("p",null,"Now let's see what happens when we plug in numbers for the ridge regression line",-1),z=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"S"),s("mi",null,"i"),s("mi",null,"z"),s("mi",null,"e"),s("mo",null,"="),s("mn",null,"0.9"),s("mo",null,"+"),s("mn",null,"0.8"),s("mo",null,"∗"),s("mi",null,"w"),s("mi",null,"e"),s("mi",null,"i"),s("mi",null,"g"),s("mi",null,"h"),s("mi",null,"t")]),s("annotation",{encoding:"application/x-tex"}," Size = 0.9 + 0.8 * weight ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"ze"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"0.9"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0.8"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mord mathnormal"},"t")])])])])],-1),f=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"i"),s("mi",null,"d"),s("mi",null,"u"),s("mi",null,"a"),s("mi",null,"l"),s("mo",null,"+"),s("mi",null,"λ"),s("mstyle",{mathcolor:"#cc0000"},[s("mtext",null,"\\codt")]),s("mi",null,"s"),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"p"),s("msup",null,[s("mi",null,"e"),s("mn",null,"2")]),s("mo",null,"="),s("mn",null,"0."),s("msup",null,[s("mn",null,"3"),s("mn",null,"2")]),s("mo",null,"+"),s("mn",null,"0."),s("msup",null,[s("mn",null,"1"),s("mn",null,"2")]),s("mo",null,"+"),s("mn",null,"1"),s("mo",null,"∗"),s("mn",null,"0."),s("msup",null,[s("mn",null,"8"),s("mn",null,"2")]),s("mo",null,"="),s("mn",null,"0.74")]),s("annotation",{encoding:"application/x-tex"}," residual + \\lambda \\codt slope^2 = 0.3^2 + 0.1^2 + 1 * 0.8 ^2 = 0.74 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7778em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal"},"res"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mord mathnormal"},"u"),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.1141em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"λ"),s("span",{class:"mord text",style:{color:"#cc0000"}},[s("span",{class:"mord",style:{color:"#cc0000"}},"\\codt")]),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"e"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9474em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"0."),s("span",{class:"mord"},[s("span",{class:"mord"},"3"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9474em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"0."),s("span",{class:"mord"},[s("span",{class:"mord"},"1"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8641em"}}),s("span",{class:"mord"},"0."),s("span",{class:"mord"},[s("span",{class:"mord"},"8"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0.74")])])])])],-1),M=s("p",null,[a("Because "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"0.74"),s("mo",null,"<"),s("mn",null,"1.69")]),s("annotation",{encoding:"application/x-tex"},"0.74<1.69")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6835em","vertical-align":"-0.0391em"}}),s("span",{class:"mord"},"0.74"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1.69")])])]),a(", if we wanted to minimize the som the squared residuals plus the ridge regression penalty, we would choose the ridge regression line over the least squares line.Without the small amount of bias that the penalty creates, the least squares fit has a large amount of variance.In contrast, the ridge regression line,which has the small amount of bias due to the penalty, has less variance.")],-1),S=s("p",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"λ")]),s("annotation",{encoding:"application/x-tex"},"\\lambda")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"λ")])])]),a(" can be any value from 0 to positive infinity. Now let's see what happens as we increase the value for "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"λ")]),s("annotation",{encoding:"application/x-tex"},"\\lambda")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"λ")])])]),a(". So the larger "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"λ")]),s("annotation",{encoding:"application/x-tex"},"\\lambda")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"λ")])])]),a(" gets, our predictions for "),s("code",null,"size"),a(" become less and less sensitive to "),s("code",null,"weight"),a(". "),s("img",{src:p,alt:"",loading:"lazy"}),a(" So how do we decide what value to give "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"λ")]),s("annotation",{encoding:"application/x-tex"},"\\lambda")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"λ")])])]),a("? We just try a bunch of values for "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"λ")]),s("annotation",{encoding:"application/x-tex"},"\\lambda")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"λ")])])]),a(" and use cross validation, typically 10-fold cross validation, to determine which one results in the lowest variance.")],-1),L=s("p",null,"refs: https://www.youtube.com/watch?v=Q81RR3yKn30",-1),q=[h,u,g,d,y,w,x,b,k,v,_,z,f,M,S,L];function I(W,T){return n(),t("div",null,q)}const j=l(o,[["render",I],["__file","regularization.html.vue"]]);export{j as default};
