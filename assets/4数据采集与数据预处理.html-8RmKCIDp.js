import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,e as l,a as s,b as a}from"./app-SnI5rGHA.js";const i={},m=l('<h1 id="第四章数据采集与数据预处理" tabindex="-1"><a class="header-anchor" href="#第四章数据采集与数据预处理" aria-hidden="true">#</a> 第四章数据采集与数据预处理</h1><h2 id="数据采集方法" tabindex="-1"><a class="header-anchor" href="#数据采集方法" aria-hidden="true">#</a> 数据采集方法</h2><h3 id="数据分类" tabindex="-1"><a class="header-anchor" href="#数据分类" aria-hidden="true">#</a> 数据分类</h3><ol><li>收集方式 <ol><li>实验数据: 试验条件下取得的数据</li><li>观测数据: <ol><li>追溯型数据, 一次调研获取的截面数据</li><li>跟踪型数据, 多次调研获取的面板数据</li></ol></li></ol></li><li>描述对象与时间的关系 <ol><li>时间序列数据, 按照时间顺序采集多期数据, 表示研究对象随时间变化的情况</li><li>截面数据, 某个时间点不同对象的调查数据</li><li>面板数据, 多个时间点(在时间序列上取多个截面), 是进行因果分析的重要基础</li></ol></li><li>数据的来源 <ol><li>一手数据(原始数据)</li><li>二手数据</li></ol></li></ol><h3 id="概率抽样方法" tabindex="-1"><a class="header-anchor" href="#概率抽样方法" aria-hidden="true">#</a> 概率抽样方法</h3><p>概率抽样又称为随机抽样</p><ol><li><p>按抽样方式划分:</p><ol><li>简单随机抽样: 不进行分组(分层抽样), 排序(系统抽样), 按每个个体等概率抽样</li><li>分层抽样: <ol><li>等数分配, 每个层级内抽取相同的样本量</li><li>等比分配, 按各层级占总体的比例确认层级内的样本量</li></ol></li><li>系统抽样(等距抽样): 排序编号, 等距抽取. 适用于总体样本中有天然序号的场景</li><li>多段抽样: 北京市人口调查, 先从市里抽几个区, 再从区里抽几个街道, 然后通过街道办事处渠道获取最终的样本. 适用于大型调查, 一般企业用不到</li></ol></li><li><p>按抽方式不同</p><ol><li>重复抽样(有放回), 经典统计学中, 假设每个样本等概率被抽到, 需要采用重复抽样的方法</li><li>不重复抽样(无放回), 实际工作中, 重复抽样会造成样本重复, 首选不重复抽样</li></ol></li></ol><p>数据误差: 调查结果与现实结果之间的偏差, 按照形成原因不同, 可分为:</p><ol><li>抽样误差, 用样本统计量推断总体参数时的误差, 属于代表性误差, 误差来源于抽样的随机性</li><li>非抽样误差, 不是由抽样引起的, 比如测量偏差, 不随样本量的增大而降低</li></ol><p>最小抽样量的确定: 收取样本量越多, 统计分析精度就越高, 但是实际工作中会受到经济约束和时间约束, 要尽可能地少抽取样本. 最小样本量的计算公式:</p>',10),p=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n"),s("mo",null,"="),s("mfrac",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("msubsup",null,[s("mi",null,"Z"),s("mrow",null,[s("mi",null,"α"),s("mi",{mathvariant:"normal"},"/"),s("mn",null,"2")]),s("mn",null,"2")]),s("msup",null,[s("mi",null,"σ"),s("mn",null,"2")]),s("mo",{stretchy:"false"},")")]),s("msup",null,[s("mi",null,"e"),s("mn",null,"2")])])]),s("annotation",{encoding:"application/x-tex"}," n=\\frac{(Z_{\\alpha/2}^2\\sigma^2)}{e^2} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.3871em","vertical-align":"-0.686em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.7011em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"e"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7401em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.887em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"Z"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-2.378em","margin-left":"-0.0715em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.0037em"}},"α"),s("span",{class:"mord mtight"},"/2")])])]),s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.497em"}},[s("span")])])])])]),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"σ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mclose"},")")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])])],-1),c=s("p",null,"其中:",-1),r=s("ol",null,[s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a("为样本量")]),s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",null,"σ"),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"},"\\sigma^2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"σ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])]),a("研究总体的方差, 越大数据越分散, 需要采样量越多")]),s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"e")]),s("annotation",{encoding:"application/x-tex"},"e")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"e")])])]),a("为抽样误差, 可以根据均值的百分比确定, 如果想要将抽样误差"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"e")]),s("annotation",{encoding:"application/x-tex"},"e")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"e")])])]),a("减少"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1"),s("mi",{mathvariant:"normal"},"/"),s("mn",null,"2")]),s("annotation",{encoding:"application/x-tex"},"1/2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1/2")])])]),a(", 则抽样量要增加四倍")]),s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"Z"),s("mrow",null,[s("mi",null,"α"),s("mi",{mathvariant:"normal"},"/"),s("mn",null,"2")])])]),s("annotation",{encoding:"application/x-tex"},"Z_{\\alpha/2}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0385em","vertical-align":"-0.3552em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"Z"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3448em"}},[s("span",{style:{top:"-2.5198em","margin-left":"-0.0715em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.0037em"}},"α"),s("span",{class:"mord mtight"},"/2")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3552em"}},[s("span")])])])])])])])]),a("为可靠性系数, 当置信度为95%时, "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"Z"),s("mrow",null,[s("mi",null,"α"),s("mi",{mathvariant:"normal"},"/"),s("mn",null,"2")])]),s("mo",null,"="),s("mn",null,"1.96")]),s("annotation",{encoding:"application/x-tex"},"Z_{\\alpha/2}=1.96")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0385em","vertical-align":"-0.3552em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"Z"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3448em"}},[s("span",{style:{top:"-2.5198em","margin-left":"-0.0715em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.0037em"}},"α"),s("span",{class:"mord mtight"},"/2")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3552em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1.96")])])]),a("; 当置信度为90%时， "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"Z"),s("mrow",null,[s("mi",null,"α"),s("mi",{mathvariant:"normal"},"/"),s("mn",null,"2")])]),s("mo",null,"="),s("mn",null,"1.645")]),s("annotation",{encoding:"application/x-tex"},"Z_{\\alpha/2}=1.645")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0385em","vertical-align":"-0.3552em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"Z"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3448em"}},[s("span",{style:{top:"-2.5198em","margin-left":"-0.0715em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.0037em"}},"α"),s("span",{class:"mord mtight"},"/2")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3552em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1.645")])])]),a(", 既置信度越高， 需要的样本量越多， 95%置信度与90%置信度需要采样量多40%. 例， 某银行要分析用户对抽样产品是否感兴趣， 希望对真值的估计偏差不超过0.05, 既"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"e"),s("mo",null,"="),s("mn",null,"0.05")]),s("annotation",{encoding:"application/x-tex"},"e=0.05")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0.05")])])]),a(", 对应95%的置信范围， 即"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"Z"),s("mo",null,"="),s("mn",null,"1.96")]),s("annotation",{encoding:"application/x-tex"},"Z=1.96")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"Z"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1.96")])])]),a(". 一般情况下不知道"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"p")]),s("annotation",{encoding:"application/x-tex"},"p")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"p")])])]),a("值， 所以假设感兴趣的概率"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"p"),s("mo",null,"="),s("mn",null,"0.5")]),s("annotation",{encoding:"application/x-tex"},"p=0.5")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0.5")])])]),a("， 则有：")])],-1),h=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n"),s("mo",null,"="),s("msup",null,[s("mi",null,"Z"),s("mn",null,"2")]),s("mo",null,"∗"),s("mfrac",null,[s("mrow",null,[s("mi",null,"p"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("mi",null,"p"),s("mo",{stretchy:"false"},")")]),s("msup",null,[s("mi",null,"e"),s("mn",null,"2")])]),s("mo",null,"="),s("mn",null,"1.962"),s("mo",null,"∗"),s("mfrac",null,[s("mrow",null,[s("mn",null,"0."),s("msup",null,[s("mn",null,"5"),s("mn",null,"2")])]),s("mrow",null,[s("mn",null,"0.0"),s("msup",null,[s("mn",null,"5"),s("mn",null,"2")])])]),s("mo",null,"="),s("mn",null,"196")]),s("annotation",{encoding:"application/x-tex"}," n=Z^2 * \\frac{p(1-p)}{e^2} = 1.962 * \\frac{0.5^2}{0.05^2} = 196 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8641em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"Z"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.113em","vertical-align":"-0.686em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.427em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"e"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7401em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mclose"},")")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1.962"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.1771em","vertical-align":"-0.686em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.4911em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"0.0"),s("span",{class:"mord"},[s("span",{class:"mord"},"5"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7401em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"0."),s("span",{class:"mord"},[s("span",{class:"mord"},"5"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"196")])])])])],-1),o=l('<h3 id="非概率抽样方法" tabindex="-1"><a class="header-anchor" href="#非概率抽样方法" aria-hidden="true">#</a> 非概率抽样方法</h3><p>非概率抽样又称为主观抽样， 由主观判断确定抽样方法。 虽然在结果上可以一定程度上说明整体的性质， 特征， 但不能从数量上推断总体。 可以分为:</p><ol><li>偶遇抽样</li><li>判断抽样</li><li>定额抽样(分层概率抽样各层的样本是随机抽取, 而定额抽样各层样本是非随机抽取)</li><li>滚雪球抽样</li><li>空间抽样</li></ol><h2 id="市场调研和数据录入" tabindex="-1"><a class="header-anchor" href="#市场调研和数据录入" aria-hidden="true">#</a> 市场调研和数据录入</h2><p>调查问卷分类:</p><ol><li>结构化问卷: 问答题, 只列出问题, 没有备选答案</li><li>非结构化问卷, 选择题, 既有问题, 又有备选答案</li></ol><p>时长调研方法:</p><ol><li>深度访问</li><li>焦点小组座谈会</li><li>实验市场</li><li>中心定点访问</li><li>网上调查问卷</li><li>电话调查访问</li></ol><p>问题分类:</p><ol><li>是非题</li><li>单选题</li><li>多选题</li><li>排序题</li><li>开放题</li></ol><h2 id="数据预处理" tabindex="-1"><a class="header-anchor" href="#数据预处理" aria-hidden="true">#</a> 数据预处理</h2><p>异常值是指悖于常理的取值, 可能是错误值也可能是离群值</p><ol><li>错误数据 <ol><li>有足够的信息, 直接填补</li><li>没有足够信息, 按其他数据源修正</li><li>完全没有信息, 按空值处理</li><li>删除数据</li><li>删除字段</li></ol></li><li>连续变量离群值 <ol><li>盖帽法: 将均值上下三倍标准差范围外的记录替换为均值上下三倍标准差值</li><li>分箱法</li><li>WoE</li></ol></li><li>分类变量概化处理 <ol><li>简单合并: 将占比较少水平的直接合并为一个大类</li><li>事实合并:</li><li>基于算法的合并: 分箱合并</li></ol></li><li>缺失值处理 数据缺失分为解释变量(X)的缺失和被解释变量(Y)的缺失 数据中不含缺失值的变量被称为完全变量, 含有缺失值的变量被称为不完全变量. 完全随机缺失: 数据的缺失与完全变量和不完全变量均无关 随机缺失: 数据的缺失仅与完全变量有关 非随机缺失: 数据的缺失与不完全变量本身相关, 不可忽略, 会造成有偏差的样本估计.</li></ol><p>Y变量数据缺失: 使用删除法 X变量数据缺失: 插补法(单一插补法, 多重插补法, 截断数据处理)</p><ol><li>单一插补法: 应用于完全随机缺失数据, 具体可分为: <ol><li>推理插补法: 缺失值可以通过业务知识推断</li><li>集中性统计量插补: 对称分布的连续变量使用均值插补法, 偏态分布的连续变量使用中位数插补, 分类变量使用众数插补</li><li>近邻插补法: 时间序列数据</li><li>比率或回归插补法: 与多重插补法类似</li></ol></li><li>多重插补法: 非完全随机缺失数据, 用其他X变量数据预测当前X变量数据, 切无不可用Y变量数据预测X变量数据</li><li>截断数据处理: 非随机缺失数据</li></ol><p>当缺失数据小于20%时, 连续变量使用均值或中位数填补, 分类变量可以将缺失部分单算一类, 也可以用众数填补 当缺失数据在20%到50%时, 填补方法相同, 另外生成指示哑变量, 参与后续的建模 当缺失数据大于50%时, 生成指示哑变量, 参与后续的建模, 不适用原始变量</p><p>离群值处理: 将节假日数据使用:</p><ol><li>简单移动平均法</li><li>加权移动平均法 处理, 计算填补数据和原始数据的差值, 然后在预测时加上这个差值</li></ol>',18),g=[m,p,c,r,h,o];function u(d,y){return n(),e("div",null,g)}const w=t(i,[["render",u],["__file","4数据采集与数据预处理.html.vue"]]);export{w as default};
