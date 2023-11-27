from pathlib import Path
path = Path('./src')
lines = []
root_list = []
def func(path, head_count, root_list):
    head_count += 1

    mdfiles = list(path.glob('./*.md'))
    # 如果包含.md文件且非index.md, 则拼贴.md文件名称
    if len(mdfiles) != 0 and (Path('./src/index.md') not in mdfiles):
        if head_count >= 3:
            lines.append('\t'* (head_count-3) + '-' + ' ' + f'{path.parts[-1]}' + ' ')
        else:
            lines.append('#'* head_count + ' ' + f'{path.parts[-1]}\n')
        line = []
        for mdfile in mdfiles:
            line.append(f'[{mdfile.stem}](./{str(mdfile).replace("src/","",1)})')
            # 处理sidebar.ts
            root_list.append({
                'text': mdfile.stem,
                'link': f'{mdfile.parts[-1]}',
                # 'collapsible': True,
            })
        lines.append('✋'+'✋'.join(line)+'\n')

    
    # 如果全是目录, 则依次遍历
    else:
        # 处理index.md
        if head_count >= 3:
            lines.append('\t'* (head_count-3) + '-' + ' ' + f'{path.parts[-1]}' + '\n')
        else:
            lines.append('#'* head_count + ' ' + f'{path.parts[-1]}\n')

        for x in path.iterdir():
            new_dir = {
                'text': x.parts[-1],
                'prefix': f'{x.parts[-1]}',
                # 'link': f'/{x.parts[-1]}',
                'collapsible': 'true',
                'children': []
            }
            
            if x.is_dir() and x != Path('./src/.vuepress'): 
                print(x)
                root_list.append(new_dir)
                func(x,head_count,new_dir['children'])
        # 处理sidebar.ts
        
func(path, 0, root_list)





with open('./src/index.md','w',encoding='utf8') as f:
    lines[0]= '# 首页\n'
    f.write(''.join(lines))
    
content = [
    'import { sidebar } from "vuepress-theme-hope";',
    'export default sidebar({',
    f'"/": {root_list}',
    '});'
]


with open('./src/.vuepress/sidebar.ts','w',encoding='utf8') as f:
    f.write('\n'.join(content))
