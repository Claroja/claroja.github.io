import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as l,d as a,a as s,e as n}from"./app-j3zK2x6_.js";const p={},c=a(`<h1 id="montyhallproblem" tabindex="-1"><a class="header-anchor" href="#montyhallproblem" aria-hidden="true">#</a> MontyHallProblem</h1><p><a href="./pgmpy_MontyHallProblem/1.png"></a></p><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>假设你在一个游戏中, 你可以选择三扇门: 其中一扇门是汽车, 另外两个是山羊. 你先选择了一扇门, 比如第一扇门, 然后主持人(他之后每扇门背后是山羊还是车), 打开第三扇门, 里面是山羊. 然后, 他对你说:&quot;你是否换到第二扇门?&quot; 直觉上, 换或者不换均有1/2的概率赢得汽车.然而正确的结论非常的反直觉, 更换选择后会有2/3的概率赢得汽车, 而不更换的概率只有1/3. 以上结论可以使用蒙特卡洛方法验证:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> random

<span class="token keyword">def</span> <span class="token function">Monty_Hall_simulation</span><span class="token punctuation">(</span>strategy<span class="token punctuation">,</span> simulation_number<span class="token punctuation">)</span><span class="token punctuation">:</span>
    wins_count <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token comment"># Simulated 100000 times based on monte carlo</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>simulation_number<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 0 means car and 1,2 means goats</span>
        choice_list_init <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
        first_choice <span class="token operator">=</span> random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span>choice_list_init<span class="token punctuation">)</span>
        <span class="token comment"># According to the precondition, the compere helps us eliminate an error option, so the sample must include the</span>
        <span class="token comment"># car and a goat.</span>
        <span class="token keyword">if</span> first_choice <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token comment"># the first time we choice the car</span>
            sample_space <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            sample_space <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> first_choice<span class="token punctuation">]</span>
        <span class="token comment"># Counting the simulation results on the condition of stick the first choice or change the choice.</span>
        <span class="token keyword">if</span> strategy <span class="token operator">==</span> <span class="token string">&#39;stick&#39;</span><span class="token punctuation">:</span>
            result <span class="token operator">=</span> first_choice
        <span class="token keyword">if</span> strategy <span class="token operator">==</span> <span class="token string">&#39;change&#39;</span><span class="token punctuation">:</span>
            sample_space<span class="token punctuation">.</span>pop<span class="token punctuation">(</span>sample_space<span class="token punctuation">.</span>index<span class="token punctuation">(</span>first_choice<span class="token punctuation">)</span><span class="token punctuation">)</span>
            result <span class="token operator">=</span> sample_space<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> result <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            wins_count <span class="token operator">+=</span> <span class="token number">1</span>
    win_probability <span class="token operator">=</span> <span class="token builtin">round</span><span class="token punctuation">(</span>wins_count<span class="token operator">/</span>simulation_number<span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;The probability of win in {0} strategy is {1}: &quot;</span> <span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>strategy<span class="token punctuation">,</span> win_probability<span class="token punctuation">)</span><span class="token punctuation">)</span>

Monty_Hall_simulation<span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> <span class="token number">100000</span><span class="token punctuation">)</span>
Monty_Hall_simulation<span class="token punctuation">(</span><span class="token string">&#39;stick&#39;</span><span class="token punctuation">,</span> <span class="token number">100000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个直觉上的解释: 汽车有1/3的概率在玩家第一次挑选的门的后面, 比如下面的第一扇门. 而有2/3个概率是在另外两扇门后面. 当主持人打开了第三扇门, 如果玩家此时更换选择, 相当于同时选择了两扇门(一扇门没有开, 另一扇门主持人打开为羊), 既概率为2/3. <a href="./pgmpy_MontyHallProblem/2.png"></a></p><h2 id="贝叶斯网络" tabindex="-1"><a class="header-anchor" href="#贝叶斯网络" aria-hidden="true">#</a> 贝叶斯网络</h2><p>我们有三个随机变量,</p>`,8),i=s("ol",null,[s("li",null,[n("选择玩家(Contestant)的选择:"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"C"),s("mo",null,"∈"),s("mrow",null,[s("mn",null,"1"),s("mo",{separator:"true"},","),s("mn",null,"2"),s("mo",{separator:"true"},","),s("mn",null,"3")])]),s("annotation",{encoding:"application/x-tex"},"C \\in {1, 2, 3}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7224em","vertical-align":"-0.0391em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"∈"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8389em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"3")])])])]),n(", 玩家将随机选择门,所以"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"P"),s("mo",{stretchy:"false"},"("),s("mi",null,"C"),s("mo",null,"="),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mi",null,"P"),s("mo",{stretchy:"false"},"("),s("mi",null,"C"),s("mo",null,"="),s("mn",null,"2"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mi",null,"P"),s("mo",{stretchy:"false"},"("),s("mi",null,"C"),s("mo",null,"="),s("mn",null,"3"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mfrac",null,[s("mn",null,"1"),s("mn",null,"3")])]),s("annotation",{encoding:"application/x-tex"},"P(C=1) = P(C=2) = P(C=3) = \\frac{1}{3}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"3"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.1901em","vertical-align":"-0.345em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8451em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"3")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])]),s("li",null,[n("主持人(Host)的选择:"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"H"),s("mo",null,":"),s("mi",null,"n"),s("mi",null,"b"),s("mi",null,"s"),s("mi",null,"p"),s("mi",null,"h"),s("mi",null,"i"),s("mi",null,"n"),s("mi",null,"x"),s("mo",null,"−"),s("mi",null,"m"),s("mi",null,"a"),s("mi",null,"t"),s("mi",null,"h"),s("mo",null,":"),s("mi",null,"i"),s("mi",null,"n"),s("mrow",null,[s("mn",null,"1"),s("mo",{separator:"true"},","),s("mn",null,"2"),s("mo",{separator:"true"},","),s("mn",null,"3")])]),s("annotation",{encoding:"application/x-tex"},"H :nbsphinx-math:in {1, 2, 3}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.08125em"}},"H"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},":"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"nb"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mord mathnormal"},"hin"),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"ma"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},":"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.854em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"in"),s("span",{class:"mord"},[s("span",{class:"mord"},"1"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"3")])])])]),n(",$ P :nbsphinx-math:in {1, 2, 3 } $")]),s("li",null,[n("奖品(Prize)随机放在门后, 所以"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"P"),s("mo",{stretchy:"false"},"("),s("mi",null,"P"),s("mo",null,"="),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mi",null,"P"),s("mo",{stretchy:"false"},"("),s("mi",null,"P"),s("mo",null,"="),s("mn",null,"2"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mi",null,"P"),s("mo",{stretchy:"false"},"("),s("mi",null,"P"),s("mo",null,"="),s("mn",null,"3"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mo",null,":"),s("mi",null,"n"),s("mi",null,"b"),s("mi",null,"s"),s("mi",null,"p"),s("mi",null,"h"),s("mi",null,"i"),s("mi",null,"n"),s("mi",null,"x"),s("mo",null,"−"),s("mi",null,"m"),s("mi",null,"a"),s("mi",null,"t"),s("mi",null,"h"),s("mo",null,":"),s("mfrac",null,[s("mn",null,"1"),s("mn",null,"3")])]),s("annotation",{encoding:"application/x-tex"},"P(P=1) = P(P=2) = P(P=3) = :nbsphinx-math:\\frac{1}{3}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"3"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"=:"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"nb"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mord mathnormal"},"hin"),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"ma"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},":"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.1901em","vertical-align":"-0.345em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8451em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"3")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])]),n(" 所以可以构建如下的网络结构: "),s("a",{href:"./pgmpy_MontyHallProblem/3.png"})])],-1),o=s("p",null,[n("假设玩家选了了第0扇门, 主持人开了第2扇门, 我们要算的就是获得奖品的概率:"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"P"),s("mo",{stretchy:"false"},"("),s("mi",null,"P"),s("mi",{mathvariant:"normal"},"∣"),s("mi",null,"H"),s("mo",null,"="),s("mn",null,"2"),s("mo",{separator:"true"},","),s("mi",null,"C"),s("mo",null,"="),s("mn",null,"0"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"P(P | H=2, C=0)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mord"},"∣"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.08125em"}},"H"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"0"),s("span",{class:"mclose"},")")])])])],-1),m=a(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pgmpy<span class="token punctuation">.</span>models <span class="token keyword">import</span> BayesianModel
<span class="token keyword">from</span> pgmpy<span class="token punctuation">.</span>factors<span class="token punctuation">.</span>discrete <span class="token keyword">import</span> TabularCPD

<span class="token comment">## Defining the network structure</span>
model <span class="token operator">=</span> BayesianModel<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;H&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;P&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;H&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">## Defining the CPDs:</span>
cpd_c <span class="token operator">=</span> TabularCPD<span class="token punctuation">(</span><span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0.33</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0.33</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0.33</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
cpd_p <span class="token operator">=</span> TabularCPD<span class="token punctuation">(</span><span class="token string">&#39;P&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0.33</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0.33</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0.33</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
cpd_h <span class="token operator">=</span> TabularCPD<span class="token punctuation">(</span><span class="token string">&#39;H&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                            <span class="token punctuation">[</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                            <span class="token punctuation">[</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                    evidence<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;P&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> evidence_card<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">## Associating the CPDs with the network structure.</span>
model<span class="token punctuation">.</span>add_cpds<span class="token punctuation">(</span>cpd_c<span class="token punctuation">,</span> cpd_p<span class="token punctuation">,</span> cpd_h<span class="token punctuation">)</span>

<span class="token comment">## check_model check for the model structure and the associated CPD and returns True if everything is correct otherwise throws an exception</span>
model<span class="token punctuation">.</span>check_model<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">## Infering the posterior probability</span>
<span class="token keyword">from</span> pgmpy<span class="token punctuation">.</span>inference <span class="token keyword">import</span> VariableElimination

infer <span class="token operator">=</span> VariableElimination<span class="token punctuation">(</span>model<span class="token punctuation">)</span>
posterior_p <span class="token operator">=</span> infer<span class="token punctuation">.</span>query<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;P&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> evidence<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;C&#39;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;H&#39;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>posterior_p<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&#39;&#39;&#39;
+------+----------+
| P    |   phi(P) |
+======+==========+
| P(0) |   0.3333 |
+------+----------+
| P(1) |   0.6667 |
+------+----------+
| P(2) |   0.0000 |
+------+----------+
&#39;&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),r=[c,i,o,m];function u(k,h){return e(),l("div",null,r)}const b=t(p,[["render",u],["__file","pgmpy_MontyHallProblem.html.vue"]]);export{b as default};
