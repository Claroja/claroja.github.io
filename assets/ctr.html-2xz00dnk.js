import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as i,c,a as s,b as n,d as t,e as p}from"./app-M6UUlHgF.js";const o={},r=p(`<h1 id="ctr" tabindex="-1"><a class="header-anchor" href="#ctr" aria-hidden="true">#</a> ctr</h1><p>Click Through Rate(CTR)指的是推送给某个顾客的商品是否会被点击。最简单的方法就是逻辑回归(LR)，LR使用了Sigmoid变换将函数值映射到0~1区间，就是CTR的预估值。LR优点是简单，计算资源消耗较少，但是学习能力十分有限。需要大量的特征工程来增加模型的学习能力。因此，如何自动发现有效的特征、特征组合，弥补人工经验不足，缩短LR特征实验周期，是亟需解决的问题。</p><p>建树采用GBDT而非RF：RF也是多棵树，但从效果上有实践证明不如GBDT。且GBDT前面的树，特征分裂主要体现对多数样本有区分度的特征；后面的树，主要体现的是经过前N颗树，残差仍然较大的少数样本。优先选用在整体上有区分度的特征，再选用针对少数样本有区分度的特征，思路更加合理，这应该也是用GBDT的原因。</p><h2 id="gbdt" tabindex="-1"><a class="header-anchor" href="#gbdt" aria-hidden="true">#</a> GBDT</h2><h3 id="导入依赖" tabindex="-1"><a class="header-anchor" href="#导入依赖" aria-hidden="true">#</a> 导入依赖</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> lightgbm <span class="token keyword">as</span> lgb
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">from</span> sklearn <span class="token keyword">import</span> preprocessing
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>linear_model <span class="token keyword">import</span> LogisticRegression
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),u={href:"https://blog.csdn.net/zhong_ddbb/article/details/106244036",target:"_blank",rel:"noopener noreferrer"},m=s("h3",{id:"数据集及预处理",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#数据集及预处理","aria-hidden":"true"},"#"),n(" 数据集及预处理")],-1),d={href:"https://links.jianshu.com/go?to=https%3A%2F%2Fwww.kaggle.com%2Fc%2Favazu-ctr-prediction",target:"_blank",rel:"noopener noreferrer"},k=p(`<p>字段解释：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>id: ad identifier
click: 0/1 for non-click/click
hour: format is YYMMDDHH, so 14091123 means 23:00 on Sept. 11, 2014 UTC.
C1 -- anonymized categorical variable
banner_pos
site_id
site_domain
site_category
app_id
app_domain
app_category
device_id
device_ip
device_model
device_type
device_conn_type
C14-C21 -- anonymized categorical variables
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span><span class="token string">&quot;./ctr_data.csv&quot;</span><span class="token punctuation">)</span>
<span class="token comment">## 为了方便演示，只选择部分特征进行演示</span>
cols <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;C1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;banner_pos&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;site_domain&#39;</span><span class="token punctuation">,</span>  <span class="token string">&#39;site_id&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;site_category&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;app_id&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;app_category&#39;</span><span class="token punctuation">,</span>  <span class="token string">&#39;device_type&#39;</span><span class="token punctuation">,</span>  <span class="token string">&#39;device_conn_type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;C14&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;C15&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;C16&#39;</span><span class="token punctuation">]</span>
cols_all <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">]</span>
cols_all<span class="token punctuation">.</span>extend<span class="token punctuation">(</span>cols<span class="token punctuation">)</span>

