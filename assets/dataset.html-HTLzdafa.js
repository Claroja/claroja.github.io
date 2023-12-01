import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o,c,a as s,b as n,d as l,e as a}from"./app-MTzDpLgJ.js";const u={},i=a(`<h1 id="dataset" tabindex="-1"><a class="header-anchor" href="#dataset" aria-hidden="true">#</a> dataset</h1><h2 id="torch-utils-data-dataset" tabindex="-1"><a class="header-anchor" href="#torch-utils-data-dataset" aria-hidden="true">#</a> torch.utils.data.Dataset</h2><p>代表这一数据的抽象类, 使用时需要继承<code>Dataset</code>并重写<code>__len__</code>和<code>__getitem__</code>这个两个函数.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 导入需要的包</span>
<span class="token keyword">import</span> torch
<span class="token keyword">import</span> torch<span class="token punctuation">.</span>utils<span class="token punctuation">.</span>data<span class="token punctuation">.</span>dataset <span class="token keyword">as</span> Dataset
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

Data <span class="token operator">=</span> np<span class="token punctuation">.</span>asarray<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
Label <span class="token operator">=</span> np<span class="token punctuation">.</span>asarray<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">#创建子类</span>
<span class="token keyword">class</span> <span class="token class-name">subDataset</span><span class="token punctuation">(</span>Dataset<span class="token punctuation">.</span>Dataset<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment">#初始化，定义数据内容和标签</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> Data<span class="token punctuation">,</span> Label<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>Data <span class="token operator">=</span> Data
        self<span class="token punctuation">.</span>Label <span class="token operator">=</span> Label
    <span class="token comment">#返回数据集大小</span>
    <span class="token keyword">def</span> <span class="token function">__len__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token builtin">len</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>Data<span class="token punctuation">)</span>
    <span class="token comment">#得到数据内容和标签</span>
    <span class="token keyword">def</span> <span class="token function">__getitem__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">:</span>
        data <span class="token operator">=</span> torch<span class="token punctuation">.</span>Tensor<span class="token punctuation">(</span>self<span class="token punctuation">.</span>Data<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span>
        label <span class="token operator">=</span> torch<span class="token punctuation">.</span>IntTensor<span class="token punctuation">(</span>self<span class="token punctuation">.</span>Label<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> data<span class="token punctuation">,</span> label
data <span class="token operator">=</span> subDataset<span class="token punctuation">(</span>Data<span class="token punctuation">,</span>Label<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>__init__</code>方法用来载入数据</li><li><code>__len__</code>方法返回数据的长度</li><li><code>__getitem__</code>方法接收下标index, 并返回相应的数据, 注意是tuple类型, 元素是tensor类型</li></ul><h2 id="torch-utils-data-tensordataset" tabindex="-1"><a class="header-anchor" href="#torch-utils-data-tensordataset" aria-hidden="true">#</a> torch.utils.data.TensorDataset</h2><p><code>torch.utils.data.TensorDataset</code> 继承自 <code>torch.utils.data.dataset</code>, 参数直接输入即可.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> torch
<span class="token keyword">import</span> torch<span class="token punctuation">.</span>utils<span class="token punctuation">.</span>data <span class="token keyword">as</span> Data
Data <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
Label <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
torch_dataset <span class="token operator">=</span> Data<span class="token punctuation">.</span>TensorDataset<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="torchvision-datasets-imagefolder" tabindex="-1"><a class="header-anchor" href="#torchvision-datasets-imagefolder" aria-hidden="true">#</a> torchvision.datasets.ImageFolder</h2>`,9),d=s("code",null,"torchvison",-1),r=s("code",null,"ImageFolder",-1),k={href:"https://pytorch.org/vision/stable/datasets.html#torchvision.datasets.ImageFolder",target:"_blank",rel:"noopener noreferrer"},m=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>root/dog/xxx.png
root/dog/xxy.png
root/dog/<span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>/xxz.png

root/cat/123.png
root/cat/nsdf3.png
root/cat/<span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>/asd932_.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输入" tabindex="-1"><a class="header-anchor" href="#输入" aria-hidden="true">#</a> 输入</h3><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>root</td><td>图片存储的根目录</td></tr><tr><td>transform</td><td>对图片类别进行预处理的操作</td></tr><tr><td>loader</td><td>表示数据集加载方式，通常默认加载方式即可。</td></tr><tr><td>is_valid_file</td><td>获取图像文件的路径并检查该文件是否为有效文件的函数(用于检查损坏文件)</td></tr></tbody></table><h3 id="输出" tabindex="-1"><a class="header-anchor" href="#输出" aria-hidden="true">#</a> 输出</h3><p>参数|描述 self.classes|用一个 list 保存类别名称 self.class_to_idx|类别对应的索引，与不做任何转换返回的 target 对应 self.imgs|保存(img-path, class) tuple的 list</p><h3 id="样例" tabindex="-1"><a class="header-anchor" href="#样例" aria-hidden="true">#</a> 样例</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> torchvision<span class="token punctuation">.</span>datasets <span class="token keyword">import</span> ImageFolder
dataset<span class="token operator">=</span>ImageFolder<span class="token punctuation">(</span><span class="token string">&#39;./data&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dataset<span class="token punctuation">.</span>classes<span class="token punctuation">)</span>  <span class="token comment">#根据分的文件夹的名字来确定的类别</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dataset<span class="token punctuation">.</span>class_to_idx<span class="token punctuation">)</span> <span class="token comment">#按顺序为这些类别定义索引为0,1...</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dataset<span class="token punctuation">.</span>imgs<span class="token punctuation">)</span> <span class="token comment">#返回从所有文件夹中得到的图片的路径以及其类别</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&#39;&#39;&#39; 输出：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token punctuation">[</span><span class="token string">&#39;cat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;dog&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">{</span><span class="token string">&#39;cat&#39;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;dog&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span>
<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;./data\\\\cat\\\\1.jpg&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
 <span class="token punctuation">(</span><span class="token string">&#39;./data\\\\cat\\\\2.jpg&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
 <span class="token punctuation">(</span><span class="token string">&#39;./data\\\\dog\\\\1.jpg&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
 <span class="token punctuation">(</span><span class="token string">&#39;./data\\\\dog\\\\2.jpg&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function v(b,h){const t=e("ExternalLinkIcon");return o(),c("div",null,[i,s("p",null,[n("另外在"),d,n("这个包中还有一个更高级的有关于计算机视觉的数据读取类："),r,n("，主要功能是处理图片，且要求图片是下面这种存放形式： "),s("a",k,[n("官网API解释"),l(t)]),n(" 按照以下的方式来组织训练集和测试集:")]),m])}const f=p(u,[["render",v],["__file","dataset.html.vue"]]);export{f as default};
