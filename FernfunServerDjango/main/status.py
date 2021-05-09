import os
import sys
import requests
from bs4 import BeautifulSoup

def ds():
    pl = os.popen("ps -ef | grep 'Discord.js/Fern.fun' | grep -v grep")
    a = pl.read()
    if 'Discord.js/Fern.fun' in a:
        return  '<p class="center" id="ds" style="color:green;">Active</p>'
    else:
        return '<p class="center" id="ds" style="color:red;">Inactive</p>'

def data():
    pl = os.popen("ps -ef | grep 'python3 /var/www/py/data' | grep -v grep")
    a = pl.read()
    if '/var/www/py/data' in a:
        return  '<p class="center" id="data" style="color:green;">Active</p>'
    else:
        return '<p class="center" id="data" style="color:red;">Inactive</p>'

def stock():
    pl = os.popen("ps -ef | grep '/var/www/py/stockPrice.py' | grep -v grep")
    a = pl.read()
    if '/var/www/py/stockPrice.py' in a:
        return  '<p class="center" id="stock" style="color:green;">Active</p>'
    else:
        return '<p class="center" id="stock" style="color:red;">Inactive</p>'

def fern():
    api = requests.get('http://fern.fun')
    api = BeautifulSoup(api.content,'html.parser')
    title = api.find('title')
    if 'Fern.fun' in title.text:
        return '<p class="center" style="color:green;"> Active</p>'
    else:
        return '<p class="center" style="color:red;"> Inactive</p>'