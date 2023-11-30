import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as e,c as p,a as n,b as o,d as c,e as l}from"./app-0JgdiRQ-.js";const i={},d=l(`<h1 id="date" tabindex="-1"><a class="header-anchor" href="#date" aria-hidden="true">#</a> date</h1><h2 id="构建方法" tabindex="-1"><a class="header-anchor" href="#构建方法" aria-hidden="true">#</a> 构建方法</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//1.获取当前时间</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//2.根据字符串获取</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;December 17, 1995 03:24:00&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//根据GMT格式构建</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;1995-12-17T03:24:00&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//根据UTC构建</span>
<span class="token comment">//3.根据数字年月日获取</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>year<span class="token punctuation">,</span> monthIndex <span class="token punctuation">[</span><span class="token punctuation">,</span> day <span class="token punctuation">[</span><span class="token punctuation">,</span> hours <span class="token punctuation">[</span><span class="token punctuation">,</span> minutes <span class="token punctuation">[</span><span class="token punctuation">,</span> seconds <span class="token punctuation">[</span><span class="token punctuation">,</span> milliseconds<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对象方法" tabindex="-1"><a class="header-anchor" href="#对象方法" aria-hidden="true">#</a> 对象方法</h2><p>1.操作时间 默认获得是当前时区的时间,加上<code>UTC</code>获得是标准时间</p><table><thead><tr><th>Local</th><th>UTC(zero)</th><th>描述</th></tr></thead><tbody><tr><td>getFullYear</td><td>getUTCFullYear</td><td>四位数的年份</td></tr><tr><td>getMonth</td><td>getUTCMonth</td><td>月份</td></tr><tr><td>getDate</td><td>getUTCDate</td><td>月中第几天</td></tr><tr><td>getHours</td><td>getUTCHours</td><td>小时</td></tr><tr><td>getMinute</td><td>getUTCMinute</td><td>分钟</td></tr><tr><td>getSeconds</td><td>getUTCSeconds</td><td>秒</td></tr><tr><td>getMilliseconds</td><td>getUTCMilliseconds</td><td>毫秒</td></tr><tr><td>getDay</td><td>getUTCDay</td><td>周中第几天</td></tr></tbody></table><p>2.获得时间戳 <code>getTime()</code></p><p>3.获得时区偏移 返回的是以分钟计算,比如北京是8时区,则返回的是<code>-480</code><code>getTimezoneOffset</code></p><p>4.字符串转换 <code>new Date().toISOString()</code>方法和<code>new Date()</code>对象可以直接被<code>mybatis</code>识别,其他的不可.(是不是指定格式就行了?)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//1.UTC格式</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token string">&quot;2021-02-08T15:15:16.259Z&quot;</span>

<span class="token comment">//2.GMT格式</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token string">&quot;Mon Feb 08 2021 23:15:00 GMT+0800 (中国标准时间)&quot;</span>

<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toGMTString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token string">&quot;Mon, 08 Feb 2021 15:16:57 GMT&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.转换为本地时间</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//1.第一个参数可以指定格式,可选项参考语言（文化）代码与国家地区对照表</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token string">&quot;2021/2/8下午11:23:07&quot;</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token string">&#39;en-GB&#39;</span><span class="token punctuation">)</span>
<span class="token string">&quot;08/02/2021, 23:22:52&quot;</span>

<span class="token comment">//2.第二个参数可以指定时区</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">timeZone</span><span class="token operator">:</span> <span class="token string">&#39;UTC&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token string">&quot;08/02/2021, 15:24:01&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date</p>`,13),u={href:"https://www.cnblogs.com/tangyuanby2/p/6991753.html",target:"_blank",rel:"noopener noreferrer"};function r(k,m){const s=t("ExternalLinkIcon");return e(),p("div",null,[d,n("p",null,[n("a",u,[o("语言（文化）代码与国家地区对照表"),c(s)])])])}const b=a(i,[["render",r],["__file","date.html.vue"]]);export{b as default};
