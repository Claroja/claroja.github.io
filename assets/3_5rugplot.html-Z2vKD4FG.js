const n=JSON.parse('{"key":"v-0c108355","path":"/%E6%95%B0%E5%AD%A6/%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/seaborn/3_5rugplot.html","title":"","lang":"zh-CN","frontmatter":{"description":"在x轴或y轴绘制刻度线表示边缘分布(marginal distributions). 可以看清每个观测值的位置. 最佳实践 不仅能看到每个类型的数量, 还能看到每个类型, 具体观测值的位置. import seaborn as sns penguins = sns.load_dataset(\\"penguins\\") sns.displot(data=penguins, y=\\"flipper_length_mm\\", rug=True)","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E5%AD%A6/%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/seaborn/3_5rugplot.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:description","content":"在x轴或y轴绘制刻度线表示边缘分布(marginal distributions). 可以看清每个观测值的位置. 最佳实践 不仅能看到每个类型的数量, 还能看到每个类型, 具体观测值的位置. import seaborn as sns penguins = sns.load_dataset(\\"penguins\\") sns.displot(data=penguins, y=\\"flipper_length_mm\\", rug=True)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-18T14:02:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-18T14:02:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-18T14:02:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]},{"level":2,"title":"基础","slug":"基础","link":"#基础","children":[]},{"level":2,"title":"rugplot","slug":"rugplot","link":"#rugplot","children":[]}],"git":{"createdTime":1739887321000,"updatedTime":1739887321000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.62,"words":185},"filePathRelative":"数学/分析工具/seaborn/3_5rugplot.md","localizedDate":"2025年2月18日","excerpt":"<p>在x轴或y轴绘制刻度线表示边缘分布(marginal distributions). 可以看清每个观测值的位置.</p>\\n<h2> 最佳实践</h2>\\n<p>不仅能看到每个类型的数量, 还能看到每个类型, 具体观测值的位置.</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> seaborn <span class=\\"token keyword\\">as</span> sns\\npenguins <span class=\\"token operator\\">=</span> sns<span class=\\"token punctuation\\">.</span>load_dataset<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"penguins\\"</span><span class=\\"token punctuation\\">)</span>\\nsns<span class=\\"token punctuation\\">.</span>displot<span class=\\"token punctuation\\">(</span>data<span class=\\"token operator\\">=</span>penguins<span class=\\"token punctuation\\">,</span> y<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"flipper_length_mm\\"</span><span class=\\"token punctuation\\">,</span> rug<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
