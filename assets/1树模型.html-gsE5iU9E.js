import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as m,e as l,a as s,b as a}from"./app-jdLxCr9I.js";const e="/assets/1-HDxvV0BB.png",i="/assets/2-mYDJ55rO.png",r="/assets/5-YBH4lSTc.png",p={},c=l('<p><code>scikit-learn</code>使用的是CART树.</p><p>类别:</p><ol><li>按任务分：分类树（Classificationtree）与回归树（Decisiontree）</li><li>按特征选择方法分：ID3决策树算法、C4.5决策树算法、CART决策树算法</li></ol><table><thead><tr><th>时间</th><th>模型</th><th>任务</th><th>树</th><th>特征选择</th></tr></thead><tbody><tr><td>1984</td><td>CART</td><td>分类、回归</td><td>二叉树</td><td>基尼系数（Gini）、平方误差（MSE）</td></tr><tr><td>1986</td><td>ID3</td><td>分类</td><td>多叉树</td><td>信息增益（Information Gain）</td></tr><tr><td>1993</td><td>C4.5</td><td>分类</td><td>多叉树</td><td>信息增益比（Information Gain Ratio）</td></tr></tbody></table><h2 id="决策树的专有名词" tabindex="-1"><a class="header-anchor" href="#决策树的专有名词" aria-hidden="true">#</a> 决策树的专有名词</h2><ul><li>根节点(Root node): 决策树的第一个节点</li><li>分裂(Splitting): 将节点分解为多个子节点</li><li>节点(node): 从根节点分裂出来, 或者从节点分裂出来的子节点</li><li>叶子节点(Leaf or terminal node): 不能再分裂的节点</li><li>剪枝(Pruning): 减少子节点, 目的是降低树的复杂度, 从而避免过拟合</li><li>分支(Branch/Sub-Tree): 整个树的子集合</li><li>父节点儿子节点(Parent and Child Node): 被分裂的节点是父节点, 分裂得到的节点是子节点</li></ul><h2 id="决策树直觉" tabindex="-1"><a class="header-anchor" href="#决策树直觉" aria-hidden="true">#</a> 决策树直觉</h2><p>通过决策树来预测蓝球员的薪水案例, 选取的特征是年限(Years)和命中(Hits)</p><ol><li>年限(Years): 在联盟内效力的年数</li><li>命中(Hits): 上一年度的命中次数</li></ol><p>如下图所示:</p>',10),h=s("ol",null,[s("li",null,[a("根节点根据"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"Y"),s("mi",null,"e"),s("mi",null,"a"),s("mi",null,"r"),s("mi",null,"s"),s("mo",null,"<"),s("mn",null,"4.5")]),s("annotation",{encoding:"application/x-tex"},"Years < 4.5")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7224em","vertical-align":"-0.0391em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y"),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord mathnormal"},"rs"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"4.5")])])]),a("规则分裂为左侧分支, 并产生一个节点, 表示运动员效力年限小于4.5时, 平均的薪水是5.11")]),s("li",null,[a("根节点根据"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"Y"),s("mi",null,"e"),s("mi",null,"a"),s("mi",null,"r"),s("mi",null,"s"),s("mo",null,"≥"),s("mn",null,"4.5")]),s("annotation",{encoding:"application/x-tex"},"Years \\ge 4.5")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8193em","vertical-align":"-0.136em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y"),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord mathnormal"},"rs"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≥"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"4.5")])])]),a("规则分裂为右侧分支, 在进一步根据"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"H"),s("mi",null,"i"),s("mi",null,"t"),s("mi",null,"s"),s("mo",null,"<"),s("mn",null,"177.5")]),s("annotation",{encoding:"application/x-tex"},"Hits < 177.5")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7224em","vertical-align":"-0.0391em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.08125em"}},"H"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"177.5")])])]),a("分裂为左侧分支, 并产生一个节点, 表示运动员在该规则下, 平均薪水是6.00")]),s("li",null,[a("根节点根据"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"Y"),s("mi",null,"e"),s("mi",null,"a"),s("mi",null,"r"),s("mi",null,"s"),s("mo",null,"≥"),s("mn",null,"4.5")]),s("annotation",{encoding:"application/x-tex"},"Years \\ge 4.5")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8193em","vertical-align":"-0.136em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y"),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord mathnormal"},"rs"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≥"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"4.5")])])]),a("规则分裂为右侧分支, 在进一步根据"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"H"),s("mi",null,"i"),s("mi",null,"t"),s("mi",null,"s"),s("mo",null,"≥"),s("mn",null,"177.5")]),s("annotation",{encoding:"application/x-tex"},"Hits \\ge 177.5")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8193em","vertical-align":"-0.136em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.08125em"}},"H"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≥"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"177.5")])])]),a("分裂为右侧分支, 并产生一个节点, 表示运动员在该规则下, 平均薪水是6.74")])],-1),o=s("figure",null,[s("img",{src:e,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),g=s("p",null,"在这个案例中, 决策树通过年薪和薪水将整个区域分割成三份, 用公式描述为:",-1),u=s("ul",null,[s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"R"),s("mn",null,"1"),s("mo",null,"="),s("mo",{stretchy:"false"},"{"),s("mi",null,"X"),s("mi",{mathvariant:"normal"},"∣"),s("mi",null,"Y"),s("mi",null,"e"),s("mi",null,"a"),s("mi",null,"r"),s("mi",null,"s"),s("mo",null,"<"),s("mn",null,"4.5"),s("mo",{stretchy:"false"},"}")]),s("annotation",{encoding:"application/x-tex"},"R1 = \\{X|Years<4.5\\}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"{"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X"),s("span",{class:"mord"},"∣"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y"),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord mathnormal"},"rs"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"4.5"),s("span",{class:"mclose"},"}")])])])]),s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"R"),s("mn",null,"2"),s("mo",null,"="),s("mo",{stretchy:"false"},"{"),s("mi",null,"X"),s("mi",{mathvariant:"normal"},"∣"),s("mi",null,"Y"),s("mi",null,"e"),s("mi",null,"a"),s("mi",null,"r"),s("mi",null,"s"),s("mo",null,">"),s("mo",null,"="),s("mn",null,"4.5"),s("mo",{separator:"true"},","),s("mi",null,"H"),s("mi",null,"i"),s("mi",null,"t"),s("mi",null,"s"),s("mo",null,"<"),s("mn",null,"117.5"),s("mo",{stretchy:"false"},"}")]),s("annotation",{encoding:"application/x-tex"},"R2 = \\{X|Years>=4.5, Hits<117.5\\}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),s("span",{class:"mord"},"2"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"{"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X"),s("span",{class:"mord"},"∣"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y"),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord mathnormal"},"rs"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},">="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},"4.5"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.08125em"}},"H"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"117.5"),s("span",{class:"mclose"},"}")])])])]),s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"R"),s("mn",null,"3"),s("mo",null,"="),s("mo",{stretchy:"false"},"{"),s("mi",null,"X"),s("mi",{mathvariant:"normal"},"∣"),s("mi",null,"Y"),s("mi",null,"e"),s("mi",null,"a"),s("mi",null,"r"),s("mi",null,"s"),s("mo",null,">"),s("mo",null,"="),s("mn",null,"4.5"),s("mo",{separator:"true"},","),s("mi",null,"H"),s("mi",null,"i"),s("mi",null,"t"),s("mi",null,"s"),s("mo",null,">"),s("mo",null,"="),s("mn",null,"117.5"),s("mo",{stretchy:"false"},"}")]),s("annotation",{encoding:"application/x-tex"},"R3 = \\{X|Years>=4.5, Hits>=117.5\\}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),s("span",{class:"mord"},"3"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"{"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X"),s("span",{class:"mord"},"∣"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y"),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord mathnormal"},"rs"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},">="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},"4.5"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.08125em"}},"H"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},">="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"117.5"),s("span",{class:"mclose"},"}")])])])])],-1),d=l('<p>✨R是Region的简写</p><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="最优分裂特征" tabindex="-1"><a class="header-anchor" href="#最优分裂特征" aria-hidden="true">#</a> 最优分裂特征</h2><h2 id="splitting-in-decision-tree" tabindex="-1"><a class="header-anchor" href="#splitting-in-decision-tree" aria-hidden="true">#</a> Splitting in Decision Tree</h2><p>优先选择最具有信息量的特征进行分类, 以达到分裂后最大化信息增益(information gain, IG)的目的, 公式如下:</p>',5),y=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"I"),s("mi",null,"G"),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"D"),s("mi",null,"p")]),s("mo",{separator:"true"},","),s("mi",null,"f"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mi",null,"I"),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"D"),s("mi",null,"p")]),s("mo",{stretchy:"false"},")"),s("mo",null,"−"),s("munderover",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"j"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"m")]),s("mfrac",null,[s("msub",null,[s("mi",null,"N"),s("mi",null,"j")]),s("msub",null,[s("mi",null,"N"),s("mi",null,"p")])]),s("mi",null,"I"),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"D"),s("mi",null,"j")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," IG(D_p,f) = I(D_p) - \\sum_{j=1}^{m}\\frac{N_j}{N_p}I(D_j) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0361em","vertical-align":"-0.2861em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),s("span",{class:"mord mathnormal"},"G"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0278em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"p")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0361em","vertical-align":"-0.2861em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0278em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"p")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])]),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"3.0652em","vertical-align":"-1.4138em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.6514em"}},[s("span",{style:{top:"-1.8723em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.05em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",null,[s("span",{class:"mop op-symbol large-op"},"∑")])]),s("span",{style:{top:"-4.3em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"m")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.4138em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3603em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.109em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"p")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.109em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05724em"}},"j")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9721em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0278em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05724em"}},"j")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])]),s("span",{class:"mclose"},")")])])])])],-1),v=s("p",null,"其中,",-1),x=s("ol",null,[s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"f")]),s("annotation",{encoding:"application/x-tex"},"f")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f")])])]),a(" 要分裂的特征")]),s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"D"),s("mi",null,"p")])]),s("annotation",{encoding:"application/x-tex"},"D_p")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9694em","vertical-align":"-0.2861em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0278em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"p")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])])])])]),a(" 是父节点的数据集合")]),s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"D"),s("mi",null,"j")])]),s("annotation",{encoding:"application/x-tex"},"D_j")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9694em","vertical-align":"-0.2861em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0278em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05724em"}},"j")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])])])])]),a(" 是子节点的数据集合")]),s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"j"),s("mo",null,"−"),s("mi",null,"t"),s("mi",null,"h")]),s("annotation",{encoding:"application/x-tex"},"j-th")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.854em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal"},"h")])])]),a(" 子节点的顺位(没有固定顺序, 只是为了标明)")]),s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"I")]),s("annotation",{encoding:"application/x-tex"},"I")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I")])])]),a(" 杂质量(impurity measure)")]),s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"N"),s("mi",null,"p")])]),s("annotation",{encoding:"application/x-tex"},"N_p")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9694em","vertical-align":"-0.2861em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.109em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"p")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])])])])]),a(" is the total number of samples at the parent node")]),s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"N"),s("mi",null,"j")])]),s("annotation",{encoding:"application/x-tex"},"N_j")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9694em","vertical-align":"-0.2861em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.109em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05724em"}},"j")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])])])])]),a(" is the number of samples in the "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"j"),s("mo",null,"−"),s("mi",null,"t"),s("mi",null,"h")]),s("annotation",{encoding:"application/x-tex"},"j-th")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.854em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal"},"h")])])]),a(" child node.")])],-1),b=s("figure",null,[s("img",{src:r,alt:"alt text",tabindex:"0",loading:"lazy"}),s("figcaption",null,"alt text")],-1),f=s("p",null,"信息增益就是父节点的杂质量和子节点杂质量的差, 子节点杂质量越小, 信息增益越大.",-1),w=s("p",null,"✨为了简化和减少子节点的搜索空间, 很多库(包含scikit-learn)都是使用二叉决策树(binary decision tree), 这意味着父节点只分割成两个子节点, 左节点(D-left)和右节点(D-right).",-1),_=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"I"),s("mi",null,"G"),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"d"),s("mi",null,"p")]),s("mo",{separator:"true"},","),s("mi",null,"f"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mi",null,"I"),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"D"),s("mi",null,"p")]),s("mo",{stretchy:"false"},")"),s("mo",null,"−"),s("mfrac",null,[s("msub",null,[s("mi",null,"N"),s("mrow",null,[s("mi",null,"l"),s("mi",null,"e"),s("mi",null,"f"),s("mi",null,"t")])]),s("msub",null,[s("mi",null,"N"),s("mi",null,"p")])]),s("mi",null,"I"),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"D"),s("mrow",null,[s("mi",null,"l"),s("mi",null,"e"),s("mi",null,"f"),s("mi",null,"t")])]),s("mo",{stretchy:"false"},")"),s("mo",null,"−"),s("mfrac",null,[s("msub",null,[s("mi",null,"N"),s("mrow",null,[s("mi",null,"r"),s("mi",null,"i"),s("mi",null,"g"),s("mi",null,"h"),s("mi",null,"t")])]),s("msub",null,[s("mi",null,"N"),s("mi",null,"p")])]),s("mi",null,"I"),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"D"),s("mrow",null,[s("mi",null,"r"),s("mi",null,"i"),s("mi",null,"g"),s("mi",null,"h"),s("mi",null,"t")])]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," IG(d_p,f) = I(D_p) - \\frac{N_{left}}{N_p}I(D_{left}) - \\frac{N_{right}}{N_p}I(D_{right}) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0361em","vertical-align":"-0.2861em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),s("span",{class:"mord mathnormal"},"G"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"d"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"p")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0361em","vertical-align":"-0.2861em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0278em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"p")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])]),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.3324em","vertical-align":"-0.9721em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3603em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.109em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"p")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.109em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal mtight"},"e"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mord mathnormal mtight"},"t")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9721em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0278em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal mtight"},"e"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mord mathnormal mtight"},"t")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])]),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.3324em","vertical-align":"-0.9721em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3603em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.109em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"p")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.109em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mord mathnormal mtight"},"h"),s("span",{class:"mord mathnormal mtight"},"t")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9721em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0278em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mord mathnormal mtight"},"h"),s("span",{class:"mord mathnormal mtight"},"t")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])]),s("span",{class:"mclose"},")")])])])])],-1),k=s("h2",{id:"参考",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),a(" 参考")],-1),z=s("ol",null,[s("li",null,"https://medium.datadriveninvestor.com/the-basics-of-decision-trees-e5837cc2aba7"),s("li",null,"https://medium.com/analytics-vidhya/classification-in-decision-tree-a-step-by-step-cart-classification-and-regression-tree-8e5f5228b11e"),s("li",null,"https://arifromadhan19.medium.com/regrssion-in-decision-tree-a-step-by-step-cart-classification-and-regression-tree-196c6ac9711e")],-1),M=[c,h,o,g,u,d,y,v,x,b,f,w,_,k,z];function D(I,N){return n(),m("div",null,M)}const L=t(p,[["render",D],["__file","1树模型.html.vue"]]);export{L as default};
