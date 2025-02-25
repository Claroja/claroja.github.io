import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o,c as i,b as n,d as s,e as c,a}from"./app-7knaTE3M.js";const l={},u=a(`<h1 id="endpoint" tabindex="-1"><a class="header-anchor" href="#endpoint" aria-hidden="true">#</a> endpoint</h1><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><p>flask(werkzeug)主要思想就是将URL paths和 view function对应起来.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/greeting/&lt;name&gt;&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">give_greeting</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Hello, {0}!&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等价于</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">give_greeting</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Hello, {0}!&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
app<span class="token punctuation">.</span>add_url_rule<span class="token punctuation">(</span><span class="token string">&#39;/greeting/&lt;name&gt;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;give_greeting&#39;</span><span class="token punctuation">,</span> give_greeting<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而flask又增加了<code>endpoint</code>的概念, 也即是说 url path 对应了 endpoint, endpoint对应了view function. 默认情况下, endpoint和view function是相同的, 我们也可以修改</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/greeting/&lt;name&gt;&#39;</span><span class="token punctuation">,</span> endpoint<span class="token operator">=</span><span class="token string">&#39;say_hello&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">give_greeting</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Hello, {0}!&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个写法的含义就是URL<code>/greeting/&lt;name&gt;</code>对应了endpoint<code>say_hello</code>, endpoint<code>say_hello</code>又对应了view function<code>give_greeting</code>.</p><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><p>endpoint的主要作用是通过<code>url_for()</code>方法reverse lookup(倒排索引). <code>url_for</code>参数是<code>endpoint</code>, 返回是<code>url path</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span> url_for<span class="token punctuation">(</span><span class="token string">&#39;give_greeting&#39;</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&#39;Mark&#39;</span><span class="token punctuation">)</span> <span class="token comment"># This will print &#39;/greeting/Mark&#39;</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/greeting/&lt;name&gt;&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">give_greeting</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Hello, {0}!&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="为什么使用endpoint" tabindex="-1"><a class="header-anchor" href="#为什么使用endpoint" aria-hidden="true">#</a> 为什么使用endpoint</h2>`,13),r={href:"https://flask.palletsprojects.com/en/2.0.x/blueprints/",target:"_blank",rel:"noopener noreferrer"},d=a(`<p>main.py:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask<span class="token punctuation">,</span> Blueprint
<span class="token keyword">from</span> admin <span class="token keyword">import</span> admin
<span class="token keyword">from</span> user <span class="token keyword">import</span> user

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
app<span class="token punctuation">.</span>register_blueprint<span class="token punctuation">(</span>admin<span class="token punctuation">,</span> url_prefix<span class="token operator">=</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span>register_blueprint<span class="token punctuation">(</span>user<span class="token punctuation">,</span> url_prefix<span class="token operator">=</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>admin.py:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>admin <span class="token operator">=</span> Blueprint<span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> __name__<span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@admin<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/greeting&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">greeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Hello, administrative user!&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>user.py:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>user <span class="token operator">=</span> Blueprint<span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> __name__<span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@user<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/greeting&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">greeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Hello, lowly normal user!&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>admin.py</code>和<code>user.py</code>中都有<code>greeting()</code>方法, 如果我们仅仅使用url path到view funciton的映射就会有问题, 因为结果有两个, 分别是<code>/admin/greeting</code>和<code>/user/greeting</code>. 加了<code>endpoint</code>层就可以有效的解决这个问题.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>url_for<span class="token punctuation">(</span><span class="token string">&#39;admin.greeting&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># Prints &#39;/admin/greeting&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>url_for<span class="token punctuation">(</span><span class="token string">&#39;user.greeting&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># Prints &#39;/user/greeting&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://stackoverflow.com/questions/19261833/what-is-an-endpoint-in-flask</p>`,9);function k(g,v){const e=p("ExternalLinkIcon");return o(),i("div",null,[u,n("p",null,[s("为什么不直接使用url path到view function的映射, 而中间又加入了endpoint一层? 主要实践是"),n("a",r,[s("blueprints"),c(e)])]),d])}const b=t(l,[["render",k],["__file","endpoint.html.vue"]]);export{b as default};
