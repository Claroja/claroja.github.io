const n=JSON.parse(`{"key":"v-947a712a","path":"/%E5%89%8D%E7%AB%AF/vue/2%E6%8C%87%E4%BB%A4/v-for.html","title":"v-for","lang":"zh-CN","frontmatter":{"description":"v-for 基础 语法：v-for=\\"(item, index) in xxx\\" :key=\\"yyy\\" 最好使用每条数据的唯一标识作为key, 比如id等唯一值。 如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示， 使用index作为key是没有问题的。 实战 基础使用 &lt;!DOCTYPE html&gt; &lt;html lang=\\"en\\"&gt; &lt;head&gt; &lt;title&gt;Document&lt;/title&gt; &lt;script src=\\"https://cdn.bootcss.com/vue/2.6.10/vue.js\\"&gt;&lt;/script&gt; &lt;/head&gt; &lt;body&gt; &lt;div id=\\"for\\"&gt; &lt;p v-for=\\"item in 5\\" :key=\\"item\\"&gt;{{item}}&lt;/p&gt; &lt;p v-for=\\"item in 5\\" :key=\\"item\\"&gt;{{item}}&lt;/p&gt; &lt;p v-for=\\"(item,index) in list\\" :key=\\"index\\"&gt;item:{{item}}--index:{{index}}&lt;/p&gt; &lt;p v-for=\\"(value,key) in map\\" :key=\\"key\\"&gt;value:{{value}}--key:{{key}}&lt;/p&gt; &lt;/div&gt; &lt;hr&gt; &lt;script&gt; var list = new Vue({ el: '#for', data: { list: ['a', 'b', 'c', 'd', 'e'], map: { 'key1': 'value1', 'key2': 'value2', 'key3': 'value3' } }, }) &lt;/script&gt; &lt;/body&gt; &lt;/html&gt;","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E5%89%8D%E7%AB%AF/vue/2%E6%8C%87%E4%BB%A4/v-for.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"v-for"}],["meta",{"property":"og:description","content":"v-for 基础 语法：v-for=\\"(item, index) in xxx\\" :key=\\"yyy\\" 最好使用每条数据的唯一标识作为key, 比如id等唯一值。 如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示， 使用index作为key是没有问题的。 实战 基础使用 &lt;!DOCTYPE html&gt; &lt;html lang=\\"en\\"&gt; &lt;head&gt; &lt;title&gt;Document&lt;/title&gt; &lt;script src=\\"https://cdn.bootcss.com/vue/2.6.10/vue.js\\"&gt;&lt;/script&gt; &lt;/head&gt; &lt;body&gt; &lt;div id=\\"for\\"&gt; &lt;p v-for=\\"item in 5\\" :key=\\"item\\"&gt;{{item}}&lt;/p&gt; &lt;p v-for=\\"item in 5\\" :key=\\"item\\"&gt;{{item}}&lt;/p&gt; &lt;p v-for=\\"(item,index) in list\\" :key=\\"index\\"&gt;item:{{item}}--index:{{index}}&lt;/p&gt; &lt;p v-for=\\"(value,key) in map\\" :key=\\"key\\"&gt;value:{{value}}--key:{{key}}&lt;/p&gt; &lt;/div&gt; &lt;hr&gt; &lt;script&gt; var list = new Vue({ el: '#for', data: { list: ['a', 'b', 'c', 'd', 'e'], map: { 'key1': 'value1', 'key2': 'value2', 'key3': 'value3' } }, }) &lt;/script&gt; &lt;/body&gt; &lt;/html&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-30T12:42:23.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-30T12:42:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"v-for\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-30T12:42:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"基础","slug":"基础","link":"#基础","children":[]},{"level":2,"title":"实战","slug":"实战","link":"#实战","children":[{"level":3,"title":"基础使用","slug":"基础使用","link":"#基础使用","children":[]},{"level":3,"title":"v-for中定义临时变量","slug":"v-for中定义临时变量","link":"#v-for中定义临时变量","children":[]}]}],"git":{"createdTime":1701348143000,"updatedTime":1701348143000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.83,"words":250},"filePathRelative":"前端/vue/2指令/v-for.md","localizedDate":"2023年11月30日","excerpt":"<h1> v-for</h1>\\n<h2> 基础</h2>\\n<ol>\\n<li>语法：v-for=\\"(item, index) in xxx\\" :key=\\"yyy\\"</li>\\n<li>最好使用每条数据的唯一标识作为key, 比如id等唯一值。\\n如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，\\n使用index作为key是没有问题的。</li>\\n</ol>\\n<h2> 实战</h2>\\n<h3> 基础使用</h3>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token doctype\\"><span class=\\"token punctuation\\">&lt;!</span><span class=\\"token doctype-tag\\">DOCTYPE</span> <span class=\\"token name\\">html</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>html</span> <span class=\\"token attr-name\\">lang</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>en<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>head</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>title</span><span class=\\"token punctuation\\">&gt;</span></span>Document<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>title</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">src</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>https://cdn.bootcss.com/vue/2.6.10/vue.js<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>head</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">id</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>for<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>p</span> <span class=\\"token attr-name\\">v-for</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>item in 5<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">:key</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>item<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>{{item}}<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>p</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>p</span> <span class=\\"token attr-name\\">v-for</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>item in 5<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">:key</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>item<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>{{item}}<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>p</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>p</span> <span class=\\"token attr-name\\">v-for</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>(item,index) in list<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">:key</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>index<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>item:{{item}}--index:{{index}}<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>p</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>p</span> <span class=\\"token attr-name\\">v-for</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>(value,key) in map<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">:key</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>key<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>value:{{value}}--key:{{key}}<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>p</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>hr</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n        <span class=\\"token keyword\\">var</span> list <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Vue</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token literal-property property\\">el</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'#for'</span><span class=\\"token punctuation\\">,</span>\\n            <span class=\\"token literal-property property\\">data</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n                <span class=\\"token literal-property property\\">list</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'a'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'b'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'c'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'d'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'e'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n                <span class=\\"token literal-property property\\">map</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n                    <span class=\\"token string-property property\\">'key1'</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'value1'</span><span class=\\"token punctuation\\">,</span>\\n                    <span class=\\"token string-property property\\">'key2'</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'value2'</span><span class=\\"token punctuation\\">,</span>\\n                    <span class=\\"token string-property property\\">'key3'</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'value3'</span>\\n                <span class=\\"token punctuation\\">}</span>\\n            <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n    </span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>html</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
