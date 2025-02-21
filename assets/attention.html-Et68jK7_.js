const e=JSON.parse('{"key":"v-04d8b075","path":"/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/4_3%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86/attention.html","title":"","lang":"zh-CN","frontmatter":{"description":"seq2seq的问题 编码器的输出是固定长度的向量. 意味着, 无论输入语句的长度如何, 都会被转换为长度相同的向量, 可能会造成信息溢出, 如下图: 编码器的改进 编码器的输出的长度应该根据输入文本的长度相应的改变, 一个方法1就是将各个时刻的LSTM层的隐状态全部输出. 使用各个时刻的隐状态向量, 可以获得和输入的单词数相同数量的向量. 如上图, 输入了5个单词, 此时编码器输出5个向量.","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/4_3%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86/attention.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:description","content":"seq2seq的问题 编码器的输出是固定长度的向量. 意味着, 无论输入语句的长度如何, 都会被转换为长度相同的向量, 可能会造成信息溢出, 如下图: 编码器的改进 编码器的输出的长度应该根据输入文本的长度相应的改变, 一个方法1就是将各个时刻的LSTM层的隐状态全部输出. 使用各个时刻的隐状态向量, 可以获得和输入的单词数相同数量的向量. 如上图, 输入了5个单词, 此时编码器输出5个向量."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"seq2seq的问题","slug":"seq2seq的问题","link":"#seq2seq的问题","children":[]},{"level":2,"title":"编码器的改进","slug":"编码器的改进","link":"#编码器的改进","children":[]},{"level":2,"title":"解码器的改进1","slug":"解码器的改进1","link":"#解码器的改进1","children":[]},{"level":2,"title":"解码器的改进2","slug":"解码器的改进2","link":"#解码器的改进2","children":[]},{"level":2,"title":"解码器改进3","slug":"解码器改进3","link":"#解码器改进3","children":[]},{"level":2,"title":"residual connection","slug":"residual-connection","link":"#residual-connection","children":[]},{"level":2,"title":"Attention 应用","slug":"attention-应用","link":"#attention-应用","children":[{"level":3,"title":"翻译","slug":"翻译","link":"#翻译","children":[]},{"level":3,"title":"Transformer","slug":"transformer","link":"#transformer","children":[]}]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":5.71,"words":1714},"filePathRelative":"4机器学习/4_3自然语言处理/自然语言处理/attention.md","localizedDate":"2025年2月21日","excerpt":"<h2> seq2seq的问题</h2>\\n<p>编码器的输出是固定长度的向量. 意味着, 无论输入语句的长度如何, 都会被转换为长度相同的向量, 可能会造成信息溢出, 如下图:</p>\\n<figure><figcaption></figcaption></figure>\\n<h2> 编码器的改进</h2>\\n<p>编码器的输出的长度应该根据输入文本的长度相应的改变, 一个方法1就是将各个时刻的LSTM层的隐状态全部输出.</p>\\n<figure><figcaption></figcaption></figure>\\n<p>使用各个时刻的隐状态向量, 可以获得和输入的单词数相同数量的向量. 如上图, 输入了5个单词, 此时编码器输出5个向量.</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
