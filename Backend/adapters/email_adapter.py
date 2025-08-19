import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

class EmailAdapter:
    def __init__(self, email: str, password: str):
        self.email = email
        self.password = password

    def send_email(self, recipient_email: str, subject: str, body: str):
        try:
            html_message = MIMEMultipart("alternative")
            html_message["Subject"] = subject
            html_message["From"] = self.email
            html_message["To"] = recipient_email

            # Corpo em HTML
            html_part = MIMEText(body, "html")
            html_message.attach(html_part)

            # Conexão com servidor Gmail
            with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
                server.login(self.email, self.password)
                server.sendmail(self.email, recipient_email, html_message.as_string())

            return True
        except Exception as e:
            print("Erro ao enviar email:", e)
            return False
