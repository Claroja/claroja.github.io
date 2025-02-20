import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as l,a as o}from"./app-9tftCahk.js";const t={},a=o('<h1 id="特征编码" tabindex="-1"><a class="header-anchor" href="#特征编码" aria-hidden="true">#</a> 特征编码</h1><h2 id="编码方法" tabindex="-1"><a class="header-anchor" href="#编码方法" aria-hidden="true">#</a> 编码方法</h2><ol><li>无监督 <ol><li>Ordinal</li><li>OneHot</li><li>Binary</li><li>Count</li><li>Hashing</li></ol></li><li>有监督 <ol><li>Target</li><li>LeaveOneOut</li><li>CatBoost</li><li>WOE</li></ol></li></ol><h1 id="_3-3特征编码-规范" tabindex="-1"><a class="header-anchor" href="#_3-3特征编码-规范" aria-hidden="true">#</a> 3_3特征编码_规范</h1><p>适用下划线树结构的命名方式, 如:</p><ol><li>原始变量名为<code>Age</code></li><li>经过分箱后命名为<code>Age_cut</code><ol><li>分箱后, 进行顺序编码, 命名为<code>Age_cut_ord</code></li><li>分箱后, 进行独热编码, 命名为<code>Age_cut_OH</code></li></ol></li><li>经过标准化命名为<code>Age_norm</code></li></ol><p>✨为什么不考虑使用MultiIndex多重索引, 比如lv0索引是<code>Age</code>, lv1索引是<code>cut</code>. 因为这样比较麻烦</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.LabelEncoder.html</li><li>https://scikit-learn.org/stable/modules/preprocessing.html#preprocessing</li><li>https://github.com/scikit-learn-contrib/category_encoders</li><li>https://kantschants.com/complete-guide-to-encoding-categorical-features#heading-ordinal-categorical-features</li><li>https://contrib.scikit-learn.org/category_encoders/</li><li>https://kantschants.com/data-complete-guide</li><li>https://towardsdatascience.com/one-hot-encoding-is-making-your-tree-based-ensembles-worse-heres-why-d64b282b5769</li></ol>',9),c=[a];function r(s,d){return i(),l("div",null,c)}const _=e(t,[["render",r],["__file","3_0_0特征编码.html.vue"]]);export{_ as default};
