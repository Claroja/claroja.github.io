import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-SnI5rGHA.js";const t={},l=e(`<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> api</h1><p>在方法注释的<code>---</code>作为swagger的开端 parameters(请求), responses(返回设置) definitions</p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> parameters</h2><ol><li><p>name 请求的参数</p></li><li><p>in 请求参数放的位置:</p></li></ol><ul><li>path: 放在url后面</li><li>body: 放在请求体里</li></ul><ol start="3"><li><p>required 是否必须</p></li><li><p>type 类型分类: string number array object</p></li></ol><ul><li>String类型</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">parameters</span><span class="token punctuation">:</span>                      <span class="token comment"># 请求的参数</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> palette                <span class="token comment"># 请求参数的key</span>
    <span class="token key atrule">in</span><span class="token punctuation">:</span> path                     <span class="token comment"># 方式:path就是贴在url后面, 还可以填body,既写在请求体里</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> string                 <span class="token comment"># 参数的类型</span>
    <span class="token key atrule">enum</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rgb&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cmyk&#39;</span><span class="token punctuation">]</span> <span class="token comment"># 参数的可选值</span>
    <span class="token key atrule">required</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>               <span class="token comment"># 是否必须</span>
    <span class="token key atrule">default</span><span class="token punctuation">:</span> all                 <span class="token comment"># 默认值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>array类型 <code>items</code>和<code>array</code>对应出现</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">parameters</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> id
  <span class="token key atrule">in</span><span class="token punctuation">:</span> path
  <span class="token key atrule">description</span><span class="token punctuation">:</span> ID of pet to use
  <span class="token key atrule">required</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> array
  <span class="token key atrule">items</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> string
  <span class="token key atrule">collectionFormat</span><span class="token punctuation">:</span> csv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>object(Json)类型 <code>properties</code>与<code>object</code>对应出现 schema定义的内容, 可以在网页的module中显示 <ul><li>id schema的唯一标识, 会在网页的module的显示</li><li>type 类型</li><li>和type相关的</li></ul></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">parameters</span><span class="token punctuation">:</span>                      <span class="token comment"># 请求的参数</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> palette                <span class="token comment"># 请求参数的名称</span>
    <span class="token key atrule">in</span><span class="token punctuation">:</span> body                     <span class="token comment"># 参数放在请求体里</span>
    <span class="token key atrule">schema</span><span class="token punctuation">:</span>                      <span class="token comment"># 请求体的内容, 这里会在网页的module里显示的</span>
        <span class="token key atrule">id</span><span class="token punctuation">:</span> request              <span class="token comment"># 请求体id</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> object             <span class="token comment"># 请求体类型</span>
        <span class="token key atrule">properties</span><span class="token punctuation">:</span>              <span class="token comment"># object的内容</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span>                <span class="token comment"># key值</span>
                <span class="token key atrule">description</span><span class="token punctuation">:</span> des <span class="token comment"># 在module里显示</span>
                <span class="token key atrule">type</span><span class="token punctuation">:</span> string
            <span class="token key atrule">size</span><span class="token punctuation">:</span>                <span class="token comment"># key值</span>
                <span class="token key atrule">type</span><span class="token punctuation">:</span> number
        <span class="token key atrule">required</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> name
            <span class="token punctuation">-</span> size
        <span class="token key atrule">example</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> wang
            <span class="token key atrule">size</span><span class="token punctuation">:</span> <span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><p>一般的</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask<span class="token punctuation">,</span> jsonify
