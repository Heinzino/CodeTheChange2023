from fastapi import FastAPI, Depends, HTTPException
from alchemyModel import get_db, Points 
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session

app = FastAPI()

@app.post("/newUser")
def newUser():
    pass


@app.post('/success')
def updatePoints():
    pass


