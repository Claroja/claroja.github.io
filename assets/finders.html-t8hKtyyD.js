import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e as t}from"./app-0JgdiRQ-.js";const p={},o=t(`<h1 id="finders" tabindex="-1"><a class="header-anchor" href="#finders" aria-hidden="true">#</a> finders</h1><h2 id="locator" tabindex="-1"><a class="header-anchor" href="#locator" aria-hidden="true">#</a> locator</h2><p>用于定位元素, 返回的结果可作为<code>finders</code>的参数, above, Below, Left of, Right of, Near, Chaining relative locators 获得元素上面的某个元素</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>email_locator <span class="token operator">=</span> locate_with<span class="token punctuation">(</span>By<span class="token punctuation">.</span>TAG_NAME<span class="token punctuation">,</span> <span class="token string">&quot;input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>above<span class="token punctuation">(</span><span class="token punctuation">{</span>By<span class="token punctuation">.</span>ID<span class="token punctuation">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
password_locator <span class="token operator">=</span> locate_with<span class="token punctuation">(</span>By<span class="token punctuation">.</span>TAG_NAME<span class="token punctuation">,</span> <span class="token string">&quot;input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>below<span class="token punctuation">(</span><span class="token punctuation">{</span>By<span class="token punctuation">.</span>ID<span class="token punctuation">:</span> <span class="token string">&quot;email&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
cancel_locator <span class="token operator">=</span> locate_with<span class="token punctuation">(</span>By<span class="token punctuation">.</span>TAG_NAME<span class="token punctuation">,</span> <span class="token string">&quot;button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>to_left_of<span class="token punctuation">(</span><span class="token punctuation">{</span>By<span class="token punctuation">.</span>ID<span class="token punctuation">:</span> <span class="token string">&quot;submit&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
submit_locator <span class="token operator">=</span> locate_with<span class="token punctuation">(</span>By<span class="token punctuation">.</span>TAG_NAME<span class="token punctuation">,</span> <span class="token string">&quot;button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>to_right_of<span class="token punctuation">(</span><span class="token punctuation">{</span>By<span class="token punctuation">.</span>ID<span class="token punctuation">:</span> <span class="token string">&quot;cancel&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
email_locator <span class="token operator">=</span> locate_with<span class="token punctuation">(</span>By<span class="token punctuation">.</span>TAG_NAME<span class="token punctuation">,</span> <span class="token string">&quot;input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>near<span class="token punctuation">(</span><span class="token punctuation">{</span>By<span class="token punctuation">.</span>ID<span class="token punctuation">:</span> <span class="token string">&quot;lbl-email&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
submit_locator <span class="token operator">=</span> locate_with<span class="token punctuation">(</span>By<span class="token punctuation">.</span>TAG_NAME<span class="token punctuation">,</span> <span class="token string">&quot;button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>below<span class="token punctuation">(</span><span class="token punctuation">{</span>By<span class="token punctuation">.</span>ID<span class="token punctuation">:</span> <span class="token string">&quot;email&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>to_right_of<span class="token punctuation">(</span><span class="token punctuation">{</span>By<span class="token punctuation">.</span>ID<span class="token punctuation">:</span> <span class="token string">&quot;cancel&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="finder" tabindex="-1"><a class="header-anchor" href="#finder" aria-hidden="true">#</a> finder</h2><h2 id="单个获取" tabindex="-1"><a class="header-anchor" href="#单个获取" aria-hidden="true">#</a> 单个获取</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>vegetable <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>CLASS_NAME<span class="token punctuation">,</span> <span class="token string">&quot;tomatoes&quot;</span><span class="token punctuation">)</span>
fruit <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span><span class="token string">&quot;#fruits .tomatoes&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以多次获取</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fruits <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>ID<span class="token punctuation">,</span> <span class="token string">&quot;fruits&quot;</span><span class="token punctuation">)</span>
fruit <span class="token operator">=</span> fruits<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>CLASS_NAME<span class="token punctuation">,</span><span class="token string">&quot;tomatoes&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多个获取" tabindex="-1"><a class="header-anchor" href="#多个获取" aria-hidden="true">#</a> 多个获取</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>elements <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_elements<span class="token punctuation">(</span>By<span class="token punctuation">.</span>TAG_NAME<span class="token punctuation">,</span> <span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> e <span class="token keyword">in</span> elements<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>获得聚焦(focus)的元素</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## Get attribute of current active element</span>
attr <span class="token operator">=</span> driver<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>active_element<span class="token punctuation">.</span>get_attribute<span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>attr<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://www.selenium.dev/documentation/webdriver/elements/locators/ https://www.selenium.dev/documentation/webdriver/elements/finders/</p>`,15),e=[o];function c(u,i){return a(),s("div",null,e)}const d=n(p,[["render",c],["__file","finders.html.vue"]]);export{d as default};
