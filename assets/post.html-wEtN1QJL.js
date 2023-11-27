import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-O0xqlHfm.js";const p={},e=t(`<h1 id="post" tabindex="-1"><a class="header-anchor" href="#post" aria-hidden="true">#</a> post</h1><h2 id="form形式" tabindex="-1"><a class="header-anchor" href="#form形式" aria-hidden="true">#</a> form形式</h2><p>前端的form表单post，和requests的post方法的data，和flask的request.form是对应的</p><h3 id="后端" tabindex="-1"><a class="header-anchor" href="#后端" aria-hidden="true">#</a> 后端</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/post&#39;</span><span class="token punctuation">,</span> methods <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;POST&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">post</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	key1<span class="token operator">=</span>request<span class="token punctuation">.</span>form<span class="token punctuation">[</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">]</span>
	key2<span class="token operator">=</span>request<span class="token punctuation">.</span>form<span class="token punctuation">[</span><span class="token string">&quot;key2&quot;</span><span class="token punctuation">]</span>
	<span class="token keyword">return</span> key1<span class="token punctuation">,</span> key2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前端" tabindex="-1"><a class="header-anchor" href="#前端" aria-hidden="true">#</a> 前端：</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&lt;</span>!DOCTYPE html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Document<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>form method<span class="token operator">=</span><span class="token string">&quot;POST&quot;</span> action<span class="token operator">=</span><span class="token string">&quot;/post&quot;</span><span class="token operator">&gt;</span>
        key1<span class="token punctuation">:</span><span class="token operator">&lt;</span>br<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token builtin">input</span> <span class="token builtin">type</span><span class="token operator">=</span><span class="token string">&quot;text&quot;</span> name<span class="token operator">=</span><span class="token string">&quot;key1&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;value1&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>br<span class="token operator">&gt;</span>
        key2<span class="token punctuation">:</span><span class="token operator">&lt;</span>br<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token builtin">input</span> <span class="token builtin">type</span><span class="token operator">=</span><span class="token string">&quot;text&quot;</span> name<span class="token operator">=</span><span class="token string">&quot;key2&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;value2&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>br<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token builtin">input</span> <span class="token builtin">type</span><span class="token operator">=</span><span class="token string">&quot;submit&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;Submit&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="requests" tabindex="-1"><a class="header-anchor" href="#requests" aria-hidden="true">#</a> requests</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests
