import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as e,c as o,a as n,b as s,d as l,w as c,e as i}from"./app-A10JnHE0.js";const u={},r=n("h2",{id:"最佳实践",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#最佳实践","aria-hidden":"true"},"#"),s(" 最佳实践")],-1),d=n("li",null,"建议使用pandas的groupby和sample来进行分层抽样. 因为分层抽样技术不仅在机器学习中使用, 在其他场合也有使用, pandas处理较为普遍",-1),k=n("li",null,"如果不进行超参的调优, 直接分割为训练集和测试集",-1),m=i(`<h2 id="数据集拆分基本" tabindex="-1"><a class="header-anchor" href="#数据集拆分基本" aria-hidden="true">#</a> 数据集拆分基本</h2><ol><li>训练集(training set): 用来训练和拟合模型</li><li>验证集(validation set): 用来验证超参数调整</li><li>测试集(test set): 验证最终的模型</li></ol><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="train-test-split" tabindex="-1"><a class="header-anchor" href="#train-test-split" aria-hidden="true">#</a> train_test_split</h3><ol><li>参数<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>sklearn<span class="token punctuation">.</span>model_selection<span class="token punctuation">.</span>train_test_split<span class="token punctuation">(</span>
    <span class="token operator">*</span>arrays<span class="token punctuation">,</span>                <span class="token comment"># numpy arrays, scipy-sparse matrices or pandas dataframes, </span>
    test_size<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>         <span class="token comment"># float or int, 测试集的占比, 没有传值, 默认0.25</span>
    train_size<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>        <span class="token comment"># float or int, 训练集的占比, 没有传值, 默认是1-test_size</span>
    random_state<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>      <span class="token comment"># int, 随机种子</span>
    shuffle<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>           <span class="token comment"># int, 拆分前打乱数据</span>
    stratify<span class="token operator">=</span><span class="token boolean">None</span>           <span class="token comment"># array-like, 根据传入标签值内分类比值, 进行分层抽样</span>
    <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>返回</li></ol><p>列表, [X_train, X_test, y_train, y_test]</p><h3 id="pandas-dataframe-sample" tabindex="-1"><a class="header-anchor" href="#pandas-dataframe-sample" aria-hidden="true">#</a> pandas.DataFrame.sample</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
DataFrame<span class="token punctuation">.</span>sample<span class="token punctuation">(</span>
    n<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>                 <span class="token comment"># int, 抽样的个数</span>
    frac<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>              <span class="token comment"># float, 抽样的比例, 不能和n同时使用</span>
    replace<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>          <span class="token comment"># bool, 是否允许同一个记录被多次抽样</span>
    weights<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>           <span class="token comment"># str or ndarray-like, 每个样本的抽样权重</span>
    random_state<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>      <span class="token comment"># int, 随机种子</span>
    axis<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>              <span class="token comment"># int, 0是按行, 1是按列</span>
    ignore_index<span class="token operator">=</span><span class="token boolean">False</span>      <span class="token comment"># bool, 如果为True, 抽样的结果索引重新设置</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实战" tabindex="-1"><a class="header-anchor" href="#实战" aria-hidden="true">#</a> 实战</h2><ol><li><p>train_test_split</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> train_test_split


df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string">&#39;x_1&#39;</span><span class="token punctuation">:</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;x_2&#39;</span><span class="token punctuation">:</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">21</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;y&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>pandas</p><ol><li><p>使用groupby和sample</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> train_test_split


df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string">&#39;x_1&#39;</span><span class="token punctuation">:</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;x_2&#39;</span><span class="token punctuation">:</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">21</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;y&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

df_train <span class="token operator">=</span> df<span class="token punctuation">.</span>groupby<span class="token punctuation">(</span><span class="token string">&#39;y&#39;</span><span class="token punctuation">,</span> group_keys<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">apply</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">.</span>sample<span class="token punctuation">(</span>frac<span class="token operator">=</span><span class="token number">0.8</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
df_test <span class="token operator">=</span> df<span class="token punctuation">.</span>drop<span class="token punctuation">(</span>df_train<span class="token punctuation">.</span>index<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用sample的weight</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df_train <span class="token operator">=</span> df<span class="token punctuation">.</span>sample<span class="token punctuation">(</span>frac<span class="token operator">=</span><span class="token number">0.8</span><span class="token punctuation">,</span> random_state<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> weights<span class="token operator">=</span>df<span class="token punctuation">.</span>groupby<span class="token punctuation">(</span><span class="token string">&#39;y&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&#39;y&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>transform<span class="token punctuation">(</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> axis <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span>
df_test <span class="token operator">=</span> df<span class="token punctuation">.</span>drop<span class="token punctuation">(</span>df_train<span class="token punctuation">.</span>index<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df_train <span class="token operator">=</span> df<span class="token punctuation">.</span>sample<span class="token punctuation">(</span>frac<span class="token operator">=</span><span class="token number">0.8</span><span class="token punctuation">,</span> random_state<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> weights<span class="token operator">=</span>df<span class="token punctuation">[</span><span class="token string">&#39;y&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span>df<span class="token punctuation">[</span><span class="token string">&#39;y&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value_counts<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> axis <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span>
df_test <span class="token operator">=</span> df<span class="token punctuation">.</span>drop<span class="token punctuation">(</span>df_train<span class="token punctuation">.</span>index<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>✨使用groupby和sample的方式和train_test_split结果相似, 使用sample的weight则有所不同</p></li></ol><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>在机器学习中, 会遇到两种数组:</p><ol><li>输入X, 二维数组</li><li>输出Y, 一维数组</li></ol><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://realpython.com/train-test-split-python-data/</li><li>https://datascientyst.com/pandas-random-sampling-stratified-and-weighted/</li><li>https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html#sklearn.model_selection.train_test_split</li></ol>`,15);function b(v,_){const a=p("RouterLink");return e(),o("div",null,[r,n("ol",null,[d,k,n("li",null,[s("如果进行超参调优, 则需要进一步将训练集分割为训练集和验证集, 这时需要用到"),l(a,{to:"/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/4%E6%A8%A1%E5%9E%8B%E6%9E%84%E5%BB%BA/%E6%95%B0%E6%8D%AE%E5%88%86%E5%89%B2_%E4%BA%A4%E5%8F%89%E9%AA%8C%E8%AF%81cross-validation.html"},{default:c(()=>[s("text")]),_:1})])]),m])}const f=t(u,[["render",b],["__file","4_1_1数据分割_训练集与测试集.html.vue"]]);export{f as default};
