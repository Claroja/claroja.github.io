import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-7knaTE3M.js";const e={},p=t(`<p>LGBMRanker模型和LambdaMART的原理很像。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>classlightgbm<span class="token punctuation">.</span>LGBMRanker<span class="token punctuation">(</span>
    boosting_type<span class="token operator">=</span><span class="token string">&#39;gbdt&#39;</span><span class="token punctuation">,</span>
    num_leaves<span class="token operator">=</span><span class="token number">31</span><span class="token punctuation">,</span>
    max_depth<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
    learning_rate<span class="token operator">=</span><span class="token number">0.1</span><span class="token punctuation">,</span>
    n_estimators<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">,</span>
    subsample_for_bin<span class="token operator">=</span><span class="token number">200000</span><span class="token punctuation">,</span>
    objective<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
    class_weight<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
    min_split_gain<span class="token operator">=</span><span class="token number">0.0</span><span class="token punctuation">,</span>
    min_child_weight<span class="token operator">=</span><span class="token number">0.001</span><span class="token punctuation">,</span>
    min_child_samples<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">,</span>
    subsample<span class="token operator">=</span><span class="token number">1.0</span><span class="token punctuation">,</span>
    subsample_freq<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>
    colsample_bytree<span class="token operator">=</span><span class="token number">1.0</span><span class="token punctuation">,</span>
    reg_alpha<span class="token operator">=</span><span class="token number">0.0</span><span class="token punctuation">,</span>
    reg_lambda<span class="token operator">=</span><span class="token number">0.0</span><span class="token punctuation">,</span>
    random_state<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
    n_jobs<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
    importance_type<span class="token operator">=</span><span class="token string">&#39;split&#39;</span><span class="token punctuation">,</span>
    <span class="token operator">**</span>kwargs
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fit<span class="token punctuation">(</span>
    X<span class="token punctuation">,</span>
    y<span class="token punctuation">,</span>
    sample_weight<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
    init_score<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
    group<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>                     <span class="token comment"># 指的是每个query，在新闻推荐中就是user对应得item列表得长度</span>
    eval_set<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
    eval_names<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
    eval_sample_weight<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
    eval_init_score<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
    eval_group<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>                <span class="token comment"># 与group类似，只不过这个是用在验证集合中得用户item列表长度</span>
    eval_metric<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>               <span class="token comment"># 这里得eval_metric指的就是上面提到得用于优化排序模型得评估指标，默认是使用ndcg</span>
    eval_at<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>        <span class="token comment"># eval_at:这个指的是排序指标中得参数，例如NDCG@5,NDCG@10</span>
    feature_name<span class="token operator">=</span><span class="token string">&#39;auto&#39;</span><span class="token punctuation">,</span>
    categorical_feature<span class="token operator">=</span><span class="token string">&#39;auto&#39;</span><span class="token punctuation">,</span>
    callbacks<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
    init_model<span class="token operator">=</span><span class="token boolean">None</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之所以分组，是为了在优化得时候对于每个用户只优化其相关得item，这里需要我们给定数据集中总共有哪些用户，以及每个用户需要优化多少个item.所以我们传入进去得group参数其实是一个列表。</p><p>以推荐为例，每条sample是uid,iid,label,label=1则代表用户uid点击了物品iid，反之未点击。那么每个group就是同一个uid对应的samples,也就是以uid来划分group。这样的话，优化目标就是优化同一个group内的list序，也就是同一个用户，其点击的item越靠前越好，未点击的越靠后越好。</p><p>以搜索为例，比如KDD CUP 2020 MultiModal Recall 赛道，给定一个query以及对应的30个candidate product images, 30个中有若干个匹配的正样本，其余为负样本，这样就可以将同一个query以及对应的candidate images看作是1个group，来优化group内的序。具体代码实现时，以推荐为例，其中一种使用方式如下，先对数据按照uid排序，这样同一个group的数据时挨在一起的。然后直接去统计每个group内的samples的数量，传入或者数量数组即可。eval_groups设置同理。另外，推断预测predict的时候，不需要传入group参数。</p><p>LGBMRanker</p><table><thead><tr><th>session_id</th><th>search_results</th><th>best_results</th></tr></thead><tbody><tr><td>A</td><td>a b c d e</td><td>c e d</td></tr><tr><td>B</td><td>b a f g</td><td>g a</td></tr><tr><td>C</td><td>e f g d c</td><td>e f c d g</td></tr></tbody></table><table><thead><tr><th>session_id</th><th>search_results</th><th>rank</th></tr></thead><tbody><tr><td>A</td><td>a</td><td>4</td></tr><tr><td>A</td><td>b</td><td>4</td></tr><tr><td>A</td><td>c</td><td>1</td></tr><tr><td>A</td><td>d</td><td>3</td></tr><tr><td>A</td><td>e</td><td>2</td></tr><tr><td>B</td><td>b</td><td>3</td></tr><tr><td>B</td><td>a</td><td>2</td></tr><tr><td>B</td><td>f</td><td>3</td></tr><tr><td>B</td><td>g</td><td>1</td></tr><tr><td>C</td><td>e</td><td>1</td></tr><tr><td>C</td><td>f</td><td>2</td></tr><tr><td>C</td><td>g</td><td>3</td></tr><tr><td>C</td><td>d</td><td>3</td></tr><tr><td>C</td><td>c</td><td>3</td></tr></tbody></table><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://lightgbm.readthedocs.io/en/latest/pythonapi/lightgbm.LGBMRanker.html#lightgbm.LGBMRanker</li><li>https://www.zhihu.com/question/341082668</li><li>https://www.kaggle.com/code/alexandremarquis/kaggle-days-x-lvmh-lgbmranker-solution/notebook</li></ol>`,11),o=[p];function l(c,i){return s(),a("div",null,o)}const u=n(e,[["render",l],["__file","2LGBMRanker.html.vue"]]);export{u as default};
