from datetime import date
from main.currency import api_usd
import csv

def TSLA():
    try:
        with open('/var/www/django/data/stock/TSLA/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
                csv_reader = csv.reader(csv_file, delimiter=',')
                line_count = 0
                data = []
                for row in csv_reader:
                    data.append(row[0])
                return (round(float(data[len(data) - 1]) * api_usd[0]['rates'][1]['mid'],2))
    except:
        return ''