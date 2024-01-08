import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as p,c as o,a as n,b as s,d as c,e as i}from"./app-YE2Hltoy.js";const l={},u=n("h1",{id:"threejs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#threejs","aria-hidden":"true"},"#"),s(" threejs")],-1),r={href:"https://juejin.cn/post/7020396322062598181",target:"_blank",rel:"noopener noreferrer"},k=i(`<h3 id="threejs三个重要概念" tabindex="-1"><a class="header-anchor" href="#threejs三个重要概念" aria-hidden="true">#</a> ThreeJS三个重要概念</h3><h4 id="camera" tabindex="-1"><a class="header-anchor" href="#camera" aria-hidden="true">#</a> Camera</h4><p>镜头,就是我们的视角</p><h4 id="scene" tabindex="-1"><a class="header-anchor" href="#scene" aria-hidden="true">#</a> Scene</h4><p>场景,场景里可以放物体</p><h4 id="renderer" tabindex="-1"><a class="header-anchor" href="#renderer" aria-hidden="true">#</a> Renderer</h4><p>渲染器,将镜头和场景进行渲染</p><h3 id="官网例子" tabindex="-1"><a class="header-anchor" href="#官网例子" aria-hidden="true">#</a> 官网例子</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> <span class="token constant">THREE</span> <span class="token keyword">from</span> <span class="token string">&#39;three&#39;</span>

<span class="token keyword">let</span> camera<span class="token punctuation">,</span> scene<span class="token punctuation">,</span> renderer<span class="token punctuation">;</span>
<span class="token keyword">let</span> geometry<span class="token punctuation">,</span> material<span class="token punctuation">,</span> mesh<span class="token punctuation">;</span>

<span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//1.创建镜头,就是我们的视角</span>
    camera <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>PerspectiveCamera</span><span class="token punctuation">(</span> <span class="token number">70</span><span class="token punctuation">,</span> window<span class="token punctuation">.</span>innerWidth <span class="token operator">/</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">,</span> <span class="token number">0.01</span><span class="token punctuation">,</span> <span class="token number">10</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    camera<span class="token punctuation">.</span>position<span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token comment">//2.创建场景</span>
    scene <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Scene</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BoxGeometry</span><span class="token punctuation">(</span> <span class="token number">0.2</span><span class="token punctuation">,</span> <span class="token number">0.2</span><span class="token punctuation">,</span> <span class="token number">0.2</span> <span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//创建一个几何结构,只是一个框架</span>
    material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshNormalMaterial</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//创建材料</span>
    mesh <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span> geometry<span class="token punctuation">,</span> material <span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//将材料和几何结构融合</span>
    scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span> mesh <span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//加入场景中</span>
    <span class="token comment">//3.创建渲染器</span>
    renderer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>WebGLRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    renderer<span class="token punctuation">.</span><span class="token function">setSize</span><span class="token punctuation">(</span> window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">,</span> window<span class="token punctuation">.</span>innerHeight <span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//设置渲染器的大小</span>
    <span class="token comment">// renderer.render( scene, camera )</span>
    renderer<span class="token punctuation">.</span><span class="token function">setAnimationLoop</span><span class="token punctuation">(</span> animation <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//设置动画</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span> renderer<span class="token punctuation">.</span>domElement <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//添加到前端页面</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">animation</span><span class="token punctuation">(</span> <span class="token parameter">time</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//随着时间渲染的每一帧</span>
    mesh<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>x <span class="token operator">=</span> time <span class="token operator">/</span> <span class="token number">2000</span><span class="token punctuation">;</span>
    mesh<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>y <span class="token operator">=</span> time <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">;</span>
    renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span> scene<span class="token punctuation">,</span> camera <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function d(m,v){const a=t("ExternalLinkIcon");return p(),o("div",null,[u,n("p",null,[s("参考"),n("a",r,[s("Three.js基础入门（一）"),c(a)])]),k])}const f=e(l,[["render",d],["__file","threejs.html.vue"]]);export{f as default};
