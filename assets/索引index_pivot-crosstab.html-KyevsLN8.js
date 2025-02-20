const n=JSON.parse(`{"key":"v-17188c2d","path":"/%E6%95%B0%E5%AD%A6/%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/pandas/%E7%B4%A2%E5%BC%95index_pivot-crosstab.html","title":"索引index_pivot","lang":"zh-CN","frontmatter":{"description":"索引index_pivot 数据透视表类似于分组操作. alt text 他们3个的区别是: pivot_table, crosstab相较于pivot方法多了聚合的方法. pivot_table可以直接使用列名, crosstab只能接收Series import pandas as pd df = pd.DataFrame({ '1': ['A', 'B', 'A', 'B'], '2': ['C', 'D', 'D', 'C'], '3': ['E', 'F', 'E', 'F'], '4': [1, 2, 3, 4] }) df.pivot(index='1', columns='2', values='4') # 类似分组 # 2 C D # 1 # A 1 3 # B 4 2 df.pivot(index='1', columns='3', values='4') # 报错, 因为pivot没有聚合功能 pd.pivot_table(df, index='1', columns='3', values='4', aggfunc='sum') # 3 E F # 1 # A 4.0 NaN # B NaN 6.0 pd.crosstab(index=df['1'], columns=df['3'], values=df['4'], aggfunc=sum) # 3 E F # 1 # A 4.0 NaN # B NaN 6.0 pd.pivot_table(df, index='1', columns='2', values='4', aggfunc='sum') # 2 C D # 1 # A 1 3 # B 4 2 pd.crosstab(index=df['1'], columns=df['2'], values=df['4'], aggfunc=sum) # 2 C D # 1 # A 1 3 # B 4 2","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E5%AD%A6/%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/pandas/%E7%B4%A2%E5%BC%95index_pivot-crosstab.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"索引index_pivot"}],["meta",{"property":"og:description","content":"索引index_pivot 数据透视表类似于分组操作. alt text 他们3个的区别是: pivot_table, crosstab相较于pivot方法多了聚合的方法. pivot_table可以直接使用列名, crosstab只能接收Series import pandas as pd df = pd.DataFrame({ '1': ['A', 'B', 'A', 'B'], '2': ['C', 'D', 'D', 'C'], '3': ['E', 'F', 'E', 'F'], '4': [1, 2, 3, 4] }) df.pivot(index='1', columns='2', values='4') # 类似分组 # 2 C D # 1 # A 1 3 # B 4 2 df.pivot(index='1', columns='3', values='4') # 报错, 因为pivot没有聚合功能 pd.pivot_table(df, index='1', columns='3', values='4', aggfunc='sum') # 3 E F # 1 # A 4.0 NaN # B NaN 6.0 pd.crosstab(index=df['1'], columns=df['3'], values=df['4'], aggfunc=sum) # 3 E F # 1 # A 4.0 NaN # B NaN 6.0 pd.pivot_table(df, index='1', columns='2', values='4', aggfunc='sum') # 2 C D # 1 # A 1 3 # B 4 2 pd.crosstab(index=df['1'], columns=df['2'], values=df['4'], aggfunc=sum) # 2 C D # 1 # A 1 3 # B 4 2"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-18T14:02:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-18T14:02:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"索引index_pivot\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-18T14:02:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"pivot","slug":"pivot","link":"#pivot","children":[]},{"level":3,"title":"pivot_table","slug":"pivot-table","link":"#pivot-table","children":[]},{"level":3,"title":"crosstab","slug":"crosstab","link":"#crosstab","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1739887321000,"updatedTime":1739887321000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.08,"words":323},"filePathRelative":"数学/分析工具/pandas/索引index_pivot-crosstab.md","localizedDate":"2025年2月18日","excerpt":"<h1> 索引index_pivot</h1>\\n<p>数据透视表类似于分组操作.</p>\\n<figure><figcaption>alt text</figcaption></figure>\\n<p>他们3个的区别是:</p>\\n<ol>\\n<li>pivot_table, crosstab相较于pivot方法多了聚合的方法.</li>\\n<li>pivot_table可以直接使用列名, crosstab只能接收Series</li>\\n</ol>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> pandas <span class=\\"token keyword\\">as</span> pd\\n\\ndf <span class=\\"token operator\\">=</span> pd<span class=\\"token punctuation\\">.</span>DataFrame<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token string\\">'1'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'A'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'B'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'A'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'B'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'2'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'C'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'D'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'D'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'C'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'3'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'E'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'F'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'E'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'F'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'4'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">]</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n\\ndf<span class=\\"token punctuation\\">.</span>pivot<span class=\\"token punctuation\\">(</span>index<span class=\\"token operator\\">=</span><span class=\\"token string\\">'1'</span><span class=\\"token punctuation\\">,</span> columns<span class=\\"token operator\\">=</span><span class=\\"token string\\">'2'</span><span class=\\"token punctuation\\">,</span> values<span class=\\"token operator\\">=</span><span class=\\"token string\\">'4'</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 类似分组</span>\\n\\n<span class=\\"token comment\\"># 2  C  D</span>\\n<span class=\\"token comment\\"># 1      </span>\\n<span class=\\"token comment\\"># A  1  3</span>\\n<span class=\\"token comment\\"># B  4  2</span>\\n\\ndf<span class=\\"token punctuation\\">.</span>pivot<span class=\\"token punctuation\\">(</span>index<span class=\\"token operator\\">=</span><span class=\\"token string\\">'1'</span><span class=\\"token punctuation\\">,</span> columns<span class=\\"token operator\\">=</span><span class=\\"token string\\">'3'</span><span class=\\"token punctuation\\">,</span> values<span class=\\"token operator\\">=</span><span class=\\"token string\\">'4'</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 报错, 因为pivot没有聚合功能</span>\\n\\npd<span class=\\"token punctuation\\">.</span>pivot_table<span class=\\"token punctuation\\">(</span>df<span class=\\"token punctuation\\">,</span> index<span class=\\"token operator\\">=</span><span class=\\"token string\\">'1'</span><span class=\\"token punctuation\\">,</span> columns<span class=\\"token operator\\">=</span><span class=\\"token string\\">'3'</span><span class=\\"token punctuation\\">,</span> values<span class=\\"token operator\\">=</span><span class=\\"token string\\">'4'</span><span class=\\"token punctuation\\">,</span> aggfunc<span class=\\"token operator\\">=</span><span class=\\"token string\\">'sum'</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\"># 3    E    F</span>\\n<span class=\\"token comment\\"># 1          </span>\\n<span class=\\"token comment\\"># A  4.0  NaN</span>\\n<span class=\\"token comment\\"># B  NaN  6.0</span>\\n\\n\\npd<span class=\\"token punctuation\\">.</span>crosstab<span class=\\"token punctuation\\">(</span>index<span class=\\"token operator\\">=</span>df<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'1'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> columns<span class=\\"token operator\\">=</span>df<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'3'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> values<span class=\\"token operator\\">=</span>df<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'4'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> aggfunc<span class=\\"token operator\\">=</span><span class=\\"token builtin\\">sum</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\"># 3    E    F</span>\\n<span class=\\"token comment\\"># 1          </span>\\n<span class=\\"token comment\\"># A  4.0  NaN</span>\\n<span class=\\"token comment\\"># B  NaN  6.0</span>\\n\\npd<span class=\\"token punctuation\\">.</span>pivot_table<span class=\\"token punctuation\\">(</span>df<span class=\\"token punctuation\\">,</span> index<span class=\\"token operator\\">=</span><span class=\\"token string\\">'1'</span><span class=\\"token punctuation\\">,</span> columns<span class=\\"token operator\\">=</span><span class=\\"token string\\">'2'</span><span class=\\"token punctuation\\">,</span> values<span class=\\"token operator\\">=</span><span class=\\"token string\\">'4'</span><span class=\\"token punctuation\\">,</span> aggfunc<span class=\\"token operator\\">=</span><span class=\\"token string\\">'sum'</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\"># 2  C  D</span>\\n<span class=\\"token comment\\"># 1      </span>\\n<span class=\\"token comment\\"># A  1  3</span>\\n<span class=\\"token comment\\"># B  4  2</span>\\n\\npd<span class=\\"token punctuation\\">.</span>crosstab<span class=\\"token punctuation\\">(</span>index<span class=\\"token operator\\">=</span>df<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'1'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> columns<span class=\\"token operator\\">=</span>df<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'2'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> values<span class=\\"token operator\\">=</span>df<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'4'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> aggfunc<span class=\\"token operator\\">=</span><span class=\\"token builtin\\">sum</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\"># 2  C  D</span>\\n<span class=\\"token comment\\"># 1      </span>\\n<span class=\\"token comment\\"># A  1  3</span>\\n<span class=\\"token comment\\"># B  4  2</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
