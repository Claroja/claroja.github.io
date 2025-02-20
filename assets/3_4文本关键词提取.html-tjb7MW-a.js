import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as e,a,b as s}from"./app-9tftCahk.js";const n="/assets/RCF-w89naJF_.png",i={},m=a('<ol><li>根据TF、DF及IDF的关键词提取方法</li><li>根据词性的关键词提取方法</li><li>根据文章结构的关键词提取方法</li><li>关键词的可视化-文字云</li></ol><h2 id="tf-idf" tabindex="-1"><a class="header-anchor" href="#tf-idf" aria-hidden="true">#</a> TF-IDF</h2><p>自动建构关键词的方法常采用Inverse Document Frequency(IDF）的方式行之</p><ol><li>IDF = log2(N/n)</li><li>N是指有多少篇文章(N=5)</li><li>n (=DF)是指某个词出现在多少篇文章中</li></ol><p>IDF代表着信息量，由IDF的大小我们可以得知一个词的重要程度</p><ol><li>IDF越大代表这个词越重要，也越是我们想要的关键词</li><li>IDF越小代表这个词的索引价值也越低</li></ol><p>在向量空间模型中，每一个文件(Document)及查询(Query)表示成N维空间坐标上的点，每一个维度代表一个关键词，在它维度上的值是根据关键词的 TF*关键词的 IDF来得到</p><p>Weight = TF * IDF</p><ol><li>Weight的值越大代表这个词越重要，也越是我们想要的关键词</li><li>Weight的值越小代表这个词的索引价值也越低</li></ol><p>词频TF衡量了一个词在文档中出现的频率, 出现频率越高则表示这个词越重要.</p>',10),c=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"T"),s("mi",null,"F"),s("mo",null,"="),s("mfrac",null,[s("mtext",null,"词在文档中出现的次数"),s("mtext",null,"文档的总词数")])]),s("annotation",{encoding:"application/x-tex"}," TF = \\frac{词在文档中出现的次数}{文档的总词数} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"TF"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.0463em","vertical-align":"-0.686em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3603em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord cjk_fallback"},"文档的总词数")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord cjk_fallback"},"词在文档中出现的次数")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])])],-1),p=s("p",null,"向文件频率IDF则表示此在文档中的分布状况, 如果一个词集中出现在某些文档，则这个词就越重要.",-1),r=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"I"),s("mi",null,"D"),s("mi",null,"F"),s("mo",null,"="),s("mi",null,"l"),s("mi",null,"o"),s("msub",null,[s("mi",null,"g"),s("mn",null,"10")]),s("mfrac",null,[s("mtext",null,"文档总数"),s("mtext",null,"包含该词的文档数")])]),s("annotation",{encoding:"application/x-tex"}," IDF = log_{10}\\frac{文档总数}{包含该词的文档数} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"F"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.0463em","vertical-align":"-0.686em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"10")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3603em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord cjk_fallback"},"包含该词的文档数")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord cjk_fallback"},"文档总数")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])])],-1),o=a('<p>TF×IDF值越大，则这个词成为一个关键词的概率就越大</p><h2 id="rcf" tabindex="-1"><a class="header-anchor" href="#rcf" aria-hidden="true">#</a> RCF</h2><figure><img src="'+n+'" alt="RCF" tabindex="0" loading="lazy"><figcaption>RCF</figcaption></figure><h2 id="文本特征的选取" tabindex="-1"><a class="header-anchor" href="#文本特征的选取" aria-hidden="true">#</a> 文本特征的选取</h2><p>特征选取方式常见的有3种</p><ol><li>据领域专家的知识挑选最有影响的特征</li><li>用数学的方法从原始特征中挑选出一些最具分类信息的特征，这种方法是一种比较精确的方法，人为因素的干扰较少，尤其适合于文本自动分类挖掘系统的应用</li><li>如特征项太过稀疏，或者多词一意等状况，可用映射或变换的方法把原始特征变换为较少的新特征</li></ol>',6),h=[m,c,p,r,o];function d(g,u){return t(),e("div",null,h)}const f=l(i,[["render",d],["__file","3_4文本关键词提取.html.vue"]]);export{f as default};
