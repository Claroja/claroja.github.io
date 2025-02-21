const n=JSON.parse(`{"key":"v-54f0822b","path":"/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/6%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/echarts/%E6%9F%B1%E7%8A%B6%E5%9B%BE%E5%AE%9E%E4%BE%8B.html","title":"单序列","lang":"zh-CN","frontmatter":{"description":"单序列 option = { dataset:{ source: { '汉字日期': ['一', '二', '三', '四', '五', '六', '日'], '香蕉': [50, 100, 150, 200, 250, 300, 350, ] } }, xAxis: { type: 'category', }, yAxis: { }, series: [ { type: 'bar', encode: { x: '汉字日期', y: '香蕉' } }, ], }","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/6%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/echarts/%E6%9F%B1%E7%8A%B6%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"单序列"}],["meta",{"property":"og:description","content":"单序列 option = { dataset:{ source: { '汉字日期': ['一', '二', '三', '四', '五', '六', '日'], '香蕉': [50, 100, 150, 200, 250, 300, 350, ] } }, xAxis: { type: 'category', }, yAxis: { }, series: [ { type: 'bar', encode: { x: '汉字日期', y: '香蕉' } }, ], }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"单序列\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"多序列","slug":"多序列","link":"#多序列","children":[]},{"level":2,"title":"横向展开柱状图","slug":"横向展开柱状图","link":"#横向展开柱状图","children":[{"level":3,"title":"纵向堆叠柱状图","slug":"纵向堆叠柱状图","link":"#纵向堆叠柱状图","children":[]}]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.72,"words":215},"filePathRelative":"4机器学习/6分析工具/echarts/柱状图实例.md","localizedDate":"2025年2月21日","excerpt":"<h1> 单序列</h1>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code>option <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token literal-property property\\">dataset</span><span class=\\"token operator\\">:</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token literal-property property\\">source</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token string-property property\\">'汉字日期'</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'一'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'二'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'三'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'四'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'五'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'六'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'日'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token string-property property\\">'香蕉'</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">50</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">100</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">150</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">200</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">250</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">300</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">350</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">]</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">xAxis</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'category'</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">yAxis</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">series</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span>\\n    <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'bar'</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token literal-property property\\">encode</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token literal-property property\\">x</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'汉字日期'</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token literal-property property\\">y</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'香蕉'</span>\\n      <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
