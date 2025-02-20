const n=JSON.parse(`{"key":"v-b29d9108","path":"/%E6%95%B0%E5%AD%A6/%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/matplotlib/5hist.html","title":"hist","lang":"zh-CN","frontmatter":{"description":"hist 直方图主要用来查看数据的分布. 频数, 频率, 密度, 累计 import numpy as np import matplotlib.pyplot as plt from scipy.stats import norm fig, axs = plt.subplots(2,2, figsize=(6,6)) ## 构建数据 mu, sigma = 100, 15 data = mu + sigma * np.random.randn(10000) ## [0,0]位置-频数图 n, bins, patches = axs[0][0].hist(data,bins=10) axs[0][0].set(title=\\"frequency\\") ## [0,1]位置-频率图, 纵轴的频率, 使用weights参数控制 weights = np.ones_like(data )/float(len(data)) n, bins, patches = axs[0][1].hist(data,bins=10, weights=weights) axs[0][1].set(title=\\"relative frequency\\") ## [1, 0]位置-概率密度, 纵轴是似然值, 使用density参数控制 mu = np.mean(data) sigma = np.std(data) y = norm.pdf(bins, mu, sigma) axs[1][0].plot(bins, y, 'r--') axs[1][0].hist(data, bins=10, density=True) axs[1][0].set(title=\\"probability density function\\") ## [1, 1]位置-累计密度函数 axs[1][1].hist(data,20,density=1, cumulative=True) axs[1][1].set(title=\\"cumulative distribution function\\") fig.show()","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E5%AD%A6/%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/matplotlib/5hist.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"hist"}],["meta",{"property":"og:description","content":"hist 直方图主要用来查看数据的分布. 频数, 频率, 密度, 累计 import numpy as np import matplotlib.pyplot as plt from scipy.stats import norm fig, axs = plt.subplots(2,2, figsize=(6,6)) ## 构建数据 mu, sigma = 100, 15 data = mu + sigma * np.random.randn(10000) ## [0,0]位置-频数图 n, bins, patches = axs[0][0].hist(data,bins=10) axs[0][0].set(title=\\"frequency\\") ## [0,1]位置-频率图, 纵轴的频率, 使用weights参数控制 weights = np.ones_like(data )/float(len(data)) n, bins, patches = axs[0][1].hist(data,bins=10, weights=weights) axs[0][1].set(title=\\"relative frequency\\") ## [1, 0]位置-概率密度, 纵轴是似然值, 使用density参数控制 mu = np.mean(data) sigma = np.std(data) y = norm.pdf(bins, mu, sigma) axs[1][0].plot(bins, y, 'r--') axs[1][0].hist(data, bins=10, density=True) axs[1][0].set(title=\\"probability density function\\") ## [1, 1]位置-累计密度函数 axs[1][1].hist(data,20,density=1, cumulative=True) axs[1][1].set(title=\\"cumulative distribution function\\") fig.show()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-18T14:02:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-18T14:02:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"hist\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-18T14:02:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"频数, 频率, 密度, 累计","slug":"频数-频率-密度-累计","link":"#频数-频率-密度-累计","children":[]},{"level":2,"title":"快捷绘制分布以及密度","slug":"快捷绘制分布以及密度","link":"#快捷绘制分布以及密度","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"返回","slug":"返回","link":"#返回","children":[]}]},{"level":2,"title":"np.histogram","slug":"np-histogram","link":"#np-histogram","children":[{"level":3,"title":"参数","slug":"参数-1","link":"#参数-1","children":[]},{"level":3,"title":"返回","slug":"返回-1","link":"#返回-1","children":[]}]}],"git":{"createdTime":1739887321000,"updatedTime":1739887321000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":2.71,"words":813},"filePathRelative":"数学/分析工具/matplotlib/5hist.md","localizedDate":"2025年2月18日","excerpt":"<h1> hist</h1>\\n<p>直方图主要用来查看数据的分布.</p>\\n<h2> 频数, 频率, 密度, 累计</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> numpy <span class=\\"token keyword\\">as</span> np\\n<span class=\\"token keyword\\">import</span> matplotlib<span class=\\"token punctuation\\">.</span>pyplot <span class=\\"token keyword\\">as</span> plt\\n<span class=\\"token keyword\\">from</span> scipy<span class=\\"token punctuation\\">.</span>stats <span class=\\"token keyword\\">import</span> norm\\n\\nfig<span class=\\"token punctuation\\">,</span> axs <span class=\\"token operator\\">=</span> plt<span class=\\"token punctuation\\">.</span>subplots<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> figsize<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">6</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">6</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">## 构建数据</span>\\n\\nmu<span class=\\"token punctuation\\">,</span> sigma <span class=\\"token operator\\">=</span> <span class=\\"token number\\">100</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">15</span>\\ndata <span class=\\"token operator\\">=</span> mu <span class=\\"token operator\\">+</span> sigma <span class=\\"token operator\\">*</span> np<span class=\\"token punctuation\\">.</span>random<span class=\\"token punctuation\\">.</span>randn<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">10000</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">## [0,0]位置-频数图</span>\\nn<span class=\\"token punctuation\\">,</span> bins<span class=\\"token punctuation\\">,</span> patches <span class=\\"token operator\\">=</span> axs<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span>hist<span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">,</span>bins<span class=\\"token operator\\">=</span><span class=\\"token number\\">10</span><span class=\\"token punctuation\\">)</span>\\naxs<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">set</span><span class=\\"token punctuation\\">(</span>title<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"frequency\\"</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">## [0,1]位置-频率图, 纵轴的频率, 使用weights参数控制</span>\\nweights <span class=\\"token operator\\">=</span> np<span class=\\"token punctuation\\">.</span>ones_like<span class=\\"token punctuation\\">(</span>data <span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">/</span><span class=\\"token builtin\\">float</span><span class=\\"token punctuation\\">(</span><span class=\\"token builtin\\">len</span><span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\nn<span class=\\"token punctuation\\">,</span> bins<span class=\\"token punctuation\\">,</span> patches <span class=\\"token operator\\">=</span> axs<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span>hist<span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">,</span>bins<span class=\\"token operator\\">=</span><span class=\\"token number\\">10</span><span class=\\"token punctuation\\">,</span> weights<span class=\\"token operator\\">=</span>weights<span class=\\"token punctuation\\">)</span>\\naxs<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">set</span><span class=\\"token punctuation\\">(</span>title<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"relative frequency\\"</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">## [1, 0]位置-概率密度, 纵轴是似然值, 使用density参数控制</span>\\n\\nmu <span class=\\"token operator\\">=</span> np<span class=\\"token punctuation\\">.</span>mean<span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">)</span>\\nsigma <span class=\\"token operator\\">=</span> np<span class=\\"token punctuation\\">.</span>std<span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">)</span>\\ny <span class=\\"token operator\\">=</span> norm<span class=\\"token punctuation\\">.</span>pdf<span class=\\"token punctuation\\">(</span>bins<span class=\\"token punctuation\\">,</span> mu<span class=\\"token punctuation\\">,</span> sigma<span class=\\"token punctuation\\">)</span>\\n\\naxs<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span>plot<span class=\\"token punctuation\\">(</span>bins<span class=\\"token punctuation\\">,</span> y<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'r--'</span><span class=\\"token punctuation\\">)</span>\\naxs<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span>hist<span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">,</span> bins<span class=\\"token operator\\">=</span><span class=\\"token number\\">10</span><span class=\\"token punctuation\\">,</span> density<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">)</span>\\naxs<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">set</span><span class=\\"token punctuation\\">(</span>title<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"probability density function\\"</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">## [1, 1]位置-累计密度函数</span>\\n\\naxs<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span>hist<span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">,</span><span class=\\"token number\\">20</span><span class=\\"token punctuation\\">,</span>density<span class=\\"token operator\\">=</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> cumulative<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">)</span>\\naxs<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">set</span><span class=\\"token punctuation\\">(</span>title<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"cumulative distribution function\\"</span><span class=\\"token punctuation\\">)</span>\\n\\nfig<span class=\\"token punctuation\\">.</span>show<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
