const s=JSON.parse('{"key":"v-f4c7d2ec","path":"/%E6%95%B0%E5%AD%A6/%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90/%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90_%E7%BA%BF%E6%80%A7%E8%A7%84%E5%88%92.html","title":"线性规划","lang":"zh-CN","frontmatter":{"description":"线性规划 线性规划 （Linear Programming，LP）是研究线性等式或不等式约束条件下求解线性目标函数的极值问题，常用于解决资源分配、生产调度和混合问题。 一般线性规划问题的标准形式为: maxf(x)=∑j=1ncjxjs.t{∑j=1naijxj=bi,xj≥0 max f(x) = \\\\sum_{j=1}^n c_jx_j \\\\\\\\ s.t \\\\begin{cases} \\\\sum_{j=1}^n a{ij}x{j}=b_i, \\\\\\\\ x_j \\\\geq 0 \\\\end{cases} maxf(x)=j=1∑n​cj​xj​s.t{∑j=1n​aijxj=bi​,xj​≥0​","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E5%AD%A6/%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90/%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90_%E7%BA%BF%E6%80%A7%E8%A7%84%E5%88%92.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"线性规划"}],["meta",{"property":"og:description","content":"线性规划 线性规划 （Linear Programming，LP）是研究线性等式或不等式约束条件下求解线性目标函数的极值问题，常用于解决资源分配、生产调度和混合问题。 一般线性规划问题的标准形式为: maxf(x)=∑j=1ncjxjs.t{∑j=1naijxj=bi,xj≥0 max f(x) = \\\\sum_{j=1}^n c_jx_j \\\\\\\\ s.t \\\\begin{cases} \\\\sum_{j=1}^n a{ij}x{j}=b_i, \\\\\\\\ x_j \\\\geq 0 \\\\end{cases} maxf(x)=j=1∑n​cj​xj​s.t{∑j=1n​aijxj=bi​,xj​≥0​"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"线性规划\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"PuLP 求解线性规划问题的步骤","slug":"pulp-求解线性规划问题的步骤","link":"#pulp-求解线性规划问题的步骤","children":[]}],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":2.23,"words":669},"filePathRelative":"数学/数据分析/数据分析_线性规划.md","localizedDate":"2023年11月25日","excerpt":"<h1> 线性规划</h1>\\n<p>线性规划 （Linear Programming，LP）是研究线性等式或不等式约束条件下求解线性目标函数的极值问题，常用于解决资源分配、生产调度和混合问题。\\n一般线性规划问题的标准形式为:</p>\\n<p class=\\"katex-block\\"><span class=\\"katex-display\\"><span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\" display=\\"block\\"><semantics><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>f</mi><mo stretchy=\\"false\\">(</mo><mi>x</mi><mo stretchy=\\"false\\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>c</mi><mi>j</mi></msub><msub><mi>x</mi><mi>j</mi></msub><mspace linebreak=\\"newline\\"></mspace><mi>s</mi><mi mathvariant=\\"normal\\">.</mi><mi>t</mi><mrow><mo fence=\\"true\\">{</mo><mtable rowspacing=\\"0.36em\\" columnalign=\\"left left\\" columnspacing=\\"1em\\"><mtr><mtd><mstyle scriptlevel=\\"0\\" displaystyle=\\"false\\"><mrow><msubsup><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></msubsup><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow><mi>x</mi><mi>j</mi><mo>=</mo><msub><mi>b</mi><mi>i</mi></msub><mo separator=\\"true\\">,</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel=\\"0\\" displaystyle=\\"false\\"><mrow><msub><mi>x</mi><mi>j</mi></msub><mo>≥</mo><mn>0</mn></mrow></mstyle></mtd></mtr></mtable></mrow></mrow><annotation encoding=\\"application/x-tex\\">\\nmax f(x) = \\\\sum_{j=1}^n c_jx_j \\\\\\\\\\ns.t\\n\\\\begin{cases}\\n\\\\sum_{j=1}^n a{ij}x{j}=b_i, \\\\\\\\\\nx_j \\\\geq 0\\n\\\\end{cases}\\n</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\">ma</span><span class=\\"mord mathnormal\\">x</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.10764em;\\">f</span><span class=\\"mopen\\">(</span><span class=\\"mord mathnormal\\">x</span><span class=\\"mclose\\">)</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:3.0652em;vertical-align:-1.4138em;\\"></span><span class=\\"mop op-limits\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.6514em;\\"><span style=\\"top:-1.8723em;margin-left:0em;\\"><span class=\\"pstrut\\" style=\\"height:3.05em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.05724em;\\">j</span><span class=\\"mrel mtight\\">=</span><span class=\\"mord mtight\\">1</span></span></span></span><span style=\\"top:-3.05em;\\"><span class=\\"pstrut\\" style=\\"height:3.05em;\\"></span><span><span class=\\"mop op-symbol large-op\\">∑</span></span></span><span style=\\"top:-4.3em;margin-left:0em;\\"><span class=\\"pstrut\\" style=\\"height:3.05em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">n</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.4138em;\\"><span></span></span></span></span></span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">c</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3117em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.05724em;\\">j</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.2861em;\\"><span></span></span></span></span></span></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">x</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3117em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.05724em;\\">j</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.2861em;\\"><span></span></span></span></span></span></span></span><span class=\\"mspace newline\\"></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:3em;vertical-align:-1.25em;\\"></span><span class=\\"mord mathnormal\\">s</span><span class=\\"mord\\">.</span><span class=\\"mord mathnormal\\">t</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"minner\\"><span class=\\"mopen delimcenter\\" style=\\"top:0em;\\"><span class=\\"delimsizing size4\\">{</span></span><span class=\\"mord\\"><span class=\\"mtable\\"><span class=\\"col-align-l\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.6919em;\\"><span style=\\"top:-3.6919em;\\"><span class=\\"pstrut\\" style=\\"height:3.008em;\\"></span><span class=\\"mord\\"><span class=\\"mop\\"><span class=\\"mop op-symbol small-op\\" style=\\"position:relative;top:0em;\\">∑</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8043em;\\"><span style=\\"top:-2.4003em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.05724em;\\">j</span><span class=\\"mrel mtight\\">=</span><span class=\\"mord mtight\\">1</span></span></span></span><span style=\\"top:-3.2029em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">n</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.4358em;\\"><span></span></span></span></span></span></span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord mathnormal\\">a</span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05724em;\\">ij</span></span><span class=\\"mord mathnormal\\">x</span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05724em;\\">j</span></span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">b</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3117em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">i</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mpunct\\">,</span></span></span><span style=\\"top:-2.2481em;\\"><span class=\\"pstrut\\" style=\\"height:3.008em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\"><span class=\\"mord mathnormal\\">x</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3117em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.05724em;\\">j</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.2861em;\\"><span></span></span></span></span></span></span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">≥</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mord\\">0</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.1919em;\\"><span></span></span></span></span></span></span></span><span class=\\"mclose nulldelimiter\\"></span></span></span></span></span></span></p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{s as data};
