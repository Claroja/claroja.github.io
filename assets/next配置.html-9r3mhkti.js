import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-9tftCahk.js";const t={},l=e(`<h1 id="next配置" tabindex="-1"><a class="header-anchor" href="#next配置" aria-hidden="true">#</a> next配置</h1><p>next的配置文件在:</p><ol><li><code>themes/next/_config.yml</code>(git方式安装)</li><li><code>node_modules/hexo-theme-next/_config.yml</code>(npm方式安装)</li><li><code>_config.next.yml</code>(将1,2两种方式文件移动到根目录, 作为自定义配置)</li></ol><p>在hexo中开启next, 进入hexo的<code>_config.yml</code>:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">theme</span><span class="token punctuation">:</span> next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>开启自定义页面</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">custom_file_path</span><span class="token punctuation">:</span>
<span class="token comment">#head: source/_data/head.njk</span>
<span class="token comment">#header: source/_data/header.njk</span>
<span class="token comment">#sidebar: source/_data/sidebar.njk</span>
<span class="token comment">#postMeta: source/_data/post-meta.njk</span>
<span class="token comment">#postBodyEnd: source/_data/post-body-end.njk</span>
<span class="token comment">#footer: source/_data/footer.njk</span>
<span class="token comment">#bodyEnd: source/_data/body-end.njk</span>
<span class="token comment">#variable: source/_data/variables.styl</span>
<span class="token comment">#mixin: source/_data/mixins.styl</span>
<span class="token key atrule">style</span><span class="token punctuation">:</span> source/_data/styles.styl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>配置主题</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">## Schemes</span>
<span class="token comment">## scheme: Muse</span>
<span class="token comment">## scheme: Mist</span>
<span class="token key atrule">scheme</span><span class="token punctuation">:</span> Pisces
<span class="token comment">## scheme: Gemini</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>黑夜模式</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">## Dark Mode</span>
<span class="token key atrule">darkmode</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">## ===============================================================</span>
<span class="token comment">## It&#39;s recommended to use Alternate Theme Config to configure NexT</span>
<span class="token comment">## Modifying this file may result in merge conflict</span>
<span class="token comment">## See: https://theme-next.js.org/docs/getting-started/configuration</span>
<span class="token comment">## ===============================================================</span>

<span class="token comment">## ---------------------------------------------------------------</span>
<span class="token comment">## Theme Core Configuration Settings</span>
<span class="token comment">## See: https://theme-next.js.org/docs/theme-settings/</span>
<span class="token comment">## ---------------------------------------------------------------</span>

<span class="token comment">## Allow to cache content generation.</span>
<span class="token key atrule">cache</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment">## Remove unnecessary files after hexo generate.</span>
<span class="token key atrule">minify</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token comment">## Define custom file paths.</span>
<span class="token comment">## Create your custom files in site directory \`source/_data\` and uncomment needed files below.</span>
<span class="token key atrule">custom_file_path</span><span class="token punctuation">:</span>
  <span class="token comment">#head: source/_data/head.njk</span>
  <span class="token comment">#header: source/_data/header.njk</span>
  <span class="token comment">#sidebar: source/_data/sidebar.njk</span>
  <span class="token comment">#postMeta: source/_data/post-meta.njk</span>
  <span class="token comment">#postBodyEnd: source/_data/post-body-end.njk</span>
  <span class="token comment">#footer: source/_data/footer.njk</span>
  <span class="token comment">#bodyEnd: source/_data/body-end.njk</span>
  <span class="token comment">#variable: source/_data/variables.styl</span>
  <span class="token comment">#mixin: source/_data/mixins.styl</span>
  <span class="token key atrule">style</span><span class="token punctuation">:</span> source/_data/styles.styl


<span class="token comment">## ---------------------------------------------------------------</span>
<span class="token comment">## Scheme Settings</span>
<span class="token comment">## ---------------------------------------------------------------</span>

<span class="token comment">## Schemes</span>
<span class="token comment">## scheme: Muse</span>
<span class="token comment">## scheme: Mist</span>
<span class="token key atrule">scheme</span><span class="token punctuation">:</span> Pisces
<span class="token comment">## scheme: Gemini</span>

<span class="token comment">## Dark Mode</span>
<span class="token key atrule">darkmode</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>


<span class="token comment">## ---------------------------------------------------------------</span>
<span class="token comment">## Site Information Settings</span>
<span class="token comment">## ---------------------------------------------------------------</span>

<span class="token key atrule">favicon</span><span class="token punctuation">:</span>
  <span class="token key atrule">small</span><span class="token punctuation">:</span> /images/favicon<span class="token punctuation">-</span>16x16<span class="token punctuation">-</span>next.png
  <span class="token key atrule">medium</span><span class="token punctuation">:</span> /images/favicon<span class="token punctuation">-</span>32x32<span class="token punctuation">-</span>next.png
  <span class="token key atrule">apple_touch_icon</span><span class="token punctuation">:</span> /images/apple<span class="token punctuation">-</span>touch<span class="token punctuation">-</span>icon<span class="token punctuation">-</span>next.png
  <span class="token key atrule">safari_pinned_tab</span><span class="token punctuation">:</span> /images/logo.svg
  <span class="token comment">#android_manifest: /manifest.json</span>

<span class="token comment">## Custom Logo (Warning: Do not support scheme Mist)</span>
<span class="token key atrule">custom_logo</span><span class="token punctuation">:</span> <span class="token comment">#/uploads/custom-logo.jpg</span>

<span class="token comment">## Creative Commons 4.0 International License.</span>
<span class="token comment">## See: https://creativecommons.org/about/cclicenses/</span>
<span class="token key atrule">creative_commons</span><span class="token punctuation">:</span>
  <span class="token comment"># Available values: by | by-nc | by-nc-nd | by-nc-sa | by-nd | by-sa | cc-zero</span>
  <span class="token key atrule">license</span><span class="token punctuation">:</span> by<span class="token punctuation">-</span>nc<span class="token punctuation">-</span>sa
  <span class="token comment"># Available values: big | small</span>
  <span class="token key atrule">size</span><span class="token punctuation">:</span> small
  <span class="token key atrule">sidebar</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">post</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># You can set a language value if you prefer a translated version of CC license, e.g. deed.zh</span>
  <span class="token comment"># CC licenses are available in 39 languages, you can find the specific and correct abbreviation you need on https://creativecommons.org</span>
  <span class="token key atrule">language</span><span class="token punctuation">:</span>

<span class="token comment">## Open graph settings</span>
<span class="token comment">## See: https://hexo.io/docs/helpers#open-graph</span>
<span class="token key atrule">open_graph</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment"># Add pairs each line to customize </span>
  <span class="token key atrule">options</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>


