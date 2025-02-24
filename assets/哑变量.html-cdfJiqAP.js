import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as a,c as n,a as t,b as o,d as p,e as h}from"./app-A10JnHE0.js";const c={},s=h('<h1 id="哑变量" tabindex="-1"><a class="header-anchor" href="#哑变量" aria-hidden="true">#</a> 哑变量</h1><p>在进行数据建模和分析时，连续变量可以以原始数据的形式输入到模型中，例如身高和体重，它们的回归系数代表自变量增加一个单位时因变量的平均变化。 而在处理分类变量时, 无序多分类要进入模型前，一定要进行哑变量处理。</p><p>哑变量（Dummy Variable），也叫虚拟变量，引入哑变量的目的是，将不能够定量处理的变量量化，在线性回归分析中引入哑变量的目的是，可以考察定性因素对因变量的影响， 它是人为虚设的变量，通常取值为0或1，来反映某个变量的不同属性。对于有n个分类属性的自变量，通常需要选取1个分类作为参照，因此可以产生n-1个哑变量。</p><p>如何确定哑变量个数</p><p>在最初的定义中我们提到，对于有n个分类的自变量，需要产生n-1个哑变量。</p><p>为何如此？同样，我们用一个例子——职业——来帮助理解。</p><p>我们可以将“职业因素 ”，分为“学生、农民、工人、公务员、其他 ”这5类，相应可以产生4（5-1）个哑变量，具体的赋值情况便是：</p><table><thead><tr><th>职业因素</th><th>D1</th><th>D2</th><th>D3</th><th>D4</th></tr></thead><tbody><tr><td>学生</td><td>1</td><td>0</td><td>0</td><td>0</td></tr><tr><td>农民</td><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>工人</td><td>0</td><td>0</td><td>1</td><td>0</td></tr><tr><td>公务员</td><td>0</td><td>0</td><td>0</td><td>1</td></tr><tr><td>其他</td><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table><p>具体来说，对于有5类的职业因素变量，我们对其设置了4个哑变量：</p><p>D1哑变量（1代表学生/0代表学生）；</p><p>D2哑变量（1代表农民/0代表非农民）；</p><p>D3哑变量（1代表工人/0代表工人）；</p><p>D4哑变量（1代表公务员/0代表非公务员）。</p><p>这时候就不用再设置一个新变量了，因为总共只有5个分类，如果非学生、非农民、非工人、非公务员，那就是其他了，所以，其他（D1=0，D2=0，D3=0，D4=0）。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',15),l={href:"https://zhuanlan.zhihu.com/p/631464481",target:"_blank",rel:"noopener noreferrer"};function _(i,m){const d=r("ExternalLinkIcon");return a(),n("div",null,[s,t("p",null,[t("a",l,[o("基础知识：什么是哑变量？怎么用？"),p(d)])])])}const u=e(c,[["render",_],["__file","哑变量.html.vue"]]);export{u as default};
