from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

# Schemas para Usuario
class UsuarioBase(BaseModel):
    nombre: str
    email: EmailStr

class UsuarioCreate(UsuarioBase):
    pass

class Usuario(UsuarioBase):
    id: int
    fecha_creacion: datetime
    
    class Config:
        from_attributes = True


# Schemas para Tarea
class TareaBase(BaseModel):
    titulo: str
    completada: Optional[bool] = False

class TareaCreate(TareaBase):
    usuario_id: int

class TareaUpdate(BaseModel):
    titulo: Optional[str] = None
    completada: Optional[bool] = None

class Tarea(TareaBase):
    id: int
    fecha_creacion: datetime
    usuario_id: int
    
    class Config:
        from_attributes = True
