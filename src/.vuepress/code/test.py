from pathlib import Path
path = Path('./src/index_1.md')

dir = Path('./src/test_test')
dir.parts[-1]

if '_' in dir.parts[-1]:
    dir.replace(dir.parent.joinpath(dir.parts[-1].split('_')[-1]))


path = Path('./src/index_1.md')
dir.replace()

if '_' in path.stem:
    lines = path.read_text().split('\n')
    lines[0] = '# ' + path.stem.split('_')[-1]
    path.write_text('\n'.join(lines))
    path.replace(path.with_stem(path.stem.split('_')[-1]))
    