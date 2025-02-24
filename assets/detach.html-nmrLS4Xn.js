const n=JSON.parse('{"key":"v-6c320748","path":"/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/3%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/5pytorch/%E5%BC%A0%E9%87%8F/detach.html","title":"detach","lang":"zh-CN","frontmatter":{"description":"detach tensor.detach()可以取到tensor的数据和并且requires_grad=False, 而且二者共享存储空间, 既改变一个, 另外一个也会改变. 当想要将tensor转换为numpy的array时, 需要先detach(), 然后再调用numpy(). import torch a = torch.tensor([1,1,1]) b = a.detach() b[0]=0 print(b) ## tensor([0, 1, 1]) print(a) ## tensor([0, 1, 1])","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/3%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/5pytorch/%E5%BC%A0%E9%87%8F/detach.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"detach"}],["meta",{"property":"og:description","content":"detach tensor.detach()可以取到tensor的数据和并且requires_grad=False, 而且二者共享存储空间, 既改变一个, 另外一个也会改变. 当想要将tensor转换为numpy的array时, 需要先detach(), 然后再调用numpy(). import torch a = torch.tensor([1,1,1]) b = a.detach() b[0]=0 print(b) ## tensor([0, 1, 1]) print(a) ## tensor([0, 1, 1])"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"detach\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"tensor.detach() 与 tensor.data","slug":"tensor-detach-与-tensor-data","link":"#tensor-detach-与-tensor-data","children":[]}],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.8,"words":241},"filePathRelative":"2机器学习/3分析工具/5pytorch/张量/detach.md","localizedDate":"2025年2月24日","excerpt":"<h1> detach</h1>\\n<p><code>tensor.detach()</code>可以取到tensor的数据和并且<code>requires_grad=False</code>, 而且二者共享存储空间, 既改变一个, 另外一个也会改变.</p>\\n<p>当想要将<code>tensor</code>转换为numpy的array时, 需要先<code>detach()</code>, 然后再调用<code>numpy()</code>.</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> torch\\n\\na <span class=\\"token operator\\">=</span> torch<span class=\\"token punctuation\\">.</span>tensor<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\nb <span class=\\"token operator\\">=</span> a<span class=\\"token punctuation\\">.</span>detach<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\nb<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">0</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>b<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">## tensor([0, 1, 1])</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>a<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">## tensor([0, 1, 1])</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
