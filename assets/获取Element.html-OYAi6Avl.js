const n=JSON.parse(`{"key":"v-676bbc50","path":"/%E5%89%8D%E7%AB%AF/DOM/%E5%9F%BA%E7%A1%80/%E8%8E%B7%E5%8F%96Element.html","title":"获取Element","lang":"zh-CN","frontmatter":{"description":"获取Element 元素选择器(建议) 通过样式选择器来获取document.querySelector或document.querySelectorAll. // 1. querySelector 返回指定选择器的第一个元素对象 切记 里面的选择器需要加符号 .box #nav var firstBox = document.querySelector('.box'); console.log(firstBox); var nav = document.querySelector('#nav'); console.log(nav); var li = document.querySelector('li'); console.log(li); // 2. querySelectorAll()返回指定选择器的所有元素对象集合 var allBox = document.querySelectorAll('.box'); console.log(allBox); var lis = document.querySelectorAll('li'); console.log(lis);","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E5%89%8D%E7%AB%AF/DOM/%E5%9F%BA%E7%A1%80/%E8%8E%B7%E5%8F%96Element.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"获取Element"}],["meta",{"property":"og:description","content":"获取Element 元素选择器(建议) 通过样式选择器来获取document.querySelector或document.querySelectorAll. // 1. querySelector 返回指定选择器的第一个元素对象 切记 里面的选择器需要加符号 .box #nav var firstBox = document.querySelector('.box'); console.log(firstBox); var nav = document.querySelector('#nav'); console.log(nav); var li = document.querySelector('li'); console.log(li); // 2. querySelectorAll()返回指定选择器的所有元素对象集合 var allBox = document.querySelectorAll('.box'); console.log(allBox); var lis = document.querySelectorAll('li'); console.log(lis);"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-07T05:43:48.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2024-01-07T05:43:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"获取Element\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-07T05:43:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"元素选择器(建议)","slug":"元素选择器-建议","link":"#元素选择器-建议","children":[]},{"level":2,"title":"DOM树结构获取","slug":"dom树结构获取","link":"#dom树结构获取","children":[{"level":3,"title":"父节点","slug":"父节点","link":"#父节点","children":[]},{"level":3,"title":"子节点","slug":"子节点","link":"#子节点","children":[]},{"level":3,"title":"兄弟节点","slug":"兄弟节点","link":"#兄弟节点","children":[]}]},{"level":2,"title":"document方法获取","slug":"document方法获取","link":"#document方法获取","children":[]}],"git":{"createdTime":1701091021000,"updatedTime":1704606228000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":2}]},"readingTime":{"minutes":2.51,"words":753},"filePathRelative":"前端/DOM/基础/获取Element.md","localizedDate":"2023年11月27日","excerpt":"<h1> 获取Element</h1>\\n<h2> 元素选择器(建议)</h2>\\n<p>通过样式选择器来获取<code>document.querySelector</code>或<code>document.querySelectorAll</code>.</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// 1. querySelector 返回指定选择器的第一个元素对象  切记 里面的选择器需要加符号 .box  #nav</span>\\n<span class=\\"token keyword\\">var</span> firstBox <span class=\\"token operator\\">=</span> document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">querySelector</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'.box'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>firstBox<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">var</span> nav <span class=\\"token operator\\">=</span> document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">querySelector</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'#nav'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>nav<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">var</span> li <span class=\\"token operator\\">=</span> document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">querySelector</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'li'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>li<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// 2. querySelectorAll()返回指定选择器的所有元素对象集合</span>\\n<span class=\\"token keyword\\">var</span> allBox <span class=\\"token operator\\">=</span> document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">querySelectorAll</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'.box'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>allBox<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">var</span> lis <span class=\\"token operator\\">=</span> document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">querySelectorAll</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'li'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>lis<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
