import sys
import requests
from bs4 import BeautifulSoup

api = sys.argv[1]
r = requests.get(api)
soup = BeautifulSoup(r.content,'html.parser')

table = []
tr = soup.find('tr',class_='firmware')
td = tr.find_all('td')
for x in td:
    table.append(" ".join(x.text.replace('&check','').split()))

print(table[1] + " " + table[2] + " " +  table[3])