import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as t,d as s}from"./app-j3zK2x6_.js";const e={},o=s(`<h1 id="xpath" tabindex="-1"><a class="header-anchor" href="#xpath" aria-hidden="true">#</a> xpath</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">evaluate</span><span class="token punctuation">(</span><span class="token string">&#39;/html/body/div/div[4]/div[2]/h2&#39;</span><span class="token punctuation">,</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">iterateNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以替代selenium的<code>BY.xpath</code>, 将所有解析html的任务都交给<code>javascript</code></p><p>参考: https://www.w3school.com.cn/xmldom/met_document_evaluate.asp https://developer.mozilla.org/zh-CN/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript</p>`,4),c=[o];function p(i,d){return n(),t("div",null,c)}const u=a(e,[["render",p],["__file","dom_xpath.html.vue"]]);export{u as default};
