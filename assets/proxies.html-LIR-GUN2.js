import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,e}from"./app-A10JnHE0.js";const t={},p=e(`<h1 id="proxies" tabindex="-1"><a class="header-anchor" href="#proxies" aria-hidden="true">#</a> proxies</h1><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><p>1）proxies来设置</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests

proxies <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string">&quot;http&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;http://10.10.1.10:3128&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;https&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;http://10.10.1.10:1080&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;http://example.org&quot;</span><span class="token punctuation">,</span> proxies<span class="token operator">=</span>proxies<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）通过环境变量设置默认</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>$ export HTTP_PROXY<span class="token operator">=</span><span class="token string">&quot;http://10.10.1.10:3128&quot;</span>
$ export HTTPS_PROXY<span class="token operator">=</span><span class="token string">&quot;http://10.10.1.10:1080&quot;</span>

$ python
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> requests
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;http://example.org&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3）使用HTTP Basic Auth进行代理</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>proxies <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;http&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;http://user:pass@10.10.1.10:3128/&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4）为特定的连接主机设置代理</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>proxies <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;http://10.20.1.128&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;http://10.10.1.10:5323&#39;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 1)(Transparent Proxy)，通过HTTP_VIA知道此次访问时通过proxy ip，并通过HTTP_X_FORWARDED_FOR获得真实ip</span>
REMOTE_ADDR <span class="token operator">=</span> Proxy IP <span class="token comment"># 这个是访问他人服务器的ip</span>
HTTP_VIA <span class="token operator">=</span> Proxy IP <span class="token comment"># 这个指明代理ip</span>
HTTP_X_FORWARDED_FOR <span class="token operator">=</span> Your IP <span class="token comment"># 这个是自己的ip，可以查到</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 2)(Anonymous Proxy)：HTTP_X_FORWARDED_FOR被换为proxy ip 所以不能查到原始的ip</span>
REMOTE_ADDR <span class="token operator">=</span> proxy IP 
HTTP_VIA <span class="token operator">=</span> proxy IP
HTTP_X_FORWARDED_FOR <span class="token operator">=</span> proxy IP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 3)(Elite proxy或High Anonymity Proxy)：HTTP_VIA和HTTP_X_FORWARDED_FOR都隐藏，所以就和没有代理一样</span>
REMOTE_ADDR <span class="token operator">=</span> Proxy IP
HTTP_VIA <span class="token operator">=</span> not determined
HTTP_X_FORWARDED_FOR <span class="token operator">=</span> not determined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),o=[p];function i(r,l){return n(),a("div",null,o)}const u=s(t,[["render",i],["__file","proxies.html.vue"]]);export{u as default};
