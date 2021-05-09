from bs4 import BeautifulSoup
import requests
from datetime import datetime
import os

def dataSave():
    data = datetime.today().strftime("%d.%m.%Y")
    current_time = datetime.now().strftime("%H:%M")
    
    r = requests.get('https://ipsw.me/MacBookPro17,1')
    soup = BeautifulSoup(r.content,'html.parser')

    table = []
    tr = soup.find('tr',class_='firmware')
    td = tr.find_all('td')
    for x in td:
        table.append(" ".join(x.text.replace('&check','').split()))
    macOS = "{} {} {}".format(table[1],table[2],table[3])
    r = requests.get('https://ipsw.me/iPhone13,3')
    soup = BeautifulSoup(r.content,'html.parser')

    table = []
    tr = soup.find('tr',class_='firmware')
    td = tr.find_all('td')
    for x in td:
        table.append(" ".join(x.text.replace('&check','').split()))
    iOS = "{} {} {}".format(table[1],table[2],table[3])

    api = requests.get('https://factorio.com/')
    soup = BeautifulSoup(api.content,'html.parser')
    update = soup.find('dd', class_='text-right')
    factorio = update.text
    
    api = requests.get('https://ddragon.leagueoflegends.com/api/versions.json').json()
    lol = api[0]
    
    path = '../../data/update/' + data + ".csv"
    
    if os.path.isfile(path):
        with open(path, 'a+') as file:
            file.write(" ".join(str(macOS + "," + iOS + "," + factorio + "," + lol + ',' + current_time + '\n').split()))
    else:
        x = open(path,'a+').write('macOS, iOS, factorio, lol, date \n')
        with open(path, 'a+') as file:
            file.write(" ".join(str(macOS + "," + iOS + "," + factorio + "," + lol + ',' + current_time + '\n').split()))

