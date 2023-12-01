import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as i,c,a as n,b as a,d as e,e as t}from"./app-MTzDpLgJ.js";const l={},r=t('<h1 id="textclassification" tabindex="-1"><a class="header-anchor" href="#textclassification" aria-hidden="true">#</a> textClassification</h1><p>transformers_task_textClassification</p><h2 id="应用方向" tabindex="-1"><a class="header-anchor" href="#应用方向" aria-hidden="true">#</a> 应用方向</h2><ol><li>sentiment analysis(positive, negative, neutral)</li></ol><h2 id="数据集" tabindex="-1"><a class="header-anchor" href="#数据集" aria-hidden="true">#</a> 数据集</h2>',5),u={href:"https://huggingface.co/datasets/imdb",target:"_blank",rel:"noopener noreferrer"},d={href:"https://huggingface.co/distilbert-base-uncased",target:"_blank",rel:"noopener noreferrer"},k=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> datasets <span class="token keyword">import</span> load_dataset
imdb <span class="token operator">=</span> load_dataset<span class="token punctuation">(</span><span class="token string">&quot;imdb&quot;</span><span class="token punctuation">)</span>
imdb<span class="token punctuation">[</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;label&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string">&quot;text&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;I love sci-fi and am willing to put up with a lot....&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个<code>dataset</code>中包含了两个字段: <code>text</code>: 电影的评论 <code>label</code>: 0表示<code>negative</code>, 1表示<code>positive</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoTokenizer
tokenizer <span class="token operator">=</span> AutoTokenizer<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span><span class="token string">&quot;distilbert-base-uncased&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">preprocess_function</span><span class="token punctuation">(</span>examples<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> tokenizer<span class="token punctuation">(</span>examples<span class="token punctuation">[</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> truncation<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span> <span class="token comment"># 这里不进行padding, 在下面使用DataCollatorWithPadding, 进行动态padding</span>
tokenized_imdb <span class="token operator">=</span> imdb<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span>preprocess_function<span class="token punctuation">,</span> batched<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>  <span class="token comment"># batched批处理可以加快速度</span>

<span class="token keyword">from</span> transformers <span class="token keyword">import</span> DataCollatorWithPadding
data_collator <span class="token operator">=</span> DataCollatorWithPadding<span class="token punctuation">(</span>tokenizer<span class="token operator">=</span>tokenizer<span class="token punctuation">)</span>  <span class="token comment"># 创建batch, 并以batch动态进行padding, 这样比tokenizer的padding更加的高效</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoModelForSequenceClassification<span class="token punctuation">,</span> TrainingArguments<span class="token punctuation">,</span> Trainer
model <span class="token operator">=</span> AutoModelForSequenceClassification<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span><span class="token string">&quot;distilbert-base-uncased&quot;</span><span class="token punctuation">,</span> num_labels<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>training_args <span class="token operator">=</span> TrainingArguments<span class="token punctuation">(</span>
    output_dir<span class="token operator">=</span><span class="token string">&quot;./results&quot;</span><span class="token punctuation">,</span>
    learning_rate<span class="token operator">=</span><span class="token number">2e-5</span><span class="token punctuation">,</span>
    per_device_train_batch_size<span class="token operator">=</span><span class="token number">16</span><span class="token punctuation">,</span>
    per_device_eval_batch_size<span class="token operator">=</span><span class="token number">16</span><span class="token punctuation">,</span>
    num_train_epochs<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span>
    weight_decay<span class="token operator">=</span><span class="token number">0.01</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

trainer <span class="token operator">=</span> Trainer<span class="token punctuation">(</span>
    model<span class="token operator">=</span>model<span class="token punctuation">,</span>
    args<span class="token operator">=</span>training_args<span class="token punctuation">,</span>
    train_dataset<span class="token operator">=</span>tokenized_imdb<span class="token punctuation">[</span><span class="token string">&quot;train&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    eval_dataset<span class="token operator">=</span>tokenized_imdb<span class="token punctuation">[</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    tokenizer<span class="token operator">=</span>tokenizer<span class="token punctuation">,</span>
    data_collator<span class="token operator">=</span>data_collator<span class="token punctuation">,</span>
<span class="token punctuation">)</span>
trainer<span class="token punctuation">.</span>train<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://huggingface.co/docs/transformers/v4.20.1/en/tasks/sequence_classification</p>`,6);function m(v,b){const s=p("ExternalLinkIcon");return i(),c("div",null,[r,n("p",null,[n("a",u,[a("imdb"),e(s)]),n("a",d,[a("DistilBERT"),e(s)])]),k])}const _=o(l,[["render",m],["__file","textClassification.html.vue"]]);export{_ as default};
