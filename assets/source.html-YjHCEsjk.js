import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-O0xqlHfm.js";const t={},i=e(`<h1 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> source</h1><h2 id="filesystem" tabindex="-1"><a class="header-anchor" href="#filesystem" aria-hidden="true">#</a> filesystem</h2><h3 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> data</h3><div class="language-csv line-numbers-mode" data-ext="csv"><pre class="language-csv"><code><span class="token value">wang</span><span class="token punctuation">,</span><span class="token value">18</span>
<span class="token value">wei</span><span class="token punctuation">,</span><span class="token value">17</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> demo</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>table <span class="token keyword">import</span> EnvironmentSettings<span class="token punctuation">,</span> TableEnvironment

<span class="token comment">## create a stream TableEnvironment</span>
env_settings <span class="token operator">=</span> EnvironmentSettings<span class="token punctuation">.</span>in_streaming_mode<span class="token punctuation">(</span><span class="token punctuation">)</span>
table_env <span class="token operator">=</span> TableEnvironment<span class="token punctuation">.</span>create<span class="token punctuation">(</span>env_settings<span class="token punctuation">)</span>
table_env<span class="token punctuation">.</span>execute_sql<span class="token punctuation">(</span><span class="token triple-quoted-string string">&quot;&quot;&quot;
    create table mySource (
        name VARCHAR,
        age INT
    ) with (
        &#39;connector&#39; = &#39;filesystem&#39;,
        &#39;format&#39; = &#39;csv&#39;,
        &#39;path&#39; = &#39;./test.csv&#39;
    )
&quot;&quot;&quot;</span><span class="token punctuation">)</span>
table <span class="token operator">=</span> table_env<span class="token punctuation">.</span>from_path<span class="token punctuation">(</span><span class="token string">&quot;mySource&quot;</span><span class="token punctuation">)</span>
table<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> mysql</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>table <span class="token keyword">import</span> EnvironmentSettings<span class="token punctuation">,</span> TableEnvironment

<span class="token comment">## create a stream TableEnvironment</span>
env_settings <span class="token operator">=</span> EnvironmentSettings<span class="token punctuation">.</span>in_streaming_mode<span class="token punctuation">(</span><span class="token punctuation">)</span>
table_env <span class="token operator">=</span> TableEnvironment<span class="token punctuation">.</span>create<span class="token punctuation">(</span>env_settings<span class="token punctuation">)</span>
table_env<span class="token punctuation">.</span>get_config<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token string">&quot;pipeline.jars&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;file:///D:/code/test_python/jar/flink-connector-jdbc-1.15.1.jar;file:///D:/code/test_python/jar/mysql-connector-java-8.0.23.jar&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 添加依赖包 flink-connector 和 mysql-connector</span>

table_env<span class="token punctuation">.</span>execute_sql<span class="token punctuation">(</span><span class="token triple-quoted-string string">&quot;&quot;&quot;
CREATE TABLE mySource (
    tags VARCHAR
) WITH (
    &#39;connector&#39; = &#39;jdbc&#39;,
    &#39;url&#39; = &#39;jdbc:mysql://hostName:3306/relax_music?useSSL=false&#39;,
    &#39;driver&#39;= &#39;com.mysql.cj.jdbc.Driver&#39;,
    &#39;table-name&#39; = &#39;table&#39;,
    &#39;username&#39; = &#39;root&#39;,
    &#39;password&#39; = &#39;root&#39;
);
&quot;&quot;&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## table_env.execute_sql(&quot;select * from mySource&quot;).print()</span>
table <span class="token operator">=</span> table_env<span class="token punctuation">.</span>from_path<span class="token punctuation">(</span><span class="token string">&quot;mySource&quot;</span><span class="token punctuation">)</span>
table<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="question" tabindex="-1"><a class="header-anchor" href="#question" aria-hidden="true">#</a> question</h3><ol><li>javax.net.ssl.SSLHandshakeException https://stackoverflow.com/questions/50525270/why-ssl-is-false-when-you-open-jdbc-connection-to-mysql</li></ol><p>refs: https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/dev/python/table_api_tutorial/ https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/connectors/table/jdbc/</p>`,11),o=[i];function c(l,p){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","source.html.vue"]]);export{d as default};
