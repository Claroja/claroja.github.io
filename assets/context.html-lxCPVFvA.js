import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,a as t}from"./app-7knaTE3M.js";const e={},p=t(`<h1 id="context" tabindex="-1"><a class="header-anchor" href="#context" aria-hidden="true">#</a> context</h1><p>使用<code>init_app</code>来初始化SQLAlchemy, 在操作数据库时需要flask实例的上下文, 而直接使用<code>db = SQLAlchemy(app)</code>来初始化时, 则不需要.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">&#39;SQLALCHEMY_DATABASE_URI&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;My connection string&#39;</span>
db<span class="token punctuation">.</span>init_app<span class="token punctuation">(</span>app<span class="token punctuation">)</span>

<span class="token keyword">with</span> app<span class="token punctuation">.</span>app_context<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    db<span class="token punctuation">.</span>create_all<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://flask-sqlalchemy.palletsprojects.com/en/2.x/contexts/ https://stackoverflow.com/questions/46540664/no-application-found-either-work-inside-a-view-function-or-push-an-application</p>`,4),o=[p];function c(i,l){return a(),s("div",null,o)}const d=n(e,[["render",c],["__file","context.html.vue"]]);export{d as default};
