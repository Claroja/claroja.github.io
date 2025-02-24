const n=JSON.parse('{"key":"v-2a040190","path":"/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/2%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF/3%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86/spacy/ner.html","title":"ner","lang":"zh-CN","frontmatter":{"description":"ner 命名实体识别 import spacy ​ nlp = spacy.load(\\"en_core_web_sm\\") doc = nlp(\\"Apple is looking at buying U.K. startup for $1 billion\\") ​ for ent in doc.ents: print(ent.text, ent.start_char, ent.end_char, ent.label_)","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/2%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF/3%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86/spacy/ner.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"ner"}],["meta",{"property":"og:description","content":"ner 命名实体识别 import spacy ​ nlp = spacy.load(\\"en_core_web_sm\\") doc = nlp(\\"Apple is looking at buying U.K. startup for $1 billion\\") ​ for ent in doc.ents: print(ent.text, ent.start_char, ent.end_char, ent.label_)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ner\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"命名实体识别","slug":"命名实体识别","link":"#命名实体识别","children":[]},{"level":2,"title":"获得实体标签","slug":"获得实体标签","link":"#获得实体标签","children":[]}],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.79,"words":237},"filePathRelative":"2机器学习/2应用场景/3自然语言处理/spacy/ner.md","localizedDate":"2025年2月24日","excerpt":"<h1> ner</h1>\\n<h2> 命名实体识别</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> spacy\\n​\\nnlp <span class=\\"token operator\\">=</span> spacy<span class=\\"token punctuation\\">.</span>load<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"en_core_web_sm\\"</span><span class=\\"token punctuation\\">)</span>\\ndoc <span class=\\"token operator\\">=</span> nlp<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Apple is looking at buying U.K. startup for $1 billion\\"</span><span class=\\"token punctuation\\">)</span>\\n​\\n<span class=\\"token keyword\\">for</span> ent <span class=\\"token keyword\\">in</span> doc<span class=\\"token punctuation\\">.</span>ents<span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>ent<span class=\\"token punctuation\\">.</span>text<span class=\\"token punctuation\\">,</span> ent<span class=\\"token punctuation\\">.</span>start_char<span class=\\"token punctuation\\">,</span> ent<span class=\\"token punctuation\\">.</span>end_char<span class=\\"token punctuation\\">,</span> ent<span class=\\"token punctuation\\">.</span>label_<span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
