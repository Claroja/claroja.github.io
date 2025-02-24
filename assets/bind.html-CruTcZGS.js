const n=JSON.parse('{"key":"v-2f827681","path":"/4%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/5javascript/7%E7%B1%BB%E4%B8%8E%E5%AF%B9%E8%B1%A1(class%E4%B8%8Eobject)/bind.html","title":"bind","lang":"zh-CN","frontmatter":{"description":"bind 绑定对象, this就指向了绑定的新对象 const person = { firstName:\\"John\\", lastName: \\"Doe\\", fullName: function() { console.log(this.firstName + \\" \\" + this.lastName) } } const member = { firstName:\\"Hege\\", lastName: \\"Nilsen\\", } let fullName = person.fullName.bind(member) // 绑定member，这时方法内部的this指向了member，而不是person fullName() //调用方法，结果是Hege Nilsen","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/4%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/5javascript/7%E7%B1%BB%E4%B8%8E%E5%AF%B9%E8%B1%A1(class%E4%B8%8Eobject)/bind.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"bind"}],["meta",{"property":"og:description","content":"bind 绑定对象, this就指向了绑定的新对象 const person = { firstName:\\"John\\", lastName: \\"Doe\\", fullName: function() { console.log(this.firstName + \\" \\" + this.lastName) } } const member = { firstName:\\"Hege\\", lastName: \\"Nilsen\\", } let fullName = person.fullName.bind(member) // 绑定member，这时方法内部的this指向了member，而不是person fullName() //调用方法，结果是Hege Nilsen"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"bind\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"绑定对象, this就指向了绑定的新对象","slug":"绑定对象-this就指向了绑定的新对象","link":"#绑定对象-this就指向了绑定的新对象","children":[]},{"level":2,"title":"绑定原函数参数, 在bind过程中就指定好参数","slug":"绑定原函数参数-在bind过程中就指定好参数","link":"#绑定原函数参数-在bind过程中就指定好参数","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.52,"words":155},"filePathRelative":"4编程语言/5javascript/7类与对象(class与object)/bind.md","localizedDate":"2025年2月24日","excerpt":"<h1> bind</h1>\\n<h2> 绑定对象, this就指向了绑定的新对象</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> person <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token literal-property property\\">firstName</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">\\"John\\"</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">lastName</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"Doe\\"</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token function-variable function\\">fullName</span><span class=\\"token operator\\">:</span> <span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>firstName <span class=\\"token operator\\">+</span> <span class=\\"token string\\">\\" \\"</span> <span class=\\"token operator\\">+</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>lastName<span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">const</span> member <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token literal-property property\\">firstName</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">\\"Hege\\"</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">lastName</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"Nilsen\\"</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">let</span> fullName <span class=\\"token operator\\">=</span> person<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">fullName</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">bind</span><span class=\\"token punctuation\\">(</span>member<span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 绑定member，这时方法内部的this指向了member，而不是person</span>\\n\\n<span class=\\"token function\\">fullName</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\">//调用方法，结果是Hege Nilsen</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
