import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o,c,b as s,d as n,e as p,a as l}from"./app-9tftCahk.js";const r={},i=s("h1",{id:"数据集",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#数据集","aria-hidden":"true"},"#"),n(" 数据集")],-1),u={href:"https://echarts.apache.org/handbook/zh/concepts/dataset",target:"_blank",rel:"noopener noreferrer"},k={href:"https://echarts.apache.org/examples/zh/editor.html?c=data-transform-sort-bar",target:"_blank",rel:"noopener noreferrer"},d=l(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>option <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">dataset</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">dimensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;profession&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;score&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;date&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span><span class="token string">&#39;Hannah Krause&#39;</span><span class="token punctuation">,</span> <span class="token number">41</span><span class="token punctuation">,</span> <span class="token string">&#39;Engineer&#39;</span><span class="token punctuation">,</span> <span class="token number">314</span><span class="token punctuation">,</span> <span class="token string">&#39;2011-02-12&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&#39;Zhao Qian&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">&#39;Teacher&#39;</span><span class="token punctuation">,</span> <span class="token number">351</span><span class="token punctuation">,</span> <span class="token string">&#39;2011-03-01&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&#39;Jasmin Krause &#39;</span><span class="token punctuation">,</span> <span class="token number">52</span><span class="token punctuation">,</span> <span class="token string">&#39;Musician&#39;</span><span class="token punctuation">,</span> <span class="token number">287</span><span class="token punctuation">,</span> <span class="token string">&#39;2011-02-14&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&#39;Li Lei&#39;</span><span class="token punctuation">,</span> <span class="token number">37</span><span class="token punctuation">,</span> <span class="token string">&#39;Teacher&#39;</span><span class="token punctuation">,</span> <span class="token number">219</span><span class="token punctuation">,</span> <span class="token string">&#39;2011-02-18&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&#39;Karle Neumann&#39;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token string">&#39;Engineer&#39;</span><span class="token punctuation">,</span> <span class="token number">253</span><span class="token punctuation">,</span> <span class="token string">&#39;2011-04-02&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&#39;Adrian Groß&#39;</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token string">&#39;Teacher&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2011-01-16&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&#39;Mia Neumann&#39;</span><span class="token punctuation">,</span> <span class="token number">71</span><span class="token punctuation">,</span> <span class="token string">&#39;Engineer&#39;</span><span class="token punctuation">,</span> <span class="token number">165</span><span class="token punctuation">,</span> <span class="token string">&#39;2011-03-19&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&#39;Böhm Fuchs&#39;</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token string">&#39;Musician&#39;</span><span class="token punctuation">,</span> <span class="token number">318</span><span class="token punctuation">,</span> <span class="token string">&#39;2011-02-24&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&#39;Han Meimei&#39;</span><span class="token punctuation">,</span> <span class="token number">67</span><span class="token punctuation">,</span> <span class="token string">&#39;Engineer&#39;</span><span class="token punctuation">,</span> <span class="token number">366</span><span class="token punctuation">,</span> <span class="token string">&#39;2011-03-12&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;sort&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">dimension</span><span class="token operator">:</span> <span class="token string">&#39;score&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">order</span><span class="token operator">:</span> <span class="token string">&#39;desc&#39;</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">interval</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">rotate</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">encode</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">&#39;score&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">datasetIndex</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function m(v,b){const a=e("ExternalLinkIcon");return o(),c("div",null,[i,s("p",null,[n("参考"),s("a",u,[n("dataset"),p(a)]),n(" 参考"),s("a",k,[n("data-transform-sort-bar"),p(a)])]),d])}const h=t(r,[["render",m],["__file","echarts数据集.html.vue"]]);export{h as default};
