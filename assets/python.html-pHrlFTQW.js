import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-yeyEmHfz.js";const t={},p=e(`<h1 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> python</h1><p>MySQL 1.最原始的方法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pymysql
CONN <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>
                       port<span class="token operator">=</span><span class="token number">3306</span><span class="token punctuation">,</span>
                       user<span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
                       password<span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
                       database<span class="token operator">=</span><span class="token string">&#39;ss&#39;</span><span class="token punctuation">,</span>
                       charset<span class="token operator">=</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span>

cursor <span class="token operator">=</span> CONN<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&#39;select * from test&#39;</span><span class="token punctuation">)</span>
result <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchall<span class="token punctuation">(</span><span class="token punctuation">)</span>
cursor<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pymysql
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
conn <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>
	user<span class="token operator">=</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>
	password<span class="token operator">=</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>
	host<span class="token operator">=</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
	database<span class="token operator">=</span><span class="token string">&quot;test&quot;</span>
<span class="token punctuation">)</span>
sql <span class="token operator">=</span> <span class="token string">&#39;select * from test&#39;</span>
df<span class="token operator">=</span>pd<span class="token punctuation">.</span>read_sql<span class="token punctuation">(</span>sql<span class="token punctuation">,</span>conn<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">from</span> sqlalchemy <span class="token keyword">import</span> create_engine
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token keyword">engine</span> <span class="token operator">=</span> create_engine<span class="token punctuation">(</span>
        <span class="token string">&quot;mysql+pymysql://user:password@127.0.0.1/test&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
<span class="token keyword">sql</span> <span class="token operator">=</span> <span class="token string">&#39;select * from test&#39;</span>
<span class="token comment">## 读数据</span>
<span class="token keyword">with</span> <span class="token keyword">engine</span><span class="token punctuation">.</span><span class="token keyword">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> conn:
    df <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_sql<span class="token punctuation">(</span><span class="token keyword">sql</span><span class="token punctuation">,</span> conn<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","python.html.vue"]]);export{d as default};
