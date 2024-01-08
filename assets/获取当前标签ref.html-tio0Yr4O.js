import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as p,c as o,a as n,b as s,d as c,e as l}from"./app-YE2Hltoy.js";const i={},u=n("h1",{id:"获取当前标签ref",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#获取当前标签ref","aria-hidden":"true"},"#"),s(" 获取当前标签ref")],-1),r=n("code",null,"getElementById",-1),d={href:"https://cn.vuejs.org/api/built-in-special-attributes.html#ref",target:"_blank",rel:"noopener noreferrer"},k=l(`<ul><li><p>案例1:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

    <span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>value <span class="token comment">//🔴注意p是ref对象, p.value才是DOM</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>案例2:</p><p>首先在<code>setup()</code>中定义一个<code>ref</code>类型的变量<code>root</code>, 然后<code>return</code>出去, 会自动匹配<code>&lt;template&gt;</code>中的<code>ref</code>属性的值. 注意<code>root.value</code>是<code>element object</code>, 如果想获得其中的值，需要<code>root.value.text</code></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span>onMounted<span class="token punctuation">,</span> ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
    <span class="token keyword">const</span> el <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 注意这里的ref是不需要v-bind的 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ el }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>案例2: 另一种写法</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span>onMounted<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>

    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>el<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 注意这里的ref是不需要v-bind的 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
        <span class="token attr-name">:ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>
            (el) =&gt; {
                state.el = el
            }
        <span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>参考: https://v3.vuejs.org/guide/composition-api-template-refs.html#usage-with-jsx</p>`,2);function v(m,g){const a=e("ExternalLinkIcon");return p(),o("div",null,[u,n("p",null,[s("ref属性是vue用来获得相应元素的设置的,替代"),r,s("方法. "),n("a",d,[s("官网"),c(a)])]),k])}const h=t(i,[["render",v],["__file","获取当前标签ref.html.vue"]]);export{h as default};
