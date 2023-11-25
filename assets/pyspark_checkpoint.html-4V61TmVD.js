import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as t}from"./app-j3zK2x6_.js";const p={},e=t(`<h1 id="checkpoint" tabindex="-1"><a class="header-anchor" href="#checkpoint" aria-hidden="true">#</a> checkpoint</h1><p>checkpoint vs cache</p><ul><li>checkpoint 将所有分数数据保存在一个HDFS文件中，而缓存分别保存在各个分区上，分区越多，风险越高</li><li>checkpoint 只能写入硬盘， 而cache可以写入内存，也可以写入硬盘，所以cache速度快</li><li>checkpoint 不保留血缘关系，cache保留血缘关系</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## coding:utf8</span>
<span class="token keyword">import</span> time

<span class="token keyword">from</span> pyspark <span class="token keyword">import</span> SparkConf<span class="token punctuation">,</span> SparkContext
<span class="token keyword">from</span> pyspark<span class="token punctuation">.</span>storagelevel <span class="token keyword">import</span> StorageLevel
conf <span class="token operator">=</span> SparkConf<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>setAppName<span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>setMaster<span class="token punctuation">(</span><span class="token string">&quot;local[*]&quot;</span><span class="token punctuation">)</span>
sc <span class="token operator">=</span> SparkContext<span class="token punctuation">(</span>conf<span class="token operator">=</span>conf<span class="token punctuation">)</span>

<span class="token comment">## 1. 告知spark, 开启CheckPoint功能</span>
sc<span class="token punctuation">.</span>setCheckpointDir<span class="token punctuation">(</span><span class="token string">&quot;hdfs://node1:8020/output/ckp&quot;</span><span class="token punctuation">)</span>
rdd1 <span class="token operator">=</span> sc<span class="token punctuation">.</span>textFile<span class="token punctuation">(</span><span class="token string">&quot;../data/input/words.txt&quot;</span><span class="token punctuation">)</span>
rdd2 <span class="token operator">=</span> rdd1<span class="token punctuation">.</span>flatMap<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
rdd3 <span class="token operator">=</span> rdd2<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## 调用checkpoint API 保存数据即可</span>
rdd3<span class="token punctuation">.</span>checkpoint<span class="token punctuation">(</span><span class="token punctuation">)</span>

rdd4 <span class="token operator">=</span> rdd3<span class="token punctuation">.</span>reduceByKey<span class="token punctuation">(</span><span class="token keyword">lambda</span> a<span class="token punctuation">,</span> b<span class="token punctuation">:</span> a <span class="token operator">+</span> b<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rdd4<span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

rdd5 <span class="token operator">=</span> rdd3<span class="token punctuation">.</span>groupByKey<span class="token punctuation">(</span><span class="token punctuation">)</span>
rdd6 <span class="token operator">=</span> rdd5<span class="token punctuation">.</span>mapValues<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rdd6<span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

rdd3<span class="token punctuation">.</span>unpersist<span class="token punctuation">(</span><span class="token punctuation">)</span>
time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">100000</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>refs: pyspark_checkpoint</p>`,5),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","pyspark_checkpoint.html.vue"]]);export{r as default};
