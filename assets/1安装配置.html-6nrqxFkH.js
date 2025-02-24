import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as l,c as i,a as n,b as a,d as t,e as s}from"./app-A10JnHE0.js";const c={},r=s(`<h1 id="安装配置" tabindex="-1"><a class="header-anchor" href="#安装配置" aria-hidden="true">#</a> 安装配置</h1><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><p>配置基础配置</p><ol><li>让项目在浏览器中自动打开</li></ol><p>修改page.json文件中的&quot;serve&quot;, 加上<code>--open</code>即可</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service serve --open&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service build&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service lint&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>关闭ESLINT校验工具</p><p>太严格, 比如声明变量没有使用, 会报错. 创建vue.config.js文件, 输入以下内容, 并重启项目</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 关闭ESLINT校验工具</span>
    <span class="token literal-property property">onLintSave</span><span class="token operator">:</span><span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置src文件夹别名</p><p>为了方便以后的路径引用, 配置之后会输入<code>@</code>有提示. 根目录下创建一个jsconfig.json文件</p><pre><code> \`\`\`
 {
 &quot;compilerOptions&quot;: {
     &quot;baseUrl&quot;: &quot;./&quot;,
     &quot;paths&quot;: {
     &quot;@/*&quot;: [&quot;src/*&quot;]
     }
 },
 &quot;exclude&quot;: [&quot;node_modules&quot;, &quot;dist&quot;]
 }
 \`\`\`
</code></pre><p>注意&quot;exclude&quot;表示在&quot;node_modules&quot;, &quot;dist&quot;在这两个文件夹下不能使用<code>@</code>.</p></li><li><p>配置less</p><ol><li>安装<code>npm install --save less less-loader@5</code> 注意安装loader是5版本的</li><li>在组件的<code>&lt;style&gt;</code>中添加<code>lang=&quot;less&quot;</code>属性, 既<code>&lt;style scoped lang=&quot;less&quot;&gt;</code></li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.demo</span><span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
        <span class="token selector">.atguigu</span><span class="token punctuation">{</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="工程目录说明" tabindex="-1"><a class="header-anchor" href="#工程目录说明" aria-hidden="true">#</a> 工程目录说明</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── node_modules 
├── public
│   ├── favicon.ico: 页签图标
│   └── index.html: 主页面
├── src
│   ├── assets: 存放静态资源
│   │   └── logo.png
│   │── component: 存放组件
│   │   └── HelloWorld.vue
│   │── App.vue: 汇总所有组件
│   │── main.js: 入口文件
├── .gitignore: git版本管制忽略的配置
├── babel.config.js: babel的配置文件
├── package.json: 应用包配置文件 
├── README.md: 应用描述文件
├── package-lock.json：包版本控制文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工程文件介绍" tabindex="-1"><a class="header-anchor" href="#工程文件介绍" aria-hidden="true">#</a> 工程文件介绍</h2>`,10),u=s(`<li><p>vue.config.js配置文件</p><ol><li>使用vue inspect &gt; output.js可以查看到Vue脚手架的默认配置。</li><li>使用vue.config.js可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh</li></ol></li><li><p>package.json与package-lock.json</p><p>npm规范的一个文件, 常用的是&quot;scripts&quot;键</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service serve&quot;</span><span class="token punctuation">,</span> <span class="token comment">//对应 npm run server命令, 启动项目服务</span>
<span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service build&quot;</span><span class="token punctuation">,</span> <span class="token comment">//对应 npm run build, 编译文件最终输出</span>
<span class="token property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service lint&quot;</span><span class="token comment">// 对应 npm run lint, 语法检查 一般不用</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>main.js</p></li><li><p>vue文件</p></li>`,4),d={href:"https://segmentfault.com/a/1190000018013282",target:"_blank",rel:"noopener noreferrer"},v=s(`<p>目录中存在jsconfig.json文件表示该目录是JavaScript项目的根目录。</p><p>jsconfig.json源于tsconfig.json，是TypeScript的配置文件。jsconfig.json相当于tsconfig.json的“allowJs”属性设置为true。</p><p>文件本身可以选择列出属于项目的文件，要从项目中排除的文件，以及编译器选项。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
<span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;@/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/*&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token string-property property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td>exclude</td><td>列表, 其中的文件将不被编译(不是源码的一部分), 可以使用glob语法, 比如<code>src/**/*</code></td></tr><tr><td>include</td><td>和exclude相反</td></tr><tr><td>target</td><td>指定使用的默认库(lib.d.ts), 可选“es3”，“es5”，“es6”，“es2015”，“es2016”，“es2017”，“es2018”，“esnext”</td></tr><tr><td>baseUrl</td><td></td></tr><tr><td>paths</td><td></td></tr></tbody></table>`,5),k={href:"https://www.jianshu.com/p/b358a91bdf2d",target:"_blank",rel:"noopener noreferrer"},m=s(`<p>vue.config.js是一个可选的配置文件，如果项目的(和package.json同级的)根目录中存在这个文件，那么它会被@vue/cli-service自动加载。你也可以使用package.json中的vue字段，但是注意这种写法需要你严格遵照JSON的格式来写。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
<span class="token literal-property property">productionSourceMap</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token comment">// 关闭ESLINT校验工具</span>
<span class="token literal-property property">lintOnSave</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token comment">//配置代理跨域</span>
<span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;/api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//将/api路径的访问代理到target, 这里不能写域名, 域名是默认的</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:5000/&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述的代理配置, 对应axios的配置为</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//对于axios进行二次封装</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//创建axios实例</span>
<span class="token keyword">let</span> requests <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:8080/api&quot;</span><span class="token punctuation">,</span><span class="token comment">//这里可以简写成&quot;/&quot;</span>
<span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>既当前端请求<code>http://localhost:8080/api</code>时, webpack帮我们转发给了<code>http://localhost:5000/api</code></p><table><thead><tr><th>配置选项</th><th>描述</th></tr></thead><tbody><tr><td>publicPath</td><td>string, default:&#39;/&#39;, 相对路径, 如果值为(&#39;./&#39;)，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径</td></tr><tr><td>outputDir</td><td>输出文件目录，当运行 vue-cli-service build 时生成的生产环境构建文件的目录</td></tr><tr><td>assetsDir</td><td>Type: string, Default: &#39;&#39;, 放置生成的静态资源 (js、css、img、fonts) 的目录。</td></tr><tr><td>indexPath</td><td>Type: string, Default: &#39;index.html&#39;, <code>index.html</code> 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。</td></tr><tr><td>lintOnSave</td><td>Type: boolean, Default: true, 是否在保存的时候使用 <code>eslint-loader</code> 进行检查</td></tr><tr><td>devServer</td><td>Type: Object</td></tr></tbody></table>`,6),b=n("h2",{id:"参考",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),a(" 参考")],-1),g=n("ol",null,[n("li",null,"http://strapi.gridsome.bruski.wang/vue-vscode-eslint-min-config/")],-1);function q(h,y){const e=p("ExternalLinkIcon");return l(),i("div",null,[r,n("ol",null,[u,n("li",null,[n("p",null,[n("a",d,[a("jsconfigjson"),t(e)])]),v]),n("li",null,[n("p",null,[n("a",k,[a("vueconfigjs"),t(e)])]),m])]),b,g])}const x=o(c,[["render",q],["__file","1安装配置.html.vue"]]);export{x as default};
