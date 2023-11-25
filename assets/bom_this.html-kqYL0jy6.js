const n=JSON.parse(`{"key":"v-4f90bae1","path":"/%E6%9C%AA%E5%88%86%E7%B1%BB/%E5%89%8D%E7%AB%AF/BOM/%E5%9F%BA%E7%A1%80/bom_this.html","title":"this","lang":"zh-CN","frontmatter":{"description":"this this 全局作用域或者普通函数中this指向全局对象window（注意定时器里面的this指向window） 方法调用中谁调用this指向谁 构造函数中this指向构造函数的实例 注意: new fun() 和直接调用fun()时,this指向是不同的 &lt;body&gt; &lt;button&gt;点击&lt;/button&gt; &lt;script&gt; // this 指向问题 一般情况下this的最终指向的是那个调用它的对象 // 1. 全局作用域或者普通函数中this指向全局对象window（ 注意定时器里面的this指向window） console.log(this); function fn() { console.log(this); } window.fn(); window.setTimeout(function() { console.log(this); }, 1000); // 2. 方法调用中谁调用this指向谁 var o = { sayHi: function() { console.log(this); // this指向的是 o 这个对象 } } o.sayHi(); var btn = document.querySelector('button'); btn.addEventListener('click', function() { console.log(this); // this指向的是btn这个按钮对象 }) // 3. 构造函数中this指向构造函数的实例 function Fun() { console.log(this); // this 指向的是fun 实例对象 } var fun = new Fun(); &lt;/script&gt; &lt;/body&gt;","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%9C%AA%E5%88%86%E7%B1%BB/%E5%89%8D%E7%AB%AF/BOM/%E5%9F%BA%E7%A1%80/bom_this.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"this"}],["meta",{"property":"og:description","content":"this this 全局作用域或者普通函数中this指向全局对象window（注意定时器里面的this指向window） 方法调用中谁调用this指向谁 构造函数中this指向构造函数的实例 注意: new fun() 和直接调用fun()时,this指向是不同的 &lt;body&gt; &lt;button&gt;点击&lt;/button&gt; &lt;script&gt; // this 指向问题 一般情况下this的最终指向的是那个调用它的对象 // 1. 全局作用域或者普通函数中this指向全局对象window（ 注意定时器里面的this指向window） console.log(this); function fn() { console.log(this); } window.fn(); window.setTimeout(function() { console.log(this); }, 1000); // 2. 方法调用中谁调用this指向谁 var o = { sayHi: function() { console.log(this); // this指向的是 o 这个对象 } } o.sayHi(); var btn = document.querySelector('button'); btn.addEventListener('click', function() { console.log(this); // this指向的是btn这个按钮对象 }) // 3. 构造函数中this指向构造函数的实例 function Fun() { console.log(this); // this 指向的是fun 实例对象 } var fun = new Fun(); &lt;/script&gt; &lt;/body&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"this\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"this","slug":"this-1","link":"#this-1","children":[]}],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.85,"words":254},"filePathRelative":"未分类/前端/BOM/基础/bom_this.md","localizedDate":"2023年11月25日","excerpt":"<h1> this</h1>\\n<h2> this</h2>\\n<ol>\\n<li>全局作用域或者普通函数中this指向全局对象window（注意定时器里面的this指向window）</li>\\n<li>方法调用中谁调用this指向谁</li>\\n<li>构造函数中this指向构造函数的实例\\n注意:\\n<code>new fun()</code> 和直接调用<code>fun()</code>时,<code>this</code>指向是不同的</li>\\n</ol>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>button</span><span class=\\"token punctuation\\">&gt;</span></span>点击<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>button</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n        <span class=\\"token comment\\">// this 指向问题 一般情况下this的最终指向的是那个调用它的对象</span>\\n        <span class=\\"token comment\\">// 1. 全局作用域或者普通函数中this指向全局对象window（ 注意定时器里面的this指向window）</span>\\n        console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">function</span> <span class=\\"token function\\">fn</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        window<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">fn</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        window<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">setTimeout</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1000</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n        <span class=\\"token comment\\">// 2. 方法调用中谁调用this指向谁</span>\\n        <span class=\\"token keyword\\">var</span> o <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token function-variable function\\">sayHi</span><span class=\\"token operator\\">:</span> <span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// this指向的是 o 这个对象</span>\\n            <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        o<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">sayHi</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">var</span> btn <span class=\\"token operator\\">=</span> document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">querySelector</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'button'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        btn<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">addEventListener</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'click'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// this指向的是btn这个按钮对象</span>\\n            <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token comment\\">// 3. 构造函数中this指向构造函数的实例</span>\\n        <span class=\\"token keyword\\">function</span> <span class=\\"token function\\">Fun</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// this 指向的是fun 实例对象</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">var</span> fun <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Fun</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    </span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
