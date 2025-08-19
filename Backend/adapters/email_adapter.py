class EmailAdapter:
    def __init__(self, email: str):
        self.email = email

    def send_email(self, subject: str, body: str):
        print(f"Sending email to {self.email} with subject {subject} and body {body}")
        return True
    
    def send_email_with_attachment(self, subject: str, body: str, attachment: str):
        print(f"Sending email to {self.email} with subject {subject} and body {body} and attachment {attachment}")
        return True