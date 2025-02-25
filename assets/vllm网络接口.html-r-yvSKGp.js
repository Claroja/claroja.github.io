import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-7knaTE3M.js";const t={},i=e(`<h2 id="模型分类" tabindex="-1"><a class="header-anchor" href="#模型分类" aria-hidden="true">#</a> 模型分类</h2><p>模型名称| DeepSeek-R1-Zero DeepSeek-R1 DeepSeek-R1-Distill-Qwen DeepSeek-R1-Distill-Llama</p><h2 id="创建兼容-openai-api-接口的服务器" tabindex="-1"><a class="header-anchor" href="#创建兼容-openai-api-接口的服务器" aria-hidden="true">#</a> 创建兼容 OpenAI API 接口的服务器</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python <span class="token parameter variable">-m</span> vllm.entrypoints.openai.api_server <span class="token punctuation">\\</span>
  <span class="token parameter variable">--model</span> /root/autodl-tmp/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B <span class="token punctuation">\\</span>
  --served-model-name DeepSeek-R1-Distill-Qwen-7B <span class="token punctuation">\\</span>
  --max-model-len<span class="token operator">=</span><span class="token number">2048</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="调用" tabindex="-1"><a class="header-anchor" href="#调用" aria-hidden="true">#</a> 调用</h2><h3 id="completions" tabindex="-1"><a class="header-anchor" href="#completions" aria-hidden="true">#</a> Completions</h3><p>completions：是基本的文本生成任务，模型会在给定的提示后生成一段文本。这种类型的任务通常用于生成文章、故事、邮件等。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># vllm_openai_completions.py</span>
<span class="token keyword">from</span> openai <span class="token keyword">import</span> OpenAI
client <span class="token operator">=</span> OpenAI<span class="token punctuation">(</span>
    base_url<span class="token operator">=</span><span class="token string">&quot;http://localhost:8000/v1&quot;</span><span class="token punctuation">,</span>
    api_key<span class="token operator">=</span><span class="token string">&quot;sk-xxx&quot;</span><span class="token punctuation">,</span> <span class="token comment"># 随便填写，只是为了通过接口参数校验</span>
<span class="token punctuation">)</span>

completion <span class="token operator">=</span> client<span class="token punctuation">.</span>chat<span class="token punctuation">.</span>completions<span class="token punctuation">.</span>create<span class="token punctuation">(</span>
  model<span class="token operator">=</span><span class="token string">&quot;DeepSeek-R1-Distill-Qwen-7B&quot;</span><span class="token punctuation">,</span>
  messages<span class="token operator">=</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token string">&quot;role&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;我想问你，5的阶乘是多少？&lt;think&gt;\\n&quot;</span><span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>completion<span class="token punctuation">.</span>choices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="chat-completions" tabindex="-1"><a class="header-anchor" href="#chat-completions" aria-hidden="true">#</a> Chat Completions</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># vllm_openai_chat_completions.py</span>
<span class="token keyword">from</span> openai <span class="token keyword">import</span> OpenAI
openai_api_key <span class="token operator">=</span> <span class="token string">&quot;sk-xxx&quot;</span> <span class="token comment"># 随便填写，只是为了通过接口参数校验</span>
openai_api_base <span class="token operator">=</span> <span class="token string">&quot;http://localhost:8000/v1&quot;</span>

client <span class="token operator">=</span> OpenAI<span class="token punctuation">(</span>
    api_key<span class="token operator">=</span>openai_api_key<span class="token punctuation">,</span>
    base_url<span class="token operator">=</span>openai_api_base<span class="token punctuation">,</span>
<span class="token punctuation">)</span>

chat_outputs <span class="token operator">=</span> client<span class="token punctuation">.</span>chat<span class="token punctuation">.</span>completions<span class="token punctuation">.</span>create<span class="token punctuation">(</span>
    model<span class="token operator">=</span><span class="token string">&quot;DeepSeek-R1-Distill-Qwen-7B&quot;</span><span class="token punctuation">,</span>
    messages<span class="token operator">=</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token string">&quot;role&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;什么是深度学习？&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>chat_outputs<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="显卡要求" tabindex="-1"><a class="header-anchor" href="#显卡要求" aria-hidden="true">#</a> 显卡要求</h2><ol><li>单卡4090 <ol><li>DeepSeek-R1-Distill-Qwen-1.5B</li><li>DeepSeek-R1-Distill-Qwen-7B</li><li>DeepSeek-R1-Distill-Llama-8B</li></ol></li><li>2卡4090 <ol><li>DeepSeek-R1-Distill-Qwen-14B</li></ol></li><li>4卡4090 <ol><li>DeepSeek-R1-Distill-Qwen-32B</li></ol></li><li>8卡4090 <ol><li>DeepSeek-R1-Distill-Llama-70B</li></ol></li></ol><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://github.com/datawhalechina/self-llm/blob/master/models/DeepSeek-R1-Distill-Qwen/04-DeepSeek-R1-Distill-Qwen-7B%20vLLM%20%E9%83%A8%E7%BD%B2%E8%B0%83%E7%94%A8.md</li><li>https://www.zhihu.com/tardis/bd/art/21641988403?source_id=1001</li><li>https://www.cnblogs.com/menkeyi/p/18707043</li><li>https://cloud.tencent.com/developer/article/2493853</li><li>https://www.oschina.net/news/321572</li></ol>`,14),p=[i];function o(l,c){return s(),a("div",null,p)}const d=n(t,[["render",o],["__file","vllm网络接口.html.vue"]]);export{d as default};
