const a=JSON.parse('{"key":"v-4fcc3eab","path":"/%E6%95%B0%E5%AD%A6/%E7%BB%9F%E8%AE%A1%E5%AD%A6/12%E5%A4%9A%E5%85%83%E7%BA%BF%E6%80%A7%E5%9B%9E%E5%BD%92/6%E5%8F%98%E9%87%8F%E9%80%89%E6%8B%A9%E4%B8%8E%E9%80%90%E6%AD%A5%E5%9B%9E%E5%BD%92.html","title":"变量选择与逐步回归","lang":"zh-CN","frontmatter":{"description":"变量选择与逐步回归 变量选择过程 究竟哪些自变量应该引入模型，哪些自变量不应该引入模型，需要对自变量进行一定的筛选。在进行回归时，每次只增加一个变量，并且将新变量与模型中的变量进行比较，若新变量引入模型后以前的某个变量的统计量不显著，这个变量就会被从模型中剔除，在这种情况下，回归分析就很难受到多重共线性的影响，这就是回归中的搜寻过程。逐步回归是避免多重共线性的方法之一。 选择自变量的原则通常是对统计量进行显著性检验，检验的根据是：将一个或一个以上的自变量引入回归模型中时，是否使残差平方和(SSE)显著减少。如果增加一个自变量使残差平方和显著减少，则说明有必要将这个自变量引入回归模型，否则，就没有必要将这个自变量引入回归模型。确定在模型中引入自变量xix_ixi​是否使残差平方和显著减少的方法，就是使用FFF统计量的值作为一个标准，以此来确定是在模型中增加一个自变量，还是从模型中剔除一个自变量。变量选择的方法主要有向前选择(forward selection)、向后剔除(backward elimina-tion)、逐步回归(stepwise regression)","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E5%AD%A6/%E7%BB%9F%E8%AE%A1%E5%AD%A6/12%E5%A4%9A%E5%85%83%E7%BA%BF%E6%80%A7%E5%9B%9E%E5%BD%92/6%E5%8F%98%E9%87%8F%E9%80%89%E6%8B%A9%E4%B8%8E%E9%80%90%E6%AD%A5%E5%9B%9E%E5%BD%92.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"变量选择与逐步回归"}],["meta",{"property":"og:description","content":"变量选择与逐步回归 变量选择过程 究竟哪些自变量应该引入模型，哪些自变量不应该引入模型，需要对自变量进行一定的筛选。在进行回归时，每次只增加一个变量，并且将新变量与模型中的变量进行比较，若新变量引入模型后以前的某个变量的统计量不显著，这个变量就会被从模型中剔除，在这种情况下，回归分析就很难受到多重共线性的影响，这就是回归中的搜寻过程。逐步回归是避免多重共线性的方法之一。 选择自变量的原则通常是对统计量进行显著性检验，检验的根据是：将一个或一个以上的自变量引入回归模型中时，是否使残差平方和(SSE)显著减少。如果增加一个自变量使残差平方和显著减少，则说明有必要将这个自变量引入回归模型，否则，就没有必要将这个自变量引入回归模型。确定在模型中引入自变量xix_ixi​是否使残差平方和显著减少的方法，就是使用FFF统计量的值作为一个标准，以此来确定是在模型中增加一个自变量，还是从模型中剔除一个自变量。变量选择的方法主要有向前选择(forward selection)、向后剔除(backward elimina-tion)、逐步回归(stepwise regression)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-07T05:43:48.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2024-01-07T05:43:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"变量选择与逐步回归\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-07T05:43:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"变量选择过程","slug":"变量选择过程","link":"#变量选择过程","children":[]},{"level":2,"title":"向前选择(forward selection)","slug":"向前选择-forward-selection","link":"#向前选择-forward-selection","children":[]},{"level":2,"title":"向后剔除(backward elimina-tion)","slug":"向后剔除-backward-elimina-tion","link":"#向后剔除-backward-elimina-tion","children":[]},{"level":2,"title":"逐步回归(stepwise regression)","slug":"逐步回归-stepwise-regression","link":"#逐步回归-stepwise-regression","children":[]},{"level":2,"title":"参考:","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1704606228000,"updatedTime":1704606228000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":6.23,"words":1869},"filePathRelative":"数学/统计学/12多元线性回归/6变量选择与逐步回归.md","localizedDate":"2024年1月7日","excerpt":"<h1> 变量选择与逐步回归</h1>\\n<h2> 变量选择过程</h2>\\n<p>究竟哪些自变量应该引入模型，哪些自变量不应该引入模型，需要对自变量进行一定的筛选。在进行回归时，每次只增加一个变量，并且将新变量与模型中的变量进行比较，若新变量引入模型后以前的某个变量的统计量不显著，这个变量就会被从模型中剔除，在这种情况下，回归分析就很难受到多重共线性的影响，这就是回归中的搜寻过程。逐步回归是避免多重共线性的方法之一。</p>\\n<p>选择自变量的原则通常是对统计量进行显著性检验，检验的根据是：将一个或一个以上的自变量引入回归模型中时，是否使残差平方和(SSE)显著减少。如果增加一个自变量使残差平方和显著减少，则说明有必要将这个自变量引入回归模型，否则，就没有必要将这个自变量引入回归模型。确定在模型中引入自变量<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msub><mi>x</mi><mi>i</mi></msub></mrow><annotation encoding=\\"application/x-tex\\">x_i</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.5806em;vertical-align:-0.15em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">x</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3117em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">i</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span></span></span></span>是否使残差平方和显著减少的方法，就是使用<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>F</mi></mrow><annotation encoding=\\"application/x-tex\\">F</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.13889em;\\">F</span></span></span></span>统计量的值作为一个标准，以此来确定是在模型中增加一个自变量，还是从模型中剔除一个自变量。变量选择的方法主要有向前选择(forward selection)、向后剔除(backward elimina-tion)、逐步回归(stepwise regression)</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{a as data};
