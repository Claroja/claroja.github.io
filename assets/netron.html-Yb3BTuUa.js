const n=JSON.parse(`{"key":"v-5df80902","path":"/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/3_2pytorch/%E6%A8%A1%E5%9E%8B%E4%BF%9D%E5%AD%98/netron.html","title":"netron","lang":"zh-CN","frontmatter":{"description":"netron import torchvision.models import torch.onnx import netron model = torchvision.models.__dict__[\\"resnet101\\"](pretrained=True) # 获得预训练的resnet101 x = torch.randn(64, 3, 224, 224, requires_grad=True) ## Export the model torch.onnx.export(model, # model being run x, # model input (or a tuple for multiple inputs) \\"super_resolution.onnx\\", # where to save the model (can be a file or file-like object) export_params=True, # store the trained parameter weights inside the model file opset_version=10, # the ONNX version to export the model to do_constant_folding=True, # whether to execute constant folding for optimization input_names = ['input'], # the model's input names output_names = ['output'], # the model's output names dynamic_axes={'input' : {0 : 'batch_size'}, # variable length axes 'output' : {0 : 'batch_size'}}) netron.start(\\"./super_resolution.onnx\\")","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/3_2pytorch/%E6%A8%A1%E5%9E%8B%E4%BF%9D%E5%AD%98/netron.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"netron"}],["meta",{"property":"og:description","content":"netron import torchvision.models import torch.onnx import netron model = torchvision.models.__dict__[\\"resnet101\\"](pretrained=True) # 获得预训练的resnet101 x = torch.randn(64, 3, 224, 224, requires_grad=True) ## Export the model torch.onnx.export(model, # model being run x, # model input (or a tuple for multiple inputs) \\"super_resolution.onnx\\", # where to save the model (can be a file or file-like object) export_params=True, # store the trained parameter weights inside the model file opset_version=10, # the ONNX version to export the model to do_constant_folding=True, # whether to execute constant folding for optimization input_names = ['input'], # the model's input names output_names = ['output'], # the model's output names dynamic_axes={'input' : {0 : 'batch_size'}, # variable length axes 'output' : {0 : 'batch_size'}}) netron.start(\\"./super_resolution.onnx\\")"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-18T14:02:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-18T14:02:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"netron\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-18T14:02:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1739887321000,"updatedTime":1739887321000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.39,"words":117},"filePathRelative":"机器学习/3_2pytorch/模型保存/netron.md","localizedDate":"2025年2月18日","excerpt":"<h1> netron</h1>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> torchvision<span class=\\"token punctuation\\">.</span>models\\n<span class=\\"token keyword\\">import</span> torch<span class=\\"token punctuation\\">.</span>onnx\\n<span class=\\"token keyword\\">import</span> netron\\n\\nmodel <span class=\\"token operator\\">=</span> torchvision<span class=\\"token punctuation\\">.</span>models<span class=\\"token punctuation\\">.</span>__dict__<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"resnet101\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">(</span>pretrained<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 获得预训练的resnet101</span>\\nx <span class=\\"token operator\\">=</span> torch<span class=\\"token punctuation\\">.</span>randn<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">64</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">224</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">224</span><span class=\\"token punctuation\\">,</span> requires_grad<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">## Export the model</span>\\ntorch<span class=\\"token punctuation\\">.</span>onnx<span class=\\"token punctuation\\">.</span>export<span class=\\"token punctuation\\">(</span>model<span class=\\"token punctuation\\">,</span>               <span class=\\"token comment\\"># model being run</span>\\n                  x<span class=\\"token punctuation\\">,</span>                         <span class=\\"token comment\\"># model input (or a tuple for multiple inputs)</span>\\n                  <span class=\\"token string\\">\\"super_resolution.onnx\\"</span><span class=\\"token punctuation\\">,</span>   <span class=\\"token comment\\"># where to save the model (can be a file or file-like object)</span>\\n                  export_params<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">,</span>        <span class=\\"token comment\\"># store the trained parameter weights inside the model file</span>\\n                  opset_version<span class=\\"token operator\\">=</span><span class=\\"token number\\">10</span><span class=\\"token punctuation\\">,</span>          <span class=\\"token comment\\"># the ONNX version to export the model to</span>\\n                  do_constant_folding<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">,</span>  <span class=\\"token comment\\"># whether to execute constant folding for optimization</span>\\n                  input_names <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'input'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>   <span class=\\"token comment\\"># the model's input names</span>\\n                  output_names <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'output'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\"># the model's output names</span>\\n                  dynamic_axes<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">{</span><span class=\\"token string\\">'input'</span> <span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">{</span><span class=\\"token number\\">0</span> <span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'batch_size'</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>    <span class=\\"token comment\\"># variable length axes</span>\\n                                <span class=\\"token string\\">'output'</span> <span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">{</span><span class=\\"token number\\">0</span> <span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'batch_size'</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n\\nnetron<span class=\\"token punctuation\\">.</span>start<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"./super_resolution.onnx\\"</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
