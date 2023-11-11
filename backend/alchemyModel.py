from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.orm import sessionmaker, declarative_base, Session

DATABASE_URL = "sqlite:///points.db"
engine = create_engine(DATABASE_URL)

Base = declarative_base()

class Points(Base):
    __tablename__ = "points"
    id = Column(Integer, primary_key = True, index = True)
    name = Column(String, index = True)
    UCID = Column(String, index = True)
    hashed_password = Column(String, index=True)
    points = Column(Integer, index=True)

Base.metadata.create_all(bind=engine)
SessionLocal = sessionmaker(autocommit = False, autoflush= False, bind = engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def insert(db: Session, name : str, UCID: str, hashed_password: str):
    new_user = Points(name = name, UCID = UCID, hashed_password=hashed_password, points = 0)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)