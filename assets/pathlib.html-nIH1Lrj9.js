const e=JSON.parse(`{"key":"v-2e6870a3","path":"/2%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/3python/8%E8%AF%BB%E5%86%99(io)/%E6%9C%AC%E5%9C%B0io/pathlib.html","title":"pathlib","lang":"zh-CN","frontmatter":{"description":"pathlib 创建Path对象 Path.home(), 用户路径 Path.cwd(), 当前工作目录(current work directory) Path(), 指定路径 在Windows中, 路径分隔符是\\\\, 但更多的场景里\\\\代表的是转义字符(escape character), 可以使用原始字符(raw string literals), 来规避这个问题, 如r\\"C:\\\\Users\\"等价于'C:\\\\\\\\Users' 另外使用joinpath也可以避免windows和linux路径处理的区别, 如Path.home().joinpath(\\"python\\"), 结果为PosixPath('/home/user/python) 还有一种方法是wave_absolute = Path(Path.home(), \\"ocean\\", \\"wave.txt\\") 最后还可以使用/运算符 Path.cwd() / \\"test.md\\"","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/3python/8%E8%AF%BB%E5%86%99(io)/%E6%9C%AC%E5%9C%B0io/pathlib.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"pathlib"}],["meta",{"property":"og:description","content":"pathlib 创建Path对象 Path.home(), 用户路径 Path.cwd(), 当前工作目录(current work directory) Path(), 指定路径 在Windows中, 路径分隔符是\\\\, 但更多的场景里\\\\代表的是转义字符(escape character), 可以使用原始字符(raw string literals), 来规避这个问题, 如r\\"C:\\\\Users\\"等价于'C:\\\\\\\\Users' 另外使用joinpath也可以避免windows和linux路径处理的区别, 如Path.home().joinpath(\\"python\\"), 结果为PosixPath('/home/user/python) 还有一种方法是wave_absolute = Path(Path.home(), \\"ocean\\", \\"wave.txt\\") 最后还可以使用/运算符 Path.cwd() / \\"test.md\\""}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"pathlib"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"pathlib\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"创建Path对象","slug":"创建path对象","link":"#创建path对象","children":[]},{"level":2,"title":"将Path对象转化为字符串","slug":"将path对象转化为字符串","link":"#将path对象转化为字符串","children":[]},{"level":2,"title":"获得Path对象的局部","slug":"获得path对象的局部","link":"#获得path对象的局部","children":[]},{"level":2,"title":"文件操作","slug":"文件操作","link":"#文件操作","children":[{"level":3,"title":"读写文件","slug":"读写文件","link":"#读写文件","children":[]},{"level":3,"title":"更改文件名称","slug":"更改文件名称","link":"#更改文件名称","children":[]},{"level":3,"title":"复制文件","slug":"复制文件","link":"#复制文件","children":[]},{"level":3,"title":"移动文件","slug":"移动文件","link":"#移动文件","children":[]},{"level":3,"title":"删除文件","slug":"删除文件","link":"#删除文件","children":[]},{"level":3,"title":"创建和删除路径","slug":"创建和删除路径","link":"#创建和删除路径","children":[]}]},{"level":2,"title":"迭代路径下的文件和目录","slug":"迭代路径下的文件和目录","link":"#迭代路径下的文件和目录","children":[]},{"level":2,"title":"判断路径是否存在","slug":"判断路径是否存在","link":"#判断路径是否存在","children":[]},{"level":2,"title":"判断路径类型(文件?目录?软连接)","slug":"判断路径类型-文件-目录-软连接","link":"#判断路径类型-文件-目录-软连接","children":[]},{"level":2,"title":"获得文件详细信息","slug":"获得文件详细信息","link":"#获得文件详细信息","children":[]},{"level":2,"title":"实践","slug":"实践","link":"#实践","children":[]},{"level":2,"title":"参考:","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":2.79,"words":838},"filePathRelative":"2编程语言/3python/8读写(io)/本地io/pathlib.md","localizedDate":"2025年2月21日","excerpt":"<h1> pathlib</h1>\\n<h2> 创建Path对象</h2>\\n<ul>\\n<li><code>Path.home()</code>, 用户路径</li>\\n<li><code>Path.cwd()</code>, 当前工作目录(current work directory)</li>\\n<li><code>Path()</code>, 指定路径\\n<blockquote>\\n<p>在Windows中, 路径分隔符是<code>\\\\</code>, 但更多的场景里<code>\\\\</code>代表的是转义字符(escape character), 可以使用原始字符(raw string literals), 来规避这个问题, 如<code>r\\"C:\\\\Users\\"</code>等价于<code>'C:\\\\\\\\Users'</code>\\n另外使用<code>joinpath</code>也可以避免windows和linux路径处理的区别, 如<code>Path.home().joinpath(\\"python\\")</code>, 结果为<code>PosixPath('/home/user/python)</code>\\n还有一种方法是<code>wave_absolute = Path(Path.home(), \\"ocean\\", \\"wave.txt\\")</code>\\n最后还可以使用<code>/</code>运算符 <code>Path.cwd() / \\"test.md\\"</code></p>\\n</blockquote>\\n</li>\\n</ul>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{e as data};
