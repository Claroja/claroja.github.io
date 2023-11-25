import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as e}from"./app-j3zK2x6_.js";const t={},i=e(`<h1 id="sql-sink" tabindex="-1"><a class="header-anchor" href="#sql-sink" aria-hidden="true">#</a> sql_sink</h1><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> mysql</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>table <span class="token keyword">import</span> EnvironmentSettings<span class="token punctuation">,</span> TableEnvironment

<span class="token comment">## create a stream TableEnvironment</span>
env_settings <span class="token operator">=</span> EnvironmentSettings<span class="token punctuation">.</span>in_streaming_mode<span class="token punctuation">(</span><span class="token punctuation">)</span>
table_env <span class="token operator">=</span> TableEnvironment<span class="token punctuation">.</span>create<span class="token punctuation">(</span>env_settings<span class="token punctuation">)</span>
table_env<span class="token punctuation">.</span>get_config<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token string">&quot;pipeline.jars&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;file:///D:/code/test_python/jar/flink-connector-jdbc-1.15.1.jar;file:///D:/code/test_python/jar/mysql-connector-java-8.0.23.jar&quot;</span><span class="token punctuation">)</span>
table_env<span class="token punctuation">.</span>get_config<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token string">&quot;table.exec.resource.default-parallelism&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>



<span class="token comment">## 2. 创建 source 表, 使用datagen生成数据</span>
table_env<span class="token punctuation">.</span>execute_sql<span class="token punctuation">(</span><span class="token triple-quoted-string string">&quot;&quot;&quot;
CREATE TABLE source_table (
    f0 INT
    ) WITH (
    &#39;connector&#39; = &#39;datagen&#39;,
    &#39;rows-per-second&#39;=&#39;1&#39;,
    &#39;fields.f0.start&#39; = &#39;0&#39;,
    &#39;fields.f0.end&#39; = &#39;100000&#39;,
    &#39;fields.f0.kind&#39; = &#39;sequence&#39;
    )
&quot;&quot;&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## table_env.execute_sql(&quot;select * from source_table&quot;).print()</span>


table_env<span class="token punctuation">.</span>execute_sql<span class="token punctuation">(</span><span class="token triple-quoted-string string">&quot;&quot;&quot;CREATE TABLE print_table (
    f0 INT
    ) WITH (
    &#39;connector&#39; = &#39;jdbc&#39;,
    &#39;url&#39; = &#39;jdbc:mysql://aos-db.c6w5wba58yqu.rds.cn-northwest-1.amazonaws.com.cn:3306/test?useSSL=false&#39;,
    &#39;driver&#39;= &#39;com.mysql.cj.jdbc.Driver&#39;,
    &#39;table-name&#39; = &#39;print_table&#39;,
    &#39;username&#39; = &#39;admin&#39;,
    &#39;password&#39; = &#39;HuamiAdmin2017&#39;
);
&quot;&quot;&quot;</span><span class="token punctuation">)</span>

table_env<span class="token punctuation">.</span>execute_sql<span class="token punctuation">(</span><span class="token string">&quot;insert into print_table select f0 from source_table&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token number">60000</span><span class="token punctuation">)</span>



<span class="token comment">## table = table_env.from_path(&quot;mySource&quot;)</span>
<span class="token comment">## table.execute().print()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> redis</h2><p>https://bbs.huaweicloud.com/blogs/302748 https://stackoverflow.com/questions/71779752/why-is-redis-source-connector-not-available-for-flink/71780268#71780268</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>refs: https://nightlies.apache.org/flink/flink-docs-master/docs/connectors/table/datagen/ https://stackoverflow.com/questions/57751465/how-to-setparallelism-for-flink-table-other-than-stream https://dev.mysql.com/doc/refman/8.0/en/truncate-table.html</p>`,7),l=[i];function c(o,p){return s(),a("div",null,l)}const d=n(t,[["render",c],["__file","pyflink_sql_sink.html.vue"]]);export{d as default};
