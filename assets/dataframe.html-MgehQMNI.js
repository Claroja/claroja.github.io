import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-A10JnHE0.js";const p={},e=t(`<h1 id="dataframe" tabindex="-1"><a class="header-anchor" href="#dataframe" aria-hidden="true">#</a> dataframe</h1><h2 id="create" tabindex="-1"><a class="header-anchor" href="#create" aria-hidden="true">#</a> create</h2><h3 id="from-rdd" tabindex="-1"><a class="header-anchor" href="#from-rdd" aria-hidden="true">#</a> from RDD</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## coding:utf8</span>

<span class="token keyword">from</span> pyspark<span class="token punctuation">.</span>sql <span class="token keyword">import</span> SparkSession
<span class="token comment">## 0. 构建执行环境入口对象SparkSession</span>
spark <span class="token operator">=</span> SparkSession<span class="token punctuation">.</span>builder<span class="token punctuation">.</span>\\
    appName<span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    master<span class="token punctuation">(</span><span class="token string">&quot;local[*]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    getOrCreate<span class="token punctuation">(</span><span class="token punctuation">)</span>
sc <span class="token operator">=</span> spark<span class="token punctuation">.</span>sparkContext

<span class="token comment">## 构建RDD</span>
rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>textFile<span class="token punctuation">(</span><span class="token string">&quot;../data/input/sql/people.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    <span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    <span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> <span class="token punctuation">(</span>x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">(</span>x<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## 构建DataFrame对象</span>
<span class="token comment">## 参数1 被转换的RDD</span>
<span class="token comment">## 参数2 指定列名, 通过list的形式指定, 按照顺序依次提供字符串名称即可</span>
df <span class="token operator">=</span> spark<span class="token punctuation">.</span>createDataFrame<span class="token punctuation">(</span>rdd<span class="token punctuation">,</span> schema<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 等价df1 = rdd.toDF([&quot;name&quot;, &quot;age&quot;])</span>

<span class="token comment">## 打印DataFrame的表结构</span>
df<span class="token punctuation">.</span>printSchema<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">## 打印df中的数据</span>
<span class="token comment">## 参数1 表示 展示出多少条数据, 默认不传的话是20</span>
<span class="token comment">## 参数2 表示是否对列进行截断, 如果列的数据长度超过20个字符串长度, 后续的内容不显示以...代替</span>
<span class="token comment">## 如果给False 表示不阶段全部显示, 默认是True</span>
df<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="structtype" tabindex="-1"><a class="header-anchor" href="#structtype" aria-hidden="true">#</a> StructType</h3><p>可以用来指定类型</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## coding:utf8</span>

<span class="token keyword">from</span> pyspark<span class="token punctuation">.</span>sql <span class="token keyword">import</span> SparkSession
<span class="token keyword">from</span> pyspark<span class="token punctuation">.</span>sql<span class="token punctuation">.</span>types <span class="token keyword">import</span> StructType<span class="token punctuation">,</span> StringType<span class="token punctuation">,</span> IntegerType
<span class="token comment">## 0. 构建执行环境入口对象SparkSession</span>
spark <span class="token operator">=</span> SparkSession<span class="token punctuation">.</span>builder<span class="token punctuation">.</span>\\
    appName<span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    master<span class="token punctuation">(</span><span class="token string">&quot;local[*]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    getOrCreate<span class="token punctuation">(</span><span class="token punctuation">)</span>
sc <span class="token operator">=</span> spark<span class="token punctuation">.</span>sparkContext

<span class="token comment">## 基于RDD转换成DataFrame</span>
rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>textFile<span class="token punctuation">(</span><span class="token string">&quot;../data/input/sql/people.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    <span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    <span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> <span class="token punctuation">(</span>x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">(</span>x<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## 构建表结构的描述对象: StructType对象</span>
schema <span class="token operator">=</span> StructType<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> StringType<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> nullable<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    add<span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> IntegerType<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> nullable<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>

<span class="token comment">## 基于StructType对象去构建RDD到DF的转换</span>
df <span class="token operator">=</span> spark<span class="token punctuation">.</span>createDataFrame<span class="token punctuation">(</span>rdd<span class="token punctuation">,</span> schema<span class="token operator">=</span>schema<span class="token punctuation">)</span>

df<span class="token punctuation">.</span>printSchema<span class="token punctuation">(</span><span class="token punctuation">)</span>
df<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="file" tabindex="-1"><a class="header-anchor" href="#file" aria-hidden="true">#</a> file</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>sparksession<span class="token punctuation">.</span>read<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;text|csv|json|parquet|orc|avro|jdbc|......&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;K&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;V&quot;</span><span class="token punctuation">)</span> <span class="token comment"># option可选</span>
<span class="token punctuation">.</span>schema<span class="token punctuation">(</span>StructType <span class="token operator">|</span> String<span class="token punctuation">)</span> <span class="token comment"># STRING的语法如.schema(&quot;name STRING&quot;, &quot;age INT&quot;)</span>
<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token string">&quot;被读取文件的路径, 支持本地文件系统和HDFS&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="text" tabindex="-1"><a class="header-anchor" href="#text" aria-hidden="true">#</a> text</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pyspark<span class="token punctuation">.</span>sql <span class="token keyword">import</span> SparkSession
<span class="token keyword">from</span> pyspark<span class="token punctuation">.</span>sql<span class="token punctuation">.</span>types <span class="token keyword">import</span> StructType<span class="token punctuation">,</span> StringType<span class="token punctuation">,</span> IntegerType
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token comment">## 0. 构建执行环境入口对象SparkSession</span>
spark <span class="token operator">=</span> SparkSession<span class="token punctuation">.</span>builder<span class="token punctuation">.</span>\\
    appName<span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    master<span class="token punctuation">(</span><span class="token string">&quot;local[*]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    getOrCreate<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## 构建StructType, text数据源, 读取数据的特点是, 将一整行只作为\`一个列\`读取, 默认列名是value 类型是String</span>
schema <span class="token operator">=</span> StructType<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">,</span> StringType<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> nullable<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
df <span class="token operator">=</span> spark<span class="token punctuation">.</span>read<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    schema<span class="token punctuation">(</span>schema<span class="token operator">=</span>schema<span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    load<span class="token punctuation">(</span><span class="token string">&quot;../data/input/sql/people.txt&quot;</span><span class="token punctuation">)</span>

df<span class="token punctuation">.</span>printSchema<span class="token punctuation">(</span><span class="token punctuation">)</span>
df<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> json</h3><p>json文件自带schema信息</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## coding:utf8</span>

<span class="token keyword">from</span> pyspark<span class="token punctuation">.</span>sql <span class="token keyword">import</span> SparkSession
<span class="token keyword">from</span> pyspark<span class="token punctuation">.</span>sql<span class="token punctuation">.</span>types <span class="token keyword">import</span> StructType<span class="token punctuation">,</span> StringType<span class="token punctuation">,</span> IntegerType
<span class="token comment">## 0. 构建执行环境入口对象SparkSession</span>
spark <span class="token operator">=</span> SparkSession<span class="token punctuation">.</span>builder<span class="token punctuation">.</span>\\
    appName<span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    master<span class="token punctuation">(</span><span class="token string">&quot;local[*]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    getOrCreate<span class="token punctuation">(</span><span class="token punctuation">)</span>
sc <span class="token operator">=</span> spark<span class="token punctuation">.</span>sparkContext

<span class="token comment">## JSON类型自带有Schema信息</span>
df <span class="token operator">=</span> spark<span class="token punctuation">.</span>read<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token string">&quot;../data/input/sql/people.json&quot;</span><span class="token punctuation">)</span>
df<span class="token punctuation">.</span>printSchema<span class="token punctuation">(</span><span class="token punctuation">)</span>
df<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="csv" tabindex="-1"><a class="header-anchor" href="#csv" aria-hidden="true">#</a> csv</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## coding:utf8</span>

<span class="token keyword">from</span> pyspark<span class="token punctuation">.</span>sql <span class="token keyword">import</span> SparkSession
<span class="token keyword">from</span> pyspark<span class="token punctuation">.</span>sql<span class="token punctuation">.</span>types <span class="token keyword">import</span> StructType<span class="token punctuation">,</span> StringType<span class="token punctuation">,</span> IntegerType
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token comment">## 0. 构建执行环境入口对象SparkSession</span>
spark <span class="token operator">=</span> SparkSession<span class="token punctuation">.</span>builder<span class="token punctuation">.</span>\\
    appName<span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    master<span class="token punctuation">(</span><span class="token string">&quot;local[*]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    getOrCreate<span class="token punctuation">(</span><span class="token punctuation">)</span>
sc <span class="token operator">=</span> spark<span class="token punctuation">.</span>sparkContext

<span class="token comment">## 读取CSV文件</span>
df <span class="token operator">=</span> spark<span class="token punctuation">.</span>read<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;csv&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    option<span class="token punctuation">(</span><span class="token string">&quot;sep&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    option<span class="token punctuation">(</span><span class="token string">&quot;header&quot;</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    option<span class="token punctuation">(</span><span class="token string">&quot;encoding&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    schema<span class="token punctuation">(</span><span class="token string">&quot;name STRING, age INT, job STRING&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    load<span class="token punctuation">(</span><span class="token string">&quot;../data/input/sql/people.csv&quot;</span><span class="token punctuation">)</span>

df<span class="token punctuation">.</span>printSchema<span class="token punctuation">(</span><span class="token punctuation">)</span>
df<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="parquet" tabindex="-1"><a class="header-anchor" href="#parquet" aria-hidden="true">#</a> parquet</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## coding:utf8</span>

<span class="token keyword">from</span> pyspark<span class="token punctuation">.</span>sql <span class="token keyword">import</span> SparkSession
<span class="token keyword">from</span> pyspark<span class="token punctuation">.</span>sql<span class="token punctuation">.</span>types <span class="token keyword">import</span> StructType<span class="token punctuation">,</span> StringType<span class="token punctuation">,</span> IntegerType
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token comment">## 0. 构建执行环境入口对象SparkSession</span>
spark <span class="token operator">=</span> SparkSession<span class="token punctuation">.</span>builder<span class="token punctuation">.</span>\\
    appName<span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    master<span class="token punctuation">(</span><span class="token string">&quot;local[*]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    getOrCreate<span class="token punctuation">(</span><span class="token punctuation">)</span>
sc <span class="token operator">=</span> spark<span class="token punctuation">.</span>sparkContext

<span class="token comment">## 读取parquet类型的文件</span>
df <span class="token operator">=</span> spark<span class="token punctuation">.</span>read<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;parquet&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token string">&quot;../data/input/sql/users.parquet&quot;</span><span class="token punctuation">)</span>

df<span class="token punctuation">.</span>printSchema<span class="token punctuation">(</span><span class="token punctuation">)</span>
df<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="code-style" tabindex="-1"><a class="header-anchor" href="#code-style" aria-hidden="true">#</a> code style</h2><h3 id="dsl" tabindex="-1"><a class="header-anchor" href="#dsl" aria-hidden="true">#</a> dsl</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## coding:utf8</span>

<span class="token keyword">from</span> pyspark<span class="token punctuation">.</span>sql <span class="token keyword">import</span> SparkSession
<span class="token keyword">from</span> pyspark<span class="token punctuation">.</span>sql<span class="token punctuation">.</span>types <span class="token keyword">import</span> StructType<span class="token punctuation">,</span> StringType<span class="token punctuation">,</span> IntegerType
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token comment">## 0. 构建执行环境入口对象SparkSession</span>
spark <span class="token operator">=</span> SparkSession<span class="token punctuation">.</span>builder<span class="token punctuation">.</span>\\
    appName<span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    master<span class="token punctuation">(</span><span class="token string">&quot;local[*]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    getOrCreate<span class="token punctuation">(</span><span class="token punctuation">)</span>
sc <span class="token operator">=</span> spark<span class="token punctuation">.</span>sparkContext

df <span class="token operator">=</span> spark<span class="token punctuation">.</span>read<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;csv&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    schema<span class="token punctuation">(</span><span class="token string">&quot;id INT, subject STRING, score INT&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    load<span class="token punctuation">(</span><span class="token string">&quot;../data/input/sql/stu_score.txt&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## Column对象的获取</span>
id_column <span class="token operator">=</span> df<span class="token punctuation">[</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">]</span>
subject_column <span class="token operator">=</span> df<span class="token punctuation">[</span><span class="token string">&#39;subject&#39;</span><span class="token punctuation">]</span>

<span class="token comment">## DLS风格演示</span>
df<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;subject&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
df<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;subject&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
df<span class="token punctuation">.</span>select<span class="token punctuation">(</span>id_column<span class="token punctuation">,</span> subject_column<span class="token punctuation">)</span><span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">## filter API</span>
df<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span><span class="token string">&quot;score &lt; 99&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
df<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>df<span class="token punctuation">[</span><span class="token string">&#39;score&#39;</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">99</span><span class="token punctuation">)</span><span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">## where API</span>
df<span class="token punctuation">.</span>where<span class="token punctuation">(</span><span class="token string">&quot;score &lt; 99&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
df<span class="token punctuation">.</span>where<span class="token punctuation">(</span>df<span class="token punctuation">[</span><span class="token string">&#39;score&#39;</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">99</span><span class="token punctuation">)</span><span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">## group By API</span>
df<span class="token punctuation">.</span>groupBy<span class="token punctuation">(</span><span class="token string">&quot;subject&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
df<span class="token punctuation">.</span>groupBy<span class="token punctuation">(</span>df<span class="token punctuation">[</span><span class="token string">&#39;subject&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment">## df.groupBy API的返回值 GroupedData</span>
<span class="token comment">## GroupedData对象 不是DataFrame</span>
<span class="token comment">## 它是一个 有分组关系的数据结构, 有一些API供我们对分组做聚合</span>
<span class="token comment">## SQL: group by 后接上聚合: sum avg count min man</span>
<span class="token comment">## GroupedData 类似于SQL分组后的数据结构, 同样有上述5种聚合方法</span>
<span class="token comment">## GroupedData 调用聚合方法后, 返回值依旧是DataFrame</span>
<span class="token comment">## GroupedData 只是一个中转的对象, 最终还是要获得DataFrame的结果</span>
r <span class="token operator">=</span> df<span class="token punctuation">.</span>groupBy<span class="token punctuation">(</span><span class="token string">&quot;subject&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),o=[e];function c(i,u){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","dataframe.html.vue"]]);export{k as default};
