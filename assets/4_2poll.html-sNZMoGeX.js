import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-A10JnHE0.js";const e={},o=t(`<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;poll.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">poll</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">pollfd</span> <span class="token operator">*</span>fds<span class="token punctuation">,</span> <span class="token class-name">nfds_t</span> nfds<span class="token punctuation">,</span> <span class="token keyword">int</span> timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token class-name">pollfd</span> <span class="token punctuation">{</span>
	<span class="token keyword">int</span> fd<span class="token punctuation">;</span> <span class="token comment">/* 文件描述符 */</span>
	<span class="token keyword">short</span> events<span class="token punctuation">;</span> <span class="token comment">/* 监控的事件 */</span>
	<span class="token keyword">short</span> revents<span class="token punctuation">;</span> <span class="token comment">/* 实际发生的事件 */</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>nfds 			监控数组中有多少文件描述符需要被监控
timeout 		毫秒级等待
	-1：阻塞等，
	0：立即返回，不阻塞进程
	&gt;0：等待指定毫秒数
</code></pre>`,2),c=[o];function p(l,i){return s(),a("div",null,c)}const u=n(e,[["render",p],["__file","4_2poll.html.vue"]]);export{u as default};
