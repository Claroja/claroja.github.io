import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o,c as e,a as n,b as s,d as c,e as u}from"./app-MTzDpLgJ.js";const i={},l=u(`<h1 id="new" tabindex="-1"><a class="header-anchor" href="#new" aria-hidden="true">#</a> <strong>new</strong></h1><h2 id="加密算法的演进" tabindex="-1"><a class="header-anchor" href="#加密算法的演进" aria-hidden="true">#</a> 加密算法的演进</h2><ol><li>不加密</li><li>md5加密 很容易倒排获得密码</li><li>加盐+md5加密 如果获得盐的规则, 也可获得密码</li><li><code>BCryptPasswordEncoder</code>实现了随机加盐</li></ol><h2 id="springsecurity中的加密方式" tabindex="-1"><a class="header-anchor" href="#springsecurity中的加密方式" aria-hidden="true">#</a> SpringSecurity中的加密方式</h2><ul><li><code>PasswordEncoderFactories.class</code> SpringSecurity提供了9中加密方式, 并提供了<code>PasswordEncoderFactories.class</code>类</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">PasswordEncoder</span> <span class="token function">createDelegatingPasswordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token class-name">String</span> encodingId <span class="token operator">=</span> <span class="token string">&quot;bcrypt&quot;</span><span class="token punctuation">;</span>
       <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">PasswordEncoder</span><span class="token punctuation">&gt;</span></span> encoders <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       encoders<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>encodingId<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">BCryptPasswordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       encoders<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;ldap&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>security<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>password<span class="token punctuation">.</span></span>LdapShaPasswordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       encoders<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;MD4&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>security<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>password<span class="token punctuation">.</span></span>Md4PasswordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       encoders<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;MD5&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>security<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>password<span class="token punctuation">.</span></span>MessageDigestPasswordEncoder</span><span class="token punctuation">(</span><span class="token string">&quot;MD5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       encoders<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;noop&quot;</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>security<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>password<span class="token punctuation">.</span></span>NoOpPasswordEncoder</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       encoders<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;pbkdf2&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Pbkdf2PasswordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       encoders<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;scrypt&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">SCryptPasswordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       encoders<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;SHA-1&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>security<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>password<span class="token punctuation">.</span></span>MessageDigestPasswordEncoder</span><span class="token punctuation">(</span><span class="token string">&quot;SHA-1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       encoders<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;SHA-256&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>security<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>password<span class="token punctuation">.</span></span>MessageDigestPasswordEncoder</span><span class="token punctuation">(</span><span class="token string">&quot;SHA-256&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       encoders<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;sha256&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>security<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>password<span class="token punctuation">.</span></span>StandardPasswordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

       <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DelegatingPasswordEncoder</span><span class="token punctuation">(</span>encodingId<span class="token punctuation">,</span> encoders<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>DelegatingPasswordEncoder.class</code> 该类默认通过&quot;bcrypt&quot;来进行加密, 解密时则是通过<code>extractId()</code>方法,判断密文的前缀<code>{}</code>, 使用不同的加密器来进行比对.</li></ul><h2 id="springsecurity中加密器的配置" tabindex="-1"><a class="header-anchor" href="#springsecurity中加密器的配置" aria-hidden="true">#</a> SpringSecurity中加密器的配置</h2><p>加密和判断密码主要由<code>DelegatingPasswordEncoder.class</code>实现. 对比密码通过<code>matches(CharSequence rawPassword, String prefixEncodedPassword)</code>方法, 该方法:</p><ol><li>根据密文的前缀, 获得机密器的id <code>String id = extractId(prefixEncodedPassword);</code></li><li>根据加密器的id, 获得对应的加密器 <code>PasswordEncoder delegate = this.idToPasswordEncoder.get(id);</code></li><li><ul><li>默认: 加密器在<code>DaoAuthenticationProvider.class</code>构造时由<code>PasswordEncoderFactories</code>提供</li><li>另外, 用户可以继承<code>WebSecurityConfigurerAdapter.class</code>中自己指定, 这时会覆盖掉默认的, 这是直接使用加密器, 则不会有<code>{}</code>前缀</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">BCryptPasswordEncoder</span> <span class="token function">passwordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">BCryptPasswordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//指定认证对象的来源</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">AuthenticationManagerBuilder</span> auth<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    auth<span class="token punctuation">.</span><span class="token function">userDetailsService</span><span class="token punctuation">(</span>userService<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">passwordEncoder</span><span class="token punctuation">(</span><span class="token function">passwordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,10),r={href:"https://wangsong.blog.csdn.net/article/details/108359657",target:"_blank",rel:"noopener noreferrer"};function k(d,g){const a=p("ExternalLinkIcon");return o(),e("div",null,[l,n("p",null,[s("prepareTimingAttackProtection(); "),n("a",r,[s("什么是计时攻击？Spring Boot 中该如何防御？"),c(a)])])])}const v=t(i,[["render",k],["__file","SpringSecurity加密原理.html.vue"]]);export{v as default};
