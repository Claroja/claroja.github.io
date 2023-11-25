const s=JSON.parse('{"key":"v-51e164e7","path":"/%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/spark/func_functions_(/pyspark_functions.md)/pyspark_dataframe_sql.html","title":"dataframe_sql","lang":"zh-CN","frontmatter":{"description":"dataframe_sql sql ## coding:utf8 from pyspark.sql import SparkSession from pyspark.sql.types import StructType, StringType, IntegerType import pandas as pd ## 0. 构建执行环境入口对象SparkSession spark = SparkSession.builder.\\\\ appName(\\"test\\").\\\\ master(\\"local[*]\\").\\\\ getOrCreate() sc = spark.sparkContext df = spark.read.format(\\"csv\\").\\\\ schema(\\"id INT, subject STRING, score INT\\").\\\\ load(\\"../data/input/sql/stu_score.txt\\") ## 注册成临时表 df.createTempView(\\"score\\") # 注册临时视图(表) df.createOrReplaceTempView(\\"score_2\\") # 注册 或者 替换 临时视图 df.createGlobalTempView(\\"score_3\\") # 注册全局临时视图 全局临时视图在使用的时候 需要在前面带上global_temp. 前缀 ## 可以通过SparkSession对象的sql api来完成sql语句的执行 spark.sql(\\"SELECT subject, COUNT(*) AS cnt FROM score GROUP BY subject\\").show() spark.sql(\\"SELECT subject, COUNT(*) AS cnt FROM score_2 GROUP BY subject\\").show() spark.sql(\\"SELECT subject, COUNT(*) AS cnt FROM global_temp.score_3 GROUP BY subject\\").show()","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/spark/func_functions_(/pyspark_functions.md)/pyspark_dataframe_sql.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"dataframe_sql"}],["meta",{"property":"og:description","content":"dataframe_sql sql ## coding:utf8 from pyspark.sql import SparkSession from pyspark.sql.types import StructType, StringType, IntegerType import pandas as pd ## 0. 构建执行环境入口对象SparkSession spark = SparkSession.builder.\\\\ appName(\\"test\\").\\\\ master(\\"local[*]\\").\\\\ getOrCreate() sc = spark.sparkContext df = spark.read.format(\\"csv\\").\\\\ schema(\\"id INT, subject STRING, score INT\\").\\\\ load(\\"../data/input/sql/stu_score.txt\\") ## 注册成临时表 df.createTempView(\\"score\\") # 注册临时视图(表) df.createOrReplaceTempView(\\"score_2\\") # 注册 或者 替换 临时视图 df.createGlobalTempView(\\"score_3\\") # 注册全局临时视图 全局临时视图在使用的时候 需要在前面带上global_temp. 前缀 ## 可以通过SparkSession对象的sql api来完成sql语句的执行 spark.sql(\\"SELECT subject, COUNT(*) AS cnt FROM score GROUP BY subject\\").show() spark.sql(\\"SELECT subject, COUNT(*) AS cnt FROM score_2 GROUP BY subject\\").show() spark.sql(\\"SELECT subject, COUNT(*) AS cnt FROM global_temp.score_3 GROUP BY subject\\").show()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"dataframe_sql\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":3,"title":"sql","slug":"sql","link":"#sql","children":[]}],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.57,"words":172},"filePathRelative":"数据工程/spark/func[functions](/pyspark_functions.md)/pyspark_dataframe_sql.md","localizedDate":"2023年11月25日","excerpt":"<h1> dataframe_sql</h1>\\n<h3> sql</h3>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token comment\\">## coding:utf8</span>\\n\\n<span class=\\"token keyword\\">from</span> pyspark<span class=\\"token punctuation\\">.</span>sql <span class=\\"token keyword\\">import</span> SparkSession\\n<span class=\\"token keyword\\">from</span> pyspark<span class=\\"token punctuation\\">.</span>sql<span class=\\"token punctuation\\">.</span>types <span class=\\"token keyword\\">import</span> StructType<span class=\\"token punctuation\\">,</span> StringType<span class=\\"token punctuation\\">,</span> IntegerType\\n<span class=\\"token keyword\\">import</span> pandas <span class=\\"token keyword\\">as</span> pd\\n\\n<span class=\\"token comment\\">## 0. 构建执行环境入口对象SparkSession</span>\\nspark <span class=\\"token operator\\">=</span> SparkSession<span class=\\"token punctuation\\">.</span>builder<span class=\\"token punctuation\\">.</span>\\\\\\n    appName<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"test\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>\\\\\\n    master<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"local[*]\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>\\\\\\n    getOrCreate<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\nsc <span class=\\"token operator\\">=</span> spark<span class=\\"token punctuation\\">.</span>sparkContext\\n\\ndf <span class=\\"token operator\\">=</span> spark<span class=\\"token punctuation\\">.</span>read<span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">format</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"csv\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>\\\\\\n    schema<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"id INT, subject STRING, score INT\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>\\\\\\n    load<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"../data/input/sql/stu_score.txt\\"</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">## 注册成临时表</span>\\ndf<span class=\\"token punctuation\\">.</span>createTempView<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"score\\"</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\"># 注册临时视图(表)</span>\\ndf<span class=\\"token punctuation\\">.</span>createOrReplaceTempView<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"score_2\\"</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\"># 注册 或者 替换  临时视图</span>\\ndf<span class=\\"token punctuation\\">.</span>createGlobalTempView<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"score_3\\"</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\"># 注册全局临时视图 全局临时视图在使用的时候 需要在前面带上global_temp. 前缀</span>\\n\\n<span class=\\"token comment\\">## 可以通过SparkSession对象的sql api来完成sql语句的执行</span>\\nspark<span class=\\"token punctuation\\">.</span>sql<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"SELECT subject, COUNT(*) AS cnt FROM score GROUP BY subject\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>show<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\nspark<span class=\\"token punctuation\\">.</span>sql<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"SELECT subject, COUNT(*) AS cnt FROM score_2 GROUP BY subject\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>show<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\nspark<span class=\\"token punctuation\\">.</span>sql<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"SELECT subject, COUNT(*) AS cnt FROM global_temp.score_3 GROUP BY subject\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>show<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{s as data};