<span class="token comment">## ---------------------------------------------------------------</span>
<span class="token comment">## Menu Settings</span>
<span class="token comment">## ---------------------------------------------------------------</span>

<span class="token comment">## Usage: \`Key: /link/ || icon\`</span>
<span class="token comment">## Key is the name of menu item. If the translation for this item is available, the translated text will be loaded, otherwise the Key name will be used. Key is case-sensitive.</span>
<span class="token comment">## Value before \`||\` delimiter is the target link, value after \`||\` delimiter is the name of Font Awesome icon.</span>
<span class="token comment">## External url should start with http:// or https://</span>
<span class="token key atrule">menu</span><span class="token punctuation">:</span>
  <span class="token comment">#home: / || fa fa-home</span>
  <span class="token comment">#about: /about/ || fa fa-user</span>
  <span class="token comment">#tags: /tags/ || fa fa-tags</span>
  <span class="token comment">#categories: /categories/ || fa fa-th</span>
  <span class="token comment">#archives: /archives/ || fa fa-archive</span>
  <span class="token comment">#schedule: /schedule/ || fa fa-calendar</span>
  <span class="token comment">#sitemap: /sitemap.xml || fa fa-sitemap</span>
  <span class="token comment">#commonweal: /404/ || fa fa-heartbeat</span>

<span class="token comment">## Enable / Disable menu icons / item badges.</span>
<span class="token key atrule">menu_settings</span><span class="token punctuation">:</span>
  <span class="token key atrule">icons</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">badges</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>


<span class="token comment">## ---------------------------------------------------------------</span>
<span class="token comment">## Sidebar Settings</span>
<span class="token comment">## See: https://theme-next.js.org/docs/theme-settings/sidebar</span>
<span class="token comment">## ---------------------------------------------------------------</span>

<span class="token key atrule">sidebar</span><span class="token punctuation">:</span>
  <span class="token comment"># Sidebar Position.</span>
  <span class="token key atrule">position</span><span class="token punctuation">:</span> left
  <span class="token comment">#position: right</span>

  <span class="token comment"># Manual define the sidebar width. If commented, will be default for:</span>
  <span class="token comment"># Muse | Mist: 320</span>
  <span class="token comment"># Pisces | Gemini: 240</span>
  <span class="token comment">#width: 300</span>

  <span class="token comment"># Sidebar Display (only for Muse | Mist), available values:</span>
  <span class="token comment">#  - post    expand on posts automatically. Default.</span>
  <span class="token comment">#  - always  expand for all pages automatically.</span>
  <span class="token comment">#  - hide    expand only when click on the sidebar toggle icon.</span>
  <span class="token comment">#  - remove  totally remove sidebar including sidebar toggle.</span>
  <span class="token key atrule">display</span><span class="token punctuation">:</span> post

  <span class="token comment"># Sidebar padding in pixels.</span>
  <span class="token key atrule">padding</span><span class="token punctuation">:</span> <span class="token number">18</span>
  <span class="token comment"># Sidebar offset from top menubar in pixels (only for Pisces | Gemini).</span>
  <span class="token key atrule">offset</span><span class="token punctuation">:</span> <span class="token number">12</span>

<span class="token comment">## Sidebar Avatar</span>
<span class="token key atrule">avatar</span><span class="token punctuation">:</span>
  <span class="token comment"># Replace the default image and set the url here.</span>
  <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token comment">#/images/avatar.gif</span>
  <span class="token comment"># If true, the avatar will be displayed in circle.</span>
  <span class="token key atrule">rounded</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># If true, the avatar will be rotated with the cursor.</span>
  <span class="token key atrule">rotated</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token comment">## Posts / Categories / Tags in sidebar.</span>
<span class="token key atrule">site_state</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment">## Social Links</span>
<span class="token comment">## Usage: \`Key: permalink || icon\`</span>
<span class="token comment">## Key is the link label showing to end users.</span>
<span class="token comment">## Value before \`||\` delimiter is the target permalink, value after \`||\` delimiter is the name of Font Awesome icon.</span>
<span class="token key atrule">social</span><span class="token punctuation">:</span>
  <span class="token key atrule">GitHub</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com/yourname <span class="token punctuation">|</span><span class="token punctuation">|</span> fab fa<span class="token punctuation">-</span>github
  <span class="token comment">#E-Mail: mailto:yourname@gmail.com || fa fa-envelope</span>
  <span class="token comment">#Weibo: https://weibo.com/yourname || fab fa-weibo</span>
  <span class="token comment">#Google: https://plus.google.com/yourname || fab fa-google</span>
  <span class="token comment">#Twitter: https://twitter.com/yourname || fab fa-twitter</span>
  <span class="token comment">#FB Page: https://www.facebook.com/yourname || fab fa-facebook</span>
  <span class="token comment">#StackOverflow: https://stackoverflow.com/yourname || fab fa-stack-overflow</span>
  <span class="token comment">#YouTube: https://youtube.com/yourname || fab fa-youtube</span>
  <span class="token comment">#Instagram: https://instagram.com/yourname || fab fa-instagram</span>
  <span class="token comment">#Skype: skype:yourname?call|chat || fab fa-skype</span>

<span class="token key atrule">social_icons</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">icons_only</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">transition</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token comment">## Blog rolls</span>
<span class="token key atrule">links_settings</span><span class="token punctuation">:</span>
  <span class="token key atrule">icon</span><span class="token punctuation">:</span> fa fa<span class="token punctuation">-</span>globe
  <span class="token key atrule">title</span><span class="token punctuation">:</span> Links
  <span class="token comment"># Available values: block | inline</span>
  <span class="token key atrule">layout</span><span class="token punctuation">:</span> block

<span class="token key atrule">links</span><span class="token punctuation">:</span>
  <span class="token comment">#Title: https://example.com</span>

<span class="token comment">## Table of Contents in the Sidebar</span>
<span class="token comment">## Front-matter variable (nonsupport wrap expand_all).</span>
<span class="token key atrule">toc</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment"># Automatically add list number to toc.</span>
  <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment"># If true, all words will placed on next lines if header width longer then sidebar width.</span>
  <span class="token key atrule">wrap</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># If true, all level of TOC in a post will be displayed, rather than the activated part of it.</span>
  <span class="token key atrule">expand_all</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># Maximum heading depth of generated toc.</span>
  <span class="token key atrule">max_depth</span><span class="token punctuation">:</span> <span class="token number">6</span>


<span class="token comment">## ---------------------------------------------------------------</span>
<span class="token comment">## Footer Settings</span>
<span class="token comment">## See: https://theme-next.js.org/docs/theme-settings/footer</span>
<span class="token comment">## ---------------------------------------------------------------</span>

