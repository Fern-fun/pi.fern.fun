from sys import version
from django.shortcuts import render
from django.http import HttpResponse, response
from datetime import datetime
from gpiozero import CPUTemperature
import json, psutil, requests, csv

from api.other import btc, eth, doge, shib, currencies, tsla, ds, data, stock_status, fern, chart_ram_usage, chart_cpu_temp_data, chart_btc_data, chart_eth_data, chart_doge_data, chart_tsla_data, chart_cpu_usage_data

# Create your views here.
def home(request):
    response = ''
    array = []
    if request.method == 'GET':
        cpu = CPUTemperature().temperature
        cpu_usage = str(psutil.cpu_percent(interval=0.1))
        ram = psutil.virtual_memory()[2]
        disk = psutil.disk_usage('/')
        version = requests.get('https://raw.githubusercontent.com/Fern-fun/Fern.fun-Server/main/.version').text
        date = datetime.today().strftime("%d.%m.%Y")
        time = datetime.now().strftime("%H:%M")
        ram = psutil.virtual_memory()[2]
        response = json.dumps({'version': version, 'temp': "{}".format(cpu),'memory':"{}".format(ram), 'disk': '{}/{}GB'.format(round(disk.free / (1024.0 ** 3),0),round(disk.total / (1024.0 ** 3),0)), 'cpu usage': cpu_usage, 'date': date, 'time':time,})

    return HttpResponse(response, content_type='text/json')

def appupdate(request):
    response = ''
    if request.method == 'GET':
        with open('/home/web/malinka/backend/data/update/{}.csv'.format(datetime.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
            csv_reader = csv.reader(csv_file, delimiter=',')
            line_count = 0
            data = []
            for x in csv_reader:
                if line_count == 0:
                    line_count = 1;
                else:
                    data.append(x)
            response = json.dumps({'macOS': data[0][0], 'iOS': data[0][1], 'factorio': data[0][2], 'lol': data[0][3]})
    return HttpResponse(response, content_type='text/json')

def currency_pln(request):
    response = ''
    if request.method == 'GET':
        x,y,z = currencies()
        response = json.dumps({'btc': btc('pln'), 'eth': eth('pln'), 'doge': doge('pln'), 'shib': shib('pln'), 'usd': x, 'eur': y, 'gbp': z})
    
    return HttpResponse(response, content_type='text/json')

def currency_usd(request):
    response = ''
    if request.method == 'GET':
        x,y,z = currencies()
        response = json.dumps({'btc': btc('usd'), 'eth': eth('usd'), 'doge': doge('usd'), 'shib': shib('usd'), 'usd': x, 'eur': y, 'gbp': z})
    
    return HttpResponse(response, content_type='text/json')

def stock(request):
    response = ''
    if request.method == 'GET':
        response = json.dumps({'tsla': tsla()})
    return HttpResponse(response, content_type='text/json')

def status(request):
    response = ''
    if request.method == 'GET':
        response = json.dumps({'discord': ds(),'data': data(), 'stock': stock_status(),'fern': fern()})
    return HttpResponse(response, content_type='text/json')

def index(request):
    return render(request, 'main/index.html')

def chart_ram(request):
    if request.method == 'GET':
        label__ram, data__ram = chart_ram_usage()
        response = json.dumps({'label': label__ram, 'data': data__ram})
    return HttpResponse(response, content_type='text/json')

def chart_cpu_temp(request):
    if request.method == 'GET':
        label__cpu_temp, data__cpu_temp = chart_cpu_temp_data()
        response = json.dumps({'label': label__cpu_temp, 'data': data__cpu_temp})
    return HttpResponse(response, content_type='text/json')

def chart_cpu_usage(request):
    if request.method == 'GET':
        label__cpu_temp, data__cpu_temp = chart_cpu_usage_data()
        response = json.dumps({'label': label__cpu_temp, 'data': data__cpu_temp})
    return HttpResponse(response, content_type='text/json')

def chart_btc(request, name):
    response = ''
    if request.method == 'GET':
        if name != None and name != '':
            label__, data__ = chart_btc_data(name)
            response = json.dumps({'label': label__, 'data': data__})
    return HttpResponse(response, content_type='text/json')

def chart_eth(request, name):
    response = ''
    if request.method == 'GET':
        if name != None and name != '':
            label__, data__ = chart_eth_data(name)
            response = json.dumps({'label': label__, 'data': data__})
    return HttpResponse(response, content_type='text/json')

def chart_doge(request, name):
    response = ''
    if request.method == 'GET':
        if name != None and name != '':
            label__, data__ = chart_doge_data(name)
            response = json.dumps({'label': label__, 'data': data__})
    return HttpResponse(response, content_type='text/json')

def chart_tsla(request):
    response = ''
    if request.method == 'GET':
        label__, data__ = chart_tsla_data()
        response = json.dumps({'label': label__, 'data': data__})
    return HttpResponse(response, content_type='text/json')

