# pywin32

默认安装在`C:\Users\<YOUR USERNAME>\scoop`, 自定义安装路径需要在安装前设置环境变量`$env:SCOOP='D:\Applications\Scoop'`

在[官网](https://scoop.sh/)查看安装命令
```sh
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser # Optional: Needed to run a remote script the first time
irm get.scoop.sh | iex
```

## 文件夹说明

路径|描述
--|--
apps|所有通过scoop安装的软件都在里面。
buckets|管理软件的仓库，用于记录哪些软件可以安装、更新等信息，默认添加main仓库，可手动添加其他仓库或自建仓库
cache|软件下载后安装包暂存目录。
persit|用于储存一些用户数据，不会随软件更新而替换。
shims|和系统的`PATH`建立链接, 不需要我们自己再添加环境变量




## 配置代理或源
1. 设置Scoop代理。在命令行中输入（PowerShell或者CMD中都行）`scoop config proxy 127.0.0.1:7890`让scoop网络连接走代理，后面的ip地址和端口根据自己的代理设置。
2. 使用Gitee镜像源。可能备份更新得不是那么勤快，以及实际下载软件包同样会有网络问题，所以不推荐。在命令行中输入`scoop config SCOOP_REPO https://gitee.com/squallliu/scoop`修改仓库源的地址。

或者更直接点，找到Scoop配置文件，路径C:\Users\username\.config\scoop\config.json，然后直接修改里面的配置


## 常用命令
Scoop的操作命令基本结构是`scoop + 动词 + 对象`


命令|描述
--|--
help|查询帮助
search|搜索仓库中是否有相应软件。
install|安装软件。
uninstall|卸载软件。
update|更新软件
hold|锁定软件阻止其更新。
info|查询软件简要信息。
home|打开浏览器进入软件官网。

## 仓库
默认安装Scoop后仅有main仓库，其中主要是面向程序员的工具，对于一般用户而言并不是那么实用。好在Scoop本身考虑到了这一点，添加了面向一般用户的软件仓库extras，其中收录大量好用的小软件，足够日常的使用。
Scoop添加软件仓库的命令是`scoop bucket add bucketname (+ url可选)`。如添加extras的命令是`scoop bucket add extras`


## 加速下载
在使用scoop安装aria2后，scoop会自动调用aria2进行多线程下载以加速下载, 下载完成后，记得打开16线程（aria2编译版本默认最高线程为16，需要更高的请自行编译）：
```sh
scoop install aria2
scoop config aria2-max-connection-per-server 16
scoop config aria2-split 16
scoop config aria2-min-split-size 1M
```


## 自己使用的软件

```python
{
    "buckets": [
        {
            "Name": "extras",
            "Source": "https://github.com/ScoopInstaller/Extras",
            "Updated": {
                "value": "\/Date(1699233369000)\/",
                "DisplayHint": 2,
                "DateTime": "2023年11月6日 9:16:09"
            },
            "Manifests": 1888
        },
        {
            "Name": "main",
            "Source": "https://github.com/ScoopInstaller/Main",
            "Updated": {
                "value": "\/Date(1699215809000)\/",
                "DisplayHint": 2,
                "DateTime": "2023年11月6日 4:23:29"
            },
            "Manifests": 1262
        }
    ],
    "apps": [
        {
            "Info": "",
            "Source": "main",
            "Name": "7zip",
            "Version": "22.01",
            "Updated": "\/Date(1666314387894)\/"
        },
        {
            "Info": "",
            "Source": "extras",
            "Name": "aria-ng-gui",
            "Version": "3.1.2",
            "Updated": "\/Date(1677648569832)\/"
        },
        {
            "Info": "",
            "Source": "main",
            "Name": "aria2",
            "Version": "1.36.0-1",
            "Updated": "\/Date(1666258791999)\/"
        },
        {
            "Info": "",
            "Source": "extras",
            "Name": "captura",
            "Version": "8.0.0",
            "Updated": "\/Date(1666765774245)\/"
        },
        {
            "Info": "",
            "Source": "extras",
            "Name": "carnac",
            "Version": "2.3.13",
            "Updated": "\/Date(1666573329681)\/"
        },
        {
            "Info": "",
            "Source": "extras",
            "Name": "ccleaner",
            "Version": "6.16.10662",
            "Updated": "\/Date(1699238593968)\/"
        },
        {
            "Info": "",
            "Source": "main",
            "Name": "cmder-full",
            "Version": "1.3.20",
            "Updated": "\/Date(1666344639698)\/"
        },
        {
            "Info": "",
            "Source": "main",
            "Name": "dark",
            "Version": "3.11.2",
            "Updated": "\/Date(1666343805871)\/"
        },
        {
            "Info": "Install failed",
            "Source": null,
            "Name": "dbeaver",
            "Version": null,
            "Updated": "\/Date(1695200967721)\/"
        },
        {
            "Info": "",
            "Source": "extras",
            "Name": "dismplusplus",
            "Version": "10.1.1002.1B",
            "Updated": "\/Date(1699238720205)\/"
        },
        {
            "Info": "",
            "Source": "extras",
            "Name": "draw.io",
            "Version": "20.3.0",
            "Updated": "\/Date(1666343383950)\/"
        },
        {
            "Info": "",
            "Source": "extras",
            "Name": "everything",
            "Version": "1.4.1.1022",
            "Updated": "\/Date(1666344705774)\/"
        },
        {
            "Info": "Install failed",
            "Source": null,
            "Name": "Fadetop",
            "Version": null,
            "Updated": "\/Date(1666768338030)\/"
        },
        {
            "Info": "",
            "Source": "main",
            "Name": "ffmpeg",
            "Version": "5.1.2",
            "Updated": "\/Date(1666314445969)\/"
        },
        {
            "Info": "",
            "Source": "extras",
            "Name": "geekuninstaller",
            "Version": "1.5.1.162",
            "Updated": "\/Date(1666573157671)\/"
        },
        {
            "Info": "",
            "Source": "main",
            "Name": "git",
            "Version": "2.38.1.windows.1",
            "Updated": "\/Date(1666342612702)\/"
        },
        {
            "Info": "",
            "Source": "extras",
            "Name": "googlechrome",
            "Version": "106.0.5249.119",
            "Updated": "\/Date(1666341027131)\/"
        },
        {
            "Info": "",
            "Source": "main",
            "Name": "innounp",
            "Version": "0.50",
            "Updated": "\/Date(1672636494144)\/"
        },
        {
            "Info": "",
            "Source": "main",
            "Name": "latex",
            "Version": "22.10",
            "Updated": "\/Date(1666339945005)\/"
        },
        {
            "Info": "",
            "Source": "extras",
            "Name": "mobaxterm",
            "Version": "23.0",
            "Updated": "\/Date(1691052250047)\/"
        },
        {
            "Info": "",
            "Source": "extras",
            "Name": "motrix",
            "Version": "1.6.11",
            "Updated": "\/Date(1666765101335)\/"
        },
        {
            "Info": "",
            "Source": "main",
            "Name": "nodejs",
            "Version": "19.0.0",
            "Updated": "\/Date(1667200733620)\/"
        },
        {
            "Info": "Install failed",
            "Source": null,
            "Name": "pageedit",
            "Version": null,
            "Updated": "\/Date(1672637045335)\/"
        },
        {
            "Info": "Install failed",
            "Source": null,
            "Name": "persepolis",
            "Version": null,
            "Updated": "\/Date(1691052946123)\/"
        },
        {
            "Info": "",
            "Source": "extras",
            "Name": "potplayer",
            "Version": "220831",
            "Updated": "\/Date(1666343659606)\/"
        },
        {
            "Info": "",
            "Source": "extras",
            "Name": "powertoys",
            "Version": "0.65.0",
            "Updated": "\/Date(1670926038888)\/"
        },
        {
            "Info": "",
            "Source": "main",
            "Name": "python",
            "Version": "3.10.8",
            "Updated": "\/Date(1666343890454)\/"
        },
        {
            "Info": "",
            "Source": "extras",
            "Name": "q-dir",
            "Version": "11.13",
            "Updated": "\/Date(1666344241172)\/"
        },
        {
            "Info": "Install failed",
            "Source": null,
            "Name": "sigil",
            "Version": null,
            "Updated": "\/Date(1672636960584)\/"
        },
        {
            "Info": "",
            "Source": "extras",
            "Name": "snipaste",
            "Version": "1.16.2",
            "Updated": "\/Date(1666344803394)\/"
        },
        {
            "Info": "",
            "Source": "extras",
            "Name": "spacesniffer",
            "Version": "1.3.0.2",
            "Updated": "\/Date(1699239014557)\/"
        },
        {
            "Info": "",
            "Source": "extras",
            "Name": "vscode",
            "Version": "1.72.2",
            "Updated": "\/Date(1666344976205)\/"
        },
        {
            "Info": "",
            "Source": "extras",
            "Name": "wireshark",
            "Version": "4.0.1",
            "Updated": "\/Date(1667280816786)\/"
        }
    ]
}

```


参考:
https://scoop.sh/
https://github.com/ScoopInstaller/Install#readme
https://zhuanlan.zhihu.com/p/463284082
https://www.cnblogs.com/Edge-coordinates/p/15130184.html