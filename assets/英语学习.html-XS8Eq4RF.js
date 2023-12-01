import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as e,c,a as n,b as s,d as t,e as i}from"./app-MTzDpLgJ.js";const l={},u=n("h1",{id:"sftp",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sftp","aria-hidden":"true"},"#"),s(" sftp")],-1),r=n("h2",{id:"使用资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用资料","aria-hidden":"true"},"#"),s(" 使用资料")],-1),k=n("li",null,"老友记全集",-1),d={href:"https://www.bilibili.com/video/BV1PT4y1Q7Lw/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.bilibili.com/video/BV1Xm4y1M7xv/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.bilibili.com/video/BV1P5411R7xG/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.bilibili.com/video/BV16e411K7Rb/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.bilibili.com/video/BV1fB4y1G7BC",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.bilibili.com/video/BV1uN411N7J5/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.bilibili.com/video/BV1S24y1M7hp",target:"_blank",rel:"noopener noreferrer"},_=i(`<h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><ol><li>首先介绍所有的人物背景关系</li><li>每一集有剧情的背景介绍</li><li>每一个笑点也应该有介绍</li><li>将视频中的每一句台词的音频进行剪切, 疑难的可以慢放</li><li>对特别的词语可以加入背景解释</li></ol><h2 id="数据处理" tabindex="-1"><a class="header-anchor" href="#数据处理" aria-hidden="true">#</a> 数据处理</h2><h3 id="网页字幕处理" tabindex="-1"><a class="header-anchor" href="#网页字幕处理" aria-hidden="true">#</a> 网页字幕处理</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>context <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
101 The One Where Monica Gets a New Roommate (The Pilot-The Uncut Version)

[Scene: Central Perk, Chandler, Joey, Phoebe, and Monica are there.]
Monica: There&#39;s nothing to tell! He&#39;s just some guy I work with!
Joey: Come on, you&#39;re going out with the guy! There&#39;s gotta be something wrong with him!
Chandler: All right Joey, be nice.  So does he have a hump? A hump and a hairpiece?
Phoebe: Wait, does he eat chalk?
(They all stare, bemused.)
Phoebe: Just, &#39;cause, I don&#39;t want her to go through what I went through with Carl- oh!
&quot;&quot;&quot;</span>

<span class="token keyword">import</span> re
<span class="token comment">## 替换掉\`()\`的行</span>
context1 <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">r&#39;\\(.*\\)&#39;</span><span class="token punctuation">,</span> <span class="token string">r&quot;&quot;</span><span class="token punctuation">,</span> context<span class="token punctuation">)</span>
<span class="token comment">## 替换掉\`[]\`的行</span>
context1 <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">r&#39;\\[.*\\]&#39;</span><span class="token punctuation">,</span> <span class="token string">r&quot;&quot;</span><span class="token punctuation">,</span> context1<span class="token punctuation">)</span>
context1 <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">r&#39;\\?&#39;</span><span class="token punctuation">,</span> <span class="token string">r&quot;&quot;</span><span class="token punctuation">,</span> context1<span class="token punctuation">)</span>
<span class="token comment">## 替换掉\`行尾的符号\`的行</span>
context1 <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">r&#39;.$&#39;</span><span class="token punctuation">,</span> <span class="token string">r&quot;&quot;</span><span class="token punctuation">,</span> context1<span class="token punctuation">,</span>flags <span class="token operator">=</span> re<span class="token punctuation">.</span>M<span class="token punctuation">)</span>
context1 <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">r&#39;\\?$&#39;</span><span class="token punctuation">,</span> <span class="token string">r&quot;&quot;</span><span class="token punctuation">,</span> context1<span class="token punctuation">,</span>flags <span class="token operator">=</span> re<span class="token punctuation">.</span>M<span class="token punctuation">)</span>
context1 <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">r&#39;!$&#39;</span><span class="token punctuation">,</span> <span class="token string">r&quot;&quot;</span><span class="token punctuation">,</span> context1<span class="token punctuation">,</span>flags <span class="token operator">=</span> re<span class="token punctuation">.</span>M<span class="token punctuation">)</span>
<span class="token comment">## 将\`?\`替换为\`.\`, 因为文件名不能包含\`?\`</span>
context1 <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">r&#39;!$&#39;</span><span class="token punctuation">,</span> <span class="token string">r&quot;&quot;</span><span class="token punctuation">,</span> context1<span class="token punctuation">,</span>flags <span class="token operator">=</span> re<span class="token punctuation">.</span>M<span class="token punctuation">)</span>
<span class="token comment">## 替换掉不包含\`:\`的行</span>
text_list <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">r&#39;.*:.*&#39;</span><span class="token punctuation">,</span>context1<span class="token punctuation">)</span>
text_list2 <span class="token operator">=</span> <span class="token punctuation">[</span>x<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;:&quot;</span><span class="token punctuation">)</span> <span class="token keyword">for</span> x <span class="token keyword">in</span> text_list <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span>x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot;|&quot;</span> <span class="token operator">+</span> x<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;|&quot;</span> <span class="token operator">+</span> <span class="token string-interpolation"><span class="token string">f&#39;&lt;audio controls src=&quot;./</span><span class="token interpolation"><span class="token punctuation">{</span>x<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">.mp3&quot; style=&quot;height: 20px;&quot;&gt;&lt;/audio&gt;&#39;</span></span> <span class="token keyword">for</span> x <span class="token keyword">in</span> text_list2<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">from</span> pydub <span class="token keyword">import</span> AudioSegment
<span class="token keyword">import</span> re

<span class="token keyword">def</span> <span class="token function">times_to_ms</span><span class="token punctuation">(</span>times<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># times = &#39;00:00:52,760&#39;</span>
    hms <span class="token operator">=</span> times<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    ms <span class="token operator">=</span> times<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    all_ms <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>ms<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token builtin">int</span><span class="token punctuation">(</span>hms<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">*</span><span class="token number">3600</span><span class="token operator">*</span><span class="token number">1000</span> <span class="token operator">+</span> <span class="token builtin">int</span><span class="token punctuation">(</span>hms<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">1000</span> <span class="token operator">+</span> <span class="token builtin">int</span><span class="token punctuation">(</span>hms<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">1000</span>
    <span class="token keyword">return</span> all_ms
<span class="token comment">## 读取被转换的音频文件</span>
audio <span class="token operator">=</span> AudioSegment<span class="token punctuation">.</span>from_file<span class="token punctuation">(</span><span class="token string">&quot;F:\\\\code\\\\test_python\\\\S01E01.mp3&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;./S01E01.eng.srt&quot;</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    text <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>



block <span class="token operator">=</span> text<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;\\n\\n&quot;</span><span class="token punctuation">)</span>
block_list <span class="token operator">=</span> <span class="token punctuation">[</span>x<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span> <span class="token keyword">for</span> x <span class="token keyword">in</span> block<span class="token punctuation">]</span>

words_list<span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> seg <span class="token keyword">in</span> block_list<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span>

    all_time <span class="token operator">=</span> seg<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    start_time <span class="token operator">=</span> all_time<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot; --&gt; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    end_time <span class="token operator">=</span> all_time<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot; --&gt; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    words <span class="token operator">=</span> seg<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
    words <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">r&#39;.$&#39;</span><span class="token punctuation">,</span> <span class="token string">r&quot;&quot;</span><span class="token punctuation">,</span> words<span class="token punctuation">)</span>
    words <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">r&#39;\\?$&#39;</span><span class="token punctuation">,</span> <span class="token string">r&quot;&quot;</span><span class="token punctuation">,</span> words<span class="token punctuation">)</span>
    words <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">r&#39;!$&#39;</span><span class="token punctuation">,</span> <span class="token string">r&quot;&quot;</span><span class="token punctuation">,</span> words<span class="token punctuation">)</span>
    words <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">r&#39;^- &#39;</span><span class="token punctuation">,</span> <span class="token string">r&quot;&quot;</span><span class="token punctuation">,</span> words<span class="token punctuation">)</span>
    words <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">r&#39;&quot;&#39;</span><span class="token punctuation">,</span> <span class="token string">r&quot;&quot;</span><span class="token punctuation">,</span> words<span class="token punctuation">)</span>
    words <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">r&#39;\\?&#39;</span><span class="token punctuation">,</span> <span class="token string">r&quot;.&quot;</span><span class="token punctuation">,</span> words<span class="token punctuation">)</span>

    start_ms <span class="token operator">=</span> times_to_ms<span class="token punctuation">(</span>start_time<span class="token punctuation">)</span>
    end_ms <span class="token operator">=</span> times_to_ms<span class="token punctuation">(</span>end_time<span class="token punctuation">)</span>
    out_mp3 <span class="token operator">=</span> audio<span class="token punctuation">[</span>start_ms<span class="token punctuation">:</span>end_ms<span class="token punctuation">]</span>
    out_mp3<span class="token punctuation">.</span>export<span class="token punctuation">(</span>out_f<span class="token operator">=</span><span class="token string-interpolation"><span class="token string">f&quot;./mp3/</span><span class="token interpolation"><span class="token punctuation">{</span>words<span class="token punctuation">}</span></span><span class="token string">.mp3&quot;</span></span><span class="token punctuation">,</span><span class="token builtin">format</span><span class="token operator">=</span><span class="token string">&#39;mp3&#39;</span><span class="token punctuation">)</span>
    words_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">r&#39;^- &#39;</span><span class="token punctuation">,</span> <span class="token string">r&quot;&quot;</span><span class="token punctuation">,</span> seg<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;|&quot;</span> <span class="token operator">+</span> <span class="token string-interpolation"><span class="token string">f&#39;&lt;audio controls src=&quot;./</span><span class="token interpolation"><span class="token punctuation">{</span>words<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">.mp3&quot; style=&quot;height: 20px;&quot;&gt;&lt;/audio&gt;&#39;</span></span><span class="token punctuation">)</span>

<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;./frame.md&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;w&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>words_list<span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="网页音频处理" tabindex="-1"><a class="header-anchor" href="#网页音频处理" aria-hidden="true">#</a> 网页音频处理</h3>`,7);function w(f,x){const a=o("ExternalLinkIcon");return e(),c("div",null,[u,r,n("ol",null,[k,n("li",null,[s("B站讲解视频 "),n("ol",null,[n("li",null,[n("a",d,[s("一口气看完《老友记》第一季全剧情解说"),t(a)]),s(", 汉语的剧情说明")]),n("li",null,[n("a",m,[s("盘点老友记每集笑点"),t(a)])]),n("li",null,[n("a",v,[s("【老友记科普】 "),t(a)])]),n("li",null,[n("a",b,[s("《老友记》英语精听练习"),t(a)]),s(", 连读和听力")]),n("li",null,[n("a",h,[s("跟着老友记学英语》视频合集42集"),t(a)]),s(", 连读和听力")]),n("li",null,[n("a",g,[s("【油管超火的《通过老友记学习英语》】"),t(a)]),s(", 词汇讲解")]),n("li",null,[n("a",q,[s("【瑞秋&罗斯】精听精讲 | 口语+听力一步到位，跟着《老友记》学英语（英字）"),t(a)]),s(", 一些英语的基本知识")])])])]),_])}const V=p(l,[["render",w],["__file","英语学习.html.vue"]]);export{V as default};
