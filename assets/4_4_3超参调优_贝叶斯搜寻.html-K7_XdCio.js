import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-A10JnHE0.js";const t={},p=e(`<h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h2><h3 id="构造参数" tabindex="-1"><a class="header-anchor" href="#构造参数" aria-hidden="true">#</a> 构造参数</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>BayesSearchCV<span class="token punctuation">(</span>
    estimator<span class="token operator">=</span><span class="token punctuation">,</span>                 <span class="token comment"># scikitlearn模型, </span>
    search_spaces<span class="token punctuation">,</span>              <span class="token comment"># 字典, 参数空间, 等价于GridSearchCV的params_grid</span>
    optimizer_kwargs<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>      <span class="token comment"># </span>
    n_iter<span class="token operator">=</span><span class="token number">50</span><span class="token punctuation">,</span>                  <span class="token comment"># 整型, 迭代次数</span>
    scoring<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>               <span class="token comment"># 评分</span>
    fit_params<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> 
    n_jobs<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>                   <span class="token comment"># 整型, 并行</span>
    n_points<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> 
    iid<span class="token operator">=</span><span class="token string">&#39;deprecated&#39;</span><span class="token punctuation">,</span> 
    refit<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>                 <span class="token comment"># 布尔, 训练最好的参数模型</span>
    cv<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>                    <span class="token comment"># 整型, 交叉验证的K值</span>
    verbose<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>                  <span class="token comment"># 整型, 说明的详细说明</span>
    pre_dispatch<span class="token operator">=</span><span class="token string">&#39;2*n_jobs&#39;</span><span class="token punctuation">,</span> 
    random_state<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>          <span class="token comment"># 整型, 随机种子</span>
    error_score<span class="token operator">=</span><span class="token string">&#39;raise&#39;</span><span class="token punctuation">,</span> 
    return_train_score<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象属性与方法" tabindex="-1"><a class="header-anchor" href="#对象属性与方法" aria-hidden="true">#</a> 对象属性与方法</h3><table><thead><tr><th>属性或方法</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>best_estimator_</td><td>模型</td><td>最优的模型, 仅在参数refit=True时可用</td></tr><tr><td>best_score_</td><td>float</td><td>最优模型的交叉验证平均分</td></tr><tr><td>best_params_</td><td>dict</td><td>最优模型的超参, 仅在参数refit=True时可用</td></tr></tbody></table><h3 id="search-spaces定义" tabindex="-1"><a class="header-anchor" href="#search-spaces定义" aria-hidden="true">#</a> search_spaces定义</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Real<span class="token punctuation">(</span>
    low<span class="token punctuation">,</span>                <span class="token comment"># float, 下边界(闭区间)</span>
    high<span class="token punctuation">,</span>               <span class="token comment"># float, 上边界(闭区间)</span>
    prior<span class="token operator">=</span><span class="token string">&#39;uniform&#39;</span><span class="token punctuation">,</span>    <span class="token comment"># string, uniform: 均匀分布[lower, base]; log-uniform均匀分布[log(lower, base), log(upper, base)]</span>
    base<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span>            <span class="token comment"># int, prior=&#39;log-uniform&#39;时的base.</span>
    transform<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> 
    name<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> 
    dtype<span class="token operator">=</span><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;float&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Integer<span class="token punctuation">(</span>
    low<span class="token punctuation">,</span>                <span class="token comment"># float, 下边界(闭区间)</span>
    high<span class="token punctuation">,</span>               <span class="token comment"># float, 上边界(闭区间)</span>
    prior<span class="token operator">=</span><span class="token string">&#39;uniform&#39;</span><span class="token punctuation">,</span>    <span class="token comment"># string, uniform: 均匀分布[lower, base]; log-uniform均匀分布[log(lower, base), log(upper, base)]</span>
    base<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span>            <span class="token comment"># int, prior=&#39;log-uniform&#39;时的base.</span>
    transform<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> 
    name<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> 
    dtype<span class="token operator">=</span><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;numpy.int64&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Categorical<span class="token punctuation">(</span>
    categories<span class="token punctuation">,</span>         <span class="token comment"># 列表, 可能分类的取值</span>
    prior<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>         <span class="token comment"># 列表, 每个可能分类取值的权重</span>
    transform<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> 
    name<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实战" tabindex="-1"><a class="header-anchor" href="#实战" aria-hidden="true">#</a> 实战</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>datasets <span class="token keyword">import</span> load_breast_cancer 
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>neighbors <span class="token keyword">import</span> KNeighborsClassifier
<span class="token keyword">from</span> skopt <span class="token keyword">import</span> BayesSearchCV
<span class="token keyword">from</span> skopt<span class="token punctuation">.</span>space <span class="token keyword">import</span> Categorical<span class="token punctuation">,</span> Integer
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> train_test_split 
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>metrics <span class="token keyword">import</span> classification_report


dataset <span class="token operator">=</span> load_breast_cancer<span class="token punctuation">(</span><span class="token punctuation">)</span>
X<span class="token operator">=</span>dataset<span class="token punctuation">.</span>data
Y<span class="token operator">=</span>dataset<span class="token punctuation">.</span>target

X_train<span class="token punctuation">,</span> X_test<span class="token punctuation">,</span> y_train<span class="token punctuation">,</span> y_test <span class="token operator">=</span> train_test_split<span class="token punctuation">(</span> 
    X<span class="token punctuation">,</span>Y<span class="token punctuation">,</span>test_size <span class="token operator">=</span> <span class="token number">0.2</span><span class="token punctuation">,</span> random_state <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span> 

params_default <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;n_neighbors&#39;</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token string">&#39;weights&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;uniform&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;p&#39;</span><span class="token punctuation">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

model <span class="token operator">=</span> KNeighborsClassifier<span class="token punctuation">(</span><span class="token operator">**</span>params_default<span class="token punctuation">)</span>
model<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>X_train<span class="token punctuation">,</span> y_train<span class="token punctuation">)</span> 

predictions <span class="token operator">=</span> model<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>X_test<span class="token punctuation">)</span> 
<span class="token keyword">print</span><span class="token punctuation">(</span>classification_report<span class="token punctuation">(</span>y_test<span class="token punctuation">,</span> predictions<span class="token punctuation">)</span><span class="token punctuation">)</span> 

<span class="token comment">#               precision    recall  f1-score   support</span>
<span class="token comment"># </span>
<span class="token comment">#            0       0.89      0.87      0.88        39</span>
<span class="token comment">#            1       0.93      0.95      0.94        75</span>
<span class="token comment"># </span>
<span class="token comment">#     accuracy                           0.92       114</span>
<span class="token comment">#    macro avg       0.91      0.91      0.91       114</span>
<span class="token comment"># weighted avg       0.92      0.92      0.92       114</span>




params <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;n_neighbors&#39;</span><span class="token punctuation">:</span> Integer<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;weights&#39;</span><span class="token punctuation">:</span> Categorical<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;uniform&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;distance&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;p&#39;</span><span class="token punctuation">:</span> Integer<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

clf_grid <span class="token operator">=</span> BayesSearchCV<span class="token punctuation">(</span>
    estimator<span class="token operator">=</span>KNeighborsClassifier<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    search_spaces<span class="token operator">=</span>params<span class="token punctuation">,</span>
    n_iter<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">,</span>
    cv<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span>
    n_jobs<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span>
    verbose<span class="token operator">=</span><span class="token number">0</span>
<span class="token punctuation">)</span>

clf_grid<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>X_train<span class="token punctuation">,</span> y_train<span class="token punctuation">)</span> 

