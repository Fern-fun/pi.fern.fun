
path = []

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