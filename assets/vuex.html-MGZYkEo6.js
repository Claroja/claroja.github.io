import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-A10JnHE0.js";const p={},e=t(`<h1 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> vuex</h1><h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2><ol><li><p>vuex为不同的组件提供公共的数据存储</p></li><li><p>两个个重要概念:</p><ol><li>首先dispatch到Actions(服务员,先对数据做处理)</li><li>然后commit到Mutations(厨子, 直接操作数据, state) 可参考官网:https://vuex.vuejs.org/zh/</li></ol></li><li><p>Vue.use() 用来添加插件, 这样就可以在new Vue()中增加键</p></li><li><p>export 要使用{} export default 不需要,default作用</p></li><li><p>无论<code>import</code>在哪 都是先执行</p></li></ol><h2 id="样例" tabindex="-1"><a class="header-anchor" href="#样例" aria-hidden="true">#</a> 样例</h2><ol><li>首先给Vue插入Vuex插件</li><li>准备Vuex.store 将state, actions, mutations组合成Vuex.Store</li><li>在Vue实例中挂载store</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcss.com/vue/2.6.10/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcdn.net/ajax/libs/vuex/3.5.1/vuex.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token comment">&lt;!-- 第三步：编写组件标签 --&gt;</span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Count</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Count</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        
        <span class="token comment">// 1. 激活插件</span>
        Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>
        <span class="token comment">// 2. 准备vuex</span>
        <span class="token comment">// 2.1 准备state——用于存储数据</span>
        <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">sum</span><span class="token operator">:</span><span class="token number">0</span> <span class="token comment">//当前的和</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 2.2 准备actions——用于响应组件中的动作</span>
        <span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token function">jiaOdd</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span>value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;actions中的jiaOdd被调用了&#39;</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>state<span class="token punctuation">.</span>sum <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;JIA&#39;</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">jiaWait</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span>value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;actions中的jiaWait被调用了&#39;</span><span class="token punctuation">)</span>
                <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                    context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;JIA&#39;</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">500</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 2.3 准备mutations——用于操作数据（state）</span>
        <span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token constant">JIA</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span>value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mutations中的JIA被调用了&#39;</span><span class="token punctuation">)</span>
                state<span class="token punctuation">.</span>sum <span class="token operator">+=</span> value
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token constant">JIAN</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span>value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mutations中的JIAN被调用了&#39;</span><span class="token punctuation">)</span>
                state<span class="token punctuation">.</span>sum <span class="token operator">-=</span> value
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 2.4 组合成store</span>
        <span class="token keyword">let</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            actions<span class="token punctuation">,</span>
            mutations<span class="token punctuation">,</span>
            state<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>


		<span class="token keyword">const</span> Count <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token comment">//Vue.extend可以省略</span>
			<span class="token literal-property property">template</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
            &lt;div&gt;
                &lt;h1&gt;当前求和为：{{$store.state.sum}}&lt;/h1&gt;
                &lt;select v-model.number=&quot;n&quot;&gt;
                    &lt;option value=&quot;1&quot;&gt;1&lt;/option&gt;
                    &lt;option value=&quot;2&quot;&gt;2&lt;/option&gt;
                    &lt;option value=&quot;3&quot;&gt;3&lt;/option&gt;
                &lt;/select&gt;
                &lt;button @click=&quot;increment&quot;&gt;+&lt;/button&gt;
                &lt;button @click=&quot;decrement&quot;&gt;-&lt;/button&gt;
                &lt;button @click=&quot;incrementOdd&quot;&gt;当前求和为奇数再加&lt;/button&gt;
                &lt;button @click=&quot;incrementWait&quot;&gt;等等再加&lt;/button&gt;
            &lt;/div&gt;
			</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;Count&#39;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">n</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//用户选择的数字</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;JIA&#39;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>n<span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;JIAN&#39;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>n<span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function">incrementOdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;jiaOdd&#39;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>n<span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function">incrementWait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;jiaWait&#39;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>n<span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
		
		<span class="token comment">// 3. 创建vm</span>
		<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
				<span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token string">&#39;你好啊！&#39;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>
				Count<span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
            store<span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>

	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="借助mapstate-mapmutations-mapactions来简化代码" tabindex="-1"><a class="header-anchor" href="#借助mapstate-mapmutations-mapactions来简化代码" aria-hidden="true">#</a> 借助mapState,mapMutations,MapActions来简化代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>		<span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
			<span class="token comment">//借助mapState生成计算属性，从state中读取数据。（对象写法）</span>
			<span class="token comment">// ...mapState({he:&#39;sum&#39;,xuexiao:&#39;school&#39;,xueke:&#39;subject&#39;}),</span>

			<span class="token comment">//借助mapState生成计算属性，从state中读取数据。（数组写法）</span>
			<span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;sum&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;school&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;subject&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

			<span class="token comment">/* ******************************************************************** */</span>

			<span class="token comment">//借助mapGetters生成计算属性，从getters中读取数据。（对象写法）</span>
			<span class="token comment">// ...mapGetters({bigSum:&#39;bigSum&#39;})</span>
			
			<span class="token comment">//借助mapGetters生成计算属性，从getters中读取数据。（数组写法）</span>
			<span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;bigSum&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token comment">//程序员亲自写方法</span>
			<span class="token comment">/* increment(){
				this.$store.commit(&#39;JIA&#39;,this.n)
			},
			decrement(){
				this.$store.commit(&#39;JIAN&#39;,this.n)
			}, */</span>

			<span class="token comment">//借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)</span>
			<span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">increment</span><span class="token operator">:</span><span class="token string">&#39;JIA&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">decrement</span><span class="token operator">:</span><span class="token string">&#39;JIAN&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

			<span class="token comment">//借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)</span>
			<span class="token comment">// ...mapMutations([&#39;JIA&#39;,&#39;JIAN&#39;]),</span>

			<span class="token comment">/* ************************************************* */</span>

			<span class="token comment">//程序员亲自写方法</span>
			<span class="token comment">/* incrementOdd(){
				this.$store.dispatch(&#39;jiaOdd&#39;,this.n)
			},
			incrementWait(){
				this.$store.dispatch(&#39;jiaWait&#39;,this.n)
			}, */</span>

			<span class="token comment">//借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)</span>
			<span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">incrementOdd</span><span class="token operator">:</span><span class="token string">&#39;jiaOdd&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">incrementWait</span><span class="token operator">:</span><span class="token string">&#39;jiaWait&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

			<span class="token comment">//借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(数组写法)</span>
			<span class="token comment">// ...mapActions([&#39;jiaOdd&#39;,&#39;jiaWait&#39;])</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>https://vuex.vuejs.org/zh/</p>`,9),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","vuex.html.vue"]]);export{k as default};
