import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-9tftCahk.js";const p={},e=t(`<h1 id="dict" tabindex="-1"><a class="header-anchor" href="#dict" aria-hidden="true">#</a> dict</h1><h2 id="构造方法" tabindex="-1"><a class="header-anchor" href="#构造方法" aria-hidden="true">#</a> 构造方法</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span>one<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> two<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> three<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span>  <span class="token comment"># **kwargs创建</span>
b <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;one&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;two&#39;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;three&#39;</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">}</span>  <span class="token comment"># {}创建</span>
c <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;three&#39;</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;one&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;two&#39;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment"># {}创建</span>
d <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token builtin">zip</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;two&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;three&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 列表:列表创建</span>
e <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;two&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;three&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 列表[元组()]创建</span>
a <span class="token operator">==</span> b <span class="token operator">==</span> c <span class="token operator">==</span> d <span class="token operator">==</span> e  <span class="token comment"># True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对象方法" tabindex="-1"><a class="header-anchor" href="#对象方法" aria-hidden="true">#</a> 对象方法</h2><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>len(d)</td><td>元素个数</td></tr><tr><td>d[key]</td><td>取值, <code>get(key[, default])</code>, 如果有等价<code>d[key]</code>, 没有则取<code>default</code></td></tr><tr><td>d[key] = value</td><td>赋值, 如果没有则添加元素; <code>update({key,value})</code>,有则更新, 无则添加; <code>setdefault(key[, default])</code>, 如果有返回值, 如果没有则插入<code>default</code>,并返回<code>default</code></td></tr><tr><td>del d[key]</td><td>删除值</td></tr><tr><td>items()</td><td>返回所有<code>(key, value)</code>对</td></tr><tr><td>values()</td><td>返回所有的value</td></tr><tr><td>keys()</td><td>返回所有的key</td></tr><tr><td>pop(key[, default])</td><td>如果在字典中, 删除并返回</td></tr><tr><td>popitem()</td><td>删除并返回<code>(key, value)</code>对</td></tr></tbody></table><h2 id="常用操作" tabindex="-1"><a class="header-anchor" href="#常用操作" aria-hidden="true">#</a> 常用操作</h2><ol><li>合并两个字典</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>d1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">}</span>
d2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">}</span>
nd <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">**</span>d1<span class="token punctuation">,</span> <span class="token operator">**</span>d2<span class="token punctuation">}</span>
nd <span class="token operator">=</span> <span class="token punctuation">{</span>d1<span class="token punctuation">,</span> <span class="token operator">**</span>d2<span class="token punctuation">}</span> <span class="token comment"># 和上述等价</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>两个列表转换为字典</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>list1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;x&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;y&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;z&quot;</span><span class="token punctuation">]</span>
list2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">:</span>i<span class="token punctuation">,</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">:</span>j<span class="token punctuation">}</span> <span class="token keyword">for</span> i<span class="token punctuation">,</span>j <span class="token keyword">in</span> <span class="token builtin">zip</span><span class="token punctuation">(</span>list1<span class="token punctuation">,</span>list2<span class="token punctuation">)</span><span class="token punctuation">]</span>  <span class="token comment"># [{&#39;a&#39;: &#39;x&#39;, &#39;b&#39;: 1}, {&#39;a&#39;: &#39;y&#39;, &#39;b&#39;: 2}, {&#39;a&#39;: &#39;z&#39;, &#39;b&#39;: 3}]</span>
<span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token builtin">zip</span><span class="token punctuation">(</span>list1<span class="token punctuation">,</span>list2<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># {&#39;x&#39;: 1, &#39;y&#39;: 2, &#39;z&#39;: 3}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>键值对反转</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>kv <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">:</span><span class="token number">2</span> <span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">}</span>
vk <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token builtin">zip</span><span class="token punctuation">(</span>kv<span class="token punctuation">.</span>values<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> kv<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>字典排序</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>d <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">:</span><span class="token number">2</span> <span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">}</span>
<span class="token builtin">sorted</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>key <span class="token operator">=</span> <span class="token keyword">lambda</span> x<span class="token punctuation">:</span>x<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>reverse <span class="token operator">=</span> <span class="token boolean">True</span><span class="token punctuation">)</span> <span class="token comment"># sorted方法的使用,按value排序</span>
<span class="token builtin">sorted</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>key <span class="token operator">=</span> <span class="token keyword">lambda</span> x<span class="token punctuation">:</span>x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>reverse <span class="token operator">=</span> <span class="token boolean">True</span><span class="token punctuation">)</span> <span class="token comment"># sorted方法的使用,按key排序</span>
<span class="token builtin">sorted</span><span class="token punctuation">(</span><span class="token builtin">zip</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>values<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>d<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 按value排序,sorted方法默认按元组第一位排序</span>
<span class="token builtin">sorted</span><span class="token punctuation">(</span><span class="token builtin">zip</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>d<span class="token punctuation">.</span>values<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 按key排序</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>取最大值和最小值 字典也是可迭代对象, 注意每次迭代的是key.</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>d <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">}</span>
<span class="token builtin">max</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>  <span class="token comment"># &#39;b&#39;  取最大的key</span>
d<span class="token punctuation">[</span><span class="token builtin">max</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">]</span>  <span class="token comment"># 2 取最大key对应的value</span>
<span class="token builtin">max</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span>key<span class="token operator">=</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span>d<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># &#39;b&#39;, 取最大value对应的key,也可以简写成max(d,key=d.get)</span>
d<span class="token punctuation">[</span><span class="token builtin">max</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span>key<span class="token operator">=</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span>d<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span>  <span class="token comment"># 2 取最大value,也可以简写成d[max(d,key=d.get)], 或max(d.values())</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>字典转对象</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> entries<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment"># entries既是字典</span>
        self<span class="token punctuation">.</span>__dict__<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token operator">**</span>entries<span class="token punctuation">)</span> <span class="token comment"># __dict__本质是字典存储对象的属性</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>字典推导</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token builtin">dict</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token builtin">str</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token operator">*</span>x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">}</span>  <span class="token comment"># {&#39;0&#39;: 0, &#39;1&#39;: 2, &#39;2&#39;: 4, &#39;3&#39;: 6, &#39;4&#39;: 8}</span>
<span class="token punctuation">{</span><span class="token builtin">str</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token operator">*</span>x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token keyword">if</span> x<span class="token operator">%</span><span class="token number">2</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">}</span>  <span class="token comment"># {&#39;0&#39;: 0, &#39;2&#39;: 4, &#39;4&#39;: 8}</span>
<span class="token punctuation">{</span>x<span class="token punctuation">:</span><span class="token number">2</span><span class="token operator">*</span>y <span class="token keyword">for</span> x<span class="token punctuation">,</span>y <span class="token keyword">in</span> <span class="token builtin">dict</span><span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>  <span class="token comment"># {&#39;a&#39;: 2, &#39;b&#39;: 4, &#39;c&#39;: 6, &#39;d&#39;: 8, &#39;e&#39;: 10}</span>

<span class="token punctuation">{</span><span class="token builtin">str</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token operator">*</span>x <span class="token keyword">if</span> x<span class="token operator">%</span><span class="token number">2</span><span class="token operator">==</span><span class="token number">0</span> <span class="token keyword">else</span> <span class="token builtin">str</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">*</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token comment"># 还未支持</span>
<span class="token comment">## File &quot;&lt;stdin&gt;&quot;, line 1</span>
<span class="token comment">## {str(x):2*x if x%2==0 else str(2*x):x for x in range(5)} # 还未支持</span>
<span class="token comment">##                                        ^</span>
<span class="token comment">## SyntaxError: invalid syntax</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),o=[e];function c(l,u){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","dict.html.vue"]]);export{r as default};
