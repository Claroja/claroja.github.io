
# 简介
定义命令行任务, 可以链接多个任务顺序执行, 比如编译,git等


1. `label`: `task`的名称
2. `type`: 使用什么运行命令, `shell`(cmd, bash, powershell), `process`, 不太清楚两者的区别
3. `command`: 要执行的命名
4. `args`: 带变量的参数要分开写, 比如`["--fps","10"]`, 不能写成`["--fps 10"]`
5. `group`:
    - `kind`: `build`, 编译好的配置文件, 以直接使用`alt+b`来运行(首先用要编译, 可以使用`alt+b`来配置)
    - `isDefault`: 默认运行
6. `presentation`: 信息展示的行驶
    - `reveal`: `silent`  是否查看task的输出, `silent`不查看
    - `revealProblems`: `onProblem`
    - `close`: `true` 自动关闭


# 配置文件
在根目录创建`task.json`

```json
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "2.0.0",
    "tasks": [
        {
            "label": "manim",
            "type": "shell",
            "command": "manim",
            "args": [
                "${file}",
                "-ql",
                "--format",
                "gif",
                "--fps",
                "5",
                "CodeFromString"
            ],
            "problemMatcher": [],
            "group": {
                "kind": "build",
                "isDefault": true
            },
            "presentation": {
                // "reveal": "silent",
                "revealProblems": "onProblem",
                "close": true
            }
        }
    ]
}
```

# 快捷键配置
`alt + b`自动运行`task`
```json
    { 
        "key": "alt+b",
        "command": "workbench.action.tasks.build",
        // "when": "taskCommandsRegistered"
    }
```


参考:
https://code.visualstudio.com/docs/editor/tasks
https://stackoverflow.com/questions/47946868/how-to-get-rid-of-terminal-will-be-reused-by-tasks-press-any-key-to-close-it