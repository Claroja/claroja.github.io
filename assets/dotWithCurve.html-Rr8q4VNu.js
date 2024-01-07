import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as p}from"./app-SnI5rGHA.js";const t="/assets/1-3-77t9Lg.gif",o={},e=p(`<h1 id="dotwithcurve" tabindex="-1"><a class="header-anchor" href="#dotwithcurve" aria-hidden="true">#</a> dotWithCurve</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

<span class="token keyword">class</span> <span class="token class-name">ArgMinExample</span><span class="token punctuation">(</span>Scene<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">construct</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token comment"># 绘制曲线, ax只负责曲线的绘制, 点之类的用scene中的mobject对象</span>
        ax <span class="token operator">=</span> Axes<span class="token punctuation">(</span>
            x_range<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> y_range<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> axis_config<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;include_tip&quot;</span><span class="token punctuation">:</span> <span class="token boolean">False</span><span class="token punctuation">}</span>
        <span class="token punctuation">)</span>
    &#39;\\
        labels <span class="token operator">=</span> ax<span class="token punctuation">.</span>get_axis_labels<span class="token punctuation">(</span>x_label<span class="token operator">=</span><span class="token string">&quot;x&quot;</span><span class="token punctuation">,</span> y_label<span class="token operator">=</span><span class="token string">&quot;f(x)&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token punctuation">(</span>x <span class="token operator">-</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">**</span> <span class="token number">2</span>
        graph <span class="token operator">=</span> ax<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>func<span class="token punctuation">,</span> color<span class="token operator">=</span>MAROON<span class="token punctuation">)</span>


        <span class="token comment"># 配置Dot的初始点以及移动轨迹, 移动轨迹匹配的是ValueTracker</span>
        t <span class="token operator">=</span> ValueTracker<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        initial_point <span class="token operator">=</span> <span class="token punctuation">[</span>ax<span class="token punctuation">.</span>coords_to_point<span class="token punctuation">(</span>t<span class="token punctuation">.</span>get_value<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> func<span class="token punctuation">(</span>t<span class="token punctuation">.</span>get_value<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
        dot <span class="token operator">=</span> Dot<span class="token punctuation">(</span>point<span class="token operator">=</span>initial_point<span class="token punctuation">)</span>
        dot<span class="token punctuation">.</span>add_updater<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">.</span>move_to<span class="token punctuation">(</span>ax<span class="token punctuation">.</span>c2p<span class="token punctuation">(</span>t<span class="token punctuation">.</span>get_value<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> func<span class="token punctuation">(</span>t<span class="token punctuation">.</span>get_value<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token comment"># 开始动画, 主要是根据ValueTracker的移动而移动</span>
        self<span class="token punctuation">.</span>add<span class="token punctuation">(</span>ax<span class="token punctuation">,</span> labels<span class="token punctuation">,</span> graph<span class="token punctuation">,</span> dot<span class="token punctuation">)</span>
        x_space <span class="token operator">=</span> np<span class="token punctuation">.</span>linspace<span class="token punctuation">(</span><span class="token operator">*</span>ax<span class="token punctuation">.</span>x_range<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span>  <span class="token comment"># 将X轴切分成200个点</span>
        minimum_index <span class="token operator">=</span> func<span class="token punctuation">(</span>x_space<span class="token punctuation">)</span><span class="token punctuation">.</span>argmin<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 获得最小点的下标</span>
        self<span class="token punctuation">.</span>play<span class="token punctuation">(</span>t<span class="token punctuation">.</span>animate<span class="token punctuation">.</span>set_value<span class="token punctuation">(</span>x_space<span class="token punctuation">[</span>minimum_index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 将ValueTracker移动到最小点的x坐标</span>
        self<span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

<span class="token keyword">class</span> <span class="token class-name">ArgMinExample</span><span class="token punctuation">(</span>Scene<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">construct</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token comment"># 绘制曲线, ax只负责曲线的绘制, 点之类的用scene中的mobject对象</span>
        ax <span class="token operator">=</span> Axes<span class="token punctuation">(</span>
            x_range<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> y_range<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> axis_config<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;include_tip&quot;</span><span class="token punctuation">:</span> <span class="token boolean">False</span><span class="token punctuation">}</span>
        <span class="token punctuation">)</span><span class="token punctuation">.</span>add_coordinates<span class="token punctuation">(</span><span class="token punctuation">)</span>
        labels <span class="token operator">=</span> ax<span class="token punctuation">.</span>get_axis_labels<span class="token punctuation">(</span>x_label<span class="token operator">=</span><span class="token string">&quot;x&quot;</span><span class="token punctuation">,</span> y_label<span class="token operator">=</span><span class="token string">&quot;f(x)&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token punctuation">(</span>x <span class="token operator">-</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">**</span> <span class="token number">2</span>
        graph <span class="token operator">=</span> ax<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>func<span class="token punctuation">,</span> color<span class="token operator">=</span>MAROON<span class="token punctuation">)</span>


        <span class="token comment"># 配置Dot的初始点以及移动轨迹, 移动轨迹匹配的是ValueTracker</span>
        t <span class="token operator">=</span> ValueTracker<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        initial_point <span class="token operator">=</span> ax<span class="token punctuation">.</span>coords_to_point<span class="token punctuation">(</span>t<span class="token punctuation">.</span>get_value<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> func<span class="token punctuation">(</span>t<span class="token punctuation">.</span>get_value<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        dot <span class="token operator">=</span> Dot<span class="token punctuation">(</span>point<span class="token operator">=</span>initial_point<span class="token punctuation">)</span>
        dot<span class="token punctuation">.</span>add_updater<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">.</span>move_to<span class="token punctuation">(</span>ax<span class="token punctuation">.</span>c2p<span class="token punctuation">(</span>t<span class="token punctuation">.</span>get_value<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> func<span class="token punctuation">(</span>t<span class="token punctuation">.</span>get_value<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token comment"># 配置水平线</span>
        line <span class="token operator">=</span> ax<span class="token punctuation">.</span>get_horizontal_line<span class="token punctuation">(</span>initial_point<span class="token punctuation">,</span> line_func<span class="token operator">=</span>Line<span class="token punctuation">)</span>
        line<span class="token punctuation">.</span>add_updater<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">.</span>become<span class="token punctuation">(</span>ax<span class="token punctuation">.</span>get_horizontal_line<span class="token punctuation">(</span>ax<span class="token punctuation">.</span>c2p<span class="token punctuation">(</span>t<span class="token punctuation">.</span>get_value<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> func<span class="token punctuation">(</span>t<span class="token punctuation">.</span>get_value<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> line_func<span class="token operator">=</span>Line<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token comment"># 开始动画, 主要是根据ValueTracker的移动而移动</span>
        self<span class="token punctuation">.</span>add<span class="token punctuation">(</span>ax<span class="token punctuation">,</span> labels<span class="token punctuation">,</span> graph<span class="token punctuation">,</span> dot<span class="token punctuation">,</span> line<span class="token punctuation">)</span>
        x_space <span class="token operator">=</span> np<span class="token punctuation">.</span>linspace<span class="token punctuation">(</span><span class="token operator">*</span>ax<span class="token punctuation">.</span>x_range<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span>  <span class="token comment"># 将X轴切分成200个点</span>
        minimum_index <span class="token operator">=</span> func<span class="token punctuation">(</span>x_space<span class="token punctuation">)</span><span class="token punctuation">.</span>argmin<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 获得最小点的下标</span>
        self<span class="token punctuation">.</span>play<span class="token punctuation">(</span>t<span class="token punctuation">.</span>animate<span class="token punctuation">.</span>set_value<span class="token punctuation">(</span>x_space<span class="token punctuation">[</span>minimum_index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 将ValueTracker移动到最小点的x坐标</span>
        self<span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[e];function u(l,i){return s(),a("div",null,c)}const d=n(o,[["render",u],["__file","dotWithCurve.html.vue"]]);export{d as default};
