import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as p}from"./app-SnI5rGHA.js";const t="/assets/1-Cjh-gvGj.png",o="/assets/2-4kozpEDt.png",c={},e=p(`<h1 id="transformationfunc" tabindex="-1"><a class="header-anchor" href="#transformationfunc" aria-hidden="true">#</a> transformationFunc</h1><h2 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h2><p><code>rdd.map(func)</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>

<span class="token comment">## 1. 定义方法, 作为算子的传入函数体</span>
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> data <span class="token operator">*</span> <span class="token number">10</span>
rdd<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span>add<span class="token punctuation">)</span><span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">## 2. 更简单的方式 是定义lambda表达式来写匿名函数</span>
rdd<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> data<span class="token punctuation">:</span> data <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="flatmap" tabindex="-1"><a class="header-anchor" href="#flatmap" aria-hidden="true">#</a> flatMap</h2><p><code>rdd.flatMap(func)</code> 先执行<code>map(func)</code>,然后解除嵌套(squeeze),</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;hadoop spark hadoop&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;spark hadoop hadoop&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hadoop flink spark&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
rdd2 <span class="token operator">=</span> rdd<span class="token punctuation">.</span>flatMap<span class="token punctuation">(</span><span class="token keyword">lambda</span> line<span class="token punctuation">:</span> line<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
rdd2<span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># [&#39;hadoop&#39;, &#39;spark&#39;, &#39;hadoop&#39;, &#39;spark&#39;, &#39;hadoop&#39;, &#39;hadoop&#39;, &#39;hadoop&#39;, &#39;flink&#39;, &#39;spark&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reducebykey" tabindex="-1"><a class="header-anchor" href="#reducebykey" aria-hidden="true">#</a> reduceByKey</h2><p><code>rdd.reduceByKey(func)</code> reduceByKey 对相同key 的数据执行聚合相加</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
rdd<span class="token punctuation">.</span>reduceByKey<span class="token punctuation">(</span><span class="token keyword">lambda</span> a<span class="token punctuation">,</span> b<span class="token punctuation">:</span> a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># [(&#39;a&#39;, 3), (&#39;b&#39;, 2)]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="groupby" tabindex="-1"><a class="header-anchor" href="#groupby" aria-hidden="true">#</a> groupBy</h2><p>通过groupBy对数据进行分组 groupBy传入的函数的 意思是: 通过这个函数, 确定按照谁来分组(返回谁即可) 分组规则 和SQL是一致的, 也就是相同的在一个组(Hash分组)</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
result <span class="token operator">=</span> rdd<span class="token punctuation">.</span>groupBy<span class="token punctuation">(</span><span class="token keyword">lambda</span> t<span class="token punctuation">:</span> t<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
result<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> t<span class="token punctuation">:</span><span class="token punctuation">(</span>t<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token builtin">list</span><span class="token punctuation">(</span>t<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># [(&#39;a&#39;, [(&#39;a&#39;, 1), (&#39;a&#39;, 1)]), (&#39;b&#39;, [(&#39;b&#39;, 1), (&#39;b&#39;, 2), (&#39;b&#39;, 3)])] </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
result <span class="token operator">=</span> rdd<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token comment"># 通过Filter算子, 过滤奇数</span>
result<span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># [1, 3, 5]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="distinct" tabindex="-1"><a class="header-anchor" href="#distinct" aria-hidden="true">#</a> distinct</h2><p>对RDD数据进行去重</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd2 <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
rdd2<span class="token punctuation">.</span>distinct<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># [(&#39;a&#39;, 1), (&#39;a&#39;, 3)]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="union" tabindex="-1"><a class="header-anchor" href="#union" aria-hidden="true">#</a> union</h2><p>将两个rdd合并成一个rdd</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd1 <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
rdd2 <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

rdd3 <span class="token operator">=</span> rdd1<span class="token punctuation">.</span>union<span class="token punctuation">(</span>rdd2<span class="token punctuation">)</span>
rdd3<span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># [1, 1, 3, 3, &#39;a&#39;, &#39;b&#39;, &#39;a&#39;] </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="join" tabindex="-1"><a class="header-anchor" href="#join" aria-hidden="true">#</a> join</h2><p>对两个RDD执行JOIN操作，实现SQL的内连和外连 注意：只能用于二元元组</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd1 <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token punctuation">(</span><span class="token number">1001</span><span class="token punctuation">,</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">1002</span><span class="token punctuation">,</span> <span class="token string">&quot;lisi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">1003</span><span class="token punctuation">,</span> <span class="token string">&quot;wangwu&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">1004</span><span class="token punctuation">,</span> <span class="token string">&quot;zhaoliu&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">]</span><span class="token punctuation">)</span>
rdd2 <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token punctuation">(</span><span class="token number">1001</span><span class="token punctuation">,</span> <span class="token string">&quot;销售部&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">1002</span><span class="token punctuation">,</span> <span class="token string">&quot;科技部&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
rdd1<span class="token punctuation">.</span>join<span class="token punctuation">(</span>rdd2<span class="token punctuation">)</span><span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># [(1001, (&#39;zhangsan&#39;, &#39;...&#39;)), (1002, (&#39;lisi&#39;, &#39;...&#39;))]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="intersection" tabindex="-1"><a class="header-anchor" href="#intersection" aria-hidden="true">#</a> intersection</h2><p>通过intersection算子求RDD之间的交集, 将交集取出 返回新RDD</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd1 <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
rdd2 <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

rdd3 <span class="token operator">=</span> rdd1<span class="token punctuation">.</span>intersection<span class="token punctuation">(</span>rdd2<span class="token punctuation">)</span>
rdd3<span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># [(&#39;a&#39;, 1)]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="glom" tabindex="-1"><a class="header-anchor" href="#glom" aria-hidden="true">#</a> glom</h2><p>将RDD的数据加上嵌套，嵌套按分区来进行</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
rdd<span class="token punctuation">.</span>glom<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># [[1, 2, 3, 4], [5, 6, 7, 8, 9]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="groupbykey" tabindex="-1"><a class="header-anchor" href="#groupbykey" aria-hidden="true">#</a> groupByKey</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

rdd2 <span class="token operator">=</span> rdd<span class="token punctuation">.</span>groupByKey<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## rdd2.collect() [(&#39;a&#39;, &lt;pyspark.resultiterable.ResultIterable object.), (&#39;b&#39;, &lt;pyspark.resultiterable.ResultIterable object&gt;)]</span>
rdd2<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> <span class="token punctuation">(</span>x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token builtin">list</span><span class="token punctuation">(</span>x<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># [(&#39;a&#39;, [1, 1]), (&#39;b&#39;, [1, 1, 1])]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sortby" tabindex="-1"><a class="header-anchor" href="#sortby" aria-hidden="true">#</a> sortBy</h2><p>按照指定位子元素进行排序</p><ul><li>参数1函数, 表示的是 , 告知Spark 按照数据的哪个列进行排序</li><li>参数2: True表示升序 False表示降序</li><li>参数3: 排序的分区数</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;f&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;n&#39;</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;注意: 如果要全局有序, 排序分区数请设置为1&quot;&quot;&quot;</span>
rdd<span class="token punctuation">.</span>sortBy<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> ascending<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> numPartitions<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># [(&#39;f&#39;, 1), (&#39;a&#39;, 1), (&#39;e&#39;, 1), (&#39;a&#39;, 1), (&#39;c&#39;, 3), (&#39;c&#39;, 3), (&#39;c&#39;, 5), (&#39;n&#39;, 9), (&#39;b&#39;, 11)]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sortbykey" tabindex="-1"><a class="header-anchor" href="#sortbykey" aria-hidden="true">#</a> sortByKey</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;E&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;D&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;g&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;f&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                        <span class="token punctuation">(</span><span class="token string">&#39;y&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;u&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;i&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;o&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                        <span class="token punctuation">(</span><span class="token string">&#39;m&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;n&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;j&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;k&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;l&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
rdd<span class="token punctuation">.</span>sortByKey<span class="token punctuation">(</span>ascending<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> numPartitions<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> keyfunc<span class="token operator">=</span><span class="token keyword">lambda</span> key<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="groupbykey-vs-reducebykey" tabindex="-1"><a class="header-anchor" href="#groupbykey-vs-reducebykey" aria-hidden="true">#</a> groupByKey vs reduceByKey</h2><p><code>groupByKey+reduce</code>逻辑流程，执行的是先分组(shuffle)后聚合 <img src="`+t+'" alt="" loading="lazy"><code>reduceByKey</code>先在分区内预聚合，然后分组(shuffle)，最后再聚合 <img src="'+o+'" alt="" loading="lazy"></p><p>refs:</p>',41),u=[e];function l(i,k){return s(),a("div",null,u)}const m=n(c,[["render",l],["__file","transformationFunc.html.vue"]]);export{m as default};
