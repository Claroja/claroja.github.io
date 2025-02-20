import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as i,a as d}from"./app-9tftCahk.js";const n={},a=d(`<h1 id="v-model" tabindex="-1"><a class="header-anchor" href="#v-model" aria-hidden="true">#</a> v-model</h1><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><p>下面的代码, 将<code>&lt;template&gt;</code>中<code>input</code>标签输入的值, 传递给<code>&lt;script&gt;</code>.</p><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;input
  :value=&quot;text&quot;
  @input=&quot;event =&gt; text = event.target.value&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>vue</code>提供<code>v-model</code>来简化这个实现</p><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;input v-model=&quot;text&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>完整的代码如下</p><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;script setup&gt;
import { ref } from &#39;vue&#39;

const message = ref(&#39;&#39;)
&lt;/script&gt;

&lt;template&gt;
    &lt;p&gt;Message is: {{ message }}&lt;/p&gt;
    &lt;input v-model=&quot;message&quot; placeholder=&quot;edit me&quot; /&gt;
&lt;/template&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://cn.vuejs.org/guide/essentials/forms.html</li></ol>`,10),l=[a];function s(r,c){return t(),i("div",null,l)}const m=e(n,[["render",s],["__file","3_4表单v-model.html.vue"]]);export{m as default};
