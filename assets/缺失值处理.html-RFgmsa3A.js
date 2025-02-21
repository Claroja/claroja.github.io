const n=JSON.parse(`{"key":"v-4f785ccd","path":"/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1_2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/%E6%95%B0%E6%8D%AE%E9%A2%84%E5%A4%84%E7%90%86/%E7%BC%BA%E5%A4%B1%E5%80%BC%E5%A4%84%E7%90%86.html","title":"缺失值处理","lang":"zh-CN","frontmatter":{"description":"缺失值处理 方法 pandas.DataFrame.fillna pandas.DataFrame.isnull pandas.DataFrame.isna isnull是isna的简称, 二者是一样的效果 案例 import numpy as np import pandas as pd a = np.arange(100, dtype=float).reshape((10, 10)) a[0, 1] = np.nan a[0, 3] = np.nan a[0, 4] = np.nan a[0, 6] = np.nan a[3, 1] = np.nan a[3, 3] = np.nan a[3, 4] = np.nan a[3, 6] = np.nan df = pd.DataFrame(data=a) # 重命名列名 df.columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'] print(df) # 筛选需要填充的列 print(df.columns[df.isnull().sum() &gt; 0]) # 用列均值进行填充NaN for column in list(df.columns[df.isnull().sum() &gt; 0]): mean_val = df[column].mean() df[column].fillna(mean_val, inplace=True) # 用后一行的值进行填充NaN # print(df.fillna(method='backfill', axis=0, inplace=True)) # 筛选需要填充的列 发现没有这样的列了 print(df.columns[df.isnull().sum() &gt; 0]) print(df)","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1_2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/%E6%95%B0%E6%8D%AE%E9%A2%84%E5%A4%84%E7%90%86/%E7%BC%BA%E5%A4%B1%E5%80%BC%E5%A4%84%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"缺失值处理"}],["meta",{"property":"og:description","content":"缺失值处理 方法 pandas.DataFrame.fillna pandas.DataFrame.isnull pandas.DataFrame.isna isnull是isna的简称, 二者是一样的效果 案例 import numpy as np import pandas as pd a = np.arange(100, dtype=float).reshape((10, 10)) a[0, 1] = np.nan a[0, 3] = np.nan a[0, 4] = np.nan a[0, 6] = np.nan a[3, 1] = np.nan a[3, 3] = np.nan a[3, 4] = np.nan a[3, 6] = np.nan df = pd.DataFrame(data=a) # 重命名列名 df.columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'] print(df) # 筛选需要填充的列 print(df.columns[df.isnull().sum() &gt; 0]) # 用列均值进行填充NaN for column in list(df.columns[df.isnull().sum() &gt; 0]): mean_val = df[column].mean() df[column].fillna(mean_val, inplace=True) # 用后一行的值进行填充NaN # print(df.fillna(method='backfill', axis=0, inplace=True)) # 筛选需要填充的列 发现没有这样的列了 print(df.columns[df.isnull().sum() &gt; 0]) print(df)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"缺失值处理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"方法","slug":"方法","link":"#方法","children":[]},{"level":2,"title":"案例","slug":"案例","link":"#案例","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.62,"words":186},"filePathRelative":"4机器学习/1_2机器学习流程/数据预处理/缺失值处理.md","localizedDate":"2025年2月21日","excerpt":"<h1> 缺失值处理</h1>\\n<h2> 方法</h2>\\n<ul>\\n<li>\\n<p>pandas.DataFrame.fillna</p>\\n</li>\\n<li>\\n<p>pandas.DataFrame.isnull</p>\\n</li>\\n<li>\\n<p>pandas.DataFrame.isna</p>\\n<blockquote>\\n<p>isnull是isna的简称, 二者是一样的效果</p>\\n</blockquote>\\n</li>\\n</ul>\\n<h2> 案例</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> numpy <span class=\\"token keyword\\">as</span> np\\n<span class=\\"token keyword\\">import</span> pandas <span class=\\"token keyword\\">as</span> pd\\n\\na <span class=\\"token operator\\">=</span> np<span class=\\"token punctuation\\">.</span>arange<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">100</span><span class=\\"token punctuation\\">,</span> dtype<span class=\\"token operator\\">=</span><span class=\\"token builtin\\">float</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>reshape<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">10</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\na<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> np<span class=\\"token punctuation\\">.</span>nan\\na<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> np<span class=\\"token punctuation\\">.</span>nan\\na<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> np<span class=\\"token punctuation\\">.</span>nan\\na<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">6</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> np<span class=\\"token punctuation\\">.</span>nan\\n\\na<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> np<span class=\\"token punctuation\\">.</span>nan\\na<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> np<span class=\\"token punctuation\\">.</span>nan\\na<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> np<span class=\\"token punctuation\\">.</span>nan\\na<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">6</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> np<span class=\\"token punctuation\\">.</span>nan\\n\\ndf <span class=\\"token operator\\">=</span> pd<span class=\\"token punctuation\\">.</span>DataFrame<span class=\\"token punctuation\\">(</span>data<span class=\\"token operator\\">=</span>a<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\"># 重命名列名</span>\\ndf<span class=\\"token punctuation\\">.</span>columns <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'a'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'b'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'c'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'d'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'e'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'f'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'g'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'h'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'i'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'j'</span><span class=\\"token punctuation\\">]</span>\\n\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>df<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\"># 筛选需要填充的列</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>df<span class=\\"token punctuation\\">.</span>columns<span class=\\"token punctuation\\">[</span>df<span class=\\"token punctuation\\">.</span>isnull<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">sum</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&gt;</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\"># 用列均值进行填充NaN</span>\\n<span class=\\"token keyword\\">for</span> column <span class=\\"token keyword\\">in</span> <span class=\\"token builtin\\">list</span><span class=\\"token punctuation\\">(</span>df<span class=\\"token punctuation\\">.</span>columns<span class=\\"token punctuation\\">[</span>df<span class=\\"token punctuation\\">.</span>isnull<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">sum</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&gt;</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    mean_val <span class=\\"token operator\\">=</span> df<span class=\\"token punctuation\\">[</span>column<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span>mean<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n    df<span class=\\"token punctuation\\">[</span>column<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span>fillna<span class=\\"token punctuation\\">(</span>mean_val<span class=\\"token punctuation\\">,</span> inplace<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\"># 用后一行的值进行填充NaN</span>\\n<span class=\\"token comment\\"># print(df.fillna(method='backfill', axis=0, inplace=True))</span>\\n\\n\\n<span class=\\"token comment\\"># 筛选需要填充的列  发现没有这样的列了</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>df<span class=\\"token punctuation\\">.</span>columns<span class=\\"token punctuation\\">[</span>df<span class=\\"token punctuation\\">.</span>isnull<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">sum</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&gt;</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>df<span class=\\"token punctuation\\">)</span>\\n\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
