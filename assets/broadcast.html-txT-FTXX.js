import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-YE2Hltoy.js";const p="/assets/1-OVxDNOxb.png",e={},o=t(`<h1 id="broadcast" tabindex="-1"><a class="header-anchor" href="#broadcast" aria-hidden="true">#</a> broadcast</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 将dirver端变量标记为广播变量，分发到executor</span>
broadcast <span class="token operator">=</span> sc<span class="token punctuation">.</span>broadcast<span class="token punctuation">(</span>stu_info<span class="token punctuation">)</span>

broadcast<span class="token punctuation">.</span>value

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## coding:utf8</span>
<span class="token keyword">import</span> time
<span class="token keyword">from</span> pyspark <span class="token keyword">import</span> SparkConf<span class="token punctuation">,</span> SparkContext
<span class="token keyword">from</span> pyspark<span class="token punctuation">.</span>storagelevel <span class="token keyword">import</span> StorageLevel

conf <span class="token operator">=</span> SparkConf<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>setAppName<span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>setMaster<span class="token punctuation">(</span><span class="token string">&quot;local[*]&quot;</span><span class="token punctuation">)</span>
sc <span class="token operator">=</span> SparkContext<span class="token punctuation">(</span>conf<span class="token operator">=</span>conf<span class="token punctuation">)</span>
stu_info_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;wang&#39;</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;wei&#39;</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">]</span>

broadcast <span class="token operator">=</span> sc<span class="token punctuation">.</span>broadcast<span class="token punctuation">(</span>stu_info_list<span class="token punctuation">)</span>  <span class="token comment"># 1. 将本地Python List对象标记为广播变量</span>

score_info_rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;语文&#39;</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;数学&#39;</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;英语&#39;</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;语文&#39;</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;编程&#39;</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">map_func</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span> <span class="token operator">=</span> data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    name <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    <span class="token keyword">for</span> stu_info <span class="token keyword">in</span> broadcast<span class="token punctuation">.</span>value<span class="token punctuation">:</span>
        stu_id <span class="token operator">=</span> stu_info<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token builtin">id</span> <span class="token operator">==</span> stu_id<span class="token punctuation">:</span>
            name <span class="token operator">=</span> stu_info<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>name<span class="token punctuation">,</span> data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> data<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>score_info_rdd<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span>map_func<span class="token punctuation">)</span><span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[o];function i(u,l){return s(),a("div",null,c)}const d=n(e,[["render",i],["__file","broadcast.html.vue"]]);export{d as default};
