const a=JSON.parse(`{"key":"v-31154a79","path":"/%E5%90%8E%E7%AB%AF/flask/flask_sql/context.html","title":"context","lang":"zh-CN","frontmatter":{"description":"context 使用init_app来初始化SQLAlchemy, 在操作数据库时需要flask实例的上下文, 而直接使用db = SQLAlchemy(app)来初始化时, 则不需要. app = Flask(__name__) app.config['SQLALCHEMY_DATABASE_URI'] = 'My connection string' db.init_app(app) with app.app_context(): db.create_all()","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E5%90%8E%E7%AB%AF/flask/flask_sql/context.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"context"}],["meta",{"property":"og:description","content":"context 使用init_app来初始化SQLAlchemy, 在操作数据库时需要flask实例的上下文, 而直接使用db = SQLAlchemy(app)来初始化时, 则不需要. app = Flask(__name__) app.config['SQLALCHEMY_DATABASE_URI'] = 'My connection string' db.init_app(app) with app.app_context(): db.create_all()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:17:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:17:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"context\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-27T13:17:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1701091021000,"updatedTime":1701091021000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.25,"words":76},"filePathRelative":"后端/flask/flask_sql/context.md","localizedDate":"2023年11月27日","excerpt":"<h1> context</h1>\\n<p>使用<code>init_app</code>来初始化SQLAlchemy, 在操作数据库时需要flask实例的上下文, 而直接使用<code>db = SQLAlchemy(app)</code>来初始化时, 则不需要.</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>app <span class=\\"token operator\\">=</span> Flask<span class=\\"token punctuation\\">(</span>__name__<span class=\\"token punctuation\\">)</span>\\napp<span class=\\"token punctuation\\">.</span>config<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'SQLALCHEMY_DATABASE_URI'</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'My connection string'</span>\\ndb<span class=\\"token punctuation\\">.</span>init_app<span class=\\"token punctuation\\">(</span>app<span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">with</span> app<span class=\\"token punctuation\\">.</span>app_context<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    db<span class=\\"token punctuation\\">.</span>create_all<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{a as data};
