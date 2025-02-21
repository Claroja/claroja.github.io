const t=JSON.parse('{"key":"v-7601bc3e","path":"/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/2_1%E6%A0%91%E6%A8%A1%E5%9E%8B/6_3XGBoost_%E5%AE%9E%E6%88%98_%E6%A8%A1%E5%9E%8B.html","title":"","lang":"zh-CN","frontmatter":{"description":"XGBoost是陈天奇于2014年提出的一套并行boost算法的工具库. XGBoost的全称是eXtreme Gradient Boosting，既可以用于分类也可以用于回归问题中, 它是经过优化的分布式梯度提升库. 比常见的工具包快10倍以上。在数据科学方面，有大量的Kaggle选手选用XGBoost进行数据挖掘比赛，是各大数据科学比赛的必杀武器；在工业界大规模数据方面，XGBoost的分布式版本有广泛的可移植性，支持在Kubernetes、Hadoop、SGE、MPI、 Dask等各个分布式环境上运行，使得它可以很好地解决工业界大规模数据的问题。 XGBoost 是对 gradient boosting decision tree 的实现，但是一般来说，gradient boosting 的实现是比较慢的，因为每次都要先构造出一个树并添加到整个模型序列中。而 XGBoost 的特点就是计算速度快，模型表现好，这两点也正是项目的目标。表现快是因为它具有这样的设计：","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/2_1%E6%A0%91%E6%A8%A1%E5%9E%8B/6_3XGBoost_%E5%AE%9E%E6%88%98_%E6%A8%A1%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:description","content":"XGBoost是陈天奇于2014年提出的一套并行boost算法的工具库. XGBoost的全称是eXtreme Gradient Boosting，既可以用于分类也可以用于回归问题中, 它是经过优化的分布式梯度提升库. 比常见的工具包快10倍以上。在数据科学方面，有大量的Kaggle选手选用XGBoost进行数据挖掘比赛，是各大数据科学比赛的必杀武器；在工业界大规模数据方面，XGBoost的分布式版本有广泛的可移植性，支持在Kubernetes、Hadoop、SGE、MPI、 Dask等各个分布式环境上运行，使得它可以很好地解决工业界大规模数据的问题。 XGBoost 是对 gradient boosting decision tree 的实现，但是一般来说，gradient boosting 的实现是比较慢的，因为每次都要先构造出一个树并添加到整个模型序列中。而 XGBoost 的特点就是计算速度快，模型表现好，这两点也正是项目的目标。表现快是因为它具有这样的设计："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[{"level":3,"title":"booster","slug":"booster","link":"#booster","children":[]},{"level":3,"title":"objective","slug":"objective","link":"#objective","children":[]},{"level":3,"title":"正则化参数","slug":"正则化参数","link":"#正则化参数","children":[]},{"level":3,"title":"让树停止生长：gamma","slug":"让树停止生长-gamma","link":"#让树停止生长-gamma","children":[]},{"level":3,"title":"过拟合：剪枝参数与回归模型调参","slug":"过拟合-剪枝参数与回归模型调参","link":"#过拟合-剪枝参数与回归模型调参","children":[]},{"level":3,"title":"样本不均衡","slug":"样本不均衡","link":"#样本不均衡","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":12.87,"words":3862},"filePathRelative":"4机器学习/2_1树模型/6_3XGBoost_实战_模型.md","localizedDate":"2025年2月21日","excerpt":"<p>XGBoost是陈天奇于2014年提出的一套并行boost算法的工具库.</p>\\n<p>XGBoost的全称是eXtreme Gradient Boosting，既可以用于分类也可以用于回归问题中, 它是经过优化的分布式梯度提升库. 比常见的工具包快10倍以上。在数据科学方面，有大量的Kaggle选手选用XGBoost进行数据挖掘比赛，是各大数据科学比赛的必杀武器；在工业界大规模数据方面，XGBoost的分布式版本有广泛的可移植性，支持在Kubernetes、Hadoop、SGE、MPI、 Dask等各个分布式环境上运行，使得它可以很好地解决工业界大规模数据的问题。</p>\\n<p>XGBoost 是对 gradient boosting decision tree 的实现，但是一般来说，gradient boosting 的实现是比较慢的，因为每次都要先构造出一个树并添加到整个模型序列中。而 XGBoost 的特点就是计算速度快，模型表现好，这两点也正是项目的目标。表现快是因为它具有这样的设计：</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{t as data};
