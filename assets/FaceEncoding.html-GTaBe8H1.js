import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-SnI5rGHA.js";const t={},c=e(`<h1 id="orient" tabindex="-1"><a class="header-anchor" href="#orient" aria-hidden="true">#</a> orient</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> dlib
<span class="token keyword">import</span> cv2 <span class="token keyword">as</span> cv

<span class="token comment">## 1. 读取图片</span>
face_image <span class="token operator">=</span> cv<span class="token punctuation">.</span>imread<span class="token punctuation">(</span><span class="token string">&#39;zhourui.png&#39;</span><span class="token punctuation">)</span>

<span class="token comment">## 2. 人脸检测</span>
face_detector <span class="token operator">=</span> dlib<span class="token punctuation">.</span>get_frontal_face_detector<span class="token punctuation">(</span><span class="token punctuation">)</span>
face_locations <span class="token operator">=</span> face_detector<span class="token punctuation">(</span>face_image<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">## 3. 计算landmarks</span>
pose_predictor_68_point <span class="token operator">=</span> dlib<span class="token punctuation">.</span>shape_predictor<span class="token punctuation">(</span><span class="token string">&quot;shape_predictor_68_face_landmarks.dat&quot;</span><span class="token punctuation">)</span>
landmarks <span class="token operator">=</span> pose_predictor_68_point<span class="token punctuation">(</span>face_image<span class="token punctuation">,</span> face_locations<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>


<span class="token comment">## 4. 人脸编码</span>
face_encoder <span class="token operator">=</span> dlib<span class="token punctuation">.</span>face_recognition_model_v1<span class="token punctuation">(</span><span class="token string">&quot;dlib_face_recognition_resnet_model_v1.dat&quot;</span><span class="token punctuation">)</span>
res <span class="token operator">=</span> face_encoder<span class="token punctuation">.</span>compute_face_descriptor<span class="token punctuation">(</span>face_image<span class="token punctuation">,</span> landmarks<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
res
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>http://dlib.net/files/ http://dlib.net/python/index.html</p>`,3),o=[c];function p(i,l){return s(),a("div",null,o)}const u=n(t,[["render",p],["__file","FaceEncoding.html.vue"]]);export{u as default};
