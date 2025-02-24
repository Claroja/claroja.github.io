const a=JSON.parse(`{"key":"v-9a553ed8","path":"/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/2%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF/1%E4%BA%BA%E8%84%B8%E8%AF%86%E5%88%AB/FaceEncoding.html","title":"orient","lang":"zh-CN","frontmatter":{"description":"orient import dlib import cv2 as cv ## 1. 读取图片 face_image = cv.imread('zhourui.png') ## 2. 人脸检测 face_detector = dlib.get_frontal_face_detector() face_locations = face_detector(face_image, 1) ## 3. 计算landmarks pose_predictor_68_point = dlib.shape_predictor(\\"shape_predictor_68_face_landmarks.dat\\") landmarks = pose_predictor_68_point(face_image, face_locations[0]) ## 4. 人脸编码 face_encoder = dlib.face_recognition_model_v1(\\"dlib_face_recognition_resnet_model_v1.dat\\") res = face_encoder.compute_face_descriptor(face_image, landmarks, 1) res","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/2%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF/1%E4%BA%BA%E8%84%B8%E8%AF%86%E5%88%AB/FaceEncoding.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"orient"}],["meta",{"property":"og:description","content":"orient import dlib import cv2 as cv ## 1. 读取图片 face_image = cv.imread('zhourui.png') ## 2. 人脸检测 face_detector = dlib.get_frontal_face_detector() face_locations = face_detector(face_image, 1) ## 3. 计算landmarks pose_predictor_68_point = dlib.shape_predictor(\\"shape_predictor_68_face_landmarks.dat\\") landmarks = pose_predictor_68_point(face_image, face_locations[0]) ## 4. 人脸编码 face_encoder = dlib.face_recognition_model_v1(\\"dlib_face_recognition_resnet_model_v1.dat\\") res = face_encoder.compute_face_descriptor(face_image, landmarks, 1) res"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"orient\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.19,"words":57},"filePathRelative":"2机器学习/2应用场景/1人脸识别/FaceEncoding.md","localizedDate":"2025年2月24日","excerpt":"<h1> orient</h1>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> dlib\\n<span class=\\"token keyword\\">import</span> cv2 <span class=\\"token keyword\\">as</span> cv\\n\\n<span class=\\"token comment\\">## 1. 读取图片</span>\\nface_image <span class=\\"token operator\\">=</span> cv<span class=\\"token punctuation\\">.</span>imread<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'zhourui.png'</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">## 2. 人脸检测</span>\\nface_detector <span class=\\"token operator\\">=</span> dlib<span class=\\"token punctuation\\">.</span>get_frontal_face_detector<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\nface_locations <span class=\\"token operator\\">=</span> face_detector<span class=\\"token punctuation\\">(</span>face_image<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">## 3. 计算landmarks</span>\\npose_predictor_68_point <span class=\\"token operator\\">=</span> dlib<span class=\\"token punctuation\\">.</span>shape_predictor<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"shape_predictor_68_face_landmarks.dat\\"</span><span class=\\"token punctuation\\">)</span>\\nlandmarks <span class=\\"token operator\\">=</span> pose_predictor_68_point<span class=\\"token punctuation\\">(</span>face_image<span class=\\"token punctuation\\">,</span> face_locations<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n\\n\\n<span class=\\"token comment\\">## 4. 人脸编码</span>\\nface_encoder <span class=\\"token operator\\">=</span> dlib<span class=\\"token punctuation\\">.</span>face_recognition_model_v1<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"dlib_face_recognition_resnet_model_v1.dat\\"</span><span class=\\"token punctuation\\">)</span>\\nres <span class=\\"token operator\\">=</span> face_encoder<span class=\\"token punctuation\\">.</span>compute_face_descriptor<span class=\\"token punctuation\\">(</span>face_image<span class=\\"token punctuation\\">,</span> landmarks<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\nres\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{a as data};