<span class="token comment">## Show multilingual switcher in footer.</span>
<span class="token key atrule">language_switcher</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token key atrule">footer</span><span class="token punctuation">:</span>
  <span class="token comment"># Specify the year when the site was setup. If not defined, current year will be used.</span>
  <span class="token comment">#since: 2021</span>

  <span class="token comment"># Icon between year and copyright info.</span>
  <span class="token key atrule">icon</span><span class="token punctuation">:</span>
    <span class="token comment"># Icon name in Font Awesome. See: https://fontawesome.com/icons</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> fa fa<span class="token punctuation">-</span>heart
    <span class="token comment"># If you want to animate the icon, set it to true.</span>
    <span class="token key atrule">animated</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token comment"># Change the color of icon, using Hex Code.</span>
    <span class="token key atrule">color</span><span class="token punctuation">:</span> <span class="token string">&quot;#ff0000&quot;</span>

  <span class="token comment"># If not defined, \`author\` from Hexo \`_config.yml\` will be used.</span>
  <span class="token key atrule">copyright</span><span class="token punctuation">:</span>

  <span class="token comment"># Powered by Hexo &amp; NexT</span>
  <span class="token key atrule">powered</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

  <span class="token comment"># Beian ICP and gongan information for Chinese users. See: https://beian.miit.gov.cn, http://www.beian.gov.cn</span>
  <span class="token key atrule">beian</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">icp</span><span class="token punctuation">:</span>
    <span class="token comment"># The digit in the num of gongan beian.</span>
    <span class="token key atrule">gongan_id</span><span class="token punctuation">:</span>
    <span class="token comment"># The full num of gongan beian.</span>
    <span class="token key atrule">gongan_num</span><span class="token punctuation">:</span>
    <span class="token comment"># The icon for gongan beian. See: http://www.beian.gov.cn/portal/download</span>
    <span class="token key atrule">gongan_icon_url</span><span class="token punctuation">:</span>


<span class="token comment">## ---------------------------------------------------------------</span>
<span class="token comment">## Post Settings</span>
<span class="token comment">## See: https://theme-next.js.org/docs/theme-settings/posts</span>
<span class="token comment">## ---------------------------------------------------------------</span>

<span class="token comment">## Automatically excerpt description in homepage as preamble text.</span>
<span class="token key atrule">excerpt_description</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment">## Read more button</span>
<span class="token comment">## If true, the read more button will be displayed in excerpt section.</span>
<span class="token key atrule">read_more_btn</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment">## Post meta display settings</span>
<span class="token key atrule">post_meta</span><span class="token punctuation">:</span>
  <span class="token key atrule">item_text</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">created_at</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">updated_at</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">another_day</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">categories</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token comment">## Post wordcount display settings</span>
<span class="token comment">## Dependencies: https://github.com/next-theme/hexo-word-counter</span>
<span class="token key atrule">symbols_count_time</span><span class="token punctuation">:</span>
  <span class="token key atrule">separated_meta</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">item_text_total</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token comment">## Use icon instead of the symbol # to indicate the tag at the bottom of the post</span>
<span class="token key atrule">tag_icon</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token comment">## Donate (Sponsor) settings</span>
<span class="token comment">## Front-matter variable (nonsupport animation).</span>
<span class="token key atrule">reward_settings</span><span class="token punctuation">:</span>
  <span class="token comment"># If true, a donate button will be displayed in every article by default.</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">animation</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment">#comment: Buy me a coffee</span>

<span class="token key atrule">reward</span><span class="token punctuation">:</span>
  <span class="token comment">#wechatpay: /images/wechatpay.png</span>
  <span class="token comment">#alipay: /images/alipay.png</span>
  <span class="token comment">#paypal: /images/paypal.png</span>
  <span class="token comment">#bitcoin: /images/bitcoin.png</span>

<span class="token comment">## Subscribe through Telegram Channel, Twitter, etc.</span>
<span class="token comment">## Usage: \`Key: permalink || icon\` (Font Awesome)</span>
<span class="token key atrule">follow_me</span><span class="token punctuation">:</span>
  <span class="token comment">#Twitter: https://twitter.com/username || fab fa-twitter</span>
  <span class="token comment">#Telegram: https://t.me/channel_name || fab fa-telegram</span>
  <span class="token comment">#WeChat: /images/wechat_channel.jpg || fab fa-weixin</span>
  <span class="token comment">#RSS: /atom.xml || fa fa-rss</span>

<span class="token comment">## Related popular posts</span>
<span class="token comment">## Dependencies: https://github.com/sergeyzwezdin/hexo-related-posts</span>
<span class="token key atrule">related_posts</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token comment"># Custom header, leave empty to use the default one</span>
  <span class="token key atrule">display_in_home</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token comment">## Post edit</span>
<span class="token comment">## Easily browse and edit blog source code online.</span>
<span class="token key atrule">post_edit</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">url</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com/user<span class="token punctuation">-</span>name/repo<span class="token punctuation">-</span>name/tree/branch<span class="token punctuation">-</span>name/subdirectory<span class="token punctuation">-</span>name/ <span class="token comment"># Link for view source</span>
  <span class="token comment">#url: https://github.com/user-name/repo-name/edit/branch-name/subdirectory-name/ # Link for fork &amp; edit</span>

<span class="token comment">## Show previous post and next post in post footer if exists</span>
<span class="token comment">## Available values: left | right | false</span>
<span class="token key atrule">post_navigation</span><span class="token punctuation">:</span> left


<span class="token comment">## ---------------------------------------------------------------</span>
<span class="token comment">## Custom Page Settings</span>
<span class="token comment">## See: https://theme-next.js.org/docs/theme-settings/custom-pages</span>
<span class="token comment">## ---------------------------------------------------------------</span>

<span class="token comment">## TagCloud settings for tags page.</span>
<span class="token key atrule">tagcloud</span><span class="token punctuation">:</span>
  <span class="token key atrule">min</span><span class="token punctuation">:</span> <span class="token number">12</span> <span class="token comment"># Minimum font size in px</span>
  <span class="token key atrule">max</span><span class="token punctuation">:</span> <span class="token number">30</span> <span class="token comment"># Maximum font size in px</span>
  <span class="token key atrule">amount</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># Total amount of tags</span>
  <span class="token key atrule">orderby</span><span class="token punctuation">:</span> name <span class="token comment"># Order of tags</span>
  <span class="token key atrule">order</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># Sort order</span>

