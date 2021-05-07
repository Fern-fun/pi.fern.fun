import requests

api_usd = requests.get('http://api.nbp.pl/api/exchangerates/tables/A/?format=json').json()
usd = "{:,} zł".format(round(api_usd[0]['rates'][1]['mid'],2))

eur = "{:,} zł".format(round(api_usd[0]['rates'][7]['mid'],2))

api_btc = requests.get('https://blockchain.info/ticker').json()
btc_cost = "{:,} zł".format(round(api_btc['USD']['last'] * api_usd[0]['rates'][1]['mid'],1))

api_eth = requests.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum').json()
eth_cost = "{:,} zł".format(round(api_eth[0]['current_price'] * api_usd[0]['rates'][1]['mid'],1))

api_doge = requests.get('https://sochain.com//api/v2/get_price/DOGE/USD').json()
doge_cost = "{:,} zł".format(round(float(api_doge['data']['prices'][0]['price']) * float(api_usd[0]['rates'][1]['mid']),1))

gbp = "{:,} zł".format(round(api_usd[0]['rates'][10]['mid'],2))