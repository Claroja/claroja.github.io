const s=JSON.parse('{"key":"v-604f35b2","path":"/2%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/3python/7%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/%E7%BB%A7%E6%89%BF/mro.html","title":"mro","lang":"zh-CN","frontmatter":{"description":"mro MRO (Method Resolution order)，主要用来解决继承中歧义的消除 1.在python2.2之前，菱形继承的顺序是：left-to-right，depth-first class A: ^ ^ def save(self): ... / \\\\ / \\\\ / \\\\ / \\\\ class B class C: ^ ^ def save(self): ... \\\\ / \\\\ / \\\\ / \\\\ / class D","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/3python/7%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/%E7%BB%A7%E6%89%BF/mro.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"mro"}],["meta",{"property":"og:description","content":"mro MRO (Method Resolution order)，主要用来解决继承中歧义的消除 1.在python2.2之前，菱形继承的顺序是：left-to-right，depth-first class A: ^ ^ def save(self): ... / \\\\ / \\\\ / \\\\ / \\\\ class B class C: ^ ^ def save(self): ... \\\\ / \\\\ / \\\\ / \\\\ / class D"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mro\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":3.48,"words":1043},"filePathRelative":"2编程语言/3python/7面向对象/继承/mro.md","localizedDate":"2025年2月21日","excerpt":"<h1> mro</h1>\\n<p>MRO (Method Resolution order)，主要用来解决继承中歧义的消除</p>\\n<p>1.在python2.2之前，菱形继承的顺序是：left-to-right，depth-first</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>      <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">A</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token operator\\">^</span> <span class=\\"token operator\\">^</span>  <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">save</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span>\\n       <span class=\\"token operator\\">/</span>   \\\\\\n      <span class=\\"token operator\\">/</span>     \\\\\\n     <span class=\\"token operator\\">/</span>       \\\\\\n    <span class=\\"token operator\\">/</span>         \\\\\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">B</span>     <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">C</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token operator\\">^</span>         <span class=\\"token operator\\">^</span>  <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">save</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span>\\n     \\\\       <span class=\\"token operator\\">/</span>\\n      \\\\     <span class=\\"token operator\\">/</span>\\n       \\\\   <span class=\\"token operator\\">/</span>\\n        \\\\ <span class=\\"token operator\\">/</span>\\n      <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">D</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{s as data};
