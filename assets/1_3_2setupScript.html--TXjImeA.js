import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as n,e as i}from"./app-jdLxCr9I.js";const a={},t=i(`<h1 id="script" tabindex="-1"><a class="header-anchor" href="#script" aria-hidden="true">#</a> script</h1><p>setup script 是vue3的一个新的语法糖。只需要在script标签中加上setup 关键字。</p><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;script setup&gt;
    export default {
        ...
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="作用1-子组件不需要注册" tabindex="-1"><a class="header-anchor" href="#作用1-子组件不需要注册" aria-hidden="true">#</a> 作用1: 子组件不需要注册</h2><ol><li><p>不使用<code>setup</code></p><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;script&gt;
    import Child from &#39;@/components/child.vue&#39;
    export default {
        components:{
            Child
        },
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用<code>setup</code>, script中不需要注册, 直接引入即可</p><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;script setup&gt;
    // 组件只需要引入，不需要手动注册
    import Child from &#39;@/components/child.vue&#39;
&lt;/script&gt;
    \`\`\`


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="作用2-不需要返回方法和属性" tabindex="-1"><a class="header-anchor" href="#作用2-不需要返回方法和属性" aria-hidden="true">#</a> 作用2: 不需要返回方法和属性</h2><ol><li><p>不使用<code>setup</code></p><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;script&gt;
    import { reactive } from &#39;vue&#39;;
    export default { 
        setup(){
            const state = reactive({
                count:0;
            })
            const handleClick = () =&gt; {
                state.count++
            }
            return {
                state,
                handleClick
            }
        }
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用<code>setup</code> script中不需要返回</p><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;script setup&gt;
    import { reactive,ref,watch } from &#39;vue&#39;;
    const state = reactive({
        count:0;
    })
    const handleClick = () =&gt; {
        state.count++;
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="作用3-defineprops-and-defineemits" tabindex="-1"><a class="header-anchor" href="#作用3-defineprops-and-defineemits" aria-hidden="true">#</a> 作用3: defineProps and defineEmits</h2><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;script setup&gt;
    const props = defineProps({
    foo: String
    })
    
    const emit = defineEmits([&#39;change&#39;, &#39;delete&#39;])
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="作用4-useslots-and-useattrs" tabindex="-1"><a class="header-anchor" href="#作用4-useslots-and-useattrs" aria-hidden="true">#</a> 作用4: useSlots and useAttrs</h2><p>setupContext.slots和setupContext.attrs</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>import { useSlots, useAttrs } from &#39;vue&#39;
const slots = useSlots()
const attrs = useAttrs()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="作用5-script-setup-语法糖中reactive-torefs-解构如何优雅呈现" tabindex="-1"><a class="header-anchor" href="#作用5-script-setup-语法糖中reactive-torefs-解构如何优雅呈现" aria-hidden="true">#</a> 作用5: script setup 语法糖中reactive + toRefs+解构如何优雅呈现</h2><p>比如下面这样，我定义了一个 reactive() 声明的对象，想在模板上响应式的使用其值，如果不使用 setup 语法糖，就可以使用 toRefs 然后配合解构 return 出去。使用 setup 语法糖的话，就可以这样</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> starData <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
total<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
stars<span class="token operator">:</span> <span class="token generic-function"><span class="token function">Array</span><span class="token generic class-name"><span class="token operator">&lt;</span>Star<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> total<span class="token punctuation">,</span> stars <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>starData<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考:</h2><ol><li>https://v3.vuejs.org/api/sfc-script-setup.html#typescript-only-features</li><li>https://www.cnblogs.com/goloving/p/15437343.html</li></ol>`,17),l=[t];function d(r,c){return s(),n("div",null,l)}const o=e(a,[["render",d],["__file","1_3_2setupScript.html.vue"]]);export{o as default};