<span class="token keyword">from</span> flasgger <span class="token keyword">import</span> Swagger
app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
swagger <span class="token operator">=</span> Swagger<span class="token punctuation">(</span>app<span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/colors/&lt;palette&gt;/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">colors</span><span class="token punctuation">(</span>palette<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;Example endpoint returning a list of colors by palette
    This is using docstrings for specifications.
    ---                              # 这里开始是swagger的内容
    parameters:                      # 请求的参数
      - name: palette                # 请求参数的key
        in: body                     # 参数放在请求体里
        schema:                      # 请求体的内容, 这里会在网页的module里显示的
            id: request              # 请求体id
            type: object             # 请求体类型
            properties:              # object的内容
                name:                # key值
                    description: des # 在module里显示
                    type: string
                size:                # key值
                    type: number
    definitions:                     # 定义模板, 可以在其他地方引用
      Color:                         # 该模板的名称
        type: string                 # 模板的类型
      Palette:                       # 该模板的名称
        type: object                 # 模板的类型
        properties:                  # object类型的key:value
          palette_name:              # key值
            type: array              # value的类型,为array
            items:                   # value array的内容
              $ref: &#39;#/definitions/Color&#39; # arrays的内容, 引用Color模板
    responses:                       # 返回的结果
      200:                           # 200
        description: A list of colors (may be filtered by palette)
        schema:                      # response的格式
          $ref: &#39;                    #/definitions/Palette&#39;
    &quot;&quot;&quot;</span>
    all_colors <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;cmyk&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;cian&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;magenta&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yellow&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;black&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&#39;rgb&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> palette <span class="token operator">==</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">:</span>
        result <span class="token operator">=</span> all_colors
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        result <span class="token operator">=</span> <span class="token punctuation">{</span>palette<span class="token punctuation">:</span> all_colors<span class="token punctuation">.</span>get<span class="token punctuation">(</span>palette<span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span>result<span class="token punctuation">)</span>
app<span class="token punctuation">.</span>run<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用definitions</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask<span class="token punctuation">,</span> jsonify
<span class="token keyword">from</span> flasgger <span class="token keyword">import</span> Swagger

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
swagger <span class="token operator">=</span> Swagger<span class="token punctuation">(</span>app<span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/colors/&lt;palette&gt;/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">colors</span><span class="token punctuation">(</span>palette<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;Example endpoint returning a list of colors by palette
    This is using docstrings for specifications.
    ---                              # 这里开始是swagger的内容
    definitions:                     # 定义模板, 可以在其他地方引用
      Color:                         # 该模板的名称
        type: string                 # 模板的类型
      Palette:                       # 该模板的名称
        type: object                 # 模板的类型
        properties:                  # object类型的key:value
          palette_name:              # key值
            type: array              # value的类型,为array
            items:                   # value array的内容
              $ref: &#39;                #/definitions/Color&#39; # arrays的内容, 引用Color模板
    parameters:                      # 请求的参数
      - name: palette                # 请求参数的key
        in: path                     # 方式:path就是贴在url后面, 还可以填body,既写在请求体里
        type: string                 # 参数的类型
        enum: [&#39;all&#39;, &#39;rgb&#39;, &#39;cmyk&#39;] # 参数的可选值
        required: true               # 是否必须
        default: all                 # 默认值

    responses:                       # 返回的结果
      200:                           # 200
        description: A list of colors (may be filtered by palette)
        schema:                      # response的格式, 这里会在网页的module里显示的
          $ref: &#39;                    #/definitions/Palette&#39;
    &quot;&quot;&quot;</span>
    all_colors <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;cmyk&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;cian&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;magenta&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yellow&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;black&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&#39;rgb&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> palette <span class="token operator">==</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">:</span>
        result <span class="token operator">=</span> all_colors
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        result <span class="token operator">=</span> <span class="token punctuation">{</span>palette<span class="token punctuation">:</span> all_colors<span class="token punctuation">.</span>get<span class="token punctuation">(</span>palette<span class="token punctuation">)</span><span class="token punctuation">}</span>

    <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span>result<span class="token punctuation">)</span>

app<span class="token punctuation">.</span>run<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://github.com/flasgger/flasgger</p>`,18),p=[l];function i(o,c){return s(),a("div",null,p)}const d=n(t,[["render",i],["__file","api.html.vue"]]);export{d as default};
