import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,e}from"./app-O0xqlHfm.js";const t={},p=e(`<h1 id="event" tabindex="-1"><a class="header-anchor" href="#event" aria-hidden="true">#</a> event</h1><p>the global event handler must be turned on to process events.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> VARIABLES <span class="token keyword">WHERE</span> variable_name<span class="token operator">=</span><span class="token string">&#39;event_scheduler&#39;</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">-----------------+-------+</span>
<span class="token operator">|</span> Variable_name   <span class="token operator">|</span> <span class="token keyword">Value</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------+-------+</span>
<span class="token operator">|</span> event_scheduler <span class="token operator">|</span> <span class="token keyword">OFF</span>   <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------+-------+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>With it OFF, nothing will trigger. So turn it on:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> event_scheduler <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>config the file, next when start mysql server, the <code>event_scheduler</code> will be <code>On</code>: <code>/etc/my.cnf</code><code>event_scheduler = 1</code></p><h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> syntax</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> EVENT event_name
    <span class="token keyword">ON</span> SCHEDULE schedule
    <span class="token punctuation">[</span><span class="token keyword">ON</span> COMPLETION <span class="token punctuation">[</span><span class="token operator">NOT</span><span class="token punctuation">]</span> PRESERVE<span class="token punctuation">]</span>
    <span class="token punctuation">[</span><span class="token keyword">ENABLE</span> <span class="token operator">|</span> <span class="token keyword">DISABLE</span> <span class="token operator">|</span> <span class="token keyword">DISABLE</span> <span class="token keyword">ON</span> SLAVE<span class="token punctuation">]</span>
    <span class="token keyword">DO</span> event_body<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> EVENT <span class="token identifier"><span class="token punctuation">\`</span>delete7DayOldMessages<span class="token punctuation">\`</span></span>
<span class="token keyword">ON</span> SCHEDULE EVERY <span class="token number">1</span> <span class="token keyword">DAY</span> STARTS <span class="token string">&#39;2015-09-01 00:00:00&#39;</span>
<span class="token keyword">DO</span> 
    <span class="token keyword">BEGIN</span>
        <span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> theMessages 
        <span class="token keyword">WHERE</span> datediff<span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>updateDt<span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token number">6</span><span class="token punctuation">;</span> <span class="token comment">-- not terribly exact, yesterday but &lt;24hrs is still 1 day</span>
    <span class="token keyword">END</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="schedule" tabindex="-1"><a class="header-anchor" href="#schedule" aria-hidden="true">#</a> schedule</h2><h3 id="周期执行-–-关键字-every" tabindex="-1"><a class="header-anchor" href="#周期执行-–-关键字-every" aria-hidden="true">#</a> 周期执行 – 关键字 EVERY</h3><p>单位有：second, minute, hour, day, week(周), quarter(季度), month, year，如：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ON</span> SCHEDULE EVERY <span class="token number">1</span> <span class="token keyword">second</span>      <span class="token comment">//每秒执行1次</span>
<span class="token keyword">ON</span> SCHEDULE EVERY <span class="token number">2</span> <span class="token keyword">minute</span>      <span class="token comment">//每两分钟执行1次</span>
<span class="token keyword">ON</span> SCHEDULE EVERY <span class="token number">3</span> <span class="token keyword">day</span>         <span class="token comment">//每3天执行1次</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在具体某个时间执行-–-关键字-at-如" tabindex="-1"><a class="header-anchor" href="#在具体某个时间执行-–-关键字-at-如" aria-hidden="true">#</a> 在具体某个时间执行 – 关键字 AT, 如：</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ON</span> SCHEDULE AT <span class="token keyword">current_timestamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token keyword">interval</span> <span class="token number">5</span> <span class="token keyword">day</span>   <span class="token comment">// 5天后执行</span>
<span class="token keyword">ON</span> SCHEDULE AT <span class="token keyword">current_timestamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token keyword">interval</span> <span class="token number">10</span> <span class="token keyword">minute</span>   <span class="token comment">// 10分钟后执行</span>
<span class="token keyword">ON</span> SCHEDULE AT <span class="token string">&#39;2016-10-01 21:50:00&#39;</span>        <span class="token comment">// 在2016年10月1日，晚上9点50执行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在某个时间段执行-–-关键字-starts-ends-如" tabindex="-1"><a class="header-anchor" href="#在某个时间段执行-–-关键字-starts-ends-如" aria-hidden="true">#</a> 在某个时间段执行 – 关键字 STARTS ENDS, 如：</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ON</span> SCHEDULE EVERY <span class="token number">1</span> <span class="token keyword">day</span> STARTS <span class="token keyword">current_timestamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token keyword">interval</span> <span class="token number">5</span> <span class="token keyword">day</span> ends <span class="token keyword">current_timestamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token keyword">interval</span> <span class="token number">1</span> <span class="token keyword">month</span> <span class="token comment">// 5天后开始每天都执行执行到下个月底</span>
<span class="token keyword">ON</span> SCHEDULE EVERY <span class="token number">1</span> <span class="token keyword">day</span> ENDS <span class="token keyword">current_timestamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token keyword">interval</span> <span class="token number">5</span> <span class="token keyword">day</span> <span class="token comment">//从现在起每天执行，执行5天</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>假如在定义event的时候有指定ends： 当为on completion preserve 的时候,当event到期了,event会被disable,但是该event还是会存在 当为on completion not preserve的时候,当event到期的时候,该event会被自动删除掉.</p><h2 id="other" tabindex="-1"><a class="header-anchor" href="#other" aria-hidden="true">#</a> other</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> EVENTS <span class="token keyword">FROM</span> my_db_name<span class="token punctuation">;</span> <span class="token comment">-- List all events by schema name (db name)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">drop</span> event event_name<span class="token punctuation">;</span> <span class="token comment">-- Deletes the event and its code</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开启关闭事件</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> event event_name <span class="token keyword">on</span> completion preserve <span class="token keyword">enable</span><span class="token punctuation">;</span><span class="token comment">//开启定时任务</span>
<span class="token keyword">alter</span> event event_name <span class="token keyword">on</span> completion preserve <span class="token keyword">disable</span><span class="token punctuation">;</span><span class="token comment">//关闭定时任务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>refs: https://riptutorial.com/mysql/example/15082/create-an-event https://dev.mysql.com/doc/refman/5.7/en/create-event.html https://devnote.pro/posts/10000040921184</p>`,24),o=[p];function l(c,r){return n(),a("div",null,o)}const k=s(t,[["render",l],["__file","event.html.vue"]]);export{k as default};
