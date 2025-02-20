import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,a,b as s,d as t}from"./app-9tftCahk.js";const i="/assets/无效变量-7TO1rRtU.png",p="/assets/多余变量-9cIrpkci.png",m="/assets/高度相关特征选择-6Kxn3uBq.png",c="/assets/递归特征选择-qQhobTJw.png",r={},h=a('<h1 id="特征选择" tabindex="-1"><a class="header-anchor" href="#特征选择" aria-hidden="true">#</a> 特征选择</h1><ol><li><p>无效变量包括不相关变量和多余变量</p><p>统计方式的特征选择方法: 方差阈值化、卡方检验、ANOVA 检验及 T 检验、皮尔森相关系数；</p></li><li><p>高度相关特征的选择</p></li><li><p>模型方式的特征选择: 决策树、逻辑回归、随机森林、XGBoost</p></li><li><p>递归式的特征选择。</p></li></ol><h2 id="无效变量" tabindex="-1"><a class="header-anchor" href="#无效变量" aria-hidden="true">#</a> 无效变量</h2><p>一维密集, 三维疏散. 字段多的时候, 数据要跟着多, 模型才会更稳定.</p><figure><img src="'+i+'" alt="无效变量" tabindex="0" loading="lazy"><figcaption>无效变量</figcaption></figure>',5),d=s("p",null,[t("Redundancy: "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"x"),s("mn",null,"1")]),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"x"),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"},"x_1, x_2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),t("共线, 可以删除一个 Irrelevancy: 不相关变量, "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"x"),s("mn",null,"3")])]),s("annotation",{encoding:"application/x-tex"},"x_3")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"3")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),t("改变不影响结果, 删除")],-1),o=s("figure",null,[s("img",{src:p,alt:"多余变量",tabindex:"0",loading:"lazy"}),s("figcaption",null,"多余变量")],-1),g=s("h2",{id:"统计方式的特征选择",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#统计方式的特征选择","aria-hidden":"true"},"#"),t(" 统计方式的特征选择")],-1),u=s("p",null,"方差阈值化(Variance Thresholding(VT)), 方差越小, 包含信息越小. 非监督, 没考虑目标",-1),y=s("p",null,"数字型维度,",-1),v=s("p",null,"✨在z-score之前做, 因为做了z-score, 均值方差相同 ✨阈值自己去顶",-1),b=s("p",null,"二项式维度, binary categorical features",-1),f=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"V"),s("mi",null,"a"),s("mi",null,"r"),s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mi",null,"p"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("mi",null,"p"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," Var(x)=p(1-p) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"Va"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mclose"},")")])])])])],-1),x=a("<p>利用统计检验可解决输入字段与目标字段不相关(lrrelevancy)的问题, 考虑了目标</p><p>在分类中，由于目标字段是类别型字段，所以 当输入字段是类别型字段时，可用卡方检验来验证输入字段与目标字段间的关联性 当输入字段是数值型字段时，可用ANOVA检验(目标n个分类)及T检验(目标2个分类)来验证输入字段与目标字段间的关联性</p><p>市场研究员想知道背景音乐是否会影响消费者的心情和其交易行为</p><p>Northern Ireland超市研究比较音乐与酒类购买的关系(购买瓶数上是否有差异):</p><ol><li>无音乐、French手风琴乐、Italian弦乐</li><li>Erench、Italian和其他酒类</li></ol><p>实际的销售, 看背景音乐和卖出去的酒是否有相关性</p><table><thead><tr><th>酒</th><th>无</th><th>French</th><th>Italian</th><th>总数</th></tr></thead><tbody><tr><td>French</td><td>30</td><td>39</td><td>30</td><td>99</td></tr><tr><td>Italian</td><td>11</td><td>1</td><td>19</td><td>31</td></tr><tr><td>其他</td><td>43</td><td>35</td><td>35</td><td>113</td></tr><tr><td>总数</td><td>84</td><td>75</td><td>84</td><td>243</td></tr></tbody></table><p>期望的销售, 假设背景音乐和卖出去的酒, 没有相关性</p><table><thead><tr><th>酒</th><th>无</th><th>French</th><th>Italian</th><th>总数</th></tr></thead><tbody><tr><td>French</td><td>34.222</td><td>30.556</td><td>34.222</td><td>99.000</td></tr><tr><td>Italian</td><td>10.716</td><td>9.568</td><td>10.716</td><td>31.000</td></tr><tr><td>其他</td><td>39.062</td><td>34.877</td><td>39.062</td><td>113.001</td></tr><tr><td>总数</td><td>84.000</td><td>75.001</td><td>84.000</td><td>243.001</td></tr></tbody></table>",9),_=s("p",null,[t("没有播放音乐卖出法国酒的期望值, "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"34.222"),s("mo",null,"="),s("mfrac",null,[s("mn",null,"99"),s("mn",null,"243")]),s("mo",null,"∗"),s("mfrac",null,[s("mn",null,"84"),s("mn",null,"243")]),s("mo",null,"∗"),s("mn",null,"243")]),s("annotation",{encoding:"application/x-tex"},"34.222 = \\frac{99}{243} * \\frac{84}{243} * 243")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"34.222"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.1901em","vertical-align":"-0.345em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8451em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"243")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"99")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.1901em","vertical-align":"-0.345em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8451em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"243")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"84")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"243")])])]),t("(卖出法国酒的概率 * 没有播放音乐的概率, 假设二者独立, 可以直接相乘)")],-1),z=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",null,"X"),s("mn",null,"2")]),s("mo",null,"="),s("mfrac",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mn",null,"30"),s("mo",null,"−"),s("mn",null,"34.222"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mn",null,"2")])]),s("mn",null,"34.222")]),s("mo",null,"+"),s("mfrac",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mn",null,"39"),s("mo",null,"−"),s("mn",null,"30.556"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mn",null,"2")])]),s("mn",null,"30.556")]),s("mo",null,"+"),s("mfrac",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mn",null,"30"),s("mo",null,"−"),s("mn",null,"34.222"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mn",null,"2")])]),s("mn",null,"34.222")]),s("mo",null,"+"),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mo",null,"+"),s("mfrac",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mn",null,"35"),s("mo",null,"−"),s("mn",null,"39.062"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mn",null,"2")])]),s("mn",null,"39.062")]),s("mo",null,"="),s("mn",null,"18.28")]),s("annotation",{encoding:"application/x-tex"}," X^2 = \\frac{(30-34.222)^2}{34.222} + \\frac{(39-30.556)^2}{30.556} + \\frac{(30-34.222)^2}{34.222} + ... + \\frac{(35-39.062)^2}{39.062} = 18.28 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8641em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.1771em","vertical-align":"-0.686em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.4911em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"34.222")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mopen"},"("),s("span",{class:"mord"},"30"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"34.222"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.1771em","vertical-align":"-0.686em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.4911em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"30.556")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mopen"},"("),s("span",{class:"mord"},"39"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"30.556"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.1771em","vertical-align":"-0.686em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.4911em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"34.222")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mopen"},"("),s("span",{class:"mord"},"30"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"34.222"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"..."),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.1771em","vertical-align":"-0.686em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.4911em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"39.062")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mopen"},"("),s("span",{class:"mord"},"35"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"39.062"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"18.28")])])])])],-1),w=a('<p>利用卡方检验去计算各个类别型的输入字段与目标字段间的相关程度</p><ol><li>首先必需先计算其卡方值</li><li>然后根据卡方值查表算出p-value, p-value越小代表此字段与目标字段间的相关程度越大，也越重要</li><li>在95%的信心水平之下，p-value&lt;0.05则为显著(重要)的关键字段</li></ol><p>关键字段分析-类别型字段</p><table><thead><tr><th>字段</th><th>卡方检验 卡方值</th><th>卡方检验 p-value</th><th>卡方 排名</th></tr></thead><tbody><tr><td>children</td><td>88.125</td><td>0.000</td><td>1</td></tr><tr><td>married</td><td>33.574</td><td>0.000</td><td>2</td></tr><tr><td>save act</td><td>15.389</td><td>0.000</td><td>3</td></tr><tr><td>region</td><td>8.489</td><td>0.037</td><td>4</td></tr><tr><td>car</td><td>1.485</td><td>0.223</td><td>5</td></tr><tr><td>sex</td><td>0.793</td><td>0.373</td><td>6</td></tr><tr><td>current act</td><td>0.014</td><td>0.904</td><td>7</td></tr><tr><td>mortgage</td><td>0.007</td><td>0.935</td><td>8</td></tr></tbody></table><p>关键字段分析-数值型字段</p><p>由于样本变异数是否与母体相同会影响T-Value之计算，因此要利用T检验去计算各个数值型的输入字段与目标字段间的相关程度，首先，必需利用F检验去检验每个字段的样本变异数是否与母体相同</p><ol><li>p-value越小代表字段的样本变异数与母体变异数越有差距</li><li>由下表可以看出，在95%的信心水平下，income和age的样本变异数与母体变异数皆有差异</li></ol><table><thead><tr><th>字段</th><th>T-value</th><th>T 检验 p-value</th><th>T 检验排名</th></tr></thead><tbody><tr><td>income</td><td>-3.456</td><td>0.001</td><td>1</td></tr><tr><td>age</td><td>2.214</td><td>0.027</td><td>2</td></tr></tbody></table><p>利用ANOVA检验去计算各个数值型的输入字段与目标字段间的相关程度</p><ol><li>首先必需先计算其F-value</li><li>然后根据F-value查表算出p-value: p-value越小代表此字段与目标字段间的相关程度越大，也越重要</li><li>在95%的信心水平之下，p-value&lt;0.05则为显著(重要)的关键字段</li></ol><table><thead><tr><th>字段</th><th>ANOVA 检验 F-value</th><th>ANOVA 检验 p-value</th><th>ANOVA 排名</th></tr></thead><tbody><tr><td>income</td><td>11.941</td><td>0.001</td><td>1</td></tr><tr><td>Age</td><td>4.9</td><td>0.027</td><td>2</td></tr></tbody></table><h2 id="高度相关特征的选择" tabindex="-1"><a class="header-anchor" href="#高度相关特征的选择" aria-hidden="true">#</a> 高度相关特征的选择</h2><p>使用相关性矩阵, 把相关性大于0.95的保留一个相关维度即可.</p><figure><img src="'+m+'" alt="高度相关特征选择" tabindex="0" loading="lazy"><figcaption>高度相关特征选择</figcaption></figure><h2 id="模型方式的特征选择" tabindex="-1"><a class="header-anchor" href="#模型方式的特征选择" aria-hidden="true">#</a> 模型方式的特征选择</h2><p>题，可用决策树(DecisionTree)、随机森林丶XGBoost及逻辑回归(Logistic Regression)中的逐步回归(Stepwise)来协助选择并过滤出重要且较不具有共线性的变量.</p><p>可解决: 共线性(Collinearity), 不相关的.</p><h2 id="递归特征选择-recursively-eliminatingfeatures" tabindex="-1"><a class="header-anchor" href="#递归特征选择-recursively-eliminatingfeatures" aria-hidden="true">#</a> 递归特征选择(Recursively EliminatingFeatures)</h2><p>RFECV是指使用交叉验证(cross validation), 来递归验证特征(Recursively EliminatingFeatures).</p><p>每次删除一个特征, 直到特征表现最好.</p><p>可正向, 可逆向, 也可双向.</p><figure><img src="'+c+'" alt="递归特征选择" tabindex="0" loading="lazy"><figcaption>递归特征选择</figcaption></figure><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p>构造二分类模型时，在变量粗筛阶段，以下哪个方法最适合对分类变量进行粗筛 A.相关系数 B.卡方检验 C.方差分析 D.T检验</p><p>答案: B</p>',25),k=[h,d,o,g,u,y,v,b,f,x,_,z,w];function V(M,A){return e(),n("div",null,k)}const N=l(r,[["render",V],["__file","2_4特征选择.html.vue"]]);export{N as default};
