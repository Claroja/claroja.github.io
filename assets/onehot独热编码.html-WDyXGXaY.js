const n=JSON.parse(`{"key":"v-3fa81684","path":"/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1_2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/%E6%95%B0%E6%8D%AE%E9%A2%84%E5%A4%84%E7%90%86/onehot%E7%8B%AC%E7%83%AD%E7%BC%96%E7%A0%81.html","title":"onehot独热编码","lang":"zh-CN","frontmatter":{"description":"onehot独热编码 案例 import pandas as pd df = pd.DataFrame({'carduser_id': [12345,223432,343424], 'gender': ['男','男','女']}) dummies = pd.get_dummies(df) dummies # carduser_id gender_女 gender_男 # 0 12345 0 1 # 1 223432 0 1 # 2 343424 1 0","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1_2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/%E6%95%B0%E6%8D%AE%E9%A2%84%E5%A4%84%E7%90%86/onehot%E7%8B%AC%E7%83%AD%E7%BC%96%E7%A0%81.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"onehot独热编码"}],["meta",{"property":"og:description","content":"onehot独热编码 案例 import pandas as pd df = pd.DataFrame({'carduser_id': [12345,223432,343424], 'gender': ['男','男','女']}) dummies = pd.get_dummies(df) dummies # carduser_id gender_女 gender_男 # 0 12345 0 1 # 1 223432 0 1 # 2 343424 1 0"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"onehot独热编码\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"案例","slug":"案例","link":"#案例","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.27,"words":82},"filePathRelative":"4机器学习/1_2机器学习流程/数据预处理/onehot独热编码.md","localizedDate":"2025年2月21日","excerpt":"<h1> onehot独热编码</h1>\\n<h2> 案例</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> pandas <span class=\\"token keyword\\">as</span> pd\\ndf <span class=\\"token operator\\">=</span> pd<span class=\\"token punctuation\\">.</span>DataFrame<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span><span class=\\"token string\\">'carduser_id'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">12345</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">223432</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">343424</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n                   <span class=\\"token string\\">'gender'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'男'</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">'男'</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">'女'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\ndummies <span class=\\"token operator\\">=</span> pd<span class=\\"token punctuation\\">.</span>get_dummies<span class=\\"token punctuation\\">(</span>df<span class=\\"token punctuation\\">)</span>\\ndummies\\n<span class=\\"token comment\\">#    carduser_id  gender_女  gender_男</span>\\n<span class=\\"token comment\\"># 0        12345         0         1</span>\\n<span class=\\"token comment\\"># 1       223432         0         1</span>\\n<span class=\\"token comment\\"># 2       343424         1         0</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
