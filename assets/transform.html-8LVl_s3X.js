import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as e,c as o,d as c,w as u,a as n,b as s,e as i}from"./app-M6UUlHgF.js";const l="/assets/2-Gs-Aqing.png",d="/assets/3-GmLvW_2R.png",r={},k=n("h1",{id:"transform",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#transform","aria-hidden":"true"},"#"),s(" transform")],-1),m=i(`<h2 id="数据准备" tabindex="-1"><a class="header-anchor" href="#数据准备" aria-hidden="true">#</a> 数据准备</h2><table><thead><tr><th>id</th><th>account</th><th>name</th><th>order_id</th><th>sku</th><th>quantity</th><th>unit_price</th><th>ext_price</th></tr></thead><tbody><tr><td>0</td><td>383080</td><td>Will LLC</td><td>10001</td><td>B1-20000</td><td>7</td><td>33.69</td><td>235.83</td></tr><tr><td>1</td><td>383080</td><td>Will LLC</td><td>10001</td><td>S1-27722</td><td>11</td><td>21.12</td><td>232.32</td></tr><tr><td>2</td><td>383080</td><td>Will LLC</td><td>10001</td><td>B1-86481</td><td>3</td><td>35.99</td><td>107.97</td></tr><tr><td>3</td><td>412290</td><td>Jerde-Hilpert</td><td>10005</td><td>S1-06532</td><td>48</td><td>55.82</td><td>2679.36</td></tr><tr><td>4</td><td>412290</td><td>Jerde-Hilpert</td><td>10005</td><td>S1-82801</td><td>21</td><td>13.62</td><td>286.02</td></tr><tr><td>5</td><td>412290</td><td>Jerde-Hilpert</td><td>10005</td><td>S1-06532</td><td>9</td><td>92.55</td><td>832.95</td></tr><tr><td>6</td><td>412290</td><td>Jerde-Hilpert</td><td>10005</td><td>S1-47412</td><td>44</td><td>78.91</td><td>3472.04</td></tr><tr><td>7</td><td>412290</td><td>Jerde-Hilpert</td><td>10005</td><td>S1-27722</td><td>36</td><td>25.42</td><td>915.12</td></tr><tr><td>8</td><td>218895</td><td>Kulas Inc</td><td>10006</td><td>S1-27722</td><td>32</td><td>95.66</td><td>3061.12</td></tr><tr><td>9</td><td>218895</td><td>Kulas Inc</td><td>10006</td><td>B1-33087</td><td>23</td><td>22.55</td><td>518.65</td></tr><tr><td>10</td><td>218895</td><td>Kulas Inc</td><td>10006</td><td>B1-33364</td><td>3</td><td>72.30</td><td>216.90</td></tr><tr><td>11</td><td>218895</td><td>Kulas Inc</td><td>10006</td><td>B1-20000</td><td>-1</td><td>72.18</td><td>-72.18</td></tr></tbody></table><p>字段解释:</p><ol><li><code>id</code>: 订单的唯一标识</li><li><code>account</code>: 用户的账号</li><li><code>name</code>: 用户的名称</li><li><code>order_id</code>: 订单id(1个订单可以由多个商品)</li><li><code>sku</code>: 商品名称</li><li><code>quantity</code>: 商品的个数</li><li><code>unit_price</code>: 每个商品的价格</li><li><code>ext_price</code>: <code>unit_price</code> * <code>quantity</code></li></ol><p>可以看到有三个不同的订单(orders), 10001,10005和10006. 每个订单有多种商品(sku).</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string">&quot;id&quot;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&quot;account&quot;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token number">383080</span><span class="token punctuation">,</span><span class="token number">383080</span><span class="token punctuation">,</span><span class="token number">383080</span><span class="token punctuation">,</span><span class="token number">412290</span><span class="token punctuation">,</span><span class="token number">412290</span><span class="token punctuation">,</span><span class="token number">412290</span><span class="token punctuation">,</span><span class="token number">412290</span><span class="token punctuation">,</span><span class="token number">412290</span><span class="token punctuation">,</span><span class="token number">218895</span><span class="token punctuation">,</span><span class="token number">218895</span><span class="token punctuation">,</span><span class="token number">218895</span><span class="token punctuation">,</span><span class="token number">218895</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token string">&quot;Will LLC&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Will LLC&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Will LLC&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Jerde-Hilpert&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Jerde-Hilpert&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Jerde-Hilpert&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Jerde-Hilpert&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Jerde-Hilpert&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Kulas Inc&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Kulas Inc&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Kulas Inc&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Kulas Inc&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&quot;order_id&quot;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token number">10001</span><span class="token punctuation">,</span><span class="token number">10001</span><span class="token punctuation">,</span><span class="token number">10001</span><span class="token punctuation">,</span><span class="token number">10005</span><span class="token punctuation">,</span><span class="token number">10005</span><span class="token punctuation">,</span><span class="token number">10005</span><span class="token punctuation">,</span><span class="token number">10005</span><span class="token punctuation">,</span><span class="token number">10005</span><span class="token punctuation">,</span><span class="token number">10006</span><span class="token punctuation">,</span><span class="token number">10006</span><span class="token punctuation">,</span><span class="token number">10006</span><span class="token punctuation">,</span><span class="token number">10006</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&quot;sku&quot;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token string">&quot;B1-20000&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;S1-27722&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;B1-86481&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;S1-06532&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;S1-82801&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;S1-06532&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;S1-47412&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;S1-27722&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;S1-27722&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;B1-33087&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;B1-33364&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;B1-20000&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&quot;quantity&quot;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">48</span><span class="token punctuation">,</span><span class="token number">21</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">44</span><span class="token punctuation">,</span><span class="token number">36</span><span class="token punctuation">,</span><span class="token number">32</span><span class="token punctuation">,</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&quot;unit_price&quot;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token number">33.69</span><span class="token punctuation">,</span><span class="token number">21.12</span><span class="token punctuation">,</span><span class="token number">35.99</span><span class="token punctuation">,</span><span class="token number">55.82</span><span class="token punctuation">,</span><span class="token number">13.62</span><span class="token punctuation">,</span><span class="token number">92.55</span><span class="token punctuation">,</span><span class="token number">78.91</span><span class="token punctuation">,</span><span class="token number">25.42</span><span class="token punctuation">,</span><span class="token number">95.66</span><span class="token punctuation">,</span><span class="token number">22.55</span><span class="token punctuation">,</span><span class="token number">72.30</span><span class="token punctuation">,</span><span class="token number">72.18</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&quot;ext_price&quot;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token number">235.83</span><span class="token punctuation">,</span><span class="token number">232.32</span><span class="token punctuation">,</span><span class="token number">107.97</span><span class="token punctuation">,</span><span class="token number">2679.36</span><span class="token punctuation">,</span><span class="token number">286.02</span><span class="token punctuation">,</span><span class="token number">832.95</span><span class="token punctuation">,</span><span class="token number">3472.04</span><span class="token punctuation">,</span><span class="token number">915.12</span><span class="token punctuation">,</span><span class="token number">3061.12</span><span class="token punctuation">,</span><span class="token number">518.65</span><span class="token punctuation">,</span><span class="token number">216.90</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">72.18</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分组groupby" tabindex="-1"><a class="header-anchor" href="#分组groupby" aria-hidden="true">#</a> 分组groupby</h2><p>如上, 通过分组我们可以计算每个订单的总价格, 并将结果按<strong>聚合列</strong>去重.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df<span class="token punctuation">.</span>groupby<span class="token punctuation">(</span><span class="token string">&#39;order_id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&quot;ext_price&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
order
10001     576.12
10005    8185.49
10006    3724.49
Name: ext price, dtype: float64
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可以看到在<strong>Combine</strong>这一步时, 是将组内的数据进行<strong>去重</strong>了</p><h2 id="分组transform" tabindex="-1"><a class="header-anchor" href="#分组transform" aria-hidden="true">#</a> 分组transform</h2><p>通过transform也可以计算每个订单的总价格, 而且结果是没有去重</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df<span class="token punctuation">.</span>groupby<span class="token punctuation">(</span><span class="token string">&#39;order_id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&quot;ext_price&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>transform<span class="token punctuation">(</span><span class="token string">&#39;sum&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## df.groupby(&#39;order_id&#39;)[&quot;ext_price&quot;].transform(lambda x: x.sum())  # 等价的写法, 替换sum, 其中的x就是被分组后的ext_price</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
0      576.12
1      576.12
2      576.12
3     8185.49
4     8185.49
5     8185.49
6     8185.49
7     8185.49
8     3724.49
9     3724.49
10    3724.49
11    3724.49
Name: ext price, dtype: float64
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可以看到在<strong>Combine</strong>这一步时, 没有将组内的数据进行<strong>去重</strong>.</p><p>通过<code>transform</code>我们可以方便的计算, 每个商品占订单的百分比:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df<span class="token punctuation">[</span><span class="token string">&quot;Order_Total&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> df<span class="token punctuation">.</span>groupby<span class="token punctuation">(</span><span class="token string">&#39;order_id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&quot;ext_price&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>transform<span class="token punctuation">(</span><span class="token string">&#39;sum&#39;</span><span class="token punctuation">)</span>
df<span class="token punctuation">[</span><span class="token string">&quot;Percent_of_Order&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> df<span class="token punctuation">[</span><span class="token string">&quot;ext_price&quot;</span><span class="token punctuation">]</span> <span class="token operator">/</span> df<span class="token punctuation">[</span><span class="token string">&quot;Order_Total&quot;</span><span class="token punctuation">]</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
0     0.409342
1     0.403249
2     0.187409
3     0.327330
4     0.034942
5     0.101759
6     0.424170
7     0.111798
8     0.821890
9     0.139254
10    0.058236
11   -0.019380
Name: Percent_of_Order, dtype: float64
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="另一种实现transform的方法" tabindex="-1"><a class="header-anchor" href="#另一种实现transform的方法" aria-hidden="true">#</a> 另一种实现transform的方法</h2><p>group对象apply是对每个分组对象操作，既lambda中的x。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df<span class="token punctuation">.</span>groupby<span class="token punctuation">(</span><span class="token string">&#39;order_id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">apply</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">.</span>sort_values<span class="token punctuation">(</span><span class="token string">&#39;ext_price&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>reset_index<span class="token punctuation">(</span>drop<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span> <span class="token comment"># 分组后根据成绩排序</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参考: https://pbpython.com/pandas_transform.html</p>`,22);function b(v,g){const a=p("font");return e(),o("div",null,[k,c(a,{style:{background:"lightgreen"}},{default:u(()=>[s("pandas的transform函数类似于sql的over()")]),_:1}),m])}const f=t(r,[["render",b],["__file","transform.html.vue"]]);export{f as default};