payload <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;key1&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;value1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;key2&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;value2&#39;</span><span class="token punctuation">}</span>
r <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span><span class="token string">&quot;http://127.0.0.1:5000/post&quot;</span><span class="token punctuation">,</span> data<span class="token operator">=</span>payload<span class="token punctuation">)</span>
r<span class="token punctuation">.</span>text
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="json格式" tabindex="-1"><a class="header-anchor" href="#json格式" aria-hidden="true">#</a> json格式</h2><p>前端的ajax或axios，和requests的post方法的json参数，和flask的request.json是对应的</p><h3 id="后端-1" tabindex="-1"><a class="header-anchor" href="#后端-1" aria-hidden="true">#</a> 后端</h3><p>flask使用<code>.json</code>来获得请求的格式</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask<span class="token punctuation">,</span>request<span class="token punctuation">,</span>jsonify
app <span class="token operator">=</span> Flask<span class="token punctuation">(</span><span class="token string">&quot;__main__&quot;</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    key1<span class="token operator">=</span>request<span class="token punctuation">.</span>json<span class="token punctuation">.</span>get<span class="token punctuation">[</span><span class="token string">&#39;key1&#39;</span><span class="token punctuation">]</span>
    key2<span class="token operator">=</span>request<span class="token punctuation">.</span>json<span class="token punctuation">.</span>get<span class="token punctuation">[</span><span class="token string">&#39;key2&#39;</span><span class="token punctuation">]</span>
    <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">:</span>value1<span class="token punctuation">,</span><span class="token string">&quot;key2&quot;</span><span class="token punctuation">:</span>value2<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>port<span class="token operator">=</span><span class="token number">5000</span><span class="token punctuation">,</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前端-1" tabindex="-1"><a class="header-anchor" href="#前端-1" aria-hidden="true">#</a> 前端</h3><p>前端需要使用异步ajax或者axios来发送json数据</p><h3 id="request" tabindex="-1"><a class="header-anchor" href="#request" aria-hidden="true">#</a> request</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests
payload <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;key1&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;value1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;key2&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;value2&#39;</span><span class="token punctuation">}</span>
r <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span><span class="token string">&quot;http://127.0.0.1:5000/post&quot;</span><span class="token punctuation">,</span> json<span class="token operator">=</span>payload<span class="token punctuation">)</span>
r<span class="token punctuation">.</span>text
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="上传文件" tabindex="-1"><a class="header-anchor" href="#上传文件" aria-hidden="true">#</a> 上传文件</h2><p>前端form表单<code>enctype=&#39;multipart/form-data&#39;</code> 对应requests的post方法的file参数，对应flask的request.files</p><h3 id="后端-2" tabindex="-1"><a class="header-anchor" href="#后端-2" aria-hidden="true">#</a> 后端</h3><p>后端则是通过files字典对象来获得上传的文件</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/upload&#39;</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;POST&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> strict_slashes<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">upload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> request<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">:</span>
        <span class="token builtin">file</span> <span class="token operator">=</span> request<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token string">&#39;fileName&#39;</span><span class="token punctuation">]</span>  <span class="token comment"># files是fileStorage的对象，其中fileName就是表单中input中file的name所定义的字符串</span>
        <span class="token builtin">file</span><span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;./upload/</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">file</span><span class="token punctuation">.</span>filename<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token string">&quot;OK&quot;</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> render_template<span class="token punctuation">(</span><span class="token string">&#39;upload.html&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前端-2" tabindex="-1"><a class="header-anchor" href="#前端-2" aria-hidden="true">#</a> 前端</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">enctype</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>multipart/form-data<span class="token punctuation">&#39;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>POST<span class="token punctuation">&#39;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pic<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fileName<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>上传<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="requests-1" tabindex="-1"><a class="header-anchor" href="#requests-1" aria-hidden="true">#</a> requests</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests
url <span class="token operator">=</span> <span class="token string">&#39;http://localhost:5000/upload&#39;</span>
files <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;fileName&#39;</span><span class="token punctuation">:</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;./upDownFiles/1.png&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
r <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span>url<span class="token punctuation">,</span> files<span class="token operator">=</span>files<span class="token punctuation">)</span>
r<span class="token punctuation">.</span>text
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="下载文件" tabindex="-1"><a class="header-anchor" href="#下载文件" aria-hidden="true">#</a> 下载文件</h2><h3 id="后端-3" tabindex="-1"><a class="header-anchor" href="#后端-3" aria-hidden="true">#</a> 后端</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/download/&#39;</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">download</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> request<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> send_from_directory<span class="token punctuation">(</span><span class="token string">&#39;upload&#39;</span><span class="token punctuation">,</span> filename<span class="token punctuation">,</span> as_attachment<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前端-3" tabindex="-1"><a class="header-anchor" href="#前端-3" aria-hidden="true">#</a> 前端</h3><p>相当于前端直接点击<code>&lt;img&gt;</code>标签,需要注意,这里的<code>src</code>指向的<code>download</code>url,而不是<code>upload</code>文件夹</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/download<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span> <span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="requests-2" tabindex="-1"><a class="header-anchor" href="#requests-2" aria-hidden="true">#</a> requests</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> fd<span class="token punctuation">:</span>
	fd<span class="token punctuation">.</span>write<span class="token punctuation">(</span>r<span class="token punctuation">.</span>content<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>分批获取</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> fd<span class="token punctuation">:</span>
    <span class="token keyword">for</span> chunk <span class="token keyword">in</span> r<span class="token punctuation">.</span>iter_content<span class="token punctuation">(</span>chunk_size<span class="token operator">=</span><span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        fd<span class="token punctuation">.</span>write<span class="token punctuation">(</span>chunk<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","post.html.vue"]]);export{k as default};
