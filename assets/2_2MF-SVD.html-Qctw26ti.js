const t=JSON.parse('{"key":"v-34b0cede","path":"/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/4_2%E6%8E%A8%E8%8D%90%E7%B3%BB%E7%BB%9F/2_2MF-SVD.html","title":"基于模型的方法","lang":"zh-CN","frontmatter":{"description":"基于模型的方法 矩阵分解算法简介 矩阵分解算法就是把原来的user-item评分表拆分成用户表示矩阵与item表示矩阵的乘积，其中k可以理解成为表示的维度。通过种种方法得到两个表示矩阵之后，两个矩阵相乘所得到的特定位置的数值就是用户的期望评分。 alt text 直观一点，以电影推荐为例，这k个维度可以分别是喜剧、动作、悬疑等，每个维度的数值代表用户对这个类别的喜欢程度或者电影与这个类别的接近程度。 不过在具体的学习中就是学习到一个抽象的embedding表示。每个k的含义并不清楚，此时又被叫做隐因子、隐变量等。我想这一点对于学习机器学习的应该都不陌生了，就不过多掰扯了。","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/4_2%E6%8E%A8%E8%8D%90%E7%B3%BB%E7%BB%9F/2_2MF-SVD.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"基于模型的方法"}],["meta",{"property":"og:description","content":"基于模型的方法 矩阵分解算法简介 矩阵分解算法就是把原来的user-item评分表拆分成用户表示矩阵与item表示矩阵的乘积，其中k可以理解成为表示的维度。通过种种方法得到两个表示矩阵之后，两个矩阵相乘所得到的特定位置的数值就是用户的期望评分。 alt text 直观一点，以电影推荐为例，这k个维度可以分别是喜剧、动作、悬疑等，每个维度的数值代表用户对这个类别的喜欢程度或者电影与这个类别的接近程度。 不过在具体的学习中就是学习到一个抽象的embedding表示。每个k的含义并不清楚，此时又被叫做隐因子、隐变量等。我想这一点对于学习机器学习的应该都不陌生了，就不过多掰扯了。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-18T14:02:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-18T14:02:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基于模型的方法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-18T14:02:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"矩阵分解算法简介","slug":"矩阵分解算法简介","link":"#矩阵分解算法简介","children":[]},{"level":2,"title":"奇异值分解SVD","slug":"奇异值分解svd","link":"#奇异值分解svd","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1739887321000,"updatedTime":1739887321000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.88,"words":263},"filePathRelative":"机器学习/4_2推荐系统/2_2MF-SVD.md","localizedDate":"2025年2月18日","excerpt":"<h1> 基于模型的方法</h1>\\n<h2> 矩阵分解算法简介</h2>\\n<p>矩阵分解算法就是把原来的user-item评分表拆分成用户表示矩阵与item表示矩阵的乘积，其中k可以理解成为表示的维度。通过种种方法得到两个表示矩阵之后，两个矩阵相乘所得到的特定位置的数值就是用户的期望评分。</p>\\n<figure><figcaption>alt text</figcaption></figure>\\n<p>直观一点，以电影推荐为例，这k个维度可以分别是喜剧、动作、悬疑等，每个维度的数值代表用户对这个类别的喜欢程度或者电影与这个类别的接近程度。</p>\\n<p>不过在具体的学习中就是学习到一个抽象的embedding表示。每个k的含义并不清楚，此时又被叫做隐因子、隐变量等。我想这一点对于学习机器学习的应该都不陌生了，就不过多掰扯了。</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{t as data};
