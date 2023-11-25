import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,d as t}from"./app-j3zK2x6_.js";const p={},e=t(`<h1 id="boxmodel" tabindex="-1"><a class="header-anchor" href="#boxmodel" aria-hidden="true">#</a> boxModel</h1><p>盒子模型：把 HTML 页面中的布局元素看作是一个矩形的盒子，也就是一个盛装内容的容器。它包括：<strong>边框</strong>、<strong>外边距</strong>、<strong>内边距</strong>、和 <strong>实际内容</strong></p><h2 id="边框" tabindex="-1"><a class="header-anchor" href="#边框" aria-hidden="true">#</a> 边框</h2><p>border可以设置元素的边框。边框有三部分组成：边框宽度(粗细)/边框样式/边框颜色</p><h3 id="border属性" tabindex="-1"><a class="header-anchor" href="#border属性" aria-hidden="true">#</a> border属性</h3><p>语法：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token property">border</span> <span class="token punctuation">:</span> border-width || border-style || border-color<span class="token punctuation">;</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>border-style 可以设置如下值： - none：没有边框即忽略所有边框的宽度（默认值） - solid：边框为单实线(最为常用的) - dashed：边框为虚线<br> - dotted：边框为点线</p><p>例子: 一般写法</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>分开写法</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>  <span class="token comment">/* 只设定上边框， 其余同理 */</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="border-collapse属性" tabindex="-1"><a class="header-anchor" href="#border-collapse属性" aria-hidden="true">#</a> border-collapse属性</h3><p>border-collapse它控制相邻单元格的边框, 是否合并. 语法</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">border-collapse</span><span class="token punctuation">:</span>collapse<span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>表示相邻边框合并在一起</p><h2 id="内边距" tabindex="-1"><a class="header-anchor" href="#内边距" aria-hidden="true">#</a> 内边距</h2><h3 id="padding" tabindex="-1"><a class="header-anchor" href="#padding" aria-hidden="true">#</a> padding</h3><p>padding 属性用于设置内边距，即边框与内容之间的距离。 语法: 一般写法:</p><table><thead><tr><th>值个数</th><th>含义</th></tr></thead><tbody><tr><td>1个,<code>padding: 5px;</code></td><td>上下左右</td></tr><tr><td>2个,<code>padding: 5px 10px;</code></td><td>上下 和 左右</td></tr><tr><td>3个,<code>padding: 5px 10px 20px;</code></td><td>上 左右 下</td></tr><tr><td>4个,<code>padding: 5px 10px 20px 30px;</code></td><td>上 右 下 左</td></tr><tr><td>分开写法:</td><td></td></tr><tr><td>属性</td><td>描述</td></tr><tr><td>--</td><td>--</td></tr><tr><td>padding-left</td><td></td></tr><tr><td>padding-right</td><td></td></tr><tr><td>padding-top</td><td></td></tr><tr><td>padding-bottom</td><td></td></tr></tbody></table><p>注意:</p><ol><li>当我们给盒子指定 padding 值之后，发生了 2 件事情： <ol><li>内容和边框有了距离，添加了内边距。</li><li>padding影响了盒子实际大小。</li></ol></li><li>内边距对盒子大小的影响： <ul><li>如果盒子已经有了宽度和高度，此时再指定内边框，会撑大盒子。</li><li>如何盒子本身没有指定width/height属性, 则此时padding不会撑开盒子大小。</li></ul></li></ol><h2 id="外边距" tabindex="-1"><a class="header-anchor" href="#外边距" aria-hidden="true">#</a> 外边距</h2><h3 id="margin属性" tabindex="-1"><a class="header-anchor" href="#margin属性" aria-hidden="true">#</a> margin属性</h3><p>margin 属性用于设置外边距，即控制盒子和盒子之间的距离。 语法: 参考<code>padding</code>属性</p><h3 id="外边距合并" tabindex="-1"><a class="header-anchor" href="#外边距合并" aria-hidden="true">#</a> 外边距合并</h3><p>使用 margin 定义块元素的垂直外边距时，可能会出现外边距的合并。 主要有两种情况:</p><ol><li><p>相邻块元素垂直外边距的合并 当上下相邻的两个块元素（兄弟关系）相遇时，如果上面的元素有下外边距 margin-bottom，下面的元素有上外边距 margin-top ，则他们之间的垂直间距不是 margin-bottom 与 margin-top 之和。取两个值中的较大者这种现象被称为相邻块元素垂直外边距的合并。 解决方案： 尽量只给一个盒子添加 margin 值。</p></li><li><p>嵌套块元素垂直外边距的塌陷 对于两个嵌套关系（父子关系）的块元素，父元素有上外边距同时子元素也有上外边距，此时父元素会塌陷较大的外边距值。 解决方案：</p></li></ol><ul><li>可以为父元素定义上边框。</li><li>可以为父元素定义上内边距。</li><li>可以为父元素添加 overflow:hidden。</li></ul><p>下例中, 父亲元素的<code>margin-top</code>塌陷为子的<code>200px</code></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>外边距合并-嵌套块级元素垂直外边距塌陷<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.father</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>
            <span class="token property">margin-top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
            <span class="token comment">/* border: 1px solid transparent; */</span>
            <span class="token comment">/* padding: 1px; */</span>
            <span class="token comment">/* overflow: hidden; */</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.son</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
            <span class="token property">margin-top</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>father<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>son<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="块级元素水平居中" tabindex="-1"><a class="header-anchor" href="#块级元素水平居中" aria-hidden="true">#</a> 块级元素水平居中</h3><p>外边距可以让块级盒子水平居中的两个条件：</p><ul><li>盒子必须指定了宽度（width）。</li><li>盒子左右的外边距都设置为 auto 。</li></ul><p>常见的写法，以下三种都可以：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">margin-left</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>   <span class="token property">margin-right</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：以上方法是让块级元素水平居中，行内元素或者行内块元素水平居中给其父元素添加 text-align:center 即可。</p><h3 id="清除内外边距" tabindex="-1"><a class="header-anchor" href="#清除内外边距" aria-hidden="true">#</a> 清除内外边距</h3><p>网页元素很多都带有默认的内外边距，而且不同浏览器默认的也不一致。因此我们在布局前，首先要清除下网页元素的内外边距。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token selector">*</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>   <span class="token comment">/* 清除内边距 */</span>
    <span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>    <span class="token comment">/* 清除外边距 */</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40),o=[e];function l(c,i){return a(),s("div",null,o)}const u=n(p,[["render",l],["__file","css_boxModel.html.vue"]]);export{u as default};
