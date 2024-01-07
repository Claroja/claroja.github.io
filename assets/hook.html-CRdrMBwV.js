import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-SnI5rGHA.js";const p={},e=t(`<h1 id="hook" tabindex="-1"><a class="header-anchor" href="#hook" aria-hidden="true">#</a> hook</h1><ul><li><p><code>Demo.vue</code></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>当前点击时鼠标的坐标为：x：{{point.x}}，y：{{point.y}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> usePoint <span class="token keyword">from</span> <span class="token string">&#39;./usePoint&#39;</span>
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Demo&#39;</span><span class="token punctuation">,</span>
		<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token comment">//数据</span>
			<span class="token keyword">let</span> point <span class="token operator">=</span> <span class="token function">usePoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token comment">//返回一个对象（常用）</span>
			<span class="token keyword">return</span> <span class="token punctuation">{</span>point<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>usePoint.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>reactive<span class="token punctuation">,</span>onMounted<span class="token punctuation">,</span>onBeforeUnmount<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//实现鼠标“打点”相关的数据</span>
	<span class="token keyword">let</span> point <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token literal-property property">y</span><span class="token operator">:</span><span class="token number">0</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token comment">//实现鼠标“打点”相关的方法</span>
	<span class="token keyword">function</span> <span class="token function">savePoint</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		point<span class="token punctuation">.</span>x <span class="token operator">=</span> event<span class="token punctuation">.</span>pageX
		point<span class="token punctuation">.</span>y <span class="token operator">=</span> event<span class="token punctuation">.</span>pageY
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>pageX<span class="token punctuation">,</span>event<span class="token punctuation">.</span>pageY<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//实现鼠标“打点”相关的生命周期钩子</span>
	<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
		window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span>savePoint<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token function">onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
		window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span>savePoint<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> point
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,2),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","hook.html.vue"]]);export{r as default};
