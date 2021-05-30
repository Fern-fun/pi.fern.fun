"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
import api.views

urlpatterns = [
    path('', api.views.index),
    
    path('home/',api.views.home),
    
    path('appupdate/',api.views.appupdate),
    
    path('currency/pln/',api.views.currency_pln),
    
    path('currency/usd/',api.views.currency_usd),
    
    path('stock/',api.views.stock),
    
    path('status/',api.views.status),
    
    path('chart/ram/', api.views.chart_ram),
    path('chart/cpu/temp/', api.views.chart_cpu_temp),
    path('chart/cpu/usage/', api.views.chart_cpu_usage),
    
    
    path('chart/stock/<str:name>/', api.views.chart_stock),
    
    path('chart/btc/<str:name>/', api.views.chart_btc),
    path('chart/eth/<str:name>/', api.views.chart_eth),
    path('chart/doge/<str:name>/', api.views.chart_doge),
    

]
