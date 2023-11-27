const e=JSON.parse(`{"key":"v-b6959698","path":"/%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80/linux/shell/datatype.html","title":"datatype","lang":"zh-CN","frontmatter":{"description":"datatype 字符串 建议不使用引号的写法shell之所以允许无冒号的字符串存在是应为在command中 的输入也是不需要引号的 比如 ls ~/ name = hello //1.可以解析变量 2.不能出现空格. name = \\"hello\\" //1.可以解析变量 2.可以出现转义的双引号 name = 'hello' //1.变量不会被解析 2.不能出现转义的双引号(\\\\\\"\\\\\\")","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80/linux/shell/datatype.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"datatype"}],["meta",{"property":"og:description","content":"datatype 字符串 建议不使用引号的写法shell之所以允许无冒号的字符串存在是应为在command中 的输入也是不需要引号的 比如 ls ~/ name = hello //1.可以解析变量 2.不能出现空格. name = \\"hello\\" //1.可以解析变量 2.可以出现转义的双引号 name = 'hello' //1.变量不会被解析 2.不能出现转义的双引号(\\\\\\"\\\\\\")"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:17:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:17:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"datatype\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-27T13:17:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"字符串","slug":"字符串","link":"#字符串","children":[]},{"level":2,"title":"没有数字类型","slug":"没有数字类型","link":"#没有数字类型","children":[]},{"level":2,"title":"数组","slug":"数组","link":"#数组","children":[]}],"git":{"createdTime":1701091021000,"updatedTime":1701091021000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.82,"words":247},"filePathRelative":"编程基础/linux/shell/datatype.md","localizedDate":"2023年11月27日","excerpt":"<h1> datatype</h1>\\n<h2> 字符串</h2>\\n<p><strong>建议不使用引号的写法</strong>shell之所以允许无冒号的字符串存在是应为在command中 的输入也是不需要引号的 比如 <code>ls ~/</code></p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>name <span class=\\"token operator\\">=</span> hello  //1.可以解析变量 <span class=\\"token number\\">2</span>.不能出现空格.\\nname <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"hello\\"</span>   //1.可以解析变量 <span class=\\"token number\\">2</span>.可以出现转义的双引号\\nname <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'hello'</span>   //1.变量不会被解析 <span class=\\"token number\\">2</span>.不能出现转义的双引号<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">\\\\</span>\\"<span class=\\"token punctuation\\">\\\\</span>\\"<span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{e as data};
