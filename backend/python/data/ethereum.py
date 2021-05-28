import requests
import json
from datetime import datetime
from datetime import date
from config import error_msg
import os.path

def eth_data():
    api_eth = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum'
    api_pln = 'http://api.nbp.pl/api/exchangerates/tables/A/?format=json'

    data = date.today().strftime("%d.%m.%Y")
    current_time = datetime.now().strftime("%H:%M")

    r = requests.get(url=api_eth)
    ra = requests.get(url=api_pln)

    json_eth = r.json()
    json_pln = ra.json() 
    eth_pln = json_eth[0]['current_price'] * json_pln[0]['rates'][1]['mid']
    eth_usd = json_eth[0]['current_price']
    currency_pln = str(eth_pln) + ',' + current_time + '\n'
    currency_usd = str(eth_usd) + ',' + current_time + '\n'

    path_pln = '/home/web/malinka/backend/data/currency/ethereum/pln/' + data + ".csv"
    path_usd = '/home/web/malinka/backend/data/currency/ethereum/usd/' + data + ".csv"

    if eth_usd == 0 or eth_usd < 0:
        error_msg('Any error with eth API', 'Ethereum cost: {b} \n API: {url}'.format(b=eth_usd,url=api_eth))
    elif json_pln[0]['rates'][1]['mid'] == 0 or json_pln[0]['rates'][1]['mid'] < 0:
        error_msg('Any error with USD API', 'USD cost: {b} \n API: {url}'.format(b=eth_usd,url=api_pln))
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