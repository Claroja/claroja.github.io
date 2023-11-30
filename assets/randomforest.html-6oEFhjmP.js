import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as l,e as a,a as s}from"./app-0JgdiRQ-.js";const n="/assets/1-cFSLIoe-.png",i="/assets/2-b-9jqu8V.gif",m="/assets/3-jIpFB_5n.png",r="/assets/4-fdIa4LL7.gif",o="/assets/5-3Zp1s5le.png",c="/assets/6-tTdKOlxQ.png",p="/assets/7-HrB9PoCe.png",h="/assets/8-ZioJZbiP.png",d="/assets/9-DzsVqOhh.png",u="/assets/10-DjfjQOO5.png",g="/assets/11-f97xghOg.png",y="/assets/12-nv1uDKEw.png",w="/assets/13-8uJABH5H.png",b="/assets/14-e2pxB0ts.png",f="/assets/15--sS--hQ-.png",v={},x=a('<h1 id="randomforest" tabindex="-1"><a class="header-anchor" href="#randomforest" aria-hidden="true">#</a> randomforest</h1><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ol><li>随机抽取样本，建立和初始数据集一样大小的样本集合，这个过程叫做<code>bootstrapped</code></li><li>使用<code>bootstrapped dataset</code>，但仅仅使用随机的特征构建树</li><li>将多课树的结果进行分类打分，求最终的结果。</li><li>缺失值的处理</li></ol><ul><li>首先进行差值</li><li>根据多课树预测结果，将相同的预测结果样本放在一起，然后用再权重来评估。</li></ul><h2 id="推演" tabindex="-1"><a class="header-anchor" href="#推演" aria-hidden="true">#</a> 推演</h2><p>Decision Trees are easy to build, easy to use and easy to interpret but in practice they are not that awesome. In other words, they work great with the data used to create them, but they are not flexible when it comes to classifying new samples. The good news is that <code>random froests</code> combine the simplicity of decision trees with flexibility resulting in a vast improvement in accuracy.</p><h2 id="step1-create-a-bootstrapped-dataset" tabindex="-1"><a class="header-anchor" href="#step1-create-a-bootstrapped-dataset" aria-hidden="true">#</a> Step1: Create a &quot;bootstrapped&quot; dataset</h2><p>Imagine that these 4 samples are the entire dataset that we are going to build a tree from. To create a bootstrapped dataset that is the same size as the original, we just randomly select samples from the original dataset. The import detail is that we&#39;re allowed to pick the same sample more than once. <img src="'+n+'" alt="" loading="lazy"> NOTE: the third sample is same as the forth sample.</p><h2 id="step2-create-a-decision-tree-using-the-bootstrapped-dataset-but-only-use-a-random-subset-of-variable-columns-at-each-step" tabindex="-1"><a class="header-anchor" href="#step2-create-a-decision-tree-using-the-bootstrapped-dataset-but-only-use-a-random-subset-of-variable-columns-at-each-step" aria-hidden="true">#</a> Step2: Create a decision tree using the bootstrapped dataset, but only use a random subset of variable(columns) at each step.</h2><p>In this example, we will only consider 2 variables(columns) at each step. And we just build the tree as usual, but only considering a random subset of variables at each step. <img src="'+i+'" alt="" loading="lazy"></p><p>Now go back to step 1 and repeat:Make a new bootStrapped dataset and build a tree considering a subset of variables at each step. <img src="'+m+'" alt="" loading="lazy"></p><h2 id="predict" tabindex="-1"><a class="header-anchor" href="#predict" aria-hidden="true">#</a> predict</h2><p><img src="'+r+'" alt="" loading="lazy"> Bootstrapping the data plus using the aggregate to make a decision is called &quot;Bagging&quot;</p><h2 id="missing-data-and-clustering" tabindex="-1"><a class="header-anchor" href="#missing-data-and-clustering" aria-hidden="true">#</a> Missing data and clustering</h2><p><code>Random Forests</code> consider 2 types of missing data:</p><ol><li>Missing data in the original dataset used to create the random forest.</li><li>Missing data in a new sample that we want to categorize.</li></ol><h3 id="initial-guess" tabindex="-1"><a class="header-anchor" href="#initial-guess" aria-hidden="true">#</a> initial guess</h3><p>The general idea for dealing with missing data in this context is to make an initial guess that could be bad, then gradually refine the guess until it is a good guess. <img src="'+o+'" alt="" loading="lazy"> Because this person did not have <code>heart disease</code>, the initial, and possibly bad, guess for the <code>blocked arteries</code> value is just the most common value for <code>Blocked Arteries</code> found in the other samples that do not have <code>Heart Disease</code>. Among the people that do not have <code>Heart Idsease</code>, <code>No</code> is the most common value for <code>Blocked arteries</code> it occurs in 2 out of 2 samples. So <code>No</code> is our initial guess. <img src="'+c+'" alt="" loading="lazy"> Since <code>weight</code> is numeric, our initial guess will be the median value of the patients that did not have <code>heart disease</code>. <img src="'+p+'" alt="" loading="lazy"></p><h3 id="refine-guess" tabindex="-1"><a class="header-anchor" href="#refine-guess" aria-hidden="true">#</a> refine guess</h3><p>We do this by first determining which samples are similar to the one with missing data. So let&#39;s talk about how to determine similarity.</p><ol><li>Step1: Build a random forest</li><li>Stpe2: Run all of the data down all of the trees.</li></ol><p>we run it in the first tree, and notice that sample 3 and sample 4 both ended up at the same leaf node. That means they are similar. <img src="'+h+'" alt="" loading="lazy"></p><p>We keep track of similar samples using a &quot;Proximity Matrix&quot;, the &quot;Proximity Matrix&quot; has a row for each sample and it has a column for each sample. Because sample 3 and sample 4 ended up in the same leaf node. <img src="'+d+'" alt="" loading="lazy"> Ultimately, we run the data down all the trees and the proximity matrix fills in. <img src="'+u+'" alt="" loading="lazy"> Then we divide each proximity value by the total number of trees. In this example, assume we had 10 trees. <img src="'+g+'" alt="" loading="lazy"> Now we use the proximity values for sample 4 to make better guesses about the missing data. For <code>blocked arteries</code>, we calculate the weighted frequency of &quot;Yes&quot; and &quot;No&quot;, using proximity values as the weights.</p>',23),_=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"Y"),s("mi",null,"E"),s("mi",null,"S"),s("mo",null,"="),s("mn",null,"1"),s("mi",{mathvariant:"normal"},"/"),s("mn",null,"3")]),s("annotation",{encoding:"application/x-tex"}," YES = 1/3 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"ES"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1/3")])])])])],-1),k=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"N"),s("mi",null,"O"),s("mo",null,"="),s("mn",null,"2"),s("mi",{mathvariant:"normal"},"/"),s("mn",null,"3")]),s("annotation",{encoding:"application/x-tex"}," NO = 2/3 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"NO"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"2/3")])])])])],-1),S=s("p",null,'THe weighted frequency for "Yes" is',-1),q=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"Y"),s("mi",null,"E"),s("mi",null,"S"),s("mo",null,"="),s("mi",{mathvariant:"normal"},'"'),s("mi",null,"Y"),s("mi",null,"E"),s("mi",null,"S"),s("mi",{mathvariant:"normal"},'"'),s("mi",null,"w"),s("mi",null,"e"),s("mi",null,"i"),s("mi",null,"g"),s("mi",null,"h"),s("mi",null,"t"),s("mi",null,"e"),s("mi",null,"d"),s("mi",null,"f"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"q"),s("mi",null,"u"),s("mi",null,"e"),s("mi",null,"n"),s("mi",null,"c"),s("mi",null,"y"),s("mo",null,"⋅"),s("mfrac",null,[s("mrow",null,[s("mi",null,"P"),s("mi",null,"r"),s("mi",null,"o"),s("mi",null,"x"),s("mi",null,"i"),s("mi",null,"m"),s("mi",null,"i"),s("mi",null,"t"),s("mi",null,"y"),s("mi",null,"o"),s("mi",null,"f"),s("mi",{mathvariant:"normal"},'"'),s("mi",null,"Y"),s("mi",null,"E"),s("mi",null,"S"),s("mi",{mathvariant:"normal"},'"')]),s("mrow",null,[s("mi",null,"A"),s("mi",null,"l"),s("mi",null,"l"),s("mi",null,"P"),s("mi",null,"r"),s("mi",null,"o"),s("mi",null,"x"),s("mi",null,"i"),s("mi",null,"m"),s("mi",null,"i"),s("mi",null,"t"),s("mi",null,"i"),s("mi",null,"e"),s("mi",null,"s")])]),s("mo",null,"="),s("mfrac",null,[s("mn",null,"1"),s("mn",null,"3")]),s("mo",null,"⋅"),s("mfrac",null,[s("mn",null,"0.1"),s("mrow",null,[s("mn",null,"0.1"),s("mo",null,"+"),s("mn",null,"0.1"),s("mo",null,"+"),s("mn",null,"0.8")])]),s("mo",null,"="),s("mn",null,"0.03")]),s("annotation",{encoding:"application/x-tex"},' YES="YES" weighted frequency \\cdot \\frac{Proximity of "YES"}{All Proximities} = \\frac{1}{3} \\cdot \\frac{0.1}{0.1+0.1+0.8} = 0.03 ')])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"ES"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},'"'),s("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"ES"),s("span",{class:"mord"},'"'),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"df"),s("span",{class:"mord mathnormal"},"re"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"q"),s("span",{class:"mord mathnormal"},"u"),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"cy"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⋅"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.0574em","vertical-align":"-0.686em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3714em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"A"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"llP"),s("span",{class:"mord mathnormal"},"ro"),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mord mathnormal"},"imi"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"es")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mord mathnormal"},"ro"),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mord mathnormal"},"imi"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal"},"yo"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mord"},'"'),s("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"ES"),s("span",{class:"mord"},'"')])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.0074em","vertical-align":"-0.686em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3214em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"3")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⋅"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.0908em","vertical-align":"-0.7693em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3214em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"0.1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"0.1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"0.8")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"0.1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7693em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0.03")])])])])],-1),z=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"N"),s("mi",null,"O"),s("mo",null,"="),s("mfrac",null,[s("mn",null,"2"),s("mn",null,"3")]),s("mo",null,"⋅"),s("mfrac",null,[s("mrow",null,[s("mn",null,"0.1"),s("mo",null,"+"),s("mn",null,"0.8")]),s("mrow",null,[s("mn",null,"0.1"),s("mo",null,"+"),s("mn",null,"0.1"),s("mo",null,"+"),s("mn",null,"0.8")])]),s("mo",null,"="),s("mn",null,"0.6")]),s("annotation",{encoding:"application/x-tex"}," NO = \\frac{2}{3} \\cdot \\frac{0.1+0.8}{0.1+0.1+0.8} = 0.6 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"NO"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.0074em","vertical-align":"-0.686em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3214em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"3")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⋅"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.0908em","vertical-align":"-0.7693em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3214em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"0.1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"0.1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"0.8")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"0.1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"0.8")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7693em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0.6")])])])])],-1),M=a('<p><code>No</code> has a way higher weighted frequency, so we&#39;ll go with it. <img src="'+y+'" alt="" loading="lazy"></p><p>For weight, we use the proximities to calculate a weighted average. <img src="'+w+'" alt="" loading="lazy"></p><h2 id="missing-data-in-a-new-sample-that-we-want-to-categorize" tabindex="-1"><a class="header-anchor" href="#missing-data-in-a-new-sample-that-we-want-to-categorize" aria-hidden="true">#</a> Missing data in a new sample that we want to categorize</h2><p>Imagine we had already build a <code>random forest</code> with existing data and wanted to classify this new patient. <img src="'+b+'" alt="" loading="lazy"> The first thing we do is create two copies of the data, one that has heart disease and onw that doesn&#39;t have heart disease. Then we use the iterative method we just talked about to make good guess about the missing values. <img src="'+f+'" alt="" loading="lazy"> Then we run the two samples down the trees in the forest and we see which of the two is correctly labeled by the random forest the most times.</p><p>refs: https://www.youtube.com/watch?v=J4Wdy0Wc_xQ&amp;t=412s https://www.youtube.com/watch?v=sQ870aTKqiM</p>',5),E=[x,_,k,S,q,z,M];function N(B,T){return t(),l("div",null,E)}const P=e(v,[["render",N],["__file","randomforest.html.vue"]]);export{P as default};
