import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as p}from"./app-9tftCahk.js";const t={},e=p(`<h1 id="单序列" tabindex="-1"><a class="header-anchor" href="#单序列" aria-hidden="true">#</a> 单序列</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>option <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">dataset</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;汉字日期&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;一&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;二&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;四&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;五&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;六&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;日&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;香蕉&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">350</span><span class="token punctuation">,</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">encode</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">&#39;汉字日期&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">&#39;香蕉&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多序列" tabindex="-1"><a class="header-anchor" href="#多序列" aria-hidden="true">#</a> 多序列</h2><p>通过<code>stack</code>参数来控制是横向展开还是纵向对接</p><h2 id="横向展开柱状图" tabindex="-1"><a class="header-anchor" href="#横向展开柱状图" aria-hidden="true">#</a> 横向展开柱状图</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>option <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">dataset</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;汉字日期&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;一&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;二&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;四&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;五&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;六&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;日&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;苹果&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;香蕉&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">350</span><span class="token punctuation">,</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">encode</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">&#39;汉字日期&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">&#39;香蕉&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">encode</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">&#39;汉字日期&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">&#39;苹果&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="纵向堆叠柱状图" tabindex="-1"><a class="header-anchor" href="#纵向堆叠柱状图" aria-hidden="true">#</a> 纵向堆叠柱状图</h3><ol><li><p>普通堆叠</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>option <span class="token operator">=</span> <span class="token punctuation">{</span>
<span class="token literal-property property">dataset</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;汉字日期&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;一&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;二&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;四&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;五&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;六&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;日&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;苹果&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;香蕉&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">350</span><span class="token punctuation">,</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">encode</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">&#39;汉字日期&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">&#39;香蕉&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">encode</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">&#39;汉字日期&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">&#39;苹果&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token literal-property property">stack</span><span class="token operator">:</span> <span class="token string">&#39;total&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>百分比堆叠</p><p>仅需在</p></li></ol>`,8),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","柱状图实例.html.vue"]]);export{k as default};
