import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as p,c,a as n,b as s,d as e,e as i}from"./app-YE2Hltoy.js";const r={},l=n("h1",{id:"initweight",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#initweight","aria-hidden":"true"},"#"),s(" initweight")],-1),u={href:"https://vitejs.dev/guide/#scaffolding-your-first-vite-project",target:"_blank",rel:"noopener noreferrer"},d={href:"https://vitejs.dev/config/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://ithelp.ithome.com.tw/articles/10270465?sc=iThelpR",target:"_blank",rel:"noopener noreferrer"},v={id:"配置代理",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#配置代理","aria-hidden":"true"},"#",-1),m={href:"https://vitejs.dev/config/#server-proxy",target:"_blank",rel:"noopener noreferrer"},g=i(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;/api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 将前端访问的http://localhost:3000/api, 转发</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:3001&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 转发的目的地，完整的url是\`http://localhost:3001/api\`</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上配置如果我们前端发送请求<code>http://localhost:3000/api/login</code>，后端收到的是<code>http://localhost:3001/api/login</code>, 如果想后端收到的去掉<code>/api</code>, 可以添加<code>rewrite</code>属性:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>      <span class="token string-property property">&quot;/api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 将前端访问的http://localhost:3000/api, 转发, \`/api\`path路径会镜像复制到新的端口</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:3001&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 转发的目的地，完整的url是\`http://localhost:3001/api\`</span>
        <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function f(_,b){const a=o("ExternalLinkIcon");return p(),c("div",null,[l,n("p",null,[n("a",u,[s("安装"),e(a)]),n("a",d,[s("配置"),e(a)])]),n("p",null,[n("a",k,[s("配置案例参考"),e(a)])]),n("h2",v,[h,s(),n("a",m,[s("配置代理"),e(a)])]),g])}const q=t(r,[["render",f],["__file","vite.html.vue"]]);export{q as default};
