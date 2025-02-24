import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as l,c as p,a as e,b as n,d as s,w as r,e as t}from"./app-A10JnHE0.js";const d={},u=t(`<h1 id="model" tabindex="-1"><a class="header-anchor" href="#model" aria-hidden="true">#</a> model</h1><p>get pre_trained model.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoModel
checkpoint <span class="token operator">=</span> <span class="token string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
model <span class="token operator">=</span> AutoModel<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span>checkpoint<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This architecture contains only the base Transformer module: given some inputs, it outputs what we’ll call <code>hidden states</code>, also known as <code>features</code>.</p><h3 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> input</h3><p>For each model <code>input</code>, we’ll retrieve a high-dimensional vector representing the contextual understanding of that input by the Transformer model.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoTokenizer
tokenizer <span class="token operator">=</span> AutoTokenizer<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span><span class="token string">&quot;bert-base-cased&quot;</span><span class="token punctuation">)</span>
encoded_input <span class="token operator">=</span> tokenizer<span class="token punctuation">(</span><span class="token string">&quot;Do not meddle in the affairs of wizards, for they are subtle and quick to anger.&quot;</span><span class="token punctuation">)</span>
<span class="token comment">## {&#39;input_ids&#39;: [101, 2079, 2025, 19960, 10362, 1999, 1996, 3821, 1997, 16657, 1010, 2005, 2027, 2024, 11259, 1998, 4248, 2000, 4963, 1012, 102], </span>
<span class="token comment">##  &#39;token_type_ids&#39;: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], </span>
<span class="token comment">##  &#39;attention_mask&#39;: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> output</h3><p>output always contains:</p><ul><li>Batch size: The number of sequences processed at a time (2 in our example).</li><li>Sequence length: The length of the numerical representation of the sequence (16 in our example).</li><li>Hidden size: The vector dimension of each model input. It is said to be <code>high dimensional</code> because of the last value. The hidden size can be very large (768 is common for smaller models, and in larger models this can reach 3072 or more).</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoModel
checkpoint <span class="token operator">=</span> <span class="token string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
model <span class="token operator">=</span> AutoModel<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span>checkpoint<span class="token punctuation">)</span>
outputs <span class="token operator">=</span> model<span class="token punctuation">(</span><span class="token operator">**</span>inputs<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>outputs<span class="token punctuation">.</span>last_hidden_state<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>
torch<span class="token punctuation">.</span>Size<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">768</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="head" tabindex="-1"><a class="header-anchor" href="#head" aria-hidden="true">#</a> head</h3><p>While these <code>hidden states</code> can be useful on their own, they’re usually inputs to another part of the model, known as the <code>head</code>.The different tasks could have been performed with the same <code>architecture</code>, but each of these tasks will have a different <code>head</code> associated with it.</p><p><img src="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter2/transformer_and_head.svg" alt="" loading="lazy"> In this diagram, the model is represented by its embeddings layer and the subsequent layers. The embeddings layer converts each input ID in the tokenized input into a vector that represents the associated token. The subsequent layers manipulate those vectors using the attention mechanism to produce the final representation of the sentences. For our example, we will need a model with a sequence classification head (to be able to classify the sentences as positive or negative)</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoModelForSequenceClassification
checkpoint <span class="token operator">=</span> <span class="token string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
model <span class="token operator">=</span> AutoModelForSequenceClassification<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span>checkpoint<span class="token punctuation">)</span>
outputs <span class="token operator">=</span> model<span class="token punctuation">(</span><span class="token operator">**</span>inputs<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>outputs<span class="token punctuation">.</span>logits<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>
<span class="token comment">## torch.Size([2, 2])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="output-head" tabindex="-1"><a class="header-anchor" href="#output-head" aria-hidden="true">#</a> output &amp; head</h3>`,16),m=e("code",null,"AutoModel",-1),h=e("code",null,"hidden state",-1),k=e("code",null,"AutoModelForSequenceClassification",-1),v=e("code",null,"head",-1),g=t(`<h3 id="load-save" tabindex="-1"><a class="header-anchor" href="#load-save" aria-hidden="true">#</a> load &amp; save</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> transformers <span class="token keyword">import</span> BertConfig<span class="token punctuation">,</span> BertModel
config <span class="token operator">=</span> BertConfig<span class="token punctuation">(</span><span class="token punctuation">)</span>
model <span class="token operator">=</span> BertModel<span class="token punctuation">(</span>config<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>this model will output gibberish, it needs to be trained first. it will cost a lot. so, we should reuse models that have already been trained.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> transformers <span class="token keyword">import</span> BertModel
model <span class="token operator">=</span> BertModel<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span><span class="token string">&quot;bert-base-cased&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>BertModel</code> is equal <code>AutoModel</code> class. we don&#39;t need to use <code>BertConfig</code>, instead load a pretrained mode via <code>bert-base-cased</code> identifier.</p><p>after finetuning, we can use <code>save_pretrained()</code> to save the model. it is analogous to <code>from_pretrained()</code> method.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>model<span class="token punctuation">.</span>save_pretrained<span class="token punctuation">(</span><span class="token string">&quot;directory_on_my_computer&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>this method will create two file: <code>config.json</code> : including some attributes to build the model architecture and some information about version. <code>pytorch_model.bin</code> : known as <code>state dictionary</code>, contains all weights.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> directory_on_my_computer
config.json pytorch_model.bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="predict" tabindex="-1"><a class="header-anchor" href="#predict" aria-hidden="true">#</a> predict</h3>`,10),f={href:"https://huggingface.co/models",target:"_blank",rel:"noopener noreferrer"},b=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>model <span class="token operator">=</span> AutoModelForSequenceClassification<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span><span class="token string">&#39;mode_name&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## Some weights of the model checkpoint at ./pretraind_model/distilbert-base-uncased were not used when initializing DistilBertForSequenceClassification: [&#39;vocab_transform.bias&#39;, &#39;vocab_transform.weight&#39;, &#39;vocab_layer_norm.bias&#39;, &#39;vocab_projector.bias&#39;, &#39;vocab_layer_norm.weight&#39;, &#39;vocab_projector.weight&#39;]</span>
<span class="token comment">## - This IS expected if you are initializing DistilBertForSequenceClassification from the checkpoint of a model trained on another task or with another architecture (e.g. initializing a BertForSequenceClassification model from a BertForPreTraining model).</span>
<span class="token comment">## - This IS NOT expected if you are initializing DistilBertForSequenceClassification from the checkpoint of a model that you expect to be exactly identical (initializing a BertForSequenceClassification model from a BertForSequenceClassification model).</span>
<span class="token comment">## Some weights of DistilBertForSequenceClassification were not initialized from the model checkpoint at ./pretraind_model/distilbert-base-uncased and are newly initialized: [&#39;pre_classifier.weight&#39;, &#39;pre_classifier.bias&#39;, &#39;classifier.bias&#39;, &#39;classifier.weight&#39;]</span>
<span class="token comment">## You should probably TRAIN this model on a down-stream task to be able to use it for predictions and inference.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>you will see the red warnings. It tells that the model doesn&#39;t fit your customized task, you should finetuning it before you use it. every time we load the model, the <code>model.classifier.weight</code> is random initialization. the default <code>num_labels</code> is 2, but even if you specify the <code>num_lables</code> as 8, it still randomly init.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>model<span class="token punctuation">.</span>classifier<span class="token punctuation">.</span>weight<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>after you finetuning the model, and save it:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>model <span class="token operator">=</span> AutoModelForSequenceClassification<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span><span class="token string">&#39;pretraining_model&#39;</span><span class="token punctuation">,</span> num_labels<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">)</span>
<span class="token comment">## Assume training code here...</span>
model<span class="token punctuation">.</span>save_pretrained<span class="token punctuation">(</span><span class="token string">&quot;./finetuning_model&quot;</span><span class="token punctuation">)</span>
tokenizer<span class="token punctuation">.</span>save_pretrained<span class="token punctuation">(</span><span class="token string">&quot;./finetuning_model&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>then you load the finetuning model:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>model <span class="token operator">=</span> AutoModelForSequenceClassification<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span><span class="token string">&#39;finetuning_model&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Notice: this time, the console doesn&#39;t output the red warnings, because we load the finetuning(training in out task) model.</p><p>this time, regardless how many times you load the mode, the <code>model.classifier.weight</code> is always same. and you can&#39;t change the <code>num_labels</code> from the finetuning model.huggingface is smart to tell <code>pretrained</code> model and <code>finetuning</code> model. I didn&#39;t find how huggingface do this, but it is what it is.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>model <span class="token operator">=</span> AutoModelForSequenceClassification<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span><span class="token string">&#39;finetuning_model&#39;</span><span class="token punctuation">)</span> <span class="token comment">#  num_labels=8</span>
model <span class="token operator">=</span> AutoModelForSequenceClassification<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span><span class="token string">&#39;finetuning_model&#39;</span><span class="token punctuation">,</span> num_labels<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">)</span> <span class="token comment">#  num_labels=8</span>
model <span class="token operator">=</span> AutoModelForSequenceClassification<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span><span class="token string">&#39;finetuning_model&#39;</span><span class="token punctuation">,</span> num_labels<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">#  error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),_={href:"https://huggingface.co/course/chapter2/2?fw=pt",target:"_blank",rel:"noopener noreferrer"},y={href:"https://huggingface.co/course/chapter2/3?fw=pt",target:"_blank",rel:"noopener noreferrer"};function w(q,x){const i=o("RouterLink"),a=o("ExternalLinkIcon");return l(),p("div",null,[u,e("p",null,[m,n("'s output is "),h,k,n(" 's output is "),v,s(i,{to:"/transformers_bert/"},{default:r(()=>[n("ref")]),_:1})]),g,e("p",null,[n("when you first load pretraining model from "),e("a",f,[n("hub"),s(a)]),n(":")]),b,e("p",null,[n("ref: "),e("a",_,[n("Behind the pipeline"),s(a)]),e("a",y,[n("Models"),s(a)])])])}const B=c(d,[["render",w],["__file","model.html.vue"]]);export{B as default};
