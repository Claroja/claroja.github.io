const n=JSON.parse(`{"key":"v-235bfa06","path":"/%E6%95%B0%E5%AD%A6/%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/echarts/%E6%98%A0%E5%B0%84%E7%BC%96%E7%A0%81(encode).html","title":"映射编码(encode)","lang":"zh-CN","frontmatter":{"description":"映射编码(encode) option = { dataset:{ //原始数据 source: { '汉字日期': ['一', '二', '三', '四', '五', '六', '日'], '数字日期': ['1', '2', '3', '4', '5', '6', '0'], '苹果': [100, 100, 100, 100, 100, 100, 100, ], '香蕉': [50, 100, 150, 200, 250, 300, 350, ] } }, xAxis: { //显示X轴 type: 'category', }, yAxis: { //显示Y轴 }, series: [ //映射数据, 可以有多个序列, 每个序列可指定dataset中的数据 { //第一个序列 type: 'bar', // 图形的类型 encode: { // 坐标轴的映射 x: '数字日期', //映射到X轴的数据, 可以不填, 默认使用dataset.source中第一行的数据 y: '香蕉' //映射到Y轴的数据 } }, ] };","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E5%AD%A6/%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/echarts/%E6%98%A0%E5%B0%84%E7%BC%96%E7%A0%81(encode).html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"映射编码(encode)"}],["meta",{"property":"og:description","content":"映射编码(encode) option = { dataset:{ //原始数据 source: { '汉字日期': ['一', '二', '三', '四', '五', '六', '日'], '数字日期': ['1', '2', '3', '4', '5', '6', '0'], '苹果': [100, 100, 100, 100, 100, 100, 100, ], '香蕉': [50, 100, 150, 200, 250, 300, 350, ] } }, xAxis: { //显示X轴 type: 'category', }, yAxis: { //显示Y轴 }, series: [ //映射数据, 可以有多个序列, 每个序列可指定dataset中的数据 { //第一个序列 type: 'bar', // 图形的类型 encode: { // 坐标轴的映射 x: '数字日期', //映射到X轴的数据, 可以不填, 默认使用dataset.source中第一行的数据 y: '香蕉' //映射到Y轴的数据 } }, ] };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-19T13:16:34.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-19T13:16:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"映射编码(encode)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-19T13:16:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1739970994000,"updatedTime":1739970994000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.54,"words":162},"filePathRelative":"数学/分析工具/echarts/映射编码(encode).md","localizedDate":"2025年2月19日","excerpt":"<h1> 映射编码(encode)</h1>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code>option <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token literal-property property\\">dataset</span><span class=\\"token operator\\">:</span><span class=\\"token punctuation\\">{</span>  <span class=\\"token comment\\">//原始数据</span>\\n    <span class=\\"token literal-property property\\">source</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token string-property property\\">'汉字日期'</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'一'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'二'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'三'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'四'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'五'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'六'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'日'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token string-property property\\">'数字日期'</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'1'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'2'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'3'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'4'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'5'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'6'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'0'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token string-property property\\">'苹果'</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">100</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">100</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">100</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">100</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">100</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">100</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">100</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token string-property property\\">'香蕉'</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">50</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">100</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">150</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">200</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">250</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">300</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">350</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">]</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">xAxis</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>  <span class=\\"token comment\\">//显示X轴</span>\\n    <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'category'</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">yAxis</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>  <span class=\\"token comment\\">//显示Y轴</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">series</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span>  <span class=\\"token comment\\">//映射数据, 可以有多个序列, 每个序列可指定dataset中的数据</span>\\n    <span class=\\"token punctuation\\">{</span>  <span class=\\"token comment\\">//第一个序列</span>\\n      <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'bar'</span><span class=\\"token punctuation\\">,</span>  <span class=\\"token comment\\">// 图形的类型</span>\\n      <span class=\\"token literal-property property\\">encode</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>  <span class=\\"token comment\\">// 坐标轴的映射</span>\\n        <span class=\\"token literal-property property\\">x</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'数字日期'</span><span class=\\"token punctuation\\">,</span>  <span class=\\"token comment\\">//映射到X轴的数据, 可以不填, 默认使用dataset.source中第一行的数据</span>\\n        <span class=\\"token literal-property property\\">y</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'香蕉'</span>  <span class=\\"token comment\\">//映射到Y轴的数据</span>\\n      <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">]</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
