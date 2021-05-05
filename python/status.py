import os
import sys

def ds():
    pl = os.popen("ps -ef | grep 'Discord.js/Fern.fun' | grep -v grep")
    a = pl.read()
    if 'Discord.js/Fern.fun' in a:
        print(1)
    else:
        print(0)

def data():
    pl = os.popen("ps -ef | grep 'python3 /var/www/py/data' | grep -v grep")
    a = pl.read()
    if '/var/www/py/data' in a:
        print(1)
    else:
        print(0)

def stock():
    pl = os.popen("ps -ef | grep '/var/www/py/stockPrice.py' | grep -v grep")
    a = pl.read()
    if '/var/www/py/stockPrice.py' in a:
        print(1)
    else:
        print(0)

menu = sys.argv[1]

if menu == 'ds':
    ds()
elif menu == 'data':
    data()
elif menu == 'stock':
    stock()