from pathlib import Path
from pypinyin import pinyin, Style
from itertools import chain
import re

path = Path('./src')
lines = []
root_list = []

HEADLEVEL = 4 # 从4级目录开始，使用列表表示

def getH(filePath):
    
    filename = filePath.parts[-1]

    res = re.search(r'^\d+',filename)

    if res:
        res = res.group(0)

        if len(res) == 1:
            filename = '0' + filename

    return ''.join(chain.from_iterable(pinyin(filename, style=Style.NORMAL)))


def func(path, head_count, root_list):
    
    head_count += 1
    
    mdfiles = list(path.glob('./*.md'))
    
    
    if len(mdfiles) != 0 and (Path('./src/index.md') not in mdfiles): # 如果包含.md文件且不包含index.md, 则拼贴.md文件名称
        if head_count >= HEADLEVEL:  # 当标题深度大于HEADLEVEL时, 使用缩进表示
            lines.append('\t' * (head_count-HEADLEVEL) + '-' + ' ' + f'{path.parts[-1]}' + ' ')
        else:  # 当标题深度小于HEADLEVEL时, 使用`#`表示
            lines.append('#' * head_count + ' ' + f'{path.parts[-1]}\n')
        
        line = []
        
        for mdfile in sorted(mdfiles, key=getH):
            
            line.append(f'[{mdfile.stem}](./{str(mdfile).replace("src/","",1)})')
            # 处理sidebar.ts
            root_list.append({
                'text': f'📝{mdfile.stem}',
                'link': f'{mdfile.parts[-1]}',
                # 'collapsible': True,
            })
        lines.append('✋'+'✋'.join(line)+'\n')

    else: # 如果全是目录, 则依次遍历 
        
        # 处理index.md
        if head_count >= HEADLEVEL:  # 4级目录使用缩进表示
            lines.append('\t'* (head_count-HEADLEVEL) + '-' + ' ' + f'{path.parts[-1]}' + '\n')
        else:  # 1~2级目录使用h1, h2表示
            lines.append('#'* head_count + ' ' + f'{path.parts[-1]}\n')

        for x in sorted(path.iterdir(), key=getH):
            new_dir = {
                'text': f'📂{x.parts[-1]}',
                'prefix': f'{x.parts[-1]}',
                # 'link': f'/{x.parts[-1]}',
                'collapsible': 'true',
                'children': []
            }
            
            if x.is_dir() and x != Path('./src/.vuepress'): 
                root_list.append(new_dir)
                func(x, head_count, new_dir['children'])
        # 处理sidebar.ts


## 生成首页: index.md

func(path, 0, root_list)

with open('./src/index.md','w',encoding='utf8') as f:
    lines[0]= '# 首页\n'
    f.write(''.join(lines))


## 生成侧边栏索引: sidebar.ts

content = [
    'import { sidebar } from "vuepress-theme-hope";',
    'export default sidebar({',
    f'"/": {root_list}',
    '});'
]

with open('./src/.vuepress/sidebar.ts','w',encoding='utf8') as f:
    f.write('\n'.join(content))



# 生成导航索引: navbar.ts


nav_list = []

path = Path('./src')
for dir in sorted(list(path.iterdir()), key=getH):
    if dir.is_dir() and dir != Path('./src/.vuepress'):
        new_dir = {
            'text': re.sub(r'^\d+', '', dir.parts[-1]),
            'link': f"/#{dir.parts[-1]}",
            'children': []
        }
        for dir_2 in sorted(list(Path(f'./src/{dir.parts[-1]}').iterdir()), key=getH):
            if dir_2.is_dir() and dir != Path('./src/.vuepress'):
                new_dir_2 ={
                    'text': re.sub(r'^\d+', '', dir_2.parts[-1]),
                    'link': f"/#{dir_2.parts[-1]}",
                }
                new_dir['children'].append(new_dir_2)
        if len(new_dir['children']) == 0:
            del new_dir['children']
        
        nav_list.append(new_dir)

content = [
    'import { navbar } from "vuepress-theme-hope";',
    'export default navbar(',
    f'{nav_list}',
    ');'
]

with open('./src/.vuepress/navbar.ts','w',encoding='utf8') as f:
    f.write('\n'.join(content))

