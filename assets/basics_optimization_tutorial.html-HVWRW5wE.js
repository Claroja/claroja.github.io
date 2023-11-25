const n=JSON.parse('{"key":"v-5ddc76b5","path":"/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/pytorch/%E5%AE%98%E7%BD%91%E7%BF%BB%E8%AF%91/basics_optimization_tutorial.html","title":"optimization_tutorial","lang":"zh-CN","frontmatter":{"description":"optimization_tutorial 获得数据和创建网络 import torch from torch import nn from torch.utils.data import DataLoader from torchvision import datasets from torchvision.transforms import ToTensor, Lambda training_data = datasets.FashionMNIST( root=\\"data\\", train=True, download=True, transform=ToTensor() ) test_data = datasets.FashionMNIST( root=\\"data\\", train=False, download=True, transform=ToTensor() ) train_dataloader = DataLoader(training_data, batch_size=64) test_dataloader = DataLoader(test_data, batch_size=64) class NeuralNetwork(nn.Module): def __init__(self): super(NeuralNetwork, self).__init__() self.flatten = nn.Flatten() self.linear_relu_stack = nn.Sequential( nn.Linear(28*28, 512), nn.ReLU(), nn.Linear(512, 512), nn.ReLU(), nn.Linear(512, 10), ) def forward(self, x): x = self.flatten(x) logits = self.linear_relu_stack(x) return logits model = NeuralNetwork()","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/pytorch/%E5%AE%98%E7%BD%91%E7%BF%BB%E8%AF%91/basics_optimization_tutorial.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"optimization_tutorial"}],["meta",{"property":"og:description","content":"optimization_tutorial 获得数据和创建网络 import torch from torch import nn from torch.utils.data import DataLoader from torchvision import datasets from torchvision.transforms import ToTensor, Lambda training_data = datasets.FashionMNIST( root=\\"data\\", train=True, download=True, transform=ToTensor() ) test_data = datasets.FashionMNIST( root=\\"data\\", train=False, download=True, transform=ToTensor() ) train_dataloader = DataLoader(training_data, batch_size=64) test_dataloader = DataLoader(test_data, batch_size=64) class NeuralNetwork(nn.Module): def __init__(self): super(NeuralNetwork, self).__init__() self.flatten = nn.Flatten() self.linear_relu_stack = nn.Sequential( nn.Linear(28*28, 512), nn.ReLU(), nn.Linear(512, 512), nn.ReLU(), nn.Linear(512, 10), ) def forward(self, x): x = self.flatten(x) logits = self.linear_relu_stack(x) return logits model = NeuralNetwork()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"optimization_tutorial\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"获得数据和创建网络","slug":"获得数据和创建网络","link":"#获得数据和创建网络","children":[]},{"level":2,"title":"Hyperparameters","slug":"hyperparameters","link":"#hyperparameters","children":[]},{"level":2,"title":"Optimization Loop","slug":"optimization-loop","link":"#optimization-loop","children":[]},{"level":2,"title":"Loss Function","slug":"loss-function","link":"#loss-function","children":[]},{"level":2,"title":"Optimizer","slug":"optimizer","link":"#optimizer","children":[]},{"level":2,"title":"完整的实现","slug":"完整的实现","link":"#完整的实现","children":[]}],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.74,"words":521},"filePathRelative":"机器学习/pytorch/官网翻译/basics_optimization_tutorial.md","localizedDate":"2023年11月25日","excerpt":"<h1> optimization_tutorial</h1>\\n<h2> 获得数据和创建网络</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> torch\\n<span class=\\"token keyword\\">from</span> torch <span class=\\"token keyword\\">import</span> nn\\n<span class=\\"token keyword\\">from</span> torch<span class=\\"token punctuation\\">.</span>utils<span class=\\"token punctuation\\">.</span>data <span class=\\"token keyword\\">import</span> DataLoader\\n<span class=\\"token keyword\\">from</span> torchvision <span class=\\"token keyword\\">import</span> datasets\\n<span class=\\"token keyword\\">from</span> torchvision<span class=\\"token punctuation\\">.</span>transforms <span class=\\"token keyword\\">import</span> ToTensor<span class=\\"token punctuation\\">,</span> Lambda\\n\\ntraining_data <span class=\\"token operator\\">=</span> datasets<span class=\\"token punctuation\\">.</span>FashionMNIST<span class=\\"token punctuation\\">(</span>\\n    root<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"data\\"</span><span class=\\"token punctuation\\">,</span>\\n    train<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">,</span>\\n    download<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">,</span>\\n    transform<span class=\\"token operator\\">=</span>ToTensor<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">)</span>\\n\\ntest_data <span class=\\"token operator\\">=</span> datasets<span class=\\"token punctuation\\">.</span>FashionMNIST<span class=\\"token punctuation\\">(</span>\\n    root<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"data\\"</span><span class=\\"token punctuation\\">,</span>\\n    train<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">False</span><span class=\\"token punctuation\\">,</span>\\n    download<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">,</span>\\n    transform<span class=\\"token operator\\">=</span>ToTensor<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">)</span>\\n\\ntrain_dataloader <span class=\\"token operator\\">=</span> DataLoader<span class=\\"token punctuation\\">(</span>training_data<span class=\\"token punctuation\\">,</span> batch_size<span class=\\"token operator\\">=</span><span class=\\"token number\\">64</span><span class=\\"token punctuation\\">)</span>\\ntest_dataloader <span class=\\"token operator\\">=</span> DataLoader<span class=\\"token punctuation\\">(</span>test_data<span class=\\"token punctuation\\">,</span> batch_size<span class=\\"token operator\\">=</span><span class=\\"token number\\">64</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">NeuralNetwork</span><span class=\\"token punctuation\\">(</span>nn<span class=\\"token punctuation\\">.</span>Module<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">__init__</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token builtin\\">super</span><span class=\\"token punctuation\\">(</span>NeuralNetwork<span class=\\"token punctuation\\">,</span> self<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>__init__<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n        self<span class=\\"token punctuation\\">.</span>flatten <span class=\\"token operator\\">=</span> nn<span class=\\"token punctuation\\">.</span>Flatten<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n        self<span class=\\"token punctuation\\">.</span>linear_relu_stack <span class=\\"token operator\\">=</span> nn<span class=\\"token punctuation\\">.</span>Sequential<span class=\\"token punctuation\\">(</span>\\n            nn<span class=\\"token punctuation\\">.</span>Linear<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">28</span><span class=\\"token operator\\">*</span><span class=\\"token number\\">28</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">512</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n            nn<span class=\\"token punctuation\\">.</span>ReLU<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n            nn<span class=\\"token punctuation\\">.</span>Linear<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">512</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">512</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n            nn<span class=\\"token punctuation\\">.</span>ReLU<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n            nn<span class=\\"token punctuation\\">.</span>Linear<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">512</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token punctuation\\">)</span>\\n\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">forward</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">,</span> x<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        x <span class=\\"token operator\\">=</span> self<span class=\\"token punctuation\\">.</span>flatten<span class=\\"token punctuation\\">(</span>x<span class=\\"token punctuation\\">)</span>\\n        logits <span class=\\"token operator\\">=</span> self<span class=\\"token punctuation\\">.</span>linear_relu_stack<span class=\\"token punctuation\\">(</span>x<span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">return</span> logits\\n\\nmodel <span class=\\"token operator\\">=</span> NeuralNetwork<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
