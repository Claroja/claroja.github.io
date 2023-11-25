import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as d,o as r,c as t,a as e,e as a,b as n,d as l}from"./app-j3zK2x6_.js";const o={},c=e("h1",{id:"flowchart",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#flowchart","aria-hidden":"true"},"#"),a(" flowchart")],-1),p=e("h1",{id:"流程图-flowchart",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#流程图-flowchart","aria-hidden":"true"},"#"),a(" 流程图(flowchart)")],-1),u={href:"https://mermaid.js.org/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://mermaid.live/edit",target:"_blank",rel:"noopener noreferrer"},m=l(`<h2 id="流程图介绍" tabindex="-1"><a class="header-anchor" href="#流程图介绍" aria-hidden="true">#</a> 流程图介绍</h2><p>流程图由由节点和连线组成.<br> 使用<code>graph</code>指定流程图类型.<br> 使用<code>L(left)</code>, <code>R(right)</code>, <code>T(top)</code>, <code>B(bottom)</code>指定流程图的方向.</p><ol><li>TB - top to bottom</li><li>BT - bottom to top</li><li>RL - right to left</li><li>LR - left to right</li></ol><h2 id="绘制节点" tabindex="-1"><a class="header-anchor" href="#绘制节点" aria-hidden="true">#</a> 绘制节点</h2><h3 id="绘制一个节点" tabindex="-1"><a class="header-anchor" href="#绘制一个节点" aria-hidden="true">#</a> 绘制一个节点</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>graph LR;
    id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR<span class="token punctuation">;</span>
    id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="给节点添加内容" tabindex="-1"><a class="header-anchor" href="#给节点添加内容" aria-hidden="true">#</a> 给节点添加内容</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>graph LR;
id1[This is the text in the box]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR<span class="token punctuation">;</span>
id1<span class="token text string">[这是一个节点]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更改节点形状" tabindex="-1"><a class="header-anchor" href="#更改节点形状" aria-hidden="true">#</a> 更改节点形状</h3><ol><li><p>圆角矩形(round edges)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>graph LR;
id1(This is the text in the box)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR<span class="token punctuation">;</span>
id1<span class="token text string">(This is the text in the box)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>圆形</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>graph LR;
id1((This is the text in the circle))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR<span class="token punctuation">;</span>
id1<span class="token text string">((This is the text in the circle))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>菱形(rhombus)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>graph LR;
id1{This is the text in the box}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR<span class="token punctuation">;</span>
id1<span class="token text string">{This is the text in the box}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="连线绘制" tabindex="-1"><a class="header-anchor" href="#连线绘制" aria-hidden="true">#</a> 连线绘制</h2><h3 id="连线形状" tabindex="-1"><a class="header-anchor" href="#连线形状" aria-hidden="true">#</a> 连线形状</h3><ol><li><p>箭头直线</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>graph LR;
A--&gt;B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR<span class="token punctuation">;</span>
A<span class="token arrow operator">--&gt;</span>B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>无箭头连线</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>graph LR;
A --- B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR<span class="token punctuation">;</span>
A <span class="token arrow operator">---</span> B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>虚线</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>graph LR;
A-.-&gt;B;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR<span class="token punctuation">;</span>
A<span class="token arrow operator">-.-&gt;</span>B<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>加粗连线</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>graph LR;
A ==&gt; B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR<span class="token punctuation">;</span>
A <span class="token arrow operator">==&gt;</span> B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="连线添加文字" tabindex="-1"><a class="header-anchor" href="#连线添加文字" aria-hidden="true">#</a> 连线添加文字</h3><ol><li><p>箭头文字</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>graph LR;
A--&gt;|This is the text|B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR<span class="token punctuation">;</span>
A<span class="token arrow operator">--&gt;</span><span class="token label property">|This is the text|</span>B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>无箭头直线</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>graph LR;
A---|This is the text|B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR<span class="token punctuation">;</span>
A<span class="token arrow operator">---</span><span class="token label property">|This is the text|</span>B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>虚线文字</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>graph LR;
A-.-|This is the text|B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR<span class="token punctuation">;</span>
A<span class="token arrow operator">-.-</span><span class="token label property">|This is the text|</span>B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>加粗文字</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>graph LR;
A===|This is the text|B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR<span class="token punctuation">;</span>
A<span class="token arrow operator">===</span><span class="token label property">|This is the text|</span>B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="组合" tabindex="-1"><a class="header-anchor" href="#组合" aria-hidden="true">#</a> 组合</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>graph LR;
a --&gt; b &amp; c--&gt; d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR<span class="token punctuation">;</span>
a <span class="token arrow operator">--&gt;</span> b <span class="token operator">&amp;</span> c<span class="token arrow operator">--&gt;</span> d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="控制连线的长度" tabindex="-1"><a class="header-anchor" href="#控制连线的长度" aria-hidden="true">#</a> 控制连线的长度</h2><table><thead><tr><th>Length</th><th>1</th><th>2</th><th>3</th></tr></thead><tbody><tr><td>Normal</td><td>---</td><td>----</td><td>-----</td></tr><tr><td>Normal with arrow</td><td>--&gt;</td><td>---&gt;</td><td>----&gt;</td></tr><tr><td>Thick</td><td>===</td><td>====</td><td>=====</td></tr><tr><td>Thick with arrow</td><td>==&gt;</td><td>===&gt;</td><td>====&gt;</td></tr><tr><td>Dotted</td><td>-.-</td><td>-..-</td><td>-...-</td></tr><tr><td>Dotted with arrow</td><td>-.-&gt;</td><td>-..-&gt;</td><td>-...-&gt;</td></tr></tbody></table><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>graph LR;
    A[Start] --&gt; B{Is it?}
    B -- Yes --&gt; C[OK]
    C --&gt; D[Rethink]
    D --&gt; B
    B -- No ----&gt; E[End]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR<span class="token punctuation">;</span>
    A<span class="token text string">[Start]</span> <span class="token arrow operator">--&gt;</span> B<span class="token text string">{Is it?}</span>
    B <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">Yes</span> <span class="token arrow operator">--&gt;</span></span> C<span class="token text string">[OK]</span>
    C <span class="token arrow operator">--&gt;</span> D<span class="token text string">[Rethink]</span>
    D <span class="token arrow operator">--&gt;</span> B
    B <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">No</span> <span class="token arrow operator">----&gt;</span></span> E<span class="token text string">[End]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="子图" tabindex="-1"><a class="header-anchor" href="#子图" aria-hidden="true">#</a> 子图</h2><p>通过<code>subgraph</code>定义子图<br> 子图也可以当成一个节点</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>graph LR;
    c1--&gt;a2
    subgraph one
    a1--&gt;a2
    end
    subgraph two
    b1--&gt;b2
    end
    subgraph three
    c1--&gt;c2
    end
    one --&gt; two
    three --&gt; two
    two --&gt; c2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code>
<span class="token keyword">graph</span> LR<span class="token punctuation">;</span>
    c1<span class="token arrow operator">--&gt;</span>a2
    <span class="token keyword">subgraph</span> one
    a1<span class="token arrow operator">--&gt;</span>a2
    <span class="token keyword">end</span>
    <span class="token keyword">subgraph</span> two
    b1<span class="token arrow operator">--&gt;</span>b2
    <span class="token keyword">end</span>
    <span class="token keyword">subgraph</span> three
    c1<span class="token arrow operator">--&gt;</span>c2
    <span class="token keyword">end</span>
    one <span class="token arrow operator">--&gt;</span> two
    three <span class="token arrow operator">--&gt;</span> two
    two <span class="token arrow operator">--&gt;</span> c2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改样式" tabindex="-1"><a class="header-anchor" href="#修改样式" aria-hidden="true">#</a> 修改样式</h2><ol><li><p>给单个节点添加样式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>graph LR;
    id1(Start)--&gt;id2(Stop)
    style id1 fill:#f9f,stroke:#333,stroke-width:4px
    style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code>
<span class="token keyword">graph</span> LR<span class="token punctuation">;</span>
    id1<span class="token text string">(Start)</span><span class="token arrow operator">--&gt;</span>id2<span class="token text string">(Stop)</span>
    <span class="token keyword">style</span> id1 <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f9f<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>4px</span>
    <span class="token keyword">style</span> id2 <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#bbf<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#f66<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>2px<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#fff<span class="token punctuation">,</span><span class="token property">stroke-dasharray</span><span class="token operator">:</span> 5 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>定义样式类</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>graph LR;
    A:::someclass --&gt; B
    classDef someclass fill:#f96
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code>
<span class="token keyword">graph</span> LR<span class="token punctuation">;</span>
    A<span class="token operator">:::</span>someclass <span class="token arrow operator">--&gt;</span> B
    <span class="token keyword">classDef</span> someclass <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f96</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><p>使用<code>%%</code>进行注释</p><p>参考:</p><ul><li>https://www.diagrams.net/blog/mermaid-diagrams</li><li>https://mermaid.js.org/syntax/flowchart.html</li></ul><h2 id="翻译" tabindex="-1"><a class="header-anchor" href="#翻译" aria-hidden="true">#</a> 翻译</h2><ul><li>nodes: 节点</li><li>edges: 连线</li><li>flowchart: 流程图</li></ul>`,36);function h(g,b){const s=d("ExternalLinkIcon");return r(),t("div",null,[c,p,e("p",null,[a("使用"),e("a",u,[a("mermaid"),n(s)]),a("的优势是比较迅速的作图, 缺点不能控制图形的位置. 可以"),e("a",v,[a("在线制作"),n(s)])]),m])}const w=i(o,[["render",h],["__file","mermaid_flowchart.html.vue"]]);export{w as default};
