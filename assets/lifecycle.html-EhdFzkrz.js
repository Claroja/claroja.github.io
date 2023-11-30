const e=JSON.parse('{"key":"v-0fca57de","path":"/%E5%89%8D%E7%AB%AF/vue/6%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/lifecycle.html","title":"lifecycle","lang":"zh-CN","frontmatter":{"description":"lifecycle 官方文档 组件的运行顺序是： 先顺序执行setup里面的代码。 遇到lifecycle 钩子函数，会注册其中的函数（注意，钩子函数中的函数此时并未执行，会在生命周期具体时间段调用）。 2. onBeforeMount：完成setup中的代码后，Dom tree创建之前 2. onMounted： 1. 所有子组件全部挂载完毕； 2. 它自己的Dom tree已经创建完成，且挂载到父组件主要用来获得dom中的元素，因为在setup中的代码运行时，Dom tree还没加载，无法获得。","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E5%89%8D%E7%AB%AF/vue/6%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/lifecycle.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"lifecycle"}],["meta",{"property":"og:description","content":"lifecycle 官方文档 组件的运行顺序是： 先顺序执行setup里面的代码。 遇到lifecycle 钩子函数，会注册其中的函数（注意，钩子函数中的函数此时并未执行，会在生命周期具体时间段调用）。 2. onBeforeMount：完成setup中的代码后，Dom tree创建之前 2. onMounted： 1. 所有子组件全部挂载完毕； 2. 它自己的Dom tree已经创建完成，且挂载到父组件主要用来获得dom中的元素，因为在setup中的代码运行时，Dom tree还没加载，无法获得。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-30T12:42:23.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-30T12:42:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"lifecycle\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-30T12:42:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"vue3-cli","slug":"vue3-cli","link":"#vue3-cli","children":[]},{"level":2,"title":"样例","slug":"样例","link":"#样例","children":[]}],"git":{"createdTime":1701348143000,"updatedTime":1701348143000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":2.21,"words":664},"filePathRelative":"前端/vue/6生命周期/lifecycle.md","localizedDate":"2023年11月30日","excerpt":"<h1> lifecycle</h1>\\n<p><a href=\\"https://vuejs.org/guide/essentials/lifecycle.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方文档</a></p>\\n<p>组件的运行顺序是：</p>\\n<ol>\\n<li>先顺序执行setup里面的代码。</li>\\n<li>遇到lifecycle 钩子函数，会注册其中的函数（注意，钩子函数中的函数此时并未执行，会在生命周期具体时间段调用）。\\n2. onBeforeMount：完成setup中的代码后，Dom tree创建之前\\n2. onMounted：\\n1. 所有子组件全部挂载完毕；\\n2. 它自己的Dom tree已经创建完成，且挂载到父组件主要用来获得dom中的元素，因为在setup中的代码运行时，Dom tree还没加载，无法获得。</li>\\n</ol>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
