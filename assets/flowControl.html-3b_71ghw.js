const e=JSON.parse('{"key":"v-6a0ea6a4","path":"/%E5%89%8D%E7%AB%AF/javaScript/%E6%8E%A7%E5%88%B6%E6%B5%81/flowControl.html","title":"flowControl","lang":"zh-CN","frontmatter":{"description":"flowControl 条件语句的流程控制 条件语句只有在前面的条件判定为true时, 后面的才会继续执行判断. 这样的特性就可以用来实现\\"前面必须为真才执行后面\\"的逻辑.参考operator文章中的逻辑中断章节. true &amp;&amp; console.log(\\"hello\\") // hello, 前面半句是true, 所以console执行了 false &amp;&amp; console.log(\\"hello\\") // false, 前面的逻辑是false, 所以console没有执行 true &amp;&amp; false //false true &amp;&amp; false &amp;&amp; console.log(\\"hello\\") //false, 因为前面 true &amp;&amp; false的结果为false, 所以后面没有执行","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E5%89%8D%E7%AB%AF/javaScript/%E6%8E%A7%E5%88%B6%E6%B5%81/flowControl.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"flowControl"}],["meta",{"property":"og:description","content":"flowControl 条件语句的流程控制 条件语句只有在前面的条件判定为true时, 后面的才会继续执行判断. 这样的特性就可以用来实现\\"前面必须为真才执行后面\\"的逻辑.参考operator文章中的逻辑中断章节. true &amp;&amp; console.log(\\"hello\\") // hello, 前面半句是true, 所以console执行了 false &amp;&amp; console.log(\\"hello\\") // false, 前面的逻辑是false, 所以console没有执行 true &amp;&amp; false //false true &amp;&amp; false &amp;&amp; console.log(\\"hello\\") //false, 因为前面 true &amp;&amp; false的结果为false, 所以后面没有执行"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:17:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:17:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"flowControl\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-27T13:17:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"条件语句的流程控制","slug":"条件语句的流程控制","link":"#条件语句的流程控制","children":[]},{"level":2,"title":"if","slug":"if","link":"#if","children":[]},{"level":2,"title":"三元表达式","slug":"三元表达式","link":"#三元表达式","children":[]},{"level":2,"title":"switch","slug":"switch","link":"#switch","children":[]},{"level":2,"title":"for","slug":"for","link":"#for","children":[]},{"level":2,"title":"while","slug":"while","link":"#while","children":[]},{"level":2,"title":"continue","slug":"continue","link":"#continue","children":[]},{"level":2,"title":"break","slug":"break","link":"#break","children":[]}],"git":{"createdTime":1701091021000,"updatedTime":1701091021000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":3.06,"words":918},"filePathRelative":"前端/javaScript/控制流/flowControl.md","localizedDate":"2023年11月27日","excerpt":"<h1> flowControl</h1>\\n<h2> 条件语句的流程控制</h2>\\n<p>条件语句只有在前面的条件判定为true时, 后面的才会继续执行判断. 这样的特性就可以用来实现\\"前面必须为真才执行后面\\"的逻辑.参考operator文章中的逻辑中断章节.</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token boolean\\">true</span> <span class=\\"token operator\\">&amp;&amp;</span> console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"hello\\"</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// hello, 前面半句是true, 所以console执行了</span>\\n<span class=\\"token boolean\\">false</span> <span class=\\"token operator\\">&amp;&amp;</span> console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"hello\\"</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// false, 前面的逻辑是false, 所以console没有执行</span>\\n<span class=\\"token boolean\\">true</span> <span class=\\"token operator\\">&amp;&amp;</span> <span class=\\"token boolean\\">false</span> <span class=\\"token comment\\">//false</span>\\n<span class=\\"token boolean\\">true</span> <span class=\\"token operator\\">&amp;&amp;</span> <span class=\\"token boolean\\">false</span> <span class=\\"token operator\\">&amp;&amp;</span> console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"hello\\"</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">//false, 因为前面 true &amp;&amp; false的结果为false, 所以后面没有执行</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
