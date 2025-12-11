from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List
import models
import schemas
from database import engine, get_db

app = FastAPI(title="Todo List API", version="1.0.0")

# Crear las tablas en la base de datos (solo cuando se necesite)
try:
    models.Base.metadata.create_all(bind=engine)
    print("✓ Tablas creadas/verificadas correctamente")
except Exception as e:
    print(f"⚠ Advertencia: No se pudieron crear las tablas: {e}")
    print("El servidor seguirá funcionando, pero las operaciones de BD fallarán.")

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],  # Permitir el frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ==================== ENDPOINTS DE VERIFICACIÓN ====================

@app.get("/")
def read_root(db: Session = Depends(get_db)):
    try:
        # Verificar conexión a la base de datos
        from sqlalchemy import text
        db.execute(text("SELECT 1"))
        return {
            "message": "API Todo List funcionando correctamente",
            "version": "1.0.0",
            "database": {
                "status": "connected",
                "message": "Base de datos MySQL conectada correctamente"
            }
        }
    except Exception as e:
        return {
            "message": "API Todo List funcionando",
            "version": "1.0.0",
            "database": {
                "status": "disconnected",
                "message": f"Error de conexión: {str(e)}"
            }
        }


@app.get("/health")
def health_check():
    return {"status": "healthy"}


# ==================== CRUD DE USUARIOS ====================

@app.post("/api/usuarios", response_model=schemas.Usuario, status_code=201)
def crear_usuario(usuario: schemas.UsuarioCreate, db: Session = Depends(get_db)):
    # Verificar si el email ya existe
    db_usuario = db.query(models.Usuario).filter(models.Usuario.email == usuario.email).first()
    if db_usuario:
        raise HTTPException(status_code=400, detail="El email ya está registrado")
    
    nuevo_usuario = models.Usuario(**usuario.dict())
    db.add(nuevo_usuario)
    db.commit()
    db.refresh(nuevo_usuario)
    return nuevo_usuario


@app.get("/api/usuarios", response_model=List[schemas.Usuario])
def obtener_usuarios(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    usuarios = db.query(models.Usuario).offset(skip).limit(limit).all()
    return usuarios


@app.get("/api/usuarios/{usuario_id}", response_model=schemas.Usuario)
def obtener_usuario(usuario_id: int, db: Session = Depends(get_db)):
    usuario = db.query(models.Usuario).filter(models.Usuario.id == usuario_id).first()
    if not usuario:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    return usuario


@app.delete("/api/usuarios/{usuario_id}", status_code=204)
def eliminar_usuario(usuario_id: int, db: Session = Depends(get_db)):
    usuario = db.query(models.Usuario).filter(models.Usuario.id == usuario_id).first()
    if not usuario:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    
    db.delete(usuario)
    db.commit()
    return None


# ==================== CRUD DE TAREAS ====================

@app.post("/api/tareas", response_model=schemas.Tarea, status_code=201)
def crear_tarea(tarea: schemas.TareaCreate, db: Session = Depends(get_db)):
    # Verificar que el usuario existe
    usuario = db.query(models.Usuario).filter(models.Usuario.id == tarea.usuario_id).first()
    if not usuario:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    
    nueva_tarea = models.Tarea(**tarea.dict())
    db.add(nueva_tarea)
    db.commit()
    db.refresh(nueva_tarea)
    return nueva_tarea


@app.get("/api/tareas", response_model=List[schemas.Tarea])
def obtener_tareas(
    usuario_id: int = None,
    completada: bool = None,
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    query = db.query(models.Tarea)
    
    if usuario_id:
        query = query.filter(models.Tarea.usuario_id == usuario_id)
    if completada is not None:
        query = query.filter(models.Tarea.completada == completada)
    
    tareas = query.order_by(models.Tarea.fecha_creacion.desc()).offset(skip).limit(limit).all()
    return tareas


@app.get("/api/tareas/{tarea_id}", response_model=schemas.Tarea)
def obtener_tarea(tarea_id: int, db: Session = Depends(get_db)):
    tarea = db.query(models.Tarea).filter(models.Tarea.id == tarea_id).first()
    if not tarea:
        raise HTTPException(status_code=404, detail="Tarea no encontrada")
    return tarea


@app.put("/api/tareas/{tarea_id}", response_model=schemas.Tarea)
def actualizar_tarea(tarea_id: int, tarea_update: schemas.TareaUpdate, db: Session = Depends(get_db)):
    tarea = db.query(models.Tarea).filter(models.Tarea.id == tarea_id).first()
    if not tarea:
        raise HTTPException(status_code=404, detail="Tarea no encontrada")
    
    # Actualizar solo los campos que se envían
    update_data = tarea_update.dict(exclude_unset=True)
    for key, value in update_data.items():
        setattr(tarea, key, value)
    
    db.commit()
    db.refresh(tarea)
    return tarea


@app.delete("/api/tareas/{tarea_id}", status_code=204)
def eliminar_tarea(tarea_id: int, db: Session = Depends(get_db)):
    tarea = db.query(models.Tarea).filter(models.Tarea.id == tarea_id).first()
    if not tarea:
        raise HTTPException(status_code=404, detail="Tarea no encontrada")
    
    db.delete(tarea)
    db.commit()
    return None


# ==================== ENDPOINTS ADICIONALES ====================

@app.get("/api/usuarios/{usuario_id}/tareas", response_model=List[schemas.Tarea])
def obtener_tareas_usuario(
    usuario_id: int,
    completada: bool = None,
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    # Verificar que el usuario existe
    usuario = db.query(models.Usuario).filter(models.Usuario.id == usuario_id).first()
    if not usuario:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    
    query = db.query(models.Tarea).filter(models.Tarea.usuario_id == usuario_id)
    
    if completada is not None:
        query = query.filter(models.Tarea.completada == completada)
    
    tareas = query.order_by(models.Tarea.fecha_creacion.desc()).offset(skip).limit(limit).all()
    return tareas


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
