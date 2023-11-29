import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-M6UUlHgF.js";const p={},e=t(`<h1 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> axios</h1><h2 id="请求模块" tabindex="-1"><a class="header-anchor" href="#请求模块" aria-hidden="true">#</a> 请求模块</h2><p>一般在src/api\`文件夹下</p><ul><li>ajax.js 配置请求实例, 做一些请求之前的配置</li><li>index.js 统一管理项目接口的模块，用来请求数据</li></ul><h2 id="ajax-js" tabindex="-1"><a class="header-anchor" href="#ajax-js" aria-hidden="true">#</a> ajax.js</h2><h3 id="创建axios实例-统一配置信息" tabindex="-1"><a class="header-anchor" href="#创建axios实例-统一配置信息" aria-hidden="true">#</a> 创建axios实例, 统一配置信息</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> requests <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token comment">//创建axios实例</span>
    <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&quot;/api&quot;</span><span class="token punctuation">,</span><span class="token comment">//基础路径</span>
    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span><span class="token comment">//请求不能超过5S</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求拦截器" tabindex="-1"><a class="header-anchor" href="#请求拦截器" aria-hidden="true">#</a> 请求拦截器</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;@/store&#39;</span><span class="token punctuation">;</span><span class="token comment">//导入仓库中的数据</span>
<span class="token comment">//请求拦截器，在发请求前做一些事情</span>
requests<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token comment">//config是配置对象, 可以配置headers请求头</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>uuid_token<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//获取用户的临时id</span>
    config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>userTempId <span class="token operator">=</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>uuid_token<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>user<span class="token punctuation">.</span>token<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//携带用户的token</span>
    config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>token <span class="token operator">=</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>user<span class="token punctuation">.</span>token<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  nprogress<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//进度条开始 记得导入import &quot;nprogress/nprogress.css&quot;;</span>
  <span class="token keyword">return</span> config<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="响应拦截器" tabindex="-1"><a class="header-anchor" href="#响应拦截器" aria-hidden="true">#</a> 响应拦截器</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//响应拦截器，成功返回后做一些事情</span>
requests<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">//成功的回调</span>
    nprogress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">//失败的回调</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;服务器响应数据失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="整体" tabindex="-1"><a class="header-anchor" href="#整体" aria-hidden="true">#</a> 整体</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//对于axios进行二次封装</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> nprogress <span class="token keyword">from</span> <span class="token string">&quot;nprogress&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//在当前模块中引入store</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;@/store&#39;</span><span class="token punctuation">;</span>
<span class="token comment">//如果出现进度条没有显示：一定是你忘记了引入样式了</span>
<span class="token keyword">import</span> <span class="token string">&quot;nprogress/nprogress.css&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//创建axios实例</span>
<span class="token keyword">let</span> requests <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">//基础路径</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&quot;/api&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">//请求不能超过5S</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//请求拦截器----在项目中发请求（请求没有发出去）可以做一些事情</span>
requests<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>uuid_token<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//请求头添加一个字段(userTempId):和后台老师商量好了</span>
    config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>userTempId <span class="token operator">=</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>uuid_token<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//需要携带token带给服务器</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>user<span class="token punctuation">.</span>token<span class="token punctuation">)</span><span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>token <span class="token operator">=</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>user<span class="token punctuation">.</span>token<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  nprogress<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//config是配置对象, 可以配置headers请求头</span>
  <span class="token keyword">return</span> config<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//响应拦截器----当服务器手动请求之后，做出响应（相应成功）会执行的</span>
requests<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">//成功的回调</span>
    nprogress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">//失败的回调</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;服务器响应数据失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//最终需要对外暴露</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> requests<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="index-js" tabindex="-1"><a class="header-anchor" href="#index-js" aria-hidden="true">#</a> index.js</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//统一管理项目接口的模块</span>
<span class="token comment">//引入二次封装的axios（带有请求、响应的拦截器）</span>
<span class="token keyword">import</span> requests <span class="token keyword">from</span> <span class="token string">&quot;./ajax&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">reqgetCategoryList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> requests<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/product/getBaseCategoryList</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),o=[e];function c(i,u){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","axios2.html.vue"]]);export{k as default};
