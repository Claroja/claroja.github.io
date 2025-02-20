const e=JSON.parse('{"key":"v-3eeb5901","path":"/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1_2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/4_5%E8%BE%93%E5%87%BA%E4%BB%BB%E5%8A%A1_ovo-ovr.html","title":"输出任务_ovo-ovr","lang":"zh-CN","frontmatter":{"description":"输出任务_ovo-ovr 最佳实践 对于一些二分类器, 如逻辑回归, 要想处理多分类问题, 可以使用one-vs-one或one-vs-rest策略。 多分类的评估指标也要根据one-vs-one或one-vs-rest来计算。 ovo(one-vs-one) 有个四分类问题: 电影分为喜剧、犯罪、爱情、科幻. one-vs-one的策略是： 喜剧、犯罪、爱情、科幻，两两组合，组成6个分类器： （喜剧，犯罪） （喜剧，爱情） （喜剧，科幻） （犯罪，爱情） （犯罪，科幻） （爱情，科幻） 第一个分类器中, 喜剧的概率更大，所以这个分类器的结果显示的为喜剧. 其他5个分类器也同样处理. 假设总共的6个分类器的结果分别：喜剧、喜剧、喜剧、爱情、科幻、爱情； 因为6个分类器，把这部剧归为喜剧的比较多，所以这个剧最终的预测结果就是喜剧片。","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1_2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/4_5%E8%BE%93%E5%87%BA%E4%BB%BB%E5%8A%A1_ovo-ovr.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"输出任务_ovo-ovr"}],["meta",{"property":"og:description","content":"输出任务_ovo-ovr 最佳实践 对于一些二分类器, 如逻辑回归, 要想处理多分类问题, 可以使用one-vs-one或one-vs-rest策略。 多分类的评估指标也要根据one-vs-one或one-vs-rest来计算。 ovo(one-vs-one) 有个四分类问题: 电影分为喜剧、犯罪、爱情、科幻. one-vs-one的策略是： 喜剧、犯罪、爱情、科幻，两两组合，组成6个分类器： （喜剧，犯罪） （喜剧，爱情） （喜剧，科幻） （犯罪，爱情） （犯罪，科幻） （爱情，科幻） 第一个分类器中, 喜剧的概率更大，所以这个分类器的结果显示的为喜剧. 其他5个分类器也同样处理. 假设总共的6个分类器的结果分别：喜剧、喜剧、喜剧、爱情、科幻、爱情； 因为6个分类器，把这部剧归为喜剧的比较多，所以这个剧最终的预测结果就是喜剧片。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-18T14:02:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-18T14:02:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"输出任务_ovo-ovr\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-18T14:02:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]},{"level":2,"title":"ovo(one-vs-one)","slug":"ovo-one-vs-one","link":"#ovo-one-vs-one","children":[]},{"level":2,"title":"ovr(one-vs-rest)","slug":"ovr-one-vs-rest","link":"#ovr-one-vs-rest","children":[]},{"level":2,"title":"比较","slug":"比较","link":"#比较","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1739887321000,"updatedTime":1739887321000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.49,"words":448},"filePathRelative":"机器学习/1_2机器学习流程/4_5输出任务_ovo-ovr.md","localizedDate":"2025年2月18日","excerpt":"<h1> 输出任务_ovo-ovr</h1>\\n<h2> 最佳实践</h2>\\n<ol>\\n<li>对于一些二分类器, 如逻辑回归, 要想处理多分类问题, 可以使用one-vs-one或one-vs-rest策略。</li>\\n<li>多分类的评估指标也要根据one-vs-one或one-vs-rest来计算。</li>\\n</ol>\\n<h2> ovo(one-vs-one)</h2>\\n<p>有个四分类问题: 电影分为喜剧、犯罪、爱情、科幻.  one-vs-one的策略是：</p>\\n<ol>\\n<li>喜剧、犯罪、爱情、科幻，两两组合，组成6个分类器：\\n<ol>\\n<li>（喜剧，犯罪）</li>\\n<li>（喜剧，爱情）</li>\\n<li>（喜剧，科幻）</li>\\n<li>（犯罪，爱情）</li>\\n<li>（犯罪，科幻）</li>\\n<li>（爱情，科幻）</li>\\n</ol>\\n</li>\\n<li>第一个分类器中, 喜剧的概率更大，所以这个分类器的结果显示的为喜剧. 其他5个分类器也同样处理.</li>\\n<li>假设总共的6个分类器的结果分别：喜剧、喜剧、喜剧、爱情、科幻、爱情；</li>\\n<li>因为6个分类器，把这部剧归为喜剧的比较多，所以这个剧最终的预测结果就是喜剧片。</li>\\n</ol>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
