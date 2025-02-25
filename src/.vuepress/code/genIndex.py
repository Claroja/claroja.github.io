from pathlib import Path
from pypinyin import pinyin, Style
from itertools import chain
import re
import shutil
import os

path = Path('./src')
lines = []
root_list = []

HEADLEVEL = 4 # 从4级目录开始，使用列表表示



# 删除索引目录文件(在计算目录时, 不应该把索引计算在内, 所以要先删除)
indexDir_path = Path('./src/index')
if indexDir_path.exists(): shutil.rmtree(indexDir_path)



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
            
            line.append(f'[{mdfile.stem}](/{str(mdfile).replace("src/","",1)})')
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




func(path, 0, root_list)

# with open('./src/index.md','w',encoding='utf8') as f:
#     lines[0]= '# 首页\n'
#     f.write(''.join(lines))


## 生成首页: index.md

### 定义保存文件的文件夹
save_folder = './src/index'
### 如果文件夹不存在，则创建它
if not os.path.exists(save_folder):
    os.makedirs(save_folder)

current_title = None
current_content = []


def reduce_hash_count(line):
    if line.startswith('#'):
        return line[1:]
    return line


del lines[0]


for line in lines:
    if line.startswith('## '):
        # 如果已经有当前标题，说明之前的内容块结束，保存到文件
        if current_title:
            file_path = os.path.join(save_folder, f"{current_title.strip()}.md")
            with open(file_path, 'w', encoding='utf-8') as f:
                for content_line in current_content:
                    f.write(reduce_hash_count(content_line))
            current_content = []
        # 处理当前标题行，将 # 数量减 1 后添加到内容中
        current_content.append(line)
        # 更新当前标题
        current_title = line[2:].strip()
    else:
        # 如果不是标题行，将内容添加到当前内容块
        current_content.append(line)

# 处理最后一个内容块
if current_title and current_content:
    file_path = os.path.join(save_folder, f"{current_title.strip()}.md")
    with open(file_path, 'w', encoding='utf-8') as f:
        for content_line in current_content:
            f.write(reduce_hash_count(content_line))





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
    if dir.is_dir() and dir != Path('./src/.vuepress') and dir != Path('./src/index'):
        new_dir = {
            'text': re.sub(r'^\d+', '', dir.parts[-1]),
            'link': f"/index/{dir.parts[-1]}.md",
            'children': []
        }
        # 导航栏不要二级了
        # for dir_2 in sorted(list(Path(f'./src/{dir.parts[-1]}').iterdir()), key=getH):
        #     if dir_2.is_dir() and dir != Path('./src/.vuepress'):
        #         new_dir_2 ={
        #             'text': re.sub(r'^\d+', '', dir_2.parts[-1]),
        #             'link': f"/#{dir_2.parts[-1]}",
        #         }
        #         new_dir['children'].append(new_dir_2)
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

