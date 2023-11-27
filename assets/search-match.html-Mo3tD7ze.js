import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-O0xqlHfm.js";const e={},p=t(`<h1 id="search-match" tabindex="-1"><a class="header-anchor" href="#search-match" aria-hidden="true">#</a> search-match</h1><p><code>match(pattern, string, flags=0)</code> 用正则表达式匹配字符串 成功返回匹配对象 否则返回None <code>search(pattern, string, flags=0)</code> 搜索字符串中第一次出现正则表达式的模式 成功返回匹配对象 否则返回None</p><p>参数:</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>pattern</td><td>匹配的正则表达式</td></tr><tr><td>string</td><td>要匹配的字符串。</td></tr><tr><td>flags</td><td>标志位，用于控制正则表达式的匹配方式，如：是否区分大小写，多行匹配等等。</td></tr></tbody></table><p>返回: <code>re.Match</code>对象, 使用<code>re.Match.group()</code>来获得最终的匹配的字符串</p><h2 id="re-match与re-search的区别" tabindex="-1"><a class="header-anchor" href="#re-match与re-search的区别" aria-hidden="true">#</a> re.match与re.search的区别</h2><p>re.match只匹配字符串的开始，如果字符串开始不符合正则表达式，则匹配失败，函数返回None；而re.search匹配整个字符串，直到找到一个匹配。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> re
re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">&#39;super&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;superstition&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>span<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># (0, 5)</span>
re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">&#39;super&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;insuperable&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># None</span>
re<span class="token punctuation">.</span>search<span class="token punctuation">(</span><span class="token string">&#39;super&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;superstition&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>span<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># (0, 5)</span>
re<span class="token punctuation">.</span>search<span class="token punctuation">(</span><span class="token string">&#39;super&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;insuperable&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>span<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># (2, 7)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://www.cnblogs.com/thankcat/p/17121194.html</p>`,9),c=[p];function o(r,i){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","search-match.html.vue"]]);export{d as default};
