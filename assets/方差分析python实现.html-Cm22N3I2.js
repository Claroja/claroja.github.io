const e=JSON.parse('{"key":"v-5e357a71","path":"/%E6%95%B0%E5%AD%A6/%E7%BB%9F%E8%AE%A1%E5%AD%A6/10%E6%96%B9%E5%B7%AE%E5%88%86%E6%9E%90/%E6%96%B9%E5%B7%AE%E5%88%86%E6%9E%90python%E5%AE%9E%E7%8E%B0.html","title":"方差分析","lang":"zh-CN","frontmatter":{"description":"方差分析 响应变量是啤酒的销售额(sales), 解释变量只有天气(weather). 天气分为(cloudy), 雨(rainy), 晴(sunny)3个水平.我们来检验天气变化会不会显著的影响啤酒的销售额. 方差分析 方差分析是用来检验均值差的方法. 在介绍t检验时, 我们研究的问题是服药前后体温是否存在显著性变化, 这时水平为2个的数据. 本节研究的问题是能否认为晴, 雨, 阴着3种天气变化显著影响了啤酒的销售额, 这时水平大于2个的数据. 要使用方差分析, 数据的总体必须服从正态分布, 另外各个水平内部的方差必须相等.","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E5%AD%A6/%E7%BB%9F%E8%AE%A1%E5%AD%A6/10%E6%96%B9%E5%B7%AE%E5%88%86%E6%9E%90/%E6%96%B9%E5%B7%AE%E5%88%86%E6%9E%90python%E5%AE%9E%E7%8E%B0.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"方差分析"}],["meta",{"property":"og:description","content":"方差分析 响应变量是啤酒的销售额(sales), 解释变量只有天气(weather). 天气分为(cloudy), 雨(rainy), 晴(sunny)3个水平.我们来检验天气变化会不会显著的影响啤酒的销售额. 方差分析 方差分析是用来检验均值差的方法. 在介绍t检验时, 我们研究的问题是服药前后体温是否存在显著性变化, 这时水平为2个的数据. 本节研究的问题是能否认为晴, 雨, 阴着3种天气变化显著影响了啤酒的销售额, 这时水平大于2个的数据. 要使用方差分析, 数据的总体必须服从正态分布, 另外各个水平内部的方差必须相等."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-07T05:43:48.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2024-01-07T05:43:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"方差分析\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-07T05:43:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"方差分析","slug":"方差分析-1","link":"#方差分析-1","children":[{"level":3,"title":"多重假设检验","slug":"多重假设检验","link":"#多重假设检验","children":[]},{"level":3,"title":"方差的直观分析","slug":"方差的直观分析","link":"#方差的直观分析","children":[]},{"level":3,"title":"显著性差异与小提琴图","slug":"显著性差异与小提琴图","link":"#显著性差异与小提琴图","children":[]},{"level":3,"title":"反差分析的手动实现","slug":"反差分析的手动实现","link":"#反差分析的手动实现","children":[]},{"level":3,"title":"解释变量为分类变量的正态线性模型","slug":"解释变量为分类变量的正态线性模型","link":"#解释变量为分类变量的正态线性模型","children":[]},{"level":3,"title":"statsmodels中的方差分析","slug":"statsmodels中的方差分析","link":"#statsmodels中的方差分析","children":[]},{"level":3,"title":"使用模型分离效应和误差","slug":"使用模型分离效应和误差","link":"#使用模型分离效应和误差","children":[]},{"level":3,"title":"回归模型中的方差分析","slug":"回归模型中的方差分析","link":"#回归模型中的方差分析","children":[]}]}],"git":{"createdTime":1704606228000,"updatedTime":1704606228000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":9.19,"words":2757},"filePathRelative":"数学/统计学/10方差分析/方差分析python实现.md","localizedDate":"2024年1月7日","excerpt":"<h1> 方差分析</h1>\\n<p>响应变量是啤酒的销售额(sales), 解释变量只有天气(weather). 天气分为(cloudy), 雨(rainy), 晴(sunny)3个水平.我们来检验天气变化会不会显著的影响啤酒的销售额.</p>\\n<h2> 方差分析</h2>\\n<p>方差分析是用来<strong>检验均值差</strong>的方法. </p>\\n<p>在介绍t检验时, 我们研究的问题是服药前后体温是否存在显著性变化, 这时水平为2个的数据. 本节研究的问题是能否认为晴, 雨, 阴着3种天气变化显著影响了啤酒的销售额, 这时水平大于2个的数据.</p>\\n<p>要使用方差分析, 数据的总体必须服从正态分布, 另外各个水平内部的方差必须相等.</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
