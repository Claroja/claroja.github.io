const e=JSON.parse('{"key":"v-0acbcaec","path":"/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1_2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/%E7%89%B9%E5%BE%81%E5%B7%A5%E7%A8%8B/%E5%88%86%E7%B1%BB%E5%8F%98%E9%87%8F.html","title":"分类变量","lang":"zh-CN","frontmatter":{"description":"分类变量 1　分类变量的编码 分类变量中的类别通常不是数值型的。 如，眼睛的颜色可以是“黑色”“蓝色”和“褐色”。很容易想到，可以简单地为 k 个可能类别中的每个类别分配一个整数，如从 1 到 k，但这样做的结果是使类别彼此之间有了顺序，这在分类变量中是不允许的。 1.1　one-hot编码 one-hot 编码，它可以通过 scikit-learn 中的 sklearn.preprocessing.OneHotEncoder 实现。每个比特位表示一个特征，因此，一个可能有 k 个类别的分类变量就可以编码为一个长度为 k 的特征向量。","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1_2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/%E7%89%B9%E5%BE%81%E5%B7%A5%E7%A8%8B/%E5%88%86%E7%B1%BB%E5%8F%98%E9%87%8F.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"分类变量"}],["meta",{"property":"og:description","content":"分类变量 1　分类变量的编码 分类变量中的类别通常不是数值型的。 如，眼睛的颜色可以是“黑色”“蓝色”和“褐色”。很容易想到，可以简单地为 k 个可能类别中的每个类别分配一个整数，如从 1 到 k，但这样做的结果是使类别彼此之间有了顺序，这在分类变量中是不允许的。 1.1　one-hot编码 one-hot 编码，它可以通过 scikit-learn 中的 sklearn.preprocessing.OneHotEncoder 实现。每个比特位表示一个特征，因此，一个可能有 k 个类别的分类变量就可以编码为一个长度为 k 的特征向量。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"分类变量"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分类变量\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1　分类变量的编码","slug":"_1-分类变量的编码","link":"#_1-分类变量的编码","children":[{"level":3,"title":"1.1　one-hot编码","slug":"_1-1-one-hot编码","link":"#_1-1-one-hot编码","children":[]},{"level":3,"title":"1.2　虚拟编码(Dummy Coding)","slug":"_1-2-虚拟编码-dummy-coding","link":"#_1-2-虚拟编码-dummy-coding","children":[]},{"level":3,"title":"1.3　效果编码(Effect Coding)","slug":"_1-3-效果编码-effect-coding","link":"#_1-3-效果编码-effect-coding","children":[]}]},{"level":2,"title":"2　处理大型分类变量","slug":"_2-处理大型分类变量","link":"#_2-处理大型分类变量","children":[{"level":3,"title":"2.1　特征散列化(Feature Hashing)","slug":"_2-1-特征散列化-feature-hashing","link":"#_2-1-特征散列化-feature-hashing","children":[]},{"level":3,"title":"2.2　分箱计数(Bin Counting)","slug":"_2-2-分箱计数-bin-counting","link":"#_2-2-分箱计数-bin-counting","children":[]}]},{"level":2,"title":"参考:","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":10.59,"words":3176},"filePathRelative":"4机器学习/1_2机器学习流程/特征工程/分类变量.md","localizedDate":"2025年2月21日","excerpt":"<h1> 分类变量</h1>\\n<h2> 1　分类变量的编码</h2>\\n<p>分类变量中的类别通常不是数值型的。 如，眼睛的颜色可以是“黑色”“蓝色”和“褐色”。很容易想到，可以简单地为 k 个可能类别中的每个类别分配一个整数，如从 1 到 k，但这样做的结果是使类别彼此之间有了顺序，这在分类变量中是不允许的。</p>\\n<h3> 1.1　one-hot编码</h3>\\n<p>one-hot 编码，它可以通过 scikit-learn 中的 sklearn.preprocessing.OneHotEncoder 实现。每个比特位表示一个特征，因此，一个可能有 k 个类别的分类变量就可以编码为一个长度为 k 的特征向量。</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
