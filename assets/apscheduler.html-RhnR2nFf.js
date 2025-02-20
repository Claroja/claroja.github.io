import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as s,a}from"./app-9tftCahk.js";const e={},d=a(`<h1 id="apscheduler" tabindex="-1"><a class="header-anchor" href="#apscheduler" aria-hidden="true">#</a> apscheduler</h1><p>APScheduler （advanceded python scheduler） 特点： 1.不依赖于Linux系统的crontab系统定时，独立运行 2.可以动态添加新的定时任务，如 下单后30分钟内必须支付，否则取消订单，就可以借助此工具（每下一单就要添加此订单的定时任务） 3.对添加的定时任务可以做持久保存</p><h2 id="基础概念" tabindex="-1"><a class="header-anchor" href="#基础概念" aria-hidden="true">#</a> 基础概念</h2><p>触发器(trigger)和保存调度逻辑. 作业存储(job store),默认存储在内存中,也可以保存在数据库中(使用序列化和反序列化实现) 执行器(executor)控制执行的作业 调度器(scheduler)包含以上三者 <strong>选择合适的调度器,存储,执行和触发器</strong></p><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>BlockingScheduler</td><td>当在进程中使用时</td></tr><tr><td>BackgroundScheduler</td><td>后台运行,不影响当前系统</td></tr><tr><td>AsyncIOScheduler</td><td>async module</td></tr><tr><td>GeventScheduler</td><td>gevent</td></tr><tr><td>TornadoScheduler</td><td>Tornado</td></tr><tr><td>TwistedScheduler</td><td>Twister</td></tr><tr><td>QtScheduler</td><td>Qt</td></tr><tr><td><strong>选择合适的作业存储</strong></td><td></td></tr><tr><td>默认作业存储(MemoryJobStore),宕机会丢失作业</td><td></td></tr><tr><td>数据库(Mongo SQLAlchemy JobStore),宕机后仍然保留作业</td><td></td></tr><tr><td><strong>选择合适的执行器</strong></td><td></td></tr><tr><td>(ThreadPoolExecutor)默认的执行器,多线程</td><td></td></tr><tr><td>(ProcessPoolExecutor)多进程</td><td></td></tr><tr><td><strong>选择合适的触发器</strong></td><td></td></tr><tr><td>名称</td><td>描述</td></tr><tr><td>-</td><td>-</td></tr><tr><td>date</td><td>作业执行一次,指定时间</td></tr><tr><td>interval</td><td>间隔执行,多次</td></tr><tr><td>cron</td><td>和linuxcrontab格式兼容</td></tr></tbody></table><p><strong>触发器一般参数</strong></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>job_function</td><td>调用的函数</td></tr><tr><td>trigger</td><td>触发类型</td></tr></tbody></table><p><strong>date触发器</strong></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>run_date</td><td>作业运行的时间</td></tr><tr><td>timezone</td><td>时区</td></tr></tbody></table><p>interval触发器</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>weeks(int)</td><td>间隔周数</td></tr><tr><td>days(int)</td><td>间隔天数</td></tr><tr><td>hours(int)</td><td>间隔小时</td></tr><tr><td>minutes(int)</td><td>间隔分钟</td></tr><tr><td>seconds(int)</td><td>间隔秒数</td></tr><tr><td>start_date(datetime|str)</td><td>开始日期</td></tr><tr><td>end_date(datetime|str)</td><td>结束日期</td></tr><tr><td>timezone(datetime|str)</td><td>时区</td></tr></tbody></table><p>cron触发器</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>year(int</td><td>str)</td></tr><tr><td>month (int|str)</td><td>月 (范围1-12)</td></tr><tr><td>day (int|str)</td><td>日 (范围1-31)</td></tr><tr><td>week (int|str)</td><td>周 (范围1-53)</td></tr><tr><td>day_of_week (int|str)</td><td>周内第几天或者星期几 (范围0-6 或者 mon,tue,wed,thu,fri,sat,sun)</td></tr><tr><td>hour (int|str)</td><td>时 (范围0-23)</td></tr><tr><td>minute (int|str)</td><td>分 (范围0-59)</td></tr><tr><td>second (int|str)</td><td>秒 (范围0-59)</td></tr><tr><td>start_date (datetime|str)</td><td>最早开始日期(包含)</td></tr><tr><td>end_date (datetime|str)</td><td>最晚结束时间(包含)</td></tr><tr><td>timezone (datetime.tzinfo|str)</td><td>指定时区</td></tr></tbody></table><p><strong>取值格式</strong></p><table><thead><tr><th>表达式</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>*</td><td>any</td><td>每个值触发发</td></tr><tr><td>*/a</td><td>any</td><td>每个间隔值出发, 并从最小的值出发</td></tr><tr><td>a-b</td><td>范围内每个值出发</td><td></td></tr><tr><td>a-b/c</td><td>在a-b之间的间隔c值出发</td><td></td></tr><tr><td>xth y</td><td>day</td><td>在每月x周的y天触发</td></tr><tr><td>last x</td><td>day</td><td>在每月的x周触发</td></tr><tr><td>last</td><td>day</td><td>在每月的x天触发</td></tr><tr><td>x,y,z</td><td>day</td><td>Fire on any matching expression; can combine any number of any of the above expressions</td></tr></tbody></table><p><strong>例子</strong> second=&quot;5&quot;|每分钟第5秒执行一次 second=&quot;1,3,5&quot;|每分钟1,3,5秒执行一次 second=&quot;*&quot;|每秒执行一次 second=&quot;5/2&quot;|每分钟的第5秒开始,间隔两2秒执行一次 second=&quot;5-10/2&quot;|每分钟的第5-10秒,间隔2秒执行一次</p><p><strong>contab格式说明</strong> 用户所建立的crontab文件中，每一行都代表一项任务，每行的每个字段代表一项设置，它的格式共分为六个字段，前五段是时间设定段，第六段是要执行的命令段，格式如下：</p><p>minute hour day month week command</p><p>其中：</p><p>minute： 表示分钟，可以是从0到59之间的任何整数。 hour：表示小时，可以是从0到23之间的任何整数。 day：表示日期，可以是从1到31之间的任何整数。 month：表示月份，可以是从1到12之间的任何整数。 week：表示星期几，可以是从0到7之间的任何整数，这里的0或7代表星期日。 command：要执行的命令，可以是系统命令，也可以是自己编写的脚本文件。</p><p>在以上各个字段中，还可以使用以下特殊字符： 星号（<em>）：代表所有可能的值，例如month字段如果是星号，则表示在满足其它字段的制约条件后每月都执行该命令操作。 逗号（,）：表示并列,例如，“1,2,5,7,8,9” 中杠（-）：表示整数范围，例如“2-6”表示“2,3,4,5,6” 正斜线（/）：可以用正斜线指定时间的间隔频率，例如“0-23/2”表示每两小时执行一次。同时正斜线可以和星号一起使用，例如</em>/10，如果用在minute字段，表示每十分钟执行一次。</p><p><strong>操作</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from apscheduler.schedulers.blocking import BlockingScheduler
sched = BlockingScheduler()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>1.添加作业</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sched.add_job(my_job1, &#39;interval&#39;, seconds=5,id=&#39;my_job1&#39;)
sched.start()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以通过装饰器的形式来实现</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@sched.scheduled_job(&#39;cron&#39;,second=&#39;*/5&#39;,id=&#39;my_job2&#39;)
sched.start()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.作业删除,暂停,恢复</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>job.remove()
sched.remove_job(&#39;my_job_id&#39;)
Job.pause()
sched.pause_job()
Job.resume()
sched.resume_job()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.作业更新</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>job.modify(max_instances=6, name=&#39;Alternate name&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4.获得job列表</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sched.get_job(job_id=&#39;123&#39;)
job.get_jobs()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>5.关闭调度器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sched.shutdown()
sched.shutdown(wait=False)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实例</strong></p><p>apscheduler添加任务的时候都是并发执行的，但是有些任务并发可能冲突，或者几个任务要先后执行。这个时候就要对这些任务先进行一次封装。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from apscheduler.schedulers.blocking import BlockingScheduler
def job1():
	print(&quot;job1&quot;)
def job2():
	print(&quot;job2&quot;)

def all():
	job1()
	job2()

hour = 9
minute = 10
sched = BlockingScheduler()
sched.add_job(all(),&#39;cron&#39;,hour = hour,minute=minute)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="scheduler" tabindex="-1"><a class="header-anchor" href="#scheduler" aria-hidden="true">#</a> Scheduler</h3><p>负责管理定时任务 对于BlockingScheduler ，程序会阻塞在这，防止退出 对于BackgroundScheduler，程序会立即返回，后台运行</p><p>BlockingScheduler: 作为独立进程时使用</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> apscheduler<span class="token punctuation">.</span>schedulers<span class="token punctuation">.</span>blocking <span class="token keyword">import</span> BlockingScheduler
scheduler <span class="token operator">=</span> BlockingScheduler<span class="token punctuation">(</span><span class="token punctuation">)</span>
scheduler<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 此处程序会发生阻塞</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>BackgroundScheduler: 在框架程序（如Django、Flask）中使用</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> apscheduler<span class="token punctuation">.</span>schedulers<span class="token punctuation">.</span>background <span class="token keyword">import</span> BackgroundScheduler
scheduler <span class="token operator">=</span> BackgroundScheduler<span class="token punctuation">(</span><span class="token punctuation">)</span>
scheduler<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 此处程序不会发生阻塞</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="trigger" tabindex="-1"><a class="header-anchor" href="#trigger" aria-hidden="true">#</a> trigger</h3><p>指定定时任务执行的时机</p><h4 id="_1-在特定时间执行-run-date" tabindex="-1"><a class="header-anchor" href="#_1-在特定时间执行-run-date" aria-hidden="true">#</a> 1.在特定时间执行：run_date</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> datetime <span class="token keyword">import</span> date


sched<span class="token punctuation">.</span>add_job<span class="token punctuation">(</span>my_job<span class="token punctuation">,</span> <span class="token string">&#39;date&#39;</span><span class="token punctuation">,</span> run_date<span class="token operator">=</span>date<span class="token punctuation">(</span><span class="token number">2009</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 在2019年11月6日00:00:00执行，date格式</span>
sched<span class="token punctuation">.</span>add_job<span class="token punctuation">(</span>my_job<span class="token punctuation">,</span> <span class="token string">&#39;date&#39;</span><span class="token punctuation">,</span> run_date<span class="token operator">=</span><span class="token string">&#39;2009-11-06&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 在2019年11月6日00:00:00执行,字符串</span>


sched<span class="token punctuation">.</span>add_job<span class="token punctuation">(</span>my_job<span class="token punctuation">,</span> <span class="token string">&#39;date&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 立即执行</span>
sched<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-间隔执行-interval" tabindex="-1"><a class="header-anchor" href="#_2-间隔执行-interval" aria-hidden="true">#</a> 2.间隔执行：interval</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> datetime <span class="token keyword">import</span> datetime
sched<span class="token punctuation">.</span>add_job<span class="token punctuation">(</span>job_function<span class="token punctuation">,</span> <span class="token string">&#39;interval&#39;</span><span class="token punctuation">,</span> hours<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment"># 每两小时执行一次</span>
sched<span class="token punctuation">.</span>add_job<span class="token punctuation">(</span>job_function<span class="token punctuation">,</span> <span class="token string">&#39;interval&#39;</span><span class="token punctuation">,</span> hours<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> start_date<span class="token operator">=</span><span class="token string">&#39;2010-10-10 09:30:00&#39;</span><span class="token punctuation">,</span> end_date<span class="token operator">=</span><span class="token string">&#39;2014-06-15 11:00:00&#39;</span><span class="token punctuation">)</span><span class="token comment"># 在2010年10月10日09:30:00 到2014年6月15日的时间内，每两小时执行一次</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>weeks (int)</td><td>number of weeks to wait</td></tr><tr><td>days (int)</td><td>number of days to wait</td></tr><tr><td>hours (int)</td><td>number of hours to wait</td></tr><tr><td>minutes (int)</td><td>number of minutes to wait</td></tr><tr><td>seconds (int)</td><td>number of seconds to wait</td></tr><tr><td>start_date (datetime</td><td>str)</td></tr><tr><td>end_date (datetime</td><td>str)</td></tr><tr><td>timezone (datetime.tzinfo</td><td>str)</td></tr></tbody></table><h5 id="_3-周期执行-cron" tabindex="-1"><a class="header-anchor" href="#_3-周期执行-cron" aria-hidden="true">#</a> 3.周期执行：cron</h5><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 在6、7、8、11、12月的第三个周五的00:00, 01:00, 02:00和03:00 执行</span>
sched<span class="token punctuation">.</span>add_job<span class="token punctuation">(</span>job_function<span class="token punctuation">,</span> <span class="token string">&#39;cron&#39;</span><span class="token punctuation">,</span> month<span class="token operator">=</span><span class="token string">&#39;6-8,11-12&#39;</span><span class="token punctuation">,</span> day<span class="token operator">=</span><span class="token string">&#39;3rd fri&#39;</span><span class="token punctuation">,</span> hour<span class="token operator">=</span><span class="token string">&#39;0-3&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## 在2014年5月30日前的周一到周五的5:30执行</span>
sched<span class="token punctuation">.</span>add_job<span class="token punctuation">(</span>job_function<span class="token punctuation">,</span> <span class="token string">&#39;cron&#39;</span><span class="token punctuation">,</span> day_of_week<span class="token operator">=</span><span class="token string">&#39;mon-fri&#39;</span><span class="token punctuation">,</span> hour<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span> minute<span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">,</span> end_date<span class="token operator">=</span><span class="token string">&#39;2014-05-30&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>year (int</td><td>str)</td></tr><tr><td>month (int</td><td>str)</td></tr><tr><td>day (int</td><td>str)</td></tr><tr><td>week (int</td><td>str)</td></tr><tr><td>day_of_week (int</td><td>str)</td></tr><tr><td>hour (int</td><td>str)</td></tr><tr><td>minute (int</td><td>str)</td></tr><tr><td>second (int</td><td>str)</td></tr><tr><td>start_date (datetime</td><td>str)</td></tr><tr><td>end_date (datetime</td><td>str)</td></tr><tr><td>timezone (datetime.tzinfo</td><td>str)</td></tr></tbody></table><h3 id="executors" tabindex="-1"><a class="header-anchor" href="#executors" aria-hidden="true">#</a> executors</h3><p>配置：以进程或线程方式执行任务</p><h4 id="_1-以线程执行任务" tabindex="-1"><a class="header-anchor" href="#_1-以线程执行任务" aria-hidden="true">#</a> 1.以线程执行任务</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> apscheduler<span class="token punctuation">.</span>executors<span class="token punctuation">.</span>pool <span class="token keyword">import</span> ThreadPoolExecutor

executors <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;default&#39;</span><span class="token punctuation">:</span> ThreadPoolExecutor<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token comment">#最多20个线程同时执行</span>
<span class="token punctuation">}</span>
scheduler <span class="token operator">=</span> BackgroundScheduler<span class="token punctuation">(</span>executors<span class="token operator">=</span>executors<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-以进程方式执行任务" tabindex="-1"><a class="header-anchor" href="#_2-以进程方式执行任务" aria-hidden="true">#</a> 2.以进程方式执行任务</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> apscheduler<span class="token punctuation">.</span>executors<span class="token punctuation">.</span>pool <span class="token keyword">import</span> ProcessPoolExecutor
executors <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;default&#39;</span><span class="token punctuation">:</span> ProcessPoolExecutor<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">#最多3个进程同时执行</span>
<span class="token punctuation">}</span>
scheduler <span class="token operator">=</span> BackgroundScheduler<span class="token punctuation">(</span>executors<span class="token operator">=</span>executors<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="job" tabindex="-1"><a class="header-anchor" href="#job" aria-hidden="true">#</a> job</h3><h2 id="_1-通过名称" tabindex="-1"><a class="header-anchor" href="#_1-通过名称" aria-hidden="true">#</a> 1.通过名称</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>scheduler<span class="token punctuation">.</span>add_job<span class="token punctuation">(</span>myfunc<span class="token punctuation">,</span> <span class="token string">&#39;interval&#39;</span><span class="token punctuation">,</span> minutes<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token operator">=</span><span class="token string">&#39;my_job_id&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 添加任务    </span>
scheduler<span class="token punctuation">.</span>remove_job<span class="token punctuation">(</span><span class="token string">&#39;my_job_id&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 删除任务</span>
scheduler<span class="token punctuation">.</span>pause_job<span class="token punctuation">(</span><span class="token string">&#39;my_job_id&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 暂定任务</span>
scheduler<span class="token punctuation">.</span>resume_job<span class="token punctuation">(</span><span class="token string">&#39;my_job_id&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 恢复任务</span>
scheduler<span class="token punctuation">.</span>reschedule_job<span class="token punctuation">(</span><span class="token string">&#39;my_job_id&#39;</span><span class="token punctuation">,</span> trigger<span class="token operator">=</span><span class="token string">&#39;cron&#39;</span><span class="token punctuation">,</span> minute<span class="token operator">=</span><span class="token string">&#39;*/5&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-通过对象" tabindex="-1"><a class="header-anchor" href="#_2-通过对象" aria-hidden="true">#</a> 2.通过对象</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>job <span class="token operator">=</span> scheduler<span class="token punctuation">.</span>add_job<span class="token punctuation">(</span>myfunc<span class="token punctuation">,</span> <span class="token string">&#39;interval&#39;</span><span class="token punctuation">,</span> minutes<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment"># 添加任务</span>
job<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 删除任务</span>
job<span class="token punctuation">.</span>pause<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 暂定任务</span>
job<span class="token punctuation">.</span>resume<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 恢复任务</span>
job<span class="token punctuation">.</span>modify<span class="token punctuation">(</span>max_instances<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&#39;Alternate name&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-停止所有任务" tabindex="-1"><a class="header-anchor" href="#_3-停止所有任务" aria-hidden="true">#</a> 3.停止所有任务</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>scheduler<span class="token punctuation">.</span>shutdown<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参考文献: http://apscheduler.readthedocs.io/en/latest/py-modindex.html https://www.cnblogs.com/luxiaojun/p/6567132.html http://www.jb51.net/article/117989.htm http://jinbitou.net/2016/12/19/2263.html https://www.cnblogs.com/intval/p/5763929.html</p>`,69),o=[d];function r(p,c){return t(),s("div",null,o)}const u=n(e,[["render",r],["__file","apscheduler.html.vue"]]);export{u as default};
