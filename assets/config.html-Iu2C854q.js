import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-MTzDpLgJ.js";const i={},c=e(`<h1 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h1><p>直接修改配置文件:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> manim <span class="token keyword">import</span> config
<span class="token keyword">from</span> manim <span class="token keyword">import</span> WHITE
config<span class="token punctuation">.</span>background_color <span class="token operator">=</span> WHITE
config<span class="token punctuation">[</span><span class="token string">&quot;background_color&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> WHITE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意一些配置文件是相互关联的</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>config<span class="token punctuation">.</span>frame_height <span class="token comment"># 8.0</span>
config<span class="token punctuation">.</span>frame_y_radius <span class="token operator">=</span> <span class="token number">5.0</span>  <span class="token comment"># 更改y轴的半径, 会影响y轴的长度</span>
config<span class="token punctuation">.</span>frame_height  <span class="token comment"># 10.0  # frame_height = 2 * frame_y_radius</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用的一些配置项</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token comment">## 背景设置</span>
config<span class="token punctuation">.</span>background_color  <span class="token comment"># black</span>
config<span class="token punctuation">.</span>background_opacity  <span class="token comment"># 1.0</span>

<span class="token comment">## 画布的大小</span>

<span class="token comment">### 像素</span>
config<span class="token punctuation">.</span>pixel_height  <span class="token comment"># 1080</span>
config<span class="token punctuation">.</span>pixel_width  <span class="token comment"># 1920</span>
config<span class="token punctuation">.</span>frame_size  <span class="token comment"># 1920, 1080</span>
<span class="token comment">### 坐标系</span>
config<span class="token punctuation">.</span>frame_height  <span class="token comment"># 8</span>
config<span class="token punctuation">.</span>frame_width  <span class="token comment"># 14.22</span>
config<span class="token punctuation">.</span>frame_x_radius  <span class="token comment"># 4</span>
config<span class="token punctuation">.</span>frame_y_radius  <span class="token comment"># 7.11</span>
config<span class="token punctuation">.</span>bottom <span class="token comment"># array([ 0., -4.,  0.])</span>
config<span class="token punctuation">.</span>left_side  <span class="token comment"># array([-7.11, 0., 0.])</span>
config<span class="token punctuation">.</span>right_side  <span class="token comment"># array([-7.11, 0., 0.])</span>
config<span class="token punctuation">.</span>top  <span class="token comment"># array([0., 4., 0.])</span>
<span class="token comment">### 输出配置</span>
config<span class="token punctuation">.</span>assets_dir  <span class="token comment"># &#39;./&#39;</span>
config<span class="token punctuation">.</span>media_dir  <span class="token comment"># &#39;./media&#39;</span>
config<span class="token punctuation">.</span>images_dir  <span class="token comment"># &#39;{media_dir}/images/{module_name}&#39;</span>
config<span class="token punctuation">.</span>log_dir  <span class="token comment"># &#39;{media_dir}/logs&#39;</span>
config<span class="token punctuation">.</span>partial_movie_dir  <span class="token comment"># &#39;{video_dir}/partial_movie_files/{scene_name}&#39;</span>
config<span class="token punctuation">.</span>sections_dir  <span class="token comment"># &#39;{video_dir}/sections&#39;</span>
config<span class="token punctuation">.</span>tex_dir  <span class="token comment"># &#39;{media_dir}/Tex&#39;</span>
config<span class="token punctuation">.</span>text_dir  <span class="token comment"># &#39;{media_dir}/texts&#39;</span>
config<span class="token punctuation">.</span>video_dir  <span class="token comment"># &#39;{media_dir}/videos/{module_name}/{quality}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://docs.manim.community/en/stable/reference/manim._config.utils.ManimConfig.html</p>`,8),o=[c];function t(p,l){return s(),a("div",null,o)}const r=n(i,[["render",t],["__file","config.html.vue"]]);export{r as default};
