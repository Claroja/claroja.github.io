import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-jdLxCr9I.js";const e={},p=t(`<p><code>time.h</code></p><h1 id="定义的类型" tabindex="-1"><a class="header-anchor" href="#定义的类型" aria-hidden="true">#</a> 定义的类型:</h1><p>time_t|表示距离 UTC 时间 1970-01-01 00:00:00 的秒数,类型是 long clock_t|占用cpu的时间 struct tm|存储年月日的结构体(time_t不易人来读)</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">tm</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span>	tm_sec<span class="token punctuation">;</span>	<span class="token comment">/* Seconds: 0-59 (K&amp;R says 0-61?) */</span>
    <span class="token keyword">int</span>	tm_min<span class="token punctuation">;</span>	<span class="token comment">/* Minutes: 0-59 */</span>
    <span class="token keyword">int</span>	tm_hour<span class="token punctuation">;</span>	<span class="token comment">/* Hours since midnight: 0-23 */</span>
    <span class="token keyword">int</span>	tm_mday<span class="token punctuation">;</span>	<span class="token comment">/* Day of the month: 1-31 */</span>
    <span class="token keyword">int</span>	tm_mon<span class="token punctuation">;</span>	<span class="token comment">/* Months *since* january: 0-11 */</span>
    <span class="token keyword">int</span>	tm_year<span class="token punctuation">;</span>	<span class="token comment">/* Years since 1900 */</span>
    <span class="token keyword">int</span>	tm_wday<span class="token punctuation">;</span>	<span class="token comment">/* Days since Sunday (0-6) */</span>
    <span class="token keyword">int</span>	tm_yday<span class="token punctuation">;</span>	<span class="token comment">/* Days since Jan. 1: 0-365 */</span>
    <span class="token keyword">int</span>	tm_isdst<span class="token punctuation">;</span>	<span class="token comment">/* +1 Daylight Savings Time, 0 No DST,* -1 don&#39;t know */</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th># 函数</th><th>描述</th></tr></thead><tbody><tr><td>time</td><td>获取当前系统时间（UTC时间）的time_t值</td></tr><tr><td>ctime</td><td>返回刻度格式的日期和时间信息</td></tr></tbody></table><p>time_t time(time_t *timer) 获得时间戳</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;time.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token class-name">time_t</span> t<span class="token punctuation">;</span>
	t <span class="token operator">=</span> <span class="token function">time</span><span class="token punctuation">(</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;1970-01-01距现在: %ld秒\\n&quot;</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>char *ctime(const time_t *timer) <code> 等同于 astime( localtime(tp) )</code> 获得字符串类型的可读时间</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression"><span class="token function">warning</span><span class="token punctuation">(</span>disable<span class="token operator">:</span><span class="token number">4996</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;time.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token class-name">time_t</span> curtime<span class="token punctuation">;</span>
	<span class="token function">time</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>curtime<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;当前时间 = %s&quot;</span><span class="token punctuation">,</span> <span class="token function">ctime</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>curtime<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>struct tm *gmtime(time_t *time) struct tm *localtime(const time_t *timer) 返回一个以tm结构表达的机器时间信息</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression"><span class="token function">warning</span><span class="token punctuation">(</span>disable<span class="token operator">:</span><span class="token number">4996</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;time.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token class-name">time_t</span> t<span class="token punctuation">;</span>
	<span class="token keyword">struct</span> <span class="token class-name">tm</span> <span class="token operator">*</span>gmt<span class="token punctuation">;</span>
	t <span class="token operator">=</span> <span class="token function">time</span><span class="token punctuation">(</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	gmt <span class="token operator">=</span> <span class="token function">gmtime</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;距1900年:%d年\\n&quot;</span><span class="token punctuation">,</span> gmt<span class="token operator">-&gt;</span>tm_year<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;现在是:%d+1月\\n&quot;</span><span class="token punctuation">,</span> gmt<span class="token operator">-&gt;</span>tm_mon<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression"><span class="token function">warning</span><span class="token punctuation">(</span>disable<span class="token operator">:</span><span class="token number">4996</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;time.h&gt;</span></span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token class-name">time_t</span> timer<span class="token punctuation">;</span>
	<span class="token keyword">struct</span> <span class="token class-name">tm</span> <span class="token operator">*</span>gmt<span class="token punctuation">;</span>
	timer <span class="token operator">=</span> <span class="token function">time</span><span class="token punctuation">(</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//不传指针类型的参数,就可以使用变量接收</span>
	gmt <span class="token operator">=</span> <span class="token function">localtime</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;距1900年:%d年\\n&quot;</span><span class="token punctuation">,</span> gmt<span class="token operator">-&gt;</span>tm_year<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;现在是:%d+1月\\n&quot;</span><span class="token punctuation">,</span> gmt<span class="token operator">-&gt;</span>tm_mon<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>char* asctime(struct tm * ptr) 得到机器时间(日期时间转换为ASCII码)</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression"><span class="token function">warning</span><span class="token punctuation">(</span>disable<span class="token operator">:</span><span class="token number">4996</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;time.h&gt;</span></span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">struct</span> <span class="token class-name">tm</span> t<span class="token punctuation">;</span> <span class="token comment">//通过自己为每个tm成员赋值，没有什么实际意思，大多数情况下都是通过系统函数计算time_t来得到tm中的各个数值</span>
	<span class="token keyword">char</span> str<span class="token punctuation">[</span><span class="token number">80</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	t<span class="token punctuation">.</span>tm_sec <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	t<span class="token punctuation">.</span>tm_min <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	t<span class="token punctuation">.</span>tm_hour <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	t<span class="token punctuation">.</span>tm_mday <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	t<span class="token punctuation">.</span>tm_mon <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	t<span class="token punctuation">.</span>tm_year <span class="token operator">=</span> <span class="token number">119</span><span class="token punctuation">;</span>
	t<span class="token punctuation">.</span>tm_wday <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	t<span class="token punctuation">.</span>tm_yday <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	t<span class="token punctuation">.</span>tm_isdst <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token function">strcpy</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span><span class="token function">asctime</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//返回指针指向数组</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>size_t strftime( char *strDest, size_t maxsize, const char *format, const struct tm *timeptr); 根据format指向字符串中格式命令把timeptr中保存的时间信息放在strDest指向的字符串中，最多向 strDest中存放maxsize个字符。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>
<span class="token comment">/*
   类似于sprintf()，识别以百分号(%)开始 的格式命令集合，格式化输出结果放在一个字符串中。格式命令列在下面，它们是区分大小写的。
	%a 星期几的简写
	%A 星期几的全称
	%b 月分的简写
	%B 月份的全称
	%c 标准的日期的时间串
	%C 年份的后两位数字
	%d 十进制表示的每月的第几天
	%D 月/天/年
	%e 在两字符域中，十进制表示的每月的第几天
	%F 年-月-日
	%g 年份的后两位数字，使用基于周的年
	%G 年分，使用基于周的年
	%h 简写的月份名
	%H 24小时制的小时
	%I 12小时制的小时
	%j 十进制表示的每年的第几天
	%m 十进制表示的月份
	%M 十时制表示的分钟数
	%n 新行符
	%p 本地的AM或PM的等价显示
	%r 12小时的时间
	%R 显示小时和分钟：hh:mm
	%S 十进制的秒数
	%t 水平制表符
	%T 显示时分秒：hh:mm:ss
	%u 每周的第几天，星期一为第一天 （值从0到6，星期一为0）
	%U 第年的第几周，把星期日做为第一天（值从0到53）
	%V 每年的第几周，使用基于周的年
	%w 十进制表示的星期几（值从0到6，星期天为0）
	%W 每年的第几周，把星期一做为第一天（值从0到53）
	%x 标准的日期串
	%X 标准的时间串
	%y 不带世纪的十进制年份（值从0到99）
	%Y 带世纪部分的十进制年份
	%z，%Z 时区名称，如果不能得到时区名称则返回空字符。
	%% 百分号
*/</span>
 
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;time.h&gt;</span></span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
       <span class="token keyword">struct</span> <span class="token class-name">tm</span> <span class="token operator">*</span>newtime<span class="token punctuation">;</span>
       <span class="token keyword">char</span> tmpbuf<span class="token punctuation">[</span><span class="token number">128</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
       <span class="token class-name">time_t</span> lt1<span class="token punctuation">;</span>
       <span class="token function">time</span><span class="token punctuation">(</span> <span class="token operator">&lt;</span><span class="token number">1</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
       newtime<span class="token operator">=</span><span class="token function">localtime</span><span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token function">strftime</span><span class="token punctuation">(</span> tmpbuf<span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token string">&quot;Today is %A, day %d of %B in the year %Y.\\n&quot;</span><span class="token punctuation">,</span> newtime<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token function">printf</span><span class="token punctuation">(</span>tmpbuf<span class="token punctuation">)</span><span class="token punctuation">;</span>
       
       <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
 
# 其他
<span class="token number">1.</span> Coordinated Universal <span class="token function">Time</span><span class="token punctuation">(</span>UTC<span class="token punctuation">)</span><span class="token punctuation">,</span>也称格林威治标准时间<span class="token punctuation">(</span>Greenwich Mean Time<span class="token punctuation">,</span>GMT<span class="token punctuation">)</span><span class="token punctuation">,</span>世界标准时间<span class="token punctuation">,</span>中国内地的时间与UTC得时差为<span class="token operator">+</span><span class="token number">8</span>
<span class="token number">2.</span> Calendar Time<span class="token punctuation">,</span>日历时间<span class="token punctuation">.</span>定时任务几月几号几点执行
<span class="token number">3.</span> epoch：时间点
<span class="token number">4.</span> clock tick<span class="token operator">:</span> cpu时间





参考<span class="token operator">:</span>
https<span class="token operator">:</span><span class="token comment">//blog.csdn.net/chenyiming_1990/article/details/8682552</span>
https<span class="token operator">:</span><span class="token comment">//www.runoob.com/cprogramming/c-standard-library-time-h.html</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),i=[p];function c(o,l){return s(),a("div",null,i)}const d=n(e,[["render",c],["__file","1_11时间类型.html.vue"]]);export{d as default};
