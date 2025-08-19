import smtplib
from email.mime.text import MIMEText
# from email.mime.multipart import MIMEMultipart

class EmailAdapter:
    def __init__(self, email: str):
        self.email = email

    def send_email(self, subject: str, body: str):
        sender_email = "renandrunline@gmail.com"
        sender_password = "odyj pzcw nmvb kpid"  # Use an app password or environment variable for security
        recipient_email = self.email

        html_message = MIMEText(body, 'html')
        html_message['Subject'] = subject
        html_message['From'] = sender_email
        html_message['To'] = recipient_email

        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(sender_email, sender_password)
            server.sendmail(sender_email, recipient_email, html_message.as_string())

    # def send_email_with_attachment(self, subject: str, body: str, attachment: str):
    #     print(f"Sending email to {self.email} with subject {subject} and body {body} and attachment {attachment}")


