import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-YE2Hltoy.js";const p={},e=t(`<h1 id="udf" tabindex="-1"><a class="header-anchor" href="#udf" aria-hidden="true">#</a> udf</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## coding:utf8</span>
<span class="token keyword">import</span> time

<span class="token keyword">from</span> pyspark<span class="token punctuation">.</span>sql <span class="token keyword">import</span> SparkSession
<span class="token keyword">from</span> pyspark<span class="token punctuation">.</span>sql<span class="token punctuation">.</span>types <span class="token keyword">import</span> StructType<span class="token punctuation">,</span> StringType<span class="token punctuation">,</span> IntegerType
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">from</span> pyspark<span class="token punctuation">.</span>sql <span class="token keyword">import</span> functions <span class="token keyword">as</span> F

<span class="token comment">## 0. 构建执行环境入口对象SparkSession</span>
spark <span class="token operator">=</span> SparkSession<span class="token punctuation">.</span>builder<span class="token punctuation">.</span>\\
    appName<span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    master<span class="token punctuation">(</span><span class="token string">&quot;local[*]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    config<span class="token punctuation">(</span><span class="token string">&quot;spark.sql.shuffle.partitions&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    getOrCreate<span class="token punctuation">(</span><span class="token punctuation">)</span>
sc <span class="token operator">=</span> spark<span class="token punctuation">.</span>sparkContext

<span class="token comment">## 构建一个RDD</span>
rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span><span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span>
df <span class="token operator">=</span> rdd<span class="token punctuation">.</span>toDF<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;num&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">## TODO 1: 方式1 sparksession.udf.register(), DSL和SQL风格均可以使用</span>
<span class="token comment">## UDF的处理函数</span>
<span class="token keyword">def</span> <span class="token function">num_ride_10</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> num <span class="token operator">*</span> <span class="token number">10</span>
<span class="token comment">## 参数1: 注册的UDF的名称, 这个udf名称, 仅可以用于 SQL风格</span>
<span class="token comment">## 参数2: UDF的处理逻辑, 是一个单独的方法</span>
<span class="token comment">## 参数3: 声明UDF的返回值类型, 注意: UDF注册时候, 必须声明返回值类型, 并且UDF的真实返回值一定要和声明的返回值一致</span>
<span class="token comment">## 返回值对象: 这是一个UDF对象, 仅可以用于 DSL 语法</span>
<span class="token comment">## 当前这种方式定义的UDF, 可以通过参数1的名称用于SQL风格, 通过返回值对象用户DSL风格</span>
udf2 <span class="token operator">=</span> spark<span class="token punctuation">.</span>udf<span class="token punctuation">.</span>register<span class="token punctuation">(</span><span class="token string">&quot;udf1&quot;</span><span class="token punctuation">,</span> num_ride_10<span class="token punctuation">,</span> IntegerType<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## SQL风格中使用</span>
<span class="token comment">## selectExpr 以SELECT的表达式执行, 表达式 SQL风格的表达式(字符串)</span>
<span class="token comment">## select方法, 接受普通的字符串字段名, 或者返回值是Column对象的计算</span>
df<span class="token punctuation">.</span>selectExpr<span class="token punctuation">(</span><span class="token string">&quot;udf1(num)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">## DSL 风格中使用</span>
<span class="token comment">## 返回值UDF对象 如果作为方法使用, 传入的参数 一定是Column对象</span>
df<span class="token punctuation">.</span>select<span class="token punctuation">(</span>udf2<span class="token punctuation">(</span>df<span class="token punctuation">[</span><span class="token string">&#39;num&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">## TODO 2: 方式2注册, 仅能用于DSL风格</span>
udf3 <span class="token operator">=</span> F<span class="token punctuation">.</span>udf<span class="token punctuation">(</span>num_ride_10<span class="token punctuation">,</span> IntegerType<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
df<span class="token punctuation">.</span>select<span class="token punctuation">(</span>udf3<span class="token punctuation">(</span>df<span class="token punctuation">[</span><span class="token string">&#39;num&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

df<span class="token punctuation">.</span>selectExpr<span class="token punctuation">(</span><span class="token string">&quot;udf3(num)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(u,i){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","udf.html.vue"]]);export{d as default};
