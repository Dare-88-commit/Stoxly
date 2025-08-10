from pydantic import BaseModel

class StockBase(BaseModel):
    name: str
    unit_cost: float
    quantity: int

class StockCreate(StockBase):
    pass

class Stock(StockBase):
    id: int
    class Config:
        orm_mode = True

class SaleBase(BaseModel):
    item_name: str
    quantity_sold: int
    selling_price: float

class SaleCreate(SaleBase):
    pass

class Sale(SaleBase):
    id: int
    class Config:
        orm_mode = True
