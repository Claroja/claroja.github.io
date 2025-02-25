import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-7knaTE3M.js";const p={},o=t(`<h1 id="figure" tabindex="-1"><a class="header-anchor" href="#figure" aria-hidden="true">#</a> figure</h1><p>默认就是使用SLF4J作为日志接口，logback作为日志实现来记录日志。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 声明日志记录器对象</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> <span class="token constant">LOGGER</span> <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">SpringbootLogApplicationTests</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 打印日志信息</span>
    <span class="token constant">LOGGER</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token constant">LOGGER</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&quot;warn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token constant">LOGGER</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;info&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 默认日志级别</span>
    <span class="token constant">LOGGER</span><span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;debug&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token constant">LOGGER</span><span class="token punctuation">.</span><span class="token function">trace</span><span class="token punctuation">(</span><span class="token string">&quot;trace&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="默认配置文件" tabindex="-1"><a class="header-anchor" href="#默认配置文件" aria-hidden="true">#</a> 默认配置文件</h2><p>默认读取CLASSPATH下的<code>application.properties</code>文件</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 指定自定义 logger 对象日志级别</span>
logging<span class="token punctuation">.</span>level<span class="token punctuation">.</span>com<span class="token punctuation">.</span>claroja<span class="token operator">=</span>trace
<span class="token comment">## 指定控制台输出消息格式</span>
logging<span class="token punctuation">.</span>pattern<span class="token punctuation">.</span>console<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">%</span><span class="token operator">-</span>5level<span class="token punctuation">]</span> <span class="token operator">%</span>d<span class="token punctuation">{</span>yyyy<span class="token operator">-</span>MM<span class="token operator">-</span>dd HH<span class="token punctuation">:</span>mm<span class="token punctuation">:</span>ss<span class="token punctuation">}</span> <span class="token operator">%</span>c <span class="token punctuation">[</span><span class="token operator">%</span>thread<span class="token punctuation">]</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> <span class="token operator">%</span>msg <span class="token operator">%</span>n
<span class="token comment">## 指定存放日志文件的具体路径</span>
logging<span class="token punctuation">.</span><span class="token builtin">file</span><span class="token operator">=</span><span class="token operator">/</span>logs<span class="token operator">/</span>springboot<span class="token punctuation">.</span>log
<span class="token comment">## 指定日志文件存放的目录，默认的文件名 spring.log</span>
logging<span class="token punctuation">.</span><span class="token builtin">file</span><span class="token punctuation">.</span>path<span class="token operator">=</span><span class="token operator">/</span>logs<span class="token operator">/</span>springboot<span class="token operator">/</span>
<span class="token comment">## 指定日志文件消息格式</span>
logging<span class="token punctuation">.</span>pattern<span class="token punctuation">.</span><span class="token builtin">file</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">%</span><span class="token operator">-</span>5level<span class="token punctuation">]</span> <span class="token operator">%</span>d<span class="token punctuation">{</span>yyyy<span class="token operator">-</span>MM<span class="token operator">-</span>dd HH<span class="token punctuation">:</span>mm<span class="token punctuation">:</span>ss<span class="token punctuation">}</span> <span class="token operator">%</span>c <span class="token punctuation">[</span><span class="token operator">%</span>thread<span class="token punctuation">]</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> <span class="token operator">%</span>msg <span class="token operator">%</span>n
<span class="token comment">## 指定项目使用的具体环境</span>
spring<span class="token punctuation">.</span>profiles<span class="token punctuation">.</span>active<span class="token operator">=</span>pro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义配置文件" tabindex="-1"><a class="header-anchor" href="#自定义配置文件" aria-hidden="true">#</a> 自定义配置文件</h2><p>默认会覆盖<code>application.properties</code>的配置信息</p><table><thead><tr><th>日志框架</th><th>配置文件</th></tr></thead><tbody><tr><td>Logback</td><td>logback-spring.xml, logback.xml</td></tr><tr><td>Log4j2</td><td>log4j2-spring.xml, log4j2.xml</td></tr><tr><td>JUL</td><td>logging.properties</td></tr></tbody></table><h3 id="使用logback控制" tabindex="-1"><a class="header-anchor" href="#使用logback控制" aria-hidden="true">#</a> 使用logback控制</h3><p>配合<code>application.properties</code>可以快速切换生产和开发环境</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>spring<span class="token punctuation">.</span>profiles<span class="token punctuation">.</span>active<span class="token operator">=</span>dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--控制台日志输出的 appender--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>console<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ch.qos.logback.core.ConsoleAppender<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--控制输出流对象 默认 System.out 改为 System.err--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>target</span><span class="token punctuation">&gt;</span></span>System.err<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>target</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--日志消息格式配置--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>encoder</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ch.qos.logback.classic.encoder.PatternLayoutEncoder<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>springProfile</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dev<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pattern</span><span class="token punctuation">&gt;</span></span>[%-5level] %d{yyyy-MM-dd HH:mm:ss.SSS} %c %M %L [%thread] -------- %m %n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pattern</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>springProfile</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>springProfile</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pro<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pattern</span><span class="token punctuation">&gt;</span></span>[%-5level] %d{yyyy-MM-dd HH:mm:ss.SSS} %c %M %L [%thread] xxxxxxxx %m %n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pattern</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>springProfile</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>encoder</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appender</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--自定义 looger 对象
        additivity=&quot;false&quot; 自定义 logger 对象是否继承 rootLogger
     --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>logger</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.claroja<span class="token punctuation">&quot;</span></span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span> <span class="token attr-name">additivity</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>console<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>logger</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="切换log4j2" tabindex="-1"><a class="header-anchor" href="#切换log4j2" aria-hidden="true">#</a> 切换log4j2</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusions</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--排除 logback 日志实现--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusion</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-logging<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusion</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusions</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--使用 log4j2 的日志启动器--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-log4j2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),e=[o];function c(l,i){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","JavaSpringBootLog.html.vue"]]);export{k as default};
