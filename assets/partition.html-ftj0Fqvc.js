import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,e as t}from"./app-M6UUlHgF.js";const e="/assets/1-x5kRhatm.png",p="/assets/2-C3KJn9c_.png",o="/assets/3-SK4BDfWL.png",i={},c=t('<h1 id="partition" tabindex="-1"><a class="header-anchor" href="#partition" aria-hidden="true">#</a> partition</h1><h2 id="shuffle" tabindex="-1"><a class="header-anchor" href="#shuffle" aria-hidden="true">#</a> shuffle</h2><p>通过调用 DataStream 的.shuffle()方法，将数据随机地分配到下游算子的并行任务中去。随机分区服从均匀分布（uniform distribution），所以可以把流中的数据随机打乱，均匀地传递到下游任务分区 经过随机分区之后，得到的依然是一个 DataStream。</p><figure><img src="'+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="rebalance" tabindex="-1"><a class="header-anchor" href="#rebalance" aria-hidden="true">#</a> rebalance</h2><p>按照先后顺序将数据做依次分发,通过调用 DataStream 的.rebalance()方法，就可以实现轮询重分区。rebalance 使用的是 Round-Robin 负载均衡算法，可以将输入流数据平均分配到下游的并行任务中去。 注：Round-Robin 算法用在了很多地方，例如 Kafka 和 Nginx。</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="rescale" tabindex="-1"><a class="header-anchor" href="#rescale" aria-hidden="true">#</a> rescale</h2><p>当调用 rescale()方法时，其实底层也是使用 Round-Robin 算法进行轮询，但是只会将数据轮询发送到下游并行任务的一部分中，如图 5-11 所示。也就 是说，“发牌人”如果有多个，那么 rebalance 的方式是每个发牌人都面向所有人发牌；而 rescale 的做法是分成小团体，发牌人只给自己团体内的所有人轮流发牌。</p><p>当下游任务（数据接收方）的数量是上游任务（数据发送方）数量的整数倍时，rescale 的效率明显会更高。比如当上游任务数量是 2，下游任务数量是 6 时，上游任务其中一个分区 的数据就将会平均分配到下游任务的 3 个分区中。 <img src="'+o+`" alt="" loading="lazy"></p><h2 id="broadcast" tabindex="-1"><a class="header-anchor" href="#broadcast" aria-hidden="true">#</a> broadcast</h2><p>这种方式其实不应该叫做“重分区”，因为经过广播之后，数据会在不同的分区都保留一 份，可能进行重复处理。可以通过调用 DataStream 的 broadcast()方法，将输入数据复制并发送 到下游算子的所有并行任务中去。</p><h2 id="partition-custom" tabindex="-1"><a class="header-anchor" href="#partition-custom" aria-hidden="true">#</a> partition_custom</h2><p>自定义分区</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>data_stream <span class="token operator">=</span> env<span class="token punctuation">.</span>from_collection<span class="token punctuation">(</span>collection<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
data_stream<span class="token punctuation">.</span>partition_custom<span class="token punctuation">(</span><span class="token keyword">lambda</span> key<span class="token punctuation">,</span> num_partition<span class="token punctuation">:</span> key <span class="token operator">%</span> partition<span class="token punctuation">,</span> <span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>refs: https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/dev/datastream/operators/overview/#physical-partitioning</p>`,16),r=[c];function l(u,d){return n(),s("div",null,r)}const m=a(i,[["render",l],["__file","partition.html.vue"]]);export{m as default};
