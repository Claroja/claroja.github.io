const e=JSON.parse('{"key":"v-5b955fa9","path":"/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0/netExample/rnnlm.html","title":"rnnlm","lang":"zh-CN","frontmatter":{"description":"rnnlm 基于 RNN 的语言模型称为 RNNLM(RNN Language Model) 第一层是Embedding层, 将单词转换为词向量 第二层是Time RNN, 向下一层输出隐状态, 同时也向下一时刻的RNN层输出隐状态 第三层是Affine层, 输入是Time RNN的隐状态 第四层是Softmax层 以\\"you say goodbye and i say hello\\"为例 第一时刻, 作为第一个单词ID为0的you被输入.此时, 查看Softmax层输出的概率分布, 可知say的概率最高, 这表明正确预测出了you后面出现的单词say.","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0/netExample/rnnlm.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"rnnlm"}],["meta",{"property":"og:description","content":"rnnlm 基于 RNN 的语言模型称为 RNNLM(RNN Language Model) 第一层是Embedding层, 将单词转换为词向量 第二层是Time RNN, 向下一层输出隐状态, 同时也向下一时刻的RNN层输出隐状态 第三层是Affine层, 输入是Time RNN的隐状态 第四层是Softmax层 以\\"you say goodbye and i say hello\\"为例 第一时刻, 作为第一个单词ID为0的you被输入.此时, 查看Softmax层输出的概率分布, 可知say的概率最高, 这表明正确预测出了you后面出现的单词say."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:31:52.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"rnnlm"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:31:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"rnnlm\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2023-11-27T13:31:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"RNNLM实现","slug":"rnnlm实现","link":"#rnnlm实现","children":[]},{"level":2,"title":"评价","slug":"评价","link":"#评价","children":[]},{"level":2,"title":"训练","slug":"训练","link":"#训练","children":[]}],"git":{"createdTime":1701091021000,"updatedTime":1701091912000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":2}]},"readingTime":{"minutes":3.78,"words":1134},"filePathRelative":"机器学习/深度学习/netExample/rnnlm.md","localizedDate":"2023年11月27日","excerpt":"<h1> rnnlm</h1>\\n<p>基于 RNN 的语言模型称为 RNNLM(RNN Language Model)\\n\\n第一层是Embedding层, 将单词转换为词向量\\n第二层是Time RNN, 向下一层输出隐状态, 同时也向下一时刻的RNN层输出隐状态\\n第三层是Affine层, 输入是Time RNN的隐状态\\n第四层是Softmax层</p>\\n<p>以\\"you say goodbye and i say hello\\"为例</p>\\n<figure><figcaption></figcaption></figure>\\n<p>第一时刻, 作为第一个单词ID为0的you被输入.此时, 查看Softmax层输出的概率分布, 可知say的概率最高, 这表明正确预测出了you后面出现的单词say.</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
