import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,d as s}from"./app-j3zK2x6_.js";const t={},d=s(`<h1 id="crontab" tabindex="-1"><a class="header-anchor" href="#crontab" aria-hidden="true">#</a> crontab</h1><p>Cron is an effective and popular command-line utility used to schedule a broad range of tasks at a specified time. all the jobs are writen in the crontab file.</p><h2 id="command" tabindex="-1"><a class="header-anchor" href="#command" aria-hidden="true">#</a> command</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">crontab</span> –e  <span class="token comment"># edit the crontabfile</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> syntax</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>minute hour day-of-month month-of-year day-of-week commands
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>param</th><th>desc</th></tr></thead><tbody><tr><td>Minute</td><td>一小时中的哪一分钟 [0～59]</td></tr><tr><td>hour</td><td>一天中的哪个小时 [0～23]</td></tr><tr><td>day-of-month</td><td>一月中的哪一天 [1～31]</td></tr><tr><td>month-of-year</td><td>一年中的哪一月 [1～12]</td></tr><tr><td>day-of-week</td><td>一周中的哪一天 [0～6] 0表示星期天</td></tr><tr><td>commands</td><td>执行的命令</td></tr></tbody></table><p><strong>书写注意事项</strong>:</p><ol><li>全都不能为空，必须填入，不知道的值使用通配符*表示任何时间</li><li>每个时间字段都可以指定多个值，不连续的值用,间隔，连续的值用-间隔。</li><li>命令应该给出绝对路径</li><li>用户必须具有运行所对应的命令或程序的权限</li></ol><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> example</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">45</span> <span class="token number">17</span> * * <span class="token number">1</span>-5 /sbin/shutdown <span class="token parameter variable">-h</span> now <span class="token comment"># 周一到周五,17:45关机</span>
<span class="token number">45</span> <span class="token number">4</span> <span class="token number">1,10</span>,22 * * /apps/bin/backup.sh <span class="token comment"># 每月 1、1 0、2 2日的4:45运行/apps/bin目录下的backup.sh</span>
<span class="token number">10</span> <span class="token number">1</span> * * <span class="token number">6,0</span> /bin/find <span class="token parameter variable">-name</span> “core” <span class="token comment"># 每周六、周日的 1 : 10运行一个find命令</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>refs: https://linuxhint.com/crontab_in_linux/</p>`,12),r=[d];function i(o,c){return e(),n("div",null,r)}const p=a(t,[["render",i],["__file","linux_crontab.html.vue"]]);export{p as default};
