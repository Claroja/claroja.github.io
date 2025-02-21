const n=JSON.parse(`{"key":"v-567cfc6c","path":"/7%E5%90%8E%E7%AB%AF/1flask/flask_jwt/permission.html","title":"permission","lang":"zh-CN","frontmatter":{"description":"permission 只有特定的permisson才能访问 from flask_jwt_extended import create_access_token, get_jwt_identity from flask_jwt_extended import get_jwt from flask_jwt_extended import JWTManager from flask_jwt_extended import verify_jwt_in_request from functools import wraps from datetime import timedelta from flask import Flask, url_for from flask import jsonify app = Flask(__name__) jwt = JWTManager(app) app.config[\\"JWT_SECRET_KEY\\"] = \\"salt\\" app.config['JWT_ACCESS_TOKEN_EXPIRES']=timedelta(hours=1) def permission_required(): def wrapper(fn): @wraps(fn) def decorator(*args, **kwargs): verify_jwt_in_request() # 必须先验证jwt, 类似加上了@jwt_required() identity = get_jwt_identity() if url_for(fn.__name__) in identity[\\"permission\\"]: return fn(*args, **kwargs) else: return jsonify(msg=\\"no permission\\"), 403 return decorator return wrapper @app.route(\\"/login\\", methods=[\\"POST\\"]) def login(): access_token = create_access_token( identity={'id': 1, 'username': 'apple', \\"permission\\":[\\"/protected\\"]}, ) return jsonify(access_token=access_token) @app.route(\\"/protected\\", methods=[\\"GET\\"]) @permission_required() # 使用自定义装饰器 def protected(): additional_claims = get_jwt() return jsonify(claims=additional_claims) if __name__ == \\"__main__\\": app.run()","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/7%E5%90%8E%E7%AB%AF/1flask/flask_jwt/permission.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"permission"}],["meta",{"property":"og:description","content":"permission 只有特定的permisson才能访问 from flask_jwt_extended import create_access_token, get_jwt_identity from flask_jwt_extended import get_jwt from flask_jwt_extended import JWTManager from flask_jwt_extended import verify_jwt_in_request from functools import wraps from datetime import timedelta from flask import Flask, url_for from flask import jsonify app = Flask(__name__) jwt = JWTManager(app) app.config[\\"JWT_SECRET_KEY\\"] = \\"salt\\" app.config['JWT_ACCESS_TOKEN_EXPIRES']=timedelta(hours=1) def permission_required(): def wrapper(fn): @wraps(fn) def decorator(*args, **kwargs): verify_jwt_in_request() # 必须先验证jwt, 类似加上了@jwt_required() identity = get_jwt_identity() if url_for(fn.__name__) in identity[\\"permission\\"]: return fn(*args, **kwargs) else: return jsonify(msg=\\"no permission\\"), 403 return decorator return wrapper @app.route(\\"/login\\", methods=[\\"POST\\"]) def login(): access_token = create_access_token( identity={'id': 1, 'username': 'apple', \\"permission\\":[\\"/protected\\"]}, ) return jsonify(access_token=access_token) @app.route(\\"/protected\\", methods=[\\"GET\\"]) @permission_required() # 使用自定义装饰器 def protected(): additional_claims = get_jwt() return jsonify(claims=additional_claims) if __name__ == \\"__main__\\": app.run()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"permission\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.86,"words":258},"filePathRelative":"7后端/1flask/flask_jwt/permission.md","localizedDate":"2025年2月21日","excerpt":"<h1> permission</h1>\\n<p>只有特定的permisson才能访问</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">from</span> flask_jwt_extended <span class=\\"token keyword\\">import</span> create_access_token<span class=\\"token punctuation\\">,</span> get_jwt_identity\\n<span class=\\"token keyword\\">from</span> flask_jwt_extended <span class=\\"token keyword\\">import</span> get_jwt\\n<span class=\\"token keyword\\">from</span> flask_jwt_extended <span class=\\"token keyword\\">import</span> JWTManager\\n<span class=\\"token keyword\\">from</span> flask_jwt_extended <span class=\\"token keyword\\">import</span> verify_jwt_in_request\\n\\n<span class=\\"token keyword\\">from</span> functools <span class=\\"token keyword\\">import</span> wraps\\n<span class=\\"token keyword\\">from</span> datetime <span class=\\"token keyword\\">import</span> timedelta\\n<span class=\\"token keyword\\">from</span> flask <span class=\\"token keyword\\">import</span> Flask<span class=\\"token punctuation\\">,</span> url_for\\n<span class=\\"token keyword\\">from</span> flask <span class=\\"token keyword\\">import</span> jsonify\\n\\napp <span class=\\"token operator\\">=</span> Flask<span class=\\"token punctuation\\">(</span>__name__<span class=\\"token punctuation\\">)</span>\\njwt <span class=\\"token operator\\">=</span> JWTManager<span class=\\"token punctuation\\">(</span>app<span class=\\"token punctuation\\">)</span>\\napp<span class=\\"token punctuation\\">.</span>config<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"JWT_SECRET_KEY\\"</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"salt\\"</span>\\napp<span class=\\"token punctuation\\">.</span>config<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'JWT_ACCESS_TOKEN_EXPIRES'</span><span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">=</span>timedelta<span class=\\"token punctuation\\">(</span>hours<span class=\\"token operator\\">=</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\n\\n\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">permission_required</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">wrapper</span><span class=\\"token punctuation\\">(</span>fn<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token decorator annotation punctuation\\">@wraps</span><span class=\\"token punctuation\\">(</span>fn<span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">decorator</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">*</span>args<span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">**</span>kwargs<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n            verify_jwt_in_request<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 必须先验证jwt, 类似加上了@jwt_required()</span>\\n            identity <span class=\\"token operator\\">=</span> get_jwt_identity<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n            <span class=\\"token keyword\\">if</span> url_for<span class=\\"token punctuation\\">(</span>fn<span class=\\"token punctuation\\">.</span>__name__<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">in</span> identity<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"permission\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">:</span>\\n                <span class=\\"token keyword\\">return</span> fn<span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">*</span>args<span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">**</span>kwargs<span class=\\"token punctuation\\">)</span>\\n            <span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">:</span>\\n                <span class=\\"token keyword\\">return</span> jsonify<span class=\\"token punctuation\\">(</span>msg<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"no permission\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">403</span>\\n        <span class=\\"token keyword\\">return</span> decorator\\n    <span class=\\"token keyword\\">return</span> wrapper\\n\\n<span class=\\"token decorator annotation punctuation\\">@app<span class=\\"token punctuation\\">.</span>route</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"/login\\"</span><span class=\\"token punctuation\\">,</span> methods<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"POST\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">login</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    access_token <span class=\\"token operator\\">=</span> create_access_token<span class=\\"token punctuation\\">(</span>\\n        identity<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">{</span><span class=\\"token string\\">'id'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'username'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'apple'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"permission\\"</span><span class=\\"token punctuation\\">:</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"/protected\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">return</span> jsonify<span class=\\"token punctuation\\">(</span>access_token<span class=\\"token operator\\">=</span>access_token<span class=\\"token punctuation\\">)</span>\\n\\n\\n<span class=\\"token decorator annotation punctuation\\">@app<span class=\\"token punctuation\\">.</span>route</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"/protected\\"</span><span class=\\"token punctuation\\">,</span> methods<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"GET\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token decorator annotation punctuation\\">@permission_required</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 使用自定义装饰器</span>\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">protected</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    additional_claims <span class=\\"token operator\\">=</span> get_jwt<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">return</span> jsonify<span class=\\"token punctuation\\">(</span>claims<span class=\\"token operator\\">=</span>additional_claims<span class=\\"token punctuation\\">)</span>\\n\\n\\n<span class=\\"token keyword\\">if</span> __name__ <span class=\\"token operator\\">==</span> <span class=\\"token string\\">\\"__main__\\"</span><span class=\\"token punctuation\\">:</span>\\n    app<span class=\\"token punctuation\\">.</span>run<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
