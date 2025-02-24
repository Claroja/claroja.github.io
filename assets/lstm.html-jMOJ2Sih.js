import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-A10JnHE0.js";const e={},p=t(`<h1 id="lstm" tabindex="-1"><a class="header-anchor" href="#lstm" aria-hidden="true">#</a> lstm</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>input_size <span class="token operator">=</span> <span class="token number">5</span>
hidden_size <span class="token operator">=</span> <span class="token number">10</span>
num_layers <span class="token operator">=</span> <span class="token number">1</span>
lstm_layer <span class="token operator">=</span> nn<span class="token punctuation">.</span>LSTM<span class="token punctuation">(</span>input_size<span class="token punctuation">,</span> hidden_size<span class="token punctuation">,</span> num_layers<span class="token punctuation">,</span> batch_first<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>input_size</td><td>每个时间点上的特征数, 比如如果是自然语言处理的话, 就是词向量的特征数. 如果是时序数据, 就是某个时刻包含的特征数(某天的[温度, 湿度, ..等])</td></tr><tr><td>hidden_size</td><td>每个时间上的hidden state和cell state的特征数</td></tr><tr><td>num_layers</td><td>竖向叠加的层数, 一般设为1或2.</td></tr></tbody></table><p>如果我们的<code>input_size = 5</code>,</p><ol><li>我就需要创建一个shape(batch size, sequence length, input dimension)为(1, 1, 5)的tensor.</li><li>我们还需要初始化hidden state和cell state, 二者结合成一个tuple作为LSTM的输入.</li></ol><h2 id="输入" tabindex="-1"><a class="header-anchor" href="#输入" aria-hidden="true">#</a> 输入</h2><table><thead><tr><th>输入</th><th>描述</th></tr></thead><tbody><tr><td>input: 当batch_first=True时, shape为(batch size, seq_len, input_size)的tensor</td><td></td></tr><tr><td>h_0: batch中每条数据的初始化hidden_state, shape为(D*num_layers, batch_size, hidden_size), 双向时(bidirectional=true)D=2, 其余为1</td><td></td></tr><tr><td>c_0: batch中每条数据的初始化cell_state, shape为(D*num_layers, batch_size, hidden_size), 双向时(bidirectional=true)D=2, 其余为1</td><td></td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>batch_size <span class="token operator">=</span> <span class="token number">1</span>
seq_len <span class="token operator">=</span> <span class="token number">1</span>
<span class="token builtin">input</span> <span class="token operator">=</span> torch<span class="token punctuation">.</span>randn<span class="token punctuation">(</span>batch_size<span class="token punctuation">,</span> seq_len<span class="token punctuation">,</span> input_size<span class="token punctuation">)</span>
hidden_state <span class="token operator">=</span> torch<span class="token punctuation">.</span>randn<span class="token punctuation">(</span>num_layers<span class="token punctuation">,</span> batch_size<span class="token punctuation">,</span> hidden_size<span class="token punctuation">)</span>
cell_state <span class="token operator">=</span> torch<span class="token punctuation">.</span>randn<span class="token punctuation">(</span>num_layers<span class="token punctuation">,</span> batch_size<span class="token punctuation">,</span> hidden_size<span class="token punctuation">)</span>
hidden <span class="token operator">=</span> <span class="token punctuation">(</span>hidden_state<span class="token punctuation">,</span> cell_state<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>input详解: 在我们的LSTM时间序列预测任务中： seq_len 时间序列的长度， batch_size 同个批次中输入的序列条数 inp_dim 输入数据的维度</p><p>如果是自然语言处理 (NLP) ，那么： seq_len 将对应句子的长度 batch_size 同个批次中输入的句子数量 inp_dim 句子中用来表示每个单词（中文分词）的矢量维度</p><h2 id="输出" tabindex="-1"><a class="header-anchor" href="#输出" aria-hidden="true">#</a> 输出</h2><p>将input, hidden_state, cell_state喂入LSTM</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>output<span class="token punctuation">,</span> <span class="token punctuation">(</span>h_n<span class="token punctuation">,</span> c_n<span class="token punctuation">)</span> <span class="token operator">=</span> lstm_layer<span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">,</span> hidden<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>输出</th><th>描述</th></tr></thead><tbody><tr><td>output</td><td>最上层的layer的每个时刻的输出特征, shape为(batch_size, seq_len, D*hidden_size), 双向时(bidirectional=true)D=2, 其余为1</td></tr><tr><td>h_n</td><td>batch中, 每条序列, 所有layer的最后时刻的hidden_state, shape为(D*num_layers, batch_size, hidden_size), 双向时(bidirectional=true)D=2, 其余为1</td></tr><tr><td>c_n</td><td>batch中, 每条序列, 所有layer的最后时刻的cell_state, shape为(D*num_layers, batch_size, hidden_size), 双向时(bidirectional=true)D=2, 其余为1</td></tr></tbody></table><ul><li>many2one 我们需要最后一个事件点的输出, 比如分类问题, 时间序列预测, 仅仅将最后一个时间点的输入喂入全连接层. <a href="./lstm/1.png"></a></li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> torch
<span class="token keyword">from</span> torch <span class="token keyword">import</span> nn<span class="token punctuation">,</span> optim

input_size <span class="token operator">=</span> <span class="token number">2</span>
hidden_size <span class="token operator">=</span> <span class="token number">1</span>
num_layers <span class="token operator">=</span> <span class="token number">1</span>
lstm_layer <span class="token operator">=</span> nn<span class="token punctuation">.</span>LSTM<span class="token punctuation">(</span>input_size<span class="token punctuation">,</span> hidden_size<span class="token punctuation">,</span> num_layers<span class="token punctuation">,</span> batch_first<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>


batch_size <span class="token operator">=</span><span class="token number">4</span>
seq_len <span class="token operator">=</span> <span class="token number">3</span>
<span class="token builtin">input</span> <span class="token operator">=</span> torch<span class="token punctuation">.</span>randn<span class="token punctuation">(</span>batch_size<span class="token punctuation">,</span> seq_len<span class="token punctuation">,</span> input_size<span class="token punctuation">)</span>
output<span class="token punctuation">,</span> <span class="token punctuation">(</span>h_n<span class="token punctuation">,</span> c_n<span class="token punctuation">)</span> <span class="token operator">=</span> lstm_layer<span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">)</span>
output <span class="token operator">=</span> output<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">]</span>  <span class="token comment"># 或者使用output = h_n[-1,:,:]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>output<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>  <span class="token comment"># torch.Size([4, 1])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可变长" tabindex="-1"><a class="header-anchor" href="#可变长" aria-hidden="true">#</a> 可变长</h2><p>LSTM可以接受不同长度的序列, 在每个时间点上输出.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>seq_len <span class="token operator">=</span> <span class="token number">3</span>
<span class="token builtin">input</span> <span class="token operator">=</span> torch<span class="token punctuation">.</span>randn<span class="token punctuation">(</span>batch_size<span class="token punctuation">,</span> seq_len<span class="token punctuation">,</span> input_size<span class="token punctuation">)</span>
output<span class="token punctuation">,</span> <span class="token punctuation">(</span>h_n<span class="token punctuation">,</span> c_n<span class="token punctuation">)</span> <span class="token operator">=</span> lstm_layer<span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">,</span> hidden<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>output<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这次, 第二个维度是3, 就是指时间序列的长度为3.</p><ul><li>many2many 我们需要每个时间点的输出, 比如文本生成, 每个时间点的输出可以被放入全连接层. <a href="./lstm/1.png"></a></li></ul><p>参考: https://blog.floydhub.com/long-short-term-memory-from-zero-to-hero-with-pytorch/ https://blog.floydhub.com/a-beginners-guide-on-recurrent-neural-networks-with-pytorch/ https://github.com/malhamid/LSTM/blob/main/LSTM.ipynb https://towardsdatascience.com/lstm-and-bidirectional-lstm-for-regression-4fddf910c655</p><p>https://curiousily.com/posts/time-series-forecasting-with-lstm-for-daily-coronavirus-cases/ https://zhuanlan.zhihu.com/p/94757947 https://cnvrg.io/pytorch-lstm/ https://www.crosstab.io/articles/time-series-pytorch-lstm</p><p>这篇文章是错误的, 和全连接没有区别 https://github.com/L1aoXingyu/code-of-learn-deep-learning-with-pytorch/blob/master/chapter5_RNN/time-series/lstm-time-series.ipynb</p>`,25),i=[p];function o(c,l){return s(),a("div",null,i)}const d=n(e,[["render",o],["__file","lstm.html.vue"]]);export{d as default};
