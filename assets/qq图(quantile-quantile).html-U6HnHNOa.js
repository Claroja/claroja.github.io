import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as i,c as s,a as e,b as a,d as n,e as l}from"./app-YE2Hltoy.js";const c="/assets/1-Z_Ig_cSo.png",h="/assets/2-RNfRIQu3.png",_={},d=l('<h1 id="qq图-quantile-quantile" tabindex="-1"><a class="header-anchor" href="#qq图-quantile-quantile" aria-hidden="true">#</a> qq图(quantile-quantile)</h1><p>将一组数据的分位值做x轴, 将另一组数据的分位置做y轴</p><h2 id="正态qq图" tabindex="-1"><a class="header-anchor" href="#正态qq图" aria-hidden="true">#</a> 正态QQ图</h2><p>Q-Q图是一种散点图，横坐标为某一样本的分位数，纵坐标为另一样本的分位数，横坐标和纵坐标组成的散点图代表同一累计概率所对应的分位数。若散点图在直线y=x附近分布，则这两个样本是同等分布；若横坐标样本为标准正态分布并且散点图在直线y=x附近分布，则纵坐标样本符合正态分布，并且直线斜率代表样本标准差，截距代表样本均值。</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如上图左上角图为某一数据的累计概率分布函数，右上角为标准正态分布的累计概率分布函数，对上述两图取同一个累计概率值对应的分位数，绘制散点图，由图可知，数据符合正态分布，斜率和截距分别代表数据的标准差和均值。</p><h2 id="简单qq图" tabindex="-1"><a class="header-anchor" href="#简单qq图" aria-hidden="true">#</a> 简单QQ图</h2><p>普通Q-Q图用于评估两个数据集的分布的相似程度，如上节所说，若散点图在直线y=x附近，则两个数据集的分布类似。普通Q-Q图与正态Q-Q图的不同点在于普通Q-Q图的横坐标是未知数据集的分位数，正态Q-Q图的横坐标是标准正态分布的分位数，其他步骤都一样。</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>由上图可知，散点图没有接近一条直线，因此数据集1和数据集2来自不同的分布集。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',11),p={href:"https://zhuanlan.zhihu.com/p/661198241",target:"_blank",rel:"noopener noreferrer"},u={href:"https://stats.libretexts.org/Bookshelves/Introductory_Statistics/Introductory_Statistics_(Lane)/08%3A_Advanced_Graphs/8.01%3A_Q-Q_Plots",target:"_blank",rel:"noopener noreferrer"},q={href:"https://zhuanlan.zhihu.com/p/53124278",target:"_blank",rel:"noopener noreferrer"},f={href:"https://desktop.arcgis.com/zh-cn/arcmap/latest/extensions/geostatistical-analyst/normal-qq-plot-and-general-qq-plot.htm",target:"_blank",rel:"noopener noreferrer"};function Q(g,m){const t=o("ExternalLinkIcon");return i(),s("div",null,[d,e("ul",null,[e("li",null,[e("a",p,[a("分位数-分位数图"),n(t)])]),e("li",null,[e("a",u,[a("Q-Q_Plots"),n(t)])]),e("li",null,[e("a",q,[a("Q-Q图"),n(t)])]),e("li",null,[e("a",f,[a("qq-plot"),n(t)])])])])}const k=r(_,[["render",Q],["__file","qq图(quantile-quantile).html.vue"]]);export{k as default};
