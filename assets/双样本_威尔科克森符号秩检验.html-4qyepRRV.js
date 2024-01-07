import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o,c,a as n,b as s,d as i,w as l,e as a}from"./app-SnI5rGHA.js";const u={},r=n("h1",{id:"威尔科克森符号秩检验",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#威尔科克森符号秩检验","aria-hidden":"true"},"#"),s(" 威尔科克森符号秩检验")],-1),d=n("h3",{id:"威尔科克森符号秩检验-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#威尔科克森符号秩检验-1","aria-hidden":"true"},"#"),s(" 威尔科克森符号秩检验")],-1),k=n("strong",null,"威尔科克森符号秩检验",-1),m=a(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;前&quot;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token number">59</span><span class="token punctuation">,</span><span class="token number">52</span><span class="token punctuation">,</span><span class="token number">55</span><span class="token punctuation">,</span><span class="token number">61</span><span class="token punctuation">,</span><span class="token number">59</span><span class="token punctuation">,</span><span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&quot;后&quot;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token number">41</span><span class="token punctuation">,</span><span class="token number">63</span><span class="token punctuation">,</span><span class="token number">68</span><span class="token punctuation">,</span><span class="token number">59</span><span class="token punctuation">,</span><span class="token number">84</span><span class="token punctuation">,</span><span class="token number">37</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为是配对数据, 所以还是重点关注数据的差异值</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>diff <span class="token operator">=</span> toy_df<span class="token punctuation">[</span><span class="token string">&#39;后&#39;</span><span class="token punctuation">]</span> <span class="token operator">-</span> toy_df<span class="token punctuation">[</span><span class="token string">&#39;前&#39;</span><span class="token punctuation">]</span>
toy_df<span class="token punctuation">[</span><span class="token string">&#39;差&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> diff
toy_df
<span class="token triple-quoted-string string">&quot;&quot;&quot;
	前	后	差
0	59	41	-18
1	52	63	11
2	55	68	13
3	61	59	-2
4	59	84	25
5	45	37	-8
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从这里开始, 将与之前的方法完全不同. 在威尔科克森符号秩检验中, 是按照名次的顺序进行检验的. 首先, 按差的绝对值从小到大排序, 使用<code>scipy.stats</code>的<code>rankdata</code>函数可以方便的排序:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rank <span class="token operator">=</span> stats<span class="token punctuation">.</span>rankdata<span class="token punctuation">(</span><span class="token builtin">abs</span><span class="token punctuation">(</span>diff<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
toy_df<span class="token punctuation">[</span><span class="token string">&#39;名次&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> rank
toy_df
<span class="token triple-quoted-string string">&quot;&quot;&quot;
	前	后	差	名次
0	59	41	-18	5
1	52	63	11	3
2	55	68	13	4
3	61	59	-2	1
4	59	84	25	6
5	45	37	-8	2
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后, 求出差的符号为负的名次之和, 以及差的符号为正的名词之和, 分别用<code>r_minus</code>和<code>r_plus</code>表示. 这里<code>r_minus</code>为5+1+2=8,<code>r_plus</code>为3+4+6=13.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>r_minus <span class="token operator">=</span> np<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">(</span>diff <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">*</span> rank<span class="token punctuation">)</span>
r_plus <span class="token operator">=</span> np<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">(</span>diff <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">*</span> rank<span class="token punctuation">)</span>

r_minus<span class="token punctuation">,</span> r_plus  <span class="token comment"># (8, 13)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>r_minus</code>和<code>r_plus</code>中较小的是检验统计量. 这里<code>r_minus</code>比较小, 所以检验统计量是8. 威尔科克森符号秩检验是单侧检验, 当检验统计量比临界值小时拒绝零假设.</p><p>为什么可以用这样的检验统计量进行中位数之差的检验呢? 我们用稍微极端的例子验证一下. 下面的数据是肌肉锻炼后的测试结果, 所有人都提高了, 这时的中位数存在明显的差异.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>toy_df<span class="token punctuation">[</span><span class="token string">&#39;后&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> toy_df<span class="token punctuation">[</span><span class="token string">&#39;前&#39;</span><span class="token punctuation">]</span> <span class="token operator">+</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>
diff <span class="token operator">=</span> toy_df<span class="token punctuation">[</span><span class="token string">&#39;后&#39;</span><span class="token punctuation">]</span> <span class="token operator">-</span> toy_df<span class="token punctuation">[</span><span class="token string">&#39;前&#39;</span><span class="token punctuation">]</span>
rank <span class="token operator">=</span> stats<span class="token punctuation">.</span>rankdata<span class="token punctuation">(</span><span class="token builtin">abs</span><span class="token punctuation">(</span>diff<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
toy_df<span class="token punctuation">[</span><span class="token string">&#39;差&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> diff
toy_df<span class="token punctuation">[</span><span class="token string">&#39;名次&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> rank
toy_df
<span class="token triple-quoted-string string">&quot;&quot;&quot;
前	后	差	名次
0	59	60	1	1
1	52	54	2	2
2	55	58	3	3
3	61	65	4	4
4	59	64	5	5
5	45	51	6	6
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>试着分别计算差为负的名次之和以及差为正的名次之和.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>r_minus <span class="token operator">=</span> np<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">(</span>diff <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">*</span> rank<span class="token punctuation">)</span>
r_plus <span class="token operator">=</span> np<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">(</span>diff <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">*</span> rank<span class="token punctuation">)</span>

r_minus<span class="token punctuation">,</span> r_plus  <span class="token comment"># (0, 21)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为没有一个数据是负的, 所以检验统计量是0. 如果差异存在偏差, 检验统计量就会变小. 另外, 还要考虑到肌肉锻炼后, 有的人的测试结果提高了, 有的人的测试结果下降了的情况.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>toy_df<span class="token punctuation">[</span><span class="token string">&#39;后&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> toy_df<span class="token punctuation">[</span><span class="token string">&#39;前&#39;</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">6</span><span class="token punctuation">]</span>
diff <span class="token operator">=</span> toy_df<span class="token punctuation">[</span><span class="token string">&#39;后&#39;</span><span class="token punctuation">]</span> <span class="token operator">-</span> toy_df<span class="token punctuation">[</span><span class="token string">&#39;前&#39;</span><span class="token punctuation">]</span>
rank <span class="token operator">=</span> stats<span class="token punctuation">.</span>rankdata<span class="token punctuation">(</span><span class="token builtin">abs</span><span class="token punctuation">(</span>diff<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
toy_df<span class="token punctuation">[</span><span class="token string">&#39;差&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> diff
toy_df<span class="token punctuation">[</span><span class="token string">&#39;名次&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> rank
toy_df
<span class="token triple-quoted-string string">&quot;&quot;&quot;
	前	后	差	名次
0	59	60	1	1
1	52	50	-2	2
2	55	52	-3	3
3	61	65	4	4
4	59	64	5	5
5	45	39	-6	6
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>试着分别计算差为负的名次之和以及差为正的名次之和</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>r_minus <span class="token operator">=</span> np<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">(</span>diff <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">*</span> rank<span class="token punctuation">)</span>
r_plus <span class="token operator">=</span> np<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">(</span>diff <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">*</span> rank<span class="token punctuation">)</span>

r_minus<span class="token punctuation">,</span> r_plus  <span class="token comment"># (11, 10)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为提高的人和下降的人差值差不多, 所以<code>r_minus</code>和<code>r_plus</code>的值很接近. 也就是说, 检验统计量是相当大的值. 像这样, 肌肉锻炼前后的差值越大, <code>r_minus</code>和<code>r_plus</code>的差值也越大, 检验统计量越小. 根据这个理论, 如果检验统计量低于临界值, 则中位数有差异. 在手工计算的情况下, 可以从符号秩检验临界值表中查找临界值后, 再与检验统计量进行比较完成检验. <code>scipy.stats</code>可以用<code>wilcoxon</code>函数进行威尔科克森符号秩检验, 该函数在计算符号秩之后进行标准化, 并以正态分布进行检验, 因此会得到与这里说明的检验统计量不同的结果, 但基本原理没有差异. 对<code>trainning_rel</code>试着执行<code>wilcoxon</code>函数. <code>wilcoxon</code>函数的参数可以是两个样本数据, 也可以是差的数据, 两种情况都可以输出相同的结果:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>T<span class="token punctuation">,</span> p <span class="token operator">=</span> stats<span class="token punctuation">.</span>wilcoxon<span class="token punctuation">(</span>training_rel<span class="token punctuation">[</span><span class="token string">&#39;前&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> training_rel<span class="token punctuation">[</span><span class="token string">&#39;后&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
p  <span class="token comment"># 0.038</span>
T<span class="token punctuation">,</span> p <span class="token operator">=</span> stats<span class="token punctuation">.</span>wilcoxon<span class="token punctuation">(</span>training_rel<span class="token punctuation">[</span><span class="token string">&#39;后&#39;</span><span class="token punctuation">]</span> <span class="token operator">-</span> training_rel<span class="token punctuation">[</span><span class="token string">&#39;前&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
p  <span class="token comment"># 0.038</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),v=n("p",null,[s("结果是拒绝零假设, 这和配对样本的t检验时的结论是一样的. 威尔科克森符号秩检验即使在总体服从正态分布的情况下也可以使用. 但是, 如果总体服从正态分布, 则威尔D的检验功效比配对样本的t检验要低. 我们来通过模拟确认这件事. 假设差值服从"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"N"),n("mo",{stretchy:"false"},"("),n("mn",null,"3"),n("mo",{separator:"true"},","),n("msup",null,[n("mn",null,"4"),n("mn",null,"2")]),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"N(3,4^2)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},"3"),n("span",{class:"mpunct"},","),n("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),n("span",{class:"mord"},[n("span",{class:"mord"},"4"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"2")])])])])])])]),n("span",{class:"mclose"},")")])])]),s(", 我们准备1万组样本容量为20的样本数据.")],-1),b=a(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>n <span class="token operator">=</span> <span class="token number">10000</span>
diffs <span class="token operator">=</span> np<span class="token punctuation">.</span><span class="token builtin">round</span><span class="token punctuation">(</span>stats<span class="token punctuation">.</span>norm<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span>rvs<span class="token punctuation">(</span>size<span class="token operator">=</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>因为差值不是0, 所以希望结果能拒绝零假设. 首先试着考察配对样本的t检验的检验功效:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>cnt <span class="token operator">=</span> <span class="token number">0</span>
alpha <span class="token operator">=</span> <span class="token number">0.05</span>
<span class="token keyword">for</span> diff <span class="token keyword">in</span> diffs<span class="token punctuation">:</span>
    t<span class="token punctuation">,</span> p <span class="token operator">=</span> stats<span class="token punctuation">.</span>ttest_1samp<span class="token punctuation">(</span>diff<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> p <span class="token operator">&lt;</span> alpha<span class="token punctuation">:</span>
        cnt <span class="token operator">+=</span> <span class="token number">1</span>
cnt <span class="token operator">/</span> n  <span class="token comment"># 0.883</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后进行威尔科克森符号秩检:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>cnt <span class="token operator">=</span> <span class="token number">0</span>
alpha <span class="token operator">=</span> <span class="token number">0.05</span>
<span class="token keyword">for</span> diff <span class="token keyword">in</span> diffs<span class="token punctuation">:</span>
    T<span class="token punctuation">,</span> p <span class="token operator">=</span> stats<span class="token punctuation">.</span>wilcoxon<span class="token punctuation">(</span>diff<span class="token punctuation">)</span>
    <span class="token keyword">if</span> p <span class="token operator">&lt;</span> alpha<span class="token punctuation">:</span>
        cnt <span class="token operator">+=</span> <span class="token number">1</span>
cnt <span class="token operator">/</span> n  <span class="token comment"># 0.874</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配对样本的t检验的检验功效稍微大一些.记住, 如果总体服从正态分布, 使用配对样本的t检验的检验功效更高.</p>`,6);function g(_,f){const t=e("font");return o(),c("div",null,[r,d,n("p",null,[k,s("(Wilcoxon signed-rank test)是对配对样本"),i(t,{style:{background:"yellow"}},{default:l(()=>[s("不能假定**中位数差值服从正态分布时的中位数差值的检验.")]),_:1}),s(" 需要注意的是, 与配对样本的t检验不同, 这里是对中位数之差的检验. 作为具体的例子, 我们使用与配对t检验相同的数据的前6行:")]),m,v,b])}const q=p(u,[["render",g],["__file","双样本_威尔科克森符号秩检验.html.vue"]]);export{q as default};
