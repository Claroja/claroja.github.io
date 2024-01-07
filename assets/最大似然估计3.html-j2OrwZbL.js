const t=JSON.parse('{"key":"v-7f8e5c36","path":"/%E6%95%B0%E5%AD%A6/%E7%BB%9F%E8%AE%A1%E5%AD%A6/7%E5%8F%82%E6%95%B0%E4%BC%B0%E8%AE%A1/%E6%9C%80%E5%A4%A7%E4%BC%BC%E7%84%B6%E4%BC%B0%E8%AE%A13.html","title":"最大似然估计","lang":"zh-CN","frontmatter":{"description":"最大似然估计 似然 当参数为某值时抽到特定样本的概率(密度)叫做似然. 似然的英文是Likelihood, 常用首字母ζ\\\\zetaζ表示. 以投掷两次硬币的结果作为样本, 其中第一次为正面, 第二次为反面. 假设投出正面的概率为1/2, 则1/2为参数, 上述样本的概率, 即似然, 就是 1/2×1/2=1/41/2 \\\\times 1/2 = 1/41/2×1/2=1/4","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E5%AD%A6/%E7%BB%9F%E8%AE%A1%E5%AD%A6/7%E5%8F%82%E6%95%B0%E4%BC%B0%E8%AE%A1/%E6%9C%80%E5%A4%A7%E4%BC%BC%E7%84%B6%E4%BC%B0%E8%AE%A13.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"最大似然估计"}],["meta",{"property":"og:description","content":"最大似然估计 似然 当参数为某值时抽到特定样本的概率(密度)叫做似然. 似然的英文是Likelihood, 常用首字母ζ\\\\zetaζ表示. 以投掷两次硬币的结果作为样本, 其中第一次为正面, 第二次为反面. 假设投出正面的概率为1/2, 则1/2为参数, 上述样本的概率, 即似然, 就是 1/2×1/2=1/41/2 \\\\times 1/2 = 1/41/2×1/2=1/4"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-07T05:43:48.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"最大似然估计"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2024-01-07T05:43:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"最大似然估计\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2024-01-07T05:43:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"似然","slug":"似然","link":"#似然","children":[]},{"level":2,"title":"似然函数","slug":"似然函数","link":"#似然函数","children":[]},{"level":2,"title":"对数似然","slug":"对数似然","link":"#对数似然","children":[{"level":3,"title":"指数","slug":"指数","link":"#指数","children":[]},{"level":3,"title":"对数","slug":"对数","link":"#对数","children":[]},{"level":3,"title":"最大似然法","slug":"最大似然法","link":"#最大似然法","children":[]},{"level":3,"title":"服从正态分布的数据的似然","slug":"服从正态分布的数据的似然","link":"#服从正态分布的数据的似然","children":[]},{"level":3,"title":"多余参数","slug":"多余参数","link":"#多余参数","children":[]},{"level":3,"title":"正态线性模型的似然","slug":"正态线性模型的似然","link":"#正态线性模型的似然","children":[]},{"level":3,"title":"最大似然法计算举例","slug":"最大似然法计算举例","link":"#最大似然法计算举例","children":[]}]},{"level":2,"title":"马同学","slug":"马同学","link":"#马同学","children":[]},{"level":2,"title":"什么是最大似然估计","slug":"什么是最大似然估计","link":"#什么是最大似然估计","children":[{"level":3,"title":"扔硬币例子1","slug":"扔硬币例子1","link":"#扔硬币例子1","children":[]},{"level":3,"title":"扔硬币2","slug":"扔硬币2","link":"#扔硬币2","children":[]},{"level":3,"title":"扩大样本容量","slug":"扩大样本容量","link":"#扩大样本容量","children":[]}]},{"level":2,"title":"严格的定义","slug":"严格的定义","link":"#严格的定义","children":[]},{"level":2,"title":"参考:","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1704606228000,"updatedTime":1704606228000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":13.16,"words":3948},"filePathRelative":"数学/统计学/7参数估计/最大似然估计3.md","localizedDate":"2024年1月7日","excerpt":"<h1> 最大似然估计</h1>\\n<h2> 似然</h2>\\n<p>当参数为某值时抽到特定样本的概率(密度)叫做似然. 似然的英文是Likelihood, 常用首字母<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>ζ</mi></mrow><annotation encoding=\\"application/x-tex\\">\\\\zeta</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8889em;vertical-align:-0.1944em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07378em;\\">ζ</span></span></span></span>表示.\\n以投掷两次硬币的结果作为样本, 其中第一次为正面, 第二次为反面. 假设投出正面的概率为1/2, 则1/2为参数, 上述样本的概率, 即似然, 就是 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mn>1</mn><mi mathvariant=\\"normal\\">/</mi><mn>2</mn><mo>×</mo><mn>1</mn><mi mathvariant=\\"normal\\">/</mi><mn>2</mn><mo>=</mo><mn>1</mn><mi mathvariant=\\"normal\\">/</mi><mn>4</mn></mrow><annotation encoding=\\"application/x-tex\\">1/2 \\\\times 1/2 = 1/4</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord\\">1/2</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">×</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord\\">1/2</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord\\">1/4</span></span></span></span></p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{t as data};
