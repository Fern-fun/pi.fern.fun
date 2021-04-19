from gpiozero import CPUTemperature
from datetime import datetime
from datetime import date
import os
import time
import psutil

import time
from datetime import datetime
from datetime import date
import requests
import json

api = 'https://blockchain.info/ticker'
api2 = 'http://api.nbp.pl/api/exchangerates/tables/A/?format=json'
api3 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum'

while True:
    
    cpu = CPUTemperature()
    ram = psutil.virtual_memory()[2]

    today = date.today()
    now = datetime.now()

    data = today.strftime("%d.%m.%Y")
    current_time = now.strftime("%H:%M")

    url = '/var/www/html/[data]/temp/' + data + ".txt"
    url2 = '/var/www/html/[data]/ram/' + data + ".txt"

    cpu_temp = str(cpu.temperature) + '/' + current_time + '\n'
    ram_stat = str(ram) + '/' + current_time + '\n'

    f = open(url, 'a+')  # open file in append mode
    f.write(cpu_temp)
    f.close()

    f = open(url2,'a+')
    f.write(ram_stat)
    f.close()

    r = requests.get(url=api)
    ra = requests.get(url=api2)
    json = r.json()
    json2 = ra.json() 
    bitcoin = json['USD']['last'] * json2[0]['rates'][1]['mid']
    bitcoin2 = json['USD']['last']

    rb = requests.get(url=api3)
    json3 = rb.json()
    eth_pln = json3[0]['current_price'] * json2[0]['rates'][1]['mid']
    eth_usd = json3[0]['current_price']
    
    url3 = '/var/www/html/[data]/currency/bitcoin/pln/' + data + ".txt"
    url4 = '/var/www/html/[data]/currency/bitcoin/usd/' + data + ".txt"

    url5 = '/var/www/html/[data]/currency/ethereum/pln/' + data + ".txt"
    url6 = '/var/www/html/[data]/currency/ethereum/usd/' + data + ".txt"
    
    currency1 = str(bitcoin) + 'zł/' + current_time + '\n'
    currency2 = str(bitcoin2) + '$/' + current_time + '\n'

    currency3 = str(eth_pln) + 'zł/' + current_time + '\n'
    currency4 = str(eth_usd) + '$/' + current_time + '\n'
    
    f = open(url3, 'a+')  # open file in append mode
    f.write(currency1)
    f.close()

    f = open(url4,'a+')
    f.write(currency2)
    f.close()

    f = open(url5, 'a+')  # open file in append mode
    f.write(currency3)
    f.close()

    f = open(url6,'a+')
    f.write(currency4)
    f.close()

    time.sleep(900)