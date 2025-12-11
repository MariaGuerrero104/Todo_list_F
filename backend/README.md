# Todo List Backend - Railway Deployment

## 🚀 Despliegue en Railway

### Pasos para desplegar:

1. **Crear un nuevo proyecto en Railway**
   - Ve a [railway.app](https://railway.app)
   - Click en "New Project"
   - Selecciona "Deploy from GitHub repo"

2. **Conectar tu repositorio**
   - Autoriza Railway para acceder a tu repositorio
   - Selecciona el repositorio `Todo_list_F`
   - Railway detectará automáticamente que es un proyecto Python

3. **Configurar la base de datos MySQL**
   - En tu proyecto de Railway, click en "+ New"
   - Selecciona "Database" → "Add MySQL"
   - Railway creará automáticamente una base de datos MySQL

4. **Configurar variables de entorno**
   - En el servicio del backend, ve a "Variables"
   - Agrega la variable `MYSQL_PUBLIC_URL` con el valor de la conexión MySQL
   - Railway auto-genera: `MYSQLHOST`, `MYSQLPORT`, `MYSQLUSER`, `MYSQLPASSWORD`, `MYSQLDATABASE`
   - Construye la URL: `mysql+pymysql://${{MYSQLUSER}}:${{MYSQLPASSWORD}}@${{MYSQLHOST}}:${{MYSQLPORT}}/${{MYSQLDATABASE}}`

5. **Desplegar**
   - Railway desplegará automáticamente
   - Obtendrás una URL pública como: `https://tu-proyecto.up.railway.app`

6. **Actualizar el frontend**
   - Copia la URL del backend de Railway
   - Actualiza `frontend/.env`: `VITE_API_URL=https://tu-backend.up.railway.app`

## 📝 Endpoints disponibles

- `GET /` - Verificar estado del servidor y base de datos
- `GET /api/tareas` - Obtener todas las tareas
- `POST /api/tareas` - Crear nueva tarea
- `PUT /api/tareas/{id}` - Actualizar tarea
- `DELETE /api/tareas/{id}` - Eliminar tarea

## 🔧 Desarrollo local

```bash
# Activar entorno virtual
.\entornoV\Scripts\Activate.ps1

# Instalar dependencias
pip install -r requirements.txt

# Configurar .env con tu base de datos

# Ejecutar servidor
uvicorn main:app --reload
```

## 🌐 CORS

El backend está configurado para aceptar peticiones de:
- localhost (desarrollo)
- Cualquier dominio de Railway (*.railway.app)

Para producción, actualiza la configuración CORS en `main.py` con tu dominio específico.
