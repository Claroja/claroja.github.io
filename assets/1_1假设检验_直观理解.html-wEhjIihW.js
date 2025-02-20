const t=JSON.parse('{"key":"v-539ac686","path":"/%E6%95%B0%E5%AD%A6/%E7%BB%9F%E8%AE%A1%E5%AD%A6/8%E5%81%87%E8%AE%BE%E6%A3%80%E9%AA%8C/1_1%E5%81%87%E8%AE%BE%E6%A3%80%E9%AA%8C_%E7%9B%B4%E8%A7%82%E7%90%86%E8%A7%A3.html","title":"假设检验","lang":"zh-CN","frontmatter":{"description":"假设检验 概念 统计假设检验(statistical hypothesis testing)是一种统计学框架, 即建立关于总体参数的两个假设, 利用从样本中计算出的统计量来判断哪一个假设正确. 理解假设检验的入门案例 饼干店老板声称他家的饼干一袋的平均重量(μ\\\\muμ)是500g. 由于是流水线生产, 所以每袋饼干的标准差(σ\\\\sigmaσ)为30g. 所以可得如下的分布:","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E5%AD%A6/%E7%BB%9F%E8%AE%A1%E5%AD%A6/8%E5%81%87%E8%AE%BE%E6%A3%80%E9%AA%8C/1_1%E5%81%87%E8%AE%BE%E6%A3%80%E9%AA%8C_%E7%9B%B4%E8%A7%82%E7%90%86%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"假设检验"}],["meta",{"property":"og:description","content":"假设检验 概念 统计假设检验(statistical hypothesis testing)是一种统计学框架, 即建立关于总体参数的两个假设, 利用从样本中计算出的统计量来判断哪一个假设正确. 理解假设检验的入门案例 饼干店老板声称他家的饼干一袋的平均重量(μ\\\\muμ)是500g. 由于是流水线生产, 所以每袋饼干的标准差(σ\\\\sigmaσ)为30g. 所以可得如下的分布:"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-18T14:02:01.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"假设检验"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-18T14:02:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"假设检验\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2025-02-18T14:02:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":2,"title":"理解假设检验的入门案例","slug":"理解假设检验的入门案例","link":"#理解假设检验的入门案例","children":[{"level":3,"title":"提出假设","slug":"提出假设","link":"#提出假设","children":[]},{"level":3,"title":"推断统计(Inferential Statistics)","slug":"推断统计-inferential-statistics","link":"#推断统计-inferential-statistics","children":[]},{"level":3,"title":"抽样分布","slug":"抽样分布","link":"#抽样分布","children":[]},{"level":3,"title":"验证假设(Testing Hypothesis Statements)","slug":"验证假设-testing-hypothesis-statements","link":"#验证假设-testing-hypothesis-statements","children":[]}]},{"level":2,"title":"python实操的一个案例","slug":"python实操的一个案例","link":"#python实操的一个案例","children":[{"level":3,"title":"统计假设检验的基础","slug":"统计假设检验的基础","link":"#统计假设检验的基础","children":[]},{"level":3,"title":"单侧检验和双侧检验","slug":"单侧检验和双侧检验","link":"#单侧检验和双侧检验","children":[]}]},{"level":2,"title":"一些常见的检验方法","slug":"一些常见的检验方法","link":"#一些常见的检验方法","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1739887321000,"updatedTime":1739887321000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":17.73,"words":5319},"filePathRelative":"数学/统计学/8假设检验/1_1假设检验_直观理解.md","localizedDate":"2025年2月18日","excerpt":"<h1> 假设检验</h1>\\n<h2> 概念</h2>\\n<p><code>统计假设检验(statistical hypothesis testing)</code>是一种统计学框架, 即建立关于总体参数的两个假设, 利用从样本中计算出的统计量来判断哪一个假设正确.</p>\\n<h2> 理解假设检验的入门案例</h2>\\n<p>饼干店老板声称他家的饼干一袋的平均重量(<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>μ</mi></mrow><annotation encoding=\\"application/x-tex\\">\\\\mu</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.625em;vertical-align:-0.1944em;\\"></span><span class=\\"mord mathnormal\\">μ</span></span></span></span>)是500g. 由于是流水线生产, 所以每袋饼干的标准差(<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>σ</mi></mrow><annotation encoding=\\"application/x-tex\\">\\\\sigma</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.4306em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">σ</span></span></span></span>)为30g. 所以可得如下的分布:</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{t as data};
