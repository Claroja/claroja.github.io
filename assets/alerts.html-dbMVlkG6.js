import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e}from"./app-A10JnHE0.js";const t={},i=e(`<h1 id="alerts" tabindex="-1"><a class="header-anchor" href="#alerts" aria-hidden="true">#</a> alerts</h1><h2 id="alerts-1" tabindex="-1"><a class="header-anchor" href="#alerts-1" aria-hidden="true">#</a> Alerts</h2><p>仅有一个按键的alert</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## Click the link to activate the alert</span>
driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>LINK_TEXT<span class="token punctuation">,</span> <span class="token string">&quot;See an example alert&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">## Wait for the alert to be displayed and store it in a variable</span>
alert <span class="token operator">=</span> wait<span class="token punctuation">.</span>until<span class="token punctuation">(</span>expected_conditions<span class="token punctuation">.</span>alert_is_present<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## Store the alert text in a variable</span>
text <span class="token operator">=</span> alert<span class="token punctuation">.</span>text

<span class="token comment">## Press the OK button</span>
alert<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="confirm" tabindex="-1"><a class="header-anchor" href="#confirm" aria-hidden="true">#</a> Confirm</h2><p>有确认和取消两个按键的alert</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## Click the link to activate the alert</span>
driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>LINK_TEXT<span class="token punctuation">,</span> <span class="token string">&quot;See a sample confirm&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">## Wait for the alert to be displayed</span>
wait<span class="token punctuation">.</span>until<span class="token punctuation">(</span>expected_conditions<span class="token punctuation">.</span>alert_is_present<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## Store the alert in a variable for reuse</span>
alert <span class="token operator">=</span> driver<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>alert

<span class="token comment">## Store the alert text in a variable</span>
text <span class="token operator">=</span> alert<span class="token punctuation">.</span>text

<span class="token comment">## Press the Cancel button</span>
alert<span class="token punctuation">.</span>dismiss<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="prompt" tabindex="-1"><a class="header-anchor" href="#prompt" aria-hidden="true">#</a> Prompt</h2><p>可以输入文本的alert</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## Click the link to activate the alert</span>
driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>LINK_TEXT<span class="token punctuation">,</span> <span class="token string">&quot;See a sample prompt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">## Wait for the alert to be displayed</span>
wait<span class="token punctuation">.</span>until<span class="token punctuation">(</span>expected_conditions<span class="token punctuation">.</span>alert_is_present<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## Store the alert in a variable for reuse</span>
alert <span class="token operator">=</span> Alert<span class="token punctuation">(</span>driver<span class="token punctuation">)</span>

<span class="token comment">## Type your message</span>
alert<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&quot;Selenium&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## Press the OK button</span>
alert<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),p=[i];function c(l,o){return a(),s("div",null,p)}const d=n(t,[["render",c],["__file","alerts.html.vue"]]);export{d as default};
