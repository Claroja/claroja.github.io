import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c as p,a as n,b as a,d as c,w as i,e as l}from"./app-0JgdiRQ-.js";const u={},r=n("h1",{id:"update",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#update","aria-hidden":"true"},"#"),a(" update")],-1),d=n("h2",{id:"直接赋值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#直接赋值","aria-hidden":"true"},"#"),a(" 直接赋值")],-1),k=n("li",null,[a("直接使用"),n("code",null,"="),a("号赋值")],-1),h=l(`<h2 id="apply" tabindex="-1"><a class="header-anchor" href="#apply" aria-hidden="true">#</a> apply</h2><p>映射替换一列的所有数据</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fruitToPrice <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;apple&quot;</span><span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token string">&quot;banana&quot;</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token string">&quot;watermelon&quot;</span><span class="token punctuation">:</span><span class="token number">20</span>
<span class="token punctuation">}</span>

df<span class="token punctuation">[</span><span class="token string">&quot;fruit&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token builtin">apply</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span>fruitToPrice<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function m(_,v){const s=t("RouterLink");return o(),p("div",null,[r,d,n("ol",null,[n("li",null,[a("根据"),c(s,{to:"/pandas_select/"},{default:i(()=>[a("pandas_select")]),_:1}),a("先进行选择")]),k]),h])}const x=e(u,[["render",m],["__file","update.html.vue"]]);export{x as default};
