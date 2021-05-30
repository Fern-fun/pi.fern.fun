import requests, csv, os
from datetime import date
from bs4 import BeautifulSoup

api_usd = requests.get('http://api.nbp.pl/api/exchangerates/tables/A/?format=json').json()

def currencies():
    api_usd = requests.get('http://api.nbp.pl/api/exchangerates/tables/A/?format=json').json()
    return "{:,}".format(round(api_usd[0]['rates'][1]['mid'],2)), "{:,}".format(round(api_usd[0]['rates'][7]['mid'],2)), "{:,}".format(round(api_usd[0]['rates'][10]['mid'],2))

def btc(x):
    if x in 'pln':
        try:
            with open('/home/web/malinka/backend/data/currency/bitcoin/pln/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
                    csv_reader = csv.reader(csv_file, delimiter=',')
                    line_count = 0
                    data = []
                    for row in csv_reader:
                        data.append(row[0])
                    return "{:,}".format(round(float(data[len(data) - 1]),2))
        except:
            return ''
    else:
        try:
            with open('/home/web/malinka/backend/data/currency/bitcoin/usd/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
                    csv_reader = csv.reader(csv_file, delimiter=',')
                    line_count = 0
                    data = []
                    for row in csv_reader:
                        data.append(row[0])
                    return "{:,}".format(round(float(data[len(data) - 1]),2))
        except:
            return ''

def eth(x):
    if x in 'pln':
        try:
            with open('/home/web/malinka/backend/data/currency/ethereum/pln/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
                    csv_reader = csv.reader(csv_file, delimiter=',')
                    line_count = 0
                    data = []
                    for row in csv_reader:
                        data.append(row[0])
                    return "{:,}".format(round(float(data[len(data) - 1]),2))
        except:
            return ''
    else:
        try:
            with open('/home/web/malinka/backend/data/currency/ethereum/usd/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
                    csv_reader = csv.reader(csv_file, delimiter=',')
                    line_count = 0
                    data = []
                    for row in csv_reader:
                        data.append(row[0])
                    return "{:,}".format(round(float(data[len(data) - 1]),2))
        except:
            return ''

def doge(x):
    if x in 'pln':
        try:
            with open('/home/web/malinka/backend/data/currency/dogecoin/pln/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
                    csv_reader = csv.reader(csv_file, delimiter=',')
                    line_count = 0
                    data = []
                    for row in csv_reader:
                        data.append(row[0])
                    return "{:,}".format(round(float(data[len(data) - 1]),2))
        except:
            return ''
    else:
        try:
            with open('/home/web/malinka/backend/data/currency/dogecoin/usd/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
                    csv_reader = csv.reader(csv_file, delimiter=',')
                    line_count = 0
                    data = []
                    for row in csv_reader:
                        data.append(row[0])
                    return "{:,}".format(round(float(data[len(data) - 1]),2))
        except:
            return ''

def shib(x):
    if x in 'pln':
        try:
            with open('/home/web/malinka/backend/data/currency/shib/pln/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
                    csv_reader = csv.reader(csv_file, delimiter=',')
                    line_count = 0
                    data = []
                    for row in csv_reader:
                        data.append(row[0])
                    return "{0:.8f}".format(round(float(data[len(data) - 1]),8))
        except:
            return ''
    else:
        try:
            with open('/home/web/malinka/backend/data/currency/shib/usd/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
                    csv_reader = csv.reader(csv_file, delimiter=',')
                    line_count = 0
                    data = []
                    for row in csv_reader:
                        data.append(row[0])
                    return "{0:.8f}".format(round(float(data[len(data) - 1]),8))
        except:
            return ''

def stocks():
    tsla=aapl=msft=''
    with open('/home/web/malinka/backend/data/stock/TSLA/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
            csv_reader = csv.reader(csv_file, delimiter=',')
            line_count = 0
            data = []
            for row in csv_reader:
                data.append(row[0])
            tsla = "{:,}".format(round(float(data[len(data) - 1])))
        
    with open('/home/web/malinka/backend/data/stock/AAPL/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
            csv_reader = csv.reader(csv_file, delimiter=',')
            line_count = 0
            data = []
            for row in csv_reader:
                data.append(row[0])
            aapl = "{:,}".format(round(float(data[len(data) - 1])))
    
    with open('/home/web/malinka/backend/data/stock/MSFT/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
            csv_reader = csv.reader(csv_file, delimiter=',')
            line_count = 0
            data = []
            for row in csv_reader:
                data.append(row[0])
            msft = "{:,}".format(round(float(data[len(data) - 1])))
    
    return tsla, aapl, msft


def ds():
    pl = os.popen("ps -ef | grep 'Discord.js/Fern.fun' | grep -v grep")
    a = pl.read()
    if 'Discord.js/Fern.fun' in a:
        return  'Active'
    else:
        return 'Inactive'

def data():
    pl = os.popen("ps -ef | grep 'python3 /home/web/malinka/backend/python/data/' | grep -v grep")
    a = pl.read()
    if '/home/web/malinka/backend/python/data/' in a:
        return  'Active'
    else:
        return 'Inactive'

def stock_status():
    pl = os.popen("ps -ef | grep '/home/web/malinka/backend/python/data/stock.py' | grep -v grep")
    a = pl.read()
    if '/home/web/malinka/backend/python/data/stock.py' in a:
        return  'Active'
    else:
        return 'Inactive'

def fern():
    api = requests.get('http://fern.fun')
    api = BeautifulSoup(api.content,'html.parser')
    title = api.find('title')
    if 'Fern.fun' in title.text:
        return 'Active'
    else:
        return 'Inactive'

def chart_ram_usage():
    label__ = []
    data__ = []
    try:
        with open('/home/web/malinka/backend/data/ram/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
                csv_reader = csv.reader(csv_file, delimiter=',')
                line_count = 0
                for row in csv_reader:
                    if line_count == 0:
                        line_count += 1
                    else:
                        label__.append(row[1])
                        data__.append(row[0])
    except:
        pass
    return label__,data__

def chart_cpu_temp_data():
    label__ = []
    data__ = []
    try:
        with open('/home/web/malinka/backend/data/temp/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
                csv_reader = csv.reader(csv_file, delimiter=',')
                line_count = 0
                for row in csv_reader:
                    if line_count == 0:
                        line_count += 1
                    else:
                        label__.append(row[1])
                        data__.append(row[0])
    except:
        pass
    return label__,data__

def chart_cpu_usage_data():
    label__ = []
    data__ = []
    try:
        with open('/home/web/malinka/backend/data/cpu/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
                csv_reader = csv.reader(csv_file, delimiter=',')
                line_count = 0
                for row in csv_reader:
                    if line_count == 0:
                        line_count += 1
                    else:
                        label__.append(row[1])
                        data__.append(row[0])
    except:
        pass
    return label__,data__


def chart_btc_data(data):
    label__ = []
    data__ = []
    try:
        with open('/home/web/malinka/backend/data/currency/bitcoin/{}/{}.csv'.format(data,date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
                csv_reader = csv.reader(csv_file, delimiter=',')
                line_count = 0
                for row in csv_reader:
                    if line_count == 0:
                        line_count += 1
                    else:
                        label__.append(row[1])
                        data__.append(row[0])
    except:
        pass
    return label__,data__

def chart_eth_data(data):
    label__ = []
    data__ = []
    try:
        with open('/home/web/malinka/backend/data/currency/ethereum/{}/{}.csv'.format(data,date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
                csv_reader = csv.reader(csv_file, delimiter=',')
                line_count = 0
                for row in csv_reader:
                    if line_count == 0:
                        line_count += 1
                    else:
                        label__.append(row[1])
                        data__.append(str(round(float(row[0]),2)))
    except:
        pass
    return label__,data__

def chart_doge_data(data):
    label__ = []
    data__ = []
    try:
        with open('/home/web/malinka/backend/data/currency/dogecoin/{}/{}.csv'.format(data,date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
                csv_reader = csv.reader(csv_file, delimiter=',')
                line_count = 0
                for row in csv_reader:
                    if line_count == 0:
                        line_count += 1
                    else:
                        label__.append(row[1])
                        data__.append(row[0])
    except:
        pass
    return label__,data__

def chart_stock_data(index):
    label__ = []
    data__ = []
    if index.lower() == 'tsla':
        try:
            with open('/home/web/malinka/backend/data/stock/TSLA/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
                    csv_reader = csv.reader(csv_file, delimiter=',')
                    line_count = 0
                    for row in csv_reader:
                        if line_count == 0:
                            line_count += 1
                        else:
                            label__.append(row[1])
                            data__.append(row[0])
        except:
            pass
    elif index.lower()  == 'aapl':
        try:
            with open('/home/web/malinka/backend/data/stock/AAPL/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
                    csv_reader = csv.reader(csv_file, delimiter=',')
                    line_count = 0
                    for row in csv_reader:
                        if line_count == 0:
                            line_count += 1
                        else:
                            label__.append(row[1])
                            data__.append(row[0])
        except:
            pass
    elif index.lower()  == 'msft':
        try:
            with open('/home/web/malinka/backend/data/stock/MSFT/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
                    csv_reader = csv.reader(csv_file, delimiter=',')
                    line_count = 0
                    for row in csv_reader:
                        if line_count == 0:
                            line_count += 1
                        else:
                            label__.append(row[1])
                            data__.append(row[0])
        except:
            pass
    return label__,data__