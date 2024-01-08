import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-YE2Hltoy.js";const p="/assets/1-oEhFSSSs.png",e={},o=t(`<h1 id="udp" tabindex="-1"><a class="header-anchor" href="#udp" aria-hidden="true">#</a> udp</h1><h2 id="udp连接" tabindex="-1"><a class="header-anchor" href="#udp连接" aria-hidden="true">#</a> UDP连接</h2><p>服务端</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> socket
server <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_DGRAM<span class="token punctuation">)</span>
server<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token number">8000</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>server<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
server<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment"># 关闭套接字</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> socket
server <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_DGRAM<span class="token punctuation">)</span>
server<span class="token punctuation">.</span>sendto<span class="token punctuation">(</span><span class="token string">&#39;server&#39;</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span> <span class="token number">8000</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 这里要用sendto,因为udp没有建立链接</span>
server<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 关闭套接字</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="udp广播" tabindex="-1"><a class="header-anchor" href="#udp广播" aria-hidden="true">#</a> UDP广播</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> socket
dest <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;&lt;broadcast&gt;&#39;</span><span class="token punctuation">,</span> <span class="token number">7788</span><span class="token punctuation">)</span><span class="token comment"># 这里&lt;broadcst&gt;可以写成当前网段的广播地址</span>
s <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_DGRAM<span class="token punctuation">)</span> <span class="token comment"># 创建udp套接字</span>
s<span class="token punctuation">.</span>setsockopt<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>SOL_SOCKET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SO_BROADCAST<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token comment"># 设置成能发送广播数据</span>
s<span class="token punctuation">.</span>sendto<span class="token punctuation">(</span><span class="token string">&quot;Hi&quot;</span><span class="token punctuation">,</span> dest<span class="token punctuation">)</span><span class="token comment"># 发送广播</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[o];function u(i,l){return s(),a("div",null,c)}const d=n(e,[["render",u],["__file","udp.html.vue"]]);export{d as default};
