import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as s,a}from"./app-nD1Z-e8V.js";const d={},n=a(`<h1 id="v-bind绑定class和style" tabindex="-1"><a class="header-anchor" href="#v-bind绑定class和style" aria-hidden="true">#</a> v-bind绑定class和style</h1><h2 id="绑定值" tabindex="-1"><a class="header-anchor" href="#绑定值" aria-hidden="true">#</a> 绑定值</h2><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>
&lt;script&gt;
const isActive = ref(true)
&lt;/script&gt;

&lt;div
    class=&quot;static&quot;
    :class=&quot;{ &#39;active&#39;: isActive }&quot;
&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&#39;active&#39;</code>是class的名称, <code>isActive</code>是布尔值, 表示要不要绑定<code>active</code>这个class. 如果<code>isActive</code>为真, 渲染的结果是:</p><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;div class=&quot;static active&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="绑定数组" tabindex="-1"><a class="header-anchor" href="#绑定数组" aria-hidden="true">#</a> 绑定数组</h2><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;script&gt;
const activeClass = ref(&#39;active&#39;)
const errorClass = ref(&#39;text-danger&#39;)
&lt;/script&gt;


&lt;template&gt;
&lt;div :class=&quot;[{ [activeClass]: isActive }, errorClass]&quot;&gt;&lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),t=[n];function l(c,r){return i(),s("div",null,t)}const o=e(d,[["render",l],["__file","2_1类绑定v-bind.html.vue"]]);export{o as default};
