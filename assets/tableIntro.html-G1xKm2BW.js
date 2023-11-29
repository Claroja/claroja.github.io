import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-M6UUlHgF.js";const p={},o=t(`<h1 id="tableintro" tabindex="-1"><a class="header-anchor" href="#tableintro" aria-hidden="true">#</a> tableIntro</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>common <span class="token keyword">import</span> Row
<span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>table <span class="token keyword">import</span> <span class="token punctuation">(</span>EnvironmentSettings<span class="token punctuation">,</span> TableEnvironment<span class="token punctuation">,</span> TableDescriptor<span class="token punctuation">,</span> Schema<span class="token punctuation">,</span>
                        DataTypes<span class="token punctuation">,</span><span class="token punctuation">)</span>
<span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>table<span class="token punctuation">.</span>expressions <span class="token keyword">import</span> lit<span class="token punctuation">,</span> col
<span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>table<span class="token punctuation">.</span>udf <span class="token keyword">import</span> udtf

word_count_data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;To be, or not to be,--that is the question:--&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;Be all my sins remember&#39;d.&quot;</span><span class="token punctuation">]</span>

<span class="token comment">## 1. declare an execution environment</span>
t_env <span class="token operator">=</span> TableEnvironment<span class="token punctuation">.</span>create<span class="token punctuation">(</span>EnvironmentSettings<span class="token punctuation">.</span>in_streaming_mode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
t_env<span class="token punctuation">.</span>get_config<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token string">&quot;parallelism.default&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># write all the data to one file</span>

<span class="token comment">## 2. define the source</span>
tab <span class="token operator">=</span> t_env<span class="token punctuation">.</span>from_elements<span class="token punctuation">(</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> i<span class="token punctuation">:</span> <span class="token punctuation">(</span>i<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">,</span> word_count_data<span class="token punctuation">)</span><span class="token punctuation">,</span>
                            DataTypes<span class="token punctuation">.</span>ROW<span class="token punctuation">(</span><span class="token punctuation">[</span>DataTypes<span class="token punctuation">.</span>FIELD<span class="token punctuation">(</span><span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span> DataTypes<span class="token punctuation">.</span>STRING<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## 3. define the sink</span>
t_env<span class="token punctuation">.</span>create_temporary_table<span class="token punctuation">(</span>
    <span class="token string">&#39;sink&#39;</span><span class="token punctuation">,</span>
    TableDescriptor<span class="token punctuation">.</span>for_connector<span class="token punctuation">(</span><span class="token string">&#39;print&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span>schema<span class="token punctuation">(</span>Schema<span class="token punctuation">.</span>new_builder<span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span>column<span class="token punctuation">(</span><span class="token string">&#39;word&#39;</span><span class="token punctuation">,</span> DataTypes<span class="token punctuation">.</span>STRING<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span>column<span class="token punctuation">(</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">,</span> DataTypes<span class="token punctuation">.</span>BIGINT<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span>build<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span>build<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## 4. define transform</span>
<span class="token decorator annotation punctuation">@udtf</span><span class="token punctuation">(</span>result_types<span class="token operator">=</span><span class="token punctuation">[</span>DataTypes<span class="token punctuation">.</span>STRING<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">split</span><span class="token punctuation">(</span>line<span class="token punctuation">:</span> Row<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> s <span class="token keyword">in</span> line<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">yield</span> Row<span class="token punctuation">(</span>s<span class="token punctuation">)</span>

tab<span class="token punctuation">.</span>flat_map<span class="token punctuation">(</span>split<span class="token punctuation">)</span><span class="token punctuation">.</span>alias<span class="token punctuation">(</span><span class="token string">&#39;word&#39;</span><span class="token punctuation">)</span> \\
    <span class="token punctuation">.</span>group_by<span class="token punctuation">(</span>col<span class="token punctuation">(</span><span class="token string">&#39;word&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> \\
    <span class="token punctuation">.</span>select<span class="token punctuation">(</span>col<span class="token punctuation">(</span><span class="token string">&#39;word&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> lit<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> \\
    <span class="token punctuation">.</span>execute_insert<span class="token punctuation">(</span><span class="token string">&#39;sink&#39;</span><span class="token punctuation">)</span> \\
    <span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## remove .wait if submitting to a remote cluster, refer to</span>
<span class="token comment">## https://nightlies.apache.org/flink/flink-docs-stable/docs/dev/python/faq/#wait-for-jobs-to-finish-when-executing-jobs-in-mini-cluster</span>
<span class="token comment">## for more details</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>refs:</p>`,3),e=[o];function c(i,u){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","tableIntro.html.vue"]]);export{r as default};
