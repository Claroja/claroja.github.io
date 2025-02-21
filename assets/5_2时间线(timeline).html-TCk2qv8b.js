const n=JSON.parse(`{"key":"v-3bc1fa4a","path":"/6%E5%89%8D%E7%AB%AF/2_3svg/svgJS/5_2%E6%97%B6%E9%97%B4%E7%BA%BF(timeline).html","title":"timeline","lang":"zh-CN","frontmatter":{"description":"timeline import { SVG, Timeline} from '@svgdotjs/svg.js' var draw = SVG().addTo('#test').size(300, 300) var rect1 = draw.rect(20, 20).move(150, 140).fill('red') var rect2 = draw.rect(20, 20).move(130, 140).fill('blue') var timeline = new Timeline() rect1.timeline(timeline) rect2.timeline(timeline) rect1.animate(1000, 500, 'absolute').move(0, 140) // start at time 0 of timeline rect2.animate(1000, 500, 'absolute').move(280, 140) // start at time 200 of timeline","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/6%E5%89%8D%E7%AB%AF/2_3svg/svgJS/5_2%E6%97%B6%E9%97%B4%E7%BA%BF(timeline).html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"timeline"}],["meta",{"property":"og:description","content":"timeline import { SVG, Timeline} from '@svgdotjs/svg.js' var draw = SVG().addTo('#test').size(300, 300) var rect1 = draw.rect(20, 20).move(150, 140).fill('red') var rect2 = draw.rect(20, 20).move(130, 140).fill('blue') var timeline = new Timeline() rect1.timeline(timeline) rect2.timeline(timeline) rect1.animate(1000, 500, 'absolute').move(0, 140) // start at time 0 of timeline rect2.animate(1000, 500, 'absolute').move(280, 140) // start at time 200 of timeline"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"timeline\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.99,"words":298},"filePathRelative":"6前端/2_3svg/svgJS/5_2时间线(timeline).md","localizedDate":"2025年2月21日","excerpt":"<h1> timeline</h1>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token constant\\">SVG</span><span class=\\"token punctuation\\">,</span> Timeline<span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'@svgdotjs/svg.js'</span>\\n\\n    <span class=\\"token keyword\\">var</span> draw <span class=\\"token operator\\">=</span> <span class=\\"token constant\\">SVG</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">addTo</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'#test'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">size</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">300</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">300</span><span class=\\"token punctuation\\">)</span>\\n\\n    <span class=\\"token keyword\\">var</span> rect1 <span class=\\"token operator\\">=</span> draw<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">rect</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">20</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">20</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">move</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">150</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">140</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">fill</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'red'</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">var</span> rect2 <span class=\\"token operator\\">=</span> draw<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">rect</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">20</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">20</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">move</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">130</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">140</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">fill</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'blue'</span><span class=\\"token punctuation\\">)</span>\\n\\n    <span class=\\"token keyword\\">var</span> timeline <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Timeline</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n    rect1<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">timeline</span><span class=\\"token punctuation\\">(</span>timeline<span class=\\"token punctuation\\">)</span>\\n    rect2<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">timeline</span><span class=\\"token punctuation\\">(</span>timeline<span class=\\"token punctuation\\">)</span>\\n\\n    rect1<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">animate</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1000</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">500</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'absolute'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">move</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">140</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// start at time 0 of timeline</span>\\n    rect2<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">animate</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1000</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">500</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'absolute'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">move</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">280</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">140</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// start at time 200 of timeline</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
