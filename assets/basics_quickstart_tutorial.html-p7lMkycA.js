import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as t}from"./app-j3zK2x6_.js";const p={},o=t(`<h1 id="quickstart-tutorial" tabindex="-1"><a class="header-anchor" href="#quickstart-tutorial" aria-hidden="true">#</a> quickstart_tutorial</h1><h2 id="数据预处理" tabindex="-1"><a class="header-anchor" href="#数据预处理" aria-hidden="true">#</a> 数据预处理</h2><p>PyTorch有两个处理数据的类:</p><ol><li>torch.utils.data.DataLoader</li><li>torch.utils.data.Dataset Dataset包含了样本和对应的标签 DataLoader将Dataset包装成可迭代的对象</li></ol><p>PyTorch将数据工具分为三类TorchText(自然语言),TorchVision(图像), TorchAudio(音频). 这里我们使用TorchVision的DataSet.</p><h3 id="_1-创建dataset" tabindex="-1"><a class="header-anchor" href="#_1-创建dataset" aria-hidden="true">#</a> 1.创建dataset</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> torch<span class="token punctuation">.</span>utils<span class="token punctuation">.</span>data <span class="token keyword">import</span> DataLoader
<span class="token keyword">from</span> torchvision <span class="token keyword">import</span> datasets
<span class="token keyword">from</span> torchvision<span class="token punctuation">.</span>transforms <span class="token keyword">import</span> ToTensor<span class="token punctuation">,</span> Lambda<span class="token punctuation">,</span> Compose
<span class="token comment">## Download training data from open datasets.</span>
training_data <span class="token operator">=</span> datasets<span class="token punctuation">.</span>FashionMNIST<span class="token punctuation">(</span>
    root<span class="token operator">=</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">,</span>
    train<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    download<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    transform<span class="token operator">=</span>ToTensor<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token comment">## Download test data from open datasets.</span>
test_data <span class="token operator">=</span> datasets<span class="token punctuation">.</span>FashionMNIST<span class="token punctuation">(</span>
    root<span class="token operator">=</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">,</span>
    train<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>
    download<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    transform<span class="token operator">=</span>ToTensor<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-创建dataloader" tabindex="-1"><a class="header-anchor" href="#_2-创建dataloader" aria-hidden="true">#</a> 2. 创建DataLoader</h3><p>DataLoader会完成batching, sampling, shuffling和 multiprocess data loading.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>batch_size <span class="token operator">=</span> <span class="token number">64</span>
<span class="token comment">## Create data loaders.</span>
train_dataloader <span class="token operator">=</span> DataLoader<span class="token punctuation">(</span>training_data<span class="token punctuation">,</span> batch_size<span class="token operator">=</span>batch_size<span class="token punctuation">)</span>
test_dataloader <span class="token operator">=</span> DataLoader<span class="token punctuation">(</span>test_data<span class="token punctuation">,</span> batch_size<span class="token operator">=</span>batch_size<span class="token punctuation">)</span>
<span class="token keyword">for</span> X<span class="token punctuation">,</span> y <span class="token keyword">in</span> test_dataloader<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Shape of X [N, C, H, W]: &quot;</span><span class="token punctuation">,</span> X<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Shape of y: &quot;</span><span class="token punctuation">,</span> y<span class="token punctuation">.</span>shape<span class="token punctuation">,</span> y<span class="token punctuation">.</span>dtype<span class="token punctuation">)</span>
    <span class="token keyword">break</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建模型" tabindex="-1"><a class="header-anchor" href="#创建模型" aria-hidden="true">#</a> 创建模型</h2><ol><li>自己创建的模型要继承<code>nn.Module</code></li><li>在<code>__init__</code>方法中定义网络结构</li><li>在<code>forward(self, x)</code>方法中, 定义数据如何通过网络</li><li>使用<code>model.to(&quot;gpu&quot;)</code>来使用GPU加速</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>

<span class="token comment">## Define model</span>
<span class="token keyword">class</span> <span class="token class-name">NeuralNetwork</span><span class="token punctuation">(</span>nn<span class="token punctuation">.</span>Module<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>NeuralNetwork<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>flatten <span class="token operator">=</span> nn<span class="token punctuation">.</span>Flatten<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>linear_relu_stack <span class="token operator">=</span> nn<span class="token punctuation">.</span>Sequential<span class="token punctuation">(</span>
            nn<span class="token punctuation">.</span>Linear<span class="token punctuation">(</span><span class="token number">28</span><span class="token operator">*</span><span class="token number">28</span><span class="token punctuation">,</span> <span class="token number">512</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            nn<span class="token punctuation">.</span>ReLU<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            nn<span class="token punctuation">.</span>Linear<span class="token punctuation">(</span><span class="token number">512</span><span class="token punctuation">,</span> <span class="token number">512</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            nn<span class="token punctuation">.</span>ReLU<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            nn<span class="token punctuation">.</span>Linear<span class="token punctuation">(</span><span class="token number">512</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">forward</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span>
        x <span class="token operator">=</span> self<span class="token punctuation">.</span>flatten<span class="token punctuation">(</span>x<span class="token punctuation">)</span>
        logits <span class="token operator">=</span> self<span class="token punctuation">.</span>linear_relu_stack<span class="token punctuation">(</span>x<span class="token punctuation">)</span>
        <span class="token keyword">return</span> logits



device <span class="token operator">=</span> <span class="token string">&quot;cuda&quot;</span> <span class="token keyword">if</span> torch<span class="token punctuation">.</span>cuda<span class="token punctuation">.</span>is_available<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token string">&quot;cpu&quot;</span> <span class="token comment"># 如果有gpu就用gpu, 否则用cpu</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Using {} device&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>device<span class="token punctuation">)</span><span class="token punctuation">)</span>
model <span class="token operator">=</span> NeuralNetwork<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">(</span>device<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="optimizing-the-model-parameters" tabindex="-1"><a class="header-anchor" href="#optimizing-the-model-parameters" aria-hidden="true">#</a> Optimizing the Model Parameters</h2><p>使用<code>loss function</code>和<code>optimizer</code>来训练模型.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>loss_fn <span class="token operator">=</span> nn<span class="token punctuation">.</span>CrossEntropyLoss<span class="token punctuation">(</span><span class="token punctuation">)</span>
optimizer <span class="token operator">=</span> torch<span class="token punctuation">.</span>optim<span class="token punctuation">.</span>SGD<span class="token punctuation">(</span>model<span class="token punctuation">.</span>parameters<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> lr<span class="token operator">=</span><span class="token number">1e-3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">train</span><span class="token punctuation">(</span>dataloader<span class="token punctuation">,</span> model<span class="token punctuation">,</span> loss_fn<span class="token punctuation">,</span> optimizer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    size <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>dataloader<span class="token punctuation">.</span>dataset<span class="token punctuation">)</span>
    model<span class="token punctuation">.</span>train<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> batch<span class="token punctuation">,</span> <span class="token punctuation">(</span>X<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>dataloader<span class="token punctuation">)</span><span class="token punctuation">:</span>
        X<span class="token punctuation">,</span> y <span class="token operator">=</span> X<span class="token punctuation">.</span>to<span class="token punctuation">(</span>device<span class="token punctuation">)</span><span class="token punctuation">,</span> y<span class="token punctuation">.</span>to<span class="token punctuation">(</span>device<span class="token punctuation">)</span>

        <span class="token comment"># Compute prediction error</span>
        pred <span class="token operator">=</span> model<span class="token punctuation">(</span>X<span class="token punctuation">)</span>
        loss <span class="token operator">=</span> loss_fn<span class="token punctuation">(</span>pred<span class="token punctuation">,</span> y<span class="token punctuation">)</span>

        <span class="token comment"># Backpropagation</span>
        optimizer<span class="token punctuation">.</span>zero_grad<span class="token punctuation">(</span><span class="token punctuation">)</span>
        loss<span class="token punctuation">.</span>backward<span class="token punctuation">(</span><span class="token punctuation">)</span>
        optimizer<span class="token punctuation">.</span>step<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> batch <span class="token operator">%</span> <span class="token number">100</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            loss<span class="token punctuation">,</span> current <span class="token operator">=</span> loss<span class="token punctuation">.</span>item<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> batch <span class="token operator">*</span> <span class="token builtin">len</span><span class="token punctuation">(</span>X<span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;loss: </span><span class="token interpolation"><span class="token punctuation">{</span>loss<span class="token punctuation">:</span><span class="token format-spec">&gt;7f</span><span class="token punctuation">}</span></span><span class="token string">  [</span><span class="token interpolation"><span class="token punctuation">{</span>current<span class="token punctuation">:</span><span class="token format-spec">&gt;5d</span><span class="token punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token punctuation">{</span>size<span class="token punctuation">:</span><span class="token format-spec">&gt;5d</span><span class="token punctuation">}</span></span><span class="token string">]&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们也可以观察测试集的表现, 来确定模型正在学习.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span>dataloader<span class="token punctuation">,</span> model<span class="token punctuation">,</span> loss_fn<span class="token punctuation">)</span><span class="token punctuation">:</span>
    size <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>dataloader<span class="token punctuation">.</span>dataset<span class="token punctuation">)</span>
    num_batches <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>dataloader<span class="token punctuation">)</span>
    model<span class="token punctuation">.</span><span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    test_loss<span class="token punctuation">,</span> correct <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
    <span class="token keyword">with</span> torch<span class="token punctuation">.</span>no_grad<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> X<span class="token punctuation">,</span> y <span class="token keyword">in</span> dataloader<span class="token punctuation">:</span>
            X<span class="token punctuation">,</span> y <span class="token operator">=</span> X<span class="token punctuation">.</span>to<span class="token punctuation">(</span>device<span class="token punctuation">)</span><span class="token punctuation">,</span> y<span class="token punctuation">.</span>to<span class="token punctuation">(</span>device<span class="token punctuation">)</span>
            pred <span class="token operator">=</span> model<span class="token punctuation">(</span>X<span class="token punctuation">)</span>
            test_loss <span class="token operator">+=</span> loss_fn<span class="token punctuation">(</span>pred<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">.</span>item<span class="token punctuation">(</span><span class="token punctuation">)</span>
            correct <span class="token operator">+=</span> <span class="token punctuation">(</span>pred<span class="token punctuation">.</span>argmax<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> y<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span>torch<span class="token punctuation">.</span><span class="token builtin">float</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>item<span class="token punctuation">(</span><span class="token punctuation">)</span>
    test_loss <span class="token operator">/=</span> num_batches
    correct <span class="token operator">/=</span> size
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Test Error: \\n Accuracy: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token operator">*</span>correct<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token format-spec">&gt;0.1f</span><span class="token punctuation">}</span></span><span class="token string">%, Avg loss: </span><span class="token interpolation"><span class="token punctuation">{</span>test_loss<span class="token punctuation">:</span><span class="token format-spec">&gt;8f</span><span class="token punctuation">}</span></span><span class="token string"> \\n&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>训练过程可以分为几个epochs, 每个epochs都会过一遍数据. 每次epoch模型都会做更准确的预测.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>epochs <span class="token operator">=</span> <span class="token number">5</span>
<span class="token keyword">for</span> t <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>epochs<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Epoch </span><span class="token interpolation"><span class="token punctuation">{</span>t<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">}</span></span><span class="token string">\\n-------------------------------&quot;</span></span><span class="token punctuation">)</span>
    train<span class="token punctuation">(</span>train_dataloader<span class="token punctuation">,</span> model<span class="token punctuation">,</span> loss_fn<span class="token punctuation">,</span> optimizer<span class="token punctuation">)</span>
    test<span class="token punctuation">(</span>test_dataloader<span class="token punctuation">,</span> model<span class="token punctuation">,</span> loss_fn<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Done!&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="saving-models" tabindex="-1"><a class="header-anchor" href="#saving-models" aria-hidden="true">#</a> Saving Models</h2><p>一般保存模型的方式是序列化state dictionary(containing the model parameters)</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>torch<span class="token punctuation">.</span>save<span class="token punctuation">(</span>model<span class="token punctuation">.</span>state_dict<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;model.pth&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Saved PyTorch Model State to model.pth&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="loading-models" tabindex="-1"><a class="header-anchor" href="#loading-models" aria-hidden="true">#</a> Loading Models</h2><p>首先要创建模型, 然后载入state dictionary</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>model <span class="token operator">=</span> NeuralNetwork<span class="token punctuation">(</span><span class="token punctuation">)</span>
model<span class="token punctuation">.</span>load_state_dict<span class="token punctuation">(</span>torch<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token string">&quot;model.pth&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>classes <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;T-shirt/top&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Trouser&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Pullover&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Dress&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Coat&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Sandal&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Shirt&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Sneaker&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Bag&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Ankle boot&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

model<span class="token punctuation">.</span><span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 非训练时, 使用</span>
x<span class="token punctuation">,</span> y <span class="token operator">=</span> test_data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> test_data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">with</span> torch<span class="token punctuation">.</span>no_grad<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    pred <span class="token operator">=</span> model<span class="token punctuation">(</span>x<span class="token punctuation">)</span>
    predicted<span class="token punctuation">,</span> actual <span class="token operator">=</span> classes<span class="token punctuation">[</span>pred<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>argmax<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> classes<span class="token punctuation">[</span>y<span class="token punctuation">]</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;Predicted: &quot;</span><span class="token interpolation"><span class="token punctuation">{</span>predicted<span class="token punctuation">}</span></span><span class="token string">&quot;, Actual: &quot;</span><span class="token interpolation"><span class="token punctuation">{</span>actual<span class="token punctuation">}</span></span><span class="token string">&quot;&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>样本: samples 标签: labels</p><p>参考: https://pytorch.org/tutorials/beginner/basics/quickstart_tutorial.html</p>`,30),e=[o];function c(i,l){return s(),a("div",null,e)}const d=n(p,[["render",c],["__file","basics_quickstart_tutorial.html.vue"]]);export{d as default};
