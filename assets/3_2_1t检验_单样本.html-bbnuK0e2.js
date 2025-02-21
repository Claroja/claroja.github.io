const n=JSON.parse('{"key":"v-9f13501e","path":"/3%E6%95%B0%E5%AD%A6/5_1%E7%BB%9F%E8%AE%A1%E5%AD%A6/8%E5%81%87%E8%AE%BE%E6%A3%80%E9%AA%8C/3_2_1t%E6%A3%80%E9%AA%8C_%E5%8D%95%E6%A0%B7%E6%9C%AC.html","title":"","lang":"zh-CN","frontmatter":{"description":"下面是一个单样本 t 检验的示例代码，用于检验样本均值是否等于某个值。 from scipy.stats import ttest_1samp import numpy as np # 示例数据 data = np.array([99, 101, 100, 98, 102, 100, 101, 99, 98]) # 原假设: 样本均值为 100 t_stat, p_value = ttest_1samp(data, 100) print(\\"t-statistic:\\", t_stat) print(\\"p-value:\\", p_value) if p_value &lt; 0.05: print(\\"拒绝原假设，样本均值显著不等于 100\\") else: print(\\"不能拒绝原假设，样本均值不显著不同于 100\\")","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/3%E6%95%B0%E5%AD%A6/5_1%E7%BB%9F%E8%AE%A1%E5%AD%A6/8%E5%81%87%E8%AE%BE%E6%A3%80%E9%AA%8C/3_2_1t%E6%A3%80%E9%AA%8C_%E5%8D%95%E6%A0%B7%E6%9C%AC.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:description","content":"下面是一个单样本 t 检验的示例代码，用于检验样本均值是否等于某个值。 from scipy.stats import ttest_1samp import numpy as np # 示例数据 data = np.array([99, 101, 100, 98, 102, 100, 101, 99, 98]) # 原假设: 样本均值为 100 t_stat, p_value = ttest_1samp(data, 100) print(\\"t-statistic:\\", t_stat) print(\\"p-value:\\", p_value) if p_value &lt; 0.05: print(\\"拒绝原假设，样本均值显著不等于 100\\") else: print(\\"不能拒绝原假设，样本均值不显著不同于 100\\")"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.39,"words":116},"filePathRelative":"3数学/5_1统计学/8假设检验/3_2_1t检验_单样本.md","localizedDate":"2025年2月21日","excerpt":"<p>下面是一个单样本 t 检验的示例代码，用于检验样本均值是否等于某个值。</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">from</span> scipy<span class=\\"token punctuation\\">.</span>stats <span class=\\"token keyword\\">import</span> ttest_1samp\\n<span class=\\"token keyword\\">import</span> numpy <span class=\\"token keyword\\">as</span> np\\n\\n<span class=\\"token comment\\"># 示例数据</span>\\ndata <span class=\\"token operator\\">=</span> np<span class=\\"token punctuation\\">.</span>array<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">99</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">101</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">100</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">98</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">102</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">100</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">101</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">99</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">98</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\"># 原假设: 样本均值为 100</span>\\nt_stat<span class=\\"token punctuation\\">,</span> p_value <span class=\\"token operator\\">=</span> ttest_1samp<span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">100</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"t-statistic:\\"</span><span class=\\"token punctuation\\">,</span> t_stat<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"p-value:\\"</span><span class=\\"token punctuation\\">,</span> p_value<span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">if</span> p_value <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">0.05</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"拒绝原假设，样本均值显著不等于 100\\"</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"不能拒绝原假设，样本均值不显著不同于 100\\"</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
