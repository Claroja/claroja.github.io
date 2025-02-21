import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o,c as l,a as s,b as n,d as t,e as a}from"./app-jdLxCr9I.js";const c={},u=a(`<h1 id="sqlintro" tabindex="-1"><a class="header-anchor" href="#sqlintro" aria-hidden="true">#</a> sqlIntro</h1><h2 id="create-a-tableenvironment" tabindex="-1"><a class="header-anchor" href="#create-a-tableenvironment" aria-hidden="true">#</a> Create a TableEnvironment</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>table <span class="token keyword">import</span> EnvironmentSettings<span class="token punctuation">,</span> TableEnvironment

<span class="token comment">## create a streaming TableEnvironment</span>
env_settings <span class="token operator">=</span> EnvironmentSettings<span class="token punctuation">.</span>in_streaming_mode<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## or create a batch TableEnvironment</span>
env_settings <span class="token operator">=</span> EnvironmentSettings<span class="token punctuation">.</span>in_batch_mode<span class="token punctuation">(</span><span class="token punctuation">)</span>
table_env <span class="token operator">=</span> TableEnvironment<span class="token punctuation">.</span>create<span class="token punctuation">(</span>env_settings<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="create-tables" tabindex="-1"><a class="header-anchor" href="#create-tables" aria-hidden="true">#</a> Create Tables</h2><p>A <code>Table</code> object describes a pipeline of data transformations.It does not contain the data itself in any way. Instead, it describes how to read data from a table source, and how to eventually write data to a table sink.</p><h3 id="create-using-a-list-object" tabindex="-1"><a class="header-anchor" href="#create-using-a-list-object" aria-hidden="true">#</a> Create using a List Object</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>table <span class="token keyword">import</span> EnvironmentSettings<span class="token punctuation">,</span> TableEnvironment
<span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>table <span class="token keyword">import</span> DataTypes
<span class="token comment">## create a batch TableEnvironment</span>
env_settings <span class="token operator">=</span> EnvironmentSettings<span class="token punctuation">.</span>in_batch_mode<span class="token punctuation">(</span><span class="token punctuation">)</span>
table_env <span class="token operator">=</span> TableEnvironment<span class="token punctuation">.</span>create<span class="token punctuation">(</span>env_settings<span class="token punctuation">)</span>

table <span class="token operator">=</span> table_env<span class="token punctuation">.</span>from_elements<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;Hi&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">## table = table_env.from_elements([(1, &#39;Hi&#39;), (2, &#39;Hello&#39;)], [&#39;id&#39;, &#39;data&#39;])  # specified column names</span>
<span class="token comment">## table = table_env.from_elements([(1, &#39;Hi&#39;), (2, &#39;Hello&#39;)],</span>
<span class="token comment">##                                 DataTypes.ROW([DataTypes.FIELD(&quot;id&quot;, DataTypes.TINYINT()),</span>
<span class="token comment">##                                                DataTypes.FIELD(&quot;data&quot;, DataTypes.STRING())])) # specify the datatype</span>

table<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="create-using-ddl-statements" tabindex="-1"><a class="header-anchor" href="#create-using-ddl-statements" aria-hidden="true">#</a> Create using DDL statements</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>table <span class="token keyword">import</span> EnvironmentSettings<span class="token punctuation">,</span> TableEnvironment

<span class="token comment">## create a stream TableEnvironment</span>
env_settings <span class="token operator">=</span> EnvironmentSettings<span class="token punctuation">.</span>in_streaming_mode<span class="token punctuation">(</span><span class="token punctuation">)</span>
table_env <span class="token operator">=</span> TableEnvironment<span class="token punctuation">.</span>create<span class="token punctuation">(</span>env_settings<span class="token punctuation">)</span>

table_env<span class="token punctuation">.</span>execute_sql<span class="token punctuation">(</span><span class="token triple-quoted-string string">&quot;&quot;&quot;
    CREATE TABLE random_source (
        id BIGINT, 
        data TINYINT 
    ) WITH (
        &#39;connector&#39; = &#39;datagen&#39;,
        &#39;fields.id.kind&#39;=&#39;sequence&#39;,
        &#39;fields.id.start&#39;=&#39;1&#39;,
        &#39;fields.id.end&#39;=&#39;3&#39;,
        &#39;fields.data.kind&#39;=&#39;sequence&#39;,
        &#39;fields.data.start&#39;=&#39;4&#39;,
        &#39;fields.data.end&#39;=&#39;6&#39;
    )
&quot;&quot;&quot;</span><span class="token punctuation">)</span>
table <span class="token operator">=</span> table_env<span class="token punctuation">.</span>from_path<span class="token punctuation">(</span><span class="token string">&quot;random_source&quot;</span><span class="token punctuation">)</span>
table<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="queries" tabindex="-1"><a class="header-anchor" href="#queries" aria-hidden="true">#</a> Queries</h2><h3 id="table-api-queries" tabindex="-1"><a class="header-anchor" href="#table-api-queries" aria-hidden="true">#</a> Table API Queries</h3>`,11),r={href:"https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/dev/table/tableapi/?code_tab=python",target:"_blank",rel:"noopener noreferrer"},d=a(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>table <span class="token keyword">import</span> EnvironmentSettings<span class="token punctuation">,</span> TableEnvironment
<span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>table<span class="token punctuation">.</span>expressions <span class="token keyword">import</span> col

<span class="token comment">## using batch table environment to execute the queries</span>
env_settings <span class="token operator">=</span> EnvironmentSettings<span class="token punctuation">.</span>in_batch_mode<span class="token punctuation">(</span><span class="token punctuation">)</span>
table_env <span class="token operator">=</span> TableEnvironment<span class="token punctuation">.</span>create<span class="token punctuation">(</span>env_settings<span class="token punctuation">)</span>

orders <span class="token operator">=</span> table_env<span class="token punctuation">.</span>from_elements<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;Jack&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;FRANCE&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;Rose&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ENGLAND&#39;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;Jack&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;FRANCE&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                                 <span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;country&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;revenue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">## compute revenue for all customers from France</span>
revenue <span class="token operator">=</span> orders \\
    <span class="token punctuation">.</span>select<span class="token punctuation">(</span>col<span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> col<span class="token punctuation">(</span><span class="token string">&quot;country&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> col<span class="token punctuation">(</span><span class="token string">&quot;revenue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> \\
    <span class="token punctuation">.</span>where<span class="token punctuation">(</span>col<span class="token punctuation">(</span><span class="token string">&quot;country&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&#39;FRANCE&#39;</span><span class="token punctuation">)</span> \\
    <span class="token punctuation">.</span>group_by<span class="token punctuation">(</span>col<span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> \\
    <span class="token punctuation">.</span>select<span class="token punctuation">(</span>col<span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> col<span class="token punctuation">(</span><span class="token string">&quot;country&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">.</span>alias<span class="token punctuation">(</span><span class="token string">&#39;rev_sum&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

revenue<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sql-queries" tabindex="-1"><a class="header-anchor" href="#sql-queries" aria-hidden="true">#</a> SQL Queries</h3>`,2),k={href:"https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/dev/table/sql/overview/",target:"_blank",rel:"noopener noreferrer"},v=a(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>table <span class="token keyword">import</span> EnvironmentSettings<span class="token punctuation">,</span> TableEnvironment

<span class="token comment">## use a stream TableEnvironment to execute the queries</span>
env_settings <span class="token operator">=</span> EnvironmentSettings<span class="token punctuation">.</span>in_streaming_mode<span class="token punctuation">(</span><span class="token punctuation">)</span>
table_env <span class="token operator">=</span> TableEnvironment<span class="token punctuation">.</span>create<span class="token punctuation">(</span>env_settings<span class="token punctuation">)</span>

table_env<span class="token punctuation">.</span>execute_sql<span class="token punctuation">(</span><span class="token triple-quoted-string string">&quot;&quot;&quot;
    CREATE TABLE random_source (
        id BIGINT, 
        data TINYINT
    ) WITH (
        &#39;connector&#39; = &#39;datagen&#39;,
        &#39;fields.id.kind&#39;=&#39;sequence&#39;,
        &#39;fields.id.start&#39;=&#39;1&#39;,
        &#39;fields.id.end&#39;=&#39;8&#39;,
        &#39;fields.data.kind&#39;=&#39;sequence&#39;,
        &#39;fields.data.start&#39;=&#39;4&#39;,
        &#39;fields.data.end&#39;=&#39;11&#39;
    )
&quot;&quot;&quot;</span><span class="token punctuation">)</span>

table_env<span class="token punctuation">.</span>execute_sql<span class="token punctuation">(</span><span class="token triple-quoted-string string">&quot;&quot;&quot;
    CREATE TABLE print_sink (
        id BIGINT, 
        data_sum TINYINT 
    ) WITH (
        &#39;connector&#39; = &#39;print&#39;
    )
&quot;&quot;&quot;</span><span class="token punctuation">)</span>

table_env<span class="token punctuation">.</span>execute_sql<span class="token punctuation">(</span><span class="token triple-quoted-string string">&quot;&quot;&quot;
    INSERT INTO print_sink
        SELECT id, sum(data) as data_sum FROM 
            (SELECT id / 2 as id, data FROM random_source)
        WHERE id &gt; 1
        GROUP BY id
&quot;&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mix-the-table-api-and-sql" tabindex="-1"><a class="header-anchor" href="#mix-the-table-api-and-sql" aria-hidden="true">#</a> Mix the Table API and SQL</h2><p>The Table objects used in Table API and the tables used in SQL can be freely converted to each other.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## create a sink table to emit results</span>
table_env<span class="token punctuation">.</span>execute_sql<span class="token punctuation">(</span><span class="token triple-quoted-string string">&quot;&quot;&quot;
    CREATE TABLE table_sink (
        id BIGINT, 
        data VARCHAR 
    ) WITH (
        &#39;connector&#39; = &#39;print&#39;
    )
&quot;&quot;&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## convert the Table API table to a SQL view</span>
table <span class="token operator">=</span> table_env<span class="token punctuation">.</span>from_elements<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;Hi&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
table_env<span class="token punctuation">.</span>create_temporary_view<span class="token punctuation">(</span><span class="token string">&#39;table_api_table&#39;</span><span class="token punctuation">,</span> table<span class="token punctuation">)</span>

<span class="token comment">## emit the Table API table</span>
table_env<span class="token punctuation">.</span>execute_sql<span class="token punctuation">(</span><span class="token string">&quot;INSERT INTO table_sink SELECT * FROM table_api_table&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="emit-results" tabindex="-1"><a class="header-anchor" href="#emit-results" aria-hidden="true">#</a> Emit Results</h2><h3 id="print" tabindex="-1"><a class="header-anchor" href="#print" aria-hidden="true">#</a> print</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## prepare source tables </span>
source <span class="token operator">=</span> table_env<span class="token punctuation">.</span>from_elements<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;Hi&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">## Get TableResult</span>
table_result <span class="token operator">=</span> table_env<span class="token punctuation">.</span>execute_sql<span class="token punctuation">(</span><span class="token string">&quot;select a + 1, b, c from %s&quot;</span> <span class="token operator">%</span> source<span class="token punctuation">)</span>

<span class="token comment">## Print the table</span>
table_result<span class="token punctuation">.</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="collect-results-to-client" tabindex="-1"><a class="header-anchor" href="#collect-results-to-client" aria-hidden="true">#</a> Collect Results to Client</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## prepare source tables </span>
source <span class="token operator">=</span> table_env<span class="token punctuation">.</span>from_elements<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;Hi&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">## Get TableResult</span>
table_result <span class="token operator">=</span> table_env<span class="token punctuation">.</span>execute_sql<span class="token punctuation">(</span><span class="token string">&quot;select a + 1, b, c from %s&quot;</span> <span class="token operator">%</span> source<span class="token punctuation">)</span>

<span class="token comment">## Traversal result</span>
<span class="token keyword">with</span> table_result<span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> results<span class="token punctuation">:</span>
   <span class="token keyword">for</span> result <span class="token keyword">in</span> results<span class="token punctuation">:</span>
       <span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="emit-results-to-one-sink-table" tabindex="-1"><a class="header-anchor" href="#emit-results-to-one-sink-table" aria-hidden="true">#</a> Emit Results to One Sink Table</h3><h4 id="table-api" tabindex="-1"><a class="header-anchor" href="#table-api" aria-hidden="true">#</a> Table API</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>table_env<span class="token punctuation">.</span>execute_sql<span class="token punctuation">(</span><span class="token triple-quoted-string string">&quot;&quot;&quot;
    CREATE TABLE sink_table (
        id BIGINT, 
        data VARCHAR 
    ) WITH (
        &#39;connector&#39; = &#39;print&#39;
    )
&quot;&quot;&quot;</span><span class="token punctuation">)</span>

table <span class="token operator">=</span> table_env<span class="token punctuation">.</span>from_elements<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;Hi&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
table<span class="token punctuation">.</span>execute_insert<span class="token punctuation">(</span><span class="token string">&quot;sink_table&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sql" tabindex="-1"><a class="header-anchor" href="#sql" aria-hidden="true">#</a> SQL</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>table_env<span class="token punctuation">.</span>create_temporary_view<span class="token punctuation">(</span><span class="token string">&quot;table_source&quot;</span><span class="token punctuation">,</span> table<span class="token punctuation">)</span>
table_env<span class="token punctuation">.</span>execute_sql<span class="token punctuation">(</span><span class="token string">&quot;INSERT INTO sink_table SELECT * FROM table_source&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> example</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>table <span class="token keyword">import</span> EnvironmentSettings<span class="token punctuation">,</span> TableEnvironment
<span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>table<span class="token punctuation">.</span>expressions <span class="token keyword">import</span> col

<span class="token comment">## 1. create a TableEnvironment</span>
env_settings <span class="token operator">=</span> EnvironmentSettings<span class="token punctuation">.</span>in_streaming_mode<span class="token punctuation">(</span><span class="token punctuation">)</span>
table_env <span class="token operator">=</span> TableEnvironment<span class="token punctuation">.</span>create<span class="token punctuation">(</span>env_settings<span class="token punctuation">)</span>

<span class="token comment">## 2. create source Table</span>
table_env<span class="token punctuation">.</span>execute_sql<span class="token punctuation">(</span><span class="token triple-quoted-string string">&quot;&quot;&quot;
    CREATE TABLE datagen (
        id INT,
        data STRING
    ) WITH (
        &#39;connector&#39; = &#39;datagen&#39;,
        &#39;fields.id.kind&#39; = &#39;sequence&#39;,
        &#39;fields.id.start&#39; = &#39;1&#39;,
        &#39;fields.id.end&#39; = &#39;10&#39;
    )
&quot;&quot;&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## 3. create sink Table</span>
table_env<span class="token punctuation">.</span>execute_sql<span class="token punctuation">(</span><span class="token triple-quoted-string string">&quot;&quot;&quot;
    CREATE TABLE print (
        id INT,
        data STRING
    ) WITH (
        &#39;connector&#39; = &#39;print&#39;
    )
&quot;&quot;&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## 4. query from source table and perform calculations</span>
source_table <span class="token operator">=</span> table_env<span class="token punctuation">.</span>from_path<span class="token punctuation">(</span><span class="token string">&quot;datagen&quot;</span><span class="token punctuation">)</span> <span class="token comment"># create a Table from a Table API query:</span>
<span class="token comment">## source_table = table_env.sql_query(&quot;SELECT * FROM datagen&quot;) # or create a Table from a SQL query:</span>

result_table <span class="token operator">=</span> source_table<span class="token punctuation">.</span>select<span class="token punctuation">(</span>col<span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> col<span class="token punctuation">(</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## 5. emit query result to sink table</span>
result_table<span class="token punctuation">.</span>execute_insert<span class="token punctuation">(</span><span class="token string">&quot;print&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># # emit a Table API result Table to a sink table:</span>
<span class="token comment">## table_env.execute_sql(&quot;INSERT INTO print SELECT * FROM datagen&quot;).wait() # or emit results via SQL query:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>refs: https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/dev/python/table/intro_to_table_api/ https://nightlies.apache.org/flink/flink-docs-master/docs/connectors/table/datagen/</p>`,17);function m(b,h){const e=i("ExternalLinkIcon");return o(),l("div",null,[u,s("p",null,[n("The "),s("a",r,[n("Table API"),t(e)]),n(" documentation describes all Table API operations that are supported on streaming and batch tables.")]),d,s("p",null,[n("The "),s("a",k,[n("SQL"),t(e)]),n(" documentation describes Flink’s SQL support for streaming and batch tables.")]),v])}const _=p(c,[["render",m],["__file","sqlIntro.html.vue"]]);export{_ as default};
