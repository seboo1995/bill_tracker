from pydantic import BaseModel

class Smetka(BaseModel):
    id:str
    month:str
    year:str
    spentKWH:float
    to_be_paid:int
    paid:bool