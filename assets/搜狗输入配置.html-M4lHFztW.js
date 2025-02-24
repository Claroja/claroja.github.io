import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,e as d}from"./app-A10JnHE0.js";const s={},l=d(`<h1 id="搜狗输入配置" tabindex="-1"><a class="header-anchor" href="#搜狗输入配置" aria-hidden="true">#</a> 搜狗输入配置</h1><h2 id="自定义短语" tabindex="-1"><a class="header-anchor" href="#自定义短语" aria-hidden="true">#</a> 自定义短语</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>;  搜狗输入法--自定义短语配置文件

;  自定义短语说明：
;  1、自定义短语支持多行、空格、指定位置。
;  2、每条自定义短语最多支持30000个汉字，总共支持100000条自定义短语。
;  3、自定义短语的格式如下：

;  单行的格式：
;  字符串+英文逗号+数字（指定排序位置）=短语

;  多行的格式：
;  字符串+英文逗号+数字（指定排序位置）=
;  多行短语

;  具体格式可以参考下面的实例。
;  4、最多支持100000行自定义短语。
;  5、自定义短语的用途有：快捷输入手机号、邮箱、诗词、小短文等，大家可以自由发挥。
;  6、时间函数功能。具体定义格式如下：;  字符串+英文逗号+数字（指定排序位置）=#表达式
;  注意：表达式以英文#开头，后面的表达式中的每一个函数的前面都包含有英文$。
;  函数表如下：
;  函数    	含义    	举例
;  $year    	年(4位) 	2006、2008
;  $year_yy	年(2位) 	06、08
;  $month     	月      	12、8、3
;  $month_mm  	月      	12、08、03		//此函数在输入法3.1版之后（含）有效
;  $day     	日      	3、13、22
;  $day_dd	日	       03、13、22	//此函数在输入法3.1版之后（含）有效
;  $weekday 	星期    	0、1、2、5、6
;  $fullhour	时(24小时制)  	2、8、13、23
;  $fullhour_hh	时(24小时制)  	02、08、13、23		//此函数在输入法3.1版之后（含）有效
;  $halfhour	时(12小时制)	2、8、10、11
;  $halfhour_hh	时(12小时制)	02、08、10、11		//此函数在输入法3.1版之后（含）有效
;  $ampm    	AM、PM(英)	AM、PM（大写）
;  $minute  	分      	02、08、15、28
;  $second  	秒      	02、08、15、28
;  $year_cn 	年(中文4位)	二〇〇六
;  $year_yy_cn	年(中文2位)	〇六
;  $month_cn	月(中文)	十二、八、三
;  $day_cn  	日(中文)	三、十三、二十二
;  $weekday_cn 	星期(中文)	日、一、二、五、六
;  $fullhour_cn	时(中文24时制)	二、八、十三、二十三
;  $halfhour_cn	时(中文12时制)	二、八、一、十一
;  $ampm_cn 	上午下午(中文)	上午、下午
;  $minute_cn	分(中文)	零二、零八、十五、二十八
;  $second_cn	秒(中文)	零二、零八、十五、二十八
;  具体你可以参考这个文件最下面的例子，实际体验一下就明白了。
;  你可以用自定义短语来做一个带动态时间的多行回信落款。
;  ss,1=#$year年$month月$day_dd日 $fullhour:$minute:$second

c,1=🟢
c,2=🟡
c,3=🔴
h,1=💚
h,2=💛
h,3=❤️
s,1=🟩
s,2=🟨
s,3=🟥
li,5=🍐
men,5=🚪
wen,5=❓
xx,5=✨
l,5=👈
r,5=👉
p,5=👆
d,5=👇
paml,5=✋
f,5=✊
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v=[l];function a(r,c){return i(),e("div",null,v)}const u=n(s,[["render",a],["__file","搜狗输入配置.html.vue"]]);export{u as default};
