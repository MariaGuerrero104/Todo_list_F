from database import engine, SessionLocal
from models import Base, Usuario
import models

def init_db():
    """Crear las tablas y un usuario de prueba"""
    print("Creando tablas en la base de datos...")
    Base.metadata.create_all(bind=engine)
    print("✓ Tablas creadas correctamente")
    
    # Crear un usuario de prueba si no existe
    db = SessionLocal()
    try:
        usuario_existente = db.query(Usuario).filter(Usuario.email == "usuario@test.com").first()
        if not usuario_existente:
            usuario_prueba = Usuario(
                nombre="Usuario de Prueba",
                email="usuario@test.com"
            )
            db.add(usuario_prueba)
            db.commit()
            db.refresh(usuario_prueba)
            print(f"✓ Usuario de prueba creado con ID: {usuario_prueba.id}")
        else:
            print(f"✓ Usuario de prueba ya existe con ID: {usuario_existente.id}")
    except Exception as e:
        print(f"✗ Error al crear usuario de prueba: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    init_db()
