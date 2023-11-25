const e=JSON.parse('{"key":"v-a621c8a8","path":"/%E6%9C%AA%E5%88%86%E7%B1%BB/%E5%89%8D%E7%AB%AF/vue/vue%E5%AF%B9%E8%B1%A1/vue_ref.html","title":"ref","lang":"zh-CN","frontmatter":{"description":"ref vue3-ref 应用: - 不使用ref()来处理响应式对象, 而是使用底层的reactive() - 建议使用ref()仅用来处理基础数据, 或者将基础数据放在对象里, 用reactive()来处理 作用: 定义一个响应式的数据 语法: const xxx = ref(initValue) - 创建一个包含响应式数据的引用对象(reference对象，简称ref对象)。 - JS中操作数据: xxx.value - 模板中读取数据: 不需要.value，直接：&lt;div&gt;{{xxx}}&lt;/div&gt; 备注： - 接收的数据可以是：基本类型、也可以是对象类型。 - 基本类型的数据: 响应式依然是靠Object.defineProperty()的get与set完成的。 - 对象类型的数据: 内部 “ 求助 ”了Vue3.0中的一个新函数reactive函数, 底层是ES6的proxy 拓展:","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%9C%AA%E5%88%86%E7%B1%BB/%E5%89%8D%E7%AB%AF/vue/vue%E5%AF%B9%E8%B1%A1/vue_ref.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"ref"}],["meta",{"property":"og:description","content":"ref vue3-ref 应用: - 不使用ref()来处理响应式对象, 而是使用底层的reactive() - 建议使用ref()仅用来处理基础数据, 或者将基础数据放在对象里, 用reactive()来处理 作用: 定义一个响应式的数据 语法: const xxx = ref(initValue) - 创建一个包含响应式数据的引用对象(reference对象，简称ref对象)。 - JS中操作数据: xxx.value - 模板中读取数据: 不需要.value，直接：&lt;div&gt;{{xxx}}&lt;/div&gt; 备注： - 接收的数据可以是：基本类型、也可以是对象类型。 - 基本类型的数据: 响应式依然是靠Object.defineProperty()的get与set完成的。 - 对象类型的数据: 内部 “ 求助 ”了Vue3.0中的一个新函数reactive函数, 底层是ES6的proxy 拓展:"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ref\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"vue3-ref","slug":"vue3-ref","link":"#vue3-ref","children":[]}],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.15,"words":346},"filePathRelative":"未分类/前端/vue/vue对象/vue_ref.md","localizedDate":"2023年11月25日","excerpt":"<h1> ref</h1>\\n<h2> vue3-ref</h2>\\n<p>应用:\\n- 不使用<code>ref()</code>来处理响应式对象, 而是使用底层的<code>reactive()</code>\\n- 建议使用<code>ref()</code>仅用来处理基础数据, 或者将基础数据放在对象里, 用<code>reactive()</code>来处理\\n作用: 定义一个响应式的数据\\n语法: <code>const xxx = ref(initValue)</code>\\n- 创建一个包含响应式数据的引用对象(reference对象，简称ref对象)。\\n- JS中操作数据: <code>xxx.value</code>\\n- 模板中读取数据: 不需要.value，直接：<code>&lt;div&gt;{{xxx}}&lt;/div&gt;</code>\\n备注：\\n- 接收的数据可以是：基本类型、也可以是对象类型。\\n- 基本类型的数据: 响应式依然是靠<code>Object.defineProperty()</code>的<code>get</code>与<code>set</code>完成的。\\n- 对象类型的数据: 内部 “ 求助 ”了Vue3.0中的一个新函数<code>reactive</code>函数, 底层是ES6的proxy\\n拓展:</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
