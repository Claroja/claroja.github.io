const n=JSON.parse(`{"key":"v-8e20d7bc","path":"/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/4%E6%A8%A1%E5%9E%8B%E6%9E%84%E5%BB%BA/4_2_1%E7%89%B9%E5%BE%81%E9%80%89%E6%8B%A9_RFECV.html","title":"特征工程_特征选择_RFECV","lang":"zh-CN","frontmatter":{"description":"特征工程_特征选择_RFECV 最佳实践 RFE和RFECV的关系 RFE, 要指定最终选择的特征数量 RFECV, 通过交叉验证的得分选择最优的特征, 实践中选择 特征选择的过程 挑选树模型或者逻辑回归模型, 作为特征选择模型. 获得最优的特征, 进行超参调整 from sklearn import feature_selection, model_selection from sklearn import datasets from sklearn import tree import pandas as pd data = datasets.load_iris() df = pd.DataFrame( data = data['data'], columns= data['feature_names'] ) df['target'] = data['target'] dtree = tree.DecisionTreeClassifier(random_state = 0) dtree_rfe = feature_selection.RFECV(dtree, step = 1, scoring = 'accuracy') dtree_rfe.fit(df.loc[:,~df.columns.isin(['target'])], data['target']) features_rfe = dtree_rfe.feature_names_in_[dtree_rfe.get_support()] param_grid = { 'criterion': ['gini', 'entropy'], 'splitter': ['best', 'random'], 'max_depth': [None, 2,4,6,8,10], 'min_samples_split': [1, 3, 5,10,15,20,25], 'max_features': [None, 'auto', 'sqrt', 'log2'] } rfe_tune_model = model_selection.GridSearchCV( tree.DecisionTreeClassifier(), param_grid=param_grid, scoring = 'accuracy' ) rfe_tune_model.fit(df[features_rfe], df['target'])","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/4%E6%A8%A1%E5%9E%8B%E6%9E%84%E5%BB%BA/4_2_1%E7%89%B9%E5%BE%81%E9%80%89%E6%8B%A9_RFECV.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"特征工程_特征选择_RFECV"}],["meta",{"property":"og:description","content":"特征工程_特征选择_RFECV 最佳实践 RFE和RFECV的关系 RFE, 要指定最终选择的特征数量 RFECV, 通过交叉验证的得分选择最优的特征, 实践中选择 特征选择的过程 挑选树模型或者逻辑回归模型, 作为特征选择模型. 获得最优的特征, 进行超参调整 from sklearn import feature_selection, model_selection from sklearn import datasets from sklearn import tree import pandas as pd data = datasets.load_iris() df = pd.DataFrame( data = data['data'], columns= data['feature_names'] ) df['target'] = data['target'] dtree = tree.DecisionTreeClassifier(random_state = 0) dtree_rfe = feature_selection.RFECV(dtree, step = 1, scoring = 'accuracy') dtree_rfe.fit(df.loc[:,~df.columns.isin(['target'])], data['target']) features_rfe = dtree_rfe.feature_names_in_[dtree_rfe.get_support()] param_grid = { 'criterion': ['gini', 'entropy'], 'splitter': ['best', 'random'], 'max_depth': [None, 2,4,6,8,10], 'min_samples_split': [1, 3, 5,10,15,20,25], 'max_features': [None, 'auto', 'sqrt', 'log2'] } rfe_tune_model = model_selection.GridSearchCV( tree.DecisionTreeClassifier(), param_grid=param_grid, scoring = 'accuracy' ) rfe_tune_model.fit(df[features_rfe], df['target'])"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"特征工程_特征选择_RFECV\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"RFE","slug":"rfe","link":"#rfe","children":[]},{"level":3,"title":"RFECV","slug":"rfecv","link":"#rfecv","children":[]}]},{"level":2,"title":"多个模型求均值确定特征的重要程度","slug":"多个模型求均值确定特征的重要程度","link":"#多个模型求均值确定特征的重要程度","children":[]}],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":3.27,"words":981},"filePathRelative":"2机器学习/1算法原理/2机器学习流程/4模型构建/4_2_1特征选择_RFECV.md","localizedDate":"2025年2月24日","excerpt":"<h1> 特征工程_特征选择_RFECV</h1>\\n<h2> 最佳实践</h2>\\n<ol>\\n<li>RFE和RFECV的关系\\n<ol>\\n<li>RFE, 要指定最终选择的特征数量</li>\\n<li>RFECV, 通过交叉验证的得分选择最优的特征, 实践中选择</li>\\n</ol>\\n</li>\\n<li>特征选择的过程\\n<ol>\\n<li>挑选树模型或者逻辑回归模型, 作为特征选择模型.</li>\\n<li>获得最优的特征, 进行超参调整</li>\\n</ol>\\n</li>\\n</ol>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">from</span> sklearn <span class=\\"token keyword\\">import</span> feature_selection<span class=\\"token punctuation\\">,</span> model_selection\\n<span class=\\"token keyword\\">from</span> sklearn <span class=\\"token keyword\\">import</span> datasets\\n<span class=\\"token keyword\\">from</span> sklearn <span class=\\"token keyword\\">import</span> tree\\n<span class=\\"token keyword\\">import</span> pandas <span class=\\"token keyword\\">as</span> pd\\n\\ndata <span class=\\"token operator\\">=</span> datasets<span class=\\"token punctuation\\">.</span>load_iris<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\ndf <span class=\\"token operator\\">=</span> pd<span class=\\"token punctuation\\">.</span>DataFrame<span class=\\"token punctuation\\">(</span>\\n    data <span class=\\"token operator\\">=</span> data<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'data'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n    columns<span class=\\"token operator\\">=</span> data<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'feature_names'</span><span class=\\"token punctuation\\">]</span>\\n<span class=\\"token punctuation\\">)</span>\\n\\ndf<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'target'</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> data<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'target'</span><span class=\\"token punctuation\\">]</span>\\n\\ndtree <span class=\\"token operator\\">=</span> tree<span class=\\"token punctuation\\">.</span>DecisionTreeClassifier<span class=\\"token punctuation\\">(</span>random_state <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span>\\n\\ndtree_rfe <span class=\\"token operator\\">=</span> feature_selection<span class=\\"token punctuation\\">.</span>RFECV<span class=\\"token punctuation\\">(</span>dtree<span class=\\"token punctuation\\">,</span> step <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> scoring <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'accuracy'</span><span class=\\"token punctuation\\">)</span>\\ndtree_rfe<span class=\\"token punctuation\\">.</span>fit<span class=\\"token punctuation\\">(</span>df<span class=\\"token punctuation\\">.</span>loc<span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">:</span><span class=\\"token punctuation\\">,</span><span class=\\"token operator\\">~</span>df<span class=\\"token punctuation\\">.</span>columns<span class=\\"token punctuation\\">.</span>isin<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'target'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> data<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'target'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\nfeatures_rfe <span class=\\"token operator\\">=</span> dtree_rfe<span class=\\"token punctuation\\">.</span>feature_names_in_<span class=\\"token punctuation\\">[</span>dtree_rfe<span class=\\"token punctuation\\">.</span>get_support<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">]</span>\\n\\nparam_grid <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token string\\">'criterion'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'gini'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'entropy'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> \\n    <span class=\\"token string\\">'splitter'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'best'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'random'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'max_depth'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token boolean\\">None</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">4</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">6</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">8</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">10</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'min_samples_split'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">10</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">15</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">20</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">25</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'max_features'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token boolean\\">None</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'auto'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'sqrt'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'log2'</span><span class=\\"token punctuation\\">]</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n\\nrfe_tune_model <span class=\\"token operator\\">=</span> model_selection<span class=\\"token punctuation\\">.</span>GridSearchCV<span class=\\"token punctuation\\">(</span>\\n    tree<span class=\\"token punctuation\\">.</span>DecisionTreeClassifier<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> \\n    param_grid<span class=\\"token operator\\">=</span>param_grid<span class=\\"token punctuation\\">,</span> \\n    scoring <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'accuracy'</span>\\n<span class=\\"token punctuation\\">)</span>\\n\\nrfe_tune_model<span class=\\"token punctuation\\">.</span>fit<span class=\\"token punctuation\\">(</span>df<span class=\\"token punctuation\\">[</span>features_rfe<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> df<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'target'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
