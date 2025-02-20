const a=JSON.parse(`{"key":"v-83bed78c","path":"/%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/%E6%95%B0%E6%8D%AE%E5%BA%93/%E9%80%9A%E7%94%A8/%E6%9C%AA%E5%88%86%E7%B1%BB/as-withAs.html","title":"as-withAs","lang":"zh-CN","frontmatter":{"description":"as-withAs 使用as取别名 给表取别名 select tb_aliasName.col from tb_name as tb_aliasName 有两个表分别是：\\"Persons\\" 和 \\"Product_Orders\\"。分别为它们指定别名 \\"p\\" 和 \\"po\\"。列出 \\"John Adams\\" 的所有定单。 SELECT po.OrderID, p.LastName, p.FirstName FROM Persons AS p, Product_Orders AS po WHERE p.LastName='Adams' AND p.FirstName='John';","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/%E6%95%B0%E6%8D%AE%E5%BA%93/%E9%80%9A%E7%94%A8/%E6%9C%AA%E5%88%86%E7%B1%BB/as-withAs.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"as-withAs"}],["meta",{"property":"og:description","content":"as-withAs 使用as取别名 给表取别名 select tb_aliasName.col from tb_name as tb_aliasName 有两个表分别是：\\"Persons\\" 和 \\"Product_Orders\\"。分别为它们指定别名 \\"p\\" 和 \\"po\\"。列出 \\"John Adams\\" 的所有定单。 SELECT po.OrderID, p.LastName, p.FirstName FROM Persons AS p, Product_Orders AS po WHERE p.LastName='Adams' AND p.FirstName='John';"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-11T09:16:47.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2024-11-11T09:16:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"as-withAs\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-11T09:16:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"使用as取别名","slug":"使用as取别名","link":"#使用as取别名","children":[]},{"level":2,"title":"with as","slug":"with-as","link":"#with-as","children":[]},{"level":2,"title":"Create table as select","slug":"create-table-as-select","link":"#create-table-as-select","children":[]}],"git":{"createdTime":1731316607000,"updatedTime":1731316607000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.99,"words":298},"filePathRelative":"数据工程/数据库/通用/未分类/as-withAs.md","localizedDate":"2024年11月11日","excerpt":"<h1> as-withAs</h1>\\n<h2> 使用as取别名</h2>\\n<ol>\\n<li>给表取别名 <code>select tb_aliasName.col from tb_name as tb_aliasName</code>\\n有两个表分别是：\\"Persons\\" 和 \\"Product_Orders\\"。分别为它们指定别名 \\"p\\" 和 \\"po\\"。列出 \\"John Adams\\" 的所有定单。</li>\\n</ol>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">SELECT</span> po<span class=\\"token punctuation\\">.</span>OrderID<span class=\\"token punctuation\\">,</span> p<span class=\\"token punctuation\\">.</span>LastName<span class=\\"token punctuation\\">,</span> p<span class=\\"token punctuation\\">.</span>FirstName\\n<span class=\\"token keyword\\">FROM</span> Persons <span class=\\"token keyword\\">AS</span> p<span class=\\"token punctuation\\">,</span> Product_Orders <span class=\\"token keyword\\">AS</span> po\\n<span class=\\"token keyword\\">WHERE</span> p<span class=\\"token punctuation\\">.</span>LastName<span class=\\"token operator\\">=</span><span class=\\"token string\\">'Adams'</span> <span class=\\"token operator\\">AND</span> p<span class=\\"token punctuation\\">.</span>FirstName<span class=\\"token operator\\">=</span><span class=\\"token string\\">'John'</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{a as data};
