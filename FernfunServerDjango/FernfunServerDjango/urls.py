from django.contrib import admin
from django.urls import path
from main.views import index, currency, status, appupdate, stock

urlpatterns = [
    path('', index),
    path('currency', currency, name='currency'),
    path('status', status, name='status'),
    path('appupdate', appupdate, name='appupdate'),
    path('stock', stock, name='stock'),
]
