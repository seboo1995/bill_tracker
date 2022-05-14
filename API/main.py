from curses.ascii import HT
from fastapi import FastAPI,HTTPException
from fastapi.middleware.cors import CORSMiddleware
from database import (
    fetch_all_bills,
    fetch_one_bill,
    create_bill,
    change_bill
)
from API.model import Smetka

origins = ["*"] # This will eventually be changed to only the origins you will use once it's deployed, to secure the app a bit more.


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get('/')
def get_root():
    return {"Ping": "Pong"}

@app.get('/api/bill/{id}',response_model=Smetka)
async def get_one_bill(id):
    res = await fetch_one_bill(id)
    if not res:
        raise HTTPException(404,f'Bill with {id} doesnt exist')
    return res
@app.post('/api/add-bill',response_model=Smetka)
async def add_bill(bill:Smetka):
    result = await create_bill(bill)
    if not result: raise HTTPException(400,'BAD REQUEST')
    return result
@app.put('/api/udpdate-bill/{id}',response_model=Smetka)
async def update_todo(bill:Smetka):
    result = await change_bill(id, month, year, spentKWH, to_be_paid, paid)
    if not result:raise HTTPException('dsadasdasasdasdas')
    return result