const n=JSON.parse(`{"key":"v-162d4e48","path":"/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1_2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/3_1_1%E7%89%B9%E5%BE%81%E7%BC%96%E7%A0%81_Label.html","title":"顺序编码(LabelEncoder)","lang":"zh-CN","frontmatter":{"description":"顺序编码(LabelEncoder) 对于特征, 有顺序无顺序都是进行LabelEncoder pandas import category_encoders as ce import pandas as pd df = pd.DataFrame({ 'Grade':['High', None,'Medium','Low', 'other'], 'haha':['a','b','c','d', 'e'] }) df['Grade'].map({'Low':0, 'Medium':1, 'High':2}) # 0 2.0 # 1 NaN # 2 1.0 # 3 0.0 # 4 NaN # Name: Grade, dtype: float64","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1_2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/3_1_1%E7%89%B9%E5%BE%81%E7%BC%96%E7%A0%81_Label.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"顺序编码(LabelEncoder)"}],["meta",{"property":"og:description","content":"顺序编码(LabelEncoder) 对于特征, 有顺序无顺序都是进行LabelEncoder pandas import category_encoders as ce import pandas as pd df = pd.DataFrame({ 'Grade':['High', None,'Medium','Low', 'other'], 'haha':['a','b','c','d', 'e'] }) df['Grade'].map({'Low':0, 'Medium':1, 'High':2}) # 0 2.0 # 1 NaN # 2 1.0 # 3 0.0 # 4 NaN # Name: Grade, dtype: float64"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-18T14:02:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-18T14:02:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"顺序编码(LabelEncoder)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-18T14:02:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"pandas","slug":"pandas","link":"#pandas","children":[]},{"level":2,"title":"category_encoders","slug":"category-encoders","link":"#category-encoders","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1739887321000,"updatedTime":1739887321000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.38,"words":415},"filePathRelative":"机器学习/1_2机器学习流程/3_1_1特征编码_Label.md","localizedDate":"2025年2月18日","excerpt":"<h1> 顺序编码(LabelEncoder)</h1>\\n<p>对于特征, 有顺序无顺序都是进行LabelEncoder</p>\\n<h2> pandas</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> category_encoders <span class=\\"token keyword\\">as</span> ce\\n<span class=\\"token keyword\\">import</span> pandas <span class=\\"token keyword\\">as</span> pd\\ndf <span class=\\"token operator\\">=</span> pd<span class=\\"token punctuation\\">.</span>DataFrame<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token string\\">'Grade'</span><span class=\\"token punctuation\\">:</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'High'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token boolean\\">None</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">'Medium'</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">'Low'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'other'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'haha'</span><span class=\\"token punctuation\\">:</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'a'</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">'b'</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">'c'</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">'d'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'e'</span><span class=\\"token punctuation\\">]</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n\\ndf<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'Grade'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">map</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span><span class=\\"token string\\">'Low'</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'Medium'</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'High'</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\"># 0    2.0</span>\\n<span class=\\"token comment\\"># 1    NaN</span>\\n<span class=\\"token comment\\"># 2    1.0</span>\\n<span class=\\"token comment\\"># 3    0.0</span>\\n<span class=\\"token comment\\"># 4    NaN</span>\\n<span class=\\"token comment\\"># Name: Grade, dtype: float64</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
