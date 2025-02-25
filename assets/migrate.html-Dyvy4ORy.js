import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as c,c as i,b as e,d as o,e as d,a as n}from"./app-7knaTE3M.js";const l={},s=e("h1",{id:"migrate",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#migrate","aria-hidden":"true"},"#"),o(" migrate")],-1),m=e("p",null,[e("code",null,"db.create_all()"),o("只会在初始化时创建更改表结构, 中途通过模型修改表结构, 他不会起作用.")],-1),_={href:"https://github.com/miguelgrinberg/flask-migrate",target:"_blank",rel:"noopener noreferrer"},g=n('<ol><li>执行<code>flask db init</code> 根目录会创建<code>migrations/</code>文件夹, 用来存储数据变更的信息. 该命令不会创建和更改数据表, 只做初始化操作, 想要更改数据库, 需做2/3两步操作</li></ol><p>该命令只需执行一次, 类似于<code>git init</code></p><ol start="2"><li><p><code>flask db migrate</code> 更改ORM模型后执行, 会在<code>migrations/versions</code>创建修改数据的脚本. 类似于<code>git add ./</code></p></li><li><p><code>flask db upgrade</code> 修改数据表, 类似于<code>git commit</code></p></li></ol>',3);function p(f,h){const t=r("ExternalLinkIcon");return c(),i("div",null,[s,m,e("p",null,[o("使用"),e("a",_,[o("flask-migrate"),d(t)]),o("可以方便管理数据库的更改.")]),g])}const b=a(l,[["render",p],["__file","migrate.html.vue"]]);export{b as default};
