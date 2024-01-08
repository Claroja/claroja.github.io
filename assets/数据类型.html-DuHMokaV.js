import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as a,e}from"./app-YE2Hltoy.js";const r={},h=e('<h1 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h1><h2 id="数据类型-1" tabindex="-1"><a class="header-anchor" href="#数据类型-1" aria-hidden="true">#</a> 数据类型</h2><h3 id="数值型" tabindex="-1"><a class="header-anchor" href="#数值型" aria-hidden="true">#</a> 数值型</h3><ol><li><p>整型 类型|大小|描述 --|--|-- TINYINT(Length)|1字节|适用于存储分类，比如性别等，范围：-128<sub>127，或者0</sub>255（无符号） INT(Length)|4字节|范围：-2 147 483 648~2 147 483 647，或者0~4 294 967 295（无符号） BIGINT(Length)|8字节|</p></li><li><p>浮点型 类型|大小|描述 --|--|-- FLOAT(Length, Decimals)|4字节|具有浮动小数点的较小的数 DOUBLE(Length, Decimals)|8字节|具有浮动小数点的较大的数</p></li></ol><p>2.int(LENGTH) 无论是int(3), int(6), 都可以显示6位以上的整数。但是，当数字不足3位或6位时，前面会用0补齐(使用zerofill)。</p><h3 id="字符型" tabindex="-1"><a class="header-anchor" href="#字符型" aria-hidden="true">#</a> 字符型</h3><table><thead><tr><th>类型</th><th>大小</th><th>描述</th></tr></thead><tbody><tr><td>CAHR(Length)</td><td>Length字节</td><td>定长字段。相较varchar，查询快，可能造成存储浪费，适用于固定长度字符，比如手机号，长度为0~255个字符</td></tr><tr><td>VARCHAR(Length)</td><td>String长度+1字节或String长度+2字节</td><td>变长字段。相较char，查询慢，只存储容量的规定上限，节省空间，长度为0~65 535个字符</td></tr><tr><td>TEXT</td><td>String长度+2字节</td><td>字符串，适用于存储文章，最大长度为65 535个字符</td></tr></tbody></table><p>1）char(LENGTH) 与 varchar(LENGTH) 如果超出(LENGTH)则会进行裁剪 2）char 不可变，查询效率高，可能造成存储浪费 varchar 可变，查询效率不如char，节省空间 3）char和varchar必须制定length</p><h3 id="时间型" tabindex="-1"><a class="header-anchor" href="#时间型" aria-hidden="true">#</a> 时间型</h3><table><thead><tr><th>类型</th><th>大小</th><th>描述</th></tr></thead><tbody><tr><td>DATE</td><td>3字节</td><td>采用YYYY-MM-DD格式</td></tr><tr><td>DATETIME</td><td>8字节</td><td>采用YYYY-MM-DD HH:MM:SS格式</td></tr><tr><td>TIMESTAMP</td><td>4字节</td><td>采用YYYYMMDDHHMMSS格式；可接受的范围终止于2037年</td></tr></tbody></table>',10),n=[h];function i(c,o){return d(),a("div",null,n)}const _=t(r,[["render",i],["__file","数据类型.html.vue"]]);export{_ as default};
