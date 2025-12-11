# 📝 TODO LIST - Aplicación de Gestión de Tareas

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-pink)
![Python](https://img.shields.io/badge/Python-3.11-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-0.115.5-green)
![React](https://img.shields.io/badge/React-19.2.0-cyan)
![License](https://img.shields.io/badge/license-MIT-purple)

**Una aplicación moderna y elegante para gestionar tus tareas diarias con estilo**

[Demo en Vivo](https://todo-list-frontend.vercel.app) • [Documentación API](#-documentación-de-la-api) • [Instalación](#-instalación)

</div>

---

## 📋 Tabla de Contenidos

- [Descripción del Proyecto](#-descripción-del-proyecto)
- [Arquitectura del Sistema](#-arquitectura-del-sistema)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Diseño y Paleta de Colores](#-diseño-y-paleta-de-colores)
- [Base de Datos](#-base-de-datos)
- [Backend - API REST](#-backend---api-rest)
- [Frontend - Interfaz de Usuario](#-frontend---interfaz-de-usuario)
- [Despliegue](#-despliegue)
- [Instalación Local](#-instalación-local)
- [Documentación de la API](#-documentación-de-la-api)
- [Características](#-características)
- [Variables de Entorno](#-variables-de-entorno)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Contribución](#-contribución)
- [Licencia](#-licencia)

---

## 🎯 Descripción del Proyecto

**TODO LIST** es una aplicación web full-stack diseñada para ayudarte a organizar tus tareas diarias de manera eficiente y con un diseño moderno y atractivo. La aplicación combina la potencia de FastAPI en el backend con la flexibilidad de React en el frontend, ofreciendo una experiencia de usuario fluida y responsiva.

### ✨ Características Principales

- ✅ **CRUD Completo**: Crear, leer, actualizar y eliminar tareas
- 🎨 **Diseño Moderno**: Interfaz elegante con tema oscuro y acentos en rosa
- ⚡ **Tiempo Real**: Actualizaciones instantáneas sin recargar la página
- 📱 **Responsive**: Optimizado para dispositivos móviles, tablets y desktop
- 🔒 **Seguro**: Validación de datos y manejo de errores robusto
- 🌐 **API RESTful**: Backend escalable y bien documentado
- 💾 **Persistencia**: Base de datos MySQL en la nube
- 🚀 **Despliegue en la Nube**: Backend en Railway y Frontend en Vercel

---

## 🏗️ Arquitectura del Sistema

La aplicación sigue una arquitectura cliente-servidor con separación clara de responsabilidades:

```
┌─────────────────────────────────────────────────────────────┐
│                        USUARIO                               │
└───────────────────────┬─────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                    FRONTEND (React)                          │
│                  Vercel Deployment                           │
│  • Interfaz de Usuario (UI/UX)                              │
│  • Gestión de Estado con React Hooks                        │
│  • Tailwind CSS para estilos                                │
│  • Comunicación HTTP con Backend                            │
└───────────────────────┬─────────────────────────────────────┘
                        │
                        │ HTTPS/REST API
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                   BACKEND (FastAPI)                          │
│                  Railway Deployment                          │
│  • API RESTful                                              │
│  • Validación con Pydantic                                  │
│  • Lógica de Negocio                                        │
│  • ORM con SQLAlchemy                                       │
└───────────────────────┬─────────────────────────────────────┘
                        │
                        │ MySQL Connection
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                BASE DE DATOS (MySQL)                         │
│                  Railway Deployment                          │
│  • Almacenamiento Persistente                               │
│  • Tablas: usuarios, tareas                                 │
│  • Relaciones y Constraints                                 │
└─────────────────────────────────────────────────────────────┘
```

### Flujo de Datos

1. **Usuario → Frontend**: El usuario interactúa con la interfaz React
2. **Frontend → Backend**: React envía peticiones HTTP a la API de FastAPI
3. **Backend → Base de Datos**: FastAPI procesa las peticiones y consulta MySQL
4. **Base de Datos → Backend**: MySQL devuelve los datos solicitados
5. **Backend → Frontend**: FastAPI envía respuesta JSON al frontend
6. **Frontend → Usuario**: React actualiza la interfaz con los nuevos datos

---

## 🛠️ Tecnologías Utilizadas

### Frontend

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | 19.2.0 | Framework principal para construir la interfaz de usuario |
| **Vite** | 7.2.5 | Build tool rápido y optimizado para desarrollo |
| **Tailwind CSS** | 4.1.17 | Framework CSS utility-first para estilos modernos |
| **Heroicons** | 2.2.0 | Librería de iconos SVG para React |
| **JavaScript (ES6+)** | - | Lenguaje de programación del frontend |

### Backend

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Python** | 3.11 | Lenguaje de programación del backend |
| **FastAPI** | 0.115.5 | Framework web moderno y rápido para construir APIs |
| **Uvicorn** | 0.32.1 | Servidor ASGI para ejecutar FastAPI |
| **SQLAlchemy** | 2.0.36 | ORM para interactuar con la base de datos |
| **PyMySQL** | 1.1.1 | Driver MySQL para Python |
| **Pydantic** | 2.12.5 | Validación de datos y serialización |
| **python-dotenv** | 1.0.1 | Gestión de variables de entorno |
| **email-validator** | 2.3.0 | Validación de correos electrónicos |

### Base de Datos

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **MySQL** | 8.0+ | Sistema de gestión de base de datos relacional |
| **Railway MySQL** | - | Servicio de base de datos en la nube |

### Infraestructura y Despliegue

| Servicio | Propósito |
|----------|-----------|
| **Railway** | Hosting del backend API y base de datos MySQL |
| **Vercel** | Hosting del frontend React |
| **GitHub** | Control de versiones y CI/CD |

---

## 🎨 Diseño y Paleta de Colores

### Filosofía de Diseño

El diseño de la aplicación sigue una **filosofía minimalista y moderna**, con un enfoque en la legibilidad y la experiencia del usuario. Se eligió un **tema oscuro (dark mode)** por las siguientes razones:

1. **Reducción de Fatiga Visual**: Los colores oscuros reducen la tensión ocular, especialmente en sesiones largas de uso
2. **Mejor Enfoque**: El contraste ayuda a centrar la atención en las tareas importantes
3. **Estética Moderna**: El dark mode es tendencia en aplicaciones modernas y profesionales
4. **Ahorro de Energía**: En pantallas OLED/AMOLED, los píxeles negros consumen menos energía

### Paleta de Colores Principal

```css
/* Colores Base */
--color-background: #000000      /* Negro puro para fondo principal */
--color-surface: #0a0a0a         /* Negro suave para superficies */
--color-card: #1a1a1a           /* Gris muy oscuro para tarjetas */

/* Colores de Acento - Rosa/Pink */
--color-primary: #ec4899         /* Rosa brillante (pink-500) */
--color-primary-light: #f472b6   /* Rosa claro (pink-400) */
--color-primary-dark: #db2777    /* Rosa oscuro (pink-600) */
--color-primary-glow: #ec489950  /* Rosa con opacidad para efectos glow */

/* Colores Secundarios */
--color-purple: #a855f7          /* Púrpura para gradientes */
--color-red: #ef4444             /* Rojo para eliminación */
--color-green: #10b981           /* Verde para éxito */
--color-blue: #3b82f6            /* Azul para edición */

/* Colores de Texto */
--color-text-primary: #ffffff    /* Blanco para texto principal */
--color-text-secondary: #9ca3af  /* Gris claro para texto secundario */
--color-text-muted: #6b7280      /* Gris medio para texto deshabilitado */
```

### ¿Por Qué Rosa (Pink)?

El **rosa (#ec4899)** fue elegido como color de acento principal por varios motivos estratégicos:

1. **Alto Contraste**: El rosa brillante sobre fondo negro crea un contraste visual excepcional
2. **Energía y Motivación**: El rosa transmite energía, creatividad y positividad, perfecto para una app de productividad
3. **Distintivo**: No es común ver aplicaciones de tareas con rosa, lo que hace que destaque
4. **Versatilidad**: Funciona bien tanto en gradientes como en elementos sólidos
5. **Accesibilidad**: El tono específico elegido cumple con estándares WCAG de contraste

### Gradientes Utilizados

```css
/* Gradiente del Header */
background: linear-gradient(to right, #ec4899, #f472b6, #a855f7);

/* Gradiente de Fondo */
background: linear-gradient(to bottom right, #000000, #0a0a0a, #000000);

/* Gradiente de Botones */
background: linear-gradient(to right, #ec4899, #f472b6);

/* Efecto Glow */
box-shadow: 0 0 20px rgba(236, 72, 153, 0.3);
```

### Tipografía

- **Font Family**: Inter, System UI (fuentes del sistema para mejor rendimiento)
- **Pesos**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)
- **Tamaños**: Escala modular desde 0.75rem hasta 3rem

### Efectos Visuales

1. **Backdrop Blur**: Efecto de desenfoque en modales y overlays
2. **Sombras de Color**: Sombras rosadas en botones y elementos interactivos
3. **Animaciones Suaves**: Transiciones de 300ms con ease-in-out
4. **Hover Effects**: Escala, brillo y cambios de color en interacciones

---

## 💾 Base de Datos

### Diagrama de Base de Datos

```
┌─────────────────────────────────────┐
│           USUARIOS                  │
├─────────────────────────────────────┤
│ id (INT, PK, AUTO_INCREMENT)       │
│ nombre (VARCHAR(100))               │
│ email (VARCHAR(100), UNIQUE)       │
│ fecha_creacion (DATETIME)          │
└─────────────────┬───────────────────┘
                  │
                  │ 1:N
                  │
                  ▼
┌─────────────────────────────────────┐
│            TAREAS                   │
├─────────────────────────────────────┤
│ id (INT, PK, AUTO_INCREMENT)       │
│ titulo (VARCHAR(200))               │
│ completada (BOOLEAN)                │
│ fecha_creacion (DATETIME)          │
│ usuario_id (INT, FK)               │
└─────────────────────────────────────┘
```

### Esquema de Tablas

#### Tabla: `usuarios`

| Campo | Tipo | Restricciones | Descripción |
|-------|------|---------------|-------------|
| `id` | INT | PRIMARY KEY, AUTO_INCREMENT | Identificador único del usuario |
| `nombre` | VARCHAR(100) | NOT NULL | Nombre del usuario |
| `email` | VARCHAR(100) | NOT NULL, UNIQUE, INDEX | Correo electrónico del usuario |
| `fecha_creacion` | DATETIME | DEFAULT CURRENT_TIMESTAMP | Fecha de registro del usuario |

**Índices:**
- PRIMARY KEY en `id`
- UNIQUE INDEX en `email`

#### Tabla: `tareas`

| Campo | Tipo | Restricciones | Descripción |
|-------|------|---------------|-------------|
| `id` | INT | PRIMARY KEY, AUTO_INCREMENT | Identificador único de la tarea |
| `titulo` | VARCHAR(200) | NOT NULL | Título o descripción de la tarea |
| `completada` | BOOLEAN | DEFAULT FALSE | Estado de completitud de la tarea |
| `fecha_creacion` | DATETIME | DEFAULT CURRENT_TIMESTAMP | Fecha de creación de la tarea |
| `usuario_id` | INT | FOREIGN KEY, NOT NULL | Referencia al usuario propietario |

**Índices:**
- PRIMARY KEY en `id`
- FOREIGN KEY en `usuario_id` → `usuarios(id)`
- INDEX en `usuario_id` para optimizar consultas

**Relaciones:**
- `usuario_id` → `usuarios.id` (CASCADE ON DELETE)

### Configuración de la Base de Datos

La base de datos está alojada en **Railway MySQL** con las siguientes características:

- **Host**: mainline.proxy.rlwy.net
- **Puerto**: 41352
- **Base de Datos**: railway
- **Charset**: utf8mb4
- **Collation**: utf8mb4_unicode_ci
- **Zona Horaria**: UTC

### Conexión desde el Backend

```python
# database.py
MYSQL_PUBLIC_URL = "mysql+pymysql://user:password@host:port/database"

engine = create_engine(
    MYSQL_PUBLIC_URL,
    pool_pre_ping=True,      # Verifica conexiones antes de usarlas
    pool_recycle=3600,       # Recicla conexiones cada hora
    echo=True                # Log de queries SQL (desarrollo)
)
```

### Migraciones y Mantenimiento

El backend utiliza **SQLAlchemy ORM** para gestionar el esquema de la base de datos:

```python
# Crear tablas automáticamente al iniciar
models.Base.metadata.create_all(bind=engine)
```

---

## 🔧 Backend - API REST

### Arquitectura del Backend

El backend está construido con **FastAPI**, siguiendo una arquitectura en capas:

```
backend/
├── main.py              # Punto de entrada, definición de endpoints
├── models.py            # Modelos SQLAlchemy (ORM)
├── schemas.py           # Esquemas Pydantic (validación)
├── database.py          # Configuración de conexión a BD
├── requirements.txt     # Dependencias Python
├── .env                 # Variables de entorno (no versionado)
└── railway.json         # Configuración para Railway
```

### Capas del Backend

1. **Capa de Presentación (main.py)**
   - Define los endpoints REST
   - Maneja peticiones HTTP
   - Gestiona CORS y middleware

2. **Capa de Validación (schemas.py)**
   - Valida datos de entrada
   - Serializa datos de salida
   - Define contratos de API

3. **Capa de Lógica de Negocio (main.py)**
   - Implementa reglas de negocio
   - Coordina operaciones
   - Maneja errores

4. **Capa de Acceso a Datos (models.py)**
   - Define modelos ORM
   - Mapea tablas de base de datos
   - Gestiona relaciones

5. **Capa de Infraestructura (database.py)**
   - Configura conexión a BD
   - Gestiona pool de conexiones
   - Maneja sesiones

### Modelos de Datos (ORM)

```python
# models.py
class Usuario(Base):
    __tablename__ = "usuarios"
    
    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String(100), nullable=False)
    email = Column(String(100), unique=True, nullable=False, index=True)
    fecha_creacion = Column(DateTime, default=datetime.utcnow)
    
    # Relación uno a muchos
    tareas = relationship("Tarea", back_populates="usuario", cascade="all, delete-orphan")

class Tarea(Base):
    __tablename__ = "tareas"
    
    id = Column(Integer, primary_key=True, index=True)
    titulo = Column(String(200), nullable=False)
    completada = Column(Boolean, default=False)
    fecha_creacion = Column(DateTime, default=datetime.utcnow)
    usuario_id = Column(Integer, ForeignKey("usuarios.id"), nullable=False)
    
    # Relación muchos a uno
    usuario = relationship("Usuario", back_populates="tareas")
```

### Esquemas de Validación (Pydantic)

```python
# schemas.py
class TareaBase(BaseModel):
    titulo: str
    completada: bool = False

class TareaCreate(TareaBase):
    usuario_id: int

class Tarea(TareaBase):
    id: int
    fecha_creacion: datetime
    usuario_id: int
    
    class Config:
        from_attributes = True
```

### Configuración CORS

```python
# main.py
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],          # En producción: dominios específicos
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Manejo de Errores

```python
# Ejemplo de manejo de errores
@app.post("/api/tareas")
def crear_tarea(tarea: schemas.TareaCreate, db: Session = Depends(get_db)):
    try:
        nueva_tarea = models.Tarea(**tarea.dict())
        db.add(nueva_tarea)
        db.commit()
        db.refresh(nueva_tarea)
        return nueva_tarea
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))
```

---

## 🎨 Frontend - Interfaz de Usuario

### Arquitectura del Frontend

```
frontend/
├── src/
│   ├── main.jsx          # Punto de entrada React
│   ├── App.jsx           # Componente principal
│   ├── TodoItem.jsx      # Componente de tarea individual
│   ├── index.css         # Estilos globales
│   └── assets/           # Recursos estáticos
├── public/               # Archivos públicos
├── index.html            # HTML base
├── package.json          # Dependencias Node.js
├── vite.config.js        # Configuración Vite
├── tailwind.config.js    # Configuración Tailwind
└── postcss.config.js     # Configuración PostCSS
```

### Componentes Principales

#### 1. App.jsx - Componente Principal

**Responsabilidades:**
- Gestionar el estado global de tareas
- Conectarse con la API backend
- Renderizar la interfaz principal
- Manejar eventos de usuario

**Estado del Componente:**
```javascript
const [tareas, setTareas] = useState([]);           // Lista de tareas
const [input, setInput] = useState("");             // Input de nueva tarea
const [loading, setLoading] = useState(false);      // Estado de carga
const [error, setError] = useState(null);           // Errores
const [dbStatus, setDbStatus] = useState(null);     // Estado de BD
const [showSuccessModal, setShowSuccessModal] = useState(false); // Modal
```

**Funciones Principales:**
- `cargarTareas()`: Obtiene todas las tareas del backend
- `agregarTarea()`: Crea una nueva tarea
- `eliminarTarea(id)`: Elimina una tarea por ID
- `toggleCompleted(id)`: Marca/desmarca tarea como completada
- `editarTarea(id, nuevoTitulo)`: Actualiza el título de una tarea

#### 2. TodoItem.jsx - Componente de Tarea

**Responsabilidades:**
- Renderizar una tarea individual
- Permitir edición inline
- Mostrar botones de acción (editar, eliminar)
- Manejar el estado de edición

**Estados:**
```javascript
const [editando, setEditando] = useState(false);    // Modo edición
const [nuevoTexto, setNuevoTexto] = useState("");   // Texto temporal
```

### Comunicación con el Backend

```javascript
// Configuración de API
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

// Ejemplo: Crear tarea
const agregarTarea = async () => {
    const response = await fetch(`${API_URL}/api/tareas`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            titulo: input,
            usuario_id: 1
        })
    });
    const nuevaTarea = await response.json();
    setTareas([...tareas, nuevaTarea]);
};
```

### Estilos con Tailwind CSS

**Clases Utility Principales:**
- **Layout**: `flex`, `grid`, `items-center`, `justify-center`
- **Spacing**: `p-4`, `m-2`, `gap-3`, `space-y-2`
- **Colores**: `bg-black`, `text-white`, `border-pink-500`
- **Efectos**: `hover:scale-110`, `transition-all`, `shadow-lg`
- **Responsive**: `md:max-w-3xl`, `sm:p-4`

### Animaciones Personalizadas

```css
/* index.css */
@keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes scale-in {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
}
```

### Modal de Éxito

Cuando se agrega una tarea exitosamente:
1. Se muestra un modal animado
2. Espera 2 segundos
3. Recarga la página automáticamente

```jsx
{showSuccessModal && (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-pink-500 rounded-2xl p-8">
            {/* Contenido del modal */}
        </div>
    </div>
)}
```

---

## 🚀 Despliegue

### Backend - Railway

**Railway** fue elegido para el backend por las siguientes razones:

1. **Facilidad de Despliegue**: Integración directa con GitHub
2. **Base de Datos Incluida**: MySQL managed service incluido
3. **Escalabilidad Automática**: Ajusta recursos según demanda
4. **Variables de Entorno**: Gestión segura de credenciales
5. **Logs en Tiempo Real**: Monitoreo y debugging facilitado
6. **Dominio Automático**: HTTPS incluido sin configuración

**Configuración del Despliegue:**

```json
// railway.json
{
    "build": {
        "builder": "NIXPACKS"
    },
    "deploy": {
        "startCommand": "uvicorn main:app --host 0.0.0.0 --port $PORT",
        "restartPolicyType": "ON_FAILURE",
        "restartPolicyMaxRetries": 10
    }
}
```

**Variables de Entorno en Railway:**
```env
MYSQL_PUBLIC_URL=mysql+pymysql://user:pass@host:port/db
PORT=8000  # Asignado automáticamente por Railway
```

**Proceso de Despliegue:**
1. Push a GitHub → main branch
2. Railway detecta cambios automáticamente
3. Instala dependencias de `requirements.txt`
4. Ejecuta comando de inicio
5. Expone la aplicación en dominio público

**URL del Backend Desplegado:**
```
https://todolistf-production.up.railway.app
```

### Base de Datos - Railway MySQL

**Características del Servicio MySQL:**
- **Versión**: MySQL 8.0+
- **Storage**: SSD de alta velocidad
- **Backups**: Automáticos diarios
- **Conexión**: SSL/TLS habilitado
- **Acceso**: Público (con credenciales)

**Conexión Privada vs Pública:**
- **Privada**: Para comunicación interna entre servicios Railway
- **Pública**: Para acceso externo y desarrollo local

### Frontend - Vercel

**Vercel** fue elegido para el frontend por:

1. **Optimizado para React**: Configuración cero para proyectos Vite/React
2. **CDN Global**: Distribución de contenido en edge locations
3. **Deploy Instantáneo**: Despliegues en segundos
4. **Preview Deployments**: Vista previa automática de PRs
5. **Analytics**: Métricas de rendimiento incluidas
6. **Dominio Gratuito**: HTTPS automático

**Configuración del Despliegue:**

```json
// vercel.json (opcional)
{
    "buildCommand": "npm run build",
    "outputDirectory": "dist",
    "framework": "vite",
    "installCommand": "npm install"
}
```

**Variables de Entorno en Vercel:**
```env
VITE_API_URL=https://todolistf-production.up.railway.app
```

**Proceso de Despliegue:**
1. Conectar repositorio GitHub a Vercel
2. Configurar variables de entorno
3. Vercel detecta Vite automáticamente
4. Build y deploy automático en cada push

**URL del Frontend Desplegado:**
```
https://todo-list-frontend.vercel.app
```

### CI/CD Pipeline

```
┌──────────────┐
│ Git Push     │
│ to GitHub    │
└──────┬───────┘
       │
       ├──────────────────┐
       │                  │
       ▼                  ▼
┌─────────────┐    ┌─────────────┐
│  Railway    │    │   Vercel    │
│  Webhook    │    │   Webhook   │
└──────┬──────┘    └──────┬──────┘
       │                  │
       ▼                  ▼
┌─────────────┐    ┌─────────────┐
│ Build       │    │ Build       │
│ Backend     │    │ Frontend    │
└──────┬──────┘    └──────┬──────┘
       │                  │
       ▼                  ▼
┌─────────────┐    ┌─────────────┐
│ Deploy      │    │ Deploy      │
│ Backend     │    │ Frontend    │
└─────────────┘    └─────────────┘
```

---

## 💻 Instalación Local

### Prerrequisitos

- **Node.js** >= 18.0.0
- **Python** >= 3.11
- **MySQL** >= 8.0 (o acceso a Railway MySQL)
- **Git**

### 1. Clonar el Repositorio

```bash
git clone https://github.com/MariaGuerrero104/Todo_list_F.git
cd Todo_list_F
```

### 2. Configurar Backend

```bash
# Navegar al directorio backend
cd backend

# Crear entorno virtual
python -m venv entornoV

# Activar entorno virtual
# Windows:
.\entornoV\Scripts\Activate.ps1
# Linux/Mac:
source entornoV/bin/activate

# Instalar dependencias
pip install -r requirements.txt

# Crear archivo .env
# Copiar .env.example y configurar credenciales
copy .env.example .env  # Windows
cp .env.example .env    # Linux/Mac

# Configurar variable de entorno
# Editar .env con tus credenciales MySQL
```

**Contenido del archivo `.env`:**
```env
MYSQL_PUBLIC_URL=mysql+pymysql://user:password@host:port/database
```

### 3. Iniciar Backend

```bash
# Desde el directorio backend con entorno virtual activado
uvicorn main:app --reload

# El servidor estará disponible en:
# http://localhost:8000
# Documentación interactiva en:
# http://localhost:8000/docs
```

### 4. Configurar Frontend

```bash
# Navegar al directorio frontend
cd ../frontend

# Instalar dependencias
npm install

# Crear archivo .env
copy .env.example .env  # Windows
cp .env.example .env    # Linux/Mac

# Configurar variable de entorno
# Editar .env con la URL del backend
```

**Contenido del archivo `.env`:**
```env
VITE_API_URL=http://localhost:8000
```

### 5. Iniciar Frontend

```bash
# Desde el directorio frontend
npm run dev

# El servidor estará disponible en:
# http://localhost:5173
```

### 6. Acceder a la Aplicación

Abre tu navegador y ve a:
```
http://localhost:5173
```

---

## 📚 Documentación de la API

### URL Base

```
Producción: https://todolistf-production.up.railway.app
Desarrollo: http://localhost:8000
```

### Autenticación

Actualmente, la API no requiere autenticación. Todas las tareas están asociadas al `usuario_id: 1`.

### Endpoints

#### 1. Verificar Estado del Servidor

Verifica que el backend esté funcionando y la conexión a la base de datos sea exitosa.

**Endpoint:** `GET /`

**Respuesta Exitosa (200 OK):**
```json
{
    "message": "API Todo List funcionando correctamente",
    "version": "1.0.0",
    "database": {
        "status": "connected",
        "message": "Base de datos MySQL conectada correctamente"
    }
}
```

**Ejemplo de Uso:**
```bash
curl https://todolistf-production.up.railway.app/
```

---

#### 2. Obtener Todas las Tareas

Obtiene la lista de todas las tareas de un usuario específico.

**Endpoint:** `GET /api/tareas`

**Query Parameters:**
| Parámetro | Tipo | Requerido | Por Defecto | Descripción |
|-----------|------|-----------|-------------|-------------|
| `usuario_id` | integer | No | - | ID del usuario |
| `completada` | boolean | No | - | Filtrar por estado de completitud |
| `skip` | integer | No | 0 | Número de registros a saltar (paginación) |
| `limit` | integer | No | 100 | Número máximo de registros a devolver |

**Respuesta Exitosa (200 OK):**
```json
[
    {
        "id": 1,
        "titulo": "Comprar leche",
        "completada": false,
        "fecha_creacion": "2025-12-10T12:30:00",
        "usuario_id": 1
    },
    {
        "id": 2,
        "titulo": "Estudiar FastAPI",
        "completada": true,
        "fecha_creacion": "2025-12-10T10:00:00",
        "usuario_id": 1
    }
]
```

**Ejemplo de Uso:**
```bash
# Obtener todas las tareas del usuario 1
curl https://todolistf-production.up.railway.app/api/tareas?usuario_id=1

# Obtener solo tareas completadas
curl https://todolistf-production.up.railway.app/api/tareas?usuario_id=1&completada=true

# Paginación: obtener 10 tareas, saltando las primeras 20
curl https://todolistf-production.up.railway.app/api/tareas?usuario_id=1&skip=20&limit=10
```

**JavaScript Fetch:**
```javascript
const response = await fetch(
    `${API_URL}/api/tareas?usuario_id=1`,
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
);
const tareas = await response.json();
```

---

#### 3. Obtener una Tarea por ID

Obtiene los detalles de una tarea específica.

**Endpoint:** `GET /api/tareas/{id}`

**Path Parameters:**
| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `id` | integer | ID de la tarea |

**Respuesta Exitosa (200 OK):**
```json
{
    "id": 1,
    "titulo": "Comprar leche",
    "completada": false,
    "fecha_creacion": "2025-12-10T12:30:00",
    "usuario_id": 1
}
```

**Respuesta de Error (404 Not Found):**
```json
{
    "detail": "Tarea no encontrada"
}
```

**Ejemplo de Uso:**
```bash
curl https://todolistf-production.up.railway.app/api/tareas/1
```

---

#### 4. Crear una Nueva Tarea

Crea una nueva tarea en el sistema.

**Endpoint:** `POST /api/tareas`

**Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
    "titulo": "Nueva tarea",
    "completada": false,
    "usuario_id": 1
}
```

**Schema del Request:**
| Campo | Tipo | Requerido | Por Defecto | Descripción |
|-------|------|-----------|-------------|-------------|
| `titulo` | string | Sí | - | Título de la tarea (máx. 200 caracteres) |
| `completada` | boolean | No | false | Estado de completitud |
| `usuario_id` | integer | Sí | - | ID del usuario propietario |

**Respuesta Exitosa (201 Created):**
```json
{
    "id": 3,
    "titulo": "Nueva tarea",
    "completada": false,
    "fecha_creacion": "2025-12-10T15:45:00",
    "usuario_id": 1
}
```

**Respuesta de Error (422 Unprocessable Entity):**
```json
{
    "detail": [
        {
            "loc": ["body", "titulo"],
            "msg": "field required",
            "type": "value_error.missing"
        }
    ]
}
```

**Ejemplo de Uso:**
```bash
curl -X POST https://todolistf-production.up.railway.app/api/tareas \
     -H "Content-Type: application/json" \
     -d '{"titulo": "Aprender React", "usuario_id": 1}'
```

**JavaScript Fetch:**
```javascript
const response = await fetch(`${API_URL}/api/tareas`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        titulo: 'Nueva tarea',
        usuario_id: 1
    })
});
const nuevaTarea = await response.json();
```

---

#### 5. Actualizar una Tarea

Actualiza los campos de una tarea existente.

**Endpoint:** `PUT /api/tareas/{id}`

**Path Parameters:**
| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `id` | integer | ID de la tarea a actualizar |

**Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
    "titulo": "Título actualizado",
    "completada": true,
    "usuario_id": 1
}
```

**Schema del Request:**
| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| `titulo` | string | Sí | Nuevo título de la tarea |
| `completada` | boolean | Sí | Nuevo estado de completitud |
| `usuario_id` | integer | Sí | ID del usuario (validación) |

**Respuesta Exitosa (200 OK):**
```json
{
    "id": 1,
    "titulo": "Título actualizado",
    "completada": true,
    "fecha_creacion": "2025-12-10T12:30:00",
    "usuario_id": 1
}
```

**Respuesta de Error (404 Not Found):**
```json
{
    "detail": "Tarea no encontrada"
}
```

**Ejemplo de Uso:**
```bash
curl -X PUT https://todolistf-production.up.railway.app/api/tareas/1 \
     -H "Content-Type: application/json" \
     -d '{"titulo": "Comprar leche y pan", "completada": true, "usuario_id": 1}'
```

**JavaScript Fetch:**
```javascript
const response = await fetch(`${API_URL}/api/tareas/${id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        titulo: 'Título actualizado',
        completada: true,
        usuario_id: 1
    })
});
const tareaActualizada = await response.json();
```

---

#### 6. Eliminar una Tarea

Elimina permanentemente una tarea del sistema.

**Endpoint:** `DELETE /api/tareas/{id}`

**Path Parameters:**
| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `id` | integer | ID de la tarea a eliminar |

**Respuesta Exitosa (204 No Content):**
```
Sin cuerpo de respuesta
```

**Respuesta de Error (404 Not Found):**
```json
{
    "detail": "Tarea no encontrada"
}
```

**Ejemplo de Uso:**
```bash
curl -X DELETE https://todolistf-production.up.railway.app/api/tareas/1
```

**JavaScript Fetch:**
```javascript
const response = await fetch(`${API_URL}/api/tareas/${id}`, {
    method: 'DELETE'
});
// Sin respuesta en caso de éxito (204)
```

---

### Códigos de Estado HTTP

| Código | Significado | Uso en la API |
|--------|-------------|---------------|
| 200 | OK | Petición exitosa (GET, PUT) |
| 201 | Created | Recurso creado exitosamente (POST) |
| 204 | No Content | Recurso eliminado exitosamente (DELETE) |
| 400 | Bad Request | Datos de entrada inválidos |
| 404 | Not Found | Recurso no encontrado |
| 422 | Unprocessable Entity | Error de validación de datos |
| 500 | Internal Server Error | Error del servidor |

### Documentación Interactiva

FastAPI genera automáticamente documentación interactiva:

- **Swagger UI**: `https://todolistf-production.up.railway.app/docs`
- **ReDoc**: `https://todolistf-production.up.railway.app/redoc`

---

## ✨ Características

### Funcionalidades Principales

- ✅ **Crear Tareas**: Agrega nuevas tareas con un solo clic
- 📝 **Editar Tareas**: Modifica el texto de las tareas existentes inline
- ✔️ **Marcar como Completada**: Toggle para marcar/desmarcar tareas
- 🗑️ **Eliminar Tareas**: Elimina tareas que ya no necesitas
- 📅 **Fecha de Creación**: Cada tarea muestra cuándo fue creada
- 🔄 **Actualización en Tiempo Real**: Los cambios se reflejan inmediatamente
- 💾 **Persistencia**: Todas las tareas se guardan en la base de datos

### Experiencia de Usuario

- 🎨 **Diseño Moderno**: Interfaz elegante con tema dark mode
- 📱 **Responsive**: Funciona perfectamente en móviles, tablets y desktop
- ⚡ **Rápido**: Carga instantánea y operaciones veloces
- 🎭 **Animaciones Suaves**: Transiciones fluidas en todas las interacciones
- 🔔 **Feedback Visual**: Modales y notificaciones para confirmar acciones
- 🎯 **Intuitivo**: Diseño minimalista y fácil de usar

### Características Técnicas

- 🔒 **Validación de Datos**: Validación en frontend y backend
- 🛡️ **Manejo de Errores**: Mensajes claros y recuperación automática
- 🔌 **API RESTful**: Arquitectura escalable y bien documentada
- 📊 **Estado de Conexión**: Indicador visual del estado de la base de datos
- 🚀 **Optimizado**: Build optimizado para producción
- 🔧 **Logs**: Sistema de logging para debugging

---

## 🔐 Variables de Entorno

### Backend (.env)

```env
# Base de Datos MySQL
MYSQL_PUBLIC_URL=mysql+pymysql://user:password@host:port/database

# Ejemplo con Railway:
# MYSQL_PUBLIC_URL=mysql+pymysql://root:password123@mainline.proxy.rlwy.net:41352/railway
```

### Frontend (.env)

```env
# URL del Backend API
VITE_API_URL=https://todolistf-production.up.railway.app

# Para desarrollo local:
# VITE_API_URL=http://localhost:8000
```

### Configuración en Railway

**Variables de Entorno del Backend:**
1. Ve a tu proyecto en Railway
2. Selecciona el servicio del backend
3. Click en "Variables"
4. Agrega: `MYSQL_PUBLIC_URL` con la URL de conexión MySQL

**La variable `PORT` es asignada automáticamente por Railway.**

### Configuración en Vercel

**Variables de Entorno del Frontend:**
1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega: `VITE_API_URL` con la URL de tu backend en Railway
4. Aplica a: Production, Preview, Development

---

## 📁 Estructura del Proyecto

```
Todo_list_F/
│
├── backend/                          # Backend FastAPI
│   ├── main.py                       # Aplicación principal, endpoints
│   ├── models.py                     # Modelos SQLAlchemy (ORM)
│   ├── schemas.py                    # Esquemas Pydantic (validación)
│   ├── database.py                   # Configuración de base de datos
│   ├── requirements.txt              # Dependencias Python
│   ├── runtime.txt                   # Versión de Python para Railway
│   ├── Procfile                      # Comando de inicio para Railway
│   ├── railway.json                  # Configuración Railway
│   ├── .env                          # Variables de entorno (no versionado)
│   ├── .env.example                  # Plantilla de variables de entorno
│   ├── .gitignore                    # Archivos ignorados por Git
│   ├── README.md                     # Documentación del backend
│   └── entornoV/                     # Entorno virtual Python (no versionado)
│
├── frontend/                         # Frontend React
│   ├── src/
│   │   ├── main.jsx                  # Punto de entrada React
│   │   ├── App.jsx                   # Componente principal
│   │   ├── TodoItem.jsx              # Componente de tarea
│   │   ├── Editartarea.jsx           # Componente de edición (legacy)
│   │   ├── index.css                 # Estilos globales y Tailwind
│   │   └── assets/                   # Imágenes y recursos
│   ├── public/                       # Archivos públicos
│   ├── index.html                    # HTML base
│   ├── package.json                  # Dependencias Node.js
│   ├── package-lock.json             # Lock de dependencias
│   ├── vite.config.js                # Configuración Vite
│   ├── tailwind.config.js            # Configuración Tailwind CSS
│   ├── postcss.config.js             # Configuración PostCSS
│   ├── eslint.config.js              # Configuración ESLint
│   ├── .env                          # Variables de entorno (no versionado)
│   ├── .gitignore                    # Archivos ignorados por Git
│   └── README.md                     # Documentación del frontend
│
├── database/                         # Scripts de base de datos (opcional)
│
├── README.md                         # Este archivo - Documentación principal
├── DEPLOYMENT.md                     # Guía de despliegue
├── .gitignore                        # Ignorar archivos del proyecto
└── package.json                      # Configuración root (si existe)
```

### Descripción de Archivos Clave

#### Backend

- **main.py**: Define todos los endpoints de la API REST y la configuración de CORS
- **models.py**: Define las tablas de la base de datos usando SQLAlchemy ORM
- **schemas.py**: Define los esquemas de validación de datos con Pydantic
- **database.py**: Configura la conexión a MySQL y el motor SQLAlchemy
- **requirements.txt**: Lista todas las dependencias Python necesarias
- **railway.json**: Configuración específica para el despliegue en Railway

#### Frontend

- **App.jsx**: Componente principal que gestiona el estado y la lógica de la aplicación
- **TodoItem.jsx**: Componente reutilizable para renderizar cada tarea individual
- **index.css**: Estilos globales, animaciones y configuración de Tailwind
- **vite.config.js**: Configuración del build tool Vite
- **tailwind.config.js**: Configuración de Tailwind CSS (colores, plugins, etc.)

---

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto:

### Cómo Contribuir

1. **Fork el repositorio**
   ```bash
   # Click en "Fork" en GitHub
   ```

2. **Clona tu fork**
   ```bash
   git clone https://github.com/tu-usuario/Todo_list_F.git
   cd Todo_list_F
   ```

3. **Crea una rama para tu feature**
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

4. **Haz tus cambios y commit**
   ```bash
   git add .
   git commit -m "Agregar nueva funcionalidad"
   ```

5. **Push a tu fork**
   ```bash
   git push origin feature/nueva-funcionalidad
   ```

6. **Abre un Pull Request**
   - Ve a tu fork en GitHub
   - Click en "New Pull Request"
   - Describe los cambios realizados

### Directrices de Contribución

- Sigue las convenciones de código existentes
- Escribe mensajes de commit descriptivos
- Agrega tests si es posible
- Actualiza la documentación si es necesario
- Asegúrate de que el código pase los linters

### Reportar Bugs

Si encuentras un bug, por favor abre un issue en GitHub con:
- Descripción del problema
- Pasos para reproducirlo
- Comportamiento esperado vs actual
- Screenshots si aplica
- Versión del navegador/OS

---

## 📄 Licencia

Este proyecto está licenciado bajo la **Licencia MIT**.

```
MIT License

Copyright (c) 2025 Maria Guerrero

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👥 Autores

- **Maria Guerrero** - *Desarrollo Full Stack* - [@MariaGuerrero104](https://github.com/MariaGuerrero104)

---

## 🙏 Agradecimientos

- **FastAPI** - Por proporcionar un framework increíblemente rápido y fácil de usar
- **React Team** - Por el mejor framework de UI
- **Tailwind CSS** - Por hacer los estilos tan sencillos
- **Railway** - Por el hosting gratuito del backend
- **Vercel** - Por el hosting gratuito del frontend
- **Heroicons** - Por los hermosos iconos SVG

---

## 📞 Contacto

¿Tienes preguntas o sugerencias? ¡No dudes en contactarnos!

- **Email**: maria.guerrero@example.com
- **GitHub**: [@MariaGuerrero104](https://github.com/MariaGuerrero104)
- **LinkedIn**: [Maria Guerrero](https://linkedin.com/in/mariaguerrero)

---

## 📈 Estado del Proyecto

🟢 **Activo** - En desarrollo activo y mantenimiento continuo

### Roadmap

- [ ] Autenticación de usuarios con JWT
- [ ] Categorías y etiquetas para tareas
- [ ] Fecha de vencimiento para tareas
- [ ] Notificaciones push
- [ ] Modo offline con PWA
- [ ] Temas personalizables
- [ ] Exportar tareas a PDF/CSV
- [ ] API de integración con calendarios
- [ ] Aplicación móvil nativa

---

## 🔗 Enlaces Útiles

- [Documentación de FastAPI](https://fastapi.tiangolo.com/)
- [Documentación de React](https://react.dev/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/)
- [Documentación de Railway](https://docs.railway.app/)
- [Documentación de Vercel](https://vercel.com/docs)

---

<div align="center">

**⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub ⭐**

Hecho con ❤️ y ☕ por [Maria Guerrero](https://github.com/MariaGuerrero104)

</div>
