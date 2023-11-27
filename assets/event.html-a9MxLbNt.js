const n=JSON.parse(`{"key":"v-355a699d","path":"/%E5%89%8D%E7%AB%AF/DOM/%E4%BA%8B%E4%BB%B6/event.html","title":"event","lang":"zh-CN","frontmatter":{"description":"event 事件是可以被 JavaScript 侦测到的行为。例如，可以使用用户点击某按钮的事件，然后去执行某些操作。 事件三要素: 事件源 事件类型 事件处理 &lt;body&gt; &lt;button id=\\"btn\\"&gt;警告&lt;/button&gt; &lt;script&gt; //(1) 事件源 事件被触发的对象 -&gt; 按钮 var btn = document.getElementById('btn'); //(2) 事件类型 -&gt; 鼠标点击(onclick) // btn.onclick //(3) 事件处理程序 -&gt; 一个方法 btn.onclick = function() { alert('触发了onclick事件'); } &lt;/script&gt; &lt;/body&gt;","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E5%89%8D%E7%AB%AF/DOM/%E4%BA%8B%E4%BB%B6/event.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"event"}],["meta",{"property":"og:description","content":"event 事件是可以被 JavaScript 侦测到的行为。例如，可以使用用户点击某按钮的事件，然后去执行某些操作。 事件三要素: 事件源 事件类型 事件处理 &lt;body&gt; &lt;button id=\\"btn\\"&gt;警告&lt;/button&gt; &lt;script&gt; //(1) 事件源 事件被触发的对象 -&gt; 按钮 var btn = document.getElementById('btn'); //(2) 事件类型 -&gt; 鼠标点击(onclick) // btn.onclick //(3) 事件处理程序 -&gt; 一个方法 btn.onclick = function() { alert('触发了onclick事件'); } &lt;/script&gt; &lt;/body&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:17:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:17:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"event\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-27T13:17:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"注册事件","slug":"注册事件","link":"#注册事件","children":[{"level":3,"title":"注册三种方式","slug":"注册三种方式","link":"#注册三种方式","children":[]},{"level":3,"title":"删除事件的方式","slug":"删除事件的方式","link":"#删除事件的方式","children":[]}]},{"level":2,"title":"DOM事件流","slug":"dom事件流","link":"#dom事件流","children":[]},{"level":2,"title":"事件对象","slug":"事件对象","link":"#事件对象","children":[]},{"level":2,"title":"常见的属性和方法","slug":"常见的属性和方法","link":"#常见的属性和方法","children":[{"level":3,"title":"e.target 和 this","slug":"e-target-和-this","link":"#e-target-和-this","children":[]},{"level":3,"title":"事件委托","slug":"事件委托","link":"#事件委托","children":[]},{"level":3,"title":"阻止默认行为","slug":"阻止默认行为","link":"#阻止默认行为","children":[]},{"level":3,"title":"阻止冒泡","slug":"阻止冒泡","link":"#阻止冒泡","children":[]}]}],"git":{"createdTime":1701091021000,"updatedTime":1701091021000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":7.35,"words":2206},"filePathRelative":"前端/DOM/事件/event.md","localizedDate":"2023年11月27日","excerpt":"<h1> event</h1>\\n<p>事件是可以被 JavaScript 侦测到的行为。例如，可以使用用户点击某按钮的事件，然后去执行某些操作。</p>\\n<p>事件三要素:</p>\\n<ol>\\n<li>事件源</li>\\n<li>事件类型</li>\\n<li>事件处理</li>\\n</ol>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>button</span> <span class=\\"token attr-name\\">id</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>btn<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>警告<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>button</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n        <span class=\\"token comment\\">//(1) 事件源 事件被触发的对象 -&gt; 按钮</span>\\n        <span class=\\"token keyword\\">var</span> btn <span class=\\"token operator\\">=</span> document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getElementById</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'btn'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token comment\\">//(2) 事件类型  -&gt; 鼠标点击(onclick)</span>\\n        <span class=\\"token comment\\">// btn.onclick</span>\\n        <span class=\\"token comment\\">//(3) 事件处理程序 -&gt; 一个方法</span>\\n        btn<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">onclick</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token function\\">alert</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'触发了onclick事件'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    </span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
