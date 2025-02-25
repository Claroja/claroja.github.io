import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as i,a as s}from"./app-7knaTE3M.js";const l={},n=s(`<h1 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h1><p>通过子组件的属性进行传值</p><p><code>defineProps</code>是一个仅<code>&lt;script setup&gt;</code>中可用的编译宏命令，并不需要显式地导入。<code>defineProps</code>会返回一个对象，其中包含了可以传递给组件的所有<code>props</code>：</p><ol><li><p>父组件:</p><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;BlogPost title=&quot;My journey with Vue&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>子组件<code>BlogPost.vue</code></p><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;script setup&gt;
	defineProps([&#39;title&#39;])  //直接暴露title, 也可以写成const props = defineProps([&#39;title&#39;])
&lt;/script&gt;

&lt;template&gt;
	&lt;h4&gt;{{ title }}&lt;/h4&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://cn.vuejs.org/guide/essentials/component-basics.html</li><li>https://cn.vuejs.org/guide/components/props.html</li></ol>`,6),d=[n];function o(a,r){return t(),i("div",null,d)}const u=e(l,[["render",o],["__file","4属性传值props.html.vue"]]);export{u as default};
