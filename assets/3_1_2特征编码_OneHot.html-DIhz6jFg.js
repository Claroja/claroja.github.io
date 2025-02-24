const n=JSON.parse(`{"key":"v-3c9ffa09","path":"/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/3%E7%89%B9%E5%BE%81%E7%BC%96%E7%A0%81/3_1_2%E7%89%B9%E5%BE%81%E7%BC%96%E7%A0%81_OneHot.html","title":"独热编码(OneHotEncoder)","lang":"zh-CN","frontmatter":{"description":"独热编码(OneHotEncoder) 处理类别间不具有大小关系的特征。例如血型，一共4个值，独热编码将其变成4维的稀疏向量。独热编码的特征向量只有一维取值为1，其余为0。 缺点是它处理不好类别取值多的特征，类别数越大会带来过很多列的稀疏特征。对于类别取值较多的情况要注意通过特征选择降低维度。 pandas import pandas as pd data = pd.DataFrame({ 'BloodType':['A','AB','O','B', None,], }) pd.get_dummies(data, dummy_na=True) # BloodType_A BloodType_AB BloodType_B BloodType_O BloodType_nan # 0 1 0 0 0 0 # 1 0 1 0 0 0 # 2 0 0 0 1 0 # 3 0 0 1 0 0 # 4 0 0 0 0 1","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/3%E7%89%B9%E5%BE%81%E7%BC%96%E7%A0%81/3_1_2%E7%89%B9%E5%BE%81%E7%BC%96%E7%A0%81_OneHot.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"独热编码(OneHotEncoder)"}],["meta",{"property":"og:description","content":"独热编码(OneHotEncoder) 处理类别间不具有大小关系的特征。例如血型，一共4个值，独热编码将其变成4维的稀疏向量。独热编码的特征向量只有一维取值为1，其余为0。 缺点是它处理不好类别取值多的特征，类别数越大会带来过很多列的稀疏特征。对于类别取值较多的情况要注意通过特征选择降低维度。 pandas import pandas as pd data = pd.DataFrame({ 'BloodType':['A','AB','O','B', None,], }) pd.get_dummies(data, dummy_na=True) # BloodType_A BloodType_AB BloodType_B BloodType_O BloodType_nan # 0 1 0 0 0 0 # 1 0 1 0 0 0 # 2 0 0 0 1 0 # 3 0 0 1 0 0 # 4 0 0 0 0 1"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"独热编码(OneHotEncoder)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"pandas","slug":"pandas","link":"#pandas","children":[]},{"level":2,"title":"category_encoders","slug":"category-encoders","link":"#category-encoders","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.05,"words":314},"filePathRelative":"2机器学习/1算法原理/2机器学习流程/3特征编码/3_1_2特征编码_OneHot.md","localizedDate":"2025年2月24日","excerpt":"<h1> 独热编码(OneHotEncoder)</h1>\\n<p>处理类别间不具有大小关系的特征。例如血型，一共4个值，独热编码将其变成4维的稀疏向量。独热编码的特征向量只有一维取值为1，其余为0。</p>\\n<p>缺点是它处理不好类别取值多的特征，类别数越大会带来过很多列的稀疏特征。对于类别取值较多的情况要注意通过特征选择降低维度。</p>\\n<h2> pandas</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> pandas <span class=\\"token keyword\\">as</span> pd\\ndata <span class=\\"token operator\\">=</span> pd<span class=\\"token punctuation\\">.</span>DataFrame<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token string\\">'BloodType'</span><span class=\\"token punctuation\\">:</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'A'</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">'AB'</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">'O'</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">'B'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token boolean\\">None</span><span class=\\"token punctuation\\">,</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n\\npd<span class=\\"token punctuation\\">.</span>get_dummies<span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">,</span> dummy_na<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">#    BloodType_A  BloodType_AB  BloodType_B  BloodType_O  BloodType_nan</span>\\n<span class=\\"token comment\\"># 0            1             0            0            0              0</span>\\n<span class=\\"token comment\\"># 1            0             1            0            0              0</span>\\n<span class=\\"token comment\\"># 2            0             0            0            1              0</span>\\n<span class=\\"token comment\\"># 3            0             0            1            0              0</span>\\n<span class=\\"token comment\\"># 4            0             0            0            0              1</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
