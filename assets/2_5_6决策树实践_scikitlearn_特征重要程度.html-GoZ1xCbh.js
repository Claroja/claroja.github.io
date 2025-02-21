const a=JSON.parse(`{"key":"v-28df03bf","path":"/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/2_1%E6%A0%91%E6%A8%A1%E5%9E%8B/2_5_6%E5%86%B3%E7%AD%96%E6%A0%91%E5%AE%9E%E8%B7%B5_scikitlearn_%E7%89%B9%E5%BE%81%E9%87%8D%E8%A6%81%E7%A8%8B%E5%BA%A6.html","title":"","lang":"zh-CN","frontmatter":{"description":"特征的重要程度衡量 import pandas as pd from sklearn.model_selection import train_test_split from sklearn.tree import DecisionTreeClassifier, plot_tree from sklearn.metrics import accuracy_score from sklearn.model_selection import GridSearchCV data_all = pd.read_csv( './data/test/titanic.csv', usecols=['Survived', 'Pclass', 'Age', 'SibSp', 'Parch', 'Fare', 'Sex', 'Embarked']) data_all = data_all.dropna() data_all = pd.merge(data_all, pd.get_dummies(data_all[['Sex', 'Embarked']]), how=\\"inner\\", left_index=True, right_index=True) data_all = data_all.drop(['Sex', 'Embarked'], axis=1) data_y = data_all['Survived'] data_x = data_all.drop('Survived', axis=1) X_train, X_test, y_train, y_test = train_test_split(data_x, data_y, random_state = 100) params_default ={ 'criterion': 'gini', 'splitter': 'best', 'max_depth': None, 'max_features': None, 'random_state': 10 } clf = DecisionTreeClassifier(**params_default) clf.fit(X_train, y_train) print(accuracy_score(y_test, clf.predict(X_test))) clf.feature_importances_ clf.feature_names_in_ X_train.columns","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/2_1%E6%A0%91%E6%A8%A1%E5%9E%8B/2_5_6%E5%86%B3%E7%AD%96%E6%A0%91%E5%AE%9E%E8%B7%B5_scikitlearn_%E7%89%B9%E5%BE%81%E9%87%8D%E8%A6%81%E7%A8%8B%E5%BA%A6.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:description","content":"特征的重要程度衡量 import pandas as pd from sklearn.model_selection import train_test_split from sklearn.tree import DecisionTreeClassifier, plot_tree from sklearn.metrics import accuracy_score from sklearn.model_selection import GridSearchCV data_all = pd.read_csv( './data/test/titanic.csv', usecols=['Survived', 'Pclass', 'Age', 'SibSp', 'Parch', 'Fare', 'Sex', 'Embarked']) data_all = data_all.dropna() data_all = pd.merge(data_all, pd.get_dummies(data_all[['Sex', 'Embarked']]), how=\\"inner\\", left_index=True, right_index=True) data_all = data_all.drop(['Sex', 'Embarked'], axis=1) data_y = data_all['Survived'] data_x = data_all.drop('Survived', axis=1) X_train, X_test, y_train, y_test = train_test_split(data_x, data_y, random_state = 100) params_default ={ 'criterion': 'gini', 'splitter': 'best', 'max_depth': None, 'max_features': None, 'random_state': 10 } clf = DecisionTreeClassifier(**params_default) clf.fit(X_train, y_train) print(accuracy_score(y_test, clf.predict(X_test))) clf.feature_importances_ clf.feature_names_in_ X_train.columns"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"特征的重要程度衡量","slug":"特征的重要程度衡量","link":"#特征的重要程度衡量","children":[]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.35,"words":106},"filePathRelative":"4机器学习/2_1树模型/2_5_6决策树实践_scikitlearn_特征重要程度.md","localizedDate":"2025年2月21日","excerpt":"<h2> 特征的重要程度衡量</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> pandas <span class=\\"token keyword\\">as</span> pd\\n<span class=\\"token keyword\\">from</span> sklearn<span class=\\"token punctuation\\">.</span>model_selection <span class=\\"token keyword\\">import</span> train_test_split\\n<span class=\\"token keyword\\">from</span> sklearn<span class=\\"token punctuation\\">.</span>tree <span class=\\"token keyword\\">import</span> DecisionTreeClassifier<span class=\\"token punctuation\\">,</span> plot_tree\\n<span class=\\"token keyword\\">from</span> sklearn<span class=\\"token punctuation\\">.</span>metrics <span class=\\"token keyword\\">import</span> accuracy_score\\n<span class=\\"token keyword\\">from</span> sklearn<span class=\\"token punctuation\\">.</span>model_selection <span class=\\"token keyword\\">import</span> GridSearchCV\\n\\ndata_all <span class=\\"token operator\\">=</span> pd<span class=\\"token punctuation\\">.</span>read_csv<span class=\\"token punctuation\\">(</span>\\n    <span class=\\"token string\\">'./data/test/titanic.csv'</span><span class=\\"token punctuation\\">,</span> \\n    usecols<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'Survived'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'Pclass'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'Age'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'SibSp'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'Parch'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'Fare'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'Sex'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'Embarked'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n\\ndata_all <span class=\\"token operator\\">=</span> data_all<span class=\\"token punctuation\\">.</span>dropna<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\ndata_all <span class=\\"token operator\\">=</span> pd<span class=\\"token punctuation\\">.</span>merge<span class=\\"token punctuation\\">(</span>data_all<span class=\\"token punctuation\\">,</span> pd<span class=\\"token punctuation\\">.</span>get_dummies<span class=\\"token punctuation\\">(</span>data_all<span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'Sex'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'Embarked'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> how<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"inner\\"</span><span class=\\"token punctuation\\">,</span> left_index<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">,</span> right_index<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">)</span>\\ndata_all <span class=\\"token operator\\">=</span> data_all<span class=\\"token punctuation\\">.</span>drop<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'Sex'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'Embarked'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> axis<span class=\\"token operator\\">=</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\n\\ndata_y <span class=\\"token operator\\">=</span> data_all<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'Survived'</span><span class=\\"token punctuation\\">]</span>\\ndata_x <span class=\\"token operator\\">=</span> data_all<span class=\\"token punctuation\\">.</span>drop<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'Survived'</span><span class=\\"token punctuation\\">,</span> axis<span class=\\"token operator\\">=</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\n\\n\\nX_train<span class=\\"token punctuation\\">,</span> X_test<span class=\\"token punctuation\\">,</span> y_train<span class=\\"token punctuation\\">,</span> y_test <span class=\\"token operator\\">=</span> train_test_split<span class=\\"token punctuation\\">(</span>data_x<span class=\\"token punctuation\\">,</span> data_y<span class=\\"token punctuation\\">,</span> random_state <span class=\\"token operator\\">=</span> <span class=\\"token number\\">100</span><span class=\\"token punctuation\\">)</span>\\n\\nparams_default <span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token string\\">'criterion'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'gini'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'splitter'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'best'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'max_depth'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token boolean\\">None</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'max_features'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token boolean\\">None</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'random_state'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">10</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\nclf <span class=\\"token operator\\">=</span> DecisionTreeClassifier<span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">**</span>params_default<span class=\\"token punctuation\\">)</span>\\nclf<span class=\\"token punctuation\\">.</span>fit<span class=\\"token punctuation\\">(</span>X_train<span class=\\"token punctuation\\">,</span> y_train<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>accuracy_score<span class=\\"token punctuation\\">(</span>y_test<span class=\\"token punctuation\\">,</span> clf<span class=\\"token punctuation\\">.</span>predict<span class=\\"token punctuation\\">(</span>X_test<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\nclf<span class=\\"token punctuation\\">.</span>feature_importances_\\n\\nclf<span class=\\"token punctuation\\">.</span>feature_names_in_\\nX_train<span class=\\"token punctuation\\">.</span>columns\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{a as data};
