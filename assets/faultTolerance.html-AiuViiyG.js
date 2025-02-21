import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as t,e as n}from"./app-jdLxCr9I.js";const c={},l=n('<h1 id="faulttolerance" tabindex="-1"><a class="header-anchor" href="#faulttolerance" aria-hidden="true">#</a> faultTolerance</h1><p>在 Flink 中，有一套完整的容错机制（fault tolerance）来保证故障后的恢复，其中最重要 的就是检查点（checkpoint）</p><h2 id="checkpoint" tabindex="-1"><a class="header-anchor" href="#checkpoint" aria-hidden="true">#</a> Checkpoint</h2><p>在流处理中，我们同样可以用存档读档的思路，把之前的计算结果做个保存，这样重启之后就可以继续处理新数据、而不需要重新计算了。进一步地，我们知道在有状态的流处理中，任务继续处理新数据，并不需要“之前的计算结果”，而是需要任务“之前的状态”。所以我们最终的选择，就是将之前某个时间点所有的状态保存下来，这份“存档”就是所谓的“检查点”（checkpoint）。</p><h2 id="状态一致性" tabindex="-1"><a class="header-anchor" href="#状态一致性" aria-hidden="true">#</a> 状态一致性</h2><p>对于 Flink 来说，多个节点并行处理不同的任务，我们要保证计算结果是正确的，就必须不漏掉任何一个数据，而且也不会重复处理同一个数据。流式计算本身就是一个一个来的，所以正常处理的过程中结果肯定是正确的；但在发生故障、需要恢复状态进行回滚时就需要更多的保障机制了。我们通过检查点的保存来保证状态恢复后结果的正确，所以主要讨论的就是“状态的一致性”</p><ul><li>最多一次（AT-MOST-ONCE）</li></ul><p>当任务发生故障时，最简单的做法就是直接重启，别的什么都不干；既不恢复丢失的状态，也不重放丢失的数据。每个数据在正常情况下会被处理一次，遇到故障时就会丢掉，所以就是“最多处理一次”。 如果数据可以直接被丢掉，那其实就是没有任何操作来保证结果的准确性；所以这种类型的保证也叫“没有保证”。尽管看起来比较糟糕，不过如果我们的主要诉求是“快”，而对近似正确的结果也能接受，那这也不失为一种很好的解决方案。</p><ul><li><p>至少一次（AT-LEAST-ONCE） ，我们一般会希望至少不要丢掉数据。这种一致性级别就叫作“至少一次”（at-least-once），就是说是所有数据都不会丢，肯定被处理了；不过不能保证只处理一次，有些数据会被重复处理。 在有些场景下，重复处理数据是不影响结果的正确性的，这种操作具有“幂等性”。比如，如果我们统计电商网站的 UV，需要对每个用户的访问数据进行去重处理，所以即使同一个数据被处理多次，也不会影响最终的结果，这时使用 at-least-once 语义是完全没问题的。当然，如果重复数据对结果有影响，比如统计的是 PV，或者之前的统计词频 word count，使用at-least-once 语义就可能会导致结果的不一致了。 为了保证达到 at-least-once 的状态一致性，我们需要在发生故障时能够重放数据。最常见的做法是，可以用持久化的事件日志系统，把所有的事件写入到持久化存储中。这时只要记录一个偏移量，当任务发生故障重启后，重置偏移量就可以重放检查点之后的数据了。Kafka 就是这种架构的一个典型实现。</p></li><li><p>精确一次（EXACTLY-ONCE） 最严格的一致性保证，就是所谓的“精确一次”（exactly-once，有时也译作“恰好一次”）。这也是最难实现的状态一致性语义。exactly-once 意味着所有数据不仅不会丢失，而且只被处理一次，不会重复处理。也就是说对于每一个数据，最终体现在状态和输出结果上，只能有一次统计。 exactly-once 可以真正意义上保证结果的绝对正确，在发生故障恢复后，就好像从未发生过故障一样。 很明显，要做的 exactly-once，首先必须能达到 at-least-once 的要求，就是数据不丢。所以同样需要有数据重放机制来保证这一点。另外，还需要有专门的设计保证每个数据只被处理一次。Flink 中使用的是一种轻量级快照机制——检查点（checkpoint）来保证 exactly-once 语义。</p></li></ul><h2 id="end-to-end-exactly-once" tabindex="-1"><a class="header-anchor" href="#end-to-end-exactly-once" aria-hidden="true">#</a> end-to-end exactly-once</h2><p>实际应用中，最难做到、也最希望做到的一致性语义，无疑就是端到端（end-to-end）的“精确一次”（exactly-once）。我们知道，对于 Flink 内部来说，检查点机制可以保证故障恢复后数据不丢（在能够重放的前提下），并且只处理一次，所以已经可以做到 exactly-once 的一致性语义了。 在实际应用中，一般要保证从用户的角度看来，最终消费的数据是正确的。而用户或者外部应用不会直接从 Flink 内部的状态读取数据，往往需要我们将处理结果写入外部存储中。这就要求我们不仅要考虑 Flink 内部数据的处理转换，还涉及从外部数据源读取，以及写入外部持久化系统，整个应用处理流程从头到尾都应该是正确的。 所以完整的流处理应用，应该包括了数据源、流处理器和外部存储系统三个部分。这个完整应用的一致性，就叫作“端到端（end-to-end）的状态一致性”，它取决于三个组件中最弱的那一环。</p><h3 id="输入端保证" tabindex="-1"><a class="header-anchor" href="#输入端保证" aria-hidden="true">#</a> 输入端保证</h3><p>输入端主要指的就是 Flink 读取的外部数据源。对于一些数据源来说，并不提供数据的缓冲或是持久化保存，数据被消费之后就彻底不存在了。例如 socket 文本流就是这样， socket服务器是不负责存储数据的，发送一条数据之后，我们只能消费一次，是“一锤子买卖”。对于这样的数据源，故障后我们即使通过检查点恢复之前的状态，可保存检查点之后到发生故障期间的数据已经不能重发了，这就会导致数据丢失。所以就只能保证 at-most-once 的一致性语义，相当于没有保证。</p><p>想要在故障恢复后不丢数据，外部数据源就必须拥有重放数据的能力。常见的做法就是对数据进行持久化保存，并且可以重设数据的读取位置。一个最经典的应用就是 Kafka。在 Flink的 Source 任务中将数据读取的偏移量保存为状态，这样就可以在故障恢复时从检查点中读取出来，对数据源重置偏移量，重新获取数据。</p><p>数据源可重放数据，或者说可重置读取数据偏移量，加上 Flink 的 Source 算子将偏移量作为状态保存进检查点，就可以保证数据不丢。这是达到 at-least-once 一致性语义的基本要求，当然也是实现端到端 exactly-once 的基本要求。</p><p>因为检查点保存之后，继续到来的数据也会一一处理，任务的状态也会更新，最终通过Sink 任务将计算结果输出到外部系统；只是状态改变还没有存到下一个检查点中。这时如果出现故障，这些数据都会重新来一遍，就计算了两次。我们知道对 Flink 内部状态来说，重复计算的动作是没有影响的，因为状态已经回滚，最终改变只会发生一次；但对于外部系统来说，已经写入的结果就是泼出去的水，已经无法收回了，再次执行写入就会把同一个数据写入两次。</p><p>所以这时，我们只保证了端到端的 at-least-once 语义。</p><p>为了实现端到端 exactly-once，我们还需要对外部存储系统、以及 Sink 连接器有额外的要求。能够保证 exactly-once 一致性的写入方式有两种：</p><ul><li>幂等写入</li></ul><p>所谓“幂等”操作，就是说一个操作可以重复执行很多次，但只导致一次结果更改。也就是说，后面再重复执行就不会对结果起作用了。数学中一个典型的例子是，ex 的求导下操作，无论做多少次，得到的都是自身。 而在数据处理领域，最典型的就是对 HashMap 的插入操作：如果是相同的键值对，后面的重复插入就都没什么作用了。</p><p>这相当于说，我们并没有真正解决数据重复计算、写入的问题；而是说，重复写入也没关系，结果不会改变。所以这种方式主要的限制在于外部存储系统必须支持这样的幂等写入：比如 Redis 中键值存储，或者关系型数据库（如 MySQL）中满足查询条件的更新操作。</p><p>需要注意，对于幂等写入，遇到故障进行恢复时，有可能会出现短暂的不一致。因为保存点完成之后到发生故障之间的数据，其实已经写入了一遍，回滚的时候并不能消除它们。如果有一个外部应用读取写入的数据，可能会看到奇怪的现象：短时间内，结果会突然“跳回”到之前的某个值，然后“重播”一段之前的数据。不过当数据的重放逐渐超过发生故障的点的时候，最终的结果还是一致的</p><ul><li>事务写入</li></ul><h3 id="输出端保证" tabindex="-1"><a class="header-anchor" href="#输出端保证" aria-hidden="true">#</a> 输出端保证</h3><p>有了 Flink 的检查点机制，以及可重放数据的外部数据源，我们已经能做到 at-least-once了。但是想要实现 exactly-once 却有更大的困难：数据有可能重复写入外部系统。</p><p>refs: https://nightlies.apache.org/flink/flink-docs-master/docs/dev/datastream/fault-tolerance/state/</p>',26),o=[l];function i(r,d){return a(),t("div",null,o)}const s=e(c,[["render",i],["__file","faultTolerance.html.vue"]]);export{s as default};