<span class="token keyword">print</span><span class="token punctuation">(</span>clf_grid<span class="token punctuation">.</span>best_params_<span class="token punctuation">)</span>  <span class="token comment"># (&#39;n_neighbors&#39;, 8), (&#39;p&#39;, 1), (&#39;weights&#39;, &#39;uniform&#39;)</span>
grid_predictions <span class="token operator">=</span> clf_grid<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>X_test<span class="token punctuation">)</span> 

<span class="token keyword">print</span><span class="token punctuation">(</span>classification_report<span class="token punctuation">(</span>y_test<span class="token punctuation">,</span> grid_predictions<span class="token punctuation">)</span><span class="token punctuation">)</span> 

<span class="token comment">#               precision    recall  f1-score   support</span>
<span class="token comment"># </span>
<span class="token comment">#            0       0.92      0.92      0.92        39</span>
<span class="token comment">#            1       0.96      0.96      0.96        75</span>
<span class="token comment"># </span>
<span class="token comment">#     accuracy                           0.95       114</span>
<span class="token comment">#    macro avg       0.94      0.94      0.94       114</span>
<span class="token comment"># weighted avg       0.95      0.95      0.95       114</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://scikit-optimize.readthedocs.io/en/stable/modules/generated/skopt.BayesSearchCV.html</li><li>https://www.geeksforgeeks.org/hyperparameter-optimization-based-on-bayesian-optimization/</li><li>https://machinelearningmastery.com/scikit-optimize-for-hyperparameter-tuning-in-machine-learning/</li><li>https://inside-machinelearning.com/en/bayesian-optimization/</li><li>https://scikit-learn.org/stable/modules/grid_search.html</li><li>http://blairhudson.com/blog/posts/optimising-hyper-parameters-efficiently-with-scikit-optimize/</li><li>https://www.kaggle.com/code/lucamassaron/tutorial-bayesian-optimization-with-xgboost</li><li>https://keramatfar-a-s.medium.com/stop-using-gridsearchcv-c298afaa65cf</li><li>https://www.cnblogs.com/wmx24/p/10025600.html</li><li>https://towardsdatascience.com/automated-machine-learning-hyperparameter-tuning-in-python-dfda59b72f8a</li></ol>`,13),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","4_4_3超参调优_贝叶斯搜寻.html.vue"]]);export{d as default};
