import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as l,c as e,a as s,b as a,e as t}from"./app-A10JnHE0.js";const i={},o=s("h2",{id:"实战",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#实战","aria-hidden":"true"},"#"),a(" 实战")],-1),p=s("p",null,"主要用在观察连续变量的分布:",-1),c=s("ol",null,[s("li",null,"连续变量必须密度图才能展示,"),s("li",null,"如果想要通过pandas直接观察, 则要先将连续变量进行分箱")],-1),r=s("p",null,[a("默认等宽分箱的过程是"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mfrac",null,[s("mrow",null,[s("mtext",null,"最大值"),s("mo",null,"−"),s("mtext",null,"最小值")]),s("mrow",null,[s("mi",null,"b"),s("mi",null,"i"),s("mi",null,"n"),s("mi",null,"s")])])]),s("annotation",{encoding:"application/x-tex"},"\\frac{最大值-最小值}{bins}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.2173em","vertical-align":"-0.345em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8723em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"bin"),s("span",{class:"mord mathnormal mtight"},"s")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord cjk_fallback mtight"},"最大值"),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord cjk_fallback mtight"},"最小值")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])]),a(", 然后将对应的值, 替换成箱子的名字, 箱子的名字默认是区间.")],-1),d=t(`<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pandas<span class="token punctuation">.</span>cut<span class="token punctuation">(</span>
    x<span class="token punctuation">,</span>                      <span class="token comment"># array-like, 一维数据</span>
    bins<span class="token punctuation">,</span>                   <span class="token comment"># int, sequence of scalars, or IntervalIndex,   </span>
    right<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>             <span class="token comment"># bool, 右闭区间</span>
    labels<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>            <span class="token comment"># array or False, 箱的名字</span>
    retbins<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>          <span class="token comment"># bool, 是否返回bin</span>
    precision<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span>            <span class="token comment"># int, 箱名字的精度</span>
    include_lowest<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>   <span class="token comment"># bool,</span>
    duplicates<span class="token operator">=</span><span class="token string">&#39;raise&#39;</span><span class="token punctuation">,</span>     <span class="token comment"># optional, {‘raise’, ‘drop’}</span>
    ordered<span class="token operator">=</span><span class="token boolean">True</span>            <span class="token comment"># bool</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>x ： 一维数组（对应前边例子中提到的销售业绩）</p></li><li><p>bins ：整数，标量序列或者间隔索引，是进行分组的依据，</p><ol><li>如果填入整数n，则表示将x中的数值分成等宽的n份（即每一组内的最大值与最小值之差约相等）；</li><li>如果是标量序列，序列中的数值表示用来分档的分界值</li><li>如果是间隔索引，&#39;bins&#39;的间隔索引必须不重叠</li></ol></li><li><p>labels : 数组或布尔值，可选.指定分箱的标签</p><ol><li>如果是数组，长度要与分箱个数一致，比如&#39;bins=[1、2、3、4]&#39;表示（1,2]，（2,3],（3,4]一共3个区间，则labels的长度也就是标签的个数也要是3</li><li>如果为False，则仅返回分箱的整数指示符，即x中的数据在第几个箱子里</li><li>当bins是间隔索引时，将忽略此参数</li></ol></li></ol><h3 id="返回" tabindex="-1"><a class="header-anchor" href="#返回" aria-hidden="true">#</a> 返回</h3><ol><li><p>out: Categorical, Series, or ndarray</p><p>根据label有不同的返回</p><ol><li>label=None, 返回Series, 元素是间隔(interval)类型</li><li>sequence of scalars,</li><li>label=False, 返回包含整型的数组ndarray</li></ol></li><li><p>bins:</p></li></ol><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://pandas.pydata.org/pandas-docs/stable/user_guide/reshaping.html#reshaping-tile-cut</li><li>https://zhuanlan.zhihu.com/p/143589729</li></ol>`,8),m=[o,p,c,r,d];function u(h,b){return l(),e("div",null,m)}const g=n(i,[["render",u],["__file","cut.html.vue"]]);export{g as default};
