import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as n,o as e,c as m,a as s,d as p,w as r,e as l,b as a}from"./app-SnI5rGHA.js";const h={},c=l('<h1 id="数据分析模型-因子分析" tabindex="-1"><a class="header-anchor" href="#数据分析模型-因子分析" aria-hidden="true">#</a> 数据分析模型_因子分析</h1><ul><li>领会 <ul><li>了解因子分析模型设置，只需要关注主成分法的计算步骤</li></ul></li><li>熟知 <ul><li>适用于因子分析的变量度量类型，通过分析结果，选取合适的因子个数</li><li>常用因子旋转的方法</li><li>主成分分析与因子分析的联系与区别</li></ul></li><li>应用 <ul><li>在遇到业务问题时，有能力决定使用因子分析还是主成分分析</li><li>有能力根据原始变量在各因子上的权重明确每个因子的意义</li><li>在聚类前对数据进行描述，发现理想的聚类方式和数量</li></ul></li></ul><p>关于主成分分析和因子分析，下列说法正确的是（） A、各个主成分之间是相互正交的 B、各个因子之间不是相互正交的 C、各个主成分的含义通常是明确的 D、各个因子的含义通常是明确的</p><p>正确答案：AD. 因子需要旋转才会正交</p><p>(单选题)关于因子分析，下面的说法有误的是<br> A、PCA是因子分析的延伸<br> B、因子分析的可解释性强于主成分分析<br> C、因子分析通常通过调整主成分在原始变量的权重来发现主成分所代表的含义<br> D、因子分析用于预测类模型建模</p><p>正确答案：A,D</p><p>(单选题)因子载荷矩阵是主成分载荷矩阵（）的结果<br> A、最小方差斜交旋转<br> B、最大方差斜交旋转<br> C、最小方差正交旋转<br> D、最大方差正交旋转</p><p>正确答案：D,回答正确</p><h2 id="因子分析" tabindex="-1"><a class="header-anchor" href="#因子分析" aria-hidden="true">#</a> 因子分析</h2>',9),o=l('<p>下列那项不可以用来检验待分析的原有若干变量是否适合做因子分析？ A、相关系数矩阵 B、T检验 C、KMO检验 D、反映像相关矩阵 正确答案：B, 选项ACD都可以用来确定待分析的原有若干变量是否适合于因子分析</p><h3 id="考点-因子分析步骤" tabindex="-1"><a class="header-anchor" href="#考点-因子分析步骤" aria-hidden="true">#</a> 考点: 因子分析步骤</h3><p>因子分析步骤:</p><ol><li>选取原始变量</li><li>求相关矩阵, 大多数相关系数大于0.3</li><li>求公共因子及载荷矩阵 <ul><li>主成分法</li><li>极大似然法</li><li>主轴因子法</li></ul></li><li>因子旋转 <ul><li>正交旋转</li><li>斜交旋转</li></ul></li><li>计算因子得分</li></ol><h3 id="考点-因子分析步骤-1" tabindex="-1"><a class="header-anchor" href="#考点-因子分析步骤-1" aria-hidden="true">#</a> 考点: 因子分析步骤</h3><ol><li>求公共因子及载荷矩阵 <ul><li>主成分法</li><li>极大似然法</li><li>主轴因子法</li></ul></li><li>因子旋转 <ul><li>正交旋转</li><li>斜交旋转</li></ul></li><li>计算因子得分</li></ol><ul><li><p>🔴(单选题)以下属于因子分析计算过程的步骤有（）<br> A、估计因子载荷矩阵<br> B、进行因子旋转<br> C、估计公共因子<br> D、以上都是</p><p>正确答案：D</p></li><li><p>🔴(单选题)下列不属于因子分析计算过程步骤的是()。<br> A、估计因子载荷矩阵<br> B、进行因子旋转<br> C、估计特殊因子得分🔴<br> D、估计公共因子(因子得分)</p><p>答案:C</p></li></ul><h3 id="考点-kmo相关指数" tabindex="-1"><a class="header-anchor" href="#考点-kmo相关指数" aria-hidden="true">#</a> 考点:KMO相关指数</h3><p>KMO的公式为:</p>',9),u=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"K"),s("mi",null,"M"),s("mi",null,"O"),s("mo",null,"="),s("mfrac",null,[s("mrow",null,[s("mo",null,"∑"),s("mo",null,"∑"),s("msubsup",null,[s("mi",null,"a"),s("mrow",null,[s("mi",null,"i"),s("mi",null,"j")]),s("mn",null,"2")])]),s("mrow",null,[s("mo",null,"∑"),s("mo",null,"∑"),s("msubsup",null,[s("mi",null,"a"),s("mrow",null,[s("mi",null,"i"),s("mi",null,"j")]),s("mn",null,"2")]),s("mo",null,"+"),s("mo",null,"∑"),s("mo",null,"∑"),s("msubsup",null,[s("mi",null,"b"),s("mrow",null,[s("mi",null,"i"),s("mi",null,"j")]),s("mn",null,"2")])])])]),s("annotation",{encoding:"application/x-tex"}," KMO = \\frac{\\sum\\sum a_{ij}^2}{\\sum \\sum a_{ij}^2 + \\sum \\sum b_{ij}^2} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"K"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"MO"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.6979em","vertical-align":"-1.099em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.5989em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"∑∑"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"a"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7959em"}},[s("span",{style:{top:"-2.4231em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05724em"}},"ij")])])]),s("span",{style:{top:"-3.0448em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.413em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"∑∑"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"b"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7959em"}},[s("span",{style:{top:"-2.4231em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05724em"}},"ij")])])]),s("span",{style:{top:"-3.0448em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.413em"}},[s("span")])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.7848em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"∑∑"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"a"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-2.4413em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05724em"}},"ij")])])]),s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3948em"}},[s("span")])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.099em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])])],-1),g=s("p",null,[a("其中, "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"a"),s("mrow",null,[s("mi",null,"i"),s("mi",null,"j")])])]),s("annotation",{encoding:"application/x-tex"},"a_{ij}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7167em","vertical-align":"-0.2861em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"a"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05724em"}},"ij")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])])])])]),a("表示第"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"i")]),s("annotation",{encoding:"application/x-tex"},"i")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6595em"}}),s("span",{class:"mord mathnormal"},"i")])])]),a("个和第"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"j")]),s("annotation",{encoding:"application/x-tex"},"j")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.854em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j")])])]),a("个变量的相关性，"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"b"),s("mrow",null,[s("mi",null,"i"),s("mi",null,"j")])])]),s("annotation",{encoding:"application/x-tex"},"b_{ij}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9805em","vertical-align":"-0.2861em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"b"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05724em"}},"ij")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])])])])]),a("表示第"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"i")]),s("annotation",{encoding:"application/x-tex"},"i")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6595em"}}),s("span",{class:"mord mathnormal"},"i")])])]),a("个和第"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"j")]),s("annotation",{encoding:"application/x-tex"},"j")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.854em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j")])])]),a("个变量的偏相关性。")],-1),d=l('<ul><li><p>🔴4(单选题)关于因子分析的KM0检验说法错误的是（）。<br> A、KMO统计量是取值在0和1之间<br> B、当所有变量间的简单相关系数平方和远远大于偏相关系数平方和时，KMO值越接近于1<br> C、当KMO值接近1时，表示各变量之间的偏相关系数应该很小<br> D、当所有变量间的简单相关系数平方和远远大于偏相关系数平方和时，KMO值越接近于0</p><p>答案: D</p></li></ul><h3 id="考点-因子分析和主成分分析" tabindex="-1"><a class="header-anchor" href="#考点-因子分析和主成分分析" aria-hidden="true">#</a> 考点: 因子分析和主成分分析</h3><ul><li><p>🔴(单选题)关于主成分分析和因子分析的区别描述错误的是()。<br> A、主成分分析中的主成分是综合指标且互相无关<br> B、因子分析得到的因子是相关的🔴<br> C、因子分析得到的因子具有较强的可解释性<br> D、主成分分析是组合的过程，因子分析是分解的过程</p><p>答案:B</p></li></ul><h3 id="考点-因子分析的相关概念" tabindex="-1"><a class="header-anchor" href="#考点-因子分析的相关概念" aria-hidden="true">#</a> 考点: 因子分析的相关概念</h3><ul><li><p>🟢(单选题)关于因子分析，下列说法错误的是()。<br> A、因子分析是一种数据简化的技术<br> B、最大似然法是因子载荷矩阵的估计方法之一<br> C、因子旋转时采用的最大方差旋转是一种正交旋转🔴<br> D、因子分析中把因子表示成各个变量的线性组合</p><p>答案:D</p></li><li><p>🟢(单选题)下面关于因子分析说法错误的是()。<br> A、因子分析通过发掘隐藏在数据下的一组基本无法观测的变量来解释一组可观测变量的相关性<br> B、因子分析和主成分分析一样，都是数据降维技术<br> C、使用因子分析前不需要对数据进行标准化处理<br> D、因子旋转分为正交旋转和斜交旋转</p><p>答案:C</p></li><li><p>🟢(单选题)因子分析中提取的因子数一般要求( )。<br> A、小于变量个数<br> B、等于变量个数<br> C、大于变量个数<br> D、不等于变量个数</p><p>答案:A</p></li><li><p>🔴(多选题)在因子分析模型中，以下哪些说法是正确的？<br> A、因子载荷表示的是变量与公共因子的相关系数，反映了变量依赖因子的程度。<br> B、🔴共同度低的原始变量与其他原始变量的相关性很低，显示出较强的独特性。<br> C、🔴方差贡献衡量的是公共因子能够提供的信息量。<br> D、因子分析可以用于聚类模型和分类模型时的步骤。</p><p>正确答案：A,B,C,D</p><p>解析：A:正确，因子载荷确实表示的是变量和公共因子的相关系数，它显示了该变量在因子上的权重。B:正确，共同度是原始变量在所有因子上的因子载荷平方和，如果共同度低，意味着该变量不太由公共因子解释，故它的独特性更强。C：正确，公共因子的方差贡献确实是评价因子提供信息量的一个衡量，它是该因子上所有因子载荷平方和的表示。D:正确，因子分析确实是在聚类和分类模型建立时的一个重要的维度分析手段，尤其是在理解变量之间关系和降维时很有用。</p></li><li><p>🔴(单选题)因子分析是一种经典的统计分析方法，关于因子分析下列说法措误的是（）。<br> A、因子分析是一种数据简化的技术<br> B、最大以法是因子载荷矩的估计方法之一<br> C、因子旋转时采用最大方差旋转是一种正交旋转<br> D、因子分析的假设中没有规定特殊因子同公共因子的相关关系</p><p>答案: D, 因子分析的假设包括：各个共同因子之间不相关，特殊因子(specific factor)之间也不相关，共同因子和特殊因子之间也不相关。</p></li><li><p>🟢(单选题)在特征比较多的情况下建模需要先筛选特征或使用降维方法来减少变量个数，降维的方法有许多，以下哪个方法不能用来降维？<br> A.PCA（主成分分析）<br> B.FA（因子分析）<br> C.MDS（多维尺度分析）<br> D.贝叶斯算法</p><p>正确答案：D</p></li></ul><h3 id="考点-因子旋转" tabindex="-1"><a class="header-anchor" href="#考点-因子旋转" aria-hidden="true">#</a> 考点: 因子旋转</h3><ul><li><p>🔴(多选题)因子分析中因子旋转的方法有( )。 A、方差最小正交旋转<br> B、方差最大正交旋转<br> C、斜交旋转<br> D、正交旋转</p><p>答案:BCD</p></li></ul><h3 id="考点-因子分析的假设前提" tabindex="-1"><a class="header-anchor" href="#考点-因子分析的假设前提" aria-hidden="true">#</a> 考点: 因子分析的假设前提</h3><ul><li><p>🔴(单选题)关于主成分分析与因子分析的区别和联系说法正确的是？<br> A、每个主成分都只包含部分原始变量，这些变量代表着相应主成分的明确含义<br> B、每个主成分都是原始变量的线性组合，因此，各主成分之间存在一定的相关性<br> C、🔴因子分析需要假设各公因子之间互不相关，待殊因子之间也不相关，公因子和特殊因子之间也不相关：但是<code>主成分分析不需要任何假设</code><br> D、公因子和主成分都不被很好的解释</p><p>答案: C</p></li></ul>',9);function b(y,x){const t=n("RouterLink");return e(),m("div",null,[c,s("p",null,[p(t,{to:"/%E6%95%B0%E5%AD%A6/%E5%A4%9A%E5%85%83%E7%BB%9F%E8%AE%A1%E5%88%86%E6%9E%90/6%E5%9B%A0%E5%AD%90%E5%88%86%E6%9E%90/1%E5%9B%A0%E5%AD%90%E5%88%86%E6%9E%90%E7%9A%84%E5%9F%BA%E6%9C%AC%E7%90%86%E8%AE%BA.html"},{default:r(()=>[a("因子分析")]),_:1})]),o,u,g,d])}const A=i(h,[["render",b],["__file","6_2因子分析.html.vue"]]);export{A as default};
