const t=JSON.parse('{"key":"v-ff67c830","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/io/poll.html","title":"poll","lang":"zh-CN","frontmatter":{"description":"poll 本质上和select没有区别,只是没了最大文件描述符的限制 方法 描述 select.poll() 返回poll对象,用来注册文件描述符和事件 poll.register(fd[, eventmask]) fd是整数,可以是fileno()方法返回;eventmask:事件类型 poll.modify(fd, eventmask) 更新注册信息 poll.unregister(fd) 注销fd poll.poll([timeout]) 检测注册后的fd,返回[(fd,event),()...];如果返回空说明超时,且没有事件发生,否则阻塞","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/io/poll.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"poll"}],["meta",{"property":"og:description","content":"poll 本质上和select没有区别,只是没了最大文件描述符的限制 方法 描述 select.poll() 返回poll对象,用来注册文件描述符和事件 poll.register(fd[, eventmask]) fd是整数,可以是fileno()方法返回;eventmask:事件类型 poll.modify(fd, eventmask) 更新注册信息 poll.unregister(fd) 注销fd poll.poll([timeout]) 检测注册后的fd,返回[(fd,event),()...];如果返回空说明超时,且没有事件发生,否则阻塞"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:17:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:17:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"poll\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-27T13:17:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1701091021000,"updatedTime":1701091021000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.34,"words":401},"filePathRelative":"编程语言/python/io/poll.md","localizedDate":"2023年11月27日","excerpt":"<h1> poll</h1>\\n<p>本质上和select没有区别,只是没了最大文件描述符的限制</p>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>描述</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>select.poll()</td>\\n<td>返回poll对象,用来注册文件描述符和事件</td>\\n</tr>\\n<tr>\\n<td>poll.register(fd[, eventmask])</td>\\n<td>fd是整数,可以是fileno()方法返回;eventmask:事件类型</td>\\n</tr>\\n<tr>\\n<td>poll.modify(fd, eventmask)</td>\\n<td>更新注册信息</td>\\n</tr>\\n<tr>\\n<td>poll.unregister(fd)</td>\\n<td>注销fd</td>\\n</tr>\\n<tr>\\n<td>poll.poll([timeout])</td>\\n<td>检测注册后的fd,返回[(fd,event),()...];如果返回空说明超时,且没有事件发生,否则阻塞</td>\\n</tr>\\n</tbody>\\n</table>","copyright":{"author":"王新宇"},"autoDesc":true}');export{t as data};
