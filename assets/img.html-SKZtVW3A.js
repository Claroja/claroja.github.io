import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-qxiCM96p.js";const e={},p=t(`<h1 id="img" tabindex="-1"><a class="header-anchor" href="#img" aria-hidden="true">#</a> img</h1><p>selenium下载图片</p><h2 id="截图" tabindex="-1"><a class="header-anchor" href="#截图" aria-hidden="true">#</a> 截图</h2><p>img.screenshot(&quot;xxx.png&quot;)</p><h3 id="如果图片重叠可以考虑" tabindex="-1"><a class="header-anchor" href="#如果图片重叠可以考虑" aria-hidden="true">#</a> 如果图片重叠可以考虑</h3><p>将</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>driver<span class="token punctuation">.</span>execute_script<span class="token punctuation">(</span><span class="token triple-quoted-string string">&quot;&quot;&quot;
    tp = document.querySelector(&#39;[alt=&quot;验证码滑块&quot;]&#39;);
    bg = document.querySelector(&#39;[alt=&quot;验证码背景&quot;]&#39;);
    div = tp.parentElement;
    document.body.appendChild(bg);
&quot;&quot;&quot;</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>execute_script<span class="token punctuation">(</span><span class="token triple-quoted-string string">&quot;&quot;&quot;return document.querySelector(&#39;[alt=&quot;验证码滑块&quot;]&#39;)&quot;&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>screenshot<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;./img/tp.png&quot;</span></span><span class="token punctuation">)</span> 
driver<span class="token punctuation">.</span>execute_script<span class="token punctuation">(</span><span class="token triple-quoted-string string">&quot;&quot;&quot;
    tp = document.querySelector(&#39;[alt=&quot;验证码滑块&quot;]&#39;);
    bg = document.querySelector(&#39;[alt=&quot;验证码背景&quot;]&#39;);
    div = tp.parentElement;
    div.removeChild(tp);
&quot;&quot;&quot;</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>execute_script<span class="token punctuation">(</span><span class="token triple-quoted-string string">&quot;&quot;&quot;bg = tp.parentElement&quot;&quot;&quot;</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>execute_script<span class="token punctuation">(</span><span class="token triple-quoted-string string">&quot;&quot;&quot;div.removeChild(bg)&quot;&quot;&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="js发送二进制文件" tabindex="-1"><a class="header-anchor" href="#js发送二进制文件" aria-hidden="true">#</a> js发送二进制文件</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">import</span> base64
<span class="token keyword">import</span> os
<span class="token keyword">import</span> re
<span class="token keyword">from</span> io <span class="token keyword">import</span> BytesIO
<span class="token keyword">from</span> PIL <span class="token keyword">import</span> Image

<span class="token keyword">def</span> <span class="token function">base64_to_image</span><span class="token punctuation">(</span>base64_str<span class="token punctuation">)</span><span class="token punctuation">:</span>
    base64_data <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">&#39;^data:image/.+;base64,&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> base64_str<span class="token punctuation">)</span>
    byte_data <span class="token operator">=</span> base64<span class="token punctuation">.</span>b64decode<span class="token punctuation">(</span>base64_data<span class="token punctuation">)</span>
    image_data <span class="token operator">=</span> BytesIO<span class="token punctuation">(</span>byte_data<span class="token punctuation">)</span>
    img <span class="token operator">=</span> Image<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>image_data<span class="token punctuation">)</span>
    <span class="token keyword">return</span> img

js <span class="token operator">=</span><span class="token triple-quoted-string string">&quot;&quot;&quot;
    let c = document.createElement(&#39;canvas&#39;);
    let ctx = c.getContext(&#39;2d&#39;);
    let img = document.querySelector(&#39;[alt=&quot;验证码滑块&quot;]&#39;);
    img.setAttribute(&quot;crossOrigin&quot;,&#39;Anonymous&#39;);
    c.height=img.naturalHeight;
    c.width=img.naturalWidth;
    ctx.drawImage(img, 0, 0,img.naturalWidth, img.naturalHeight);
    let base64String = c.toDataURL();
    return base64String;
&quot;&quot;&quot;</span> 

base64_str <span class="token operator">=</span> driver<span class="token punctuation">.</span>execute_script<span class="token punctuation">(</span>js<span class="token punctuation">)</span>
img <span class="token operator">=</span> base64_to_image<span class="token punctuation">(</span>base64_str<span class="token punctuation">)</span>
img<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">&#39;./test.png&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://www.cnblogs.com/Renyi-Fan/p/9588755.html</p><h2 id="selenium-wire" tabindex="-1"><a class="header-anchor" href="#selenium-wire" aria-hidden="true">#</a> selenium-wire</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>chrome<span class="token punctuation">.</span>options <span class="token keyword">import</span> Options
<span class="token keyword">from</span> seleniumwire<span class="token punctuation">.</span>webdriver <span class="token keyword">import</span> Chrome
 
driver <span class="token operator">=</span> Chrome<span class="token punctuation">(</span>options<span class="token operator">=</span> Options<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">get_img_path_from_url</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 自行实现</span>
    <span class="token keyword">return</span> url
 
<span class="token keyword">def</span> <span class="token function">response_interceptor</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">:</span>
    t<span class="token operator">=</span>response<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> request<span class="token punctuation">.</span>host<span class="token operator">==</span><span class="token string">&#39;xxx&#39;</span> <span class="token keyword">and</span> t <span class="token keyword">and</span> <span class="token string">&#39;image&#39;</span> <span class="token keyword">in</span> t<span class="token punctuation">:</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>get_img_path_from_url<span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
            f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>response<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
             
driver<span class="token punctuation">.</span>response_interceptor <span class="token operator">=</span> response_interceptor
 
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">)</span>
src<span class="token operator">=</span>driver<span class="token punctuation">.</span>find_element_by_tag_name<span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get_attribute<span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>
img_path<span class="token operator">=</span>get_img_path_from_url<span class="token punctuation">(</span>src<span class="token punctuation">)</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方法有个缺点，浏览器会自动缓存图片，如果之前已经缓存过这张图片是不会有网络请求的</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 下载前先清理数据，不然请求太多</span>
<span class="token keyword">del</span> driver<span class="token punctuation">.</span>requests
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">)</span>
src<span class="token operator">=</span>driver<span class="token punctuation">.</span>find_element_by_tag_name<span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get_attribute<span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>code<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>code<span class="token operator">&gt;</span>
<span class="token keyword">for</span> r <span class="token keyword">in</span> driver<span class="token punctuation">.</span>iter_requests<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> r<span class="token punctuation">.</span>url<span class="token operator">==</span>src<span class="token punctuation">:</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
            f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>r<span class="token punctuation">.</span>response<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://www.jb51.net/article/236020.htm</p>`,15),i=[p];function o(c,u){return s(),a("div",null,i)}const d=n(e,[["render",o],["__file","img.html.vue"]]);export{d as default};
