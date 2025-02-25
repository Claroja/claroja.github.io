import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as r,c as i,b as e,d as o,e as d,a as l}from"./app-7knaTE3M.js";const n={},s=l('<h1 id="柱状图-bar" tabindex="-1"><a class="header-anchor" href="#柱状图-bar" aria-hidden="true">#</a> 柱状图(bar)</h1><h2 id="设置图形类型" tabindex="-1"><a class="header-anchor" href="#设置图形类型" aria-hidden="true">#</a> 设置图形类型</h2><ol><li>类型: <code>type = &#39;bar&#39;</code>, 类型<code>string</code></li></ol><h2 id="序列与legend" tabindex="-1"><a class="header-anchor" href="#序列与legend" aria-hidden="true">#</a> 序列与legend</h2><ol start="2"><li>名称: <code>name</code>, 类型<code>string</code>, 用于<code>legend</code>的图例筛选</li><li>悬停在legend上时变色: <code>legendHoverLink = true</code>, 类型<code>boolean</code></li></ol><h2 id="柱条样式设置" tabindex="-1"><a class="header-anchor" href="#柱条样式设置" aria-hidden="true">#</a> 柱条样式设置</h2>',6),h=e("li",null,[e("p",null,"柱条背景"),e("ol",null,[e("li",null,[o("每个柱条显示背景: "),e("code",null,"showBackground"),o(", 类型"),e("code",null,"boolean")]),e("li",null,[o("每个柱条的背景样式: "),e("code",null,"backgroundStyle")])])],-1),_=e("p",null,"柱条样式",-1),u=e("li",null,[o("取色策略: "),e("code",null,"colorBy = 'series'"),o(", 可选"),e("code",null,"series"),o("(每个系列相同颜色), "),e("code",null,"data"),o("(每个数据项相同颜色)")],-1),b=e("code",null,"itemStyle",-1),p={href:"https://echarts.apache.org/zh/option.html#series-bar.itemStyle",target:"_blank",rel:"noopener noreferrer"},f=l("<li>柱条的宽度，不设时自适应: <code>barWidth</code></li><li>柱条的最大宽度: <code>barMaxWidth</code></li><li>柱条的最小宽度: <code>barMinWidth</code></li><li>柱条最小高度: <code>barMinHeight</code></li><li>不同系列的柱间距离: <code>barGap</code></li><li>同一系列的柱间距离: <code>barCategoryGap</code></li>",6),m=e("p",null,"柱条标签",-1),g=e("code",null,"label",-1),x={href:"https://echarts.apache.org/zh/option.html#series-bar.label",target:"_blank",rel:"noopener noreferrer"},k=l('<h2 id="堆叠柱状图" tabindex="-1"><a class="header-anchor" href="#堆叠柱状图" aria-hidden="true">#</a> 堆叠柱状图</h2><p>默认多个序列, 会横向依次展示, 使用<code>stack = &#39;total&#39;</code>, 可以将相同的X轴坐标的不同系列堆叠展示</p><p>✨echarts的API文档中并没有详细说明<code>stack</code>的参数都有哪些</p><h2 id="数据映射" tabindex="-1"><a class="header-anchor" href="#数据映射" aria-hidden="true">#</a> 数据映射</h2><ol start="17"><li>维度映射到X轴, Y轴或tooltips: <code>encode</code>.</li><li>数据项: <code>data</code>. <code>dataset</code>优先级高</li></ol><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><ol start="16"><li>定义每个维度的信息: <code>dimensions</code>. 优先级高于<code>dataset.dimensions</code>和<code>dataset.source</code>第一行给出的维度信息</li><li>行作为维度, 还是列作为维度: <code>seriesLayoutBy</code>, 可选<code>column</code>(列作为维度), <code>row</code>(行作为维度)</li><li>该系列的: tooltip</li></ol><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://echarts.apache.org/zh/option.html</li></ol>',9);function y(B,v){const a=c("ExternalLinkIcon");return r(),i("div",null,[s,e("ol",null,[h,e("li",null,[_,e("ol",null,[u,e("li",null,[o("每个柱条的样式:"),b,o(", "),e("a",p,[o("参考官网"),d(a)])]),f])]),e("li",null,[m,e("ol",null,[e("li",null,[o("每个柱条显示标签: "),g,o(", "),e("a",x,[o("参考官网"),d(a)])])])])]),k])}const S=t(n,[["render",y],["__file","柱状图(bar).html.vue"]]);export{S as default};
