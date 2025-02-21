const n=JSON.parse(`{"key":"v-7d28e411","path":"/2%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/3python/4%E9%9B%86%E5%90%88%E7%B1%BB%E5%9E%8B(container)/dict.html","title":"dict","lang":"zh-CN","frontmatter":{"description":"dict 构造方法 a = dict(one=1, two=2, three=3) # **kwargs创建 b = {'one': 1, 'two': 2, 'three': 3} # {}创建 c = dict({'three': 3, 'one': 1, 'two': 2}) # {}创建 d = dict(zip(['one', 'two', 'three'], [1, 2, 3])) # 列表:列表创建 e = dict([('two', 2), ('one', 1), ('three', 3)]) # 列表[元组()]创建 a == b == c == d == e # True","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/3python/4%E9%9B%86%E5%90%88%E7%B1%BB%E5%9E%8B(container)/dict.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"dict"}],["meta",{"property":"og:description","content":"dict 构造方法 a = dict(one=1, two=2, three=3) # **kwargs创建 b = {'one': 1, 'two': 2, 'three': 3} # {}创建 c = dict({'three': 3, 'one': 1, 'two': 2}) # {}创建 d = dict(zip(['one', 'two', 'three'], [1, 2, 3])) # 列表:列表创建 e = dict([('two', 2), ('one', 1), ('three', 3)]) # 列表[元组()]创建 a == b == c == d == e # True"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"dict\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"构造方法","slug":"构造方法","link":"#构造方法","children":[]},{"level":2,"title":"对象方法","slug":"对象方法","link":"#对象方法","children":[]},{"level":2,"title":"常用操作","slug":"常用操作","link":"#常用操作","children":[]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":2.16,"words":649},"filePathRelative":"2编程语言/3python/4集合类型(container)/dict.md","localizedDate":"2025年2月21日","excerpt":"<h1> dict</h1>\\n<h2> 构造方法</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>a <span class=\\"token operator\\">=</span> <span class=\\"token builtin\\">dict</span><span class=\\"token punctuation\\">(</span>one<span class=\\"token operator\\">=</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> two<span class=\\"token operator\\">=</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> three<span class=\\"token operator\\">=</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># **kwargs创建</span>\\nb <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token string\\">'one'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'two'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'three'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">}</span>  <span class=\\"token comment\\"># {}创建</span>\\nc <span class=\\"token operator\\">=</span> <span class=\\"token builtin\\">dict</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span><span class=\\"token string\\">'three'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'one'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'two'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># {}创建</span>\\nd <span class=\\"token operator\\">=</span> <span class=\\"token builtin\\">dict</span><span class=\\"token punctuation\\">(</span><span class=\\"token builtin\\">zip</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'one'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'two'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'three'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 列表:列表创建</span>\\ne <span class=\\"token operator\\">=</span> <span class=\\"token builtin\\">dict</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'two'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'one'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'three'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 列表[元组()]创建</span>\\na <span class=\\"token operator\\">==</span> b <span class=\\"token operator\\">==</span> c <span class=\\"token operator\\">==</span> d <span class=\\"token operator\\">==</span> e  <span class=\\"token comment\\"># True</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
