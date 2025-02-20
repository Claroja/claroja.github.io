import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-9tftCahk.js";const p={},e=t(`<ol><li>试验不同模型默认参数的表现</li><li>计算不同模型预测结果的相似度, 将相似度高的模型剔除</li><li>对剩余的模型进行超参搜索, 详见其他文章</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> sklearn <span class="token keyword">import</span> svm<span class="token punctuation">,</span> tree<span class="token punctuation">,</span> linear_model<span class="token punctuation">,</span> neighbors<span class="token punctuation">,</span> naive_bayes<span class="token punctuation">,</span> ensemble<span class="token punctuation">,</span> discriminant_analysis<span class="token punctuation">,</span> gaussian_process
<span class="token keyword">from</span> xgboost <span class="token keyword">import</span> XGBClassifier
<span class="token keyword">from</span> sklearn <span class="token keyword">import</span> model_selection
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">from</span> sklearn <span class="token keyword">import</span> datasets
<span class="token keyword">import</span> seaborn <span class="token keyword">as</span> sns
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt

<span class="token comment"># 创建模型</span>
MLA <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">#Ensemble Methods</span>
    ensemble<span class="token punctuation">.</span>AdaBoostClassifier<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    ensemble<span class="token punctuation">.</span>BaggingClassifier<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    ensemble<span class="token punctuation">.</span>ExtraTreesClassifier<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    ensemble<span class="token punctuation">.</span>GradientBoostingClassifier<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    ensemble<span class="token punctuation">.</span>RandomForestClassifier<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    
    <span class="token comment">#Gaussian Processes</span>
    gaussian_process<span class="token punctuation">.</span>GaussianProcessClassifier<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    
    <span class="token comment">#GLM</span>
    linear_model<span class="token punctuation">.</span>LogisticRegressionCV<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    linear_model<span class="token punctuation">.</span>PassiveAggressiveClassifier<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    linear_model<span class="token punctuation">.</span>RidgeClassifierCV<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    linear_model<span class="token punctuation">.</span>SGDClassifier<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    linear_model<span class="token punctuation">.</span>Perceptron<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    
    <span class="token comment">#Navies Bayes</span>
    naive_bayes<span class="token punctuation">.</span>BernoulliNB<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    naive_bayes<span class="token punctuation">.</span>GaussianNB<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    
    <span class="token comment">#Nearest Neighbor</span>
    neighbors<span class="token punctuation">.</span>KNeighborsClassifier<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    
    <span class="token comment">#SVM</span>
    svm<span class="token punctuation">.</span>SVC<span class="token punctuation">(</span>probability<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    svm<span class="token punctuation">.</span>NuSVC<span class="token punctuation">(</span>probability<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    svm<span class="token punctuation">.</span>LinearSVC<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    
    <span class="token comment">#Trees    </span>
    tree<span class="token punctuation">.</span>DecisionTreeClassifier<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    tree<span class="token punctuation">.</span>ExtraTreeClassifier<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    
    <span class="token comment">#Discriminant Analysis</span>
    discriminant_analysis<span class="token punctuation">.</span>LinearDiscriminantAnalysis<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    discriminant_analysis<span class="token punctuation">.</span>QuadraticDiscriminantAnalysis<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">#xgboost</span>
    XGBClassifier<span class="token punctuation">(</span><span class="token punctuation">)</span>    
    <span class="token punctuation">]</span>

<span class="token comment"># 导入数据</span>
iris_data <span class="token operator">=</span> datasets<span class="token punctuation">.</span>load_iris<span class="token punctuation">(</span><span class="token punctuation">)</span>
MLA_compare <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span>
    columns <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;MLA Name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;MLA Parameters&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;MLA Train Accuracy Mean&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;MLA Test Accuracy Mean&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;MLA Test Accuracy 3*STD&#39;</span> <span class="token punctuation">,</span><span class="token string">&#39;MLA Time&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span>

MLA_predict <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string">&#39;target&#39;</span><span class="token punctuation">:</span> iris_data<span class="token punctuation">[</span><span class="token string">&#39;target&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token keyword">for</span> row_index<span class="token punctuation">,</span> alg <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>MLA<span class="token punctuation">)</span><span class="token punctuation">:</span>

    MLA_name <span class="token operator">=</span> alg<span class="token punctuation">.</span>__class__<span class="token punctuation">.</span>__name__  <span class="token comment"># 模型的名称</span>
    MLA_compare<span class="token punctuation">.</span>loc<span class="token punctuation">[</span>row_index<span class="token punctuation">,</span> <span class="token string">&#39;MLA Name&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> MLA_name
    MLA_compare<span class="token punctuation">.</span>loc<span class="token punctuation">[</span>row_index<span class="token punctuation">,</span> <span class="token string">&#39;MLA Parameters&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">(</span>alg<span class="token punctuation">.</span>get_params<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 模型的参数</span>

    cv_results <span class="token operator">=</span> model_selection<span class="token punctuation">.</span>cross_validate<span class="token punctuation">(</span>
        alg<span class="token punctuation">,</span> 
        iris_data<span class="token punctuation">[</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
        iris_data<span class="token punctuation">[</span><span class="token string">&#39;target&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
        cv  <span class="token operator">=</span> model_selection<span class="token punctuation">.</span>ShuffleSplit<span class="token punctuation">(</span>n_splits <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> test_size <span class="token operator">=</span> <span class="token number">.3</span><span class="token punctuation">,</span> train_size <span class="token operator">=</span> <span class="token number">.6</span><span class="token punctuation">,</span> random_state <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment"># 共跑模型10次, 每次按6)%训练集, 30测试集分割, 并丢弃10%的数据</span>
        return_train_score<span class="token operator">=</span><span class="token boolean">True</span>
    <span class="token punctuation">)</span>  <span class="token comment"># 交叉验证</span>

    MLA_compare<span class="token punctuation">.</span>loc<span class="token punctuation">[</span>row_index<span class="token punctuation">,</span> <span class="token string">&#39;MLA Time&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> cv_results<span class="token punctuation">[</span><span class="token string">&#39;fit_time&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>mean<span class="token punctuation">(</span><span class="token punctuation">)</span>
    MLA_compare<span class="token punctuation">.</span>loc<span class="token punctuation">[</span>row_index<span class="token punctuation">,</span> <span class="token string">&#39;MLA Train Accuracy Mean&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> cv_results<span class="token punctuation">[</span><span class="token string">&#39;train_score&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>mean<span class="token punctuation">(</span><span class="token punctuation">)</span>
    MLA_compare<span class="token punctuation">.</span>loc<span class="token punctuation">[</span>row_index<span class="token punctuation">,</span> <span class="token string">&#39;MLA Test Accuracy Mean&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> cv_results<span class="token punctuation">[</span><span class="token string">&#39;test_score&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>mean<span class="token punctuation">(</span><span class="token punctuation">)</span>   
    MLA_compare<span class="token punctuation">.</span>loc<span class="token punctuation">[</span>row_index<span class="token punctuation">,</span> <span class="token string">&#39;MLA Test Accuracy 3*STD&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> cv_results<span class="token punctuation">[</span><span class="token string">&#39;test_score&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>std<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">3</span>   <span class="token comment"># 3sigma, 99.7%, 看最坏的情况是多少</span>

    <span class="token comment"># 保存预测结果, 用来比较模型预测结果的相似度</span>
    alg<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>iris_data<span class="token punctuation">[</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> iris_data<span class="token punctuation">[</span><span class="token string">&#39;target&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    MLA_predict<span class="token punctuation">[</span>MLA_name<span class="token punctuation">]</span> <span class="token operator">=</span> alg<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>iris_data<span class="token punctuation">[</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

MLA_compare <span class="token operator">=</span> MLA_compare<span class="token punctuation">.</span>sort_values<span class="token punctuation">(</span>by <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;MLA Test Accuracy Mean&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> ascending <span class="token operator">=</span> <span class="token boolean">False</span><span class="token punctuation">)</span>


<span class="token comment"># 可视化</span>

_ <span class="token punctuation">,</span> ax <span class="token operator">=</span> plt<span class="token punctuation">.</span>subplots<span class="token punctuation">(</span>figsize <span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

_ <span class="token operator">=</span> sns<span class="token punctuation">.</span>heatmap<span class="token punctuation">(</span>
    MLA_predict<span class="token punctuation">.</span>corr<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
    cmap <span class="token operator">=</span> sns<span class="token punctuation">.</span>diverging_palette<span class="token punctuation">(</span><span class="token number">220</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> as_cmap <span class="token operator">=</span> <span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    square<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> 
    cbar_kws<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;shrink&#39;</span><span class="token punctuation">:</span><span class="token number">.9</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    ax<span class="token operator">=</span>ax<span class="token punctuation">,</span>
    annot<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> 
    linewidths<span class="token operator">=</span><span class="token number">0.1</span><span class="token punctuation">,</span>
    vmax<span class="token operator">=</span><span class="token number">1.0</span><span class="token punctuation">,</span> 
    linecolor<span class="token operator">=</span><span class="token string">&#39;white&#39;</span><span class="token punctuation">,</span>
    annot_kws<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;fontsize&#39;</span><span class="token punctuation">:</span><span class="token number">12</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","4_3_1模型选择_Ensemble.html.vue"]]);export{k as default};
