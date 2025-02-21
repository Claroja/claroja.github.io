const n=JSON.parse('{"key":"v-587f0fbf","path":"/8%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/2_2spark/function/partitionFunc.html","title":"partitionFunc","lang":"zh-CN","frontmatter":{"description":"partitionFunc mapPartitions(transformation) 一次传递整个分区的数据 rdd = sc.parallelize([1, 3, 2, 4, 7, 9, 6], 3) def process(iter): result = list() for it in iter: result.append(it * 10) return result rdd.mapPartitions(process).collect()","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/8%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/2_2spark/function/partitionFunc.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"partitionFunc"}],["meta",{"property":"og:description","content":"partitionFunc mapPartitions(transformation) 一次传递整个分区的数据 rdd = sc.parallelize([1, 3, 2, 4, 7, 9, 6], 3) def process(iter): result = list() for it in iter: result.append(it * 10) return result rdd.mapPartitions(process).collect()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"partitionFunc\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"mapPartitions(transformation)","slug":"mappartitions-transformation","link":"#mappartitions-transformation","children":[]},{"level":2,"title":"foreachPartition(action)","slug":"foreachpartition-action","link":"#foreachpartition-action","children":[]},{"level":2,"title":"partitionBy(transformation)","slug":"partitionby-transformation","link":"#partitionby-transformation","children":[]},{"level":2,"title":"repartition","slug":"repartition","link":"#repartition","children":[]},{"level":2,"title":"coalesce","slug":"coalesce","link":"#coalesce","children":[]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.73,"words":220},"filePathRelative":"8数据工程/2_2spark/function/partitionFunc.md","localizedDate":"2025年2月21日","excerpt":"<h1> partitionFunc</h1>\\n<h2> mapPartitions(transformation)</h2>\\n<p>一次传递整个分区的数据</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>rdd <span class=\\"token operator\\">=</span> sc<span class=\\"token punctuation\\">.</span>parallelize<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">7</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">9</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">6</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">process</span><span class=\\"token punctuation\\">(</span><span class=\\"token builtin\\">iter</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    result <span class=\\"token operator\\">=</span> <span class=\\"token builtin\\">list</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">for</span> it <span class=\\"token keyword\\">in</span> <span class=\\"token builtin\\">iter</span><span class=\\"token punctuation\\">:</span>\\n        result<span class=\\"token punctuation\\">.</span>append<span class=\\"token punctuation\\">(</span>it <span class=\\"token operator\\">*</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">return</span> result\\nrdd<span class=\\"token punctuation\\">.</span>mapPartitions<span class=\\"token punctuation\\">(</span>process<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>collect<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
