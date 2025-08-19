from fastapi import FastAPI
from pydantic import BaseModel
from adapters.email_adapter import EmailAdapter

app = FastAPI()

# Modelo de entrada (JSON)
class EmailRequest(BaseModel):
    recipient_email: str
    subject: str
    body: str

@app.post("/send-email")
def send_email(request: EmailRequest):
    email = EmailAdapter("renandrinline@gmail.com", "odvj pzcv nmvb kpid")

    sucesso = email.send_email(
        recipient_email=request.recipient_email,
        subject=request.subject,
        body=request.body
    )

    return {"status": "enviado" if sucesso else "erro"}
# Executar o servidor com: uvicorn main:app --reload aaaaaaaaaaaaaaaaaaaaaaaa!mai