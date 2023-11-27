const a=JSON.parse('{"key":"v-1883de7f","path":"/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/pytorch/%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86/dataloader.html","title":"dataloader","lang":"zh-CN","frontmatter":{"description":"dataloader torch.utils.data.DataLoader Dataset类只相当于一个打包工具，包含了数据的地址。真正把数据读入内存的过程是由Dataloader进行批迭代输入的时候进行的。 from torch.utils.data import TensorDataset, DataLoader Data = torch.tensor([[1, 2], [3, 4],[5, 6], [7, 8]]) Label = torch.tensor([[0], [1], [0], [2]]) torch_dataset = TensorDataset(Data, Label) torch_dataloader = DataLoader( dataset=torch_dataset, batch_size=2, shuffle=False, num_workers=2, pin_memory=True ) for step, (x,y) in enumerate(torch_dataloader): print(x.to(\\"cuda\\")) print(y.to(\\"cuda\\"))","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/pytorch/%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86/dataloader.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"dataloader"}],["meta",{"property":"og:description","content":"dataloader torch.utils.data.DataLoader Dataset类只相当于一个打包工具，包含了数据的地址。真正把数据读入内存的过程是由Dataloader进行批迭代输入的时候进行的。 from torch.utils.data import TensorDataset, DataLoader Data = torch.tensor([[1, 2], [3, 4],[5, 6], [7, 8]]) Label = torch.tensor([[0], [1], [0], [2]]) torch_dataset = TensorDataset(Data, Label) torch_dataloader = DataLoader( dataset=torch_dataset, batch_size=2, shuffle=False, num_workers=2, pin_memory=True ) for step, (x,y) in enumerate(torch_dataloader): print(x.to(\\"cuda\\")) print(y.to(\\"cuda\\"))"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:17:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:17:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"dataloader\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-27T13:17:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"torch.utils.data.DataLoader","slug":"torch-utils-data-dataloader","link":"#torch-utils-data-dataloader","children":[]}],"git":{"createdTime":1701091021000,"updatedTime":1701091021000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":2.35,"words":704},"filePathRelative":"机器学习/pytorch/数据处理/dataloader.md","localizedDate":"2023年11月27日","excerpt":"<h1> dataloader</h1>\\n<h2> torch.utils.data.DataLoader</h2>\\n<p>Dataset类只相当于一个打包工具，包含了数据的地址。真正把数据读入内存的过程是由Dataloader进行批迭代输入的时候进行的。</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">from</span> torch<span class=\\"token punctuation\\">.</span>utils<span class=\\"token punctuation\\">.</span>data <span class=\\"token keyword\\">import</span> TensorDataset<span class=\\"token punctuation\\">,</span> DataLoader\\nData <span class=\\"token operator\\">=</span> torch<span class=\\"token punctuation\\">.</span>tensor<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">5</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">6</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">7</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">8</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\nLabel <span class=\\"token operator\\">=</span> torch<span class=\\"token punctuation\\">.</span>tensor<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\ntorch_dataset <span class=\\"token operator\\">=</span> TensorDataset<span class=\\"token punctuation\\">(</span>Data<span class=\\"token punctuation\\">,</span> Label<span class=\\"token punctuation\\">)</span>\\ntorch_dataloader <span class=\\"token operator\\">=</span> DataLoader<span class=\\"token punctuation\\">(</span>\\n    dataset<span class=\\"token operator\\">=</span>torch_dataset<span class=\\"token punctuation\\">,</span>\\n    batch_size<span class=\\"token operator\\">=</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span>\\n    shuffle<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">False</span><span class=\\"token punctuation\\">,</span>\\n    num_workers<span class=\\"token operator\\">=</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span>\\n    pin_memory<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">True</span>\\n<span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">for</span> step<span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span>x<span class=\\"token punctuation\\">,</span>y<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">in</span> <span class=\\"token builtin\\">enumerate</span><span class=\\"token punctuation\\">(</span>torch_dataloader<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>x<span class=\\"token punctuation\\">.</span>to<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"cuda\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>y<span class=\\"token punctuation\\">.</span>to<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"cuda\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{a as data};
