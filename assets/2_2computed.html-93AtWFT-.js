const n=JSON.parse(`{"key":"v-b91990e8","path":"/6%E5%89%8D%E7%AB%AF/3vue/2_2computed.html","title":"computed","lang":"zh-CN","frontmatter":{"description":"computed 与methods实现相比，内部有缓存机制（复用），效率更高，调试方便。 在computed里包含的变量,一但发生变化都会被监听到, computed可以看成是高级的watch, watch更看重数据改变的过程, computed更看重最终更改的结果 语法: computed(get(),set()) &lt;template&gt; \\t姓：&lt;input type=\\"text\\" v-model=\\"person.firstName\\"&gt; \\t&lt;br&gt; \\t名：&lt;input type=\\"text\\" v-model=\\"person.lastName\\"&gt; \\t&lt;br&gt; \\t全名：&lt;input type=\\"text\\" v-model=\\"person.fullName\\"&gt; &lt;/template&gt; &lt;script&gt; import {reactive,computed} from 'vue' export default { name: 'Demo', setup(){ //数据 let person = reactive({ firstName:'张', lastName:'三' }) //计算属性——简写（没有考虑计算属性被修改的情况） /* person.fullName = computed(()=&gt;{ return person.firstName + '-' + person.lastName }) */ //计算属性——完整写法（考虑读和写） person.fullName = computed({// 因为person是reactive定义的, 所以添加的属性也是reactive的 get(){ //当在firstname和lastname修改时触发 return person.firstName + '-' + person.lastName }, set(value){ //当在fullname修改时触发 const nameArr = value.split('-') person.firstName = nameArr[0] person.lastName = nameArr[1] } }) //返回一个对象（常用） return { person } } } &lt;/script&gt;","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/6%E5%89%8D%E7%AB%AF/3vue/2_2computed.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"computed"}],["meta",{"property":"og:description","content":"computed 与methods实现相比，内部有缓存机制（复用），效率更高，调试方便。 在computed里包含的变量,一但发生变化都会被监听到, computed可以看成是高级的watch, watch更看重数据改变的过程, computed更看重最终更改的结果 语法: computed(get(),set()) &lt;template&gt; \\t姓：&lt;input type=\\"text\\" v-model=\\"person.firstName\\"&gt; \\t&lt;br&gt; \\t名：&lt;input type=\\"text\\" v-model=\\"person.lastName\\"&gt; \\t&lt;br&gt; \\t全名：&lt;input type=\\"text\\" v-model=\\"person.fullName\\"&gt; &lt;/template&gt; &lt;script&gt; import {reactive,computed} from 'vue' export default { name: 'Demo', setup(){ //数据 let person = reactive({ firstName:'张', lastName:'三' }) //计算属性——简写（没有考虑计算属性被修改的情况） /* person.fullName = computed(()=&gt;{ return person.firstName + '-' + person.lastName }) */ //计算属性——完整写法（考虑读和写） person.fullName = computed({// 因为person是reactive定义的, 所以添加的属性也是reactive的 get(){ //当在firstname和lastname修改时触发 return person.firstName + '-' + person.lastName }, set(value){ //当在fullname修改时触发 const nameArr = value.split('-') person.firstName = nameArr[0] person.lastName = nameArr[1] } }) //返回一个对象（常用） return { person } } } &lt;/script&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"computed\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.82,"words":245},"filePathRelative":"6前端/3vue/2_2computed.md","localizedDate":"2025年2月21日","excerpt":"<h1> computed</h1>\\n<ul>\\n<li>与methods实现相比，内部有缓存机制（复用），效率更高，调试方便。</li>\\n<li>在computed里包含的变量,一但发生变化都会被监听到, computed可以看成是高级的watch, watch更看重数据改变的过程, computed更看重最终更改的结果</li>\\n</ul>\\n<p>语法: <code>computed(get(),set())</code></p>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t姓：<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>text<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>person.firstName<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>br</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t名：<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>text<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>person.lastName<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>br</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t全名：<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>text<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>person.fullName<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span>reactive<span class=\\"token punctuation\\">,</span>computed<span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'vue'</span>\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">default</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token literal-property property\\">name</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'Demo'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token function\\">setup</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">//数据</span>\\n        <span class=\\"token keyword\\">let</span> person <span class=\\"token operator\\">=</span> <span class=\\"token function\\">reactive</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token literal-property property\\">firstName</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'张'</span><span class=\\"token punctuation\\">,</span>\\n            <span class=\\"token literal-property property\\">lastName</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'三'</span>\\n        <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token comment\\">//计算属性——简写（没有考虑计算属性被修改的情况）</span>\\n        <span class=\\"token comment\\">/* person.fullName = computed(()=&gt;{\\n            return person.firstName + '-' + person.lastName\\n        }) */</span>\\n        <span class=\\"token comment\\">//计算属性——完整写法（考虑读和写）</span>\\n        person<span class=\\"token punctuation\\">.</span>fullName <span class=\\"token operator\\">=</span> <span class=\\"token function\\">computed</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span><span class=\\"token comment\\">// 因为person是reactive定义的, 所以添加的属性也是reactive的</span>\\n            <span class=\\"token function\\">get</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span> <span class=\\"token comment\\">//当在firstname和lastname修改时触发</span>\\n                <span class=\\"token keyword\\">return</span> person<span class=\\"token punctuation\\">.</span>firstName <span class=\\"token operator\\">+</span> <span class=\\"token string\\">'-'</span> <span class=\\"token operator\\">+</span> person<span class=\\"token punctuation\\">.</span>lastName\\n            <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n            <span class=\\"token function\\">set</span><span class=\\"token punctuation\\">(</span>value<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>  <span class=\\"token comment\\">//当在fullname修改时触发</span>\\n                <span class=\\"token keyword\\">const</span> nameArr <span class=\\"token operator\\">=</span> value<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">split</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'-'</span><span class=\\"token punctuation\\">)</span>\\n                person<span class=\\"token punctuation\\">.</span>firstName <span class=\\"token operator\\">=</span> nameArr<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span>\\n                person<span class=\\"token punctuation\\">.</span>lastName <span class=\\"token operator\\">=</span> nameArr<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span>\\n            <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n\\n        <span class=\\"token comment\\">//返回一个对象（常用）</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">{</span>\\n            person\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
