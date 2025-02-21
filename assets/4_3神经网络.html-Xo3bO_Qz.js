import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,e as t,a as s,b as a}from"./app-jdLxCr9I.js";const p="/assets/感知机-Al_lWHf8.png",r="/assets/ANDGate-G7z208eW.png",o="/assets/NANDGate-MeGyCJQC.png",c="/assets/XORGate-7oA69i1N.png",m="/assets/非线性-mpN0__sx.png",g="/assets/多层感知机-GbHLq_KG.png",h="/assets/多层感知机2-mm6rN61L.png",l="/assets/多层感知机3-8Ve6BgTX.png",u="/assets/BP神经网络-n-1a3phN.png",d="/assets/BP神经网络2-X4wcjm65.png",f="/assets/多层感知机4-C8X2bjT0.png",y="/assets/多层感知机5-O8OAEEHU.png",x="/assets/线性神经网络-5mwh_3mj.png",v="/assets/线性神经网络2-mj9s4Lo5.png",_="/assets/softmax-7uuIJACV.png",b="/assets/反向传播神经网络-OhiykHB6.png",w="/assets/多隐藏层-8t46knS5.png",z="/assets/无隐藏层-rrvLHSJp.png",N="/assets/1隐藏层1输出-kVvpJauQ.png",k="/assets/1隐藏层n输出-oR_9oac8.png",M="/assets/杂志喜好预测范例-lT7P4hvk.png",A="/assets/手写字体范例1-3A621duu.png",B="/assets/手写字体范例2-sqMxaaBT.png",P="/assets/正向传播-xBxYagV-.png",S="/assets/神经元-UMazP7N7.png",G="/assets/神经元2-d5AyAm9C.png",R="/assets/手写字体范例3-3_Hu9Awi.png",O="/assets/手写字体范例4-iPMeyYiL.png",j="/assets/杂志喜好预测范例2-2zA2aD5T.png",D="/assets/手写字体范例5-R28K9_bE.png",L="/assets/手写字体范例6-hBTJtNBZ.png",T="/assets/数据预处理范例1-XElf7OdW.png",I="/assets/数据预处理范例2-qRAJ4moG.png",q="/assets/神经网络-线性回归-逻辑回归-aKfyqG8R.png",H={},X=t('<ol><li>神经网络概述</li><li>感知机 (Perceptron) 及感知机的极限</li><li>多层感知机 (Multi-Layer Perceptron)</li><li>BP 神经网络 <ol><li>神经元的组成 1: 组合函数 (Combination Function)</li><li>神经元的组成 2: 激活函数 (Activation Function)</li><li>BP 神经网络如何传递信息</li><li>BP 神经网络如何修正权重值及常数项</li><li>BP 神经网络与逻辑回归、线性回归及非线性回归间的关系</li></ol></li></ol><ul><li>深度学习概述</li><li>深度神经网络（Deep Neural Networks，DNN）</li><li>卷积神经网络（Convolutional Neural Networks，CNN）</li><li>递归神经网络（Recurrent Neural Networks，RNN）</li></ul><h2 id="感知机perceptron" tabindex="-1"><a class="header-anchor" href="#感知机perceptron" aria-hidden="true">#</a> 感知机Perceptron</h2><p>感知机是美国研究人员 Rosenblatt 在 1957 年提出的。</p><p>为什么现在还要学习这么久以前的算法？原因在于，感知机可以说是造就神经网络（深度学习）的算法。</p><p>因此，学习感知机的架构，等于在学习神经网络或深度学习的重要概念。</p><p>使用感知机，也能建立计算机。</p><p>感知机是收到多个输入信号之后，再当作一个信号输出。</p><figure><img src="'+p+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><ol><li>x1、x2 是输入信号，y 是输出信号，w1、w2 代表权重，w 是 weight 的缩写。</li><li>圆圈称作 “神经元” 或 “节点”.</li><li>输入信号传送到神经元时，将分别乘上原有的权重（w1×x1、w2×x2）。</li><li>接下来神经元会计算传送过来的信号总和。唯有当总和超过一定数值时，才输出 1，否则输出 0，这个数值一般称之为临界值，以符号 θ 表示。</li></ol><p>若用算式来显示上述内容，可以变成以下式子</p>',11),C=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"y"),s("mo",null,"="),s("mn",null,"0"),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"w"),s("mn",null,"1")]),s("msub",null,[s("mi",null,"x"),s("mn",null,"1")]),s("mo",null,"+"),s("msub",null,[s("mi",null,"w"),s("mn",null,"2")]),s("msub",null,[s("mi",null,"x"),s("mn",null,"2")]),s("mo",null,"<"),s("mo",null,"="),s("mi",null,"θ"),s("mo",{stretchy:"false"},")"),s("mn",null,"1"),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"w"),s("mn",null,"1")]),s("msub",null,[s("mi",null,"x"),s("mn",null,"1")]),s("mo",null,"+"),s("msub",null,[s("mi",null,"w"),s("mn",null,"2")]),s("msub",null,[s("mi",null,"x"),s("mn",null,"2")]),s("mo",null,">"),s("mi",null,"θ"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," y = 0 (w_1x_1 + w_2x_2 <= \\theta) 1 (w_1x_1 + w_2x_2 > \\theta) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"0"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0269em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6891em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0269em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"θ"),s("span",{class:"mclose"},")"),s("span",{class:"mord"},"1"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0269em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6891em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0269em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},">"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"θ"),s("span",{class:"mclose"},")")])])])])],-1),F=t('<p>权重是控制各信号重要性的元素，权重愈重，对应该权重的信号重要性愈高</p><p>单纯的逻辑电路-ANDGate</p><p>以感知机来表现AND Gate这里要执行的工作是，决定w1、w2、0的值，以满足右图的真值表 <img src="'+r+'" alt="alt text" loading="lazy"></p><p>事实上，挑选满足右图的参数方法有无限多种</p><p>例如，当(w1, w2, 0)=(0.5,0.5,0.7)时会满足右图的条件 当(0.5,0.5,0.8)及(1.0,1.0,1.0)也同样满足了ANDGate的条件</p><p>单纯的逻辑电路-NAND(not and)／ORGate</p><figure><img src="'+o+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><p>这三种Gates只有参数(权重与临界值)不同而已，只要适当调整参数，就能像百变明星饰演各种角色般，变身成不同的Gates</p><p>感知机的极限-XOR</p><figure><img src="'+c+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><p>感知机的极限只能解决线性问题.</p><figure><img src="'+m+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><p>多层感知机(Multi-Layer Perceptron)</p><figure><img src="'+g+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><p>单层感知机无法实现XOR，或分离非线性区域但多层感知机就可实现XOR</p><figure><img src="'+h+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><figure><img src="'+l+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><p>总结:</p><ol><li>感知机是具有输入和输出的算法。</li><li>给予输入之后，就会输出一定的值。</li><li>感知机可以将 “权重” 与 “偏置项” 当作参数来设定。</li><li>使用感知机，可以表现 AND Gate 与 OR Gate 等逻辑电路。</li><li>XOR 无法用单层感知机来实现。</li><li>使用双层感知机，可以表现 XOR Gate。</li><li>相对于单层感知机只能表现线性区域，多层感知机能表现非线性区域。</li><li>多层感知机（理论上）可以实现计算机。</li></ol><h2 id="神经网络" tabindex="-1"><a class="header-anchor" href="#神经网络" aria-hidden="true">#</a> 神经网络</h2><figure><img src="'+u+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><figure><img src="'+d+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><figure><img src="'+l+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><figure><img src="'+f+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><figure><img src="'+y+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><p>激活函数若是以临界值为分界来转换输出的函数，则称之为「阶梯函数(StepFunction)或「阶跃函数」</p><p>之前的感知机使用的是激活函数就是阶梯函数</p><p>激活函数: Step Function: 感知机采用, 不是连续可微分, 所以不能反向传播 Sigmoid Function: BP神经网络采用 ReLU Function: 深度学习采用</p><p>Sigmoid VS Step Fun.</p><ol><li><p>Sigmoid函数是平滑曲线，针对输入产生连续性的输出；阶梯函数是以0为界线，明确改变输出</p></li><li><p>学习神经网络时，Sigmoid函数的平滑度具有重要的意义</p></li><li><p>在感知机中，传递着0或1这两个值的信号；但在神经网络中，传递的是连续性的实数信号</p></li><li><p>阶梯函数与Sigmoid函数还有其他共通点，就是两者皆为非线性函数. Sigmoid函数是曲线，阶梯函数是像楼梯一样曲折的直线，因此都归类于非线性函数</p></li><li><p>线性函数用算式表示为h(x)=cx (c是定数). 因此，线性函数会成为一条直线</p></li><li><p>神经网络必须使用激活函数中的非线性函数，因为，如果使用了线性函数，增加神经网络的层数就变得毫无意义了</p></li></ol><p>使用线性函数, 无法发挥多层结构的优点如果要获得层迭的好处，就得使用激活函数中的非线性函数</p><p><img src="'+x+'" alt="alt text" loading="lazy"><img src="'+v+'" alt="alt text" loading="lazy"></p><p>输出层的设计</p><ol><li>神经网络可以用来解决分类问题与回归问题</li><li>但解决分类问题或回归问题时，必须改变输出层的激活函数</li><li>回归问题可使用恒等函数(h(x)=x)或Sigmoid函数</li><li>分类问题可使用的是Softmax函数(分多类)或Sigmoid函数(分两类)</li></ol><p>softmax函数</p><figure><img src="'+_+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h2 id="back-propagation-bp-neural-networks" tabindex="-1"><a class="header-anchor" href="#back-propagation-bp-neural-networks" aria-hidden="true">#</a> Back Propagation(BP) Neural Networks</h2><p>反向传播神经网络 又称为多层感知机/Multi-LayerPerceptrons(MLP)</p><figure><img src="'+b+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><figure><img src="'+w+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><p>2层和1个输出节点无隐藏层 <img src="'+z+'" alt="alt text" loading="lazy"></p><p>3层和1个输出节点1隐藏层</p><figure><img src="'+N+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><figure><img src="'+k+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><p>杂志喜好预测范例 <img src="'+M+'" alt="alt text" loading="lazy"></p>',45),V=s("p",null,[a("✨输入最好是0~1之间, 因为激活函数sigmoid是0~1 ✨喜好是标签问题, 所以用多个sigmoid输出 ✨隐藏层节点数 <= "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msqrt",null,[s("mrow",null,[s("mtext",null,"输入层节点数"),s("mo",null,"∗"),s("mtext",null,"输出层节点数")])])]),s("annotation",{encoding:"application/x-tex"},"\\sqrt{输入层节点数 * 输出层节点数}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.04em","vertical-align":"-0.1133em"}}),s("span",{class:"mord sqrt"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9267em"}},[s("span",{class:"svg-align",style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord",style:{"padding-left":"0.833em"}},[s("span",{class:"mord cjk_fallback"},"输入层节点数"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord cjk_fallback"},"输出层节点数")])]),s("span",{style:{top:"-2.8867em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"hide-tail",style:{"min-width":"0.853em",height:"1.08em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"},[s("path",{d:`M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z`})])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1133em"}},[s("span")])])])])])])]),a(", 本例中"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msqrt",null,[s("mrow",null,[s("mn",null,"9"),s("mo",null,"∗"),s("mn",null,"5")])])]),s("annotation",{encoding:"application/x-tex"},"\\sqrt{9*5}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.04em","vertical-align":"-0.1328em"}}),s("span",{class:"mord sqrt"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9072em"}},[s("span",{class:"svg-align",style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord",style:{"padding-left":"0.833em"}},[s("span",{class:"mord"},"9"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"5")])]),s("span",{style:{top:"-2.8672em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"hide-tail",style:{"min-width":"0.853em",height:"1.08em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"},[s("path",{d:`M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z`})])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1328em"}},[s("span")])])])])])])]),a("=6, 所以试用6, 5, 4, 3看效果选择")],-1),E=t('<p>手写数字识别范例</p><p><img src="'+A+'" alt="text" loading="lazy"><img src="'+B+'" alt="text" loading="lazy"></p><p>✨这个是分类问题, 所以输出层是softmax</p><p>神经网络步骤</p><ol><li>Constructing a network <ol><li>input data representation</li><li>selection of number of layers, number of nodes in each layer</li></ol></li><li>Training the network using training data <ol><li>The ultimate objective of training</li><li>Obtain a set of weights that makes almost all the tuples in the training data classified correctly</li></ol></li><li>Interpret the results.</li></ol><p>正向传播/Forward1Pass</p><figure><img src="'+P+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><p>神经元(Neuro, Processing Unit)</p><p><img src="'+S+'" alt="alt text" loading="lazy"><img src="'+G+'" alt="alt text" loading="lazy"></p><p>前向传播</p><figure><img src="'+R+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><figure><img src="'+O+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><p>逆向权重及偏置项修正BackwardTraining <img src="'+j+'" alt="alt text" loading="lazy"></p><ul><li>Initial weights are set randomly（初始权重随机设置）。</li><li>Input tuples are fed into the network one by one（输入元组逐个输入到网络中）。</li><li>Activation values for the hidden nodes are computed（计算隐藏节点的激活值）。</li><li>Output vector can be computed after the activation values of all hidden node are available（在所有隐藏节点的激活值可用后，可以计算输出向量）。</li><li>Weights are adjusted using Error（使用误差调整权重）。</li><li>Error = desired output - actual output =∑j(Tj - Oj)²（误差=期望输出-实际输出=∑j(Tj - Oj)²）。</li></ul><p>计算每个node的值 <img src="'+D+'" alt="alt text" loading="lazy"></p><figure><img src="'+L+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h2 id="数值型字段的数据预处理" tabindex="-1"><a class="header-anchor" href="#数值型字段的数据预处理" aria-hidden="true">#</a> 数值型字段的数据预处理</h2><p>极值标准化</p><ol><li>Input attribute values need to be standardized into the range between 0 and 1.</li><li>If the input attribute is continuous values or ordinal (ordered, discrete values), the value (x_i ) of this attribute is standardized as:</li></ol><p>standardized xᵢ = (xᵢ - minimum) / (maximum - minimum)</p><h2 id="类别型字段的数据预处理" tabindex="-1"><a class="header-anchor" href="#类别型字段的数据预处理" aria-hidden="true">#</a> 类别型字段的数据预处理</h2><ul><li>If the input attribute is a categorical one, the following schemes can be taken.（如果输入属性是分类属性，可以采用以下方案。）</li><li>Distributed (binary) coding scheme.（分布式（二进制）编码方案。）✨不建议 lf the input attribute assumes four possible values (say, a1, a2, a3, and a4), two input nodes are required (e.g., 00 for a1, 01 for a2,10 for a3, and 11 for a4).（如果输入属性有四个可能的值（比如 a1、a2、a3 和 a4），则需要两个输入节点（例如，a1 为 00，a2 为 01，a3 为 10，a4 为 11）。）</li><li>1-of-N coding scheme.（1-of-N 编码方案。） One input node is used for each value (e.g., 0001 for a1,0010 for a2,0100 for a3, and 1000 for a4).（每个值使用一个输入节点（例如，a1 为 0001，a2 为 0010，a3 为 0100，a4 为 1000）。）</li><li>1-of-N-1 coding scheme.（1-of-N-1 编码方案。） N - 1 input nodes are used for an attribute with N possible values (001 for a1,010 for a2, 100 for a3, and 000 for a4).（对于具有 N 个可能值的属性，使用 N - 1 个输入节点（例如，a1 为 001，a2 为 010，a3 为 100，a4 为 000）。）</li></ul><h2 id="数据预处理" tabindex="-1"><a class="header-anchor" href="#数据预处理" aria-hidden="true">#</a> 数据预处理</h2><ul><li>Since the Sigmoid function only generates a value between 0 and 1, the output needs to be encoded into the range between 0 and 1.（由于 Sigmoid 函数仅生成 0 到 1 之间的值，所以输出需要被编码到 0 到 1 的范围内。）</li><li>If the output of a training example is a continuous value, one output node is sufficient and the standardization is needed.（如果训练示例的输出是连续值，一个输出节点就足够了，并且需要进行标准化。）</li><li>If the output is one from two possible classes (e.g., high loyalty or low loyalty), you can encode the output with one node (e.g., 1 for high loyalty and 0 for low loyalty) or two nodes (e.g., 10 for high loyalty and 01 for low loyalty).（如果输出是两个可能类别中的一个（例如，高忠诚度或低忠诚度），可以用一个节点（例如，高忠诚度为 1，低忠诚度为 0）或两个节点（例如，高忠诚度为 10，低忠诚度为 01）对输出进行编码。）</li><li>If the output is one from N possible classes (e.g., a customer&#39;s preference can be classical, rock &amp; roll, jazz, or country music), 1-of-N coding scheme is usually adopted (e.g., 1000 for classical, 0100 for rock &amp; roll, 0010 for jazz, and 0001 for country).（如果输出是 N 个可能类别中的一个（例如，客户的偏好可以是古典音乐、摇滚、爵士或乡村音乐），通常采用 1-of-N 编码方案（例如，古典音乐为 1000，摇滚为 0100，爵士为 0010，乡村音乐为 0001）。）</li></ul><p>✨黄色中Default字段使用1个节点, 用sigmoid. 蓝色中Default1, Default2使用2个节点, 用softmax. <img src="'+T+'" alt="alt text" loading="lazy"></p><p>✨编码过后的值要进行还原</p><figure><img src="'+I+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><p>神经网络-线性回归-逻辑回归</p><figure><img src="'+q+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><p>神经网络总结:</p><ul><li>Advantages（优点）： <ul><li>The prediction accuracy is generally high.（预测准确率通常较高。）</li><li>A fast evaluation can be done.（可以进行快速评估。）</li></ul></li><li>Disadvantages（缺点）： <ul><li>It has a long training time in general.（通常训练时间较长。）</li><li>It is difficult to understand the learned weights (black box).（难以理解学习到的权重（黑箱）。）</li></ul></li></ul>',31),J=[X,C,F,V,E];function U(W,Y){return e(),n("div",null,J)}const Z=i(H,[["render",U],["__file","4_3神经网络.html.vue"]]);export{Z as default};
