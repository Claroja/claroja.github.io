const n=JSON.parse('{"key":"v-5c80a4b5","path":"/%E6%95%B0%E5%AD%A6/%E7%BB%9F%E8%AE%A1%E5%AD%A6/%E6%8E%A8%E6%96%AD%E6%80%A7%E7%BB%9F%E8%AE%A1-%E4%BC%B0%E8%AE%A1-%E5%81%87%E8%AE%BE%E6%A3%80%E9%AA%8C-%E5%8F%8C%E6%A0%B7%E6%9C%AC%E6%A3%80%E9%AA%8C/statistic_%E6%9B%BC%E6%81%A9%E6%83%A0%E7%89%B9%E5%B0%BCU%E6%A3%80%E9%AA%8C.html","title":"曼恩惠特尼U检验","lang":"zh-CN","frontmatter":{"description":"曼恩惠特尼U检验 曼恩惠特尼U检验 曼恩惠特尼U检验(Mann-Whitney rank test)是在没有配对数据,, 简称U检验, 也称曼恩惠特尼秩和检验. 考虑与独立样本的t检验相同的情况, 使用前5行: import pandas as pd df = pd.DataFrame( { \\"A\\":[47,50,37,60,39], \\"B\\":[49,52,54,48,51] } )","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E5%AD%A6/%E7%BB%9F%E8%AE%A1%E5%AD%A6/%E6%8E%A8%E6%96%AD%E6%80%A7%E7%BB%9F%E8%AE%A1-%E4%BC%B0%E8%AE%A1-%E5%81%87%E8%AE%BE%E6%A3%80%E9%AA%8C-%E5%8F%8C%E6%A0%B7%E6%9C%AC%E6%A3%80%E9%AA%8C/statistic_%E6%9B%BC%E6%81%A9%E6%83%A0%E7%89%B9%E5%B0%BCU%E6%A3%80%E9%AA%8C.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"曼恩惠特尼U检验"}],["meta",{"property":"og:description","content":"曼恩惠特尼U检验 曼恩惠特尼U检验 曼恩惠特尼U检验(Mann-Whitney rank test)是在没有配对数据,, 简称U检验, 也称曼恩惠特尼秩和检验. 考虑与独立样本的t检验相同的情况, 使用前5行: import pandas as pd df = pd.DataFrame( { \\"A\\":[47,50,37,60,39], \\"B\\":[49,52,54,48,51] } )"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"曼恩惠特尼U检验\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":3,"title":"曼恩惠特尼U检验","slug":"曼恩惠特尼u检验-1","link":"#曼恩惠特尼u检验-1","children":[]}],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":2.71,"words":812},"filePathRelative":"数学/统计学/推断性统计-估计-假设检验-双样本检验/statistic_曼恩惠特尼U检验.md","localizedDate":"2023年11月25日","excerpt":"<h1> 曼恩惠特尼U检验</h1>\\n<h3> 曼恩惠特尼U检验</h3>\\n<p><strong>曼恩惠特尼U检验</strong>(Mann-Whitney rank test)是在没有配对数据,, 简称U检验, 也称曼恩惠特尼秩和检验.\\n考虑与独立样本的t检验相同的情况, 使用前5行:</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> pandas <span class=\\"token keyword\\">as</span> pd\\ndf <span class=\\"token operator\\">=</span> pd<span class=\\"token punctuation\\">.</span>DataFrame<span class=\\"token punctuation\\">(</span>\\n    <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token string\\">\\"A\\"</span><span class=\\"token punctuation\\">:</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">47</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">50</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">37</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">60</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">39</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token string\\">\\"B\\"</span><span class=\\"token punctuation\\">:</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">49</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">52</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">54</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">48</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">51</span><span class=\\"token punctuation\\">]</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">)</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
