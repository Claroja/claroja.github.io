import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as p}from"./app-0JgdiRQ-.js";const t={},e=p(`<h1 id="rdd" tabindex="-1"><a class="header-anchor" href="#rdd" aria-hidden="true">#</a> rdd</h1><p>RDD（Resilient Distributed Dataset）叫做弹性分布式数据集，是Spark中最基本的数据抽象，代表一个不可变、可 分区、里面的元素可并行计算的集合。</p><ul><li>Dataset：一个数据集合，用于存放数据的。</li><li>Distributed：RDD中的数据是分布式存储的，可用于分布式计算。</li><li>Resilient：RDD中的数据可以存储在内存中或者磁盘中。</li></ul><h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h2><h3 id="_1-rdd是有分区的" tabindex="-1"><a class="header-anchor" href="#_1-rdd是有分区的" aria-hidden="true">#</a> 1. RDD是有分区的</h3><p>一个RDD会有多个分区，分区是RDD数据存储的最小单位 分区是物理概念，RDD是逻辑概念</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">from</span> pyspark <span class="token keyword">import</span> SparkConf<span class="token punctuation">,</span> SparkContext
conf <span class="token operator">=</span> SparkConf<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>setAppName<span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>setMaster<span class="token punctuation">(</span><span class="token string">&quot;local[*]&quot;</span><span class="token punctuation">)</span>
sc <span class="token operator">=</span> SparkContext<span class="token punctuation">(</span>conf<span class="token operator">=</span>conf<span class="token punctuation">)</span>

<span class="token comment">## 创建RDD, 本地集合 -&gt; 分布式对象(RDD)</span>
rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">## parallelize方法, 没有给定 分区数, 默认分区数是多少?  根据CPU核心来定</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;默认分区数: &quot;</span><span class="token punctuation">,</span> rdd<span class="token punctuation">.</span>getNumPartitions<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># num_cpu</span>

rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;分区数: &quot;</span><span class="token punctuation">,</span> rdd<span class="token punctuation">.</span>getNumPartitions<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 3</span>
sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span>glom<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 具体的数据分区 [[1, 2, 3], [4, 5, 6], [7, 8, 9]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-rdd的方法会作用在其所有分区上" tabindex="-1"><a class="header-anchor" href="#_2-rdd的方法会作用在其所有分区上" aria-hidden="true">#</a> 2. RDD的方法会作用在其所有分区上</h3><p>RDD 3个分区分别执行了map操作，每个分区的所有元素都乘以10</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span>glom<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># [[1, 2, 3], [4, 5, 6], [7, 8, 9]]</span>
sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span>glom<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># [[10, 20, 30], [40, 50, 60], [70, 80, 90]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-rdd之间是有依赖关系的" tabindex="-1"><a class="header-anchor" href="#_3-rdd之间是有依赖关系的" aria-hidden="true">#</a> 3. RDD之间是有依赖关系的</h3><p>file_rdd -&gt; words_rdd -&gt; words_with_one_rdd -&gt; result_rdd</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>file_rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>textFile<span class="token punctuation">(</span><span class="token string">&quot;./words.txt&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 此时数据为 (hello word)， 也可以读取 &quot;hdfs://node1:8020/input/words.txt&quot;</span>
<span class="token comment">## 3. 计算</span>
words_rdd <span class="token operator">=</span> file_rdd<span class="token punctuation">.</span>flatMap<span class="token punctuation">(</span><span class="token keyword">lambda</span> line<span class="token punctuation">:</span> line<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 将单词进行切割, (hello) (word)</span>
words_with_one_rdd <span class="token operator">=</span> words_rdd<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 将单词转换为元组对象, (hello,1) (word,1)</span>
result_rdd <span class="token operator">=</span> words_with_one_rdd<span class="token punctuation">.</span>reduceByKey<span class="token punctuation">(</span><span class="token keyword">lambda</span> a<span class="token punctuation">,</span> b<span class="token punctuation">:</span> a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token comment"># 按照元组第一个元素分组，并相加(hello,4)</span>
<span class="token comment">## 4. 搜集结果</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result_rdd<span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-key-value型-元组-的rdd可以有分区器" tabindex="-1"><a class="header-anchor" href="#_4-key-value型-元组-的rdd可以有分区器" aria-hidden="true">#</a> 4. key_value型(元组)的RDD可以有分区器</h3><p>默认分区器：Hash分区规则，可以手动设置一个分区器(rdd.partitionBy方法来设置)，例如</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span><span class="token string">&quot;hadoop&quot;</span>,3<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token string">&quot;flink&quot;</span>,5<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token string">&quot;spark&quot;</span>,2<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token string">&quot;hadoop&quot;</span>,2<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token string">&quot;flink&quot;</span>,1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认是对第0位，进行hash，然后将相同的值放在同一个分区中，既<code>(&quot;hadoop&quot;,3),(&quot;hadoop&quot;,2)</code>分在一起</p><h3 id="_5-rdd的分区规划-会尽量靠近数据所在服务器" tabindex="-1"><a class="header-anchor" href="#_5-rdd的分区规划-会尽量靠近数据所在服务器" aria-hidden="true">#</a> 5.RDD的分区规划，会尽量靠近数据所在服务器</h3><p>这样可以本地读取，避免了网络IO</p>`,19),o=[e];function c(u,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","rdd.html.vue"]]);export{r as default};
