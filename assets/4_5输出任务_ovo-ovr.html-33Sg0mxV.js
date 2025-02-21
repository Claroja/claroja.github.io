import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o,c as i,e as l}from"./app-jdLxCr9I.js";const a={},r=l('<h1 id="输出任务-ovo-ovr" tabindex="-1"><a class="header-anchor" href="#输出任务-ovo-ovr" aria-hidden="true">#</a> 输出任务_ovo-ovr</h1><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><ol><li>对于一些二分类器, 如逻辑回归, 要想处理多分类问题, 可以使用one-vs-one或one-vs-rest策略。</li><li>多分类的评估指标也要根据one-vs-one或one-vs-rest来计算。</li></ol><h2 id="ovo-one-vs-one" tabindex="-1"><a class="header-anchor" href="#ovo-one-vs-one" aria-hidden="true">#</a> ovo(one-vs-one)</h2><p>有个四分类问题: 电影分为喜剧、犯罪、爱情、科幻. one-vs-one的策略是：</p><ol><li>喜剧、犯罪、爱情、科幻，两两组合，组成6个分类器： <ol><li>（喜剧，犯罪）</li><li>（喜剧，爱情）</li><li>（喜剧，科幻）</li><li>（犯罪，爱情）</li><li>（犯罪，科幻）</li><li>（爱情，科幻）</li></ol></li><li>第一个分类器中, 喜剧的概率更大，所以这个分类器的结果显示的为喜剧. 其他5个分类器也同样处理.</li><li>假设总共的6个分类器的结果分别：喜剧、喜剧、喜剧、爱情、科幻、爱情；</li><li>因为6个分类器，把这部剧归为喜剧的比较多，所以这个剧最终的预测结果就是喜剧片。</li></ol><h2 id="ovr-one-vs-rest" tabindex="-1"><a class="header-anchor" href="#ovr-one-vs-rest" aria-hidden="true">#</a> ovr(one-vs-rest)</h2><ol><li><p>建立4个分类器</p><ol><li>（喜剧，非喜剧）</li><li>（犯罪，非犯罪）</li><li>（爱情，非爱情）</li><li>（科幻，非科幻）</li></ol></li><li><p>第一个分类器显示，这部剧是喜剧的概率为80%，非喜剧的概率为20％</p></li><li><p>假设总共的4个分类器的结果分别：喜剧80%、犯罪50%、爱情70%、科幻60%；</p></li><li><p>第一个分类器中的喜剧的概率，相比于其它的分类器中的分类的概率，是最大的；以这个剧最终的预测结果就是喜剧片。</p></li></ol><h2 id="比较" tabindex="-1"><a class="header-anchor" href="#比较" aria-hidden="true">#</a> 比较</h2><p>有n个类别；one-vs-one策略中，建立k=n*(n-1)/2个二项分类器；one-vs-rest策略中，建立n个二项分类器。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://zhuanlan.zhihu.com/p/443358598</li></ol>',12),n=[r];function s(h,t){return o(),i("div",null,n)}const c=e(a,[["render",s],["__file","4_5输出任务_ovo-ovr.html.vue"]]);export{c as default};
