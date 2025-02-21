const n=JSON.parse(`{"key":"v-001c242a","path":"/3%E6%95%B0%E5%AD%A6/5_1%E7%BB%9F%E8%AE%A1%E5%AD%A6/11%E4%B8%80%E5%85%83%E7%BA%BF%E6%80%A7%E5%9B%9E%E5%BD%92/%E5%8D%8F%E6%96%B9%E5%B7%AE%E4%B8%8E%E7%9B%B8%E4%BC%BC%E5%BA%A6.html","title":"协方差","lang":"zh-CN","frontmatter":{"description":"协方差 如果英语分数越高的人数学分数也越高, 那么英语和数学的分数就成正相关. 相反, 如果英语分数越高的人数学分数越低, 那么英语和数学分数就是负相关. 另外, 英语的分数对数学的分数没有产生线性影响, 那么英语和数学的分数就是不相关. import pandas as pd import numpy as np en_scores = np.array([42,69,56,41,57,48,65,49,65,58]) ma_scores = np.array([65, 80, 63, 63, 76, 60, 81, 66, 78, 82]) index = pd.Index(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],name='学生') scores_df = pd.DataFrame( {'英语':en_scores,'数学':ma_scores}, index=index ) scores_df","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/3%E6%95%B0%E5%AD%A6/5_1%E7%BB%9F%E8%AE%A1%E5%AD%A6/11%E4%B8%80%E5%85%83%E7%BA%BF%E6%80%A7%E5%9B%9E%E5%BD%92/%E5%8D%8F%E6%96%B9%E5%B7%AE%E4%B8%8E%E7%9B%B8%E4%BC%BC%E5%BA%A6.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"协方差"}],["meta",{"property":"og:description","content":"协方差 如果英语分数越高的人数学分数也越高, 那么英语和数学的分数就成正相关. 相反, 如果英语分数越高的人数学分数越低, 那么英语和数学分数就是负相关. 另外, 英语的分数对数学的分数没有产生线性影响, 那么英语和数学的分数就是不相关. import pandas as pd import numpy as np en_scores = np.array([42,69,56,41,57,48,65,49,65,58]) ma_scores = np.array([65, 80, 63, 63, 76, 60, 81, 66, 78, 82]) index = pd.Index(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],name='学生') scores_df = pd.DataFrame( {'英语':en_scores,'数学':ma_scores}, index=index ) scores_df"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"协方差"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"协方差\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"协方差矩阵","slug":"协方差矩阵","link":"#协方差矩阵","children":[]},{"level":2,"title":"皮尔逊相关系数","slug":"皮尔逊相关系数","link":"#皮尔逊相关系数","children":[]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":4.44,"words":1332},"filePathRelative":"3数学/5_1统计学/11一元线性回归/协方差与相似度.md","localizedDate":"2025年2月21日","excerpt":"<h1> 协方差</h1>\\n<p>如果英语分数越高的人数学分数也越高, 那么英语和数学的分数就成正相关. 相反, 如果英语分数越高的人数学分数越低, 那么英语和数学分数就是负相关. 另外, 英语的分数对数学的分数没有产生线性影响, 那么英语和数学的分数就是不相关.</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> pandas <span class=\\"token keyword\\">as</span> pd\\n<span class=\\"token keyword\\">import</span> numpy <span class=\\"token keyword\\">as</span> np\\n\\nen_scores <span class=\\"token operator\\">=</span> np<span class=\\"token punctuation\\">.</span>array<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">42</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">69</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">56</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">41</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">57</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">48</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">65</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">49</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">65</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">58</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\nma_scores <span class=\\"token operator\\">=</span> np<span class=\\"token punctuation\\">.</span>array<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">65</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">80</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">63</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">63</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">76</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">60</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">81</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">66</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">78</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">82</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\nindex <span class=\\"token operator\\">=</span> pd<span class=\\"token punctuation\\">.</span>Index<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'A'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'B'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'C'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'D'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'E'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'F'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'G'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'H'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'I'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'J'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>name<span class=\\"token operator\\">=</span><span class=\\"token string\\">'学生'</span><span class=\\"token punctuation\\">)</span>\\n\\n\\nscores_df <span class=\\"token operator\\">=</span> pd<span class=\\"token punctuation\\">.</span>DataFrame<span class=\\"token punctuation\\">(</span>\\n    <span class=\\"token punctuation\\">{</span><span class=\\"token string\\">'英语'</span><span class=\\"token punctuation\\">:</span>en_scores<span class=\\"token punctuation\\">,</span><span class=\\"token string\\">'数学'</span><span class=\\"token punctuation\\">:</span>ma_scores<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    index<span class=\\"token operator\\">=</span>index\\n<span class=\\"token punctuation\\">)</span>\\nscores_df\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
