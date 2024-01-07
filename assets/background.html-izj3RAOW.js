import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e as t}from"./app-SnI5rGHA.js";const p={},o=t(`<h1 id="background" tabindex="-1"><a class="header-anchor" href="#background" aria-hidden="true">#</a> background</h1><p>背景属性可以设置背景颜色、背景图片、背景平铺、背景图片位置、背景图像固定等。</p><ul><li>background-color: 元素的背景颜色, 默认是<code>transparent</code>(透明), 例子<code>background-color: transparent;</code></li><li>background-image: 元素的背景图片, 例子<code>background-image: url(images/logo.png);</code>(url函数中不能添加引号)</li><li>background-repeat: 显示的方式, 默认是<code>no-repeat</code>,例子<code>background-repeat: repeat-x;</code>沿x轴平铺</li><li>background-position: 图片在背景中的位置:</li></ul><ol><li>参数是方位名词, 如<code>background-position: center top;</code> 如果指定的两个值都是方位名词，则两个值前后顺序无关，比如 left top 和 top left 效果一致 如果只指定了一个方位名词，另一个值省略，则第二个值默认居中对齐</li><li>参数是精确单位, 如<code>background-position: 20px 50px;</code> 如果参数值是精确坐标，那么第一个肯定是 x 坐标，第二个一定是 y 坐标 如果只指定一个数值，那该数值一定是 x 坐标，另一个默认垂直居中</li></ol><ul><li>background-attachment: 固定背景图片, 不随着滚动轴, 滚动</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>超大背景图片<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">body</span> <span class="token punctuation">{</span>
            <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>images/bg.jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
            <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
            <span class="token property">background-position</span><span class="token punctuation">:</span> center top<span class="token punctuation">;</span>
            <span class="token property">background-attachment</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>这里多复制p标签, 将scrollroll搞出来<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[o];function e(l,u){return a(),s("div",null,c)}const d=n(p,[["render",e],["__file","background.html.vue"]]);export{d as default};
