import yfinance as yf
import time
from datetime import datetime
from datetime import date
time.sleep(60)
while True:
    try:
        stock = yf.Ticker('TSLA')
        
        today = date.today()
        now = datetime.now()

        data = today.strftime("%d.%m.%Y")
        current_time = now.strftime("%H:%M")
        url = '/var/www/html/[data]/stocks/TSLA/' + data + ".txt"

        if stock.info['bid'] == 0:
            pass
        else:
            a = str(stock.info['bid']) + "/" + current_time + '\n'
            f = open(url, 'a+')  # open file in append mode 
            f.write(a)
            f.close()

        log = open(f'/var/log/stockPrice/{data}.txt','a+')
        log.write("True " + current_time + "\n")
    except EOFError as error:
        log = open(f'/var/log/stockPrice/{data}.txt','a+')
        log.write(error + " " + current_time + "\n") 
        print(error)
    time.sleep(900)
