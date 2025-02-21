const n=JSON.parse('{"key":"v-1b7995d0","path":"/8%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/2_2spark/function/transformationFunc.html","title":"transformationFunc","lang":"zh-CN","frontmatter":{"description":"transformationFunc map rdd.map(func) rdd = sc.parallelize([1, 2, 3, 4, 5, 6], 3) ## 1. 定义方法, 作为算子的传入函数体 def add(data): return data * 10 rdd.map(add).collect() ## 2. 更简单的方式 是定义lambda表达式来写匿名函数 rdd.map(lambda data: data * 10).collect()","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/8%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/2_2spark/function/transformationFunc.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"transformationFunc"}],["meta",{"property":"og:description","content":"transformationFunc map rdd.map(func) rdd = sc.parallelize([1, 2, 3, 4, 5, 6], 3) ## 1. 定义方法, 作为算子的传入函数体 def add(data): return data * 10 rdd.map(add).collect() ## 2. 更简单的方式 是定义lambda表达式来写匿名函数 rdd.map(lambda data: data * 10).collect()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"transformationFunc"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"transformationFunc\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"map","slug":"map","link":"#map","children":[]},{"level":2,"title":"flatMap","slug":"flatmap","link":"#flatmap","children":[]},{"level":2,"title":"reduceByKey","slug":"reducebykey","link":"#reducebykey","children":[]},{"level":2,"title":"groupBy","slug":"groupby","link":"#groupby","children":[]},{"level":2,"title":"filter","slug":"filter","link":"#filter","children":[]},{"level":2,"title":"distinct","slug":"distinct","link":"#distinct","children":[]},{"level":2,"title":"union","slug":"union","link":"#union","children":[]},{"level":2,"title":"join","slug":"join","link":"#join","children":[]},{"level":2,"title":"intersection","slug":"intersection","link":"#intersection","children":[]},{"level":2,"title":"glom","slug":"glom","link":"#glom","children":[]},{"level":2,"title":"groupByKey","slug":"groupbykey","link":"#groupbykey","children":[]},{"level":2,"title":"sortBy","slug":"sortby","link":"#sortby","children":[]},{"level":2,"title":"sortByKey","slug":"sortbykey","link":"#sortbykey","children":[]},{"level":2,"title":"groupByKey vs reduceByKey","slug":"groupbykey-vs-reducebykey","link":"#groupbykey-vs-reducebykey","children":[]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":2.47,"words":740},"filePathRelative":"8数据工程/2_2spark/function/transformationFunc.md","localizedDate":"2025年2月21日","excerpt":"<h1> transformationFunc</h1>\\n<h2> map</h2>\\n<p><code>rdd.map(func)</code></p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>rdd <span class=\\"token operator\\">=</span> sc<span class=\\"token punctuation\\">.</span>parallelize<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">6</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">## 1. 定义方法, 作为算子的传入函数体</span>\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">return</span> data <span class=\\"token operator\\">*</span> <span class=\\"token number\\">10</span>\\nrdd<span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">map</span><span class=\\"token punctuation\\">(</span>add<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>collect<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">## 2. 更简单的方式 是定义lambda表达式来写匿名函数</span>\\nrdd<span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">map</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">lambda</span> data<span class=\\"token punctuation\\">:</span> data <span class=\\"token operator\\">*</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>collect<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> \\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
