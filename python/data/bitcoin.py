import requests
import json
from datetime import datetime
from datetime import date
from config import error_msg

def bitcoin_data():
    api_btc = 'https://blockchain.info/ticker'
    api_pln = 'http://api.nbp.pl/api/exchangerates/tables/A/?format=json'

    data = date.today().strftime("%d.%m.%Y")
    current_time = datetime.now().strftime("%H:%M")

    r = requests.get(url=api_btc)
    ra = requests.get(url=api_pln)

    json_btc = r.json()
    json_pln = ra.json() 
    bitcoin_pln = json_btc['USD']['last'] * json_pln[0]['rates'][1]['mid']
    bitcoin_usd = json_btc['USD']['last']
    currency_pln = str(bitcoin_pln) + '/' + current_time + '\n'
    currency_usd = str(bitcoin_usd) + '/' + current_time + '\n'

    path_pln = '/var/www/html/[data]/currency/bitcoin/pln/' + data + ".txt"
    path_usd = '/var/www/html/[data]/currency/bitcoin/usd/' + data + ".txt"

    if bitcoin_usd == 0 or bitcoin_usd < 0:
         error_msg('Any error with bitcoin API', 'Bitcoin cost: {b} \n API: {url}'.format(b=bitcoin_usd,url=api_btc))
    elif json_pln[0]['rates'][1]['mid'] == 0 or json_pln[0]['rates'][1]['mid'] < 0:
        error_msg('Any error with USD API', 'USD cost: {b} \n API: {url}'.format(b=bitcoin_usd,url=api_pln))
    else:
        try:
            with open(path_pln, 'a+') as file_pln, open(path_usd, 'a+') as file_usd:
                file_pln.write(currency_pln)
                file_usd.write(currency_usd)
        except EOFError as error:
            error_msg('Writing to file has error', error)

