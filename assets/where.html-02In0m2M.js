import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o,c as t,e as d}from"./app-jdLxCr9I.js";const c={},r=d('<h1 id="where" tabindex="-1"><a class="header-anchor" href="#where" aria-hidden="true">#</a> where</h1><h2 id="比较运算符" tabindex="-1"><a class="header-anchor" href="#比较运算符" aria-hidden="true">#</a> 比较运算符</h2><p>where|description|example --|-- <code>=</code>|Equal|<code>WHERE col = 24</code><code>&lt;&gt;</code> or <code>!=</code>|Not equal. Note: In some versions of SQL this operator may be written as | <code>&gt;</code>|Greater than| <code>&gt;=</code>|Greater than or equal| <code>&lt;</code>|Less than| <code>&lt;=</code>|Less than or equal| <code>BETWEEN...AND</code>|等价于 <code>&gt;= and &lt;=</code>|<code>WHERE col BETWEEN 2019 AND 2021</code><code>LIKE</code>|Search for a patter|<code>WHERE col [NOT] LIKE &#39;U%&#39;</code><code>IN</code> or <code>NOT IN</code>|To specify multiple possible values for a column|<code>WHERE col [NOT] IN (&#39;Belgium&#39;, &#39;France&#39;, &#39;Germany&#39;, &#39;UK&#39;)</code><code>IS NULL</code> or <code>IS NOT NULL</code>|<code>WHERE col IS [NOT] NULL</code><code>EXISTS</code>|checks if the subquery returns any value at all|<code>WHERE [NOT] EXISTS (SELECT * ...)</code></p><p><strong>null</strong> 1.不能使用=代替is 2.null 不等于 ‘’ 空字符串</p><p><strong>like</strong> 1..%表示任意多个任意字符 2._表示一个任意字符</p><h2 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h2><table><thead><tr><th>where</th><th>description</th><th>example</th></tr></thead><tbody><tr><td>AND</td><td></td><td><code>WHERE col1 = &#39;Support&#39; AND col2 = 2021</code></td></tr><tr><td>OR</td><td></td><td><code>WHERE col1 = &#39;Seattle&#39; OR col2 = &#39;Bellevue&#39;</code></td></tr><tr><td>NOT</td><td></td><td><code>WHERE col NOT LIKE &#39;U%&#39;</code></td></tr></tbody></table>',7),a=[r];function l(h,n){return o(),t("div",null,a)}const E=e(c,[["render",l],["__file","where.html.vue"]]);export{E as default};
