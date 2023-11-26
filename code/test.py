from pathlib import Path
path = Path('../src')
lines = []
def func(path, head_count):
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
            # print(mdfile.stem, f'./{str(mdfile).replace("src/","",1)}')
        lines.append('✋'+'✋'.join(line)+'\n')
    # 如果全是目录, 则依次遍历
    else:
        if head_count >= 3:
            lines.append('\t'* (head_count-3) + '-' + ' ' + f'{path.parts[-1]}' + '\n')
        else:
            lines.append('#'* head_count + ' ' + f'{path.parts[-1]}\n')

        for x in path.iterdir():
             if x.is_dir() and x != Path('./src/.vuepress'): 
                 print(x)
                 func(x,head_count)

func(path, 0)

with open('../src/index.md','w',encoding='utf8') as f:
    f.write(''.join(lines))