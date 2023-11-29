import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-M6UUlHgF.js";const e={},p=t(`<h1 id="operator" tabindex="-1"><a class="header-anchor" href="#operator" aria-hidden="true">#</a> operator</h1><h2 id="base" tabindex="-1"><a class="header-anchor" href="#base" aria-hidden="true">#</a> base</h2><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h3><p>python暂不支持<code>mapPartition</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>common <span class="token keyword">import</span>  Types
<span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>datastream <span class="token keyword">import</span> StreamExecutionEnvironment<span class="token punctuation">,</span> RuntimeExecutionMode
<span class="token comment">## declare an execution environment</span>
env <span class="token operator">=</span> StreamExecutionEnvironment<span class="token punctuation">.</span>get_execution_environment<span class="token punctuation">(</span><span class="token punctuation">)</span>
env<span class="token punctuation">.</span>set_runtime_mode<span class="token punctuation">(</span>RuntimeExecutionMode<span class="token punctuation">.</span>BATCH<span class="token punctuation">)</span>
env<span class="token punctuation">.</span>set_parallelism<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment"># write all the data to one file</span>
<span class="token comment">## define the source</span>
ds <span class="token operator">=</span> env<span class="token punctuation">.</span>from_collection<span class="token punctuation">(</span>
    collection<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;aaa|bb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;bb|a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;aaa|a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    type_info<span class="token operator">=</span>Types<span class="token punctuation">.</span>ROW<span class="token punctuation">(</span><span class="token punctuation">[</span>Types<span class="token punctuation">.</span>INT<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Types<span class="token punctuation">.</span>STRING<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
ds <span class="token operator">=</span> ds<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span>x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">## define the sink</span>
ds<span class="token punctuation">.</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## submit for execution</span>
env<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flat-map" tabindex="-1"><a class="header-anchor" href="#flat-map" aria-hidden="true">#</a> flat_map</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>common <span class="token keyword">import</span>  Types
<span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>datastream <span class="token keyword">import</span> StreamExecutionEnvironment<span class="token punctuation">,</span> RuntimeExecutionMode

<span class="token comment">## declare an execution environment</span>
env <span class="token operator">=</span> StreamExecutionEnvironment<span class="token punctuation">.</span>get_execution_environment<span class="token punctuation">(</span><span class="token punctuation">)</span>
env<span class="token punctuation">.</span>set_runtime_mode<span class="token punctuation">(</span>RuntimeExecutionMode<span class="token punctuation">.</span>BATCH<span class="token punctuation">)</span>
env<span class="token punctuation">.</span>set_parallelism<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment"># write all the data to one file</span>

<span class="token comment">## define the source</span>
ds <span class="token operator">=</span> env<span class="token punctuation">.</span>from_collection<span class="token punctuation">(</span>collection<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;hadoop,flink&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;flink,spark&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">## transform</span>
ds <span class="token operator">=</span> ds<span class="token punctuation">.</span>flat_map<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## define the sink</span>
ds<span class="token punctuation">.</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## submit for execution</span>
env<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ds <span class="token operator">=</span> ds<span class="token punctuation">.</span>flat_map<span class="token punctuation">(</span>split<span class="token punctuation">)</span> \\
<span class="token keyword">def</span> <span class="token function">split</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>
    splits <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;|&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> sp <span class="token keyword">in</span> splits<span class="token punctuation">:</span>
        <span class="token keyword">yield</span> s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> sp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fliter" tabindex="-1"><a class="header-anchor" href="#fliter" aria-hidden="true">#</a> fliter</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>datastream <span class="token keyword">import</span> StreamExecutionEnvironment<span class="token punctuation">,</span> RuntimeExecutionMode

<span class="token comment">## declare an execution environment</span>
env <span class="token operator">=</span> StreamExecutionEnvironment<span class="token punctuation">.</span>get_execution_environment<span class="token punctuation">(</span><span class="token punctuation">)</span>
env<span class="token punctuation">.</span>set_runtime_mode<span class="token punctuation">(</span>RuntimeExecutionMode<span class="token punctuation">.</span>BATCH<span class="token punctuation">)</span>
env<span class="token punctuation">.</span>set_parallelism<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment"># write all the data to one file</span>
<span class="token comment">## define the source</span>
ds <span class="token operator">=</span> env<span class="token punctuation">.</span>from_collection<span class="token punctuation">(</span>collection<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;hadoop&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;flink&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">## transform</span>
ds <span class="token operator">=</span> ds<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> <span class="token builtin">len</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">## define the sink</span>
ds<span class="token punctuation">.</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## submit for execution</span>
env<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="agg" tabindex="-1"><a class="header-anchor" href="#agg" aria-hidden="true">#</a> agg</h2><p>分区之后才能聚合</p><h3 id="key-by" tabindex="-1"><a class="header-anchor" href="#key-by" aria-hidden="true">#</a> key_by</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>common <span class="token keyword">import</span>  Types
<span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>datastream <span class="token keyword">import</span> StreamExecutionEnvironment<span class="token punctuation">,</span> RuntimeExecutionMode

<span class="token comment">## declare an execution environment</span>
env <span class="token operator">=</span> StreamExecutionEnvironment<span class="token punctuation">.</span>get_execution_environment<span class="token punctuation">(</span><span class="token punctuation">)</span>
env<span class="token punctuation">.</span>set_runtime_mode<span class="token punctuation">(</span>RuntimeExecutionMode<span class="token punctuation">.</span>BATCH<span class="token punctuation">)</span>
env<span class="token punctuation">.</span>set_parallelism<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment"># write all the data to one file</span>
<span class="token comment">## define the source</span>
data_stream <span class="token operator">=</span> env<span class="token punctuation">.</span>from_collection<span class="token punctuation">(</span>collection<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">## transform</span>
data_stream <span class="token operator">=</span> data_stream<span class="token punctuation">.</span>key_by<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> key_type<span class="token operator">=</span>Types<span class="token punctuation">.</span>STRING<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">## define the sink</span>
data_stream<span class="token punctuation">.</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## submit for execution</span>
env<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="key-by-reduce" tabindex="-1"><a class="header-anchor" href="#key-by-reduce" aria-hidden="true">#</a> key_by + reduce</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>common <span class="token keyword">import</span>  Types
<span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>datastream <span class="token keyword">import</span> StreamExecutionEnvironment<span class="token punctuation">,</span> RuntimeExecutionMode

<span class="token comment">## declare an execution environment</span>
env <span class="token operator">=</span> StreamExecutionEnvironment<span class="token punctuation">.</span>get_execution_environment<span class="token punctuation">(</span><span class="token punctuation">)</span>
env<span class="token punctuation">.</span>set_runtime_mode<span class="token punctuation">(</span>RuntimeExecutionMode<span class="token punctuation">.</span>BATCH<span class="token punctuation">)</span>
env<span class="token punctuation">.</span>set_parallelism<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment"># write all the data to one file</span>
<span class="token comment">## define the source</span>
data_stream <span class="token operator">=</span> env<span class="token punctuation">.</span>from_collection<span class="token punctuation">(</span>collection<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">## transform</span>
data_stream <span class="token operator">=</span> data_stream<span class="token punctuation">.</span>key_by<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">reduce</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> a<span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">## define the sink</span>
data_stream<span class="token punctuation">.</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## submit for execution</span>
env<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rich-function" tabindex="-1"><a class="header-anchor" href="#rich-function" aria-hidden="true">#</a> rich function</h2><p>Rich Function 有生命周期的概念。典型的生命周期方法有：</p><ul><li>open()方法，是 Rich Function 的初始化方法，也就是会开启一个算子的生命周期。当一个算子的实际工作方法例如 map()或者 filter()方法被调用之前，open()会首先被调用。所以像文件 IO 的创建，数据库连接的创建，配置文件的读取等等这样一次性的工作，都适合在 open()方法中完成</li><li>close()方法，是生命周期中的最后一个调用的方法，类似于解构方法。一般用来做一 些清理工作</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Predict</span><span class="token punctuation">(</span>MapFunction<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">open</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> runtime_context<span class="token punctuation">:</span> RuntimeContext<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">import</span> pickle

        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;resources.zip/resources/model.pkl&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;rb&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>model <span class="token operator">=</span> pickle<span class="token punctuation">.</span>load<span class="token punctuation">(</span>f<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">eval</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>model<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>x<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>refs: https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/dev/datastream/operators/overview/</p>`,21),o=[p];function c(i,u){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","operator.html.vue"]]);export{k as default};
