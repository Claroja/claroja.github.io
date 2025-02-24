import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-A10JnHE0.js";const p={},e=t(`<h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h2><h3 id="构造参数" tabindex="-1"><a class="header-anchor" href="#构造参数" aria-hidden="true">#</a> 构造参数</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">sklearn</span><span class="token punctuation">.</span>ensemble<span class="token punctuation">.</span>RandomForestClassifier<span class="token punctuation">(</span>
    n_estimators<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">,</span>                   <span class="token comment"># int, 树的个数</span>
    <span class="token operator">*</span><span class="token punctuation">,</span>
    criterion<span class="token operator">=</span><span class="token string">&#39;gini&#39;</span><span class="token punctuation">,</span>                   <span class="token comment"># {“gini”, “entropy”, “log_loss”}, 分裂点选择指标</span>
    max_depth<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>                     <span class="token comment"># int, 树的深度, 如果不设定, 则树会无限延伸直至纯净或达到min_samples_split的值</span>
    min_samples_split<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span>                <span class="token comment"># int or float, 节点最小分裂的数据量, 如果为float, 该值为该节点的样本量*该值</span>
    min_samples_leaf<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>                 <span class="token comment"># int or float, 叶节点最少的样本量</span>
    min_weight_fraction_leaf<span class="token operator">=</span><span class="token number">0.0</span><span class="token punctuation">,</span>       <span class="token comment"># float, 如果我们设置 min_weight_fraction_leaf 为0.1，这意味着每个叶节点在所有输入样本中的权重总和至少要达到10%</span>
    max_features<span class="token operator">=</span><span class="token string">&#39;sqrt&#39;</span><span class="token punctuation">,</span>                <span class="token comment"># {“sqrt”, “log2”, None}, int or float, 每次分裂选择的特征数, 除了int外, 其他都是和数据总特征相关</span>
    max_leaf_nodes<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>                <span class="token comment"># int, 最大叶子节点个数</span>
    min_impurity_decrease<span class="token operator">=</span><span class="token number">0.0</span><span class="token punctuation">,</span>          <span class="token comment"># float, 节点的impurity值小于该值时, 将不再分裂</span>
    bootstrap<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>                     <span class="token comment"># bool, bootstrap抽样</span>
    oob_score<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>                    <span class="token comment"># bool or callable, 是否使用OOB_Score, 默认使用accuracy_score</span>
    n_jobs<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>                        <span class="token comment"># int, 并行度</span>
    random_state<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>                  <span class="token comment"># int, RandomState instance or None, 随机种子</span>
    verbose<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>                          <span class="token comment"># int, 训练记录</span>
    warm_start<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>                   <span class="token comment"># bool, 热启动, 如果为True, 重复使用配置, 降低训练时间</span>
    class_weight<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>                  <span class="token comment"># {“balanced”, “balanced_subsample”}, dict or list of dicts, 样本的权重</span>
    ccp_alpha<span class="token operator">=</span><span class="token number">0.0</span><span class="token punctuation">,</span>                      <span class="token comment"># non-negative float, Minimal Cost-Complexity Pruning</span>
    max_samples<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>                   <span class="token comment"># int or float, bootstrap抽样时的样本数量, 默认和整体相同</span>
    monotonic_cst<span class="token operator">=</span><span class="token boolean">None</span>                  <span class="token comment"># array-like of int of shape (n_features), </span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象属性" tabindex="-1"><a class="header-anchor" href="#对象属性" aria-hidden="true">#</a> 对象属性</h3><ol><li>estimator_:</li><li>estimators_: list, 子树数组</li><li>classes_: ndarray of shape (n_classes,) or a list of such arrays, 目标数组</li><li>n_classes_: int or list, 目标个数</li><li>n_features_in_: int, 特征个数</li><li>feature_names_in_: ndarray of shape, 特征数组</li><li>n_outputs_: int</li><li>feature_importances_: ndarray of shape (n_features,), 特征重要程度</li><li>oob_score_: float, OOB得分</li><li>oob_decision_function_:</li></ol><h3 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h3><ol><li>apply(X): 返回叶节点</li><li>decision_path(X): 返回决策路径</li><li>fit(X, y, sample_weight=None): 训练</li><li>get_metadata_routing()</li><li>get_params(deep=True)</li><li>predict(X): 预测</li><li>predict_log_proba(X):</li><li>predict_proba(X): 预测概率</li><li>score(X, y, sample_weight=None): 计算得分</li><li>set_fit_request()</li><li>set_params(**params)</li><li>set_score_request()</li></ol><h2 id="实战" tabindex="-1"><a class="header-anchor" href="#实战" aria-hidden="true">#</a> 实战</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> train_test_split
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>ensemble <span class="token keyword">import</span> RandomForestClassifier
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>metrics <span class="token keyword">import</span> accuracy_score
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> GridSearchCV

