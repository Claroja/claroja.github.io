const n=JSON.parse(`{"key":"v-1bdb8873","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/6%E6%96%B9%E6%B3%95(function)/%E8%A3%85%E9%A5%B0%E5%99%A8.html","title":"装饰器","lang":"zh-CN","frontmatter":{"description":"装饰器 最佳实践 保存函数运行的中间结果 一些方法处理时间较长, 返回运行消耗大量时间, 可以将中间结果保存起来, 后面使用时, 直接调取 from pathlib import Path import pickle def saveOrLoad_middle_result(func): def dec(*args,**kwargs): save_path = kwargs['save_path'] if Path(f'{save_path}{func.__name__}.pkl').exists(): func_result = pickle.load(open(f'{save_path}{func.__name__}.pkl','rb')) else: func_result = func(*args,**kwargs) pickle.dump(func_result, open(f'{save_path}{func.__name__}.pkl', 'wb')) return func_result return dec @saveOrLoad_middle_result def test(save_path): return save_path test(save_path='./data/rec/') # 3 上面设计不够合理, 因为被装饰函数func()本身是不应该具备保护中间结果的功能的, 该功能应该由dec()来完成, 所以save_path参数应该传递给装饰器函数saveOrLoad_middle_result(save_path), 而func()不需要传入该参数. def saveOrLoad_middle_result(save_path): def wrap(func): def dec(*args,**kwargs): if Path(f'{save_path}{func.__name__}.pkl').exists(): func_result = pickle.load(open(f'{save_path}{func.__name__}.pkl','rb')) else: func_result = func(*args,**kwargs) pickle.dump(func_result, open(f'{save_path}{func.__name__}.pkl', 'wb')) return func_result return dec return wrap @saveOrLoad_middle_result(save_path='./data/rec/') def test(save_path): return save_path test(save_path='1') # 3","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/6%E6%96%B9%E6%B3%95(function)/%E8%A3%85%E9%A5%B0%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"装饰器"}],["meta",{"property":"og:description","content":"装饰器 最佳实践 保存函数运行的中间结果 一些方法处理时间较长, 返回运行消耗大量时间, 可以将中间结果保存起来, 后面使用时, 直接调取 from pathlib import Path import pickle def saveOrLoad_middle_result(func): def dec(*args,**kwargs): save_path = kwargs['save_path'] if Path(f'{save_path}{func.__name__}.pkl').exists(): func_result = pickle.load(open(f'{save_path}{func.__name__}.pkl','rb')) else: func_result = func(*args,**kwargs) pickle.dump(func_result, open(f'{save_path}{func.__name__}.pkl', 'wb')) return func_result return dec @saveOrLoad_middle_result def test(save_path): return save_path test(save_path='./data/rec/') # 3 上面设计不够合理, 因为被装饰函数func()本身是不应该具备保护中间结果的功能的, 该功能应该由dec()来完成, 所以save_path参数应该传递给装饰器函数saveOrLoad_middle_result(save_path), 而func()不需要传入该参数. def saveOrLoad_middle_result(save_path): def wrap(func): def dec(*args,**kwargs): if Path(f'{save_path}{func.__name__}.pkl').exists(): func_result = pickle.load(open(f'{save_path}{func.__name__}.pkl','rb')) else: func_result = func(*args,**kwargs) pickle.dump(func_result, open(f'{save_path}{func.__name__}.pkl', 'wb')) return func_result return dec return wrap @saveOrLoad_middle_result(save_path='./data/rec/') def test(save_path): return save_path test(save_path='1') # 3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-18T14:02:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-18T14:02:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"装饰器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-18T14:02:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]},{"level":2,"title":"基础知识","slug":"基础知识","link":"#基础知识","children":[]},{"level":2,"title":"原理","slug":"原理","link":"#原理","children":[]},{"level":2,"title":"处理被装饰函数的返回值","slug":"处理被装饰函数的返回值","link":"#处理被装饰函数的返回值","children":[]},{"level":2,"title":"给被装饰函数传参","slug":"给被装饰函数传参","link":"#给被装饰函数传参","children":[]},{"level":2,"title":"装饰器传入参数","slug":"装饰器传入参数","link":"#装饰器传入参数","children":[]},{"level":2,"title":"多层装饰器","slug":"多层装饰器","link":"#多层装饰器","children":[]}],"git":{"createdTime":1701435578000,"updatedTime":1739887321000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1},{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":3.62,"words":1085},"filePathRelative":"编程语言/python/6方法(function)/装饰器.md","localizedDate":"2023年12月1日","excerpt":"<h1> 装饰器</h1>\\n<h2> 最佳实践</h2>\\n<ol>\\n<li>\\n<p>保存函数运行的中间结果</p>\\n<p>一些方法处理时间较长, 返回运行消耗大量时间, 可以将中间结果保存起来, 后面使用时, 直接调取</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">from</span> pathlib <span class=\\"token keyword\\">import</span> Path\\n<span class=\\"token keyword\\">import</span> pickle\\n\\n\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">saveOrLoad_middle_result</span><span class=\\"token punctuation\\">(</span>func<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">dec</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">*</span>args<span class=\\"token punctuation\\">,</span><span class=\\"token operator\\">**</span>kwargs<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        save_path <span class=\\"token operator\\">=</span> kwargs<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'save_path'</span><span class=\\"token punctuation\\">]</span>\\n        <span class=\\"token keyword\\">if</span> Path<span class=\\"token punctuation\\">(</span><span class=\\"token string-interpolation\\"><span class=\\"token string\\">f'</span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span>save_path<span class=\\"token punctuation\\">}</span></span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span>func<span class=\\"token punctuation\\">.</span>__name__<span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">.pkl'</span></span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>exists<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n            func_result <span class=\\"token operator\\">=</span> pickle<span class=\\"token punctuation\\">.</span>load<span class=\\"token punctuation\\">(</span><span class=\\"token builtin\\">open</span><span class=\\"token punctuation\\">(</span><span class=\\"token string-interpolation\\"><span class=\\"token string\\">f'</span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span>save_path<span class=\\"token punctuation\\">}</span></span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span>func<span class=\\"token punctuation\\">.</span>__name__<span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">.pkl'</span></span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">'rb'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">:</span>\\n            func_result <span class=\\"token operator\\">=</span> func<span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">*</span>args<span class=\\"token punctuation\\">,</span><span class=\\"token operator\\">**</span>kwargs<span class=\\"token punctuation\\">)</span>  \\n            pickle<span class=\\"token punctuation\\">.</span>dump<span class=\\"token punctuation\\">(</span>func_result<span class=\\"token punctuation\\">,</span> <span class=\\"token builtin\\">open</span><span class=\\"token punctuation\\">(</span><span class=\\"token string-interpolation\\"><span class=\\"token string\\">f'</span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span>save_path<span class=\\"token punctuation\\">}</span></span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span>func<span class=\\"token punctuation\\">.</span>__name__<span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">.pkl'</span></span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'wb'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">return</span> func_result\\n    <span class=\\"token keyword\\">return</span> dec\\n\\n<span class=\\"token decorator annotation punctuation\\">@saveOrLoad_middle_result</span>\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">test</span><span class=\\"token punctuation\\">(</span>save_path<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">return</span> save_path\\n\\ntest<span class=\\"token punctuation\\">(</span>save_path<span class=\\"token operator\\">=</span><span class=\\"token string\\">'./data/rec/'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\"># 3</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p>上面设计不够合理, 因为被装饰函数<code>func()</code>本身是不应该具备保护中间结果的功能的, 该功能应该由<code>dec()</code>来完成, 所以<code>save_path</code>参数应该传递给装饰器函数<code>saveOrLoad_middle_result(save_path)</code>, 而<code>func()</code>不需要传入该参数.</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">def</span> <span class=\\"token function\\">saveOrLoad_middle_result</span><span class=\\"token punctuation\\">(</span>save_path<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">wrap</span><span class=\\"token punctuation\\">(</span>func<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">dec</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">*</span>args<span class=\\"token punctuation\\">,</span><span class=\\"token operator\\">**</span>kwargs<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n            <span class=\\"token keyword\\">if</span> Path<span class=\\"token punctuation\\">(</span><span class=\\"token string-interpolation\\"><span class=\\"token string\\">f'</span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span>save_path<span class=\\"token punctuation\\">}</span></span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span>func<span class=\\"token punctuation\\">.</span>__name__<span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">.pkl'</span></span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>exists<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n                func_result <span class=\\"token operator\\">=</span> pickle<span class=\\"token punctuation\\">.</span>load<span class=\\"token punctuation\\">(</span><span class=\\"token builtin\\">open</span><span class=\\"token punctuation\\">(</span><span class=\\"token string-interpolation\\"><span class=\\"token string\\">f'</span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span>save_path<span class=\\"token punctuation\\">}</span></span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span>func<span class=\\"token punctuation\\">.</span>__name__<span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">.pkl'</span></span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">'rb'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n            <span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">:</span>\\n                func_result <span class=\\"token operator\\">=</span> func<span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">*</span>args<span class=\\"token punctuation\\">,</span><span class=\\"token operator\\">**</span>kwargs<span class=\\"token punctuation\\">)</span>  \\n                pickle<span class=\\"token punctuation\\">.</span>dump<span class=\\"token punctuation\\">(</span>func_result<span class=\\"token punctuation\\">,</span> <span class=\\"token builtin\\">open</span><span class=\\"token punctuation\\">(</span><span class=\\"token string-interpolation\\"><span class=\\"token string\\">f'</span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span>save_path<span class=\\"token punctuation\\">}</span></span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span>func<span class=\\"token punctuation\\">.</span>__name__<span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">.pkl'</span></span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'wb'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n            <span class=\\"token keyword\\">return</span> func_result\\n        <span class=\\"token keyword\\">return</span> dec\\n    <span class=\\"token keyword\\">return</span> wrap\\n\\n\\n<span class=\\"token decorator annotation punctuation\\">@saveOrLoad_middle_result</span><span class=\\"token punctuation\\">(</span>save_path<span class=\\"token operator\\">=</span><span class=\\"token string\\">'./data/rec/'</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">test</span><span class=\\"token punctuation\\">(</span>save_path<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">return</span> save_path\\n\\ntest<span class=\\"token punctuation\\">(</span>save_path<span class=\\"token operator\\">=</span><span class=\\"token string\\">'1'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\"># 3</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ol>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
