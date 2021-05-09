from django.shortcuts import render

#INDEX PAGE
from main.mainPage import cpu, ram, obj_Disk, label__cpu, data__cpu, label__ram, data__ram
#CURRENCY PAGE
import main.currency
#STATUS
import main.status
#APPUPDATE
import main.appupdate
#STOCK
import main.stock


# Create your views here.
def index(request,*args, **kwargs):
    print(request.user, request.META.get('REMOTE_ADDR'))
    return render(request, 'main/index.html', {
        
        'cpu': "{}º".format(round(cpu.temperature, 1)),
        'ram': '{}%'.format(ram),
        'disc': '{}/{}GB'.format(round(obj_Disk.free / (1024.0 ** 3),0),round(obj_Disk.total / (1024.0 ** 3),0)),
        'label_cpu': label__cpu,
        'data_cpu': data__cpu,
        'label_ram': label__ram,
        'data_ram': data__ram,
        })

def currency(request,*args, **kwargs):
    return render(request, 'main/currency.html', {
        'usd': main.currency.usd,
        'eur': main.currency.eur,
        'btc_cost': main.currency.btc_cost,
        'eth_cost': main.currency.eth_cost,
        'doge_cost': main.currency.doge_cost,
        'gbp': main.currency.gbp,
    })

def status(request,*args, **kwargs):
    return render(request, 'main/status.html', {
        'Fern': main.status.fern(),
        'DCS': main.status.data(),
        'SDS': main.status.stock(),
        'DS': main.status.ds(),
    })

def appupdate(request,*args, **kwargs):
    return render(request, 'main/appupdate.html', {
        'iOS': main.appupdate.macOS(),
        'factorio': main.appupdate.factorio(),
        'lol': main.appupdate.lol(),
        'macOS': main.appupdate.macOS(),
    })

def stock(request, *args, **kwargs):
    return render(request, 'main/stock.html', {
        'TSLA': str(round(float(main.stock.TSLA()) * main.currency.api_usd[0]['rates'][1]['mid'],2)),
    })

