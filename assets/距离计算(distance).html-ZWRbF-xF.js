const s=JSON.parse('{"key":"v-2c54ba02","path":"/1%E6%95%B0%E6%8D%AE%E6%8C%96%E6%8E%98/1%E4%BB%A3%E6%95%B0/%E8%B7%9D%E7%A6%BB%E8%AE%A1%E7%AE%97(distance).html","title":"距离计算","lang":"zh-CN","frontmatter":{"description":"距离计算 1.闵可夫斯基距离(Minkowski Distance) 闵氏距离不是一种距离，而是一组距离的定义。 定义 两个n维变量A(x11,x12,...,x1n)A(x_{11},x_{12},...,x_{1n})A(x11​,x12​,...,x1n​)与B(x21,x22,...,x2n)B(x_{21},x_{22},...,x_{2n})B(x21​,x22​,...,x2n​):","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/1%E6%95%B0%E6%8D%AE%E6%8C%96%E6%8E%98/1%E4%BB%A3%E6%95%B0/%E8%B7%9D%E7%A6%BB%E8%AE%A1%E7%AE%97(distance).html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"距离计算"}],["meta",{"property":"og:description","content":"距离计算 1.闵可夫斯基距离(Minkowski Distance) 闵氏距离不是一种距离，而是一组距离的定义。 定义 两个n维变量A(x11,x12,...,x1n)A(x_{11},x_{12},...,x_{1n})A(x11​,x12​,...,x1n​)与B(x21,x22,...,x2n)B(x_{21},x_{22},...,x_{2n})B(x21​,x22​,...,x2n​):"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"距离计算\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1.闵可夫斯基距离(Minkowski Distance)","slug":"_1-闵可夫斯基距离-minkowski-distance","link":"#_1-闵可夫斯基距离-minkowski-distance","children":[{"level":3,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":3,"title":"缺点","slug":"缺点","link":"#缺点","children":[]},{"level":3,"title":"实现","slug":"实现","link":"#实现","children":[]}]},{"level":2,"title":"2.欧氏距离(Euclidean Distance)","slug":"_2-欧氏距离-euclidean-distance","link":"#_2-欧氏距离-euclidean-distance","children":[{"level":3,"title":"定义","slug":"定义-1","link":"#定义-1","children":[]},{"level":3,"title":"实现","slug":"实现-1","link":"#实现-1","children":[]},{"level":3,"title":"标准化欧式距离","slug":"标准化欧式距离","link":"#标准化欧式距离","children":[]}]},{"level":2,"title":"Manhattan Distance(曼哈顿距离)","slug":"manhattan-distance-曼哈顿距离","link":"#manhattan-distance-曼哈顿距离","children":[{"level":3,"title":"实现","slug":"实现-2","link":"#实现-2","children":[]}]},{"level":2,"title":"Chebyshev Distance(切比雪夫距离)","slug":"chebyshev-distance-切比雪夫距离","link":"#chebyshev-distance-切比雪夫距离","children":[{"level":3,"title":"实现","slug":"实现-3","link":"#实现-3","children":[]}]},{"level":2,"title":"Mahalanobis Distance(马氏距离)","slug":"mahalanobis-distance-马氏距离","link":"#mahalanobis-distance-马氏距离","children":[{"level":3,"title":"python计算Mahalonobis Distance","slug":"python计算mahalonobis-distance","link":"#python计算mahalonobis-distance","children":[]},{"level":3,"title":"应用","slug":"应用","link":"#应用","children":[]}]},{"level":2,"title":"Cosine(夹角余弦)","slug":"cosine-夹角余弦","link":"#cosine-夹角余弦","children":[{"level":3,"title":"应用","slug":"应用-1","link":"#应用-1","children":[]}]},{"level":2,"title":"Edit Distance(编辑距离)","slug":"edit-distance-编辑距离","link":"#edit-distance-编辑距离","children":[{"level":3,"title":"应用","slug":"应用-2","link":"#应用-2","children":[]}]},{"level":2,"title":"夹角余弦与欧式距离区别","slug":"夹角余弦与欧式距离区别","link":"#夹角余弦与欧式距离区别","children":[]}],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":7.96,"words":2387},"filePathRelative":"1数据挖掘/1代数/距离计算(distance).md","localizedDate":"2025年2月24日","excerpt":"<h1> 距离计算</h1>\\n<h2> 1.闵可夫斯基距离(Minkowski Distance)</h2>\\n<p>闵氏距离不是一种距离，而是一组距离的定义。</p>\\n<h3> 定义</h3>\\n<p>两个n维变量<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>A</mi><mo stretchy=\\"false\\">(</mo><msub><mi>x</mi><mn>11</mn></msub><mo separator=\\"true\\">,</mo><msub><mi>x</mi><mn>12</mn></msub><mo separator=\\"true\\">,</mo><mi mathvariant=\\"normal\\">.</mi><mi mathvariant=\\"normal\\">.</mi><mi mathvariant=\\"normal\\">.</mi><mo separator=\\"true\\">,</mo><msub><mi>x</mi><mrow><mn>1</mn><mi>n</mi></mrow></msub><mo stretchy=\\"false\\">)</mo></mrow><annotation encoding=\\"application/x-tex\\">A(x_{11},x_{12},...,x_{1n})</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\">A</span><span class=\\"mopen\\">(</span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">x</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">11</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">x</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">12</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\">...</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">x</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">1</span><span class=\\"mord mathnormal mtight\\">n</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mclose\\">)</span></span></span></span>与<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>B</mi><mo stretchy=\\"false\\">(</mo><msub><mi>x</mi><mn>21</mn></msub><mo separator=\\"true\\">,</mo><msub><mi>x</mi><mn>22</mn></msub><mo separator=\\"true\\">,</mo><mi mathvariant=\\"normal\\">.</mi><mi mathvariant=\\"normal\\">.</mi><mi mathvariant=\\"normal\\">.</mi><mo separator=\\"true\\">,</mo><msub><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo stretchy=\\"false\\">)</mo></mrow><annotation encoding=\\"application/x-tex\\">B(x_{21},x_{22},...,x_{2n})</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05017em;\\">B</span><span class=\\"mopen\\">(</span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">x</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">21</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">x</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">22</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\">...</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">x</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">2</span><span class=\\"mord mathnormal mtight\\">n</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mclose\\">)</span></span></span></span>:</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{s as data};
