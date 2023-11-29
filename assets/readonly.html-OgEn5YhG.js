import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-M6UUlHgF.js";const p={},e=t(`<h1 id="readonly" tabindex="-1"><a class="header-anchor" href="#readonly" aria-hidden="true">#</a> readonly</h1><ul><li>readonly: 让一个响应式数据变为只读的（深只读）。</li><li>shallowReadonly：让一个响应式数据变为只读的（浅只读）。</li><li>应用场景: 不希望数据被修改时。</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">&gt;</span></span>当前求和为：{{sum}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sum++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点我++<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>姓名：{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>年龄：{{age}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>薪资：{{job.j1.salary}}K<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name+=&#39;~&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>修改姓名<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>增长年龄<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>job.j1.salary++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>涨薪<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span>reactive<span class="token punctuation">,</span>toRefs<span class="token punctuation">,</span>readonly<span class="token punctuation">,</span>shallowReadonly<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Demo&#39;</span><span class="token punctuation">,</span>
		<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token comment">//数据</span>
			<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
			<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
				<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
				<span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span>
				<span class="token literal-property property">job</span><span class="token operator">:</span><span class="token punctuation">{</span>
					<span class="token literal-property property">j1</span><span class="token operator">:</span><span class="token punctuation">{</span>
						<span class="token literal-property property">salary</span><span class="token operator">:</span><span class="token number">20</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
			person <span class="token operator">=</span> <span class="token function">readonly</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
			<span class="token comment">// person = shallowReadonly(person)</span>
			<span class="token comment">// sum = readonly(sum)</span>
			<span class="token comment">// sum = shallowReadonly(sum)</span>
			<span class="token comment">//返回一个对象（常用）</span>
			<span class="token keyword">return</span> <span class="token punctuation">{</span>
				sum<span class="token punctuation">,</span>
				<span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function l(c,u){return s(),a("div",null,o)}const r=n(p,[["render",l],["__file","readonly.html.vue"]]);export{r as default};
