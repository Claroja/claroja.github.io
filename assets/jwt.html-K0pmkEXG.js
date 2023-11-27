import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-O0xqlHfm.js";const t={},i=e(`<h1 id="jwt" tabindex="-1"><a class="header-anchor" href="#jwt" aria-hidden="true">#</a> jwt</h1><p>flask_jwt_extended基础使用</p><h2 id="python服务启动" tabindex="-1"><a class="header-anchor" href="#python服务启动" aria-hidden="true">#</a> python服务启动</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask_jwt_extended <span class="token keyword">import</span> create_access_token<span class="token punctuation">,</span> get_jwt<span class="token punctuation">,</span> get_jwt_header<span class="token punctuation">,</span> get_jwt_identity
<span class="token keyword">from</span> flask_jwt_extended <span class="token keyword">import</span> jwt_required
<span class="token keyword">from</span> flask_jwt_extended <span class="token keyword">import</span> JWTManager

<span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask
<span class="token keyword">from</span> flask <span class="token keyword">import</span> jsonify
<span class="token keyword">from</span> datetime <span class="token keyword">import</span> timedelta


app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
jwt <span class="token operator">=</span> JWTManager<span class="token punctuation">(</span>app<span class="token punctuation">)</span>

app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">&#39;JWT_SECRET_KEY&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;salt&#39;</span>  <span class="token comment"># 加密盐值</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;POST&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    access_token <span class="token operator">=</span> create_access_token<span class="token punctuation">(</span>
        identity<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;username&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;wang&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        fresh<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>
        expires_delta<span class="token operator">=</span>timedelta<span class="token punctuation">(</span>seconds<span class="token operator">=</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        additional_claims<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;claims&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;claims&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        additional_headers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;header&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;header&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span>access_token<span class="token operator">=</span>access_token<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/index&#39;</span><span class="token punctuation">,</span>methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@jwt_required</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token string">&quot;get_jwt()&quot;</span><span class="token punctuation">:</span> get_jwt<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string">&quot;get_jwt_identity()&quot;</span><span class="token punctuation">:</span> get_jwt_identity<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string">&quot;get_jwt_header()&quot;</span><span class="token punctuation">:</span> get_jwt_header<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="没有token-访问返回未授权" tabindex="-1"><a class="header-anchor" href="#没有token-访问返回未授权" aria-hidden="true">#</a> 没有token,访问返回未授权</h2><p>直接访问被保护的路由<code>/index</code>, 返回401, UNAUTHORIZED.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ http get :5000/index
HTTP/1.0 <span class="token number">401</span> UNAUTHORIZED
Content-Length: <span class="token number">44</span>
Content-Type: application/json
Date: Thu, 06 Jan <span class="token number">2022</span> 03:36:24 GMT
Server: Werkzeug/2.0.2 Python/3.8.10

<span class="token punctuation">{</span>
    <span class="token string">&quot;msg&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Missing Authorization Header&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="访问登陆路由-login-获得token" tabindex="-1"><a class="header-anchor" href="#访问登陆路由-login-获得token" aria-hidden="true">#</a> 访问登陆路由<code>/login</code>, 获得token</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ http post :5000/login
HTTP/1.0 <span class="token number">200</span> OK
Content-Length: <span class="token number">368</span>
Content-Type: application/json
Date: Thu, 06 Jan <span class="token number">2022</span> 06:46:52 GMT
Server: Werkzeug/2.0.2 Python/3.8.10

<span class="token punctuation">{</span>
    <span class="token string">&quot;access_token&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImhlYWRlciI6ImhlYWRlciJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0MTQ1MTYxMiwianRpIjoiNGZkY2FhYWMtYmYzOC00MDBhLWExM2ItYjM4NWM3NDdlMGJiIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJpZCI6MSwidXNlcm5hbWUiOiJ3YW5nIn0sIm5iZiI6MTY0MTQ1MTYxMiwiZXhwIjoxNjQxNDUxNjcyLCJjbGFpbXMiOiJjbGFpbXMifQ.OMDUxAUSY7DzFYdTBvLmotzAzHOJ9f3mDczXpBGxoYk&quot;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以去<code>https://jwt.io/</code>解析该token,结果为:</p><h3 id="第一部分-header-algorithm-token-type-头部" tabindex="-1"><a class="header-anchor" href="#第一部分-header-algorithm-token-type-头部" aria-hidden="true">#</a> 第一部分: HEADER:ALGORITHM &amp; TOKEN TYPE, 头部</h3><p>表示该token的<code>type</code>为<code>JWT</code>, 签名算法<code>alg</code>为<code>HS256</code>, 这两个都是调用<code>create_access_token()</code>方法时自动生成, 另外我们可以传入参数<code>header</code>来增加额外的信息.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;typ&quot;</span><span class="token operator">:</span> <span class="token string">&quot;JWT&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;alg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HS256&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;header&quot;</span><span class="token operator">:</span> <span class="token string">&quot;header&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第二部分-payload-data-数据" tabindex="-1"><a class="header-anchor" href="#第二部分-payload-data-数据" aria-hidden="true">#</a> 第二部分: PAYLOAD:DATA, 数据</h3><table><thead><tr><th>字段</th><th>解释</th></tr></thead><tbody><tr><td>fresh</td><td>一个标记, 可以在验证的时候验证该标记. 调用<code>create_access_token()</code>手工传入</td></tr><tr><td>iat(issued at)</td><td>签发token的时间. 调用<code>create_access_token()</code>自动生成</td></tr><tr><td>jti(jwt id)</td><td>jwt的标志. 调用<code>create_access_token()</code>自动生成</td></tr><tr><td>type</td><td>jwt的类型, 调用<code>create_access_token()</code>为<code>access</code>, 调用<code>create_refresh_token()</code>为<code>refresh</code></td></tr><tr><td>sub(The subject of the token)</td><td>token的主题,一般将信息都写在此字段下, 调用<code>create_access_token()</code>时手动传入, <code>identity</code>参数对应的数据</td></tr><tr><td>nbf(not before)</td><td>token在此时间之前不能被接收处理, 和iat一样, 就是创建的时间.调用<code>create_access_token()</code>自动生成</td></tr><tr><td>exp(expires)</td><td>token失效的时间, 调用<code>create_access_token()</code>, 通过参数<code>expires_delta</code>来设置时间间隔, 会自动计算失效的时间点</td></tr><tr><td>claims</td><td>用户自己声明的一些数据, 调用<code>create_access_token()</code>, 通过参数<code>claim</code>来设置</td></tr></tbody></table><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;fresh&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;iat&quot;</span><span class="token operator">:</span> <span class="token number">1641449139</span><span class="token punctuation">,</span>
  <span class="token property">&quot;jti&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8cdd4bd6-26db-4eaa-bcc2-0b1e14a8c773&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;access&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sub&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wang&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;nbf&quot;</span><span class="token operator">:</span> <span class="token number">1641449139</span><span class="token punctuation">,</span>
  <span class="token property">&quot;exp&quot;</span><span class="token operator">:</span> <span class="token number">1641452739</span><span class="token punctuation">,</span>
  <span class="token property">&quot;claims&quot;</span><span class="token operator">:</span> <span class="token string">&quot;claims&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第三部分-verify-signature签名信息" tabindex="-1"><a class="header-anchor" href="#第三部分-verify-signature签名信息" aria-hidden="true">#</a> 第三部分, VERIFY SIGNATURE签名信息</h3><p>将header和payload组合起来, 并用HMACSHA256算法, 将其和自己设置的<code>盐</code>进行加密</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>HMACSHA256(
  base64UrlEncode(header) + <span class="token string">&quot;.&quot;</span> +
  base64UrlEncode(payload)<span class="token punctuation">,</span>
  
your<span class="token number">-256</span>-bit-secret

) secret base64 encoded
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="带着token成功访问被保护的路由-index" tabindex="-1"><a class="header-anchor" href="#带着token成功访问被保护的路由-index" aria-hidden="true">#</a> 带着token成功访问被保护的路由<code>/index</code></h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">JWT</span><span class="token operator">=</span><span class="token string">&quot;eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImhlYWRlciI6ImhlYWRlciJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0MTQ1MTYxMiwianRpIjoi
NGZkY2FhYWMtYmYzOC00MDBhLWExM2ItYjM4NWM3NDdlMGJiIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJpZCI6MSwidXNlcm5hbWUiOiJ3YW5nIn0sIm5iZiI6MTY
0MTQ1MTYxMiwiZXhwIjoxNjQxNDUxNjcyLCJjbGFpbXMiOiJjbGFpbXMifQ.OMDUxAUSY7DzFYdTBvLmotzAzHOJ9f3mDczXpBGxoYk&quot;</span>

$ http get :5000/index Authorization:<span class="token string">&quot;Bearer <span class="token variable">$JWT</span>&quot;</span>
HTTP/1.0 <span class="token number">200</span> OK
Content-Length: <span class="token number">440</span>
Content-Type: application/json
Date: Thu, 06 Jan <span class="token number">2022</span> 06:47:19 GMT
Server: Werkzeug/2.0.2 Python/3.8.10

<span class="token punctuation">{</span>
    <span class="token string">&quot;get_jwt()&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;claims&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;claims&quot;</span>,
        <span class="token string">&quot;exp&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1641451672</span>,
        <span class="token string">&quot;fresh&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;iat&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1641451612</span>,
        <span class="token string">&quot;jti&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;4fdcaaac-bf38-400a-a13b-b385c747e0bb&quot;</span>,
        <span class="token string">&quot;nbf&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1641451612</span>,
        <span class="token string">&quot;sub&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
            <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;wang&quot;</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;access&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;get_jwt_header()&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;alg&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;HS256&quot;</span>,
        <span class="token string">&quot;header&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;header&quot;</span>,
        <span class="token string">&quot;typ&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;JWT&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;get_jwt_identity()&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
        <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;wang&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>get_jwt()</td><td>返回payload</td></tr><tr><td>get_jwt_header()</td><td>获得头信息</td></tr><tr><td>get_jwt_identity()</td><td>获得payload的sub字段下的内容, 和<code>create_access_token()</code>中的<code>identity</code>参数对应</td></tr></tbody></table><h2 id="token过期" tabindex="-1"><a class="header-anchor" href="#token过期" aria-hidden="true">#</a> token过期</h2><p>因为我们设置<code>expires_delta</code>为1分钟,所以1分钟后, 再访问<code>/index</code>, 返回401未授权, 信息是token过时</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ http get :5000/index Authorization:<span class="token string">&quot;Bearer <span class="token variable">$JWT</span>&quot;</span>
HTTP/1.0 <span class="token number">401</span> UNAUTHORIZED
Content-Length: <span class="token number">33</span>
Content-Type: application/json
Date: Thu, 06 Jan <span class="token number">2022</span> 06:48:20 GMT
Server: Werkzeug/2.0.2 Python/3.8.10

<span class="token punctuation">{</span>
    <span class="token string">&quot;msg&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Token has expired&quot;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),o=[i];function p(c,l){return s(),a("div",null,o)}const r=n(t,[["render",p],["__file","jwt.html.vue"]]);export{r as default};
