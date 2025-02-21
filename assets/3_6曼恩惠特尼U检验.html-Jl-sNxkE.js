import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as l,c as o,a as n,b as s,d as c,w as i,e as a}from"./app-jdLxCr9I.js";const u={},r=n("h1",{id:"曼恩惠特尼u检验",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#曼恩惠特尼u检验","aria-hidden":"true"},"#"),s(" 曼恩惠特尼U检验")],-1),m=n("h3",{id:"曼恩惠特尼u检验-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#曼恩惠特尼u检验-1","aria-hidden":"true"},"#"),s(" 曼恩惠特尼U检验")],-1),d=n("strong",null,"曼恩惠特尼U检验",-1),k=a(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;A&quot;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token number">47</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token number">37</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">,</span><span class="token number">39</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&quot;B&quot;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token number">49</span><span class="token punctuation">,</span><span class="token number">52</span><span class="token punctuation">,</span><span class="token number">54</span><span class="token punctuation">,</span><span class="token number">48</span><span class="token punctuation">,</span><span class="token number">51</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用U检验时, 首先需要将两个独立样本中的数据按值从小到达的顺序转化为其所在的合并样本中的名次, 然后检验基于两个样本名次计算出的U值, 以此来评估两组样本数据的平均名次间是否存在显著差异. 下面首先对全体数据按从小到大的顺序进行排序:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rank <span class="token operator">=</span> stats<span class="token punctuation">.</span>rankdata<span class="token punctuation">(</span>np<span class="token punctuation">.</span>concatenate<span class="token punctuation">(</span><span class="token punctuation">[</span>toy_df<span class="token punctuation">[</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                                      toy_df<span class="token punctuation">[</span><span class="token string">&#39;B&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
rank_df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">:</span> rank<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                        <span class="token string">&#39;B&#39;</span><span class="token punctuation">:</span> rank<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
rank_df
<span class="token triple-quoted-string string">&quot;&quot;&quot;
A	B
0	3	5
1	6	8
2	1	9
3	10	4
4	2	7
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v=n("p",null,[s("然后,使用A的名次之和(秩)作为检验统计量. 这里的A的名次和是3+6+1+10+2=22. 使用名次之和的理由是, 如果A中好的名次集中在一起的话, A的名次之和就会变小, 相反如果A中有不好的名次集中在一起, A的名次之和就会增大. 名次之和很好的反映了两个标本之间的数据偏差. 准确地说, U检验的检验统计量是从A的名次之中减去"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n"),n("mi",null,"l"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mi",null,"l"),n("mo",null,"+"),n("mi",null,"l"),n("mo",{stretchy:"false"},")"),n("mi",{mathvariant:"normal"},"/"),n("mn",null,"2")]),n("annotation",{encoding:"application/x-tex"},"nl(nl+l)/2")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"+"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),n("span",{class:"mclose"},")"),n("span",{class:"mord"},"/2")])])]),s(",其中"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n"),n("mi",null,"l")]),n("annotation",{encoding:"application/x-tex"},"nl")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6944em"}}),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l")])])]),s("是A中的元素个数.")],-1),h=a(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>n1 <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>rank_df<span class="token punctuation">[</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
u <span class="token operator">=</span> rank_df<span class="token punctuation">[</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token punctuation">(</span>n1<span class="token operator">*</span><span class="token punctuation">(</span>n1<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span>
u  <span class="token comment"># 7.000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),b=n("p",null,[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n"),n("mi",null,"l"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mi",null,"l"),n("mo",null,"+"),n("mi",null,"l"),n("mo",{stretchy:"false"},")"),n("mi",{mathvariant:"normal"},"/"),n("mn",null,"2")]),n("annotation",{encoding:"application/x-tex"},"nl(nl+l)/2")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"+"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),n("span",{class:"mclose"},")"),n("span",{class:"mord"},"/2")])])]),s("是将检验统计量的最小值设为0的数量, 也就是说, A的名次之和最小时对应于A中好的名次都集中在一起的情况, 这时的名次之和与"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n"),n("mi",null,"l"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mi",null,"l"),n("mo",null,"+"),n("mi",null,"l"),n("mo",{stretchy:"false"},")"),n("mi",{mathvariant:"normal"},"/"),n("mn",null,"2")]),n("annotation",{encoding:"application/x-tex"},"nl(nl+l)/2")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"+"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),n("span",{class:"mclose"},")"),n("span",{class:"mord"},"/2")])])]),s("一致. 在A中构造一个号的名次全部集中在一起的情况的数据来确认:")],-1),g=a(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rank_df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span>np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">.</span>reshape<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span>T<span class="token punctuation">,</span>
                       columns<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
rank_df
<span class="token triple-quoted-string string">&quot;&quot;&quot;

A	B
0	1	6
1	2	7
2	3	8
3	4	9
4	5	10
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>计算这时的检验统计量.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>u <span class="token operator">=</span> rank_df<span class="token punctuation">[</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token punctuation">(</span>n1<span class="token operator">*</span><span class="token punctuation">(</span>n1<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span>
u  <span class="token comment"># 0.000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>值很小. 如果A的名次不好会是怎样呢?</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rank_df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span>np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">.</span>reshape<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>T<span class="token punctuation">,</span>
                       columns<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
rank_df
<span class="token triple-quoted-string string">&quot;&quot;&quot;
	A	B
0	6	1
1	7	2
2	8	3
3	9	4
4	10	5
&quot;&quot;&quot;</span>
u <span class="token operator">=</span> rank_df<span class="token punctuation">[</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token punctuation">(</span>n1<span class="token operator">*</span><span class="token punctuation">(</span>n1<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span>
u  <span class="token comment"># 25.000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这次的值很大. 不管在A上聚集的排名是好的还是坏的, 两个样本的中位数都不会有偏差. 因此U检验要进行双侧检验. 可以使用U检验表查找临界值, 这里使用<code>scipy.stats</code>, 通过<code>mannwhitneyu</code>函数执行U检验.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>u<span class="token punctuation">,</span> p <span class="token operator">=</span> stats<span class="token punctuation">.</span>mannwhitneyu<span class="token punctuation">(</span>training_ind<span class="token punctuation">[</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> training_ind<span class="token punctuation">[</span><span class="token string">&#39;B&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                          alternative<span class="token operator">=</span><span class="token string">&#39;two-sided&#39;</span><span class="token punctuation">)</span>
p  <span class="token comment"># 0.059</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果与独立样本的t检验相同, 接受零假设. 和威尔科克森符号秩检验时一样, U检验在总体服从正态分布的情况下, 其检验功效比独立样本的t检验低.</p>`,8);function y(_,x){const t=e("font");return l(),o("div",null,[r,m,n("p",null,[d,s("(Mann-Whitney rank test)是在没有配对数据,"),c(t,{style:{background:"yellow"}},{default:i(()=>[s("无法假定两个独立样本的总体服从正态分布时对中位数差异的检验")]),_:1}),s(", 简称U检验, 也称曼恩惠特尼秩和检验. 考虑与独立样本的t检验相同的情况, 使用前5行:")]),k,v,h,b,g])}const A=p(u,[["render",y],["__file","3_6曼恩惠特尼U检验.html.vue"]]);export{A as default};
