import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e as t}from"./app-A10JnHE0.js";const e={},p=t(`<h1 id="intro" tabindex="-1"><a class="header-anchor" href="#intro" aria-hidden="true">#</a> intro</h1><p>test data.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>word_count_data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;hello apache flink&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;python flink&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="declare-environment" tabindex="-1"><a class="header-anchor" href="#declare-environment" aria-hidden="true">#</a> declare environment</h2><p>declare an execution environment, use it to:</p><ol><li>set the properties of your job (e.g. default parallelism, restart strategy)</li><li>create your sources</li><li>finally trigger the execution of the job.</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>env <span class="token operator">=</span> StreamExecutionEnvironment<span class="token punctuation">.</span>get_execution_environment<span class="token punctuation">(</span><span class="token punctuation">)</span>
env<span class="token punctuation">.</span>set_runtime_mode<span class="token punctuation">(</span>RuntimeExecutionMode<span class="token punctuation">.</span>BATCH<span class="token punctuation">)</span>
env<span class="token punctuation">.</span>set_parallelism<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="declare-source" tabindex="-1"><a class="header-anchor" href="#declare-source" aria-hidden="true">#</a> declare source</h2><p>Sources ingest data from external systems, such as</p><ol><li>Apache Kafka</li><li>Rabbit MQ</li><li>Apache Pulsar</li><li>a file</li><li>in-memory data</li></ol><p>the code below reads data from in-memory data.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ds <span class="token operator">=</span> env<span class="token punctuation">.</span>from_collection<span class="token punctuation">(</span>word_count_data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="transform" tabindex="-1"><a class="header-anchor" href="#transform" aria-hidden="true">#</a> transform</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ds <span class="token operator">=</span> ds<span class="token punctuation">.</span>flat_map<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> output_type<span class="token operator">=</span>Types<span class="token punctuation">.</span>STRING<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> \\
    <span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> i<span class="token punctuation">:</span> <span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> output_type<span class="token operator">=</span>Types<span class="token punctuation">.</span>TUPLE<span class="token punctuation">(</span><span class="token punctuation">[</span>Types<span class="token punctuation">.</span>STRING<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Types<span class="token punctuation">.</span>INT<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> \\
    <span class="token punctuation">.</span>key_by<span class="token punctuation">(</span><span class="token keyword">lambda</span> i<span class="token punctuation">:</span> i<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> \\
    <span class="token punctuation">.</span><span class="token builtin">reduce</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> i<span class="token punctuation">,</span> j<span class="token punctuation">:</span> <span class="token punctuation">(</span>i<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> j<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="define-the-sink" tabindex="-1"><a class="header-anchor" href="#define-the-sink" aria-hidden="true">#</a> define the sink</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ds<span class="token punctuation">.</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="execution" tabindex="-1"><a class="header-anchor" href="#execution" aria-hidden="true">#</a> execution</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>env.execute()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> code</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>common <span class="token keyword">import</span>  Types
<span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>datastream <span class="token keyword">import</span> StreamExecutionEnvironment<span class="token punctuation">,</span> RuntimeExecutionMode

word_count_data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;hello apache flink&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;python flink&#39;</span><span class="token punctuation">]</span>

<span class="token comment">## 1. declare an execution environment</span>

env <span class="token operator">=</span> StreamExecutionEnvironment<span class="token punctuation">.</span>get_execution_environment<span class="token punctuation">(</span><span class="token punctuation">)</span>
env<span class="token punctuation">.</span>set_runtime_mode<span class="token punctuation">(</span>RuntimeExecutionMode<span class="token punctuation">.</span>BATCH<span class="token punctuation">)</span>
env<span class="token punctuation">.</span>set_parallelism<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment"># write all the data to one file</span>

<span class="token comment">## 2. define the source</span>
ds <span class="token operator">=</span> env<span class="token punctuation">.</span>from_collection<span class="token punctuation">(</span>word_count_data<span class="token punctuation">)</span>


<span class="token comment">## transform</span>
ds <span class="token operator">=</span> ds<span class="token punctuation">.</span>flat_map<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> output_type<span class="token operator">=</span>Types<span class="token punctuation">.</span>STRING<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> \\
    <span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> i<span class="token punctuation">:</span> <span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> output_type<span class="token operator">=</span>Types<span class="token punctuation">.</span>TUPLE<span class="token punctuation">(</span><span class="token punctuation">[</span>Types<span class="token punctuation">.</span>STRING<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Types<span class="token punctuation">.</span>INT<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> \\
    <span class="token punctuation">.</span>key_by<span class="token punctuation">(</span><span class="token keyword">lambda</span> i<span class="token punctuation">:</span> i<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> \\
    <span class="token punctuation">.</span><span class="token builtin">reduce</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> i<span class="token punctuation">,</span> j<span class="token punctuation">:</span> <span class="token punctuation">(</span>i<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> j<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## define the sink</span>
ds<span class="token punctuation">.</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">## submit for execution</span>
env<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>refs: https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/dev/python/datastream_tutorial/</p>`,21),o=[p];function c(i,u){return a(),s("div",null,o)}const d=n(e,[["render",c],["__file","intro.html.vue"]]);export{d as default};
