from datetime import date
import csv

def macOS():
    with open('/var/www/django/data/update/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        data = []
        for row in csv_reader:
            data.append(row[0])
        return(data[len(data) - 1])


def iOS():
    with open('/var/www/django/data/update/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        data = []
        for row in csv_reader:
            data.append(row[1])
        return (data[len(data) - 1])

def factorio():
    with open('/var/www/django/data/update/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        data = []
        for row in csv_reader:
            data.append(row[2])
        return (data[len(data) - 1])

def lol():
    with open('/var/www/django/data/update/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        data = []
        for row in csv_reader:
            data.append(row[3])
        return (data[len(data) - 1])