y <span class="token operator">=</span> df<span class="token punctuation">[</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">]</span>  
y_train <span class="token operator">=</span> y<span class="token punctuation">.</span>iloc<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment"># training label</span>
y_test <span class="token operator">=</span> y<span class="token punctuation">.</span>iloc<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token punctuation">]</span>  <span class="token comment"># testing label</span>
X <span class="token operator">=</span> df<span class="token punctuation">[</span>cols_all<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">]</span>  <span class="token comment"># training dataset</span>

<span class="token comment">## label encode，将分类特生进行数字编码</span>
lbl <span class="token operator">=</span> preprocessing<span class="token punctuation">.</span>LabelEncoder<span class="token punctuation">(</span><span class="token punctuation">)</span>
X<span class="token punctuation">[</span><span class="token string">&#39;site_domain&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> lbl<span class="token punctuation">.</span>fit_transform<span class="token punctuation">(</span>X<span class="token punctuation">[</span><span class="token string">&#39;site_domain&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">#将提示的包含错误数据类型这一列进行转换</span>
X<span class="token punctuation">[</span><span class="token string">&#39;site_id&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> lbl<span class="token punctuation">.</span>fit_transform<span class="token punctuation">(</span>X<span class="token punctuation">[</span><span class="token string">&#39;site_id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
X<span class="token punctuation">[</span><span class="token string">&#39;site_category&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> lbl<span class="token punctuation">.</span>fit_transform<span class="token punctuation">(</span>X<span class="token punctuation">[</span><span class="token string">&#39;site_category&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
X<span class="token punctuation">[</span><span class="token string">&#39;app_id&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> lbl<span class="token punctuation">.</span>fit_transform<span class="token punctuation">(</span>X<span class="token punctuation">[</span><span class="token string">&#39;app_id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
X<span class="token punctuation">[</span><span class="token string">&#39;app_category&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> lbl<span class="token punctuation">.</span>fit_transform<span class="token punctuation">(</span>X<span class="token punctuation">[</span><span class="token string">&#39;app_category&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

X_train <span class="token operator">=</span> X<span class="token punctuation">.</span>iloc<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment"># testing dataset</span>
X_test <span class="token operator">=</span> X<span class="token punctuation">.</span>iloc<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token punctuation">]</span>  <span class="token comment"># testing dataset</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模型训练" tabindex="-1"><a class="header-anchor" href="#模型训练" aria-hidden="true">#</a> 模型训练</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## create dataset for lightgbm</span>
lgb_train <span class="token operator">=</span> lgb<span class="token punctuation">.</span>Dataset<span class="token punctuation">(</span>X_train<span class="token punctuation">,</span> y_train<span class="token punctuation">)</span>
lgb_eval <span class="token operator">=</span> lgb<span class="token punctuation">.</span>Dataset<span class="token punctuation">(</span>X_test<span class="token punctuation">,</span> y_test<span class="token punctuation">,</span> reference<span class="token operator">=</span>lgb_train<span class="token punctuation">)</span>
params <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;task&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;train&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;boosting_type&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;gbdt&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;objective&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;binary&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;metric&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&#39;binary_logloss&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&#39;num_leaves&#39;</span><span class="token punctuation">:</span> <span class="token number">64</span><span class="token punctuation">,</span>  <span class="token comment"># 叶子的个数，也是LR的输入的元素</span>
    <span class="token string">&#39;num_trees&#39;</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>  <span class="token comment"># 数据的个数，也是LR的输入的特征向量</span>
    <span class="token string">&#39;learning_rate&#39;</span><span class="token punctuation">:</span> <span class="token number">0.01</span><span class="token punctuation">,</span>
    <span class="token string">&#39;feature_fraction&#39;</span><span class="token punctuation">:</span> <span class="token number">0.9</span><span class="token punctuation">,</span>
    <span class="token string">&#39;bagging_fraction&#39;</span><span class="token punctuation">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
    <span class="token string">&#39;bagging_freq&#39;</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token string">&#39;verbose&#39;</span><span class="token punctuation">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token comment">## number of leaves,will be used in feature transformation</span>
num_leaf <span class="token operator">=</span> <span class="token number">64</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Start training...&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## train</span>
gbm <span class="token operator">=</span> lgb<span class="token punctuation">.</span>train<span class="token punctuation">(</span>params<span class="token punctuation">,</span>
                lgb_train<span class="token punctuation">,</span>
                num_boost_round<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">,</span>
                valid_sets<span class="token operator">=</span>lgb_train<span class="token punctuation">)</span>

<span class="token comment">## 用训练好的模型预测训练集</span>
y_pred_train <span class="token operator">=</span> gbm<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>X_train<span class="token punctuation">,</span> pred_leaf<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token comment">## 观察y_pred_train的形状，共有8000个样本，100棵树，（在上面的参数中 num_trees=100)</span>
y_pred_train<span class="token punctuation">.</span>shape  <span class="token comment"># (8000, 100)</span>
<span class="token comment">## 观察第 1 个样本y_pred_train[0]的前10个值：第一个数 31 表示这个样本落到了第一颗树的 31 叶子节点，29 表示落到了第二棵树的 29 叶子节点，注意31 、29表示节点编号，从0开始到63。</span>
y_pred_train<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">]</span>  <span class="token comment"># array([31, 29, 29, 32, 38, 46, 35, 36, 36, 42])</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lr" tabindex="-1"><a class="header-anchor" href="#lr" aria-hidden="true">#</a> LR</h2><h3 id="数据处理" tabindex="-1"><a class="header-anchor" href="#数据处理" aria-hidden="true">#</a> 数据处理</h3><p>将叶子节点编号转化为OneHot编码</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## train data</span>
transformed_training_matrix <span class="token operator">=</span> np<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token builtin">len</span><span class="token punctuation">(</span>y_pred_train<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>y_pred_train<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">*</span> num_leaf<span class="token punctuation">]</span><span class="token punctuation">,</span>dtype<span class="token operator">=</span>np<span class="token punctuation">.</span>int64<span class="token punctuation">)</span>  <span class="token comment"># N * num_tress * num_leafs</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>y_pred_train<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    temp <span class="token operator">=</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>y_pred_train<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> num_leaf <span class="token operator">+</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span>y_pred_train<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    transformed_training_matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>temp<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span>

<span class="token comment">## test data</span>
transformed_testing_matrix <span class="token operator">=</span> np<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token builtin">len</span><span class="token punctuation">(</span>y_pred_test<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>y_pred_test<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">*</span> num_leaf<span class="token punctuation">]</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span>np<span class="token punctuation">.</span>int64<span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>y_pred_test<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    temp <span class="token operator">=</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>y_pred_test<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> num_leaf <span class="token operator">+</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span>y_pred_test<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    transformed_testing_matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>temp<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span>


lm <span class="token operator">=</span> LogisticRegression<span class="token punctuation">(</span>penalty<span class="token operator">=</span><span class="token string">&#39;l2&#39;</span><span class="token punctuation">,</span>C<span class="token operator">=</span><span class="token number">0.05</span><span class="token punctuation">)</span>
lm<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>transformed_training_matrix<span class="token punctuation">,</span>y_train<span class="token punctuation">)</span> 
y_pred_lr_test <span class="token operator">=</span> lm<span class="token punctuation">.</span>predict_proba<span class="token punctuation">(</span>transformed_testing_matrix<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模型训练-1" tabindex="-1"><a class="header-anchor" href="#模型训练-1" aria-hidden="true">#</a> 模型训练</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>lm <span class="token operator">=</span> LogisticRegression<span class="token punctuation">(</span>penalty<span class="token operator">=</span><span class="token string">&#39;l2&#39;</span><span class="token punctuation">,</span>C<span class="token operator">=</span><span class="token number">0.05</span><span class="token punctuation">)</span>
lm<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>transformed_training_matrix<span class="token punctuation">,</span>y_train<span class="token punctuation">)</span> 
y_pred_lr_test <span class="token operator">=</span> lm<span class="token punctuation">.</span>predict_proba<span class="token punctuation">(</span>transformed_testing_matrix<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Kaggle指明的评价指标是NE(Normalized Cross-Entropy):</p>`,12),g=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"N"),s("mi",null,"E"),s("mo",null,"="),s("mfrac",null,[s("mrow",null,[s("mo",null,"−"),s("mfrac",null,[s("mn",null,"1"),s("mi",null,"N")]),s("munder",null,[s("mo",null,"∑"),s("mo",{stretchy:"false"},"(")]),s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mi",null,"n")]),s("mo",{stretchy:"false"},"("),s("mfrac",null,[s("mrow",null,[s("mn",null,"1"),s("mo",null,"+"),s("msub",null,[s("mi",null,"y"),s("mi",null,"i")])]),s("mn",null,"2")]),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"p"),s("mi",null,"i")]),s("mo",{stretchy:"false"},")"),s("mo",null,"+"),s("mfrac",null,[s("mrow",null,[s("mn",null,"1"),s("mo",null,"−"),s("msub",null,[s("mi",null,"y"),s("mi",null,"i")])]),s("mn",null,"2")]),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("msub",null,[s("mi",null,"p"),s("mi",null,"i")]),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")")]),s("mrow",null,[s("mo",null,"−"),s("mo",{stretchy:"false"},"("),s("mi",null,"p"),s("mo",null,"∗"),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mi",null,"p"),s("mo",{stretchy:"false"},")"),s("mo",null,"+"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("mi",null,"p"),s("mo",{stretchy:"false"},")"),s("mo",null,"∗"),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("mi",null,"p"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")")])])]),s("annotation",{encoding:"application/x-tex"}," NE=\\frac{-\\frac{1}{N}\\sum_(i=1)^n(\\frac{1+y_i}{2}log(p_i)+\\frac{1-y_i}{2}log(1-p_i))}{-(p*log(p)+(1-p)*log(1-p))} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"NE"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.6979em","vertical-align":"-0.936em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.7619em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"−"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mclose"},"))")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.8647em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"−"),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8451em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.10903em"}},"N")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop"},[s("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"∑"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2253em"}},[s("span",{style:{top:"-2.4003em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mopen mtight"},"(")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.4747em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8972em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.4461em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1"),s("span",{class:"mbin mtight"},"+"),s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3281em"}},[s("span",{style:{top:"-2.357em","margin-left":"-0.0359em","margin-right":"0.0714em"}},[s("span",{class:"pstrut",style:{height:"2.5em"}}),s("span",{class:"sizing reset-size3 size1 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.143em"}},[s("span")])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"p"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8972em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.4461em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1"),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3281em"}},[s("span",{style:{top:"-2.357em","margin-left":"-0.0359em","margin-right":"0.0714em"}},[s("span",{class:"pstrut",style:{height:"2.5em"}}),s("span",{class:"sizing reset-size3 size1 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.143em"}},[s("span")])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"p"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},"))")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.936em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])])],-1),h=s("h3",{id:"评估",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#评估","aria-hidden":"true"},"#"),n(" 评估")],-1),v=s("p",null,'···python NE = (-1) / len(y_pred_lr_test) * sum(((1+y_test)/2 * np.log(y_pred_lr_test[:,1]) + (1-y_test)/2 * np.log(1 - y_pred_lr_test[:,1]))) print("Normalized Cross Entropy " + str(NE)) ···',-1),b=s("p",null,"GBDT+LR只是对历史的记忆，并不是真正适合现在的大多数业务数据，现在的业务数据是大量离散特征导致的高维度离散数据。而树模型对这样的离散特征，是不能很好处理的，因为这容易导致过拟合。",-1),y=s("p",null,"refs: https://www.jianshu.com/p/73adce3fd975 https://www.jianshu.com/p/96173f2c2fb4",-1);function _(f,z){const a=l("ExternalLinkIcon");return i(),c("div",null,[r,s("p",null,[s("a",u,[n("LightGBM"),t(a)]),n("是轻量级（Light）的梯度提升机器（GBM）,是GBDT模型的另一个进化版本。它延续了 XGBoost 的那一套集成学习的方式，相对于xgboost， 具有训练速度快和内存占用率低的特点。")]),m,s("p",null,[n("选用"),s("a",d,[n("kaggle:avazu-ctr-prediction"),t(a)]),n(",由于样本量过大，这里仅使用10条数据做测试。")]),k,g,h,v,b,y])}const X=e(o,[["render",_],["__file","ctr.html.vue"]]);export{X as default};
