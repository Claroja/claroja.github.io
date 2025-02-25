import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-nD1Z-e8V.js";const p={},e=t(`<h1 id="sql" tabindex="-1"><a class="header-anchor" href="#sql" aria-hidden="true">#</a> sql</h1><h3 id="sql-1" tabindex="-1"><a class="header-anchor" href="#sql-1" aria-hidden="true">#</a> sql</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## coding:utf8</span>

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

<span class="token comment">## 注册成临时表</span>
df<span class="token punctuation">.</span>createTempView<span class="token punctuation">(</span><span class="token string">&quot;score&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 注册临时视图(表)</span>
df<span class="token punctuation">.</span>createOrReplaceTempView<span class="token punctuation">(</span><span class="token string">&quot;score_2&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 注册 或者 替换  临时视图</span>
df<span class="token punctuation">.</span>createGlobalTempView<span class="token punctuation">(</span><span class="token string">&quot;score_3&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 注册全局临时视图 全局临时视图在使用的时候 需要在前面带上global_temp. 前缀</span>

<span class="token comment">## 可以通过SparkSession对象的sql api来完成sql语句的执行</span>
spark<span class="token punctuation">.</span>sql<span class="token punctuation">(</span><span class="token string">&quot;SELECT subject, COUNT(*) AS cnt FROM score GROUP BY subject&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
spark<span class="token punctuation">.</span>sql<span class="token punctuation">(</span><span class="token string">&quot;SELECT subject, COUNT(*) AS cnt FROM score_2 GROUP BY subject&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
spark<span class="token punctuation">.</span>sql<span class="token punctuation">(</span><span class="token string">&quot;SELECT subject, COUNT(*) AS cnt FROM global_temp.score_3 GROUP BY subject&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>refs: spark_dataframe_sql</p>`,4),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","sql.html.vue"]]);export{k as default};
