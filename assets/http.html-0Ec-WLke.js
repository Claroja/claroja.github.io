import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as n}from"./app-YE2Hltoy.js";const o="/assets/1-uDn0frkl.png",t="/assets/2-H9JS2HN1.png",p="/assets/3-xA_zW0gc.png",c={},l=n(`<h1 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> http</h1><h2 id="http-flow" tabindex="-1"><a class="header-anchor" href="#http-flow" aria-hidden="true">#</a> http flow</h2><ol><li>客户端创建一个TCP连接</li><li>发送一个HTTP请求消息</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">GET</span> <span class="token operator">/</span> <span class="token constant">HTTP</span><span class="token operator">/</span><span class="token number">1.1</span>
<span class="token literal-property property">Host</span><span class="token operator">:</span> developer<span class="token punctuation">.</span>mozilla<span class="token punctuation">.</span>org
Accept<span class="token operator">-</span>Language<span class="token operator">:</span> fr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>读取服务器发送的响应消息:</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">HTTP</span><span class="token operator">/</span><span class="token number">1.1</span> <span class="token number">200</span> <span class="token constant">OK</span>
<span class="token literal-property property">Date</span><span class="token operator">:</span> Sat<span class="token punctuation">,</span> <span class="token number">09</span> Oct <span class="token number">2010</span> <span class="token number">14</span><span class="token operator">:</span><span class="token number">28</span><span class="token operator">:</span><span class="token number">02</span> <span class="token constant">GMT</span>
<span class="token literal-property property">Server</span><span class="token operator">:</span> Apache
Last<span class="token operator">-</span>Modified<span class="token operator">:</span> Tue<span class="token punctuation">,</span> <span class="token number">01</span> Dec <span class="token number">2009</span> <span class="token number">20</span><span class="token operator">:</span><span class="token number">18</span><span class="token operator">:</span><span class="token number">22</span> <span class="token constant">GMT</span>
<span class="token literal-property property">ETag</span><span class="token operator">:</span> <span class="token string">&quot;51142bc1-7449-479b075b2891b&quot;</span>
Accept<span class="token operator">-</span>Ranges<span class="token operator">:</span> bytes
Content<span class="token operator">-</span>Length<span class="token operator">:</span> <span class="token number">29769</span>
Content<span class="token operator">-</span>Type<span class="token operator">:</span> text<span class="token operator">/</span>html

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span><span class="token function">…</span> <span class="token punctuation">(</span>here come the <span class="token number">29769</span> bytes <span class="token keyword">of</span> the requested web page<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>关闭或者复用连接再次发送请求</li></ol><h2 id="requests" tabindex="-1"><a class="header-anchor" href="#requests" aria-hidden="true">#</a> Requests</h2><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li><code>Method</code>: 客户端获取资源使用<code>GET</code>, 想要发送信息给服务器, 使用<code>POST</code></li><li><code>path</code>: 资源在服务器上的路径, 省去了<mark>protocol</mark>(<code>http://</code>),<mark>domain</mark>(<code>developer.mozilla.org</code>),<mark>port</mark>(<code>80</code>)</li><li><code>version of the protocol</code>:协议版本</li><li><code>Headers</code>: 请求的配置信息 <ol><li><code>General headers</code>: 通用的配置信息</li><li><code>Request headers</code>: 客户端的一些信息</li><li><code>Representation headers</code>: 指定<code>body</code>的格式, 长度等 ![4.png]</li></ol></li><li><code>body</code>: <code>POST</code>方法中含有</li></ol><h2 id="response" tabindex="-1"><a class="header-anchor" href="#response" aria-hidden="true">#</a> Response</h2><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li><p><code>version of the protocol</code>:协议版本</p></li><li><p><code>Status code</code>: 请求是否成功</p></li><li><p><code>status message</code>: 和<code>Status code</code>对应</p></li><li><p><code>Headers</code>: 返回的配置信息</p><ol><li><code>General headers</code>: 通用的配置信息</li><li><code>Response headers</code>: 客服务器的一些信息</li><li><code>Representation headers</code>: 指定<code>body</code>的格式, 长度等</li></ol><p>![5.png]</p></li><li><p><code>body</code>: 返回的数据</p></li></ol><h2 id="requests-和-response" tabindex="-1"><a class="header-anchor" href="#requests-和-response" aria-hidden="true">#</a> Requests 和 Response</h2><p>HTTP的请求和响应, 有相同的结构:</p><ol><li>start-line: 单行, 请求中记录请求方法(<code>GET</code>),资源路径<code>URL</code>,protocol(<code>HTTP/1.1</code>);响应中包含protocol(<code>HTTP/1.1</code>), status code(&#39;<code>200</code>), status message(<code>success</code>)</li><li>HTTP header: 多行, 请求中记录请求配置;响应中指明返回的内容的信息</li><li>空白行: 单行, 将body和<code>start-line``header</code>隔开</li><li>body: 多行, 请求中是<code>POST</code>方法的数据;响应中是响应结果</li></ol><p><code>start-line</code>和<code>HTTP header</code>一般统称为<code>head</code>, 而<code>body</code>也称为<code>payload</code>. <img src="'+p+'" alt="" loading="lazy"></p><p>参考: https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers</p>',18),r=[l];function d(i,u){return s(),a("div",null,r)}const m=e(c,[["render",d],["__file","http.html.vue"]]);export{m as default};
