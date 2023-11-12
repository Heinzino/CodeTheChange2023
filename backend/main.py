from fastapi import FastAPI, HTTPException, Depends
from typing import List
from sqlalchemy.orm import Session
from pydantic import BaseModel
from database import SessionLocal, engine
import models
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",  # Add your React Native app's origin
    "exp://127.0.0.1:19000",  # Expo Go development client
    "exp://localhost:19000",  # Expo Go development client
    "exp://10.13.182.154:8081",  # Replace with your Expo Go app's ID
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

class PointsBase(BaseModel):
    name: str
    UCID: str
    hashed_password: str
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

db_dependency = Depends(get_db)

models.Base.metadata.create_all(bind=engine)

def sqlalchemy_model_to_dict(model):
    return {column.name: getattr(model, column.name) for column in model.__table__.columns}

@app.post("/points/", response_model=PointsModel)
async def create_point(point: PointsBase, db: Session = db_dependency):
    point_dict = point.dict()
    db_point = models.Points(**point_dict)
    db.add(db_point)
    db.commit()
    db.refresh(db_point)
    # Convert the SQLAlchemy model instance to a dictionary
    db_point_dict = sqlalchemy_model_to_dict(db_point)
    return db_point_dict

@app.get("/points/by-min-score/", response_model=List[PointsModel])
async def read_points_by_min_score(db: Session = db_dependency, min_score: int = 0):
    points = db.query(models.Points).filter(models.Points.points >= min_score).all()
    return [sqlalchemy_model_to_dict(point) for point in points]

@app.get("/points/top-ten/", response_model=List[PointsModel])
async def read_top_ten_points(db: Session = db_dependency):
    top_points = db.query(models.Points).order_by(models.Points.points.desc()).limit(10).all()
    return [sqlalchemy_model_to_dict(point) for point in top_points]


