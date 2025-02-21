import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,e as l}from"./app-jdLxCr9I.js";const i={},o=l(`<h1 id="this" tabindex="-1"><a class="header-anchor" href="#this" aria-hidden="true">#</a> this</h1><p>日志的输出级别与输出端 log4j.rootLogger=INFO,Console</p><h2 id="控制台输出配置" tabindex="-1"><a class="header-anchor" href="#控制台输出配置" aria-hidden="true">#</a> 控制台输出配置</h2><p>log4j.appender.Console=org.apache.log4j.ConsoleAppender log4j.appender.Console.layout=org.apache.log4j.PatternLayout log4j.appender.Console.layout.ConversionPattern=%d [%t] %-5p [%c] - %m%n</p><h2 id="文件输出配置" tabindex="-1"><a class="header-anchor" href="#文件输出配置" aria-hidden="true">#</a> 文件输出配置</h2><p>log4j.appender.A = org.apache.log4j.DailyRollingFileAppender #指定日志的输出路径 log4j.appender.A.File = D:/log.txt log4j.appender.A.Append = true #使用自定义日志格式化器 log4j.appender.A.layout = org.apache.log4j.PatternLayout #指定日志的输出格式 log4j.appender.A.layout.ConversionPattern = %-d{yyyy-MM-dd HH:mm:ss} [%t:%r] -[%p] %m%n #指定日志的文件编码 log4j.appender.A.encoding=UTF-8 #mysql log4j.appender.logDB=org.apache.log4j.jdbc.JDBCAppender log4j.appender.logDB.layout=org.apache.log4j.PatternLayout log4j.appender.logDB.Driver=com.mysql.jdbc.Driver log4j.appender.logDB.URL=jdbc:mysql://localhost:3306/test log4j.appender.logDB.User=root log4j.appender.logDB.Password=root log4j.appender.logDB.Sql=INSERT INTO log(project_name,create_date,level,category,file_name,thread_name,line,all_categ ory,message) values(&#39;itcast&#39;,&#39;%d{yyyy-MM-dd HH:mm:ss}&#39;,&#39;%p&#39;,&#39;%c&#39;,&#39;%F&#39;,&#39;%t&#39;,&#39;%L&#39;,&#39;%l&#39;,&#39;%m&#39;)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
### Layouts
控制日志输出内容的格式
格式化器类型 |作用
--|--
HTMLLayout |格式化HTML表格形式
SimpleLayout |简单的日志输出格式化，打印的日志格式为（info - message）
PatternLayout|自定义格式输出日志，如果没有指定转换格式，就是用默认的转换格式
\`\`\`s
* log4j 采用C语言的printf函数的打印格式格式化日志信息，具体的占位符及其含义如下：
    %m 输出代码中指定的日志信息
    %p 输出优先级，及 DEBUG、INFO 等
    %n 换行符（Windows平台的换行符为 &quot;\\n&quot;，Unix 平台为 &quot;\\n&quot;）
    %r 输出自应用启动到输出该 log 信息耗费的毫秒数
    %c 输出打印语句所属的类的全名
    %t 输出产生该日志的线程全名
    %d 输出服务器当前时间，默认为 ISO8601，也可以指定格式，如：%d{yyyy年MM月dd日HH:mm:ss}
    %l 输出日志时间发生的位置，包括类名、线程、及在代码中的行数。如：Test.main(Test.java:10)
    %F 输出日志消息产生时所在的文件名称
    %L 输出代码中的行号
    %% 输出一个 &quot;%&quot; 字符
* 可以在 % 与字符之间加上修饰符来控制最小宽度、最大宽度和文本的对其方式。如：
    %5c 输出category名称，最小宽度是5，category&lt;5，默认的情况下右对齐
    %-5c 输出category名称，最小宽度是5，category&lt;5，&quot;-&quot;号指定左对齐,会有空格
    %.5c 输出category名称，最大宽度是5，category&gt;5，就会将左边多出的字符截掉，&lt;5 不会有空格
    %20.30c category名称&lt; 20补空格, 并且右对齐，&gt;30字符，就从左边交远销出的字符截掉
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),d=[o];function r(s,t){return n(),a("div",null,d)}const p=e(i,[["render",r],["__file","javaLog4j.html.vue"]]);export{p as default};
