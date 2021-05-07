from gpiozero import CPUTemperature
from datetime import datetime
from datetime import date
from config import error_msg

def temp_data():
    cpu = CPUTemperature()
    data = date.today().strftime("%d.%m.%Y")
    current_time = datetime.now().strftime("%H:%M")
    path = '/var/www/html/[data]/temp/' + data + ".txt"
    cpu_temp = str(cpu.temperature) + '/' + current_time + '\n'
    with open(path, 'a+') as file:
        file.write(cpu_temp)
    if cpu.temperature > 60:
        error_msg('The temperature has exceeded the warning level', 'Temperature CPU: {}°C'.format(cpu))
    