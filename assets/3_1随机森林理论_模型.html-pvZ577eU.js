const t=JSON.parse('{"key":"v-a622810c","path":"/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/2_1%E6%A0%91%E6%A8%A1%E5%9E%8B/3_1%E9%9A%8F%E6%9C%BA%E6%A3%AE%E6%9E%97%E7%90%86%E8%AE%BA_%E6%A8%A1%E5%9E%8B.html","title":"randomforest","lang":"zh-CN","frontmatter":{"description":"randomforest 总结 随机森林步骤 使用随机样本, 可放回的随机抽取样本，建立和初始数据集一样大小的样本集合，这个过程叫做bootstrapped 使用随机特征 将多课树的结果进行分类打分，求最终的结果 缺失值的处理 首先进行差值 根据多课树预测结果，将相同的预测结果样本放在一起，然后用再权重来评估。 随机森林算法步骤 决策树简单, 容易解释, 很容易拟合训练集, 但是在测试集上表现却不好. 随机森林结合了多个简单的决策树, 解决了这个问题.","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/2_1%E6%A0%91%E6%A8%A1%E5%9E%8B/3_1%E9%9A%8F%E6%9C%BA%E6%A3%AE%E6%9E%97%E7%90%86%E8%AE%BA_%E6%A8%A1%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"randomforest"}],["meta",{"property":"og:description","content":"randomforest 总结 随机森林步骤 使用随机样本, 可放回的随机抽取样本，建立和初始数据集一样大小的样本集合，这个过程叫做bootstrapped 使用随机特征 将多课树的结果进行分类打分，求最终的结果 缺失值的处理 首先进行差值 根据多课树预测结果，将相同的预测结果样本放在一起，然后用再权重来评估。 随机森林算法步骤 决策树简单, 容易解释, 很容易拟合训练集, 但是在测试集上表现却不好. 随机森林结合了多个简单的决策树, 解决了这个问题."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"randomforest"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"randomforest\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"随机森林算法步骤","slug":"随机森林算法步骤","link":"#随机森林算法步骤","children":[{"level":3,"title":"步骤1: 创建bootstrapped数据集","slug":"步骤1-创建bootstrapped数据集","link":"#步骤1-创建bootstrapped数据集","children":[]},{"level":3,"title":"步骤2: 在从bootstrapped数据集中创建树时, 每一步随机选取两个属性","slug":"步骤2-在从bootstrapped数据集中创建树时-每一步随机选取两个属性","link":"#步骤2-在从bootstrapped数据集中创建树时-每一步随机选取两个属性","children":[]},{"level":3,"title":"步骤3: 预测与投票","slug":"步骤3-预测与投票","link":"#步骤3-预测与投票","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.79,"words":536},"filePathRelative":"4机器学习/2_1树模型/3_1随机森林理论_模型.md","localizedDate":"2025年2月21日","excerpt":"<h1> randomforest</h1>\\n<h2> 总结</h2>\\n<ol>\\n<li>随机森林步骤</li>\\n<li>使用随机样本, 可放回的随机抽取样本，建立和初始数据集一样大小的样本集合，这个过程叫做<code>bootstrapped</code></li>\\n<li>使用随机特征</li>\\n<li>将多课树的结果进行分类打分，求最终的结果</li>\\n<li>缺失值的处理</li>\\n</ol>\\n<ul>\\n<li>首先进行差值</li>\\n<li>根据多课树预测结果，将相同的预测结果样本放在一起，然后用再权重来评估。</li>\\n</ul>\\n<h2> 随机森林算法步骤</h2>\\n<p>决策树简单, 容易解释, 很容易拟合训练集, 但是在测试集上表现却不好. 随机森林结合了多个简单的决策树, 解决了这个问题.</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{t as data};
