const t=JSON.parse('{"key":"v-7a12af46","path":"/%E6%B8%B8%E6%88%8F/%E4%BC%A0%E5%A5%87/%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84.html","title":"","lang":"zh-CN","frontmatter":{"description":"MirServer(传奇服务端) ├LogServer (游戏物品日志) │ ├BaseDir (包含物品日志文件) │ ├LogData.ini(物品日志配置文件) │ └LogDataServer.exe(日志服务端程序) ├LoginGate(ID登录接口) │ ├LoginGate.exe(ID登录接口程序) │ ├BlockIPList.txt(IP永久过滤列表) │ └Config.ini (ID登录接口配置文件) ├SelGate(角色登录接口) │ ├SelGate.exe (角色登录接口程序) │ ├BlockIPList.txt(IP永久过滤列表) │ └Config.ini (角色登录接口配置文件) │RunGate(游戏运行接口) │ ├RunGate.exe(游戏运行接口程序) │ ├RunGate.ini(游戏运行接口配置文件) │ ├BlockIPList.txt(IP永久过滤列表) │ └WordFilter.txt(消息文字过滤信息) ├Mir200(传奇游戏服务端，服务于RunGate) │ ├ConLog(登录日志) │ ├Castle(沙城状态) │ │ ├ List.txt(城堡编号) │ │ │├AttackSabukWall.txt(攻城信息) │ │ │ └Sabukw.txt(沙巴克状态信息) │ ├Envir(环境设置) │ │ ├MapQuest_def (触发相关脚本文件夹) │ │ ├Market_def(商人信息，与Merchant.txt对应) │ │ ├Market_prices(商品物价信息) │ │ ├Market_saved(商品存储信息) │ │ ├Market_upg (升级武器信息) │ │ ├MonItems(怪物所爆物品及几率，与Monster.DB对应) │ │ ├MonUseItems(人形怪信息以及爆率) │ │ ├Robot_def(机器人脚本) │ │ ├Boxs(宝箱配置) │ │ ├Npc_def(NPC人物信息，与NPCs.txt对应) │ │ ├QuestDiary (功能扩展脚本文件夹) │ │ ├AdminList.txt (GM列表文件) │ │ ├GuardList.txt(守卫坐标文件) │ │ ├MakeItem.txt(毒药配方文件) │ │ ├MapInfo.txt(地图信息文件) │ │ ├MapQuest.txt(任务配置文件) │ │ ├Merchant.txt(商人信息文件) │ │ ├MiniMap.txt(小地图信息文件) │ │ ├Mongen.txt(怪物刷新配置文件) │ │ ├Npcs.txt(NPC信息文件) │ │ ├StartPoint.txt(复活点信息文件) │ │ ├NoClearMonList.txt(禁止清除怪物) │ │ ├Robot.txt(机器人脚本控制) │ │ ├RefineItem.txt(淬炼脚本配置) │ │ ├SuitItemList.txt(套装属性) │ │ ├MapEvent.txt (地图事件触发) │ │ ├GuildRankNameFilter.txt(行会过滤字符) │ │ ├GameLogItemNameList.txt(日志记录物品名) │ │ ├CheckItemList.txt(物品状态控制) │ │ └UnbindList.txt(打捆物品拆包信息文件) │ ├GuildBase(行会信息) │ │ ├Guilds(行会信息) │ │ └GuildList.txt(行会列表文件) │ ├Log(游戏运行服务端日志) │ ├Map(地图文件) │ ├Notice(提示信息) │ │ ├LineNotice.txt(游戏运行中的提示，蓝字部分) │ │ └Notice.txt(选择服务器之后出现的版权信息) │ ├Share │ ├ShareV │ ├!Abuse.txt(脏话信息) │ ├!RunAddr.txt │ ├!ServerTable.txt │ ├!Setup.txt(游戏运行服务端配置文件) │ ├M2Server.exe(游戏运行服务端) │ ├BuyItemList.txt(商铺) │ ├CheckItemList.txt(禁止物品) │ ├Command.ini(玩家命令、管理员命令、调试命令) │ ├iplist.db(IP数据库) │ ├PlugList.txt(插件列表) │ ├String.ini(提示配置文件) │ ├UserCmd.txt(自定义命令) │ └MsgFilterList.txt(消息过滤) ├Mud2(服务端) │ ├DB(数据库Paradox) │ │ ├Magic.DB(技能数据库) │ │ ├Monster.DB(怪物数据库) │ │ └StdItems.DB(物品数据库) ├DBSrv200(角色数据库,服务于SelGate) │ ├Connection │ ├FDB(人物数据库，数据库格式为传奇自定义格式) │ ├Log(角色数据库日志) │ ├!AddrTable.txt │ ├!ServerInfo.txt (游戏网关列表) │ ├FiltrateSortName.txt(排行榜过滤字符) │ ├FiltrateUserName.txt(排行榜过滤名字) │ ├DBServer.exe(角色数据库服务端) │ └DBSrc.ini(角色数据库服务端配置文件) ├LoginSrv (ID登录服务端，服务于LoginGate) │ ├ChrLog(ID创建、修改日志) │ ├IdLog(ID登录日志) │ ├CountLog(ID登录数量统计日志) │ ├IDDB(ID数据库，数据库格式为传奇自定义格式) │ │ ├ID.DB(ID数据库) │ │ ┕ID.DB.idx(ID数据库索引) │ ├!AddrTable.txt │ ├!ServerAddr.txt │ ├!UserLimit.txt │ ├LoginSrv.exe(ID登录服务端程序) │ └LogSrv.ini(ID登录服务端配置文件) ├GameCenter.exe(游戏控制器) └Config.ini(游戏控制器配置文件)","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%B8%B8%E6%88%8F/%E4%BC%A0%E5%A5%87/%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:description","content":"MirServer(传奇服务端) ├LogServer (游戏物品日志) │ ├BaseDir (包含物品日志文件) │ ├LogData.ini(物品日志配置文件) │ └LogDataServer.exe(日志服务端程序) ├LoginGate(ID登录接口) │ ├LoginGate.exe(ID登录接口程序) │ ├BlockIPList.txt(IP永久过滤列表) │ └Config.ini (ID登录接口配置文件) ├SelGate(角色登录接口) │ ├SelGate.exe (角色登录接口程序) │ ├BlockIPList.txt(IP永久过滤列表) │ └Config.ini (角色登录接口配置文件) │RunGate(游戏运行接口) │ ├RunGate.exe(游戏运行接口程序) │ ├RunGate.ini(游戏运行接口配置文件) │ ├BlockIPList.txt(IP永久过滤列表) │ └WordFilter.txt(消息文字过滤信息) ├Mir200(传奇游戏服务端，服务于RunGate) │ ├ConLog(登录日志) │ ├Castle(沙城状态) │ │ ├ List.txt(城堡编号) │ │ │├AttackSabukWall.txt(攻城信息) │ │ │ └Sabukw.txt(沙巴克状态信息) │ ├Envir(环境设置) │ │ ├MapQuest_def (触发相关脚本文件夹) │ │ ├Market_def(商人信息，与Merchant.txt对应) │ │ ├Market_prices(商品物价信息) │ │ ├Market_saved(商品存储信息) │ │ ├Market_upg (升级武器信息) │ │ ├MonItems(怪物所爆物品及几率，与Monster.DB对应) │ │ ├MonUseItems(人形怪信息以及爆率) │ │ ├Robot_def(机器人脚本) │ │ ├Boxs(宝箱配置) │ │ ├Npc_def(NPC人物信息，与NPCs.txt对应) │ │ ├QuestDiary (功能扩展脚本文件夹) │ │ ├AdminList.txt (GM列表文件) │ │ ├GuardList.txt(守卫坐标文件) │ │ ├MakeItem.txt(毒药配方文件) │ │ ├MapInfo.txt(地图信息文件) │ │ ├MapQuest.txt(任务配置文件) │ │ ├Merchant.txt(商人信息文件) │ │ ├MiniMap.txt(小地图信息文件) │ │ ├Mongen.txt(怪物刷新配置文件) │ │ ├Npcs.txt(NPC信息文件) │ │ ├StartPoint.txt(复活点信息文件) │ │ ├NoClearMonList.txt(禁止清除怪物) │ │ ├Robot.txt(机器人脚本控制) │ │ ├RefineItem.txt(淬炼脚本配置) │ │ ├SuitItemList.txt(套装属性) │ │ ├MapEvent.txt (地图事件触发) │ │ ├GuildRankNameFilter.txt(行会过滤字符) │ │ ├GameLogItemNameList.txt(日志记录物品名) │ │ ├CheckItemList.txt(物品状态控制) │ │ └UnbindList.txt(打捆物品拆包信息文件) │ ├GuildBase(行会信息) │ │ ├Guilds(行会信息) │ │ └GuildList.txt(行会列表文件) │ ├Log(游戏运行服务端日志) │ ├Map(地图文件) │ ├Notice(提示信息) │ │ ├LineNotice.txt(游戏运行中的提示，蓝字部分) │ │ └Notice.txt(选择服务器之后出现的版权信息) │ ├Share │ ├ShareV │ ├!Abuse.txt(脏话信息) │ ├!RunAddr.txt │ ├!ServerTable.txt │ ├!Setup.txt(游戏运行服务端配置文件) │ ├M2Server.exe(游戏运行服务端) │ ├BuyItemList.txt(商铺) │ ├CheckItemList.txt(禁止物品) │ ├Command.ini(玩家命令、管理员命令、调试命令) │ ├iplist.db(IP数据库) │ ├PlugList.txt(插件列表) │ ├String.ini(提示配置文件) │ ├UserCmd.txt(自定义命令) │ └MsgFilterList.txt(消息过滤) ├Mud2(服务端) │ ├DB(数据库Paradox) │ │ ├Magic.DB(技能数据库) │ │ ├Monster.DB(怪物数据库) │ │ └StdItems.DB(物品数据库) ├DBSrv200(角色数据库,服务于SelGate) │ ├Connection │ ├FDB(人物数据库，数据库格式为传奇自定义格式) │ ├Log(角色数据库日志) │ ├!AddrTable.txt │ ├!ServerInfo.txt (游戏网关列表) │ ├FiltrateSortName.txt(排行榜过滤字符) │ ├FiltrateUserName.txt(排行榜过滤名字) │ ├DBServer.exe(角色数据库服务端) │ └DBSrc.ini(角色数据库服务端配置文件) ├LoginSrv (ID登录服务端，服务于LoginGate) │ ├ChrLog(ID创建、修改日志) │ ├IdLog(ID登录日志) │ ├CountLog(ID登录数量统计日志) │ ├IDDB(ID数据库，数据库格式为传奇自定义格式) │ │ ├ID.DB(ID数据库) │ │ ┕ID.DB.idx(ID数据库索引) │ ├!AddrTable.txt │ ├!ServerAddr.txt │ ├!UserLimit.txt │ ├LoginSrv.exe(ID登录服务端程序) │ └LogSrv.ini(ID登录服务端配置文件) ├GameCenter.exe(游戏控制器) └Config.ini(游戏控制器配置文件)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-11T09:16:47.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2024-11-11T09:16:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-11T09:16:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1731316607000,"updatedTime":1731316607000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":2.63,"words":788},"filePathRelative":"游戏/传奇/服务端文件结构.md","localizedDate":"2024年11月11日","excerpt":"<p>MirServer(传奇服务端)\\n├LogServer (游戏物品日志)\\n│ ├BaseDir (包含物品日志文件)\\n│ ├LogData.ini(物品日志配置文件)\\n│ └LogDataServer.exe(日志服务端程序)\\n├LoginGate(ID登录接口)\\n│ ├LoginGate.exe(ID登录接口程序)\\n│ ├BlockIPList.txt(IP永久过滤列表)\\n│ └Config.ini (ID登录接口配置文件)\\n├SelGate(角色登录接口)\\n│ ├SelGate.exe (角色登录接口程序)\\n│ ├BlockIPList.txt(IP永久过滤列表)\\n│ └Config.ini (角色登录接口配置文件)\\n│RunGate(游戏运行接口)\\n│ ├RunGate.exe(游戏运行接口程序)\\n│ ├RunGate.ini(游戏运行接口配置文件)\\n│ ├BlockIPList.txt(IP永久过滤列表)\\n│ └WordFilter.txt(消息文字过滤信息)\\n├Mir200(传奇游戏服务端，服务于RunGate)\\n│ ├ConLog(登录日志)\\n│ ├Castle(沙城状态)\\n│ │ ├ List.txt(城堡编号)\\n│ │ │├AttackSabukWall.txt(攻城信息)\\n│ │ │ └Sabukw.txt(沙巴克状态信息)\\n│ ├Envir(环境设置)\\n│ │ ├MapQuest_def (触发相关脚本文件夹)\\n│ │ ├Market_def(商人信息，与Merchant.txt对应)\\n│ │ ├Market_prices(商品物价信息)\\n│ │ ├Market_saved(商品存储信息)\\n│ │ ├Market_upg (升级武器信息)\\n│ │ ├MonItems(怪物所爆物品及几率，与Monster.DB对应)\\n│ │ ├MonUseItems(人形怪信息以及爆率)\\n│ │ ├Robot_def(机器人脚本)\\n│ │ ├Boxs(宝箱配置)\\n│ │ ├Npc_def(NPC人物信息，与NPCs.txt对应)\\n│ │ ├QuestDiary (功能扩展脚本文件夹)\\n│ │ ├AdminList.txt (GM列表文件)\\n│ │ ├GuardList.txt(守卫坐标文件)\\n│ │ ├MakeItem.txt(毒药配方文件)\\n│ │ ├MapInfo.txt(地图信息文件)\\n│ │ ├MapQuest.txt(任务配置文件)\\n│ │ ├Merchant.txt(商人信息文件)\\n│ │ ├MiniMap.txt(小地图信息文件)\\n│ │ ├Mongen.txt(怪物刷新配置文件)\\n│ │ ├Npcs.txt(NPC信息文件)\\n│ │ ├StartPoint.txt(复活点信息文件)\\n│ │ ├NoClearMonList.txt(禁止清除怪物)\\n│ │ ├Robot.txt(机器人脚本控制)\\n│ │ ├RefineItem.txt(淬炼脚本配置)\\n│ │ ├SuitItemList.txt(套装属性)\\n│ │ ├MapEvent.txt (地图事件触发)\\n│ │ ├GuildRankNameFilter.txt(行会过滤字符)\\n│ │ ├GameLogItemNameList.txt(日志记录物品名)\\n│ │ ├CheckItemList.txt(物品状态控制)\\n│ │ └UnbindList.txt(打捆物品拆包信息文件)\\n│ ├GuildBase(行会信息)\\n│ │ ├Guilds(行会信息)\\n│ │ └GuildList.txt(行会列表文件)\\n│ ├Log(游戏运行服务端日志)\\n│ ├Map(地图文件)\\n│ ├Notice(提示信息)\\n│ │ ├LineNotice.txt(游戏运行中的提示，蓝字部分)\\n│ │ └Notice.txt(选择服务器之后出现的版权信息)\\n│ ├Share\\n│ ├ShareV\\n│ ├!Abuse.txt(脏话信息)\\n│ ├!RunAddr.txt\\n│ ├!ServerTable.txt\\n│ ├!Setup.txt(游戏运行服务端配置文件)\\n│ ├M2Server.exe(游戏运行服务端)\\n│ ├BuyItemList.txt(商铺)\\n│ ├CheckItemList.txt(禁止物品)\\n│ ├Command.ini(玩家命令、管理员命令、调试命令)\\n│ ├iplist.db(IP数据库)\\n│ ├PlugList.txt(插件列表)\\n│ ├String.ini(提示配置文件)\\n│ ├UserCmd.txt(自定义命令)\\n│ └MsgFilterList.txt(消息过滤)\\n├Mud2(服务端)\\n│ ├DB(数据库Paradox)\\n│ │ ├Magic.DB(技能数据库)\\n│ │ ├Monster.DB(怪物数据库)\\n│ │ └StdItems.DB(物品数据库)\\n├DBSrv200(角色数据库,服务于SelGate)\\n│ ├Connection\\n│ ├FDB(人物数据库，数据库格式为传奇自定义格式)\\n│ ├Log(角色数据库日志)\\n│ ├!AddrTable.txt\\n│ ├!ServerInfo.txt (游戏网关列表)\\n│ ├FiltrateSortName.txt(排行榜过滤字符)\\n│ ├FiltrateUserName.txt(排行榜过滤名字)\\n│ ├DBServer.exe(角色数据库服务端)\\n│ └DBSrc.ini(角色数据库服务端配置文件)\\n├LoginSrv (ID登录服务端，服务于LoginGate)\\n│ ├ChrLog(ID创建、修改日志)\\n│ ├IdLog(ID登录日志)\\n│ ├CountLog(ID登录数量统计日志)\\n│ ├IDDB(ID数据库，数据库格式为传奇自定义格式)\\n│ │ ├ID.DB(ID数据库)\\n│ │ ┕ID.DB.idx(ID数据库索引)\\n│ ├!AddrTable.txt\\n│ ├!ServerAddr.txt\\n│ ├!UserLimit.txt\\n│ ├LoginSrv.exe(ID登录服务端程序)\\n│ └LogSrv.ini(ID登录服务端配置文件)\\n├GameCenter.exe(游戏控制器)\\n└Config.ini(游戏控制器配置文件)</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{t as data};
