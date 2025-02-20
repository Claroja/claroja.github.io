const s=JSON.parse('{"key":"v-eb64b00a","path":"/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/2_2%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0/optimize/batchnorm.html","title":"batchnorm","lang":"zh-CN","frontmatter":{"description":"batchnorm 可以通过设置合适的权重值, 增加激活值分布的广度. 通过Batch Normalization也可以强制性地调整激活值的分布.它的主要作用是: 可以加快学习速度 不那么依赖初始值 抑制过拟合 Batch Norm是放在Affine层之后. 以mini-batch为单位, 按mini-batch进行正规化. 就是进行数据分布的均值0, 方差为1的正规化. μB←1m∑i=1mxi \\\\mu_B \\\\leftarrow \\\\frac{1}{m}\\\\sum_{i=1}^m x_i μB​←m1​i=1∑m​xi​","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/2_2%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0/optimize/batchnorm.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"batchnorm"}],["meta",{"property":"og:description","content":"batchnorm 可以通过设置合适的权重值, 增加激活值分布的广度. 通过Batch Normalization也可以强制性地调整激活值的分布.它的主要作用是: 可以加快学习速度 不那么依赖初始值 抑制过拟合 Batch Norm是放在Affine层之后. 以mini-batch为单位, 按mini-batch进行正规化. 就是进行数据分布的均值0, 方差为1的正规化. μB←1m∑i=1mxi \\\\mu_B \\\\leftarrow \\\\frac{1}{m}\\\\sum_{i=1}^m x_i μB​←m1​i=1∑m​xi​"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-18T14:02:01.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"batchnorm"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-18T14:02:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"batchnorm\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2025-02-18T14:02:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1739887321000,"updatedTime":1739887321000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.9,"words":269},"filePathRelative":"机器学习/2_2深度学习/optimize/batchnorm.md","localizedDate":"2025年2月18日","excerpt":"<h1> batchnorm</h1>\\n<p>可以通过设置合适的权重值, 增加激活值分布的广度. 通过Batch Normalization也可以强制性地调整激活值的分布.它的主要作用是:</p>\\n<ul>\\n<li>可以加快学习速度</li>\\n<li>不那么依赖初始值</li>\\n<li>抑制过拟合\\nBatch Norm是放在Affine层之后. 以mini-batch为单位, 按mini-batch进行正规化. 就是进行数据分布的均值0, 方差为1的正规化.</li>\\n</ul>\\n<p class=\\"katex-block\\"><span class=\\"katex-display\\"><span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\" display=\\"block\\"><semantics><mrow><msub><mi>μ</mi><mi>B</mi></msub><mo>←</mo><mfrac><mn>1</mn><mi>m</mi></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>m</mi></munderover><msub><mi>x</mi><mi>i</mi></msub></mrow><annotation encoding=\\"application/x-tex\\">\\n\\\\mu_B \\\\leftarrow \\\\frac{1}{m}\\\\sum_{i=1}^m x_i\\n</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.625em;vertical-align:-0.1944em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">μ</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3283em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.05017em;\\">B</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">←</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:2.9291em;vertical-align:-1.2777em;\\"></span><span class=\\"mord\\"><span class=\\"mopen nulldelimiter\\"></span><span class=\\"mfrac\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.3214em;\\"><span style=\\"top:-2.314em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">m</span></span></span><span style=\\"top:-3.23em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"frac-line\\" style=\\"border-bottom-width:0.04em;\\"></span></span><span style=\\"top:-3.677em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">1</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.686em;\\"><span></span></span></span></span></span><span class=\\"mclose nulldelimiter\\"></span></span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mop op-limits\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.6514em;\\"><span style=\\"top:-1.8723em;margin-left:0em;\\"><span class=\\"pstrut\\" style=\\"height:3.05em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\">i</span><span class=\\"mrel mtight\\">=</span><span class=\\"mord mtight\\">1</span></span></span></span><span style=\\"top:-3.05em;\\"><span class=\\"pstrut\\" style=\\"height:3.05em;\\"></span><span><span class=\\"mop op-symbol large-op\\">∑</span></span></span><span style=\\"top:-4.3em;margin-left:0em;\\"><span class=\\"pstrut\\" style=\\"height:3.05em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">m</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.2777em;\\"><span></span></span></span></span></span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">x</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3117em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">i</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span></span></span></span></span></p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{s as data};
