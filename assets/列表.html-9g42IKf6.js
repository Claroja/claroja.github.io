const n=JSON.parse('{"key":"v-4b6b6d2c","path":"/%E5%86%99%E4%BD%9C/%E6%9C%AA%E5%88%86%E7%B1%BB/markdown/%E5%88%97%E8%A1%A8.html","title":"列表","lang":"zh-CN","frontmatter":{"description":"列表 MD原理 渲染 单行直接渲染成&lt;li&gt;标签: MD源码 1. 项目1 2. 项目2 3. 项目3 4. 项目4 HTML渲染结果 &lt;ol&gt; &lt;li&gt;项目1&lt;/li&gt; &lt;li&gt;项目2&lt;/li&gt; &lt;li&gt;项目3&lt;/li&gt; &lt;li&gt;项目4&lt;/li&gt; &lt;/ol&gt; 多行会被渲染成&lt;li&gt;&lt;p&gt;&lt;/li&gt; MD源码, 12之间使用的是MD的换行; 34之间使用的是MD的段落 1. 项目1 项目1.1 2. 项目2 3. 项目3 项目3.1 4. 项目4 HTML渲染结果, 12换行, 是在一个&lt;p&gt;标签中加入了&lt;br&gt;标签; 34段落, 是直接生成了两个&lt;p&gt;标签 &lt;ol&gt; &lt;li&gt; &lt;p&gt;项目1&lt;br&gt; 项目1.1&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;项目2&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;项目3&lt;/p&gt; &lt;p&gt; 项目3.1&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;项目4&lt;/p&gt; &lt;/li&gt; &lt;/ol&gt; 在HTML中, 使用CSS来实现段落的换行效果: p { margin: 0.75em; // 每个段落间隔 } 但是&lt;li&gt;中签到了&lt;p&gt;会将列表元素行间距打乱, 所以要特别配置一下: li p { margin: 0em; //列表内的`&lt;p&gt;`标签不空行 }","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E5%86%99%E4%BD%9C/%E6%9C%AA%E5%88%86%E7%B1%BB/markdown/%E5%88%97%E8%A1%A8.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"列表"}],["meta",{"property":"og:description","content":"列表 MD原理 渲染 单行直接渲染成&lt;li&gt;标签: MD源码 1. 项目1 2. 项目2 3. 项目3 4. 项目4 HTML渲染结果 &lt;ol&gt; &lt;li&gt;项目1&lt;/li&gt; &lt;li&gt;项目2&lt;/li&gt; &lt;li&gt;项目3&lt;/li&gt; &lt;li&gt;项目4&lt;/li&gt; &lt;/ol&gt; 多行会被渲染成&lt;li&gt;&lt;p&gt;&lt;/li&gt; MD源码, 12之间使用的是MD的换行; 34之间使用的是MD的段落 1. 项目1 项目1.1 2. 项目2 3. 项目3 项目3.1 4. 项目4 HTML渲染结果, 12换行, 是在一个&lt;p&gt;标签中加入了&lt;br&gt;标签; 34段落, 是直接生成了两个&lt;p&gt;标签 &lt;ol&gt; &lt;li&gt; &lt;p&gt;项目1&lt;br&gt; 项目1.1&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;项目2&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;项目3&lt;/p&gt; &lt;p&gt; 项目3.1&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;项目4&lt;/p&gt; &lt;/li&gt; &lt;/ol&gt; 在HTML中, 使用CSS来实现段落的换行效果: p { margin: 0.75em; // 每个段落间隔 } 但是&lt;li&gt;中签到了&lt;p&gt;会将列表元素行间距打乱, 所以要特别配置一下: li p { margin: 0em; //列表内的`&lt;p&gt;`标签不空行 }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:17:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:17:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"列表\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-27T13:17:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"MD原理","slug":"md原理","link":"#md原理","children":[{"level":3,"title":"渲染","slug":"渲染","link":"#渲染","children":[]},{"level":3,"title":"实际效果","slug":"实际效果","link":"#实际效果","children":[]}]},{"level":2,"title":"内容书写建议","slug":"内容书写建议","link":"#内容书写建议","children":[{"level":3,"title":"有序列表和无序列表","slug":"有序列表和无序列表","link":"#有序列表和无序列表","children":[]},{"level":3,"title":"列表前的介绍性句子","slug":"列表前的介绍性句子","link":"#列表前的介绍性句子","children":[]},{"level":3,"title":"列表内容的大小写","slug":"列表内容的大小写","link":"#列表内容的大小写","children":[]},{"level":3,"title":"列表内容的平行语法","slug":"列表内容的平行语法","link":"#列表内容的平行语法","children":[]},{"level":3,"title":"列表项的标点","slug":"列表项的标点","link":"#列表项的标点","children":[]},{"level":3,"title":"列表的长度","slug":"列表的长度","link":"#列表的长度","children":[]},{"level":3,"title":"列表嵌套","slug":"列表嵌套","link":"#列表嵌套","children":[]}]},{"level":2,"title":"表示列表的字","slug":"表示列表的字","link":"#表示列表的字","children":[]}],"git":{"createdTime":1701091021000,"updatedTime":1701091021000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":6.09,"words":1826},"filePathRelative":"写作/未分类/markdown/列表.md","localizedDate":"2023年11月27日","excerpt":"<h1> 列表</h1>\\n<h2> MD原理</h2>\\n<h3> 渲染</h3>\\n<ul>\\n<li>\\n<p>单行直接渲染成<code>&lt;li&gt;</code>标签:</p>\\n<ul>\\n<li>\\n<p>MD源码</p>\\n<div class=\\"language-markdown line-numbers-mode\\" data-ext=\\"md\\"><pre class=\\"language-markdown\\"><code><span class=\\"token list punctuation\\">1.</span> 项目1\\n<span class=\\"token list punctuation\\">2.</span> 项目2\\n<span class=\\"token list punctuation\\">3.</span> 项目3\\n<span class=\\"token list punctuation\\">4.</span> 项目4\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>HTML渲染结果</p>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>ol</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>项目1<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>项目2<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>项目3<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>项目4<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>ol</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>多行会被渲染成<code>&lt;li&gt;&lt;p&gt;&lt;/li&gt;</code></p>\\n<ul>\\n<li>\\n<p>MD源码, 12之间使用的是MD的换行; 34之间使用的是MD的段落</p>\\n<div class=\\"language-markdown line-numbers-mode\\" data-ext=\\"md\\"><pre class=\\"language-markdown\\"><code><span class=\\"token list punctuation\\">1.</span> 项目1  \\n项目1.1\\n<span class=\\"token list punctuation\\">2.</span> 项目2\\n\\n<span class=\\"token list punctuation\\">3.</span> 项目3\\n\\n<span class=\\"token code keyword\\">    项目3.1</span>\\n<span class=\\"token list punctuation\\">4.</span> 项目4\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>HTML渲染结果, 12换行, 是在一个<code>&lt;p&gt;</code>标签中加入了<code>&lt;br&gt;</code>标签; 34段落, 是直接生成了两个<code>&lt;p&gt;</code>标签</p>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>ol</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>p</span><span class=\\"token punctuation\\">&gt;</span></span>项目1<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>br</span><span class=\\"token punctuation\\">&gt;</span></span>  项目1.1<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>p</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>p</span><span class=\\"token punctuation\\">&gt;</span></span>项目2<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>p</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>p</span><span class=\\"token punctuation\\">&gt;</span></span>项目3<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>p</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>p</span><span class=\\"token punctuation\\">&gt;</span></span> 项目3.1<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>p</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>p</span><span class=\\"token punctuation\\">&gt;</span></span>项目4<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>p</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>ol</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>\\n<blockquote>\\n<p>在HTML中, 使用CSS来实现段落的换行效果:</p>\\n<div class=\\"language-css line-numbers-mode\\" data-ext=\\"css\\"><pre class=\\"language-css\\"><code><span class=\\"token selector\\">p</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token property\\">margin</span><span class=\\"token punctuation\\">:</span> 0.75em<span class=\\"token punctuation\\">;</span> // 每个段落间隔\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p>但是<code>&lt;li&gt;</code>中签到了<code>&lt;p&gt;</code>会将列表元素行间距打乱, 所以要特别配置一下:</p>\\n<div class=\\"language-css line-numbers-mode\\" data-ext=\\"css\\"><pre class=\\"language-css\\"><code><span class=\\"token selector\\">li p</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token property\\">margin</span><span class=\\"token punctuation\\">:</span> 0em<span class=\\"token punctuation\\">;</span> //列表内的`&lt;p&gt;`标签不空行\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></blockquote>\\n</li>\\n</ul>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
