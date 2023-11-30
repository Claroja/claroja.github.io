import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,e as t}from"./app-0JgdiRQ-.js";const p={},o=t(`<h1 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> session</h1><p>requests模块中的Session类能够自动处理发送请求获取响应过程中产生的cookie，自动处理cookie，即 下一次请求会带上前一次的cookie，进而达到状态保持的目的。</p><h2 id="普通的requests" tabindex="-1"><a class="header-anchor" href="#普通的requests" aria-hidden="true">#</a> 普通的requests</h2><p>每次requests都需要手动设置cookie</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests
params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Ryan&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;password&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;password&#39;</span><span class="token punctuation">}</span>
r <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span><span class="token string">&quot;http://pythonscraping.com/pages/cookies/welcome.php&quot;</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span> <span class="token comment"># 第一次请求获得的cookie</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Cookie is set to:&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span>get_dict<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;http://pythonscraping.com/pages/cookies/profile.php&quot;</span><span class="token punctuation">,</span>
cookies<span class="token operator">=</span>r<span class="token punctuation">.</span>cookies<span class="token punctuation">)</span> <span class="token comment"># 用上一次的请求所获得的cookie</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="session回话保存cookie" tabindex="-1"><a class="header-anchor" href="#session回话保存cookie" aria-hidden="true">#</a> session回话保存cookie</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests
session <span class="token operator">=</span> requests<span class="token punctuation">.</span>Session<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 新建一个回话，他会保存每次访问的cookie，header等HTTP协议信息，不必每次手动提交cookie</span>
params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;username&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;password&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;password&#39;</span><span class="token punctuation">}</span>
s <span class="token operator">=</span> session<span class="token punctuation">.</span>post<span class="token punctuation">(</span><span class="token string">&quot;http://pythonscraping.com/pages/cookies/welcome.php&quot;</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Cookie is set to:&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span>get_dict<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Going to profile page...&quot;</span><span class="token punctuation">)</span>
s <span class="token operator">=</span> session<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;http://pythonscraping.com/pages/cookies/profile.php&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),e=[o];function c(i,u){return n(),a("div",null,e)}const k=s(p,[["render",c],["__file","session.html.vue"]]);export{k as default};