<span class="token comment">## Google Calendar</span>
<span class="token comment">## Share your recent schedule to others via calendar page.</span>
<span class="token key atrule">calendar</span><span class="token punctuation">:</span>
  <span class="token key atrule">calendar_id</span><span class="token punctuation">:</span> &lt;required<span class="token punctuation">&gt;</span> <span class="token comment"># Your Google account E-Mail</span>
  <span class="token key atrule">api_key</span><span class="token punctuation">:</span> &lt;required<span class="token punctuation">&gt;</span>
  <span class="token key atrule">orderBy</span><span class="token punctuation">:</span> startTime
  <span class="token key atrule">showLocation</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">offsetMax</span><span class="token punctuation">:</span> <span class="token number">72</span> <span class="token comment"># Time Range</span>
  <span class="token key atrule">offsetMin</span><span class="token punctuation">:</span> <span class="token number">4</span> <span class="token comment"># Time Range</span>
  <span class="token key atrule">showDeleted</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">singleEvents</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">maxResults</span><span class="token punctuation">:</span> <span class="token number">250</span>


<span class="token comment">## ---------------------------------------------------------------</span>
<span class="token comment">## Misc Theme Settings</span>
<span class="token comment">## See: https://theme-next.js.org/docs/theme-settings/miscellaneous</span>
<span class="token comment">## ---------------------------------------------------------------</span>

<span class="token comment">## Preconnect CDN for fonts and plugins.</span>
<span class="token comment">## For more information: https://www.w3.org/TR/resource-hints/#preconnect</span>
<span class="token key atrule">preconnect</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token comment">## Set the text alignment in posts / pages.</span>
<span class="token key atrule">text_align</span><span class="token punctuation">:</span>
  <span class="token comment"># Available values: start | end | left | right | center | justify | justify-all | match-parent</span>
  <span class="token key atrule">desktop</span><span class="token punctuation">:</span> justify
  <span class="token key atrule">mobile</span><span class="token punctuation">:</span> justify

<span class="token comment">## Reduce padding / margin indents on devices with narrow width.</span>
<span class="token key atrule">mobile_layout_economy</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token comment">## Browser header panel color.</span>
<span class="token key atrule">theme_color</span><span class="token punctuation">:</span>
  <span class="token key atrule">light</span><span class="token punctuation">:</span> <span class="token string">&quot;#222&quot;</span>
  <span class="token key atrule">dark</span><span class="token punctuation">:</span> <span class="token string">&quot;#222&quot;</span>

<span class="token comment">## Override browsers&#39; default behavior.</span>
<span class="token key atrule">body_scrollbar</span><span class="token punctuation">:</span>
  <span class="token comment"># Place the scrollbar over the content.</span>
  <span class="token key atrule">overlay</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># Present the scrollbar even if the content is not overflowing.</span>
  <span class="token key atrule">stable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token key atrule">codeblock</span><span class="token punctuation">:</span>
  <span class="token comment"># Code Highlight theme</span>
  <span class="token comment"># All available themes: https://theme-next.js.org/highlight/</span>
  <span class="token key atrule">theme</span><span class="token punctuation">:</span>
    <span class="token key atrule">light</span><span class="token punctuation">:</span> default
    <span class="token key atrule">dark</span><span class="token punctuation">:</span> stackoverflow<span class="token punctuation">-</span>dark
  <span class="token key atrule">prism</span><span class="token punctuation">:</span>
    <span class="token key atrule">light</span><span class="token punctuation">:</span> prism<span class="token punctuation">-</span>coy
    <span class="token key atrule">dark</span><span class="token punctuation">:</span> prism<span class="token punctuation">-</span>okaidia
  <span class="token comment"># Add copy button on codeblock</span>
  <span class="token key atrule">copy_button</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token comment"># Available values: default | flat | mac</span>
    <span class="token key atrule">style</span><span class="token punctuation">:</span>

<span class="token key atrule">back2top</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment"># Back to top in sidebar.</span>
  <span class="token key atrule">sidebar</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># Scroll percent label in b2t button.</span>
  <span class="token key atrule">scrollpercent</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment">## Reading progress bar</span>
<span class="token key atrule">reading_progress</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># Available values: left | right</span>
  <span class="token key atrule">start_at</span><span class="token punctuation">:</span> left
  <span class="token comment"># Available values: top | bottom</span>
  <span class="token key atrule">position</span><span class="token punctuation">:</span> top
  <span class="token key atrule">reversed</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">color</span><span class="token punctuation">:</span> <span class="token string">&quot;#37c6c0&quot;</span>
  <span class="token key atrule">height</span><span class="token punctuation">:</span> 3px

<span class="token comment">## Bookmark Support</span>
<span class="token key atrule">bookmark</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># Customize the color of the bookmark.</span>
  <span class="token key atrule">color</span><span class="token punctuation">:</span> <span class="token string">&quot;#222&quot;</span>
  <span class="token comment"># If auto, save the reading progress when closing the page or clicking the bookmark-icon.</span>
  <span class="token comment"># If manual, only save it by clicking the bookmark-icon.</span>
  <span class="token key atrule">save</span><span class="token punctuation">:</span> auto

<span class="token comment">## \`Follow me on GitHub\` banner in the top-right corner.</span>
<span class="token key atrule">github_banner</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">permalink</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com/yourname
  <span class="token key atrule">title</span><span class="token punctuation">:</span> Follow me on GitHub


<span class="token comment">## ---------------------------------------------------------------</span>
<span class="token comment">## Font Settings</span>
<span class="token comment">## ---------------------------------------------------------------</span>
<span class="token comment">## Find fonts on Google Fonts (https://fonts.google.com)</span>
<span class="token comment">## All fonts set here will have the following styles:</span>
<span class="token comment">##   light | light italic | normal | normal italic | bold | bold italic</span>
<span class="token comment">## Be aware that setting too much fonts will cause site running slowly</span>
<span class="token comment">## ---------------------------------------------------------------</span>
<span class="token comment">## Web Safe fonts are recommended for \`global\` (and \`title\`):</span>
<span class="token comment">## Arial | Tahoma | Helvetica | Times New Roman | Courier New | Verdana | Georgia | Palatino | Garamond | Comic Sans MS | Trebuchet MS</span>
<span class="token comment">## ---------------------------------------------------------------</span>

<span class="token key atrule">font</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

  <span class="token comment"># Uri of fonts host, e.g. https://fonts.googleapis.com (Default).</span>
  <span class="token key atrule">host</span><span class="token punctuation">:</span>

  <span class="token comment"># Font options:</span>
  <span class="token comment"># \`external: true\` will load this font family from \`host\` above.</span>
  <span class="token comment"># \`family: Times New Roman\`. Without any quotes.</span>
  <span class="token comment"># \`size: x.x\`. Use \`em\` as unit. Default: 1 (16px)</span>

  <span class="token comment"># Global font settings used for all elements inside &lt;body&gt;.</span>
  <span class="token key atrule">global</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">family</span><span class="token punctuation">:</span> Lato
    <span class="token key atrule">size</span><span class="token punctuation">:</span>

  <span class="token comment"># Font settings for site title (.site-title).</span>
  <span class="token key atrule">title</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">family</span><span class="token punctuation">:</span>
    <span class="token key atrule">size</span><span class="token punctuation">:</span>

  <span class="token comment"># Font settings for headlines (&lt;h1&gt; to &lt;h6&gt;).</span>
  <span class="token key atrule">headings</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">family</span><span class="token punctuation">:</span>
    <span class="token key atrule">size</span><span class="token punctuation">:</span>

  <span class="token comment"># Font settings for posts (.post-body).</span>
  <span class="token key atrule">posts</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">family</span><span class="token punctuation">:</span>

  <span class="token comment"># Font settings for &lt;code&gt; and code blocks.</span>
  <span class="token key atrule">codes</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">family</span><span class="token punctuation">:</span>


