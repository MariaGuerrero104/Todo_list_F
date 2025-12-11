from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os
import pymysql

# Instalar PyMySQL como MySQLdb
pymysql.install_as_MySQLdb()

load_dotenv()

# Usar la URL pública de Railway para conexiones externas
MYSQL_PUBLIC_URL = os.getenv("MYSQL_PUBLIC_URL")

# Crear el engine con PyMySQL
engine = create_engine(
    MYSQL_PUBLIC_URL,
    pool_pre_ping=True,
    pool_recycle=3600,
    echo=True
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# Dependencia para obtener la sesión de base de datos
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
