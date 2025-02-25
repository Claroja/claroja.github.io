import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as s,a as t}from"./app-7knaTE3M.js";const i={},l=t(`<h1 id="异步组件suspense" tabindex="-1"><a class="header-anchor" href="#异步组件suspense" aria-hidden="true">#</a> 异步组件suspense</h1><p>等待异步组件时渲染一些额外内容，让应用有更好的用户体验</p><p>使用步骤：</p><ol><li><p>异步引入组件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>defineAsyncComponent<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> Child <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./components/Child.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用<code>Suspense</code>包裹组件，并配置好<code>default</code> 与 <code>fallback</code></p><ol><li><p>父组件<code>App.vue</code></p><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;template&gt;
	&lt;div class=&quot;app&quot;&gt;
		&lt;h3&gt;我是App组件&lt;/h3&gt;
		&lt;Suspense&gt;
			&lt;template v-slot:default&gt;
				&lt;Child/&gt;
			&lt;/template&gt;
			&lt;template v-slot:fallback&gt;
				&lt;h3&gt;稍等，加载中...&lt;/h3&gt;
			&lt;/template&gt;
		&lt;/Suspense&gt;
	&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
	// import Child from &#39;./components/Child&#39;//静态引入
	import {defineAsyncComponent} from &#39;vue&#39; 
	const Child = defineAsyncComponent(()=&gt;import(&#39;./components/Child&#39;)) //异步引入
	export default {
		name:&#39;App&#39;,
		components:{Child},
	}
&lt;/script&gt;

&lt;style&gt;
	.app{
		background-color: gray;
		padding: 10px;
	}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>子组件<code>Child.vue</code></p><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;template&gt;
	&lt;div class=&quot;child&quot;&gt;
		&lt;h3&gt;我是Child组件&lt;/h3&gt;
		{{sum}}
	&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
	import {ref} from &#39;vue&#39;
	export default {
		name:&#39;Child&#39;,
		async setup(){// 因为使用了&lt;Suspense&gt;, 所以可以使用async, 否则不可以
			let sum = ref(0)
			let p = new Promise((resolve,reject)=&gt;{
				setTimeout(()=&gt;{
					resolve({sum})
				},3000)
			})
			return await p
		}
	}
&lt;/script&gt;

&lt;style&gt;
	.child{
		background-color: skyblue;
		padding: 10px;
	}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ol><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://cn.vuejs.org/guide/components/async.html</li></ol>`,6),a=[l];function d(c,v){return e(),s("div",null,a)}const o=n(i,[["render",d],["__file","8异步组件suspense.html.vue"]]);export{o as default};
