const n=JSON.parse(`{"key":"v-01f9dff1","path":"/6%E5%89%8D%E7%AB%AF/2_1DOM/%E5%8A%A8%E7%94%BB/animation.html","title":"animation","lang":"zh-CN","frontmatter":{"description":"animation https://blog.csdn.net/cnds123/article/details/136118232 动画原理 &lt;head&gt; &lt;style&gt; div { position: absolute; left: 0; width: 100px; height: 100px; background-color: pink; } &lt;/style&gt; &lt;/head&gt; &lt;body&gt; &lt;div&gt;&lt;/div&gt; &lt;script&gt; // 动画原理 // 1. 获得盒子当前位置 // 2. 让盒子在当前位置加上1个移动距离 // 3. 利用定时器不断重复这个操作 // 4. 加一个结束定时器的条件 // 5. 注意此元素需要添加定位， 才能使用element.style.left var div = document.querySelector('div'); var timer = setInterval(function() { if (div.offsetLeft &gt;= 400) { // 停止动画 本质是停止定时器 clearInterval(timer); } div.style.left = div.offsetLeft + 1 + 'px'; }, 30); &lt;/script&gt; &lt;/body&gt;","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/6%E5%89%8D%E7%AB%AF/2_1DOM/%E5%8A%A8%E7%94%BB/animation.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"animation"}],["meta",{"property":"og:description","content":"animation https://blog.csdn.net/cnds123/article/details/136118232 动画原理 &lt;head&gt; &lt;style&gt; div { position: absolute; left: 0; width: 100px; height: 100px; background-color: pink; } &lt;/style&gt; &lt;/head&gt; &lt;body&gt; &lt;div&gt;&lt;/div&gt; &lt;script&gt; // 动画原理 // 1. 获得盒子当前位置 // 2. 让盒子在当前位置加上1个移动距离 // 3. 利用定时器不断重复这个操作 // 4. 加一个结束定时器的条件 // 5. 注意此元素需要添加定位， 才能使用element.style.left var div = document.querySelector('div'); var timer = setInterval(function() { if (div.offsetLeft &gt;= 400) { // 停止动画 本质是停止定时器 clearInterval(timer); } div.style.left = div.offsetLeft + 1 + 'px'; }, 30); &lt;/script&gt; &lt;/body&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"animation\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"动画原理","slug":"动画原理","link":"#动画原理","children":[]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.03,"words":308},"filePathRelative":"6前端/2_1DOM/动画/animation.md","localizedDate":"2025年2月21日","excerpt":"<h1> animation</h1>\\n<p>https://blog.csdn.net/cnds123/article/details/136118232</p>\\n<h2> 动画原理</h2>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>head</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>style</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token style\\"><span class=\\"token language-css\\">\\n        <span class=\\"token selector\\">div</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token property\\">position</span><span class=\\"token punctuation\\">:</span> absolute<span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token property\\">left</span><span class=\\"token punctuation\\">:</span> 0<span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token property\\">width</span><span class=\\"token punctuation\\">:</span> 100px<span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token property\\">height</span><span class=\\"token punctuation\\">:</span> 100px<span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token property\\">background-color</span><span class=\\"token punctuation\\">:</span> pink<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    </span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>style</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>head</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n        <span class=\\"token comment\\">// 动画原理</span>\\n        <span class=\\"token comment\\">// 1. 获得盒子当前位置  </span>\\n        <span class=\\"token comment\\">// 2. 让盒子在当前位置加上1个移动距离</span>\\n        <span class=\\"token comment\\">// 3. 利用定时器不断重复这个操作</span>\\n        <span class=\\"token comment\\">// 4. 加一个结束定时器的条件</span>\\n        <span class=\\"token comment\\">// 5. 注意此元素需要添加定位， 才能使用element.style.left</span>\\n        <span class=\\"token keyword\\">var</span> div <span class=\\"token operator\\">=</span> document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">querySelector</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'div'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">var</span> timer <span class=\\"token operator\\">=</span> <span class=\\"token function\\">setInterval</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>div<span class=\\"token punctuation\\">.</span>offsetLeft <span class=\\"token operator\\">&gt;=</span> <span class=\\"token number\\">400</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                <span class=\\"token comment\\">// 停止动画 本质是停止定时器</span>\\n                <span class=\\"token function\\">clearInterval</span><span class=\\"token punctuation\\">(</span>timer<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span>\\n            div<span class=\\"token punctuation\\">.</span>style<span class=\\"token punctuation\\">.</span>left <span class=\\"token operator\\">=</span> div<span class=\\"token punctuation\\">.</span>offsetLeft <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span> <span class=\\"token operator\\">+</span> <span class=\\"token string\\">'px'</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">30</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    </span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
