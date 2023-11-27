const n=JSON.parse(`{"key":"v-709dde12","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/coroutines/log.html","title":"log","lang":"zh-CN","frontmatter":{"description":"log logging logging是日志的入口.有两种用法: 简单使用, 直接通过logging来管理日志输出 logging中的快捷配置方法, 自动创建Logger类, 适用于单文件, 简单的项目. 参数 描述 filename 指定输出的文件名, 设置后日志信息就不会被输出到控制台了 filemod 输出文件的打开方式, 默认为a, 只有在filename指定时生效 format 日志输出时格式及包含的信息 datefmt 日期和事件的格式, 在format中指定%(asctime)s时才生效 level 指定日志的级别 stream 指定日志输出的流目的地, 比如sys.stdout,sys.stderr,网络stream. 不能和filename共存, 报错 handler 多个Handler的可迭代对象, 将会被添加到rootlogger.filename, stream和handlers只能允许一个存在 LOG_FORMAT = \\"%(asctime)s - %(levelname)s - %(message)s\\" DATE_FORMAT = \\"%m/%d/%Y %H:%M:%S %p\\" logging.basicConfig(filename='my.log', level=logging.DEBUG, format=LOG_FORMAT, datefmt=DATE_FORMAT) logging.debug(\\"This is a debug log.\\") logging.info(\\"This is a info log.\\") logging.warning(\\"This is a warning log.\\") logging.error(\\"This is a error log.\\") logging.critical(\\"This is a critical log.\\") 使用组件进行细致化的配置 组件 描述 Logger 一个日志对象, 在Logger对象中输出具体信息message Handler 控制Logger日志输出的目的地, 一个Logger可以有多个Handler, 分别输出到不同的地方 Formatter 控制Handler输出信息的格式, 比如asctime(时间) Filter 过滤不需要的日志信息","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/coroutines/log.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"log"}],["meta",{"property":"og:description","content":"log logging logging是日志的入口.有两种用法: 简单使用, 直接通过logging来管理日志输出 logging中的快捷配置方法, 自动创建Logger类, 适用于单文件, 简单的项目. 参数 描述 filename 指定输出的文件名, 设置后日志信息就不会被输出到控制台了 filemod 输出文件的打开方式, 默认为a, 只有在filename指定时生效 format 日志输出时格式及包含的信息 datefmt 日期和事件的格式, 在format中指定%(asctime)s时才生效 level 指定日志的级别 stream 指定日志输出的流目的地, 比如sys.stdout,sys.stderr,网络stream. 不能和filename共存, 报错 handler 多个Handler的可迭代对象, 将会被添加到rootlogger.filename, stream和handlers只能允许一个存在 LOG_FORMAT = \\"%(asctime)s - %(levelname)s - %(message)s\\" DATE_FORMAT = \\"%m/%d/%Y %H:%M:%S %p\\" logging.basicConfig(filename='my.log', level=logging.DEBUG, format=LOG_FORMAT, datefmt=DATE_FORMAT) logging.debug(\\"This is a debug log.\\") logging.info(\\"This is a info log.\\") logging.warning(\\"This is a warning log.\\") logging.error(\\"This is a error log.\\") logging.critical(\\"This is a critical log.\\") 使用组件进行细致化的配置 组件 描述 Logger 一个日志对象, 在Logger对象中输出具体信息message Handler 控制Logger日志输出的目的地, 一个Logger可以有多个Handler, 分别输出到不同的地方 Formatter 控制Handler输出信息的格式, 比如asctime(时间) Filter 过滤不需要的日志信息"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:17:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:17:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"log\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-27T13:17:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"logging","slug":"logging","link":"#logging","children":[]},{"level":2,"title":"组件-Logger","slug":"组件-logger","link":"#组件-logger","children":[{"level":3,"title":"方法","slug":"方法","link":"#方法","children":[]},{"level":3,"title":"继承关系","slug":"继承关系","link":"#继承关系","children":[]}]},{"level":2,"title":"组件-handler","slug":"组件-handler","link":"#组件-handler","children":[{"level":3,"title":"方法","slug":"方法-1","link":"#方法-1","children":[]},{"level":3,"title":"hander分类","slug":"hander分类","link":"#hander分类","children":[]}]},{"level":2,"title":"组件-formatter","slug":"组件-formatter","link":"#组件-formatter","children":[]},{"level":2,"title":"组件-filter","slug":"组件-filter","link":"#组件-filter","children":[]},{"level":2,"title":"level","slug":"level","link":"#level","children":[]},{"level":2,"title":"record","slug":"record","link":"#record","children":[]},{"level":2,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[{"level":3,"title":"通过配置文件","slug":"通过配置文件","link":"#通过配置文件","children":[]},{"level":3,"title":"直接配置","slug":"直接配置","link":"#直接配置","children":[]}]},{"level":2,"title":"自己的常用配置","slug":"自己的常用配置","link":"#自己的常用配置","children":[]}],"git":{"createdTime":1701091021000,"updatedTime":1701091021000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":8.74,"words":2623},"filePathRelative":"编程语言/python/coroutines/log.md","localizedDate":"2023年11月27日","excerpt":"<h1> log</h1>\\n<h2> <a href=\\"https://docs.python.org/3.10/library/logging.html#module-level-functions\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">logging</a></h2>\\n<p><code>logging</code>是日志的入口.有两种用法:</p>\\n<ol>\\n<li>\\n<p>简单使用, 直接通过<code>logging</code>来管理日志输出</p>\\n<p>logging中的快捷配置方法, 自动创建Logger类, 适用于单文件, 简单的项目.</p>\\n<table>\\n<thead>\\n<tr>\\n<th>参数</th>\\n<th>描述</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>filename</td>\\n<td>指定输出的文件名, 设置后日志信息就不会被输出到控制台了</td>\\n</tr>\\n<tr>\\n<td>filemod</td>\\n<td>输出文件的打开方式, 默认为<code>a</code>, 只有在<code>filename</code>指定时生效</td>\\n</tr>\\n<tr>\\n<td>format</td>\\n<td>日志输出时格式及包含的信息</td>\\n</tr>\\n<tr>\\n<td>datefmt</td>\\n<td>日期和事件的格式, 在<code>format</code>中指定<code>%(asctime)s</code>时才生效</td>\\n</tr>\\n<tr>\\n<td>level</td>\\n<td>指定日志的级别</td>\\n</tr>\\n<tr>\\n<td>stream</td>\\n<td>指定日志输出的流目的地, 比如sys.stdout,sys.stderr,网络stream. 不能和filename共存, 报错</td>\\n</tr>\\n<tr>\\n<td>handler</td>\\n<td>多个Handler的可迭代对象, 将会被添加到rootlogger.filename, stream和handlers只能允许一个存在</td>\\n</tr>\\n</tbody>\\n</table>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>LOG_FORMAT <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"%(asctime)s - %(levelname)s - %(message)s\\"</span>\\nDATE_FORMAT <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"%m/%d/%Y %H:%M:%S %p\\"</span>\\nlogging<span class=\\"token punctuation\\">.</span>basicConfig<span class=\\"token punctuation\\">(</span>filename<span class=\\"token operator\\">=</span><span class=\\"token string\\">'my.log'</span><span class=\\"token punctuation\\">,</span> level<span class=\\"token operator\\">=</span>logging<span class=\\"token punctuation\\">.</span>DEBUG<span class=\\"token punctuation\\">,</span> <span class=\\"token builtin\\">format</span><span class=\\"token operator\\">=</span>LOG_FORMAT<span class=\\"token punctuation\\">,</span> datefmt<span class=\\"token operator\\">=</span>DATE_FORMAT<span class=\\"token punctuation\\">)</span>\\nlogging<span class=\\"token punctuation\\">.</span>debug<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"This is a debug log.\\"</span><span class=\\"token punctuation\\">)</span>\\nlogging<span class=\\"token punctuation\\">.</span>info<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"This is a info log.\\"</span><span class=\\"token punctuation\\">)</span>\\nlogging<span class=\\"token punctuation\\">.</span>warning<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"This is a warning log.\\"</span><span class=\\"token punctuation\\">)</span>\\nlogging<span class=\\"token punctuation\\">.</span>error<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"This is a error log.\\"</span><span class=\\"token punctuation\\">)</span>\\nlogging<span class=\\"token punctuation\\">.</span>critical<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"This is a critical log.\\"</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>使用组件进行细致化的配置</p>\\n<table>\\n<thead>\\n<tr>\\n<th>组件</th>\\n<th>描述</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>Logger</td>\\n<td>一个日志对象, 在Logger对象中输出具体信息<code>message</code></td>\\n</tr>\\n<tr>\\n<td>Handler</td>\\n<td>控制Logger日志输出的目的地, 一个Logger可以有多个Handler, 分别输出到不同的地方</td>\\n</tr>\\n<tr>\\n<td>Formatter</td>\\n<td>控制Handler输出信息的格式, 比如<code>asctime</code>(时间)</td>\\n</tr>\\n<tr>\\n<td>Filter</td>\\n<td>过滤不需要的日志信息</td>\\n</tr>\\n</tbody>\\n</table>\\n</li>\\n</ol>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
