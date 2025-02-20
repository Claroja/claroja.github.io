const n=JSON.parse('{"key":"v-0e8c696a","path":"/%E5%86%99%E4%BD%9C/%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9/%E8%BE%93%E5%85%A5%E6%B3%95/%E6%90%9C%E7%8B%97%E8%BE%93%E5%85%A5%E9%85%8D%E7%BD%AE.html","title":"搜狗输入配置","lang":"zh-CN","frontmatter":{"description":"搜狗输入配置 自定义短语 ; 搜狗输入法--自定义短语配置文件 ; 自定义短语说明： ; 1、自定义短语支持多行、空格、指定位置。 ; 2、每条自定义短语最多支持30000个汉字，总共支持100000条自定义短语。 ; 3、自定义短语的格式如下： ; 单行的格式： ; 字符串+英文逗号+数字（指定排序位置）=短语 ; 多行的格式： ; 字符串+英文逗号+数字（指定排序位置）= ; 多行短语 ; 具体格式可以参考下面的实例。 ; 4、最多支持100000行自定义短语。 ; 5、自定义短语的用途有：快捷输入手机号、邮箱、诗词、小短文等，大家可以自由发挥。 ; 6、时间函数功能。具体定义格式如下：; 字符串+英文逗号+数字（指定排序位置）=#表达式 ; 注意：表达式以英文#开头，后面的表达式中的每一个函数的前面都包含有英文$。 ; 函数表如下： ; 函数 \\t含义 \\t举例 ; $year \\t年(4位) \\t2006、2008 ; $year_yy\\t年(2位) \\t06、08 ; $month \\t月 \\t12、8、3 ; $month_mm \\t月 \\t12、08、03\\t\\t//此函数在输入法3.1版之后（含）有效 ; $day \\t日 \\t3、13、22 ; $day_dd\\t日\\t 03、13、22\\t//此函数在输入法3.1版之后（含）有效 ; $weekday \\t星期 \\t0、1、2、5、6 ; $fullhour\\t时(24小时制) \\t2、8、13、23 ; $fullhour_hh\\t时(24小时制) \\t02、08、13、23\\t\\t//此函数在输入法3.1版之后（含）有效 ; $halfhour\\t时(12小时制)\\t2、8、10、11 ; $halfhour_hh\\t时(12小时制)\\t02、08、10、11\\t\\t//此函数在输入法3.1版之后（含）有效 ; $ampm \\tAM、PM(英)\\tAM、PM（大写） ; $minute \\t分 \\t02、08、15、28 ; $second \\t秒 \\t02、08、15、28 ; $year_cn \\t年(中文4位)\\t二〇〇六 ; $year_yy_cn\\t年(中文2位)\\t〇六 ; $month_cn\\t月(中文)\\t十二、八、三 ; $day_cn \\t日(中文)\\t三、十三、二十二 ; $weekday_cn \\t星期(中文)\\t日、一、二、五、六 ; $fullhour_cn\\t时(中文24时制)\\t二、八、十三、二十三 ; $halfhour_cn\\t时(中文12时制)\\t二、八、一、十一 ; $ampm_cn \\t上午下午(中文)\\t上午、下午 ; $minute_cn\\t分(中文)\\t零二、零八、十五、二十八 ; $second_cn\\t秒(中文)\\t零二、零八、十五、二十八 ; 具体你可以参考这个文件最下面的例子，实际体验一下就明白了。 ; 你可以用自定义短语来做一个带动态时间的多行回信落款。 ; ss,1=#$year年$month月$day_dd日 $fullhour:$minute:$second c,1=🟢 c,2=🟡 c,3=🔴 h,1=💚 h,2=💛 h,3=❤️ s,1=🟩 s,2=🟨 s,3=🟥 li,5=🍐 men,5=🚪 wen,5=❓ xx,5=✨ l,5=👈 r,5=👉 p,5=👆 d,5=👇 paml,5=✋ f,5=✊","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E5%86%99%E4%BD%9C/%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9/%E8%BE%93%E5%85%A5%E6%B3%95/%E6%90%9C%E7%8B%97%E8%BE%93%E5%85%A5%E9%85%8D%E7%BD%AE.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"搜狗输入配置"}],["meta",{"property":"og:description","content":"搜狗输入配置 自定义短语 ; 搜狗输入法--自定义短语配置文件 ; 自定义短语说明： ; 1、自定义短语支持多行、空格、指定位置。 ; 2、每条自定义短语最多支持30000个汉字，总共支持100000条自定义短语。 ; 3、自定义短语的格式如下： ; 单行的格式： ; 字符串+英文逗号+数字（指定排序位置）=短语 ; 多行的格式： ; 字符串+英文逗号+数字（指定排序位置）= ; 多行短语 ; 具体格式可以参考下面的实例。 ; 4、最多支持100000行自定义短语。 ; 5、自定义短语的用途有：快捷输入手机号、邮箱、诗词、小短文等，大家可以自由发挥。 ; 6、时间函数功能。具体定义格式如下：; 字符串+英文逗号+数字（指定排序位置）=#表达式 ; 注意：表达式以英文#开头，后面的表达式中的每一个函数的前面都包含有英文$。 ; 函数表如下： ; 函数 \\t含义 \\t举例 ; $year \\t年(4位) \\t2006、2008 ; $year_yy\\t年(2位) \\t06、08 ; $month \\t月 \\t12、8、3 ; $month_mm \\t月 \\t12、08、03\\t\\t//此函数在输入法3.1版之后（含）有效 ; $day \\t日 \\t3、13、22 ; $day_dd\\t日\\t 03、13、22\\t//此函数在输入法3.1版之后（含）有效 ; $weekday \\t星期 \\t0、1、2、5、6 ; $fullhour\\t时(24小时制) \\t2、8、13、23 ; $fullhour_hh\\t时(24小时制) \\t02、08、13、23\\t\\t//此函数在输入法3.1版之后（含）有效 ; $halfhour\\t时(12小时制)\\t2、8、10、11 ; $halfhour_hh\\t时(12小时制)\\t02、08、10、11\\t\\t//此函数在输入法3.1版之后（含）有效 ; $ampm \\tAM、PM(英)\\tAM、PM（大写） ; $minute \\t分 \\t02、08、15、28 ; $second \\t秒 \\t02、08、15、28 ; $year_cn \\t年(中文4位)\\t二〇〇六 ; $year_yy_cn\\t年(中文2位)\\t〇六 ; $month_cn\\t月(中文)\\t十二、八、三 ; $day_cn \\t日(中文)\\t三、十三、二十二 ; $weekday_cn \\t星期(中文)\\t日、一、二、五、六 ; $fullhour_cn\\t时(中文24时制)\\t二、八、十三、二十三 ; $halfhour_cn\\t时(中文12时制)\\t二、八、一、十一 ; $ampm_cn \\t上午下午(中文)\\t上午、下午 ; $minute_cn\\t分(中文)\\t零二、零八、十五、二十八 ; $second_cn\\t秒(中文)\\t零二、零八、十五、二十八 ; 具体你可以参考这个文件最下面的例子，实际体验一下就明白了。 ; 你可以用自定义短语来做一个带动态时间的多行回信落款。 ; ss,1=#$year年$month月$day_dd日 $fullhour:$minute:$second c,1=🟢 c,2=🟡 c,3=🔴 h,1=💚 h,2=💛 h,3=❤️ s,1=🟩 s,2=🟨 s,3=🟥 li,5=🍐 men,5=🚪 wen,5=❓ xx,5=✨ l,5=👈 r,5=👉 p,5=👆 d,5=👇 paml,5=✋ f,5=✊"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-11T09:16:47.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2024-11-11T09:16:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"搜狗输入配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-11T09:16:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"自定义短语","slug":"自定义短语","link":"#自定义短语","children":[]}],"git":{"createdTime":1731316607000,"updatedTime":1731316607000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":2.11,"words":633},"filePathRelative":"写作/文本内容/输入法/搜狗输入配置.md","localizedDate":"2024年11月11日","excerpt":"<h1> 搜狗输入配置</h1>\\n<h2> 自定义短语</h2>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>;  搜狗输入法--自定义短语配置文件\\n\\n;  自定义短语说明：\\n;  1、自定义短语支持多行、空格、指定位置。\\n;  2、每条自定义短语最多支持30000个汉字，总共支持100000条自定义短语。\\n;  3、自定义短语的格式如下：\\n\\n;  单行的格式：\\n;  字符串+英文逗号+数字（指定排序位置）=短语\\n\\n;  多行的格式：\\n;  字符串+英文逗号+数字（指定排序位置）=\\n;  多行短语\\n\\n;  具体格式可以参考下面的实例。\\n;  4、最多支持100000行自定义短语。\\n;  5、自定义短语的用途有：快捷输入手机号、邮箱、诗词、小短文等，大家可以自由发挥。\\n;  6、时间函数功能。具体定义格式如下：;  字符串+英文逗号+数字（指定排序位置）=#表达式\\n;  注意：表达式以英文#开头，后面的表达式中的每一个函数的前面都包含有英文$。\\n;  函数表如下：\\n;  函数    \\t含义    \\t举例\\n;  $year    \\t年(4位) \\t2006、2008\\n;  $year_yy\\t年(2位) \\t06、08\\n;  $month     \\t月      \\t12、8、3\\n;  $month_mm  \\t月      \\t12、08、03\\t\\t//此函数在输入法3.1版之后（含）有效\\n;  $day     \\t日      \\t3、13、22\\n;  $day_dd\\t日\\t       03、13、22\\t//此函数在输入法3.1版之后（含）有效\\n;  $weekday \\t星期    \\t0、1、2、5、6\\n;  $fullhour\\t时(24小时制)  \\t2、8、13、23\\n;  $fullhour_hh\\t时(24小时制)  \\t02、08、13、23\\t\\t//此函数在输入法3.1版之后（含）有效\\n;  $halfhour\\t时(12小时制)\\t2、8、10、11\\n;  $halfhour_hh\\t时(12小时制)\\t02、08、10、11\\t\\t//此函数在输入法3.1版之后（含）有效\\n;  $ampm    \\tAM、PM(英)\\tAM、PM（大写）\\n;  $minute  \\t分      \\t02、08、15、28\\n;  $second  \\t秒      \\t02、08、15、28\\n;  $year_cn \\t年(中文4位)\\t二〇〇六\\n;  $year_yy_cn\\t年(中文2位)\\t〇六\\n;  $month_cn\\t月(中文)\\t十二、八、三\\n;  $day_cn  \\t日(中文)\\t三、十三、二十二\\n;  $weekday_cn \\t星期(中文)\\t日、一、二、五、六\\n;  $fullhour_cn\\t时(中文24时制)\\t二、八、十三、二十三\\n;  $halfhour_cn\\t时(中文12时制)\\t二、八、一、十一\\n;  $ampm_cn \\t上午下午(中文)\\t上午、下午\\n;  $minute_cn\\t分(中文)\\t零二、零八、十五、二十八\\n;  $second_cn\\t秒(中文)\\t零二、零八、十五、二十八\\n;  具体你可以参考这个文件最下面的例子，实际体验一下就明白了。\\n;  你可以用自定义短语来做一个带动态时间的多行回信落款。\\n;  ss,1=#$year年$month月$day_dd日 $fullhour:$minute:$second\\n\\nc,1=🟢\\nc,2=🟡\\nc,3=🔴\\nh,1=💚\\nh,2=💛\\nh,3=❤️\\ns,1=🟩\\ns,2=🟨\\ns,3=🟥\\nli,5=🍐\\nmen,5=🚪\\nwen,5=❓\\nxx,5=✨\\nl,5=👈\\nr,5=👉\\np,5=👆\\nd,5=👇\\npaml,5=✋\\nf,5=✊\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
