import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,a as s}from"./app-9tftCahk.js";const i={},a=s(`<h1 id="split" tabindex="-1"><a class="header-anchor" href="#split" aria-hidden="true">#</a> split</h1><p>在<code>chrome</code>中可以直接复制<code>xpath</code>, 基本所有解析的包都支持<code>xpath</code></p><h2 id="_1-概念" tabindex="-1"><a class="header-anchor" href="#_1-概念" aria-hidden="true">#</a> 1.概念</h2><p>1）路径选择语法 1.斜杠 从根节点找<code>/</code>： /html/head # 在根节点查询，只有绝对路径的body返回 在所有节点找<code>//</code>: //head/title/text() # 在当前路径查询head，所有子节点都会返回，这里就不需要指定html了</p><p>2.点 相对位置<code>.</code>和<code>..</code>： //body/.. # 先找到body再跳回html</p><p>3.<code>@</code>属性和 永远在末尾获得属性和文本</p><p>//head/link/@href #去link标签的href属性 4.<code>text()</code>文本 永远在末尾获得属性和文本 //head/title/text() # 取文本内容</p><p>2）节点修饰语法 1.通过索引修饰 /html/body/div[3] #选中第3个div,div[last()-1]表示选中最后一个；div[position(start,end)]区间选择 2.通过属性值修饰 /html/body/div[@id=&quot;wang&quot;]</p><p>3.通过子节点修饰 span[i&gt;200] # 获得所有span自己元素i的值大于200的span标签 4.包含 //div[contains(@id,&quot;wa&quot;)] # 只要属性部分包含&quot;wa&quot;即可 //div[contains(text(),&quot;wa&quot;)] # 只要内容部分包含&quot;wa&quot;即可</p><p>3）通配 //*[@id=&quot;wang] # 通配所有符合属性的标签</p><p>4）逻辑判断 //td/a|//h2/a # 或 //td/a 或 //h2/a</p><h2 id="_2-应用" tabindex="-1"><a class="header-anchor" href="#_2-应用" aria-hidden="true">#</a> 2.应用</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token comment">#coding:utf-8</span>
<span class="token keyword">from</span> lxml <span class="token keyword">import</span> etree

text <span class="token operator">=</span> <span class="token triple-quoted-string string">&#39;&#39;&#39; 
&lt;div&gt; 
    &lt;ul&gt; 
        &lt;li class=&quot;item-1&quot;&gt;
            &lt;a href=&quot;link1.html&quot;&gt;first item&lt;/a&gt;
        &lt;/li&gt; 
        &lt;li class=&quot;item-1&quot;&gt;
            &lt;a href=&quot;link2.html&quot;&gt;second item&lt;/a&gt;
        &lt;/li&gt; 
        &lt;li class=&quot;item-inactive&quot;&gt;
            &lt;a href=&quot;link3.html&quot;&gt;third item&lt;/a&gt;
        &lt;/li&gt; 
        &lt;li class=&quot;item-1&quot;&gt;
            &lt;a href=&quot;link4.html&quot;&gt;fourth item&lt;/a&gt;
        &lt;/li&gt; 
        &lt;li class=&quot;item-0&quot;&gt;
            &lt;a href=&quot;link5.html&quot;&gt;fifth item&lt;/a&gt; 
    &lt;/ul&gt; 
&lt;/div&gt; &#39;&#39;&#39;</span>

<span class="token comment">## 将html源码创建成element对象</span>

html <span class="token operator">=</span> etree<span class="token punctuation">.</span>HTML<span class="token punctuation">(</span>text<span class="token punctuation">)</span>

<span class="token comment">## etree.HTML()能够自动补全html缺失的标签</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>etree<span class="token punctuation">.</span>tostring<span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## print(html)</span>
<span class="token comment">## print(dir(html))</span>

<span class="token comment">## print(html.xpath(&#39;//li[1]/a/text()&#39;))</span>
<span class="token comment">## print(html.xpath(&#39;//li[1]/a/@href&#39;))</span>

<span class="token comment">## text_list = html.xpath(&#39;//a/text()&#39;)</span>
<span class="token comment">## link_list = html.xpath(&#39;//a/@href&#39;)</span>
<span class="token comment">## print(text_list)</span>
<span class="token comment">## print(link_list)</span>
<span class="token comment">#</span>
<span class="token comment">## for text,link in zip(text_list, link_list):</span>
<span class="token comment">##     print(text,link)</span>

<span class="token comment">## el_list = html.xpath(&#39;//a&#39;)</span>
<span class="token comment">#</span>
<span class="token comment">## for el in el_list:</span>
<span class="token comment">##     # print(el.xpath(&#39;//text()&#39;)[0], el.xpath(&#39;//@href&#39;)[0])</span>
<span class="token comment">##     print(el.xpath(&#39;./text()&#39;)[0], el.xpath(&#39;./@href&#39;)[0])</span>
<span class="token comment">##     print(el.xpath(&#39;.//text()&#39;)[0], el.xpath(&#39;.//@href&#39;)[0])</span>
<span class="token comment">##     # print(el.xpath(&#39;text()&#39;)[0], el.xpath(&#39;@href&#39;)[0])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-api" tabindex="-1"><a class="header-anchor" href="#_3-api" aria-hidden="true">#</a> 3.API</h2><p>XPath (XML Path Language) 是一门在 XML 文档中查找信息的语言，可用来在 XML 文档中对元素和属性进行遍历。 路径表达式</p><table><thead><tr><th>表达式</th><th>描述</th><th>示例</th><th>描述</th></tr></thead><tbody><tr><td>tag</td><td>选取此节点所有子节点</td><td>div</td><td>选取div元素所有子节点</td></tr><tr><td>/</td><td>绝对路径,从根节点选取</td><td>/div</td><td>选取根节点下的div元素</td></tr><tr><td>//</td><td>相对路径,全局匹配</td><td>//div</td><td>选取页面所有div元素</td></tr><tr><td>.</td><td>选取当前节点</td><td></td><td></td></tr><tr><td>..</td><td>选取当前节点的父节点</td><td></td><td></td></tr><tr><td>@</td><td>选取属性</td><td>//div/@class</td><td>提取所有div元素的class属性</td></tr></tbody></table><p>谓语 用来查找特定的节点</p><table><thead><tr><th>表达式</th><th>描述</th></tr></thead><tbody><tr><td>//div[1]</td><td>选取第一个div元素</td></tr><tr><td>//div[last()]</td><td>选取最后一个div元素</td></tr><tr><td>//div[last()-1]</td><td>选取倒数第二个div元素</td></tr><tr><td>//div[position()❤️]</td><td>选取前2个div元素</td></tr><tr><td>//div[@class]</td><td>选取具有class属性的div</td></tr><tr><td>//div[@class=&#39;title&#39;]</td><td>选取所有具有class=title属性的div元素</td></tr><tr><td>//div/[strong&gt;35]</td><td>选取div元素里strong元素大于35的div元素</td></tr></tbody></table>`,18),d=[a];function l(c,o){return n(),e("div",null,d)}const v=t(i,[["render",l],["__file","xpath.html.vue"]]);export{v as default};
