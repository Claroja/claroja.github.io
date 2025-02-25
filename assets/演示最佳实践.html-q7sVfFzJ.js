import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,a as i}from"./app-7knaTE3M.js";const l={},o=i(`<h1 id="演示最佳实践" tabindex="-1"><a class="header-anchor" href="#演示最佳实践" aria-hidden="true">#</a> 演示最佳实践</h1><h2 id="目的" tabindex="-1"><a class="header-anchor" href="#目的" aria-hidden="true">#</a> 目的</h2><p>单页的汇报文档书写与展示</p><h2 id="写作时的配置" tabindex="-1"><a class="header-anchor" href="#写作时的配置" aria-hidden="true">#</a> 写作时的配置</h2><ol><li><p>使用<code>markdownPreviewEnhanced</code>保存时生成<code>.html</code>. 需要在文章头加上:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">export_on_save</span><span class="token punctuation">:</span>
    <span class="token key atrule">html</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用<code>live-server</code>查看实时渲染的<code>html</code>效果</p></li></ol><h2 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求</h2><ol><li>能放大指定区域</li><li>在指定区域进行标注(箭头, 文字, 方框等)</li><li>将标注后的图片保存</li></ol><h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤" aria-hidden="true">#</a> 操作步骤</h2><ol><li>zoomit放大指定区域 <ol><li><code>alt + z</code>放大需要讲解的区域</li><li>注意此时不能点击鼠标左键, 因为会进入zoomit的<code>draw</code>模式</li><li>zoomit只保留<code>alt + z</code>, 其余快捷键一律禁用</li></ol></li><li>pixpin截图 <ol><li><code>ctrl + e</code> 截图</li><li><code>alt + 1,2,3</code> 调用不同工具</li></ol></li></ol><p>注意:</p><ol><li>在步骤1中, 使用zoomit放大工具, 而不是pixpin贴图后放大, 是因为pixpin方法后会模糊</li></ol>`,11),s=[o];function d(t,c){return a(),n("div",null,s)}const h=e(l,[["render",d],["__file","演示最佳实践.html.vue"]]);export{h as default};
