const n=JSON.parse(`{"key":"v-0ec2d69b","path":"/2%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/5_3nodejs/%E9%83%A8%E7%BD%B2%E4%BE%9D%E8%B5%96%E6%A8%A1%E5%9D%97/lodash.html","title":"lodash","lang":"zh-CN","frontmatter":{"description":"lodash &lt;!DOCTYPE html&gt; &lt;html lang=\\"en\\"&gt; &lt;head&gt; &lt;meta charset=\\"UTF-8\\"&gt; &lt;meta http-equiv=\\"X-UA-Compatible\\" content=\\"IE=edge\\"&gt; &lt;meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0\\"&gt; &lt;title&gt;Document&lt;/title&gt; &lt;!-- 引入lodash：已经封装好了防抖与节流的业务 --&gt; &lt;script src='./js/lodash.js'&gt;&lt;/script&gt; &lt;/head&gt; &lt;body&gt; &lt;!-- 防抖场景 --&gt; &lt;div&gt; &lt;span&gt;搜索内容(没有防抖)&lt;/span&gt;&lt;input type=\\"text\\" id=\\"putong\\"&gt; &lt;span&gt;搜索内容(添加防抖)&lt;/span&gt;&lt;input type=\\"text\\" id=\\"fangdou\\"&gt; &lt;/div&gt; &lt;!-- 节流 --&gt; &lt;button&gt;点击我切换图片&lt;/button&gt; &lt;/body&gt; &lt;/html&gt; &lt;script&gt; // 没有添加防抖每次都要触发 let input1 = document.querySelector('#putong'); let input2 = document.querySelector('#fangdou'); //oninput事件:当文本框中的内容发生变化的时候立即会出发的(结合表单元素一起使用) input1.oninput = function(){ console.log('发起ajax请求'); } //防抖：前面的所有的触发都被取消，最后一次执行在规定的时间之后才会执行，也就是说如果连续快速的触发, 只会在规定时间后执行一次 //对于项目性能优化是极好的 //lodash函数库对外暴露_对象 input2.oninput = _.debounce(function(){ console.log('发起ajax请求'); },1000);//1s后执行最后一次操作 //_.debounce(callBack,time) ,返回一个新的函数 //节流：在规定的时间范围内不会重复触发回调，只有大于这个时间间隔才会触发回调，把频繁触发变为少量触发 let button = document.querySelector('button'); button.onclick = _.throttle(function(){ console.log('切换图片'); },1000); //1s内只能触发一次 &lt;/script&gt;","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/5_3nodejs/%E9%83%A8%E7%BD%B2%E4%BE%9D%E8%B5%96%E6%A8%A1%E5%9D%97/lodash.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"lodash"}],["meta",{"property":"og:description","content":"lodash &lt;!DOCTYPE html&gt; &lt;html lang=\\"en\\"&gt; &lt;head&gt; &lt;meta charset=\\"UTF-8\\"&gt; &lt;meta http-equiv=\\"X-UA-Compatible\\" content=\\"IE=edge\\"&gt; &lt;meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0\\"&gt; &lt;title&gt;Document&lt;/title&gt; &lt;!-- 引入lodash：已经封装好了防抖与节流的业务 --&gt; &lt;script src='./js/lodash.js'&gt;&lt;/script&gt; &lt;/head&gt; &lt;body&gt; &lt;!-- 防抖场景 --&gt; &lt;div&gt; &lt;span&gt;搜索内容(没有防抖)&lt;/span&gt;&lt;input type=\\"text\\" id=\\"putong\\"&gt; &lt;span&gt;搜索内容(添加防抖)&lt;/span&gt;&lt;input type=\\"text\\" id=\\"fangdou\\"&gt; &lt;/div&gt; &lt;!-- 节流 --&gt; &lt;button&gt;点击我切换图片&lt;/button&gt; &lt;/body&gt; &lt;/html&gt; &lt;script&gt; // 没有添加防抖每次都要触发 let input1 = document.querySelector('#putong'); let input2 = document.querySelector('#fangdou'); //oninput事件:当文本框中的内容发生变化的时候立即会出发的(结合表单元素一起使用) input1.oninput = function(){ console.log('发起ajax请求'); } //防抖：前面的所有的触发都被取消，最后一次执行在规定的时间之后才会执行，也就是说如果连续快速的触发, 只会在规定时间后执行一次 //对于项目性能优化是极好的 //lodash函数库对外暴露_对象 input2.oninput = _.debounce(function(){ console.log('发起ajax请求'); },1000);//1s后执行最后一次操作 //_.debounce(callBack,time) ,返回一个新的函数 //节流：在规定的时间范围内不会重复触发回调，只有大于这个时间间隔才会触发回调，把频繁触发变为少量触发 let button = document.querySelector('button'); button.onclick = _.throttle(function(){ console.log('切换图片'); },1000); //1s内只能触发一次 &lt;/script&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"lodash\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.42,"words":426},"filePathRelative":"2编程语言/5_3nodejs/部署依赖模块/lodash.md","localizedDate":"2025年2月21日","excerpt":"<h1> lodash</h1>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token doctype\\"><span class=\\"token punctuation\\">&lt;!</span><span class=\\"token doctype-tag\\">DOCTYPE</span> <span class=\\"token name\\">html</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>html</span> <span class=\\"token attr-name\\">lang</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>en<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>head</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>meta</span> <span class=\\"token attr-name\\">charset</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>UTF-8<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>meta</span> <span class=\\"token attr-name\\">http-equiv</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>X-UA-Compatible<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">content</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>IE=edge<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>meta</span> <span class=\\"token attr-name\\">name</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>viewport<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">content</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>width=device-width, initial-scale=1.0<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>title</span><span class=\\"token punctuation\\">&gt;</span></span>Document<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>title</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token comment\\">&lt;!-- 引入lodash：已经封装好了防抖与节流的业务 --&gt;</span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">src</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">'</span>./js/lodash.js<span class=\\"token punctuation\\">'</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>head</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token comment\\">&lt;!-- 防抖场景 --&gt;</span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>span</span><span class=\\"token punctuation\\">&gt;</span></span>搜索内容(没有防抖)<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>span</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>text<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">id</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>putong<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>span</span><span class=\\"token punctuation\\">&gt;</span></span>搜索内容(添加防抖)<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>span</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>text<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">id</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>fangdou<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token comment\\">&lt;!-- 节流 --&gt;</span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>button</span><span class=\\"token punctuation\\">&gt;</span></span>点击我切换图片<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>button</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>html</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n    <span class=\\"token comment\\">// 没有添加防抖每次都要触发</span>\\n    <span class=\\"token keyword\\">let</span> input1 <span class=\\"token operator\\">=</span> document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">querySelector</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'#putong'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">let</span> input2 <span class=\\"token operator\\">=</span> document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">querySelector</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'#fangdou'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token comment\\">//oninput事件:当文本框中的内容发生变化的时候立即会出发的(结合表单元素一起使用)</span>\\n    input1<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">oninput</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n       console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'发起ajax请求'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token comment\\">//防抖：前面的所有的触发都被取消，最后一次执行在规定的时间之后才会执行，也就是说如果连续快速的触发, 只会在规定时间后执行一次</span>\\n    <span class=\\"token comment\\">//对于项目性能优化是极好的</span>\\n    <span class=\\"token comment\\">//lodash函数库对外暴露_对象</span>\\n    input2<span class=\\"token punctuation\\">.</span>oninput <span class=\\"token operator\\">=</span> _<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">debounce</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n       console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'发起ajax请求'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">1000</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//1s后执行最后一次操作</span>\\n    <span class=\\"token comment\\">//_.debounce(callBack,time) ,返回一个新的函数</span>\\n    <span class=\\"token comment\\">//节流：在规定的时间范围内不会重复触发回调，只有大于这个时间间隔才会触发回调，把频繁触发变为少量触发</span>\\n    <span class=\\"token keyword\\">let</span> button <span class=\\"token operator\\">=</span> document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">querySelector</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'button'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    button<span class=\\"token punctuation\\">.</span>onclick <span class=\\"token operator\\">=</span> _<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">throttle</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n         console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'切换图片'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">1000</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">//1s内只能触发一次</span>\\n\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
