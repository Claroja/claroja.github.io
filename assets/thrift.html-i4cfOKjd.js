import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-M6UUlHgF.js";const p={},e=t(`<h1 id="thrift" tabindex="-1"><a class="header-anchor" href="#thrift" aria-hidden="true">#</a> thrift</h1><p><code>test.thrift</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>service PingService <span class="token punctuation">{</span>
    string func<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
service AargsPingService <span class="token punctuation">{</span>
    string func<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">:</span>string func<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
service Sleep <span class="token punctuation">{</span>
    oneway void sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">:</span> i32 seconds<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>client.py</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## coding=utf-8</span>
<span class="token keyword">import</span> thriftpy2
<span class="token keyword">from</span> thriftpy2<span class="token punctuation">.</span>rpc <span class="token keyword">import</span> make_client
mod_thrift <span class="token operator">=</span> thriftpy2<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token string">&quot;test.thrift&quot;</span><span class="token punctuation">,</span> module_name<span class="token operator">=</span><span class="token string">&quot;mod_thrift&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    client <span class="token operator">=</span> make_client<span class="token punctuation">(</span>mod_thrift<span class="token punctuation">.</span>PingService<span class="token punctuation">,</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> <span class="token number">6000</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>client<span class="token punctuation">.</span>func<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>server.py</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## coding=utf-8</span>
<span class="token keyword">import</span> thriftpy2
<span class="token keyword">from</span> thriftpy2<span class="token punctuation">.</span>rpc <span class="token keyword">import</span> make_server
mod_thrift <span class="token operator">=</span> thriftpy2<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token string">&quot;test.thrift&quot;</span><span class="token punctuation">,</span> module_name<span class="token operator">=</span><span class="token string">&quot;mod_thrift&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## 实现.thrift文件定义的接口</span>
<span class="token keyword">class</span> <span class="token class-name">Dispatcher</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token comment"># 在.thrift文件中定义了方法名为ping</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;客户端调用了func方法&quot;</span><span class="token punctuation">)</span> 
        <span class="token keyword">return</span> <span class="token string">&#39;服务端返回func方法返回值&#39;</span>

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 定义监听的端口和服务</span>
    server <span class="token operator">=</span> make_server<span class="token punctuation">(</span>mod_thrift<span class="token punctuation">.</span>PingService<span class="token punctuation">,</span> Dispatcher<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> <span class="token number">6000</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;serving...&quot;</span><span class="token punctuation">)</span>
    server<span class="token punctuation">.</span>serve<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考： https://www.cnblogs.com/shenh/p/10529073.html https://blog.csdn.net/zw19910924/article/details/78178539</p>`,8),c=[e];function o(i,l){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","thrift.html.vue"]]);export{d as default};
