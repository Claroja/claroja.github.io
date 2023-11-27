const a=JSON.parse('{"key":"v-64a9be35","path":"/%E6%95%B0%E5%AD%A6/%E6%A6%82%E7%8E%87%E8%AE%BA/%E7%A6%BB%E6%95%A3%E9%9A%8F%E6%9C%BA%E5%8F%98%E9%87%8F/%E9%9A%8F%E6%9C%BA%E5%8F%98%E9%87%8F.html","title":"随机变量","lang":"zh-CN","frontmatter":{"description":"随机变量 直观理解 随机变量的定义和计算机的变量定义基本相同, 就是使用一个变量表示某个值. 但是在概率论中, 随机变量只能表示某一相同类的值, 比如掷骰子的点数[1,2,3,4,5,6][1,2,3,4,5,6][1,2,3,4,5,6], 水果的种类[苹果,香蕉,梨][苹果,香蕉,梨][苹果,香蕉,梨]等. 举例, 投掷一公平骰子1次，则样本空间Ω\\\\OmegaΩ为:","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E5%AD%A6/%E6%A6%82%E7%8E%87%E8%AE%BA/%E7%A6%BB%E6%95%A3%E9%9A%8F%E6%9C%BA%E5%8F%98%E9%87%8F/%E9%9A%8F%E6%9C%BA%E5%8F%98%E9%87%8F.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"随机变量"}],["meta",{"property":"og:description","content":"随机变量 直观理解 随机变量的定义和计算机的变量定义基本相同, 就是使用一个变量表示某个值. 但是在概率论中, 随机变量只能表示某一相同类的值, 比如掷骰子的点数[1,2,3,4,5,6][1,2,3,4,5,6][1,2,3,4,5,6], 水果的种类[苹果,香蕉,梨][苹果,香蕉,梨][苹果,香蕉,梨]等. 举例, 投掷一公平骰子1次，则样本空间Ω\\\\OmegaΩ为:"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:31:52.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"随机变量"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:31:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"随机变量\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2023-11-27T13:31:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"直观理解","slug":"直观理解","link":"#直观理解","children":[]},{"level":2,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":2,"title":"离散与连续","slug":"离散与连续","link":"#离散与连续","children":[]}],"git":{"createdTime":1701091021000,"updatedTime":1701091912000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":2}]},"readingTime":{"minutes":1.91,"words":573},"filePathRelative":"数学/概率论/离散随机变量/随机变量.md","localizedDate":"2023年11月27日","excerpt":"<h1> 随机变量</h1>\\n<h2> 直观理解</h2>\\n<p>随机变量的定义和计算机的变量定义基本相同, 就是使用一个变量表示某个值. 但是在概率论中, 随机变量只能表示某一相同类的值, 比如掷骰子的点数<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mo stretchy=\\"false\\">[</mo><mn>1</mn><mo separator=\\"true\\">,</mo><mn>2</mn><mo separator=\\"true\\">,</mo><mn>3</mn><mo separator=\\"true\\">,</mo><mn>4</mn><mo separator=\\"true\\">,</mo><mn>5</mn><mo separator=\\"true\\">,</mo><mn>6</mn><mo stretchy=\\"false\\">]</mo></mrow><annotation encoding=\\"application/x-tex\\">[1,2,3,4,5,6]</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mopen\\">[</span><span class=\\"mord\\">1</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\">2</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\">3</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\">4</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\">5</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\">6</span><span class=\\"mclose\\">]</span></span></span></span>, 水果的种类<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mo stretchy=\\"false\\">[</mo><mtext>苹果</mtext><mo separator=\\"true\\">,</mo><mtext>香蕉</mtext><mo separator=\\"true\\">,</mo><mtext>梨</mtext><mo stretchy=\\"false\\">]</mo></mrow><annotation encoding=\\"application/x-tex\\">[苹果,香蕉,梨]</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mopen\\">[</span><span class=\\"mord cjk_fallback\\">苹果</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord cjk_fallback\\">香蕉</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord cjk_fallback\\">梨</span><span class=\\"mclose\\">]</span></span></span></span>等.\\n举例, 投掷一公平骰子1次，则样本空间<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi mathvariant=\\"normal\\">Ω</mi></mrow><annotation encoding=\\"application/x-tex\\">\\\\Omega</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord\\">Ω</span></span></span></span>为:</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{a as data};
