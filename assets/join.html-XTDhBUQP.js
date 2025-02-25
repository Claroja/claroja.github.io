import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,a as t}from"./app-7knaTE3M.js";const e="/assets/2-G5ZYwBph.png",o="/assets/3-AEk4hEZy.png",p={},i=t('<h1 id="join" tabindex="-1"><a class="header-anchor" href="#join" aria-hidden="true">#</a> join</h1><p>在实际应用中，可能需要将不同来源的数据连接合并在一起处理，也有可能需要将一条流拆分开，所以经常会有对多条流进行处理的场景。</p><h2 id="分流" tabindex="-1"><a class="header-anchor" href="#分流" aria-hidden="true">#</a> 分流</h2><p>所谓“分流”，就是将一条数据流拆分成完全独立的两条、甚至多条流。也就是基于一个DataStream，得到完全平等的多个子 DataStream，如下图所示。一般来说，我们会定义一些筛选条件，将符合条件的数据拣选出来放到对应的流里。</p><h2 id="合流" tabindex="-1"><a class="header-anchor" href="#合流" aria-hidden="true">#</a> 合流</h2><h3 id="union" tabindex="-1"><a class="header-anchor" href="#union" aria-hidden="true">#</a> Union</h3><p>联合操作要求必须流中的数据类型必须相同，合并之后的新流会包括所有流中的元素，数据类型不变。这种合流方式非常简单粗暴，就像公路上多个车道汇在一起一样。 <img src="'+e+`" alt="" loading="lazy"></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>common <span class="token keyword">import</span>  Types
<span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>datastream <span class="token keyword">import</span> StreamExecutionEnvironment<span class="token punctuation">,</span> RuntimeExecutionMode

<span class="token comment">## declare an execution environment</span>
env <span class="token operator">=</span> StreamExecutionEnvironment<span class="token punctuation">.</span>get_execution_environment<span class="token punctuation">(</span><span class="token punctuation">)</span>
env<span class="token punctuation">.</span>set_runtime_mode<span class="token punctuation">(</span>RuntimeExecutionMode<span class="token punctuation">.</span>BATCH<span class="token punctuation">)</span>
env<span class="token punctuation">.</span>set_parallelism<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment"># write all the data to one file</span>
<span class="token comment">## define the source</span>
data_stream1 <span class="token operator">=</span> env<span class="token punctuation">.</span>from_collection<span class="token punctuation">(</span>collection<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
data_stream2 <span class="token operator">=</span> env<span class="token punctuation">.</span>from_collection<span class="token punctuation">(</span>collection<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;e&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;f&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">## transform</span>
union_ds <span class="token operator">=</span> data_stream1<span class="token punctuation">.</span>union<span class="token punctuation">(</span>data_stream2<span class="token punctuation">)</span>
<span class="token comment">## define the sink</span>
union_ds<span class="token punctuation">.</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## submit for execution</span>
env<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="connect" tabindex="-1"><a class="header-anchor" href="#connect" aria-hidden="true">#</a> Connect</h3><h4 id="connectedstreams" tabindex="-1"><a class="header-anchor" href="#connectedstreams" aria-hidden="true">#</a> ConnectedStreams</h4><p>但我们知道一个 DataStream 中的数 据 只 能 有 唯 一 的 类 型 ， 所 以 连 接 得 到 的 并 不 是 DataStream ， 而 是 一个 “ 连 接 流 ”（ConnectedStreams）。连接流可以看成是两条流形式上的“统一”，被放在了一个同一个流中；事实上内部仍保持各自的数据形式不变，彼此之间是相互独立的。要想得到新的 DataStream，还需要进一步定义一个“同处理”（co-process）转换操作，用来说明对于不同来源、不同类型的数据，怎样分别进行处理转换、得到统一的输出类型。所以整体上来，两条流的连接就像是“一国两制”，两条流可以保持各自的数据类型、处理方式也可以不同，不过最终还是会统一到同一个 DataStream 中，如下图：</p><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="join-1" tabindex="-1"><a class="header-anchor" href="#join-1" aria-hidden="true">#</a> join</h2><p>对于两条流的合并，很多情况我们并不是简单地将所有数据放在一起，而是希望根据某个字段的值将它们联结起来，“配对”去做处理。</p><h3 id="window-join" tabindex="-1"><a class="header-anchor" href="#window-join" aria-hidden="true">#</a> Window Join</h3><h4 id="tumbling-window-join" tabindex="-1"><a class="header-anchor" href="#tumbling-window-join" aria-hidden="true">#</a> Tumbling Window Join</h4><p>refs: https://nightlies.apache.org/flink/flink-docs-master/docs/dev/datastream/operators/overview/ https://nightlies.apache.org/flink/flink-docs-master/docs/dev/datastream/operators/joining/</p>',17),c=[i];function l(r,u){return a(),s("div",null,c)}const m=n(p,[["render",l],["__file","join.html.vue"]]);export{m as default};
