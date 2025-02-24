const e=JSON.parse('{"key":"v-3d23c874","path":"/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/2%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF/3%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86/hmm_%E7%90%86%E8%AE%BA.html","title":"","lang":"zh-CN","frontmatter":{"description":"隐马尔科夫模型（Hidden Markov Model，HMM）, 是结构最简单的动态贝叶斯网（dynamic Bayesian network，也被称作有向图模型），HMM是可以用于标注问题的统计数学模型，描述由隐藏的马尔科夫链随机生成观测序列的过程，属于生成模型。 HMM解决的问题 问题是基于序列的，比如时间序列、状态序列。 问题中有两类数据 一类是可以观测到的，即观测序列 一类是不能观察到的，即状态序列(隐藏序列) 如果问题有了这两个特征，那么这个问题一般可以使用HMM模型尝试解决，例如，说一句话，发出的声音是观测序列，想表达的意思是隐藏状态序列；写文章的过程可以想象为先在脑海中构思好一个满足语法的词性序列，然后再将每个词性填充为具体的词语。","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/2%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF/3%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86/hmm_%E7%90%86%E8%AE%BA.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:description","content":"隐马尔科夫模型（Hidden Markov Model，HMM）, 是结构最简单的动态贝叶斯网（dynamic Bayesian network，也被称作有向图模型），HMM是可以用于标注问题的统计数学模型，描述由隐藏的马尔科夫链随机生成观测序列的过程，属于生成模型。 HMM解决的问题 问题是基于序列的，比如时间序列、状态序列。 问题中有两类数据 一类是可以观测到的，即观测序列 一类是不能观察到的，即状态序列(隐藏序列) 如果问题有了这两个特征，那么这个问题一般可以使用HMM模型尝试解决，例如，说一句话，发出的声音是观测序列，想表达的意思是隐藏状态序列；写文章的过程可以想象为先在脑海中构思好一个满足语法的词性序列，然后再将每个词性填充为具体的词语。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"HMM解决的问题","slug":"hmm解决的问题","link":"#hmm解决的问题","children":[]},{"level":2,"title":"HMM的两个假设","slug":"hmm的两个假设","link":"#hmm的两个假设","children":[]},{"level":2,"title":"HMM模型","slug":"hmm模型","link":"#hmm模型","children":[{"level":3,"title":"状态集合","slug":"状态集合","link":"#状态集合","children":[]},{"level":3,"title":"观测集合","slug":"观测集合","link":"#观测集合","children":[]}]},{"level":2,"title":"初始状态概率向量","slug":"初始状态概率向量","link":"#初始状态概率向量","children":[]},{"level":2,"title":"状态转移概率矩阵","slug":"状态转移概率矩阵","link":"#状态转移概率矩阵","children":[]},{"level":2,"title":"发射概率矩阵","slug":"发射概率矩阵","link":"#发射概率矩阵","children":[]},{"level":2,"title":"状态序列和观测序列的长度","slug":"状态序列和观测序列的长度","link":"#状态序列和观测序列的长度","children":[{"level":3,"title":"HMM的整体表示","slug":"hmm的整体表示","link":"#hmm的整体表示","children":[]}]},{"level":2,"title":"HMM模型的三个基本问题","slug":"hmm模型的三个基本问题","link":"#hmm模型的三个基本问题","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":7.02,"words":2105},"filePathRelative":"2机器学习/2应用场景/3自然语言处理/自然语言处理/hmm_理论.md","localizedDate":"2025年2月24日","excerpt":"<p>隐马尔科夫模型（Hidden Markov Model，HMM）, 是结构最简单的动态贝叶斯网（dynamic Bayesian network，也被称作有向图模型），HMM是可以用于标注问题的统计数学模型，描述由隐藏的马尔科夫链随机生成观测序列的过程，属于生成模型。</p>\\n<h2> HMM解决的问题</h2>\\n<ol>\\n<li>问题是基于序列的，比如时间序列、状态序列。</li>\\n<li>问题中有两类数据\\n<ol>\\n<li>一类是可以观测到的，即观测序列</li>\\n<li>一类是不能观察到的，即状态序列(隐藏序列)</li>\\n</ol>\\n</li>\\n</ol>\\n<p>如果问题有了这两个特征，那么这个问题一般可以使用HMM模型尝试解决，例如，说一句话，发出的声音是观测序列，想表达的意思是隐藏状态序列；写文章的过程可以想象为先在脑海中构思好一个满足语法的词性序列，然后再将每个词性填充为具体的词语。</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
