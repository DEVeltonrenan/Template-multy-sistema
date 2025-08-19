from typing import Union

from fastapi import FastAPI
from adapters.email_adapter import EmailAdapter
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()

@app.post("/send-email")
def send_email():
    email = EmailAdapter("renandrunline@gmail.com", "odyj pzcw nmvb kpid")
    sucesso = email.send_email(
        recipient_email="renandrunline02@gmail.com",
        subject="Teste de envio",
        body="<h1>Olá!</h1><p>Email enviado via FastAPI + Python 🚀</p>"
    )
    return {"status": "enviado" if sucesso else "erro"}
    