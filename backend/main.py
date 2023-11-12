from fastapi import FastAPI, HTTPException, Depends
from typing import Annotated, List
from sqlalchemy.orm import Session
from pydantic import BaseModel
from database import SessionLocal, engine
import uvicorn
import models
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    'http://localhost:3000'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
)

class PointsBase(BaseModel):
    name:str
    UCID:str
    hashed_password:str
    points: int

class PointsModel(PointsBase):
    id: int

    class Config:
        from_attributes = True


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]
models.Base.metadata.create_all(bind=engine)

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}

@app.post("/points/", response_model=PointsModel)
async def create_point(point: PointsBase, db: db_dependency):
    db_point = models.Points(**point.model_dump())
    db.add(db_point)
    db.commit()
    db.refresh(db_point)
    return db_point

@app.get("/points/",response_model=List[PointsModel])
async def read_points(db: db_dependency, skip: int = 0, limit: int = 100):
    points = db.query(models.Points).offset(skip).limit(limit).all()
    return points

#When you run with uvicorn main:app --reload
#Make sure to append /docs to url to get that nice screen to see all the stuff