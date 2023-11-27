const e=JSON.parse('{"key":"v-eed92be0","path":"/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/pytorch/%E8%AE%AD%E7%BB%83%E7%9B%B8%E5%85%B3/gpu.html","title":"gpu","lang":"zh-CN","frontmatter":{"description":"gpu 基础 torch.cuda.is_available() # GPU是否可用 torch.cuda.device_count() # 查看有几个GPU, 后续的device名称可以指定第几块GPU, 比如 tensor.to(\\"cuda:0\\") device = torch.device(\\"cuda\\") if torch.cuda.is_available() else torch.device(\\"cpu\\") tensor.to(dev)","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/pytorch/%E8%AE%AD%E7%BB%83%E7%9B%B8%E5%85%B3/gpu.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"gpu"}],["meta",{"property":"og:description","content":"gpu 基础 torch.cuda.is_available() # GPU是否可用 torch.cuda.device_count() # 查看有几个GPU, 后续的device名称可以指定第几块GPU, 比如 tensor.to(\\"cuda:0\\") device = torch.device(\\"cuda\\") if torch.cuda.is_available() else torch.device(\\"cpu\\") tensor.to(dev)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:17:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:17:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"gpu\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-27T13:17:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"基础","slug":"基础","link":"#基础","children":[]},{"level":2,"title":"CPU和GPU交换tensor","slug":"cpu和gpu交换tensor","link":"#cpu和gpu交换tensor","children":[]},{"level":2,"title":"转换方法","slug":"转换方法","link":"#转换方法","children":[]},{"level":2,"title":"应用","slug":"应用","link":"#应用","children":[{"level":3,"title":"在DataLoader取出时, 转到GPU","slug":"在dataloader取出时-转到gpu","link":"#在dataloader取出时-转到gpu","children":[]},{"level":3,"title":"在创建数据时就转到GPU","slug":"在创建数据时就转到gpu","link":"#在创建数据时就转到gpu","children":[]},{"level":3,"title":"多GPU并行运算","slug":"多gpu并行运算","link":"#多gpu并行运算","children":[]},{"level":3,"title":"sava 与 load","slug":"sava-与-load","link":"#sava-与-load","children":[]}]}],"git":{"createdTime":1701091021000,"updatedTime":1701091021000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":3.17,"words":951},"filePathRelative":"机器学习/pytorch/训练相关/gpu.md","localizedDate":"2023年11月27日","excerpt":"<h1> gpu</h1>\\n<h2> 基础</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>torch<span class=\\"token punctuation\\">.</span>cuda<span class=\\"token punctuation\\">.</span>is_available<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># GPU是否可用</span>\\ntorch<span class=\\"token punctuation\\">.</span>cuda<span class=\\"token punctuation\\">.</span>device_count<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 查看有几个GPU, 后续的device名称可以指定第几块GPU, 比如 tensor.to(\\"cuda:0\\")</span>\\ndevice <span class=\\"token operator\\">=</span> torch<span class=\\"token punctuation\\">.</span>device<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"cuda\\"</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">if</span> torch<span class=\\"token punctuation\\">.</span>cuda<span class=\\"token punctuation\\">.</span>is_available<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">else</span> torch<span class=\\"token punctuation\\">.</span>device<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"cpu\\"</span><span class=\\"token punctuation\\">)</span>\\n\\ntensor<span class=\\"token punctuation\\">.</span>to<span class=\\"token punctuation\\">(</span>dev<span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
