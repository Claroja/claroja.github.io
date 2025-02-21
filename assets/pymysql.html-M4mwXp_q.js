import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as e,c as o,d as p,w as c,e as n,b as l}from"./app-jdLxCr9I.js";const i={},u=n('<h1 id="智能补全" tabindex="-1"><a class="header-anchor" href="#智能补全" aria-hidden="true">#</a> 智能补全</h1><p>PyMySQL 遵循 Python 数据库 API v2.0 规范，并包含了 pure-Python MySQL 客户端库。</p><p><strong>pymysql</strong>操作数据库流程如下:</p><ol><li>创建链接<code>connection</code>: <code>pymysql.connect(&quot;ip:port&quot;,&quot;user&quot;,&quot;password&quot;,&quot;database&quot;)</code></li><li>创建游标<code>cursor</code>: <code>connection.cursor()</code></li></ol>',4),r=n(`<ol start="3"><li>执行语句<code>execute</code>: <code>cursor.execute(&quot;statement&quot;)</code></li><li>获得数据<code>fetchone</code>: <code>cursor.fetchone()</code></li><li>关闭连接<code>close</code>: <code>connection.close()</code></li></ol><p>另外在<code>update</code>和<code>delete</code>中要使用事务<code>commit</code>和<code>rollback</code>.</p><h2 id="查询数据" tabindex="-1"><a class="header-anchor" href="#查询数据" aria-hidden="true">#</a> 查询数据</h2><p>Python查询Mysql使用<code>fetchone()</code>方法获取单条数据, 使用<code>fetchall()</code>方法获取多条数据。 <code>fetchone()</code>: 获取一行 <code>fetchall()</code>: 接收全部的返回结果行. <code>rowcount</code>: 这是一个只读属性，并返回执行execute()方法后影响的行数。</p><h3 id="fetchone" tabindex="-1"><a class="header-anchor" href="#fetchone" aria-hidden="true">#</a> fetchone</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span>  pymysql
<span class="token comment">## 打开数据库连接</span>
connection <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;testuser&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;test123&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;TESTDB&quot;</span><span class="token punctuation">)</span>
<span class="token comment">## 使用 cursor() 方法创建一个游标对象</span>
cursor <span class="token operator">=</span> connection<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## 使用 execute()  方法执行 SQL 查询 </span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&quot;SELECT VERSION()&quot;</span><span class="token punctuation">)</span>
<span class="token comment">## 使用 fetchone() 方法获取单条数据.</span>
data <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchone<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Database version : %s &quot;</span> <span class="token operator">%</span> data<span class="token punctuation">)</span><span class="token comment">#</span>
<span class="token comment">## 关闭数据库连接</span>
connection<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fetchall" tabindex="-1"><a class="header-anchor" href="#fetchall" aria-hidden="true">#</a> fetchall</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span>  pymysql
<span class="token comment">## 打开数据库连接</span>
db <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;testuser&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;test123&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;TESTDB&quot;</span><span class="token punctuation">)</span>
<span class="token comment">## 使用cursor()方法获取操作游标 </span>
cursor <span class="token operator">=</span> db<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## SQL 查询语句</span>
sql <span class="token operator">=</span> &quot;SELECT <span class="token operator">*</span> FROM EMPLOYEE \\
          WHERE INCOME <span class="token operator">&gt;</span> <span class="token operator">%</span>s&quot; <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token comment">## 执行SQL语句</span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
<span class="token comment">## 获取所有记录列表</span>
results <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchall<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> row <span class="token keyword">in</span> results<span class="token punctuation">:</span>
    fname <span class="token operator">=</span> row<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    lname <span class="token operator">=</span> row<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    age <span class="token operator">=</span> row<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
    sex <span class="token operator">=</span> row<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>
    income <span class="token operator">=</span> row<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span>
    <span class="token comment"># 打印结果</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;fname=%s,lname=%s,age=%s,sex=%s,income=%s&quot;</span> <span class="token operator">%</span> \\
            <span class="token punctuation">(</span>fname<span class="token punctuation">,</span> lname<span class="token punctuation">,</span> age<span class="token punctuation">,</span> sex<span class="token punctuation">,</span> income<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">## 关闭数据库连接</span>
db<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h2><p>事务应该具有4个属性：原子性、一致性、隔离性、持久性。这四个属性通常称为ACID特性。</p><ul><li>原子性（atomicity）。一个事务是一个不可分割的工作单位，事务中包括的诸操作要么都做，要么都不做。</li><li>一致性（consistency）。事务必须是使数据库从一个一致性状态变到另一个一致性状态。一致性与原子性是密切相关的。</li><li>隔离性（isolation）。一个事务的执行不能被其他事务干扰。即一个事务内部的操作及使用的数据对并发的其他事务是隔离的，并发执行的各个事务之间不能互相干扰。</li><li>持久性（durability）。持续性也称永久性（permanence），指一个事务一旦提交，它对数据库中数据的改变就应该是永久性的。接下来的其他操作或故障不应该对其有任何影响。</li></ul><p>Python DB API 2.0 的事务提供了两个方法<code>commit</code> 或<code>rollback</code>。<code>commit()</code>方法游标的所有更新操作，<code>rollback()</code>方法回滚当前游标的所有操作。每一个方法都开始了一个新的事务。</p><h3 id="更新操作" tabindex="-1"><a class="header-anchor" href="#更新操作" aria-hidden="true">#</a> 更新操作</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span>  pymysql
<span class="token comment">## 打开数据库连接</span>
db <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;testuser&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;test123&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;TESTDB&quot;</span><span class="token punctuation">)</span>
<span class="token comment">## 使用cursor()方法获取操作游标 </span>
cursor <span class="token operator">=</span> db<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## SQL 更新语句</span>
sql <span class="token operator">=</span> <span class="token string">&quot;UPDATE EMPLOYEE SET AGE = AGE + 1 WHERE SEX = &#39;%c&#39;&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token string">&#39;M&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token comment"># 执行SQL语句</span>
    cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
    <span class="token comment"># 提交到数据库执行</span>
db<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">except</span><span class="token punctuation">:</span>
     <span class="token comment"># 发生错误时回滚</span>
     db<span class="token punctuation">.</span>rollback<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## 关闭数据库连接</span>
db<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除操作" tabindex="-1"><a class="header-anchor" href="#删除操作" aria-hidden="true">#</a> 删除操作</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span>  pymysql
<span class="token comment">## 打开数据库连接</span>
db <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;testuser&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;test123&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;TESTDB&quot;</span><span class="token punctuation">)</span>
<span class="token comment">## 使用cursor()方法获取操作游标 </span>
cursor <span class="token operator">=</span> db<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## SQL 删除语句</span>
sql <span class="token operator">=</span> <span class="token string">&quot;DELETE FROM EMPLOYEE WHERE AGE &gt; %s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token comment"># 执行SQL语句</span>
    cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
    <span class="token comment"># 提交修改db.commit()</span>
<span class="token keyword">except</span><span class="token punctuation">:</span>
     <span class="token comment"># 发生错误时回滚</span>
     db<span class="token punctuation">.</span>rollback<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## 关闭连接</span>
db<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建表" tabindex="-1"><a class="header-anchor" href="#创建表" aria-hidden="true">#</a> 创建表</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span>  pymysql
<span class="token comment">## 打开数据库连接</span>
db <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;testuser&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;test123&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;TESTDB&quot;</span><span class="token punctuation">)</span>
<span class="token comment">## 使用 cursor() 方法创建一个游标对象 </span>
cursorcursor <span class="token operator">=</span> db<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## 使用 execute() 方法执行 SQL，如果表存在则删除</span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&quot;DROP TABLE IF EXISTS EMPLOYEE&quot;</span><span class="token punctuation">)</span>
<span class="token comment">## 使用预处理语句创建表</span>
sql <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;CREATE TABLE EMPLOYEE (
              FIRST_NAME  CHAR(20) NOT NULL,
              LAST_NAME  CHAR(20),
              AGE INT,
              SEX CHAR(1),
              INCOME FLOAT )&quot;&quot;&quot;</span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
<span class="token comment">## 关闭数据库连接</span>
db<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://zhuanlan.zhihu.com/p/139763027</p>`,19);function d(k,m){const s=t("font");return e(),o("div",null,[u,p(s,{style:{background:"yellow"}},{default:c(()=>[l("游标（cursor）是系统为用户开设的一个数据缓冲区，存放SQL语句的执行结果。每个游标区都有一个名字,用户可以用SQL语句逐一从游标中获取记录，并赋给主变量，交由主语言进一步处理。游标总是与一条SQL 查询语句相关联因为游标由结果集（可以是零条、一条或由相关的选择语句检索出的多条记录）和结果集中指向特定记录的游标位置组成。")]),_:1}),r])}const h=a(i,[["render",d],["__file","pymysql.html.vue"]]);export{h as default};
