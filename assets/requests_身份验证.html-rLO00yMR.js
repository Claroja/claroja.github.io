const t=JSON.parse(`{"key":"v-0af22953","path":"/%E7%88%AC%E8%99%AB/requests/%E8%BA%AB%E4%BB%BD%E7%9B%B8%E5%85%B3/requests_%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81.html","title":"身份验证","lang":"zh-CN","frontmatter":{"description":"身份验证 form 后端 @app.route('/post', methods = ['GET','POST']) def post(): method=request.method key1=request.form[\\"post-key1\\"] key2=request.form[\\"post-key2\\"] return \\"%s&lt;br&gt;%s&lt;br&gt;%s&lt;br&gt;%s&lt;br&gt;%s\\"%(method, key1, key2,)","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%88%AC%E8%99%AB/requests/%E8%BA%AB%E4%BB%BD%E7%9B%B8%E5%85%B3/requests_%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"身份验证"}],["meta",{"property":"og:description","content":"身份验证 form 后端 @app.route('/post', methods = ['GET','POST']) def post(): method=request.method key1=request.form[\\"post-key1\\"] key2=request.form[\\"post-key2\\"] return \\"%s&lt;br&gt;%s&lt;br&gt;%s&lt;br&gt;%s&lt;br&gt;%s\\"%(method, key1, key2,)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"身份验证\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"form","slug":"form","link":"#form","children":[{"level":3,"title":"后端","slug":"后端","link":"#后端","children":[]},{"level":3,"title":"前端","slug":"前端","link":"#前端","children":[]},{"level":3,"title":"requests","slug":"requests","link":"#requests","children":[]}]},{"level":2,"title":"json","slug":"json","link":"#json","children":[{"level":3,"title":"后端","slug":"后端-1","link":"#后端-1","children":[]},{"level":3,"title":"前端","slug":"前端-1","link":"#前端-1","children":[]},{"level":3,"title":"requests","slug":"requests-1","link":"#requests-1","children":[]}]},{"level":2,"title":"HTTPBasicAuth","slug":"httpbasicauth","link":"#httpbasicauth","children":[{"level":3,"title":"后端","slug":"后端-2","link":"#后端-2","children":[]},{"level":3,"title":"前端","slug":"前端-2","link":"#前端-2","children":[]},{"level":3,"title":"requests","slug":"requests-2","link":"#requests-2","children":[]}]},{"level":2,"title":"HTTPDigestAuth","slug":"httpdigestauth","link":"#httpdigestauth","children":[{"level":3,"title":"后端","slug":"后端-3","link":"#后端-3","children":[]},{"level":3,"title":"前端","slug":"前端-3","link":"#前端-3","children":[]},{"level":3,"title":"requests","slug":"requests-3","link":"#requests-3","children":[]}]},{"level":2,"title":"HTTPTokenAuth","slug":"httptokenauth","link":"#httptokenauth","children":[{"level":3,"title":"后端","slug":"后端-4","link":"#后端-4","children":[]},{"level":3,"title":"前端","slug":"前端-4","link":"#前端-4","children":[]},{"level":3,"title":"requests","slug":"requests-4","link":"#requests-4","children":[]}]}],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":2.22,"words":665},"filePathRelative":"爬虫/requests/身份相关/requests_身份验证.md","localizedDate":"2023年11月25日","excerpt":"<h1> 身份验证</h1>\\n<h2> form</h2>\\n<h3> 后端</h3>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token decorator annotation punctuation\\">@app<span class=\\"token punctuation\\">.</span>route</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'/post'</span><span class=\\"token punctuation\\">,</span> methods <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'GET'</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">'POST'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">post</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    method<span class=\\"token operator\\">=</span>request<span class=\\"token punctuation\\">.</span>method\\n    key1<span class=\\"token operator\\">=</span>request<span class=\\"token punctuation\\">.</span>form<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"post-key1\\"</span><span class=\\"token punctuation\\">]</span>\\n    key2<span class=\\"token operator\\">=</span>request<span class=\\"token punctuation\\">.</span>form<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"post-key2\\"</span><span class=\\"token punctuation\\">]</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token string\\">\\"%s&lt;br&gt;%s&lt;br&gt;%s&lt;br&gt;%s&lt;br&gt;%s\\"</span><span class=\\"token operator\\">%</span><span class=\\"token punctuation\\">(</span>method<span class=\\"token punctuation\\">,</span> key1<span class=\\"token punctuation\\">,</span> key2<span class=\\"token punctuation\\">,</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{t as data};
