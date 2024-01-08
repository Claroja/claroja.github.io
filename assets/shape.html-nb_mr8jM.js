import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as c,c as o,a as n,b as s,d as u,e as a}from"./app-YE2Hltoy.js";const i={},l=a(`<h1 id="shape" tabindex="-1"><a class="header-anchor" href="#shape" aria-hidden="true">#</a> shape</h1><h2 id="更改形状1-shape-view" tabindex="-1"><a class="header-anchor" href="#更改形状1-shape-view" aria-hidden="true">#</a> 更改形状1: shape(view)</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>z <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>


z<span class="token punctuation">.</span>shape
<span class="token comment">## torch.Size([2, 4])</span>

z<span class="token punctuation">.</span>reshape<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># 将z变成 1维, 行自动计算</span>
<span class="token comment">## tensor([1, 2, 3, 4, 5, 6, 7, 8])</span>

z<span class="token punctuation">.</span>reshape<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># 将z变成2维, ?行1列, 行自动计算</span>
<span class="token comment">## tensor([[1],</span>
<span class="token comment">##         [2],</span>
<span class="token comment">##         [3],</span>
<span class="token comment">##         [4],</span>
<span class="token comment">##         [5],</span>
<span class="token comment">##         [6],</span>
<span class="token comment">##         [7],</span>
<span class="token comment">##         [8]])</span>
z<span class="token punctuation">.</span>reshape<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment"># 将z变成2维, ?行2列, 行自动计算</span>
<span class="token comment">## tensor([[1, 2],</span>
<span class="token comment">##         [3, 4],</span>
<span class="token comment">##         [5, 6],</span>
<span class="token comment">##         [7, 8]])</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),r={href:"https://blog.csdn.net/Flag_ing/article/details/109129752",target:"_blank",rel:"noopener noreferrer"},k=a(`<h2 id="更改形状2-squeeze和unsqueeze" tabindex="-1"><a class="header-anchor" href="#更改形状2-squeeze和unsqueeze" aria-hidden="true">#</a> 更改形状2: squeeze和unsqueeze</h2><h3 id="增加维度" tabindex="-1"><a class="header-anchor" href="#增加维度" aria-hidden="true">#</a> 增加维度</h3><p>torch.unsqueeze()对应了np.expand_dims()</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

x<span class="token punctuation">.</span>shape  <span class="token comment"># 1dim</span>

y <span class="token operator">=</span> torch<span class="token punctuation">.</span>unsqueeze<span class="token punctuation">(</span>x<span class="token punctuation">,</span>axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment"># array([[1, 2, 3]])</span>
y<span class="token punctuation">.</span>shape  <span class="token comment"># (1,3) 2dim, 在原有的1dim左边添加一个维度</span>

z <span class="token operator">=</span> torch<span class="token punctuation">.</span>unsqueeze<span class="token punctuation">(</span>x<span class="token punctuation">,</span>axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">## tensor([[1],</span>
<span class="token comment">##        [2],</span>
<span class="token comment">##        [3]])</span>
z<span class="token punctuation">.</span>shape  <span class="token comment"># (3, 1) 2dim, 在原有的1dim右边边添加一个维度</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="减少维度" tabindex="-1"><a class="header-anchor" href="#减少维度" aria-hidden="true">#</a> 减少维度</h3><p>torch.squeeze()对应了np.squeeze()</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
x<span class="token punctuation">.</span>shape  <span class="token comment"># (1, 3, 1)</span>
y <span class="token operator">=</span> torch<span class="token punctuation">.</span>squeeze<span class="token punctuation">(</span>x<span class="token punctuation">)</span>  <span class="token comment"># tensor([0, 1, 2]), 去掉所有长度为1的维度</span>
y<span class="token punctuation">.</span>shape  <span class="token comment"># (3,)</span>

z <span class="token operator">=</span> torch<span class="token punctuation">.</span>squeeze<span class="token punctuation">(</span>x<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment"># 仅去掉dim=0的维度</span>
<span class="token comment">## tensor([[0],</span>
<span class="token comment">##         [1],</span>
<span class="token comment">##         [2]])</span>
z<span class="token punctuation">.</span>shape <span class="token comment"># (3, 1)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拼合" tabindex="-1"><a class="header-anchor" href="#拼合" aria-hidden="true">#</a> 拼合</h2><h3 id="垂直方向vstack" tabindex="-1"><a class="header-anchor" href="#垂直方向vstack" aria-hidden="true">#</a> 垂直方向vstack</h3><p>torch.vstack()对应np.vstack()</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
torch<span class="token punctuation">.</span>vstack<span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">## tensor([[1],</span>
<span class="token comment">##         [2],</span>
<span class="token comment">##         [3],</span>
<span class="token comment">##         [4],</span>
<span class="token comment">##         [5],</span>
<span class="token comment">##         [6]])</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="水平方向hstack" tabindex="-1"><a class="header-anchor" href="#水平方向hstack" aria-hidden="true">#</a> 水平方向hstack</h3><p>torch.hstack()对应np.hstack()</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
torch<span class="token punctuation">.</span>hstack<span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">## tensor([[1, 4],</span>
<span class="token comment">##        [2, 5],</span>
<span class="token comment">##        [3, 6]])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="转置" tabindex="-1"><a class="header-anchor" href="#转置" aria-hidden="true">#</a> 转置</h2><p>和numpy的ndarray对象相同</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
a<span class="token punctuation">.</span>T <span class="token comment"># 转置</span>
<span class="token comment">## tensor([[1, 4],</span>
<span class="token comment">##         [2, 5],</span>
<span class="token comment">##         [3, 6]])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function d(m,v){const e=p("ExternalLinkIcon");return c(),o("div",null,[l,n("p",null,[s(".view()方法也可以实现.shape()的功能, 二者的区别"),n("a",r,[s("参考"),u(e)])]),k])}const x=t(i,[["render",d],["__file","shape.html.vue"]]);export{x as default};
