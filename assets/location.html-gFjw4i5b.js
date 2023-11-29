import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o,c as e,a as n,b as a,d as c,e as l}from"./app-M6UUlHgF.js";const i={},u=n("h1",{id:"location",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#location","aria-hidden":"true"},"#"),a(" location")],-1),d={href:"https://developer.mozilla.org/en-US/docs/Web/API/Location",target:"_blank",rel:"noopener noreferrer"},r=l(`<p>window 对象给我们提供了一个 location 属性用于获取或设置窗体的 URL，并且可以用于解析 URL 。</p><h3 id="location对象属性" tabindex="-1"><a class="header-anchor" href="#location对象属性" aria-hidden="true">#</a> location对象属性</h3><table><thead><tr><th>location对象属性</th><th>返回值</th></tr></thead><tbody><tr><td>location.href</td><td>获取或者设置整个URL</td></tr><tr><td>location.host</td><td>返回主机 (域名)  www.itheima.com</td></tr><tr><td>location.port</td><td>返回端口号如果未写返回空字符串</td></tr><tr><td>location.pathname</td><td>返回路径</td></tr><tr><td>location.search</td><td>返回参数</td></tr><tr><td>location.hash</td><td>返回片段  #后面内容常见于链接锚点</td></tr></tbody></table><p>以上属性, 对应了url的格式:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>protocol://host[:port]/path/[?query]#fragment
http://www.xxx.cn/index.html?name=andy&amp;age=18#link
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>组成</th><th>说明</th></tr></thead><tbody><tr><td>protocol</td><td>通信协议常用的http,ftp,maito等</td></tr><tr><td>host</td><td>主机(域名)www.xxx.com</td></tr><tr><td>port</td><td>端口号可选,省略时使用方案的默认端口如http的默认端口为80</td></tr><tr><td>path</td><td>路径由零或多个/符号隔开的字符串，一般用来表示主机上的一个目录或文件地址</td></tr><tr><td>query</td><td>参数以键值对的形式，通过&amp;符号分隔开来</td></tr><tr><td>fragment</td><td>片段#后面内容常见于链接 锚点</td></tr></tbody></table><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>点击<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// console.log(location.href);</span>
            location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&#39;http://www.baidu.com&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">var</span> timer <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
        <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>timer <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&#39;http://www.baidu.com&#39;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                div<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;您将在&#39;</span> <span class="token operator">+</span> timer <span class="token operator">+</span> <span class="token string">&#39;秒钟之后跳转到首页&#39;</span><span class="token punctuation">;</span>
                timer<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="location对象的方法" tabindex="-1"><a class="header-anchor" href="#location对象的方法" aria-hidden="true">#</a> location对象的方法</h3><table><thead><tr><th>location对象方法</th><th>返回值</th></tr></thead><tbody><tr><td>location.assign()</td><td>跟href一样,可以跳转页面(也称为重定向页面)（记录浏览历史，所以可以实现后退功能）</td></tr><tr><td>location.replace()</td><td>替换当前页面，因为不记录历史，所以不能后退页面</td></tr><tr><td>location.reload()</td><td>重新加载页面，相当于刷新按钮或者f5 如果参数为true强制刷新ctrl+f5</td></tr></tbody></table><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>点击<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 记录浏览历史，所以可以实现后退功能</span>
            <span class="token comment">// location.assign(&#39;http://www.baidu.cn&#39;);</span>
            <span class="token comment">// 不记录浏览历史，所以不可以实现后退功能</span>
            <span class="token comment">// location.replace(&#39;http://www.baidu.cn&#39;);</span>
            location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function k(v,m){const s=p("ExternalLinkIcon");return o(),e("div",null,[u,n("p",null,[n("a",d,[a("参考官网"),c(s)])]),r])}const h=t(i,[["render",k],["__file","location.html.vue"]]);export{h as default};
