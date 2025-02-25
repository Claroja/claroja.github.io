import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-nD1Z-e8V.js";const e={},p=t(`<h1 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> setup</h1><p>setup的设计是为了使用组合式api. 在vue2中data、computed、methods、watch 组织逻辑在大多数情况下都有效。然而，当我们的组件变得更大时，逻辑关注点的列表也会增长。这可能会导致组件难以阅读和理解.</p><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">default</span> defineComponent<span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
		<span class="token comment">//此处只是测试一下setup，暂时不考虑响应式的问题。</span>
        <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span>
            <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;helo&quot;</span><span class="token punctuation">)</span>
                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>msg<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                msg<span class="token punctuation">,</span>
                test<span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="setup的特征" tabindex="-1"><a class="header-anchor" href="#setup的特征" aria-hidden="true">#</a> setup的特征</h2><ol><li>setup位于created和beforeCreated只前, 用于代替created和beforeCreated</li><li>setup函数里不能访问到this</li><li>setup内可以通过以下hook操作整个生命周期: <code>onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted,onErrorCaptured,onRenderTracked,onRenderTriggered</code></li><li>setup可接受props,context,其中props由于是响应式数据,不能直接解构赋值,context不是响应式数据,可以直接解构赋值;setup必须返回一个对象,一旦return,就可以像vue2.x的方式使用该属性</li><li>defineComponent是便于typescript推断类型的组件构造函数,可以传入</li></ol><h2 id="setup的参数" tabindex="-1"><a class="header-anchor" href="#setup的参数" aria-hidden="true">#</a> setup的参数:</h2><ul><li>props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。</li><li>context：上下文对象 <ul><li>attrs: 组件外部传递过来，但没有在props配置中声明的属性, 相当于 <code>this.$attrs</code>。</li><li>slots: 收到的插槽内容, 相当于 <code>this.$slots</code>。</li><li>emit: 分发自定义事件的函数, 相当于 <code>this.$emit</code></li></ul></li></ul><p>样例:</p><ol><li><p>Demo.vue</p><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;template&gt;
	&lt;slot name=&quot;qwe&quot;&gt;&lt;/slot&gt;
	&lt;button @click=&quot;test&quot;&gt;测试触发一下Demo组件的Hello事件&lt;/button&gt;
&lt;/template&gt;

&lt;script&gt;
	export default {
		name: &#39;Demo&#39;,
		props:[&#39;msg&#39;,],
		emits:[&#39;hello&#39;],
		setup(props, context){
			console.log(&#39;---setup---&#39;,props)
			console.log(&#39;---setup---&#39;,context)
			console.log(&#39;---setup---&#39;,context.emit) //触发自定义事件的。
			console.log(&#39;---setup---&#39;,context.slots) //插槽
			//方法
			function test(){
				context.emit(&#39;hello&#39;,666)
			}
			//返回一个对象（常用）
			return {
				test
			}
		}
	}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>App.vue</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token attr-name">@hello</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showHelloMsg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">msg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>你好啊<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>qwe</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>插槽值<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Demo</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> Demo <span class="token keyword">from</span> <span class="token string">&#39;./components/Demo&#39;</span>
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>Demo<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">function</span> <span class="token function">showHelloMsg</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">触发hello事件，收到的参数是:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">！</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">return</span> <span class="token punctuation">{</span>
				showHelloMsg
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,10),l=[p];function o(i,c){return s(),a("div",null,l)}const d=n(e,[["render",o],["__file","3_1setup.html.vue"]]);export{d as default};
