const s=JSON.parse('{"key":"v-e9bc483e","path":"/%E6%95%B0%E5%AD%A6/%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90/%E4%BA%8C%E6%AC%A1%E8%A7%84%E5%88%92.html","title":"二次规划","lang":"zh-CN","frontmatter":{"description":"二次规划 求解方法 拉格朗日法 内点法 椭球法 python 标准形式: min12xTPx+qTxs.t.Gx≤hAx=b min \\\\frac{1}{2} x^T P x + q^T x \\\\\\\\ s.t. Gx \\\\leq h \\\\\\\\ Ax = b min21​xTPx+qTxs.t.Gx≤hAx=b","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E5%AD%A6/%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90/%E4%BA%8C%E6%AC%A1%E8%A7%84%E5%88%92.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"二次规划"}],["meta",{"property":"og:description","content":"二次规划 求解方法 拉格朗日法 内点法 椭球法 python 标准形式: min12xTPx+qTxs.t.Gx≤hAx=b min \\\\frac{1}{2} x^T P x + q^T x \\\\\\\\ s.t. Gx \\\\leq h \\\\\\\\ Ax = b min21​xTPx+qTxs.t.Gx≤hAx=b"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:17:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:17:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二次规划\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-27T13:17:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"求解方法","slug":"求解方法","link":"#求解方法","children":[{"level":3,"title":"拉格朗日法","slug":"拉格朗日法","link":"#拉格朗日法","children":[]},{"level":3,"title":"内点法","slug":"内点法","link":"#内点法","children":[]},{"level":3,"title":"椭球法","slug":"椭球法","link":"#椭球法","children":[]}]},{"level":2,"title":"python","slug":"python","link":"#python","children":[]}],"git":{"createdTime":1701091021000,"updatedTime":1701091021000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.86,"words":259},"filePathRelative":"数学/数据分析/二次规划.md","localizedDate":"2023年11月27日","excerpt":"<h1> 二次规划</h1>\\n<h2> 求解方法</h2>\\n<h3> 拉格朗日法</h3>\\n<h3> 内点法</h3>\\n<h3> 椭球法</h3>\\n<h2> python</h2>\\n<p>标准形式:</p>\\n<p class=\\"katex-block\\"><span class=\\"katex-display\\"><span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\" display=\\"block\\"><semantics><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>x</mi><mi>T</mi></msup><mi>P</mi><mi>x</mi><mo>+</mo><msup><mi>q</mi><mi>T</mi></msup><mi>x</mi><mspace linebreak=\\"newline\\"></mspace><mi>s</mi><mi mathvariant=\\"normal\\">.</mi><mi>t</mi><mi mathvariant=\\"normal\\">.</mi><mi>G</mi><mi>x</mi><mo>≤</mo><mi>h</mi><mspace linebreak=\\"newline\\"></mspace><mi>A</mi><mi>x</mi><mo>=</mo><mi>b</mi></mrow><annotation encoding=\\"application/x-tex\\">\\nmin \\\\frac{1}{2} x^T P x + q^T x \\\\\\\\\\ns.t. Gx \\\\leq h \\\\\\\\\\nAx = b\\n</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:2.0074em;vertical-align:-0.686em;\\"></span><span class=\\"mord mathnormal\\">min</span><span class=\\"mord\\"><span class=\\"mopen nulldelimiter\\"></span><span class=\\"mfrac\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.3214em;\\"><span style=\\"top:-2.314em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">2</span></span></span><span style=\\"top:-3.23em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"frac-line\\" style=\\"border-bottom-width:0.04em;\\"></span></span><span style=\\"top:-3.677em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">1</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.686em;\\"><span></span></span></span></span></span><span class=\\"mclose nulldelimiter\\"></span></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">x</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8913em;\\"><span style=\\"top:-3.113em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.13889em;\\">T</span></span></span></span></span></span></span></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.13889em;\\">P</span><span class=\\"mord mathnormal\\">x</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">+</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.0858em;vertical-align:-0.1944em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">q</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8913em;\\"><span style=\\"top:-3.113em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.13889em;\\">T</span></span></span></span></span></span></span></span><span class=\\"mord mathnormal\\">x</span></span><span class=\\"mspace newline\\"></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8193em;vertical-align:-0.136em;\\"></span><span class=\\"mord mathnormal\\">s</span><span class=\\"mord\\">.</span><span class=\\"mord mathnormal\\">t</span><span class=\\"mord\\">.</span><span class=\\"mord mathnormal\\">G</span><span class=\\"mord mathnormal\\">x</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">≤</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6944em;\\"></span><span class=\\"mord mathnormal\\">h</span></span><span class=\\"mspace newline\\"></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\">A</span><span class=\\"mord mathnormal\\">x</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6944em;\\"></span><span class=\\"mord mathnormal\\">b</span></span></span></span></span></p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{s as data};
