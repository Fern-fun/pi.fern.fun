import requests
from bs4 import BeautifulSoup
import sys

api = 'https://www.jmbullion.com/charts/gold-price/'

def gold_ounce():
    r = requests.get(api)
    gold = BeautifulSoup(r.content, "html.parser")
    a = gold.find('span', class_="price")
    gold_price = a.text
    print(gold_price)

def silver_ounce():
    r = requests.get(api)
    silver = BeautifulSoup(r.content, "html.parser")
    a = silver.find_all('span', class_="price")
    silver_price = a[1].text
    print(silver_price)

def platinum_ounce():
    r = requests.get(api)
    platinum = BeautifulSoup(r.content, "html.parser")
    a = platinum.find_all('span', class_="price")
    platinum_price = a[2].text
    platinum_price = platinum_price.replace('$','').replace(',','')
    print(platinum_price)

def palladium_ounce():
    r = requests.get(api)
    palladium = BeautifulSoup(r.content, "html.parser")
    a = palladium.find_all('span', class_="price")
    palladium_price = a[3].text
    palladium_price = palladium_price.replace('$','').replace(',','')
    print(palladium_price)


name = sys.argv[1]

if name == 'silver':
    silver_ounce()
elif name == 'platinum':
    platinum_ounce()
elif name == 'palladium':
    palladium_ounce()