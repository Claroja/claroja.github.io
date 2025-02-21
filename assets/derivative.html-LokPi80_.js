const s=JSON.parse('{"key":"v-01beff2c","path":"/3%E6%95%B0%E5%AD%A6/2%E5%BE%AE%E7%A7%AF%E5%88%86/derivative.html","title":"annotate","lang":"zh-CN","frontmatter":{"description":"annotate 导数就是表示某个瞬间的变化量: df(x)dx=lim⁡h−&gt;0f(x+h)−f(x)h\\\\frac{df(x)}{dx}=\\\\lim\\\\limits_{h-&gt;0}\\\\frac{f(x+h)-f(x)}{h}dxdf(x)​=h−&gt;0lim​hf(x+h)−f(x)​ df(x)dx\\\\frac{df(x)}{dx}dxdf(x)​表示f(x)f(x)f(x)关于xxx的导数, 即f(x)f(x)f(x)相对于xxx的变化程度, x的微小变化将导致函数f(x)f(x)f(x)的值在多大程度上发生变化.其中, 微小变化的hhh无限趋近0, 表示为lim⁡h−&gt;0\\\\lim\\\\limits_{h-&gt;0}h−&gt;0lim​.","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/3%E6%95%B0%E5%AD%A6/2%E5%BE%AE%E7%A7%AF%E5%88%86/derivative.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"annotate"}],["meta",{"property":"og:description","content":"annotate 导数就是表示某个瞬间的变化量: df(x)dx=lim⁡h−&gt;0f(x+h)−f(x)h\\\\frac{df(x)}{dx}=\\\\lim\\\\limits_{h-&gt;0}\\\\frac{f(x+h)-f(x)}{h}dxdf(x)​=h−&gt;0lim​hf(x+h)−f(x)​ df(x)dx\\\\frac{df(x)}{dx}dxdf(x)​表示f(x)f(x)f(x)关于xxx的导数, 即f(x)f(x)f(x)相对于xxx的变化程度, x的微小变化将导致函数f(x)f(x)f(x)的值在多大程度上发生变化.其中, 微小变化的hhh无限趋近0, 表示为lim⁡h−&gt;0\\\\lim\\\\limits_{h-&gt;0}h−&gt;0lim​."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"annotate"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"annotate\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"数值微分的例子","slug":"数值微分的例子","link":"#数值微分的例子","children":[]},{"level":2,"title":"偏导数","slug":"偏导数","link":"#偏导数","children":[]},{"level":2,"title":"梯度(gradient)","slug":"梯度-gradient","link":"#梯度-gradient","children":[]},{"level":2,"title":"梯度法","slug":"梯度法","link":"#梯度法","children":[]},{"level":2,"title":"神经网络的梯度","slug":"神经网络的梯度","link":"#神经网络的梯度","children":[]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":4.36,"words":1309},"filePathRelative":"3数学/2微积分/derivative.md","localizedDate":"2025年2月21日","excerpt":"<h1> annotate</h1>\\n<p>导数就是表示某个瞬间的变化量:\\n<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mfrac><mrow><mi>d</mi><mi>f</mi><mo stretchy=\\"false\\">(</mo><mi>x</mi><mo stretchy=\\"false\\">)</mo></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><munder><mrow><mi>lim</mi><mo>⁡</mo></mrow><mrow><mi>h</mi><mo>−</mo><mo>&gt;</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi>f</mi><mo stretchy=\\"false\\">(</mo><mi>x</mi><mo>+</mo><mi>h</mi><mo stretchy=\\"false\\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\\"false\\">(</mo><mi>x</mi><mo stretchy=\\"false\\">)</mo></mrow><mi>h</mi></mfrac></mrow><annotation encoding=\\"application/x-tex\\">\\\\frac{df(x)}{dx}=\\\\lim\\\\limits_{h-&gt;0}\\\\frac{f(x+h)-f(x)}{h}</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.355em;vertical-align:-0.345em;\\"></span><span class=\\"mord\\"><span class=\\"mopen nulldelimiter\\"></span><span class=\\"mfrac\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.01em;\\"><span style=\\"top:-2.655em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\">d</span><span class=\\"mord mathnormal mtight\\">x</span></span></span></span><span style=\\"top:-3.23em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"frac-line\\" style=\\"border-bottom-width:0.04em;\\"></span></span><span style=\\"top:-3.485em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.10764em;\\">df</span><span class=\\"mopen mtight\\">(</span><span class=\\"mord mathnormal mtight\\">x</span><span class=\\"mclose mtight\\">)</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.345em;\\"><span></span></span></span></span></span><span class=\\"mclose nulldelimiter\\"></span></span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.8204em;vertical-align:-0.8104em;\\"></span><span class=\\"mop op-limits\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.6944em;\\"><span style=\\"top:-2.3479em;margin-left:0em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\">h</span><span class=\\"mord mtight\\">−</span><span class=\\"mrel mtight\\">&gt;</span><span class=\\"mord mtight\\">0</span></span></span></span><span style=\\"top:-3em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span><span class=\\"mop\\">lim</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8104em;\\"><span></span></span></span></span></span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\"><span class=\\"mopen nulldelimiter\\"></span><span class=\\"mfrac\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.01em;\\"><span style=\\"top:-2.655em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\">h</span></span></span></span><span style=\\"top:-3.23em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"frac-line\\" style=\\"border-bottom-width:0.04em;\\"></span></span><span style=\\"top:-3.485em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.10764em;\\">f</span><span class=\\"mopen mtight\\">(</span><span class=\\"mord mathnormal mtight\\">x</span><span class=\\"mbin mtight\\">+</span><span class=\\"mord mathnormal mtight\\">h</span><span class=\\"mclose mtight\\">)</span><span class=\\"mbin mtight\\">−</span><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.10764em;\\">f</span><span class=\\"mopen mtight\\">(</span><span class=\\"mord mathnormal mtight\\">x</span><span class=\\"mclose mtight\\">)</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.345em;\\"><span></span></span></span></span></span><span class=\\"mclose nulldelimiter\\"></span></span></span></span></span>\\n<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mfrac><mrow><mi>d</mi><mi>f</mi><mo stretchy=\\"false\\">(</mo><mi>x</mi><mo stretchy=\\"false\\">)</mo></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac></mrow><annotation encoding=\\"application/x-tex\\">\\\\frac{df(x)}{dx}</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.355em;vertical-align:-0.345em;\\"></span><span class=\\"mord\\"><span class=\\"mopen nulldelimiter\\"></span><span class=\\"mfrac\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.01em;\\"><span style=\\"top:-2.655em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\">d</span><span class=\\"mord mathnormal mtight\\">x</span></span></span></span><span style=\\"top:-3.23em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"frac-line\\" style=\\"border-bottom-width:0.04em;\\"></span></span><span style=\\"top:-3.485em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.10764em;\\">df</span><span class=\\"mopen mtight\\">(</span><span class=\\"mord mathnormal mtight\\">x</span><span class=\\"mclose mtight\\">)</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.345em;\\"><span></span></span></span></span></span><span class=\\"mclose nulldelimiter\\"></span></span></span></span></span>表示<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>f</mi><mo stretchy=\\"false\\">(</mo><mi>x</mi><mo stretchy=\\"false\\">)</mo></mrow><annotation encoding=\\"application/x-tex\\">f(x)</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.10764em;\\">f</span><span class=\\"mopen\\">(</span><span class=\\"mord mathnormal\\">x</span><span class=\\"mclose\\">)</span></span></span></span>关于<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\\"application/x-tex\\">x</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.4306em;\\"></span><span class=\\"mord mathnormal\\">x</span></span></span></span>的导数, 即<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>f</mi><mo stretchy=\\"false\\">(</mo><mi>x</mi><mo stretchy=\\"false\\">)</mo></mrow><annotation encoding=\\"application/x-tex\\">f(x)</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.10764em;\\">f</span><span class=\\"mopen\\">(</span><span class=\\"mord mathnormal\\">x</span><span class=\\"mclose\\">)</span></span></span></span>相对于<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\\"application/x-tex\\">x</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.4306em;\\"></span><span class=\\"mord mathnormal\\">x</span></span></span></span>的变化程度, x的微小变化将导致函数<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>f</mi><mo stretchy=\\"false\\">(</mo><mi>x</mi><mo stretchy=\\"false\\">)</mo></mrow><annotation encoding=\\"application/x-tex\\">f(x)</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.10764em;\\">f</span><span class=\\"mopen\\">(</span><span class=\\"mord mathnormal\\">x</span><span class=\\"mclose\\">)</span></span></span></span>的值在多大程度上发生变化.其中, 微小变化的<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>h</mi></mrow><annotation encoding=\\"application/x-tex\\">h</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6944em;\\"></span><span class=\\"mord mathnormal\\">h</span></span></span></span>无限趋近0, 表示为<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><munder><mrow><mi>lim</mi><mo>⁡</mo></mrow><mrow><mi>h</mi><mo>−</mo><mo>&gt;</mo><mn>0</mn></mrow></munder></mrow><annotation encoding=\\"application/x-tex\\">\\\\lim\\\\limits_{h-&gt;0}</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.5049em;vertical-align:-0.8104em;\\"></span><span class=\\"mop op-limits\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.6944em;\\"><span style=\\"top:-2.3479em;margin-left:0em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\">h</span><span class=\\"mord mtight\\">−</span><span class=\\"mrel mtight\\">&gt;</span><span class=\\"mord mtight\\">0</span></span></span></span><span style=\\"top:-3em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span><span class=\\"mop\\">lim</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8104em;\\"><span></span></span></span></span></span></span></span></span>.</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{s as data};
