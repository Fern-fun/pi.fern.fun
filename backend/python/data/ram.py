import psutil
from datetime import datetime
from datetime import date
import os.path

def ram_data():
    ram = psutil.virtual_memory()[2]
    data = date.today().strftime("%d.%m.%Y")
    current_time = datetime.now().strftime("%H:%M")
    path = '/home/web/malinka/backend/data/ram/' + data + ".csv"
    ram = str(ram) + ',' + current_time + '\n'
    if os.path.isfile(path):
        with open(path, 'a+') as file:
            file.write(ram)
    else:
        x = open(path,'a+').write('ram usage, time\n')
        with open(path, 'a+') as file:
            file.write(ram)
    