<span class="token comment">## ---------------------------------------------------------------</span>
<span class="token comment">## SEO Settings</span>
<span class="token comment">## See: https://theme-next.js.org/docs/theme-settings/seo</span>
<span class="token comment">## ---------------------------------------------------------------</span>

<span class="token comment">## If true, site-subtitle will be added to index page.</span>
<span class="token comment">## Remember to set up your site-subtitle in Hexo \`_config.yml\` (e.g. subtitle: Subtitle)</span>
<span class="token key atrule">index_with_subtitle</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token comment">## Automatically add external URL with Base64 encrypt &amp; decrypt.</span>
<span class="token key atrule">exturl</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token comment">## If true, an icon will be attached to each external URL</span>
<span class="token key atrule">exturl_icon</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment">## Google Webmaster tools verification.</span>
<span class="token comment">## See: https://developers.google.com/search</span>
<span class="token key atrule">google_site_verification</span><span class="token punctuation">:</span>

<span class="token comment">## Bing Webmaster tools verification.</span>
<span class="token comment">## See: https://www.bing.com/webmasters</span>
<span class="token key atrule">bing_site_verification</span><span class="token punctuation">:</span>

<span class="token comment">## Yandex Webmaster tools verification.</span>
<span class="token comment">## See: https://webmaster.yandex.ru</span>
<span class="token key atrule">yandex_site_verification</span><span class="token punctuation">:</span>

<span class="token comment">## Baidu Webmaster tools verification.</span>
<span class="token comment">## See: https://ziyuan.baidu.com/site</span>
<span class="token key atrule">baidu_site_verification</span><span class="token punctuation">:</span>


<span class="token comment">## ---------------------------------------------------------------</span>
<span class="token comment">## Third Party Plugins &amp; Services Settings</span>
<span class="token comment">## See: https://theme-next.js.org/docs/third-party-services/</span>
<span class="token comment">## More plugins: https://github.com/next-theme/awesome-next</span>
<span class="token comment">## You may need to install the corresponding dependency packages</span>
<span class="token comment">## ---------------------------------------------------------------</span>

<span class="token comment">## Math Formulas Render Support</span>
<span class="token comment">## Warning: Please install / uninstall the relevant renderer according to the documentation.</span>
<span class="token comment">## See: https://theme-next.js.org/docs/third-party-services/math-equations</span>
<span class="token comment">## Server-side plugin: https://github.com/next-theme/hexo-filter-mathjax</span>
<span class="token key atrule">math</span><span class="token punctuation">:</span>
  <span class="token comment"># Default (false) will load mathjax / katex script on demand.</span>
  <span class="token comment"># That is it only render those page which has \`mathjax: true\` in front-matter.</span>
  <span class="token comment"># If you set it to true, it will load mathjax / katex script EVERY PAGE.</span>
  <span class="token key atrule">every_page</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

  <span class="token key atrule">mathjax</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token comment"># Available values: none | ams | all</span>
    <span class="token key atrule">tags</span><span class="token punctuation">:</span> none

  <span class="token key atrule">katex</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token comment"># See: https://github.com/KaTeX/KaTeX/tree/master/contrib/copy-tex</span>
    <span class="token key atrule">copy_tex</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token comment">## Easily enable fast Ajax navigation on your website.</span>
<span class="token comment">## For more information: https://github.com/next-theme/pjax</span>
<span class="token key atrule">pjax</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token comment">## FancyBox is a tool that offers a nice and elegant way to add zooming functionality for images.</span>
<span class="token comment">## For more information: https://fancyapps.com/fancybox/</span>
<span class="token key atrule">fancybox</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token comment">## A JavaScript library for zooming images like Medium.</span>
<span class="token comment">## Warning: Do not enable both \`fancybox\` and \`mediumzoom\`.</span>
<span class="token comment">## For more information: https://medium-zoom.francoischalifour.com</span>
<span class="token key atrule">mediumzoom</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token comment">## Vanilla JavaScript plugin for lazyloading images.</span>
<span class="token comment">## For more information: https://apoorv.pro/lozad.js/demo/</span>
<span class="token key atrule">lazyload</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token comment">## Pangu Support</span>
<span class="token comment">## For more information: https://github.com/vinta/pangu.js</span>
<span class="token comment">## Server-side plugin: https://github.com/next-theme/hexo-pangu</span>
<span class="token key atrule">pangu</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token comment">## Quicklink Support</span>
<span class="token comment">## For more information: https://getquick.link</span>
<span class="token comment">## Front-matter variable (nonsupport home archive).</span>
<span class="token key atrule">quicklink</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

  <span class="token comment"># Home page and archive page can be controlled through home and archive options below.</span>
  <span class="token comment"># This configuration item is independent of \`enable\`.</span>
  <span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">archive</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

  <span class="token comment"># Default (true) will initialize quicklink after the load event fires.</span>
  <span class="token key atrule">delay</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment"># Custom a time in milliseconds by which the browser must execute prefetching.</span>
  <span class="token key atrule">timeout</span><span class="token punctuation">:</span> <span class="token number">3000</span>
  <span class="token comment"># Default (true) will attempt to use the fetch() API if supported (rather than link[rel=prefetch]).</span>
  <span class="token key atrule">priority</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>


<span class="token comment">## ---------------------------------------------------------------</span>
<span class="token comment">## Comments Settings</span>
<span class="token comment">## See: https://theme-next.js.org/docs/third-party-services/comments</span>
<span class="token comment">## ---------------------------------------------------------------</span>

