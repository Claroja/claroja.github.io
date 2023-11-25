const s=JSON.parse('{"key":"v-89591a94","path":"/%E6%95%B0%E5%AD%A6/%E7%BB%9F%E8%AE%A1%E5%AD%A6/%E7%BB%9F%E8%AE%A1%E6%A8%A1%E5%9E%8B-%E8%AF%84%E4%BC%B0/statistic_%E5%B9%BF%E4%B9%89%E7%BA%BF%E6%80%A7%E6%A8%A1%E5%9E%8B%E7%9A%84%E8%AF%84%E4%BC%B0.html","title":"广义线性模型的评估","lang":"zh-CN","frontmatter":{"description":"广义线性模型的评估 模型偏差 模型偏差(deviance)是评估模型契合度的指标. 模型的偏差越大, 契合度越差. logistic回归的对数似然为lnζ(β0,β1;n,m)ln\\\\zeta(\\\\beta_0,\\\\beta_1;n,m)lnζ(β0​,β1​;n,m). 系数β0,β1\\\\beta_0,\\\\beta_1β0​,β1​改变, 则似然改变. 这里, 将通过最大似然法估计的系数所对应的对数似然记作lnζ(βglm;y)ln\\\\zeta(\\\\beta_{glm};y)lnζ(βglm​;y), 将完美预测所有考试合格情况的对数似然记作lnζ(βmax;y)ln\\\\zeta(\\\\beta_{max};y)lnζ(βmax​;y).","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E5%AD%A6/%E7%BB%9F%E8%AE%A1%E5%AD%A6/%E7%BB%9F%E8%AE%A1%E6%A8%A1%E5%9E%8B-%E8%AF%84%E4%BC%B0/statistic_%E5%B9%BF%E4%B9%89%E7%BA%BF%E6%80%A7%E6%A8%A1%E5%9E%8B%E7%9A%84%E8%AF%84%E4%BC%B0.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"广义线性模型的评估"}],["meta",{"property":"og:description","content":"广义线性模型的评估 模型偏差 模型偏差(deviance)是评估模型契合度的指标. 模型的偏差越大, 契合度越差. logistic回归的对数似然为lnζ(β0,β1;n,m)ln\\\\zeta(\\\\beta_0,\\\\beta_1;n,m)lnζ(β0​,β1​;n,m). 系数β0,β1\\\\beta_0,\\\\beta_1β0​,β1​改变, 则似然改变. 这里, 将通过最大似然法估计的系数所对应的对数似然记作lnζ(βglm;y)ln\\\\zeta(\\\\beta_{glm};y)lnζ(βglm​;y), 将完美预测所有考试合格情况的对数似然记作lnζ(βmax;y)ln\\\\zeta(\\\\beta_{max};y)lnζ(βmax​;y)."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"广义线性模型的评估\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":3,"title":"模型偏差","slug":"模型偏差","link":"#模型偏差","children":[]},{"level":3,"title":"模型偏差的含义","slug":"模型偏差的含义","link":"#模型偏差的含义","children":[]},{"level":3,"title":"模型偏差与似然比检验","slug":"模型偏差与似然比检验","link":"#模型偏差与似然比检验","children":[]},{"level":3,"title":"偏差残差","slug":"偏差残差","link":"#偏差残差","children":[]},{"level":3,"title":"交叉熵误差","slug":"交叉熵误差","link":"#交叉熵误差","children":[]}],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":3.78,"words":1133},"filePathRelative":"数学/统计学/统计模型-评估/statistic_广义线性模型的评估.md","localizedDate":"2023年11月25日","excerpt":"<h1> 广义线性模型的评估</h1>\\n<h3> 模型偏差</h3>\\n<p>模型偏差(deviance)是评估模型契合度的指标. 模型的偏差越大, 契合度越差.\\nlogistic回归的对数似然为<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>l</mi><mi>n</mi><mi>ζ</mi><mo stretchy=\\"false\\">(</mo><msub><mi>β</mi><mn>0</mn></msub><mo separator=\\"true\\">,</mo><msub><mi>β</mi><mn>1</mn></msub><mo separator=\\"true\\">;</mo><mi>n</mi><mo separator=\\"true\\">,</mo><mi>m</mi><mo stretchy=\\"false\\">)</mo></mrow><annotation encoding=\\"application/x-tex\\">ln\\\\zeta(\\\\beta_0,\\\\beta_1;n,m)</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.01968em;\\">l</span><span class=\\"mord mathnormal\\">n</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07378em;\\">ζ</span><span class=\\"mopen\\">(</span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05278em;\\">β</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:-0.0528em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">0</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05278em;\\">β</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:-0.0528em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">1</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mpunct\\">;</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord mathnormal\\">n</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord mathnormal\\">m</span><span class=\\"mclose\\">)</span></span></span></span>. 系数<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msub><mi>β</mi><mn>0</mn></msub><mo separator=\\"true\\">,</mo><msub><mi>β</mi><mn>1</mn></msub></mrow><annotation encoding=\\"application/x-tex\\">\\\\beta_0,\\\\beta_1</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8889em;vertical-align:-0.1944em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05278em;\\">β</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:-0.0528em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">0</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05278em;\\">β</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:-0.0528em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">1</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span></span></span></span>改变, 则似然改变. 这里, 将通过最大似然法估计的系数所对应的对数似然记作<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>l</mi><mi>n</mi><mi>ζ</mi><mo stretchy=\\"false\\">(</mo><msub><mi>β</mi><mrow><mi>g</mi><mi>l</mi><mi>m</mi></mrow></msub><mo separator=\\"true\\">;</mo><mi>y</mi><mo stretchy=\\"false\\">)</mo></mrow><annotation encoding=\\"application/x-tex\\">ln\\\\zeta(\\\\beta_{glm};y)</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.0361em;vertical-align:-0.2861em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.01968em;\\">l</span><span class=\\"mord mathnormal\\">n</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07378em;\\">ζ</span><span class=\\"mopen\\">(</span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05278em;\\">β</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3361em;\\"><span style=\\"top:-2.55em;margin-left:-0.0528em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.03588em;\\">g</span><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.01968em;\\">l</span><span class=\\"mord mathnormal mtight\\">m</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.2861em;\\"><span></span></span></span></span></span></span><span class=\\"mpunct\\">;</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">y</span><span class=\\"mclose\\">)</span></span></span></span>, 将完美预测所有考试合格情况的对数似然记作<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>l</mi><mi>n</mi><mi>ζ</mi><mo stretchy=\\"false\\">(</mo><msub><mi>β</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi></mrow></msub><mo separator=\\"true\\">;</mo><mi>y</mi><mo stretchy=\\"false\\">)</mo></mrow><annotation encoding=\\"application/x-tex\\">ln\\\\zeta(\\\\beta_{max};y)</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.01968em;\\">l</span><span class=\\"mord mathnormal\\">n</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07378em;\\">ζ</span><span class=\\"mopen\\">(</span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05278em;\\">β</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.1514em;\\"><span style=\\"top:-2.55em;margin-left:-0.0528em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\">ma</span><span class=\\"mord mathnormal mtight\\">x</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mpunct\\">;</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">y</span><span class=\\"mclose\\">)</span></span></span></span>.</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{s as data};
