import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as i,c as o,b as s,d as n,e as c,w as l,a}from"./app-9tftCahk.js";const r="/assets/1-snPwVPS_.png",u={},d=a('<ol><li>网格搜索: 提供离散的参数组合</li><li>随机搜索: 提供参数的统计分布, 在每次迭代中, 超参值从分布中随机抽取 <ol><li>超参空间中的值并不是一样重要, 只有一部分超参值是重要的</li><li>网格搜索只能是离散值, 随机搜索可以是连续的</li></ol></li></ol><p>如下图, 网格搜索和随机搜索都进行了9个参数组合的试验:</p><ol><li>网格搜索, 在不重要的参数分布上浪费了时间, 错失了最重要的参数</li><li>随机搜索, 则将更多精力放在了重要的参数上</li></ol><figure><img src="'+r+`" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h2><h3 id="构造参数" tabindex="-1"><a class="header-anchor" href="#构造参数" aria-hidden="true">#</a> 构造参数</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>GridSearchCV<span class="token punctuation">(</span>
    estimator<span class="token operator">=</span><span class="token punctuation">,</span>                   <span class="token comment"># sklearn的模型, </span>
    param_distributionsdict <span class="token operator">=</span><span class="token punctuation">,</span>    <span class="token comment"># 字典, 包含了参数名和参数值, 参数值可以是scipy.stats.distributions的分布, 也可以是列表. 如果是分布, 则随机采样, 如果是列表则等概率抽取</span>
    n_iter<span class="token operator">=</span><span class="token punctuation">,</span>                      <span class="token comment"># 迭代次数, 抽样多少次</span>
    scoring<span class="token operator">=</span><span class="token punctuation">,</span>                     <span class="token comment"># 字符串或可调用的, 评分的方法</span>
    n_jobs<span class="token operator">=</span><span class="token punctuation">,</span>                      <span class="token comment"># 整型, 并行进程数量</span>
    refit<span class="token operator">=</span><span class="token punctuation">,</span>                       <span class="token comment"># 布尔, 将最好的参数模型在整个测试集上训练一遍</span>
    cv<span class="token operator">=</span><span class="token punctuation">,</span>                          <span class="token comment"># 整型, 交叉验证的K值, 默认为5</span>
    verbose<span class="token operator">=</span>                      <span class="token comment"># 整型, 信息详细等级</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象属性与方法" tabindex="-1"><a class="header-anchor" href="#对象属性与方法" aria-hidden="true">#</a> 对象属性与方法</h3><table><thead><tr><th>属性或方法</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>best_estimator_</td><td>模型</td><td>最优的模型, 仅在参数refit=True时可用</td></tr><tr><td>best_score_</td><td>float</td><td>最优模型的交叉验证平均分</td></tr><tr><td>best_params_</td><td>dict</td><td>最优模型的超参, 仅在参数refit=True时可用</td></tr></tbody></table><h2 id="实战" tabindex="-1"><a class="header-anchor" href="#实战" aria-hidden="true">#</a> 实战</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>datasets <span class="token keyword">import</span> load_breast_cancer 
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>neighbors <span class="token keyword">import</span> KNeighborsClassifier
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> RandomizedSearchCV<span class="token punctuation">,</span> train_test_split 
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


<span class="token comment">#               precision    recall  f1-score   support</span>
<span class="token comment"># </span>
<span class="token comment">#            0       0.89      0.87      0.88        39</span>
<span class="token comment">#            1       0.93      0.95      0.94        75</span>
<span class="token comment"># </span>
<span class="token comment">#     accuracy                           0.92       114</span>
<span class="token comment">#    macro avg       0.91      0.91      0.91       114</span>
<span class="token comment"># weighted avg       0.92      0.92      0.92       114</span>



predictions <span class="token operator">=</span> model<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>X_test<span class="token punctuation">)</span> 
<span class="token keyword">print</span><span class="token punctuation">(</span>classification_report<span class="token punctuation">(</span>y_test<span class="token punctuation">,</span> predictions<span class="token punctuation">)</span><span class="token punctuation">)</span> 

params <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;n_neighbors&#39;</span><span class="token punctuation">:</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">21</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;weights&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;uniform&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;distance&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&#39;p&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

clf_grid <span class="token operator">=</span> RandomizedSearchCV<span class="token punctuation">(</span>
    estimator<span class="token operator">=</span>KNeighborsClassifier<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    param_distributions<span class="token operator">=</span>params<span class="token punctuation">,</span>
    n_iter<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span>
    cv<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span>
    n_jobs<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span>
    verbose<span class="token operator">=</span><span class="token number">1</span>
<span class="token punctuation">)</span>

clf_grid<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>X_train<span class="token punctuation">,</span> y_train<span class="token punctuation">)</span> 

<span class="token keyword">print</span><span class="token punctuation">(</span>clf_grid<span class="token punctuation">.</span>best_params_<span class="token punctuation">)</span>  <span class="token comment"># {&#39;weights&#39;: &#39;uniform&#39;, &#39;p&#39;: 1, &#39;n_neighbors&#39;: 9}</span>
grid_predictions <span class="token operator">=</span> clf_grid<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>X_test<span class="token punctuation">)</span> 

<span class="token keyword">print</span><span class="token punctuation">(</span>classification_report<span class="token punctuation">(</span>y_test<span class="token punctuation">,</span> grid_predictions<span class="token punctuation">)</span><span class="token punctuation">)</span> 

<span class="token comment">#               precision    recall  f1-score   support</span>
<span class="token comment"># </span>
<span class="token comment">#            0       0.92      0.90      0.91        39</span>
<span class="token comment">#            1       0.95      0.96      0.95        75</span>
<span class="token comment"># </span>
<span class="token comment">#     accuracy                           0.94       114</span>
<span class="token comment">#    macro avg       0.93      0.93      0.93       114</span>
<span class="token comment"># weighted avg       0.94      0.94      0.94       114</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>随机只搜寻了10次, 但总共有20<em>2</em>2=80种可能, 所以有70种可能没有覆盖.</p>`,12),k=s("li",null,"但是计算量确大大的下降了",-1),m=a(`<p>上文中的params的n_neighbors传入的是列表, 也可传入一个分布, 如下</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> scipy<span class="token punctuation">.</span>stats <span class="token keyword">import</span> randint

params <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;n_neighbors&#39;</span><span class="token punctuation">:</span> randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;weights&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;uniform&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;distance&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&#39;p&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RandomizedSearchCV.html</li><li>https://www.jmlr.org/papers/volume13/bergstra12a/bergstra12a.pdf</li><li>https://www.datacamp.com/tutorial/parameter-optimization-machine-learning-models</li></ol>`,4);function v(b,_){const t=p("RouterLink");return i(),o("div",null,[d,s("ol",null,[s("li",null,[n("对比"),c(t,{to:"/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1_2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/%E8%B6%85%E5%8F%82%E8%B0%83%E4%BC%98_%E7%BD%91%E6%A0%BC%E6%90%9C%E5%AF%BB.html"},{default:l(()=>[n("text")]),_:1}),n(", 确实没有达到最优.")]),k]),m])}const f=e(u,[["render",v],["__file","4_4_3超参调优_随机搜寻.html.vue"]]);export{f as default};
