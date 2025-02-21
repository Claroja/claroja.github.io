const e=JSON.parse('{"key":"v-3f2a226d","path":"/15%E5%BD%B1%E8%A7%86/manim/%E5%9F%BA%E7%A1%80/manim.html","title":"singlabelClassification","lang":"zh-CN","frontmatter":{"description":"singlabelClassification 基本使用 在manim中主要的概念有三个: scene场景, 所有的数学对象都在场景中展示 mobject数学对象, 比如circle圆圈, line线等 animation动画, 下面的代码演示了了Create动画 from manim import * class CreateCircle(Scene): # 创建的对象要继承`Scene` def construct(self): # 在`construct(self)`方法中创建动画. circle = Circle() # 创建一个圆 circle.set_fill(PINK, opacity=0.5) # 设置圆的属性 self.add(circle) # 将circle添加到scene中 # self.play(Create(circle)) # 渲染创建圆的动画","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/15%E5%BD%B1%E8%A7%86/manim/%E5%9F%BA%E7%A1%80/manim.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"singlabelClassification"}],["meta",{"property":"og:description","content":"singlabelClassification 基本使用 在manim中主要的概念有三个: scene场景, 所有的数学对象都在场景中展示 mobject数学对象, 比如circle圆圈, line线等 animation动画, 下面的代码演示了了Create动画 from manim import * class CreateCircle(Scene): # 创建的对象要继承`Scene` def construct(self): # 在`construct(self)`方法中创建动画. circle = Circle() # 创建一个圆 circle.set_fill(PINK, opacity=0.5) # 设置圆的属性 self.add(circle) # 将circle添加到scene中 # self.play(Create(circle)) # 渲染创建圆的动画"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"singlabelClassification"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"singlabelClassification\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[]},{"level":2,"title":"mobject","slug":"mobject","link":"#mobject","children":[{"level":3,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[]},{"level":3,"title":"mobject常用方法","slug":"mobject常用方法","link":"#mobject常用方法","children":[]}]},{"level":2,"title":"animation","slug":"animation","link":"#animation","children":[{"level":3,"title":"全局的动画","slug":"全局的动画","link":"#全局的动画","children":[]},{"level":3,"title":"mobject本身的animate","slug":"mobject本身的animate","link":"#mobject本身的animate","children":[]}]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":3.04,"words":912},"filePathRelative":"15影视/manim/基础/manim.md","localizedDate":"2025年2月21日","excerpt":"<h1> singlabelClassification</h1>\\n<h2> 基本使用</h2>\\n<p>在<code>manim</code>中主要的概念有三个:</p>\\n<ol>\\n<li>scene场景, 所有的数学对象都在场景中展示</li>\\n<li>mobject数学对象, 比如circle圆圈, line线等</li>\\n<li>animation动画, 下面的代码演示了了<code>Create</code>动画</li>\\n</ol>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">from</span> manim <span class=\\"token keyword\\">import</span> <span class=\\"token operator\\">*</span>\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">CreateCircle</span><span class=\\"token punctuation\\">(</span>Scene<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>  <span class=\\"token comment\\"># 创建的对象要继承`Scene`</span>\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">construct</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>  <span class=\\"token comment\\"># 在`construct(self)`方法中创建动画.</span>\\n        circle <span class=\\"token operator\\">=</span> Circle<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 创建一个圆</span>\\n        circle<span class=\\"token punctuation\\">.</span>set_fill<span class=\\"token punctuation\\">(</span>PINK<span class=\\"token punctuation\\">,</span> opacity<span class=\\"token operator\\">=</span><span class=\\"token number\\">0.5</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 设置圆的属性</span>\\n        self<span class=\\"token punctuation\\">.</span>add<span class=\\"token punctuation\\">(</span>circle<span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 将circle添加到scene中</span>\\n        <span class=\\"token comment\\"># self.play(Create(circle))  # 渲染创建圆的动画</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
