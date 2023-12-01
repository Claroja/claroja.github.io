import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-MTzDpLgJ.js";const e={},p=t(`<h1 id="response" tabindex="-1"><a class="header-anchor" href="#response" aria-hidden="true">#</a> response</h1><h2 id="text文本数据" tabindex="-1"><a class="header-anchor" href="#text文本数据" aria-hidden="true">#</a> text文本数据</h2><h3 id="后端" tabindex="-1"><a class="header-anchor" href="#后端" aria-hidden="true">#</a> 后端</h3><p><code>render_template</code>本质是返回字符串,会自动设置Content-Type: text/html 1.标准写法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	rsp <span class="token operator">=</span> make_response<span class="token punctuation">(</span>render_template<span class="token punctuation">(</span><span class="token string">&quot;test.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 会自动设置Content-Type: text/html; charset=utf-8</span>
    <span class="token keyword">return</span> rsp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.简单写法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> render_template<span class="token punctuation">(</span><span class="token string">&#39;test.html&#39;</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前端" tabindex="-1"><a class="header-anchor" href="#前端" aria-hidden="true">#</a> 前端</h3><p>直接渲染</p><h3 id="requests" tabindex="-1"><a class="header-anchor" href="#requests" aria-hidden="true">#</a> requests</h3><p>1.response.text自动解码服务器返回的内容</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests
r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;https://127.0.0.1/&#39;</span><span class="token punctuation">)</span>
r<span class="token punctuation">.</span>text 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认使用<code>r.encoding</code>=<code>utf8</code>,可以更改为<code>r.encoding = &#39;ISO-8859-1&#39;</code>,更改后,每次访问<code>.text</code>就直接使用该编码</p><p>2.response.content获得字节<code>.text</code>就是根据<code>.content</code>解码出来的</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests
r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;https://127.0.0.1/&#39;</span><span class="token punctuation">)</span>
r<span class="token punctuation">.</span>content <span class="token comment"># b&#39;[{&quot;repository&quot;:{&quot;open_issues&quot;:0,&quot;url&quot;:&quot;https://github.com/...</span>
r<span class="token punctuation">.</span>content<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> json</h2><h3 id="后端-1" tabindex="-1"><a class="header-anchor" href="#后端-1" aria-hidden="true">#</a> 后端</h3><p>会自动设置<code>Content-Type</code>:</p><p>1.标准写法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    dic <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;wang&quot;</span><span class="token punctuation">}</span>
    rsp <span class="token operator">=</span> make_response<span class="token punctuation">(</span>jsonify<span class="token punctuation">(</span>dic<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># 会自动设置Content-Type: application/json</span>
    <span class="token keyword">return</span> rsp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.简单写法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    dic <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;wang&quot;</span><span class="token punctuation">}</span>
    <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span>dic<span class="token punctuation">)</span> <span class="token comment"># 会自动设置Content-Type: application/json</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前端-1" tabindex="-1"><a class="header-anchor" href="#前端-1" aria-hidden="true">#</a> 前端</h3><p>没有响应操作，直接查看</p><h3 id="requests-1" tabindex="-1"><a class="header-anchor" href="#requests-1" aria-hidden="true">#</a> requests</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests
r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;https://api.github.com/events&#39;</span><span class="token punctuation">)</span>
r<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## json.load(r.text) # 和上面的等价</span>
<span class="token comment">## json.load(r.content.decode(&#39;utf-8&#39;) # 和上面的等价</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h2><h3 id="后端-2" tabindex="-1"><a class="header-anchor" href="#后端-2" aria-hidden="true">#</a> 后端</h3><p>可参考<code>img</code>标签的三种展示方式</p><p>1)标准写法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&lt;img_id&gt;&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">capt</span><span class="token punctuation">(</span>img_id<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 生成图片验证码</span>
    text<span class="token punctuation">,</span> image <span class="token operator">=</span> captcha<span class="token punctuation">.</span>generate_captcha<span class="token punctuation">(</span><span class="token punctuation">)</span>
    rsp <span class="token operator">=</span> make_response<span class="token punctuation">(</span>image<span class="token punctuation">)</span>
    rsp<span class="token punctuation">.</span>mimetype <span class="token operator">=</span> <span class="token string">&#39;image/jpg&#39;</span>
    <span class="token keyword">return</span> rsp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1)简单写法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&lt;img_id&gt;&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">capt</span><span class="token punctuation">(</span>img_id<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 生成图片验证码</span>
    text<span class="token punctuation">,</span> image <span class="token operator">=</span> captcha<span class="token punctuation">.</span>generate_captcha<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># image是图片二进制文件</span>
    <span class="token keyword">return</span> image <span class="token punctuation">{</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;image/png; charset=utf-8&#39;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前端-2" tabindex="-1"><a class="header-anchor" href="#前端-2" aria-hidden="true">#</a> 前端</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ img_id }}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>图形验证码<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pic_code<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="requests-2" tabindex="-1"><a class="header-anchor" href="#requests-2" aria-hidden="true">#</a> requests</h3><ol><li>content二进制直接保存</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;https://127.0.0.1&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> fd<span class="token punctuation">:</span>
        fd<span class="token punctuation">.</span>write<span class="token punctuation">(</span>r<span class="token punctuation">.</span>content<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>raw+stream流分片保存</li></ol><p>response.raw获得字节(和content相似,应该是将ascii码也用十六进制表示的意思),原始套接字,要打开stream参数</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;https://127.0.0.1&#39;</span><span class="token punctuation">,</span> stream<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
r<span class="token punctuation">.</span>raw
r<span class="token punctuation">.</span>raw<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般使用以下形式保存</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> fd<span class="token punctuation">:</span>
    <span class="token keyword">for</span> chunk <span class="token keyword">in</span> r<span class="token punctuation">.</span>iter_content<span class="token punctuation">(</span>chunk_size<span class="token operator">=</span><span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        fd<span class="token punctuation">.</span>write<span class="token punctuation">(</span>chunk<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="前端图片展示" tabindex="-1"><a class="header-anchor" href="#前端图片展示" aria-hidden="true">#</a> 前端图片展示</h2><h3 id="通过静态文件加载" tabindex="-1"><a class="header-anchor" href="#通过静态文件加载" aria-hidden="true">#</a> 通过静态文件加载</h3><p>文件在硬盘上</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">&quot;./test.png&quot;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="通过字节传递二进制图片文件" tabindex="-1"><a class="header-anchor" href="#通过字节传递二进制图片文件" aria-hidden="true">#</a> 通过字节传递二进制图片文件</h3><h4 id="后端先生产图片并用base64编码" tabindex="-1"><a class="header-anchor" href="#后端先生产图片并用base64编码" aria-hidden="true">#</a> 后端先生产图片并用base64编码</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> jinja2 <span class="token keyword">import</span> Template<span class="token punctuation">,</span>FileSystemLoader<span class="token punctuation">,</span>Environment
env <span class="token operator">=</span> Environment<span class="token punctuation">(</span>loader<span class="token operator">=</span>FileSystemLoader<span class="token punctuation">(</span><span class="token string">&quot;./&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
template <span class="token operator">=</span> env<span class="token punctuation">.</span>get_template<span class="token punctuation">(</span><span class="token string">&quot;./test.html&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
y <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span>
<span class="token keyword">from</span> io <span class="token keyword">import</span> BytesIO
buf <span class="token operator">=</span> BytesIO<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">#另一种写入BytesIO的方法</span>
plt<span class="token punctuation">.</span>savefig<span class="token punctuation">(</span>buf<span class="token punctuation">,</span><span class="token builtin">format</span><span class="token operator">=</span><span class="token string">&#39;png&#39;</span><span class="token punctuation">)</span> <span class="token comment">#另一种写入BytesIO的方法</span>
<span class="token keyword">import</span> base64
data <span class="token operator">=</span> base64<span class="token punctuation">.</span>b64encode<span class="token punctuation">(</span>buf<span class="token punctuation">.</span>getvalue<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span>
data <span class="token operator">=</span> <span class="token string">&quot;data:image/png;base64,&quot;</span> <span class="token operator">+</span> data
temp_render <span class="token operator">=</span> template<span class="token punctuation">.</span>render<span class="token punctuation">(</span>name<span class="token operator">=</span>data<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>temp_render<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ name }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="后端通过设置mimetype来实现" tabindex="-1"><a class="header-anchor" href="#后端通过设置mimetype来实现" aria-hidden="true">#</a> 后端通过设置<code>mimetype</code>来实现</h4><p><code>img</code>标签中的<code>src</code>属性本质是向服务器发送一个get请求</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&lt;img_id&gt;&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">capt</span><span class="token punctuation">(</span>img_id<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 生成图片验证码</span>
    text<span class="token punctuation">,</span> image <span class="token operator">=</span> captcha<span class="token punctuation">.</span>generate_captcha<span class="token punctuation">(</span><span class="token punctuation">)</span>
    rsp <span class="token operator">=</span> make_response<span class="token punctuation">(</span>image<span class="token punctuation">)</span>
    rsp<span class="token punctuation">.</span>mimetype <span class="token operator">=</span> <span class="token string">&#39;image/jpg&#39;</span>
    <span class="token keyword">return</span> rsp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ img_id }}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>图形验证码<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pic_code<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,55),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","response.html.vue"]]);export{d as default};
