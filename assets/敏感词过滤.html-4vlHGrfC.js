const n=JSON.parse(`{"key":"v-8c21e00a","path":"/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/4_3%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86/%E6%95%8F%E6%84%9F%E8%AF%8D%E8%BF%87%E6%BB%A4.html","title":"index","lang":"zh-CN","frontmatter":{"description":"index 有效实现 import time time1 = time.time() ## DFA算法 class DFAFilter(object): def __init__(self): self.keyword_chains = {} # 关键词链表 self.delimit = '\\\\x00' # 限定 def parse(self, path): with open(path, encoding='utf-8') as f: for keyword in f: self.add(str(keyword).strip()) print(self.keyword_chains) def add(self, keyword): keyword = keyword.lower() # 关键词英文变为小写 chars = keyword.strip() # 关键字去除首尾空格和换行 if not chars: # 如果关键词为空直接返回 return level = self.keyword_chains for i in range(len(chars)): # 遍历关键字的每个字 if chars[i] in level: # 如果这个字符已经存在字符链的key中，则链表递进一步 level = level[chars[i]] else: # 如果字符不存在，则将剩余的字符做成一个链添加进来 for j in range(i, len(chars)): # 遍历剩余的字符 level[chars[j]] = {} # 创建该字符的节点 last_level, last_char = level, chars[j] # 每次循环都作为最后一个level，直至循环结束，就得到最终的level level = level[chars[j]] # 链表递进一位 last_level[last_char] = {self.delimit: 0} break if i == len(chars) - 1: # 如果是最后一位则 level[self.delimit] = 0 def filter(self, message, repl=\\"*\\"): message = message.lower() ret = [] start = 0 while start &lt; len(message): # 遍历输入的文本的字符， level = self.keyword_chains # 获得状态链 step_ins = 0 # 初始化状态连标记 for char in message[start:]: # 从输入文本字符的本次遍历第一个字符开始匹配 if char in level: # 如果字符在节点中 step_ins += 1 # 链节点前进一位 if self.delimit not in level[char]: # 如果该节点不是最终节点（非敏感词库中的完整的词） level = level[char] # 连接点前进一位，进入下一个循环 else: # 如果已经到了最后一个链节点 ret.append(repl * step_ins) # 替换为星号 start += step_ins - 1 # 整体也前进已经匹配的字符（-1是因为while循环本来就是近1位） break else: # 如果字符不在节点中 ret.append(message[start]) # 添加当前的字符 break start += 1 return ''.join(ret) if __name__ == \\"__main__\\": gfw = DFAFilter() path = \\"./sensitive.txt\\" gfw.parse(path) text = \\"abadc\\" result = gfw.filter(text) print(text) print(result) ## 来源 http://yiouejv.com/python/DFA%E6%95%8F%E6%84%9F%E8%AF%8D%E8%BF%87%E6%BB%A4%E7%AE%97%E6%B3%95%E7%9A%84python%E5%AE%9E%E7%8E%B0/","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/4_3%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86/%E6%95%8F%E6%84%9F%E8%AF%8D%E8%BF%87%E6%BB%A4.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"index"}],["meta",{"property":"og:description","content":"index 有效实现 import time time1 = time.time() ## DFA算法 class DFAFilter(object): def __init__(self): self.keyword_chains = {} # 关键词链表 self.delimit = '\\\\x00' # 限定 def parse(self, path): with open(path, encoding='utf-8') as f: for keyword in f: self.add(str(keyword).strip()) print(self.keyword_chains) def add(self, keyword): keyword = keyword.lower() # 关键词英文变为小写 chars = keyword.strip() # 关键字去除首尾空格和换行 if not chars: # 如果关键词为空直接返回 return level = self.keyword_chains for i in range(len(chars)): # 遍历关键字的每个字 if chars[i] in level: # 如果这个字符已经存在字符链的key中，则链表递进一步 level = level[chars[i]] else: # 如果字符不存在，则将剩余的字符做成一个链添加进来 for j in range(i, len(chars)): # 遍历剩余的字符 level[chars[j]] = {} # 创建该字符的节点 last_level, last_char = level, chars[j] # 每次循环都作为最后一个level，直至循环结束，就得到最终的level level = level[chars[j]] # 链表递进一位 last_level[last_char] = {self.delimit: 0} break if i == len(chars) - 1: # 如果是最后一位则 level[self.delimit] = 0 def filter(self, message, repl=\\"*\\"): message = message.lower() ret = [] start = 0 while start &lt; len(message): # 遍历输入的文本的字符， level = self.keyword_chains # 获得状态链 step_ins = 0 # 初始化状态连标记 for char in message[start:]: # 从输入文本字符的本次遍历第一个字符开始匹配 if char in level: # 如果字符在节点中 step_ins += 1 # 链节点前进一位 if self.delimit not in level[char]: # 如果该节点不是最终节点（非敏感词库中的完整的词） level = level[char] # 连接点前进一位，进入下一个循环 else: # 如果已经到了最后一个链节点 ret.append(repl * step_ins) # 替换为星号 start += step_ins - 1 # 整体也前进已经匹配的字符（-1是因为while循环本来就是近1位） break else: # 如果字符不在节点中 ret.append(message[start]) # 添加当前的字符 break start += 1 return ''.join(ret) if __name__ == \\"__main__\\": gfw = DFAFilter() path = \\"./sensitive.txt\\" gfw.parse(path) text = \\"abadc\\" result = gfw.filter(text) print(text) print(result) ## 来源 http://yiouejv.com/python/DFA%E6%95%8F%E6%84%9F%E8%AF%8D%E8%BF%87%E6%BB%A4%E7%AE%97%E6%B3%95%E7%9A%84python%E5%AE%9E%E7%8E%B0/"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-18T14:02:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-18T14:02:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"index\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-18T14:02:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"有效实现","slug":"有效实现","link":"#有效实现","children":[]},{"level":2,"title":"可参考","slug":"可参考","link":"#可参考","children":[]},{"level":2,"title":"问题代码1","slug":"问题代码1","link":"#问题代码1","children":[]},{"level":2,"title":"问题代码二","slug":"问题代码二","link":"#问题代码二","children":[{"level":3,"title":"问题代码三","slug":"问题代码三","link":"#问题代码三","children":[]}]}],"git":{"createdTime":1739887321000,"updatedTime":1739887321000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":5.9,"words":1771},"filePathRelative":"机器学习/4_3自然语言处理/自然语言处理/敏感词过滤.md","localizedDate":"2025年2月18日","excerpt":"<h1> index</h1>\\n<h2> 有效实现</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> time\\n\\ntime1 <span class=\\"token operator\\">=</span> time<span class=\\"token punctuation\\">.</span>time<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n\\n<span class=\\"token comment\\">## DFA算法</span>\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">DFAFilter</span><span class=\\"token punctuation\\">(</span><span class=\\"token builtin\\">object</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">__init__</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        self<span class=\\"token punctuation\\">.</span>keyword_chains <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>  <span class=\\"token comment\\"># 关键词链表</span>\\n        self<span class=\\"token punctuation\\">.</span>delimit <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'\\\\x00'</span>  <span class=\\"token comment\\"># 限定</span>\\n\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">parse</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">,</span> path<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token keyword\\">with</span> <span class=\\"token builtin\\">open</span><span class=\\"token punctuation\\">(</span>path<span class=\\"token punctuation\\">,</span> encoding<span class=\\"token operator\\">=</span><span class=\\"token string\\">'utf-8'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">as</span> f<span class=\\"token punctuation\\">:</span>\\n            <span class=\\"token keyword\\">for</span> keyword <span class=\\"token keyword\\">in</span> f<span class=\\"token punctuation\\">:</span>\\n                self<span class=\\"token punctuation\\">.</span>add<span class=\\"token punctuation\\">(</span><span class=\\"token builtin\\">str</span><span class=\\"token punctuation\\">(</span>keyword<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>strip<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">.</span>keyword_chains<span class=\\"token punctuation\\">)</span>\\n\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">,</span> keyword<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        keyword <span class=\\"token operator\\">=</span> keyword<span class=\\"token punctuation\\">.</span>lower<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 关键词英文变为小写</span>\\n        chars <span class=\\"token operator\\">=</span> keyword<span class=\\"token punctuation\\">.</span>strip<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 关键字去除首尾空格和换行</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token keyword\\">not</span> chars<span class=\\"token punctuation\\">:</span>  <span class=\\"token comment\\"># 如果关键词为空直接返回</span>\\n            <span class=\\"token keyword\\">return</span>\\n        level <span class=\\"token operator\\">=</span> self<span class=\\"token punctuation\\">.</span>keyword_chains\\n        <span class=\\"token keyword\\">for</span> i <span class=\\"token keyword\\">in</span> <span class=\\"token builtin\\">range</span><span class=\\"token punctuation\\">(</span><span class=\\"token builtin\\">len</span><span class=\\"token punctuation\\">(</span>chars<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>  <span class=\\"token comment\\"># 遍历关键字的每个字</span>\\n            <span class=\\"token keyword\\">if</span> chars<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span> <span class=\\"token keyword\\">in</span> level<span class=\\"token punctuation\\">:</span>  <span class=\\"token comment\\"># 如果这个字符已经存在字符链的key中，则链表递进一步</span>\\n                level <span class=\\"token operator\\">=</span> level<span class=\\"token punctuation\\">[</span>chars<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span>\\n            <span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">:</span>  <span class=\\"token comment\\"># 如果字符不存在，则将剩余的字符做成一个链添加进来</span>\\n                <span class=\\"token keyword\\">for</span> j <span class=\\"token keyword\\">in</span> <span class=\\"token builtin\\">range</span><span class=\\"token punctuation\\">(</span>i<span class=\\"token punctuation\\">,</span> <span class=\\"token builtin\\">len</span><span class=\\"token punctuation\\">(</span>chars<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>  <span class=\\"token comment\\"># 遍历剩余的字符</span>\\n                    level<span class=\\"token punctuation\\">[</span>chars<span class=\\"token punctuation\\">[</span>j<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>  <span class=\\"token comment\\"># 创建该字符的节点</span>\\n                    last_level<span class=\\"token punctuation\\">,</span> last_char <span class=\\"token operator\\">=</span> level<span class=\\"token punctuation\\">,</span> chars<span class=\\"token punctuation\\">[</span>j<span class=\\"token punctuation\\">]</span>  <span class=\\"token comment\\"># 每次循环都作为最后一个level，直至循环结束，就得到最终的level</span>\\n                    level <span class=\\"token operator\\">=</span> level<span class=\\"token punctuation\\">[</span>chars<span class=\\"token punctuation\\">[</span>j<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span>  <span class=\\"token comment\\"># 链表递进一位</span>\\n                last_level<span class=\\"token punctuation\\">[</span>last_char<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>self<span class=\\"token punctuation\\">.</span>delimit<span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">}</span>\\n                <span class=\\"token keyword\\">break</span>\\n        <span class=\\"token keyword\\">if</span> i <span class=\\"token operator\\">==</span> <span class=\\"token builtin\\">len</span><span class=\\"token punctuation\\">(</span>chars<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">:</span>  <span class=\\"token comment\\"># 如果是最后一位则</span>\\n            level<span class=\\"token punctuation\\">[</span>self<span class=\\"token punctuation\\">.</span>delimit<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span>\\n\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">filter</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">,</span> message<span class=\\"token punctuation\\">,</span> repl<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"*\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        message <span class=\\"token operator\\">=</span> message<span class=\\"token punctuation\\">.</span>lower<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n        ret <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span>\\n        start <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span>\\n        <span class=\\"token keyword\\">while</span> start <span class=\\"token operator\\">&lt;</span> <span class=\\"token builtin\\">len</span><span class=\\"token punctuation\\">(</span>message<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>  <span class=\\"token comment\\"># 遍历输入的文本的字符，</span>\\n            level <span class=\\"token operator\\">=</span> self<span class=\\"token punctuation\\">.</span>keyword_chains  <span class=\\"token comment\\"># 获得状态链</span>\\n            step_ins <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span>  <span class=\\"token comment\\"># 初始化状态连标记</span>\\n            <span class=\\"token keyword\\">for</span> char <span class=\\"token keyword\\">in</span> message<span class=\\"token punctuation\\">[</span>start<span class=\\"token punctuation\\">:</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">:</span>  <span class=\\"token comment\\"># 从输入文本字符的本次遍历第一个字符开始匹配</span>\\n                <span class=\\"token keyword\\">if</span> char <span class=\\"token keyword\\">in</span> level<span class=\\"token punctuation\\">:</span>  <span class=\\"token comment\\"># 如果字符在节点中</span>\\n                    step_ins <span class=\\"token operator\\">+=</span> <span class=\\"token number\\">1</span>  <span class=\\"token comment\\"># 链节点前进一位</span>\\n                    <span class=\\"token keyword\\">if</span> self<span class=\\"token punctuation\\">.</span>delimit <span class=\\"token keyword\\">not</span> <span class=\\"token keyword\\">in</span> level<span class=\\"token punctuation\\">[</span>char<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">:</span>  <span class=\\"token comment\\"># 如果该节点不是最终节点（非敏感词库中的完整的词）</span>\\n                        level <span class=\\"token operator\\">=</span> level<span class=\\"token punctuation\\">[</span>char<span class=\\"token punctuation\\">]</span>  <span class=\\"token comment\\"># 连接点前进一位，进入下一个循环</span>\\n                    <span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">:</span>  <span class=\\"token comment\\"># 如果已经到了最后一个链节点</span>\\n                        ret<span class=\\"token punctuation\\">.</span>append<span class=\\"token punctuation\\">(</span>repl <span class=\\"token operator\\">*</span> step_ins<span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 替换为星号</span>\\n                        start <span class=\\"token operator\\">+=</span> step_ins <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span>  <span class=\\"token comment\\"># 整体也前进已经匹配的字符（-1是因为while循环本来就是近1位）</span>\\n                        <span class=\\"token keyword\\">break</span>\\n                <span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">:</span>  <span class=\\"token comment\\"># 如果字符不在节点中</span>\\n                    ret<span class=\\"token punctuation\\">.</span>append<span class=\\"token punctuation\\">(</span>message<span class=\\"token punctuation\\">[</span>start<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 添加当前的字符</span>\\n                    <span class=\\"token keyword\\">break</span>\\n            start <span class=\\"token operator\\">+=</span> <span class=\\"token number\\">1</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token string\\">''</span><span class=\\"token punctuation\\">.</span>join<span class=\\"token punctuation\\">(</span>ret<span class=\\"token punctuation\\">)</span>\\n\\n\\n<span class=\\"token keyword\\">if</span> __name__ <span class=\\"token operator\\">==</span> <span class=\\"token string\\">\\"__main__\\"</span><span class=\\"token punctuation\\">:</span>\\n    gfw <span class=\\"token operator\\">=</span> DFAFilter<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n    path <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"./sensitive.txt\\"</span>\\n    gfw<span class=\\"token punctuation\\">.</span>parse<span class=\\"token punctuation\\">(</span>path<span class=\\"token punctuation\\">)</span>\\n    text <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"abadc\\"</span>\\n    result <span class=\\"token operator\\">=</span> gfw<span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">filter</span><span class=\\"token punctuation\\">(</span>text<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>text<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>result<span class=\\"token punctuation\\">)</span>\\n\\n\\n\\n<span class=\\"token comment\\">## 来源 http://yiouejv.com/python/DFA%E6%95%8F%E6%84%9F%E8%AF%8D%E8%BF%87%E6%BB%A4%E7%AE%97%E6%B3%95%E7%9A%84python%E5%AE%9E%E7%8E%B0/</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
