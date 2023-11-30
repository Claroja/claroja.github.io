import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as l,c as e,e as t,a,b as s}from"./app-0JgdiRQ-.js";const i="/assets/1-A8J2vdbx.png",o="/assets/2-eZUXPmvk.png",m="/assets/3-VjmR3BQK.png",h="/assets/4-eid3B-XZ.png",c="/assets/5-xQLcu7D-.png",p="/assets/6-_lJhjOtJ.png",r="/assets/7-Zzf29vPY.png",d="/assets/8-MzV4idw7.png",u="/assets/9-57e7lWEM.png",g="/assets/10-urKAwSXO.png",x="/assets/11-gEQYD1Pt.png",w="/assets/12-zIry6Umz.png",_="/assets/13-uZI_mB4i.png",M="/assets/14-gpBArR35.png",k="/assets/15-pCcyLv5u.png",f="/assets/16-ZqHdRLTr.png",b={},y=t('<h2 id="seq2seq的问题" tabindex="-1"><a class="header-anchor" href="#seq2seq的问题" aria-hidden="true">#</a> seq2seq的问题</h2><p>编码器的输出是固定长度的向量. 意味着, 无论输入语句的长度如何, 都会被转换为长度相同的向量, 可能会造成信息溢出, 如下图:</p><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="编码器的改进" tabindex="-1"><a class="header-anchor" href="#编码器的改进" aria-hidden="true">#</a> 编码器的改进</h2><p>编码器的输出的长度应该根据输入文本的长度相应的改变, 一个方法1就是将各个时刻的LSTM层的隐状态全部输出.</p><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>使用各个时刻的隐状态向量, 可以获得和输入的单词数相同数量的向量. 如上图, 输入了5个单词, 此时编码器输出5个向量.</p><p>在许多深度学习框架中, 初始化RNN层时可以选择是发那会&quot;全部时刻的隐状态&quot;, 还是返回&quot;最后时刻的隐状态&quot;.</p>',8),L=a("p",null,[s('输入"猫"时的LSTM层的输出(隐状态)受此时输入的单词"猫"的影响最大. 因此, 可以认为这个隐状态向量蕴含了许多"猫的成分", 按照这个理解, 编码器输出的'),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"h"),a("mi",null,"s")]),a("annotation",{encoding:"application/x-tex"},"hs")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord mathnormal"},"h"),a("span",{class:"mord mathnormal"},"s")])])]),s("矩阵就可视为各个单词对应的向量的集合, 如下图:")],-1),N=a("figure",null,[a("img",{src:m,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),z=a("h2",{id:"解码器的改进1",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#解码器的改进1","aria-hidden":"true"},"#"),s(" 解码器的改进1")],-1),q=a("p",null,'在seq2seq中, 是将编码器的LSTM层的"最后"的隐状态放入了解码器的LSTM层的"最初"的隐状态, 如下图所示:',-1),T=a("figure",null,[a("img",{src:h,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),A=a("p",null,[s("如上图, 如果使用"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"h"),a("mi",null,"s")]),a("annotation",{encoding:"application/x-tex"},"hs")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord mathnormal"},"h"),a("span",{class:"mord mathnormal"},"s")])])]),s(", 则只提取了最后一行, 再将其传递给解码器.")],-1),S=a("p",null,'我们在将"吾輩は猫である"这句话翻译成英文时, 会用到"吾輩 = I", "猫 = cat"这样的知识. 也就是说, 我们专注于某个单词, 随时对这个单词进行转换. 我们的目标是仅关注必要的信息, 并根据该信息进行时序转换, 这个机制称为Attention. 如下图:',-1),v=a("figure",null,[a("img",{src:c,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),R=a("p",null,[s('如上图, 我们新增一个进行"某种计算"的层. 这个"某种计算"接收解码器各个时刻的LSTM层的隐状态和编码器的'),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"h"),a("mi",null,"s")]),a("annotation",{encoding:"application/x-tex"},"hs")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord mathnormal"},"h"),a("span",{class:"mord mathnormal"},"s")])])]),s(". 然后, 从中选出必要的信息, 并输出到Affine层. 与之前一样, 编码器的最后的隐藏状态向量传递给解码器最初的LSTM层.")],-1),B=a("p",null,[s("具体来说, 就是从"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"h"),a("mi",null,"s")]),a("annotation",{encoding:"application/x-tex"},"hs")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord mathnormal"},"h"),a("span",{class:"mord mathnormal"},"s")])])]),s('中选出与各个时刻解码器输出的单词有对应关系的单词向量, 比如, 当解码器输出"I"时, 从'),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"h"),a("mi",null,"s")]),a("annotation",{encoding:"application/x-tex"},"hs")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord mathnormal"},"h"),a("span",{class:"mord mathnormal"},"s")])])]),s('中选出"吾輩"的对应向量. 我们希望通过某种操作实现这种选择操作. 不过这里有个问题, 就是选择(从多个事物中选取若干个)这一操作时无法进行微分的. 也就不能计算梯度, 实现反向传播.')],-1),P=a("p",null,"解决这个问题的思路很简单, 就是度量表示各个单词重要度的权重.",-1),V=a("figure",null,[a("img",{src:p,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),W=a("p",null,[s("如上图, 使用表示各个单词重要度的权重"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"a")]),a("annotation",{encoding:"application/x-tex"},"a")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"a")])])]),s("计算和单词向量"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"h"),a("mi",null,"s")]),a("annotation",{encoding:"application/x-tex"},"hs")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord mathnormal"},"h"),a("span",{class:"mord mathnormal"},"s")])])]),s("的加权和, 可以获得目标向量, 如下图:")],-1),Z=a("figure",null,[a("img",{src:r,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),E=a("p",null,[s("如上图, 计算单词向量的加权和, 这里将结果称为上下文向量, 并用符号"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"c")]),a("annotation",{encoding:"application/x-tex"},"c")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"c")])])]),s('表示. "吾輩"对应的权重为0.8, 意味着上下文向量'),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"c")]),a("annotation",{encoding:"application/x-tex"},"c")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"c")])])]),s('中含有很多"吾輩"向量的成分. 如果"吾輩"对应的权重为1, 其他单词对应的权重为0, 就相当于"选择"了"吾輩".')],-1),G=a("h2",{id:"解码器的改进2",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#解码器的改进2","aria-hidden":"true"},"#"),s(" 解码器的改进2")],-1),I=a("p",null,[s("计算各个单词权重"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"a")]),a("annotation",{encoding:"application/x-tex"},"a")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"a")])])]),s("的方法是: 首先, 从编码器的处理开始到解码器第一个LSTM层输出隐状态向量的处理为止的流程如图:")],-1),U=a("figure",null,[a("img",{src:d,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),J=a("p",null,[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"h")]),a("annotation",{encoding:"application/x-tex"},"h")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord mathnormal"},"h")])])]),s("表示解码器的LSTM层隐状态. 我们的目标是用数值表示这个"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"h")]),a("annotation",{encoding:"application/x-tex"},"h")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord mathnormal"},"h")])])]),s("在多大程度上和"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"h"),a("mi",null,"s")]),a("annotation",{encoding:"application/x-tex"},"hs")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord mathnormal"},"h"),a("span",{class:"mord mathnormal"},"s")])])]),s('的各个单词向量"相似". 我们使用简单的向量内积.')],-1),Q=a("figure",null,[a("img",{src:u,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),X=a("p",null,[s("如上图, 通过内积算出"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"h")]),a("annotation",{encoding:"application/x-tex"},"h")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord mathnormal"},"h")])])]),s("和"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"h"),a("mi",null,"s")]),a("annotation",{encoding:"application/x-tex"},"hs")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord mathnormal"},"h"),a("span",{class:"mord mathnormal"},"s")])])]),s("的各个单词向量之间的相似度, 并将其结果表示为"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"s")]),a("annotation",{encoding:"application/x-tex"},"s")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"s")])])]),s(". 这个"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"s")]),a("annotation",{encoding:"application/x-tex"},"s")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"s")])])]),s("是正规化之前的值, 也称为得分. 接下来使用Softmax函数对"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"s")]),a("annotation",{encoding:"application/x-tex"},"s")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"s")])])]),s("进行正规化.")],-1),j=a("figure",null,[a("img",{src:g,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),C=a("p",null,[s("如上图, 使用Softmax函数后, 输出的"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"a")]),a("annotation",{encoding:"application/x-tex"},"a")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"a")])])]),s("的各个元素的值在0.0~1.0, 总和为1, 这样就求得了表示各个单词权重的"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"a")]),a("annotation",{encoding:"application/x-tex"},"a")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"a")])])]),s(".")],-1),D=a("h2",{id:"解码器改进3",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#解码器改进3","aria-hidden":"true"},"#"),s(" 解码器改进3")],-1),K=a("p",null,"解码器改进1 实现了 Weight Sum层, 解码器改进2实现了Attention Weight层, 将二者结合起来:",-1),O=a("figure",null,[a("img",{src:x,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),Y=a("p",null,"如上图:",-1),H=a("ul",null,[a("li",null,[a("p",null,[s("Attention Weight关注编码器输出的各个单词向量"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"h"),a("mi",null,"s")]),a("annotation",{encoding:"application/x-tex"},"hs")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord mathnormal"},"h"),a("span",{class:"mord mathnormal"},"s")])])]),s(", 并计算各个单词的权重"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"a")]),a("annotation",{encoding:"application/x-tex"},"a")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"a")])])])])]),a("li",null,[a("p",null,[s("Weight Sum层计算"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"a")]),a("annotation",{encoding:"application/x-tex"},"a")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"a")])])]),s("和"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"h"),a("mi",null,"s")]),a("annotation",{encoding:"application/x-tex"},"hs")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord mathnormal"},"h"),a("span",{class:"mord mathnormal"},"s")])])]),s("的加权和, 并输出上下文向量"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"c")]),a("annotation",{encoding:"application/x-tex"},"c")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"c")])])]),s(".")])])],-1),F=t('<p>我们将这一系列计算称为Attention层.</p><figure><img src="'+w+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>下图是完整的Attention:</p><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="residual-connection" tabindex="-1"><a class="header-anchor" href="#residual-connection" aria-hidden="true">#</a> residual connection</h2><p>在加深层时使用到重要技巧是残差连接(residual connection), 是一种跨层的连接技巧.</p><figure><img src="'+M+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如上图, 在残差连接处, 有两个输出被相加. 这个加法(对应元素相加)非常重要, 因为加法在反向传播时&quot;按原样&quot;传播梯度, 所以残差连接中的梯度可以不受任何影响地传播到前一层.</p><h2 id="attention-应用" tabindex="-1"><a class="header-anchor" href="#attention-应用" aria-hidden="true">#</a> Attention 应用</h2><h3 id="翻译" tabindex="-1"><a class="header-anchor" href="#翻译" aria-hidden="true">#</a> 翻译</h3><p>从&quot;基于规则的翻译&quot;到&quot;基于用例的翻译&quot;,再到&quot;基于统计的翻译&quot;. 而现在神经机器防疫(Neural Machine Translation)取代了过往的技术.</p><p>GNMT(Google Neural Machine Translation)使用的就是Attention的技术</p><h3 id="transformer" tabindex="-1"><a class="header-anchor" href="#transformer" aria-hidden="true">#</a> Transformer</h3><p>RNN需要基于上一个时刻的计算结果逐步进行计算, 因此不可能在事件方向上并行计算RNN. 在使用了GPU的并行计算环境下进行深度学习时, 这一点会成为很大的瓶颈, 于是就有了避开RNN的动机.</p><p>所以关于去除RNN的研究(或者说可以并行计算的RNN的研究)很活跃, 其中著名的就是Transformer模型. 在<code>Attention is all you need</code>这篇论文中提出. 正如标题所示, Transformer不用RNN, 而用Attention进行处理.</p><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如上图, 我们用Attention求解了翻译这种两个时序数据之间的对应关系. Time Attention层的两个输入中输入的是不同的时序数据. 而Self-Attention的两个输入中输入的是同一个时序数据.</p><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如上图, Transformer中用Attention代替了RNN. 编码器和解码器两者都使用了Self-Attention.</p>',19),$=a("p",null,[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("msub",null,[a("mi",null,"N"),a("mi",null,"x")])]),a("annotation",{encoding:"application/x-tex"},"N_x")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),a("span",{class:"mord"},[a("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),a("span",{class:"msupsub"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.1514em"}},[a("span",{style:{top:"-2.55em","margin-left":"-0.109em","margin-right":"0.05em"}},[a("span",{class:"pstrut",style:{height:"2.7em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mathnormal mtight"},"x")])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.15em"}},[a("span")])])])])])])])]),s("表示灰色背景包围的元素被堆叠了N次.")],-1),aa=a("p",null,"上图是简化了的Transformer, 实际上, 除了这个架构外, Skip Connection, Layer Normalization等技巧也会被用到. 另外还有, 编码时序数据位置信息(Positional Encoding, 位置编码)等.",-1),sa=a("p",null,"Transformer可以控制计算量, 充分利用GPU并行及带来的好处.",-1),ta=[y,L,N,z,q,T,A,S,v,R,B,P,V,W,Z,E,G,I,U,J,Q,X,j,C,D,K,O,Y,H,F,$,aa,sa];function na(la,ea){return l(),e("div",null,ta)}const ma=n(b,[["render",na],["__file","attention.html.vue"]]);export{ma as default};
