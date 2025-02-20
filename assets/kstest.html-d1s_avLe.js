import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as r,a as d}from"./app-9tftCahk.js";const s={},a=d('<h1 id="kstest" tabindex="-1"><a class="header-anchor" href="#kstest" aria-hidden="true">#</a> kstest</h1><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>rvs</td><td>待检验的一组一维数据</td></tr><tr><td>cdf</td><td>检验方法，例如&#39;norm&#39;，&#39;expon&#39;，&#39;rayleigh&#39;，&#39;gamma&#39;，这里我们设置为&#39;norm&#39;，即正态性检验</td></tr><tr><td>alternative</td><td>默认为双尾检验，可以设置为&#39;less&#39;或&#39;greater&#39;作单尾检验</td></tr><tr><td>model</td><td>&#39;approx&#39;(默认)，使用检验统计量的精确分布的近视值</td></tr><tr><td>&#39;asymp&#39;</td><td>使用检验统计量的渐进分布</td></tr></tbody></table><p>#其中rvs可以是数组、生成数组的函数或者scipy.stats里面理论分布的名字 #cdf可以与rvs一致。若rvs和cdf同是数组，则是比较两数组的分布是否一致；一个是数组，另一个是理论分布的名字，则是看样本是否否和理论分布 #args是一个元组，当rvs或者cds是理论分布时，这个参数用来存储理论分布的参数，如正态分布的mean和std。</p>',3),o=[a];function c(n,h){return e(),r("div",null,o)}const _=t(s,[["render",c],["__file","kstest.html.vue"]]);export{_ as default};
