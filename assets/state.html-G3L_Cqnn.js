const t=JSON.parse('{"key":"v-d594d322","path":"/%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/flink/state/state.html","title":"state","lang":"zh-CN","frontmatter":{"description":"state Flink 处理机制的核心，就是“有状态的流式计算” 有状态算子 无状态的算子任务只需要观察每个独立事件，根据当前输入的数据直接转换输出结果，如 map、filter、flatMap，如下图所示： 而有状态的算子任务，则除当前数据之外，还需要一些状态（state）来得到计算结果。聚合算子、窗口算子都属于有状态的算子。如下图： （1）算子任务接收到上游发来的数据； （2）获取当前状态； （3）根据业务逻辑进行计算，更新状态； （4）得到计算结果，输出发送到下游任务。 refs: https://nightlies.apache.org/flink/flink-docs-master/docs/dev/datastream/fault-tolerance/state/","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/flink/state/state.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"state"}],["meta",{"property":"og:description","content":"state Flink 处理机制的核心，就是“有状态的流式计算” 有状态算子 无状态的算子任务只需要观察每个独立事件，根据当前输入的数据直接转换输出结果，如 map、filter、flatMap，如下图所示： 而有状态的算子任务，则除当前数据之外，还需要一些状态（state）来得到计算结果。聚合算子、窗口算子都属于有状态的算子。如下图： （1）算子任务接收到上游发来的数据； （2）获取当前状态； （3）根据业务逻辑进行计算，更新状态； （4）得到计算结果，输出发送到下游任务。 refs: https://nightlies.apache.org/flink/flink-docs-master/docs/dev/datastream/fault-tolerance/state/"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:31:52.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"state"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:31:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"state\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2023-11-27T13:31:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":3,"title":"有状态算子","slug":"有状态算子","link":"#有状态算子","children":[]}],"git":{"createdTime":1701091021000,"updatedTime":1701091912000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":2}]},"readingTime":{"minutes":0.61,"words":182},"filePathRelative":"数据工程/flink/state/state.md","localizedDate":"2023年11月27日","excerpt":"<h1> state</h1>\\n<p>Flink 处理机制的核心，就是“有状态的流式计算”</p>\\n<h3> 有状态算子</h3>\\n<p>无状态的算子任务只需要观察每个独立事件，根据当前输入的数据直接转换输出结果，如 map、filter、flatMap，如下图所示：\\n</p>\\n<p>而有状态的算子任务，则除当前数据之外，还需要一些状态（state）来得到计算结果。聚合算子、窗口算子都属于有状态的算子。如下图：\\n</p>\\n<p>（1）算子任务接收到上游发来的数据；\\n（2）获取当前状态；\\n（3）根据业务逻辑进行计算，更新状态；\\n（4）得到计算结果，输出发送到下游任务。</p>\\n<p>refs:\\nhttps://nightlies.apache.org/flink/flink-docs-master/docs/dev/datastream/fault-tolerance/state/</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{t as data};
