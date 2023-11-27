const s=JSON.parse('{"key":"v-a9d155ca","path":"/%E6%95%B0%E5%AD%A6/%E6%A6%82%E7%8E%87%E8%AE%BA/%E7%A6%BB%E6%95%A3%E4%B8%80%E7%BB%B4%E5%92%8C%E4%BA%8C%E7%BB%B4/%E4%B8%80%E7%BB%B4%E9%9A%8F%E6%9C%BA%E5%8F%98%E9%87%8F.html","title":"一维随机变量","lang":"zh-CN","frontmatter":{"description":"一维随机变量 概率质量函数 定义 在离散情况下, 随机变量XXX的可取值为[x1,x2,...][x_1,x_2,...][x1​,x2​,...], 则XXX取xkx_kxk​的概率可以定义为:","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E5%AD%A6/%E6%A6%82%E7%8E%87%E8%AE%BA/%E7%A6%BB%E6%95%A3%E4%B8%80%E7%BB%B4%E5%92%8C%E4%BA%8C%E7%BB%B4/%E4%B8%80%E7%BB%B4%E9%9A%8F%E6%9C%BA%E5%8F%98%E9%87%8F.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"一维随机变量"}],["meta",{"property":"og:description","content":"一维随机变量 概率质量函数 定义 在离散情况下, 随机变量XXX的可取值为[x1,x2,...][x_1,x_2,...][x1​,x2​,...], 则XXX取xkx_kxk​的概率可以定义为:"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:31:52.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"一维随机变量"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:31:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一维随机变量\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2023-11-27T13:31:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"概率质量函数","slug":"概率质量函数","link":"#概率质量函数","children":[{"level":3,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":3,"title":"使用python实现概率质量函数","slug":"使用python实现概率质量函数","link":"#使用python实现概率质量函数","children":[]}]},{"level":2,"title":"概率质量函数的性质","slug":"概率质量函数的性质","link":"#概率质量函数的性质","children":[{"level":3,"title":"定义","slug":"定义-1","link":"#定义-1","children":[]},{"level":3,"title":"使用python验证这两个性质","slug":"使用python验证这两个性质","link":"#使用python验证这两个性质","children":[]}]},{"level":2,"title":"累积分布函数","slug":"累积分布函数","link":"#累积分布函数","children":[{"level":3,"title":"定义","slug":"定义-2","link":"#定义-2","children":[]},{"level":3,"title":"使用python实现累积分布函数","slug":"使用python实现累积分布函数","link":"#使用python实现累积分布函数","children":[]}]},{"level":2,"title":"随机变量的线性","slug":"随机变量的线性","link":"#随机变量的线性","children":[]},{"level":2,"title":"一维离散型随机变量的数值指标","slug":"一维离散型随机变量的数值指标","link":"#一维离散型随机变量的数值指标","children":[{"level":3,"title":"期望值","slug":"期望值","link":"#期望值","children":[]},{"level":3,"title":"方差","slug":"方差","link":"#方差","children":[]}]}],"git":{"createdTime":1701091021000,"updatedTime":1701091912000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":2}]},"readingTime":{"minutes":6.75,"words":2025},"filePathRelative":"数学/概率论/离散一维和二维/一维随机变量.md","localizedDate":"2023年11月27日","excerpt":"<h1> 一维随机变量</h1>\\n<h2> 概率质量函数</h2>\\n<h3> 定义</h3>\\n<p>在离散情况下, 随机变量<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>X</mi></mrow><annotation encoding=\\"application/x-tex\\">X</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07847em;\\">X</span></span></span></span>的可取值为<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mo stretchy=\\"false\\">[</mo><msub><mi>x</mi><mn>1</mn></msub><mo separator=\\"true\\">,</mo><msub><mi>x</mi><mn>2</mn></msub><mo separator=\\"true\\">,</mo><mi mathvariant=\\"normal\\">.</mi><mi mathvariant=\\"normal\\">.</mi><mi mathvariant=\\"normal\\">.</mi><mo stretchy=\\"false\\">]</mo></mrow><annotation encoding=\\"application/x-tex\\">[x_1,x_2,...]</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mopen\\">[</span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">x</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">1</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">x</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\">...</span><span class=\\"mclose\\">]</span></span></span></span>, 则<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>X</mi></mrow><annotation encoding=\\"application/x-tex\\">X</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07847em;\\">X</span></span></span></span>取<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msub><mi>x</mi><mi>k</mi></msub></mrow><annotation encoding=\\"application/x-tex\\">x_k</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.5806em;vertical-align:-0.15em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">x</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3361em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.03148em;\\">k</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span></span></span></span>的概率可以定义为:</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{s as data};
