const n=JSON.parse(`{"key":"v-6bd251e0","path":"/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/3%E7%89%B9%E5%BE%81%E7%BC%96%E7%A0%81/3_1_5%E7%89%B9%E5%BE%81%E7%BC%96%E7%A0%81_Count.html","title":"计数编码(CountEncoder)","lang":"zh-CN","frontmatter":{"description":"计数编码(CountEncoder) 对于给定的分类特征，按照每个类别分组，统计组计数，将每个类别都映射到该类别的样本数。清晰地反映了类别在数据集中的出现次数，缺点是忽略类别的物理意义，比如说两个类别出现频次相当，但是在业务意义上，模型的重要性也许不一样。这个编码可以指示每个类别的“可信度”，例如，机器学习算法可以决定仅考虑其类别计数高于某个阈值的类别所带来的信息 pandas ce.BinaryEncoder(cols=['BloodType']).fit_transform(data) import category_encoders as ce import pandas as pd data = pd.DataFrame({ 'Sex':['F','M','M','F','M',None,'F','M'] }) data.groupby(['Sex']).transform('size') # 0 3.0 # 1 4.0 # 2 4.0 # 3 3.0 # 4 4.0 # 5 NaN # 6 3.0 # 7 4.0 # dtype: float64","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/3%E7%89%B9%E5%BE%81%E7%BC%96%E7%A0%81/3_1_5%E7%89%B9%E5%BE%81%E7%BC%96%E7%A0%81_Count.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"计数编码(CountEncoder)"}],["meta",{"property":"og:description","content":"计数编码(CountEncoder) 对于给定的分类特征，按照每个类别分组，统计组计数，将每个类别都映射到该类别的样本数。清晰地反映了类别在数据集中的出现次数，缺点是忽略类别的物理意义，比如说两个类别出现频次相当，但是在业务意义上，模型的重要性也许不一样。这个编码可以指示每个类别的“可信度”，例如，机器学习算法可以决定仅考虑其类别计数高于某个阈值的类别所带来的信息 pandas ce.BinaryEncoder(cols=['BloodType']).fit_transform(data) import category_encoders as ce import pandas as pd data = pd.DataFrame({ 'Sex':['F','M','M','F','M',None,'F','M'] }) data.groupby(['Sex']).transform('size') # 0 3.0 # 1 4.0 # 2 4.0 # 3 3.0 # 4 4.0 # 5 NaN # 6 3.0 # 7 4.0 # dtype: float64"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"计数编码(CountEncoder)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"pandas","slug":"pandas","link":"#pandas","children":[]},{"level":2,"title":"category_encoders","slug":"category-encoders","link":"#category-encoders","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.87,"words":262},"filePathRelative":"2机器学习/1算法原理/2机器学习流程/3特征编码/3_1_5特征编码_Count.md","localizedDate":"2025年2月24日","excerpt":"<h1> 计数编码(CountEncoder)</h1>\\n<p>对于给定的分类特征，按照每个类别分组，统计组计数，将每个类别都映射到该类别的样本数。清晰地反映了类别在数据集中的出现次数，缺点是忽略类别的物理意义，比如说两个类别出现频次相当，但是在业务意义上，模型的重要性也许不一样。这个编码可以指示每个类别的“可信度”，例如，机器学习算法可以决定仅考虑其类别计数高于某个阈值的类别所带来的信息</p>\\n<h2> pandas</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>ce<span class=\\"token punctuation\\">.</span>BinaryEncoder<span class=\\"token punctuation\\">(</span>cols<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'BloodType'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>fit_transform<span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">)</span>\\n\\n\\n<span class=\\"token keyword\\">import</span> category_encoders <span class=\\"token keyword\\">as</span> ce\\n<span class=\\"token keyword\\">import</span> pandas <span class=\\"token keyword\\">as</span> pd\\ndata <span class=\\"token operator\\">=</span> pd<span class=\\"token punctuation\\">.</span>DataFrame<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token string\\">'Sex'</span><span class=\\"token punctuation\\">:</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'F'</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">'M'</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">'M'</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">'F'</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">'M'</span><span class=\\"token punctuation\\">,</span><span class=\\"token boolean\\">None</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">'F'</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">'M'</span><span class=\\"token punctuation\\">]</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n\\n\\ndata<span class=\\"token punctuation\\">.</span>groupby<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'Sex'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>transform<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'size'</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\"># 0    3.0</span>\\n<span class=\\"token comment\\"># 1    4.0</span>\\n<span class=\\"token comment\\"># 2    4.0</span>\\n<span class=\\"token comment\\"># 3    3.0</span>\\n<span class=\\"token comment\\"># 4    4.0</span>\\n<span class=\\"token comment\\"># 5    NaN</span>\\n<span class=\\"token comment\\"># 6    3.0</span>\\n<span class=\\"token comment\\"># 7    4.0</span>\\n<span class=\\"token comment\\"># dtype: float64</span>\\n\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
