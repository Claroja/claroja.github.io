import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as a,a as e}from"./app-7knaTE3M.js";const l="/assets/1-7eYCC_6Y.jpg",r="/assets/4-XIkW3OfP.jpg",n="/assets/5-4OuFjxWs.jpg",o="/assets/2--07PP5El.jpg",s="/assets/3-aiuciP2z.png",d={},p=e('<h1 id="transform" tabindex="-1"><a class="header-anchor" href="#transform" aria-hidden="true">#</a> transform</h1><h2 id="gpt" tabindex="-1"><a class="header-anchor" href="#gpt" aria-hidden="true">#</a> GPT</h2><p>GPT(Generative Pre-trained Transformer)全称是生成式预训练Transformer.</p><ol><li><p>生成式(Generative): 就是像对话一样</p></li><li><p>预训练(Pre-trained): 预先进行训练好的模型, 使用时只需微调即可</p></li><li><p>transformer是关键, 包含4个部分:</p><ol><li>Embedding: 将词语用向量进行表示</li><li>Attention: 注意力机制</li><li>MLPs(Multi Layer Perceptron):</li><li>Unembedding: 将向量映射到词语并给出预测值</li></ol><figure><img src="'+l+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure></li></ol><h2 id="权重-weight-和数据-data" tabindex="-1"><a class="header-anchor" href="#权重-weight-和数据-data" aria-hidden="true">#</a> 权重(weight)和数据(data)</h2><p>深度学习模型的输入, 权重矩阵每一行代表一个神经元, 每一个神经元包含了和词向量长度相同的系数向量.每一列代表一个词向量(或者说每一列代表一个样本). 在生成式语言模型中, 每一个词向量都与矩阵相乘, 从而得到下一个词向量.</p><figure><img src="'+r+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><p>而在transformer模型中, 这些权重系数可以分为:</p><ol><li>Embedding:</li><li>Attention: <ol><li>Key:</li><li>Query:</li><li>value</li><li>Output</li></ol></li><li>MLPs: <ol><li>Up-projection:</li><li>Down-projection:</li></ol></li><li>unembedding:</li></ol><p>详细的数量如下图所示: <img src="'+n+'" alt="alt text" loading="lazy"></p><h2 id="直观理解" tabindex="-1"><a class="header-anchor" href="#直观理解" aria-hidden="true">#</a> 直观理解</h2><p>gpt原本是语言模型, 输入是一个词语, 输出的也是一个词语.</p><figure><img src="'+o+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><p>如果我们想要生成图片, 或者音频, 仅需将图片切割成像素, 或将音频切成小片段.</p><figure><img src="'+s+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi</li></ol>',17),c=[p];function g(f,h){return t(),a("div",null,c)}const u=i(d,[["render",g],["__file","0transform.html.vue"]]);export{u as default};
