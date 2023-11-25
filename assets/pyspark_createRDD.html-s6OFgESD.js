const a=JSON.parse('{"key":"v-67845299","path":"/%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/spark/%E5%9F%BA%E7%A1%80/pyspark_createRDD.html","title":"createRDD","lang":"zh-CN","frontmatter":{"description":"createRDD parallelized 本地对象 rdd = sc.parallelize(集合对象,分区数) rdd = sc.parallelize([1, 2, 3, 4, 5, 6, 7, 8, 9]) # 本地集合 -&gt; 分布式对象(RDD) rdd = sc.parallelize([1, 2, 3], 3) # 指定分区量，默认是cpu数量 rdd.getNumPartitions() # 查看分区数","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/spark/%E5%9F%BA%E7%A1%80/pyspark_createRDD.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"createRDD"}],["meta",{"property":"og:description","content":"createRDD parallelized 本地对象 rdd = sc.parallelize(集合对象,分区数) rdd = sc.parallelize([1, 2, 3, 4, 5, 6, 7, 8, 9]) # 本地集合 -&gt; 分布式对象(RDD) rdd = sc.parallelize([1, 2, 3], 3) # 指定分区量，默认是cpu数量 rdd.getNumPartitions() # 查看分区数"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"createRDD\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"parallelized 本地对象","slug":"parallelized-本地对象","link":"#parallelized-本地对象","children":[]},{"level":2,"title":"external data 读取文件","slug":"external-data-读取文件","link":"#external-data-读取文件","children":[{"level":3,"title":"textFile","slug":"textfile","link":"#textfile","children":[]},{"level":3,"title":"wholeTextFiles","slug":"wholetextfiles","link":"#wholetextfiles","children":[]}]}],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.42,"words":125},"filePathRelative":"数据工程/spark/基础/pyspark_createRDD.md","localizedDate":"2023年11月25日","excerpt":"<h1> createRDD</h1>\\n<h2> parallelized 本地对象</h2>\\n<p><code>rdd = sc.parallelize(集合对象,分区数)</code></p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>rdd <span class=\\"token operator\\">=</span> sc<span class=\\"token punctuation\\">.</span>parallelize<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">6</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">7</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">8</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">9</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 本地集合 -&gt; 分布式对象(RDD)</span>\\nrdd <span class=\\"token operator\\">=</span> sc<span class=\\"token punctuation\\">.</span>parallelize<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 指定分区量，默认是cpu数量 </span>\\nrdd<span class=\\"token punctuation\\">.</span>getNumPartitions<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\"># 查看分区数</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{a as data};
