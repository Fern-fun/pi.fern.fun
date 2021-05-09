import yfinance as yf
from datetime import datetime
import os

def Stock(id):
    stock = yf.Ticker(id)
    
    data = datetime.today().strftime("%d.%m.%Y")
    current_time = datetime.now().strftime("%H:%M")
    
    path = '../../data/stock/{}/'.format(id) + data + ".csv"
    
    if os.path.isfile(path):
        with open(path, 'a+') as file:
            file.write(str(stock.info['bid']) + ',' + current_time + '\n')
    else:
        x = open(path,'a+').write('price, time\n')
        with open(path, 'a+') as file:
            file.write(str(stock.info['bid']) + ',' + current_time+ '\n')
