const s=JSON.parse('{"key":"v-25af7fbe","path":"/%E6%95%B0%E5%AD%A6/%E6%A6%82%E7%8E%87%E8%AE%BA/6%E5%A4%9A%E7%BB%B4/covariance.html","title":"zindex","lang":"zh-CN","frontmatter":{"description":"zindex Variance和CoVariance Variance Variance measures the variation of a single random variable(单个随机变量的离散程度) variance的formula: 仅使用sample data, 只能获得sample mean, 使用n-1做为分子 σx2=1n−1∑i=1n(xi−xˉ)2 \\\\sigma^2_x = \\\\frac{1}{n-1} \\\\sum^{n}_{i=1}(x_i - \\\\bar{x})^2 σx2​=n−11​i=1∑n​(xi​−xˉ)2","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E5%AD%A6/%E6%A6%82%E7%8E%87%E8%AE%BA/6%E5%A4%9A%E7%BB%B4/covariance.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"zindex"}],["meta",{"property":"og:description","content":"zindex Variance和CoVariance Variance Variance measures the variation of a single random variable(单个随机变量的离散程度) variance的formula: 仅使用sample data, 只能获得sample mean, 使用n-1做为分子 σx2=1n−1∑i=1n(xi−xˉ)2 \\\\sigma^2_x = \\\\frac{1}{n-1} \\\\sum^{n}_{i=1}(x_i - \\\\bar{x})^2 σx2​=n−11​i=1∑n​(xi​−xˉ)2"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-07T05:43:48.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"zindex"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2024-01-07T05:43:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"zindex\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2024-01-07T05:43:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Variance和CoVariance","slug":"variance和covariance","link":"#variance和covariance","children":[{"level":3,"title":"Variance","slug":"variance","link":"#variance","children":[]},{"level":3,"title":"CoVariance","slug":"covariance","link":"#covariance","children":[]}]},{"level":2,"title":"Positive, Negative, and Zero States of The Covariance","slug":"positive-negative-and-zero-states-of-the-covariance","link":"#positive-negative-and-zero-states-of-the-covariance","children":[]},{"level":2,"title":"Eigenvalues and Eigenvectors of Covariance Matrix","slug":"eigenvalues-and-eigenvectors-of-covariance-matrix","link":"#eigenvalues-and-eigenvectors-of-covariance-matrix","children":[]},{"level":2,"title":"CoVariance Matrix","slug":"covariance-matrix","link":"#covariance-matrix","children":[]},{"level":2,"title":"Linear Transformations","slug":"linear-transformations","link":"#linear-transformations","children":[{"level":3,"title":"scaling","slug":"scaling","link":"#scaling","children":[]},{"level":3,"title":"linear transformation","slug":"linear-transformation","link":"#linear-transformation","children":[]}]},{"level":2,"title":"Eigen Decomposition","slug":"eigen-decomposition","link":"#eigen-decomposition","children":[]}],"git":{"createdTime":1704606228000,"updatedTime":1704606228000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":3.93,"words":1178},"filePathRelative":"数学/概率论/6多维/covariance.md","localizedDate":"2024年1月7日","excerpt":"<h1> zindex</h1>\\n<h2> Variance和CoVariance</h2>\\n<h3> Variance</h3>\\n<p>Variance measures the variation of a single random variable(单个随机变量的离散程度)\\nvariance的formula:</p>\\n<ol>\\n<li>仅使用sample data, 只能获得sample mean, 使用n-1做为分子</li>\\n</ol>\\n<p class=\\"katex-block\\"><span class=\\"katex-display\\"><span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\" display=\\"block\\"><semantics><mrow><msubsup><mi>σ</mi><mi>x</mi><mn>2</mn></msubsup><mo>=</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mo stretchy=\\"false\\">(</mo><msub><mi>x</mi><mi>i</mi></msub><mo>−</mo><mover accent=\\"true\\"><mi>x</mi><mo>ˉ</mo></mover><msup><mo stretchy=\\"false\\">)</mo><mn>2</mn></msup></mrow><annotation encoding=\\"application/x-tex\\">\\n\\\\sigma^2_x = \\\\frac{1}{n-1} \\\\sum^{n}_{i=1}(x_i - \\\\bar{x})^2 \\n</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.1111em;vertical-align:-0.247em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">σ</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8641em;\\"><span style=\\"top:-2.453em;margin-left:-0.0359em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">x</span></span></span><span style=\\"top:-3.113em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.247em;\\"><span></span></span></span></span></span></span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:2.9291em;vertical-align:-1.2777em;\\"></span><span class=\\"mord\\"><span class=\\"mopen nulldelimiter\\"></span><span class=\\"mfrac\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.3214em;\\"><span style=\\"top:-2.314em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">n</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">−</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mord\\">1</span></span></span><span style=\\"top:-3.23em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"frac-line\\" style=\\"border-bottom-width:0.04em;\\"></span></span><span style=\\"top:-3.677em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">1</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.7693em;\\"><span></span></span></span></span></span><span class=\\"mclose nulldelimiter\\"></span></span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mop op-limits\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.6514em;\\"><span style=\\"top:-1.8723em;margin-left:0em;\\"><span class=\\"pstrut\\" style=\\"height:3.05em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\">i</span><span class=\\"mrel mtight\\">=</span><span class=\\"mord mtight\\">1</span></span></span></span><span style=\\"top:-3.05em;\\"><span class=\\"pstrut\\" style=\\"height:3.05em;\\"></span><span><span class=\\"mop op-symbol large-op\\">∑</span></span></span><span style=\\"top:-4.3em;margin-left:0em;\\"><span class=\\"pstrut\\" style=\\"height:3.05em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\">n</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.2777em;\\"><span></span></span></span></span></span><span class=\\"mopen\\">(</span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">x</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3117em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">i</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">−</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.1141em;vertical-align:-0.25em;\\"></span><span class=\\"mord accent\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.5678em;\\"><span style=\\"top:-3em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"mord mathnormal\\">x</span></span><span style=\\"top:-3em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"accent-body\\" style=\\"left:-0.2222em;\\"><span class=\\"mord\\">ˉ</span></span></span></span></span></span></span><span class=\\"mclose\\"><span class=\\"mclose\\">)</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8641em;\\"><span style=\\"top:-3.113em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span></span></span></span></span></span></span></span></span></p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{s as data};
