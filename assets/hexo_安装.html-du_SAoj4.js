import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as t,c as d,a as e,b as n,d as s,e as a}from"./app-XqA98pG8.js";const c={},r=e("h1",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),n(" 安装")],-1),h=e("h2",{id:"安装-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装-1","aria-hidden":"true"},"#"),n(" 安装")],-1),_={start:"3"},u=e("li",null,[n("安装"),e("code",null,"git"),n(", "),e("code",null,"yum install git")],-1),v=e("li",null,[n("下载"),e("code",null,"claroja.github.io"),n("文档")],-1),m=e("code",null,"node.js",-1),x={href:"https://nodejs.org/dist/v14.15.1/",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"hexo-cli",-1),p={href:"https://hexo.io/zh-cn/index.html",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"工程中package.json中的hexo只是指定了版本, 实际调用的还是hexo-cli",-1),g=e("li",null,[n("修改"),e("code",null,"npm"),n("镜像源, 安装"),e("code",null,"claroja.github.io"),n("下的"),e("code",null,"package.json")],-1),k=e("li",null,[n("全局安装"),e("code",null,"live-server")],-1),j=a(`<h2 id="hexo的目录结构" tabindex="-1"><a class="header-anchor" href="#hexo的目录结构" aria-hidden="true">#</a> hexo的目录结构</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── .deploy          #部署文件夹
├── public           #html源码，hexo g生成
├── scaffolds        #模板
├── scripts          #扩展脚本
├── source           #文章源码
|   ├── _drafts      #草稿
|   └── _posts       #文章
├── themes           #主题
|   ├── next         #NexT主题
├── _config.yml      #博客配置
└── package.json     #应用程序数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function N(V,y){const l=o("ExternalLinkIcon");return t(),d("div",null,[r,h,e("ol",_,[u,v,e("li",null,[n("下载"),m,n(", "),e("a",x,[n("官网"),s(l)]),n(", 并配置环境变量")]),e("li",null,[n("安装"),b,n("类似于一个可执行文件, "),e("a",p,[n("官网"),s(l)]),n("看. "),f]),g,k]),j])}const I=i(c,[["render",N],["__file","hexo_安装.html.vue"]]);export{I as default};
