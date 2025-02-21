const s=JSON.parse('{"key":"v-1cb1c348","path":"/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1_1%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5/4%E4%BA%A4%E5%8F%89%E7%86%B5.html","title":"","lang":"zh-CN","frontmatter":{"description":"交叉熵 \\"一词包含 \\"交叉 \\"和 \\"熵\\"，理解了 \\"熵 \\"的部分，才能理解 \\"交叉 \\"的部分。 熵公式回顾 对于离散变量, 概率分布的熵值如下： Entropy=−∑iP(i)log2P(i) \\\\text{Entropy} = - \\\\sum_i P(i)log_2P(i) Entropy=−i∑​P(i)log2​P(i)","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1_1%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5/4%E4%BA%A4%E5%8F%89%E7%86%B5.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:description","content":"交叉熵 \\"一词包含 \\"交叉 \\"和 \\"熵\\"，理解了 \\"熵 \\"的部分，才能理解 \\"交叉 \\"的部分。 熵公式回顾 对于离散变量, 概率分布的熵值如下： Entropy=−∑iP(i)log2P(i) \\\\text{Entropy} = - \\\\sum_i P(i)log_2P(i) Entropy=−i∑​P(i)log2​P(i)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"熵公式回顾","slug":"熵公式回顾","link":"#熵公式回顾","children":[]},{"level":2,"title":"估计熵(Estimating Entropy)","slug":"估计熵-estimating-entropy","link":"#估计熵-estimating-entropy","children":[]},{"level":2,"title":"交叉熵 ≥ 熵","slug":"交叉熵-≥-熵","link":"#交叉熵-≥-熵","children":[]},{"level":2,"title":"作为损失函数的交叉熵","slug":"作为损失函数的交叉熵","link":"#作为损失函数的交叉熵","children":[]},{"level":2,"title":"Nats vs. Bits","slug":"nats-vs-bits","link":"#nats-vs-bits","children":[]},{"level":2,"title":"二元交叉熵(Binary Cross-Entropy)","slug":"二元交叉熵-binary-cross-entropy","link":"#二元交叉熵-binary-cross-entropy","children":[]},{"level":2,"title":"参考:","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":7.99,"words":2396},"filePathRelative":"4机器学习/1_1基础概念/4交叉熵.md","localizedDate":"2025年2月21日","excerpt":"<p>交叉熵 \\"一词包含 \\"交叉 \\"和 \\"熵\\"，理解了 \\"熵 \\"的部分，才能理解 \\"交叉 \\"的部分。</p>\\n<h2> 熵公式回顾</h2>\\n<p>对于离散变量, 概率分布的熵值如下：</p>\\n<p class=\\"katex-block\\"><span class=\\"katex-display\\"><span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\" display=\\"block\\"><semantics><mrow><mtext>Entropy</mtext><mo>=</mo><mo>−</mo><munder><mo>∑</mo><mi>i</mi></munder><mi>P</mi><mo stretchy=\\"false\\">(</mo><mi>i</mi><mo stretchy=\\"false\\">)</mo><mi>l</mi><mi>o</mi><msub><mi>g</mi><mn>2</mn></msub><mi>P</mi><mo stretchy=\\"false\\">(</mo><mi>i</mi><mo stretchy=\\"false\\">)</mo></mrow><annotation encoding=\\"application/x-tex\\">\\n\\\\text{Entropy} = - \\\\sum_i P(i)log_2P(i)\\n</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8778em;vertical-align:-0.1944em;\\"></span><span class=\\"mord text\\"><span class=\\"mord\\">Entropy</span></span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:2.3277em;vertical-align:-1.2777em;\\"></span><span class=\\"mord\\">−</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mop op-limits\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.05em;\\"><span style=\\"top:-1.8723em;margin-left:0em;\\"><span class=\\"pstrut\\" style=\\"height:3.05em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">i</span></span></span><span style=\\"top:-3.05em;\\"><span class=\\"pstrut\\" style=\\"height:3.05em;\\"></span><span><span class=\\"mop op-symbol large-op\\">∑</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.2777em;\\"><span></span></span></span></span></span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.13889em;\\">P</span><span class=\\"mopen\\">(</span><span class=\\"mord mathnormal\\">i</span><span class=\\"mclose\\">)</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.01968em;\\">l</span><span class=\\"mord mathnormal\\">o</span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">g</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.13889em;\\">P</span><span class=\\"mopen\\">(</span><span class=\\"mord mathnormal\\">i</span><span class=\\"mclose\\">)</span></span></span></span></span></p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{s as data};
