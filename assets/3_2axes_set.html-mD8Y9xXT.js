import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as p,c as e,b as s,d as a,e as l,a as r}from"./app-7knaTE3M.js";const c={},i=s("h1",{id:"axex-set",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#axex-set","aria-hidden":"true"},"#"),a(" axex_set")],-1),k=s("h2",{id:"最佳实践",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#最佳实践","aria-hidden":"true"},"#"),a(" 最佳实践")],-1),u=s("p",null,"Axes.set的参数, 都对应了set_xxx()方法, 比如Axes.set(xlabel=)等价于Axes.set_xlabel(), 当然也对应有Axes.get_xlabel()方法",-1),d={id:"参数",tabindex:"-1"},v=s("a",{class:"header-anchor",href:"#参数","aria-hidden":"true"},"#",-1),m={href:"https://matplotlib.org/stable/api/_as_gen/matplotlib.axes.Axes.set.html",target:"_blank",rel:"noopener noreferrer"},b=r(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Axes<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span>
    <span class="token operator">*</span><span class="token punctuation">,</span> 
    adjustable<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span>                         <span class="token comment"># </span>
    agg_filter<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    alpha<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span>                              <span class="token comment"># scalar or None, 透明度</span>
    anchor<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    animated<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    aspect<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    autoscale_on<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    autoscalex_on<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    autoscaley_on<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    axes_locator<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    axisbelow<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    box_aspect<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span>                         <span class="token comment"># float or None, axes的高宽比</span>
    clip_box<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    clip_on<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    clip_path<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    facecolor<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span>                          <span class="token comment"># color, axes的背景颜色</span>
    figure<span class="token operator">=</span><span class="token punctuation">,</span>                                    <span class="token comment"># Figure, 设置figrue</span>
    forward_navigation_events<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    frame_on<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    gid<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    in_layout<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    label<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span>                              <span class="token comment"># object, 在legend中展示的label</span>
    mouseover<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    navigate<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    path_effects<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    picker<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    position<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    prop_cycle<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    rasterization_zorder<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    rasterized<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    sketch_params<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    snap<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    subplotspec<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    title<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span>                              <span class="token comment"># str, 设置标题</span>
    transform<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    url<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span>                                <span class="token comment"># str. 设置超链接</span>
    visible<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span>                            <span class="token comment"># bool. 是否可见</span>
    xbound<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span>                             <span class="token comment"># (lower: float, upper: float). x轴范围</span>
    xlabel<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span>                             <span class="token comment"># str. x轴名称</span>
    xlim<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span>                               <span class="token comment"># (left: float, right: float). x轴刻度范围</span>
    xmargin<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    xscale<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span>                             <span class="token comment"># {&quot;linear&quot;, &quot;log&quot;, &quot;symlog&quot;, &quot;logit&quot;, ...} or ScaleBase. x轴缩放</span>
    xticklabels<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span>                        <span class="token comment"># sequence of str or of Texts. x轴刻度名</span>
    xticks<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span>                             <span class="token comment"># 1D array-like. x轴刻度(显示哪些刻度)</span>
    ybound<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    ylabel<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    ylim<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    ymargin<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    yscale<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    yticklabels<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    yticks<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
    zorder<span class="token operator">=</span><span class="token operator">&lt;</span>UNSET<span class="token operator">&gt;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function g(N,_){const n=o("ExternalLinkIcon");return p(),e("div",null,[i,k,u,s("h2",d,[v,a(),s("a",m,[a("参数"),l(n)])]),b])}const T=t(c,[["render",g],["__file","3_2axes_set.html.vue"]]);export{T as default};
