import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,d}from"./app-j3zK2x6_.js";const a={},o=d(`<h1 id="element" tabindex="-1"><a class="header-anchor" href="#element" aria-hidden="true">#</a> Element</h1><p>Element中包含了HTMLElement和SVGElement，其中HTMLElement是所有HTML的基本接口，SVGElement不在我们这次的讨论范围内。</p><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td><code>Element.attributes</code></td><td>elem的属性, 这里的属性是指写在html中的如<code>id</code>,<code>style</code>的属性</td></tr><tr><td><code>Element.children</code></td><td>子元素</td></tr><tr><td><code>Element.className</code></td><td>样式</td></tr><tr><td><code>Element.id</code></td><td>id</td></tr><tr><td><code>Element.innerHTML</code></td><td>元素内的HTML</td></tr><tr><td><code>Element.outerHTML</code></td><td>包含元素本身和元素内的HTML</td></tr><tr><td><code>Element.tagName</code></td><td>元素的标签名称</td></tr></tbody></table><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td><code>EventTarget.addEventListener()</code></td><td>添加事件监听器</td></tr><tr><td><code>Element.getAttribute()</code></td><td>获得属性</td></tr><tr><td><code>Element.getAttributeNames()</code></td><td>获得所有的属性名, 仅展示html中添加的, 如<code>id</code>,<code>style</code>等</td></tr><tr><td><code>Element.querySelector()</code></td><td>通过选择器来获得元素</td></tr></tbody></table><p><code>Element.getAttribute(&quot;innerHTML&quot;)</code>可以获得<code>innerHTML</code>属性, 虽然在<code>Element.getAttributeNames()</code>方法中并不会展示<code>innerHTML</code>. <code>Element.getAttribute(&quot;innerHTML&quot;)</code>在selenium中, 直接执行获得想要的element, 而不需要再使用bs4库</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>elem <span class="token operator">=</span> driver<span class="token punctuation">.</span>execute_script<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;return document.querySelector(&quot;p&quot;)&#39;</span></span><span class="token punctuation">)</span>
df_item <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_html<span class="token punctuation">(</span>elem<span class="token punctuation">.</span>get_attribute<span class="token punctuation">(</span><span class="token string">&#39;outerHTML&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><p>参考: https://developer.mozilla.org/en-US/docs/Web/API/Element</p>`,10),s=[o];function c(r,l){return e(),n("div",null,s)}const u=t(a,[["render",c],["__file","dom_Element.html.vue"]]);export{u as default};
