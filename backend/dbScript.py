from fastapi import FastAPI, Depends, HTTPException
from alchemyModel import get_db, Points
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session

app = FastAPI()

@app.post("/newUser/")
def newUser(name : str, UCID: str, hashed_password: str, db: Session = Depends(get_db)):
    new_user = Points(name = name, UCID = UCID, hashed_password=hashed_password, points = 0)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return




