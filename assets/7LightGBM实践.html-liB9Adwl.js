import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,a as e}from"./app-9tftCahk.js";const t={},o=e(`<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><p>LGBMModel是LGBMClassifier, LGBMRegressor,LGBMRanker的父类, 不建议直接使用. 而建议使用LGBMClassifier, LGBMRegressor,LGBMRanker, 因为他们提供了合适的损失函数, 以及合适的输出, 比如而建议使用LGBMClassifier可以输出概率.</p><h3 id="lgbmclassifier" tabindex="-1"><a class="header-anchor" href="#lgbmclassifier" aria-hidden="true">#</a> LGBMClassifier</h3><ol><li><p>构造参数</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>lightgbm<span class="token punctuation">.</span>LGBMClassifier<span class="token punctuation">(</span>
    boosting_type<span class="token operator">=</span><span class="token string">&#39;gbdt&#39;</span><span class="token punctuation">,</span>           <span class="token comment"># str, ‘gbdt’, traditional Gradient Boosting Decision Tree. ‘dart’, Dropouts meet Multiple Additive Regression Trees. ‘rf’, Random Forest.</span>
    num_leaves<span class="token operator">=</span><span class="token number">31</span><span class="token punctuation">,</span>                  <span class="token comment"># int, 每棵基树最大叶子节点个数</span>
    max_depth<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>                   <span class="token comment"># int, 每棵基树的深度</span>
    learning_rate<span class="token operator">=</span><span class="token number">0.1</span><span class="token punctuation">,</span>              <span class="token comment"># float, 学习速率</span>
    n_estimators<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">,</span>               <span class="token comment"># int, 子树的个数</span>
    subsample_for_bin<span class="token operator">=</span><span class="token number">200000</span><span class="token punctuation">,</span>       <span class="token comment"># int, 构建列直方图时，每个特征都会被分箱，此参数控制单个特征的单个箱子所能容纳的最多样本数。</span>
    objective<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>                 <span class="token comment"># str, 目标类型, Default: ‘regression’ for LGBMRegressor, ‘binary’ or ‘multiclass’ for LGBMClassifier, ‘lambdarank’ for LGBMRanker.</span>
    class_weight<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>              <span class="token comment"># dict, &#39;balanced&#39; or None, balanced则自动，比如三类，0类10个，1类90个，2类900个，则自动将0类权重设为1000/10=100,1类为1000/90,2类为1000/900,很大的系数，会被优先照顾，一般设置了权重，则模型会重点找全这个类别，但隐患是可能会增加误判，简称召回棒棒哒、精确率血崩。如果传字典就要一一对应，比如{&#39;0&#39;:100,&#39;1&#39;:11,&#39;2&#39;:1.1}，默认无，大家都是1。</span>
    min_split_gain<span class="token operator">=</span><span class="token number">0.0</span><span class="token punctuation">,</span>             <span class="token comment"># float, 分裂要求最小的增益</span>
    min_child_weight<span class="token operator">=</span><span class="token number">0.001</span><span class="token punctuation">,</span>         <span class="token comment"># float, 叶子节点要求的样本最小权重之和</span>
    min_child_samples<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">,</span>           <span class="token comment"># int, 叶子节点要求样本最小个数</span>
    subsample<span class="token operator">=</span><span class="token number">1.0</span><span class="token punctuation">,</span>                  <span class="token comment"># float, 行采样比例，0-1之间，一般设个0.6~0.8左右，有助于加快速度和控制过拟合，也是不放回抽样。</span>
    subsample_freq<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>               <span class="token comment"># int, 0表示不适用bagging采样, 正数表示没k个迭代 做一次bagging采样.</span>
    colsample_bytree<span class="token operator">=</span><span class="token number">1.0</span><span class="token punctuation">,</span>           <span class="token comment"># float, 每棵基树的列采样比例</span>
    reg_alpha<span class="token operator">=</span><span class="token number">0.0</span><span class="token punctuation">,</span>                  <span class="token comment"># float, L1正则</span>
    reg_lambda<span class="token operator">=</span><span class="token number">0.0</span><span class="token punctuation">,</span>                 <span class="token comment"># float, L2正则</span>
    random_state<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>              <span class="token comment"># int, 随机种子</span>
    n_jobs<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>                    <span class="token comment"># int or None, 并行度</span>
    importance_type<span class="token operator">=</span><span class="token string">&#39;split&#39;</span><span class="token punctuation">,</span>        <span class="token comment"># str, 特征重要性计算方式，一个是算用到过多少次，一个是算分裂带来的增益，树模型在此处有个问题，就是一个特征一旦被使用，特别是第一个，往往会造成很高的增益，比如feature-A实际上只比feature-B，划分增益高一点，但模型肯定选了A，那么下一步B带来的增益会减很多，实际上B只比A稍微弱一点，但算gain的话，B会比A少很多，虽然随机抽列会降低这个影响，但并不能完全消除。</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>实例方法</p><ol><li>fit(X, y[, sample_weight, init_score, ...])</li><li>get_params([deep])</li><li>predict(X[, raw_score, start_iteration, ...])</li><li>predict_proba(X[, raw_score, ...])</li><li>score(X, y[, sample_weight])</li></ol></li><li><p>实例属性</p><ol><li>best_iteration_: 迭代中最好表现的模型, 前提要设置early_stopping()回调函数</li><li>classes_: 目标数组</li><li>feature_importances_: 特征重要程度</li><li>feature_name_: 特征数组</li><li>n_classes_: 目标个数</li><li>n_estimators_: 模型个数</li><li>n_features_: 特征个数</li><li>n_features_in_:</li><li>n_iter_: 迭代次数</li></ol></li><li><p>fit(X, y[, sample_weight, init_score, ...])</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fit<span class="token punctuation">(</span>
    X<span class="token punctuation">,</span>                          <span class="token comment"># numpy array, pandas DataFrame, scipy.sparse, 二维数组[n_samples, n_features], 元素是int或者float</span>
    y<span class="token punctuation">,</span>                          <span class="token comment"># numpy array, pandas DataFrame or Series, [n_samples], 元素是int或float</span>
    sample_weight<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>         <span class="token comment"># numpy array, pandas Series, [n_samples], 元素是int或float, 或者为None</span>
    init_score<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>            <span class="token comment"># 训练集样本初始得分</span>
    eval_set<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>              <span class="token comment"># list or None, A list of (X, y) tuple, 作为验证集</span>
    eval_names<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>            <span class="token comment"># list of str, or None, 验证集的名字</span>
    eval_sample_weight<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>    <span class="token comment"># 验证集样本权重</span>
    eval_class_weight<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>     <span class="token comment"># 验证集特征权重</span>
    eval_init_score<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>       <span class="token comment"># 验证集样本初始得分</span>
    eval_metric<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>           <span class="token comment"># str, callable, list or None, 评估模型的好坏的指标, 默认‘l2’ for LGBMRegressor, ‘logloss’ for LGBMClassifier, ‘ndcg’ for LGBMRanker.</span>
    feature_name<span class="token operator">=</span><span class="token string">&#39;auto&#39;</span><span class="token punctuation">,</span>        <span class="token comment"># list of str, or &#39;auto&#39;, 特征名字, &#39;auto&#39;表示使用dataframe的列名</span>
    categorical_feature<span class="token operator">=</span><span class="token string">&#39;auto&#39;</span><span class="token punctuation">,</span> <span class="token comment"># list of str or int, or &#39;auto&#39;, 如果是&#39;auto&#39;则会自动检测并使用dataframe的unordered categorical columns. 建议从0开始编码, float将会直接取整, 负数当成缺失值处理.</span>
    callbacks<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>             <span class="token comment"># list of callable, or None, 每次迭代后调用</span>
    init_model<span class="token operator">=</span><span class="token boolean">None</span>             <span class="token comment"># str, pathlib.Path, Booster, LGBMModel or None, 使用预训练的模型</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>group：每个查询组的大小，必须在 fit 方法中提供。 eval_at=[1, 2, 3]：评估排序性能时使用的排名位置。</p><h3 id="boosting-type-gbdt" tabindex="-1"><a class="header-anchor" href="#boosting-type-gbdt" aria-hidden="true">#</a> boosting_type=&#39;gbdt&#39;</h3><p>提升树的类型，常用的梯度提升方法包括gbdt、dart、goss、rf。可以尝试运行不同类型的渐变增强提升方法。</p><ol><li><p>gbdt：这是传统的梯度提升决策树，也是基于XGBoost和pGBRT等优秀库背后的算法。gbdt精度高、效率高、稳定性好，目前已得到广泛的应用。但是，它的主要缺点是，在每个树节点中找到最佳分割点非常耗时，而且会消耗内存。下边其它的提升方法试图解决这个问题。</p></li><li><p>dart：即Dropouts meet Multiple Additive Regression Trees，dart利用dropout技巧(源自深度神经网络)解决过拟合的Regression Trees，改进模型正则化。gbdt存在过度专门化（over-specialization）的问题，这意味着在以后的迭代中添加的树往往只会影响对少数实例的预测，而对其余实例的贡献则可以忽略不计。添加dropout会使树在以后的迭代中更加难以专门化那些少数的示例，从而提高性能。</p><p>它的原理是随机丢弃生成的决策树，然后再从剩下的决策树集中迭代优化提升树。它的特点是</p><ol><li>训练慢：因为随机dropout不使用用于保存预测结果的buffer，所以训练会更慢。</li><li>随机导致不稳定：因为随机，早停可能不够稳定。</li></ol><p>dart与gbdt的不同点：计算下一棵树要拟合的梯度的时，仅仅随机从已经生成的树中选取一部分。</p></li><li><p>goss ：基于梯度的单边采样，该方法命名为lightgbm的最重要原因就是其使用了基于Goss方法。goss的基本思想是首先对训练集数据根据梯度排序，预设一个比例划分梯度大小，保留在所有样本中梯度大的数据样本；再设置一个采样比例，从梯度小的样本中按比例抽取样本。为了弥补对样本分布造成的影响，goss算法在计算信息增益时，会对较小梯度的数据集乘以一个系数，用来放大。这样，在计算信息增益时，算法可以更加关注“未被充分训练”的样本数据。 goss通过对较小的样本数据集估算增益，大大的减少了计算量。而且通过证明，goss算法不会过多的降低训练的精度。</p><p>标准的gbdt是可靠的，但在大型数据集上速度不够快。因此goss提出了一种基于梯度的采样方法来避免搜索整个搜索空间。其实，对于每个数据实例，当梯度很小时，这意味着不用担心数据是经过良好训练的，而当梯度很大时，应该重新训练。数据实例有大的和小的渐变。因此，goss以一个大的梯度保存所有数据，并对一个小梯度的数据进行随机抽样(这就是为什么它被称为单边抽样)。这使得搜索空间更小，goss的收敛速度更快。</p></li><li><p>rf ：随机森林。切记，如果将增强设置为rf，那么lightgbm算法表现为随机森林而不是增强树。根据文档可知，要使用rf，必须使用bagging_fraction和feature_fraction小于1。</p></li></ol><h2 id="超参调整" tabindex="-1"><a class="header-anchor" href="#超参调整" aria-hidden="true">#</a> 超参调整</h2><ol><li>通用参数： <ol><li>n_estimators：提升树的数量。初始值可以设为 100，然后根据模型性能逐步增加或减少。</li><li>learning_rate：学习率。初始值可以设为 0.1，如果模型过拟合，可以尝试降低学习率。</li><li>max_depth：树的最大深度。初始值可以设为 5 或 6，然后根据模型性能进行调整。</li><li>num_leaves：每棵树的最大叶子数。初始值可以设为 31，然后根据模型性能进行调整。</li><li>min_child_samples：叶子节点的最小样本数。初始值可以设为 20，如果数据集中有少量样本，可以适当减少这个值。</li></ol></li><li>正则化参数： reg_alpha：L1 正则化系数。初始值可以设为 0，如果模型过拟合，可以尝试增加这个值。 reg_lambda：L2 正则化系数。初始值可以设为 0，如果模型过拟合，可以尝试增加这个值。</li><li>子采样参数： subsample：每棵树训练时使用的样本比例。初始值可以设为 1.0，如果数据集较大，可以尝试减小这个值（例如 0.8）。 colsample_bytree：每棵树训练时使用的特征比例。初始值可以设为 1.0，如果特征数量较多，可以尝试减小这个值（例如 0.8）。</li><li>特定任务： 类别不平衡：如果数据集中类别不平衡，可以使用 class_weight=&#39;balanced&#39; 或者手动设置 scale_pos_weight。 多分类：对于多分类任务，可以尝试增加 n_estimators 和 max_depth，因为多分类任务通常需要更复杂的模型。</li></ol><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://lightgbm.readthedocs.io/en/latest/pythonapi/lightgbm.LGBMClassifier.html</li><li>https://datascience.stackexchange.com/questions/45356/what-is-the-difference-between-lightgbm-lgbmmodel-and-lightgbm-lgbmclassifier</li><li>https://blog.csdn.net/TravelLight92/article/details/136624270</li><li>https://www.cnblogs.com/dzqdzq/p/14055567.html</li><li>https://bbs.huaweicloud.com/blogs/252840</li><li>https://blog.csdn.net/m0_73972962/article/details/131387816</li><li>https://coderzcolumn.com/tutorials/machine-learning/lightgbm-an-in-depth-guide-python</li></ol>`,12),l=[o];function p(i,c){return n(),a("div",null,l)}const d=s(t,[["render",p],["__file","7LightGBM实践.html.vue"]]);export{d as default};
