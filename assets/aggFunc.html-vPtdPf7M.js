import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as t,e as a}from"./app-M6UUlHgF.js";const e={},d=a(`<h1 id="aggfunc" tabindex="-1"><a class="header-anchor" href="#aggfunc" aria-hidden="true">#</a> aggFunc</h1><p>聚合函数又叫组函数，通常是对表中的数据进行统计和计算，一般结合分组(group by)来使用，用于统计和计算分组数据。 既如果不跟group by，则把整个表当成一个分组 聚合函数默认忽略字段为null的记录 要想列值为null的记录也参与计算，必须使用ifnull函数对null值做替换。</p><h2 id="_1-应用" tabindex="-1"><a class="header-anchor" href="#_1-应用" aria-hidden="true">#</a> 1.应用</h2><p>1）求总行数</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 返回非NULL数据的总行数.</span>
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>height<span class="token punctuation">)</span> <span class="token keyword">from</span> students<span class="token punctuation">;</span> 
<span class="token comment">-- 返回总行数，包含null值记录;</span>
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> students<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）求最大值，最小值</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查询女生的编号最大值</span>
<span class="token keyword">select</span> <span class="token function">max</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">from</span> students <span class="token keyword">where</span> gender <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3）求和</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查询男生的总身高</span>
<span class="token keyword">select</span> <span class="token function">sum</span><span class="token punctuation">(</span>height<span class="token punctuation">)</span> <span class="token keyword">from</span> students <span class="token keyword">where</span> gender <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4)求均值</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 求男生的平均身高, 聚合函数不统计null值，平均身高有误</span>
<span class="token keyword">select</span> <span class="token function">avg</span><span class="token punctuation">(</span>height<span class="token punctuation">)</span> <span class="token keyword">from</span> students <span class="token keyword">where</span> gender <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">-- 求男生的平均身高, 包含身高是null的</span>
<span class="token keyword">select</span> <span class="token function">avg</span><span class="token punctuation">(</span>ifnull<span class="token punctuation">(</span>height<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">from</span> students <span class="token keyword">where</span> gender <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.聚合方法</p><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>AVG()</td><td>求均值</td></tr><tr><td>BIT_AND()</td><td>Return bitwise AND</td></tr><tr><td>BIT_OR()</td><td>Return bitwise OR</td></tr><tr><td>BIT_XOR()</td><td>Return bitwise XOR</td></tr><tr><td>COUNT()</td><td>Return a count of the number of rows returned</td></tr><tr><td>COUNT(DISTINCT)</td><td>Return the count of a number of different values</td></tr><tr><td>GROUP_CONCAT()</td><td>组字段进行拼贴</td></tr><tr><td>JSON_ARRAYAGG()</td><td>Return result set as a single JSON array</td></tr><tr><td>JSON_OBJECTAGG()</td><td>Return result set as a single JSON object</td></tr><tr><td>MAX()</td><td>Return the maximum value</td></tr><tr><td>MIN()</td><td>Return the minimum value</td></tr><tr><td>STD()</td><td>Return the population standard deviation</td></tr><tr><td>STDDEV()</td><td>Return the population standard deviation</td></tr><tr><td>STDDEV_POP()</td><td>Return the population standard deviation</td></tr><tr><td>STDDEV_SAMP()</td><td>Return the sample standard deviation</td></tr><tr><td>SUM()</td><td>Return the sum</td></tr><tr><td>VAR_POP()</td><td>Return the population standard variance</td></tr><tr><td>VAR_SAMP()</td><td>Return the sample variance</td></tr><tr><td>VARIANCE()</td><td>Return the population standard variance</td></tr></tbody></table><p>参考： https://www.cnblogs.com/fanguangdexiaoyuer/p/6268211.html</p>`,14),o=[d];function p(r,l){return s(),t("div",null,o)}const u=n(e,[["render",p],["__file","aggFunc.html.vue"]]);export{u as default};
