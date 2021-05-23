from django.urls import path
from django.urls.conf import include
import main.views

urlpatterns = [
    path('', main.views.index),
    path('currency', main.views.currency, name='currency'),
    path('status', main.views.status, name='status'),
    path('appupdate', main.views.appupdate, name='appupdate'),
    path('stock', main.views.stock, name='stock'),
    path('tools', main.views.tools, name='tools'),
]
