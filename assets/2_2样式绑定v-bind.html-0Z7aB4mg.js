import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as d,a as t}from"./app-nD1Z-e8V.js";const l={},n=t(`<h1 id="v-bind绑定style" tabindex="-1"><a class="header-anchor" href="#v-bind绑定style" aria-hidden="true">#</a> v-bind绑定style</h1><h2 id="绑定值" tabindex="-1"><a class="header-anchor" href="#绑定值" aria-hidden="true">#</a> 绑定值</h2><p><code>:style</code>对应的是 HTML 元素的 style 属性.</p><p>注意<code>template</code>中的<code>fontSize</code></p><ol><li>在CSS标准中是kebab-cased, 既<code>font-size</code>, 这里Vue做了自动转换, 当然可以写成<code>font-size</code></li></ol><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;script&gt;
    const activeColor = ref(&#39;red&#39;)
    const fontSize = ref(30)
&lt;/script&gt;

&lt;template&gt;
    &lt;div :style=&quot;{ color: activeColor, fontSize: fontSize + &#39;px&#39; }&quot;&gt;&lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="绑定对象" tabindex="-1"><a class="header-anchor" href="#绑定对象" aria-hidden="true">#</a> 绑定对象</h2><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;script&gt;
    const styleObject = reactive({
    color: &#39;red&#39;,
    fontSize: &#39;30px&#39;
    })
&lt;/script&gt;

&lt;template&gt;
    &lt;div :style=&quot;styleObject&quot;&gt;&lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数字与px" tabindex="-1"><a class="header-anchor" href="#数字与px" aria-hidden="true">#</a> 数字与px</h2><ol><li><code>div</code>等普通元素 不能将width的<code>数字</code>自动转为css中的<code>数字+px</code>，形式，需要自己手动处理</li><li><code>svg</code>元素及其内部元素 可以将width<code>数字</code>自动转换为<code>数字+px</code></li></ol><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;script setup&gt;
    import {reactive} from &quot;vue&quot;
    let style = reactive({
        width: &quot;50px&quot;, // 不能写成 width:50, 纯数字无法解析
        backgroundColor: &quot;red&quot;,
    })
&lt;/script&gt;

&lt;template&gt;
    &lt;div :style=&quot;style&quot;&gt;haha&lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="引入全局样式" tabindex="-1"><a class="header-anchor" href="#引入全局样式" aria-hidden="true">#</a> 引入全局样式</h2><ol><li>通过public文件夹下的<code>index.html</code>引入: <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;/reset.css&quot;&gt;</code></li><li>在<code>main.js</code>中直接使用<code>import &#39;element-plus/dist/index.css&#39;</code>来引入</li></ol><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://vuejs.org/api/sfc-css-features.html</li><li>https://cn.vuejs.org/guide/essentials/class-and-style</li></ol>`,15),s=[n];function a(c,r){return i(),d("div",null,s)}const u=e(l,[["render",a],["__file","2_2样式绑定v-bind.html.vue"]]);export{u as default};
