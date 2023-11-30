import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,e as s}from"./app-0JgdiRQ-.js";const e={},o=s(`<h1 id="tpl" tabindex="-1"><a class="header-anchor" href="#tpl" aria-hidden="true">#</a> tpl</h1><p>DML(insert、update、delete)操作是原子单位，事务是一系列的DML。</p><p>开启事务：Start Transaction 事务结束：End Transaction 提交事务：Commit Transaction 回滚事务：Rollback Transaction</p><p><code>innodb</code>引擎默认是开启事务的，在我们输入一条sql语句时，默认自动开启事务和提交事务</p><p>查看是否开启事务，默认是开启，on</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> variables <span class="token operator">like</span> autocommit<span class="token punctuation">;</span>
<span class="token identifier"><span class="token punctuation">\`</span><span class="token punctuation">\`</span></span>
关闭自动事务
<span class="token identifier"><span class="token punctuation">\`</span><span class="token punctuation">\`</span></span><span class="token punctuation">\`</span><span class="token keyword">sql</span>
<span class="token keyword">set</span> autocommit <span class="token operator">=</span> <span class="token keyword">off</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关闭事务后，我们就需要自己<code>commit</code></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> t_name <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">commit</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-手动事务" tabindex="-1"><a class="header-anchor" href="#_2-手动事务" aria-hidden="true">#</a> 2.手动事务</h2><p>一般我们不会关闭autocommit，因为太麻烦。想要使用事务时，用<code>start transaction</code>命令 1)开始事务 <code>start transaction;</code> 2)执行事务 执行sql语句 3)提交事务 <code>commit</code> 4)回滚 回滚操作，默认清空Transaction中所有的操作，可以通过<code>savepoint</code>来指定回滚点，然后使用<code>rollback to point</code>来回滚 <code>rollback</code> 5)保存回滚点 <code>savapoint name</code></p><p>1.事务的并发问题 1）脏读：事务A读取了事务B更新的数据，然后B回滚操作，那么A读取到的数据是脏数据 2）不可重复读：事务 A 多次读取同一数据，事务 B 在事务A多次读取的过程中，对数据作了更新并提交，导致事务A多次读取同一数据时，结果 不一致。 3）幻读：系统管理员A将数据库中所有学生的成绩从具体分数改为ABCDE等级，但是系统管理员B就在这个时候插入了一条具体分数的记录，当系统管理员A改结束后发现还有一条记录没有改过来，就好像发生了幻觉一样，这就叫幻读。</p><p>2.事务隔离级别</p><table><thead><tr><th>事务隔离级别</th><th>脏读</th><th>不可重复读</th><th>幻读</th></tr></thead><tbody><tr><td>读未提交（read-uncommitted）</td><td>是</td><td>是</td><td>是</td></tr><tr><td>不可重复读（read-committed）</td><td>否</td><td>是</td><td>是</td></tr><tr><td>可重复读（repeatable-read）</td><td>否</td><td>否</td><td>是</td></tr><tr><td>串行化（serializable）</td><td>否</td><td>否</td><td>否</td></tr></tbody></table><p>3.应用 mysql默认事务隔离级别是repeatable-read <code>select @@tx_isolation</code></p><p>参考： https://www.cnblogs.com/wyaokai/p/10921323.html</p><p>参考： https://www.cnblogs.com/sun-yanglu/p/9612853.html</p>`,16),d=[o];function c(p,i){return a(),n("div",null,d)}const u=t(e,[["render",c],["__file","tpl.html.vue"]]);export{u as default};
