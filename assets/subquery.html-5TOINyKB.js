import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,e}from"./app-MTzDpLgJ.js";const p={},t=e(`<h1 id="subquery" tabindex="-1"><a class="header-anchor" href="#subquery" aria-hidden="true">#</a> subquery</h1><p>1.必须用括号括起来 2.最多嵌套255层 3.执行顺序由内到外,先执行子查询再查询主查询 4.若子查询作为一个表, 则需要添加表别名; 如果需要引用子查询的字段, 则需要添加字段别名</p><h2 id="where-后的子查询" tabindex="-1"><a class="header-anchor" href="#where-后的子查询" aria-hidden="true">#</a> where 后的子查询</h2><h3 id="标量子查询" tabindex="-1"><a class="header-anchor" href="#标量子查询" aria-hidden="true">#</a> 标量子查询</h3><p>搭配使用符号: <code>&gt; &lt; =</code></p><p>查看工资最少的员工的名字:</p><ol><li><code>SELECT MIN(salary) FROM employees</code> 得到最少工资的标量</li><li><code>SELECT name FROM employees WHERE salary=</code> 全表扫描和最少工资相等的员工名字</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> name
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> salary<span class="token operator">=</span><span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
	<span class="token keyword">FROM</span> employees
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多行子查询" tabindex="-1"><a class="header-anchor" href="#多行子查询" aria-hidden="true">#</a> 多行子查询</h3><p>搭配符号:</p><ul><li><code>IN/NOT IN</code> <code>IN()</code>等价于<code>=ANY()</code>(等于其中任意一个) <code>NOT IN()</code>等价于<code>&lt;&gt;ALL()</code></li><li><code>ANY/SOME</code></li><li><code>ALL</code></li></ul><p>返回location_id是1400或1700的部门中的所有员工姓名</p><ol><li><code>SELECT department_id FROM departments WHERE location_id IN (1400, 1700)</code> 查询符合<code>location_id</code>的<code>department_id</code></li><li><code>SELECT name FROM employees WHERE department_id IN</code> 在<code>employees</code>查找相关部门的雇员的名称</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> name
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> department_id <span class="token operator">IN</span><span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> department_id
	<span class="token keyword">FROM</span> departments
	<span class="token keyword">WHERE</span> location_id <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">1400</span><span class="token punctuation">,</span> <span class="token number">1700</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多列子查询" tabindex="-1"><a class="header-anchor" href="#多列子查询" aria-hidden="true">#</a> 多列子查询</h3><ol><li>一行多列 查询员工编号最小而且工资最高的员工信息</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> <span class="token punctuation">(</span>employee_id<span class="token punctuation">,</span> salary<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>employee_id<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">MAX</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
	<span class="token keyword">FROM</span> employees
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>多行多列</li></ol><h2 id="select后面的子查询" tabindex="-1"><a class="header-anchor" href="#select后面的子查询" aria-hidden="true">#</a> select后面的子查询</h2><p>查询每个部门的员工个数</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span> department_name<span class="token punctuation">,</span><span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span>
	<span class="token keyword">FROM</span> employees e
	<span class="token keyword">WHERE</span> e<span class="token punctuation">.</span>department_id<span class="token operator">=</span>d<span class="token punctuation">.</span>department_id
<span class="token punctuation">)</span> 对应员工数
<span class="token keyword">FROM</span> departments d<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="from后的子查询" tabindex="-1"><a class="header-anchor" href="#from后的子查询" aria-hidden="true">#</a> from后的子查询</h2><p>查询每个部门的平均工资的工资等级</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span> ag<span class="token punctuation">,</span> grade_level
<span class="token keyword">FROM</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> ag<span class="token punctuation">,</span>department_id
	<span class="token keyword">FROM</span> employees e
	<span class="token keyword">WHERE</span> e<span class="token punctuation">.</span>department_id <span class="token operator">IS</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
	<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
<span class="token punctuation">)</span> ag_dep <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> job_grades j
	<span class="token keyword">ON</span> ag_dep<span class="token punctuation">.</span>ag <span class="token operator">BETWEEN</span> lowest_sal <span class="token operator">AND</span> highest_sal<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exists后的子查询" tabindex="-1"><a class="header-anchor" href="#exists后的子查询" aria-hidden="true">#</a> exists后的子查询</h2><p>查询有员工的部门名：</p><p>注意<code>EXISTS</code>和其他子查询语句不同的是会先扫描外表</p><ol><li><code>SELECT department_name FROM departments d WHERE EXISTS</code> 扫描第一条记录</li><li><code>SELECT * FROM employees e WHERE e.department_id = d.department_id</code> 外表的第一条记录在不在子表中, 如果在则返回<code>true</code></li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> department_name
<span class="token keyword">FROM</span> departments d
<span class="token keyword">WHERE</span> <span class="token keyword">EXISTS</span><span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> <span class="token operator">*</span> 
	<span class="token keyword">FROM</span> employees e
	<span class="token keyword">WHERE</span> e<span class="token punctuation">.</span>department_id <span class="token operator">=</span> d<span class="token punctuation">.</span>department_id
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里等价于用<code>IN</code></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> department_name
<span class="token keyword">FROM</span> departments d 
<span class="token keyword">WHERE</span> d<span class="token punctuation">.</span>department_id <span class="token operator">IN</span><span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> department_id
	<span class="token keyword">FROM</span> employees
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="with-as" tabindex="-1"><a class="header-anchor" href="#with-as" aria-hidden="true">#</a> with as</h2><p>其实就是把一大堆重复用到的sql语句放在with as里面，取一个别名，后面的查询就可以用它，这样对于大批量的sql语句起到一个优化的作用，而且清楚明了。</p><ul><li>相当于建了个e临时表</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">with</span> e <span class="token keyword">as</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> scott<span class="token punctuation">.</span>emp e <span class="token keyword">where</span> e<span class="token punctuation">.</span>empno<span class="token operator">=</span><span class="token number">7499</span><span class="token punctuation">)</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> e<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>相当于建了e、d临时表</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">with</span>
e <span class="token keyword">as</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> scott<span class="token punctuation">.</span>emp<span class="token punctuation">)</span><span class="token punctuation">,</span>
d <span class="token keyword">as</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> scott<span class="token punctuation">.</span>dept<span class="token punctuation">)</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> e<span class="token punctuation">,</span> d <span class="token keyword">where</span> e<span class="token punctuation">.</span>deptno <span class="token operator">=</span> d<span class="token punctuation">.</span>deptno<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>可以给列起别名</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">WITH</span> cte <span class="token punctuation">(</span>col1<span class="token punctuation">,</span> col2<span class="token punctuation">)</span> <span class="token keyword">AS</span>
<span class="token punctuation">(</span>
  <span class="token keyword">SELECT</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span>
  <span class="token keyword">UNION</span> <span class="token keyword">ALL</span>
  <span class="token keyword">SELECT</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span>
<span class="token punctuation">)</span>
<span class="token keyword">SELECT</span> col1<span class="token punctuation">,</span> col2 <span class="token keyword">FROM</span> cte<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://blog.csdn.net/war_233/article/details/119344207</p>`,40),o=[t];function l(c,d){return n(),a("div",null,o)}const u=s(p,[["render",l],["__file","subquery.html.vue"]]);export{u as default};
