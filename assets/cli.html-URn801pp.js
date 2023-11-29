import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-M6UUlHgF.js";const t={},i=e(`<h1 id="cli" tabindex="-1"><a class="header-anchor" href="#cli" aria-hidden="true">#</a> cli</h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><ol><li>npm install -g @vue/cli</li><li>vue create xxxx</li><li>npm run serve 建议设置国内镜像: npm config set registry https://registry.npm.taobao.org</li></ol><h2 id="工程目录说明" tabindex="-1"><a class="header-anchor" href="#工程目录说明" aria-hidden="true">#</a> 工程目录说明</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── node_modules 
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-config-js配置文件" tabindex="-1"><a class="header-anchor" href="#vue-config-js配置文件" aria-hidden="true">#</a> vue.config.js配置文件</h2><ol><li>使用vue inspect &gt; output.js可以查看到Vue脚手架的默认配置。</li><li>使用vue.config.js可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh</li></ol><h2 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> package.json</h2><p>npm规范的一个文件, 常用的是&quot;scripts&quot;键</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service serve&quot;</span><span class="token punctuation">,</span> <span class="token comment">//对应 npm run server命令, 启动项目服务</span>
<span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service build&quot;</span><span class="token punctuation">,</span> <span class="token comment">//对应 npm run build, 编译文件最终输出</span>
<span class="token property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service lint&quot;</span><span class="token comment">// 对应 npm run lint, 语法检查 一般不用</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="package-lock-json" tabindex="-1"><a class="header-anchor" href="#package-lock-json" aria-hidden="true">#</a> package-lock.json</h2><p>npm规范的包管理器</p><h2 id="main-js" tabindex="-1"><a class="header-anchor" href="#main-js" aria-hidden="true">#</a> main.js</h2><h2 id="vue文件" tabindex="-1"><a class="header-anchor" href="#vue文件" aria-hidden="true">#</a> vue文件</h2><h3 id="style" tabindex="-1"><a class="header-anchor" href="#style" aria-hidden="true">#</a> <code>&lt;style&gt;</code></h3><ol><li>scoped 只在组件中有效</li><li>lang 可以选择编译语言</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
	<span class="token selector">.demo</span><span class="token punctuation">{</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
		<span class="token selector">.atguigu</span><span class="token punctuation">{</span>
			<span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),l=[i];function c(o,p){return s(),a("div",null,l)}const u=n(t,[["render",c],["__file","cli.html.vue"]]);export{u as default};
