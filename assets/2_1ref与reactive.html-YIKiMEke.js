const n=JSON.parse(`{"key":"v-5e1868c8","path":"/%E5%89%8D%E7%AB%AF/vue/2_1ref%E4%B8%8Ereactive.html","title":"响应式ref","lang":"zh-CN","frontmatter":{"description":"响应式ref ref是reference的简称. ref()会自动推断参数的类型. 如果是基础类型(num, str, bool), 在&lt;script&gt;脚本中, 需要使用.value来取值; 在template中, 则不需要 如果是符合类型(object, list), 底层是调用reactive() 基础类型 &lt;script setup&gt; import { ref } from 'vue' const count = ref(0) function increment() { count.value++ } &lt;/script&gt; &lt;template&gt; &lt;button @click=\\"count++\\"&gt; {{ count }} &lt;/button&gt; &lt;button @click=\\"increment\\"&gt; {{ count }} &lt;/button&gt; &lt;/template&gt;","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E5%89%8D%E7%AB%AF/vue/2_1ref%E4%B8%8Ereactive.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"响应式ref"}],["meta",{"property":"og:description","content":"响应式ref ref是reference的简称. ref()会自动推断参数的类型. 如果是基础类型(num, str, bool), 在&lt;script&gt;脚本中, 需要使用.value来取值; 在template中, 则不需要 如果是符合类型(object, list), 底层是调用reactive() 基础类型 &lt;script setup&gt; import { ref } from 'vue' const count = ref(0) function increment() { count.value++ } &lt;/script&gt; &lt;template&gt; &lt;button @click=\\"count++\\"&gt; {{ count }} &lt;/button&gt; &lt;button @click=\\"increment\\"&gt; {{ count }} &lt;/button&gt; &lt;/template&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-18T14:02:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-18T14:02:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"响应式ref\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-18T14:02:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"基础类型","slug":"基础类型","link":"#基础类型","children":[]},{"level":2,"title":"复合类型","slug":"复合类型","link":"#复合类型","children":[]}],"git":{"createdTime":1739887321000,"updatedTime":1739887321000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.47,"words":141},"filePathRelative":"前端/vue/2_1ref与reactive.md","localizedDate":"2025年2月18日","excerpt":"<h1> 响应式ref</h1>\\n<p>ref是reference的简称. <code>ref()</code>会自动推断参数的类型.</p>\\n<ol>\\n<li>如果是基础类型(num, str, bool), 在<code>&lt;script&gt;</code>脚本中, 需要使用<code>.value</code>来取值; 在<code>template</code>中, 则不需要</li>\\n<li>如果是符合类型(object, list), 底层是调用<code>reactive()</code></li>\\n</ol>\\n<h2> 基础类型</h2>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">setup</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n    <span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> ref <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'vue'</span>\\n\\n    <span class=\\"token keyword\\">const</span> count <span class=\\"token operator\\">=</span> <span class=\\"token function\\">ref</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span>\\n\\n    <span class=\\"token keyword\\">function</span> <span class=\\"token function\\">increment</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    count<span class=\\"token punctuation\\">.</span>value<span class=\\"token operator\\">++</span>\\n    <span class=\\"token punctuation\\">}</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>button</span> <span class=\\"token attr-name\\">@click</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>count++<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n        {{ count }}\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>button</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    \\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>button</span> <span class=\\"token attr-name\\">@click</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>increment<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n        {{ count }}\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>button</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
