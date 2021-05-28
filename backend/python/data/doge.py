import requests
import json
from datetime import datetime
from datetime import date
from config import error_msg
import os.path

def doge_data():
    api_doge = requests.get('https://sochain.com//api/v2/get_price/DOGE/USD').json()
    api_pln = requests.get('http://api.nbp.pl/api/exchangerates/tables/A/?format=json').json()

    data = date.today().strftime("%d.%m.%Y")
    current_time = datetime.now().strftime("%H:%M")

    doge_pln = float(api_doge['data']['prices'][0]['price']) * api_pln[0]['rates'][1]['mid']
    doge_usd = float(api_doge['data']['prices'][0]['price'])
    currency_pln = str(doge_pln) + ',' + current_time + '\n'
    currency_usd = str(doge_usd) + ',' + current_time + '\n'

    path_pln = '/home/web/malinka/backend/data/currency/dogecoin/pln/' + data + ".csv"
    path_usd = '/home/web/malinka/backend/data/currency/dogecoin/usd/' + data + ".csv"

    if doge_usd == 0 or doge_usd < 0:
        error_msg('Any error with eth API', 'Ethereum cost: {b} \n API: "https://sochain.com//api/v2/get_price/DOGE/USD"'.format(b=doge_usd))
    elif api_pln[0]['rates'][1]['mid'] == 0 or api_pln[0]['rates'][1]['mid'] < 0:
        error_msg('Any error with USD API', 'USD cost: {b} \n API: "https://sochain.com//api/v2/get_price/DOGE/USD"'.format(b=doge_usd))
    else:
        try:
            if os.path.isfile(path_pln) and os.path.isfile(path_usd):
                with open(path_pln, 'a+') as file_pln, open(path_usd, 'a+') as file_usd:
                    file_pln.write(currency_pln)
                    file_usd.write(currency_usd)
            else:
                x = open(path_pln,'a+').write('currency, time\n')
                y = open(path_usd,'a+').write('currency, time\n')
                with open(path_pln, 'a+') as file_pln, open(path_usd, 'a+') as file_usd:
                    file_pln.write(currency_pln)
                    file_usd.write(currency_usd)
        except EOFError as error:
            error_msg('Writing to file has error', error)