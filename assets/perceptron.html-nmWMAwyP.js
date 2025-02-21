const s=JSON.parse('{"key":"v-fd289f88","path":"/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/2_2%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0/deeplearn/perceptron.html","title":"perceptron","lang":"zh-CN","frontmatter":{"description":"perceptron 感知机的输入和输出信号只有个1/0两种取值. y={1(w1x1,w2x2≤θ)0(w1x1,w2x2&gt;θ) y=\\\\begin{cases} 1 &amp;(w_1x_1,w_2x_2 \\\\leq \\\\theta) \\\\\\\\ 0 &amp;(w_1x_1,w_2x_2 &gt; \\\\theta) \\\\end{cases} y={10​(w1​x1​,w2​x2​≤θ)(w1​x1​,w2​x2​&gt;θ)​","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/2_2%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0/deeplearn/perceptron.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"perceptron"}],["meta",{"property":"og:description","content":"perceptron 感知机的输入和输出信号只有个1/0两种取值. y={1(w1x1,w2x2≤θ)0(w1x1,w2x2&gt;θ) y=\\\\begin{cases} 1 &amp;(w_1x_1,w_2x_2 \\\\leq \\\\theta) \\\\\\\\ 0 &amp;(w_1x_1,w_2x_2 &gt; \\\\theta) \\\\end{cases} y={10​(w1​x1​,w2​x2​≤θ)(w1​x1​,w2​x2​&gt;θ)​"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"perceptron"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"perceptron\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"简单逻辑电路","slug":"简单逻辑电路","link":"#简单逻辑电路","children":[{"level":3,"title":"与门(AND gate)","slug":"与门-and-gate","link":"#与门-and-gate","children":[]},{"level":3,"title":"与非门(NAND gate)","slug":"与非门-nand-gate","link":"#与非门-nand-gate","children":[]},{"level":3,"title":"或门(OR gate)","slug":"或门-or-gate","link":"#或门-or-gate","children":[]},{"level":3,"title":"异或门(XOR gate)","slug":"异或门-xor-gate","link":"#异或门-xor-gate","children":[]}]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":2.72,"words":816},"filePathRelative":"4机器学习/2_2深度学习/deeplearn/perceptron.md","localizedDate":"2025年2月21日","excerpt":"<h1> perceptron</h1>\\n<p>感知机的输入和输出信号只有个1/0两种取值.</p>\\n<p class=\\"katex-block\\"><span class=\\"katex-display\\"><span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\" display=\\"block\\"><semantics><mrow><mi>y</mi><mo>=</mo><mrow><mo fence=\\"true\\">{</mo><mtable rowspacing=\\"0.36em\\" columnalign=\\"left left\\" columnspacing=\\"1em\\"><mtr><mtd><mstyle scriptlevel=\\"0\\" displaystyle=\\"false\\"><mn>1</mn></mstyle></mtd><mtd><mstyle scriptlevel=\\"0\\" displaystyle=\\"false\\"><mrow><mo stretchy=\\"false\\">(</mo><msub><mi>w</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub><mo separator=\\"true\\">,</mo><msub><mi>w</mi><mn>2</mn></msub><msub><mi>x</mi><mn>2</mn></msub><mo>≤</mo><mi>θ</mi><mo stretchy=\\"false\\">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel=\\"0\\" displaystyle=\\"false\\"><mn>0</mn></mstyle></mtd><mtd><mstyle scriptlevel=\\"0\\" displaystyle=\\"false\\"><mrow><mo stretchy=\\"false\\">(</mo><msub><mi>w</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub><mo separator=\\"true\\">,</mo><msub><mi>w</mi><mn>2</mn></msub><msub><mi>x</mi><mn>2</mn></msub><mo>&gt;</mo><mi>θ</mi><mo stretchy=\\"false\\">)</mo></mrow></mstyle></mtd></mtr></mtable></mrow></mrow><annotation encoding=\\"application/x-tex\\">\\ny=\\\\begin{cases} \\n1 &amp;(w_1x_1,w_2x_2 \\\\leq \\\\theta) \\\\\\\\\\n0 &amp;(w_1x_1,w_2x_2 &gt; \\\\theta)\\n\\\\end{cases}\\n</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.625em;vertical-align:-0.1944em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">y</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:3em;vertical-align:-1.25em;\\"></span><span class=\\"minner\\"><span class=\\"mopen delimcenter\\" style=\\"top:0em;\\"><span class=\\"delimsizing size4\\">{</span></span><span class=\\"mord\\"><span class=\\"mtable\\"><span class=\\"col-align-l\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.69em;\\"><span style=\\"top:-3.69em;\\"><span class=\\"pstrut\\" style=\\"height:3.008em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">1</span></span></span><span style=\\"top:-2.25em;\\"><span class=\\"pstrut\\" style=\\"height:3.008em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">0</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.19em;\\"><span></span></span></span></span></span><span class=\\"arraycolsep\\" style=\\"width:1em;\\"></span><span class=\\"col-align-l\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.69em;\\"><span style=\\"top:-3.69em;\\"><span class=\\"pstrut\\" style=\\"height:3.008em;\\"></span><span class=\\"mord\\"><span class=\\"mopen\\">(</span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.02691em;\\">w</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:-0.0269em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">1</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">x</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">1</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.02691em;\\">w</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:-0.0269em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">x</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">≤</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.02778em;\\">θ</span><span class=\\"mclose\\">)</span></span></span><span style=\\"top:-2.25em;\\"><span class=\\"pstrut\\" style=\\"height:3.008em;\\"></span><span class=\\"mord\\"><span class=\\"mopen\\">(</span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.02691em;\\">w</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:-0.0269em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">1</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">x</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">1</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.02691em;\\">w</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:-0.0269em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">x</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">&gt;</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.02778em;\\">θ</span><span class=\\"mclose\\">)</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.19em;\\"><span></span></span></span></span></span></span></span><span class=\\"mclose nulldelimiter\\"></span></span></span></span></span></span></p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{s as data};
