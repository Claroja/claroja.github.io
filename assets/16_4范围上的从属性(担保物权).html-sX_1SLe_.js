import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as s,a as r}from"./app-9tftCahk.js";const n={},o=r(`<h1 id="范围上的从属性" tabindex="-1"><a class="header-anchor" href="#范围上的从属性" aria-hidden="true">#</a> 范围上的从属性</h1><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><ol><li>担保物权担保的范围以主债权的范围为限(小于等于主债权)🚪民法_389</li><li>排除担保合同范围上从属性的条款无效🚪担保解释_3_1</li><li>担保人承担的责任超出债务人应当承担的责任范围</li></ol><h2 id="担保物权担保的范围以主债权的范围为限-小于等于主债权" tabindex="-1"><a class="header-anchor" href="#担保物权担保的范围以主债权的范围为限-小于等于主债权" aria-hidden="true">#</a> 担保物权担保的范围以主债权的范围为限(小于等于主债权)</h2><p>🍐乙向甲借款100万元，约定：<code>借期1年；乙不支付借期利息；若乙到期未还款，迟延还款一日支付400元的迟延利息。</code>丙与甲订立抵押合同约定：<code>丙以其A车抵押担保乙对甲100万元借款债务；若乙到期未还款，丙应当立即履行与甲协议将A车折价归甲所有以抵偿乙对甲借款债务的抵押合同义务，丙迟延履行该义务一日，支付400元的违约金。</code>后，乙到期无力还款，丙也一直未履行与甲协议将A车折价归甲所有的抵押合同义务。1年后，甲申请法院拍卖A车，并主张对A车变卖得款优先受偿的数额为104.8万元(乙对甲100万元借款本金+乙对甲2.4万元迟延利息+丙到期不对甲履行抵押合同义务的2.4万元违约金)。</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">flowchart</span> LR
    甲 <span class="token arrow operator">--</span> 债权100+债务违约金2.4 <span class="token arrow operator">--&gt;</span> 乙
    甲 <span class="token arrow operator">--</span> 担保车子+带包违约金2.4 <span class="token arrow operator">--&gt;</span> 丙
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>乙对甲的主债务仅为102.4万元(100万元本金+2.4万元迟延利息)，基于担保物权内容与范围上的从属性，丙抵押的A车亦仅在此范围承担抵押担保责任。</li><li>丙、甲为丙专门约定不履行到期的抵押担保责任的违约责任(丙到期不对甲履行将A车折价归甲所有的义务的2.4万元违约金)，不生效力，甲对A车行使抵押权时，不得主张。</li><li>注意：不是说不能基于抵押合同产生违约责任。比如，若丙、甲A车抵押合同成立生效后，丙一直不履行为甲办理抵押登记的抵押合同义务，则甲有权依照生效的抵押合同请求丙承担违约责任。</li></ol><p>🍐B与A签订借款合同(主合同)，双方约定：<code>B向A借款850万元，借款期限为1年，如到期不还款，需承担日万分之五的违约金。</code>当日，C与A签订抵押合同，约定：<code>C将自己的房屋为B的借款作抵押担保，如C未依约履行担保责任，需从逾期之日起</code>另行支付逾期违约金<code>。</code></p><ol><li>抵押人C不仅需要<code>支付债务人B因违约而支付的违约金</code>，还要<code>支付自己违约所要支付的违约金</code>，其结果是，如果说债务人B违约只需要承担日万分之五的违约金，而抵押人C则可能要承担日万分之十的违约金。</li></ol><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">flowchart</span> LR
    A <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">债权:850+债权违约金</span> <span class="token arrow operator">--&gt;</span></span> B
    A <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">抵押权:房子+担保违约金</span> <span class="token arrow operator">--&gt;</span></span> C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🍐B向A借款100万元，借期1年，未约定利息。1月5日，C向A单方以书面形式出具保证函，上书<code>愿意与B承担连带保证责任，担保范围包括本金100万元及利息</code>。后B无力还款，债权人A起诉连带责任保证人C承担了100万元的本金及10万元利息。</p><ol><li>B和A之间的借款系自然人之间的借款合同，<code>没有约定利息，视为无利息</code>。</li><li>C承担110万元的责任，仅能向B追偿100万元，超出的10万元有权基于不当得利请求A返还。据此，担保人的责任范围<code>绝对不能超过主债务</code>人。</li></ol><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">flowchart</span> LR
    A <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">债权:100</span> <span class="token arrow operator">--&gt;</span></span> B
    A <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">担保:债权+担保:利息</span> <span class="token arrow operator">--&gt;</span></span> C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="排除担保合同范围上从属性的条款无效🚪担保解释-3-1" tabindex="-1"><a class="header-anchor" href="#排除担保合同范围上从属性的条款无效🚪担保解释-3-1" aria-hidden="true">#</a> 排除担保合同范围上从属性的条款无效🚪担保解释_3_1</h2><p>当事人对担保责任的承担约定专门的违约责任，或者约定的担保责任范围超出债务人应当承担的责任范围，担保人主张仅在债务人应当承担的责任范围内承担责任的，人民法院应予支持🚪担保解释_3_1</p><p>🍐甲向乙借款100万元，约定：<code>借期1年，自2020年4月2日至2021年4月1日；甲不支付借期利息；若甲到期未还款，迟延还款一日支付400元的迟延利息。</code>丙与乙订立抵押合同约定：<code>丙以其A车抵押担保甲对乙100万元借款债务；若甲到期未还款，丙应当立即履行‘与乙协议将A车折价归乙所有以优先抵偿甲对乙借款债务’的抵押合同义务，丙迟延履行该义务一日，支付400元的违约金。</code>后，甲到期无力还款，丙也一直未履行与乙协议将A车折价归乙所有的抵押合同义务。2021年6月2日，乙申请法院拍卖A车，并主张对A车变卖得款优先受偿的数额为104.8万元(甲对乙100万元借款本金+甲对乙2.4万元迟延利息+丙到期不对乙履行到期抵押合同义务的2.4万元违约金)。①甲对乙的主债务仅为102.4万元(100万元本金+2.4万元迟延利息)，基于担保物权内容与范围上的从属性，丙抵押的A车亦仅在此范围承担抵押担保责任。②丙、乙为丙专门约定不履行到期的抵押担保责任的违约责任(丙到期不对乙履行将A车折价归乙所有的义务的2.4万元违约金)，不生效力，乙对A车行使抵押权时，不得主张。</p><h2 id="担保人承担的责任超出债务人应当承担的责任范围" tabindex="-1"><a class="header-anchor" href="#担保人承担的责任超出债务人应当承担的责任范围" aria-hidden="true">#</a> 担保人承担的责任超出债务人应当承担的责任范围</h2><p>担保人承担的责任超出债务人应当承担的责任范围担保人向债务人追偿，债务人主张仅在其应当承担的责任范围内承担责任的，人民法院应予支持；担保人请求债权人返还超出部分的，人民法院依法予以支持🚪担保解释_3_2。</p><p>🍐甲基于买卖合同对乙负担100万元价款债务，丙提供担保。甲未支付到期的100万元价款，乙请求甲履行，因为依照🚪民法_525的规定，甲享有同时履行抗辩权，甲对乙主张同时履行抗辩权，拒绝履行相应的40万元价款义务。乙于是请求丙承担100万元的担保责任。①因甲对乙主张同时履行抗辩权，甲对乙的主债务暂时由100万元缩减为60万元，基于担保责任内容与范围上的从属性，丙对乙的担保责任相应地由100万元缩减为60万元。②乙请求丙承担100万元担保责任时，根据🚪民法_701的规定，丙应当援用甲已经对乙主张的同时履行抗辩权，仅对乙承担60万元的担保责任。③若丙未援用，对乙承担100万元的责任，那么，丙超出60万元主债务多对乙承担的40万元责任就不属于担保责任，丙只有权对甲追偿60万元。另外40万元，属于非债清偿，成立不当得利，丙有权请求乙返还不当得利。</p>`,19),l=[o];function d(i,c){return e(),s("div",null,l)}const h=a(n,[["render",d],["__file","16_4范围上的从属性(担保物权).html.vue"]]);export{h as default};
