import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as t,e}from"./app-YE2Hltoy.js";const a={},o=e(`<h1 id="代码模板" tabindex="-1"><a class="header-anchor" href="#代码模板" aria-hidden="true">#</a> 代码模板</h1><h2 id="自定义snippets" tabindex="-1"><a class="header-anchor" href="#自定义snippets" aria-hidden="true">#</a> 自定义snippets</h2><ol><li><code>insert snippet</code>查看所有可使用的snippet</li><li><code>sinppets: Config User Snippets</code>来设置</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">//</span> <span class="token keyword">in</span> <span class="token builtin">file</span> <span class="token string">&#39;Code/User/snippets/javascript.json&#39;</span>
<span class="token punctuation">{</span>
	<span class="token string">&quot;Print to console&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
		<span class="token string">&quot;prefix&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;log&quot;</span><span class="token punctuation">,</span>
		<span class="token string">&quot;body&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
			<span class="token string">&quot;console.log(&#39;\${1:位置1}&#39;);&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;\${2|one,two,three|}&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;console.log(&#39;\${0:位置0}&#39;)&quot;</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token string">&quot;description&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Log output to console&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><code>For Loop</code>是snippet的名称</li><li><code>prefix</code>snippet的trigger.支持Substring matching, 所以<code>fc</code>可以匹配<code>for-const</code></li><li><code>body</code>snippet的body</li><li><code>description</code> <code>intelliSense</code>会展示snippet的description <ul><li><code>\${2:element}</code> <code>\${1:array})</code>所在的位置可以使用<code>TAB</code>键来快速跳转, <code>$0</code>是最终跳转的位置</li><li><code>\${2:element}</code> 中<code>:</code>后面的是默认的字符串</li><li><code>\${1|array,list|})</code> 可以让用户在<code>array</code>和<code>list</code>中选择</li><li><code>$1</code>, <code>$2</code> for tab stops, <code>$0</code> for the final cursor position</li></ul></li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token punctuation">{</span>
	<span class="token string">&quot;markfont&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
		<span class="token string">&quot;prefix&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;font&quot;</span><span class="token punctuation">,</span>
		<span class="token string">&quot;body&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
			<span class="token string">&quot;&lt;font style=\\&quot;background: \${1|yellow,hotpink,lightgreen|}\\&quot;&gt;\${2}&lt;/font&gt;&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token string">&quot;description&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;background color&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用拓展" tabindex="-1"><a class="header-anchor" href="#使用拓展" aria-hidden="true">#</a> 使用拓展</h2><p>可以在<code>extensions</code>中搜索<code>sinppet</code>相关的extension</p><p>参考: https://code.visualstudio.com/docs/editor/userdefinedsnippets</p>`,9),i=[o];function c(p,l){return s(),t("div",null,i)}const r=n(a,[["render",c],["__file","snippets代码模板.html.vue"]]);export{r as default};
