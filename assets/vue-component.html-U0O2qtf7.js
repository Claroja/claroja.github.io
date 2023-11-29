import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as l,c as o,a as s,b as n,d as c,e as a}from"./app-M6UUlHgF.js";const i={},u=a('<h1 id="svd" tabindex="-1"><a class="header-anchor" href="#svd" aria-hidden="true">#</a> svd</h1><h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2><p>Vue中使用组件的三大步骤：</p><h3 id="vue-cli中" tabindex="-1"><a class="header-anchor" href="#vue-cli中" aria-hidden="true">#</a> vue-cli中:</h3><ol><li>定义组件: 之间创建<code>.vue</code>文件, 文件分为3个部分<code>template</code>(用于写html), <code>script</code>(用来写vue的属性), <code>style</code>(用来写样式)</li><li>注册组件: 在其他<code>.vue</code>文件中的<code>components</code>属性中填入即可, 如<code>components:{app}</code></li><li>使用组件: 直接使用组件名作为标签名, <code>&lt;component&gt;&lt;/component&gt;</code></li></ol><h3 id="在html文件中" tabindex="-1"><a class="header-anchor" href="#在html文件中" aria-hidden="true">#</a> 在html文件中:</h3>',6),r=a("<li>如何定义一个组件？ <ol><li>使用<code>Vue.extend(options)</code>创建，其中<code>options和new Vue(options)</code>时传入的那个options几乎一样，但也有点区别 <ul><li>el不要写, 最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器。</li><li>data必须写成函数, 避免组件被复用时，数据存在引用关系。</li><li>简写形式: <code>const school = Vue.extend(options)</code> 可简写为：<code>const school = options</code></li></ul></li></ol></li><li>如何注册组件？ 1.局部注册：靠new Vue的时候传入components选项 2.全局注册：靠<code>Vue.component(&#39;组件名&#39;,组件)</code></li>",2),k=s("code",null,"<school></school>",-1),d=a(`<h2 id="样例" tabindex="-1"><a class="header-anchor" href="#样例" aria-hidden="true">#</a> 样例</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcss.com/vue/2.6.10/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token comment">&lt;!-- 第三步：编写组件标签 --&gt;</span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>school</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>school</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token comment">//第一步：创建school组件</span>
		<span class="token keyword">const</span> school <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token comment">//Vue.extend可以省略</span>
			<span class="token literal-property property">template</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
				&lt;div&gt;
					&lt;h2&gt;学校名称：{{schoolName}}&lt;/h2&gt;
					&lt;button @click=&quot;showName&quot;&gt;点我提示学校名&lt;/button&gt;	
				&lt;/div&gt;
			</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
			<span class="token comment">// el:&#39;#root&#39;, //组件定义时，不要写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务于哪个容器。</span>
			<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">// 每次都返回一个新的数据对象, 避免了组件复用时, 引用同一个数据地址</span>
				<span class="token keyword">return</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">schoolName</span><span class="token operator">:</span><span class="token string">&#39;wang&#39;</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token function">showName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					<span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>schoolName<span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
		
		<span class="token comment">//创建vm</span>
		<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
				<span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token string">&#39;你好啊！&#39;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">// template:&#39;&lt;school&gt;&lt;/school&gt;&#39;,在Vue对象中使用template可以不必在标签中再次使用该标签,既可渲染.</span>
			<span class="token comment">//第二步：注册组件（局部注册）, 组件只能在该对象绑定的元素内使用</span>
			<span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>
				school<span class="token punctuation">,</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>

	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全局与局部" tabindex="-1"><a class="header-anchor" href="#全局与局部" aria-hidden="true">#</a> 全局与局部</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>component局部与全局<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcss.com/vue/2.6.10/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hello</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hello</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hello</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hello</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token comment">//第一步：创建hello组件</span>
		<span class="token keyword">const</span> hello <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">template</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
				&lt;div&gt;	
					&lt;h2&gt;你好啊！{{name}}&lt;/h2&gt;
				&lt;/div&gt;
			</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
			<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;Tom&#39;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
		
		<span class="token comment">//第二步：全局注册组件</span>
		Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>hello<span class="token punctuation">)</span>

		<span class="token comment">//创建vm</span>
		<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
				<span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token string">&#39;你好啊！&#39;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">//第二步：注册组件（局部注册）</span>
			<span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>
				<span class="token comment">// hello, //不需要注册, 因为hello现在是全局的, 不需要在局部再次注册</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>

		<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&#39;#root2&#39;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件嵌套" tabindex="-1"><a class="header-anchor" href="#组件嵌套" aria-hidden="true">#</a> 组件嵌套</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>组件的嵌套<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
		<span class="token comment">&lt;!-- 引入Vue --&gt;</span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../js/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
		<span class="token comment">&lt;!-- 准备好一个容器--&gt;</span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token comment">//阻止 vue 在启动时生成生产提示。</span>

		<span class="token comment">//定义student组件</span>
		<span class="token keyword">const</span> student <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;student&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">template</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
				&lt;div&gt;
					&lt;h2&gt;学生姓名：{{name}}&lt;/h2&gt;	
					&lt;h2&gt;学生年龄：{{age}}&lt;/h2&gt;	
				&lt;/div&gt;
			</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
			<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;尚硅谷&#39;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
		
		<span class="token comment">//定义school组件</span>
		<span class="token keyword">const</span> school <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;school&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">template</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
				&lt;div&gt;
					&lt;h2&gt;学校名称：{{name}}&lt;/h2&gt;	
					&lt;h2&gt;学校地址：{{address}}&lt;/h2&gt;	
					&lt;student&gt;&lt;/student&gt;
				&lt;/div&gt;
			</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
			<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;尚硅谷&#39;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">address</span><span class="token operator">:</span><span class="token string">&#39;北京&#39;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">//注册组件（局部）</span>
			<span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>
				student
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>

		<span class="token comment">//定义hello组件</span>
		<span class="token keyword">const</span> hello <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">template</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;h1&gt;{{msg}}&lt;/h1&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
			<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token string">&#39;欢迎来到尚硅谷学习！&#39;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
		
		<span class="token comment">//定义app组件</span>
		<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">template</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
				&lt;div&gt;	
					&lt;hello&gt;&lt;/hello&gt;
					&lt;school&gt;&lt;/school&gt;
				&lt;/div&gt;
			</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
			<span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>
				school<span class="token punctuation">,</span>
				hello
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>

		<span class="token comment">//创建vm</span>
		<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">template</span><span class="token operator">:</span><span class="token string">&#39;&lt;app&gt;&lt;/app&gt;&#39;</span><span class="token punctuation">,</span><span class="token comment">//template键会直接在绑定的元素里生成, 而不需要再写&lt;app&gt;&lt;/app&gt;标签</span>
			<span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">,</span>
			<span class="token comment">//注册组件（局部）</span>
			<span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>app<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function v(m,g){const t=e("school");return l(),o("div",null,[u,s("ol",null,[r,s("li",null,[n("使用组件："),k,n(" template:'"),c(t),n("',在Vue对象中使用template可以不必在标签中再次使用该标签,既可渲染.")])]),d])}const y=p(i,[["render",v],["__file","vue-component.html.vue"]]);export{y as default};
