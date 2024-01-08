import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as a,e as s}from"./app-YE2Hltoy.js";const r={},d=s('<h1 id="split" tabindex="-1"><a class="header-anchor" href="#split" aria-hidden="true">#</a> split</h1><p>用来分割训练集和测试集.</p><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><h3 id="分割pandas-dataframe" tabindex="-1"><a class="header-anchor" href="#分割pandas-dataframe" aria-hidden="true">#</a> 分割pandas.DataFrame</h3><p><code>train, test = train_test_split(df, test_size=.3, stratify=df[&#39;column_name&#39;])</code></p><h3 id="分割x-y" tabindex="-1"><a class="header-anchor" href="#分割x-y" aria-hidden="true">#</a> 分割X,Y</h3><p><code>X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=42)</code></p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><p><code>sklearn.model_selection.train_test_split(*arrays, test_size=None, train_size=None, random_state=None, shuffle=True, stratify=None)[source]</code></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>*arrays</td><td>numpy arrays, pandas dataframes</td></tr><tr><td>test_size</td><td>if float, test_size+train_size=1, If int, represents the absolute number of test samples</td></tr><tr><td>train_size</td><td>if float, test_size+train_size=1, If int, represents the absolute number of test samples</td></tr><tr><td>random_state</td><td>RandomState</td></tr><tr><td>shuffle</td><td>shuffle the data before splitting</td></tr><tr><td>stratify</td><td>让测试集和训练集中的结果集保持源数据的Y的分类比例(分层抽样)</td></tr></tbody></table><p>参考: https://blog.csdn.net/weixin_45281949/article/details/102767177 https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html#sklearn.model_selection.train_test_split https://engineeringfordatascience.com/posts/ml_repeatable_splitting_using_hashing/</p>',11),i=[d];function n(o,l){return e(),a("div",null,i)}const c=t(r,[["render",n],["__file","split.html.vue"]]);export{c as default};
