const a=JSON.parse('{"key":"v-4a46dbea","path":"/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/6%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/numpy/numpy%E6%95%B0%E7%BB%84%E6%93%8D%E4%BD%9C.html","title":"numpy数组操作","lang":"zh-CN","frontmatter":{"description":"numpy数组操作 索引 (1) 一维 import numpy as np data=np.array([1,2,3,4]) data[0] # 1 单个索引, 传入整型 data[[1,3]] # array([2, 4]), 多个索引传入列表 data[[True,False,True,False]] # array([1, 3]), 多个索引, 传入等长的Boolean数组 data[0:2] # array([1,2]) 切片索引, 使用\\":\\"号, 注意是左闭右开的","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/6%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/numpy/numpy%E6%95%B0%E7%BB%84%E6%93%8D%E4%BD%9C.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"numpy数组操作"}],["meta",{"property":"og:description","content":"numpy数组操作 索引 (1) 一维 import numpy as np data=np.array([1,2,3,4]) data[0] # 1 单个索引, 传入整型 data[[1,3]] # array([2, 4]), 多个索引传入列表 data[[True,False,True,False]] # array([1, 3]), 多个索引, 传入等长的Boolean数组 data[0:2] # array([1,2]) 切片索引, 使用\\":\\"号, 注意是左闭右开的"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"numpy数组操作\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.67,"words":502},"filePathRelative":"4机器学习/6分析工具/numpy/numpy数组操作.md","localizedDate":"2025年2月21日","excerpt":"<h1> numpy数组操作</h1>\\n<ol>\\n<li>索引\\n(1) 一维</li>\\n</ol>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> numpy <span class=\\"token keyword\\">as</span> np\\ndata<span class=\\"token operator\\">=</span>np<span class=\\"token punctuation\\">.</span>array<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">4</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\ndata<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span>  <span class=\\"token comment\\"># 1 单个索引, 传入整型</span>\\ndata<span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span>  <span class=\\"token comment\\"># array([2, 4]), 多个索引传入列表</span>\\ndata<span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">[</span><span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">,</span><span class=\\"token boolean\\">False</span><span class=\\"token punctuation\\">,</span><span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">,</span><span class=\\"token boolean\\">False</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span>  <span class=\\"token comment\\"># array([1, 3]), 多个索引, 传入等长的Boolean数组</span>\\ndata<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">]</span>  <span class=\\"token comment\\"># array([1,2]) 切片索引, 使用\\":\\"号, 注意是左闭右开的</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{a as data};
