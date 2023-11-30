import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e}from"./app-0JgdiRQ-.js";const t={},p=e(`<h1 id="连续-几何分布" tabindex="-1"><a class="header-anchor" href="#连续-几何分布" aria-hidden="true">#</a> 连续_几何分布</h1><p>在需要日志的class中创建<code>logger</code>实例, 使用<code>static</code>和<code>final</code>来修饰, 指定这个class中的所有实例, 使用相同的<code>logger</code>实例.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Examples</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> logger <span class="token operator">=</span>
        <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">Examples</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//getLogger获得logger实例, 并以该类的类名作为名称</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="logging-messages" tabindex="-1"><a class="header-anchor" href="#logging-messages" aria-hidden="true">#</a> Logging Messages</h2><ol><li><code>log()</code></li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token string">&quot;myLogger&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Level</span><span class="token punctuation">.</span><span class="token constant">SEVERE</span><span class="token punctuation">,</span> <span class="token string">&quot;Hello logging&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//第一个参数是等级, 只有符合等级的日志, 才会输出</span>
logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Level</span><span class="token punctuation">.</span><span class="token constant">SEVERE</span><span class="token punctuation">,</span> <span class="token string">&quot;Hello logging: {0} &quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;P1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//添加参数</span>
logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Level</span><span class="token punctuation">.</span><span class="token constant">SEVERE</span><span class="token punctuation">,</span> <span class="token string">&quot;Hello logging: {0}, {1}&quot;</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token string">&quot;P1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;P2&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Level</span><span class="token punctuation">.</span><span class="token constant">SEVERE</span><span class="token punctuation">,</span> <span class="token string">&quot;Hello logging&quot;</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;Error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><code>logp()</code> 相比<code>log()</code>多了<code>sourceClass</code>和<code>sourceMethod</code>参数, 可以指明<code>logger</code>实例的位置</li></ol><h2 id="log-levels" tabindex="-1"><a class="header-anchor" href="#log-levels" aria-hidden="true">#</a> Log Levels</h2><ul><li>java.util.logging.Level中定义了日志的级别： SEVERE（最高值） WARNING INFO （默认级别） CONFIG FINE FINER FINEST（最低值）</li><li>还有两个特殊的级别： OFF，可用来关闭日志记录。 ALL，启用所有消息的日志记录。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Level</span><span class="token punctuation">.</span><span class="token constant">SEVERE</span><span class="token punctuation">,</span> <span class="token string">&quot;A severe message!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过设置<code>logger</code>的等级, 可以将等级较低的<code>logger.log()</code>过滤掉</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>logger<span class="token punctuation">.</span><span class="token function">setLevel</span><span class="token punctuation">(</span><span class="token class-name">Level</span><span class="token punctuation">.</span><span class="token constant">WARNING</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//所有低于WARNING等级的\`logger.log()\`将无效</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="filters" tabindex="-1"><a class="header-anchor" href="#filters" aria-hidden="true">#</a> Filters</h2><p><code>Filter</code>可以根据日志捕获的信息<code>record</code>过滤日志.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyFilter</span> <span class="token keyword">implements</span> <span class="token class-name">Filter</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isLoggable</span><span class="token punctuation">(</span><span class="token class-name">LogRecord</span> record<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//通过判断record来决定是否输出</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name">Filter</span> filter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
logger1<span class="token punctuation">.</span><span class="token function">setFilter</span><span class="token punctuation">(</span>filter<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="logrecord" tabindex="-1"><a class="header-anchor" href="#logrecord" aria-hidden="true">#</a> LogRecord</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token function">getLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">getLoggerName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">getMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">getParameters</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">getResourceBundle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">getResourceBundleName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">getSequenceNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">getSourceClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">getSourceMethodName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">getThreadID</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">getThrown</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="handlers" tabindex="-1"><a class="header-anchor" href="#handlers" aria-hidden="true">#</a> Handlers</h2><p><code>Handler</code>处理日志的输出方向:</p><ul><li>控制台 <code>ConsoleHandler</code></li><li>硬盘 <code>FileHandler</code></li><li>流 <code>StreamHandler</code></li><li>socket <code>SocketHandler</code></li><li>内存 <code>MemoryHandler</code></li></ul><h3 id="consolehandler" tabindex="-1"><a class="header-anchor" href="#consolehandler" aria-hidden="true">#</a> ConsoleHandler</h3><p>默认将所有的日志信息写入<code>System.err</code></p><h3 id="filehandler" tabindex="-1"><a class="header-anchor" href="#filehandler" aria-hidden="true">#</a> FileHandler</h3><p>将日志写入硬盘的文件, 可以是一个文件, 也可以是多个滚动的文件. 如果是多个滚动文件, 则每个文件都有大小的限制, 命名也会使用原始名称+序号</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">FileHandler</span> handler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">FileHandler</span> handler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileHandler</span><span class="token punctuation">(</span><span class="token class-name">String</span> pattern<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">FileHandler</span> handler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileHandler</span><span class="token punctuation">(</span><span class="token class-name">String</span> pattern<span class="token punctuation">,</span> <span class="token keyword">boolean</span> append<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">FileHandler</span> handler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileHandler</span><span class="token punctuation">(</span><span class="token class-name">String</span> pattern<span class="token punctuation">,</span> <span class="token keyword">int</span> limit<span class="token punctuation">,</span> <span class="token keyword">int</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">FileHandler</span> handler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileHandler</span><span class="token punctuation">(</span><span class="token class-name">String</span> pattern<span class="token punctuation">,</span> <span class="token keyword">int</span> limit<span class="token punctuation">,</span> <span class="token keyword">int</span> count<span class="token punctuation">,</span><span class="token keyword">boolean</span> append<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">FileHandler</span> handler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileHandler</span><span class="token punctuation">(</span><span class="token string">&quot;myapp-log.%u.%g.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">FileHandler</span> handler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileHandler</span><span class="token punctuation">(</span><span class="token string">&quot;myapp-log.%u.%g.txt&quot;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">FileHandler</span> handler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileHandler</span><span class="token punctuation">(</span><span class="token string">&quot;myapp-log.%u.%g.txt&quot;</span><span class="token punctuation">,</span><span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">FileHandler</span> handler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileHandler</span><span class="token punctuation">(</span><span class="token string">&quot;myapp-log.%u.%g.txt&quot;</span><span class="token punctuation">,</span><span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="streamhandler" tabindex="-1"><a class="header-anchor" href="#streamhandler" aria-hidden="true">#</a> StreamHandler</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">StreamHandler</span> handler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StreamHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">StreamHandler</span> handler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StreamHandler</span><span class="token punctuation">(</span>outputStream<span class="token punctuation">,</span> formatter<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sockethandler" tabindex="-1"><a class="header-anchor" href="#sockethandler" aria-hidden="true">#</a> SocketHandler</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">SocketHandler</span> socketHandler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SocketHandler</span><span class="token punctuation">(</span>host<span class="token punctuation">,</span> port<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="memoryhandler" tabindex="-1"><a class="header-anchor" href="#memoryhandler" aria-hidden="true">#</a> MemoryHandler</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">MemoryHandler</span> handler <span class="token operator">=</span> <span class="token class-name">MemoryHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">MemoryHandler</span> handler <span class="token operator">=</span> <span class="token class-name">MemoryHandler</span><span class="token punctuation">(</span>targetHandler<span class="token punctuation">,</span> bufferSize<span class="token punctuation">,</span> pushLevel<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="formatters" tabindex="-1"><a class="header-anchor" href="#formatters" aria-hidden="true">#</a> Formatters</h2><p><code>Handler</code>使用<code>java.util.logging.Formatter</code>来设置<code>LogRecord</code>的输出格式. Java有两个内置的<code>Formatter</code></p><ul><li>SimpleFormatter</li><li>XMLFormatter 可以通过继承<code>java.util.logging.Formatter</code>来自定义格式:</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyFormatter</span> <span class="token keyword">extends</span> <span class="token class-name">Formatter</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token class-name">LogRecord</span> record<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> record<span class="token punctuation">.</span><span class="token function">getLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> record<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="logger-hierarchy" tabindex="-1"><a class="header-anchor" href="#logger-hierarchy" aria-hidden="true">#</a> Logger Hierarchy</h2><p>JUL中Logger之间存在父子关系，JUL在初始化时会创建一个顶层RootLogger作为所有Logger父Logger.</p><ul><li>并父子关系通过路径名称关联</li><li>子可以继承父类的日志级别, 可以使用<code>logger.setUseParentHandlers(false);</code>来关闭</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 日志记录器名称记录了</span>
<span class="token class-name">Logger</span> logger1 <span class="token operator">=</span> <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token string">&quot;com.claroja.log&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Logger</span> logger2 <span class="token operator">=</span> <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token string">&quot;com.claroja&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>logger1<span class="token punctuation">.</span><span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> logger2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 所有日志记录器对象的顶级父元素 class为java.util.logging.LogManager$RootLoggername为&quot;&quot;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;logger2 parent:&quot;</span> <span class="token operator">+</span> logger2<span class="token punctuation">.</span><span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;，name：&quot;</span> <span class="token operator">+</span>logger2<span class="token punctuation">.</span><span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>默认配置文件路径$JAVAHOME\\jre\\lib\\logging.properties</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">// 读取自定义配置文件</span>
    <span class="token class-name">InputStream</span> in <span class="token operator">=</span><span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;logging.properties&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 获取日志管理器对象</span>
    <span class="token class-name">LogManager</span> logManager <span class="token operator">=</span> <span class="token class-name">LogManager</span><span class="token punctuation">.</span><span class="token function">getLogManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 通过日志管理器加载配置文件</span>
    logManager<span class="token punctuation">.</span><span class="token function">readConfiguration</span><span class="token punctuation">(</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 自定义日志对象</span>
    <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token string">&quot;com.claroja.Log&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">### RootLogger</span>
handlers<span class="token operator">=</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>logging<span class="token punctuation">.</span>ConsoleHandler <span class="token comment"># 使用的处理器, 可以设置多个</span>
<span class="token punctuation">.</span>level<span class="token operator">=</span> INFO <span class="token comment"># RootLogger日志等级</span>
<span class="token comment">### 自定义Logger</span>
com<span class="token punctuation">.</span>claroja<span class="token punctuation">.</span>Log<span class="token punctuation">.</span>handlers<span class="token operator">=</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>logging<span class="token punctuation">.</span>FileHandler <span class="token comment"># 使用的处理器, 可以设置多个</span>
com<span class="token punctuation">.</span>claroja<span class="token punctuation">.</span>Log<span class="token punctuation">.</span>level<span class="token operator">=</span> INFO <span class="token comment"># 自定义Logger日志等级</span>
com<span class="token punctuation">.</span>claroja<span class="token punctuation">.</span>Log<span class="token punctuation">.</span>useParentHandlers<span class="token operator">=</span>false <span class="token comment"># 忽略父日志设置</span>
<span class="token comment">### 控制台处理器</span>
java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>logging<span class="token punctuation">.</span>ConsoleHandler<span class="token punctuation">.</span>level <span class="token operator">=</span> INFO <span class="token comment"># 输出日志级别</span>
java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>logging<span class="token punctuation">.</span>ConsoleHandler<span class="token punctuation">.</span>formatter <span class="token operator">=</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>logging<span class="token punctuation">.</span>SimpleFormatter <span class="token comment"># 输出日志格式</span>
<span class="token comment">### 文件处理器</span>
java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>logging<span class="token punctuation">.</span>FileHandler<span class="token punctuation">.</span>level<span class="token operator">=</span>INFO <span class="token comment"># 输出日志级别</span>
java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>logging<span class="token punctuation">.</span>FileHandler<span class="token punctuation">.</span>formatter <span class="token operator">=</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>logging<span class="token punctuation">.</span>SimpleFormatter <span class="token comment"># 输出日志格式</span>
java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>logging<span class="token punctuation">.</span>FileHandler<span class="token punctuation">.</span>pattern <span class="token operator">=</span> <span class="token operator">/</span>java<span class="token operator">%</span>u<span class="token punctuation">.</span>log <span class="token comment"># 输出日志文件路径</span>
java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>logging<span class="token punctuation">.</span>FileHandler<span class="token punctuation">.</span>limit <span class="token operator">=</span> <span class="token number">50000</span> <span class="token comment"># 输出日志文件限制大小（50000字节）</span>
java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>logging<span class="token punctuation">.</span>FileHandler<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">10</span> <span class="token comment"># 输出日志文件限制个数</span>
java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>logging<span class="token punctuation">.</span>FileHandler<span class="token punctuation">.</span>append<span class="token operator">=</span>true <span class="token comment"># 输出日志文件 是否是追加</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: http://tutorials.jenkov.com/java-logging/logger.html http://tutorials.jenkov.com/java-logging/logger-hierarchy.html</p>`,44),o=[p];function c(l,i){return a(),s("div",null,o)}const d=n(t,[["render",c],["__file","JavaLogger.html.vue"]]);export{d as default};
