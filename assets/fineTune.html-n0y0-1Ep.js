const n=JSON.parse(`{"key":"v-96fca0d8","path":"/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/3_3transformers/tutorial/fineTune.html","title":"fineTune","lang":"zh-CN","frontmatter":{"description":"fineTune 获取数据 ## 获得数据 from datasets import load_dataset dataset = load_dataset(\\"yelp_review_full\\") dataset[\\"train\\"][100] {'label': 0, 'text': 'My expectations for McDonalds are t rarely high. ...'} ## tokenize from transformers import AutoTokenizer tokenizer = AutoTokenizer.from_pretrained(\\"bert-base-cased\\") def tokenize_function(examples): return tokenizer(examples[\\"text\\"], padding=\\"max_length\\", truncation=True) tokenized_datasets = dataset.map(tokenize_function, batched=True) # 遍历每一条数据","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/3_3transformers/tutorial/fineTune.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"fineTune"}],["meta",{"property":"og:description","content":"fineTune 获取数据 ## 获得数据 from datasets import load_dataset dataset = load_dataset(\\"yelp_review_full\\") dataset[\\"train\\"][100] {'label': 0, 'text': 'My expectations for McDonalds are t rarely high. ...'} ## tokenize from transformers import AutoTokenizer tokenizer = AutoTokenizer.from_pretrained(\\"bert-base-cased\\") def tokenize_function(examples): return tokenizer(examples[\\"text\\"], padding=\\"max_length\\", truncation=True) tokenized_datasets = dataset.map(tokenize_function, batched=True) # 遍历每一条数据"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-18T14:02:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-18T14:02:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"fineTune\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-18T14:02:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"获取数据","slug":"获取数据","link":"#获取数据","children":[]},{"level":2,"title":"trainer进行训练","slug":"trainer进行训练","link":"#trainer进行训练","children":[]},{"level":2,"title":"pytorch进行训练","slug":"pytorch进行训练","link":"#pytorch进行训练","children":[]}],"git":{"createdTime":1739887321000,"updatedTime":1739887321000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.21,"words":362},"filePathRelative":"机器学习/3_3transformers/tutorial/fineTune.md","localizedDate":"2025年2月18日","excerpt":"<h1> fineTune</h1>\\n<h2> 获取数据</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token comment\\">## 获得数据</span>\\n<span class=\\"token keyword\\">from</span> datasets <span class=\\"token keyword\\">import</span> load_dataset\\ndataset <span class=\\"token operator\\">=</span> load_dataset<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"yelp_review_full\\"</span><span class=\\"token punctuation\\">)</span>\\ndataset<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"train\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">100</span><span class=\\"token punctuation\\">]</span>\\n<span class=\\"token punctuation\\">{</span><span class=\\"token string\\">'label'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span>\\n <span class=\\"token string\\">'text'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'My expectations for McDonalds are t rarely high. ...'</span><span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">## tokenize</span>\\n<span class=\\"token keyword\\">from</span> transformers <span class=\\"token keyword\\">import</span> AutoTokenizer\\ntokenizer <span class=\\"token operator\\">=</span> AutoTokenizer<span class=\\"token punctuation\\">.</span>from_pretrained<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"bert-base-cased\\"</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">tokenize_function</span><span class=\\"token punctuation\\">(</span>examples<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">return</span> tokenizer<span class=\\"token punctuation\\">(</span>examples<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"text\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> padding<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"max_length\\"</span><span class=\\"token punctuation\\">,</span> truncation<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">)</span>\\ntokenized_datasets <span class=\\"token operator\\">=</span> dataset<span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">map</span><span class=\\"token punctuation\\">(</span>tokenize_function<span class=\\"token punctuation\\">,</span> batched<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 遍历每一条数据</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
