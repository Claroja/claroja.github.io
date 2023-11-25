import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as t}from"./app-j3zK2x6_.js";const e={},p=t(`<h1 id="获取文本" tabindex="-1"><a class="header-anchor" href="#获取文本" aria-hidden="true">#</a> 获取文本</h1><p>js获取element内容主要有:</p><ol><li><code>textContent</code>(<code>Node</code>类属性)</li><li><code>innerHTML</code>和<code>outerHTML</code>(<code>Element</code>类属性)</li><li><code>innerText</code>(<code>HTMLElement</code>类属性)</li></ol><h2 id="innerhtml" tabindex="-1"><a class="header-anchor" href="#innerhtml" aria-hidden="true">#</a> innerHTML</h2><ol><li>可获取标签中的所有的内容，包括标签、空格、文本、换行等。</li><li>想要清空标签的内容，innerHTML = &quot;&quot;；即可</li><li>如果想要设置标签中的内容，innerHTML = &quot;填写想要设置的标签和内容&quot;；设置内容时，会把原有的内容全部覆盖。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 获取标签的内容</span>
<span class="token keyword">var</span> box1 <span class="token operator">=</span> box<span class="token punctuation">.</span>innerHTML<span class="token punctuation">;</span>
<span class="token keyword">var</span> box2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>box1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="innertext" tabindex="-1"><a class="header-anchor" href="#innertext" aria-hidden="true">#</a> innerText</h2><ol><li>获取标签(及其子标签)中的所有文本，不会获取标签（或者说可以过滤掉所有的标签）。如果有多个空格或者是换行，解析为一个空格。</li><li>如果想要清空标签的内容，innerText = &quot;&quot;；即可</li><li>如果想要设置标签中的内容，innerText = &quot;填写想要设置的标签和内容&quot;；设置内容时，会把原有的内容全部覆盖。但是标签不会被解析，会直接以文本的形式打印在页面中。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//修改标签文本内容，内容中包含的标签不会被解析，会文本输出</span>
<span class="token keyword">var</span> box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
box<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&#39;&lt;p&gt;这里有个p，来看一下&lt;/p&gt;&#39;</span>  <span class="token comment">//\`&lt;p&gt;\`会被当成字符串解析</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="textcontent" tabindex="-1"><a class="header-anchor" href="#textcontent" aria-hidden="true">#</a> textContent</h2><p>textContent来获取标签中的内容。但是textContent在过滤掉标签时，会保留标签结构。</p><h2 id="innertext和textcontent的区别" tabindex="-1"><a class="header-anchor" href="#innertext和textcontent的区别" aria-hidden="true">#</a> innerText和textContent的区别</h2><p>innerText的值依赖于浏览器的显示，textContent依赖于代码的显示</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>666<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>999<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> oDiv<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;container&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oDiv<span class="token punctuation">.</span>innerText<span class="token punctuation">,</span>oDiv<span class="token punctuation">.</span>textContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 
innerText:666 999
textContent:
        666
        999
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两种情况:</p><ol><li>如果一个元素之间包含了script标签或者style标签，innerText是获取不到这两个元素之间的文本的，而textContent可以</li><li>textContent会把空标签解析成换行（几个空标签就是几行），innerText只会把block元素类型的空标签解析换行，并且如果是多个的话仍看成是一个，而inline类型的原素则解析成空格，</li></ol><p>参考: https://www.jianshu.com/p/13096ec76ad2</p>`,17),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","dom_获取文本.html.vue"]]);export{d as default};
