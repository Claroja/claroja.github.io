import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-A10JnHE0.js";const t={},p=e(`<h1 id="超参调优-网格搜索" tabindex="-1"><a class="header-anchor" href="#超参调优-网格搜索" aria-hidden="true">#</a> 超参调优_网格搜索</h1><h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h2><h3 id="构造参数" tabindex="-1"><a class="header-anchor" href="#构造参数" aria-hidden="true">#</a> 构造参数</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>GridSearchCV<span class="token punctuation">(</span>
    estimator<span class="token operator">=</span><span class="token punctuation">,</span>     <span class="token comment"># sklearn的模型, </span>
    param_grid<span class="token operator">=</span><span class="token punctuation">,</span>    <span class="token comment"># 字典, 包含了参数名和参数值的列表</span>
    scoring<span class="token operator">=</span><span class="token punctuation">,</span>       <span class="token comment"># 字符串或可调用的, 评分的方法</span>
    n_jobs<span class="token operator">=</span><span class="token punctuation">,</span>        <span class="token comment"># 整型, 并行进程数量</span>
    refit<span class="token operator">=</span><span class="token punctuation">,</span>         <span class="token comment"># 布尔, 将最好的参数模型在整个测试集上训练一遍</span>
    cv<span class="token operator">=</span><span class="token punctuation">,</span>            <span class="token comment"># 整型, 交叉验证的K值, 默认为5</span>
    verbose<span class="token operator">=</span>        <span class="token comment"># 整型, 信息详细等级</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象属性与方法" tabindex="-1"><a class="header-anchor" href="#对象属性与方法" aria-hidden="true">#</a> 对象属性与方法</h3><table><thead><tr><th>属性或方法</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>best_estimator_</td><td>模型</td><td>最优的模型, 仅在参数refit=True时可用</td></tr><tr><td>best_score_</td><td>float</td><td>最优模型的交叉验证平均分</td></tr><tr><td>best_params_</td><td>dict</td><td>最优模型的超参, 仅在参数refit=True时可用</td></tr></tbody></table><h2 id="实践" tabindex="-1"><a class="header-anchor" href="#实践" aria-hidden="true">#</a> 实践</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>datasets <span class="token keyword">import</span> load_breast_cancer 
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>neighbors <span class="token keyword">import</span> KNeighborsClassifier
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> GridSearchCV<span class="token punctuation">,</span> train_test_split 
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
    <span class="token string">&#39;n_neighbors&#39;</span><span class="token punctuation">:</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">21</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;weights&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;uniform&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;distance&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&#39;p&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

clf_grid <span class="token operator">=</span> GridSearchCV<span class="token punctuation">(</span>
    estimator<span class="token operator">=</span>KNeighborsClassifier<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    param_grid<span class="token operator">=</span>params<span class="token punctuation">,</span>
    cv<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span>
    n_jobs<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span>
    verbose<span class="token operator">=</span><span class="token number">1</span>
<span class="token punctuation">)</span>

clf_grid<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>X_train<span class="token punctuation">,</span> y_train<span class="token punctuation">)</span> 

<span class="token keyword">print</span><span class="token punctuation">(</span>clf_grid<span class="token punctuation">.</span>best_params_<span class="token punctuation">)</span>  <span class="token comment"># {&#39;n_neighbors&#39;: 8, &#39;p&#39;: 1, &#39;weights&#39;: &#39;uniform&#39;}</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GridSearchCV.html</li><li>https://www.mygreatlearning.com/blog/gridsearchcv/</li><li>https://datagy.io/sklearn-gridsearchcv/</li></ol>`,10),i=[p];function c(o,l){return s(),a("div",null,i)}const d=n(t,[["render",c],["__file","4_4_3超参调优_网格搜寻.html.vue"]]);export{d as default};
