const t=JSON.parse(`{"key":"v-2165f22a","path":"/6%E5%89%8D%E7%AB%AF/3vue/4_4%E5%B1%9E%E6%80%A7%E4%BC%A0%E5%80%BCprops.html","title":"props","lang":"zh-CN","frontmatter":{"description":"props 通过子组件的属性进行传值 defineProps是一个仅&lt;script setup&gt;中可用的编译宏命令，并不需要显式地导入。defineProps会返回一个对象，其中包含了可以传递给组件的所有props： 父组件: &lt;BlogPost title=\\"My journey with Vue\\" /&gt; 子组件BlogPost.vue &lt;script setup&gt; \\tdefineProps(['title']) //直接暴露title, 也可以写成const props = defineProps(['title']) &lt;/script&gt; &lt;template&gt; \\t&lt;h4&gt;{{ title }}&lt;/h4&gt; &lt;/template&gt;","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/6%E5%89%8D%E7%AB%AF/3vue/4_4%E5%B1%9E%E6%80%A7%E4%BC%A0%E5%80%BCprops.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"props"}],["meta",{"property":"og:description","content":"props 通过子组件的属性进行传值 defineProps是一个仅&lt;script setup&gt;中可用的编译宏命令，并不需要显式地导入。defineProps会返回一个对象，其中包含了可以传递给组件的所有props： 父组件: &lt;BlogPost title=\\"My journey with Vue\\" /&gt; 子组件BlogPost.vue &lt;script setup&gt; \\tdefineProps(['title']) //直接暴露title, 也可以写成const props = defineProps(['title']) &lt;/script&gt; &lt;template&gt; \\t&lt;h4&gt;{{ title }}&lt;/h4&gt; &lt;/template&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"props\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.38,"words":114},"filePathRelative":"6前端/3vue/4_4属性传值props.md","localizedDate":"2025年2月21日","excerpt":"<h1> props</h1>\\n<p>通过子组件的属性进行传值</p>\\n<p><code>defineProps</code>是一个仅<code>&lt;script setup&gt;</code>中可用的编译宏命令，并不需要显式地导入。<code>defineProps</code>会返回一个对象，其中包含了可以传递给组件的所有<code>props</code>：</p>\\n<ol>\\n<li>\\n<p>父组件:</p>\\n<div class=\\"language-htm line-numbers-mode\\" data-ext=\\"htm\\"><pre class=\\"language-htm\\"><code>&lt;BlogPost title=\\"My journey with Vue\\" /&gt;\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>子组件<code>BlogPost.vue</code></p>\\n<div class=\\"language-htm line-numbers-mode\\" data-ext=\\"htm\\"><pre class=\\"language-htm\\"><code>&lt;script setup&gt;\\n\\tdefineProps(['title'])  //直接暴露title, 也可以写成const props = defineProps(['title'])\\n&lt;/script&gt;\\n\\n&lt;template&gt;\\n\\t&lt;h4&gt;{{ title }}&lt;/h4&gt;\\n&lt;/template&gt;\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ol>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{t as data};
