const s=JSON.parse('{"key":"v-b1837454","path":"/%E6%95%B0%E5%AD%A6/%E6%A6%82%E7%8E%87%E8%AE%BA/%E5%A4%9A%E7%BB%B4/%E6%9D%A1%E4%BB%B6%E5%88%86%E5%B8%83.html","title":"条件分布","lang":"zh-CN","frontmatter":{"description":"条件分布 选择什么交通工具迟到的概率是不一样的, 这称为条件概率。同样的，通过抽查可以得到中国人口的身高分布： 但如果给出不同的条件，比如男性或者女性，会得到不同的分布： 这就称为条件分布。 离散的条件分布 身高X和体重Y的联合分布为： \\\\begin{array}{c|c} \\\\hline \\\\quad X\\\\overset{\\\\LARGE\\\\setminus}{\\\\phantom{.}}\\\\overset{\\\\Large Y}{\\\\phantom{l}} \\\\quad &amp;\\\\quad 18\\\\quad&amp;\\\\quad 20\\\\quad&amp;\\\\quad 22\\\\quad\\\\\\\\ \\\\hline \\\\\\\\ 108 &amp; 1/6 &amp; 1/6 &amp; 0 \\\\\\\\ 112 &amp; 1/6 &amp; 1/6 &amp; 1/6 \\\\\\\\ 115 &amp; 0 &amp; 0 &amp; 1/6 \\\\\\\\ \\\\\\\\ \\\\hline \\\\end{array} X.∖lY108112115​181/61/60​201/61/60​2201/61/6​​","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E5%AD%A6/%E6%A6%82%E7%8E%87%E8%AE%BA/%E5%A4%9A%E7%BB%B4/%E6%9D%A1%E4%BB%B6%E5%88%86%E5%B8%83.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"条件分布"}],["meta",{"property":"og:description","content":"条件分布 选择什么交通工具迟到的概率是不一样的, 这称为条件概率。同样的，通过抽查可以得到中国人口的身高分布： 但如果给出不同的条件，比如男性或者女性，会得到不同的分布： 这就称为条件分布。 离散的条件分布 身高X和体重Y的联合分布为： \\\\begin{array}{c|c} \\\\hline \\\\quad X\\\\overset{\\\\LARGE\\\\setminus}{\\\\phantom{.}}\\\\overset{\\\\Large Y}{\\\\phantom{l}} \\\\quad &amp;\\\\quad 18\\\\quad&amp;\\\\quad 20\\\\quad&amp;\\\\quad 22\\\\quad\\\\\\\\ \\\\hline \\\\\\\\ 108 &amp; 1/6 &amp; 1/6 &amp; 0 \\\\\\\\ 112 &amp; 1/6 &amp; 1/6 &amp; 1/6 \\\\\\\\ 115 &amp; 0 &amp; 0 &amp; 1/6 \\\\\\\\ \\\\\\\\ \\\\hline \\\\end{array} X.∖lY108112115​181/61/60​201/61/60​2201/61/6​​"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:31:52.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"条件分布"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:31:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"条件分布\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2023-11-27T13:31:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"离散的条件分布","slug":"离散的条件分布","link":"#离散的条件分布","children":[]},{"level":2,"title":"连续的条件分布","slug":"连续的条件分布","link":"#连续的条件分布","children":[]}],"git":{"createdTime":1701091021000,"updatedTime":1701091912000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":2}]},"readingTime":{"minutes":2.32,"words":695},"filePathRelative":"数学/概率论/多维/条件分布.md","localizedDate":"2023年11月27日","excerpt":"<h1> 条件分布</h1>\\n<p>选择什么交通工具迟到的概率是不一样的, 这称为条件概率。同样的，通过抽查可以得到中国人口的身高分布：\\n\\n但如果给出不同的条件，比如男性或者女性，会得到不同的分布：\\n\\n这就称为<code>条件分布</code>。</p>\\n<h2> 离散的条件分布</h2>\\n<p>身高X和体重Y的联合分布为：</p>\\n<p class=\\"katex-block\\"><span class=\\"katex-display\\"><span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\" display=\\"block\\"><semantics><mrow></mrow><annotation encoding=\\"application/x-tex\\">\\n\\\\begin{array}{c|c}\\n    \\\\hline\\n    \\\\quad X\\\\overset{\\\\LARGE\\\\setminus}{\\\\phantom{.}}\\\\overset{\\\\Large Y}{\\\\phantom{l}} \\\\quad &amp;\\\\quad 18\\\\quad&amp;\\\\quad 20\\\\quad&amp;\\\\quad 22\\\\quad\\\\\\\\\\n    \\\\hline\\n    \\\\\\\\\\n    108 &amp; 1/6 &amp; 1/6 &amp; 0 \\\\\\\\\\n    112 &amp; 1/6 &amp; 1/6 &amp; 1/6 \\\\\\\\\\n    115 &amp; 0 &amp; 0 &amp; 1/6 \\\\\\\\\\n    \\\\\\\\\\n    \\\\hline\\n\\\\end{array}\\n</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:8.4446em;vertical-align:-3.9523em;\\"></span><span class=\\"mord\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:4.4923em;\\"><span style=\\"top:-6.4523em;\\"><span class=\\"pstrut\\" style=\\"height:6.4523em;\\"></span><span class=\\"mtable\\"><span class=\\"arraycolsep\\" style=\\"width:0.5em;\\"></span><span class=\\"col-align-c\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:4.4523em;\\"><span style=\\"top:-6.4523em;\\"><span class=\\"pstrut\\" style=\\"height:4.0446em;\\"></span><span class=\\"mord\\"><span class=\\"mspace\\" style=\\"margin-right:1em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07847em;\\">X</span><span class=\\"mord\\"><span class=\\"mop op-limits\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:2.0446em;\\"><span style=\\"top:-3.728em;\\"><span class=\\"pstrut\\" style=\\"height:3.728em;\\"></span><span><span class=\\"mop\\" style=\\"color:transparent;\\">.</span></span></span><span style=\\"top:-4.3766em;margin-left:0em;\\"><span class=\\"pstrut\\" style=\\"height:3.728em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord sizing reset-size3 size9\\">∖</span></span></span></span></span></span></span></span></span><span class=\\"mord\\"><span class=\\"mop op-limits\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.9784em;\\"><span style=\\"top:-3.44em;\\"><span class=\\"pstrut\\" style=\\"height:3.44em;\\"></span><span><span class=\\"mop mathnormal\\" style=\\"margin-right:0.01968em;color:transparent;\\">l</span></span></span><span style=\\"top:-4.3344em;margin-left:0em;\\"><span class=\\"pstrut\\" style=\\"height:3.44em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal sizing reset-size3 size8\\" style=\\"margin-right:0.22222em;\\">Y</span></span></span></span></span></span></span></span></span><span class=\\"mspace\\" style=\\"margin-right:1em;\\"></span></span></span><span style=\\"top:-5.2523em;\\"><span class=\\"pstrut\\" style=\\"height:4.0446em;\\"></span><span class=\\"mord\\"></span></span><span style=\\"top:-4.0523em;\\"><span class=\\"pstrut\\" style=\\"height:4.0446em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">108</span></span></span><span style=\\"top:-2.8523em;\\"><span class=\\"pstrut\\" style=\\"height:4.0446em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">112</span></span></span><span style=\\"top:-1.6523em;\\"><span class=\\"pstrut\\" style=\\"height:4.0446em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">115</span></span></span><span style=\\"top:-0.4523em;\\"><span class=\\"pstrut\\" style=\\"height:4.0446em;\\"></span><span class=\\"mord\\"></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:3.9523em;\\"><span></span></span></span></span></span><span class=\\"arraycolsep\\" style=\\"width:0.5em;\\"></span><span class=\\"vertical-separator\\" style=\\"height:8.4046em;border-right-width:0.04em;border-right-style:solid;margin:0 -0.02em;vertical-align:-3.9523em;\\"></span><span class=\\"arraycolsep\\" style=\\"width:0.5em;\\"></span><span class=\\"col-align-c\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:4.4523em;\\"><span style=\\"top:-6.4523em;\\"><span class=\\"pstrut\\" style=\\"height:4.0446em;\\"></span><span class=\\"mord\\"><span class=\\"mspace\\" style=\\"margin-right:1em;\\"></span><span class=\\"mord\\">18</span><span class=\\"mspace\\" style=\\"margin-right:1em;\\"></span></span></span><span style=\\"top:-4.0523em;\\"><span class=\\"pstrut\\" style=\\"height:4.0446em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">1/6</span></span></span><span style=\\"top:-2.8523em;\\"><span class=\\"pstrut\\" style=\\"height:4.0446em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">1/6</span></span></span><span style=\\"top:-1.6523em;\\"><span class=\\"pstrut\\" style=\\"height:4.0446em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">0</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:2.7523em;\\"><span></span></span></span></span></span><span class=\\"arraycolsep\\" style=\\"width:0.5em;\\"></span><span class=\\"arraycolsep\\" style=\\"width:0.5em;\\"></span><span class=\\"col-align-c\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:4.4523em;\\"><span style=\\"top:-6.4523em;\\"><span class=\\"pstrut\\" style=\\"height:4.0446em;\\"></span><span class=\\"mord\\"><span class=\\"mspace\\" style=\\"margin-right:1em;\\"></span><span class=\\"mord\\">20</span><span class=\\"mspace\\" style=\\"margin-right:1em;\\"></span></span></span><span style=\\"top:-4.0523em;\\"><span class=\\"pstrut\\" style=\\"height:4.0446em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">1/6</span></span></span><span style=\\"top:-2.8523em;\\"><span class=\\"pstrut\\" style=\\"height:4.0446em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">1/6</span></span></span><span style=\\"top:-1.6523em;\\"><span class=\\"pstrut\\" style=\\"height:4.0446em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">0</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:2.7523em;\\"><span></span></span></span></span></span><span class=\\"arraycolsep\\" style=\\"width:0.5em;\\"></span><span class=\\"arraycolsep\\" style=\\"width:0.5em;\\"></span><span class=\\"col-align-c\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:4.4523em;\\"><span style=\\"top:-6.4523em;\\"><span class=\\"pstrut\\" style=\\"height:4.0446em;\\"></span><span class=\\"mord\\"><span class=\\"mspace\\" style=\\"margin-right:1em;\\"></span><span class=\\"mord\\">22</span><span class=\\"mspace\\" style=\\"margin-right:1em;\\"></span></span></span><span style=\\"top:-4.0523em;\\"><span class=\\"pstrut\\" style=\\"height:4.0446em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">0</span></span></span><span style=\\"top:-2.8523em;\\"><span class=\\"pstrut\\" style=\\"height:4.0446em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">1/6</span></span></span><span style=\\"top:-1.6523em;\\"><span class=\\"pstrut\\" style=\\"height:4.0446em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">1/6</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:2.7523em;\\"><span></span></span></span></span></span><span class=\\"arraycolsep\\" style=\\"width:0.5em;\\"></span></span></span><span style=\\"top:-2.5em;\\"><span class=\\"pstrut\\" style=\\"height:6.4523em;\\"></span><span class=\\"hline\\" style=\\"border-bottom-width:0.04em;\\"></span></span><span style=\\"top:-8.5em;\\"><span class=\\"pstrut\\" style=\\"height:6.4523em;\\"></span><span class=\\"hline\\" style=\\"border-bottom-width:0.04em;\\"></span></span><span style=\\"top:-10.9046em;\\"><span class=\\"pstrut\\" style=\\"height:6.4523em;\\"></span><span class=\\"hline\\" style=\\"border-bottom-width:0.04em;\\"></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:3.9523em;\\"><span></span></span></span></span></span></span></span></span></span></p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{s as data};
