from datetime import date
from main.currency import api_usd
import csv

def TSLA():
    try:
        with open('/home/web/django/data/stock/TSLA/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
                csv_reader = csv.reader(csv_file, delimiter=',')
                line_count = 0
                data = []
                for row in csv_reader:
                    data.append(row[0])
                return "{:,} zł".format((round(float(data[len(data) - 1]) * api_usd[0]['rates'][1]['mid'],2)))
    except:
        return ''

def TSLA_chart():
    label__tsla = ''
    data__tsla = ''
    time = '{}'.format(date.today().strftime("%d.%m.%Y"))
    try:
        with open('/home/web/django/data/stock/TSLA/{}.csv'.format(date.today().strftime("%d.%m.%Y")),encoding='utf-8') as csv_file:
                csv_reader = csv.reader(csv_file, delimiter=',')
                line_count = 0
                for row in csv_reader:
                    if line_count == 0:
                        line_count += 1
                    else:
                        label__tsla += '"{}",'.format(row[1])
                        data__tsla += '"{}",'.format(round(float(row[0]),2))
    except:
        pass
    return label__tsla, data__tsla, time