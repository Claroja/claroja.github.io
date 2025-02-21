const e=JSON.parse('{"key":"v-f6c92032","path":"/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/2_1%E6%A0%91%E6%A8%A1%E5%9E%8B/2_3%E5%86%B3%E7%AD%96%E6%A0%91%E7%90%86%E8%AE%BA_CART%E5%88%86%E7%B1%BB%E6%A0%91.html","title":"classification","lang":"zh-CN","frontmatter":{"description":"classification 最佳实践 cart树是一个二叉树，只判断true或false，ture是左child，false是右child 当最终预测的叶子节点包含了混合的预测特征的样本（比如二分类问题，最终叶子节点既包含了0，又包含了1），我们称为impure。如果仅包含了一种预测样本，我们称为pure. 显然pure的叶子节点预测的效果更好，我们可以使用Gini impurity或Entropy and Information Gain来量化impurity. scikit-learn是使用Gini impurity 计算过程","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/2_1%E6%A0%91%E6%A8%A1%E5%9E%8B/2_3%E5%86%B3%E7%AD%96%E6%A0%91%E7%90%86%E8%AE%BA_CART%E5%88%86%E7%B1%BB%E6%A0%91.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"classification"}],["meta",{"property":"og:description","content":"classification 最佳实践 cart树是一个二叉树，只判断true或false，ture是左child，false是右child 当最终预测的叶子节点包含了混合的预测特征的样本（比如二分类问题，最终叶子节点既包含了0，又包含了1），我们称为impure。如果仅包含了一种预测样本，我们称为pure. 显然pure的叶子节点预测的效果更好，我们可以使用Gini impurity或Entropy and Information Gain来量化impurity. scikit-learn是使用Gini impurity 计算过程"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"classification"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"classification\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]},{"level":2,"title":"CART树","slug":"cart树","link":"#cart树","children":[]},{"level":2,"title":"分裂特征的选择","slug":"分裂特征的选择","link":"#分裂特征的选择","children":[{"level":3,"title":"直觉","slug":"直觉","link":"#直觉","children":[]},{"level":3,"title":"分类变量的基尼不纯度","slug":"分类变量的基尼不纯度","link":"#分类变量的基尼不纯度","children":[]},{"level":3,"title":"数值变量的基尼不纯度","slug":"数值变量的基尼不纯度","link":"#数值变量的基尼不纯度","children":[]},{"level":3,"title":"特征选择","slug":"特征选择","link":"#特征选择","children":[]},{"level":3,"title":"投票作为最终的输出","slug":"投票作为最终的输出","link":"#投票作为最终的输出","children":[]}]},{"level":2,"title":"剪枝(Pruning)","slug":"剪枝-pruning","link":"#剪枝-pruning","children":[]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":4.54,"words":1361},"filePathRelative":"4机器学习/2_1树模型/2_3决策树理论_CART分类树.md","localizedDate":"2025年2月21日","excerpt":"<h1> classification</h1>\\n<h2> 最佳实践</h2>\\n<ol>\\n<li>cart树是一个二叉树，只判断true或false，ture是左child，false是右child</li>\\n<li>当最终预测的叶子节点包含了混合的预测特征的样本（比如二分类问题，最终叶子节点既包含了0，又包含了1），我们称为<code>impure</code>。如果仅包含了一种预测样本，我们称为<code>pure</code>.</li>\\n<li>显然<code>pure</code>的叶子节点预测的效果更好，我们可以使用<code>Gini impurity</code>或<code>Entropy and Information Gain</code>来量化<code>impurity</code>. scikit-learn是使用<code>Gini impurity</code></li>\\n<li>计算过程</li>\\n</ol>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
