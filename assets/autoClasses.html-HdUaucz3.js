import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as p,c,b as s,d as n,e,a as o}from"./app-9tftCahk.js";const i={},l=o(`<h1 id="autoclasses" tabindex="-1"><a class="header-anchor" href="#autoclasses" aria-hidden="true">#</a> autoClasses</h1><h2 id="初始化模型" tabindex="-1"><a class="header-anchor" href="#初始化模型" aria-hidden="true">#</a> 初始化模型</h2><p><code>from_retrained()</code>方法通过pretrained model的name和path来加载模型</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>model <span class="token operator">=</span> AutoModel<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span><span class="token string">&quot;bert-base-cased&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),d={href:"https://huggingface.co/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertModel",target:"_blank",rel:"noopener noreferrer"},u={href:"https://huggingface.co/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig",target:"_blank",rel:"noopener noreferrer"},m=s("code",null,"torch.nn.Module",-1),k=s("code",null,"pytorch",-1),h={href:"https://huggingface.co/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertModel",target:"_blank",rel:"noopener noreferrer"},f=o(`<ol><li>加载模型配置</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoConfig
config <span class="token operator">=</span> AutoConfig<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span><span class="token string">&quot;bert-base-uncased&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>加载model</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoConfig<span class="token punctuation">,</span> AutoModel
config <span class="token operator">=</span> AutoConfig<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span><span class="token string">&quot;bert-base-uncased&quot;</span><span class="token punctuation">)</span>
model <span class="token operator">=</span> AutoModel<span class="token punctuation">.</span>from_config<span class="token punctuation">(</span>config<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="初始化-tokenizer" tabindex="-1"><a class="header-anchor" href="#初始化-tokenizer" aria-hidden="true">#</a> 初始化 Tokenizer</h2>`,5),v={href:"https://huggingface.co/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer",target:"_blank",rel:"noopener noreferrer"},_=o(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoTokenizer
tokenizer <span class="token operator">=</span> AutoTokenizer<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span><span class="token string">&quot;bert-base-uncased&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="输出结果" tabindex="-1"><a class="header-anchor" href="#输出结果" aria-hidden="true">#</a> 输出结果</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoModelForSequenceClassification
pt_batch <span class="token operator">=</span> tokenizer<span class="token punctuation">(</span>
    <span class="token punctuation">[</span><span class="token string">&quot;We are very happy to show you the 🤗 Transformers library.&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;We hope you don&#39;t hate it.&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    padding<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    truncation<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    max_length<span class="token operator">=</span><span class="token number">512</span><span class="token punctuation">,</span>
    return_tensors<span class="token operator">=</span><span class="token string">&quot;pt&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
model_name <span class="token operator">=</span> <span class="token string">&quot;nlptown/bert-base-multilingual-uncased-sentiment&quot;</span>
pt_model <span class="token operator">=</span> AutoModelForSequenceClassification<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span>model_name<span class="token punctuation">)</span>
pt_outputs <span class="token operator">=</span> pt_model<span class="token punctuation">(</span><span class="token operator">**</span>pt_batch<span class="token punctuation">)</span>
<span class="token keyword">from</span> torch <span class="token keyword">import</span> nn
pt_predictions <span class="token operator">=</span> nn<span class="token punctuation">.</span>functional<span class="token punctuation">.</span>softmax<span class="token punctuation">(</span>pt_outputs<span class="token punctuation">.</span>logits<span class="token punctuation">,</span> dim<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>pt_predictions<span class="token punctuation">)</span>
<span class="token comment">## tensor([[0.0021, 0.0018, 0.0115, 0.2121, 0.7725],</span>
<span class="token comment">##         [0.2084, 0.1826, 0.1969, 0.1755, 0.2365]], grad_fn=&lt;SoftmaxBackward0&gt;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="automodelforsequenceclassification-vs-automodel" tabindex="-1"><a class="header-anchor" href="#automodelforsequenceclassification-vs-automodel" aria-hidden="true">#</a> automodelforsequenceclassification-vs-automodel</h2>`,4),b=s("code",null,"AutoTokenizer",-1),g=s("code",null,"AutoModelFor",-1),y=s("code",null,"AutoModel",-1),q={href:"https://huggingface.co/docs/transformers/autoclass_tutorial#automodel",target:"_blank",rel:"noopener noreferrer"},x=s("p",null,"https://stackoverflow.com/questions/69907682/what-are-differences-between-automodelforsequenceclassification-vs-automodel",-1),w=s("p",null,"参考: https://huggingface.co/docs/transformers/v4.20.1/en/model_doc/bert https://huggingface.co/docs/transformers/model_doc/auto",-1);function A(z,B){const a=r("ExternalLinkIcon");return p(),c("div",null,[l,s("p",null,[n("以上代码加载了"),s("a",d,[n("BertModel"),e(a)]),n(", 主要包含了")]),s("p",null,[n("BertConfig: 存储了bert模型的配置.比如: vocab_size(语料库的大小, 决定了inputs_ids的范围),hidden_size(隐藏层的大小),num_hidden_layers(隐藏层的层数)等."),s("a",u,[n("参考官网"),e(a)]),n(" BertModel: 输出raw hidden-states, 没有最终的softmax等. 是"),m,n("的子类, 可以像"),k,n("一样操作. "),s("a",h,[n("参考官网"),e(a)])]),f,s("p",null,[n("BertTokenizer: 在pretrained model vocabulary初始化制作token的类. "),s("a",v,[n("参考官网"),e(a)])]),_,s("p",null,[n("建议使用"),b,n("类和"),g,n("类来加载模型, 而不是使用"),y,n("类来加载. "),s("a",q,[n("参考官网"),e(a)])]),x,w])}const T=t(i,[["render",A],["__file","autoClasses.html.vue"]]);export{T as default};
