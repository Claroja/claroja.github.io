import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as n,o as i,c as m,a as s,d as p,w as r,e as l,b as a}from"./app-SnI5rGHA.js";const c={},h=l('<h1 id="数据分析模型-聚类分析" tabindex="-1"><a class="header-anchor" href="#数据分析模型-聚类分析" aria-hidden="true">#</a> 数据分析模型_聚类分析</h1><ul><li>领会 <ul><li>用户细分与聚类的关系</li><li>聚类分析的基本概念</li></ul></li><li>熟知 <ul><li>聚类模型的评估方法</li><li>聚类方法的基本逻辑，涉及层次聚类、kmeans聚类</li><li>层次聚类和 K-Means 聚类的基本算法和优缺点</li><li>层次聚类的计算步骤，包括两点距离、两类合并的计算方法</li><li>K-Means 聚类的基本算法</li><li>聚类分析变量标准化的原因和计算方法</li><li>变量需要进行主成分分析的原因</li><li>距离的计算</li></ul></li><li>应用 <ul><li>结合客户画像、客户细分、商品聚类、离群值检验（欺诈、反洗钱）等业务运用场景，选取合适的聚类方法与步骤。</li><li>聚类事后分析，根据聚类后变量分布情况获取每类的特征。</li></ul></li></ul><h2 id="考点-其他" tabindex="-1"><a class="header-anchor" href="#考点-其他" aria-hidden="true">#</a> 考点: 其他</h2><ul><li>🟢(单选题)在聚类分析中，以下哪个方法适用于处理具有噪声的数据？<br> A、K-Means聚类<br> B、层次聚类<br> C、DBSCAN聚类<br> D、高斯混合模型聚类</li></ul><p>正确答案：C</p><p>解析：DBSCAN(Density-Based Spatial Clustering of Applications withNoise)聚类是一种密度聚类方法，它可以处理具有噪声的数据。DBSCAN聚类将数据点分为核心点、边界点和噪声点三种类型，噪声点会被忽略，只有核心点和边界点才会被聚类。相比之下，K-Means聚类和高斯混合模型聚类都是基于距离的聚类方法，对于具有噪声的数据，聚类效果可能不佳。层次聚类也不太适合处理具有噪声的数据，因为它会在每个层次上尝试将所有数据点分组，而噪声点的存在可能会干扰聚类结果。</p><h2 id="kmeans" tabindex="-1"><a class="header-anchor" href="#kmeans" aria-hidden="true">#</a> kmeans</h2><ul><li><p>🟢(单选题)对于K-means算法，描述正确的是( )。<br> A、需要对数据进行标准化<br> B、不需要对数据进行预处理<br> C、模型自动确定k值<br> D、可以直接使用分类型变量</p><p>答案:A</p></li><li><p>🔴(单选题)对于K-means算法，描述错误的是( )。<br> A、🔴该算法与样本数量线性相关，所以适合大数据集<br> B、需要事先确定k值<br> C、对异常值不敏感<br> D、算法效率较高，伸缩性较好</p><p>答案:C</p></li><li><p>🟢(单选题)下列对K-means算法的算法原理描述错误的是()。<br> A、K-means算法用计算均值的方法获得簇的中心点<br> B、K-means算法会把每个点划分到离该点最近的中心点<br> C、K-means是一个迭代的算法<br> D、K-means会取离每个点距离最近的几个中心点进行簇的划分</p><p>答案:D 解析：D应为取每个点距离最近的中心点进行簇的划分</p></li><li><p>🟢(单选题)关于K-means聚类算法，下面说法错误的是()。<br> A、K-means算法中的k是一个超参数，需要人为输入来确定<br> B、簇中所有数据的均值通常被称为这个簇的“质心”<br> C、直到簇不再发生变化或达到最大迭代次数，K-means算法才停止寻找新的质心<br> D、质心越多越好</p><p>答案:D</p></li></ul><h2 id="聚类概念" tabindex="-1"><a class="header-anchor" href="#聚类概念" aria-hidden="true">#</a> 聚类概念</h2><ul><li><p>🟢(单选题)某公司为了更好地进行用户留存，需建立用户行为画像，可用以下( )算法实现。<br> A、聚类算法<br> B、多元线性回归算法<br> C、决策树算法<br> D、朴素贝叶斯算法</p><p>答案:A</p></li><li><p>🔴(单选题)小A针对产品特征进行了一次聚类分析，结果并不理想，以下()方法最有利于获得更有效的聚类结果。 A、标准化 B、主成分分析 C、因子分析 D、以上都不是 答案:C , 选项A的标准化一般是聚类分析之前要做的工作。因子分析覆盖标准化和主成分分析，不但具有降维作用，还能辅助建模人员对变量进行业务层面的理解，因此本题选C。</p></li><li><p>🟢(单选题)关于聚类和分类的描述错误的是()。<br> A、聚类的典型算法包括K-means、DBSCAN、层次聚类、光谱聚类<br> B、分类的典型算法包括决策树、贝叶斯、逻辑回归<br> C、聚类结果一定总是能够反映数据的真实分类<br> D、分类模型的预测能力优于聚类模型的预测能力</p><p>答案:C</p></li><li><p>🔴(多选题)以下属于聚类应用场景的是( )。<br> A、对电影网站中相似的电影进行聚类，从而帮助划分电影类型<br> B、挖掘用户群可以划分为哪些群体<br> C、人脸识别<br> D、购物篮分析</p><p>答案:AB</p></li><li><p>🟢(多选题)按照远近程度来聚类需要明确哪两个距离？()<br> A、点和点之间的距离<br> B、类和类之间的距离<br> C、欧式距离<br> D、兰氏距离</p><p>答案:AB</p></li></ul><h2 id="层次聚类" tabindex="-1"><a class="header-anchor" href="#层次聚类" aria-hidden="true">#</a> 层次聚类</h2><h3 id="考点-ward法" tabindex="-1"><a class="header-anchor" href="#考点-ward法" aria-hidden="true">#</a> 考点: Ward法</h3>',12),o=s("p",null,"参考",-1),u=s("li",null,[s("p",null,"内容"),s("ol",null,[s("li",null,"遍历所有组合可能(第一阶段是将将两个独立的组合成1簇, 在组合成1簇的基础上继续添加独立的点)"),s("li",null,[a("分别计算组合的组内离差平方和"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"x"),s("mn",null,"1")]),s("mo",null,"−"),s("mover",{accent:"true"},[s("mi",null,"x"),s("mo",{stretchy:"true"},"‾")]),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mn",null,"2")]),s("mo",null,"+"),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"x"),s("mn",null,"2")]),s("mo",null,"−"),s("mover",{accent:"true"},[s("mi",null,"x"),s("mo",{stretchy:"true"},"‾")]),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mn",null,"2")]),s("mo",null,"+"),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"y"),s("mn",null,"1")]),s("mo",null,"−"),s("mover",{accent:"true"},[s("mi",null,"y"),s("mo",{stretchy:"true"},"‾")]),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mn",null,"2")]),s("mo",null,"+"),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"y"),s("mn",null,"2")]),s("mo",null,"−"),s("mover",{accent:"true"},[s("mi",null,"y"),s("mo",{stretchy:"true"},"‾")]),s("msup",null,[s("mi",null,"l"),s("mn",null,"2")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"(x_1 - \\overline{x})^2 + (x_2 - \\overline{x})^2 + (y_1 - \\overline{y})^2 +(y_2 - \\overline{y}l^2)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord overline"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6306em"}},[s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x")])]),s("span",{style:{top:"-3.5506em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"overline-line",style:{"border-bottom-width":"0.04em"}})])])])])]),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord overline"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6306em"}},[s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x")])]),s("span",{style:{top:"-3.5506em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"overline-line",style:{"border-bottom-width":"0.04em"}})])])])])]),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord overline"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6306em"}},[s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y")])]),s("span",{style:{top:"-3.5506em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"overline-line",style:{"border-bottom-width":"0.04em"}})])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1944em"}},[s("span")])])])]),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord overline"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6306em"}},[s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y")])]),s("span",{style:{top:"-3.5506em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"overline-line",style:{"border-bottom-width":"0.04em"}})])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1944em"}},[s("span")])])])]),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mclose"},")")])])])]),s("li",null,"选取最小的")])],-1),g=s("li",null,[s("p",null,"题目:"),s("ul",null,[s("li",null,[s("p",null,[a("🟢(单选题)在系统聚类方法中，哪种系统聚类直接利用了组内的离差平方和？()"),s("br"),a(" A、最长距离法"),s("br"),a(" B、重心法"),s("br"),a(" C、Ward法"),s("br"),a(" D、类平均法")]),s("p",null,"答案:C")])])],-1),y=l('<h2 id="考点-聚类评估" tabindex="-1"><a class="header-anchor" href="#考点-聚类评估" aria-hidden="true">#</a> 考点: 聚类评估</h2><ul><li><p>内容:</p><p>评估方法:</p><ul><li>轮廓系数</li><li>平方根标准误差</li><li>R-Square</li><li>ARI</li></ul></li><li><p>🔴(单选题)聚类算法的主要应用场景是用户分群，聚类是一种无监督方法，以下哪个不是衡量聚类效果好坏的评估方法（）。<br> A、轮廓系数<br> B、平方根标准误差<br> C、ARI（调整的兰德系数）<br> D、相关系数</p><p>正确答案：D,页码336。聚类是一种无监督方法，无因变量，其效果好坏难以在建模时使用有监督模型的评估方法衡量。不过可以在建模之后，通过外部数据验正聚类效果的好坏。比如，将聚类后的标签作为以下哪个选项更贴近您的问题选项上用户自己填写，然后用准确度或八凡等指标进行评估。不过这样做的成本较高，也有一些低成本、精确度尚可的指标用于衡量聚类效果，其思想在于类簇内的差异尽可能小，而类间的差异尽可能大。评估聚类模型优劣的主要标准有轮廓系数、平方根标准误差、A凡I等。因此只有选项D不是。</p></li></ul>',2),d=s("h3",{id:"考点",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#考点","aria-hidden":"true"},"#"),a(" 考点: "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",null,"R"),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"},"R^2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])])],-1),b=s("ul",null,[s("li",null,[s("p",null,"内容"),s("p",null,[a("聚类的"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",null,"R"),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"},"R^2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])]),a("和方差分析的"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",null,"R"),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"},"R^2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])]),a("含义一致:")]),s("ul",null,[s("li",null,"WS(组内平方和 within-group square), 方差分析中写作SSE"),s("li",null,"BS(组间平方和 between-group square), 方差分析中写作SSA")]),s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"T"),s("mo",null,"="),s("mi",null,"W"),s("mi",null,"S"),s("mo",null,"+"),s("mi",null,"B"),s("mi",null,"S"),s("mspace",{linebreak:"newline"}),s("mi",null,"S"),s("mi",null,"S"),s("mi",null,"T"),s("mo",null,"="),s("mi",null,"S"),s("mi",null,"S"),s("mi",null,"E"),s("mo",null,"+"),s("mi",null,"S"),s("mi",null,"S"),s("mi",null,"A")]),s("annotation",{encoding:"application/x-tex"}," T = WS + BS \\\\ SST = SSE + SSA ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"W"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"BS")]),s("span",{class:"mspace newline"}),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"SST"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"SSE"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"SS"),s("span",{class:"mord mathnormal"},"A")])])])])]),s("p",null,[a("注意和线性回归判定系数"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",null,"R"),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"},"R^2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])]),a("区分:")]),s("ul",null,[s("li",null,[a("SSE表示"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mover",{accent:"true"},[s("mi",null,"y"),s("mo",null,"^")]),s("mo",null,"−"),s("mi",null,"y")]),s("annotation",{encoding:"application/x-tex"},"\\hat{y}-y")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord accent"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6944em"}},[s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y")]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"accent-body",style:{left:"-0.1944em"}},[s("span",{class:"mord"},"^")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1944em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y")])])]),a("随机误差")]),s("li",null,[a("SSR表示"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mover",{accent:"true"},[s("mi",null,"y"),s("mo",null,"^")]),s("mo",null,"−"),s("mover",{accent:"true"},[s("mi",null,"y"),s("mo",{stretchy:"true"},"‾")])]),s("annotation",{encoding:"application/x-tex"},"\\hat{y}-\\overline{y}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord accent"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6944em"}},[s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y")]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"accent-body",style:{left:"-0.1944em"}},[s("span",{class:"mord"},"^")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1944em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.825em","vertical-align":"-0.1944em"}}),s("span",{class:"mord overline"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6306em"}},[s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y")])]),s("span",{style:{top:"-3.5506em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"overline-line",style:{"border-bottom-width":"0.04em"}})])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1944em"}},[s("span")])])])])])])]),a("回归误差")])]),s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"S"),s("mi",null,"S"),s("mi",null,"T"),s("mo",null,"="),s("mi",null,"S"),s("mi",null,"S"),s("mi",null,"E"),s("mo",null,"+"),s("mi",null,"S"),s("mi",null,"S"),s("mi",null,"R")]),s("annotation",{encoding:"application/x-tex"}," SST = SSE + SSR ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"SST"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"SSE"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"SSR")])])])])])]),s("li",null,[s("p",null,"题目:"),s("ul",null,[s("li",null,[s("p",null,[a("🟢(多选题)使用聚类分析区分用户的类型，在评估聚类结果时，()。"),s("br"),a(" A、组间平方和BS越大，聚类效果越好"),s("br"),a(" B、组间平方和BS越小，聚类效果越好"),s("br"),a(" C、组内平方和WS越大，聚类效果越好"),s("br"),a(" D、组内平方和wS越小，聚类效果越好")]),s("p",null,"答案:AD")]),s("li",null,[s("p",null,[a("🟢(单选题)如果不考虑外部信息，聚类结构的优良性度量应当采用"),s("br"),a(" A、中位数"),s("br"),a(" B、均方差"),s("br"),a(" C、平均数"),s("br"),a(" D、离散系数")]),s("p",null,"正确答案：B")]),s("li",null,[s("p",null,[a("🟢(单选题)聚类算法的主要应用场景是用户分群，在聚类算法中通过距离来衡量差异，现有点A观测坐标(2,3),点B观测坐标(5，-1)，则A与B的欧氏距离是（）。"),s("br"),a(" A、4"),s("br"),a(" B、5"),s("br"),a(" C、6"),s("br"),a(" D、7")])])]),s("p",null,"正确答案：B"),s("ul",null,[s("li",null,"(单选题)聚类算法的主要应用场景是用户分群，在聚类算法中通过距离来衡量差异，现有点A观测坐标(2,3),点B观测坐标(5，-1)，则A与B曼哈顿距离是（）。 A、4 B、5 C、6 D、7")]),s("p",null,"正确答案：D")])],-1);function v(x,S){const t=n("RouterLink");return i(),m("div",null,[h,s("ul",null,[s("li",null,[o,s("p",null,[p(t,{to:"/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/%E8%81%9A%E7%B1%BB%E6%96%B9%E6%B3%95/%E5%B1%82%E6%AC%A1%E8%81%9A%E7%B1%BB(hierarchical_clustering).html#Ward%E6%B3%95"},{default:r(()=>[a("层次聚类(hierarchical_clustering)")]),_:1})])]),u,g]),y,d,b])}const A=e(c,[["render",v],["__file","6_5聚类分析.html.vue"]]);export{A as default};
