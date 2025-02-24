const t=JSON.parse('{"key":"v-e5cfe90a","path":"/1%E6%95%B0%E6%8D%AE%E6%8C%96%E6%8E%98/5%E7%BB%9F%E8%AE%A1%E5%AD%A6/12%E5%A4%9A%E5%85%83%E7%BA%BF%E6%80%A7%E5%9B%9E%E5%BD%92/7%E5%A4%9A%E5%85%83%E5%9B%9E%E5%BD%92python%E5%AE%9E%E7%8E%B0.html","title":"多元回归","lang":"zh-CN","frontmatter":{"description":"多元回归 让预测销售额的模型包含湿度, 温度, 天气(晴或雨), 价格4个解释变量. 天气为分类变量, 其余为连续变量. \\"\\"\\" humidity\\tprice\\tsales\\ttemperature\\tweather 29.5\\t290\\t229.7\\t17.8\\trainy 38.1\\t290\\t206.1\\t26.1\\trainy 31.5\\t290\\t202.5\\t22\\trainy 39.7\\t290\\t195.5\\t23\\trainy 24.7\\t290\\t214.4\\t14.5\\trainy 27.2\\t290\\t174.4\\t20.8\\trainy 29.3\\t290\\t238.6\\t23.7\\trainy 26.4\\t290\\t190.8\\t15.2\\trainy 27.9\\t290\\t211.2\\t18.7\\trainy 38\\t290\\t204.5\\t20.2\\trainy 26.9\\t290\\t221.7\\t13.1\\trainy 28.9\\t290\\t179\\t21.6\\trainy 37.9\\t290\\t208.2\\t24.2\\trainy 27.7\\t290\\t197.1\\t15.7\\trainy 29.4\\t290\\t227.2\\t21.8\\trainy 30.7\\t290\\t183.6\\t13.4\\trainy 33.8\\t290\\t205.2\\t19.8\\trainy 25.8\\t290\\t185.1\\t11.9\\trainy 39.6\\t290\\t215.4\\t25.6\\trainy 33.6\\t290\\t219.1\\t22\\trainy 36.8\\t290\\t191.4\\t19.9\\trainy 31.2\\t290\\t220.5\\t16.1\\trainy 40.5\\t290\\t229.2\\t26.4\\trainy 38.2\\t290\\t227.3\\t29.8\\trainy 22.8\\t290\\t210.4\\t10.7\\trainy 43.1\\t290\\t205.2\\t26.2\\trainy 35.2\\t290\\t215.9\\t28.1\\trainy 32.4\\t290\\t196\\t21.7\\trainy 26.3\\t290\\t196.8\\t14\\trainy 34\\t290\\t221.1\\t24.3\\trainy 32.2\\t295\\t194.5\\t19.1\\trainy 30.8\\t295\\t196.4\\t17\\trainy 30.3\\t295\\t188.3\\t13.8\\trainy 39.1\\t295\\t196.7\\t22.8\\trainy 34\\t295\\t200.7\\t24\\trainy 26.4\\t295\\t202.1\\t16.9\\trainy 30\\t295\\t192.4\\t22.6\\trainy 26.6\\t295\\t202.7\\t14.3\\trainy 29.4\\t295\\t235.7\\t24\\trainy 34.6\\t295\\t217.4\\t20.2\\trainy 30\\t310\\t196\\t19.1\\trainy 30.8\\t310\\t186.1\\t19.5\\trainy 34.6\\t310\\t194\\t24.3\\trainy 30.1\\t310\\t229.9\\t23.8\\trainy 31\\t310\\t203.9\\t22.6\\trainy 34.4\\t315\\t189.3\\t20.7\\trainy 34.1\\t315\\t201.3\\t20.4\\trainy 32.5\\t315\\t233.2\\t23.1\\trainy 38.2\\t315\\t201.2\\t21.2\\trainy 30.1\\t315\\t211.3\\t23.4\\trainy 28\\t290\\t229.6\\t18.4\\tsunny 22\\t290\\t207.1\\t7.8\\tsunny 24.7\\t290\\t216.1\\t25.2\\tsunny 42.4\\t290\\t234.8\\t30.9\\tsunny 32.4\\t290\\t226.5\\t22.2\\tsunny 26.6\\t295\\t233.2\\t19.5\\tsunny 35.7\\t295\\t236.7\\t19.3\\tsunny 31.4\\t295\\t238.2\\t19.4\\tsunny 31.3\\t295\\t229.4\\t20.1\\tsunny 24.8\\t295\\t231.6\\t14.4\\tsunny 28.8\\t310\\t204.6\\t17.4\\tsunny 22.4\\t310\\t231.8\\t15\\tsunny 33.1\\t310\\t228.1\\t21.2\\tsunny 28\\t310\\t212.7\\t18.5\\tsunny 31.9\\t310\\t229.3\\t22.5\\tsunny 33.1\\t310\\t216.8\\t19.1\\tsunny 33.8\\t310\\t241.9\\t24.9\\tsunny 31.4\\t310\\t243.1\\t21.1\\tsunny 37.4\\t310\\t265\\t31\\tsunny 22.1\\t310\\t186.7\\t10.5\\tsunny 30.6\\t315\\t191.5\\t16.8\\tsunny 37.3\\t315\\t214.8\\t24.5\\tsunny 39.8\\t315\\t234.5\\t32.6\\tsunny 31.9\\t315\\t228.7\\t18.8\\tsunny 27.5\\t315\\t222\\t20.2\\tsunny 26.7\\t315\\t185.3\\t18.9\\tsunny 29.7\\t315\\t220.4\\t26.7\\tsunny 32.9\\t315\\t227.7\\t18.6\\tsunny 31.3\\t315\\t224.5\\t23.4\\tsunny 33.2\\t315\\t226.5\\t18.4\\tsunny 23.8\\t315\\t206\\t13.6\\tsunny 29.6\\t315\\t215.9\\t21.6\\tsunny 31.8\\t315\\t222.8\\t22.5\\tsunny 36.7\\t315\\t231\\t26.5\\tsunny 29.8\\t315\\t219.3\\t19.4\\tsunny 28.8\\t315\\t215.1\\t16.9\\tsunny 31.7\\t315\\t210.3\\t22.8\\tsunny 31.3\\t315\\t224.1\\t21.2\\tsunny 27.5\\t315\\t220.5\\t21.4\\tsunny 30\\t315\\t233.5\\t19.6\\tsunny 32.9\\t315\\t241.9\\t25.8\\tsunny 30.9\\t315\\t221.9\\t21.8\\tsunny 37.2\\t315\\t222.8\\t29.5\\tsunny 31.3\\t315\\t214.1\\t25.6\\tsunny 31.7\\t315\\t227.3\\t23.3\\tsunny 24.2\\t315\\t208.4\\t11.9\\tsunny 33.1\\t315\\t215.4\\t23\\tsunny 33.6\\t315\\t220.2\\t22.1\\tsunny 29.6\\t315\\t212.6\\t24.1\\tsunny 34.9\\t315\\t233.7\\t25.2\\tsunny \\"\\"\\" ## 用于数值计算的库 import numpy as np import pandas as pd import scipy as sp from scipy import stats ## 用于绘图的库 from matplotlib import pyplot as plt ## 用于估计统计模型的库 (部分版本会报出警告信息) import statsmodels.formula.api as smf import statsmodels.api as sm ## 读入数据 sales = pd.read_csv(data) ## 估计多解释变量的模型 lm_sales = smf.ols( \\"sales ~ weather + humidity + temperature + price\\", data=sales).fit() ## 估计的结果 lm_sales.params \\"\\"\\" Intercept 278.627722 weather[T.sunny] 19.989119 humidity -0.254055 temperature 1.603115 price -0.329207 dtype: float64 \\"\\"\\"","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/1%E6%95%B0%E6%8D%AE%E6%8C%96%E6%8E%98/5%E7%BB%9F%E8%AE%A1%E5%AD%A6/12%E5%A4%9A%E5%85%83%E7%BA%BF%E6%80%A7%E5%9B%9E%E5%BD%92/7%E5%A4%9A%E5%85%83%E5%9B%9E%E5%BD%92python%E5%AE%9E%E7%8E%B0.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"多元回归"}],["meta",{"property":"og:description","content":"多元回归 让预测销售额的模型包含湿度, 温度, 天气(晴或雨), 价格4个解释变量. 天气为分类变量, 其余为连续变量. \\"\\"\\" humidity\\tprice\\tsales\\ttemperature\\tweather 29.5\\t290\\t229.7\\t17.8\\trainy 38.1\\t290\\t206.1\\t26.1\\trainy 31.5\\t290\\t202.5\\t22\\trainy 39.7\\t290\\t195.5\\t23\\trainy 24.7\\t290\\t214.4\\t14.5\\trainy 27.2\\t290\\t174.4\\t20.8\\trainy 29.3\\t290\\t238.6\\t23.7\\trainy 26.4\\t290\\t190.8\\t15.2\\trainy 27.9\\t290\\t211.2\\t18.7\\trainy 38\\t290\\t204.5\\t20.2\\trainy 26.9\\t290\\t221.7\\t13.1\\trainy 28.9\\t290\\t179\\t21.6\\trainy 37.9\\t290\\t208.2\\t24.2\\trainy 27.7\\t290\\t197.1\\t15.7\\trainy 29.4\\t290\\t227.2\\t21.8\\trainy 30.7\\t290\\t183.6\\t13.4\\trainy 33.8\\t290\\t205.2\\t19.8\\trainy 25.8\\t290\\t185.1\\t11.9\\trainy 39.6\\t290\\t215.4\\t25.6\\trainy 33.6\\t290\\t219.1\\t22\\trainy 36.8\\t290\\t191.4\\t19.9\\trainy 31.2\\t290\\t220.5\\t16.1\\trainy 40.5\\t290\\t229.2\\t26.4\\trainy 38.2\\t290\\t227.3\\t29.8\\trainy 22.8\\t290\\t210.4\\t10.7\\trainy 43.1\\t290\\t205.2\\t26.2\\trainy 35.2\\t290\\t215.9\\t28.1\\trainy 32.4\\t290\\t196\\t21.7\\trainy 26.3\\t290\\t196.8\\t14\\trainy 34\\t290\\t221.1\\t24.3\\trainy 32.2\\t295\\t194.5\\t19.1\\trainy 30.8\\t295\\t196.4\\t17\\trainy 30.3\\t295\\t188.3\\t13.8\\trainy 39.1\\t295\\t196.7\\t22.8\\trainy 34\\t295\\t200.7\\t24\\trainy 26.4\\t295\\t202.1\\t16.9\\trainy 30\\t295\\t192.4\\t22.6\\trainy 26.6\\t295\\t202.7\\t14.3\\trainy 29.4\\t295\\t235.7\\t24\\trainy 34.6\\t295\\t217.4\\t20.2\\trainy 30\\t310\\t196\\t19.1\\trainy 30.8\\t310\\t186.1\\t19.5\\trainy 34.6\\t310\\t194\\t24.3\\trainy 30.1\\t310\\t229.9\\t23.8\\trainy 31\\t310\\t203.9\\t22.6\\trainy 34.4\\t315\\t189.3\\t20.7\\trainy 34.1\\t315\\t201.3\\t20.4\\trainy 32.5\\t315\\t233.2\\t23.1\\trainy 38.2\\t315\\t201.2\\t21.2\\trainy 30.1\\t315\\t211.3\\t23.4\\trainy 28\\t290\\t229.6\\t18.4\\tsunny 22\\t290\\t207.1\\t7.8\\tsunny 24.7\\t290\\t216.1\\t25.2\\tsunny 42.4\\t290\\t234.8\\t30.9\\tsunny 32.4\\t290\\t226.5\\t22.2\\tsunny 26.6\\t295\\t233.2\\t19.5\\tsunny 35.7\\t295\\t236.7\\t19.3\\tsunny 31.4\\t295\\t238.2\\t19.4\\tsunny 31.3\\t295\\t229.4\\t20.1\\tsunny 24.8\\t295\\t231.6\\t14.4\\tsunny 28.8\\t310\\t204.6\\t17.4\\tsunny 22.4\\t310\\t231.8\\t15\\tsunny 33.1\\t310\\t228.1\\t21.2\\tsunny 28\\t310\\t212.7\\t18.5\\tsunny 31.9\\t310\\t229.3\\t22.5\\tsunny 33.1\\t310\\t216.8\\t19.1\\tsunny 33.8\\t310\\t241.9\\t24.9\\tsunny 31.4\\t310\\t243.1\\t21.1\\tsunny 37.4\\t310\\t265\\t31\\tsunny 22.1\\t310\\t186.7\\t10.5\\tsunny 30.6\\t315\\t191.5\\t16.8\\tsunny 37.3\\t315\\t214.8\\t24.5\\tsunny 39.8\\t315\\t234.5\\t32.6\\tsunny 31.9\\t315\\t228.7\\t18.8\\tsunny 27.5\\t315\\t222\\t20.2\\tsunny 26.7\\t315\\t185.3\\t18.9\\tsunny 29.7\\t315\\t220.4\\t26.7\\tsunny 32.9\\t315\\t227.7\\t18.6\\tsunny 31.3\\t315\\t224.5\\t23.4\\tsunny 33.2\\t315\\t226.5\\t18.4\\tsunny 23.8\\t315\\t206\\t13.6\\tsunny 29.6\\t315\\t215.9\\t21.6\\tsunny 31.8\\t315\\t222.8\\t22.5\\tsunny 36.7\\t315\\t231\\t26.5\\tsunny 29.8\\t315\\t219.3\\t19.4\\tsunny 28.8\\t315\\t215.1\\t16.9\\tsunny 31.7\\t315\\t210.3\\t22.8\\tsunny 31.3\\t315\\t224.1\\t21.2\\tsunny 27.5\\t315\\t220.5\\t21.4\\tsunny 30\\t315\\t233.5\\t19.6\\tsunny 32.9\\t315\\t241.9\\t25.8\\tsunny 30.9\\t315\\t221.9\\t21.8\\tsunny 37.2\\t315\\t222.8\\t29.5\\tsunny 31.3\\t315\\t214.1\\t25.6\\tsunny 31.7\\t315\\t227.3\\t23.3\\tsunny 24.2\\t315\\t208.4\\t11.9\\tsunny 33.1\\t315\\t215.4\\t23\\tsunny 33.6\\t315\\t220.2\\t22.1\\tsunny 29.6\\t315\\t212.6\\t24.1\\tsunny 34.9\\t315\\t233.7\\t25.2\\tsunny \\"\\"\\" ## 用于数值计算的库 import numpy as np import pandas as pd import scipy as sp from scipy import stats ## 用于绘图的库 from matplotlib import pyplot as plt ## 用于估计统计模型的库 (部分版本会报出警告信息) import statsmodels.formula.api as smf import statsmodels.api as sm ## 读入数据 sales = pd.read_csv(data) ## 估计多解释变量的模型 lm_sales = smf.ols( \\"sales ~ weather + humidity + temperature + price\\", data=sales).fit() ## 估计的结果 lm_sales.params \\"\\"\\" Intercept 278.627722 weather[T.sunny] 19.989119 humidity -0.254055 temperature 1.603115 price -0.329207 dtype: float64 \\"\\"\\""}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"多元回归\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":3,"title":"type 2 anova","slug":"type-2-anova","link":"#type-2-anova","children":[]},{"level":3,"title":"使用AIC进行变量选择","slug":"使用aic进行变量选择","link":"#使用aic进行变量选择","children":[]}],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":4.3,"words":1289},"filePathRelative":"1数据挖掘/5统计学/12多元线性回归/7多元回归python实现.md","localizedDate":"2025年2月24日","excerpt":"<h1> 多元回归</h1>\\n<p>让预测销售额的模型包含湿度, 温度, 天气(晴或雨), 价格4个解释变量. 天气为分类变量, 其余为连续变量.</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token triple-quoted-string string\\">\\"\\"\\"\\nhumidity\\tprice\\tsales\\ttemperature\\tweather\\n29.5\\t290\\t229.7\\t17.8\\trainy\\n38.1\\t290\\t206.1\\t26.1\\trainy\\n31.5\\t290\\t202.5\\t22\\trainy\\n39.7\\t290\\t195.5\\t23\\trainy\\n24.7\\t290\\t214.4\\t14.5\\trainy\\n27.2\\t290\\t174.4\\t20.8\\trainy\\n29.3\\t290\\t238.6\\t23.7\\trainy\\n26.4\\t290\\t190.8\\t15.2\\trainy\\n27.9\\t290\\t211.2\\t18.7\\trainy\\n38\\t290\\t204.5\\t20.2\\trainy\\n26.9\\t290\\t221.7\\t13.1\\trainy\\n28.9\\t290\\t179\\t21.6\\trainy\\n37.9\\t290\\t208.2\\t24.2\\trainy\\n27.7\\t290\\t197.1\\t15.7\\trainy\\n29.4\\t290\\t227.2\\t21.8\\trainy\\n30.7\\t290\\t183.6\\t13.4\\trainy\\n33.8\\t290\\t205.2\\t19.8\\trainy\\n25.8\\t290\\t185.1\\t11.9\\trainy\\n39.6\\t290\\t215.4\\t25.6\\trainy\\n33.6\\t290\\t219.1\\t22\\trainy\\n36.8\\t290\\t191.4\\t19.9\\trainy\\n31.2\\t290\\t220.5\\t16.1\\trainy\\n40.5\\t290\\t229.2\\t26.4\\trainy\\n38.2\\t290\\t227.3\\t29.8\\trainy\\n22.8\\t290\\t210.4\\t10.7\\trainy\\n43.1\\t290\\t205.2\\t26.2\\trainy\\n35.2\\t290\\t215.9\\t28.1\\trainy\\n32.4\\t290\\t196\\t21.7\\trainy\\n26.3\\t290\\t196.8\\t14\\trainy\\n34\\t290\\t221.1\\t24.3\\trainy\\n32.2\\t295\\t194.5\\t19.1\\trainy\\n30.8\\t295\\t196.4\\t17\\trainy\\n30.3\\t295\\t188.3\\t13.8\\trainy\\n39.1\\t295\\t196.7\\t22.8\\trainy\\n34\\t295\\t200.7\\t24\\trainy\\n26.4\\t295\\t202.1\\t16.9\\trainy\\n30\\t295\\t192.4\\t22.6\\trainy\\n26.6\\t295\\t202.7\\t14.3\\trainy\\n29.4\\t295\\t235.7\\t24\\trainy\\n34.6\\t295\\t217.4\\t20.2\\trainy\\n30\\t310\\t196\\t19.1\\trainy\\n30.8\\t310\\t186.1\\t19.5\\trainy\\n34.6\\t310\\t194\\t24.3\\trainy\\n30.1\\t310\\t229.9\\t23.8\\trainy\\n31\\t310\\t203.9\\t22.6\\trainy\\n34.4\\t315\\t189.3\\t20.7\\trainy\\n34.1\\t315\\t201.3\\t20.4\\trainy\\n32.5\\t315\\t233.2\\t23.1\\trainy\\n38.2\\t315\\t201.2\\t21.2\\trainy\\n30.1\\t315\\t211.3\\t23.4\\trainy\\n28\\t290\\t229.6\\t18.4\\tsunny\\n22\\t290\\t207.1\\t7.8\\tsunny\\n24.7\\t290\\t216.1\\t25.2\\tsunny\\n42.4\\t290\\t234.8\\t30.9\\tsunny\\n32.4\\t290\\t226.5\\t22.2\\tsunny\\n26.6\\t295\\t233.2\\t19.5\\tsunny\\n35.7\\t295\\t236.7\\t19.3\\tsunny\\n31.4\\t295\\t238.2\\t19.4\\tsunny\\n31.3\\t295\\t229.4\\t20.1\\tsunny\\n24.8\\t295\\t231.6\\t14.4\\tsunny\\n28.8\\t310\\t204.6\\t17.4\\tsunny\\n22.4\\t310\\t231.8\\t15\\tsunny\\n33.1\\t310\\t228.1\\t21.2\\tsunny\\n28\\t310\\t212.7\\t18.5\\tsunny\\n31.9\\t310\\t229.3\\t22.5\\tsunny\\n33.1\\t310\\t216.8\\t19.1\\tsunny\\n33.8\\t310\\t241.9\\t24.9\\tsunny\\n31.4\\t310\\t243.1\\t21.1\\tsunny\\n37.4\\t310\\t265\\t31\\tsunny\\n22.1\\t310\\t186.7\\t10.5\\tsunny\\n30.6\\t315\\t191.5\\t16.8\\tsunny\\n37.3\\t315\\t214.8\\t24.5\\tsunny\\n39.8\\t315\\t234.5\\t32.6\\tsunny\\n31.9\\t315\\t228.7\\t18.8\\tsunny\\n27.5\\t315\\t222\\t20.2\\tsunny\\n26.7\\t315\\t185.3\\t18.9\\tsunny\\n29.7\\t315\\t220.4\\t26.7\\tsunny\\n32.9\\t315\\t227.7\\t18.6\\tsunny\\n31.3\\t315\\t224.5\\t23.4\\tsunny\\n33.2\\t315\\t226.5\\t18.4\\tsunny\\n23.8\\t315\\t206\\t13.6\\tsunny\\n29.6\\t315\\t215.9\\t21.6\\tsunny\\n31.8\\t315\\t222.8\\t22.5\\tsunny\\n36.7\\t315\\t231\\t26.5\\tsunny\\n29.8\\t315\\t219.3\\t19.4\\tsunny\\n28.8\\t315\\t215.1\\t16.9\\tsunny\\n31.7\\t315\\t210.3\\t22.8\\tsunny\\n31.3\\t315\\t224.1\\t21.2\\tsunny\\n27.5\\t315\\t220.5\\t21.4\\tsunny\\n30\\t315\\t233.5\\t19.6\\tsunny\\n32.9\\t315\\t241.9\\t25.8\\tsunny\\n30.9\\t315\\t221.9\\t21.8\\tsunny\\n37.2\\t315\\t222.8\\t29.5\\tsunny\\n31.3\\t315\\t214.1\\t25.6\\tsunny\\n31.7\\t315\\t227.3\\t23.3\\tsunny\\n24.2\\t315\\t208.4\\t11.9\\tsunny\\n33.1\\t315\\t215.4\\t23\\tsunny\\n33.6\\t315\\t220.2\\t22.1\\tsunny\\n29.6\\t315\\t212.6\\t24.1\\tsunny\\n34.9\\t315\\t233.7\\t25.2\\tsunny\\n\\"\\"\\"</span>\\n<span class=\\"token comment\\">## 用于数值计算的库</span>\\n<span class=\\"token keyword\\">import</span> numpy <span class=\\"token keyword\\">as</span> np\\n<span class=\\"token keyword\\">import</span> pandas <span class=\\"token keyword\\">as</span> pd\\n<span class=\\"token keyword\\">import</span> scipy <span class=\\"token keyword\\">as</span> sp\\n<span class=\\"token keyword\\">from</span> scipy <span class=\\"token keyword\\">import</span> stats\\n\\n<span class=\\"token comment\\">## 用于绘图的库</span>\\n<span class=\\"token keyword\\">from</span> matplotlib <span class=\\"token keyword\\">import</span> pyplot <span class=\\"token keyword\\">as</span> plt\\n<span class=\\"token comment\\">## 用于估计统计模型的库 (部分版本会报出警告信息)</span>\\n<span class=\\"token keyword\\">import</span> statsmodels<span class=\\"token punctuation\\">.</span>formula<span class=\\"token punctuation\\">.</span>api <span class=\\"token keyword\\">as</span> smf\\n<span class=\\"token keyword\\">import</span> statsmodels<span class=\\"token punctuation\\">.</span>api <span class=\\"token keyword\\">as</span> sm\\n\\n<span class=\\"token comment\\">## 读入数据</span>\\nsales <span class=\\"token operator\\">=</span> pd<span class=\\"token punctuation\\">.</span>read_csv<span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">## 估计多解释变量的模型</span>\\nlm_sales <span class=\\"token operator\\">=</span> smf<span class=\\"token punctuation\\">.</span>ols<span class=\\"token punctuation\\">(</span>\\n    <span class=\\"token string\\">\\"sales ~ weather + humidity + temperature + price\\"</span><span class=\\"token punctuation\\">,</span>\\n    data<span class=\\"token operator\\">=</span>sales<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>fit<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">## 估计的结果</span>\\nlm_sales<span class=\\"token punctuation\\">.</span>params\\n<span class=\\"token triple-quoted-string string\\">\\"\\"\\"\\nIntercept           278.627722\\nweather[T.sunny]     19.989119\\nhumidity             -0.254055\\ntemperature           1.603115\\nprice                -0.329207\\ndtype: float64\\n\\"\\"\\"</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{t as data};
