const n=JSON.parse('{"key":"v-799351b0","path":"/%E6%95%B0%E5%AD%A6/%E7%BB%9F%E8%AE%A1%E5%AD%A6/%E6%8E%A8%E6%96%AD%E6%80%A7%E7%BB%9F%E8%AE%A1-%E4%BC%B0%E8%AE%A1-%E5%81%87%E8%AE%BE%E6%A3%80%E9%AA%8C-%E5%8F%8C%E6%A0%B7%E6%9C%AC%E6%A3%80%E9%AA%8C/%E5%A8%81%E5%B0%94%E7%A7%91%E5%85%8B%E6%A3%AE%E7%AC%A6%E5%8F%B7%E7%A7%A9%E6%A3%80%E9%AA%8C.html","title":"威尔科克森符号秩检验","lang":"zh-CN","frontmatter":{"description":"威尔科克森符号秩检验 威尔科克森符号秩检验 威尔科克森符号秩检验(Wilcoxon signed-rank test)是对配对样本 需要注意的是, 与配对样本的t检验不同, 这里是对中位数之差的检验. 作为具体的例子, 我们使用与配对t检验相同的数据的前6行: import pandas as pd df = pd.DataFrame( { \\"前\\":[59,52,55,61,59,45], \\"后\\":[41,63,68,59,84,37] } )","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E5%AD%A6/%E7%BB%9F%E8%AE%A1%E5%AD%A6/%E6%8E%A8%E6%96%AD%E6%80%A7%E7%BB%9F%E8%AE%A1-%E4%BC%B0%E8%AE%A1-%E5%81%87%E8%AE%BE%E6%A3%80%E9%AA%8C-%E5%8F%8C%E6%A0%B7%E6%9C%AC%E6%A3%80%E9%AA%8C/%E5%A8%81%E5%B0%94%E7%A7%91%E5%85%8B%E6%A3%AE%E7%AC%A6%E5%8F%B7%E7%A7%A9%E6%A3%80%E9%AA%8C.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"威尔科克森符号秩检验"}],["meta",{"property":"og:description","content":"威尔科克森符号秩检验 威尔科克森符号秩检验 威尔科克森符号秩检验(Wilcoxon signed-rank test)是对配对样本 需要注意的是, 与配对样本的t检验不同, 这里是对中位数之差的检验. 作为具体的例子, 我们使用与配对t检验相同的数据的前6行: import pandas as pd df = pd.DataFrame( { \\"前\\":[59,52,55,61,59,45], \\"后\\":[41,63,68,59,84,37] } )"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:17:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:17:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"威尔科克森符号秩检验\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-27T13:17:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":3,"title":"威尔科克森符号秩检验","slug":"威尔科克森符号秩检验-1","link":"#威尔科克森符号秩检验-1","children":[]}],"git":{"createdTime":1701091021000,"updatedTime":1701091021000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":4.63,"words":1388},"filePathRelative":"数学/统计学/推断性统计-估计-假设检验-双样本检验/威尔科克森符号秩检验.md","localizedDate":"2023年11月27日","excerpt":"<h1> 威尔科克森符号秩检验</h1>\\n<h3> 威尔科克森符号秩检验</h3>\\n<p><strong>威尔科克森符号秩检验</strong>(Wilcoxon signed-rank test)是对配对样本 需要注意的是, 与配对样本的t检验不同, 这里是对中位数之差的检验.\\n作为具体的例子, 我们使用与配对t检验相同的数据的前6行:</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> pandas <span class=\\"token keyword\\">as</span> pd\\ndf <span class=\\"token operator\\">=</span> pd<span class=\\"token punctuation\\">.</span>DataFrame<span class=\\"token punctuation\\">(</span>\\n    <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token string\\">\\"前\\"</span><span class=\\"token punctuation\\">:</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">59</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">52</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">55</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">61</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">59</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">45</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token string\\">\\"后\\"</span><span class=\\"token punctuation\\">:</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">41</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">63</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">68</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">59</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">84</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">37</span><span class=\\"token punctuation\\">]</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
