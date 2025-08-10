from sqlalchemy import Column, Integer, String, Float
from .database import Base

class Stock(Base):
    __tablename__ = "stocks"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    unit_cost = Column(Float)
    quantity = Column(Integer)

class Sale(Base):
    __tablename__ = "sales"
    id = Column(Integer, primary_key=True, index=True)
    item_name = Column(String, index=True)
    quantity_sold = Column(Integer)
    selling_price = Column(Float)
