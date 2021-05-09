from gpiozero import CPUTemperature
from datetime import datetime
from datetime import date
from config import error_msg
import os.path

def temp_data():
    cpu = CPUTemperature()
    data = date.today().strftime("%d.%m.%Y")
    current_time = datetime.now().strftime("%H:%M")
    path = '../../data/temp/' + data + ".csv"
    cpu_temp = str(cpu.temperature) + ',' + current_time + '\n'
    if os.path.isfile(path):
        with open(path, 'a+') as file:
            file.write(cpu_temp)
    else:
        x = open(path,'a+').write('cpu temperature, time\n')
        with open(path, 'a+') as file:
            file.write(cpu_temp)
    if cpu.temperature > 60:
        error_msg('The temperature has exceeded the warning level', 'Temperature CPU: {}°C'.format(cpu))
    