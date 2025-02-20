import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-9tftCahk.js";const p={},e=t(`<h1 id="cache" tabindex="-1"><a class="header-anchor" href="#cache" aria-hidden="true">#</a> cache</h1><p>rdd1 -&gt; rdd2 -&gt; rdd3 -&gt; rdd4 ... |-&gt; rdd5</p><p>前一个RDD计算结束后，会被销毁，以保证每个分区内存充分利用。 但是如果有其他rdd依赖销毁的rdd，比如在计算rdd4时，rdd3被销毁，而rdd5计算又需要rdd3，此时会再将rdd1 -&gt; rdd2 -&gt; rdd3 链路计算一遍。为了避免这种情况，我们可以通过<code>cache()</code>或<code>persist()</code>方法将rdd3缓存起来，这样就不需要重新计算。 注意：最后需要使用<code>unpersist()</code>方法来清理缓存</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## coding:utf8</span>
<span class="token keyword">import</span> time
<span class="token keyword">from</span> pyspark <span class="token keyword">import</span> SparkConf<span class="token punctuation">,</span> SparkContext
<span class="token keyword">from</span> pyspark<span class="token punctuation">.</span>storagelevel <span class="token keyword">import</span> StorageLevel

conf <span class="token operator">=</span> SparkConf<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>setAppName<span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>setMaster<span class="token punctuation">(</span><span class="token string">&quot;local[*]&quot;</span><span class="token punctuation">)</span>
sc <span class="token operator">=</span> SparkContext<span class="token punctuation">(</span>conf<span class="token operator">=</span>conf<span class="token punctuation">)</span>

rdd1 <span class="token operator">=</span> sc<span class="token punctuation">.</span>textFile<span class="token punctuation">(</span><span class="token string">&quot;../data/input/words.txt&quot;</span><span class="token punctuation">)</span>
rdd2 <span class="token operator">=</span> rdd1<span class="token punctuation">.</span>flatMap<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
rdd3 <span class="token operator">=</span> rdd2<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

rdd3<span class="token punctuation">.</span>cache<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 同样的效果 rdd3.persist(StorageLevel.MEMORY_AND_DISK_2)</span>

rdd4 <span class="token operator">=</span> rdd3<span class="token punctuation">.</span>reduceByKey<span class="token punctuation">(</span><span class="token keyword">lambda</span> a<span class="token punctuation">,</span> b<span class="token punctuation">:</span> a <span class="token operator">+</span> b<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rdd4<span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

rdd5 <span class="token operator">=</span> rdd3<span class="token punctuation">.</span>groupByKey<span class="token punctuation">(</span><span class="token punctuation">)</span>
rdd6 <span class="token operator">=</span> rdd5<span class="token punctuation">.</span>mapValues<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rdd6<span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

rdd3<span class="token punctuation">.</span>unpersist<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">#</span>
time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">100000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>refs:</p>`,5),o=[e];function c(l,u){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","cache.html.vue"]]);export{r as default};
