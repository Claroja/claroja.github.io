import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o,c as d,b as e,d as t,e as l,a as r}from"./app-9tftCahk.js";const a={},c=e("h1",{id:"lifecycle",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lifecycle","aria-hidden":"true"},"#"),t(" lifecycle")],-1),u=e("p",null,"组件的运行顺序是：",-1),v=e("ol",null,[e("li",null,"先顺序执行setup里面的代码。"),e("li",null,"遇到lifecycle 钩子函数，会注册其中的函数（注意，钩子函数中的函数此时并未执行，会在生命周期具体时间段调用）。 2. onBeforeMount：完成setup中的代码后，Dom tree创建之前 2. onMounted： 1. 所有子组件全部挂载完毕； 2. 它自己的Dom tree已经创建完成，且挂载到父组件主要用来获得dom中的元素，因为在setup中的代码运行时，Dom tree还没加载，无法获得。")],-1),m=e("p",null,"注意：",-1),b={href:"https://vuejs.org/guide/built-ins/suspense.html#async-setup",target:"_blank",rel:"noopener noreferrer"},p=e("code",null,"<suspend>",-1),h={href:"https://www.trpkovski.com/2021/09/25/suspense-feature-in-vue-3-with-sfc-script-setup/",target:"_blank",rel:"noopener noreferrer"},f=e("li",null,"钩子函数中的函数此时并未执行，会在生命周期具体时间段调用",-1),_=e("li",null,"钩子函数的第一个函数参数，可以使用async修饰，里面调用的方法可以使用await保持同步",-1),g=r(`<div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;template&gt;
	&lt;h2&gt;当前求和为：{{sum}}&lt;/h2&gt;
	&lt;button @click=&quot;sum++&quot;&gt;点我+1&lt;/button&gt;
&lt;/template&gt;

&lt;script&gt;
	import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from &#39;vue&#39;
	export default {
		name: &#39;Demo&#39;,
		setup(){
			console.log(&#39;---setup---&#39;)
			//数据
			let sum = ref(0)
			//通过组合式API的形式去使用生命周期钩子
			onBeforeMount(()=&gt;{
				console.log(&#39;---onBeforeMount---&#39;)
			})
			onMounted(()=&gt;{
				console.log(&#39;---onMounted---&#39;)
			})
			onBeforeUpdate(()=&gt;{
				console.log(&#39;---onBeforeUpdate---&#39;)
			})
			onUpdated(()=&gt;{
				console.log(&#39;---onUpdated---&#39;)
			})
			onBeforeUnmount(()=&gt;{
				console.log(&#39;---onBeforeUnmount---&#39;)
			})
			onUnmounted(()=&gt;{
				console.log(&#39;---onUnmounted---&#39;)
			})
			//返回一个对象（常用）
			return {sum}
		},
	}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://cn.vuejs.org/guide/essentials/lifecycle.html</li></ol>`,3);function B(U,x){const n=s("ExternalLinkIcon");return o(),d("div",null,[c,u,v,m,e("ol",null,[e("li",null,[t("setup中如果有异步代码，可使用await变成同步。"),e("a",b,[t("参考官方文档"),l(n)])]),e("li",null,[t("当setup中存在await时，会导致此组件渲染出现问题，需要在父组件中使用"),p,t("标签嵌套，"),e("a",h,[t("参考文档"),l(n)])]),f,_]),g])}const M=i(a,[["render",B],["__file","5lifecycle.html.vue"]]);export{M as default};
