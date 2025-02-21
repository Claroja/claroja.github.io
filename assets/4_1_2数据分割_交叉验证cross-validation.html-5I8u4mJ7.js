const t=JSON.parse('{"key":"v-75b7c257","path":"/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1_2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/4_1_2%E6%95%B0%E6%8D%AE%E5%88%86%E5%89%B2_%E4%BA%A4%E5%8F%89%E9%AA%8C%E8%AF%81cross-validation.html","title":"","lang":"zh-CN","frontmatter":{"description":"数据拆分技术的比较 training-test split的缺点时, 当我们使用不同的超参数进行调试时, 一些数据可能会泄露给训练集, 从而导致过拟合. training-validation-test split 超参的调试是在验证集上 泛化的评估是在测试集上 缺点是用于训练的数据变瘦啊了 cross-validation则解决了上述的问题, 但仍需注意: alt text 不均衡数据要均衡抽样(保证特征和目标分在训练集和验证集上成比例分布), 使用stratified k-fold 遇到序列数据, 需要进行分组, 使用GroupKFold","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1_2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/4_1_2%E6%95%B0%E6%8D%AE%E5%88%86%E5%89%B2_%E4%BA%A4%E5%8F%89%E9%AA%8C%E8%AF%81cross-validation.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:description","content":"数据拆分技术的比较 training-test split的缺点时, 当我们使用不同的超参数进行调试时, 一些数据可能会泄露给训练集, 从而导致过拟合. training-validation-test split 超参的调试是在验证集上 泛化的评估是在测试集上 缺点是用于训练的数据变瘦啊了 cross-validation则解决了上述的问题, 但仍需注意: alt text 不均衡数据要均衡抽样(保证特征和目标分在训练集和验证集上成比例分布), 使用stratified k-fold 遇到序列数据, 需要进行分组, 使用GroupKFold"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"数据拆分技术的比较","slug":"数据拆分技术的比较","link":"#数据拆分技术的比较","children":[]},{"level":2,"title":"交叉验证的应用","slug":"交叉验证的应用","link":"#交叉验证的应用","children":[]},{"level":2,"title":"参数K如何选择","slug":"参数k如何选择","link":"#参数k如何选择","children":[]},{"level":2,"title":"k-fold分类","slug":"k-fold分类","link":"#k-fold分类","children":[]},{"level":2,"title":"步骤","slug":"步骤","link":"#步骤","children":[]},{"level":2,"title":"实战","slug":"实战","link":"#实战","children":[{"level":3,"title":"模型选择","slug":"模型选择","link":"#模型选择","children":[]},{"level":3,"title":"参数调优","slug":"参数调优","link":"#参数调优","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":3.8,"words":1141},"filePathRelative":"4机器学习/1_2机器学习流程/4_1_2数据分割_交叉验证cross-validation.md","localizedDate":"2025年2月21日","excerpt":"<h2> 数据拆分技术的比较</h2>\\n<ol>\\n<li>\\n<p>training-test split的缺点时, 当我们使用不同的超参数进行调试时, 一些数据可能会泄露给训练集, 从而导致过拟合.</p>\\n</li>\\n<li>\\n<p>training-validation-test split</p>\\n<ol>\\n<li>超参的调试是在验证集上</li>\\n<li>泛化的评估是在测试集上</li>\\n<li>缺点是用于训练的数据变瘦啊了</li>\\n</ol>\\n</li>\\n<li>\\n<p>cross-validation则解决了上述的问题, 但仍需注意:</p>\\n<figure><figcaption>alt text</figcaption></figure>\\n<ol>\\n<li>不均衡数据要均衡抽样(保证特征和目标分在训练集和验证集上成比例分布), 使用stratified k-fold</li>\\n<li>遇到序列数据, 需要进行分组, 使用GroupKFold</li>\\n</ol>\\n</li>\\n</ol>","copyright":{"author":"王新宇"},"autoDesc":true}');export{t as data};
