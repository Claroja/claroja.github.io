import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as e,f as p,a as n,b as s,e as c}from"./app-O0xqlHfm.js";const o={},l=n("h1",{id:"htmlelement",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#htmlelement","aria-hidden":"true"},"#"),s(" HTMLElement")],-1),i=n("p",null,[s("JWTs既可以是签名(JWS,Signature),也可以是加密(JWE,Encryption) jwt有三个部分, 使用"),n("code",null,"."),s("来隔开, 每个部分使用 Base64URL进行编码.")],-1),u=n("ol",null,[n("li",null,"第一部分: header 记录该lwt使用什么进行签名"),n("li",null,"第二部分: body(claims) 要传输的内容"),n("li",null,"第三部分: signature, 将第一部分header和第二部分加合并进行签名.")],-1),d=c(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.jsonwebtoken<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jjwt-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.11.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.jsonwebtoken<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jjwt-impl<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.11.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.jsonwebtoken<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jjwt-jackson<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> <span class="token comment">&lt;!-- or jjwt-gson if Gson is preferred --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.11.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="入门案例" tabindex="-1"><a class="header-anchor" href="#入门案例" aria-hidden="true">#</a> 入门案例</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>jsonwebtoken<span class="token punctuation">.</span></span><span class="token class-name">Jwts</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>jsonwebtoken<span class="token punctuation">.</span></span><span class="token class-name">SignatureAlgorithm</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>jsonwebtoken<span class="token punctuation">.</span>security<span class="token punctuation">.</span></span><span class="token class-name">Keys</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>security<span class="token punctuation">.</span></span><span class="token class-name">Key</span></span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> test <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Key</span> key <span class="token operator">=</span> <span class="token class-name">Keys</span><span class="token punctuation">.</span><span class="token function">secretKeyFor</span><span class="token punctuation">(</span><span class="token class-name">SignatureAlgorithm</span><span class="token punctuation">.</span><span class="token constant">HS256</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> jws <span class="token operator">=</span> <span class="token class-name">Jwts</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setSubject</span><span class="token punctuation">(</span><span class="token string">&quot;Joe&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">signWith</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">compact</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> subject <span class="token operator">=</span> <span class="token class-name">Jwts</span><span class="token punctuation">.</span><span class="token function">parserBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setSigningKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">parseClaimsJws</span><span class="token punctuation">(</span>jws<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSubject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>subject<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jwt原理" tabindex="-1"><a class="header-anchor" href="#jwt原理" aria-hidden="true">#</a> jwt原理</h2><p>jwt保证:</p><ul><li>authenticity, 保证我们知道创建jwt的人(不能伪造创建者)</li><li>integrity, 保证jwt不能被修改(不能伪造信息) jwt通过以下步骤实现了这两点:</li></ul><ol><li>创建jwt的信息</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> header <span class="token operator">=</span> &#39;<span class="token punctuation">{</span><span class="token string">&quot;alg&quot;</span><span class="token operator">:</span><span class="token string">&quot;HS256&quot;</span><span class="token punctuation">}</span>&#39;
<span class="token class-name">String</span> claims <span class="token operator">=</span> &#39;<span class="token punctuation">{</span><span class="token string">&quot;sub&quot;</span><span class="token operator">:</span><span class="token string">&quot;Joe&quot;</span><span class="token punctuation">}</span>&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>使用base64转码</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> encodedHeader <span class="token operator">=</span> <span class="token function">base64URLEncode</span><span class="token punctuation">(</span> header<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
<span class="token class-name">String</span> encodedClaims <span class="token operator">=</span> <span class="token function">base64URLEncode</span><span class="token punctuation">(</span> claims<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>拼贴header和claims</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> concatenated <span class="token operator">=</span> encodedHeader <span class="token operator">+</span> <span class="token char">&#39;.&#39;</span> <span class="token operator">+</span> encodedClaims
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>进行签名</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Key</span> key <span class="token operator">=</span> <span class="token function">getMySecretKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> signature <span class="token operator">=</span> <span class="token function">hmacSha256</span><span class="token punctuation">(</span> concatenated<span class="token punctuation">,</span> key <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>追加签名信息</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> jws <span class="token operator">=</span> concatenated <span class="token operator">+</span> <span class="token char">&#39;.&#39;</span> <span class="token operator">+</span> <span class="token function">base64URLEncode</span><span class="token punctuation">(</span> signature <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="签名key" tabindex="-1"><a class="header-anchor" href="#签名key" aria-hidden="true">#</a> 签名key</h2><h3 id="key简介" tabindex="-1"><a class="header-anchor" href="#key简介" aria-hidden="true">#</a> key简介</h3><p>jwt包含了12个签名算法:3个秘钥算法和9个不对称加密算法.</p><ul><li>HS256: HMAC using SHA-256</li><li>HS384: HMAC using SHA-384</li><li>HS512: HMAC using SHA-512</li><li>ES256: ECDSA using P-256 and SHA-256</li><li>ES384: ECDSA using P-384 and SHA-384</li><li>ES512: ECDSA using P-521 and SHA-512</li><li>RS256: RSASSA-PKCS-v1_5 using SHA-256</li><li>RS384: RSASSA-PKCS-v1_5 using SHA-384</li><li>RS512: RSASSA-PKCS-v1_5 using SHA-512</li><li>PS256: RSASSA-PSS using SHA-256 and MGF1 with SHA-256</li><li>PS384: RSASSA-PSS using SHA-384 and MGF1 with SHA-384</li><li>PS512: RSASSA-PSS using SHA-512 and MGF1 with SHA-512</li></ul><ol><li>HMAC-SHA HS256: HMAC-SHA-256, 长度最少: 256 bits (32 bytes) HS384: HMAC-SHA-384, 长度最少: 384 bits (48 bytes) HS512: HMAC-SHA-512, 长度最少: 512 bits (64 bytes)</li><li>Elliptic ES256: 256 bits (32 bytes) ES384: 384 bits (48 bytes) ES512: 512 bits (64 bytes)</li><li>RSA RS256 and PS256: 建议长度最少2048 bit RS384 and PS384: 建议长度最少3072 bit RS512 and PS512: 建议长度最少4096 bit</li></ol><h3 id="生成安全key" tabindex="-1"><a class="header-anchor" href="#生成安全key" aria-hidden="true">#</a> 生成安全key</h3><ol><li>生成secret key 如果不想自己写key(考虑上面要求的长度, 很烦躁), 可以使用<code>io.jsonwebtoken.security.Keys</code>来生成. 为<code>HS256</code>加密算法生成<code>符合要求</code>的<code>随机</code>的key</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">SecretKey</span> key <span class="token operator">=</span> <span class="token class-name">Keys</span><span class="token punctuation">.</span><span class="token function">secretKeyFor</span><span class="token punctuation">(</span><span class="token class-name">SignatureAlgorithm</span><span class="token punctuation">.</span><span class="token constant">HS256</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用BASE64来保存key</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> secretString <span class="token operator">=</span> <span class="token class-name">Encoders</span><span class="token punctuation">.</span><span class="token constant">BASE64</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">getEncoded</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Asymmetric Keys</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">KeyPair</span> keyPair <span class="token operator">=</span> <span class="token class-name">Keys</span><span class="token punctuation">.</span><span class="token function">keyPairFor</span><span class="token punctuation">(</span><span class="token class-name">SignatureAlgorithm</span><span class="token punctuation">.</span><span class="token constant">RS256</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
keyPair<span class="token punctuation">.</span><span class="token function">getPrivate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//私钥用来创建jws</span>
keyPair<span class="token punctuation">.</span><span class="token function">getPublic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//公钥用来解析和认证jws</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建jws" tabindex="-1"><a class="header-anchor" href="#创建jws" aria-hidden="true">#</a> 创建jws</h2><h3 id="一般过程" tabindex="-1"><a class="header-anchor" href="#一般过程" aria-hidden="true">#</a> 一般过程</h3><ol><li><code>Jwts.builder()</code>创建<code>JwtBuilder</code>实例</li><li>使用<code>JwtBuilder</code>来添加<code>header</code>和<code>claim</code></li><li>指定<code>SecretKey</code>或者<code>PrivateKey</code>来对jwt进行签名</li><li>调用<code>compact()</code>来&quot;挤压&quot;生成结果</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> jws <span class="token operator">=</span> <span class="token class-name">Jwts</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// (1)</span>
    <span class="token punctuation">.</span><span class="token function">setSubject</span><span class="token punctuation">(</span><span class="token string">&quot;Bob&quot;</span><span class="token punctuation">)</span>      <span class="token comment">// (2) </span>
    <span class="token punctuation">.</span><span class="token function">signWith</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>          <span class="token comment">// (3)</span>
    <span class="token punctuation">.</span><span class="token function">compact</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>             <span class="token comment">// (4)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置head" tabindex="-1"><a class="header-anchor" href="#设置head" aria-hidden="true">#</a> 设置head</h3><p>注意不需要设置<code>alg</code>或<code>zip</code>, jwt会自动设置</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> jws <span class="token operator">=</span> <span class="token class-name">Jwts</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setHeaderParam</span><span class="token punctuation">(</span><span class="token string">&quot;kid&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;myKeyId&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置claims" tabindex="-1"><a class="header-anchor" href="#设置claims" aria-hidden="true">#</a> 设置claims</h3><ul><li><code>JwtBuilder</code>提供了快捷方法来设置, 标准的claims的key<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> jws <span class="token operator">=</span> <span class="token class-name">Jwts</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token punctuation">.</span><span class="token function">setIssuer</span><span class="token punctuation">(</span><span class="token string">&quot;me&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setSubject</span><span class="token punctuation">(</span><span class="token string">&quot;Bob&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setAudience</span><span class="token punctuation">(</span><span class="token string">&quot;you&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setExpiration</span><span class="token punctuation">(</span>expiration<span class="token punctuation">)</span> <span class="token comment">//a java.util.Date</span>
    <span class="token punctuation">.</span><span class="token function">setNotBefore</span><span class="token punctuation">(</span>notBefore<span class="token punctuation">)</span> <span class="token comment">//a java.util.Date </span>
    <span class="token punctuation">.</span><span class="token function">setIssuedAt</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// for example, now</span>
    <span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//just an example id</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>也可以自定义<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> jws <span class="token operator">=</span> <span class="token class-name">Jwts</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">claim</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="设置签名" tabindex="-1"><a class="header-anchor" href="#设置签名" aria-hidden="true">#</a> 设置签名</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> jws <span class="token operator">=</span> <span class="token class-name">Jwts</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token comment">// ... etc ...</span>
   <span class="token punctuation">.</span><span class="token function">signWith</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token comment">// &lt;---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获得key的方法</p><ul><li>An encoded byte array</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">SecretKey</span> key <span class="token operator">=</span> <span class="token class-name">Keys</span><span class="token punctuation">.</span><span class="token function">hmacShaKeyFor</span><span class="token punctuation">(</span>encodedKeyBytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Base64-encoded string:</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">SecretKey</span> key <span class="token operator">=</span> <span class="token class-name">Keys</span><span class="token punctuation">.</span><span class="token function">hmacShaKeyFor</span><span class="token punctuation">(</span><span class="token class-name">Decoders</span><span class="token punctuation">.</span><span class="token constant">BASE64</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>secretString<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>A Base64URL-encoded string:</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">SecretKey</span> key <span class="token operator">=</span> <span class="token class-name">Keys</span><span class="token punctuation">.</span><span class="token function">hmacShaKeyFor</span><span class="token punctuation">(</span><span class="token class-name">Decoders</span><span class="token punctuation">.</span><span class="token constant">BASE64URL</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>secretString<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>A raw (non-encoded) string (e.g. a password String):</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">SecretKey</span> key <span class="token operator">=</span> <span class="token class-name">Keys</span><span class="token punctuation">.</span><span class="token function">hmacShaKeyFor</span><span class="token punctuation">(</span>secretString<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="读取jws" tabindex="-1"><a class="header-anchor" href="#读取jws" aria-hidden="true">#</a> 读取jws</h2><h3 id="一般步骤" tabindex="-1"><a class="header-anchor" href="#一般步骤" aria-hidden="true">#</a> 一般步骤</h3><ol><li><code>Jwts.parserBuilder()</code>创建<code>JwtParserBuilder</code>实例</li><li>指定<code>SecretKey</code>或<code>PublicKey</code>来验证JWS的签名</li><li>调用<code>build()</code>创建<code>JwtParser</code></li><li>调用<code>parseClaimsJws(String)</code></li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    jws <span class="token operator">=</span> <span class="token class-name">Jwts</span><span class="token punctuation">.</span><span class="token function">parserBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// (1)</span>
    <span class="token punctuation">.</span><span class="token function">setSigningKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>         <span class="token comment">// (2)</span>
    <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                    <span class="token comment">// (3)</span>
    <span class="token punctuation">.</span><span class="token function">parseClaimsJws</span><span class="token punctuation">(</span>jwsString<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// (4)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="key" tabindex="-1"><a class="header-anchor" href="#key" aria-hidden="true">#</a> key</h3><ul><li>如果签名使用<code>SecretKey</code>, 则需要提供相同的key<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Jwts</span><span class="token punctuation">.</span><span class="token function">parserBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">setSigningKey</span><span class="token punctuation">(</span>secretKey<span class="token punctuation">)</span> <span class="token comment">// &lt;----</span>
<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">parseClaimsJws</span><span class="token punctuation">(</span>jwsString<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>如果签名使用<code>PrivateKey</code>, 则需要提供对应的<code>PublicKey</code>(PrivateKey,虽然也能解密,但是提供出来被人窃取会伪造JWS)</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Jwts</span><span class="token punctuation">.</span><span class="token function">parserBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">setSigningKey</span><span class="token punctuation">(</span>publicKey<span class="token punctuation">)</span> <span class="token comment">// &lt;---- publicKey, not privateKey</span>
  <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">parseClaimsJws</span><span class="token punctuation">(</span>jwsString<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://github.com/jwtk/jjwt</p>`,57);function k(r,v){return t(),e("div",null,[l,i,u,p("more"),d])}const b=a(o,[["render",k],["__file","JWT.html.vue"]]);export{b as default};
