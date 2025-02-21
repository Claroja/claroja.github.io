const n=JSON.parse(`{"key":"v-4d3149be","path":"/6%E5%89%8D%E7%AB%AF/1BOM/%E5%9F%BA%E7%A1%80/time.html","title":"time","lang":"zh-CN","frontmatter":{"description":"time setTimeout() 定时器 setTimeout() 方法用于设置一个定时器，该定时器在定时器到期后执行调用函数。 语法: window.setTimeout(调用函数, [延迟的毫秒数]); 创建定时器 clearTimeout() 删除定时器 注意： window 可以省略。 延迟的毫秒数省略默认是 0，如果写，必须是毫秒。 因为定时器可能有很多，所以我们经常给定时器赋值一个标识符。 &lt;body&gt; &lt;script&gt; function callback() { console.log('爆炸了'); } var timer1 = setTimeout(callback, 3000); var timer2 = setTimeout(callback, 5000); clearTimeout(timer2); //删除定时器 &lt;/script&gt; &lt;/body&gt;","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/6%E5%89%8D%E7%AB%AF/1BOM/%E5%9F%BA%E7%A1%80/time.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"time"}],["meta",{"property":"og:description","content":"time setTimeout() 定时器 setTimeout() 方法用于设置一个定时器，该定时器在定时器到期后执行调用函数。 语法: window.setTimeout(调用函数, [延迟的毫秒数]); 创建定时器 clearTimeout() 删除定时器 注意： window 可以省略。 延迟的毫秒数省略默认是 0，如果写，必须是毫秒。 因为定时器可能有很多，所以我们经常给定时器赋值一个标识符。 &lt;body&gt; &lt;script&gt; function callback() { console.log('爆炸了'); } var timer1 = setTimeout(callback, 3000); var timer2 = setTimeout(callback, 5000); clearTimeout(timer2); //删除定时器 &lt;/script&gt; &lt;/body&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"time\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"setTimeout() 定时器","slug":"settimeout-定时器","link":"#settimeout-定时器","children":[]},{"level":2,"title":"setInterval 间隔定时器","slug":"setinterval-间隔定时器","link":"#setinterval-间隔定时器","children":[]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.15,"words":345},"filePathRelative":"6前端/1BOM/基础/time.md","localizedDate":"2025年2月21日","excerpt":"<h1> time</h1>\\n<h2> setTimeout() 定时器</h2>\\n<p>setTimeout() 方法用于设置一个定时器，该定时器在定时器到期后执行调用函数。\\n语法:\\n<code>window.setTimeout(调用函数, [延迟的毫秒数]);</code> 创建定时器\\n<code>clearTimeout()</code> 删除定时器\\n注意：</p>\\n<ol>\\n<li>window 可以省略。</li>\\n<li>延迟的毫秒数省略默认是 0，如果写，必须是毫秒。</li>\\n<li>因为定时器可能有很多，所以我们经常给定时器赋值一个标识符。</li>\\n</ol>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n        <span class=\\"token keyword\\">function</span> <span class=\\"token function\\">callback</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'爆炸了'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">var</span> timer1 <span class=\\"token operator\\">=</span> <span class=\\"token function\\">setTimeout</span><span class=\\"token punctuation\\">(</span>callback<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3000</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">var</span> timer2 <span class=\\"token operator\\">=</span> <span class=\\"token function\\">setTimeout</span><span class=\\"token punctuation\\">(</span>callback<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">5000</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token function\\">clearTimeout</span><span class=\\"token punctuation\\">(</span>timer2<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">//删除定时器</span>\\n    </span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
