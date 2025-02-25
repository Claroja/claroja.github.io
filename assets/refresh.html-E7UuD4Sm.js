import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-7knaTE3M.js";const t={},i=e(`<h1 id="refresh" tabindex="-1"><a class="header-anchor" href="#refresh" aria-hidden="true">#</a> refresh</h1><p>refresh token的作用是刷新access token. 因为一直使用同一个access token在网络中传输, 可能会被截获. 偶尔使用一次refresh token会降低风险. access_token只能用于携带访问，并不能用于刷新token；同理refresh_token只能用于刷新，不能用于访问数据。</p><h2 id="服务端代码" tabindex="-1"><a class="header-anchor" href="#服务端代码" aria-hidden="true">#</a> 服务端代码</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask_jwt_extended <span class="token keyword">import</span> create_access_token
<span class="token keyword">from</span> flask_jwt_extended <span class="token keyword">import</span> create_refresh_token
<span class="token keyword">from</span> flask_jwt_extended <span class="token keyword">import</span> get_jwt_identity
<span class="token keyword">from</span> flask_jwt_extended <span class="token keyword">import</span> jwt_required
<span class="token keyword">from</span> flask_jwt_extended <span class="token keyword">import</span> JWTManager

<span class="token keyword">from</span> datetime <span class="token keyword">import</span> timedelta
<span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask
<span class="token keyword">from</span> flask <span class="token keyword">import</span> jsonify

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">&#39;JWT_SECRET_KEY&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;salt&#39;</span>  <span class="token comment"># 加密盐值</span>
<span class="token comment">## 统一管理token的失效时间</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">&#39;JWT_ACCESS_TOKEN_EXPIRES&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> timedelta<span class="token punctuation">(</span>hours<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># 设置access_token的有效时间</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">&quot;JWT_REFRESH_TOKEN_EXPIRES&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> timedelta<span class="token punctuation">(</span>days<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># 设置refresh_token的有效时间</span>
jwt <span class="token operator">=</span> JWTManager<span class="token punctuation">(</span>app<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    access_token <span class="token operator">=</span> create_access_token<span class="token punctuation">(</span>identity<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;access&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># type=access</span>
    refresh_token <span class="token operator">=</span> create_refresh_token<span class="token punctuation">(</span>identity<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;refresh&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment"># type=refresh</span>
    <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span>access_token<span class="token operator">=</span>access_token<span class="token punctuation">,</span> refresh_token<span class="token operator">=</span>refresh_token<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&quot;/refresh&quot;</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@jwt_required</span><span class="token punctuation">(</span>refresh<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span> <span class="token comment"># 必须是type=refresh token才能访问</span>
<span class="token keyword">def</span> <span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    identity <span class="token operator">=</span> get_jwt_identity<span class="token punctuation">(</span><span class="token punctuation">)</span>
    access_token <span class="token operator">=</span> create_access_token<span class="token punctuation">(</span>identity<span class="token operator">=</span>identity<span class="token punctuation">)</span>
    <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span>access_token<span class="token operator">=</span>access_token<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&quot;/protected&quot;</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@jwt_required</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">protected</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    current_user <span class="token operator">=</span> get_jwt_identity<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span>current_user<span class="token operator">=</span>current_user<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ http post :5000/login
HTTP/1.0 <span class="token number">200</span> OK
Content-Length: <span class="token number">617</span>
Content-Type: application/json
Date: Thu, 06 Jan <span class="token number">2022</span> 08:10:31 GMT
Server: Werkzeug/2.0.2 Python/3.8.10

<span class="token punctuation">{</span>
    <span class="token string">&quot;access_token&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0MTQ1NjYzMSwianRpIjoiYzYyNjA1YjUtNjFiZi00ZTE5LTkzNmQtY2I0MzU5NmJjMGRlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJ1c2VyIjoiYWNjZXNzIn0sIm5iZiI6MTY0MTQ1NjYzMSwiZXhwIjoxNjQxNDYwMjMxfQ.zUSc4uBXTx8h2NhZtjRYXGdN1UzVo6S9ULOcuFIEq3k&quot;</span>,
    <span class="token string">&quot;refresh_token&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0MTQ1NjYzMSwianRpIjoiOTFiZTcxM2ItZjhjOC00MTI4LWEwZjUtZjVmMjI5ZjA1N2I3IiwidHlwZSI6InJlZnJlc2giLCJzdWIiOnsidXNlciI6InJlZnJlc2gifSwibmJmIjoxNjQxNDU2NjMxLCJleHAiOjE2NDE1NDMwMzF9.XMeOEyjLrpDzSCrj0X1syTt931lOlvpvHIBhO1leJPQ&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="access-token直接访问受保护的接口-protected" tabindex="-1"><a class="header-anchor" href="#access-token直接访问受保护的接口-protected" aria-hidden="true">#</a> access token直接访问受保护的接口/protected</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">JWT</span><span class="token operator">=</span><span class="token string">&quot;eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0MTQ1NjYzMSwianRpIjoiYzYyNjA1YjUtNjFiZi00ZTE5LTkzNmQtY2I0MzU5NmJjMGRlIiwidHlwZSI6ImFjY2V
zcyIsInN1YiI6eyJ1c2VyIjoiYWNjZXNzIn0sIm5iZiI6MTY0MTQ1NjYzMSwiZXhwIjoxNjQxNDYwMjMxfQ.zUSc4uBXTx8h2NhZtjRYXGdN1UzVo6S9ULOcuFIEq3k&quot;</span>
$ http get :5000/protected Authorization:<span class="token string">&quot;Bearer <span class="token variable">$JWT</span>&quot;</span>
HTTP/1.0 <span class="token number">200</span> OK
Content-Length: <span class="token number">49</span>
Content-Type: application/json
Date: Thu, 06 Jan <span class="token number">2022</span> 08:11:48 GMT
Server: Werkzeug/2.0.2 Python/3.8.10

<span class="token punctuation">{</span>
    <span class="token string">&quot;current_user&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;user&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;access&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="当access-token过期后-可以使用refresh-token到-refresh接口重新获得access-token" tabindex="-1"><a class="header-anchor" href="#当access-token过期后-可以使用refresh-token到-refresh接口重新获得access-token" aria-hidden="true">#</a> 当access token过期后, 可以使用refresh token到/refresh接口重新获得access token</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">JWT</span><span class="token operator">=</span><span class="token string">&quot;eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0MTQ1NjYzMSwianRpIjoiOTFiZTcxM2ItZjhjOC00MTI4LWEwZjUtZjVmMjI5ZjA1N2I3IiwidHlwZSI6InJlZnJlc2giLCJzdWIiOnsidXNlciI6InJlZnJlc2gifSwibmJmIjoxNjQxNDU2NjMxLCJleHAiOjE2NDE1NDMwMzF9.XMeOEyjLrpDzSCrj0X1syTt931lOlvpvHIBhO1leJPQ&quot;</span>

$ http post :5000/refresh Authorization:<span class="token string">&quot;Bearer <span class="token variable">$JWT</span>&quot;</span>
HTTP/1.0 <span class="token number">200</span> OK
Content-Length: <span class="token number">309</span>
Content-Type: application/json
Date: Thu, 06 Jan <span class="token number">2022</span> 08:13:49 GMT
Server: Werkzeug/2.0.2 Python/3.8.10

<span class="token punctuation">{</span>
    <span class="token string">&quot;access_token&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0MTQ1NjgyOSwianRpIjoiMDMwZDI5MjAtYjhlYS00NGY3LWIwYTYtMGQ3NDdjMzI0NTAyIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJ1c2VyIjoicmVmcmVzaCJ9LCJuYmYiOjE2NDE0NTY4MjksImV4cCI6MTY0MTQ2MDQyOX0.Twkjk-9NbC6f7O-j0yNXKEtiTm4jGw5L8kAyGwGN60M&quot;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="access-token不能访问-refresh接口" tabindex="-1"><a class="header-anchor" href="#access-token不能访问-refresh接口" aria-hidden="true">#</a> access token不能访问/refresh接口</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">JWT</span><span class="token operator">=</span><span class="token string">&quot;eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0MTQ1NjYzMSwianRpIjoiYzYyNjA1YjUtNjFiZi00ZTE5LTkzNmQtY2I0MzU5NmJjMGRlIiwidHlwZSI6ImFjY2V
zcyIsInN1YiI6eyJ1c2VyIjoiYWNjZXNzIn0sIm5iZiI6MTY0MTQ1NjYzMSwiZXhwIjoxNjQxNDYwMjMxfQ.zUSc4uBXTx8h2NhZtjRYXGdN1UzVo6S9ULOcuFIEq3k&quot;</span>
$ http get :5000/refresh Authorization:<span class="token string">&quot;Bearer <span class="token variable">$JWT</span>&quot;</span>
HTTP/1.0 <span class="token number">422</span> UNPROCESSABLE ENTITY
Content-Length: <span class="token number">47</span>
Content-Type: application/json
Date: Thu, 06 Jan <span class="token number">2022</span> 08:12:37 GMT
Server: Werkzeug/2.0.2 Python/3.8.10

<span class="token punctuation">{</span>
    <span class="token string">&quot;msg&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Only refresh tokens are allowed&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="refresh-token不能访问-protected接口" tabindex="-1"><a class="header-anchor" href="#refresh-token不能访问-protected接口" aria-hidden="true">#</a> refresh token不能访问/protected接口</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">JWT</span><span class="token operator">=</span><span class="token string">&quot;eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0MTQ1NjYzMSwianRpIjoiOTFiZTcxM2ItZjhjOC00MTI4LWEwZjUtZjVmMjI5ZjA1N2I3IiwidHlwZSI6InJlZnJlc2giLCJzdWIiOnsidXNlciI6InJlZnJlc2gifSwibmJmIjoxNjQxNDU2NjMxLCJleHAiOjE2NDE1NDMwMzF9.XMeOEyjLrpDzSCrj0X1syTt931lOlvpvHIBhO1leJPQ&quot;</span>

$ http get :5000/protected Authorization:<span class="token string">&quot;Bearer <span class="token variable">$JWT</span>&quot;</span>
HTTP/1.0 <span class="token number">422</span> UNPROCESSABLE ENTITY
Content-Length: <span class="token number">51</span>
Content-Type: application/json
Date: Thu, 06 Jan <span class="token number">2022</span> 08:13:34 GMT
Server: Werkzeug/2.0.2 Python/3.8.10

<span class="token punctuation">{</span>
    <span class="token string">&quot;msg&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Only non-refresh tokens are allowed&quot;</span>
<span class="token punctuation">}</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[i];function p(c,l){return s(),a("div",null,o)}const d=n(t,[["render",p],["__file","refresh.html.vue"]]);export{d as default};
