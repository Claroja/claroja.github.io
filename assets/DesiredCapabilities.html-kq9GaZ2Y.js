import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as i,c,a as n,b as s,d as e,e as t}from"./app-A10JnHE0.js";const r={},l=n("h1",{id:"desiredcapabilities",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#desiredcapabilities","aria-hidden":"true"},"#"),s(" DesiredCapabilities")],-1),u={href:"https://www.cnblogs.com/f1194361820/p/7419522.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.jianshu.com/p/98f562597de2",target:"_blank",rel:"noopener noreferrer"},k=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>common<span class="token punctuation">.</span>desired_capabilities <span class="token keyword">import</span> DesiredCapabilities

d <span class="token operator">=</span> DesiredCapabilities<span class="token punctuation">.</span>CHROME
d<span class="token punctuation">[</span><span class="token string">&#39;goog:loggingPrefs&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;browser&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;ALL&#39;</span><span class="token punctuation">}</span> 

driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span>desired_capabilities<span class="token operator">=</span>d<span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>maximize_window<span class="token punctuation">(</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token operator">=</span><span class="token string">&#39;https://www.baidu.com/&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>driver<span class="token punctuation">.</span>get_log<span class="token punctuation">(</span><span class="token string">&quot;browser&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v={href:"https://www.cnblogs.com/landhu/p/15524801.html",target:"_blank",rel:"noopener noreferrer"},m=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>common<span class="token punctuation">.</span>desired_capabilities <span class="token keyword">import</span> DesiredCapabilities

ca <span class="token operator">=</span> DesiredCapabilities<span class="token punctuation">.</span>CHROME
ca<span class="token punctuation">[</span><span class="token string">&quot;goog:loggingPrefs&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;performance&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;ALL&quot;</span><span class="token punctuation">}</span>
driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span>desired_capabilities<span class="token operator">=</span>ca<span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;http://xxx&quot;</span><span class="token punctuation">)</span>
logs <span class="token operator">=</span> driver<span class="token punctuation">.</span>get_log<span class="token punctuation">(</span><span class="token string">&quot;performance&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>logs<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function b(g,_){const a=o("ExternalLinkIcon");return i(),c("div",null,[l,n("p",null,[s("DesiredCapabilities的具体解释."),n("a",u,[s("本段参考"),e(a)])]),n("p",null,[n("a",d,[s("本段参考"),e(a)])]),k,n("p",null,[n("a",v,[s("本段参考"),e(a)])]),m])}const f=p(r,[["render",b],["__file","DesiredCapabilities.html.vue"]]);export{f as default};
