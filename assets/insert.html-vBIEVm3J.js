import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-7knaTE3M.js";const t={},p=e(`<h1 id="insert" tabindex="-1"><a class="header-anchor" href="#insert" aria-hidden="true">#</a> insert</h1><h2 id="增加一行" tabindex="-1"><a class="header-anchor" href="#增加一行" aria-hidden="true">#</a> 增加一行</h2><p>1.增加一行</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> 表名称 <span class="token keyword">VALUES</span> <span class="token punctuation">(</span>值<span class="token number">1</span><span class="token punctuation">,</span> 值<span class="token number">2</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.增加一行，并指明字段</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> table_name <span class="token punctuation">(</span>列<span class="token number">1</span><span class="token punctuation">,</span> 列<span class="token number">2</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span>值<span class="token number">1</span><span class="token punctuation">,</span> 值<span class="token number">2</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>主键列是自动增长，但是在全列插入时需要占位，通常使用空值(0或者null或者default) 在全列插入时，如果字段列有默认值可以使用 default 来占位，插入后的数据就是之前设置的默认值</p><h2 id="批量导入" tabindex="-1"><a class="header-anchor" href="#批量导入" aria-hidden="true">#</a> 批量导入</h2><p><code>LOAD DATA INFILE 文件路径 INTO TABLE 表名 FIELDS TERMINATED BY &#39;分隔符&#39;</code>;</p><h2 id="查询增加" tabindex="-1"><a class="header-anchor" href="#查询增加" aria-hidden="true">#</a> 查询增加</h2><p>insert into .. select .. 表示: 把查询结果插入到指定表中，也就是表复制。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 将查询结果插入到good_cates表中</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> good_cates<span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token keyword">select</span> cate_name <span class="token keyword">from</span> goods <span class="token keyword">group</span> <span class="token keyword">by</span> cate_name<span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> 新表名 <span class="token keyword">as</span> <span class="token keyword">select</span> 字段名 <span class="token keyword">from</span> 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>有则更新,无则插入</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">## a is declared as UNIQUE and contains the value 1</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> t1 <span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
  <span class="token keyword">ON</span> <span class="token keyword">DUPLICATE</span> <span class="token keyword">KEY</span> <span class="token keyword">UPDATE</span> c<span class="token operator">=</span>c<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","insert.html.vue"]]);export{r as default};
