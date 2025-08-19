from typing import Union

from fastapi import FastAPI
from adapters.email_adapter import EmailAdapter

app = FastAPI()

@app.get("/")
def read_root():
    email_adapter = EmailAdapter("teste@teste.com")
    email_adapter.send_email("Teste", "Teste")
    email_adapter.send_email_with_attachment("Teste", "Teste", "teste.txt")
    return {"Hello": "violeiro solitario"}


@app.post("/users")
def create_user():
    return {"user": "teste"}
    