const t=JSON.parse(`{"key":"v-35546330","path":"/2%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/2c/1%E5%9F%BA%E7%A1%80%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B/1_11%E6%97%B6%E9%97%B4%E7%B1%BB%E5%9E%8B.html","title":"定义的类型:","lang":"zh-CN","frontmatter":{"description":"time.h 定义的类型: time_t|表示距离 UTC 时间 1970-01-01 00:00:00 的秒数,类型是 long clock_t|占用cpu的时间 struct tm|存储年月日的结构体(time_t不易人来读) struct tm { int\\ttm_sec;\\t/* Seconds: 0-59 (K&amp;R says 0-61?) */ int\\ttm_min;\\t/* Minutes: 0-59 */ int\\ttm_hour;\\t/* Hours since midnight: 0-23 */ int\\ttm_mday;\\t/* Day of the month: 1-31 */ int\\ttm_mon;\\t/* Months *since* january: 0-11 */ int\\ttm_year;\\t/* Years since 1900 */ int\\ttm_wday;\\t/* Days since Sunday (0-6) */ int\\ttm_yday;\\t/* Days since Jan. 1: 0-365 */ int\\ttm_isdst;\\t/* +1 Daylight Savings Time, 0 No DST,* -1 don't know */ };","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/2c/1%E5%9F%BA%E7%A1%80%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B/1_11%E6%97%B6%E9%97%B4%E7%B1%BB%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"定义的类型:"}],["meta",{"property":"og:description","content":"time.h 定义的类型: time_t|表示距离 UTC 时间 1970-01-01 00:00:00 的秒数,类型是 long clock_t|占用cpu的时间 struct tm|存储年月日的结构体(time_t不易人来读) struct tm { int\\ttm_sec;\\t/* Seconds: 0-59 (K&amp;R says 0-61?) */ int\\ttm_min;\\t/* Minutes: 0-59 */ int\\ttm_hour;\\t/* Hours since midnight: 0-23 */ int\\ttm_mday;\\t/* Day of the month: 1-31 */ int\\ttm_mon;\\t/* Months *since* january: 0-11 */ int\\ttm_year;\\t/* Years since 1900 */ int\\ttm_wday;\\t/* Days since Sunday (0-6) */ int\\ttm_yday;\\t/* Days since Jan. 1: 0-365 */ int\\ttm_isdst;\\t/* +1 Daylight Savings Time, 0 No DST,* -1 don't know */ };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"定义的类型:\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":3.8,"words":1140},"filePathRelative":"2编程语言/2c/1基础数据类型/1_11时间类型.md","localizedDate":"2025年2月21日","excerpt":"<p><code>time.h</code></p>\\n<h1> 定义的类型:</h1>\\n<p>time_t|表示距离 UTC 时间 1970-01-01 00:00:00 的秒数,类型是  long\\nclock_t|占用cpu的时间\\nstruct tm|存储年月日的结构体(time_t不易人来读)</p>\\n<div class=\\"language-c line-numbers-mode\\" data-ext=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token keyword\\">struct</span> <span class=\\"token class-name\\">tm</span>\\n<span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">int</span>\\ttm_sec<span class=\\"token punctuation\\">;</span>\\t<span class=\\"token comment\\">/* Seconds: 0-59 (K&amp;R says 0-61?) */</span>\\n    <span class=\\"token keyword\\">int</span>\\ttm_min<span class=\\"token punctuation\\">;</span>\\t<span class=\\"token comment\\">/* Minutes: 0-59 */</span>\\n    <span class=\\"token keyword\\">int</span>\\ttm_hour<span class=\\"token punctuation\\">;</span>\\t<span class=\\"token comment\\">/* Hours since midnight: 0-23 */</span>\\n    <span class=\\"token keyword\\">int</span>\\ttm_mday<span class=\\"token punctuation\\">;</span>\\t<span class=\\"token comment\\">/* Day of the month: 1-31 */</span>\\n    <span class=\\"token keyword\\">int</span>\\ttm_mon<span class=\\"token punctuation\\">;</span>\\t<span class=\\"token comment\\">/* Months *since* january: 0-11 */</span>\\n    <span class=\\"token keyword\\">int</span>\\ttm_year<span class=\\"token punctuation\\">;</span>\\t<span class=\\"token comment\\">/* Years since 1900 */</span>\\n    <span class=\\"token keyword\\">int</span>\\ttm_wday<span class=\\"token punctuation\\">;</span>\\t<span class=\\"token comment\\">/* Days since Sunday (0-6) */</span>\\n    <span class=\\"token keyword\\">int</span>\\ttm_yday<span class=\\"token punctuation\\">;</span>\\t<span class=\\"token comment\\">/* Days since Jan. 1: 0-365 */</span>\\n    <span class=\\"token keyword\\">int</span>\\ttm_isdst<span class=\\"token punctuation\\">;</span>\\t<span class=\\"token comment\\">/* +1 Daylight Savings Time, 0 No DST,* -1 don't know */</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{t as data};
