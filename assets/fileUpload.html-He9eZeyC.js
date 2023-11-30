import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-0JgdiRQ-.js";const p={},e=t(`<h1 id="fileupload" tabindex="-1"><a class="header-anchor" href="#fileupload" aria-hidden="true">#</a> fileUpload</h1><p>selenium_fileUpload</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver
<span class="token keyword">from</span> webdriver_manager<span class="token punctuation">.</span>chrome <span class="token keyword">import</span> ChromeDriverManager
driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span>ChromeDriverManager<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>install<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>implicitly_wait<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;https://the-internet.herokuapp.com/upload&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>ID<span class="token punctuation">,</span><span class="token string">&quot;file-upload&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&quot;selenium-snapshot.jpg&quot;</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>ID<span class="token punctuation">,</span><span class="token string">&quot;file-submit&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>submit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>driver<span class="token punctuation">.</span>page_source<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;File Uploaded!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;file upload success&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;file upload not successful&quot;</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://www.selenium.dev/documentation/webdriver/elements/file_upload/</p>`,4),o=[e];function i(c,u){return s(),a("div",null,o)}const d=n(p,[["render",i],["__file","fileUpload.html.vue"]]);export{d as default};
