import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as t,a as r}from"./app-7knaTE3M.js";const l={},o=r('<h1 id="lstmlm" tabindex="-1"><a class="header-anchor" href="#lstmlm" aria-hidden="true">#</a> lstmlm</h1><p>实现参考rnnlm 可以优化的三个方向:</p><h2 id="多层化" tabindex="-1"><a class="header-anchor" href="#多层化" aria-hidden="true">#</a> 多层化</h2><p>加深LSTM层数,提高精度.</p><h2 id="dropout抑制过拟合" tabindex="-1"><a class="header-anchor" href="#dropout抑制过拟合" aria-hidden="true">#</a> Dropout抑制过拟合</h2><p>抑制过拟合的方法:</p><ol><li>增加训练数据</li><li>降低模型的复杂度, 添加dropout(不能再时间方向上添加, 而在深度方向上添加)</li><li>给与正则化惩罚</li></ol>',7),i=[o];function d(s,n){return a(),t("div",null,i)}const m=e(l,[["render",d],["__file","lstmlm.html.vue"]]);export{m as default};
