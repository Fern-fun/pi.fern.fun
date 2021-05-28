from email.mime.text import MIMEText
from PyMails import send_mail

admin_email = ''

def error_msg(title,error):
    smtp_server = '' 
    port = 587
    sender_email = ''
    password = ''
    receiver_email = admin_email
    msg = MIMEText('{}'.format(str(error)))
    msg['Subject'] = title
    msg['From'] = sender_email
    msg['To'] = receiver_email
    send_mail(smtp_server,port,sender_email,password,receiver_email,msg)