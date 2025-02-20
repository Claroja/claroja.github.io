const n=JSON.parse('{"key":"v-372588fa","path":"/%E6%95%B0%E5%AD%A6/%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/pandas/%E5%90%88%E5%B9%B6%E6%95%B0%E6%8D%AE%E9%9B%86_%E7%BA%B5%E5%90%91concate.html","title":"合并数据集_纵向concate","lang":"zh-CN","frontmatter":{"description":"合并数据集_纵向concate 参数解释 测试数据集 df1 = pd.DataFrame( { \\"A\\": [\\"A0\\", \\"A1\\", \\"A2\\", \\"A3\\"], \\"B\\": [\\"B0\\", \\"B1\\", \\"B2\\", \\"B3\\"], \\"C\\": [\\"C0\\", \\"C1\\", \\"C2\\", \\"C3\\"], \\"D\\": [\\"D0\\", \\"D1\\", \\"D2\\", \\"D3\\"], }, index=[0, 1, 2, 3], ) df2 = pd.DataFrame( { \\"B\\": [\\"B2\\", \\"B3\\", \\"B6\\", \\"B7\\"], \\"D\\": [\\"D2\\", \\"D3\\", \\"D6\\", \\"D7\\"], \\"F\\": [\\"F2\\", \\"F3\\", \\"F6\\", \\"F7\\"], }, index=[2, 3, 6, 7], )","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E5%AD%A6/%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/pandas/%E5%90%88%E5%B9%B6%E6%95%B0%E6%8D%AE%E9%9B%86_%E7%BA%B5%E5%90%91concate.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"合并数据集_纵向concate"}],["meta",{"property":"og:description","content":"合并数据集_纵向concate 参数解释 测试数据集 df1 = pd.DataFrame( { \\"A\\": [\\"A0\\", \\"A1\\", \\"A2\\", \\"A3\\"], \\"B\\": [\\"B0\\", \\"B1\\", \\"B2\\", \\"B3\\"], \\"C\\": [\\"C0\\", \\"C1\\", \\"C2\\", \\"C3\\"], \\"D\\": [\\"D0\\", \\"D1\\", \\"D2\\", \\"D3\\"], }, index=[0, 1, 2, 3], ) df2 = pd.DataFrame( { \\"B\\": [\\"B2\\", \\"B3\\", \\"B6\\", \\"B7\\"], \\"D\\": [\\"D2\\", \\"D3\\", \\"D6\\", \\"D7\\"], \\"F\\": [\\"F2\\", \\"F3\\", \\"F6\\", \\"F7\\"], }, index=[2, 3, 6, 7], )"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-18T14:02:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-18T14:02:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"合并数据集_纵向concate\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-18T14:02:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"参数解释","slug":"参数解释","link":"#参数解释","children":[{"level":3,"title":"测试数据集","slug":"测试数据集","link":"#测试数据集","children":[]},{"level":3,"title":"axis控制合并方向为纵向","slug":"axis控制合并方向为纵向","link":"#axis控制合并方向为纵向","children":[]},{"level":3,"title":"ignore_index索引处理","slug":"ignore-index索引处理","link":"#ignore-index索引处理","children":[]},{"level":3,"title":"join相同索引处理","slug":"join相同索引处理","link":"#join相同索引处理","children":[]}]},{"level":2,"title":"拼贴Series","slug":"拼贴series","link":"#拼贴series","children":[]},{"level":2,"title":"repeat rows","slug":"repeat-rows","link":"#repeat-rows","children":[]},{"level":2,"title":"append","slug":"append","link":"#append","children":[]}],"git":{"createdTime":1739887321000,"updatedTime":1739887321000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.52,"words":457},"filePathRelative":"数学/分析工具/pandas/合并数据集_纵向concate.md","localizedDate":"2025年2月18日","excerpt":"<h1> 合并数据集_纵向concate</h1>\\n<h2> 参数解释</h2>\\n<h3> 测试数据集</h3>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>df1 <span class=\\"token operator\\">=</span> pd<span class=\\"token punctuation\\">.</span>DataFrame<span class=\\"token punctuation\\">(</span>\\n    <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token string\\">\\"A\\"</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"A0\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"A1\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"A2\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"A3\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token string\\">\\"B\\"</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"B0\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"B1\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"B2\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"B3\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token string\\">\\"C\\"</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"C0\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"C1\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"C2\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"C3\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token string\\">\\"D\\"</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"D0\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"D1\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"D2\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"D3\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    index<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">)</span>\\n\\ndf2 <span class=\\"token operator\\">=</span> pd<span class=\\"token punctuation\\">.</span>DataFrame<span class=\\"token punctuation\\">(</span>\\n    <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token string\\">\\"B\\"</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"B2\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"B3\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"B6\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"B7\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token string\\">\\"D\\"</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"D2\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"D3\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"D6\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"D7\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token string\\">\\"F\\"</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"F2\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"F3\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"F6\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"F7\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    index<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">6</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">7</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
