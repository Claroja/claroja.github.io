import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-SnI5rGHA.js";const p={},e=t(`<h1 id="keyboardevent" tabindex="-1"><a class="header-anchor" href="#keyboardevent" aria-hidden="true">#</a> keyboardEvent</h1><h2 id="键盘事件" tabindex="-1"><a class="header-anchor" href="#键盘事件" aria-hidden="true">#</a> 键盘事件</h2><table><thead><tr><th>键盘事件</th><th>触发条件</th></tr></thead><tbody><tr><td>onkeyup</td><td>某个键盘按键被松开时触发</td></tr><tr><td>onkeydown</td><td>某个键盘按键被按下时触发</td></tr><tr><td>onkeypress(官方要废弃, 不建议使用)</td><td>某个键盘按键被按下时触发, 但是它不识别功能键 比如ctrl shift箭头等</td></tr></tbody></table><p>例子:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// 常用的键盘事件</span>
        <span class="token comment">//1. keyup 按键弹起的时候触发 </span>
        document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;keyup&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我弹起了&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment">//3. keypress 按键按下的时候触发  不能识别功能键 比如 ctrl shift 左右箭头啊</span>
        document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;keypress&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我按下了press&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment">//2. keydown 按键按下的时候触发  能识别功能键 比如 ctrl shift 左右箭头啊</span>
        document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;keydown&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我按下了down&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment">// 4. 三个事件的执行顺序  keydown -- keypress -- keyup</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="键盘事件对象" tabindex="-1"><a class="header-anchor" href="#键盘事件对象" aria-hidden="true">#</a> 键盘事件对象</h2><table><thead><tr><th>键盘事件对象属性</th><th>说明</th></tr></thead><tbody><tr><td>keyCode</td><td>返回该键的ASCII值</td></tr></tbody></table><p>键盘事件对象中的keyCode属性可以得到相应键的ASCII码值 1.我们的keyup 和keydown事件不区分字母大小写 a和A得到的都是65, 开发中更多使用 2.我们的keypress 事件区分字母大小写 a 97和A得到的是65</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
       <span class="token comment">// 键盘事件对象中的keyCode属性可以得到相应键的ASCII码值</span>
       <span class="token comment">// 1. 我们的keyup 和keydown事件不区分字母大小写  a 和 A 得到的都是65</span>
       <span class="token comment">// 2. 我们的keypress 事件 区分字母大小写  a  97 和 A 得到的是65</span>
       document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;keyup&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;up:&#39;</span> <span class="token operator">+</span> e<span class="token punctuation">.</span>keyCode<span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token comment">// 我们可以利用keycode返回的ASCII码值来判断用户按下了那个键</span>
           <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>keyCode <span class="token operator">===</span> <span class="token number">65</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
               <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;您按下的a键&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
               <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;您没有按下a键&#39;</span><span class="token punctuation">)</span>
           <span class="token punctuation">}</span>

       <span class="token punctuation">}</span><span class="token punctuation">)</span>
       document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;keypress&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;press:&#39;</span> <span class="token operator">+</span> e<span class="token punctuation">.</span>keyCode<span class="token punctuation">)</span><span class="token punctuation">;</span>

       <span class="token punctuation">}</span><span class="token punctuation">)</span>
   </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[e];function o(l,i){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","keyboardEvent.html.vue"]]);export{d as default};
