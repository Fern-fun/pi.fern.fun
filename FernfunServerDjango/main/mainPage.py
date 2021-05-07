from gpiozero import CPUTemperature
import psutil
from datetime import date
import requests
import json
import csv

ram = psutil.virtual_memory()[2]
cpu = CPUTemperature()
obj_Disk = psutil.disk_usage('/')
disc = "%a/%f" % (obj_Disk.free / (1024.0 ** 3),obj_Disk.total / (1024.0 ** 3))
label__cpu = ''
data__cpu = ''
label__ram = ''
data__ram = ''
city = ''

#RAM USAGE
with open('/var/www/django/data/ram/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        user = []
        for row in csv_reader:
            if line_count == 0:
                line_count += 1
            else:
                label__ram += '"{}",'.format(row[1])
                data__ram += '"{}",'.format(row[0])

#CPU TEMP
with open('/var/www/django/data/temp/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file1:
        csv_reader = csv.reader(csv_file1, delimiter=',')
        line_count = 0
        user = []
        for row in csv_reader:
            if line_count == 0:
                line_count += 1
            else:
                label__cpu += '"{}",'.format(row[1])
                data__cpu += '"{}",'.format(row[0])

def weather(ip):
    api = requests.get('https://freegeoip.app/json/{}'.format(str(ip)))
    json = api.json()
    api_weather = requests.get('http://api.openweathermap.org/data/2.5/weather?appid={key}&q={city},{countryname}&units=metric'.format(city=json['city'],countryname=json['country_code'],key=''))
    json_weather = api_weather.json()
    return json['city'], json_weather['main']['temp']