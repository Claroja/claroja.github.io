const e=JSON.parse(`{"key":"v-2fdc6f84","path":"/%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/%E6%95%B0%E6%8D%AE%E5%BA%93/%E6%9C%AA%E5%88%86%E7%B1%BB/pandas_sql.html","title":"sql","lang":"zh-CN","frontmatter":{"description":"sql 写入数据库 from sqlalchemy import create_engine engine = create_engine(\\"mysql+pymysql://root:123@localhost:3306/aaa?charset=utf8mb4\\") data.to_sql(name=\\"price\\",con=engine,if_exists='replace',index=False,index_label=False)","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/%E6%95%B0%E6%8D%AE%E5%BA%93/%E6%9C%AA%E5%88%86%E7%B1%BB/pandas_sql.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"sql"}],["meta",{"property":"og:description","content":"sql 写入数据库 from sqlalchemy import create_engine engine = create_engine(\\"mysql+pymysql://root:123@localhost:3306/aaa?charset=utf8mb4\\") data.to_sql(name=\\"price\\",con=engine,if_exists='replace',index=False,index_label=False)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"sql\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"写入数据库","slug":"写入数据库","link":"#写入数据库","children":[]},{"level":2,"title":"读取数据库","slug":"读取数据库","link":"#读取数据库","children":[]}],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.54,"words":162},"filePathRelative":"数据工程/数据库/未分类/pandas_sql.md","localizedDate":"2023年11月25日","excerpt":"<h1> sql</h1>\\n<h2> 写入数据库</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">from</span> sqlalchemy <span class=\\"token keyword\\">import</span> create_engine\\nengine <span class=\\"token operator\\">=</span> create_engine<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"mysql+pymysql://root:123@localhost:3306/aaa?charset=utf8mb4\\"</span><span class=\\"token punctuation\\">)</span>\\ndata<span class=\\"token punctuation\\">.</span>to_sql<span class=\\"token punctuation\\">(</span>name<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"price\\"</span><span class=\\"token punctuation\\">,</span>con<span class=\\"token operator\\">=</span>engine<span class=\\"token punctuation\\">,</span>if_exists<span class=\\"token operator\\">=</span><span class=\\"token string\\">'replace'</span><span class=\\"token punctuation\\">,</span>index<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">False</span><span class=\\"token punctuation\\">,</span>index_label<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">False</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{e as data};
