import requests
import csv
from datetime import date
api_usd = requests.get('http://api.nbp.pl/api/exchangerates/tables/A/?format=json').json()

def currencies():
    api_usd = requests.get('http://api.nbp.pl/api/exchangerates/tables/A/?format=json').json()
    return "{:,} zł".format(round(api_usd[0]['rates'][1]['mid'],2)), "{:,} zł".format(round(api_usd[0]['rates'][7]['mid'],2)), "{:,} zł".format(round(api_usd[0]['rates'][10]['mid'],2))

def btc():
    try:
        with open('/var/www/django/data/currency/bitcoin/pln/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
                csv_reader = csv.reader(csv_file, delimiter=',')
                line_count = 0
                data = []
                for row in csv_reader:
                    data.append(row[0])
                return "{:,} zł".format(round(float(data[len(data) - 1]),2))
    except:
        return ''

def eth():
    try:
        with open('/var/www/django/data/currency/ethereum/pln/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
                csv_reader = csv.reader(csv_file, delimiter=',')
                line_count = 0
                data = []
                for row in csv_reader:
                    data.append(row[0])
                return "{:,} zł".format(round(float(data[len(data) - 1]),2))
    except:
        return ''

def doge():
    try:
        with open('/var/www/django/data/currency/dogecoin/pln/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
                csv_reader = csv.reader(csv_file, delimiter=',')
                line_count = 0
                data = []
                for row in csv_reader:
                    data.append(row[0])
                return "{:,} zł".format(round(float(data[len(data) - 1]),2))
    except:
        return ''

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

