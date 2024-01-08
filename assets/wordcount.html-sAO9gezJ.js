import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-YE2Hltoy.js";const p={},e=t(`<h1 id="wordcount" tabindex="-1"><a class="header-anchor" href="#wordcount" aria-hidden="true">#</a> wordcount</h1><div class="language-data line-numbers-mode" data-ext="data"><pre class="language-data"><code>hello spark
hello hadoop
hello flink
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="batch-mode" tabindex="-1"><a class="header-anchor" href="#batch-mode" aria-hidden="true">#</a> BATCH mode</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>datastream <span class="token keyword">import</span> StreamExecutionEnvironment<span class="token punctuation">,</span> RuntimeExecutionMode

env <span class="token operator">=</span> StreamExecutionEnvironment<span class="token punctuation">.</span>get_execution_environment<span class="token punctuation">(</span><span class="token punctuation">)</span>
env<span class="token punctuation">.</span>set_runtime_mode<span class="token punctuation">(</span>RuntimeExecutionMode<span class="token punctuation">.</span>BATCH<span class="token punctuation">)</span>  <span class="token comment"># BATCH</span>
env<span class="token punctuation">.</span>set_parallelism<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment"># write all the data to one file</span>
<span class="token comment">## read&amp;tans</span>
ds <span class="token operator">=</span> env<span class="token punctuation">.</span>read_text_file<span class="token punctuation">(</span><span class="token string">&quot;./words.txt&quot;</span><span class="token punctuation">)</span>
ds <span class="token operator">=</span> ds<span class="token punctuation">.</span>flat_map<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span>x<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> \\
    <span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> \\
    <span class="token punctuation">.</span>key_by<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> \\
    <span class="token punctuation">.</span><span class="token builtin">reduce</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> a<span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token punctuation">(</span>b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">## define the sink</span>
ds<span class="token punctuation">.</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
env<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">## output:</span>
<span class="token comment">## (&#39;flink&#39;, 1)</span>
<span class="token comment">## (&#39;hello&#39;, 3)</span>
<span class="token comment">## (&#39;spark&#39;, 1)</span>
<span class="token comment">## (&#39;hadoop&#39;, 1)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="streaming-mode" tabindex="-1"><a class="header-anchor" href="#streaming-mode" aria-hidden="true">#</a> STREAMING mode</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>datastream <span class="token keyword">import</span> StreamExecutionEnvironment<span class="token punctuation">,</span> RuntimeExecutionMode
env <span class="token operator">=</span> StreamExecutionEnvironment<span class="token punctuation">.</span>get_execution_environment<span class="token punctuation">(</span><span class="token punctuation">)</span>
env<span class="token punctuation">.</span>set_runtime_mode<span class="token punctuation">(</span>RuntimeExecutionMode<span class="token punctuation">.</span>STREAMING<span class="token punctuation">)</span>  <span class="token comment"># Stream</span>
env<span class="token punctuation">.</span>set_parallelism<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment"># write all the data to one file</span>
<span class="token comment">## read&amp;tans</span>
ds <span class="token operator">=</span> env<span class="token punctuation">.</span>read_text_file<span class="token punctuation">(</span><span class="token string">&quot;./words.txt&quot;</span><span class="token punctuation">)</span>
ds <span class="token operator">=</span> ds<span class="token punctuation">.</span>flat_map<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span>x<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> \\
    <span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> \\
    <span class="token punctuation">.</span>key_by<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> \\
    <span class="token punctuation">.</span><span class="token builtin">reduce</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> a<span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token punctuation">(</span>b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">## define the sink</span>
ds<span class="token punctuation">.</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
env<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">## output:</span>
<span class="token comment">## (&#39;hello&#39;, 1)</span>
<span class="token comment">## (&#39;spark&#39;, 1)</span>
<span class="token comment">## (&#39;hello&#39;, 2)</span>
<span class="token comment">## (&#39;hadoop&#39;, 1)</span>
<span class="token comment">## (&#39;hello&#39;, 3)</span>
<span class="token comment">## (&#39;flink&#39;, 1)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每过来一条数据就会处理一次，所以<code>hello</code>被打印了多次</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ds <span class="token operator">=</span> ds<span class="token punctuation">.</span>flat_map<span class="token punctuation">(</span>split<span class="token punctuation">)</span> \\
<span class="token keyword">def</span> <span class="token function">split</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>
    splits <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;|&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> sp <span class="token keyword">in</span> splits<span class="token punctuation">:</span>
        <span class="token keyword">yield</span> s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> sp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>refs:</p>`,9),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","wordcount.html.vue"]]);export{k as default};
