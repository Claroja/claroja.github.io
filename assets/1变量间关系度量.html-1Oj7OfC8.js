const a=JSON.parse('{"key":"v-809a0e90","path":"/3%E6%95%B0%E5%AD%A6/5_1%E7%BB%9F%E8%AE%A1%E5%AD%A6/11%E4%B8%80%E5%85%83%E7%BA%BF%E6%80%A7%E5%9B%9E%E5%BD%92/1%E5%8F%98%E9%87%8F%E9%97%B4%E5%85%B3%E7%B3%BB%E5%BA%A6%E9%87%8F.html","title":"变量间关系的度量","lang":"zh-CN","frontmatter":{"description":"变量间关系的度量 设有两个变量xxx和yyy,变量yyy随变量xxx一起变化，并完全依赖于xxx,当变量xxx取某个数值时，yyy依据确定的关系取相应的值，则称yyy是xxx的函数，记为y=f(x)y=f(x)y=f(x),其中xxx称为自变量，yyy称为因变量。","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/3%E6%95%B0%E5%AD%A6/5_1%E7%BB%9F%E8%AE%A1%E5%AD%A6/11%E4%B8%80%E5%85%83%E7%BA%BF%E6%80%A7%E5%9B%9E%E5%BD%92/1%E5%8F%98%E9%87%8F%E9%97%B4%E5%85%B3%E7%B3%BB%E5%BA%A6%E9%87%8F.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"变量间关系的度量"}],["meta",{"property":"og:description","content":"变量间关系的度量 设有两个变量xxx和yyy,变量yyy随变量xxx一起变化，并完全依赖于xxx,当变量xxx取某个数值时，yyy依据确定的关系取相应的值，则称yyy是xxx的函数，记为y=f(x)y=f(x)y=f(x),其中xxx称为自变量，yyy称为因变量。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"变量间关系的度量"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"变量间关系的度量\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"相关关系的描述与测度","slug":"相关关系的描述与测度","link":"#相关关系的描述与测度","children":[{"level":3,"title":"散点图","slug":"散点图","link":"#散点图","children":[]},{"level":3,"title":"相关系数","slug":"相关系数","link":"#相关系数","children":[]},{"level":3,"title":"相关关系的显著性检验","slug":"相关关系的显著性检验","link":"#相关关系的显著性检验","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":5.86,"words":1757},"filePathRelative":"3数学/5_1统计学/11一元线性回归/1变量间关系度量.md","localizedDate":"2025年2月21日","excerpt":"<h1> 变量间关系的度量</h1>\\n<p>设有两个变量<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\\"application/x-tex\\">x</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.4306em;\\"></span><span class=\\"mord mathnormal\\">x</span></span></span></span>和<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>y</mi></mrow><annotation encoding=\\"application/x-tex\\">y</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.625em;vertical-align:-0.1944em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">y</span></span></span></span>,变量<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>y</mi></mrow><annotation encoding=\\"application/x-tex\\">y</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.625em;vertical-align:-0.1944em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">y</span></span></span></span>随变量<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\\"application/x-tex\\">x</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.4306em;\\"></span><span class=\\"mord mathnormal\\">x</span></span></span></span>一起变化，并完全依赖于<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\\"application/x-tex\\">x</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.4306em;\\"></span><span class=\\"mord mathnormal\\">x</span></span></span></span>,当变量<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\\"application/x-tex\\">x</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.4306em;\\"></span><span class=\\"mord mathnormal\\">x</span></span></span></span>取某个数值时，<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>y</mi></mrow><annotation encoding=\\"application/x-tex\\">y</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.625em;vertical-align:-0.1944em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">y</span></span></span></span>依据确定的关系取相应的值，则称<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>y</mi></mrow><annotation encoding=\\"application/x-tex\\">y</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.625em;vertical-align:-0.1944em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">y</span></span></span></span>是<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\\"application/x-tex\\">x</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.4306em;\\"></span><span class=\\"mord mathnormal\\">x</span></span></span></span>的函数，记为<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>y</mi><mo>=</mo><mi>f</mi><mo stretchy=\\"false\\">(</mo><mi>x</mi><mo stretchy=\\"false\\">)</mo></mrow><annotation encoding=\\"application/x-tex\\">y=f(x)</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.625em;vertical-align:-0.1944em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">y</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.10764em;\\">f</span><span class=\\"mopen\\">(</span><span class=\\"mord mathnormal\\">x</span><span class=\\"mclose\\">)</span></span></span></span>,其中<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\\"application/x-tex\\">x</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.4306em;\\"></span><span class=\\"mord mathnormal\\">x</span></span></span></span>称为自变量，<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>y</mi></mrow><annotation encoding=\\"application/x-tex\\">y</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.625em;vertical-align:-0.1944em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">y</span></span></span></span>称为因变量。</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{a as data};
