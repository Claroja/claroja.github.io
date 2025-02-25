import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-7knaTE3M.js";const p={},e=t(`<h1 id="permission" tabindex="-1"><a class="header-anchor" href="#permission" aria-hidden="true">#</a> permission</h1><p>只有特定的permisson才能访问</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask_jwt_extended <span class="token keyword">import</span> create_access_token<span class="token punctuation">,</span> get_jwt_identity
<span class="token keyword">from</span> flask_jwt_extended <span class="token keyword">import</span> get_jwt
<span class="token keyword">from</span> flask_jwt_extended <span class="token keyword">import</span> JWTManager
<span class="token keyword">from</span> flask_jwt_extended <span class="token keyword">import</span> verify_jwt_in_request

<span class="token keyword">from</span> functools <span class="token keyword">import</span> wraps
<span class="token keyword">from</span> datetime <span class="token keyword">import</span> timedelta
<span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask<span class="token punctuation">,</span> url_for
<span class="token keyword">from</span> flask <span class="token keyword">import</span> jsonify

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
jwt <span class="token operator">=</span> JWTManager<span class="token punctuation">(</span>app<span class="token punctuation">)</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">&quot;JWT_SECRET_KEY&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;salt&quot;</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">&#39;JWT_ACCESS_TOKEN_EXPIRES&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span>timedelta<span class="token punctuation">(</span>hours<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">permission_required</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token decorator annotation punctuation">@wraps</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
        <span class="token keyword">def</span> <span class="token function">decorator</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
            verify_jwt_in_request<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 必须先验证jwt, 类似加上了@jwt_required()</span>
            identity <span class="token operator">=</span> get_jwt_identity<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> url_for<span class="token punctuation">(</span>fn<span class="token punctuation">.</span>__name__<span class="token punctuation">)</span> <span class="token keyword">in</span> identity<span class="token punctuation">[</span><span class="token string">&quot;permission&quot;</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> fn<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span>msg<span class="token operator">=</span><span class="token string">&quot;no permission&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">403</span>
        <span class="token keyword">return</span> decorator
    <span class="token keyword">return</span> wrapper

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    access_token <span class="token operator">=</span> create_access_token<span class="token punctuation">(</span>
        identity<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;username&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;apple&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;permission&quot;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token string">&quot;/protected&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span>access_token<span class="token operator">=</span>access_token<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&quot;/protected&quot;</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@permission_required</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 使用自定义装饰器</span>
<span class="token keyword">def</span> <span class="token function">protected</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    additional_claims <span class="token operator">=</span> get_jwt<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span>claims<span class="token operator">=</span>additional_claims<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>verify_jwt_in_request()</code>不返回任何东西。如果令牌解码链中的任何事情失败，它将返回一个适当的异常。也就是说它在这里的作用是为了校验当前请求有没有token,如果没有则会返回一个异常信息，不能访问被保护的节点，同样的和@jwt_required()它们一样有四个可选的参数：optional=False, fresh=False, refresh=False, locations=None</p>`,4),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","permission.html.vue"]]);export{k as default};
