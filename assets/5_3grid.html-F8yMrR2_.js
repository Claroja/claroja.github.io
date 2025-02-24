import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o,c as r,a as n,b as e,d as s,e as t}from"./app-A10JnHE0.js";const d={},c=t(`<h1 id="grid" tabindex="-1"><a class="header-anchor" href="#grid" aria-hidden="true">#</a> grid</h1><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><p>https://www.zhangxinxu.com/wordpress/2018/11/display-grid-css-css3/comment-page-1/</p><ol><li>容器设置网格布局并指定名称 <ol><li>grid-template-rows: 创建行</li><li>grid-template-columns: 创建列(grid track)</li><li>grid-template-areas:</li></ol></li><li>子项使用class直接占用网格</li><li>设置网格内容对齐: place-items, place-self</li><li>设置网格自身对齐: align-content, justify-content</li></ol><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;html&gt;
    &lt;head&gt;
        &lt;style&gt;
        .container {
        display: grid;
        grid-template-columns: auto auto;
        }
        
        .container &gt; div {
            border: 1px solid black;
        }
        &lt;/style&gt;
    &lt;/head&gt;
    
    &lt;body&gt;

        &lt;div class=&quot;container&quot;&gt;
        &lt;div&gt;1&lt;/div&gt;
        &lt;div&gt;2&lt;/div&gt;
        &lt;div&gt;3&lt;/div&gt;  
        &lt;div&gt;4&lt;/div&gt;
        &lt;/div&gt;

    &lt;/body&gt;
&lt;/html&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="grid-1" tabindex="-1"><a class="header-anchor" href="#grid-1" aria-hidden="true">#</a> grid</h2><p>grid是画好了框, 然后将元素填入指定框中</p>`,7),p={id:"网格轨道-grid-track",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#网格轨道-grid-track","aria-hidden":"true"},"#",-1),_={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_tracks",target:"_blank",rel:"noopener noreferrer"},g=t("<ol><li><p>grid-template-rows: 创建行</p></li><li><p>grid-template-columns: 创建列(grid track)</p><ol><li>200px 200px 200px: 3列, 每列宽200px</li><li>1fr 1fr 1fr: 3列, 每列宽等分</li><li>500px 1fr 2fr: 3列, 第一列宽500px, 剩余两列平分剩余宽度</li><li>repeat(3, 1fr): 3列, 每列宽等分</li><li>500px repeat(2, 1fr): 3列, 第一列宽500px, 剩余两列平分剩余宽度</li><li>repeat(2, 100px 2fr): 4列, 前两列宽100px, 后两列平分剩余宽度</li></ol></li><li><p>grid-auto-rows: 当子项个数超过grid-template-columns设置的值时, 会自动增加行. 该值设置自动增加行的高度.</p><ol><li>200px: 行高200px</li><li>minmax(100px, auto): 行高最小100px, 最大自动设置</li></ol></li></ol>",1),h={id:"网格线-grid-lines",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#网格线-grid-lines","aria-hidden":"true"},"#",-1),v={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_lines",target:"_blank",rel:"noopener noreferrer"},b=t("<p>概念:</p><ol><li>如果有n行, 则有n+1个行线, 序号从线上到下</li><li>如果有m列, 则有m+1个列线, 序号从左到右排</li></ol><p>多格选择:</p><ol><li>grid-row: 1 / 3; 取行线1~行线3中的2行, 等价下面详细的写法 <ol><li>grid-row-start: 1;元素开始行线</li><li>grid-row-end: 3; 元素结束行线</li></ol></li><li>grid-column: 1 / 4; 取列线1~列线4中的3列, 等价下面的详细写法 <ol><li>grid-column-start: 1; 元素开始列线</li><li>grid-column-end: 4; 元素结束列线</li></ol></li></ol><p>单格选择:</p><ol><li>grid-column: 1; 取第一行, 默认跟了grid-column-end: 2, 等价下面的详细写法:</li><li>grid-column-start: 1;</li></ol>",6),k={id:"网格单元-grid-cells",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#网格单元-grid-cells","aria-hidden":"true"},"#",-1),S={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_cells",target:"_blank",rel:"noopener noreferrer"},x=n("p",null,"默认每个元素会占据一个网格单元",-1),y={id:"网格区域-grid-areas",tabindex:"-1"},C=n("a",{class:"header-anchor",href:"#网格区域-grid-areas","aria-hidden":"true"},"#",-1),q={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_areas",target:"_blank",rel:"noopener noreferrer"},w=n("p",null,"通过网格线, 一个元素可以占据多个网格单元, 这样的多个网格单元被称为网格区域",-1),z={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement",target:"_blank",rel:"noopener noreferrer"},B=n("ol",null,[n("li",null,"grid-row-start: 1"),n("li",null,"grid-column-start: 1"),n("li",null,"grid-row-end: 3"),n("li",null,"grid-column-end: 4")],-1),U={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Grid_template_areas",target:"_blank",rel:"noopener noreferrer"},W=t(`<p>在规划网格时, 每个网格都用区域名称填充, 子元素就可以使用class来直接引用网格名</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>.wrapper {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-template-areas:
        &quot;hd hd hd hd   hd   hd   hd   hd   hd&quot;
        &quot;sd sd sd main main main main main main&quot;
        &quot;.  .  .  ft   ft   ft   ft   ft   ft&quot;;
}

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sidebar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Sidebar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),j={id:"沟槽-gutters",tabindex:"-1"},G=n("a",{class:"header-anchor",href:"#沟槽-gutters","aria-hidden":"true"},"#",-1),N={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#gutters",target:"_blank",rel:"noopener noreferrer"},V=n("p",null,"行与行, 列与列之间的间距",-1),E=n("ol",null,[n("li",null,[e("gap: 20px 1em; 行间距20px, 列间距1em. 等价下面的详细写法: "),n("ol",null,[n("li",null,"row-gap: 20px; 行与行之间的间距"),n("li",null,"column-gap: 1em; 列与列之间的间距")])])],-1),I={id:"嵌套网格-nesting-grids",tabindex:"-1"},L=n("a",{class:"header-anchor",href:"#嵌套网格-nesting-grids","aria-hidden":"true"},"#",-1),F={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#nesting_grids",target:"_blank",rel:"noopener noreferrer"},H=n("ol",null,[n("li",null,[e("display: grid; "),n("ol",null,[n("li",null,"grid-template-columns: repeat(3, 1fr); 子网格是重新创建的"),n("li",null,"grid-template-columns: subgrid; 子网格是继承父网格, 没有重新创建")])])],-1),O={id:"网格覆盖-overlapping",tabindex:"-1"},T=n("a",{class:"header-anchor",href:"#网格覆盖-overlapping","aria-hidden":"true"},"#",-1),A={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#layering_items_with_z-index",target:"_blank",rel:"noopener noreferrer"},D=n("p",null,"默认序号排后的网格会覆盖序号靠前的网格, 可以使用z-index来控制",-1),J=n("h2",{id:"网格内容对齐-box-alignment",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#网格内容对齐-box-alignment","aria-hidden":"true"},"#"),e(" 网格内容对齐(Box alignment)")],-1),K=n("p",null,"网格有两个轴: 纵轴(block/column axis)和横轴(inline/row axis)",-1),M={id:"纵轴对齐",tabindex:"-1"},P=n("a",{class:"header-anchor",href:"#纵轴对齐","aria-hidden":"true"},"#",-1),Q={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout#aligning_items_on_the_block_axis",target:"_blank",rel:"noopener noreferrer"},R=n("p",null,"纵轴对齐是指在纵轴上移动, 也就是上对齐, 下对齐, 垂直居中.",-1),X=n("ol",null,[n("li",null,"align-items: 容器设置, 对所有子项生效"),n("li",null,"align-self: 子项设置, 仅对该子项生效"),n("li",null,[e("二者可用属性有: "),n("ol",null,[n("li",null,"stretch: 伸展"),n("li",null,"center: 垂直居中"),n("li",null,"start: 上对齐"),n("li",null,"end: 下对齐")])])],-1),Y={id:"横轴对齐",tabindex:"-1"},Z=n("a",{class:"header-anchor",href:"#横轴对齐","aria-hidden":"true"},"#",-1),$={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout#justifying_items_on_the_inline_axis",target:"_blank",rel:"noopener noreferrer"},nn=t('<ol><li>justify-items: 容器设置, 对所有子项生效</li><li>justify-self: 子项设置, 对该子项生效 <ol><li>stretch: 伸展</li><li>center: 水平居中</li><li>start: 左对齐</li><li>end: 右对齐</li></ol></li></ol><h3 id="快捷设置" tabindex="-1"><a class="header-anchor" href="#快捷设置" aria-hidden="true">#</a> 快捷设置</h3><ol><li>place-items: align-items justify-items;</li><li>place-self: align-self justify-self;</li></ol><h2 id="网格自身对齐-content-alignment" tabindex="-1"><a class="header-anchor" href="#网格自身对齐-content-alignment" aria-hidden="true">#</a> 网格自身对齐(Content alignment)</h2><p>如果容器分配的网格, 没有占据所有容器空间, 则可是使用</p><ol><li>align-content在纵轴上对齐</li><li>justify-content在横轴上对齐</li><li>place-content同时在纵轴或横轴上对齐</li></ol>',6),en={id:"纵轴对齐-1",tabindex:"-1"},an=n("a",{class:"header-anchor",href:"#纵轴对齐-1","aria-hidden":"true"},"#",-1),sn={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout#aligning_the_grid_tracks_on_the_block_axis",target:"_blank",rel:"noopener noreferrer"},tn=n("p",null,"align-content:",-1),ln=n("ol",null,[n("li",null,"start: 上对齐"),n("li",null,"end: 下对齐"),n("li",null,"center: 中对齐"),n("li",null,"space-between: 端对齐"),n("li",null,"space-around: 空白对齐1"),n("li",null,"space-evenly: 空白对齐2")],-1),on={id:"横轴对齐-1",tabindex:"-1"},rn=n("a",{class:"header-anchor",href:"#横轴对齐-1","aria-hidden":"true"},"#",-1),dn={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout#justifying_the_grid_tracks_on_the_inline_axis",target:"_blank",rel:"noopener noreferrer"},cn=t('<p>justify-content:</p><ol><li>start: 左对齐</li><li>end: 右对齐</li><li>center: 中对齐</li><li>space-between: 端对齐</li><li>space-around: 空白对齐1</li><li>space-evenly: 空白对齐2</li></ol><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ul><li>https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout</li><li>https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout</li></ul>',4);function pn(un,_n){const a=i("ExternalLinkIcon");return o(),r("div",null,[c,n("h3",p,[u,e(),n("a",_,[e("网格轨道(grid track)"),s(a)])]),g,n("h3",h,[m,e(),n("a",v,[e("网格线(grid lines)"),s(a)])]),b,n("h3",k,[f,e(),n("a",S,[e("网格单元(Grid cells)"),s(a)])]),x,n("h3",y,[C,e(),n("a",q,[e("网格区域(Grid areas)"),s(a)])]),w,n("ol",null,[n("li",null,[n("p",null,[n("a",z,[e("grid-area: 1 / 1 / 3 / 4"),s(a)])]),B]),n("li",null,[n("p",null,[n("a",U,[e("给区域命名"),s(a)])]),W])]),n("h3",j,[G,e(),n("a",N,[e("沟槽(Gutters)"),s(a)])]),V,E,n("h3",I,[L,e(),n("a",F,[e("嵌套网格(Nesting grids)"),s(a)])]),H,n("h3",O,[T,e(),n("a",A,[e("网格覆盖(Overlapping)"),s(a)])]),D,J,K,n("h3",M,[P,e(),n("a",Q,[e("纵轴对齐"),s(a)])]),R,X,n("h3",Y,[Z,e(),n("a",$,[e("横轴对齐"),s(a)])]),nn,n("h3",en,[an,e(),n("a",sn,[e("纵轴对齐"),s(a)])]),tn,ln,n("h3",on,[rn,e(),n("a",dn,[e("横轴对齐"),s(a)])]),cn])}const mn=l(d,[["render",pn],["__file","5_3grid.html.vue"]]);export{mn as default};
