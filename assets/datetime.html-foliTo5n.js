const e=JSON.parse(`{"key":"v-00d1e706","path":"/8%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/1%E6%95%B0%E6%8D%AE%E5%BA%93/3%E8%A1%A8/datetime.html","title":"datetime","lang":"zh-CN","frontmatter":{"description":"datetime 1.应用 1.如果数据库中时间格式是（2013-01-12 23:23:56—时间精确到秒） select * from product where timestamp(add_time) = '2013-01-12 23:23:56'; select * from product where timestamp(add_time) between '2013-01-12 03:23:56' and '2013-01-12 23:23:56';","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/8%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/1%E6%95%B0%E6%8D%AE%E5%BA%93/3%E8%A1%A8/datetime.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"datetime"}],["meta",{"property":"og:description","content":"datetime 1.应用 1.如果数据库中时间格式是（2013-01-12 23:23:56—时间精确到秒） select * from product where timestamp(add_time) = '2013-01-12 23:23:56'; select * from product where timestamp(add_time) between '2013-01-12 03:23:56' and '2013-01-12 23:23:56';"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"datetime\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1.应用","slug":"_1-应用","link":"#_1-应用","children":[]},{"level":2,"title":"type","slug":"type","link":"#type","children":[]},{"level":2,"title":"function","slug":"function","link":"#function","children":[]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":3.69,"words":1108},"filePathRelative":"8数据工程/1数据库/3表/datetime.md","localizedDate":"2025年2月21日","excerpt":"<h1> datetime</h1>\\n<h2> 1.应用</h2>\\n<p>1.如果数据库中时间格式是（2013-01-12 23:23:56—时间精确到秒）</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">select</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">from</span> product <span class=\\"token keyword\\">where</span> <span class=\\"token keyword\\">timestamp</span><span class=\\"token punctuation\\">(</span>add_time<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'2013-01-12 23:23:56'</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">select</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">from</span> product <span class=\\"token keyword\\">where</span> <span class=\\"token keyword\\">timestamp</span><span class=\\"token punctuation\\">(</span>add_time<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">between</span> <span class=\\"token string\\">'2013-01-12 03:23:56'</span> <span class=\\"token operator\\">and</span> <span class=\\"token string\\">'2013-01-12 23:23:56'</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{e as data};
