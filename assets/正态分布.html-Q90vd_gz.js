const t=JSON.parse('{"key":"v-2b9e315a","path":"/%E6%95%B0%E5%AD%A6/%E6%A6%82%E7%8E%87%E8%AE%BA/%E8%BF%9E%E7%BB%AD%E5%88%86%E5%B8%83/%E6%AD%A3%E6%80%81%E5%88%86%E5%B8%83.html","title":"正态分布","lang":"zh-CN","frontmatter":{"description":"正态分布 定义 正态分布(normal distribution)也被称为高斯分布(gaussian distribution). 正态分布的可能值是全体实数, 参数有μ,σ2\\\\mu,\\\\sigma^2μ,σ2两个, 表示均值和方差, 表示为N(μ,σ2)N(\\\\mu,\\\\sigma^2)N(μ,σ2):","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E5%AD%A6/%E6%A6%82%E7%8E%87%E8%AE%BA/%E8%BF%9E%E7%BB%AD%E5%88%86%E5%B8%83/%E6%AD%A3%E6%80%81%E5%88%86%E5%B8%83.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"正态分布"}],["meta",{"property":"og:description","content":"正态分布 定义 正态分布(normal distribution)也被称为高斯分布(gaussian distribution). 正态分布的可能值是全体实数, 参数有μ,σ2\\\\mu,\\\\sigma^2μ,σ2两个, 表示均值和方差, 表示为N(μ,σ2)N(\\\\mu,\\\\sigma^2)N(μ,σ2):"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:31:52.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"正态分布"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:31:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"正态分布\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2023-11-27T13:31:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":2,"title":"标准正态分布","slug":"标准正态分布","link":"#标准正态分布","children":[{"level":3,"title":"转化为标准正态分布","slug":"转化为标准正态分布","link":"#转化为标准正态分布","children":[]}]},{"level":2,"title":"scipy","slug":"scipy","link":"#scipy","children":[{"level":3,"title":"pdf","slug":"pdf","link":"#pdf","children":[]},{"level":3,"title":"cdf","slug":"cdf","link":"#cdf","children":[]},{"level":3,"title":"isf","slug":"isf","link":"#isf","children":[]},{"level":3,"title":"interval","slug":"interval","link":"#interval","children":[]}]},{"level":2,"title":"不同参数的正态分布","slug":"不同参数的正态分布","link":"#不同参数的正态分布","children":[]},{"level":2,"title":"期望与方差","slug":"期望与方差","link":"#期望与方差","children":[]},{"level":2,"title":"六个西格玛","slug":"六个西格玛","link":"#六个西格玛","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[]},{"level":2,"title":"其他参考","slug":"其他参考","link":"#其他参考","children":[]},{"level":2,"title":"样本小于等于某值的比率","slug":"样本小于等于某值的比率","link":"#样本小于等于某值的比率","children":[{"level":3,"title":"累计分布函数","slug":"累计分布函数","link":"#累计分布函数","children":[]},{"level":3,"title":"累积分布函数","slug":"累积分布函数","link":"#累积分布函数","children":[]},{"level":3,"title":"左侧概率与百分位数","slug":"左侧概率与百分位数","link":"#左侧概率与百分位数","children":[]}]},{"level":2,"title":"t值","slug":"t值","link":"#t值","children":[{"level":3,"title":"t值的样本分布","slug":"t值的样本分布","link":"#t值的样本分布","children":[]},{"level":3,"title":"t分布","slug":"t分布","link":"#t分布","children":[]}]}],"git":{"createdTime":1701091021000,"updatedTime":1701091912000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":2}]},"readingTime":{"minutes":12.16,"words":3647},"filePathRelative":"数学/概率论/连续分布/正态分布.md","localizedDate":"2023年11月27日","excerpt":"<h1> 正态分布</h1>\\n<h2> 定义</h2>\\n<p>正态分布(normal distribution)也被称为高斯分布(gaussian distribution). 正态分布的可能值是全体实数, 参数有<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>μ</mi><mo separator=\\"true\\">,</mo><msup><mi>σ</mi><mn>2</mn></msup></mrow><annotation encoding=\\"application/x-tex\\">\\\\mu,\\\\sigma^2</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.0085em;vertical-align:-0.1944em;\\"></span><span class=\\"mord mathnormal\\">μ</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">σ</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8141em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span></span></span></span></span></span></span></span>两个, 表示均值和方差, 表示为<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>N</mi><mo stretchy=\\"false\\">(</mo><mi>μ</mi><mo separator=\\"true\\">,</mo><msup><mi>σ</mi><mn>2</mn></msup><mo stretchy=\\"false\\">)</mo></mrow><annotation encoding=\\"application/x-tex\\">N(\\\\mu,\\\\sigma^2)</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.0641em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.10903em;\\">N</span><span class=\\"mopen\\">(</span><span class=\\"mord mathnormal\\">μ</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">σ</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8141em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span></span></span></span></span><span class=\\"mclose\\">)</span></span></span></span>:</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{t as data};
