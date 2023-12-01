import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as l,c as e,e as n,a as s,b as a}from"./app-MTzDpLgJ.js";const i={},m=n('<h1 id="什么是概率" tabindex="-1"><a class="header-anchor" href="#什么是概率" aria-hidden="true">#</a> 什么是概率</h1><h2 id="随机现象" tabindex="-1"><a class="header-anchor" href="#随机现象" aria-hidden="true">#</a> 随机现象</h2><p>A和B两人掷骰子, 赌资为10块钱, 约定先出现三次正面, A赢;先出现三次背面,B赢. 连续掷骰子三次后, 正面出现了2次, 反面出现1次. 这时比赛以外中断, 那么赌资如何分配? 观点1: 因为再出现一次正面A赢, 而出现两次反面B赢, 所以赌资应该是A:B=2:1 观点2: 只要再出现一次正面A可以通吃, 而再出现一次反面, B才可和A打平手, 所以应该是 A:B=3:1平分. 这就是赌注分配问题（division of the stakes）</p><p>从概率论的角度来解释: 因为至多再扔两次骰子游戏必然会结束:</p><table><thead><tr><th>第一次</th><th>第二次</th><th>结果</th></tr></thead><tbody><tr><td>正面</td><td>正面</td><td>A赢</td></tr><tr><td>正面</td><td>反面</td><td>A赢</td></tr><tr><td>反面</td><td>正面</td><td>A赢</td></tr><tr><td>反面</td><td>反面</td><td>B赢</td></tr></tbody></table><p>只有一种情况B会赢, 所以分配比例应该是A:B=3:1</p><h2 id="真随机和伪随机" tabindex="-1"><a class="header-anchor" href="#真随机和伪随机" aria-hidden="true">#</a> 真随机和伪随机</h2><p>关于骰子的随机性，其实一直都有争论。有人认为如果可以知道扔骰子的所有信息：那么可以计算出扔骰子的结果，所以这种随机性称为<code>伪随机</code>，导致随机的原因是信息不足、或者计算困难。</p><p>有只猫和一个放射性物质一起放置在不透明的盒子中。这个放射性物质有50%的可能性衰变。如果发生衰变的话，猫就会死亡，也就是猫有50%的可能性死亡。这个思想实验是由薛定谔提出来的，所以称为<code>薛定谔的猫</code>。</p><p>在这个思想实验中，不开盖子是真不知道猫的死活， 这是因为放射性物质的衰变真的不可预测，但也只有不开盖才能保证不受外部因素的干扰, 这称为<code>真随机</code>。</p><h2 id="什么是概率-1" tabindex="-1"><a class="header-anchor" href="#什么是概率-1" aria-hidden="true">#</a> 什么是概率</h2><h3 id="频率派" tabindex="-1"><a class="header-anchor" href="#频率派" aria-hidden="true">#</a> 频率派</h3>',12),c=s("p",null,[a("频率派的理论基础是对过去事实的归纳总结。对应古典概型. 从试验结果可见，随着n的增大，频率越来越趋近于0.5。可见，虽然单次扔硬币的结果是随机的，但多次重复后频率趋于稳定，这种稳定性也称为"),s("code",null,"频率稳定性"),a("，反映了扔硬币存在某种必然性。 频率派认为如果频率存在稳定性，即当"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n"),s("mo",null,"→"),s("mi",{mathvariant:"normal"},"∞")]),s("annotation",{encoding:"application/x-tex"},"n\\rightarrow\\infty")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"→"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord"},"∞")])])]),a("时下面极限存在, 就得到了概率(P,Probability):")],-1),r=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"P"),s("mo",{stretchy:"false"},"("),s("mtext",null,"正面"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("munder",null,[s("mrow",null,[s("mi",null,"lim"),s("mo",null,"⁡")]),s("mrow",null,[s("mi",null,"n"),s("mo",null,"→"),s("mi",{mathvariant:"normal"},"∞")])]),s("msub",null,[s("mi",null,"P"),s("mi",null,"n")]),s("mo",{stretchy:"false"},"("),s("mtext",null,"正面"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," P(正面)=\\lim_{n\\rightarrow\\infty}P_n(正面) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mopen"},"("),s("span",{class:"mord cjk_fallback"},"正面"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.45em","vertical-align":"-0.7em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6944em"}},[s("span",{style:{top:"-2.4em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mrel mtight"},"→"),s("span",{class:"mord mtight"},"∞")])])]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",null,[s("span",{class:"mop"},"lim")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord cjk_fallback"},"正面"),s("span",{class:"mclose"},")")])])])])],-1),p=s("h3",{id:"古典派",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#古典派","aria-hidden":"true"},"#"),a(" 古典派")],-1),h=s("p",null,[a("如果因为无知，使得我们没有办法判断哪一个结果会比另外一个结果更容易出现，那么应该给予它们相同的概率。比如： 硬币：由于不清楚硬币哪一面更容易出现，那么应该给予正面、反面相同的概率，即为"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mfrac",null,[s("mn",null,"1"),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"},"\\frac{1}{2}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.1901em","vertical-align":"-0.345em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8451em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])]),a(" 骰子：我们不清楚骰子哪一面更容易出现，那么应该给予每一面相同的概率，即为"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mfrac",null,[s("mn",null,"1"),s("mn",null,"6")])]),s("annotation",{encoding:"application/x-tex"},"\\frac{1}{6}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.1901em","vertical-align":"-0.345em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8451em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"6")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])]),a(" 此称为"),s("code",null,"不充分理由原则"),a("（Insufficient Reason Principle）。 总结起来就是: 未知的概率都为等概率.")],-1),o=s("h3",{id:"主观派",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#主观派","aria-hidden":"true"},"#"),a(" 主观派")],-1),d=s("p",null,[a("主观派认为概率是"),s("code",null,"信念强度"),a("（degree of belief） 比如: 张先生去求职，他相信自己被录取的概率为70%")],-1),g=s("p",null,"参考: 马同学",-1),u=[m,c,r,p,h,o,d,g];function y(x,_){return l(),e("div",null,u)}const b=t(i,[["render",y],["__file","什么是概率.html.vue"]]);export{b as default};
