import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,a}from"./app-7knaTE3M.js";const i={},t=a(`<h1 id="createapp" tabindex="-1"><a class="header-anchor" href="#createapp" aria-hidden="true">#</a> createApp</h1><ol><li><p><code>main.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token comment">//创建应用实例对象——app(类似于之前Vue2中的vm，但app比vm更“轻”)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token comment">//挂载</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>App.vue</code></p><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;template&gt;
    &lt;p&gt;{{ msg }}&lt;/p&gt;
    &lt;button @click=&quot;test&quot;&gt;test&lt;/button&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name: &#39;App&#39;,
        //此处只是测试一下setup，暂时不考虑响应式的问题。
        setup(){
            let msg = &#39;hello world&#39;
            function test(){
                console.log(&quot;helo&quot;)
                alert(\`\${msg}\`)
            }
            return {
                msg,
                test,
            }
        }
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://cn.vuejs.org/guide/essentials/application.html</li></ol>`,4),l=[t];function c(p,d){return s(),e("div",null,l)}const u=n(i,[["render",c],["__file","2createApp.html.vue"]]);export{u as default};
