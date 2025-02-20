import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-9tftCahk.js";const e={},p=t(`<h1 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> watch</h1><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">watch</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>props是要监听的对象</li><li>() 是变动后回调的方法</li></ul><h2 id="场景应用" tabindex="-1"><a class="header-anchor" href="#场景应用" aria-hidden="true">#</a> 场景应用</h2><ol><li>监听组件传入参数变化, 做到动态传参</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// &lt;MyComponent greeting-message=&quot;hello&quot; /&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>watch<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;greeting-message&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>greeting<span class="token operator">-</span>message<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="详细解释" tabindex="-1"><a class="header-anchor" href="#详细解释" aria-hidden="true">#</a> 详细解释</h2><ul><li>作用: 当监视的数据发生变化时, 触发对应的方法</li><li>语法: <code>watch(sum,(newValue,oldValue)=&gt;{},options)</code><ul><li>参数1: 要监视的数据, 如果是多个可以传入列表</li><li>参数2: 回调函数, 可以对新数据和老数据进行处理</li><li>参数3: 选项, 比如immediate:true, 表示加载后就立即调用一次</li></ul></li><li>备注: <ul><li>computed和watch之间的区别： 1.computed能完成的功能，watch都可以完成。 2.watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作。</li><li>两个小“坑”： <ul><li>监视reactive定义的响应式数据时：oldValue无法正确获取、强制开启了深度监视（deep配置失效）。</li><li>监视reactive定义的响应式数据中某个属性时：deep配置有效。</li></ul></li></ul></li><li>拓展: <ul><li>Vue2中的watch默认不监测对象内部值的改变（一层）</li><li>Vue2配置deep:true可以监测对象内部值改变（多层, 深度监视）</li></ul></li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>当前求和为：{{sum}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sum++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点我+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>当前的信息为：{{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msg+=&#39;！&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>修改信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>姓名：{{person.name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>年龄：{{person.age}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>薪资：{{person.job.j1.salary}}K<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>person.name+=&#39;~&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>修改姓名<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>person.age++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>增长年龄<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>person.job.j1.salary++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>涨薪<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span>reactive<span class="token punctuation">,</span>watch<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Demo&#39;</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//数据</span>
        <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;你好啊&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span>
            <span class="token literal-property property">job</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">j1</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token literal-property property">salary</span><span class="token operator">:</span><span class="token number">20</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token comment">//情况一：监视ref所定义的一个响应式数据, 注意没有使用value</span>
        <span class="token comment">// watch(sum,(newValue,oldValue)=&gt;{</span>
        <span class="token comment">// 	console.log(&#39;sum变了&#39;,newValue,oldValue)</span>
        <span class="token comment">// },{immediate:true})</span>

        <span class="token comment">//情况二：监视ref所定义的多个响应式数据</span>
        <span class="token comment">// watch([sum,msg],(newValue,oldValue)=&gt;{</span>
        <span class="token comment">// 	console.log(&#39;sum或msg变了&#39;,newValue,oldValue)</span>
        <span class="token comment">// },{immediate:true}) </span>

        
        <span class="token comment">// 情况三：监视reactive所定义的一个响应式数据的全部属性</span>
        <span class="token comment">// 	1.注意：此处无法正确的获取oldValue</span>
        <span class="token comment">// 	2.注意：强制开启了深度监视（deep=false配置无效）</span>
        <span class="token comment">// watch(person,(newValue,oldValue)=&gt;{</span>
        <span class="token comment">// 	console.log(&#39;person变化了&#39;,newValue,oldValue)</span>
        <span class="token comment">// },{deep:false}) //此处的deep配置无效</span>

        <span class="token comment">// 情况三：补充，使用lodash获得oldValue</span>
		<span class="token comment">// import _ from &quot;lodash&quot;;</span>
        <span class="token comment">// watch(() =&gt; _.cloneDeep(person),(newValue,oldValue)=&gt;{</span>
        <span class="token comment">// 	console.log(&#39;person变化了&#39;,newValue,oldValue)</span>
        <span class="token comment">// },{deep:false}) //此处的deep配置无效</span>
	

        <span class="token comment">//情况四：监视reactive所定义的一个响应式数据中的某个属性</span>
        <span class="token comment">// watch(()=&gt;person.name,(newValue,oldValue)=&gt;{</span>
        <span class="token comment">// 	console.log(&#39;person的name变化了&#39;,newValue,oldValue)</span>
        <span class="token comment">// })</span>

        <span class="token comment">//情况五：监视reactive所定义的一个响应式数据中的某些属性</span>
        <span class="token comment">// watch([()=&gt;person.name,()=&gt;person.age],(newValue,oldValue)=&gt;{</span>
        <span class="token comment">// 	console.log(&#39;person的name或age变化了&#39;,newValue,oldValue)</span>
        <span class="token comment">// })</span>

        <span class="token comment">//特殊情况</span>
        <span class="token comment">// watch(()=&gt;person.job,(newValue,oldValue)=&gt;{</span>
        <span class="token comment">// 	console.log(&#39;person的job变化了&#39;,newValue,oldValue)</span>
        <span class="token comment">// },{deep:true}) //此处由于监视的是reactive素定义的对象中的某个属性，所以deep=true配置有效</span>

        <span class="token comment">//返回一个对象（常用）</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            sum<span class="token punctuation">,</span>
            msg<span class="token punctuation">,</span>
            person
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[p];function o(c,i){return s(),a("div",null,l)}const d=n(e,[["render",o],["__file","2_3_1监听watch.html.vue"]]);export{d as default};
