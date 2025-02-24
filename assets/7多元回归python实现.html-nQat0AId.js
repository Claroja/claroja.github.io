import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as t,e as a}from"./app-A10JnHE0.js";const i={},e=a(`<h1 id="多元回归" tabindex="-1"><a class="header-anchor" href="#多元回归" aria-hidden="true">#</a> 多元回归</h1><p>让预测销售额的模型包含湿度, 温度, 天气(晴或雨), 价格4个解释变量. 天气为分类变量, 其余为连续变量.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
humidity	price	sales	temperature	weather
29.5	290	229.7	17.8	rainy
38.1	290	206.1	26.1	rainy
31.5	290	202.5	22	rainy
39.7	290	195.5	23	rainy
24.7	290	214.4	14.5	rainy
27.2	290	174.4	20.8	rainy
29.3	290	238.6	23.7	rainy
26.4	290	190.8	15.2	rainy
27.9	290	211.2	18.7	rainy
38	290	204.5	20.2	rainy
26.9	290	221.7	13.1	rainy
28.9	290	179	21.6	rainy
37.9	290	208.2	24.2	rainy
27.7	290	197.1	15.7	rainy
29.4	290	227.2	21.8	rainy
30.7	290	183.6	13.4	rainy
33.8	290	205.2	19.8	rainy
25.8	290	185.1	11.9	rainy
39.6	290	215.4	25.6	rainy
33.6	290	219.1	22	rainy
36.8	290	191.4	19.9	rainy
31.2	290	220.5	16.1	rainy
40.5	290	229.2	26.4	rainy
38.2	290	227.3	29.8	rainy
22.8	290	210.4	10.7	rainy
43.1	290	205.2	26.2	rainy
35.2	290	215.9	28.1	rainy
32.4	290	196	21.7	rainy
26.3	290	196.8	14	rainy
34	290	221.1	24.3	rainy
32.2	295	194.5	19.1	rainy
30.8	295	196.4	17	rainy
30.3	295	188.3	13.8	rainy
39.1	295	196.7	22.8	rainy
34	295	200.7	24	rainy
26.4	295	202.1	16.9	rainy
30	295	192.4	22.6	rainy
26.6	295	202.7	14.3	rainy
29.4	295	235.7	24	rainy
34.6	295	217.4	20.2	rainy
30	310	196	19.1	rainy
30.8	310	186.1	19.5	rainy
34.6	310	194	24.3	rainy
30.1	310	229.9	23.8	rainy
31	310	203.9	22.6	rainy
34.4	315	189.3	20.7	rainy
34.1	315	201.3	20.4	rainy
32.5	315	233.2	23.1	rainy
38.2	315	201.2	21.2	rainy
30.1	315	211.3	23.4	rainy
28	290	229.6	18.4	sunny
22	290	207.1	7.8	sunny
24.7	290	216.1	25.2	sunny
42.4	290	234.8	30.9	sunny
32.4	290	226.5	22.2	sunny
26.6	295	233.2	19.5	sunny
35.7	295	236.7	19.3	sunny
31.4	295	238.2	19.4	sunny
31.3	295	229.4	20.1	sunny
24.8	295	231.6	14.4	sunny
28.8	310	204.6	17.4	sunny
22.4	310	231.8	15	sunny
33.1	310	228.1	21.2	sunny
28	310	212.7	18.5	sunny
31.9	310	229.3	22.5	sunny
33.1	310	216.8	19.1	sunny
33.8	310	241.9	24.9	sunny
31.4	310	243.1	21.1	sunny
37.4	310	265	31	sunny
22.1	310	186.7	10.5	sunny
30.6	315	191.5	16.8	sunny
37.3	315	214.8	24.5	sunny
39.8	315	234.5	32.6	sunny
31.9	315	228.7	18.8	sunny
27.5	315	222	20.2	sunny
26.7	315	185.3	18.9	sunny
29.7	315	220.4	26.7	sunny
32.9	315	227.7	18.6	sunny
31.3	315	224.5	23.4	sunny
33.2	315	226.5	18.4	sunny
23.8	315	206	13.6	sunny
29.6	315	215.9	21.6	sunny
31.8	315	222.8	22.5	sunny
36.7	315	231	26.5	sunny
29.8	315	219.3	19.4	sunny
28.8	315	215.1	16.9	sunny
31.7	315	210.3	22.8	sunny
31.3	315	224.1	21.2	sunny
27.5	315	220.5	21.4	sunny
30	315	233.5	19.6	sunny
32.9	315	241.9	25.8	sunny
30.9	315	221.9	21.8	sunny
37.2	315	222.8	29.5	sunny
31.3	315	214.1	25.6	sunny
31.7	315	227.3	23.3	sunny
24.2	315	208.4	11.9	sunny
33.1	315	215.4	23	sunny
33.6	315	220.2	22.1	sunny
29.6	315	212.6	24.1	sunny
34.9	315	233.7	25.2	sunny
&quot;&quot;&quot;</span>
<span class="token comment">## 用于数值计算的库</span>
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">import</span> scipy <span class="token keyword">as</span> sp
<span class="token keyword">from</span> scipy <span class="token keyword">import</span> stats

<span class="token comment">## 用于绘图的库</span>
<span class="token keyword">from</span> matplotlib <span class="token keyword">import</span> pyplot <span class="token keyword">as</span> plt
<span class="token comment">## 用于估计统计模型的库 (部分版本会报出警告信息)</span>
<span class="token keyword">import</span> statsmodels<span class="token punctuation">.</span>formula<span class="token punctuation">.</span>api <span class="token keyword">as</span> smf
<span class="token keyword">import</span> statsmodels<span class="token punctuation">.</span>api <span class="token keyword">as</span> sm

<span class="token comment">## 读入数据</span>
sales <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span>data<span class="token punctuation">)</span>

<span class="token comment">## 估计多解释变量的模型</span>
lm_sales <span class="token operator">=</span> smf<span class="token punctuation">.</span>ols<span class="token punctuation">(</span>
    <span class="token string">&quot;sales ~ weather + humidity + temperature + price&quot;</span><span class="token punctuation">,</span>
    data<span class="token operator">=</span>sales<span class="token punctuation">)</span><span class="token punctuation">.</span>fit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## 估计的结果</span>
lm_sales<span class="token punctuation">.</span>params
<span class="token triple-quoted-string string">&quot;&quot;&quot;
Intercept           278.627722
weather[T.sunny]     19.989119
humidity             -0.254055
temperature           1.603115
price                -0.329207
dtype: float64
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="type-2-anova" tabindex="-1"><a class="header-anchor" href="#type-2-anova" aria-hidden="true">#</a> type 2 anova</h3><p>type 1 anova按如下顺序对比残差平方和:</p><ol><li>模型0: 销售额 - + 残差平方和</li><li>模型1: 销售额 - 天气 + 残差平方和</li><li>模型2: 销售额 - 天气 + 湿度 + 残差平方和</li><li>模型3: 销售额 - 天气 + 湿度 + 气温 + 残差平方和</li><li>模型4: 销售额 - 天气 + 湿度 + 气温 + 价格 + 残差平方和</li></ol><p>再分别对比模型0与模型1的残差平方和, 模型1与模型2的残差平方和 ... 最后检验各解释变量的必要性. 这样每个变量的评估会受到加入顺序的影响.</p><p>type 2 anova按照如下顺序对比残差平方和:</p><ol><li>模型0: 销售额 - 天气 + 湿度 + 气温 + 价格 + 残差平方和</li><li>模型1: 销售额 - + 湿度 + 气温 + 价格 + 残差平方和</li><li>模型2: 销售额 - 天气 + + 气温 + 价格 + 残差平方和</li><li>模型3: 销售额 - 天气 + 湿度 + + 价格 + 残差平方和</li><li>模型4: 销售额 - 天气 + 湿度 + 气温 + + 残差平方和</li></ol><p>再分别对比每个模型与模型0的残差平方和. Type 2 anova 根据解释变量减少时所增加的残差平方和量化解释变量的效应. 即使解释顺序不同, 结果也不会改变. 通过这种方法得到的组间偏差平方和就叫做调和平方和.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 包含所有解释变量的模型的残差平方和</span>
mod_full <span class="token operator">=</span> smf<span class="token punctuation">.</span>ols<span class="token punctuation">(</span>
    <span class="token string">&quot;sales ~ weather + humidity + temperature + price&quot;</span><span class="token punctuation">,</span>
    sales<span class="token punctuation">)</span><span class="token punctuation">.</span>fit<span class="token punctuation">(</span><span class="token punctuation">)</span>
resid_sq_full <span class="token operator">=</span> sp<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span>mod_full<span class="token punctuation">.</span>resid <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">)</span>
resid_sq_full  <span class="token comment"># 17242.717</span>

<span class="token comment">## 不含湿度的模型的残差平方和</span>
mod_non_humi <span class="token operator">=</span> smf<span class="token punctuation">.</span>ols<span class="token punctuation">(</span>
    <span class="token string">&quot;sales ~ weather + temperature + price&quot;</span><span class="token punctuation">,</span> 
    sales<span class="token punctuation">)</span><span class="token punctuation">.</span>fit<span class="token punctuation">(</span><span class="token punctuation">)</span>
resid_sq_non_humi <span class="token operator">=</span> sp<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span>mod_non_humi<span class="token punctuation">.</span>resid <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">)</span>
resid_sq_non_humi   <span class="token comment"># 17299.142</span>

<span class="token comment">## 调整平方和</span>
resid_sq_non_humi <span class="token operator">-</span> resid_sq_full  <span class="token comment"># 56.425</span>
<span class="token comment">## Type II ANOVA</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sm<span class="token punctuation">.</span>stats<span class="token punctuation">.</span>anova_lm<span class="token punctuation">(</span>mod_full<span class="token punctuation">,</span> typ<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">round</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># typ=2 表示 type 2 anova, typ=1 表示type 1 anova</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
                sum_sq    df       F  PR(&gt;F)
weather       5845.878   1.0  32.208   0.000
humidity        56.425   1.0   0.311   0.578
temperature   2378.017   1.0  13.102   0.000
price          818.402   1.0   4.509   0.036
Residual     17242.717  95.0     NaN     NaN
&quot;&quot;&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可见<code>humidity</code>的p值为0.578, 认为湿度对销售额没有显著影响. 当解释变量只有一个时, type 1 anova 与 type 2 anova的结果相等. 建议使用 type 2 anova.</p><h3 id="使用aic进行变量选择" tabindex="-1"><a class="header-anchor" href="#使用aic进行变量选择" aria-hidden="true">#</a> 使用AIC进行变量选择</h3><p>比较包含所有变量的模型<code>mode_full</code>与不包含湿度的模型<code>mod_non_humi</code>的AIC:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;包含所有变量的模型：&quot;</span><span class="token punctuation">,</span> mod_full<span class="token punctuation">.</span>aic<span class="token punctuation">.</span><span class="token builtin">round</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;不含湿度的模型　　：&quot;</span><span class="token punctuation">,</span> mod_non_humi<span class="token punctuation">.</span>aic<span class="token punctuation">.</span><span class="token builtin">round</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>不包含湿度的AIC更小, 所以湿度不应该包含在销售额预测的模型中.</p>`,16),l=[e];function d(u,c){return s(),t("div",null,l)}const o=n(i,[["render",d],["__file","7多元回归python实现.html.vue"]]);export{o as default};
