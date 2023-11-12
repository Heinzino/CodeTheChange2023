from database import Base
from sqlalchemy import Column, Integer, String


class Points(Base):
    __tablename__ = "points"
    id = Column(Integer, primary_key = True, index = True)
    name = Column(String)
    UCID = Column(String)
    hashed_password = Column(String)
    points = Column(Integer)