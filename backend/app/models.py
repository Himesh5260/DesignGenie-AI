from datetime import datetime
from sqlalchemy import Column, Integer, String, DateTime
from .db import Base


class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    generated_image_url = Column(String, nullable=False)
    style = Column(String, nullable=True)
    room_type = Column(String, nullable=True)
    preferences = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
