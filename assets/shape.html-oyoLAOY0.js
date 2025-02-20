const n=JSON.parse('{"key":"v-46189ff0","path":"/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/3_2pytorch/%E5%BC%A0%E9%87%8F/shape.html","title":"shape","lang":"zh-CN","frontmatter":{"description":"shape 更改形状1: shape(view) z = torch.tensor([[1, 2, 3, 4], [5, 6, 7, 8]]) z.shape ## torch.Size([2, 4]) z.reshape(-1) # 将z变成 1维, 行自动计算 ## tensor([1, 2, 3, 4, 5, 6, 7, 8]) z.reshape(-1, 1) # 将z变成2维, ?行1列, 行自动计算 ## tensor([[1], ## [2], ## [3], ## [4], ## [5], ## [6], ## [7], ## [8]]) z.reshape(-1, 2) # 将z变成2维, ?行2列, 行自动计算 ## tensor([[1, 2], ## [3, 4], ## [5, 6], ## [7, 8]])","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/3_2pytorch/%E5%BC%A0%E9%87%8F/shape.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"shape"}],["meta",{"property":"og:description","content":"shape 更改形状1: shape(view) z = torch.tensor([[1, 2, 3, 4], [5, 6, 7, 8]]) z.shape ## torch.Size([2, 4]) z.reshape(-1) # 将z变成 1维, 行自动计算 ## tensor([1, 2, 3, 4, 5, 6, 7, 8]) z.reshape(-1, 1) # 将z变成2维, ?行1列, 行自动计算 ## tensor([[1], ## [2], ## [3], ## [4], ## [5], ## [6], ## [7], ## [8]]) z.reshape(-1, 2) # 将z变成2维, ?行2列, 行自动计算 ## tensor([[1, 2], ## [3, 4], ## [5, 6], ## [7, 8]])"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-18T14:02:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-18T14:02:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"shape\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-18T14:02:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"更改形状1: shape(view)","slug":"更改形状1-shape-view","link":"#更改形状1-shape-view","children":[]},{"level":2,"title":"更改形状2: squeeze和unsqueeze","slug":"更改形状2-squeeze和unsqueeze","link":"#更改形状2-squeeze和unsqueeze","children":[{"level":3,"title":"增加维度","slug":"增加维度","link":"#增加维度","children":[]},{"level":3,"title":"减少维度","slug":"减少维度","link":"#减少维度","children":[]}]},{"level":2,"title":"拼合","slug":"拼合","link":"#拼合","children":[{"level":3,"title":"垂直方向vstack","slug":"垂直方向vstack","link":"#垂直方向vstack","children":[]},{"level":3,"title":"水平方向hstack","slug":"水平方向hstack","link":"#水平方向hstack","children":[]}]},{"level":2,"title":"转置","slug":"转置","link":"#转置","children":[]}],"git":{"createdTime":1739887321000,"updatedTime":1739887321000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.15,"words":346},"filePathRelative":"机器学习/3_2pytorch/张量/shape.md","localizedDate":"2025年2月18日","excerpt":"<h1> shape</h1>\\n<h2> 更改形状1: shape(view)</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>z <span class=\\"token operator\\">=</span> torch<span class=\\"token punctuation\\">.</span>tensor<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n          <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">5</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">6</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">7</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">8</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n\\n\\nz<span class=\\"token punctuation\\">.</span>shape\\n<span class=\\"token comment\\">## torch.Size([2, 4])</span>\\n\\nz<span class=\\"token punctuation\\">.</span>reshape<span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 将z变成 1维, 行自动计算</span>\\n<span class=\\"token comment\\">## tensor([1, 2, 3, 4, 5, 6, 7, 8])</span>\\n\\nz<span class=\\"token punctuation\\">.</span>reshape<span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 将z变成2维, ?行1列, 行自动计算</span>\\n<span class=\\"token comment\\">## tensor([[1],</span>\\n<span class=\\"token comment\\">##         [2],</span>\\n<span class=\\"token comment\\">##         [3],</span>\\n<span class=\\"token comment\\">##         [4],</span>\\n<span class=\\"token comment\\">##         [5],</span>\\n<span class=\\"token comment\\">##         [6],</span>\\n<span class=\\"token comment\\">##         [7],</span>\\n<span class=\\"token comment\\">##         [8]])</span>\\nz<span class=\\"token punctuation\\">.</span>reshape<span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 将z变成2维, ?行2列, 行自动计算</span>\\n<span class=\\"token comment\\">## tensor([[1, 2],</span>\\n<span class=\\"token comment\\">##         [3, 4],</span>\\n<span class=\\"token comment\\">##         [5, 6],</span>\\n<span class=\\"token comment\\">##         [7, 8]])</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
