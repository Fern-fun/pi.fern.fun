from django.shortcuts import render

#INDEX PAGE
from main.mainPage import cpu, ram, obj_Disk, label__cpu, data__cpu, label__ram, data__ram, weather
#CURRENCY PAGE
import main.currency

# Create your views here.
def index(request,*args, **kwargs):
    print(request.user, request.META.get('REMOTE_ADDR'))
    city, temperature = weather(request.META.get('REMOTE_ADDR'))
    return render(request, 'main/index.html', {
        'city': city,
        'weather': '{}º'.format(temperature),
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