import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as p}from"./app-YE2Hltoy.js";const t={},e=p(`<h1 id="accumulator" tabindex="-1"><a class="header-anchor" href="#accumulator" aria-hidden="true">#</a> accumulator</h1><p>累加器原理是将Dirver将累加器变量发送给executor，这样executor就能操作这个变量.</p><p>注意： 因为rdd是过程数据，如果rdd被多次使用，可能会重新构建此rdd，而造成多次执行。需要加cache或者checkpoint</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## coding:utf8</span>
<span class="token keyword">import</span> time

<span class="token keyword">from</span> pyspark <span class="token keyword">import</span> SparkConf<span class="token punctuation">,</span> SparkContext
<span class="token keyword">from</span> pyspark<span class="token punctuation">.</span>storagelevel <span class="token keyword">import</span> StorageLevel

conf <span class="token operator">=</span> SparkConf<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>setAppName<span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>setMaster<span class="token punctuation">(</span><span class="token string">&quot;local[*]&quot;</span><span class="token punctuation">)</span>
sc <span class="token operator">=</span> SparkContext<span class="token punctuation">(</span>conf<span class="token operator">=</span>conf<span class="token punctuation">)</span>

rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>


acmlt <span class="token operator">=</span> sc<span class="token punctuation">.</span>accumulator<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment"># Spark提供的累加器变量, </span>

<span class="token keyword">def</span> <span class="token function">map_func</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> acmlt
    acmlt <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token comment"># print(acmlt)</span>

rdd2 <span class="token operator">=</span> rdd<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span>map_func<span class="token punctuation">)</span>
rdd2<span class="token punctuation">.</span>cache<span class="token punctuation">(</span><span class="token punctuation">)</span>
rdd2<span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span>

rdd3 <span class="token operator">=</span> rdd2<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span>x<span class="token punctuation">)</span>
rdd3<span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>acmlt<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>refs:</p>`,5),c=[e];function o(l,u){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","accumulator.html.vue"]]);export{d as default};
