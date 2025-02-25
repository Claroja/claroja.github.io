import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-7knaTE3M.js";const o={},p=t(`<h1 id="position" tabindex="-1"><a class="header-anchor" href="#position" aria-hidden="true">#</a> position</h1><p>为什么使用定位, 标准流或浮动都无法实现:</p><ol><li>某个元素可以自由的在一个盒子内移动位置，并且压住其他盒子.</li><li>当我们滚动窗口的时候，盒子是固定屏幕某个位置的。</li></ol><p>总结:</p><ol><li>浮动可以让多个块级盒子一行没有缝隙排列显示， 经常用于横向排列盒子。</li><li>定位则是可以让盒子自由的在某个盒子内移动位置或者固定屏幕中某个位置，并且可以压住其他盒子。</li></ol><p>定义:</p><p>定位 = 定位模式 + 边偏移</p><ol><li><p><strong>定位模式</strong>用于指定一个元素在文档中的定位方式。</p><p>在 CSS 中，通过 <code>position</code> 属性定义元素的<strong>定位模式</strong>，语法如下：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">选择器</span> <span class="token punctuation">{</span> 
    <span class="token property">position</span><span class="token punctuation">:</span> 属性值<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>属性值有四个:</p><table><thead><tr><th>值</th><th>语义</th></tr></thead><tbody><tr><td><code>static</code> <strong>静态</strong>定位</td><td>几乎不用, 标准流特性摆放位置,</td></tr><tr><td><code>relative</code> <strong>相对</strong>定位</td><td>相对于原来的位置</td></tr><tr><td><code>absolute</code> <strong>绝对</strong>定位</td><td>相对于祖先元素</td></tr><tr><td><code>fixed</code> <strong>固定</strong>定位</td><td>相对于浏览器窗口</td></tr></tbody></table></li><li><p><strong>边偏移</strong>则决定了该元素的最终位置。</p><p><strong>边偏移</strong> 就是定位的盒子移动到最终位置。有 top、bottom、left 和 right 4 个属性。</p><table><thead><tr><th>边偏移属性</th><th style="text-align:left;">示例</th><th>描述</th></tr></thead><tbody><tr><td><code>top</code></td><td style="text-align:left;"><code>top: 80px</code></td><td><strong>顶端</strong>偏移量，定义元素相对于其父元素<strong>上边线的距离</strong>。</td></tr><tr><td><code>bottom</code></td><td style="text-align:left;"><code>bottom: 80px</code></td><td><strong>底部</strong>偏移量，定义元素相对于其父元素<strong>下边线的距离</strong>。</td></tr><tr><td><code>left</code></td><td style="text-align:left;"><code>left: 80px</code></td><td><strong>左侧</strong>偏移量，定义元素相对于其父元素<strong>左边线的距离</strong>。</td></tr><tr><td><code>right</code></td><td style="text-align:left;"><code>right: 80px</code></td><td><strong>右侧</strong>偏移量，定义元素相对于其父元素<strong>右边线的距离</strong></td></tr></tbody></table></li></ol><h2 id="定位-position-的拓展" tabindex="-1"><a class="header-anchor" href="#定位-position-的拓展" aria-hidden="true">#</a> 定位(position)的拓展</h2><h3 id="绝对定位的盒子居中" tabindex="-1"><a class="header-anchor" href="#绝对定位的盒子居中" aria-hidden="true">#</a> 绝对定位的盒子居中</h3><p><strong>注意</strong>：加了<strong>绝对定位/固定定位的盒子</strong>不能通过设置 <code>margin: auto</code> 设置<strong>水平居中</strong>。 但是可以通过以下计算方法实现水平和垂直居中，可以按照下图的方法：</p><ol><li><code>left: 50%;</code>：让<strong>盒子的左侧</strong>移动到<strong>父级元素的水平中心位置</strong>；</li><li><code>margin-left: -100px;</code>：让盒子<strong>向左</strong>移动<strong>自身宽度的一半</strong>。</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>绝对定位水平垂直居中<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.box</span> <span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token comment">/* 1. left 走 50%  父容器宽度的一半 */</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token comment">/* 2. margin 负值 往左边走 自己盒子宽度的一半 */</span>
            <span class="token property">margin-left</span><span class="token punctuation">:</span> -100px<span class="token punctuation">;</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token property">margin-top</span><span class="token punctuation">:</span> -100px<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
            <span class="token comment">/* margin: auto; */</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定位特殊特性" tabindex="-1"><a class="header-anchor" href="#定位特殊特性" aria-hidden="true">#</a> 定位特殊特性</h3><p>绝对定位和固定定位也和浮动类似。</p><ol><li>行内元素添加绝对或者固定定位，可以直接设置高度和宽度。</li><li>块级元素添加绝对或者固定定位，如果不给宽度或者高度，默认大小是内容的大小。</li></ol><p>前面我们讲过，display 是 显示模式， 可以改变显示模式有以下方式:</p><ul><li>可以用inline-block 转换为行内块</li><li>可以用浮动 float 默认转换为行内块（类似，并不完全一样，因为浮动是脱标的）</li><li>绝对定位和固定定位也和浮动类似， 默认转换的特性 转换为行内块。 所以说， 一个行内的盒子，如果加了<strong>浮动</strong>、<strong>固定定位</strong>和<strong>绝对定位</strong>，不用转换，就可以给这个盒子直接设置宽度和高度等。</li></ul><h3 id="脱标的盒子不会触发外边距塌陷" tabindex="-1"><a class="header-anchor" href="#脱标的盒子不会触发外边距塌陷" aria-hidden="true">#</a> 脱标的盒子不会触发外边距塌陷</h3><p>浮动元素、<strong>绝对定位(固定定位）<strong>元素的都不会触发外边距合并的问题。 （我们以前是用padding border overflow解决的） 也就是说，我们给盒子改为了浮动或者定位，就不会有垂直</strong>外边距合并的问题</strong>了。</p><h3 id="绝对定位-固定定位-会完全压住盒子" tabindex="-1"><a class="header-anchor" href="#绝对定位-固定定位-会完全压住盒子" aria-hidden="true">#</a> 绝对定位（固定定位）会完全压住盒子</h3><p>浮动元素不同，只会压住它下面标准流的盒子，但是不会压住下面标准流盒子里面的文字（图片） 但是绝对定位（固定定位） 会压住下面标准流所有的内容。 浮动之所以不会压住文字，因为浮动产生的目的最初是为了做文字环绕效果的。 文字会围绕浮动元素</p>`,22),e=[p];function l(c,i){return s(),a("div",null,e)}const u=n(o,[["render",l],["__file","4_3_0定位流(position).html.vue"]]);export{u as default};
