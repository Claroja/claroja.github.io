const a=JSON.parse('{"key":"v-01d35f80","path":"/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/2_2%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0/optimize/gradproblem.html","title":"gradproblem","lang":"zh-CN","frontmatter":{"description":"gradproblem 这里考虑长度为T的时序数据, 时间方向上的梯度, 可以反向传播经历了tanh, \\"+\\", MatMul运算. \\"+\\"的反向传播会将上游的穿戴的梯度原样传给下游, 因此梯度值不变. \\"tanh\\" 当y=tanh(x)y=tanh(x)y=tanh(x)时, 导数是dydx=1−y2\\\\frac{dy}{dx}=1-y^2dxdy​=1−y2, 如下图: 虚线是导数, 可以看出, 它的值小于1, 并且随着x远离0, 它的值在变小. 当反向传播的梯度过tanh节点时, 它的值会越来越小. 因此如果经过tanh函数T次, 则梯度也会减小T次","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/2_2%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0/optimize/gradproblem.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"gradproblem"}],["meta",{"property":"og:description","content":"gradproblem 这里考虑长度为T的时序数据, 时间方向上的梯度, 可以反向传播经历了tanh, \\"+\\", MatMul运算. \\"+\\"的反向传播会将上游的穿戴的梯度原样传给下游, 因此梯度值不变. \\"tanh\\" 当y=tanh(x)y=tanh(x)y=tanh(x)时, 导数是dydx=1−y2\\\\frac{dy}{dx}=1-y^2dxdy​=1−y2, 如下图: 虚线是导数, 可以看出, 它的值小于1, 并且随着x远离0, 它的值在变小. 当反向传播的梯度过tanh节点时, 它的值会越来越小. 因此如果经过tanh函数T次, 则梯度也会减小T次"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-18T14:02:01.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"gradproblem"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-18T14:02:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"gradproblem\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2025-02-18T14:02:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"\\"tanh\\"","slug":"tanh","link":"#tanh","children":[]},{"level":2,"title":"MatMul","slug":"matmul","link":"#matmul","children":[]},{"level":2,"title":"梯度爆炸对策","slug":"梯度爆炸对策","link":"#梯度爆炸对策","children":[]},{"level":2,"title":"梯度消失对策","slug":"梯度消失对策","link":"#梯度消失对策","children":[]}],"git":{"createdTime":1739887321000,"updatedTime":1739887321000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":2.96,"words":887},"filePathRelative":"机器学习/2_2深度学习/optimize/gradproblem.md","localizedDate":"2025年2月18日","excerpt":"<h1> gradproblem</h1>\\n<p>\\n这里考虑长度为T的时序数据, 时间方向上的梯度, 可以反向传播经历了tanh, \\"+\\", MatMul运算.\\n\\"+\\"的反向传播会将上游的穿戴的梯度原样传给下游, 因此梯度值不变.</p>\\n<h2> \\"tanh\\"</h2>\\n<p>当<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>y</mi><mo>=</mo><mi>t</mi><mi>a</mi><mi>n</mi><mi>h</mi><mo stretchy=\\"false\\">(</mo><mi>x</mi><mo stretchy=\\"false\\">)</mo></mrow><annotation encoding=\\"application/x-tex\\">y=tanh(x)</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.625em;vertical-align:-0.1944em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">y</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\">t</span><span class=\\"mord mathnormal\\">anh</span><span class=\\"mopen\\">(</span><span class=\\"mord mathnormal\\">x</span><span class=\\"mclose\\">)</span></span></span></span>时, 导数是<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow><annotation encoding=\\"application/x-tex\\">\\\\frac{dy}{dx}=1-y^2</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.2772em;vertical-align:-0.345em;\\"></span><span class=\\"mord\\"><span class=\\"mopen nulldelimiter\\"></span><span class=\\"mfrac\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.9322em;\\"><span style=\\"top:-2.655em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\">d</span><span class=\\"mord mathnormal mtight\\">x</span></span></span></span><span style=\\"top:-3.23em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"frac-line\\" style=\\"border-bottom-width:0.04em;\\"></span></span><span style=\\"top:-3.4461em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\">d</span><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.03588em;\\">y</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.345em;\\"><span></span></span></span></span></span><span class=\\"mclose nulldelimiter\\"></span></span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.7278em;vertical-align:-0.0833em;\\"></span><span class=\\"mord\\">1</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">−</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.0085em;vertical-align:-0.1944em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">y</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8141em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span></span></span></span></span></span></span></span>, 如下图:\\n\\n虚线是导数, 可以看出, 它的值小于1, 并且随着x远离0, 它的值在变小. 当反向传播的梯度过tanh节点时, 它的值会越来越小. 因此如果经过tanh函数T次, 则梯度也会减小T次</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{a as data};
