import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as i,a as n,b as s,d as e,e as t}from"./app-XqA98pG8.js";const l={},u=n("h1",{id:"cdp",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cdp","aria-hidden":"true"},"#"),s(" cdp")],-1),r={href:"https://python.hotexamples.com/examples/selenium.webdriver/Chrome/execute_cdp_cmd/python-chrome-execute_cdp_cmd-method-examples.html",target:"_blank",rel:"noopener noreferrer"},d=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>driver <span class="token operator">=</span> Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span>
version_info <span class="token operator">=</span> driver<span class="token punctuation">.</span>execute_cdp_cmd<span class="token punctuation">(</span><span class="token string">&#39;Browser.getVersion&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),k={href:"https://www.gaoyuanqi.cn/python-selenium-execute_cdp_cmd/",target:"_blank",rel:"noopener noreferrer"},m=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver <span class="token keyword">import</span> Chrome
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>chrome<span class="token punctuation">.</span>options <span class="token keyword">import</span> Options

options <span class="token operator">=</span> Options<span class="token punctuation">(</span><span class="token punctuation">)</span>
options<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&#39;--headless&#39;</span><span class="token punctuation">)</span>
options<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span>
    <span class="token string">&#39;user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36&#39;</span><span class="token punctuation">)</span>

<span class="token comment">## 如果是chrome 88 版本添加下面一行</span>
options<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&quot;--disable-blink-features=AutomationControlled&quot;</span><span class="token punctuation">)</span>

driver <span class="token operator">=</span> Chrome<span class="token punctuation">(</span>options<span class="token operator">=</span>options<span class="token punctuation">)</span>

<span class="token comment">## 输入 stealth.min.js 文件路径</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;./stealth.min.js&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    js <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>execute_cdp_cmd<span class="token punctuation">(</span><span class="token string">&quot;Page.addScriptToEvaluateOnNewDocument&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;source&quot;</span><span class="token punctuation">:</span> js
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">## 查看特征是否隐藏</span>
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;https://bot.sannysoft.com/&#39;</span><span class="token punctuation">)</span>
time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">## 截图</span>
driver<span class="token punctuation">.</span>save_screenshot<span class="token punctuation">(</span><span class="token string">&#39;./a.png&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## 保存源代码为 html</span>
source <span class="token operator">=</span> driver<span class="token punctuation">.</span>page_source
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;./b.html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>source<span class="token punctuation">)</span>

<span class="token comment">## 退出驱动并关闭浏览器</span>
driver<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v={href:"https://blog.51cto.com/hanzhichao/3211231",target:"_blank",rel:"noopener noreferrer"},b=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests
<span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver
<span class="token keyword">from</span> time <span class="token keyword">import</span> sleep
<span class="token keyword">import</span> base64

driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;https://www.hao123.com/&#39;</span><span class="token punctuation">)</span>

res <span class="token operator">=</span> driver<span class="token punctuation">.</span>execute_cdp_cmd<span class="token punctuation">(</span><span class="token string">&#39;Page.captureScreenshot&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;hao123.png&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    img <span class="token operator">=</span> base64<span class="token punctuation">.</span>b64decode<span class="token punctuation">(</span>res<span class="token punctuation">[</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>img<span class="token punctuation">)</span>

sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://chromedevtools.github.io/devtools-protocol/ https://python.hotexamples.com/examples/selenium.webdriver/Chrome/execute_cdp_cmd/python-chrome-execute_cdp_cmd-method-examples.html https://applitools.com/blog/selenium-chrome-devtools-protocol-cdp-how-does-it-work/</p>`,2);function h(_,g){const a=o("ExternalLinkIcon");return c(),i("div",null,[u,n("p",null,[s("获得浏览器的版本信息, "),n("a",r,[s("本段参考"),e(a)])]),d,n("p",null,[s("运行js文件, "),n("a",k,[s("本段参考"),e(a)])]),m,n("p",null,[s("截图, "),n("a",v,[s("本段参考"),e(a)])]),b])}const f=p(l,[["render",h],["__file","selenium_cdp.html.vue"]]);export{f as default};