data_all <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span>
    <span class="token string">&#39;./data/train.csv&#39;</span><span class="token punctuation">,</span> 
    usecols<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;Survived&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Pclass&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sex&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Age&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;SibSp&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Parch&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Fare&#39;</span><span class="token punctuation">,</span>  <span class="token string">&#39;Embarked&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

data_all <span class="token operator">=</span> data_all<span class="token punctuation">.</span>dropna<span class="token punctuation">(</span><span class="token punctuation">)</span>

data_all <span class="token operator">=</span> pd<span class="token punctuation">.</span>merge<span class="token punctuation">(</span>data_all<span class="token punctuation">,</span> pd<span class="token punctuation">.</span>get_dummies<span class="token punctuation">(</span>data_all<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;Sex&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Embarked&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> how<span class="token operator">=</span><span class="token string">&quot;inner&quot;</span><span class="token punctuation">,</span> left_index<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> right_index<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
data_all <span class="token operator">=</span> data_all<span class="token punctuation">.</span>drop<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;Sex&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Embarked&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>

data_y <span class="token operator">=</span> data_all<span class="token punctuation">[</span><span class="token string">&#39;Survived&#39;</span><span class="token punctuation">]</span>
data_x <span class="token operator">=</span> data_all<span class="token punctuation">.</span>drop<span class="token punctuation">(</span><span class="token string">&#39;Survived&#39;</span><span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>


X_train<span class="token punctuation">,</span> X_test<span class="token punctuation">,</span> y_train<span class="token punctuation">,</span> y_test <span class="token operator">=</span> train_test_split<span class="token punctuation">(</span>data_x<span class="token punctuation">,</span> data_y<span class="token punctuation">,</span> random_state <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">)</span>

params <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;n_estimators&#39;</span><span class="token punctuation">:</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">201</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;max_depth&#39;</span><span class="token punctuation">:</span>  <span class="token punctuation">[</span><span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&#39;criterion&#39;</span><span class="token punctuation">:</span>  <span class="token punctuation">[</span><span class="token string">&#39;gini&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;entropy&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&#39;max_features&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token string">&#39;sqrt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;log2&#39;</span><span class="token punctuation">,</span> <span class="token number">0.2</span><span class="token punctuation">,</span> <span class="token number">0.4</span><span class="token punctuation">,</span> <span class="token number">0.6</span><span class="token punctuation">,</span> <span class="token number">0.8</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&#39;random_state&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span>
    
<span class="token punctuation">}</span>

clf_grid <span class="token operator">=</span> GridSearchCV<span class="token punctuation">(</span>
    estimator<span class="token operator">=</span>RandomForestClassifier<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    param_grid<span class="token operator">=</span>params<span class="token punctuation">,</span>
    cv<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span>
    n_jobs<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span>
    verbose<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

clf_grid<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>X_train<span class="token punctuation">,</span> y_train<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>accuracy_score<span class="token punctuation">(</span>y_test<span class="token punctuation">,</span> clf_grid<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>X_test<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 0.79</span>
clf_grid<span class="token punctuation">.</span>best_params_ 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html</li><li>https://stackabuse.com/random-forest-algorithm-with-python-and-scikit-learn/</li><li>https://towardsdatascience.com/random-forest-in-python-24d0893d51c0</li><li>https://towardsdatascience.com/random-forest-explained-a-visual-guide-with-code-examples-9f736a6e1b3c</li></ol>`,11),o=[e];function l(c,i){return s(),a("div",null,o)}const k=n(p,[["render",l],["__file","3_2随机森林实战_scikitlearn_超参搜索.html.vue"]]);export{k as default};
