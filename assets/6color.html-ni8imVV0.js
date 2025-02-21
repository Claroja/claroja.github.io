const a=JSON.parse(`{"key":"v-756b4541","path":"/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/6%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/matplotlib/6color.html","title":"color","lang":"zh-CN","frontmatter":{"description":"color artist的颜色设置 1维对象 比如折线图, 通常使用color参数来设置 2维对象 比如散点图, 通常使用facecolor来设置背景颜色, edgecolor来设置边框颜色 color bar 颜色渐变指示器 import matplotlib.pyplot as plt fig, ax = plt.subplots() sc = ax.scatter([1, 2], [1, 2], c=[1, 2]) ax.set_ylabel('YLabel', loc='top') ax.set_xlabel('XLabel', loc='left') cbar = fig.colorbar(sc) cbar.set_label(\\"ZLabel\\", loc='top') plt.show()","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/6%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/matplotlib/6color.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"color"}],["meta",{"property":"og:description","content":"color artist的颜色设置 1维对象 比如折线图, 通常使用color参数来设置 2维对象 比如散点图, 通常使用facecolor来设置背景颜色, edgecolor来设置边框颜色 color bar 颜色渐变指示器 import matplotlib.pyplot as plt fig, ax = plt.subplots() sc = ax.scatter([1, 2], [1, 2], c=[1, 2]) ax.set_ylabel('YLabel', loc='top') ax.set_xlabel('XLabel', loc='left') cbar = fig.colorbar(sc) cbar.set_label(\\"ZLabel\\", loc='top') plt.show()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"color\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"artist的颜色设置","slug":"artist的颜色设置","link":"#artist的颜色设置","children":[{"level":3,"title":"1维对象","slug":"_1维对象","link":"#_1维对象","children":[]},{"level":3,"title":"2维对象","slug":"_2维对象","link":"#_2维对象","children":[]}]},{"level":2,"title":"color bar","slug":"color-bar","link":"#color-bar","children":[]},{"level":2,"title":"教程","slug":"教程","link":"#教程","children":[{"level":3,"title":"指定颜色的格式","slug":"指定颜色的格式","link":"#指定颜色的格式","children":[]},{"level":3,"title":"Colorbars","slug":"colorbars","link":"#colorbars","children":[]},{"level":3,"title":"colormaps","slug":"colormaps","link":"#colormaps","children":[]}]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.71,"words":512},"filePathRelative":"4机器学习/6分析工具/matplotlib/6color.md","localizedDate":"2025年2月21日","excerpt":"<h1> color</h1>\\n<h2> artist的颜色设置</h2>\\n<h3> 1维对象</h3>\\n<p>比如折线图, 通常使用<code>color</code>参数来设置</p>\\n<h3> 2维对象</h3>\\n<p>比如散点图, 通常使用<code>facecolor</code>来设置背景颜色, <code>edgecolor</code>来设置边框颜色</p>\\n<h2> color bar</h2>\\n<p>颜色渐变指示器</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> matplotlib<span class=\\"token punctuation\\">.</span>pyplot <span class=\\"token keyword\\">as</span> plt\\n\\nfig<span class=\\"token punctuation\\">,</span> ax <span class=\\"token operator\\">=</span> plt<span class=\\"token punctuation\\">.</span>subplots<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\nsc <span class=\\"token operator\\">=</span> ax<span class=\\"token punctuation\\">.</span>scatter<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> c<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\nax<span class=\\"token punctuation\\">.</span>set_ylabel<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'YLabel'</span><span class=\\"token punctuation\\">,</span> loc<span class=\\"token operator\\">=</span><span class=\\"token string\\">'top'</span><span class=\\"token punctuation\\">)</span>\\nax<span class=\\"token punctuation\\">.</span>set_xlabel<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'XLabel'</span><span class=\\"token punctuation\\">,</span> loc<span class=\\"token operator\\">=</span><span class=\\"token string\\">'left'</span><span class=\\"token punctuation\\">)</span>\\ncbar <span class=\\"token operator\\">=</span> fig<span class=\\"token punctuation\\">.</span>colorbar<span class=\\"token punctuation\\">(</span>sc<span class=\\"token punctuation\\">)</span>\\ncbar<span class=\\"token punctuation\\">.</span>set_label<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"ZLabel\\"</span><span class=\\"token punctuation\\">,</span> loc<span class=\\"token operator\\">=</span><span class=\\"token string\\">'top'</span><span class=\\"token punctuation\\">)</span>\\n\\nplt<span class=\\"token punctuation\\">.</span>show<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{a as data};
