from typing import Union

from fastapi import FastAPI
from adapters.email_adapter import EmailAdapter
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(port=8000, host="0.0.0.0", reload=True)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.post("/users")
def create_user(userData: dict):
    print(userData)
    return {"user": userData}
