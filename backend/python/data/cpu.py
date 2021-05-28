import psutil
from datetime import date, datetime
import os.path

def cpu_data():
    cpu = str(psutil.cpu_percent(interval=1))
    data = date.today().strftime("%d.%m.%Y")
    current_time = datetime.now().strftime("%H:%M")
    path = '/home/web/malinka/backend/data/cpu/' + data + ".csv"
    cpu = '\n' + str(cpu) + ',' + current_time
    if os.path.isfile(path):
        with open(path, 'a+') as file:
            file.write(cpu)
    else:
        x = open(path,'a+').write('cpu usage, time')
        with open(path, 'a+') as file:
            file.write(cpu)
