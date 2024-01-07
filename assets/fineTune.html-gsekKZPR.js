import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-SnI5rGHA.js";const e={},p=t(`<h1 id="finetune" tabindex="-1"><a class="header-anchor" href="#finetune" aria-hidden="true">#</a> fineTune</h1><h2 id="获取数据" tabindex="-1"><a class="header-anchor" href="#获取数据" aria-hidden="true">#</a> 获取数据</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 获得数据</span>
<span class="token keyword">from</span> datasets <span class="token keyword">import</span> load_dataset
dataset <span class="token operator">=</span> load_dataset<span class="token punctuation">(</span><span class="token string">&quot;yelp_review_full&quot;</span><span class="token punctuation">)</span>
dataset<span class="token punctuation">[</span><span class="token string">&quot;train&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span>
<span class="token punctuation">{</span><span class="token string">&#39;label&#39;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
 <span class="token string">&#39;text&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;My expectations for McDonalds are t rarely high. ...&#39;</span><span class="token punctuation">}</span>

<span class="token comment">## tokenize</span>
<span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoTokenizer
tokenizer <span class="token operator">=</span> AutoTokenizer<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span><span class="token string">&quot;bert-base-cased&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">tokenize_function</span><span class="token punctuation">(</span>examples<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> tokenizer<span class="token punctuation">(</span>examples<span class="token punctuation">[</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> padding<span class="token operator">=</span><span class="token string">&quot;max_length&quot;</span><span class="token punctuation">,</span> truncation<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
tokenized_datasets <span class="token operator">=</span> dataset<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span>tokenize_function<span class="token punctuation">,</span> batched<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>  <span class="token comment"># 遍历每一条数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="trainer进行训练" tabindex="-1"><a class="header-anchor" href="#trainer进行训练" aria-hidden="true">#</a> trainer进行训练</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 训练</span>

<span class="token comment">### 加载模型</span>
<span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoModelForSequenceClassification
model <span class="token operator">=</span> AutoModelForSequenceClassification<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span><span class="token string">&quot;bert-base-cased&quot;</span><span class="token punctuation">,</span> num_labels<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">)</span>  <span class="token comment"># 指定了output的个数是5</span>

<span class="token comment">### 设定hyperparameters</span>
<span class="token keyword">from</span> transformers <span class="token keyword">import</span> TrainingArguments
training_args <span class="token operator">=</span> TrainingArguments<span class="token punctuation">(</span>output_dir<span class="token operator">=</span><span class="token string">&quot;test_trainer&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 包含了默认的设定hyperparameters</span>
<span class="token comment">## training_args = TrainingArguments(output_dir=&quot;test_trainer&quot;, evaluation_strategy=&quot;epoch&quot;) # 可以设置每个epoch进行评估</span>


<span class="token comment">### 设定evaluate的方法</span>
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">from</span> datasets <span class="token keyword">import</span> load_metric

metric <span class="token operator">=</span> load_metric<span class="token punctuation">(</span><span class="token string">&quot;accuracy&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">compute_metrics</span><span class="token punctuation">(</span>eval_pred<span class="token punctuation">)</span><span class="token punctuation">:</span>
    logits<span class="token punctuation">,</span> labels <span class="token operator">=</span> eval_pred
    predictions <span class="token operator">=</span> np<span class="token punctuation">.</span>argmax<span class="token punctuation">(</span>logits<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> metric<span class="token punctuation">.</span>compute<span class="token punctuation">(</span>predictions<span class="token operator">=</span>predictions<span class="token punctuation">,</span> references<span class="token operator">=</span>labels<span class="token punctuation">)</span>


<span class="token comment">### 开始训练</span>
trainer <span class="token operator">=</span> Trainer<span class="token punctuation">(</span>
    model<span class="token operator">=</span>model<span class="token punctuation">,</span>
    args<span class="token operator">=</span>training_args<span class="token punctuation">,</span>
    train_dataset<span class="token operator">=</span>small_train_dataset<span class="token punctuation">,</span>
    eval_dataset<span class="token operator">=</span>small_eval_dataset<span class="token punctuation">,</span>
    compute_metrics<span class="token operator">=</span>compute_metrics<span class="token punctuation">,</span>
<span class="token punctuation">)</span>

trainer<span class="token punctuation">.</span>train<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pytorch进行训练" tabindex="-1"><a class="header-anchor" href="#pytorch进行训练" aria-hidden="true">#</a> pytorch进行训练</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>tokenized_datasets <span class="token operator">=</span> tokenized_datasets<span class="token punctuation">.</span>remove_columns<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
tokenized_datasets <span class="token operator">=</span> tokenized_datasets<span class="token punctuation">.</span>rename_column<span class="token punctuation">(</span><span class="token string">&quot;label&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;labels&quot;</span><span class="token punctuation">)</span>
tokenized_datasets<span class="token punctuation">.</span>set_format<span class="token punctuation">(</span><span class="token string">&quot;torch&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 设置返回tensor</span>


<span class="token keyword">from</span> torch<span class="token punctuation">.</span>utils<span class="token punctuation">.</span>data <span class="token keyword">import</span> DataLoader
train_dataloader <span class="token operator">=</span> DataLoader<span class="token punctuation">(</span>small_train_dataset<span class="token punctuation">,</span> shuffle<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> batch_size<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">)</span>
eval_dataloader <span class="token operator">=</span> DataLoader<span class="token punctuation">(</span>small_eval_dataset<span class="token punctuation">,</span> batch_size<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">)</span>


<span class="token comment">## 训练</span>
<span class="token comment">### 创建模型</span>
<span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoModelForSequenceClassification
model <span class="token operator">=</span> AutoModelForSequenceClassification<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span><span class="token string">&quot;bert-base-cased&quot;</span><span class="token punctuation">,</span> num_labels<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">)</span>


<span class="token keyword">from</span> torch<span class="token punctuation">.</span>optim <span class="token keyword">import</span> AdamW
optimizer <span class="token operator">=</span> AdamW<span class="token punctuation">(</span>model<span class="token punctuation">.</span>parameters<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> lr<span class="token operator">=</span><span class="token number">5e-5</span><span class="token punctuation">)</span>


<span class="token keyword">from</span> transformers <span class="token keyword">import</span> get_scheduler
num_epochs <span class="token operator">=</span> <span class="token number">3</span>
num_training_steps <span class="token operator">=</span> num_epochs <span class="token operator">*</span> <span class="token builtin">len</span><span class="token punctuation">(</span>train_dataloader<span class="token punctuation">)</span>
lr_scheduler <span class="token operator">=</span> get_scheduler<span class="token punctuation">(</span>
    name<span class="token operator">=</span><span class="token string">&quot;linear&quot;</span><span class="token punctuation">,</span> optimizer<span class="token operator">=</span>optimizer<span class="token punctuation">,</span> num_warmup_steps<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> num_training_steps<span class="token operator">=</span>num_training_steps
<span class="token punctuation">)</span>

<span class="token keyword">import</span> torch
device <span class="token operator">=</span> torch<span class="token punctuation">.</span>device<span class="token punctuation">(</span><span class="token string">&quot;cuda&quot;</span><span class="token punctuation">)</span> <span class="token keyword">if</span> torch<span class="token punctuation">.</span>cuda<span class="token punctuation">.</span>is_available<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">else</span> torch<span class="token punctuation">.</span>device<span class="token punctuation">(</span><span class="token string">&quot;cpu&quot;</span><span class="token punctuation">)</span>
model<span class="token punctuation">.</span>to<span class="token punctuation">(</span>device<span class="token punctuation">)</span>


<span class="token keyword">from</span> tqdm<span class="token punctuation">.</span>auto <span class="token keyword">import</span> tqdm

progress_bar <span class="token operator">=</span> tqdm<span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span>num_training_steps<span class="token punctuation">)</span><span class="token punctuation">)</span>

model<span class="token punctuation">.</span>train<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> epoch <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>num_epochs<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> batch <span class="token keyword">in</span> train_dataloader<span class="token punctuation">:</span>
        batch <span class="token operator">=</span> <span class="token punctuation">{</span>k<span class="token punctuation">:</span> v<span class="token punctuation">.</span>to<span class="token punctuation">(</span>device<span class="token punctuation">)</span> <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token keyword">in</span> batch<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        outputs <span class="token operator">=</span> model<span class="token punctuation">(</span><span class="token operator">**</span>batch<span class="token punctuation">)</span>
        loss <span class="token operator">=</span> outputs<span class="token punctuation">.</span>loss
        loss<span class="token punctuation">.</span>backward<span class="token punctuation">(</span><span class="token punctuation">)</span>
        optimizer<span class="token punctuation">.</span>step<span class="token punctuation">(</span><span class="token punctuation">)</span>
        lr_scheduler<span class="token punctuation">.</span>step<span class="token punctuation">(</span><span class="token punctuation">)</span>
        optimizer<span class="token punctuation">.</span>zero_grad<span class="token punctuation">(</span><span class="token punctuation">)</span>
        progress_bar<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>



<span class="token comment">## 模型评估</span>
metric <span class="token operator">=</span> load_metric<span class="token punctuation">(</span><span class="token string">&quot;accuracy&quot;</span><span class="token punctuation">)</span>
model<span class="token punctuation">.</span><span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> batch <span class="token keyword">in</span> eval_dataloader<span class="token punctuation">:</span>
    batch <span class="token operator">=</span> <span class="token punctuation">{</span>k<span class="token punctuation">:</span> v<span class="token punctuation">.</span>to<span class="token punctuation">(</span>device<span class="token punctuation">)</span> <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token keyword">in</span> batch<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token keyword">with</span> torch<span class="token punctuation">.</span>no_grad<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        outputs <span class="token operator">=</span> model<span class="token punctuation">(</span><span class="token operator">**</span>batch<span class="token punctuation">)</span>

    logits <span class="token operator">=</span> outputs<span class="token punctuation">.</span>logits
    predictions <span class="token operator">=</span> torch<span class="token punctuation">.</span>argmax<span class="token punctuation">(</span>logits<span class="token punctuation">,</span> dim<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    metric<span class="token punctuation">.</span>add_batch<span class="token punctuation">(</span>predictions<span class="token operator">=</span>predictions<span class="token punctuation">,</span> references<span class="token operator">=</span>batch<span class="token punctuation">[</span><span class="token string">&quot;labels&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

metric<span class="token punctuation">.</span>compute<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://huggingface.co/docs/transformers/training</p>`,8),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","fineTune.html.vue"]]);export{d as default};
