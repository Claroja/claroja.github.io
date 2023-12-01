import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as p}from"./app-MTzDpLgJ.js";const t={},o=p(`<h1 id="project" tabindex="-1"><a class="header-anchor" href="#project" aria-hidden="true">#</a> project</h1><p>app.py</p><p>使用db.init_app()来初始化数据库</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask
<span class="token keyword">from</span> models <span class="token keyword">import</span> User
<span class="token keyword">from</span> exts <span class="token keyword">import</span> db


app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">&quot;JWT_SECRET_KEY&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;super-secret&quot;</span>  <span class="token comment"># Change this!</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">&quot;SQLALCHEMY_DATABASE_URI&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;sqlite:///foo.db&quot;</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">&quot;SQLALCHEMY_TRACK_MODIFICATIONS&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">False</span>
db<span class="token punctuation">.</span>init_app<span class="token punctuation">(</span>app<span class="token punctuation">)</span>

<span class="token keyword">with</span> app<span class="token punctuation">.</span>app_context<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    db<span class="token punctuation">.</span>session<span class="token punctuation">.</span>add<span class="token punctuation">(</span>User<span class="token punctuation">(</span>username<span class="token operator">=</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span> phone<span class="token operator">=</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span> password<span class="token operator">=</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    db<span class="token punctuation">.</span>session<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>exts.py 该文件是为了避免循环导入</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask_sqlalchemy <span class="token keyword">import</span> SQLAlchemy
db <span class="token operator">=</span> SQLAlchemy<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>models.py 将模型单独拆分到一个文件文件夹</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> exts <span class="token keyword">import</span> db
<span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">(</span>db<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span> <span class="token operator">=</span> db<span class="token punctuation">.</span>Column<span class="token punctuation">(</span>db<span class="token punctuation">.</span>Integer<span class="token punctuation">,</span> primary_key<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    username <span class="token operator">=</span> db<span class="token punctuation">.</span>Column<span class="token punctuation">(</span>db<span class="token punctuation">.</span>Text<span class="token punctuation">,</span> nullable<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> unique<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    phone <span class="token operator">=</span> db<span class="token punctuation">.</span>Column<span class="token punctuation">(</span>db<span class="token punctuation">.</span>Text<span class="token punctuation">,</span> nullable<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> unique<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    password <span class="token operator">=</span> db<span class="token punctuation">.</span>Column<span class="token punctuation">(</span>db<span class="token punctuation">.</span>Text<span class="token punctuation">,</span> nullable<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),e=[o];function c(l,i){return s(),a("div",null,e)}const d=n(t,[["render",c],["__file","project.html.vue"]]);export{d as default};
