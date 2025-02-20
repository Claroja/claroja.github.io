import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as p,c as o,b as n,d as s,e as c,a as i}from"./app-9tftCahk.js";const r={},l=n("h1",{id:"seleniumwire",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#seleniumwire","aria-hidden":"true"},"#"),s(" seleniumwire")],-1),u={href:"https://github.com/wkeeling/selenium-wire",target:"_blank",rel:"noopener noreferrer"},d=i(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> seleniumwire <span class="token keyword">import</span> webdriver  <span class="token comment"># Import from seleniumwire</span>

<span class="token comment">## Create a new instance of the Chrome driver</span>
driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">## Go to the Google home page</span>
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;https://www.baidu.com&#39;</span><span class="token punctuation">)</span>

<span class="token comment">## Access requests via the \`requests\` attribute</span>
<span class="token keyword">for</span> request <span class="token keyword">in</span> driver<span class="token punctuation">.</span>requests<span class="token punctuation">:</span>
    <span class="token keyword">if</span> request<span class="token punctuation">.</span>response<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>
            request<span class="token punctuation">.</span>url<span class="token punctuation">,</span>
            request<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status_code<span class="token punctuation">,</span>
            request<span class="token punctuation">.</span>response<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取request" tabindex="-1"><a class="header-anchor" href="#获取request" aria-hidden="true">#</a> 获取request</h2><p><code>driver.requests</code>可以获取页面加载时所获取的所有<code>request</code>. 需要自己过滤需要的<code>request</code>. 然后再通过<code>request.response</code>来获得<code>response</code>.</p><p>如果一些请求加载时间过长, 直接调用<code>driver.requests</code>, 可能无法获取, 可以设置阻塞:<code>driver.wait_for_request(pat, timeout=10)</code>, <code>pat</code>就是要等待的url:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## Click a button that triggers a background request to https://server/api/products/12345/</span>
button_element<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## Wait for the request/response to complete</span>
request <span class="token operator">=</span> driver<span class="token punctuation">.</span>wait_for_request<span class="token punctuation">(</span><span class="token string">&#39;/api/products/12345/&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="request对象" tabindex="-1"><a class="header-anchor" href="#request对象" aria-hidden="true">#</a> request对象</h3><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td>body</td><td>二进制</td></tr><tr><td>cert</td><td>SSL certificate in dictionary format</td></tr><tr><td>date</td><td>创建的时间</td></tr><tr><td>headers</td><td>请求头</td></tr><tr><td>host</td><td>主机</td></tr><tr><td>method</td><td>请求方法</td></tr><tr><td>param</td><td>url携带的参数</td></tr><tr><td>path</td><td>请求的路径</td></tr><tr><td>querystring</td><td><code>foo=bar&amp;spam=eggs</code></td></tr><tr><td>url</td><td><code>https://www.example.com/some/path/index.html?foo=bar&amp;spam=eggs</code></td></tr><tr><td>response</td><td>响应体对象</td></tr></tbody></table><h3 id="response对象" tabindex="-1"><a class="header-anchor" href="#response对象" aria-hidden="true">#</a> response对象</h3><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td>body</td><td>二进制</td></tr><tr><td>date</td><td>创建时间</td></tr><tr><td>headers</td><td>响应头</td></tr><tr><td>reason</td><td></td></tr><tr><td>status_code</td><td></td></tr></tbody></table><h2 id="截取" tabindex="-1"><a class="header-anchor" href="#截取" aria-hidden="true">#</a> 截取</h2><ol><li>在请求前更改header 因为在header中允许重复的key(会被组合到一起), 如果是替换, 需要先删除之前的key.</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">interceptor</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">del</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;Referer&#39;</span><span class="token punctuation">]</span>  <span class="token comment"># Remember to delete the header first</span>
    request<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;Referer&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;some_referer&#39;</span>  <span class="token comment"># Spoof the referer</span>

driver<span class="token punctuation">.</span>request_interceptor <span class="token operator">=</span> interceptor
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>添加request parameter</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">interceptor</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    params <span class="token operator">=</span> request<span class="token punctuation">.</span>params
    params<span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span>
    request<span class="token punctuation">.</span>params <span class="token operator">=</span> params

driver<span class="token punctuation">.</span>request_interceptor <span class="token operator">=</span> interceptor
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
<span class="token comment">## foo=bar will be added to all requests</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>添加post json请求</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> json

<span class="token keyword">def</span> <span class="token function">interceptor</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> request<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&#39;POST&#39;</span> <span class="token keyword">and</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">:</span>
        <span class="token comment"># The body is in bytes so convert to a string</span>
        body <span class="token operator">=</span> request<span class="token punctuation">.</span>body<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
        <span class="token comment"># Load the JSON</span>
        data <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>body<span class="token punctuation">)</span>
        <span class="token comment"># Add a new property</span>
        data<span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span>
        <span class="token comment"># Set the JSON back on the request</span>
        request<span class="token punctuation">.</span>body <span class="token operator">=</span> json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
        <span class="token comment"># Update the content length</span>
        <span class="token keyword">del</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;Content-Length&#39;</span><span class="token punctuation">]</span>
        request<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;Content-Length&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">)</span>

driver<span class="token punctuation">.</span>request_interceptor <span class="token operator">=</span> interceptor
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>添加Basic authentication</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> base64

auth <span class="token operator">=</span> <span class="token punctuation">(</span>
    base64<span class="token punctuation">.</span>encodebytes<span class="token punctuation">(</span><span class="token string">&#39;my_username:my_password&#39;</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">interceptor</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> request<span class="token punctuation">.</span>host <span class="token operator">==</span> <span class="token string">&#39;host_that_needs_auth&#39;</span><span class="token punctuation">:</span>
        request<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;Authorization&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&#39;Basic </span><span class="token interpolation"><span class="token punctuation">{</span>auth<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span>

driver<span class="token punctuation">.</span>request_interceptor <span class="token operator">=</span> interceptor
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>

<span class="token comment">## Credentials will be transmitted with every request to &quot;host_that_needs_auth&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function k(v,m){const a=e("ExternalLinkIcon");return p(),o("div",null,[l,n("p",null,[n("a",u,[s("官网"),c(a)])]),d])}const g=t(r,[["render",k],["__file","seleniumwire.html.vue"]]);export{g as default};
