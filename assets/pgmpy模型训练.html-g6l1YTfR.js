const n=JSON.parse(`{"key":"v-8b546866","path":"/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/%E8%B4%9D%E5%8F%B6%E6%96%AF/%E8%B4%9D%E5%8F%B6%E6%96%AF%E7%BD%91%E7%BB%9C/pgmpy%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83.html","title":"offset","lang":"zh-CN","frontmatter":{"description":"offset 贝叶斯网络学习 贝叶斯网络的学习可以分为两个部分: 参数学习(Parameter learning):给出数据样本和DAG结构,来估算CPD. 结构学习(Structure learning):给出数据样本, 来估算DAG结构和CPD. 参数学习 构造数据 import pandas as pd data={'fruit': [\\"banana\\", \\"apple\\", \\"banana\\", \\"apple\\", \\"banana\\",\\"apple\\", \\"banana\\", \\"apple\\", \\"apple\\", \\"apple\\", \\"banana\\", \\"banana\\", \\"apple\\", \\"banana\\",], 'tasty': [\\"yes\\", \\"no\\", \\"yes\\", \\"yes\\", \\"yes\\", \\"yes\\", \\"yes\\", \\"yes\\", \\"yes\\", \\"yes\\", \\"yes\\", \\"no\\", \\"no\\", \\"no\\"], 'size': [\\"large\\", \\"large\\", \\"large\\", \\"small\\", \\"large\\", \\"large\\", \\"large\\",\\"small\\", \\"large\\", \\"large\\", \\"large\\", \\"large\\", \\"small\\", \\"small\\"]} data = pd.DataFrame(data) print(data)","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/%E8%B4%9D%E5%8F%B6%E6%96%AF/%E8%B4%9D%E5%8F%B6%E6%96%AF%E7%BD%91%E7%BB%9C/pgmpy%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"offset"}],["meta",{"property":"og:description","content":"offset 贝叶斯网络学习 贝叶斯网络的学习可以分为两个部分: 参数学习(Parameter learning):给出数据样本和DAG结构,来估算CPD. 结构学习(Structure learning):给出数据样本, 来估算DAG结构和CPD. 参数学习 构造数据 import pandas as pd data={'fruit': [\\"banana\\", \\"apple\\", \\"banana\\", \\"apple\\", \\"banana\\",\\"apple\\", \\"banana\\", \\"apple\\", \\"apple\\", \\"apple\\", \\"banana\\", \\"banana\\", \\"apple\\", \\"banana\\",], 'tasty': [\\"yes\\", \\"no\\", \\"yes\\", \\"yes\\", \\"yes\\", \\"yes\\", \\"yes\\", \\"yes\\", \\"yes\\", \\"yes\\", \\"yes\\", \\"no\\", \\"no\\", \\"no\\"], 'size': [\\"large\\", \\"large\\", \\"large\\", \\"small\\", \\"large\\", \\"large\\", \\"large\\",\\"small\\", \\"large\\", \\"large\\", \\"large\\", \\"large\\", \\"small\\", \\"small\\"]} data = pd.DataFrame(data) print(data)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"offset\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"贝叶斯网络学习","slug":"贝叶斯网络学习","link":"#贝叶斯网络学习","children":[{"level":3,"title":"参数学习","slug":"参数学习","link":"#参数学习","children":[]}]},{"level":2,"title":"参数学习","slug":"参数学习-1","link":"#参数学习-1","children":[{"level":3,"title":"1. 获得数据","slug":"_1-获得数据","link":"#_1-获得数据","children":[]},{"level":3,"title":"2. 定义模型结构","slug":"_2-定义模型结构","link":"#_2-定义模型结构","children":[]},{"level":3,"title":"3. 学习参数","slug":"_3-学习参数","link":"#_3-学习参数","children":[]}]},{"level":2,"title":"Structure Learning","slug":"structure-learning","link":"#structure-learning","children":[]}],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":5.7,"words":1710},"filePathRelative":"机器学习/贝叶斯/贝叶斯网络/pgmpy模型训练.md","localizedDate":"2023年11月25日","excerpt":"<h1> offset</h1>\\n<h2> 贝叶斯网络学习</h2>\\n<p>贝叶斯网络的学习可以分为两个部分:\\n参数学习(Parameter learning):给出数据样本和DAG结构,来估算CPD.\\n结构学习(Structure learning):给出数据样本, 来估算DAG结构和CPD.</p>\\n<h3> 参数学习</h3>\\n<h4> 构造数据</h4>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> pandas <span class=\\"token keyword\\">as</span> pd\\ndata<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">{</span><span class=\\"token string\\">'fruit'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"banana\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"apple\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"banana\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"apple\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"banana\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"apple\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"banana\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"apple\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"apple\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"apple\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"banana\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"banana\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"apple\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"banana\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> \\n        <span class=\\"token string\\">'tasty'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"yes\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"no\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"yes\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"yes\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"yes\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"yes\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"yes\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"yes\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"yes\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"yes\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"yes\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"no\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"no\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"no\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> \\n        <span class=\\"token string\\">'size'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"large\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"large\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"large\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"small\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"large\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"large\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"large\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"small\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"large\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"large\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"large\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"large\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"small\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"small\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">}</span>\\ndata <span class=\\"token operator\\">=</span> pd<span class=\\"token punctuation\\">.</span>DataFrame<span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
