import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-M6UUlHgF.js";const e={},p=t(`<h1 id="tokenclassification" tabindex="-1"><a class="header-anchor" href="#tokenclassification" aria-hidden="true">#</a> tokenClassification</h1><p>token classification tasks:</p><ul><li>NER (Named-entity recognition) Classify the entities in the text (person, organization, location...).</li><li>POS (Part-of-speech tagging) Grammatically classify the tokens (noun, verb, adjective...)</li><li>Chunk (Chunking) Grammatically classify the tokens and group them into &quot;chunks&quot; that go together</li></ul><h2 id="ner" tabindex="-1"><a class="header-anchor" href="#ner" aria-hidden="true">#</a> NER</h2><h3 id="数据准备" tabindex="-1"><a class="header-anchor" href="#数据准备" aria-hidden="true">#</a> 数据准备</h3><p>数据初始化配置</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>task <span class="token operator">=</span> <span class="token string">&quot;ner&quot;</span> <span class="token comment"># Should be one of &quot;ner&quot;, &quot;pos&quot; or &quot;chunk&quot;</span>
model_checkpoint <span class="token operator">=</span> <span class="token string">&quot;distilbert-base-uncased&quot;</span>
batch_size <span class="token operator">=</span> <span class="token number">16</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看训练数据</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> datasets <span class="token keyword">import</span> load_dataset<span class="token punctuation">,</span> load_metric
datasets <span class="token operator">=</span> load_dataset<span class="token punctuation">(</span><span class="token string">&quot;conll2003&quot;</span><span class="token punctuation">)</span>
<span class="token comment">## DatasetDict({</span>
<span class="token comment">##     train: Dataset({</span>
<span class="token comment">##         features: [&#39;id&#39;, &#39;tokens&#39;, &#39;pos_tags&#39;, &#39;chunk_tags&#39;, &#39;ner_tags&#39;],</span>
<span class="token comment">##         num_rows: 14041</span>
<span class="token comment">##     })</span>
<span class="token comment">##     validation: Dataset({</span>
<span class="token comment">##         features: [&#39;id&#39;, &#39;tokens&#39;, &#39;pos_tags&#39;, &#39;chunk_tags&#39;, &#39;ner_tags&#39;],</span>
<span class="token comment">##         num_rows: 3250</span>
<span class="token comment">##     })</span>
<span class="token comment">##     test: Dataset({</span>
<span class="token comment">##         features: [&#39;id&#39;, &#39;tokens&#39;, &#39;pos_tags&#39;, &#39;chunk_tags&#39;, &#39;ner_tags&#39;],</span>
<span class="token comment">##         num_rows: 3453</span>
<span class="token comment">##     })</span>
<span class="token comment">## })</span>

