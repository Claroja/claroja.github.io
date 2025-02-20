import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as t,a as n}from"./app-9tftCahk.js";const l={},s=n(`<h1 id="_4事件监听emit" tabindex="-1"><a class="header-anchor" href="#_4事件监听emit" aria-hidden="true">#</a> 4事件监听emit</h1><ol><li><p>子组件</p><p>子组件通过<code>$emit(&#39;enlarge-text&#39;)&quot;</code>向父组件发射了一个<code>enlarge-text</code>事件</p><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;script setup&gt;
    defineProps([&#39;title&#39;])
    defineEmits([&#39;enlarge-text&#39;])
&lt;/script&gt;

&lt;template&gt;
    &lt;div class=&quot;blog-post&quot;&gt;
        &lt;h4&gt;{{ title }}&lt;/h4&gt;
        &lt;button @click=&quot;$emit(&#39;enlarge-text&#39;)&quot;&gt;Enlarge text&lt;/button&gt;
    &lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>父组件通过@(v-one)来监听子组件发射的<code>enlarge-text</code>事件.</p><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;script setup&gt;
    import { ref } from &#39;vue&#39;
    import BlogPost from &#39;./BlogPost.vue&#39;
    
    const posts = ref([
    { id: 1, title: &#39;My journey with Vue&#39; },
    { id: 2, title: &#39;Blogging with Vue&#39; },
    { id: 3, title: &#39;Why Vue is so fun&#39; }
    ])

    const postFontSize = ref(1)
&lt;/script&gt;

&lt;template&gt;
    &lt;div :style=&quot;{ fontSize: postFontSize + &#39;em&#39; }&quot;&gt;
        &lt;BlogPost
        v-for=&quot;post in posts&quot;
        :key=&quot;post.id&quot;
        :title=&quot;post.title&quot;
        @enlarge-text=&quot;postFontSize += 0.1&quot;
        &gt;&lt;/BlogPost&gt;
    &lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://cn.vuejs.org/guide/essentials/component-basics.html</li><li>https://cn.vuejs.org/guide/components/events.html</li></ol>`,4),d=[s];function a(o,r){return i(),t("div",null,d)}const u=e(l,[["render",a],["__file","4_5事件监听emit.html.vue"]]);export{u as default};
