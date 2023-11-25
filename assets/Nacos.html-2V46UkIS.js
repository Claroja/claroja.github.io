import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o,c,a as n,e as s,b as t,f as i,d as l}from"./app-j3zK2x6_.js";const u="/assets/1-TibeE0MZ.png",r="/assets/2-py_M276Y.png",d="/assets/3-6VU7xnhR.png",k="/assets/4-oqNfsXlK.png",v={},m=n("h1",{id:"patch",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#patch","aria-hidden":"true"},"#"),s(" patch")],-1),g={href:"https://github.com/alibaba/nacos",target:"_blank",rel:"noopener noreferrer"},h=l('<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><ol><li>官网下载, 解压, 运行脚本</li><li>http://127.0.0.1:8848/nacos 用户名和密码都是nacos</li></ol><h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h3><ul><li><p>配置集(Data ID) 一个配置文件通常就是一个配置集, 例如，一个配置集可能包含了数据源、线程池、日志级别等配置项。 通常采用类Java包（如 com.taobao.level）的命名规则保证全局唯一性</p></li><li><p>配置分组(Group) 配置分组是对配置集进行分组, 默认配置分组的名称是 DEFAULT_GROUP. 不同的配置分组下可以有相同的配置集（Data ID）</p></li><li><p>命名空间(Namespace) 常用场景之一是不同环境的配置的区分隔离，例如开发测试环境和生产环境的资源（如配置、服务）隔离等。 不同的命名空间下，可以存在相同名称的配置分组(Group) 或 配置集。 Nacos第一次登陆时只有public空间, 可以在<code>命名空间</code>选项中自行添加, 一般添加<code>dev</code>, <code>test</code>, <code>prd</code>三个环境</p></li></ul><p>实践中, 使用方法是: Namespace：代表不同环境，如开发、测试、生产环境。 Group：代表某项目，如XX医疗项目、XX电商项目 DataId：每个项目下往往有若干个工程，每个配置集(DataId)是一个工程的主配置文件</p><h3 id="配置管理" tabindex="-1"><a class="header-anchor" href="#配置管理" aria-hidden="true">#</a> 配置管理</h3><h4 id="编写配置" tabindex="-1"><a class="header-anchor" href="#编写配置" aria-hidden="true">#</a> 编写配置</h4><p>一般通过网页直接操作(常用), 也提供了Restful接口编写(少用)和通过客户端API编写(少用). <img src="'+u+'" alt="" loading="lazy"></p><p>对同一个<code>DataID</code>配置文件进行编写时, 会生成历史版本, 方便回滚.</p><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="获取配置" tabindex="-1"><a class="header-anchor" href="#获取配置" aria-hidden="true">#</a> 获取配置</h4><ul><li>通过客户端API编写(常用),也提供了Restful接口编写(少用)</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token class-name">Properties</span> properties <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    properties<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;serverAddr&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;127.0.0.1:8848&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    properties<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;namespace&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;110d0329-95b6-43a7-9401-0fc6405a960e&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ConfigService</span> configService <span class="token operator">=</span> <span class="token class-name">NacosFactory</span><span class="token punctuation">.</span><span class="token function">createConfigService</span><span class="token punctuation">(</span>properties<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 根据group 和 dataId 定位到具体的配置文件</span>
    <span class="token class-name">String</span> dataId <span class="token operator">=</span> <span class="token string">&quot;newconfig&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> group <span class="token operator">=</span> <span class="token string">&quot;DEFAULT_GROUP&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> config <span class="token operator">=</span> configService<span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span>dataId<span class="token punctuation">,</span> group<span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细代码参考 learnTools/nacos</p><h4 id="监听配置" tabindex="-1"><a class="header-anchor" href="#监听配置" aria-hidden="true">#</a> 监听配置</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token comment">// 根据serverAddr和namespace定位到configService</span>
    <span class="token class-name">Properties</span> properties <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    properties<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;serverAddr&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;127.0.0.1:8848&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    properties<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;namespace&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;110d0329-95b6-43a7-9401-0fc6405a960e&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ConfigService</span> configService <span class="token operator">=</span> <span class="token class-name">NacosFactory</span><span class="token punctuation">.</span><span class="token function">createConfigService</span><span class="token punctuation">(</span>properties<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//监听, 当配置文件发生变化时, 回调</span>
    <span class="token class-name">String</span> dataId <span class="token operator">=</span> <span class="token string">&quot;newconfig&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> group <span class="token operator">=</span> <span class="token string">&quot;DEFAULT_GROUP&quot;</span><span class="token punctuation">;</span>
    configService<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span>dataId<span class="token punctuation">,</span> group<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Listener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token class-name">Executor</span> <span class="token function">getExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//当配置有变化 时候获取通知</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receiveConfigInfo</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细代码参考 learnTools/nacos</p><h3 id="服务发现" tabindex="-1"><a class="header-anchor" href="#服务发现" aria-hidden="true">#</a> 服务发现</h3><ul><li>微服务实例的网络位置或许是动态分配的。</li><li>每一个服务一般会有多个实例来做负载均衡，由于宕机或升级，服务实例网络地址会经常动态改变。</li><li>每一个服务也可能应对临时访问压力增加新的服务节点</li></ul><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>通过注册中心来解决: 服务实例本身并不记录服务生产方的网络地址，所有服务实例内部都会包含服务发现客户端。</p><ol><li>在每个服务启动时会向服务发现中心上报自己的网络位置。</li><li>当需要对某服务进行请求时，服务实例通过该注册中心，定位目标服务网络地址。若目标服务存在多个网络地 址，则使用负载均衡算法从多个服务实例中选择出一个。</li></ol><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>详细代码见 learnTools/nacos</p><p>只修改端口号, 多开程序</p><p>ctrl+alt+v</p>',26),f={href:"https://nacos.io/zh-cn/docs/sdk.html",target:"_blank",rel:"noopener noreferrer"};function b(_,q){const a=p("ExternalLinkIcon");return o(),c("div",null,[m,n("p",null,[s("Nacos 统一管理各个系统的配置文件. "),n("a",g,[s("官网"),t(a)])]),i("more"),h,n("p",null,[n("a",f,[s("java SDK"),t(a)])])])}const S=e(v,[["render",b],["__file","Nacos.html.vue"]]);export{S as default};
