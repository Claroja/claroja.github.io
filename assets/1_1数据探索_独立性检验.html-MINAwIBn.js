import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as p,c as e,b as n,e as o,w as c,a as l,d as u}from"./app-7knaTE3M.js";const i={},r=l(`<h1 id="独立性检验" tabindex="-1"><a class="header-anchor" href="#独立性检验" aria-hidden="true">#</a> 独立性检验</h1><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><ol><li>分析特征的相关性, 用来填补缺失数据</li><li>分析特征目标的相关性, 来筛选特征</li></ol><h2 id="两个分类变量使用卡方检验" tabindex="-1"><a class="header-anchor" href="#两个分类变量使用卡方检验" aria-hidden="true">#</a> 两个分类变量使用卡方检验</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">from</span> scipy<span class="token punctuation">.</span>stats <span class="token keyword">import</span> chi2_contingency

df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;Gender&#39;</span> <span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;M&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;M&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;M&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;F&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;F&#39;</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">,</span>
                   <span class="token string">&#39;isSmoker&#39;</span> <span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Smoker&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Smoker&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Non-Smpoker&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Non-Smpoker&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Smoker&#39;</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">10</span>
                  <span class="token punctuation">}</span><span class="token punctuation">)</span>

contigency<span class="token operator">=</span> pd<span class="token punctuation">.</span>crosstab<span class="token punctuation">(</span>df<span class="token punctuation">[</span><span class="token string">&#39;Gender&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> df<span class="token punctuation">[</span><span class="token string">&#39;isSmoker&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
contigency_pct <span class="token operator">=</span> pd<span class="token punctuation">.</span>crosstab<span class="token punctuation">(</span>df<span class="token punctuation">[</span><span class="token string">&#39;Gender&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> df<span class="token punctuation">[</span><span class="token string">&#39;isSmoker&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> normalize<span class="token operator">=</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">)</span>
c<span class="token punctuation">,</span> p<span class="token punctuation">,</span> dof<span class="token punctuation">,</span> expected <span class="token operator">=</span> chi2_contingency<span class="token punctuation">(</span>contigency<span class="token punctuation">)</span>
p  <span class="token comment"># 0.3767591178115821</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>null hypothesis是<code>Smokers</code>和<code>Gender</code>独立. p-value是37.67%&gt;5%, 表示我们不能拒绝假设, 既二者独立.</p><p>chi2_contingency的返回值说明:</p><ol><li>chi2: The test statistic</li><li>p: The p-value of the test</li><li>dof: Degrees of freedom</li><li>expected: The expected frequencies, based on the marginal sums of the table</li></ol><h2 id="两个连续变量" tabindex="-1"><a class="header-anchor" href="#两个连续变量" aria-hidden="true">#</a> 两个连续变量</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">import</span> scipy<span class="token punctuation">.</span>stats <span class="token keyword">as</span> stats

df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string">&#39;col1&#39;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&#39;col2&#39;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

corr<span class="token punctuation">,</span> p <span class="token operator">=</span> stats<span class="token punctuation">.</span>pearsonr<span class="token punctuation">(</span>df<span class="token punctuation">[</span><span class="token string">&#39;col1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> df<span class="token punctuation">[</span><span class="token string">&#39;col2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># (-0.9594032236002469, 0.009759076704905544)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>coor = -0.9594是相似度, p-value=0.0097, 小于0.05, 拒绝二者独立的假设, 二者相关.</p><h2 id="分类变量与连续变变量" tabindex="-1"><a class="header-anchor" href="#分类变量与连续变变量" aria-hidden="true">#</a> 分类变量与连续变变量</h2><p>Independent sample t-test或者称为unpaired sample t-test</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">from</span> scipy <span class="token keyword">import</span> stats

teaching_A <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">78</span><span class="token punctuation">,</span><span class="token number">84</span><span class="token punctuation">,</span><span class="token number">92</span><span class="token punctuation">,</span><span class="token number">88</span><span class="token punctuation">,</span><span class="token number">75</span><span class="token punctuation">,</span><span class="token number">80</span><span class="token punctuation">,</span><span class="token number">85</span><span class="token punctuation">,</span><span class="token number">90</span><span class="token punctuation">,</span><span class="token number">87</span><span class="token punctuation">,</span><span class="token number">7978</span><span class="token punctuation">,</span><span class="token number">84</span><span class="token punctuation">,</span><span class="token number">92</span><span class="token punctuation">,</span><span class="token number">88</span><span class="token punctuation">,</span><span class="token number">75</span><span class="token punctuation">,</span><span class="token number">80</span><span class="token punctuation">,</span><span class="token number">85</span><span class="token punctuation">,</span><span class="token number">90</span><span class="token punctuation">,</span><span class="token number">87</span><span class="token punctuation">,</span><span class="token number">79</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
teaching_B <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">82</span><span class="token punctuation">,</span><span class="token number">88</span><span class="token punctuation">,</span><span class="token number">75</span><span class="token punctuation">,</span><span class="token number">90</span><span class="token punctuation">,</span><span class="token number">78</span><span class="token punctuation">,</span><span class="token number">85</span><span class="token punctuation">,</span><span class="token number">88</span><span class="token punctuation">,</span><span class="token number">77</span><span class="token punctuation">,</span><span class="token number">92</span><span class="token punctuation">,</span><span class="token number">8082</span><span class="token punctuation">,</span><span class="token number">88</span><span class="token punctuation">,</span><span class="token number">75</span><span class="token punctuation">,</span><span class="token number">90</span><span class="token punctuation">,</span><span class="token number">78</span><span class="token punctuation">,</span><span class="token number">85</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

t_statistic<span class="token punctuation">,</span> p_value <span class="token operator">=</span> stats<span class="token punctuation">.</span>ttest_ind<span class="token punctuation">(</span>teaching_A<span class="token punctuation">,</span> teaching_B<span class="token punctuation">)</span>
p_value  <span class="token comment"># 0.8614898902140855</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>p-value值较大, 大于0.05, 无法拒绝原假设.</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,16),k=n("li",null,"https://www.scribbr.com/statistics/statistical-tests/",-1),d=n("li",null,"https://www.geeksforgeeks.org/t-test/",-1),m=n("li",null,"https://zhuanlan.zhihu.com/p/94070722",-1),b=n("li",null,"https://zhuanlan.zhihu.com/p/334574642",-1),h=n("li",null,"https://predictivehacks.com/how-to-run-chi-square-test-in-python/",-1);function v(_,g){const s=t("RouterLink");return p(),e("div",null,[r,n("ol",null,[k,d,m,b,n("li",null,[o(s,{to:"/1%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86/%E6%95%B0%E5%AD%A6/%E7%BB%9F%E8%AE%A1%E5%AD%A6/8%E5%81%87%E8%AE%BE%E6%A3%80%E9%AA%8C/3_4%E5%8D%A1%E6%96%B9%E6%A3%80%E9%AA%8C.html"},{default:c(()=>[u("text")]),_:1})]),h])])}const E=a(i,[["render",v],["__file","1_1数据探索_独立性检验.html.vue"]]);export{E as default};
