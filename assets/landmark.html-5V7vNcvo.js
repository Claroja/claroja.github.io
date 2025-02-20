const n=JSON.parse(`{"key":"v-2ded764b","path":"/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/4_1%E4%BA%BA%E8%84%B8%E8%AF%86%E5%88%AB/landmark.html","title":"DesiredCapabilities","lang":"zh-CN","frontmatter":{"description":"DesiredCapabilities import dlib import cv2 as cv def landmark_as_tuples(landmark): points = [(p.x, p.y) for p in landmark.parts()] return { \\"all\\": points, \\"chin\\": points[0:17], \\"left_eyebrow\\": points[17:22], \\"right_eyebrow\\": points[22:27], \\"nose_bridge\\": points[27:31], \\"nose_tip\\": points[31:36], \\"left_eye\\": points[36:42], \\"right_eye\\": points[42:48], \\"top_lip\\": points[48:55] + [points[64]] + [points[63]] + [points[62]] + [points[61]] + [points[60]], \\"bottom_lip\\": points[54:60] + [points[48]] + [points[60]] + [points[67]] + [points[66]] + [points[65]] + [ points[64]] } def drawLM(landmark_tuple, img): for point in landmark_tuple: cv.circle(img, point, 2, (0, 0, 255), -1) ## 1. 读取图片 image = cv.imread('zhourui.png') ## 2. 定位人脸 face_detector = dlib.get_frontal_face_detector() face_locations = face_detector(image, 1) ## 3. 定人人脸标志 face_pose_predictor = dlib.shape_predictor(\\"shape_predictor_68_face_landmarks.dat\\") for face_location in face_locations: x0, y0, x1, y1 = face_location.left(), face_location.top(), face_location.right(), face_location.bottom() cv.rectangle(image, (x0, y0), (x1, y1), (255, 255, 255), 1) landmark = face_pose_predictor(image, face_location) landmark_tuple = landmark_as_tuples(landmark) drawLM(landmark_tuple[\\"bottom_lip\\"], image) ## show the image cv.imshow('face detection', image) ## keep the window open until we press a key cv.waitKey(0) ## close the window cv.destroyAllWindows()","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/4_1%E4%BA%BA%E8%84%B8%E8%AF%86%E5%88%AB/landmark.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"DesiredCapabilities"}],["meta",{"property":"og:description","content":"DesiredCapabilities import dlib import cv2 as cv def landmark_as_tuples(landmark): points = [(p.x, p.y) for p in landmark.parts()] return { \\"all\\": points, \\"chin\\": points[0:17], \\"left_eyebrow\\": points[17:22], \\"right_eyebrow\\": points[22:27], \\"nose_bridge\\": points[27:31], \\"nose_tip\\": points[31:36], \\"left_eye\\": points[36:42], \\"right_eye\\": points[42:48], \\"top_lip\\": points[48:55] + [points[64]] + [points[63]] + [points[62]] + [points[61]] + [points[60]], \\"bottom_lip\\": points[54:60] + [points[48]] + [points[60]] + [points[67]] + [points[66]] + [points[65]] + [ points[64]] } def drawLM(landmark_tuple, img): for point in landmark_tuple: cv.circle(img, point, 2, (0, 0, 255), -1) ## 1. 读取图片 image = cv.imread('zhourui.png') ## 2. 定位人脸 face_detector = dlib.get_frontal_face_detector() face_locations = face_detector(image, 1) ## 3. 定人人脸标志 face_pose_predictor = dlib.shape_predictor(\\"shape_predictor_68_face_landmarks.dat\\") for face_location in face_locations: x0, y0, x1, y1 = face_location.left(), face_location.top(), face_location.right(), face_location.bottom() cv.rectangle(image, (x0, y0), (x1, y1), (255, 255, 255), 1) landmark = face_pose_predictor(image, face_location) landmark_tuple = landmark_as_tuples(landmark) drawLM(landmark_tuple[\\"bottom_lip\\"], image) ## show the image cv.imshow('face detection', image) ## keep the window open until we press a key cv.waitKey(0) ## close the window cv.destroyAllWindows()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-18T14:02:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-18T14:02:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DesiredCapabilities\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-18T14:02:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1739887321000,"updatedTime":1739887321000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.76,"words":228},"filePathRelative":"机器学习/4_1人脸识别/landmark.md","localizedDate":"2025年2月18日","excerpt":"<h1> DesiredCapabilities</h1>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> dlib\\n<span class=\\"token keyword\\">import</span> cv2 <span class=\\"token keyword\\">as</span> cv\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">landmark_as_tuples</span><span class=\\"token punctuation\\">(</span>landmark<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    points <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">(</span>p<span class=\\"token punctuation\\">.</span>x<span class=\\"token punctuation\\">,</span> p<span class=\\"token punctuation\\">.</span>y<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">for</span> p <span class=\\"token keyword\\">in</span> landmark<span class=\\"token punctuation\\">.</span>parts<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">]</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token string\\">\\"all\\"</span><span class=\\"token punctuation\\">:</span> points<span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token string\\">\\"chin\\"</span><span class=\\"token punctuation\\">:</span> points<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">17</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token string\\">\\"left_eyebrow\\"</span><span class=\\"token punctuation\\">:</span> points<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">17</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">22</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token string\\">\\"right_eyebrow\\"</span><span class=\\"token punctuation\\">:</span> points<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">22</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">27</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token string\\">\\"nose_bridge\\"</span><span class=\\"token punctuation\\">:</span> points<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">27</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">31</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token string\\">\\"nose_tip\\"</span><span class=\\"token punctuation\\">:</span> points<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">31</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">36</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token string\\">\\"left_eye\\"</span><span class=\\"token punctuation\\">:</span> points<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">36</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">42</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token string\\">\\"right_eye\\"</span><span class=\\"token punctuation\\">:</span> points<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">42</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">48</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token string\\">\\"top_lip\\"</span><span class=\\"token punctuation\\">:</span> points<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">48</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">55</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">+</span> <span class=\\"token punctuation\\">[</span>points<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">64</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">+</span> <span class=\\"token punctuation\\">[</span>points<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">63</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">+</span> <span class=\\"token punctuation\\">[</span>points<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">62</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">+</span> <span class=\\"token punctuation\\">[</span>points<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">61</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">+</span> <span class=\\"token punctuation\\">[</span>points<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">60</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token string\\">\\"bottom_lip\\"</span><span class=\\"token punctuation\\">:</span> points<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">54</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">60</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">+</span> <span class=\\"token punctuation\\">[</span>points<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">48</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">+</span> <span class=\\"token punctuation\\">[</span>points<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">60</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">+</span> <span class=\\"token punctuation\\">[</span>points<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">67</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">+</span> <span class=\\"token punctuation\\">[</span>points<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">66</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">+</span> <span class=\\"token punctuation\\">[</span>points<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">65</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">+</span> <span class=\\"token punctuation\\">[</span>\\n            points<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">64</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">drawLM</span><span class=\\"token punctuation\\">(</span>landmark_tuple<span class=\\"token punctuation\\">,</span> img<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">for</span> point <span class=\\"token keyword\\">in</span> landmark_tuple<span class=\\"token punctuation\\">:</span>\\n        cv<span class=\\"token punctuation\\">.</span>circle<span class=\\"token punctuation\\">(</span>img<span class=\\"token punctuation\\">,</span> point<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">255</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\n\\n\\n<span class=\\"token comment\\">## 1. 读取图片</span>\\nimage <span class=\\"token operator\\">=</span> cv<span class=\\"token punctuation\\">.</span>imread<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'zhourui.png'</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">## 2. 定位人脸</span>\\nface_detector <span class=\\"token operator\\">=</span> dlib<span class=\\"token punctuation\\">.</span>get_frontal_face_detector<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\nface_locations <span class=\\"token operator\\">=</span> face_detector<span class=\\"token punctuation\\">(</span>image<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">## 3. 定人人脸标志</span>\\nface_pose_predictor <span class=\\"token operator\\">=</span> dlib<span class=\\"token punctuation\\">.</span>shape_predictor<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"shape_predictor_68_face_landmarks.dat\\"</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">for</span> face_location <span class=\\"token keyword\\">in</span> face_locations<span class=\\"token punctuation\\">:</span>\\n    x0<span class=\\"token punctuation\\">,</span> y0<span class=\\"token punctuation\\">,</span> x1<span class=\\"token punctuation\\">,</span> y1 <span class=\\"token operator\\">=</span> face_location<span class=\\"token punctuation\\">.</span>left<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> face_location<span class=\\"token punctuation\\">.</span>top<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> face_location<span class=\\"token punctuation\\">.</span>right<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> face_location<span class=\\"token punctuation\\">.</span>bottom<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n    cv<span class=\\"token punctuation\\">.</span>rectangle<span class=\\"token punctuation\\">(</span>image<span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span>x0<span class=\\"token punctuation\\">,</span> y0<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span>x1<span class=\\"token punctuation\\">,</span> y1<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span><span class=\\"token number\\">255</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">255</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">255</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\n    landmark <span class=\\"token operator\\">=</span> face_pose_predictor<span class=\\"token punctuation\\">(</span>image<span class=\\"token punctuation\\">,</span> face_location<span class=\\"token punctuation\\">)</span>\\n    landmark_tuple <span class=\\"token operator\\">=</span> landmark_as_tuples<span class=\\"token punctuation\\">(</span>landmark<span class=\\"token punctuation\\">)</span>\\n    drawLM<span class=\\"token punctuation\\">(</span>landmark_tuple<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"bottom_lip\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> image<span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">## show the image</span>\\ncv<span class=\\"token punctuation\\">.</span>imshow<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'face detection'</span><span class=\\"token punctuation\\">,</span> image<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">## keep the window open until we press a key</span>\\ncv<span class=\\"token punctuation\\">.</span>waitKey<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">## close the window</span>\\ncv<span class=\\"token punctuation\\">.</span>destroyAllWindows<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
