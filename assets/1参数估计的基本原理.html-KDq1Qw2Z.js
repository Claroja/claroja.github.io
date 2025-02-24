const a=JSON.parse('{"key":"v-c7106902","path":"/1%E6%95%B0%E6%8D%AE%E6%8C%96%E6%8E%98/5%E7%BB%9F%E8%AE%A1%E5%AD%A6/7%E5%8F%82%E6%95%B0%E4%BC%B0%E8%AE%A1/1%E5%8F%82%E6%95%B0%E4%BC%B0%E8%AE%A1%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%8E%9F%E7%90%86.html","title":"参数估计的基本原理","lang":"zh-CN","frontmatter":{"description":"参数估计的基本原理 估计量与估计值 参数估计(parameter estimation)就是用样本统计量去估计总体的参数。如，用样本均值xxx估计总体均值μ\\\\muμ, 用样本比例ppp估计总体比例π\\\\piπ，用样本方差s2s^2s2估计总体方差σ2\\\\sigma^2σ2。","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/1%E6%95%B0%E6%8D%AE%E6%8C%96%E6%8E%98/5%E7%BB%9F%E8%AE%A1%E5%AD%A6/7%E5%8F%82%E6%95%B0%E4%BC%B0%E8%AE%A1/1%E5%8F%82%E6%95%B0%E4%BC%B0%E8%AE%A1%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%8E%9F%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"参数估计的基本原理"}],["meta",{"property":"og:description","content":"参数估计的基本原理 估计量与估计值 参数估计(parameter estimation)就是用样本统计量去估计总体的参数。如，用样本均值xxx估计总体均值μ\\\\muμ, 用样本比例ppp估计总体比例π\\\\piπ，用样本方差s2s^2s2估计总体方差σ2\\\\sigma^2σ2。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"参数估计的基本原理"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"参数估计的基本原理\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"估计量与估计值","slug":"估计量与估计值","link":"#估计量与估计值","children":[]},{"level":2,"title":"点估计与区间估计","slug":"点估计与区间估计","link":"#点估计与区间估计","children":[{"level":3,"title":"点估计","slug":"点估计","link":"#点估计","children":[]},{"level":3,"title":"区间估计","slug":"区间估计","link":"#区间估计","children":[]}]},{"level":2,"title":"评价估计量的标准","slug":"评价估计量的标准","link":"#评价估计量的标准","children":[{"level":3,"title":"无偏性","slug":"无偏性","link":"#无偏性","children":[]},{"level":3,"title":"有效性","slug":"有效性","link":"#有效性","children":[]},{"level":3,"title":"一致性","slug":"一致性","link":"#一致性","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":10.5,"words":3150},"filePathRelative":"1数据挖掘/5统计学/7参数估计/1参数估计的基本原理.md","localizedDate":"2025年2月24日","excerpt":"<h1> 参数估计的基本原理</h1>\\n<h2> 估计量与估计值</h2>\\n<p>参数估计(parameter estimation)就是用样本统计量去估计总体的参数。如，用样本均值<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\\"application/x-tex\\">x</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.4306em;\\"></span><span class=\\"mord mathnormal\\">x</span></span></span></span>估计总体均值<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>μ</mi></mrow><annotation encoding=\\"application/x-tex\\">\\\\mu</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.625em;vertical-align:-0.1944em;\\"></span><span class=\\"mord mathnormal\\">μ</span></span></span></span>, 用样本比例<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>p</mi></mrow><annotation encoding=\\"application/x-tex\\">p</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.625em;vertical-align:-0.1944em;\\"></span><span class=\\"mord mathnormal\\">p</span></span></span></span>估计总体比例<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>π</mi></mrow><annotation encoding=\\"application/x-tex\\">\\\\pi</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.4306em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">π</span></span></span></span>，用样本方差<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msup><mi>s</mi><mn>2</mn></msup></mrow><annotation encoding=\\"application/x-tex\\">s^2</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8141em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">s</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8141em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span></span></span></span></span></span></span></span>估计总体方差<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msup><mi>σ</mi><mn>2</mn></msup></mrow><annotation encoding=\\"application/x-tex\\">\\\\sigma^2</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8141em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">σ</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8141em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span></span></span></span></span></span></span></span>。</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{a as data};
