import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as e,c as o,d as p,w as d,e as n,b as i}from"./app-SnI5rGHA.js";const c={},l=n(`<h1 id="datetime" tabindex="-1"><a class="header-anchor" href="#datetime" aria-hidden="true">#</a> datetime</h1><p>timezone: 时区 aware time: 有时区时间 naive time: 无时区时间</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ol><li><p>时间戳,datetime,字符串三者的转换关系</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR<span class="token punctuation">;</span>
时间戳 <span class="token arrow operator">--&gt;</span><span class="token label property">|fromtimestamp类方法|</span> datetime <span class="token arrow operator">--&gt;</span><span class="token label property">|strftime实例方法或isoformat实例方法|</span> 字符串<span class="token punctuation">;</span>
字符串 <span class="token arrow operator">--&gt;</span><span class="token label property">|strptime类方法或fromisoformat类方法|</span> datetime <span class="token arrow operator">--&gt;</span><span class="token label property">|timestamp实例方法|</span> 时间戳<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>date</code>对象,<code>time</code>对象, <code>datetime</code>对象都是<code>datetime</code>模块的一部分, 一般使用<code>datetime</code>对象的<code>date()</code>和<code>time()</code>方法获得两个对象, 而不是直接使用</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR<span class="token punctuation">;</span>
datetime模块 <span class="token arrow operator">--&gt;</span> datetime对象 &amp; timedelta对象<span class="token punctuation">;</span>
datetime对象 <span class="token arrow operator">--&gt;</span> date对象 &amp; time对象
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="datetime对象" tabindex="-1"><a class="header-anchor" href="#datetime对象" aria-hidden="true">#</a> datetime对象</h2><p>datetime对象包含了date对象和time对象.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">datetime</span><span class="token punctuation">.</span>datetime<span class="token punctuation">(</span>year<span class="token punctuation">,</span> month<span class="token punctuation">,</span> day<span class="token punctuation">,</span> hour<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> minute<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> second<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> microsecond<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> tzinfo<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token punctuation">,</span> fold<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="构造方法" tabindex="-1"><a class="header-anchor" href="#构造方法" aria-hidden="true">#</a> 构造方法</h3><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>year</td><td>MINYEAR &lt;= year &lt;= MAXYEAR,</td></tr><tr><td>month</td><td>1 &lt;= month &lt;= 12,</td></tr><tr><td>day</td><td>1 &lt;= day &lt;= number of days in the given month and year,</td></tr><tr><td>hour</td><td>0 &lt;= hour &lt; 24,</td></tr><tr><td>minute</td><td>0 &lt;= minute &lt; 60,</td></tr><tr><td>second</td><td>0 &lt;= second &lt; 60,</td></tr><tr><td>microsecond</td><td>0 &lt;= microsecond &lt; 1000000,</td></tr><tr><td>tzinfo</td><td>fold in [0, 1].</td></tr></tbody></table><h3 id="类方法" tabindex="-1"><a class="header-anchor" href="#类方法" aria-hidden="true">#</a> 类方法</h3><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td><code>datetime.today()</code></td><td>等价于<code>datetime.fromtimestamp(time.time())</code></td></tr><tr><td><code>datetime.now(tz=None)</code></td><td>返回本地时区的时间 等价于<code>datetime.fromtimestamp(time.time(),tz=None)</code></td></tr><tr><td><code>datetime.fromtimestamp(timestamp, tz=None)</code></td><td></td></tr><tr><td><code>datetime.combine(date, time, tzinfo=self.tzinfo)</code></td><td></td></tr><tr><td><code>datetime.fromisoformat(date_string)</code></td><td></td></tr><tr><td><code>datetime.strptime(date_string, format)</code></td><td></td></tr></tbody></table><h3 id="实例属性" tabindex="-1"><a class="header-anchor" href="#实例属性" aria-hidden="true">#</a> 实例属性</h3><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td>datetime.year</td><td></td></tr><tr><td>datetime.month</td><td></td></tr><tr><td>datetime.day</td><td></td></tr><tr><td>datetime.hour</td><td></td></tr><tr><td>datetime.minute</td><td></td></tr><tr><td>datetime.second</td><td></td></tr><tr><td>datetime.microsecond</td><td></td></tr><tr><td>datetime.tzinfo</td><td></td></tr><tr><td>datetime.fold</td><td></td></tr></tbody></table><h3 id="实例方法" tabindex="-1"><a class="header-anchor" href="#实例方法" aria-hidden="true">#</a> 实例方法</h3><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>datetime.date()</td><td>返回<code>date</code>对象</td></tr><tr><td>datetime.time()</td><td>返回<code>时间</code>对象, tzinfo为<code>None</code>, 即无时区信息</td></tr><tr><td>datetime.replace()</td><td>可以替换datetime的属性, 特别的是通过控制<code>tzinfo</code>可以在naive 之间转化 aware</td></tr><tr><td>datetime.astimezone()</td><td>重新设置时区, 时间会跟着变化</td></tr><tr><td>datetime.utcoffset()</td><td>如果<code>tzinfo</code>是<code>None</code>则返回<code>None</code>, 否则返回时区偏移量</td></tr><tr><td>datetime.dst()</td><td>如果<code>tzinfo</code>是<code>None</code>则返回<code>None</code>, 否则返回是否夏令时</td></tr><tr><td>datetime.tzname()</td><td>如果<code>tzinfo</code>是<code>None</code>则返回<code>None</code>, 否则返回时区名称</td></tr><tr><td>datetime.timetuple()</td><td>返回<code>struct_time对象</code></td></tr><tr><td>datetime.utctimetuple()</td><td></td></tr><tr><td>datetime.timestamp()</td><td>返回时间戳</td></tr><tr><td>datetime.weekday()</td><td>返回星期几, Monday是0, Sunday是6</td></tr><tr><td>datetime.isoweekday()</td><td>返回iso标准星期几, Monday是1, Sunday是7</td></tr><tr><td>datetime.isoformat()</td><td>返回iso标准字符串格式时间</td></tr><tr><td>datetime.strftime(format)</td><td></td></tr></tbody></table><h2 id="iso格式" tabindex="-1"><a class="header-anchor" href="#iso格式" aria-hidden="true">#</a> iso格式</h2><p>人类难以理解时间戳, 所以电脑会先将这个数字转换为UTC时间, 然后根据time zone转化为本地时间(local time) <code>Internet Assigned Numbers Authority (IANA)</code>保存了所有的时区信息, 比如, 在冬季, 夏令时(dst)未起到作用时, US Eastern时区会有5小时的偏移量(UTC-5).</p><p>不同地区书写时间的习惯不同, 比如:</p><ol><li>United States, 习惯是月日年, 01-31-2020</li><li>Europe , 习惯是日月年, 31-01-2020 为了规范写法, <code>International Organization for Standardization, ISO</code>确定了<code>ISO 8601</code>标准, 书写格式是年月日时分秒, <code>YYYY-MM-DD HH:MM:SS</code></li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>isoformat<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># &#39;2022-11-22T14:31:59.331225&#39;</span>
datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>isoformat<span class="token punctuation">(</span>sep<span class="token operator">=</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>  <span class="token comment"># &#39;2022-11-22 14:31:59.331225&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tz-time-zone" tabindex="-1"><a class="header-anchor" href="#tz-time-zone" aria-hidden="true">#</a> tz(time zone)</h2><h3 id="时区基本理解" tabindex="-1"><a class="header-anchor" href="#时区基本理解" aria-hidden="true">#</a> 时区基本理解</h3><p><code>datetime.tzinfo</code>的抽象类来表示时区, 我们需要定义子类来实现它. <code>pytz</code>包实现了这个抽象类. 例如<code>datetime.now()</code>返回了本地时间(不包含时区), 我们可以通过<code>pytz</code>获得指定时区的时间.</p><p>我们经常使用以下方法:</p><ol><li><code>pytz.utc</code>: Get the standard UTC timezone</li><li><code>pytz.timezone(&#39;region&#39;)</code>: Create the timezone object of a particular region</li><li><code>pytz.astimezone()</code>: Convert the time of a particular time zone into another time zone</li></ol><p><code>datetime</code>对象在创建时可以指定或不指定timezones. 指定的称为<code>aware</code>, 不指定的称为<code>naive</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> datetime <span class="token keyword">import</span> datetime
<span class="token keyword">import</span> pytz

<span class="token comment">## current Datetime</span>
unaware <span class="token operator">=</span> datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Timezone naive:&#39;</span><span class="token punctuation">,</span> unaware<span class="token punctuation">)</span>  <span class="token comment"># Timezone naive: 2023-03-06 18:20:55.300686</span>

<span class="token comment">## Standard UTC timezone aware Datetime</span>
<span class="token comment">## 标准UTC时间, 偏移量是 +00:00</span>

aware <span class="token operator">=</span> datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span>pytz<span class="token punctuation">.</span>utc<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Timezone Aware:&#39;</span><span class="token punctuation">,</span> aware<span class="token punctuation">)</span>  <span class="token comment"># Timezone Aware: 2023-03-06 10:20:55.335687+00:00</span>

<span class="token comment">## US/Central timezone datetime</span>
<span class="token comment">## CDT时间(偏移UTC时间), 偏移量是 -05:00</span>

aware_us_central <span class="token operator">=</span> datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span>pytz<span class="token punctuation">.</span>timezone<span class="token punctuation">(</span><span class="token string">&#39;US/Central&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;US Central DateTime&#39;</span><span class="token punctuation">,</span> aware_us_central<span class="token punctuation">)</span> <span class="token comment"># US Central DateTime 2023-03-06 04:20:55.365686-06:00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="有无时区之间的转换" tabindex="-1"><a class="header-anchor" href="#有无时区之间的转换" aria-hidden="true">#</a> 有无时区之间的转换</h3><h4 id="将无时区的时间转换为有时区的时间" tabindex="-1"><a class="header-anchor" href="#将无时区的时间转换为有时区的时间" aria-hidden="true">#</a> 将无时区的时间转换为有时区的时间</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> datetime <span class="token keyword">import</span> datetime
<span class="token keyword">import</span> pytz

unaware <span class="token operator">=</span> datetime<span class="token punctuation">(</span><span class="token number">2021</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Timezone naive:&#39;</span><span class="token punctuation">,</span> unaware<span class="token punctuation">)</span>

<span class="token comment">## Convert unaware Datetime to UTC timezone aware Datetime</span>
aware <span class="token operator">=</span> unaware<span class="token punctuation">.</span>replace<span class="token punctuation">(</span>tzinfo<span class="token operator">=</span>pytz<span class="token punctuation">.</span>UTC<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>aware<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="将有时区的时间转换为易读模式" tabindex="-1"><a class="header-anchor" href="#将有时区的时间转换为易读模式" aria-hidden="true">#</a> 将有时区的时间转换为易读模式</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> datetime <span class="token keyword">import</span> datetime
<span class="token keyword">import</span> pytz

datetime_india <span class="token operator">=</span> datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span>pytz<span class="token punctuation">.</span>timezone<span class="token punctuation">(</span><span class="token string">&#39;Asia/Kolkata&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Formatted DateTime in IST : &quot;</span><span class="token punctuation">,</span> datetime_india<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&#39;%Y:%m:%d %H:%M:%S %Z %z&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># Output 2021:07:08 17:53:23 IST +0530</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获得时间的时区信息" tabindex="-1"><a class="header-anchor" href="#获得时间的时区信息" aria-hidden="true">#</a> 获得时间的时区信息</h3><ol><li><code>tzinfo.tzname(dt)</code>获得时区的名称</li><li><code>tzinfo.utcoffset(dt)</code>获得时区的偏移量</li><li><code>tzinfo.dst(dt)</code>获得时区的daylight saving time (DST offset) adjustment</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> datetime <span class="token keyword">import</span> datetime
<span class="token keyword">import</span> pytz

<span class="token comment">## timezone: US Central Time</span>
dt_us_central <span class="token operator">=</span> datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span>pytz<span class="token punctuation">.</span>timezone<span class="token punctuation">(</span><span class="token string">&#39;America/Mexico_City&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;US Central DateTime:&quot;</span><span class="token punctuation">,</span> dt_us_central<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%Y:%m:%d %H:%M:%S %Z %z&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># US Central DateTime: 2023:03:06 04:33:57 CST -0600</span>

<span class="token comment">## Get current TimeZone name</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dt_us_central<span class="token punctuation">.</span>tzname<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## Get UTC Offset</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dt_us_central<span class="token punctuation">.</span>utcoffset<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## Get the daylight saving time (DST offset) adjustment</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dt_us_central<span class="token punctuation">.</span>dst<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="不同时区之间的转换" tabindex="-1"><a class="header-anchor" href="#不同时区之间的转换" aria-hidden="true">#</a> 不同时区之间的转换</h3><p><code>datetime.astimezone()</code>进行时区间的转换</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> datetime
<span class="token keyword">import</span> pytz

<span class="token comment">## UTC timezone Datetime</span>
dt_local <span class="token operator">=</span> datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span>pytz<span class="token punctuation">.</span>utc<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;UTC DateTime:&quot;</span><span class="token punctuation">,</span> dt_local<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%Y:%m:%d %H:%M:%S %Z %z&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## convert UTC timezone to &#39;US/Central&#39;</span>
dt_us_central <span class="token operator">=</span> dt_local<span class="token punctuation">.</span>astimezone<span class="token punctuation">(</span>pytz<span class="token punctuation">.</span>timezone<span class="token punctuation">(</span><span class="token string">&#39;US/Central&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;US Central DateTime:&quot;</span><span class="token punctuation">,</span> dt_us_central<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%Y:%m:%d %H:%M:%S %Z %z&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## Convert &#39;US/Central&#39; timezone to US/Eastern</span>
dt_us_eastern <span class="token operator">=</span> dt_us_central<span class="token punctuation">.</span>astimezone<span class="token punctuation">(</span>pytz<span class="token punctuation">.</span>timezone<span class="token punctuation">(</span><span class="token string">&#39;America/New_York&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;US Eastern DateTime:&quot;</span><span class="token punctuation">,</span> dt_us_eastern<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%Y:%m:%d %H:%M:%S %Z %z&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## Convert US/Eastern timezone to IST (India) timezone</span>
dt_ind <span class="token operator">=</span> dt_us_eastern<span class="token punctuation">.</span>astimezone<span class="token punctuation">(</span>pytz<span class="token punctuation">.</span>timezone<span class="token punctuation">(</span><span class="token string">&#39;Asia/Kolkata&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;India DateTime:&quot;</span><span class="token punctuation">,</span> dt_ind<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%Y:%m:%d %H:%M:%S %Z %z&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获得所有时区" tabindex="-1"><a class="header-anchor" href="#获得所有时区" aria-hidden="true">#</a> 获得所有时区</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pytz<span class="token punctuation">.</span>all_timezones  <span class="token comment"># 获得所有时区</span>
pytz<span class="token punctuation">.</span>common_timezones  <span class="token comment"># 获得常用时区</span>
pytz<span class="token punctuation">.</span>country_names  <span class="token comment"># 获得所有国家名称</span>
pytz<span class="token punctuation">.</span>country_timezones<span class="token punctuation">[</span><span class="token string">&#39;US&#39;</span><span class="token punctuation">]</span>  <span class="token comment"># 获得指定国家的时区</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="处理本地时间" tabindex="-1"><a class="header-anchor" href="#处理本地时间" aria-hidden="true">#</a> 处理本地时间</h2>`,41),r=n(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> datetime <span class="token keyword">import</span> datetime

<span class="token keyword">import</span> pytz

fmt <span class="token operator">=</span> <span class="token string">&#39;%Y-%m-%d %H:%M:%S %Z%z&#39;</span>

<span class="token comment">## Indian Standard Time</span>
tz_india <span class="token operator">=</span> pytz<span class="token punctuation">.</span>timezone<span class="token punctuation">(</span><span class="token string">&#39;Asia/Kolkata&#39;</span><span class="token punctuation">)</span>
ist_local <span class="token operator">=</span> tz_india<span class="token punctuation">.</span>localize<span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Indian Standard Time::&quot;</span><span class="token punctuation">,</span> ist_local<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span>fmt<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## Europe/Amsterdam Time</span>
amdam_tz <span class="token operator">=</span> pytz<span class="token punctuation">.</span>timezone<span class="token punctuation">(</span><span class="token string">&#39;Europe/Amsterdam&#39;</span><span class="token punctuation">)</span>
dt <span class="token operator">=</span> datetime<span class="token punctuation">(</span><span class="token number">1983</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
cest_local <span class="token operator">=</span> amdam_tz<span class="token punctuation">.</span>localize<span class="token punctuation">(</span>dt<span class="token punctuation">,</span> is_dst<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Amsterdam with daylight saving time::&quot;</span><span class="token punctuation">,</span> cest_local<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span>fmt<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## Day Light Saving</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Daylight saving time in amsterdam on 3/8/83::&quot;</span><span class="token punctuation">,</span> cest_local<span class="token punctuation">.</span>tzinfo<span class="token punctuation">.</span>dst<span class="token punctuation">(</span>cest_local<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="combine" tabindex="-1"><a class="header-anchor" href="#combine" aria-hidden="true">#</a> combine</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> datetime <span class="token keyword">import</span> date<span class="token punctuation">,</span> time<span class="token punctuation">,</span> datetime
today <span class="token operator">=</span> date<span class="token punctuation">.</span>today<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># datetime.date(2020, 1, 24)</span>
now <span class="token operator">=</span> datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span>
now  <span class="token comment"># datetime.datetime(2020, 1, 24, 14, 4, 57, 10015)</span>
current_time <span class="token operator">=</span> time<span class="token punctuation">(</span>now<span class="token punctuation">.</span>hour<span class="token punctuation">,</span> now<span class="token punctuation">.</span>minute<span class="token punctuation">,</span> now<span class="token punctuation">.</span>second<span class="token punctuation">)</span>
datetime<span class="token punctuation">.</span>combine<span class="token punctuation">(</span>today<span class="token punctuation">,</span> current_time<span class="token punctuation">)</span>  <span class="token comment"># datetime.datetime(2020, 1, 24, 14, 4, 57)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串与时间的转化" tabindex="-1"><a class="header-anchor" href="#字符串与时间的转化" aria-hidden="true">#</a> 字符串与时间的转化</h2><p>datatime 有 fromisoformat, strptime, strftime date 只有fromisoformat, strftime, 没有strptime</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> datetime <span class="token keyword">import</span> date
date<span class="token punctuation">.</span>fromisoformat<span class="token punctuation">(</span><span class="token string">&quot;2020-01-31&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> datetime <span class="token keyword">import</span> datetime
date_string <span class="token operator">=</span> <span class="token string">&quot;01-31-2020 14:45:37&quot;</span>
format_string <span class="token operator">=</span> <span class="token string">&quot;%m-%d-%Y %H:%M:%S&quot;</span>
datetime<span class="token punctuation">.</span>strptime<span class="token punctuation">(</span>date_string<span class="token punctuation">,</span> format_string<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他格式转化成时间" tabindex="-1"><a class="header-anchor" href="#其他格式转化成时间" aria-hidden="true">#</a> 其他格式转化成时间</h3><p>其他格式转换为时间格式有三种情况:</p><ol><li>时间戳, 时间戳的单位是秒(其他语言单位可能是毫秒, 注意转换) <code>datetime.fromtimestamp(1665385944.000616)</code> 获取当前时间有简便的方法:<code>datetime.now()</code>该方法等价于<code>datetime.fromtimestamp(time.time())</code>本质都是通过时间戳获取时间</li><li>字符串, 要指定字符串格式(裂解p表示point to, 从字符串转化为时间) <code>datetime.strptime(&quot;2020-01-02&quot;,&quot;%Y-%m-%d&quot;) # 从字符串中获取</code></li><li>整形, 分别输入年月日时分秒信息 <code>datetime(2022,10,30,22,12,34,1111)</code></li></ol><h3 id="时间转化为其他格式" tabindex="-1"><a class="header-anchor" href="#时间转化为其他格式" aria-hidden="true">#</a> 时间转化为其他格式</h3><ol><li>转化为时间戳</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>now <span class="token operator">=</span> datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span>
now<span class="token punctuation">.</span>timestamp<span class="token punctuation">(</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>转化为字符串</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>now <span class="token operator">=</span> datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span>
now<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%Y-%m-%d&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 转化为字符串</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>转为为整形, 年月日时分秒</li></ol><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td>datetime.year</td><td>在MINYEAR和MAXYEAR之间</td></tr><tr><td>datetime.month</td><td>在 1 到 12 之间，包括 1 和 12</td></tr><tr><td>datetime.day</td><td>在 1 到给出的年份和月份之间的天数</td></tr><tr><td>datetime.hour</td><td>在range(24)之间</td></tr><tr><td>datetime.minute</td><td>在range(60)之间</td></tr><tr><td>datetime.second</td><td>在range(60)之间</td></tr><tr><td>datetime.microsecond</td><td>在range(1000000)之间</td></tr><tr><td>datetime.weekday()</td><td>返回一星期中的第几天，其中星期一是0，星期日是6</td></tr><tr><td>date.isocalendar()</td><td>返回一年中的第几周</td></tr></tbody></table><p>格式</p><table><thead><tr><th>Code</th><th>Description</th><th>Output</th></tr></thead><tbody><tr><td>%a</td><td>周的缩写</td><td>Sun, Mon, …</td></tr><tr><td>%A</td><td>周的全称</td><td>Sunday, Monday, …</td></tr><tr><td>%w</td><td>数字表示的周</td><td>0, 1, 3, …, 6</td></tr><tr><td>%d</td><td>0填充的每月的天数</td><td>01, 02, …, 31</td></tr><tr><td>%-d</td><td>不填充的每月的天数</td><td>1, 2, …, 30</td></tr><tr><td>%b</td><td>月的简称</td><td>Jan, Feb, …, Dec</td></tr><tr><td>%B</td><td>月的全称</td><td>January, February, …</td></tr><tr><td>%m</td><td>0填充的月的数字表示</td><td>01, 02, …, 12</td></tr><tr><td>%-m</td><td>不填充的月的数字表示</td><td>1, 2, …, 12</td></tr><tr><td>%y</td><td>不包含世纪的0填充的数字年份</td><td>00, 01, …, 99</td></tr><tr><td>%-y</td><td>不包含世纪的不填充的数字年份</td><td>0, 1, …, 99</td></tr><tr><td>%Y</td><td>包含世纪的数字年份</td><td>2015, 2021 etc.</td></tr><tr><td>%H</td><td>0填充的24小时</td><td>00, 01, …, 23</td></tr><tr><td>%-H</td><td>不填充的24小时</td><td>0, 1, …, 23</td></tr><tr><td>%I</td><td>0填充的12小时</td><td>01, 02, …, 12</td></tr><tr><td>%-I</td><td>不填充的12小时</td><td>1, 2, … 12</td></tr><tr><td>%p</td><td>Locale’s AM or PM.</td><td>AM, PM</td></tr><tr><td>%M</td><td>Minute in decimal number from 00 to 59.</td><td>00, 01, …, 59</td></tr><tr><td>%-M</td><td>Minute as a decimal number.</td><td>0, 1, …, 59</td></tr><tr><td>%S</td><td>Second in decimal number from 00 to 59</td><td>00, 01, …, 59</td></tr><tr><td>%-S</td><td>Second as a decimal number.</td><td>0, 1, …, 59</td></tr><tr><td>%f</td><td>Microsecond as a decimal number with a zero appended on the left.</td><td>000000 – 999999</td></tr><tr><td>%z</td><td>UTC offset in the form +HHMM or -HHMM.</td><td></td></tr><tr><td>%Z</td><td>Time zone name.</td><td></td></tr><tr><td>%j</td><td>The day of the year as a decimal number with a zero appended.</td><td>001, 002, …, 366</td></tr><tr><td>%-j</td><td>The Day of the year as a decimal number.</td><td>1, 2, …, 366</td></tr><tr><td>%U</td><td>The year’s week number (Sunday as the first day of the week).</td><td>00, 01, …, 53</td></tr><tr><td>%W</td><td>Week number of the year (Monday as the first day of the week).</td><td>00, 01, …, 53</td></tr></tbody></table><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><p>对称时间</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> datetime <span class="token keyword">import</span> date
center_date <span class="token operator">=</span> date<span class="token punctuation">.</span>fromisoformat<span class="token punctuation">(</span><span class="token string">&quot;2023-03-02&quot;</span><span class="token punctuation">)</span>
now_date <span class="token operator">=</span> date<span class="token punctuation">.</span>today<span class="token punctuation">(</span><span class="token punctuation">)</span>
delta_date <span class="token operator">=</span> now_date <span class="token operator">-</span> center_date
symmetry_date <span class="token operator">=</span> center_date <span class="token operator">-</span> delta_date
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://www.pythonpip.com/python-tutorials/how-to-use-strftime-and-strptime-in-python/ https://realpython.com/python-time-module/ https://realpython.com/python-datetime/ https://realpython.com/python-get-current-time/ https://pynative.com/python-timezone/</p>`,23);function u(m,k){const t=s("font");return e(),o("div",null,[l,p(t,{style:{background:"yellow"}},{default:d(()=>[i("建议使用UTC作为基础的timezone来代替本地时间")]),_:1}),r])}const b=a(c,[["render",u],["__file","时间类型(datetime).html.vue"]]);export{b as default};
