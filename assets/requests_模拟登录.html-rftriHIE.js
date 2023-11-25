const n=JSON.parse('{"key":"v-cb384556","path":"/%E7%88%AC%E8%99%AB/requests/%E8%BA%AB%E4%BB%BD%E7%9B%B8%E5%85%B3/requests_%E6%A8%A1%E6%8B%9F%E7%99%BB%E5%BD%95.html","title":"模拟登录","lang":"zh-CN","frontmatter":{"description":"模拟登录 import requests from bs4 import BeautifulSoup url=\\"https://passport.csdn.net/account/login\\" # 登录页的网址 s = requests.Session() # 创建一个回话 response = s.get(url) # 获得登录页面 soup = BeautifulSoup(response.text) lt = soup.form.find(\\"input\\",{\\"name\\":\\"lt\\"})[\\"value\\"] # 获得隐藏字段 execution = soup.form.find(\\"input\\",{\\"name\\":\\"execution\\"})[\\"value\\"] # 获得隐藏字段 eventId = soup.form.find(\\"input\\",{\\"name\\":\\"_eventId\\"})[\\"value\\"] # 获得隐藏字段 headers = {\\"User-Agent\\": \\"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36\\"} values = { # 填写post信息 \\"username\\":\\"账号\\", \\"password\\":\\"密码\\", \\"lt\\":lt, \\"execution\\":execution, \\"_eventId\\":eventId } r = s.post(url, data = values, headers=headers) # 提交表单 url = \\"http://my.csdn.net/my/mycsdn\\" html=s.get(url,headers=headers) # 访问其他网页 print(html.text)","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%88%AC%E8%99%AB/requests/%E8%BA%AB%E4%BB%BD%E7%9B%B8%E5%85%B3/requests_%E6%A8%A1%E6%8B%9F%E7%99%BB%E5%BD%95.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"模拟登录"}],["meta",{"property":"og:description","content":"模拟登录 import requests from bs4 import BeautifulSoup url=\\"https://passport.csdn.net/account/login\\" # 登录页的网址 s = requests.Session() # 创建一个回话 response = s.get(url) # 获得登录页面 soup = BeautifulSoup(response.text) lt = soup.form.find(\\"input\\",{\\"name\\":\\"lt\\"})[\\"value\\"] # 获得隐藏字段 execution = soup.form.find(\\"input\\",{\\"name\\":\\"execution\\"})[\\"value\\"] # 获得隐藏字段 eventId = soup.form.find(\\"input\\",{\\"name\\":\\"_eventId\\"})[\\"value\\"] # 获得隐藏字段 headers = {\\"User-Agent\\": \\"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36\\"} values = { # 填写post信息 \\"username\\":\\"账号\\", \\"password\\":\\"密码\\", \\"lt\\":lt, \\"execution\\":execution, \\"_eventId\\":eventId } r = s.post(url, data = values, headers=headers) # 提交表单 url = \\"http://my.csdn.net/my/mycsdn\\" html=s.get(url,headers=headers) # 访问其他网页 print(html.text)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"模拟登录"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"模拟登录\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.5,"words":149},"filePathRelative":"爬虫/requests/身份相关/requests_模拟登录.md","localizedDate":"2023年11月25日","excerpt":"<h1> 模拟登录</h1>\\n<figure><figcaption></figcaption></figure>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> requests\\n<span class=\\"token keyword\\">from</span> bs4 <span class=\\"token keyword\\">import</span> BeautifulSoup\\nurl<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"https://passport.csdn.net/account/login\\"</span>  <span class=\\"token comment\\"># 登录页的网址</span>\\ns <span class=\\"token operator\\">=</span> requests<span class=\\"token punctuation\\">.</span>Session<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 创建一个回话</span>\\nresponse <span class=\\"token operator\\">=</span> s<span class=\\"token punctuation\\">.</span>get<span class=\\"token punctuation\\">(</span>url<span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 获得登录页面</span>\\nsoup <span class=\\"token operator\\">=</span> BeautifulSoup<span class=\\"token punctuation\\">(</span>response<span class=\\"token punctuation\\">.</span>text<span class=\\"token punctuation\\">)</span>\\nlt <span class=\\"token operator\\">=</span> soup<span class=\\"token punctuation\\">.</span>form<span class=\\"token punctuation\\">.</span>find<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"input\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token punctuation\\">{</span><span class=\\"token string\\">\\"name\\"</span><span class=\\"token punctuation\\">:</span><span class=\\"token string\\">\\"lt\\"</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"value\\"</span><span class=\\"token punctuation\\">]</span>  <span class=\\"token comment\\"># 获得隐藏字段</span>\\nexecution <span class=\\"token operator\\">=</span> soup<span class=\\"token punctuation\\">.</span>form<span class=\\"token punctuation\\">.</span>find<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"input\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token punctuation\\">{</span><span class=\\"token string\\">\\"name\\"</span><span class=\\"token punctuation\\">:</span><span class=\\"token string\\">\\"execution\\"</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"value\\"</span><span class=\\"token punctuation\\">]</span>  <span class=\\"token comment\\"># 获得隐藏字段</span>\\neventId <span class=\\"token operator\\">=</span> soup<span class=\\"token punctuation\\">.</span>form<span class=\\"token punctuation\\">.</span>find<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"input\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token punctuation\\">{</span><span class=\\"token string\\">\\"name\\"</span><span class=\\"token punctuation\\">:</span><span class=\\"token string\\">\\"_eventId\\"</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"value\\"</span><span class=\\"token punctuation\\">]</span>  <span class=\\"token comment\\"># 获得隐藏字段</span>\\nheaders <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token string\\">\\"User-Agent\\"</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\\"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36\\"</span><span class=\\"token punctuation\\">}</span>\\nvalues <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>  <span class=\\"token comment\\"># 填写post信息</span>\\n        <span class=\\"token string\\">\\"username\\"</span><span class=\\"token punctuation\\">:</span><span class=\\"token string\\">\\"账号\\"</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token string\\">\\"password\\"</span><span class=\\"token punctuation\\">:</span><span class=\\"token string\\">\\"密码\\"</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token string\\">\\"lt\\"</span><span class=\\"token punctuation\\">:</span>lt<span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token string\\">\\"execution\\"</span><span class=\\"token punctuation\\">:</span>execution<span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token string\\">\\"_eventId\\"</span><span class=\\"token punctuation\\">:</span>eventId\\n    <span class=\\"token punctuation\\">}</span>\\nr <span class=\\"token operator\\">=</span> s<span class=\\"token punctuation\\">.</span>post<span class=\\"token punctuation\\">(</span>url<span class=\\"token punctuation\\">,</span> data <span class=\\"token operator\\">=</span> values<span class=\\"token punctuation\\">,</span> headers<span class=\\"token operator\\">=</span>headers<span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 提交表单</span>\\nurl <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"http://my.csdn.net/my/mycsdn\\"</span>\\nhtml<span class=\\"token operator\\">=</span>s<span class=\\"token punctuation\\">.</span>get<span class=\\"token punctuation\\">(</span>url<span class=\\"token punctuation\\">,</span>headers<span class=\\"token operator\\">=</span>headers<span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 访问其他网页</span>\\n\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>html<span class=\\"token punctuation\\">.</span>text<span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
