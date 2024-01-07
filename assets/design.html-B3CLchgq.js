import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as r,c as s,a as n,b as e,d as i,e as c}from"./app-SnI5rGHA.js";const d={},l=c(`<h1 id="design" tabindex="-1"><a class="header-anchor" href="#design" aria-hidden="true">#</a> design</h1><p>offline: feature engineering representation learning</p><p>online:</p><p><code>Candidate retrieval</code> is a fast—but coarse—step to narrow down millions of items into hundreds of candidates(e.g., from millions to hundreds, a 99.99% reduction). Most contemporary retrieval methods:</p><pre><code>- APPROXIMATE NEAREST NEIGHBORS
- graphs (DoorDash) 
- decision trees (LinkedIn)
</code></pre><p><code>Ranking</code> is a slower—but more precise—step to score and rank top candidates. Such features include item and user data, and contextual information. We can also use more sophisticated models with more layers and parameters.</p><pre><code>- learning-to-rank 
- classification task
- deep learning
    - final output layer is either a softmax over a catalog of items
    - a sigmoid predicting the likelihood of user interaction (e.g., click, purchase) for each user-item pair.
</code></pre>`,7),p={href:"https://zhuanlan.zhihu.com/p/454511736",target:"_blank",rel:"noopener noreferrer"};function m(h,u){const o=t("ExternalLinkIcon");return r(),s("div",null,[l,n("p",null,[e("refs: https://eugeneyan.com/writing/system-design-for-discovery/ "),n("a",p,[e("APPROXIMATE NEAREST NEIGHBORS"),i(o)]),e(" https://upcommons.upc.edu/bitstream/handle/2099.1/16121/85330.pdf?sequence=1&isAllowed=y")])])}const _=a(d,[["render",m],["__file","design.html.vue"]]);export{_ as default};
