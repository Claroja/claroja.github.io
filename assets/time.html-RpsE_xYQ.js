const e=JSON.parse('{"key":"v-34be6bd4","path":"/%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/flink/window/time.html","title":"time","lang":"zh-CN","frontmatter":{"description":"time 时间(time) 处理时间（Processing Time）就是指执行处理操作的机器的系统时间。 事件时间（Event Time）是指每个事件在对应的设备上发生的时间，也就是数据生成的时间。 水位线(Watermark) 每个事件产生的数据，都包含了一个时间戳，我们直接用一个整数表示。这里没有指定单位，可以理解为秒或者毫秒（方便起见，下面讲述统一认为是秒）。当产生于2 秒的数据到来之后，当前的事件时间就是 2 秒；在后面插入一个时间戳也为 2 秒的水位线，随着数据一起向下游流动。而当 5 秒产生的数据到来之后，同样在后面插入一个水位线，时间戳也为 5，当前的时钟就推进到了 5 秒。这样，如果出现下游有多个并行子任务的情形，我们只要将水位线广播出去，就可以通知到所有下游任务当前的时间进度了。","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/flink/window/time.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"time"}],["meta",{"property":"og:description","content":"time 时间(time) 处理时间（Processing Time）就是指执行处理操作的机器的系统时间。 事件时间（Event Time）是指每个事件在对应的设备上发生的时间，也就是数据生成的时间。 水位线(Watermark) 每个事件产生的数据，都包含了一个时间戳，我们直接用一个整数表示。这里没有指定单位，可以理解为秒或者毫秒（方便起见，下面讲述统一认为是秒）。当产生于2 秒的数据到来之后，当前的事件时间就是 2 秒；在后面插入一个时间戳也为 2 秒的水位线，随着数据一起向下游流动。而当 5 秒产生的数据到来之后，同样在后面插入一个水位线，时间戳也为 5，当前的时钟就推进到了 5 秒。这样，如果出现下游有多个并行子任务的情形，我们只要将水位线广播出去，就可以通知到所有下游任务当前的时间进度了。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:31:52.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"time"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:31:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"time\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2023-11-27T13:31:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"时间(time)","slug":"时间-time","link":"#时间-time","children":[]},{"level":2,"title":"水位线(Watermark)","slug":"水位线-watermark","link":"#水位线-watermark","children":[{"level":3,"title":"1.有序流中的水位线","slug":"_1-有序流中的水位线","link":"#_1-有序流中的水位线","children":[]},{"level":3,"title":"2.乱序流中的水位线","slug":"_2-乱序流中的水位线","link":"#_2-乱序流中的水位线","children":[]}]},{"level":2,"title":"如何生成水位线","slug":"如何生成水位线","link":"#如何生成水位线","children":[{"level":3,"title":"directly on sources","slug":"directly-on-sources","link":"#directly-on-sources","children":[]},{"level":3,"title":"after non-source operation","slug":"after-non-source-operation","link":"#after-non-source-operation","children":[]}]},{"level":2,"title":"重分区问题","slug":"重分区问题","link":"#重分区问题","children":[]}],"git":{"createdTime":1701091021000,"updatedTime":1701091912000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":2}]},"readingTime":{"minutes":8.56,"words":2568},"filePathRelative":"数据工程/flink/window/time.md","localizedDate":"2023年11月27日","excerpt":"<h1> time</h1>\\n<h2> 时间(time)</h2>\\n<p>处理时间（Processing Time）就是指执行处理操作的机器的系统时间。\\n事件时间（Event Time）是指每个事件在对应的设备上发生的时间，也就是数据生成的时间。</p>\\n<h2> 水位线(Watermark)</h2>\\n<p>\\n每个事件产生的数据，都包含了一个时间戳，我们直接用一个整数表示。这里没有指定单位，可以理解为秒或者毫秒（方便起见，下面讲述统一认为是秒）。当产生于2 秒的数据到来之后，当前的事件时间就是 2 秒；在后面插入一个时间戳也为 2 秒的水位线，随着数据一起向下游流动。而当 5 秒产生的数据到来之后，同样在后面插入一个水位线，时间戳也为 5，当前的时钟就推进到了 5 秒。这样，如果出现下游有多个并行子任务的情形，我们只要将水位线广播出去，就可以通知到所有下游任务当前的时间进度了。</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
