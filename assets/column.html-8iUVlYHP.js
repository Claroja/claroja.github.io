import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,e}from"./app-A10JnHE0.js";const l={},t=e(`<h1 id="column" tabindex="-1"><a class="header-anchor" href="#column" aria-hidden="true">#</a> column</h1><p>1.添加字段</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">add</span> 列名 类型 约束<span class="token punctuation">;</span>
例：
<span class="token keyword">alter</span> <span class="token keyword">table</span> students <span class="token keyword">add</span> birthday <span class="token keyword">datetime</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.修改字段 1)修改字段名</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token punctuation">[</span>表名<span class="token punctuation">.</span><span class="token punctuation">]</span>TABLE_NAME <span class="token keyword">RENAME</span> <span class="token keyword">COLUMN</span> OLD_COLUMN_NAME <span class="token keyword">TO</span> NEW_COLUMN_NAME<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2）自改字段类型</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">modify</span> 列名 类型 约束<span class="token punctuation">;</span>
例：
<span class="token keyword">alter</span> <span class="token keyword">table</span> students <span class="token keyword">modify</span> birthday <span class="token keyword">date</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>modify: 只能修改字段类型或者约束，不能修改字段名</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 change 原名 新名 类型及约束<span class="token punctuation">;</span>
例：
<span class="token keyword">alter</span> <span class="token keyword">table</span> students change birthday birth <span class="token keyword">datetime</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>change: 既能对字段重命名又能修改字段类型还能修改约束</p><p>3.删除字段</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">drop</span> 列名<span class="token punctuation">;</span>
例：
<span class="token keyword">alter</span> <span class="token keyword">table</span> students <span class="token keyword">drop</span> birthday<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[t];function d(p,c){return n(),a("div",null,o)}const u=s(l,[["render",d],["__file","column.html.vue"]]);export{u as default};
