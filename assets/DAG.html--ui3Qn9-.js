import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as o,a as t}from"./app-9tftCahk.js";const c={},r=t('<h1 id="dag" tabindex="-1"><a class="header-anchor" href="#dag" aria-hidden="true">#</a> DAG</h1><p>DAG: 有向无环图</p><p>在一个任务(application)中，1个Action会产生1个DAG也就是1个job，如果有3个Action就会有3个DAG，3个job</p><h2 id="stage" tabindex="-1"><a class="header-anchor" href="#stage" aria-hidden="true">#</a> stage</h2><p>窄依赖：父RDD的一个分区，将数据发给一个子RDD的分区。一对一 宽依赖：父RDD的一个分区，将数据发给多个子RDD的分区。一对多，也就是shuffle spark会根据DAG的宽依赖划分不同的DAG阶段，遇到宽依赖就划分一个阶段，称之为stage</p><h2 id="task" tabindex="-1"><a class="header-anchor" href="#task" aria-hidden="true">#</a> task</h2><p>一个task是一个具体的线程，一个RDD运行在一个线程内（CPU的一个核心）</p><h2 id="并行度" tabindex="-1"><a class="header-anchor" href="#并行度" aria-hidden="true">#</a> 并行度</h2><p>配置文件中设置： <code>conf/spark-defaults.conf</code> <code>spark.default.parallelism 100</code> 客户端提交时设置： <code>bin/spark-submit --conf &quot;spark.default.parallelism 100&quot;</code> 代码中设置：<code>conf = SparkConf(), conf.set(&quot;spark.default.parallelism 100&quot;)</code></p><p>不推荐使用针对RDD的并行度计算:<code>repartition</code>,<code>coalesce</code>,<code>partitionBy</code></p><p>refs: spark_DAG</p>',11),d=[r];function s(i,n){return e(),o("div",null,d)}const l=a(c,[["render",s],["__file","DAG.html.vue"]]);export{l as default};
