const e=JSON.parse('{"key":"v-de065f5a","path":"/%E6%95%B0%E5%AD%A6/cda/level2/%E7%AC%AC3%E7%AB%A0%E6%8C%87%E6%A0%87%E4%BD%93%E7%B3%BB%E4%B8%8E%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96.html","title":"第三章指标体系与数据可视化","lang":"zh-CN","frontmatter":{"description":"第三章指标体系与数据可视化 python可视化 matplotlib seaborn 描述性统计分析与绘图 描述性统计也称为探索性数据分析, 占整个模型开发工作量的40%. 变量度量类型与分布类型 分类变量 名义变量(无序分类变量) 等级变量(有序分类变量) 连续变量 分类变量的水平(类别)数量过多, 需要概化. 其中等级变量可以选择概化也可以当成连续变量. 从统计学的角度讲, 等级变量是不能当做连续变量处理的, 但是在实际工作中我们会不由自主的这样做. 一般等级变量的水平数量超过20时, 就可以当成连续变量处理.(Python会把所有的数值变量当成连续变量处理)","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E5%AD%A6/cda/level2/%E7%AC%AC3%E7%AB%A0%E6%8C%87%E6%A0%87%E4%BD%93%E7%B3%BB%E4%B8%8E%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"第三章指标体系与数据可视化"}],["meta",{"property":"og:description","content":"第三章指标体系与数据可视化 python可视化 matplotlib seaborn 描述性统计分析与绘图 描述性统计也称为探索性数据分析, 占整个模型开发工作量的40%. 变量度量类型与分布类型 分类变量 名义变量(无序分类变量) 等级变量(有序分类变量) 连续变量 分类变量的水平(类别)数量过多, 需要概化. 其中等级变量可以选择概化也可以当成连续变量. 从统计学的角度讲, 等级变量是不能当做连续变量处理的, 但是在实际工作中我们会不由自主的这样做. 一般等级变量的水平数量超过20时, 就可以当成连续变量处理.(Python会把所有的数值变量当成连续变量处理)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-30T12:51:22.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"第三章指标体系与数据可视化"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-30T12:51:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第三章指标体系与数据可视化\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2023-11-30T12:51:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"python可视化","slug":"python可视化","link":"#python可视化","children":[]},{"level":2,"title":"描述性统计分析与绘图","slug":"描述性统计分析与绘图","link":"#描述性统计分析与绘图","children":[{"level":3,"title":"分类变量的统计量","slug":"分类变量的统计量","link":"#分类变量的统计量","children":[]},{"level":3,"title":"连续变量的分布与集中趋势","slug":"连续变量的分布与集中趋势","link":"#连续变量的分布与集中趋势","children":[]},{"level":3,"title":"制作报表与统计制图","slug":"制作报表与统计制图","link":"#制作报表与统计制图","children":[]},{"level":3,"title":"图示","slug":"图示","link":"#图示","children":[]}]},{"level":2,"title":"指标体系","slug":"指标体系","link":"#指标体系","children":[{"level":3,"title":"建立指标标准","slug":"建立指标标准","link":"#建立指标标准","children":[]},{"level":3,"title":"三个层级需求","slug":"三个层级需求","link":"#三个层级需求","children":[]},{"level":3,"title":"指标分类","slug":"指标分类","link":"#指标分类","children":[]}]}],"git":{"createdTime":1701348143000,"updatedTime":1701348682000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":2}]},"readingTime":{"minutes":3.82,"words":1147},"filePathRelative":"数学/cda/level2/第3章指标体系与数据可视化.md","localizedDate":"2023年11月30日","excerpt":"<h1> 第三章指标体系与数据可视化</h1>\\n<h2> python可视化</h2>\\n<ol>\\n<li>matplotlib</li>\\n<li>seaborn</li>\\n</ol>\\n<h2> 描述性统计分析与绘图</h2>\\n<p>描述性统计也称为探索性数据分析, 占整个模型开发工作量的40%.</p>\\n<p>变量度量类型与分布类型</p>\\n<ol>\\n<li>分类变量\\n<ol>\\n<li>名义变量(无序分类变量)</li>\\n<li>等级变量(有序分类变量)</li>\\n</ol>\\n</li>\\n<li>连续变量</li>\\n</ol>\\n<p>分类变量的水平(类别)数量过多, 需要<code>概化</code>. 其中等级变量可以选择<code>概化</code>也可以当成<code>连续变量</code>. 从统计学的角度讲, 等级变量是不能当做连续变量处理的, 但是在实际工作中我们会不由自主的这样做. 一般等级变量的水平数量超过20时, 就可以当成连续变量处理.(Python会把所有的数值变量当成连续变量处理)</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
