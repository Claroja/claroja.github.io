import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as p,a as s,b as n,d as a}from"./app-9tftCahk.js";const o="/assets/1-tgn_Cz9G.png",l="/assets/2-bLB6xXIu.png",i="/assets/3-0HhXA7vP.png",c={},r=s('<h1 id="taxi" tabindex="-1"><a class="header-anchor" href="#taxi" aria-hidden="true">#</a> taxi</h1><p>训练一个可以在指定地点接乘客并送到另个指定地点的出租车，我们希望这辆出租车可以：</p><ol><li>在正确的地方接上乘客</li><li>在正确的地方放下乘客</li><li>以最快的速度放下乘客</li></ol><p>我们需要考虑的有：奖励，状态以及行为</p><h2 id="奖励" tabindex="-1"><a class="header-anchor" href="#奖励" aria-hidden="true">#</a> 奖励</h2><p>智能体如果能正确的放下乘客，则会收到高的正向的奖励，因为这是我们最期待的结果 智能体如果错误的放下乘客，则会收到负向的惩罚 智能体每移动一步都会受到轻微的负向惩罚，之所以受到惩罚是因为我们期望智能体能够以最快的速度接送乘客，之所以轻微是因为相比送错乘客，迟到是比较轻微的</p><h2 id="状态空间-state-space" tabindex="-1"><a class="header-anchor" href="#状态空间-state-space" aria-hidden="true">#</a> 状态空间(state space)</h2><p>状态空间是出租车所有可能的情形(possible situations). <img src="'+o+`" alt="" loading="lazy"> 假设:</p><ol><li>整个路面是5*5的表格, 也就是说有25个可以通过的格子, 上图出租车的位置是(3,1)</li><li>我们有4个车站(R,G,Y,B), 可以上下乘客, 他们的坐标分别是<code>[(0,0), (0,4), (4,0), (4,3)]</code>.当前乘客在Y, 他要去得地点是R.</li><li>乘客得状态有4+1=5种, 其中4种是4个车站, 另外1种是在车里 所以出租车的环境(environment)一共有5<em>5</em>5*4=500种可能的情况</li></ol><h2 id="行为空间-action-space" tabindex="-1"><a class="header-anchor" href="#行为空间-action-space" aria-hidden="true">#</a> 行为空间(action space)</h2><p>行为空间: 智能体在某个状态下可以做的所有行为的集合 在这个例子中, 出租车可以进行移动和放上和放下乘客, 也就是6中行为:</p><ol><li>向南移动(south)</li><li>向北移动(north)</li><li>向东移动(east)</li><li>向西移动(west)</li><li>放上乘客(pickup)</li><li>放下乘客(dropoff)</li></ol><p>注意, 在某些状态下, 出租车不能进行某些行为, 比如:撞墙. 每次撞墙时, 我们都会施加惩罚, 然后让出租车保持当前状态不变.</p><h2 id="gym" tabindex="-1"><a class="header-anchor" href="#gym" aria-hidden="true">#</a> Gym</h2><p>Gym 已经帮我们准备好了环境</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> gym
env <span class="token operator">=</span> gym<span class="token punctuation">.</span>make<span class="token punctuation">(</span><span class="token string">&#39;Taxi-v3&#39;</span><span class="token punctuation">,</span> render_mode<span class="token operator">=</span><span class="token string">&quot;human&quot;</span><span class="token punctuation">)</span>
env<span class="token punctuation">.</span>reset<span class="token punctuation">(</span><span class="token punctuation">)</span>
env<span class="token punctuation">.</span>render<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Action Space {}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>env<span class="token punctuation">.</span>action_space<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 6</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;State Space {}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>env<span class="token punctuation">.</span>observation_space<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 500</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Gym的核心接口时env, 它有如下的方法:</p><ol><li><code>env.reset</code>:重置环境, 返回随机的初始化状态</li><li><code>env.step(action)</code>: 做一个行为, 返回:</li></ol><ul><li>observation</li><li>reward 该行为获得的奖励</li><li>done 是否成功的放上和放下乘客, 我们也成为一个episode</li><li>info 额外的一些信息, 可以用于debug</li></ul><ol start="3"><li><code>env.render</code>: 渲染当前的环境帧</li></ol><h3 id="action-space" tabindex="-1"><a class="header-anchor" href="#action-space" aria-hidden="true">#</a> Action space</h3><p>将Action space进行编码: 0 = south 1 = north 2 = east 3 = west 4 = pickup 5 = dropoff</p><h3 id="state-space" tabindex="-1"><a class="header-anchor" href="#state-space" aria-hidden="true">#</a> State Space</h3><p>将State Space进行编码: 0~499分别对应了出租车的位置, 乘客得位置 和 目的地的位置.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>state <span class="token operator">=</span> env<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment"># (taxi row, taxi column, passenger index, destination index)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;State:&quot;</span><span class="token punctuation">,</span> state<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reward-table" tabindex="-1"><a class="header-anchor" href="#reward-table" aria-hidden="true">#</a> Reward Table</h3><p>当环境创建之后, 会初始化一个奖励表格, 行是所有的状态, 列是所有的行为. 表格的形状是: states * actions.</p><p>使用<code>env.P[state]</code>来查看当前状态的所有行为的奖励.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>env<span class="token punctuation">.</span>P<span class="token punctuation">[</span><span class="token number">328</span><span class="token punctuation">]</span>
<span class="token comment">## {0: [(1.0, 428, -1, False)],</span>
<span class="token comment">##  1: [(1.0, 228, -1, False)],</span>
<span class="token comment">##  2: [(1.0, 348, -1, False)],</span>
<span class="token comment">##  3: [(1.0, 328, -1, False)],</span>
<span class="token comment">##  4: [(1.0, 328, -10, False)],</span>
<span class="token comment">##  5: [(1.0, 328, -10, False)]}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回结果的结构是: <code>{action: [(probability, nextstate, reward, done)]}</code></p><ul><li>0-5代表行为(south, north, east, west, pickup, dropoff)</li><li>probability 总是1</li><li><code>nextstate</code>是如果执行了某个行为, 将会进入的状态</li><li>所有的行动(movement)行为都会有-1的惩罚, 而放上和放下乘客在当前状态下会有-10的惩罚(因为当前不是上下车的地点)</li><li><code>done</code>: 是否成功的放上和放下乘客. 每次成功的放下乘客旧完成了一个训练(episode)</li></ul><h2 id="强化学习-reinforcement-learning" tabindex="-1"><a class="header-anchor" href="#强化学习-reinforcement-learning" aria-hidden="true">#</a> 强化学习(reinforcement learning)</h2><h3 id="公式" tabindex="-1"><a class="header-anchor" href="#公式" aria-hidden="true">#</a> 公式</h3>`,34),u=n("p",null,[a("奖励表格将会记录当前状态下某个行为获得的收益, 这个收益称为Q-value, 在Q-table种可以通过(state,action)来查询. Q-values随机初始化, 智能体在环境中采取不同的行为来获得奖励, 公式为: "),n("span",{class:"katex-error",title:"ParseError: KaTeX parse error: Can't use function '\\(' in math mode at position 53: …ction] + \\alpha\\̲(̲reward + \\gamma…",style:{color:"#cc0000"}},"Q[state,action] \\rightarrow Q[state,action] + \\alpha\\(reward + \\gamma maxQ[nextState,allAction]-Q[state,action]\\)"),a(" 其中: "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"α")]),n("annotation",{encoding:"application/x-tex"},"\\alpha")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4306em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.0037em"}},"α")])])]),a("是学习速率, 类似于监督学的概念 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"γ")]),n("annotation",{encoding:"application/x-tex"},"\\gamma")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.05556em"}},"γ")])])]),a("是折算系数, 决定了未来状态获益对本次(state, action)的影响. "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"γ")]),n("annotation",{encoding:"application/x-tex"},"\\gamma")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.05556em"}},"γ")])])]),a("越大表示智能体会更多的考虑未来收益, 越小则表示智能体会更多的考虑当前状态下的奖励.")],-1),d=s('<h3 id="q-table" tabindex="-1"><a class="header-anchor" href="#q-table" aria-hidden="true">#</a> Q-table</h3><p>Q-table是一个500(state)行, 6(action)列的矩阵.初始化全部为0, 然后再训练中会进行更新 <img src="'+i+'" alt="" loading="lazy"></p><h3 id="q-learn的过程" tabindex="-1"><a class="header-anchor" href="#q-learn的过程" aria-hidden="true">#</a> Q-learn的过程</h3>',3),m=n("ol",null,[n("li",null,"初始化Q-table, 值为0."),n("li",null,[a("初始化一个随机的状态"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"S")]),n("annotation",{encoding:"application/x-tex"},"S")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6833em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S")])])])]),n("li",null,[a("在当前状态"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"S")]),n("annotation",{encoding:"application/x-tex"},"S")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6833em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S")])])]),a("下, 在所有可能的行为种, 随机选择一个行为"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mo",{stretchy:"false"},"("),n("mi",null,"A"),n("mo",{stretchy:"false"},")"),n("mo",{separator:"true"},","),n("mtext",null,"并进入下一个状态")]),n("annotation",{encoding:"application/x-tex"},"(A), 并进入下一个状态")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"A"),n("span",{class:"mclose"},")"),n("span",{class:"mpunct"},","),n("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),n("span",{class:"mord cjk_fallback"},"并进入下一个状态")])])]),a("S'$")]),n("li",null,[a("选择"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msup",null,[n("mi",null,"S"),n("mo",{mathvariant:"normal",lspace:"0em",rspace:"0em"},"′")])]),n("annotation",{encoding:"application/x-tex"},"S'")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.7519em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.7519em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord mtight"},"′")])])])])])])])])])])]),a("中所有行为中最大Q-value的值和奖励")]),n("li",null,[a("根据公式来更新Q-table中"),n("span",{class:"katex-error",title:"ParseError: KaTeX parse error: Can't use function '\\(' in math mode at position 1: \\̲(̲S,A\\)",style:{color:"#cc0000"}},"\\(S,A\\)"),a("的Q-value")]),n("li",null,[a("设置下一个状态"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msup",null,[n("mi",null,"S"),n("mo",{mathvariant:"normal",lspace:"0em",rspace:"0em"},"′")])]),n("annotation",{encoding:"application/x-tex"},"S'")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.7519em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.7519em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord mtight"},"′")])])])])])])])])])])]),a("为当前的状态"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"S")]),n("annotation",{encoding:"application/x-tex"},"S")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6833em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S")])])])]),n("li",null,"如果目标达成, 则结束当前的训练, 并重新开始下一轮的训练")],-1),k=s(`<h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> gym
env <span class="token operator">=</span> gym<span class="token punctuation">.</span>make<span class="token punctuation">(</span><span class="token string">&#39;Taxi-v3&#39;</span><span class="token punctuation">,</span> render_mode<span class="token operator">=</span><span class="token string">&quot;human&quot;</span><span class="token punctuation">)</span>
<span class="token comment">## env.reset()</span>
<span class="token comment">## env.render()</span>

<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
q_table <span class="token operator">=</span> np<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span><span class="token punctuation">[</span>env<span class="token punctuation">.</span>observation_space<span class="token punctuation">.</span>n<span class="token punctuation">,</span> env<span class="token punctuation">.</span>action_space<span class="token punctuation">.</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span>


<span class="token triple-quoted-string string">&quot;&quot;&quot;Training the agent&quot;&quot;&quot;</span>
<span class="token keyword">import</span> random
<span class="token comment">## Hyperparameters</span>
alpha <span class="token operator">=</span> <span class="token number">0.1</span>
gamma <span class="token operator">=</span> <span class="token number">0.6</span>
epsilon <span class="token operator">=</span> <span class="token number">0.1</span>
<span class="token comment">## For plotting metrics</span>
all_epochs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
all_penalties <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100001</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    state <span class="token operator">=</span> env<span class="token punctuation">.</span>reset<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    epochs<span class="token punctuation">,</span> penalties<span class="token punctuation">,</span> reward<span class="token punctuation">,</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
    done <span class="token operator">=</span> <span class="token boolean">False</span>
    <span class="token keyword">while</span> <span class="token keyword">not</span> done<span class="token punctuation">:</span>
        <span class="token keyword">if</span> random<span class="token punctuation">.</span>uniform<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> epsilon<span class="token punctuation">:</span>
            action <span class="token operator">=</span> env<span class="token punctuation">.</span>action_space<span class="token punctuation">.</span>sample<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># Explore action space</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            action <span class="token operator">=</span> np<span class="token punctuation">.</span>argmax<span class="token punctuation">(</span>q_table<span class="token punctuation">[</span>state<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment"># Exploit learned values</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>env<span class="token punctuation">.</span>step<span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">)</span>
        next_state<span class="token punctuation">,</span> reward<span class="token punctuation">,</span> done<span class="token punctuation">,</span> _<span class="token punctuation">,</span> info <span class="token operator">=</span> env<span class="token punctuation">.</span>step<span class="token punctuation">(</span>action<span class="token punctuation">)</span> 
        old_value <span class="token operator">=</span> q_table<span class="token punctuation">[</span>state<span class="token punctuation">,</span> action<span class="token punctuation">]</span>
        next_max <span class="token operator">=</span> np<span class="token punctuation">.</span><span class="token builtin">max</span><span class="token punctuation">(</span>q_table<span class="token punctuation">[</span>next_state<span class="token punctuation">]</span><span class="token punctuation">)</span>
        new_value <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> alpha<span class="token punctuation">)</span> <span class="token operator">*</span> old_value <span class="token operator">+</span> alpha <span class="token operator">*</span> <span class="token punctuation">(</span>reward <span class="token operator">+</span> gamma <span class="token operator">*</span> next_max<span class="token punctuation">)</span>
        q_table<span class="token punctuation">[</span>state<span class="token punctuation">,</span> action<span class="token punctuation">]</span> <span class="token operator">=</span> new_value
        <span class="token keyword">if</span> reward <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">:</span>
            penalties <span class="token operator">+=</span> <span class="token number">1</span>
        state <span class="token operator">=</span> next_state
        epochs <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">if</span> i <span class="token operator">%</span> <span class="token number">100</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Episode: </span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Training finished.\\n&quot;</span><span class="token punctuation">)</span>




<span class="token triple-quoted-string string">&quot;&quot;&quot;Evaluate agent&#39;s performance after Q-learning&quot;&quot;&quot;</span>

total_epochs<span class="token punctuation">,</span> total_penalties <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
episodes <span class="token operator">=</span> <span class="token number">100</span>

<span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>episodes<span class="token punctuation">)</span><span class="token punctuation">:</span>
    state <span class="token operator">=</span> env<span class="token punctuation">.</span>reset<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    epochs<span class="token punctuation">,</span> penalties<span class="token punctuation">,</span> reward <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
    
    done <span class="token operator">=</span> <span class="token boolean">False</span>
    
    <span class="token keyword">while</span> <span class="token keyword">not</span> done<span class="token punctuation">:</span>
        action <span class="token operator">=</span> np<span class="token punctuation">.</span>argmax<span class="token punctuation">(</span>q_table<span class="token punctuation">[</span>state<span class="token punctuation">]</span><span class="token punctuation">)</span>
        state<span class="token punctuation">,</span> reward<span class="token punctuation">,</span> done<span class="token punctuation">,</span> info<span class="token punctuation">,</span> _ <span class="token operator">=</span> env<span class="token punctuation">.</span>step<span class="token punctuation">(</span>action<span class="token punctuation">)</span>

        <span class="token keyword">if</span> reward <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">:</span>
            penalties <span class="token operator">+=</span> <span class="token number">1</span>

        epochs <span class="token operator">+=</span> <span class="token number">1</span>

    total_penalties <span class="token operator">+=</span> penalties
    total_epochs <span class="token operator">+=</span> epochs

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Results after </span><span class="token interpolation"><span class="token punctuation">{</span>episodes<span class="token punctuation">}</span></span><span class="token string"> episodes:&quot;</span></span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Average timesteps per episode: </span><span class="token interpolation"><span class="token punctuation">{</span>total_epochs <span class="token operator">/</span> episodes<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Average penalties per episode: </span><span class="token interpolation"><span class="token punctuation">{</span>total_penalties <span class="token operator">/</span> episodes<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="超参数" tabindex="-1"><a class="header-anchor" href="#超参数" aria-hidden="true">#</a> 超参数</h3>`,3),h=n("p",null,[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"α")]),n("annotation",{encoding:"application/x-tex"},"\\alpha")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4306em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.0037em"}},"α")])])]),a(": learning rate "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"γ")]),n("annotation",{encoding:"application/x-tex"},"\\gamma")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.05556em"}},"γ")])])]),a(": 如果更关注短期收益, 则减小, 如果更关注长期收益, 则增大 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"ϵ")]),n("annotation",{encoding:"application/x-tex"},"\\epsilon")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4306em"}}),n("span",{class:"mord mathnormal"},"ϵ")])])]),a(": exploration (choosing a random action) and exploitation (choosing actions based on already learned Q-values)")],-1),v=n("p",null,"refs: https://www.learndatasci.com/tutorials/reinforcement-q-learning-scratch-python-openai-gym/ https://www.gymlibrary.dev/environments/toy_text/taxi/",-1),b=[r,u,d,m,k,h,v];function g(x,w){return e(),p("div",null,b)}const f=t(c,[["render",g],["__file","taxi.html.vue"]]);export{f as default};
