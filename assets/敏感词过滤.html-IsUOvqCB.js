import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-O0xqlHfm.js";const p={},e=t(`<h1 id="index" tabindex="-1"><a class="header-anchor" href="#index" aria-hidden="true">#</a> index</h1><h2 id="有效实现" tabindex="-1"><a class="header-anchor" href="#有效实现" aria-hidden="true">#</a> 有效实现</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time

time1 <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment">## DFA算法</span>
<span class="token keyword">class</span> <span class="token class-name">DFAFilter</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>keyword_chains <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment"># 关键词链表</span>
        self<span class="token punctuation">.</span>delimit <span class="token operator">=</span> <span class="token string">&#39;\\x00&#39;</span>  <span class="token comment"># 限定</span>

    <span class="token keyword">def</span> <span class="token function">parse</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
            <span class="token keyword">for</span> keyword <span class="token keyword">in</span> f<span class="token punctuation">:</span>
                self<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>keyword<span class="token punctuation">)</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>keyword_chains<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> keyword<span class="token punctuation">)</span><span class="token punctuation">:</span>
        keyword <span class="token operator">=</span> keyword<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 关键词英文变为小写</span>
        chars <span class="token operator">=</span> keyword<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 关键字去除首尾空格和换行</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> chars<span class="token punctuation">:</span>  <span class="token comment"># 如果关键词为空直接返回</span>
            <span class="token keyword">return</span>
        level <span class="token operator">=</span> self<span class="token punctuation">.</span>keyword_chains
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 遍历关键字的每个字</span>
            <span class="token keyword">if</span> chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token keyword">in</span> level<span class="token punctuation">:</span>  <span class="token comment"># 如果这个字符已经存在字符链的key中，则链表递进一步</span>
                level <span class="token operator">=</span> level<span class="token punctuation">[</span>chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>  <span class="token comment"># 如果字符不存在，则将剩余的字符做成一个链添加进来</span>
                <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 遍历剩余的字符</span>
                    level<span class="token punctuation">[</span>chars<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment"># 创建该字符的节点</span>
                    last_level<span class="token punctuation">,</span> last_char <span class="token operator">=</span> level<span class="token punctuation">,</span> chars<span class="token punctuation">[</span>j<span class="token punctuation">]</span>  <span class="token comment"># 每次循环都作为最后一个level，直至循环结束，就得到最终的level</span>
                    level <span class="token operator">=</span> level<span class="token punctuation">[</span>chars<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span>  <span class="token comment"># 链表递进一位</span>
                last_level<span class="token punctuation">[</span>last_char<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>self<span class="token punctuation">.</span>delimit<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">}</span>
                <span class="token keyword">break</span>
        <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token builtin">len</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">:</span>  <span class="token comment"># 如果是最后一位则</span>
            level<span class="token punctuation">[</span>self<span class="token punctuation">.</span>delimit<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">filter</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> message<span class="token punctuation">,</span> repl<span class="token operator">=</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        message <span class="token operator">=</span> message<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span>
        ret <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        start <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">while</span> start <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 遍历输入的文本的字符，</span>
            level <span class="token operator">=</span> self<span class="token punctuation">.</span>keyword_chains  <span class="token comment"># 获得状态链</span>
            step_ins <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># 初始化状态连标记</span>
            <span class="token keyword">for</span> char <span class="token keyword">in</span> message<span class="token punctuation">[</span>start<span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">:</span>  <span class="token comment"># 从输入文本字符的本次遍历第一个字符开始匹配</span>
                <span class="token keyword">if</span> char <span class="token keyword">in</span> level<span class="token punctuation">:</span>  <span class="token comment"># 如果字符在节点中</span>
                    step_ins <span class="token operator">+=</span> <span class="token number">1</span>  <span class="token comment"># 链节点前进一位</span>
                    <span class="token keyword">if</span> self<span class="token punctuation">.</span>delimit <span class="token keyword">not</span> <span class="token keyword">in</span> level<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">:</span>  <span class="token comment"># 如果该节点不是最终节点（非敏感词库中的完整的词）</span>
                        level <span class="token operator">=</span> level<span class="token punctuation">[</span>char<span class="token punctuation">]</span>  <span class="token comment"># 连接点前进一位，进入下一个循环</span>
                    <span class="token keyword">else</span><span class="token punctuation">:</span>  <span class="token comment"># 如果已经到了最后一个链节点</span>
                        ret<span class="token punctuation">.</span>append<span class="token punctuation">(</span>repl <span class="token operator">*</span> step_ins<span class="token punctuation">)</span>  <span class="token comment"># 替换为星号</span>
                        start <span class="token operator">+=</span> step_ins <span class="token operator">-</span> <span class="token number">1</span>  <span class="token comment"># 整体也前进已经匹配的字符（-1是因为while循环本来就是近1位）</span>
                        <span class="token keyword">break</span>
                <span class="token keyword">else</span><span class="token punctuation">:</span>  <span class="token comment"># 如果字符不在节点中</span>
                    ret<span class="token punctuation">.</span>append<span class="token punctuation">(</span>message<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 添加当前的字符</span>
                    <span class="token keyword">break</span>
            start <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>ret<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    gfw <span class="token operator">=</span> DFAFilter<span class="token punctuation">(</span><span class="token punctuation">)</span>
    path <span class="token operator">=</span> <span class="token string">&quot;./sensitive.txt&quot;</span>
    gfw<span class="token punctuation">.</span>parse<span class="token punctuation">(</span>path<span class="token punctuation">)</span>
    text <span class="token operator">=</span> <span class="token string">&quot;abadc&quot;</span>
    result <span class="token operator">=</span> gfw<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>



<span class="token comment">## 来源 http://yiouejv.com/python/DFA%E6%95%8F%E6%84%9F%E8%AF%8D%E8%BF%87%E6%BB%A4%E7%AE%97%E6%B3%95%E7%9A%84python%E5%AE%9E%E7%8E%B0/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可参考" tabindex="-1"><a class="header-anchor" href="#可参考" aria-hidden="true">#</a> 可参考</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">DFAFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token triple-quoted-string string">&#39;&#39;&#39;Filter Messages from keywords
    Use DFA to keep algorithm perform constantly
    &gt;&gt;&gt; f = DFAFilter()
    &gt;&gt;&gt; f.add(&quot;sexy&quot;)
    &gt;&gt;&gt; f.filter(&quot;hello sexy baby&quot;)
    hello **** baby
    &#39;&#39;&#39;</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>keyword_chains <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        self<span class="token punctuation">.</span>delimit <span class="token operator">=</span> <span class="token string">&#39;\\x00&#39;</span>

    <span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> keyword<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># if not isinstance(keyword, unicode):</span>
        <span class="token comment">#     keyword = keyword.decode(&#39;utf-8&#39;)</span>
        keyword <span class="token operator">=</span> keyword<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span>
        chars <span class="token operator">=</span> keyword<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> chars<span class="token punctuation">:</span>
            <span class="token keyword">return</span>
        level <span class="token operator">=</span> self<span class="token punctuation">.</span>keyword_chains
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token keyword">in</span> level<span class="token punctuation">:</span>
                level <span class="token operator">=</span> level<span class="token punctuation">[</span>chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>level<span class="token punctuation">,</span> <span class="token builtin">dict</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                    <span class="token keyword">break</span>
                <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                    level<span class="token punctuation">[</span>chars<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
                    last_level<span class="token punctuation">,</span> last_char <span class="token operator">=</span> level<span class="token punctuation">,</span> chars<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
                    level <span class="token operator">=</span> level<span class="token punctuation">[</span>chars<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span>
                last_level<span class="token punctuation">[</span>last_char<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>self<span class="token punctuation">.</span>delimit<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">}</span>
                <span class="token keyword">break</span>
        <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token builtin">len</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">:</span>
            level<span class="token punctuation">[</span>self<span class="token punctuation">.</span>delimit<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">parse</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
            <span class="token keyword">for</span> keyword <span class="token keyword">in</span> f<span class="token punctuation">:</span>
                self<span class="token punctuation">.</span>add<span class="token punctuation">(</span>keyword<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">filter</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> message<span class="token punctuation">,</span> repl<span class="token operator">=</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        message <span class="token operator">=</span> message<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span>
        ret <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        start <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">while</span> start <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">:</span>
            level <span class="token operator">=</span> self<span class="token punctuation">.</span>keyword_chains
            step_ins <span class="token operator">=</span> <span class="token number">0</span>
            <span class="token keyword">for</span> char <span class="token keyword">in</span> message<span class="token punctuation">[</span>start<span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> char <span class="token keyword">in</span> level<span class="token punctuation">:</span>
                    step_ins <span class="token operator">+=</span> <span class="token number">1</span>
                    <span class="token keyword">if</span> self<span class="token punctuation">.</span>delimit <span class="token keyword">not</span> <span class="token keyword">in</span> level<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">:</span>
                        level <span class="token operator">=</span> level<span class="token punctuation">[</span>char<span class="token punctuation">]</span>
                    <span class="token keyword">else</span><span class="token punctuation">:</span>
                        ret<span class="token punctuation">.</span>append<span class="token punctuation">(</span>repl <span class="token operator">*</span> step_ins<span class="token punctuation">)</span>
                        start <span class="token operator">+=</span> step_ins <span class="token operator">-</span> <span class="token number">1</span>
                        <span class="token keyword">break</span>
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    ret<span class="token punctuation">.</span>append<span class="token punctuation">(</span>message<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">)</span>
                    <span class="token keyword">break</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                ret<span class="token punctuation">.</span>append<span class="token punctuation">(</span>message<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">)</span>
            start <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>ret<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    gfw <span class="token operator">=</span> DFAFilter<span class="token punctuation">(</span><span class="token punctuation">)</span>
    gfw<span class="token punctuation">.</span>parse<span class="token punctuation">(</span><span class="token string">&quot;./sensitive.txt&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>gfw<span class="token punctuation">.</span>keyword_chains<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>gfw<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span><span class="token string">&quot;acc&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题代码1" tabindex="-1"><a class="header-anchor" href="#问题代码1" aria-hidden="true">#</a> 问题代码1</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> json

MinMatchType <span class="token operator">=</span> <span class="token number">1</span>  <span class="token comment"># 最小匹配规则</span>
MaxMatchType <span class="token operator">=</span> <span class="token number">2</span>  <span class="token comment"># 最大匹配规则</span>


<span class="token keyword">class</span> <span class="token class-name">DFAUtils</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> lexicon<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        init
        :param lexicon:a txt file or ods
        &quot;&quot;&quot;</span>
        <span class="token comment"># state tree</span>
        self<span class="token punctuation">.</span>root <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># 初始化词库</span>
        <span class="token keyword">for</span> word <span class="token keyword">in</span> lexicon<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>add_word<span class="token punctuation">(</span>word<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">add_word</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> word<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        添加词语，形成树结构，每个节点（dict）是一个字符和它是不是词语最后一个字符的标记（is_end）。
        :param word:
        :return:
        &quot;&quot;&quot;</span>
        now_node <span class="token operator">=</span> self<span class="token punctuation">.</span>root  <span class="token comment"># now_node就是当前的节点，now_node随着字符会在树中不断的递进</span>
        char_count <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>char_count<span class="token punctuation">)</span><span class="token punctuation">:</span>
            char <span class="token operator">=</span> word<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            <span class="token keyword">if</span> char <span class="token keyword">in</span> now_node<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 如果存在则替换</span>
                now_node <span class="token operator">=</span> now_node<span class="token punctuation">.</span>get<span class="token punctuation">(</span>word<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
                now_node<span class="token punctuation">[</span><span class="token string">&#39;is_end&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">False</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                new_node <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 不存在则构建一个dict</span>
                <span class="token keyword">if</span> i <span class="token operator">==</span> char_count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">:</span>  <span class="token comment"># 如果已经到字符串的最后一个字符</span>
                    new_node<span class="token punctuation">[</span><span class="token string">&#39;is_end&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">True</span>
                <span class="token keyword">else</span><span class="token punctuation">:</span>  <span class="token comment"># 不是最后一个</span>
                    new_node<span class="token punctuation">[</span><span class="token string">&#39;is_end&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">False</span>
                now_node<span class="token punctuation">[</span>char<span class="token punctuation">]</span> <span class="token operator">=</span> new_node
                now_node <span class="token operator">=</span> new_node

    <span class="token keyword">def</span> <span class="token function">check_match_word</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> txt<span class="token punctuation">,</span> begin_index<span class="token punctuation">,</span> match_type<span class="token operator">=</span>MinMatchType<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        文本当前起始字符，是否可以和敏感词库进行匹配，进行状态转换。

        :param txt:待检测的文本
        :param begin_index: 调用getSensitiveWord时输入的参数，获取词语的上边界index
        :param match_type:匹配规则 1：最小匹配规则，2：最大匹配规则
        :return:如果存在，则返回匹配字符的长度，不存在返回0
        &quot;&quot;&quot;</span>
        flag <span class="token operator">=</span> <span class="token boolean">False</span>
        now_map <span class="token operator">=</span> self<span class="token punctuation">.</span>root
        tmp_flag <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># 敏感词的长度</span>

        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>begin_index<span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>txt<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            word <span class="token operator">=</span> txt<span class="token punctuation">[</span>i<span class="token punctuation">]</span>  <span class="token comment"># 从字符的第begin_index个字符来和敏感词库匹配</span>
            now_map <span class="token operator">=</span> now_map<span class="token punctuation">.</span>get<span class="token punctuation">(</span>word<span class="token punctuation">)</span>
            <span class="token keyword">if</span> now_map<span class="token punctuation">:</span>  <span class="token comment"># 存在，则判断是否为最后一个</span>
                tmp_flag <span class="token operator">+=</span> <span class="token number">1</span>  <span class="token comment"># 存在则加一，记录匹配上的字符的个数</span>
                <span class="token keyword">if</span> now_map<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;is_end&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 如果为最后一个匹配规则，结束循环，返回匹配标识数</span>
                    flag <span class="token operator">=</span> <span class="token boolean">True</span>  <span class="token comment"># 结束标志位为true</span>
                    <span class="token keyword">if</span> match_type <span class="token operator">==</span> MinMatchType<span class="token punctuation">:</span>  <span class="token comment"># 最小规则，直接返回,最大规则还需继续查找</span>
                        <span class="token keyword">break</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>  <span class="token comment"># 不存在，直接返回</span>
                <span class="token keyword">break</span>
        <span class="token keyword">if</span> tmp_flag <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token keyword">or</span> <span class="token keyword">not</span> flag<span class="token punctuation">:</span>  <span class="token comment"># 长度必须大于等于1，为词（长度小于二或者flag为false时，tmp_flag 匹配上的字符都为0）</span>
            tmp_flag <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">return</span> tmp_flag

    <span class="token keyword">def</span> <span class="token function">get_match_word</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> txt<span class="token punctuation">,</span> match_type<span class="token operator">=</span>MinMatchType<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        获取匹配到的词语
        :param txt:待检测的文本
        :param match_type:匹配规则 1：最小匹配规则，2：最大匹配规则
        :return:文字中的相匹配词
        &quot;&quot;&quot;</span>
        matched_word_list <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>txt<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 0---11</span>
            length <span class="token operator">=</span> self<span class="token punctuation">.</span>check_match_word<span class="token punctuation">(</span>txt<span class="token punctuation">,</span> i<span class="token punctuation">,</span> match_type<span class="token punctuation">)</span>
            <span class="token keyword">if</span> length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
                word <span class="token operator">=</span> txt<span class="token punctuation">[</span>i<span class="token punctuation">:</span>i <span class="token operator">+</span> length<span class="token punctuation">]</span>
                matched_word_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>word<span class="token punctuation">)</span>
                <span class="token comment"># i = i + length - 1</span>
        <span class="token keyword">return</span> matched_word_list

    <span class="token keyword">def</span> <span class="token function">is_contain</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> txt<span class="token punctuation">,</span> match_type<span class="token operator">=</span>MinMatchType<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        判断文字是否包含敏感字符
        :param txt:待检测的文本
        :param match_type:匹配规则 1：最小匹配规则，2：最大匹配规则
        :return:若包含返回true，否则返回false
        &quot;&quot;&quot;</span>
        flag <span class="token operator">=</span> <span class="token boolean">False</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>txt<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            match_flag <span class="token operator">=</span> self<span class="token punctuation">.</span>check_match_word<span class="token punctuation">(</span>txt<span class="token punctuation">,</span> i<span class="token punctuation">,</span> match_type<span class="token punctuation">)</span>
            <span class="token keyword">if</span> match_flag <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
                flag <span class="token operator">=</span> <span class="token boolean">True</span>
        <span class="token keyword">return</span> flag

    <span class="token keyword">def</span> <span class="token function">replace_match_word</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> txt<span class="token punctuation">,</span> replace_char<span class="token operator">=</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> match_type<span class="token operator">=</span>MinMatchType<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        替换匹配字符
        :param txt:待检测的文本
        :param replace_char:用于替换的字符，匹配的敏感词以字符逐个替换，如&quot;你是大王八&quot;，敏感词&quot;王八&quot;，替换字符*，替换结果&quot;你是大**&quot;
        :param match_type:匹配规则 1：最小匹配规则，2：最大匹配规则
        :return:替换敏感字字符后的文本
        &quot;&quot;&quot;</span>
        tuple_set <span class="token operator">=</span> self<span class="token punctuation">.</span>get_match_word<span class="token punctuation">(</span>txt<span class="token punctuation">,</span> match_type<span class="token punctuation">)</span>
        word_set <span class="token operator">=</span> <span class="token punctuation">[</span>i <span class="token keyword">for</span> i <span class="token keyword">in</span> tuple_set<span class="token punctuation">]</span>
        result_txt <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
        <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>word_set<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>  <span class="token comment"># 如果检测出了敏感词，则返回替换后的文本</span>
            <span class="token keyword">for</span> word <span class="token keyword">in</span> word_set<span class="token punctuation">:</span>
                replace_string <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span> <span class="token operator">*</span> replace_char
                txt <span class="token operator">=</span> txt<span class="token punctuation">.</span>replace<span class="token punctuation">(</span>word<span class="token punctuation">,</span> replace_string<span class="token punctuation">)</span>
                result_txt <span class="token operator">=</span> txt
        <span class="token keyword">else</span><span class="token punctuation">:</span>  <span class="token comment"># 没有检测出敏感词，则返回原文本</span>
            result_txt <span class="token operator">=</span> txt
        <span class="token keyword">return</span> result_txt


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    dfa <span class="token operator">=</span> DFAUtils<span class="token punctuation">(</span>lexicon<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;ab&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;bcc&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;ac&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;词库结构：&#39;</span><span class="token punctuation">,</span> json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>dfa<span class="token punctuation">.</span>root<span class="token punctuation">,</span> ensure_ascii<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># 待检测的文本</span>
    msg <span class="token operator">=</span> <span class="token string">&#39;abcc&#39;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;是否包含：&#39;</span><span class="token punctuation">,</span> dfa<span class="token punctuation">.</span>is_contain<span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;相匹配的词：&#39;</span><span class="token punctuation">,</span> dfa<span class="token punctuation">.</span>get_match_word<span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;替换包含的词：&#39;</span><span class="token punctuation">,</span> dfa<span class="token punctuation">.</span>replace_match_word<span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment">## 算法实现有问题(a应该是is_end=true)</span>
<span class="token comment">## https://cloud.tencent.com/developer/article/1625101</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题代码二" tabindex="-1"><a class="header-anchor" href="#问题代码二" aria-hidden="true">#</a> 问题代码二</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> re
<span class="token keyword">import</span> copy


<span class="token keyword">class</span> <span class="token class-name">DFA</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> keyword_list<span class="token punctuation">:</span> <span class="token builtin">list</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>state_event_dict <span class="token operator">=</span> self<span class="token punctuation">.</span>_generate_state_event_dict<span class="token punctuation">(</span>keyword_list<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">match</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> content<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        match_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        state_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        temp_match_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

        <span class="token keyword">for</span> char_pos<span class="token punctuation">,</span> char <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> char <span class="token keyword">in</span> self<span class="token punctuation">.</span>state_event_dict<span class="token punctuation">:</span>
                state_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>self<span class="token punctuation">.</span>state_event_dict<span class="token punctuation">)</span>
                temp_match_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">{</span>
                    <span class="token string">&quot;start&quot;</span><span class="token punctuation">:</span> char_pos<span class="token punctuation">,</span>
                    <span class="token string">&quot;match&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>

            <span class="token keyword">for</span> index<span class="token punctuation">,</span> state <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>state_list<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> char <span class="token keyword">in</span> state<span class="token punctuation">:</span>
                    state_list<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> state<span class="token punctuation">[</span>char<span class="token punctuation">]</span>
                    temp_match_list<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;match&quot;</span><span class="token punctuation">]</span> <span class="token operator">+=</span> char

                    <span class="token keyword">if</span> state<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;is_end&quot;</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                        match_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>copy<span class="token punctuation">.</span>deepcopy<span class="token punctuation">(</span>temp_match_list<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

                        <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>state<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
                            state_list<span class="token punctuation">.</span>pop<span class="token punctuation">(</span>index<span class="token punctuation">)</span>
                            temp_match_list<span class="token punctuation">.</span>pop<span class="token punctuation">(</span>index<span class="token punctuation">)</span>
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    state_list<span class="token punctuation">.</span>pop<span class="token punctuation">(</span>index<span class="token punctuation">)</span>
                    temp_match_list<span class="token punctuation">.</span>pop<span class="token punctuation">(</span>index<span class="token punctuation">)</span>

        <span class="token keyword">return</span> match_list

    <span class="token decorator annotation punctuation">@staticmethod</span>
    <span class="token keyword">def</span> <span class="token function">_generate_state_event_dict</span><span class="token punctuation">(</span>keyword_list<span class="token punctuation">:</span> <span class="token builtin">list</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">dict</span><span class="token punctuation">:</span>
        state_event_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

        <span class="token keyword">for</span> keyword <span class="token keyword">in</span> keyword_list<span class="token punctuation">:</span>
            current_dict <span class="token operator">=</span> state_event_dict
            length <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>keyword<span class="token punctuation">)</span>

            <span class="token keyword">for</span> index<span class="token punctuation">,</span> char <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>keyword<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> char <span class="token keyword">not</span> <span class="token keyword">in</span> current_dict<span class="token punctuation">:</span>
                    next_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;is_end&quot;</span><span class="token punctuation">:</span> <span class="token boolean">False</span><span class="token punctuation">}</span>
                    current_dict<span class="token punctuation">[</span>char<span class="token punctuation">]</span> <span class="token operator">=</span> next_dict
                    current_dict <span class="token operator">=</span> next_dict
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    next_dict <span class="token operator">=</span> current_dict<span class="token punctuation">[</span>char<span class="token punctuation">]</span>
                    current_dict <span class="token operator">=</span> next_dict

                <span class="token keyword">if</span> index <span class="token operator">==</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">:</span>
                    current_dict<span class="token punctuation">[</span><span class="token string">&quot;is_end&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">True</span>

        <span class="token keyword">return</span> state_event_dict


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    dfa <span class="token operator">=</span> DFA<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;ab&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;bcc&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;ac&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>dfa<span class="token punctuation">.</span>state_event_dict<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>dfa<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">&quot;abcc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## 来源 https://www.jb51.net/article/216032.htm</span>
<span class="token comment">## https://walkonnet.com/archives/323175</span>
<span class="token comment">## chain建立正确， 但是无法查到bcc，在“abacc”中竟然能查到。。。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="问题代码三" tabindex="-1"><a class="header-anchor" href="#问题代码三" aria-hidden="true">#</a> 问题代码三</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","敏感词过滤.html.vue"]]);export{r as default};
