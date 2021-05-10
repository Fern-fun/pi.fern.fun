import requests
import csv
from datetime import date

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

def btc_chart():
    label__btc = ''
    data__btc = ''
    time = '{}'.format(date.today().strftime("%d.%m.%Y"))
    try:
        with open('/var/www/django/data/currency/bitcoin/pln/{}.csv'.format(date.today().strftime("%d.%m.%Y")),encoding='utf-8') as csv_file:
                csv_reader = csv.reader(csv_file, delimiter=',')
                line_count = 0
                for row in csv_reader:
                    if line_count == 0:
                        line_count += 1
                    else:
                        label__btc += '"{}",'.format(row[1])
                        data__btc += '"{}",'.format(round(float(row[0]),2))
    except:
        pass
    return label__btc,data__btc,time

def eth_chart():
    label__eth = ''
    data__eth = ''
    
    with open('/var/www/django/data/currency/ethereum/pln/{}.csv'.format(date.today().strftime("%d.%m.%Y")),encoding='utf-8') as csv_file:
            csv_reader = csv.reader(csv_file, delimiter=',')
            line_count = 0
            for row in csv_reader:
                if line_count == 0:
                    line_count += 1
                else:
                    label__eth += '"{}",'.format(row[1])
                    data__eth += '"{}",'.format(round(float(row[0]),2))
    
    return label__eth, data__eth

def doge_chart():
    label__doge = ''
    data__doge = ''
    
    with open('/var/www/django/data/currency/dogecoin/pln/{}.csv'.format(date.today().strftime("%d.%m.%Y")),encoding='utf-8') as csv_file:
            csv_reader = csv.reader(csv_file, delimiter=',')
            line_count = 0
            for row in csv_reader:
                if line_count == 0:
                    line_count += 1
                else:
                    label__doge += '"{}",'.format(row[1])
                    data__doge += '"{}",'.format(round(float(row[0]),2))
    
    return label__doge, data__doge