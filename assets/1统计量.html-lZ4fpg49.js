const s=JSON.parse('{"key":"v-1a3e62fe","path":"/1%E6%95%B0%E6%8D%AE%E6%8C%96%E6%8E%98/5%E7%BB%9F%E8%AE%A1%E5%AD%A6/6%E7%BB%9F%E8%AE%A1%E9%87%8F%E5%8F%8A%E5%85%B6%E6%8A%BD%E6%A0%B7%E5%88%86%E5%B8%83/1%E7%BB%9F%E8%AE%A1%E9%87%8F.html","title":"统计量","lang":"zh-CN","frontmatter":{"description":"统计量 统计量的概念 在实际应用中，当我们从某总体中抽取一个样本(X1,X2,...,Xn)(X_1,X_2,...,X_n)(X1​,X2​,...,Xn​)后，并不能直接用它去对总体的有关性质和特征进行推断，这是因为样本虽然是从总体中获取的代表，含有总体性质的信息，但仍比较分散。为了使统计推断成为可能，首先必须把分散在样本中我们关心的信息集中起来，针对不同的研究目的构造不同的样本函数，这种函数在统计学中称为统计量。","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/1%E6%95%B0%E6%8D%AE%E6%8C%96%E6%8E%98/5%E7%BB%9F%E8%AE%A1%E5%AD%A6/6%E7%BB%9F%E8%AE%A1%E9%87%8F%E5%8F%8A%E5%85%B6%E6%8A%BD%E6%A0%B7%E5%88%86%E5%B8%83/1%E7%BB%9F%E8%AE%A1%E9%87%8F.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"统计量"}],["meta",{"property":"og:description","content":"统计量 统计量的概念 在实际应用中，当我们从某总体中抽取一个样本(X1,X2,...,Xn)(X_1,X_2,...,X_n)(X1​,X2​,...,Xn​)后，并不能直接用它去对总体的有关性质和特征进行推断，这是因为样本虽然是从总体中获取的代表，含有总体性质的信息，但仍比较分散。为了使统计推断成为可能，首先必须把分散在样本中我们关心的信息集中起来，针对不同的研究目的构造不同的样本函数，这种函数在统计学中称为统计量。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"统计量\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"统计量的概念","slug":"统计量的概念","link":"#统计量的概念","children":[]},{"level":2,"title":"常用统计量","slug":"常用统计量","link":"#常用统计量","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":2.21,"words":663},"filePathRelative":"1数据挖掘/5统计学/6统计量及其抽样分布/1统计量.md","localizedDate":"2025年2月24日","excerpt":"<h1> 统计量</h1>\\n<h2> 统计量的概念</h2>\\n<p>在实际应用中，当我们从某总体中抽取一个样本<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mo stretchy=\\"false\\">(</mo><msub><mi>X</mi><mn>1</mn></msub><mo separator=\\"true\\">,</mo><msub><mi>X</mi><mn>2</mn></msub><mo separator=\\"true\\">,</mo><mi mathvariant=\\"normal\\">.</mi><mi mathvariant=\\"normal\\">.</mi><mi mathvariant=\\"normal\\">.</mi><mo separator=\\"true\\">,</mo><msub><mi>X</mi><mi>n</mi></msub><mo stretchy=\\"false\\">)</mo></mrow><annotation encoding=\\"application/x-tex\\">(X_1,X_2,...,X_n)</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mopen\\">(</span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07847em;\\">X</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:-0.0785em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">1</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07847em;\\">X</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:-0.0785em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\">...</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07847em;\\">X</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.1514em;\\"><span style=\\"top:-2.55em;margin-left:-0.0785em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">n</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mclose\\">)</span></span></span></span>后，并不能直接用它去对总体的有关性质和特征进行推断，这是因为样本虽然是从总体中获取的代表，含有总体性质的信息，但仍比较分散。为了使统计推断成为可能，首先必须把分散在样本中我们关心的信息集中起来，针对不同的研究目的构造不同的样本函数，这种函数在统计学中称为统计量。</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{s as data};
