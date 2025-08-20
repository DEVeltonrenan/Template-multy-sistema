from fastapi import FastAPI
from pydantic import BaseModel
from adapters.email_adapter import EmailAdapter
from fastapi.middleware.cors import CORSMiddleware
 
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelo de entrada (JSON) corpo da requisição
class EmailRequest(BaseModel):
    employeeEmail: str
    firstName: str
    gender: str
    holmesLogin: str
    intranetLogin: str
    intranetPassword: str
    managerEmail: str
    nbsLogin: str
    nbsPassword: str
    serverLogin: str
    serverPassword: str
@app.post("/users")
def send_email(request: EmailRequest):
    email = EmailAdapter()

    sucesso = email.send_email(
        recipient_email=request.employeeEmail,
        menager_email=request.managerEmail,
        subject="Bem vindo a Ravieira Motors",
       body = f"""
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Seus Acessos</title>
  <style>
    body {{
      font-family: Arial, sans-serif;
      background-color: #ffffff;
      color: #333333;
      margin: 0;
      padding: 0;
    }}
    .wrapper {{
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }}
    .logo {{
      text-align: center;
      margin-bottom: 20px;
    }}
    h2 {{
      font-size: 18px;
      font-weight: normal;
      margin-bottom: 10px;
    }}
    .login {{
      margin: 8px 0;
      font-size: 15px;
    }}
    .label {{
      font-weight: bold;
      color: #555555;
    }}
    .footer {{
      margin-top: 25px;
      font-size: 12px;
      color: #888888;
      text-align: center;
    }}
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="logo">
      <img src="https://media.licdn.com/dms/image/v2/D4D3DAQFG4-xAsnuBCg/image-scale_191_1128/B4DZaxhruSHQAc-/0/1746735119876/gruporaviera_cover?e=1756263600&v=beta&t=f0GcGkjesCjmv39F66F2k5Q0X_2nDaSMSgOYRhLEEQk" 
           alt="Logo Grupo Raviera" 
           style="max-width: 200px; height: auto;">
    </div>
    <h2>Olá {request.firstName},</h2>
    <div class="login">
      <span class="label">Holmes:</span> {request.holmesLogin}
    </div>
    <div class="login">
      <span class="label">Intranet:</span> {request.intranetLogin}
    </div>
    <div class="login">
      <span class="label">NBS:</span> {request.nbsLogin}
    </div>
    <div class="login">
      <span class="label">Servidor:</span> {request.serverLogin}
    </div>
    <p class="footer">Este é um e-mail automático. Por favor, não responda.</p>
  </div>
</body>
</html>
"""
    )

    return {"status": "enviado" if sucesso else "erro"}
# Executar o servidor com: uvicorn main:app --reload