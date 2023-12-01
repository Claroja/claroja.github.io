import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e as t}from"./app-MTzDpLgJ.js";const e={},c=t(`<h1 id="save" tabindex="-1"><a class="header-anchor" href="#save" aria-hidden="true">#</a> save</h1><h2 id="序列化与反序列化" tabindex="-1"><a class="header-anchor" href="#序列化与反序列化" aria-hidden="true">#</a> 序列化与反序列化</h2><ul><li>序列化把内存中的某一个对象保存到硬盘当中，以二进制序列的形式存储下来</li><li>反序列化 将硬盘中存储的二进制的数，反序列化到内存当中，得到一个相应的对象</li></ul><p>pytorch内置了序列化和反序列化的方法:</p><ul><li>序列化: <code>torch.save(obj, f)</code>, <code>obj</code>可以是数据,模型或张量, <code>f</code>是要保存的位置路径</li><li>反序列化: <code>torch.load(f, map_location)</code>, <code>f</code>表示位置路径, <code>map_location</code>指设备CPU或GPU</li></ul><h2 id="保存的两种方式" tabindex="-1"><a class="header-anchor" href="#保存的两种方式" aria-hidden="true">#</a> 保存的两种方式</h2><h3 id="保存整个模型" tabindex="-1"><a class="header-anchor" href="#保存整个模型" aria-hidden="true">#</a> 保存整个模型</h3><p>保存整个模型架构, 比较费时和占用空间. 在上线时用.</p><p><code>torch.save (net, path)</code></p><p><code>torch.load (fpath)</code></p><h3 id="仅保存参数" tabindex="-1"><a class="header-anchor" href="#仅保存参数" aria-hidden="true">#</a> 仅保存参数</h3><p>仅保存模型的参数, 比较快, 省空间. 在checkpoint时使用</p><p><code>torch.save(net.state_dict(), path)</code></p><p><code>model.load_state_dict(torch.load(path))</code></p><h2 id="checkpoint" tabindex="-1"><a class="header-anchor" href="#checkpoint" aria-hidden="true">#</a> checkpoint</h2><p>如果训练时间过长, 中间可能出现意外, 比如断电. 所以需要记录每次训练的结果, 实现从断点处继续训练. 我们需要保存的是:</p><ul><li>模型的参数, <code>model.state_dict()</code></li><li>训练次数, <code>epoch</code></li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>torch<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token string">&#39;epoch&#39;</span><span class="token punctuation">:</span> epoch<span class="token punctuation">,</span>
            <span class="token string">&#39;model_state_dict&#39;</span><span class="token punctuation">:</span> model<span class="token punctuation">.</span>state_dict<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> PATH<span class="token punctuation">)</span>
checkpoint <span class="token operator">=</span> torch<span class="token punctuation">.</span>load<span class="token punctuation">(</span>PATH<span class="token punctuation">)</span>
start_epoch<span class="token operator">=</span>checkpoint<span class="token punctuation">[</span><span class="token string">&#39;epoch&#39;</span><span class="token punctuation">]</span>
model<span class="token punctuation">.</span>load_state_dict<span class="token punctuation">(</span>checkpoint<span class="token punctuation">[</span><span class="token string">&#39;model_state_dict&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
model<span class="token punctuation">.</span><span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
model<span class="token punctuation">.</span>train<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://blog.csdn.net/weixin_39533659/article/details/111173642 https://blog.csdn.net/joyce_peng/article/details/104133594</p>`,19),o=[c];function p(i,l){return a(),s("div",null,o)}const r=n(e,[["render",p],["__file","save.html.vue"]]);export{r as default};
