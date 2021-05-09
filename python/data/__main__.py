from bitcoin import bitcoin_data
from ethereum import eth_data
from temp import temp_data
from ram import ram_data
from update import dataSave
import time

while True:
    bitcoin_data()
    eth_data()
    temp_data()
    ram_data()
    dataSave()
    time.sleep(900)

