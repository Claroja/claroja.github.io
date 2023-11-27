const t=JSON.parse('{"key":"v-6d8952be","path":"/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/%E6%A0%91%E6%A8%A1%E5%9E%8B/tree/classification.html","title":"classification","lang":"zh-CN","frontmatter":{"description":"classification 总结 cart树是一个二叉树，只判断true或false，ture是左child，false是右child 当最终预测的叶子节点包含了混合的预测特征的样本（比如二分类问题，最终叶子节点既包含了0，又包含了1），我们称为impure。如果仅包含了一种预测样本，我们称为pure. 显然pure的叶子节点预测的效果更好，我们可以使用Gini impurity或Entropy and Information Gain来量化impurity. scikit-learn是使用Gini impurity 计算过程","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/%E6%A0%91%E6%A8%A1%E5%9E%8B/tree/classification.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"classification"}],["meta",{"property":"og:description","content":"classification 总结 cart树是一个二叉树，只判断true或false，ture是左child，false是右child 当最终预测的叶子节点包含了混合的预测特征的样本（比如二分类问题，最终叶子节点既包含了0，又包含了1），我们称为impure。如果仅包含了一种预测样本，我们称为pure. 显然pure的叶子节点预测的效果更好，我们可以使用Gini impurity或Entropy and Information Gain来量化impurity. scikit-learn是使用Gini impurity 计算过程"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:31:52.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"classification"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:31:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"classification\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2023-11-27T13:31:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"推演","slug":"推演","link":"#推演","children":[]},{"level":2,"title":"more detail","slug":"more-detail","link":"#more-detail","children":[]}],"git":{"createdTime":1701091021000,"updatedTime":1701091912000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":2}]},"readingTime":{"minutes":5.43,"words":1630},"filePathRelative":"机器学习/树模型/tree/classification.md","localizedDate":"2023年11月27日","excerpt":"<h1> classification</h1>\\n<h2> 总结</h2>\\n<ol>\\n<li>cart树是一个二叉树，只判断true或false，ture是左child，false是右child</li>\\n<li>当最终预测的叶子节点包含了混合的预测特征的样本（比如二分类问题，最终叶子节点既包含了0，又包含了1），我们称为<code>impure</code>。如果仅包含了一种预测样本，我们称为<code>pure</code>.</li>\\n<li>显然<code>pure</code>的叶子节点预测的效果更好，我们可以使用<code>Gini impurity</code>或<code>Entropy and Information Gain</code>来量化<code>impurity</code>. scikit-learn是使用<code>Gini impurity</code></li>\\n<li>计算过程</li>\\n</ol>","copyright":{"author":"王新宇"},"autoDesc":true}');export{t as data};
