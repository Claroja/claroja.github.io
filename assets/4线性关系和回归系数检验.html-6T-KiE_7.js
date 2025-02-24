const s=JSON.parse('{"key":"v-453f6463","path":"/1%E6%95%B0%E6%8D%AE%E6%8C%96%E6%8E%98/5%E7%BB%9F%E8%AE%A1%E5%AD%A6/11%E4%B8%80%E5%85%83%E7%BA%BF%E6%80%A7%E5%9B%9E%E5%BD%92/4%E7%BA%BF%E6%80%A7%E5%85%B3%E7%B3%BB%E5%92%8C%E5%9B%9E%E5%BD%92%E7%B3%BB%E6%95%B0%E6%A3%80%E9%AA%8C.html","title":"线性关系和回归系数检验","lang":"zh-CN","frontmatter":{"description":"线性关系和回归系数检验 建立了估计方程后，还不能马上进行估计或预测，因为该估计方程是根据样本数据得出的，它是否真实地反映了变量x和y之间的关系，需要通过检验来证实。 根据样本数据拟合回归方程时，实际上已经假定变量x与y之间存在线性关系，即y=β0+β1x+ϵy=\\\\beta_0 + \\\\beta_1x + \\\\epsilony=β0​+β1​x+ϵ,并假定误差项ϵ\\\\epsilonϵ是一个服从正态分布的随机变量，且对不同的xxx具有相同的方差。但这些假设是否成立，需要通过检验来证实。","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/1%E6%95%B0%E6%8D%AE%E6%8C%96%E6%8E%98/5%E7%BB%9F%E8%AE%A1%E5%AD%A6/11%E4%B8%80%E5%85%83%E7%BA%BF%E6%80%A7%E5%9B%9E%E5%BD%92/4%E7%BA%BF%E6%80%A7%E5%85%B3%E7%B3%BB%E5%92%8C%E5%9B%9E%E5%BD%92%E7%B3%BB%E6%95%B0%E6%A3%80%E9%AA%8C.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"线性关系和回归系数检验"}],["meta",{"property":"og:description","content":"线性关系和回归系数检验 建立了估计方程后，还不能马上进行估计或预测，因为该估计方程是根据样本数据得出的，它是否真实地反映了变量x和y之间的关系，需要通过检验来证实。 根据样本数据拟合回归方程时，实际上已经假定变量x与y之间存在线性关系，即y=β0+β1x+ϵy=\\\\beta_0 + \\\\beta_1x + \\\\epsilony=β0​+β1​x+ϵ,并假定误差项ϵ\\\\epsilonϵ是一个服从正态分布的随机变量，且对不同的xxx具有相同的方差。但这些假设是否成立，需要通过检验来证实。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"线性关系和回归系数检验\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"线性关系的检验","slug":"线性关系的检验","link":"#线性关系的检验","children":[]},{"level":2,"title":"回归系数的检验","slug":"回归系数的检验","link":"#回归系数的检验","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":4.61,"words":1383},"filePathRelative":"1数据挖掘/5统计学/11一元线性回归/4线性关系和回归系数检验.md","localizedDate":"2025年2月24日","excerpt":"<h1> 线性关系和回归系数检验</h1>\\n<p>建立了估计方程后，还不能马上进行估计或预测，因为该估计方程是根据样本数据得出的，它是否真实地反映了变量x和y之间的关系，需要通过检验来证实。</p>\\n<p>根据样本数据拟合回归方程时，实际上已经假定变量x与y之间存在线性关系，即<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>y</mi><mo>=</mo><msub><mi>β</mi><mn>0</mn></msub><mo>+</mo><msub><mi>β</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><mi>ϵ</mi></mrow><annotation encoding=\\"application/x-tex\\">y=\\\\beta_0 + \\\\beta_1x + \\\\epsilon</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.625em;vertical-align:-0.1944em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">y</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8889em;vertical-align:-0.1944em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05278em;\\">β</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:-0.0528em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">0</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">+</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8889em;vertical-align:-0.1944em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05278em;\\">β</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:-0.0528em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">1</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mord mathnormal\\">x</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">+</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.4306em;\\"></span><span class=\\"mord mathnormal\\">ϵ</span></span></span></span>,并假定误差项<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>ϵ</mi></mrow><annotation encoding=\\"application/x-tex\\">\\\\epsilon</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.4306em;\\"></span><span class=\\"mord mathnormal\\">ϵ</span></span></span></span>是一个服从正态分布的随机变量，且对不同的<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\\"application/x-tex\\">x</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.4306em;\\"></span><span class=\\"mord mathnormal\\">x</span></span></span></span>具有相同的方差。但这些假设是否成立，需要通过检验来证实。</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{s as data};
