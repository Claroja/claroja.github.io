const n=JSON.parse(`{"key":"v-c6e23430","path":"/%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/%E6%95%B0%E6%8D%AE%E5%BA%93/connect/sql_python.html","title":"python","lang":"zh-CN","frontmatter":{"description":"python MySQL 1.最原始的方法 import pymysql CONN = pymysql.connect(host='127.0.0.1', port=3306, user='root', password='root', database='ss', charset='utf8') cursor = CONN.cursor() cursor.execute('select * from test') result = cursor.fetchall() cursor.close() print(result)","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/%E6%95%B0%E6%8D%AE%E5%BA%93/connect/sql_python.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"python"}],["meta",{"property":"og:description","content":"python MySQL 1.最原始的方法 import pymysql CONN = pymysql.connect(host='127.0.0.1', port=3306, user='root', password='root', database='ss', charset='utf8') cursor = CONN.cursor() cursor.execute('select * from test') result = cursor.fetchall() cursor.close() print(result)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"python\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.31,"words":92},"filePathRelative":"数据工程/数据库/connect/sql_python.md","localizedDate":"2023年11月25日","excerpt":"<h1> python</h1>\\n<p>MySQL\\n1.最原始的方法</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> pymysql\\nCONN <span class=\\"token operator\\">=</span> pymysql<span class=\\"token punctuation\\">.</span>connect<span class=\\"token punctuation\\">(</span>host<span class=\\"token operator\\">=</span><span class=\\"token string\\">'127.0.0.1'</span><span class=\\"token punctuation\\">,</span>\\n                       port<span class=\\"token operator\\">=</span><span class=\\"token number\\">3306</span><span class=\\"token punctuation\\">,</span>\\n                       user<span class=\\"token operator\\">=</span><span class=\\"token string\\">'root'</span><span class=\\"token punctuation\\">,</span>\\n                       password<span class=\\"token operator\\">=</span><span class=\\"token string\\">'root'</span><span class=\\"token punctuation\\">,</span>\\n                       database<span class=\\"token operator\\">=</span><span class=\\"token string\\">'ss'</span><span class=\\"token punctuation\\">,</span>\\n                       charset<span class=\\"token operator\\">=</span><span class=\\"token string\\">'utf8'</span><span class=\\"token punctuation\\">)</span>\\n\\ncursor <span class=\\"token operator\\">=</span> CONN<span class=\\"token punctuation\\">.</span>cursor<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\ncursor<span class=\\"token punctuation\\">.</span>execute<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'select * from test'</span><span class=\\"token punctuation\\">)</span>\\nresult <span class=\\"token operator\\">=</span> cursor<span class=\\"token punctuation\\">.</span>fetchall<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\ncursor<span class=\\"token punctuation\\">.</span>close<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>result<span class=\\"token punctuation\\">)</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
