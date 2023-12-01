import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-MTzDpLgJ.js";const p={},t=e(`<h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h1><h2 id="ts开发配置" tabindex="-1"><a class="header-anchor" href="#ts开发配置" aria-hidden="true">#</a> ts开发配置</h2><p>实际开发中我们都需要使用构建工具对代码进行打包，TS一般也是结合构建工具一起使用</p><ol><li><code>npm init -y</code> 初始化, 创建package.json</li><li><code>npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin</code> 下载依赖 共7个包 <ul><li>webpack 构建工具webpack</li><li>webpack-cli webpack的命令行工具</li><li>webpack-dev-server webpack的开发服务器</li><li>typescript ts编译器</li><li>ts-loader ts加载器，用于在webpack中编译ts文件</li><li>html-webpack-plugin webpack中html插件，用来自动创建html文件</li><li>clean-webpack-plugin webpack中的清除插件，每次构建都会先清除目录</li></ul></li><li>根目录下创建webpack的配置文件<code>webpack.config.js</code></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 引入一个包</span>
<span class="token keyword">const</span> HTMLWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 引入html插件</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;clean-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 引入clean插件</span>
<span class="token comment">// webpack中的所有的配置信息都应该写在module.exports中</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.ts&quot;</span><span class="token punctuation">,</span><span class="token comment">// 指定入口文件, 主文件</span>
    <span class="token comment">// 指定打包文件所在目录</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">// 指定打包文件的目录</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;bundle.js&quot;</span><span class="token punctuation">,</span><span class="token comment">// 打包后文件的文件</span>
        <span class="token literal-property property">environment</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">// 告诉webpack不使用箭头</span>
            <span class="token literal-property property">arrowFunction</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 指定webpack打包时要使用模块</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token comment">// 指定要加载的规则</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.ts$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span><span class="token comment">// test指定的是规则生效的文件</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token comment">// 要使用的loader</span>
                     <span class="token punctuation">{</span><span class="token comment">// 配置babel</span>
                         <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span><span class="token comment">// 2. 再用babel转换成不同浏览器兼容的形式</span>
                         <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">// 设置babel</span>
                             <span class="token literal-property property">presets</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token comment">// 设置预定义的环境</span>
                                 <span class="token punctuation">[</span>
                                     <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span><span class="token comment">// 指定环境的插件</span>
                                     <span class="token punctuation">{</span><span class="token comment">// 配置信息</span>
                                         <span class="token literal-property property">targets</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">// 要兼容的目标浏览器</span>
                                             <span class="token string-property property">&quot;chrome&quot;</span><span class="token operator">:</span><span class="token string">&quot;58&quot;</span><span class="token punctuation">,</span>
                                             <span class="token string-property property">&quot;ie&quot;</span><span class="token operator">:</span><span class="token string">&quot;11&quot;</span>
                                         <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                         <span class="token string-property property">&quot;corejs&quot;</span><span class="token operator">:</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span><span class="token comment">// 指定corejs的版本</span>
                                         <span class="token string-property property">&quot;useBuiltIns&quot;</span><span class="token operator">:</span><span class="token string">&quot;usage&quot;</span><span class="token comment">// 使用corejs的方式 &quot;usage&quot; 表示按需加载</span>
                                     <span class="token punctuation">}</span>
                                 <span class="token punctuation">]</span>
                             <span class="token punctuation">]</span>
                         <span class="token punctuation">}</span>
                     <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;ts-loader&#39;</span> <span class="token comment">//1. 先用ts-loader加载ts文件</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/node-modules/</span><span class="token template-punctuation string">\`</span></span><span class="token comment">// 要排除的文件</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 配置Webpack插件</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">HTMLWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">// title: &quot;这是一个自定义的title&quot;</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 用来设置引用模块</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.ts&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.js&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>根目录下创建tsconfig.json，配置可以根据自己需要</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES2015&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES2015&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>修改package.json添加如下配置</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    ...略...
    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack serve --open chrome.exe&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    ...略...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>在src下创建ts文件，并在并命令行执行<code>npm run build</code>对代码进行编译，或者执行<code>npm start</code>来启动开发服务器</li></ol><h2 id="babel" tabindex="-1"><a class="header-anchor" href="#babel" aria-hidden="true">#</a> babel</h2><p>开发中还经常需要结合babel来对代码进行转换以使其可以兼容到更多的浏览器，在上述步骤的基础上，通过以下步骤再将babel引入到项目中。</p><ol><li>安装依赖包：</li></ol><ul><li><code>npm i -D @babel/core @babel/preset-env babel-loader core-js</code></li><li>共安装了4个包，分别是：</li><li>@babel/core babel的核心工具</li><li>@babel/preset-env babel的预定义环境</li><li>@babel-loader babel在webpack中的加载器</li><li>core-js core-js用来使老版本的浏览器支持新版ES语法</li></ul><ol start="2"><li>修改webpack.config.js配置文件</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">...</span>略<span class="token operator">...</span>
<span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.ts$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
                        <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                            <span class="token punctuation">[</span>
                                <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span>
                                <span class="token punctuation">{</span>
                                    <span class="token string-property property">&quot;targets&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                                        <span class="token string-property property">&quot;chrome&quot;</span><span class="token operator">:</span> <span class="token string">&quot;58&quot;</span><span class="token punctuation">,</span>
                                        <span class="token string-property property">&quot;ie&quot;</span><span class="token operator">:</span> <span class="token string">&quot;11&quot;</span>
                                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                    <span class="token string-property property">&quot;corejs&quot;</span><span class="token operator">:</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
                                    <span class="token string-property property">&quot;useBuiltIns&quot;</span><span class="token operator">:</span> <span class="token string">&quot;usage&quot;</span>
                                <span class="token punctuation">}</span>
                            <span class="token punctuation">]</span>
                        <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;ts-loader&quot;</span><span class="token punctuation">,</span>

                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span>略<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),o=[t];function l(c,i){return s(),a("div",null,o)}const k=n(p,[["render",l],["__file","webpack.html.vue"]]);export{k as default};
