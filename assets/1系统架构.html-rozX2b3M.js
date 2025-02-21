const e=JSON.parse('{"key":"v-fc2254d2","path":"/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/4_2%E6%8E%A8%E8%8D%90%E7%B3%BB%E7%BB%9F/1%E7%B3%BB%E7%BB%9F%E6%9E%B6%E6%9E%84.html","title":"RecSys_系统架构","lang":"zh-CN","frontmatter":{"description":"RecSys_系统架构 Netflix推荐系统架构 alt text 离线层(offline) 离线层是计算量最大的一个部分，它的特点是不依赖实时数据，也不需要实时提供服务。需要实现的主要功能模块是： 数据处理、数据存储； 特征工程、离线特征计算； 离线模型的训练； 这里我们可以看出离线层的任务是最接近学校中我们处理数据、训练模型这种任务的，不同可能就是需要面临更大规模的数据。离线任务一般会按照天或者更久运行，比如每天晚上定期更新这一天的数据，然后重新训练模型，第二天上线新模型。目前主流的做法是HDFS，收集到我们所有的业务数据，通过HIVE等工具，从全量数据中抽取出我们需要的数据，进行相应的加工，离线阶段主流使用的分布式框架一般是Spark。","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/4_2%E6%8E%A8%E8%8D%90%E7%B3%BB%E7%BB%9F/1%E7%B3%BB%E7%BB%9F%E6%9E%B6%E6%9E%84.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"RecSys_系统架构"}],["meta",{"property":"og:description","content":"RecSys_系统架构 Netflix推荐系统架构 alt text 离线层(offline) 离线层是计算量最大的一个部分，它的特点是不依赖实时数据，也不需要实时提供服务。需要实现的主要功能模块是： 数据处理、数据存储； 特征工程、离线特征计算； 离线模型的训练； 这里我们可以看出离线层的任务是最接近学校中我们处理数据、训练模型这种任务的，不同可能就是需要面临更大规模的数据。离线任务一般会按照天或者更久运行，比如每天晚上定期更新这一天的数据，然后重新训练模型，第二天上线新模型。目前主流的做法是HDFS，收集到我们所有的业务数据，通过HIVE等工具，从全量数据中抽取出我们需要的数据，进行相应的加工，离线阶段主流使用的分布式框架一般是Spark。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RecSys_系统架构\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Netflix推荐系统架构","slug":"netflix推荐系统架构","link":"#netflix推荐系统架构","children":[]},{"level":2,"title":"离线层(offline)","slug":"离线层-offline","link":"#离线层-offline","children":[]},{"level":2,"title":"近线层(nearline)","slug":"近线层-nearline","link":"#近线层-nearline","children":[]},{"level":2,"title":"在线层(online)","slug":"在线层-online","link":"#在线层-online","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":3.39,"words":1017},"filePathRelative":"4机器学习/4_2推荐系统/1系统架构.md","localizedDate":"2025年2月21日","excerpt":"<h1> RecSys_系统架构</h1>\\n<h2> Netflix推荐系统架构</h2>\\n<figure><figcaption>alt text</figcaption></figure>\\n<h2> 离线层(offline)</h2>\\n<p>离线层是计算量最大的一个部分，它的特点是不依赖实时数据，也不需要实时提供服务。需要实现的主要功能模块是：</p>\\n<ol>\\n<li>数据处理、数据存储；</li>\\n<li>特征工程、离线特征计算；</li>\\n<li>离线模型的训练；</li>\\n</ol>\\n<p>这里我们可以看出离线层的任务是最接近学校中我们处理数据、训练模型这种任务的，不同可能就是需要面临更大规模的数据。离线任务一般会按照天或者更久运行，比如每天晚上定期更新这一天的数据，然后重新训练模型，第二天上线新模型。目前主流的做法是HDFS，收集到我们所有的业务数据，通过HIVE等工具，从全量数据中抽取出我们需要的数据，进行相应的加工，离线阶段主流使用的分布式框架一般是Spark。</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
