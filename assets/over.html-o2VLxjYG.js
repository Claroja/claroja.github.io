import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,a}from"./app-7knaTE3M.js";const d={},e=a('<h1 id="over" tabindex="-1"><a class="header-anchor" href="#over" aria-hidden="true">#</a> over</h1><h2 id="数据" tabindex="-1"><a class="header-anchor" href="#数据" aria-hidden="true">#</a> 数据</h2><table><thead><tr><th>id</th><th>account</th><th>name</th><th>order_id</th><th>sku</th><th>quantity</th><th>unit_price</th><th>ext_price</th></tr></thead><tbody><tr><td>0</td><td>383080</td><td>Will LLC</td><td>10001</td><td>B1-20000</td><td>7</td><td>33.69</td><td>235.83</td></tr><tr><td>1</td><td>383080</td><td>Will LLC</td><td>10001</td><td>S1-27722</td><td>11</td><td>21.12</td><td>232.32</td></tr><tr><td>2</td><td>383080</td><td>Will LLC</td><td>10001</td><td>B1-86481</td><td>3</td><td>35.99</td><td>107.97</td></tr><tr><td>3</td><td>412290</td><td>Jerde-Hilpert</td><td>10005</td><td>S1-06532</td><td>48</td><td>55.82</td><td>2679.36</td></tr><tr><td>4</td><td>412290</td><td>Jerde-Hilpert</td><td>10005</td><td>S1-82801</td><td>21</td><td>13.62</td><td>286.02</td></tr><tr><td>5</td><td>412290</td><td>Jerde-Hilpert</td><td>10005</td><td>S1-06532</td><td>9</td><td>92.55</td><td>832.95</td></tr><tr><td>6</td><td>412290</td><td>Jerde-Hilpert</td><td>10005</td><td>S1-47412</td><td>44</td><td>78.91</td><td>3472.04</td></tr><tr><td>7</td><td>412290</td><td>Jerde-Hilpert</td><td>10005</td><td>S1-27722</td><td>36</td><td>25.42</td><td>915.12</td></tr><tr><td>8</td><td>218895</td><td>Kulas Inc</td><td>10006</td><td>S1-27722</td><td>32</td><td>95.66</td><td>3061.12</td></tr><tr><td>9</td><td>218895</td><td>Kulas Inc</td><td>10006</td><td>B1-33087</td><td>23</td><td>22.55</td><td>518.65</td></tr><tr><td>10</td><td>218895</td><td>Kulas Inc</td><td>10006</td><td>B1-33364</td><td>3</td><td>72.30</td><td>216.90</td></tr><tr><td>11</td><td>218895</td><td>Kulas Inc</td><td>10006</td><td>B1-20000</td><td>-1</td><td>72.18</td><td>-72.18</td></tr></tbody></table><p>字段解释:</p><ol><li><code>id</code>: 订单的唯一标识</li><li><code>account</code>: 用户的账号</li><li><code>name</code>: 用户的名称</li><li><code>order_id</code>: 订单id(1个订单可以由多个商品)</li><li><code>sku</code>: 商品名称</li><li><code>quantity</code>: 商品的个数</li><li><code>unit_price</code>: 每个商品的价格</li><li><code>ext_price</code>: <code>unit_price</code> * <code>quantity</code></li></ol><p>可以看到有三个不同的订单(orders), 10001,10005和10006. 每个订单有多种商品(sku).</p><h2 id="over-1" tabindex="-1"><a class="header-anchor" href="#over-1" aria-hidden="true">#</a> over</h2><p><code>over()</code>的意思就是将聚合的结果添加到每一行 查看每一个id的价格(sku*quantity), 以及<strong>整体</strong>的平均值</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>ext_price<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token function">AVG</span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>ext_price<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">OVER</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> <span class="token identifier"><span class="token punctuation">`</span>avg_price<span class="token punctuation">`</span></span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>order_detail<span class="token punctuation">`</span></span><span class="token punctuation">;</span>\n<span class="token string">&quot;&quot;&quot;\nid;ext_price;avg_price\n0;235.83;1040.50\n1;232.32;1040.50\n2;107.97;1040.50\n3;2679.36;1040.50\n4;286.02;1040.50\n5;832.95;1040.50\n6;3472.04;1040.50\n7;915.12;1040.50\n8;3061.12;1040.50\n9;518.65;1040.50\n10;216.9;1040.50\n11;-72.18;1040.50\n&quot;&quot;&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="partition-by" tabindex="-1"><a class="header-anchor" href="#partition-by" aria-hidden="true">#</a> partition by</h2><p>类似于<code>group by</code>语句, 在不同组内分别聚合运算, 并聚合结果显示在每组的每条记录里 查看每一个id的价格(sku*quantity), 以及<strong>组内</strong>的平均值</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>ext_price<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token function">AVG</span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>ext_price<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">OVER</span><span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> <span class="token identifier"><span class="token punctuation">`</span>order_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">AS</span> <span class="token identifier"><span class="token punctuation">`</span>avg_price<span class="token punctuation">`</span></span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>order_detail<span class="token punctuation">`</span></span><span class="token punctuation">;</span>\n<span class="token string">&quot;&quot;&quot;\nid;ext_price;avg_price\n0;235.83;192.04\n1;232.32;192.04\n2;107.97;192.04\n3;2679.36;1637.09\n4;286.02;1637.09\n5;832.95;1637.09\n6;3472.04;1637.09\n7;915.12;1637.09\n8;3061.12;931.12\n9;518.65;931.12\n10;216.9;931.12\n11;-72.18;931.12\n&quot;&quot;&quot;</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="排序函数" tabindex="-1"><a class="header-anchor" href="#排序函数" aria-hidden="true">#</a> 排序函数</h2><p>上面都是使用聚合函数(<code>avg</code>)搭配<code>over</code>来使用, 还有排序函数可以用. 下面使用<code>order_id</code>进行分组, 并在组内使用<code>ext_price</code>进行排序, <code>rank</code>列是排序的结果</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>order_id<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>ext_price<span class="token punctuation">`</span></span><span class="token punctuation">,</span> row_number<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">OVER</span><span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> <span class="token identifier"><span class="token punctuation">`</span>order_id<span class="token punctuation">`</span></span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token identifier"><span class="token punctuation">`</span>ext_price<span class="token punctuation">`</span></span> <span class="token keyword">ASC</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> <span class="token identifier"><span class="token punctuation">`</span>rank<span class="token punctuation">`</span></span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>order_detail<span class="token punctuation">`</span></span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>order_detail</p><table><thead><tr><th>id</th><th>order_id</th><th>ext_price</th><th>rank</th></tr></thead><tbody><tr><td>2</td><td>10001</td><td>107.97</td><td>1</td></tr><tr><td>1</td><td>10001</td><td>232.32</td><td>2</td></tr><tr><td>0</td><td>10001</td><td>235.83</td><td>3</td></tr><tr><td>4</td><td>10005</td><td>286.02</td><td>1</td></tr><tr><td>5</td><td>10005</td><td>832.95</td><td>2</td></tr><tr><td>7</td><td>10005</td><td>915.12</td><td>3</td></tr><tr><td>3</td><td>10005</td><td>2679.36</td><td>4</td></tr><tr><td>6</td><td>10005</td><td>3472.04</td><td>5</td></tr><tr><td>11</td><td>10006</td><td>-72.18</td><td>1</td></tr><tr><td>10</td><td>10006</td><td>216.9</td><td>2</td></tr><tr><td>9</td><td>10006</td><td>518.65</td><td>3</td></tr><tr><td>8</td><td>10006</td><td>3061.12</td><td>4</td></tr></tbody></table><p>语法解释</p><table><thead><tr><th>syntax</th><th>explain</th><th>example</th></tr></thead><tbody><tr><td><code>win_fn()</code></td><td>配合<code>over()</code>的函数</td><td>row_number(),rank(),dense_rank()</td></tr><tr><td><code>over</code></td><td>将结果写入每一行</td><td></td></tr><tr><td><code>partition by</code></td><td>分组</td><td></td></tr><tr><td><code>order by</code></td><td>排序, 如果<code>over</code>前用的是排序函数, 则会生成一个字段</td><td></td></tr></tbody></table><p>此外还有:</p><ol><li><code>row_number()</code> 不对重复值处理</li><li><code>rank()</code> 重复值会并列,后面的值按整体的序号</li><li><code>dense_rank()</code> 重复值会并列,后面的值不按整体的序号</li></ol><h2 id="典型应用" tabindex="-1"><a class="header-anchor" href="#典型应用" aria-hidden="true">#</a> 典型应用</h2><h3 id="分组topn" tabindex="-1"><a class="header-anchor" href="#分组topn" aria-hidden="true">#</a> 分组topn</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token punctuation">(</span>\n<span class="token keyword">SELECT</span> <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>order_id<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>ext_price<span class="token punctuation">`</span></span><span class="token punctuation">,</span> row_number<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">OVER</span><span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> <span class="token identifier"><span class="token punctuation">`</span>order_id<span class="token punctuation">`</span></span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token identifier"><span class="token punctuation">`</span>ext_price<span class="token punctuation">`</span></span> <span class="token keyword">ASC</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> <span class="token identifier"><span class="token punctuation">`</span>rank<span class="token punctuation">`</span></span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>order_detail<span class="token punctuation">`</span></span>\n<span class="token punctuation">)</span> <span class="token keyword">AS</span> <span class="token keyword">temp</span> <span class="token keyword">WHERE</span> <span class="token identifier"><span class="token punctuation">`</span>rank<span class="token punctuation">`</span></span> <span class="token operator">&lt;=</span><span class="token number">2</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:right;">id</th><th style="text-align:right;">order_id</th><th style="text-align:right;">ext_price</th><th style="text-align:right;">rank</th></tr></thead><tbody><tr><td style="text-align:right;">2</td><td style="text-align:right;">10001</td><td style="text-align:right;">107.97</td><td style="text-align:right;">1</td></tr><tr><td style="text-align:right;">1</td><td style="text-align:right;">10001</td><td style="text-align:right;">232.32</td><td style="text-align:right;">2</td></tr><tr><td style="text-align:right;">4</td><td style="text-align:right;">10005</td><td style="text-align:right;">286.02</td><td style="text-align:right;">1</td></tr><tr><td style="text-align:right;">5</td><td style="text-align:right;">10005</td><td style="text-align:right;">832.95</td><td style="text-align:right;">2</td></tr><tr><td style="text-align:right;">11</td><td style="text-align:right;">10006</td><td style="text-align:right;">-72.18</td><td style="text-align:right;">1</td></tr><tr><td style="text-align:right;">10</td><td style="text-align:right;">10006</td><td style="text-align:right;">216.9</td><td style="text-align:right;">2</td></tr></tbody></table><h3 id="按时间排序后-查询两笔订单之间的时间差" tabindex="-1"><a class="header-anchor" href="#按时间排序后-查询两笔订单之间的时间差" aria-hidden="true">#</a> 按时间排序后,查询两笔订单之间的时间差</h3><p>ref: https://dev.mysql.com/doc/refman/8.0/en/window-function-descriptions.html https://stackoverflow.com/questions/1313120/retrieving-the-last-record-in-each-group-mysql</p>',27),i=[e];function p(o,c){return n(),s("div",null,i)}const u=t(d,[["render",p],["__file","over.html.vue"]]);export{u as default};
