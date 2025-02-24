const n=JSON.parse(`{"key":"v-646bbd2a","path":"/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/4%E6%A8%A1%E5%9E%8B%E6%9E%84%E5%BB%BA/4_3_1%E6%A8%A1%E5%9E%8B%E9%80%89%E6%8B%A9_Ensemble.html","title":"","lang":"zh-CN","frontmatter":{"description":"试验不同模型默认参数的表现 计算不同模型预测结果的相似度, 将相似度高的模型剔除 对剩余的模型进行超参搜索, 详见其他文章 from sklearn import svm, tree, linear_model, neighbors, naive_bayes, ensemble, discriminant_analysis, gaussian_process from xgboost import XGBClassifier from sklearn import model_selection import pandas as pd from sklearn import datasets import seaborn as sns import matplotlib.pyplot as plt # 创建模型 MLA = [ #Ensemble Methods ensemble.AdaBoostClassifier(), ensemble.BaggingClassifier(), ensemble.ExtraTreesClassifier(), ensemble.GradientBoostingClassifier(), ensemble.RandomForestClassifier(), #Gaussian Processes gaussian_process.GaussianProcessClassifier(), #GLM linear_model.LogisticRegressionCV(), linear_model.PassiveAggressiveClassifier(), linear_model.RidgeClassifierCV(), linear_model.SGDClassifier(), linear_model.Perceptron(), #Navies Bayes naive_bayes.BernoulliNB(), naive_bayes.GaussianNB(), #Nearest Neighbor neighbors.KNeighborsClassifier(), #SVM svm.SVC(probability=True), svm.NuSVC(probability=True), svm.LinearSVC(), #Trees tree.DecisionTreeClassifier(), tree.ExtraTreeClassifier(), #Discriminant Analysis discriminant_analysis.LinearDiscriminantAnalysis(), discriminant_analysis.QuadraticDiscriminantAnalysis(), #xgboost XGBClassifier() ] # 导入数据 iris_data = datasets.load_iris() MLA_compare = pd.DataFrame( columns = ['MLA Name', 'MLA Parameters','MLA Train Accuracy Mean', 'MLA Test Accuracy Mean', 'MLA Test Accuracy 3*STD' ,'MLA Time'] ) MLA_predict = pd.DataFrame({ 'target': iris_data['target'] }) for row_index, alg in enumerate(MLA): MLA_name = alg.__class__.__name__ # 模型的名称 MLA_compare.loc[row_index, 'MLA Name'] = MLA_name MLA_compare.loc[row_index, 'MLA Parameters'] = str(alg.get_params()) # 模型的参数 cv_results = model_selection.cross_validate( alg, iris_data['data'], iris_data['target'], cv = model_selection.ShuffleSplit(n_splits = 10, test_size = .3, train_size = .6, random_state = 0 ), # 共跑模型10次, 每次按6)%训练集, 30测试集分割, 并丢弃10%的数据 return_train_score=True ) # 交叉验证 MLA_compare.loc[row_index, 'MLA Time'] = cv_results['fit_time'].mean() MLA_compare.loc[row_index, 'MLA Train Accuracy Mean'] = cv_results['train_score'].mean() MLA_compare.loc[row_index, 'MLA Test Accuracy Mean'] = cv_results['test_score'].mean() MLA_compare.loc[row_index, 'MLA Test Accuracy 3*STD'] = cv_results['test_score'].std()*3 # 3sigma, 99.7%, 看最坏的情况是多少 # 保存预测结果, 用来比较模型预测结果的相似度 alg.fit(iris_data['data'], iris_data['target']) MLA_predict[MLA_name] = alg.predict(iris_data['data']) MLA_compare = MLA_compare.sort_values(by = ['MLA Test Accuracy Mean'], ascending = False) # 可视化 _ , ax = plt.subplots(figsize =(14, 12)) _ = sns.heatmap( MLA_predict.corr(), cmap = sns.diverging_palette(220, 10, as_cmap = True), square=True, cbar_kws={'shrink':.9 }, ax=ax, annot=True, linewidths=0.1, vmax=1.0, linecolor='white', annot_kws={'fontsize':12 } )","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/4%E6%A8%A1%E5%9E%8B%E6%9E%84%E5%BB%BA/4_3_1%E6%A8%A1%E5%9E%8B%E9%80%89%E6%8B%A9_Ensemble.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:description","content":"试验不同模型默认参数的表现 计算不同模型预测结果的相似度, 将相似度高的模型剔除 对剩余的模型进行超参搜索, 详见其他文章 from sklearn import svm, tree, linear_model, neighbors, naive_bayes, ensemble, discriminant_analysis, gaussian_process from xgboost import XGBClassifier from sklearn import model_selection import pandas as pd from sklearn import datasets import seaborn as sns import matplotlib.pyplot as plt # 创建模型 MLA = [ #Ensemble Methods ensemble.AdaBoostClassifier(), ensemble.BaggingClassifier(), ensemble.ExtraTreesClassifier(), ensemble.GradientBoostingClassifier(), ensemble.RandomForestClassifier(), #Gaussian Processes gaussian_process.GaussianProcessClassifier(), #GLM linear_model.LogisticRegressionCV(), linear_model.PassiveAggressiveClassifier(), linear_model.RidgeClassifierCV(), linear_model.SGDClassifier(), linear_model.Perceptron(), #Navies Bayes naive_bayes.BernoulliNB(), naive_bayes.GaussianNB(), #Nearest Neighbor neighbors.KNeighborsClassifier(), #SVM svm.SVC(probability=True), svm.NuSVC(probability=True), svm.LinearSVC(), #Trees tree.DecisionTreeClassifier(), tree.ExtraTreeClassifier(), #Discriminant Analysis discriminant_analysis.LinearDiscriminantAnalysis(), discriminant_analysis.QuadraticDiscriminantAnalysis(), #xgboost XGBClassifier() ] # 导入数据 iris_data = datasets.load_iris() MLA_compare = pd.DataFrame( columns = ['MLA Name', 'MLA Parameters','MLA Train Accuracy Mean', 'MLA Test Accuracy Mean', 'MLA Test Accuracy 3*STD' ,'MLA Time'] ) MLA_predict = pd.DataFrame({ 'target': iris_data['target'] }) for row_index, alg in enumerate(MLA): MLA_name = alg.__class__.__name__ # 模型的名称 MLA_compare.loc[row_index, 'MLA Name'] = MLA_name MLA_compare.loc[row_index, 'MLA Parameters'] = str(alg.get_params()) # 模型的参数 cv_results = model_selection.cross_validate( alg, iris_data['data'], iris_data['target'], cv = model_selection.ShuffleSplit(n_splits = 10, test_size = .3, train_size = .6, random_state = 0 ), # 共跑模型10次, 每次按6)%训练集, 30测试集分割, 并丢弃10%的数据 return_train_score=True ) # 交叉验证 MLA_compare.loc[row_index, 'MLA Time'] = cv_results['fit_time'].mean() MLA_compare.loc[row_index, 'MLA Train Accuracy Mean'] = cv_results['train_score'].mean() MLA_compare.loc[row_index, 'MLA Test Accuracy Mean'] = cv_results['test_score'].mean() MLA_compare.loc[row_index, 'MLA Test Accuracy 3*STD'] = cv_results['test_score'].std()*3 # 3sigma, 99.7%, 看最坏的情况是多少 # 保存预测结果, 用来比较模型预测结果的相似度 alg.fit(iris_data['data'], iris_data['target']) MLA_predict[MLA_name] = alg.predict(iris_data['data']) MLA_compare = MLA_compare.sort_values(by = ['MLA Test Accuracy Mean'], ascending = False) # 可视化 _ , ax = plt.subplots(figsize =(14, 12)) _ = sns.heatmap( MLA_predict.corr(), cmap = sns.diverging_palette(220, 10, as_cmap = True), square=True, cbar_kws={'shrink':.9 }, ax=ax, annot=True, linewidths=0.1, vmax=1.0, linecolor='white', annot_kws={'fontsize':12 } )"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.24,"words":372},"filePathRelative":"2机器学习/1算法原理/2机器学习流程/4模型构建/4_3_1模型选择_Ensemble.md","localizedDate":"2025年2月24日","excerpt":"<ol>\\n<li>试验不同模型默认参数的表现</li>\\n<li>计算不同模型预测结果的相似度, 将相似度高的模型剔除</li>\\n<li>对剩余的模型进行超参搜索, 详见其他文章</li>\\n</ol>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">from</span> sklearn <span class=\\"token keyword\\">import</span> svm<span class=\\"token punctuation\\">,</span> tree<span class=\\"token punctuation\\">,</span> linear_model<span class=\\"token punctuation\\">,</span> neighbors<span class=\\"token punctuation\\">,</span> naive_bayes<span class=\\"token punctuation\\">,</span> ensemble<span class=\\"token punctuation\\">,</span> discriminant_analysis<span class=\\"token punctuation\\">,</span> gaussian_process\\n<span class=\\"token keyword\\">from</span> xgboost <span class=\\"token keyword\\">import</span> XGBClassifier\\n<span class=\\"token keyword\\">from</span> sklearn <span class=\\"token keyword\\">import</span> model_selection\\n<span class=\\"token keyword\\">import</span> pandas <span class=\\"token keyword\\">as</span> pd\\n<span class=\\"token keyword\\">from</span> sklearn <span class=\\"token keyword\\">import</span> datasets\\n<span class=\\"token keyword\\">import</span> seaborn <span class=\\"token keyword\\">as</span> sns\\n<span class=\\"token keyword\\">import</span> matplotlib<span class=\\"token punctuation\\">.</span>pyplot <span class=\\"token keyword\\">as</span> plt\\n\\n<span class=\\"token comment\\"># 创建模型</span>\\nMLA <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span>\\n    <span class=\\"token comment\\">#Ensemble Methods</span>\\n    ensemble<span class=\\"token punctuation\\">.</span>AdaBoostClassifier<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    ensemble<span class=\\"token punctuation\\">.</span>BaggingClassifier<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    ensemble<span class=\\"token punctuation\\">.</span>ExtraTreesClassifier<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    ensemble<span class=\\"token punctuation\\">.</span>GradientBoostingClassifier<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    ensemble<span class=\\"token punctuation\\">.</span>RandomForestClassifier<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    \\n    <span class=\\"token comment\\">#Gaussian Processes</span>\\n    gaussian_process<span class=\\"token punctuation\\">.</span>GaussianProcessClassifier<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    \\n    <span class=\\"token comment\\">#GLM</span>\\n    linear_model<span class=\\"token punctuation\\">.</span>LogisticRegressionCV<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    linear_model<span class=\\"token punctuation\\">.</span>PassiveAggressiveClassifier<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    linear_model<span class=\\"token punctuation\\">.</span>RidgeClassifierCV<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    linear_model<span class=\\"token punctuation\\">.</span>SGDClassifier<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    linear_model<span class=\\"token punctuation\\">.</span>Perceptron<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    \\n    <span class=\\"token comment\\">#Navies Bayes</span>\\n    naive_bayes<span class=\\"token punctuation\\">.</span>BernoulliNB<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    naive_bayes<span class=\\"token punctuation\\">.</span>GaussianNB<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    \\n    <span class=\\"token comment\\">#Nearest Neighbor</span>\\n    neighbors<span class=\\"token punctuation\\">.</span>KNeighborsClassifier<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    \\n    <span class=\\"token comment\\">#SVM</span>\\n    svm<span class=\\"token punctuation\\">.</span>SVC<span class=\\"token punctuation\\">(</span>probability<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    svm<span class=\\"token punctuation\\">.</span>NuSVC<span class=\\"token punctuation\\">(</span>probability<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    svm<span class=\\"token punctuation\\">.</span>LinearSVC<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    \\n    <span class=\\"token comment\\">#Trees    </span>\\n    tree<span class=\\"token punctuation\\">.</span>DecisionTreeClassifier<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    tree<span class=\\"token punctuation\\">.</span>ExtraTreeClassifier<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    \\n    <span class=\\"token comment\\">#Discriminant Analysis</span>\\n    discriminant_analysis<span class=\\"token punctuation\\">.</span>LinearDiscriminantAnalysis<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    discriminant_analysis<span class=\\"token punctuation\\">.</span>QuadraticDiscriminantAnalysis<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n\\n    <span class=\\"token comment\\">#xgboost</span>\\n    XGBClassifier<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>    \\n    <span class=\\"token punctuation\\">]</span>\\n\\n<span class=\\"token comment\\"># 导入数据</span>\\niris_data <span class=\\"token operator\\">=</span> datasets<span class=\\"token punctuation\\">.</span>load_iris<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\nMLA_compare <span class=\\"token operator\\">=</span> pd<span class=\\"token punctuation\\">.</span>DataFrame<span class=\\"token punctuation\\">(</span>\\n    columns <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'MLA Name'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'MLA Parameters'</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">'MLA Train Accuracy Mean'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'MLA Test Accuracy Mean'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'MLA Test Accuracy 3*STD'</span> <span class=\\"token punctuation\\">,</span><span class=\\"token string\\">'MLA Time'</span><span class=\\"token punctuation\\">]</span>\\n<span class=\\"token punctuation\\">)</span>\\n\\nMLA_predict <span class=\\"token operator\\">=</span> pd<span class=\\"token punctuation\\">.</span>DataFrame<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token string\\">'target'</span><span class=\\"token punctuation\\">:</span> iris_data<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'target'</span><span class=\\"token punctuation\\">]</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n\\n\\n<span class=\\"token keyword\\">for</span> row_index<span class=\\"token punctuation\\">,</span> alg <span class=\\"token keyword\\">in</span> <span class=\\"token builtin\\">enumerate</span><span class=\\"token punctuation\\">(</span>MLA<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n\\n    MLA_name <span class=\\"token operator\\">=</span> alg<span class=\\"token punctuation\\">.</span>__class__<span class=\\"token punctuation\\">.</span>__name__  <span class=\\"token comment\\"># 模型的名称</span>\\n    MLA_compare<span class=\\"token punctuation\\">.</span>loc<span class=\\"token punctuation\\">[</span>row_index<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'MLA Name'</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> MLA_name\\n    MLA_compare<span class=\\"token punctuation\\">.</span>loc<span class=\\"token punctuation\\">[</span>row_index<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'MLA Parameters'</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token builtin\\">str</span><span class=\\"token punctuation\\">(</span>alg<span class=\\"token punctuation\\">.</span>get_params<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 模型的参数</span>\\n\\n    cv_results <span class=\\"token operator\\">=</span> model_selection<span class=\\"token punctuation\\">.</span>cross_validate<span class=\\"token punctuation\\">(</span>\\n        alg<span class=\\"token punctuation\\">,</span> \\n        iris_data<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'data'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> \\n        iris_data<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'target'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> \\n        cv  <span class=\\"token operator\\">=</span> model_selection<span class=\\"token punctuation\\">.</span>ShuffleSplit<span class=\\"token punctuation\\">(</span>n_splits <span class=\\"token operator\\">=</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">,</span> test_size <span class=\\"token operator\\">=</span> <span class=\\"token number\\">.3</span><span class=\\"token punctuation\\">,</span> train_size <span class=\\"token operator\\">=</span> <span class=\\"token number\\">.6</span><span class=\\"token punctuation\\">,</span> random_state <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span> <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>  <span class=\\"token comment\\"># 共跑模型10次, 每次按6)%训练集, 30测试集分割, 并丢弃10%的数据</span>\\n        return_train_score<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">True</span>\\n    <span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 交叉验证</span>\\n\\n    MLA_compare<span class=\\"token punctuation\\">.</span>loc<span class=\\"token punctuation\\">[</span>row_index<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'MLA Time'</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> cv_results<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'fit_time'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span>mean<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n    MLA_compare<span class=\\"token punctuation\\">.</span>loc<span class=\\"token punctuation\\">[</span>row_index<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'MLA Train Accuracy Mean'</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> cv_results<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'train_score'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span>mean<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n    MLA_compare<span class=\\"token punctuation\\">.</span>loc<span class=\\"token punctuation\\">[</span>row_index<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'MLA Test Accuracy Mean'</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> cv_results<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'test_score'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span>mean<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>   \\n    MLA_compare<span class=\\"token punctuation\\">.</span>loc<span class=\\"token punctuation\\">[</span>row_index<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'MLA Test Accuracy 3*STD'</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> cv_results<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'test_score'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span>std<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">*</span><span class=\\"token number\\">3</span>   <span class=\\"token comment\\"># 3sigma, 99.7%, 看最坏的情况是多少</span>\\n\\n    <span class=\\"token comment\\"># 保存预测结果, 用来比较模型预测结果的相似度</span>\\n    alg<span class=\\"token punctuation\\">.</span>fit<span class=\\"token punctuation\\">(</span>iris_data<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'data'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> iris_data<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'target'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n    MLA_predict<span class=\\"token punctuation\\">[</span>MLA_name<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> alg<span class=\\"token punctuation\\">.</span>predict<span class=\\"token punctuation\\">(</span>iris_data<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'data'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n\\nMLA_compare <span class=\\"token operator\\">=</span> MLA_compare<span class=\\"token punctuation\\">.</span>sort_values<span class=\\"token punctuation\\">(</span>by <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'MLA Test Accuracy Mean'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> ascending <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">False</span><span class=\\"token punctuation\\">)</span>\\n\\n\\n<span class=\\"token comment\\"># 可视化</span>\\n\\n_ <span class=\\"token punctuation\\">,</span> ax <span class=\\"token operator\\">=</span> plt<span class=\\"token punctuation\\">.</span>subplots<span class=\\"token punctuation\\">(</span>figsize <span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">14</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">12</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\n_ <span class=\\"token operator\\">=</span> sns<span class=\\"token punctuation\\">.</span>heatmap<span class=\\"token punctuation\\">(</span>\\n    MLA_predict<span class=\\"token punctuation\\">.</span>corr<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> \\n    cmap <span class=\\"token operator\\">=</span> sns<span class=\\"token punctuation\\">.</span>diverging_palette<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">220</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">,</span> as_cmap <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    square<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">,</span> \\n    cbar_kws<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">{</span><span class=\\"token string\\">'shrink'</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">.9</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span> \\n    ax<span class=\\"token operator\\">=</span>ax<span class=\\"token punctuation\\">,</span>\\n    annot<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">,</span> \\n    linewidths<span class=\\"token operator\\">=</span><span class=\\"token number\\">0.1</span><span class=\\"token punctuation\\">,</span>\\n    vmax<span class=\\"token operator\\">=</span><span class=\\"token number\\">1.0</span><span class=\\"token punctuation\\">,</span> \\n    linecolor<span class=\\"token operator\\">=</span><span class=\\"token string\\">'white'</span><span class=\\"token punctuation\\">,</span>\\n    annot_kws<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">{</span><span class=\\"token string\\">'fontsize'</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">12</span> <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