<span class="token comment">## Multiple Comment System Support</span>
<span class="token key atrule">comments</span><span class="token punctuation">:</span>
  <span class="token comment"># Available values: tabs | buttons</span>
  <span class="token key atrule">style</span><span class="token punctuation">:</span> tabs
  <span class="token comment"># Choose a comment system to be displayed by default.</span>
  <span class="token comment"># Available values: disqus | disqusjs | changyan | livere | gitalk | utterances</span>
  <span class="token key atrule">active</span><span class="token punctuation">:</span>
  <span class="token comment"># Setting \`true\` means remembering the comment system selected by the visitor.</span>
  <span class="token key atrule">storage</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment"># Lazyload all comment systems.</span>
  <span class="token key atrule">lazyload</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># Modify texts or order for any naves, here are some examples.</span>
  <span class="token key atrule">nav</span><span class="token punctuation">:</span>
    <span class="token comment">#disqus:</span>
    <span class="token comment">#  text: Load Disqus</span>
    <span class="token comment">#  order: -1</span>
    <span class="token comment">#gitalk:</span>
    <span class="token comment">#  order: -2</span>

<span class="token comment">## Disqus</span>
<span class="token comment">## For more information: https://disqus.com</span>
<span class="token key atrule">disqus</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">shortname</span><span class="token punctuation">:</span>
  <span class="token key atrule">count</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment">## DisqusJS</span>
<span class="token comment">## For more information: https://disqusjs.skk.moe</span>
<span class="token key atrule">disqusjs</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># API Endpoint of Disqus API (https://disqus.com/api/docs/).</span>
  <span class="token comment"># Leave api empty if you are able to connect to Disqus API. Otherwise you need a reverse proxy for it.</span>
  <span class="token comment"># For example:</span>
  <span class="token comment"># api: https://disqus.skk.moe/disqus/</span>
  <span class="token key atrule">api</span><span class="token punctuation">:</span>
  <span class="token key atrule">apikey</span><span class="token punctuation">:</span> <span class="token comment"># Register new application from https://disqus.com/api/applications/</span>
  <span class="token key atrule">shortname</span><span class="token punctuation">:</span> <span class="token comment"># See: https://disqus.com/admin/settings/general/</span>

<span class="token comment">## Changyan</span>
<span class="token comment">## For more information: https://changyan.kuaizhan.com</span>
<span class="token key atrule">changyan</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">appid</span><span class="token punctuation">:</span>
  <span class="token key atrule">appkey</span><span class="token punctuation">:</span>

<span class="token comment">## LiveRe comments system</span>
<span class="token comment">## You can get your uid from https://livere.com/insight/myCode (General web site)</span>
<span class="token key atrule">livere_uid</span><span class="token punctuation">:</span> <span class="token comment"># &lt;your_uid&gt;</span>

<span class="token comment">## Gitalk</span>
<span class="token comment">## For more information: https://gitalk.github.io</span>
<span class="token key atrule">gitalk</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">github_id</span><span class="token punctuation">:</span> <span class="token comment"># GitHub repo owner</span>
  <span class="token key atrule">repo</span><span class="token punctuation">:</span> <span class="token comment"># Repository name to store issues</span>
  <span class="token key atrule">client_id</span><span class="token punctuation">:</span> <span class="token comment"># GitHub Application Client ID</span>
  <span class="token key atrule">client_secret</span><span class="token punctuation">:</span> <span class="token comment"># GitHub Application Client Secret</span>
  <span class="token key atrule">admin_user</span><span class="token punctuation">:</span> <span class="token comment"># GitHub repo owner and collaborators, only these guys can initialize gitHub issues</span>
  <span class="token key atrule">distraction_free_mode</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># Facebook-like distraction free mode</span>
  <span class="token comment"># When the official proxy is not available, you can change it to your own proxy address</span>
  <span class="token key atrule">proxy</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cors<span class="token punctuation">-</span>anywhere.azm.workers.dev/https<span class="token punctuation">:</span>//github.com/login/oauth/access_token <span class="token comment"># This is official proxy address</span>
  <span class="token comment"># Gitalk&#39;s display language depends on user&#39;s browser or system environment</span>
  <span class="token comment"># If you want everyone visiting your site to see a uniform language, you can set a force language value</span>
  <span class="token comment"># Available values: en | es-ES | fr | ru | zh-CN | zh-TW</span>
  <span class="token key atrule">language</span><span class="token punctuation">:</span>

<span class="token comment">## Utterances</span>
<span class="token comment">## For more information: https://utteranc.es</span>
<span class="token key atrule">utterances</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">repo</span><span class="token punctuation">:</span> user<span class="token punctuation">-</span>name/repo<span class="token punctuation">-</span>name <span class="token comment"># Github repository owner and name</span>
  <span class="token comment"># Available values: pathname | url | title | og:title</span>
  <span class="token key atrule">issue_term</span><span class="token punctuation">:</span> pathname
  <span class="token comment"># Available values: github-light | github-dark | preferred-color-scheme | github-dark-orange | icy-dark | dark-blue | photon-dark | boxy-light</span>
  <span class="token key atrule">theme</span><span class="token punctuation">:</span> github<span class="token punctuation">-</span>light

<span class="token comment">## Isso</span>
<span class="token comment">## For more information: https://posativ.org/isso/</span>
<span class="token key atrule">isso</span><span class="token punctuation">:</span> <span class="token comment"># &lt;data_isso&gt;</span>


<span class="token comment">## ---------------------------------------------------------------</span>
<span class="token comment">## Post Widgets &amp; Content Sharing Services</span>
<span class="token comment">## See: https://theme-next.js.org/docs/third-party-services/post-widgets</span>
<span class="token comment">## ---------------------------------------------------------------</span>

<span class="token comment">## Star rating support to each article.</span>
<span class="token comment">## To get your ID visit https://widgetpack.com</span>
<span class="token key atrule">rating</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">id</span><span class="token punctuation">:</span>     <span class="token comment"># &lt;app_id&gt;</span>
  <span class="token key atrule">color</span><span class="token punctuation">:</span>  <span class="token string">&quot;#fc6423&quot;</span>

<span class="token comment">## AddThis Share. See: https://www.addthis.com</span>
<span class="token comment">## Go to https://www.addthis.com/dashboard to customize your tools.</span>
<span class="token key atrule">add_this_id</span><span class="token punctuation">:</span>


<span class="token comment">## ---------------------------------------------------------------</span>
<span class="token comment">## Statistics and Analytics</span>
<span class="token comment">## See: https://theme-next.js.org/docs/third-party-services/statistics-and-analytics</span>
<span class="token comment">## ---------------------------------------------------------------</span>

<span class="token comment">## Google Analytics</span>
<span class="token comment">## See: https://analytics.google.com</span>
<span class="token key atrule">google_analytics</span><span class="token punctuation">:</span>
  <span class="token key atrule">tracking_id</span><span class="token punctuation">:</span> <span class="token comment"># &lt;app_id&gt;</span>
  <span class="token comment"># By default, NexT will load an external gtag.js script on your site.</span>
  <span class="token comment"># If you only need the pageview feature, set the following option to true to get a better performance.</span>
  <span class="token key atrule">only_pageview</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token comment">## Baidu Analytics</span>
