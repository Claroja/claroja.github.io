import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as e,a}from"./app-7knaTE3M.js";const i={},o=a('<h1 id="第二章数据处理" tabindex="-1"><a class="header-anchor" href="#第二章数据处理" aria-hidden="true">#</a> 第二章数据处理</h1><h2 id="连接" tabindex="-1"><a class="header-anchor" href="#连接" aria-hidden="true">#</a> 连接</h2><ol><li>横向连接 <ol><li>内连接(Inner join)</li><li>外连接(Outer join) <ol><li>左连接(Left join)</li><li>右连接(Right join)</li><li>全连接(Full join)</li></ol></li></ol></li></ol><h2 id="数据清洗" tabindex="-1"><a class="header-anchor" href="#数据清洗" aria-hidden="true">#</a> 数据清洗</h2><ol><li>重复值处理</li></ol><h3 id="缺失值处理" tabindex="-1"><a class="header-anchor" href="#缺失值处理" aria-hidden="true">#</a> 缺失值处理</h3><ol><li>少于20%时, <code>连续变量</code>使用<code>均值或中位数</code>填补; <code>分类变量</code>不需要填补,<code>单算一类</code>即可, 或可以用<code>众数</code>填补</li><li>大于20%小于80%时, 填补方法同上, 同时给缺失值<code>生成一个指示哑变量</code>, 参与后续的建模</li><li>多于80%时, 给缺失值<code>生成一个指示哑变量</code>, 参与后续的建模, 原始变量不再使用</li></ol><h3 id="哑变量" tabindex="-1"><a class="header-anchor" href="#哑变量" aria-hidden="true">#</a> 哑变量</h3><table><thead><tr><th>不完整数据</th><th>填补后的变量</th><th>缺失值的指示哑变量</th></tr></thead><tbody><tr><td>1</td><td>1</td><td>0</td></tr><tr><td>2</td><td>2</td><td>0</td></tr><tr><td>*</td><td>2</td><td>1</td></tr><tr><td>1</td><td>1</td><td>0</td></tr></tbody></table>',9),r=[o];function l(h,c){return d(),e("div",null,r)}const _=t(i,[["render",l],["__file","2数据处理.html.vue"]]);export{_ as default};
