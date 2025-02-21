const t=JSON.parse(`{"key":"v-4b12b0fa","path":"/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/4_3%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86/statistic.html","title":"statistic","lang":"zh-CN","frontmatter":{"description":"statistic 比较有名的语料库是Wikipedia和Google News, 另外是莎士比亚和夏目簌石等伟大作家的作品. 文本预处理是指分词, 单词ID转换. 分词 text = 'You say goodbye and I say hello.' text = text.lower() text = text.replace('.', ' .') text # 'you say goodbye and i say hello .' words = text.split(' ') words # ['you', 'say', 'goodbye', 'and', 'i', 'say', 'hello', '.']","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/4_3%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86/statistic.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"statistic"}],["meta",{"property":"og:description","content":"statistic 比较有名的语料库是Wikipedia和Google News, 另外是莎士比亚和夏目簌石等伟大作家的作品. 文本预处理是指分词, 单词ID转换. 分词 text = 'You say goodbye and I say hello.' text = text.lower() text = text.replace('.', ' .') text # 'you say goodbye and i say hello .' words = text.split(' ') words # ['you', 'say', 'goodbye', 'and', 'i', 'say', 'hello', '.']"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"statistic"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"statistic\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"单词的分布式表示","slug":"单词的分布式表示","link":"#单词的分布式表示","children":[]},{"level":2,"title":"共现矩阵","slug":"共现矩阵","link":"#共现矩阵","children":[]},{"level":2,"title":"向量间相似度","slug":"向量间相似度","link":"#向量间相似度","children":[]},{"level":2,"title":"单词相似度排序","slug":"单词相似度排序","link":"#单词相似度排序","children":[]},{"level":2,"title":"点互信息(Pointwise Mutual Information, PMI)","slug":"点互信息-pointwise-mutual-information-pmi","link":"#点互信息-pointwise-mutual-information-pmi","children":[]},{"level":2,"title":"降维","slug":"降维","link":"#降维","children":[]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":8.07,"words":2420},"filePathRelative":"4机器学习/4_3自然语言处理/自然语言处理/statistic.md","localizedDate":"2025年2月21日","excerpt":"<h1> statistic</h1>\\n<p>比较有名的语料库是Wikipedia和Google News, 另外是莎士比亚和夏目簌石等伟大作家的作品.\\n文本预处理是指分词, 单词ID转换.</p>\\n<ul>\\n<li>分词</li>\\n</ul>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>text <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'You say goodbye and I say hello.'</span>\\ntext <span class=\\"token operator\\">=</span> text<span class=\\"token punctuation\\">.</span>lower<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\ntext <span class=\\"token operator\\">=</span> text<span class=\\"token punctuation\\">.</span>replace<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'.'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">' .'</span><span class=\\"token punctuation\\">)</span>\\ntext  <span class=\\"token comment\\"># 'you say goodbye and i say hello .'</span>\\nwords <span class=\\"token operator\\">=</span> text<span class=\\"token punctuation\\">.</span>split<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">' '</span><span class=\\"token punctuation\\">)</span>\\nwords  <span class=\\"token comment\\"># ['you', 'say', 'goodbye', 'and', 'i', 'say', 'hello', '.']</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{t as data};