<span class="token comment">## See: https://tongji.baidu.com</span>
<span class="token key atrule">baidu_analytics</span><span class="token punctuation">:</span> <span class="token comment"># &lt;app_id&gt;</span>

<span class="token comment">## Growingio Analytics</span>
<span class="token comment">## See: https://www.growingio.com</span>
<span class="token key atrule">growingio_analytics</span><span class="token punctuation">:</span> <span class="token comment"># &lt;project_id&gt;</span>

<span class="token comment">## Cloudflare Web Analytics</span>
<span class="token comment">## See: https://www.cloudflare.com/web-analytics/</span>
<span class="token key atrule">cloudflare_analytics</span><span class="token punctuation">:</span>

<span class="token comment">## Microsoft Clarity Analytics</span>
<span class="token comment">## See: https://clarity.microsoft.com/</span>
<span class="token key atrule">clarity_analytics</span><span class="token punctuation">:</span> <span class="token comment"># &lt;project_id&gt;</span>

<span class="token comment">## Show number of visitors of each article.</span>
<span class="token comment">## You can visit https://www.leancloud.cn to get AppID and AppKey.</span>
<span class="token key atrule">leancloud_visitors</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">app_id</span><span class="token punctuation">:</span> <span class="token comment"># &lt;your app id&gt;</span>
  <span class="token key atrule">app_key</span><span class="token punctuation">:</span> <span class="token comment"># &lt;your app key&gt;</span>
  <span class="token comment"># Required for apps from CN region</span>
  <span class="token key atrule">server_url</span><span class="token punctuation">:</span> <span class="token comment"># &lt;your server url&gt;</span>
  <span class="token comment"># Dependencies: https://github.com/theme-next/hexo-leancloud-counter-security</span>
  <span class="token comment"># If you don&#39;t care about security in leancloud counter and just want to use it directly</span>
  <span class="token comment"># (without hexo-leancloud-counter-security plugin), set \`security\` to \`false\`.</span>
  <span class="token key atrule">security</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment">## Another tool to show number of visitors to each article.</span>
<span class="token comment">## Visit https://console.firebase.google.com/u/0/ to get apiKey and projectId.</span>
<span class="token comment">## Visit https://firebase.google.com/docs/firestore/ to get more information about firestore.</span>
<span class="token key atrule">firestore</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">collection</span><span class="token punctuation">:</span> articles <span class="token comment"># Required, a string collection name to access firestore database</span>
  <span class="token key atrule">apiKey</span><span class="token punctuation">:</span> <span class="token comment"># Required</span>
  <span class="token key atrule">projectId</span><span class="token punctuation">:</span> <span class="token comment"># Required</span>

<span class="token comment">## Show Views / Visitors of the website / page with busuanzi.</span>
<span class="token comment">## For more information: http://ibruce.info/2015/04/04/busuanzi/</span>
<span class="token key atrule">busuanzi_count</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">total_visitors</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">total_visitors_icon</span><span class="token punctuation">:</span> fa fa<span class="token punctuation">-</span>user
  <span class="token key atrule">total_views</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">total_views_icon</span><span class="token punctuation">:</span> fa fa<span class="token punctuation">-</span>eye
  <span class="token key atrule">post_views</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">post_views_icon</span><span class="token punctuation">:</span> far fa<span class="token punctuation">-</span>eye


<span class="token comment">## ---------------------------------------------------------------</span>
<span class="token comment">## Search Services</span>
<span class="token comment">## See: https://theme-next.js.org/docs/third-party-services/search-services</span>
<span class="token comment">## ---------------------------------------------------------------</span>

<span class="token comment">## Algolia Search</span>
<span class="token comment">## For more information: https://www.algolia.com</span>
<span class="token key atrule">algolia_search</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">hits</span><span class="token punctuation">:</span>
    <span class="token key atrule">per_page</span><span class="token punctuation">:</span> <span class="token number">10</span>

<span class="token comment">## Local Search</span>
<span class="token comment">## Dependencies: https://github.com/next-theme/hexo-generator-searchdb</span>
<span class="token key atrule">local_search</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># If auto, trigger search by changing input.</span>
  <span class="token comment"># If manual, trigger search by pressing enter key or search button.</span>
  <span class="token key atrule">trigger</span><span class="token punctuation">:</span> auto
  <span class="token comment"># Show top n results per article, show all results by setting to -1</span>
  <span class="token key atrule">top_n_per_article</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token comment"># Unescape html strings to the readable one.</span>
  <span class="token key atrule">unescape</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># Preload the search data when the page loads.</span>
  <span class="token key atrule">preload</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>


<span class="token comment">## ---------------------------------------------------------------</span>
<span class="token comment">## Chat Services</span>
<span class="token comment">## See: https://theme-next.js.org/docs/third-party-services/chat-services</span>
<span class="token comment">## ---------------------------------------------------------------</span>

<span class="token comment">## A button to open designated chat widget in sidebar.</span>
<span class="token comment">## Firstly, you need to enable and configure the chat service.</span>
<span class="token key atrule">chat</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">icon</span><span class="token punctuation">:</span> fa fa<span class="token punctuation">-</span>comment <span class="token comment"># Icon name in Font Awesome, set false to disable icon.</span>
  <span class="token key atrule">text</span><span class="token punctuation">:</span> Chat <span class="token comment"># Button text, change it as you wish.</span>

<span class="token comment">## Chatra Support</span>
<span class="token comment">## For more information: https://chatra.com</span>
<span class="token comment">## Dashboard: https://app.chatra.io/settings/general</span>
<span class="token key atrule">chatra</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">async</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">id</span><span class="token punctuation">:</span> <span class="token comment"># Visit Dashboard to get your ChatraID</span>
  <span class="token comment">#embed: # Unfinished experimental feature for developers. See: https://chatra.com/help/api/#injectto</span>

<span class="token comment">## Tidio Support</span>
<span class="token comment">## For more information: https://www.tidio.com</span>
<span class="token comment">## Dashboard: https://www.tidio.com/panel/dashboard</span>
<span class="token key atrule">tidio</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">key</span><span class="token punctuation">:</span> <span class="token comment"># Public Key, get it from dashboard. See: https://www.tidio.com/panel/settings/developer</span>

<span class="token comment">## Gitter Support</span>
<span class="token comment">## For more information: https://gitter.im</span>
<span class="token key atrule">gitter</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">room</span><span class="token punctuation">:</span>


<span class="token comment">## ---------------------------------------------------------------</span>
<span class="token comment">## Tags Settings</span>
<span class="token comment">## See: https://theme-next.js.org/docs/tag-plugins/</span>
<span class="token comment">## ---------------------------------------------------------------</span>

