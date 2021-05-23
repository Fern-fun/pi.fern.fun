from django.http import HttpResponse
from wsgiref.util import FileWrapper

import random
import threading
import socket
import sys

def portscan(x):
    if x != None:
        x = x.split(':')
        ip = str(x[0])
        port = int(x[1])
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        socket.setdefaulttimeout(1)

        try:
            result = s.connect_ex((ip,port))
            if result ==0:
                return '<span style="color:green;">[+]{}</span>'.format(port)
            else:
                return '<span style="color:red;">[-]{}</span>'.format(port)
            s.close()
        except:
            pass
    return ''

def password_gen(length):
    if length != None:
        if float(length) <= 32:
            all_s = "123456789!@#$%^&*()_+=-{}[]:;<>/?~`"
            alp = "QWERTYUIOPASDFGHJKLZXCVBNM"
            a = alp.lower()
            a += alp
            a += all_s
            password = ''.join(random.choice(a) for i in range(int(length)))
            return password
    return ''