datasets<span class="token punctuation">[</span><span class="token string">&quot;train&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token comment">## {&#39;chunk_tags&#39;: [11, 21, 11, 12, 21, 22, 11, 12, 0],</span>
<span class="token comment">##  &#39;id&#39;: &#39;0&#39;,</span>
<span class="token comment">##  &#39;ner_tags&#39;: [3, 0, 7, 0, 0, 0, 7, 0, 0],</span>
<span class="token comment">##  &#39;pos_tags&#39;: [22, 42, 16, 21, 35, 37, 16, 21, 7],</span>
<span class="token comment">##  &#39;tokens&#39;: [&#39;EU&#39;,</span>
<span class="token comment">##   &#39;rejects&#39;,</span>
<span class="token comment">##   &#39;German&#39;,</span>
<span class="token comment">##   &#39;call&#39;,</span>
<span class="token comment">##   &#39;to&#39;,</span>
<span class="token comment">##   &#39;boycott&#39;,</span>
<span class="token comment">##   &#39;British&#39;,</span>
<span class="token comment">##   &#39;lamb&#39;,</span>
<span class="token comment">##   &#39;.&#39;]}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字段解释: <code>chunk_tags</code>: 用于chunk任务的标注 <code>id</code>: 句子的Id <code>ner_tags</code>: 用于ner任务的标注 <code>pos_tags</code>: 用于pos任务的标注 <code>tokens</code>: 句子, 列表的形式. 一个<code>token</code>就是一个<code>word</code></p><p>查看特征数据</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>datasets<span class="token punctuation">[</span><span class="token string">&quot;train&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>features<span class="token punctuation">[</span><span class="token string-interpolation"><span class="token string">f&quot;ner_tags&quot;</span></span><span class="token punctuation">]</span>

<span class="token comment">## Sequence(feature=ClassLabel(num_classes=9, names=[&#39;O&#39;, &#39;B-PER&#39;, &#39;I-PER&#39;, &#39;B-ORG&#39;, &#39;I-ORG&#39;, &#39;B-LOC&#39;, &#39;I-LOC&#39;, &#39;B-MISC&#39;, &#39;I-MISC&#39;], names_file=None, id=None), length=-1, id=None)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于NER tags:</p><ul><li>0对应&#39;O&#39;, 1对应&#39;B-PER&#39;...</li><li>有4个labels, &#39;B-&#39;(beginning), &#39;I-&#39;(intermediate) <ul><li>&#39;PER&#39; for person</li><li>&#39;ORG&#39; for organization</li><li>&#39;LOC&#39; for location</li><li>&#39;MISC&#39; for miscellaneous</li></ul></li></ul><h2 id="tokenize" tabindex="-1"><a class="header-anchor" href="#tokenize" aria-hidden="true">#</a> tokenize</h2><ol><li>注意tokenizer又可能将token继续分割成subToken.比如原始数据中的一个token <code>&quot;&#39;s&quot;</code>, 在tokenize之后, 变成了<code>&quot;&#39;&quot;</code>和<code>&quot;s&quot;</code>.</li><li>增加了<code>[CLS]</code>和<code>[SEP]</code> 也就是说标注的内容和送入模型的内容是有差异的, 我们需要处理.</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>example <span class="token operator">=</span> datasets<span class="token punctuation">[</span><span class="token string">&quot;train&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span>
<span class="token comment">## [&#39;Germany&#39;, &quot;&#39;s&quot;, &#39;representative&#39;, &#39;to&#39;, &#39;the&#39;, &#39;European&#39;, &#39;Union&#39;, &quot;&#39;s&quot;, &#39;veterinary&#39;, &#39;committee&#39;, &#39;Werner&#39;, &#39;Zwingmann&#39;, &#39;said&#39;, &#39;on&#39;, &#39;Wednesday&#39;, &#39;consumers&#39;, &#39;should&#39;, &#39;buy&#39;, &#39;sheepmeat&#39;, &#39;from&#39;, &#39;countries&#39;, &#39;other&#39;, &#39;than&#39;, &#39;Britain&#39;, &#39;until&#39;, &#39;the&#39;, &#39;scientific&#39;, &#39;advice&#39;, &#39;was&#39;, &#39;clearer&#39;, &#39;.&#39;]</span>
tokenized_input <span class="token operator">=</span> tokenizer<span class="token punctuation">(</span>example<span class="token punctuation">[</span><span class="token string">&quot;tokens&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> is_split_into_words<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
tokens <span class="token operator">=</span> tokenizer<span class="token punctuation">.</span>convert_ids_to_tokens<span class="token punctuation">(</span>tokenized_input<span class="token punctuation">[</span><span class="token string">&quot;input_ids&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">## [&#39;[CLS]&#39;, &#39;germany&#39;, &quot;&#39;&quot;, &#39;s&#39;, &#39;representative&#39;, &#39;to&#39;, &#39;the&#39;, &#39;european&#39;, &#39;union&#39;, &quot;&#39;&quot;, &#39;s&#39;, &#39;veterinary&#39;, &#39;committee&#39;, &#39;werner&#39;, &#39;z&#39;, &#39;##wing&#39;, &#39;##mann&#39;, &#39;said&#39;, &#39;on&#39;, &#39;wednesday&#39;, &#39;consumers&#39;, &#39;should&#39;, &#39;buy&#39;, &#39;sheep&#39;, &#39;##me&#39;, &#39;##at&#39;, &#39;from&#39;, &#39;countries&#39;, &#39;other&#39;, &#39;than&#39;, &#39;britain&#39;, &#39;until&#39;, &#39;the&#39;, &#39;scientific&#39;, &#39;advice&#39;, &#39;was&#39;, &#39;clearer&#39;, &#39;.&#39;, &#39;[SEP]&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 通过word_ids可以解决这个问题, </span>
<span class="token comment">## 1. 它返回了tokenize之后 相同数量的索引id, 比如\`&quot;&#39;s&quot;\`索引是1, 那么subToken的\`&quot;&#39;&quot;\`和\`&quot;s&quot;\`的id都是1. </span>
<span class="token comment">## 2. 另外将特殊的token标记为None</span>
word_ids <span class="token operator">=</span> tokenized_input<span class="token punctuation">.</span>word_ids<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## [None, 0, 1, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10, 11, 11, 11, 12, 13, 14, 15, 16, 17, 18, 18, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, None]</span>
aligned_labels <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">100</span> <span class="token keyword">if</span> i <span class="token keyword">is</span> <span class="token boolean">None</span> <span class="token keyword">else</span> example<span class="token punctuation">[</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>task<span class="token punctuation">}</span></span><span class="token string">_tags&quot;</span></span><span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> word_ids<span class="token punctuation">]</span>  <span class="token comment"># 将洗标为None的设置成-100, pytorch会忽略. 将subToken进行填充</span>


label_all_tokens <span class="token operator">=</span> <span class="token boolean">True</span>
<span class="token keyword">def</span> <span class="token function">tokenize_and_align_labels</span><span class="token punctuation">(</span>examples<span class="token punctuation">)</span><span class="token punctuation">:</span>
    tokenized_inputs <span class="token operator">=</span> tokenizer<span class="token punctuation">(</span>examples<span class="token punctuation">[</span><span class="token string">&quot;tokens&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> truncation<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> is_split_into_words<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    labels <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> i<span class="token punctuation">,</span> label <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>examples<span class="token punctuation">[</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>task<span class="token punctuation">}</span></span><span class="token string">_tags&quot;</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        word_ids <span class="token operator">=</span> tokenized_inputs<span class="token punctuation">.</span>word_ids<span class="token punctuation">(</span>batch_index<span class="token operator">=</span>i<span class="token punctuation">)</span>
        previous_word_idx <span class="token operator">=</span> <span class="token boolean">None</span>
        label_ids <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> word_idx <span class="token keyword">in</span> word_ids<span class="token punctuation">:</span>
            <span class="token comment"># Special tokens have a word id that is None. We set the label to -100 so they are automatically</span>
            <span class="token comment"># ignored in the loss function.</span>
            <span class="token keyword">if</span> word_idx <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
                label_ids<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">100</span><span class="token punctuation">)</span>
            <span class="token comment"># We set the label for the first token of each word.</span>
            <span class="token keyword">elif</span> word_idx <span class="token operator">!=</span> previous_word_idx<span class="token punctuation">:</span>
                label_ids<span class="token punctuation">.</span>append<span class="token punctuation">(</span>label<span class="token punctuation">[</span>word_idx<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token comment"># For the other tokens in a word, we set the label to either the current label or -100, depending on</span>
            <span class="token comment"># the label_all_tokens flag.</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                label_ids<span class="token punctuation">.</span>append<span class="token punctuation">(</span>label<span class="token punctuation">[</span>word_idx<span class="token punctuation">]</span> <span class="token keyword">if</span> label_all_tokens <span class="token keyword">else</span> <span class="token operator">-</span><span class="token number">100</span><span class="token punctuation">)</span>
            previous_word_idx <span class="token operator">=</span> word_idx
        labels<span class="token punctuation">.</span>append<span class="token punctuation">(</span>label_ids<span class="token punctuation">)</span>
    tokenized_inputs<span class="token punctuation">[</span><span class="token string">&quot;labels&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> labels
    <span class="token keyword">return</span> tokenized_inputs

tokenized_datasets <span class="token operator">=</span> datasets<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span>tokenize_and_align_labels<span class="token punctuation">,</span> batched<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fine-tunning" tabindex="-1"><a class="header-anchor" href="#fine-tunning" aria-hidden="true">#</a> Fine-tunning</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoModelForTokenClassification<span class="token punctuation">,</span> TrainingArguments<span class="token punctuation">,</span> Trainer
model <span class="token operator">=</span> AutoModelForTokenClassification<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span>model_checkpoint<span class="token punctuation">,</span> num_labels<span class="token operator">=</span><span class="token builtin">len</span><span class="token punctuation">(</span>label_list<span class="token punctuation">)</span><span class="token punctuation">)</span>
model_name <span class="token operator">=</span> model_checkpoint<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>

<span class="token comment">## 设置训练的超参数</span>
args <span class="token operator">=</span> TrainingArguments<span class="token punctuation">(</span> 
    <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>model_name<span class="token punctuation">}</span></span><span class="token string">-finetuned-</span><span class="token interpolation"><span class="token punctuation">{</span>task<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span>
    evaluation_strategy <span class="token operator">=</span> <span class="token string">&quot;epoch&quot;</span><span class="token punctuation">,</span>
    learning_rate<span class="token operator">=</span><span class="token number">2e-5</span><span class="token punctuation">,</span>
    per_device_train_batch_size<span class="token operator">=</span>batch_size<span class="token punctuation">,</span>
    per_device_eval_batch_size<span class="token operator">=</span>batch_size<span class="token punctuation">,</span>
    num_train_epochs<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span>
    weight_decay<span class="token operator">=</span><span class="token number">0.01</span><span class="token punctuation">,</span>
    push_to_hub<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>


<span class="token comment">## 相当于pytorch的DataLoader</span>
<span class="token keyword">from</span> transformers <span class="token keyword">import</span> DataCollatorForTokenClassification
data_collator <span class="token operator">=</span> DataCollatorForTokenClassification<span class="token punctuation">(</span>tokenizer<span class="token punctuation">)</span>  

<span class="token comment">## 设置评估指标</span>
metric <span class="token operator">=</span> load_metric<span class="token punctuation">(</span><span class="token string">&quot;seqeval&quot;</span><span class="token punctuation">)</span>  
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

<span class="token keyword">def</span> <span class="token function">compute_metrics</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">:</span>
    predictions<span class="token punctuation">,</span> labels <span class="token operator">=</span> p
    predictions <span class="token operator">=</span> np<span class="token punctuation">.</span>argmax<span class="token punctuation">(</span>predictions<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>

    <span class="token comment"># Remove ignored index (special tokens)</span>
    true_predictions <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>label_list<span class="token punctuation">[</span>p<span class="token punctuation">]</span> <span class="token keyword">for</span> <span class="token punctuation">(</span>p<span class="token punctuation">,</span> l<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token builtin">zip</span><span class="token punctuation">(</span>prediction<span class="token punctuation">,</span> label<span class="token punctuation">)</span> <span class="token keyword">if</span> l <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">100</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> prediction<span class="token punctuation">,</span> label <span class="token keyword">in</span> <span class="token builtin">zip</span><span class="token punctuation">(</span>predictions<span class="token punctuation">,</span> labels<span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
    true_labels <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>label_list<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token keyword">for</span> <span class="token punctuation">(</span>p<span class="token punctuation">,</span> l<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token builtin">zip</span><span class="token punctuation">(</span>prediction<span class="token punctuation">,</span> label<span class="token punctuation">)</span> <span class="token keyword">if</span> l <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">100</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> prediction<span class="token punctuation">,</span> label <span class="token keyword">in</span> <span class="token builtin">zip</span><span class="token punctuation">(</span>predictions<span class="token punctuation">,</span> labels<span class="token punctuation">)</span>
    <span class="token punctuation">]</span>

    results <span class="token operator">=</span> metric<span class="token punctuation">.</span>compute<span class="token punctuation">(</span>predictions<span class="token operator">=</span>true_predictions<span class="token punctuation">,</span> references<span class="token operator">=</span>true_labels<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;precision&quot;</span><span class="token punctuation">:</span> results<span class="token punctuation">[</span><span class="token string">&quot;overall_precision&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&quot;recall&quot;</span><span class="token punctuation">:</span> results<span class="token punctuation">[</span><span class="token string">&quot;overall_recall&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&quot;f1&quot;</span><span class="token punctuation">:</span> results<span class="token punctuation">[</span><span class="token string">&quot;overall_f1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&quot;accuracy&quot;</span><span class="token punctuation">:</span> results<span class="token punctuation">[</span><span class="token string">&quot;overall_accuracy&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开始训练</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>trainer <span class="token operator">=</span> Trainer<span class="token punctuation">(</span>
    model<span class="token punctuation">,</span>
    args<span class="token punctuation">,</span>
    train_dataset<span class="token operator">=</span>tokenized_datasets<span class="token punctuation">[</span><span class="token string">&quot;train&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    eval_dataset<span class="token operator">=</span>tokenized_datasets<span class="token punctuation">[</span><span class="token string">&quot;validation&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    data_collator<span class="token operator">=</span>data_collator<span class="token punctuation">,</span>
    tokenizer<span class="token operator">=</span>tokenizer<span class="token punctuation">,</span>
    compute_metrics<span class="token operator">=</span>compute_metrics
<span class="token punctuation">)</span>
trainer<span class="token punctuation">.</span>train<span class="token punctuation">(</span><span class="token punctuation">)</span>
trainer<span class="token punctuation">.</span>evaluate<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">## 获得每个种类的评估指标</span>
predictions<span class="token punctuation">,</span> labels<span class="token punctuation">,</span> _ <span class="token operator">=</span> trainer<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>tokenized_datasets<span class="token punctuation">[</span><span class="token string">&quot;validation&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
predictions <span class="token operator">=</span> np<span class="token punctuation">.</span>argmax<span class="token punctuation">(</span>predictions<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment">## Remove ignored index (special tokens)</span>
true_predictions <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>label_list<span class="token punctuation">[</span>p<span class="token punctuation">]</span> <span class="token keyword">for</span> <span class="token punctuation">(</span>p<span class="token punctuation">,</span> l<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token builtin">zip</span><span class="token punctuation">(</span>prediction<span class="token punctuation">,</span> label<span class="token punctuation">)</span> <span class="token keyword">if</span> l <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">100</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> prediction<span class="token punctuation">,</span> label <span class="token keyword">in</span> <span class="token builtin">zip</span><span class="token punctuation">(</span>predictions<span class="token punctuation">,</span> labels<span class="token punctuation">)</span>
<span class="token punctuation">]</span>
true_labels <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>label_list<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token keyword">for</span> <span class="token punctuation">(</span>p<span class="token punctuation">,</span> l<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token builtin">zip</span><span class="token punctuation">(</span>prediction<span class="token punctuation">,</span> label<span class="token punctuation">)</span> <span class="token keyword">if</span> l <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">100</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> prediction<span class="token punctuation">,</span> label <span class="token keyword">in</span> <span class="token builtin">zip</span><span class="token punctuation">(</span>predictions<span class="token punctuation">,</span> labels<span class="token punctuation">)</span>
<span class="token punctuation">]</span>

results <span class="token operator">=</span> metric<span class="token punctuation">.</span>compute<span class="token punctuation">(</span>predictions<span class="token operator">=</span>true_predictions<span class="token punctuation">,</span> references<span class="token operator">=</span>true_labels<span class="token punctuation">)</span>
results
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/token_classification.ipynb</p>`,23),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(e,[["render",i],["__file","tokenClassification.html.vue"]]);export{d as default};
