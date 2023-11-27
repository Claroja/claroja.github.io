const t=JSON.parse('{"key":"v-567b437c","path":"/%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/spark/function/cache.html","title":"cache","lang":"zh-CN","frontmatter":{"description":"cache rdd1 -&gt; rdd2 -&gt; rdd3 -&gt; rdd4 ... |-&gt; rdd5 前一个RDD计算结束后，会被销毁，以保证每个分区内存充分利用。 但是如果有其他rdd依赖销毁的rdd，比如在计算rdd4时，rdd3被销毁，而rdd5计算又需要rdd3，此时会再将rdd1 -&gt; rdd2 -&gt; rdd3 链路计算一遍。为了避免这种情况，我们可以通过cache()或persist()方法将rdd3缓存起来，这样就不需要重新计算。 注意：最后需要使用unpersist()方法来清理缓存","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/spark/function/cache.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"cache"}],["meta",{"property":"og:description","content":"cache rdd1 -&gt; rdd2 -&gt; rdd3 -&gt; rdd4 ... |-&gt; rdd5 前一个RDD计算结束后，会被销毁，以保证每个分区内存充分利用。 但是如果有其他rdd依赖销毁的rdd，比如在计算rdd4时，rdd3被销毁，而rdd5计算又需要rdd3，此时会再将rdd1 -&gt; rdd2 -&gt; rdd3 链路计算一遍。为了避免这种情况，我们可以通过cache()或persist()方法将rdd3缓存起来，这样就不需要重新计算。 注意：最后需要使用unpersist()方法来清理缓存"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:17:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:17:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"cache\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-27T13:17:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1701091021000,"updatedTime":1701091021000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.67,"words":200},"filePathRelative":"数据工程/spark/function/cache.md","localizedDate":"2023年11月27日","excerpt":"<h1> cache</h1>\\n<p>rdd1 -&gt; rdd2 -&gt; rdd3 -&gt; rdd4 ...\\n|-&gt;  rdd5</p>\\n<p>前一个RDD计算结束后，会被销毁，以保证每个分区内存充分利用。\\n但是如果有其他rdd依赖销毁的rdd，比如在计算rdd4时，rdd3被销毁，而rdd5计算又需要rdd3，此时会再将rdd1 -&gt; rdd2 -&gt; rdd3 链路计算一遍。为了避免这种情况，我们可以通过<code>cache()</code>或<code>persist()</code>方法将rdd3缓存起来，这样就不需要重新计算。\\n注意：最后需要使用<code>unpersist()</code>方法来清理缓存</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{t as data};
