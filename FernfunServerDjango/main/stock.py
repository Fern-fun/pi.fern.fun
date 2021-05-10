from datetime import date
import csv

def TSLA():
    try:
        with open('/var/www/django/data/stock/TSLA/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
                csv_reader = csv.reader(csv_file, delimiter=',')
                line_count = 0
                data = []
                for row in csv_reader:
                    data.append(row[0])
                return (data[len(data) - 1])
    except:
        pass