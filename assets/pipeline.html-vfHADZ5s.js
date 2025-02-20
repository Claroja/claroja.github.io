const e=JSON.parse(`{"key":"v-3745a3c4","path":"/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/3_3transformers/tutorial/pipeline.html","title":"pipeline","lang":"zh-CN","frontmatter":{"description":"pipeline pipeline()会自动在Model Hub上加载对应task的model和tokenizer. from transformers import pipeline classifier = pipeline(\\"sentiment-analysis\\") classifier(\\"We are very happy to show you the 🤗 Transformers library.\\") [{'label': 'POSITIVE', 'score': 0.9998}]","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/3_3transformers/tutorial/pipeline.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"pipeline"}],["meta",{"property":"og:description","content":"pipeline pipeline()会自动在Model Hub上加载对应task的model和tokenizer. from transformers import pipeline classifier = pipeline(\\"sentiment-analysis\\") classifier(\\"We are very happy to show you the 🤗 Transformers library.\\") [{'label': 'POSITIVE', 'score': 0.9998}]"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-18T14:02:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-18T14:02:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"pipeline\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-18T14:02:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"task","slug":"task","link":"#task","children":[]}]}],"git":{"createdTime":1739887321000,"updatedTime":1739887321000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.91,"words":273},"filePathRelative":"机器学习/3_3transformers/tutorial/pipeline.md","localizedDate":"2025年2月18日","excerpt":"<h1> pipeline</h1>\\n<p><code>pipeline()</code>会自动在Model Hub上加载对应<code>task</code>的<code>model</code>和<code>tokenizer</code>.</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">from</span> transformers <span class=\\"token keyword\\">import</span> pipeline\\nclassifier <span class=\\"token operator\\">=</span> pipeline<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"sentiment-analysis\\"</span><span class=\\"token punctuation\\">)</span>\\nclassifier<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"We are very happy to show you the 🤗 Transformers library.\\"</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">{</span><span class=\\"token string\\">'label'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'POSITIVE'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'score'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">0.9998</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">]</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{e as data};
