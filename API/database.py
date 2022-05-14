from model import *
from dotenv import dotenv_values
import requests
import json
url = "https://data.mongodb-api.com/app/data-ccjjg/endpoint/data/beta/action/findOne"

payload = json.dumps({
    "collection": "smetki",
    "database": "Smetki",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 1
    }
})
headers = {
    'Content-Type': 'application/json',
    'Access-Control-Request-Headers': '*',
    'api-key': '<API_KEY>'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)


config = dotenv_values('.env')
DATABASE_URI = config.get('DATABASE_URI')
print('dasdasdsadsadasdasdasdasdasdasdasdsadasdas ',DATABASE_URI)
if os.getenv("DATABASE_URI"): DATABASE_URI = os.getenv("DATABASE_URI") #ensures that if we have a system environment variable, it uses that instead

client = motor.motor_asyncio.AsyncIOMotorClient(DATABASE_URI)


database = client.Smetki
collection = database.smetki
async def fetch_one_bill(id):
    doc = await collection.find_one({"id": id})
    return doc

async def fetch_all_bills():
    smetki = []
    cursor = collection.cursor()
    async for bill in cursor:
        smetki.append(Smetka(**bill))
    return smetki

async def create_bill(bill):
    doc = bill.dict()
    await collection.insert_one(doc)
    return 'Bill added'

async def change_bill(id,month,year,spentKWH,to_be_paid,paid):
    await collection.update_one({'id':id}, {'$set':{'month':month, 'year':year, 'spentKWH':spentKWH,'to_be_paid':to_be_paid,'paid':paid}})
    result = await fetch_one_bill(id)
    return result
