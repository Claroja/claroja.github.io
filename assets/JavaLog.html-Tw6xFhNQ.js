import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,e as t}from"./app-jdLxCr9I.js";const e={},o=t(`<h1 id="统计模型" tabindex="-1"><a class="header-anchor" href="#统计模型" aria-hidden="true">#</a> 统计模型</h1><h2 id="日志分类" tabindex="-1"><a class="header-anchor" href="#日志分类" aria-hidden="true">#</a> 日志分类:</h2><ol><li>调试日志 调试程序时记录, 调试时输出到console</li><li>系统日志 生产环境时记录,用户行为, 报错信息, 生产时记录到文件</li></ol><h2 id="日志" tabindex="-1"><a class="header-anchor" href="#日志" aria-hidden="true">#</a> 日志</h2><p>日志实现 JUL（java util logging）: log4j(了解)、logback(了解)、log4j2(使用) 日志接口: 接口屏蔽的具体实现, 利于解耦和迁移 JCL（Jakarta Commons Logging）(了解) slf4j（ Simple Logging Facade for Java）(使用)</p><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><p>推荐slf4j+log4j2组合</p><h2 id="其他-了解jcl" tabindex="-1"><a class="header-anchor" href="#其他-了解jcl" aria-hidden="true">#</a> 其他-(了解JCL)</h2><p>已经没有市场, 不需要学习 Jakarta Commons Logging，是Apache提供的一个通用日志API。JCL 有两个基本的抽象类：Log(基本记录器)和LogFactory(负责创建Log实例)。</p><p>JCL 有两个基本的抽象类：Log(基本记录器)和LogFactory(负责创建Log实例)。</p><ul><li>面向接口开发，不再依赖具体的实现类</li><li>可以灵活的切换日志框架</li><li>统一API，方便开发者学习和使用</li></ul><p>依赖</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>commons-logging<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>commons-logging<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[o];function c(p,i){return n(),s("div",null,l)}const g=a(e,[["render",c],["__file","JavaLog.html.vue"]]);export{g as default};
