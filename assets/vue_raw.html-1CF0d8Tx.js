import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as l,d as i}from"./app-j3zK2x6_.js";const r={},t=i('<h1 id="raw" tabindex="-1"><a class="header-anchor" href="#raw" aria-hidden="true">#</a> raw</h1><h2 id="vue3-cli" tabindex="-1"><a class="header-anchor" href="#vue3-cli" aria-hidden="true">#</a> vue3-cli</h2><p>toRaw 与 markRaw</p><ul><li>toRaw： <ul><li>作用：将一个由<code>reactive</code>生成的响应式对象转为普通对象。</li><li>使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。</li></ul></li><li>markRaw： <ul><li>作用：标记一个对象，使其永远不会再成为响应式对象。</li><li>应用场景: <ol><li>有些值不应被设置为响应式的，例如复杂的第三方类库等。</li><li>当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。</li></ol></li></ul></li></ul>',4),c=[t];function o(d,n){return a(),l("div",null,c)}const _=e(r,[["render",o],["__file","vue_raw.html.vue"]]);export{_ as default};
