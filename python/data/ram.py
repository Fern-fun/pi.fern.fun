import psutil
from datetime import datetime
from datetime import date

def ram_data():
    ram = psutil.virtual_memory()[2]
    data = date.today().strftime("%d.%m.%Y")
    current_time = datetime.now().strftime("%H:%M")
    path = '/var/www/html/[data]/ram/' + data + ".txt"
    ram = str(ram) + '/' + current_time + '\n'
    with open(path, 'a+') as file:
        file.write(ram)
