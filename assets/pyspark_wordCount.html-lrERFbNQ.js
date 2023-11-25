import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as t}from"./app-j3zK2x6_.js";const o="/assets/1-sKJ7ejqm.png",p={},e=t(`<h1 id="wordcount" tabindex="-1"><a class="header-anchor" href="#wordcount" aria-hidden="true">#</a> wordCount</h1><div class="language-data line-numbers-mode" data-ext="data"><pre class="language-data"><code>hello spark
hello hadoop
hello flink
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pyspark <span class="token keyword">import</span> SparkConf<span class="token punctuation">,</span> SparkContext

<span class="token comment">## 1. 配置</span>
conf <span class="token operator">=</span> SparkConf<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>setAppName<span class="token punctuation">(</span><span class="token string">&quot;WordCountHelloWorld&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>setMaster<span class="token punctuation">(</span><span class="token string">&#39;local&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 任务名及运行方式</span>
sc <span class="token operator">=</span> SparkContext<span class="token punctuation">(</span>conf<span class="token operator">=</span>conf<span class="token punctuation">)</span><span class="token comment"># 通过SparkConf对象构建SparkContext对象</span>
<span class="token comment">## 2. 读取文件</span>
file_rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>textFile<span class="token punctuation">(</span><span class="token string">&quot;./words.txt&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 此时数据为 (hello word)， 也可以读取 &quot;hdfs://node1:8020/input/words.txt&quot;</span>
<span class="token comment">## 3. 计算</span>
words_rdd <span class="token operator">=</span> file_rdd<span class="token punctuation">.</span>flatMap<span class="token punctuation">(</span><span class="token keyword">lambda</span> line<span class="token punctuation">:</span> line<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 将单词进行切割, (hello) (word)</span>
words_with_one_rdd <span class="token operator">=</span> words_rdd<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 将单词转换为元组对象, (hello,1) (word,1)</span>
result_rdd <span class="token operator">=</span> words_with_one_rdd<span class="token punctuation">.</span>reduceByKey<span class="token punctuation">(</span><span class="token keyword">lambda</span> a<span class="token punctuation">,</span> b<span class="token punctuation">:</span> a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token comment"># 按照元组第一个元素分组，并相加(hello,4)</span>
<span class="token comment">## 4. 搜集结果</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result_rdd<span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
result_rdd<span class="token punctuation">.</span>saveAsTextFile<span class="token punctuation">(</span><span class="token string">&quot;./count.txt&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',4),c=[e];function l(i,u){return s(),a("div",null,c)}const k=n(p,[["render",l],["__file","pyspark_wordCount.html.vue"]]);export{k as default};
