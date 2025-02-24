const n=JSON.parse(`{"key":"v-c0dca7b0","path":"/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/3%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/2pandas/%E7%BC%BA%E5%A4%B1%E5%80%BC/%E7%BC%BA%E5%A4%B1%E5%80%BC%E5%AE%9A%E4%B9%89.html","title":"","lang":"zh-CN","frontmatter":{"description":"缺失值的定义 pandas使用NA表示, StringDtype, Int64Dtype, Float64Dtype, BooleanDtype, ArrowDtype. 当不指定类型时 默认使用numpy的缺失值表示方法NAN, 对应数据类型是数据类型float64 import pandas as pd pd.Series([1, None]) # [1.0, NaN], dtype: float64 pd.Series([1.0, None]) # [1.0, NaN], dtype: float64 pd.Series([1, None], dtype=\\"Int64\\") # [1, NA], dtype: Int64 pd.Series([1.0, None], dtype=\\"Int64\\") # [1, NA], dtype: int64 pd.Series([1, None], dtype=\\"Float64\\") # [1.0, NA], dtype: Float64 pd.Series([1.0, None], dtype=\\"Float64\\") # [1.0, NA], dtype: Float64 默认使用 pd.Series([\\"a\\", None]) # ['a', None], dtype: object pd.Series([\\"a\\", None], dtype='string') # ['a', NA], dtype: string pandas的Int和Float参数对应的都是大写开头, 小写开头, 会认为是numpy的数据类型. 而字符串string类型则是小写开头 import pandas as pd pd.Series([1, None], dtype=\\"float64\\") # [1.0, NaN], dtype: float64 pd.Series([1.0, None], dtype=\\"int64\\") # ?? pandas使用NaT表示np.datetime64, np.timedelta64和PeriodDtype的缺失值. pd.Series([pd.Timestamp('20180310'), None]) # [2018-03-10, NaT], dtype: dtype: datetime64[ns] pd.Series([pd.Timestamp('20180310'), None], dtype='datetime64[ns]') # [2018-03-10, NaT], dtype: dtype: datetime64[ns]","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/3%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/2pandas/%E7%BC%BA%E5%A4%B1%E5%80%BC/%E7%BC%BA%E5%A4%B1%E5%80%BC%E5%AE%9A%E4%B9%89.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:description","content":"缺失值的定义 pandas使用NA表示, StringDtype, Int64Dtype, Float64Dtype, BooleanDtype, ArrowDtype. 当不指定类型时 默认使用numpy的缺失值表示方法NAN, 对应数据类型是数据类型float64 import pandas as pd pd.Series([1, None]) # [1.0, NaN], dtype: float64 pd.Series([1.0, None]) # [1.0, NaN], dtype: float64 pd.Series([1, None], dtype=\\"Int64\\") # [1, NA], dtype: Int64 pd.Series([1.0, None], dtype=\\"Int64\\") # [1, NA], dtype: int64 pd.Series([1, None], dtype=\\"Float64\\") # [1.0, NA], dtype: Float64 pd.Series([1.0, None], dtype=\\"Float64\\") # [1.0, NA], dtype: Float64 默认使用 pd.Series([\\"a\\", None]) # ['a', None], dtype: object pd.Series([\\"a\\", None], dtype='string') # ['a', NA], dtype: string pandas的Int和Float参数对应的都是大写开头, 小写开头, 会认为是numpy的数据类型. 而字符串string类型则是小写开头 import pandas as pd pd.Series([1, None], dtype=\\"float64\\") # [1.0, NaN], dtype: float64 pd.Series([1.0, None], dtype=\\"int64\\") # ?? pandas使用NaT表示np.datetime64, np.timedelta64和PeriodDtype的缺失值. pd.Series([pd.Timestamp('20180310'), None]) # [2018-03-10, NaT], dtype: dtype: datetime64[ns] pd.Series([pd.Timestamp('20180310'), None], dtype='datetime64[ns]') # [2018-03-10, NaT], dtype: dtype: datetime64[ns]"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"缺失值的定义","slug":"缺失值的定义","link":"#缺失值的定义","children":[]},{"level":2,"title":"缺失值检测","slug":"缺失值检测","link":"#缺失值检测","children":[]}],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.03,"words":308},"filePathRelative":"2机器学习/3分析工具/2pandas/缺失值/缺失值定义.md","localizedDate":"2025年2月24日","excerpt":"<h2> 缺失值的定义</h2>\\n<ol>\\n<li>\\n<p>pandas使用<code>NA</code>表示, <code>StringDtype</code>, <code>Int64Dtype</code>, <code>Float64Dtype</code>, <code>BooleanDtype</code>, <code>ArrowDtype</code>.</p>\\n<ol>\\n<li>\\n<p>当不指定类型时</p>\\n<ol>\\n<li>\\n<p>默认使用numpy的缺失值表示方法<code>NAN</code>, 对应数据类型是数据类型<code>float64</code></p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> pandas <span class=\\"token keyword\\">as</span> pd\\npd<span class=\\"token punctuation\\">.</span>Series<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token boolean\\">None</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># [1.0, NaN], dtype: float64</span>\\npd<span class=\\"token punctuation\\">.</span>Series<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1.0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token boolean\\">None</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># [1.0, NaN], dtype: float64</span>\\n\\npd<span class=\\"token punctuation\\">.</span>Series<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token boolean\\">None</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> dtype<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"Int64\\"</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># [1, NA], dtype: Int64</span>\\npd<span class=\\"token punctuation\\">.</span>Series<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1.0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token boolean\\">None</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> dtype<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"Int64\\"</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># [1, NA], dtype: int64</span>\\n\\npd<span class=\\"token punctuation\\">.</span>Series<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token boolean\\">None</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> dtype<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"Float64\\"</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># [1.0, NA], dtype: Float64</span>\\npd<span class=\\"token punctuation\\">.</span>Series<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1.0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token boolean\\">None</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> dtype<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"Float64\\"</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># [1.0, NA], dtype: Float64</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>默认使用</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>pd<span class=\\"token punctuation\\">.</span>Series<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"a\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token boolean\\">None</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># ['a', None], dtype: object</span>\\npd<span class=\\"token punctuation\\">.</span>Series<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"a\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token boolean\\">None</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> dtype<span class=\\"token operator\\">=</span><span class=\\"token string\\">'string'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\"># ['a', NA], dtype: string</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ol>\\n</li>\\n<li>\\n<p>pandas的<code>Int</code>和<code>Float</code>参数对应的都是大写开头, 小写开头, 会认为是numpy的数据类型. 而字符串<code>string</code>类型则是小写开头</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> pandas <span class=\\"token keyword\\">as</span> pd\\npd<span class=\\"token punctuation\\">.</span>Series<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token boolean\\">None</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> dtype<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"float64\\"</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># [1.0, NaN], dtype: float64</span>\\npd<span class=\\"token punctuation\\">.</span>Series<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1.0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token boolean\\">None</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> dtype<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"int64\\"</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># ??</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ol>\\n</li>\\n<li>\\n<p>pandas使用<code>NaT</code>表示<code>np.datetime64</code>, <code>np.timedelta64</code>和<code>PeriodDtype</code>的缺失值.</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>pd<span class=\\"token punctuation\\">.</span>Series<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span>pd<span class=\\"token punctuation\\">.</span>Timestamp<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'20180310'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token boolean\\">None</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># [2018-03-10, NaT], dtype: dtype: datetime64[ns]</span>\\npd<span class=\\"token punctuation\\">.</span>Series<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span>pd<span class=\\"token punctuation\\">.</span>Timestamp<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'20180310'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token boolean\\">None</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> dtype<span class=\\"token operator\\">=</span><span class=\\"token string\\">'datetime64[ns]'</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># [2018-03-10, NaT], dtype: dtype: datetime64[ns]</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ol>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
