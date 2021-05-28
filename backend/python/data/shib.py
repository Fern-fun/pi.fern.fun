import requests, os, math
from bs4 import BeautifulSoup
from datetime import datetime, time

def GetCoinCost(name):
    if name != None and name != '':
        try:
            r = requests.get('https://coinmarketcap.com/currencies/{}/'.format(name))
            soup = BeautifulSoup(r.content, "html.parser")
            cost = soup.find('div',class_="priceValue___11gHJ")
            return cost.text.replace('$','')
        except:
            return 'The {} name is invalid'.format(name)

def shib_data():
    usd = requests.get('http://api.nbp.pl/api/exchangerates/tables/A/?format=json').json()
    cost = float(GetCoinCost('shiba-inu'))
    data = datetime.today().strftime("%d.%m.%Y")
    time = datetime.now().strftime("%H:%M")
    print("{0:.10f}".format(cost),"{0:.10f}".format(cost * usd[0]['rates'][1]['mid']))
    try:
        if os.path.isfile('/home/web/malinka/backend/data/currency/shib/pln/{}.csv'.format(data)) and os.path.isfile('/home/web/malinka/backend/data/currency/shib/usd/{}.csv'.format(data)):
            with open('/home/web/malinka/backend/data/currency/shib/pln/{}.csv'.format(data), 'a+') as file_pln, open('/home/web/malinka/backend/data/currency/shib/usd/{}.csv'.format(data), 'a+') as file_usd:
                file_pln.write('{},{} \n'.format("{0:.11f}".format(cost * usd[0]['rates'][1]['mid']),time))
                file_usd.write('{},{} \n'.format("{0:.11f}".format(cost),time))
        else:
            x = open('/home/web/malinka/backend/data/currency/shib/pln/{}.csv'.format(data),'a+').write('currency, time\n')
            y = open('/home/web/malinka/backend/data/currency/shib/usd/{}.csv'.format(data),'a+').write('currency, time\n')
            with open('/home/web/malinka/backend/data/currency/shib/pln/{}.csv'.format(data), 'a+') as file_pln, open('/home/web/malinka/backend/data/currency/shib/usd/{}.csv'.format(data), 'a+') as file_usd:
                file_pln.write('{},{} \n'.format("{0:.11f}".format(cost * usd[0]['rates'][1]['mid']),time))
                file_usd.write('{},{} \n'.format("{0:.11f}".format(cost),time))
    except EOFError as error:
        pass
