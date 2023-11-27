const n=JSON.parse(`{"key":"v-b8c0b28e","path":"/%E5%89%8D%E7%AB%AF/javaScript/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B/number.html","title":"number","lang":"zh-CN","frontmatter":{"description":"number Numbner类型 1.javascript只有数值型,不分整形和浮点型 var num = 10; // num 数字型 // 1. 八进制 0 ~ 7 我们程序里面数字前面加0 表示八进制 var num1 = 010; console.log(num1); // 010 八进制 转换为 10进制 就是 8 // 2. 十六进制 0 ~ 9 a ~ f #ffffff 数字的前面加 0x 表示十六进制 var num3 = 0x9; console.log(num3); // 3. 数字型的最大值 console.log(Number.MAX_VALUE); // 4. 数字型的最小值 console.log(Number.MIN_VALUE); // 5. 无穷大 console.log(Number.MAX_VALUE * 2); // Infinity 无穷大 // 6. 无穷小 console.log(-Number.MAX_VALUE * 2); // -Infinity 无穷大 // 7. isNaN() 这个方法用来判断非数字 并且返回一个值 如果是数字返回的是 false 如果不是数字返回的是true console.log(isNaN(12)); // false console.log(isNaN('12')); // true","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E5%89%8D%E7%AB%AF/javaScript/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B/number.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"number"}],["meta",{"property":"og:description","content":"number Numbner类型 1.javascript只有数值型,不分整形和浮点型 var num = 10; // num 数字型 // 1. 八进制 0 ~ 7 我们程序里面数字前面加0 表示八进制 var num1 = 010; console.log(num1); // 010 八进制 转换为 10进制 就是 8 // 2. 十六进制 0 ~ 9 a ~ f #ffffff 数字的前面加 0x 表示十六进制 var num3 = 0x9; console.log(num3); // 3. 数字型的最大值 console.log(Number.MAX_VALUE); // 4. 数字型的最小值 console.log(Number.MIN_VALUE); // 5. 无穷大 console.log(Number.MAX_VALUE * 2); // Infinity 无穷大 // 6. 无穷小 console.log(-Number.MAX_VALUE * 2); // -Infinity 无穷大 // 7. isNaN() 这个方法用来判断非数字 并且返回一个值 如果是数字返回的是 false 如果不是数字返回的是true console.log(isNaN(12)); // false console.log(isNaN('12')); // true"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:17:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:17:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"number\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-27T13:17:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Numbner类型","slug":"numbner类型","link":"#numbner类型","children":[]}],"git":{"createdTime":1701091021000,"updatedTime":1701091021000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.68,"words":204},"filePathRelative":"前端/javaScript/数据类型/number.md","localizedDate":"2023年11月27日","excerpt":"<h1> number</h1>\\n<h2> Numbner类型</h2>\\n<p>1.javascript只有数值型,不分整形和浮点型</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">var</span> num <span class=\\"token operator\\">=</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// num 数字型 </span>\\n<span class=\\"token comment\\">// 1. 八进制  0 ~ 7  我们程序里面数字前面加0 表示八进制</span>\\n<span class=\\"token keyword\\">var</span> num1 <span class=\\"token operator\\">=</span> <span class=\\"token number\\">010</span><span class=\\"token punctuation\\">;</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>num1<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">//  010  八进制 转换为 10进制 就是  8 </span>\\n<span class=\\"token comment\\">// 2. 十六进制  0 ~ 9  a ~ f    #ffffff  数字的前面加 0x 表示十六进制</span>\\n<span class=\\"token keyword\\">var</span> num3 <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0x9</span><span class=\\"token punctuation\\">;</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>num3<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// 3. 数字型的最大值</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>Number<span class=\\"token punctuation\\">.</span><span class=\\"token constant\\">MAX_VALUE</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// 4. 数字型的最小值</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>Number<span class=\\"token punctuation\\">.</span><span class=\\"token constant\\">MIN_VALUE</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// 5. 无穷大</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>Number<span class=\\"token punctuation\\">.</span><span class=\\"token constant\\">MAX_VALUE</span> <span class=\\"token operator\\">*</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// Infinity 无穷大  </span>\\n<span class=\\"token comment\\">// 6. 无穷小</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">-</span>Number<span class=\\"token punctuation\\">.</span><span class=\\"token constant\\">MAX_VALUE</span> <span class=\\"token operator\\">*</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// -Infinity 无穷大</span>\\n\\n<span class=\\"token comment\\">// 7. isNaN() 这个方法用来判断非数字   并且返回一个值 如果是数字返回的是 false 如果不是数字返回的是true</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">isNaN</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">12</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// false</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">isNaN</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'12'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// true</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
