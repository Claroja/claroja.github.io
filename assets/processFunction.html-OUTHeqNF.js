const t=JSON.parse('{"key":"v-7f2f7544","path":"/8%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/2_1flink/operator/processFunction.html","title":"processFunction","lang":"zh-CN","frontmatter":{"description":"processFunction 在更底层，我们可以不定义任何具体的算子（比如 map，filter，或者 window），而只是提炼出一个统一的“处理”（process）操作——它是所有转换算子的一个概括性的表达，可以自定义处理逻辑，所以这一层接口就被叫作“处理函数”（process function）。 在处理函数中，我们直面的就是数据流中最基本的元素：数据事件（event）、状态（state）以及时间（time）。这就相当于对流有了完全的控制权。 refs: https://nightlies.apache.org/flink/flink-docs-master/docs/dev/datastream/operators/process_function/","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/8%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/2_1flink/operator/processFunction.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"processFunction"}],["meta",{"property":"og:description","content":"processFunction 在更底层，我们可以不定义任何具体的算子（比如 map，filter，或者 window），而只是提炼出一个统一的“处理”（process）操作——它是所有转换算子的一个概括性的表达，可以自定义处理逻辑，所以这一层接口就被叫作“处理函数”（process function）。 在处理函数中，我们直面的就是数据流中最基本的元素：数据事件（event）、状态（state）以及时间（time）。这就相当于对流有了完全的控制权。 refs: https://nightlies.apache.org/flink/flink-docs-master/docs/dev/datastream/operators/process_function/"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"processFunction\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.47,"words":141},"filePathRelative":"8数据工程/2_1flink/operator/processFunction.md","localizedDate":"2025年2月21日","excerpt":"<h1> processFunction</h1>\\n<p>在更底层，我们可以不定义任何具体的算子（比如 map，filter，或者 window），而只是提炼出一个统一的“处理”（process）操作——它是所有转换算子的一个概括性的表达，可以自定义处理逻辑，所以这一层接口就被叫作“处理函数”（process function）。\\n在处理函数中，我们直面的就是数据流中最基本的元素：数据事件（event）、状态（state）以及时间（time）。这就相当于对流有了完全的控制权。</p>\\n<p>refs:\\nhttps://nightlies.apache.org/flink/flink-docs-master/docs/dev/datastream/operators/process_function/</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{t as data};
