import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-nD1Z-e8V.js";const p={},e=t(`<h1 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> session</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## coding:utf8</span>

<span class="token comment">## SparkSession对象的导包, 对象是来自于 pyspark.sql包中</span>
<span class="token keyword">from</span> pyspark<span class="token punctuation">.</span>sql <span class="token keyword">import</span> SparkSession

<span class="token comment">## 构建SparkSession执行环境入口对象</span>
spark <span class="token operator">=</span> SparkSession<span class="token punctuation">.</span>builder<span class="token punctuation">.</span>\\
    appName<span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    master<span class="token punctuation">(</span><span class="token string">&quot;local[*]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
    getOrCreate<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## sc = spark.sparkContext # 通过SparkSession对象 获取 SparkContext对象</span>



<span class="token comment">## 创建dataframe</span>
df <span class="token operator">=</span> spark<span class="token punctuation">.</span>read<span class="token punctuation">.</span>csv<span class="token punctuation">(</span><span class="token string">&quot;../data/input/stu_score.txt&quot;</span><span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">,</span> header<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
df2 <span class="token operator">=</span> df<span class="token punctuation">.</span>toDF<span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;score&quot;</span><span class="token punctuation">)</span>
df2<span class="token punctuation">.</span>printSchema<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 查看表结构</span>
df2<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 查看表内容</span>

<span class="token comment">## DSL 风格</span>
df2<span class="token punctuation">.</span>where<span class="token punctuation">(</span><span class="token string">&quot;name=&#39;语文&#39;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>limit<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## SQL 风格</span>
df2<span class="token punctuation">.</span>createTempView<span class="token punctuation">(</span><span class="token string">&quot;score&quot;</span><span class="token punctuation">)</span>

spark<span class="token punctuation">.</span>sql<span class="token punctuation">(</span><span class="token triple-quoted-string string">&quot;&quot;&quot;
    SELECT * FROM score WHERE name=&#39;语文&#39; LIMIT 5
&quot;&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>refs: pyspark_session</p>`,3),o=[e];function c(i,u){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","session.html.vue"]]);export{d as default};
