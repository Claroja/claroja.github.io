import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as i,e as s}from"./app-jdLxCr9I.js";const l={},a=s(`<h1 id="段落与换行" tabindex="-1"><a class="header-anchor" href="#段落与换行" aria-hidden="true">#</a> 段落与换行</h1><p>在MD中段落和换行是两个概念:</p><ul><li>段落: 空一行，最终会将空行的上下段落解析为两个<code>&lt;p&gt;</code>标签。</li><li>换行: 在行尾加两个空格，上下两个段落在一个<code>&lt;p&gt;</code>标签内, 而在两个段落中加入了<code>&lt;br&gt;</code>标签</li></ul><p>英文中齐头式(最流行的规范)中要求段落与段落之间空一行, 所以使用MD的段落就对了书写里的段落. 而MD中的换行虽然另开一行但是对应书写中并没有空一行, 是书写中<code>段落中的重开一行</code>, 可以理解为段落中的小段. 比如, 选择题有ABCD选项, 整个题目是一段, ABCD选项就是段落中的小段. 又如在法条的结构中, 某个法条可能有多个款如果款之间也使用MD中段落, 则将款和段落提升到同一层级, 如下:</p><ol><li><p>使用MD段落效果</p><ol><li><p>MD原码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>第十一条　各民族公民都有用本民族语言、文字进行民事诉讼的权利。

在少数民族聚居或者多民族共同居住的地区，人民法院应当用当地民族通用的语言、文字进行审理和发布法律文书。

人民法院应当对不通晓当地民族通用的语言、文字的诉讼参与人提供翻译。

第十二条　人民法院审理民事案件时，当事人有权进行\`辩论\`。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>效果</p><p>第十一条　各民族公民都有用本民族语言、文字进行民事诉讼的权利。</p><p>在少数民族聚居或者多民族共同居住的地区，人民法院应当用当地民族通用的语言、文字进行审理和发布法律文书。</p><p>人民法院应当对不通晓当地民族通用的语言、文字的诉讼参与人提供翻译。</p><p>第十二条　人民法院审理民事案件时，当事人有权进行<code>辩论</code>。</p></li></ol></li><li><p>使用MD的换行</p><ol><li><p>MD原码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>第十一条　各民族公民都有用本民族语言、文字进行民事诉讼的权利。  
在少数民族聚居或者多民族共同居住的地区，人民法院应当用当地民族通用的语言、文字进行审理和发布法律文书。  
人民法院应当对不通晓当地民族通用的语言、文字的诉讼参与人提供翻译。  

第十二条　人民法院审理民事案件时，当事人有权进行\`辩论\`。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>效果</p><p>第十一条　各民族公民都有用本民族语言、文字进行民事诉讼的权利。<br> 在少数民族聚居或者多民族共同居住的地区，人民法院应当用当地民族通用的语言、文字进行审理和发布法律文书。<br> 人民法院应当对不通晓当地民族通用的语言、文字的诉讼参与人提供翻译。</p><p>第十二条　人民法院审理民事案件时，当事人有权进行<code>辩论</code>。</p></li></ol></li></ol><blockquote><p>在HTML中, 使用CSS来实现段落的换行效果:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0.75em<span class="token punctuation">;</span> // 每个段落间隔
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>另外, 段落, 列表, 代码块, 图像连接, 这些块级的内容, 上下都使用空行来间隔</p>`,7),d=[a];function c(t,p){return n(),i("div",null,d)}const u=e(l,[["render",c],["__file","段落与换行.html.vue"]]);export{u as default};
