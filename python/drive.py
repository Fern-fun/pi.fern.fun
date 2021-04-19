import psutil
obj_Disk = psutil.disk_usage('/')
print("%a/%f" % (obj_Disk.free / (1024.0 ** 3),obj_Disk.total / (1024.0 ** 3)))