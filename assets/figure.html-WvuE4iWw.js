const t=JSON.parse('{"key":"v-ae97e842","path":"/%E6%95%B0%E5%AD%A6/%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/matplotlib/artist%E5%9F%BA%E7%A1%80/figure.html","title":"figure","lang":"zh-CN","frontmatter":{"description":"figure 最高等级的container Artist是matplotlib.figure.Figure, 可以使用matplotlib.pyplot.figure()来创建. 当添加subplots(subplots(), add_subplot())或axes(add_axes())是, 这些对象会被添加到Figure.axes列表中. fig = plt.figure() ax1 = fig.add_subplot(211) ax2 = fig.add_axes([0.1, 0.1, 0.7, 0.3]) ax1 # &lt;AxesSubplot:&gt; print(fig.axes) # [&lt;AxesSubplot:&gt;, &lt;matplotlib.axes._axes.Axes object at 0x7f0768702be0&gt;]","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E5%AD%A6/%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/matplotlib/artist%E5%9F%BA%E7%A1%80/figure.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"figure"}],["meta",{"property":"og:description","content":"figure 最高等级的container Artist是matplotlib.figure.Figure, 可以使用matplotlib.pyplot.figure()来创建. 当添加subplots(subplots(), add_subplot())或axes(add_axes())是, 这些对象会被添加到Figure.axes列表中. fig = plt.figure() ax1 = fig.add_subplot(211) ax2 = fig.add_axes([0.1, 0.1, 0.7, 0.3]) ax1 # &lt;AxesSubplot:&gt; print(fig.axes) # [&lt;AxesSubplot:&gt;, &lt;matplotlib.axes._axes.Axes object at 0x7f0768702be0&gt;]"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-30T12:42:23.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-30T12:42:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"figure\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-30T12:42:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"返回","slug":"返回","link":"#返回","children":[]}],"git":{"createdTime":1701348143000,"updatedTime":1701348143000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.51,"words":154},"filePathRelative":"数学/分析工具/matplotlib/artist基础/figure.md","localizedDate":"2023年11月30日","excerpt":"<h1> figure</h1>\\n<p>最高等级的container Artist是<code>matplotlib.figure.Figure</code>, 可以使用<code>matplotlib.pyplot.figure()</code>来创建.\\n当添加subplots(<code>subplots(), add_subplot()</code>)或axes(<code>add_axes()</code>)是, 这些对象会被添加到<code>Figure.axes</code>列表中.</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>fig <span class=\\"token operator\\">=</span> plt<span class=\\"token punctuation\\">.</span>figure<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\nax1 <span class=\\"token operator\\">=</span> fig<span class=\\"token punctuation\\">.</span>add_subplot<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">211</span><span class=\\"token punctuation\\">)</span>\\nax2 <span class=\\"token operator\\">=</span> fig<span class=\\"token punctuation\\">.</span>add_axes<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0.1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">0.1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">0.7</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">0.3</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\nax1  <span class=\\"token comment\\"># &lt;AxesSubplot:&gt;</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>fig<span class=\\"token punctuation\\">.</span>axes<span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># [&lt;AxesSubplot:&gt;, &lt;matplotlib.axes._axes.Axes object at 0x7f0768702be0&gt;]</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{t as data};
