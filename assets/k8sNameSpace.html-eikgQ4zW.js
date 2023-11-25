const e=JSON.parse('{"key":"v-649c4513","path":"/%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80/Docker/kebernetes/k8sNameSpace.html","title":"import","lang":"zh-CN","frontmatter":{"description":"import namespace 多租户情况下，实现资源隔离, 不同的namespace中的pod, 不能访问 可以针对每个namespace做资源配额 命令行控制 查看 kubectl get ns [NAME] 默认4个namespace default 用户创建的pod默认在此命名空间 kube-public 所有用户均可以访问，包括未认证用户 kube-node-lease node之间的心跳维护 v1.13加入 kube-system kubernetes集群在使用","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80/Docker/kebernetes/k8sNameSpace.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"import"}],["meta",{"property":"og:description","content":"import namespace 多租户情况下，实现资源隔离, 不同的namespace中的pod, 不能访问 可以针对每个namespace做资源配额 命令行控制 查看 kubectl get ns [NAME] 默认4个namespace default 用户创建的pod默认在此命名空间 kube-public 所有用户均可以访问，包括未认证用户 kube-node-lease node之间的心跳维护 v1.13加入 kube-system kubernetes集群在使用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"import\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"namespace","slug":"namespace","link":"#namespace","children":[{"level":3,"title":"命令行控制","slug":"命令行控制","link":"#命令行控制","children":[]},{"level":3,"title":"配置文件控制","slug":"配置文件控制","link":"#配置文件控制","children":[]}]}],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.46,"words":139},"filePathRelative":"编程基础/Docker/kebernetes/k8sNameSpace.md","localizedDate":"2023年11月25日","excerpt":"<h1> <strong>import</strong></h1>\\n<h2> namespace</h2>\\n<p>多租户情况下，实现资源隔离, 不同的namespace中的pod, 不能访问\\n可以针对每个namespace做资源配额</p>\\n<h3> 命令行控制</h3>\\n<ul>\\n<li>查看 <code>kubectl get ns [NAME]</code>\\n默认4个namespace</li>\\n</ul>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>default 用户创建的pod默认在此命名空间\\nkube-public 所有用户均可以访问，包括未认证用户\\nkube-node-lease node之间的心跳维护 v1.13加入\\nkube-system kubernetes集群在使用\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
