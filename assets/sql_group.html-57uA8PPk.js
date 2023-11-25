const t=JSON.parse('{"key":"v-15cbcda3","path":"/%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/%E6%95%B0%E6%8D%AE%E5%BA%93/%E5%9F%BA%E7%A1%80/sql_group.html","title":"group","lang":"zh-CN","frontmatter":{"description":"group 分组查询就是将查询结果按照指定字段进行分组，字段中数据相等的分为一组。 分组查询基本的语法格式如下： GROUP BY 列名 [HAVING 条件表达式] [WITH ROLLUP] 列名: 是指按照指定字段的值进行分组。 HAVING 条件表达式: 用来过滤分组后的数据。 WITH ROLLUP：在所有记录的最后加上一条记录，显示select查询时聚合函数的统计和计算结果 数据 id account name order_id sku quantity unit_price ext_price 0 383080 Will LLC 10001 B1-20000 7 33.69 235.83 1 383080 Will LLC 10001 S1-27722 11 21.12 232.32 2 383080 Will LLC 10001 B1-86481 3 35.99 107.97 3 412290 Jerde-Hilpert 10005 S1-06532 48 55.82 2679.36 4 412290 Jerde-Hilpert 10005 S1-82801 21 13.62 286.02 5 412290 Jerde-Hilpert 10005 S1-06532 9 92.55 832.95 6 412290 Jerde-Hilpert 10005 S1-47412 44 78.91 3472.04 7 412290 Jerde-Hilpert 10005 S1-27722 36 25.42 915.12 8 218895 Kulas Inc 10006 S1-27722 32 95.66 3061.12 9 218895 Kulas Inc 10006 B1-33087 23 22.55 518.65 10 218895 Kulas Inc 10006 B1-33364 3 72.30 216.90 11 218895 Kulas Inc 10006 B1-20000 -1 72.18 -72.18","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/%E6%95%B0%E6%8D%AE%E5%BA%93/%E5%9F%BA%E7%A1%80/sql_group.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"group"}],["meta",{"property":"og:description","content":"group 分组查询就是将查询结果按照指定字段进行分组，字段中数据相等的分为一组。 分组查询基本的语法格式如下： GROUP BY 列名 [HAVING 条件表达式] [WITH ROLLUP] 列名: 是指按照指定字段的值进行分组。 HAVING 条件表达式: 用来过滤分组后的数据。 WITH ROLLUP：在所有记录的最后加上一条记录，显示select查询时聚合函数的统计和计算结果 数据 id account name order_id sku quantity unit_price ext_price 0 383080 Will LLC 10001 B1-20000 7 33.69 235.83 1 383080 Will LLC 10001 S1-27722 11 21.12 232.32 2 383080 Will LLC 10001 B1-86481 3 35.99 107.97 3 412290 Jerde-Hilpert 10005 S1-06532 48 55.82 2679.36 4 412290 Jerde-Hilpert 10005 S1-82801 21 13.62 286.02 5 412290 Jerde-Hilpert 10005 S1-06532 9 92.55 832.95 6 412290 Jerde-Hilpert 10005 S1-47412 44 78.91 3472.04 7 412290 Jerde-Hilpert 10005 S1-27722 36 25.42 915.12 8 218895 Kulas Inc 10006 S1-27722 32 95.66 3061.12 9 218895 Kulas Inc 10006 B1-33087 23 22.55 518.65 10 218895 Kulas Inc 10006 B1-33364 3 72.30 216.90 11 218895 Kulas Inc 10006 B1-20000 -1 72.18 -72.18"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"group"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"group\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"数据","slug":"数据","link":"#数据","children":[]},{"level":2,"title":"group by 单独使用","slug":"group-by-单独使用","link":"#group-by-单独使用","children":[]},{"level":2,"title":"group by + 聚合函数","slug":"group-by-聚合函数","link":"#group-by-聚合函数","children":[]},{"level":2,"title":"having","slug":"having","link":"#having","children":[]},{"level":2,"title":"with rollup","slug":"with-rollup","link":"#with-rollup","children":[]}],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":2.77,"words":832},"filePathRelative":"数据工程/数据库/基础/sql_group.md","localizedDate":"2023年11月25日","excerpt":"<h1> group</h1>\\n<p>分组查询就是将查询结果按照指定字段进行分组，字段中数据相等的分为一组。</p>\\n<p>分组查询基本的语法格式如下：\\n<code>GROUP BY 列名 [HAVING 条件表达式] [WITH ROLLUP]</code></p>\\n<ol>\\n<li>列名: 是指按照指定字段的值进行分组。</li>\\n<li>HAVING 条件表达式: 用来过滤分组后的数据。</li>\\n<li>WITH ROLLUP：在所有记录的最后加上一条记录，显示select查询时聚合函数的统计和计算结果</li>\\n</ol>\\n<h2> 数据</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>id</th>\\n<th>account</th>\\n<th>name</th>\\n<th>order_id</th>\\n<th>sku</th>\\n<th>quantity</th>\\n<th>unit_price</th>\\n<th>ext_price</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>0</td>\\n<td>383080</td>\\n<td>Will LLC</td>\\n<td>10001</td>\\n<td>B1-20000</td>\\n<td>7</td>\\n<td>33.69</td>\\n<td>235.83</td>\\n</tr>\\n<tr>\\n<td>1</td>\\n<td>383080</td>\\n<td>Will LLC</td>\\n<td>10001</td>\\n<td>S1-27722</td>\\n<td>11</td>\\n<td>21.12</td>\\n<td>232.32</td>\\n</tr>\\n<tr>\\n<td>2</td>\\n<td>383080</td>\\n<td>Will LLC</td>\\n<td>10001</td>\\n<td>B1-86481</td>\\n<td>3</td>\\n<td>35.99</td>\\n<td>107.97</td>\\n</tr>\\n<tr>\\n<td>3</td>\\n<td>412290</td>\\n<td>Jerde-Hilpert</td>\\n<td>10005</td>\\n<td>S1-06532</td>\\n<td>48</td>\\n<td>55.82</td>\\n<td>2679.36</td>\\n</tr>\\n<tr>\\n<td>4</td>\\n<td>412290</td>\\n<td>Jerde-Hilpert</td>\\n<td>10005</td>\\n<td>S1-82801</td>\\n<td>21</td>\\n<td>13.62</td>\\n<td>286.02</td>\\n</tr>\\n<tr>\\n<td>5</td>\\n<td>412290</td>\\n<td>Jerde-Hilpert</td>\\n<td>10005</td>\\n<td>S1-06532</td>\\n<td>9</td>\\n<td>92.55</td>\\n<td>832.95</td>\\n</tr>\\n<tr>\\n<td>6</td>\\n<td>412290</td>\\n<td>Jerde-Hilpert</td>\\n<td>10005</td>\\n<td>S1-47412</td>\\n<td>44</td>\\n<td>78.91</td>\\n<td>3472.04</td>\\n</tr>\\n<tr>\\n<td>7</td>\\n<td>412290</td>\\n<td>Jerde-Hilpert</td>\\n<td>10005</td>\\n<td>S1-27722</td>\\n<td>36</td>\\n<td>25.42</td>\\n<td>915.12</td>\\n</tr>\\n<tr>\\n<td>8</td>\\n<td>218895</td>\\n<td>Kulas Inc</td>\\n<td>10006</td>\\n<td>S1-27722</td>\\n<td>32</td>\\n<td>95.66</td>\\n<td>3061.12</td>\\n</tr>\\n<tr>\\n<td>9</td>\\n<td>218895</td>\\n<td>Kulas Inc</td>\\n<td>10006</td>\\n<td>B1-33087</td>\\n<td>23</td>\\n<td>22.55</td>\\n<td>518.65</td>\\n</tr>\\n<tr>\\n<td>10</td>\\n<td>218895</td>\\n<td>Kulas Inc</td>\\n<td>10006</td>\\n<td>B1-33364</td>\\n<td>3</td>\\n<td>72.30</td>\\n<td>216.90</td>\\n</tr>\\n<tr>\\n<td>11</td>\\n<td>218895</td>\\n<td>Kulas Inc</td>\\n<td>10006</td>\\n<td>B1-20000</td>\\n<td>-1</td>\\n<td>72.18</td>\\n<td>-72.18</td>\\n</tr>\\n</tbody>\\n</table>","copyright":{"author":"王新宇"},"autoDesc":true}');export{t as data};
