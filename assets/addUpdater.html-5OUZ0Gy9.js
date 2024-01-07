const a=JSON.parse('{"key":"v-4127c196","path":"/%E5%BD%B1%E9%9F%B3%E5%88%B6%E4%BD%9C/manim/mobject/addUpdater.html","title":"addUpdater","lang":"zh-CN","frontmatter":{"description":"addUpdater add_updater每一帧来更新对象, 结合become方法可以做出多种动画效果, 比如manim_animations_MoveAlongPath from manim import * class NextToUpdater(Scene): def construct(self): dot = Dot(RIGHT*3) # 点(3,0)位置 label = DecimalNumber() # 小数对象 label.add_updater(lambda x: x.set_value(dot.get_center()[0]).next_to(dot)) # 每一帧获得点的位置, 赋予小数对象 self.add(dot, label) self.play(Rotating(dot, about_point=ORIGIN, angle=TAU, run_time=TAU, rate_func=linear))","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E5%BD%B1%E9%9F%B3%E5%88%B6%E4%BD%9C/manim/mobject/addUpdater.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"addUpdater"}],["meta",{"property":"og:description","content":"addUpdater add_updater每一帧来更新对象, 结合become方法可以做出多种动画效果, 比如manim_animations_MoveAlongPath from manim import * class NextToUpdater(Scene): def construct(self): dot = Dot(RIGHT*3) # 点(3,0)位置 label = DecimalNumber() # 小数对象 label.add_updater(lambda x: x.set_value(dot.get_center()[0]).next_to(dot)) # 每一帧获得点的位置, 赋予小数对象 self.add(dot, label) self.play(Rotating(dot, about_point=ORIGIN, angle=TAU, run_time=TAU, rate_func=linear))"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-07T05:43:48.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"addUpdater"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2024-01-07T05:43:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"addUpdater\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2024-01-07T05:43:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1704606228000,"updatedTime":1704606228000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.65,"words":196},"filePathRelative":"影音制作/manim/mobject/addUpdater.md","localizedDate":"2024年1月7日","excerpt":"<h1> addUpdater</h1>\\n<p><code>add_updater</code>每一帧来更新对象, 结合<code>become</code>方法可以做出多种动画效果, 比如<a href=\\"/manim_animations_MoveAlongPath/\\" target=\\"blank\\">manim_animations_MoveAlongPath</a></p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">from</span> manim <span class=\\"token keyword\\">import</span> <span class=\\"token operator\\">*</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">NextToUpdater</span><span class=\\"token punctuation\\">(</span>Scene<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">construct</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        dot <span class=\\"token operator\\">=</span> Dot<span class=\\"token punctuation\\">(</span>RIGHT<span class=\\"token operator\\">*</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 点(3,0)位置</span>\\n        label <span class=\\"token operator\\">=</span> DecimalNumber<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 小数对象</span>\\n        label<span class=\\"token punctuation\\">.</span>add_updater<span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">lambda</span> x<span class=\\"token punctuation\\">:</span> x<span class=\\"token punctuation\\">.</span>set_value<span class=\\"token punctuation\\">(</span>dot<span class=\\"token punctuation\\">.</span>get_center<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>next_to<span class=\\"token punctuation\\">(</span>dot<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 每一帧获得点的位置, 赋予小数对象</span>\\n\\n        self<span class=\\"token punctuation\\">.</span>add<span class=\\"token punctuation\\">(</span>dot<span class=\\"token punctuation\\">,</span> label<span class=\\"token punctuation\\">)</span>\\n        self<span class=\\"token punctuation\\">.</span>play<span class=\\"token punctuation\\">(</span>Rotating<span class=\\"token punctuation\\">(</span>dot<span class=\\"token punctuation\\">,</span> about_point<span class=\\"token operator\\">=</span>ORIGIN<span class=\\"token punctuation\\">,</span> angle<span class=\\"token operator\\">=</span>TAU<span class=\\"token punctuation\\">,</span> run_time<span class=\\"token operator\\">=</span>TAU<span class=\\"token punctuation\\">,</span> rate_func<span class=\\"token operator\\">=</span>linear<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{a as data};
