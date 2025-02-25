import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as s,a as t}from"./app-7knaTE3M.js";const a={},i=t(`<h1 id="_1组间基础component" tabindex="-1"><a class="header-anchor" href="#_1组间基础component" aria-hidden="true">#</a> 1组间基础component</h1><h2 id="定义组件" tabindex="-1"><a class="header-anchor" href="#定义组件" aria-hidden="true">#</a> 定义组件</h2><p>创建<code>.vue</code>文件, 文件分为3个部分<code>template</code>(用于写html), <code>script</code>(用来写vue的属性), <code>style</code>(用来写样式)</p><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;script setup&gt;
	import { ref } from &#39;vue&#39;
	const count = ref(0)
&lt;/script&gt;

&lt;template&gt;
	&lt;button @click=&quot;count++&quot;&gt;You clicked me {{ count }} times.&lt;/button&gt;
&lt;/template&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用组件" tabindex="-1"><a class="header-anchor" href="#使用组件" aria-hidden="true">#</a> 使用组件</h2><ol><li><p>直导入组件, 在<code>&lt;template&gt;</code>中直接使用</p><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;script setup&gt;
	import ButtonCounter from &#39;./ButtonCounter.vue&#39;
&lt;/script&gt;

&lt;template&gt;
	&lt;h1&gt;Here is a child component!&lt;/h1&gt;
	&lt;ButtonCounter /&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>全局注册的主键不需要导入, 可以直接使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> MyComponent <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;MyComponent&#39;</span><span class="token punctuation">,</span> MyComponent<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://cn.vuejs.org/guide/essentials/component-basics.html</li><li>https://cn.vuejs.org/guide/components/registration.html</li></ol>`,8),l=[i];function c(o,d){return e(),s("div",null,l)}const u=n(a,[["render",c],["__file","1组件注册.html.vue"]]);export{u as default};
