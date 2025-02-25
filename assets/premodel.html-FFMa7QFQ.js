import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as c,c as l,b as n,d as s,e,a as o}from"./app-7knaTE3M.js";const r={},i=n("h1",{id:"premodel",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#premodel","aria-hidden":"true"},"#"),s(" premodel")],-1),d=n("h2",{id:"models",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#models","aria-hidden":"true"},"#"),s(" models")],-1),u={href:"https://pytorch.org/vision/stable/models.html",target:"_blank",rel:"noopener noreferrer"},m=o(`<p>官方预置了一些经典的模型, 比如<code>ResNet</code>.</p><h3 id="载入预置模型" tabindex="-1"><a class="header-anchor" href="#载入预置模型" aria-hidden="true">#</a> 载入预置模型</h3><p>载入的方式有两种:</p><ol><li>通过方法来调用</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> torchvision<span class="token punctuation">.</span>models <span class="token keyword">as</span> models
resnet18 <span class="token operator">=</span> models<span class="token punctuation">.</span>resnet101<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>通过字典来调用, 在脚本传参的时候, 可以动态指定模型</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> torchvision<span class="token punctuation">.</span>models <span class="token keyword">as</span> models
model <span class="token operator">=</span> models<span class="token punctuation">.</span>__dict__<span class="token punctuation">[</span><span class="token string">&quot;resnet101&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用预训练模型" tabindex="-1"><a class="header-anchor" href="#使用预训练模型" aria-hidden="true">#</a> 使用预训练模型</h3>`,8),k={href:"https://pytorch.org/vision/stable/models.html",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"pretrained=True",-1),v=o(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>resnet101 <span class="token operator">=</span> models<span class="token punctuation">.</span>resnet101<span class="token punctuation">(</span>pretrained<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
model <span class="token operator">=</span> models<span class="token punctuation">.</span>__dict__<span class="token punctuation">[</span><span class="token string">&quot;resnet101&quot;</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">(</span>pretrained<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>pre-trained model将会下载weights在一个缓存文件夹, 可以通过<code>TORCH_MODEL_ZOO environment</code>来设置.</p><p>一些模型在training和evaluation时有不同的表现, 比如batch normalization, dropout.根据具体的模型说明, 使用<code>model.train()</code>和<code>model.eval()</code>来进行调整.</p><p>所有的<code>pre-trained</code>模型期望输入的图片,进行相同的标准化, 比如3通道的RGB图像(3 x H x W), H和W希望最少是224, 像素范围在<code>[0,1]</code>,使用<code>mean=[0.485, 0.456, 0.406] std = [0.229, 0.224, 0.225]</code>进行标准化.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>normalize <span class="token operator">=</span> transforms<span class="token punctuation">.</span>Normalize<span class="token punctuation">(</span>mean<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">0.485</span><span class="token punctuation">,</span> <span class="token number">0.456</span><span class="token punctuation">,</span> <span class="token number">0.406</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                                 std<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">0.229</span><span class="token punctuation">,</span> <span class="token number">0.224</span><span class="token punctuation">,</span> <span class="token number">0.225</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function _(b,g){const a=p("ExternalLinkIcon");return c(),l("div",null,[i,d,n("p",null,[n("a",u,[s("官方文档"),e(a)])]),m,n("p",null,[n("a",k,[s("官方文档"),e(a)]),s(" 通过"),h,s("来使用预训练模型")]),v])}const x=t(r,[["render",_],["__file","premodel.html.vue"]]);export{x as default};
