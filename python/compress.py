
path = ['../index.php','../data/currency/index.php','../data/currency/charts/index.php','../data/stock/index.php','../data/update/index.php','../data/currency/fun.php','../data/stock/fun.php','../data/update/fun.php', '../php/functions.php']

for x in path:
    html = open(x,'r+').readlines()
    cHtml = ''

    for y in html:
        y = " ".join(y.split())
        if '<?php' in y:
            cHtml += y.replace('<?php','<?php ')
        elif '?>' in y:
            cHtml += y.replace('?>',' ?>')
        else:
            cHtml += y
    
    x = '../' + x.replace('..','src')
    html = open(x,'w+').write("".join(cHtml.splitlines()))