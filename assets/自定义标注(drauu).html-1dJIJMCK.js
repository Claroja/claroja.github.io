import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c,b as n,d as a,e as l,a as r}from"./app-9tftCahk.js";const i={},p=n("h1",{id:"自定义标注-drauu",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义标注-drauu","aria-hidden":"true"},"#"),a(" 自定义标注(drauu)")],-1),d=n("p",null,"主要实现两个目的:",-1),u=n("ol",null,[n("li",null,"使用快捷键激活标注模式"),n("li",null,"隐藏左上方的标注的控制条")],-1),_=n("h2",{id:"使用快捷键激活标注模式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用快捷键激活标注模式","aria-hidden":"true"},"#"),a(" 使用快捷键激活标注模式")],-1),h={href:"https://cn.sli.dev/custom/config-shortcuts",target:"_blank",rel:"noopener noreferrer"},k=r(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;enter&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> nav<span class="token punctuation">.</span><span class="token function">toggleDrawing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">autoRepeat</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="隐藏标注的控制条与更改默认颜色" tabindex="-1"><a class="header-anchor" href="#隐藏标注的控制条与更改默认颜色" aria-hidden="true">#</a> 隐藏标注的控制条与更改默认颜色</h2><ol><li>找到<code>node_modules\\@slidev\\client\\internals\\DrawingControls.vue</code></li><li>在<code>&lt;template&gt;</code>的<code>&lt;Draggable&gt;</code>组件上加上样式<code>style=&quot;visibility:hidden;&quot;</code></li><li>在<code>&lt;script&gt;</code>中添加<code>drauu.brush.color = &#39;skyblue&#39;</code></li></ol>`,3);function v(m,b){const e=t("ExternalLinkIcon");return o(),c("div",null,[p,d,u,_,n("p",null,[a("参考"),n("a",h,[a("官网的快捷键配置方式"),l(e)]),a(".")]),k])}const x=s(i,[["render",v],["__file","自定义标注(drauu).html.vue"]]);export{x as default};
