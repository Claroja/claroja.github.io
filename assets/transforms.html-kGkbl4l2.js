import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as n,c as a,a as s,b as t,d as l}from"./app-A10JnHE0.js";const i={},c=s("h1",{id:"transforms",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#transforms","aria-hidden":"true"},"#"),t(" transforms")],-1),h=s("h2",{id:"transforms-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#transforms-1","aria-hidden":"true"},"#"),t(" transforms")],-1),m=s("p",null,[t("可以使用"),s("code",null,"transforms.Compose"),t("将不同的"),s("code",null,"transformations"),t("组成链式结构.")],-1),_={href:"https://pytorch.org/vision/stable/transforms.html?highlight=transforms#conversion-transforms",target:"_blank",rel:"noopener noreferrer"},d=s("p",null,"transformations可以 应用于单个tensor images也可以用于batches tensor images.",-1),f=s("ol",null,[s("li",null,[t("单个 tensor的形状是"),s("code",null,"(C, H, W)"),t(", C: channel个个数, H: height高度, W: width宽度")]),s("li",null,[t("batches tensor的形状是"),s("code",null,"(B, C, H, W)"),t(", B: batch, 一个batch的大小(有多少张图片)")])],-1),p=s("p",null,"Randomized transformations对同一个batch的图片会做相同的转换. 常用的转换方法,",-1),u=s("p",null,"参考:https://pytorch.org/vision/stable/auto_examples/plot_transforms.html#randomperspective 参考:https://pytorch.org/vision/stable/auto_examples/plot_scripted_tensor_transforms.html#sphx-glr-auto-examples-plot-scripted-tensor-transforms-py",-1);function b(g,x){const o=r("ExternalLinkIcon");return n(),a("div",null,[c,h,m,s("p",null,[t("绝大多数transformations适用于PIL images和tensor images, 也有些只对其中一个格式有效, 这个时候可以使用"),s("a",_,[t("Conversion Transforms"),l(o)]),t("来进行转换.")]),d,f,p,u])}const k=e(i,[["render",b],["__file","transforms.html.vue"]]);export{k as default};
