import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o,c,a as n,b as s,d as t,e as l}from"./app-A10JnHE0.js";const u={},r=n("h1",{id:"router",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#router","aria-hidden":"true"},"#"),s(" router")],-1),i={href:"https://router.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://router.vuejs.org/guide/#router-link",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"<a>",-1),v={href:"https://router.vuejs.org/guide/#router-view",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"this.$router",-1),h=n("code",null,"createRouter()",-1),b=n("code",null,"this.$router",-1),g=n("code",null,"router",-1),y=n("code",null,"this",-1),q=n("code",null,"this.$router",-1),_=n("code",null,"this.$route",-1),f=n("code",null,"useRouter()",-1),w=l(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;search&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span>route<span class="token punctuation">.</span>query<span class="token punctuation">}</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>路由就是一组映射关系(key:value). key是路径, value是组件</p><h3 id="配置路由" tabindex="-1"><a class="header-anchor" href="#配置路由" aria-hidden="true">#</a> 配置路由</h3><ul><li>在router文件夹下创建<code>index.js</code>, 全局注册VueRouter模块</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>导入组件并配置路由 导入组件: <code>import Home from &quot;@/views/Home&quot;;</code> 注意: components文件夹放置的是非路由组件, 或者是全局组件 views文件夹放置路由组件</li></ul><p>配置组件路由:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/home&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> Home<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在<code>main.js</code>中挂在配置好的路由对象 区别于上一步, 上一步是全局注册路由, 而这里是挂在路由对象.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;@/router&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">//需要把router进行注册</span>
  <span class="token comment">//可以让全部的组件（非路由|路由组件）都可以获取到$route|$router属性</span>
  <span class="token comment">//$route(路由)：可以获取到路由信息（path、query、params）</span>
  <span class="token comment">//$router:进行编程式导航路由跳转push||replace</span>
  router
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在App.vue中的<code>&lt;template&gt;</code>中放置路由展示的位置 <code>&lt;router-view&gt;&lt;/router-view&gt;</code></li></ul><h3 id="路由的跳转" tabindex="-1"><a class="header-anchor" href="#路由的跳转" aria-hidden="true">#</a> 路由的跳转</h3><p>路由的跳转有两种形式:</p><ul><li>声明式导航<code>router-link</code>, 使用<code>to</code>属性指向跳转的url 在<code>Header</code>组件中, 写声明式导航</li></ul><p><code>&lt;router-link to=&quot;/login&quot;&gt;登录&lt;/router-link&gt;</code><code>&lt;router-link to=&quot;/register&quot; class=&quot;register&quot;&gt;免费注册&lt;/router-link&gt;</code></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./images/logo.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>编程式导航<code>push|replace</code>, 相比声明式导航, 还可以做一些业务逻辑 下面是用户点击搜索按钮, 通过函数跳转到<code>/search</code>, 在真实的场景中, 我们需要通过编程式方法获得search传递过来的参数</li></ul><h3 id="传参-编程式导航路由" tabindex="-1"><a class="header-anchor" href="#传参-编程式导航路由" aria-hidden="true">#</a> 传参(编程式导航路由):</h3><p>第一种是params参数 params参数属于路径当中一部分 在<code>router</code>中配置:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token punctuation">{</span>
    path<span class="token punctuation">:</span> <span class="token string">&quot;/search/:keyword?&quot;</span><span class="token punctuation">,</span>
    component<span class="token punctuation">:</span> Search<span class="token punctuation">,</span>
    meta<span class="token punctuation">:</span> <span class="token punctuation">{</span> isShow<span class="token punctuation">:</span> true <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里<code>:keyword?</code>是占位符, <code>?</code>代表该参数可传, 可不传 当浏览器中输入<code>localhost:8080/search/abc</code>, <code>abc</code>就会被当成<code>keyword</code>变量的值, 使用<code>$route.params.keyword</code>来获取</p><p>第二种是query参数 query参数 ?k=v &amp; k=v 形式 当浏览器中输入<code>localhost:8080/search?big=cba</code>, <code>cba</code>聚会被当成<code>big</code>变量的值, 使用<code>&lt;h1&gt;query参数展示{{$route.query.big}}&lt;/h1&gt;</code></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sui-btn btn-xlarge btn-danger<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>goSearch<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">goSearch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;/search&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//向search页面跳转</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了拼贴字符串以外, <code>push</code>方法还可以通过对象来传递param与query. 在<code>router</code>中定义路由的名称<code>name</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;search&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/search/:keyword&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> Search<span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">isShow</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在vue文件中, 使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">goSearch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;search&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">keyword</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>keyword <span class="token operator">||</span> <span class="token keyword">undefined</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">big</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>keyword<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>|| undefined</code>用来解决params参数可以传递|者不传递，万一传递空字符串的情况</p>`,29);function j(x,$){const a=p("ExternalLinkIcon");return o(),c("div",null,[r,n("p",null,[n("a",i,[s("官网"),t(a)])]),n("p",null,[n("a",d,[s("router-link"),t(a)]),s("代替"),k,s("对组件进行渲染, 可以不用重新加载页面(reload) "),n("a",v,[s("router-view"),t(a)]),s("组件渲染的位置 "),m,s("等价于"),h,s("创建的实例, "),b,s("的写法优势在于不需要在每个组件中实例化"),g,s(" 在component api中我们无法使用"),y,s("来获得"),q,s("和"),_,s(", 所以我们需要使用"),f]),w])}const R=e(u,[["render",j],["__file","router.html.vue"]]);export{R as default};
