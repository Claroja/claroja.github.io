import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as p,c as l,b as o,w as c,e as a,a as n,d as u}from"./app-j3zK2x6_.js";const i={},r=n("h1",{id:"第一编总则-第一章基本规定",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#第一编总则-第一章基本规定","aria-hidden":"true"},"#"),a(" 第一编总则-第一章基本规定")],-1),k=n("ul",null,[n("li",null,'status="warn" 日志框架<本身>的输出日志级别 monitorInterval="5" 自动加载配置文件(热更新)的间隔时间，不低于 5 秒 -->')],-1),d=n("pre",null,[n("code",null,`<!--集中配置属性进行管理使用时通过:\${name}-->
<properties>
    <property name="LOG_HOME">/logs</property>
</properties>
<!--日志处理器-->
<Appenders>
    <Console name="Console" target="SYSTEM_ERR">
        <PatternLayout pattern="%d{HH:mm:ss.SSS} [%t] [%-5level] %c{36}:%L --- %m%n" />
    </Console>
</Appenders>

<!--logger 定义-->
<Loggers>
    <!--自定义异步 logger 对象
        includeLocation="false" 关闭日志记录的行号信息, 不然会比同步的还慢
        additivity="false" 不在继承 rootlogger 对象
    -->
    <AsyncLogger name="com.claroja" level="trace" includeLocation="false" additivity="false">
        <AppenderRef ref="Console"/>
    </AsyncLogger>
    <!--使用 rootLogger 配置 日志级别 level="trace"-->
    <Root level="trace">
        <!--指定日志使用的处理器-->
        <AppenderRef ref="Console" />
        <!--使用异步 appender-->
        <AppenderRef ref="Async" />
    </Root>
</Loggers>
`)],-1),g=u(`<h3 id="appender" tabindex="-1"><a class="header-anchor" href="#appender" aria-hidden="true">#</a> appender</h3><p><code>&lt;Appenders&gt;</code>标签中可以配置多个<code>appender</code></p><ul><li>Console</li><li>File</li><li>RandomAccessFile</li><li>RollingFile</li><li>Async</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--日志处理器--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Appenders</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--控制台输出 appender--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Console</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Console<span class="token punctuation">&quot;</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SYSTEM_ERR<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PatternLayout</span> <span class="token attr-name">pattern</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>%d{HH:mm:ss.SSS} [%t] [%-5level] %c{36}:%L --- %m%n<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Console</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--日志文件输出 appender--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>File</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span> <span class="token attr-name">fileName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${LOG_HOME}/myfile.log<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PatternLayout</span> <span class="token attr-name">pattern</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[%d{yyyy-MM-dd HH:mm:ss.SSS}] [%-5level] %l %c{36} - %m%n<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>File</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Appenders</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>RandomAccessFile appender 相比<code>File</code>性能更高</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RandomAccessFile</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>accessFile<span class="token punctuation">&quot;</span></span> <span class="token attr-name">fileName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${LOG_HOME}/myAcclog.log<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PatternLayout</span> <span class="token attr-name">pattern</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[%d{yyyy-MM-dd HH:mm:ss.SSS}] [%-5level] %l %c{36} - %m%n<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RandomAccessFile</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>滚动日志 appender</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--按照一定规则拆分的日志文件的 appender--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RollingFile</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rollingFile<span class="token punctuation">&quot;</span></span> <span class="token attr-name">fileName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${LOG_HOME}/myrollog.log<span class="token punctuation">&quot;</span></span>
                <span class="token attr-name">filePattern</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/logs/$\${date:yyyy-MM-dd}/myrollog-%d{yyyy-MM-dd-HH-mm}-%i.log<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--日志级别过滤器--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ThresholdFilter</span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>debug<span class="token punctuation">&quot;</span></span> <span class="token attr-name">onMatch</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ACCEPT<span class="token punctuation">&quot;</span></span> <span class="token attr-name">onMismatch</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>DENY<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!--日志消息格式--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PatternLayout</span> <span class="token attr-name">pattern</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[%d{yyyy-MM-dd HH:mm:ss.SSS}] [%-5level] %l %c{36} - %msg%n<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Policies</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--在系统启动时，出发拆分规则，生产一个新的日志文件--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>OnStartupTriggeringPolicy</span> <span class="token punctuation">/&gt;</span></span>
        <span class="token comment">&lt;!--按照文件大小拆分，10MB --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SizeBasedTriggeringPolicy</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10 MB<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token comment">&lt;!--按照时间节点拆分，规则根据filePattern定义的--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimeBasedTriggeringPolicy</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Policies</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--在同一个目录下，文件的个数限定为 30 个，超过进行覆盖--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DefaultRolloverStrategy</span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>30<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RollingFile</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>异步日志</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Async</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Async<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AppenderRef</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Async</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="logers" tabindex="-1"><a class="header-anchor" href="#logers" aria-hidden="true">#</a> logers</h3><p>配置logger对象</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--logger 定义--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Loggers</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--自定义异步 logger 对象
        includeLocation=&quot;false&quot; 关闭日志记录的行号信息, 不然会比同步的还慢
        additivity=&quot;false&quot; 不在继承 rootlogger 对象
    --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AsyncLogger</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.claroja<span class="token punctuation">&quot;</span></span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>trace<span class="token punctuation">&quot;</span></span> <span class="token attr-name">includeLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">additivity</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AppenderRef</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Console<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AsyncLogger</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--使用 rootLogger 配置 日志级别 level=&quot;trace&quot;--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Root</span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>trace<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--指定日志使用的处理器--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AppenderRef</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Console<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token comment">&lt;!--使用异步 appender--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AppenderRef</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Async<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Root</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Loggers</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function m(v,q){const s=e("Configuration");return p(),l("div",null,[r,k,o(s,{status:"debug",monitorInterval:"5"},{default:c(()=>[d]),_:1}),a(" ``` "),g])}const f=t(i,[["render",m],["__file","JavaLog4j2.html.vue"]]);export{f as default};
