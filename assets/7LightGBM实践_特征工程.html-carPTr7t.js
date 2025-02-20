const a=JSON.parse(`{"key":"v-123c1b32","path":"/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/2_1%E6%A0%91%E6%A8%A1%E5%9E%8B/7LightGBM%E5%AE%9E%E8%B7%B5_%E7%89%B9%E5%BE%81%E5%B7%A5%E7%A8%8B.html","title":"","lang":"zh-CN","frontmatter":{"description":"缺失值 将缺失值当成一个类别处理 所以: scikitlearn决策树模型, 可以接收缺失值做输入, 按照以上方法进行处理 但是处理方法过于简单, 建议在特征工程时进行缺失值的填充 参考还有人不懂XGBoost的缺失值处理 特征编码 分类数据 需要将分类数据进行labelencode, 既将字符串, 转换为数字, 0, 1, 2 需要告诉模型哪些特征当成类别特征处理, 在调用fit方法时: 通过指定feature_name和categorical_feature来确定 在pandas进行数据处理时, 指定分类变量列的类型为category. 建议使用pandas处理, 因为: 可以和lable编码一起进行, 代码较为简洁 data_all['Sex'] = data_all['Sex'].map({'male':0,'female':1}).astype('category') 不要使用one-hot编码 树模型不区分分类变量和排序变量 排序数据 树模型不区分分类变量和排序变量 数值数据 不需要处理","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/2_1%E6%A0%91%E6%A8%A1%E5%9E%8B/7LightGBM%E5%AE%9E%E8%B7%B5_%E7%89%B9%E5%BE%81%E5%B7%A5%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:description","content":"缺失值 将缺失值当成一个类别处理 所以: scikitlearn决策树模型, 可以接收缺失值做输入, 按照以上方法进行处理 但是处理方法过于简单, 建议在特征工程时进行缺失值的填充 参考还有人不懂XGBoost的缺失值处理 特征编码 分类数据 需要将分类数据进行labelencode, 既将字符串, 转换为数字, 0, 1, 2 需要告诉模型哪些特征当成类别特征处理, 在调用fit方法时: 通过指定feature_name和categorical_feature来确定 在pandas进行数据处理时, 指定分类变量列的类型为category. 建议使用pandas处理, 因为: 可以和lable编码一起进行, 代码较为简洁 data_all['Sex'] = data_all['Sex'].map({'male':0,'female':1}).astype('category') 不要使用one-hot编码 树模型不区分分类变量和排序变量 排序数据 树模型不区分分类变量和排序变量 数值数据 不需要处理"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-18T14:02:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-18T14:02:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-18T14:02:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"缺失值","slug":"缺失值","link":"#缺失值","children":[]},{"level":2,"title":"特征编码","slug":"特征编码","link":"#特征编码","children":[]},{"level":2,"title":"归一化","slug":"归一化","link":"#归一化","children":[]}],"git":{"createdTime":1739887321000,"updatedTime":1739887321000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.95,"words":285},"filePathRelative":"机器学习/2_1树模型/7LightGBM实践_特征工程.md","localizedDate":"2025年2月18日","excerpt":"<h2> 缺失值</h2>\\n<p>将缺失值当成一个类别处理</p>\\n<p>所以:</p>\\n<ol>\\n<li>scikitlearn决策树模型, 可以接收缺失值做输入, 按照以上方法进行处理</li>\\n<li>但是处理方法过于简单, 建议在特征工程时进行缺失值的填充</li>\\n</ol>\\n<p>参考<a href=\\"https://zhuanlan.zhihu.com/p/382253128\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">还有人不懂XGBoost的缺失值处理</a></p>\\n<h2> 特征编码</h2>\\n<ol>\\n<li>\\n<p>分类数据</p>\\n<ol>\\n<li>\\n<p>需要将分类数据进行labelencode, 既将字符串, 转换为数字, 0, 1, 2</p>\\n</li>\\n<li>\\n<p>需要告诉模型哪些特征当成类别特征处理, 在调用fit方法时:</p>\\n<ol>\\n<li>通过指定feature_name和categorical_feature来确定</li>\\n<li>在pandas进行数据处理时, 指定分类变量列的类型为category.</li>\\n</ol>\\n<p>建议使用pandas处理, 因为: 可以和lable编码一起进行, 代码较为简洁</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>data_all<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'Sex'</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> data_all<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'Sex'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">map</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span><span class=\\"token string\\">'male'</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">'female'</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>astype<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'category'</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>不要使用one-hot编码</p>\\n</li>\\n<li>\\n<p>树模型不区分分类变量和排序变量</p>\\n</li>\\n</ol>\\n</li>\\n<li>\\n<p>排序数据</p>\\n<p>树模型不区分分类变量和排序变量</p>\\n</li>\\n<li>\\n<p>数值数据</p>\\n<p>不需要处理</p>\\n</li>\\n</ol>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{a as data};
