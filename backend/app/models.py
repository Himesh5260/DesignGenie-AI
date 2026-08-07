from datetime import datetime
from sqlalchemy import Column, Integer, String, DateTime, JSON
from .db import Base

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    room_type = Column(String, nullable=True)
    style = Column(String, nullable=True)
    preferences = Column(String, nullable=True)
    image_path = Column(String, nullable=True)
    recommendation = Column(JSON, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