<span class="token comment">## Note tag (bootstrap callout)</span>
<span class="token key atrule">note</span><span class="token punctuation">:</span>
  <span class="token comment"># Note tag style values:</span>
  <span class="token comment">#  - simple    bootstrap callout old alert style. Default.</span>
  <span class="token comment">#  - modern    bootstrap callout new (v2-v3) alert style.</span>
  <span class="token comment">#  - flat      flat callout style with background, like on Mozilla or StackOverflow.</span>
  <span class="token comment">#  - disabled  disable all CSS styles import of note tag.</span>
  <span class="token key atrule">style</span><span class="token punctuation">:</span> simple
  <span class="token key atrule">icons</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># Offset lighter of background in % for modern and flat styles (modern: -12 | 12; flat: -18 | 6).</span>
  <span class="token comment"># Offset also applied to label tag variables. This option can work with disabled note tag.</span>
  <span class="token key atrule">light_bg_offset</span><span class="token punctuation">:</span> <span class="token number">0</span>

<span class="token comment">## Tabs tag</span>
<span class="token key atrule">tabs</span><span class="token punctuation">:</span>
  <span class="token comment"># Make the nav bar of tabs with long content stick to the top.</span>
  <span class="token key atrule">sticky</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">transition</span><span class="token punctuation">:</span>
    <span class="token key atrule">tabs</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">labels</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment">## PDF tag</span>
<span class="token comment">## NexT will try to load pdf files natively, if failed, pdf.js will be used.</span>
<span class="token comment">## So, you have to install the dependency of pdf.js if you want to use pdf tag and make it available to all browsers.</span>
<span class="token comment">## Dependencies: https://github.com/next-theme/theme-next-pdf</span>
<span class="token key atrule">pdf</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># Default height</span>
  <span class="token key atrule">height</span><span class="token punctuation">:</span> 500px

<span class="token comment">## Mermaid tag</span>
<span class="token key atrule">mermaid</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># Available themes: default | dark | forest | neutral</span>
  <span class="token key atrule">theme</span><span class="token punctuation">:</span>
    <span class="token key atrule">light</span><span class="token punctuation">:</span> default
    <span class="token key atrule">dark</span><span class="token punctuation">:</span> dark


<span class="token comment">## ---------------------------------------------------------------</span>
<span class="token comment">## Animation Settings</span>
<span class="token comment">## ---------------------------------------------------------------</span>

<span class="token comment">## Use Animate.css to animate everything.</span>
<span class="token comment">## For more information: https://animate.style</span>
<span class="token key atrule">motion</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">async</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">transition</span><span class="token punctuation">:</span>
    <span class="token comment"># All available transition variants: https://theme-next.js.org/animate/</span>
    <span class="token key atrule">post_block</span><span class="token punctuation">:</span> fadeIn
    <span class="token key atrule">post_header</span><span class="token punctuation">:</span> fadeInDown
    <span class="token key atrule">post_body</span><span class="token punctuation">:</span> fadeInDown
    <span class="token key atrule">coll_header</span><span class="token punctuation">:</span> fadeInLeft
    <span class="token comment"># Only for Pisces | Gemini.</span>
    <span class="token key atrule">sidebar</span><span class="token punctuation">:</span> fadeInUp

<span class="token comment">## Progress bar in the top during page loading.</span>
<span class="token comment">## For more information: https://github.com/CodeByZach/pace</span>
<span class="token key atrule">pace</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># All available colors:</span>
  <span class="token comment"># black | blue | green | orange | pink | purple | red | silver | white | yellow</span>
  <span class="token key atrule">color</span><span class="token punctuation">:</span> blue
  <span class="token comment"># All available themes:</span>
  <span class="token comment"># big-counter | bounce | barber-shop | center-atom | center-circle | center-radar | center-simple</span>
  <span class="token comment"># corner-indicator | fill-left | flat-top | flash | loading-bar | mac-osx | material | minimal</span>
  <span class="token key atrule">theme</span><span class="token punctuation">:</span> minimal

<span class="token comment">## Canvas ribbon</span>
<span class="token comment">## For more information: https://github.com/hustcc/ribbon.js</span>
<span class="token key atrule">canvas_ribbon</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">size</span><span class="token punctuation">:</span> <span class="token number">300</span> <span class="token comment"># The width of the ribbon</span>
  <span class="token key atrule">alpha</span><span class="token punctuation">:</span> <span class="token number">0.6</span> <span class="token comment"># The transparency of the ribbon</span>
  <span class="token key atrule">zIndex</span><span class="token punctuation">:</span> <span class="token number">-1</span> <span class="token comment"># The display level of the ribbon</span>


<span class="token comment">## ---------------------------------------------------------------</span>
<span class="token comment">## CDN Settings</span>
<span class="token comment">## See: https://theme-next.js.org/docs/advanced-settings/vendors</span>
<span class="token comment">## ---------------------------------------------------------------</span>

<span class="token key atrule">vendors</span><span class="token punctuation">:</span>
  <span class="token comment"># The CDN provider of NexT internal scripts.</span>
  <span class="token comment"># Available values: local | jsdelivr | unpkg | cdnjs | custom</span>
  <span class="token comment"># Warning: If you are using the latest master branch of NexT, please set \`internal: local\`</span>
  <span class="token key atrule">internal</span><span class="token punctuation">:</span> local
  <span class="token comment"># The default CDN provider of third-party plugins.</span>
  <span class="token comment"># Available values: local | jsdelivr | unpkg | cdnjs | custom</span>
  <span class="token comment"># Dependencies for \`plugins: local\`: https://github.com/next-theme/plugins</span>
  <span class="token key atrule">plugins</span><span class="token punctuation">:</span> jsdelivr
  <span class="token comment"># Custom CDN URL</span>
  <span class="token comment"># For example:</span>
  <span class="token comment"># custom_cdn_url: https://cdn.jsdelivr.net/npm/\${npm_name}@\${version}/\${minified}</span>
  <span class="token comment"># custom_cdn_url: https://cdnjs.cloudflare.com/ajax/libs/\${cdnjs_name}/\${version}/\${cdnjs_file}</span>
  <span class="token key atrule">custom_cdn_url</span><span class="token punctuation">:</span>

<span class="token comment">## Assets</span>
<span class="token comment">## Accelerate delivery of static files using a CDN</span>
<span class="token comment">## The js option is only valid when vendors.internal is local.</span>
<span class="token key atrule">css</span><span class="token punctuation">:</span> css
<span class="token key atrule">js</span><span class="token punctuation">:</span> js
<span class="token key atrule">images</span><span class="token punctuation">:</span> images


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),i=[l];function o(c,p){return s(),a("div",null,i)}const d=n(t,[["render",o],["__file","next配置.html.vue"]]);export{d as default};
