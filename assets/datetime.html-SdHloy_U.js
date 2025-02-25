import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as e,a as r}from"./app-7knaTE3M.js";const a={},n=r(`<h1 id="datetime" tabindex="-1"><a class="header-anchor" href="#datetime" aria-hidden="true">#</a> datetime</h1><h2 id="_1-应用" tabindex="-1"><a class="header-anchor" href="#_1-应用" aria-hidden="true">#</a> 1.应用</h2><p>1.如果数据库中时间格式是（2013-01-12 23:23:56—时间精确到秒）</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> product <span class="token keyword">where</span> <span class="token keyword">timestamp</span><span class="token punctuation">(</span>add_time<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;2013-01-12 23:23:56&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> product <span class="token keyword">where</span> <span class="token keyword">timestamp</span><span class="token punctuation">(</span>add_time<span class="token punctuation">)</span> <span class="token operator">between</span> <span class="token string">&#39;2013-01-12 03:23:56&#39;</span> <span class="token operator">and</span> <span class="token string">&#39;2013-01-12 23:23:56&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果时间格式是（2013-01-12）则不能直接使用</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> product <span class="token keyword">where</span> add_time <span class="token operator">=</span> <span class="token string">&#39;2013-01-12&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因为<code>add_time = &#39;2013-01-12&#39;</code>表示的是<code>&#39;2013-01-12 00:00:00&#39;</code>，所以应该使用：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> product <span class="token keyword">where</span> <span class="token keyword">Date</span><span class="token punctuation">(</span>add_time<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;2013-01-12&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h2><table><thead><tr><th>Data Type</th><th>“Zero” Value</th></tr></thead><tbody><tr><td>DATE</td><td>&#39;0000-00-00&#39;</td></tr><tr><td>TIME</td><td>&#39;00:00:00&#39;</td></tr><tr><td>DATETIME</td><td>&#39;0000-00-00 00:00:00&#39;</td></tr><tr><td>TIMESTAMP</td><td>&#39;0000-00-00 00:00:00&#39;</td></tr><tr><td>YEAR</td><td>0000</td></tr></tbody></table><p>DATE类型只包含了日期部分,不包含时间部分.形式为&#39;YYYY-MM-DD&#39;,范围是&#39;1000-01-01&#39; to &#39;9999-12-31&#39; DATETIME类型同时包含了日期和时间部分.形式为&#39;YYYY-MM-DD hh:mm:ss&#39;,范围是&#39;1000-01-01 00:00:00&#39; to &#39;9999-12-31 23:59:59&#39; TIMESTAMP类型同时包含了日期和时间部分.范围是&#39;1970-01-01 00:00:01&#39; UTC to &#39;2038-01-19 03:14:07&#39; UTC.</p><p>对于TIMESTAMP，它把客户端插入的时间从当前时区转化为UTC（世界标准时间）进行存储。查询时，将其又转化为客户端当前时区进行返回。 而对于DATETIME，不做任何改变，基本上是原样输入和输出。</p><p>总结：TIMESTAMP和DATETIME除了存储范围和存储方式不一样，没有太大区别。当然，对于跨时区的业务，TIMESTAMP更为合适。</p><h2 id="function" tabindex="-1"><a class="header-anchor" href="#function" aria-hidden="true">#</a> function</h2><table><thead><tr><th>Name</th><th>Description</th><th>例子</th></tr></thead><tbody><tr><td><code>ADDDATE(date,INTERVAL expr unit), ADDDATE(expr,days)</code></td><td>增加时间间隔</td><td><code>SELECT ADDDATE(&#39;2008-01-02&#39;, 31); # -&gt; &#39;2008-02-02&#39;</code></td></tr><tr><td><code>ADDTIME(expr1,expr2)</code></td><td>添加时间间隔</td><td><code>SELECT ADDTIME(&#39;01:00:00.999999&#39;, &#39;02:00:00.999998&#39;); # -&gt; &#39;03:00:01.999997&#39;</code></td></tr><tr><td>CONVERT_TZ()</td><td>Convert from one time zone to another</td><td></td></tr><tr><td>CURDATE()</td><td>获得当前日期</td><td><code>SELECT CURDATE(); # -&gt; &#39;2008-06-13&#39;</code></td></tr><tr><td>CURRENT_DATE(), CURRENT_DATE</td><td>Synonyms for CURDATE()</td><td></td></tr><tr><td>CURRENT_TIME(), CURRENT_TIME</td><td>Synonyms for CURTIME()</td><td></td></tr><tr><td>CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP</td><td>Synonyms for NOW()</td><td></td></tr><tr><td>CURTIME();</td><td>获得当前时间</td><td><code>SELECT CURTIME(); # -&gt; &#39;23:50:26&#39;</code></td></tr><tr><td>DATE(expr)</td><td>提取日期</td><td><code>SELECT DATE(&#39;2003-12-31 01:02:03&#39;); # -&gt; &#39;2003-12-31&#39;</code></td></tr><tr><td>DATE_ADD()</td><td>Add time values (intervals) to a date value</td><td></td></tr><tr><td>DATE_FORMAT(date,format)</td><td>格式化时间</td><td></td></tr><tr><td>DATE_SUB()</td><td>Subtract a time value (interval) from a date</td><td></td></tr><tr><td>DATEDIFF(expr1,expr2)</td><td>日期相减</td><td><code>SELECT DATEDIFF(&#39;2007-12-31 23:59:59&#39;,&#39;2007-12-30&#39;); # -&gt; 1</code></td></tr><tr><td>DAY()</td><td>Synonym for DAYOFMONTH()</td><td></td></tr><tr><td>DAYNAME(date)</td><td>返回周几</td><td><code>SELECT DAYNAME(&#39;2007-02-03&#39;); # -&gt; &#39;Saturday&#39;</code></td></tr><tr><td>DAYOFMONTH(date)</td><td>月中第几天</td><td><code>SELECT DAYOFMONTH(&#39;2007-02-03&#39;); # -&gt; 3</code></td></tr><tr><td>DAYOFWEEK(date)</td><td>周中星期几</td><td><code>SELECT DAYOFWEEK(&#39;2007-02-03&#39;); # -&gt; 7</code></td></tr><tr><td>DAYOFYEAR(date)</td><td>年中第几天</td><td><code>SELECT DAYOFYEAR(&#39;2007-02-03&#39;); # -&gt; 34</code></td></tr><tr><td>EXTRACT(unit FROM date)</td><td>提取部分时间</td><td><code>ELECT EXTRACT(YEAR FROM &#39;2019-07-02&#39;); # -&gt; 2019</code></td></tr><tr><td>FROM_DAYS(N)</td><td>将天数换换为时间</td><td><code>SELECT FROM_DAYS(730669); # -&gt; &#39;2000-07-03&#39;</code></td></tr><tr><td>FROM_UNIXTIME(unix_timestamp[,format])</td><td>将unix时间戳转换为时间</td><td><code>SELECT FROM_UNIXTIME(1447430881); # -&gt; &#39;2015-11-13 10:08:01&#39;</code></td></tr><tr><td>GET_FORMAT({DATE</td><td>TIME</td><td>DATETIME}, {&#39;EUR&#39;</td></tr><tr><td>HOUR(time)</td><td>抽取小时</td><td><code>SELECT HOUR(&#39;10:05:03&#39;); # -&gt; 10</code></td></tr><tr><td>LAST_DAY(date)</td><td>返回每月的最后一天</td><td><code>SELECT LAST_DAY(&#39;2003-02-05&#39;); # -&gt; &#39;2003-02-28&#39;</code></td></tr><tr><td>LOCALTIME(), LOCALTIME</td><td>Synonym for NOW()</td><td></td></tr><tr><td>LOCALTIMESTAMP, LOCALTIMESTAMP()</td><td>Synonym for NOW()</td><td></td></tr><tr><td>MAKEDATE(year,dayofyear)</td><td>将某年的天数转换为日期</td><td><code>mysql&gt; SELECT MAKEDATE(2011,365); # -&gt; &#39;2011-12-31&#39;</code></td></tr><tr><td>MAKETIME(hour,minute,second)</td><td>创建时间</td><td><code>SELECT MAKETIME(12,15,30); # -&gt; &#39;12:15:30&#39;</code></td></tr><tr><td>MICROSECOND(expr)</td><td>抽取微秒</td><td><code>SELECT MICROSECOND(&#39;12:00:00.123456&#39;); # -&gt; 123456</code></td></tr><tr><td>MINUTE(time)</td><td>抽取分钟</td><td><code>SELECT MINUTE(&#39;2008-02-03 10:05:03&#39;); # -&gt; 5</code></td></tr><tr><td>MONTH(date)</td><td>抽取月份</td><td><code>mysql&gt; SELECT MONTH(&#39;2008-02-03&#39;); # -&gt; 2</code></td></tr><tr><td>MONTHNAME(date)</td><td>返回月份的名称</td><td><code>mysql&gt; SELECT MONTHNAME(&#39;2008-02-03&#39;); # -&gt; &#39;February&#39;</code></td></tr><tr><td>NOW([fsp])</td><td>返回日期和时间</td><td><code>SELECT NOW(); # -&gt; &#39;2007-12-15 23:50:26&#39;</code></td></tr><tr><td>PERIOD_ADD()</td><td>Add a period to a year-month</td><td></td></tr><tr><td>PERIOD_DIFF()</td><td>Return the number of months between periods</td><td></td></tr><tr><td>QUARTER(date)</td><td>返回季节</td><td><code>mysql&gt; SELECT QUARTER(&#39;2008-04-01&#39;); # -&gt; 2</code></td></tr><tr><td>SEC_TO_TIME()</td><td>Converts seconds to &#39;hh:mm:ss&#39; format</td><td></td></tr><tr><td>SECOND(time)</td><td>截取秒数</td><td><code>SELECT SECOND(&#39;10:05:03&#39;); # -&gt; 3</code></td></tr><tr><td>SEC_TO_TIME(seconds)</td><td>秒数转换为时间</td><td><code>SELECT SEC_TO_TIME(2378); # -&gt; &#39;00:39:38&#39;</code></td></tr><tr><td>SUBDATE(date,INTERVAL expr unit), SUBDATE(expr,days)</td><td>DATE_SUB()</td><td></td></tr><tr><td>SUBTIME(expr1,expr2)</td><td>时间相减</td><td><code>mysql&gt; SELECT SUBTIME(&#39;01:00:00.999999&#39;, &#39;02:00:00.999998&#39;); # -&gt; &#39;-00:59:59.999999&#39;</code></td></tr><tr><td>SYSDATE([fsp])</td><td>返回当前时间,NOW()返回的是程序开始的时间</td><td></td></tr><tr><td>TIME(expr)</td><td>提取时间</td><td><code>SELECT TIME(&#39;2003-12-31 01:02:03&#39;); # -&gt; &#39;01:02:03&#39;</code></td></tr><tr><td>TIME_FORMAT()</td><td>Format as time</td><td></td></tr><tr><td>TIME_TO_SEC()</td><td>Return the argument converted to seconds</td><td></td></tr><tr><td>TIMEDIFF(expr1,expr2)</td><td>时间相减</td><td></td></tr><tr><td>TIMESTAMP(expr), TIMESTAMP(expr1,expr2)</td><td>日期转换为时间</td><td><code>SELECT TIMESTAMP(&#39;2003-12-31&#39;); # -&gt; &#39;2003-12-31 00:00:00&#39;</code></td></tr><tr><td>TIMESTAMPADD(unit,interval,datetime_expr)</td><td>时间戳相加</td><td><code>SELECT TIMESTAMPADD(MINUTE,1,&#39;2003-01-02&#39;); # -&gt; &#39;2003-01-02 00:01:00&#39;</code></td></tr><tr><td>TIMESTAMPDIFF(unit,datetime_expr1,datetime_expr2)</td><td>时间间隔</td><td><code>SELECT TIMESTAMPDIFF(MONTH,&#39;2003-02-01&#39;,&#39;2003-05-01&#39;); # -&gt; 3</code></td></tr><tr><td>TO_DAYS()</td><td>Return the date argument converted to days</td><td></td></tr><tr><td>TO_SECONDS()</td><td>Return the date or datetime argument converted to seconds since Year 0</td><td></td></tr><tr><td>UNIX_TIMESTAMP()</td><td>Return a Unix timestamp</td><td></td></tr><tr><td>UTC_DATE()</td><td>Return the current UTC date</td><td></td></tr><tr><td>UTC_TIME()</td><td>Return the current UTC time</td><td></td></tr><tr><td>UTC_TIMESTAMP()</td><td>Return the current UTC date and time</td><td></td></tr><tr><td>WEEK()</td><td>Return the week number</td><td></td></tr><tr><td>WEEKDAY()</td><td>Return the weekday index</td><td></td></tr><tr><td>WEEKOFYEAR()</td><td>Return the calendar week of the date (1-53)</td><td></td></tr><tr><td>YEAR()</td><td>Return the year</td><td></td></tr><tr><td>YEARWEEK()</td><td>Return the year and week</td><td></td></tr></tbody></table><p>参考: https://www.cnblogs.com/mxwz/p/7520309.html https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html https://www.jianshu.com/p/9305e8698b52</p>`,16),s=[n];function o(E,c){return d(),e("div",null,s)}const i=t(a,[["render",o],["__file","datetime.html.vue"]]);export{i as default};
