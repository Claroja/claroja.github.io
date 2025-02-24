const n=JSON.parse('{"key":"v-e3774d46","path":"/4%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/3python/6%E6%96%B9%E6%B3%95(function)/global.html","title":"global","lang":"zh-CN","frontmatter":{"description":"global 当在函数内部使用变量时，会首先在函数内部查找局部变量，如果找不到再去全局查找 number=1 #全局变量 def testGlobal(): number=2 #局部变量 return number num=testGlobal() print(f\\"局部number:{num}\\") # 2 print(f\\"全局number:{number}\\") # 1","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/4%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/3python/6%E6%96%B9%E6%B3%95(function)/global.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"global"}],["meta",{"property":"og:description","content":"global 当在函数内部使用变量时，会首先在函数内部查找局部变量，如果找不到再去全局查找 number=1 #全局变量 def testGlobal(): number=2 #局部变量 return number num=testGlobal() print(f\\"局部number:{num}\\") # 2 print(f\\"全局number:{number}\\") # 1"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"global\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.61,"words":183},"filePathRelative":"4编程语言/3python/6方法(function)/global.md","localizedDate":"2025年2月24日","excerpt":"<h1> global</h1>\\n<p>当在函数内部使用变量时，会首先在函数内部查找局部变量，如果找不到再去全局查找</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>number<span class=\\"token operator\\">=</span><span class=\\"token number\\">1</span> <span class=\\"token comment\\">#全局变量</span>\\n\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">testGlobal</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n     number<span class=\\"token operator\\">=</span><span class=\\"token number\\">2</span> <span class=\\"token comment\\">#局部变量</span>\\n     <span class=\\"token keyword\\">return</span> number\\n\\nnum<span class=\\"token operator\\">=</span>testGlobal<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string-interpolation\\"><span class=\\"token string\\">f\\"局部number:</span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span>num<span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">\\"</span></span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 2</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string-interpolation\\"><span class=\\"token string\\">f\\"全局number:</span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span>number<span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">\\"</span></span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\"># 1</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
