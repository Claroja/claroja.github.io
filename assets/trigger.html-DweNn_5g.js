import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,e as a}from"./app-YE2Hltoy.js";const t={},r=a(`<h1 id="trigger" tabindex="-1"><a class="header-anchor" href="#trigger" aria-hidden="true">#</a> trigger</h1><h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> syntax</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> trigger_name trigger_time trigger_event 
<span class="token keyword">ON</span> table_name 
<span class="token keyword">FOR EACH ROW</span> 
trigger_body
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>para</th><th>dec</th></tr></thead><tbody><tr><td>trigger_name</td><td>name of trigger</td></tr><tr><td>tirgger_time</td><td>BEFOR or AFTER, trigger after event or before event</td></tr><tr><td>trigger_event</td><td>INSERT,DELETE or UPDATE</td></tr><tr><td>table_name</td><td>在哪张表上建立触发器</td></tr><tr><td>trigger_body</td><td>触发器的程序体，可以是一条SQL语句或者是用BEGIN和END包含的多条语句</td></tr></tbody></table><ol><li>INSERT: 通过INSERT、LOAD DATA、REPLACE 语句触发(LOAD DATA语句是将文件的内容插入到表中，相当于是insert语句;replace语句在一般的情况下和insert差不多, 有时候相当于执行了一条delete和insert语句)</li><li>UPDATE: 可能通过UPDATE语句触发</li><li>DELETE: 可能通过DELETE、REPLACE语句触发。</li></ol><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> example</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">delimiter</span> $$
<span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> upd_check BEFORE <span class="token keyword">UPDATE</span> <span class="token keyword">ON</span> account
    <span class="token keyword">FOR EACH ROW</span>
    <span class="token keyword">BEGIN</span>
        <span class="token keyword">IF</span> NEW<span class="token punctuation">.</span>amount <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token keyword">THEN</span>
            <span class="token keyword">SET</span> NEW<span class="token punctuation">.</span>amount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">ELSEIF</span> NEW<span class="token punctuation">.</span>amount <span class="token operator">&gt;</span> <span class="token number">100</span> <span class="token keyword">THEN</span>
            <span class="token keyword">SET</span> NEW<span class="token punctuation">.</span>amount <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
    <span class="token keyword">END</span>$$
<span class="token keyword">delimiter</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tips：一般情况下，mysql默认是以 ; 作为结束执行语句，与触发器中需要的分行起冲突 　　 为解决此问题可用DELIMITER，如：DELIMITER ||，可以将结束符号变成|| 　　 当触发器创建完成后，可以用DELIMITER ;来将结束符号变成;</p><p>refs: https://blog.csdn.net/little__SuperMan/article/details/123519033</p>`,9),d=[r];function l(i,o){return s(),e("div",null,d)}const k=n(t,[["render",l],["__file","trigger.html.vue"]]);export{k as default};
