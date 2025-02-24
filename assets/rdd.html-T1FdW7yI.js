const e=JSON.parse('{"key":"v-90bf1066","path":"/8%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/3spark/%E5%9F%BA%E7%A1%80/rdd.html","title":"rdd","lang":"zh-CN","frontmatter":{"description":"rdd RDD（Resilient Distributed Dataset）叫做弹性分布式数据集，是Spark中最基本的数据抽象，代表一个不可变、可 分区、里面的元素可并行计算的集合。 Dataset：一个数据集合，用于存放数据的。 Distributed：RDD中的数据是分布式存储的，可用于分布式计算。 Resilient：RDD中的数据可以存储在内存中或者磁盘中。 特性 1. RDD是有分区的 一个RDD会有多个分区，分区是RDD数据存储的最小单位 分区是物理概念，RDD是逻辑概念","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/8%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/3spark/%E5%9F%BA%E7%A1%80/rdd.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"rdd"}],["meta",{"property":"og:description","content":"rdd RDD（Resilient Distributed Dataset）叫做弹性分布式数据集，是Spark中最基本的数据抽象，代表一个不可变、可 分区、里面的元素可并行计算的集合。 Dataset：一个数据集合，用于存放数据的。 Distributed：RDD中的数据是分布式存储的，可用于分布式计算。 Resilient：RDD中的数据可以存储在内存中或者磁盘中。 特性 1. RDD是有分区的 一个RDD会有多个分区，分区是RDD数据存储的最小单位 分区是物理概念，RDD是逻辑概念"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"rdd\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"特性","slug":"特性","link":"#特性","children":[{"level":3,"title":"1. RDD是有分区的","slug":"_1-rdd是有分区的","link":"#_1-rdd是有分区的","children":[]},{"level":3,"title":"2. RDD的方法会作用在其所有分区上","slug":"_2-rdd的方法会作用在其所有分区上","link":"#_2-rdd的方法会作用在其所有分区上","children":[]},{"level":3,"title":"3. RDD之间是有依赖关系的","slug":"_3-rdd之间是有依赖关系的","link":"#_3-rdd之间是有依赖关系的","children":[]},{"level":3,"title":"4. key_value型(元组)的RDD可以有分区器","slug":"_4-key-value型-元组-的rdd可以有分区器","link":"#_4-key-value型-元组-的rdd可以有分区器","children":[]},{"level":3,"title":"5.RDD的分区规划，会尽量靠近数据所在服务器","slug":"_5-rdd的分区规划-会尽量靠近数据所在服务器","link":"#_5-rdd的分区规划-会尽量靠近数据所在服务器","children":[]}]}],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.93,"words":578},"filePathRelative":"8数据工程/3spark/基础/rdd.md","localizedDate":"2025年2月24日","excerpt":"<h1> rdd</h1>\\n<p>RDD（Resilient Distributed Dataset）叫做弹性分布式数据集，是Spark中最基本的数据抽象，代表一个不可变、可\\n分区、里面的元素可并行计算的集合。</p>\\n<ul>\\n<li>Dataset：一个数据集合，用于存放数据的。</li>\\n<li>Distributed：RDD中的数据是分布式存储的，可用于分布式计算。</li>\\n<li>Resilient：RDD中的数据可以存储在内存中或者磁盘中。</li>\\n</ul>\\n<h2> 特性</h2>\\n<h3> 1. RDD是有分区的</h3>\\n<p>一个RDD会有多个分区，分区是RDD数据存储的最小单位\\n分区是物理概念，RDD是逻辑概念</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
