from gpiozero import CPUTemperature
import psutil
from datetime import date
import requests
import json
import csv


def ram():
    ram = psutil.virtual_memory()[2]
    return '{}%'.format(ram)

def cpu():
    cpu = CPUTemperature()
    return "{}º".format(round(cpu.temperature, 1))

def disk():
    obj_Disk = psutil.disk_usage('/')
    return '{}/{}GB'.format(round(obj_Disk.free / (1024.0 ** 3),0),round(obj_Disk.total / (1024.0 ** 3),0))

def version():
    return requests.get('https://raw.githubusercontent.com/Fern-fun/Fern.fun-Server/main/.version').text

#RAM USAGE
def ram_usage():
    label__ram = ''
    data__ram = ''
    try:
        with open('/home/web/django/data/ram/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file:
                csv_reader = csv.reader(csv_file, delimiter=',')
                line_count = 0
                user = []
                for row in csv_reader:
                    if line_count == 0:
                        line_count += 1
                    else:
                        label__ram += '"{}",'.format(row[1])
                        data__ram += '"{}",'.format(row[0])
    except:
        pass
    return label__ram,data__ram

#CPU TEMP
def cpu_temp():
    label__cpu = ''
    data__cpu = ''
    try:
        with open('/home/web/django/data/temp/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file1:
                csv_reader = csv.reader(csv_file1, delimiter=',')
                line_count = 0
                user = []
                for row in csv_reader:
                    if line_count == 0:
                        line_count += 1
                    else:
                        label__cpu += '"{}",'.format(row[1])
                        data__cpu += '"{}",'.format(row[0])
    except:
        pass
    return label__cpu,data__cpu

#CPU USAGE
def cpu_usage():
    label__cpu = ''
    data__cpu = ''
    try:
        with open('/home/web/django/data/cpu/{}.csv'.format(date.today().strftime("%d.%m.%Y")),errors='ignore',encoding='utf-8') as csv_file1:
                csv_reader = csv.reader(csv_file1, delimiter=',')
                line_count = 0
                user = []
                for row in csv_reader:
                    if line_count == 0:
                        line_count += 1
                    else:
                        label__cpu += '"{}",'.format(row[1])
                        data__cpu += '"{}",'.format(row[0])
    except:
        pass
    return label__cpu,data__cpu