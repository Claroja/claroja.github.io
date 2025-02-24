const s=JSON.parse('{"key":"v-245efdfb","path":"/1%E6%95%B0%E6%8D%AE%E6%8C%96%E6%8E%98/3%E6%A6%82%E7%8E%87%E8%AE%BA/3%E7%A6%BB%E6%95%A3%E9%9A%8F%E6%9C%BA%E5%8F%98%E9%87%8F/%E7%A6%BB%E6%95%A3%E5%88%86%E5%B8%83/%E5%87%A0%E4%BD%95%E5%88%86%E5%B8%83.html","title":"几何分布","lang":"zh-CN","frontmatter":{"description":"几何分布 几何分布 几何分布(geometric distribution)指反复进行伯努利试验, 直到1次成功为止的实验次数所服从的概率分布. 几何分布在第一次成功之前, 有可能连续失败, 所以试验成功次数是不小于1的整数. 如果你需要知道尝试多次能取得第一次成功的概率，则需要几何分布。 几何分布记为: f(x)={p(1−p)x−1x∈(1,2,3,..,n)0otherwise f(x) = \\\\begin{cases} p(1-p)^{x-1} &amp; x \\\\in (1,2,3,..,n) \\\\\\\\ 0 &amp; otherwise \\\\end{cases} f(x)={p(1−p)x−10​x∈(1,2,3,..,n)otherwise​","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/1%E6%95%B0%E6%8D%AE%E6%8C%96%E6%8E%98/3%E6%A6%82%E7%8E%87%E8%AE%BA/3%E7%A6%BB%E6%95%A3%E9%9A%8F%E6%9C%BA%E5%8F%98%E9%87%8F/%E7%A6%BB%E6%95%A3%E5%88%86%E5%B8%83/%E5%87%A0%E4%BD%95%E5%88%86%E5%B8%83.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"几何分布"}],["meta",{"property":"og:description","content":"几何分布 几何分布 几何分布(geometric distribution)指反复进行伯努利试验, 直到1次成功为止的实验次数所服从的概率分布. 几何分布在第一次成功之前, 有可能连续失败, 所以试验成功次数是不小于1的整数. 如果你需要知道尝试多次能取得第一次成功的概率，则需要几何分布。 几何分布记为: f(x)={p(1−p)x−1x∈(1,2,3,..,n)0otherwise f(x) = \\\\begin{cases} p(1-p)^{x-1} &amp; x \\\\in (1,2,3,..,n) \\\\\\\\ 0 &amp; otherwise \\\\end{cases} f(x)={p(1−p)x−10​x∈(1,2,3,..,n)otherwise​"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"几何分布\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"几何分布","slug":"几何分布-1","link":"#几何分布-1","children":[]},{"level":2,"title":"scipy","slug":"scipy","link":"#scipy","children":[]},{"level":2,"title":"如何判断是不是几何分布","slug":"如何判断是不是几何分布","link":"#如何判断是不是几何分布","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":3.17,"words":952},"filePathRelative":"1数据挖掘/3概率论/3离散随机变量/离散分布/几何分布.md","localizedDate":"2025年2月24日","excerpt":"<h1> 几何分布</h1>\\n<h2> 几何分布</h2>\\n<p>几何分布(geometric distribution)指反复进行伯努利试验, 直到1次成功为止的实验次数所服从的概率分布. 几何分布在第一次成功之前, 有可能连续失败, 所以试验成功次数是不小于1的整数.\\n如果你需要知道尝试多次能取得第一次成功的概率，则需要几何分布。</p>\\n<p>几何分布记为:</p>\\n<p class=\\"katex-block\\"><span class=\\"katex-display\\"><span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\" display=\\"block\\"><semantics><mrow><mi>f</mi><mo stretchy=\\"false\\">(</mo><mi>x</mi><mo stretchy=\\"false\\">)</mo><mo>=</mo><mrow><mo fence=\\"true\\">{</mo><mtable rowspacing=\\"0.36em\\" columnalign=\\"left left\\" columnspacing=\\"1em\\"><mtr><mtd><mstyle scriptlevel=\\"0\\" displaystyle=\\"false\\"><mrow><mi>p</mi><mo stretchy=\\"false\\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><msup><mo stretchy=\\"false\\">)</mo><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow></mstyle></mtd><mtd><mstyle scriptlevel=\\"0\\" displaystyle=\\"false\\"><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\\"false\\">(</mo><mn>1</mn><mo separator=\\"true\\">,</mo><mn>2</mn><mo separator=\\"true\\">,</mo><mn>3</mn><mo separator=\\"true\\">,</mo><mi mathvariant=\\"normal\\">.</mi><mi mathvariant=\\"normal\\">.</mi><mo separator=\\"true\\">,</mo><mi>n</mi><mo stretchy=\\"false\\">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel=\\"0\\" displaystyle=\\"false\\"><mn>0</mn></mstyle></mtd><mtd><mstyle scriptlevel=\\"0\\" displaystyle=\\"false\\"><mrow><mi>o</mi><mi>t</mi><mi>h</mi><mi>e</mi><mi>r</mi><mi>w</mi><mi>i</mi><mi>s</mi><mi>e</mi></mrow></mstyle></mtd></mtr></mtable></mrow></mrow><annotation encoding=\\"application/x-tex\\">\\nf(x) =\\n\\\\begin{cases}\\n    p(1-p)^{x-1} &amp; x \\\\in (1,2,3,..,n) \\\\\\\\\\n    0 &amp; otherwise\\n\\\\end{cases}\\n</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.10764em;\\">f</span><span class=\\"mopen\\">(</span><span class=\\"mord mathnormal\\">x</span><span class=\\"mclose\\">)</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:3em;vertical-align:-1.25em;\\"></span><span class=\\"minner\\"><span class=\\"mopen delimcenter\\" style=\\"top:0em;\\"><span class=\\"delimsizing size4\\">{</span></span><span class=\\"mord\\"><span class=\\"mtable\\"><span class=\\"col-align-l\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.69em;\\"><span style=\\"top:-3.69em;\\"><span class=\\"pstrut\\" style=\\"height:3.008em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">p</span><span class=\\"mopen\\">(</span><span class=\\"mord\\">1</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">−</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mord mathnormal\\">p</span><span class=\\"mclose\\"><span class=\\"mclose\\">)</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8141em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\">x</span><span class=\\"mbin mtight\\">−</span><span class=\\"mord mtight\\">1</span></span></span></span></span></span></span></span></span></span></span><span style=\\"top:-2.25em;\\"><span class=\\"pstrut\\" style=\\"height:3.008em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">0</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.19em;\\"><span></span></span></span></span></span><span class=\\"arraycolsep\\" style=\\"width:1em;\\"></span><span class=\\"col-align-l\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.69em;\\"><span style=\\"top:-3.69em;\\"><span class=\\"pstrut\\" style=\\"height:3.008em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">x</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">∈</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mopen\\">(</span><span class=\\"mord\\">1</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\">2</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\">3</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\">..</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord mathnormal\\">n</span><span class=\\"mclose\\">)</span></span></span><span style=\\"top:-2.25em;\\"><span class=\\"pstrut\\" style=\\"height:3.008em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">o</span><span class=\\"mord mathnormal\\">t</span><span class=\\"mord mathnormal\\">h</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.02778em;\\">er</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.02691em;\\">w</span><span class=\\"mord mathnormal\\">i</span><span class=\\"mord mathnormal\\">se</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.19em;\\"><span></span></span></span></span></span></span></span><span class=\\"mclose nulldelimiter\\"></span></span></span></span></span></span></p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{s as data};
