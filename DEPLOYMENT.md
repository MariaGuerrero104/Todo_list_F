# Instrucciones para conectar Frontend con Backend en Railway

## 📋 Paso a paso

### 1. Desplegar el Backend en Railway

Sigue las instrucciones en `backend/README.md` para desplegar el backend.

### 2. Obtener la URL del Backend

Después del despliegue, Railway te dará una URL pública como:
```
https://todo-backend-production.up.railway.app
```

### 3. Configurar el Frontend

Actualiza el archivo `.env` en el directorio `frontend/`:

```env
VITE_API_URL=https://tu-backend-url.up.railway.app
```

**Importante:** No incluyas `/` al final de la URL.

### 4. Probar localmente

```bash
cd frontend
npm install
npm run dev
```

El frontend en local se conectará al backend en Railway.

### 5. Desplegar el Frontend (opcional)

Puedes desplegar el frontend en:
- **Vercel** (recomendado para React)
- **Netlify**
- **Railway** (también soporta frontends)

#### Desplegar en Vercel:

1. Instala Vercel CLI:
```bash
npm i -g vercel
```

2. Desde el directorio `frontend/`:
```bash
vercel
```

3. Configura la variable de entorno en Vercel:
   - Ve al dashboard de Vercel
   - Settings → Environment Variables
   - Agrega: `VITE_API_URL` con tu URL de Railway

## ✅ Verificación

Para verificar que todo funciona:

1. Abre la consola del navegador (F12)
2. Ve a la pestaña "Network"
3. Intenta agregar una tarea
4. Deberías ver peticiones exitosas (status 200) a tu backend en Railway

## 🔧 Troubleshooting

**Error de CORS:**
- Verifica que el backend en Railway tenga configurado CORS correctamente
- El backend ya está configurado para aceptar `*.railway.app`

**No se conecta al backend:**
- Verifica que `VITE_API_URL` esté correctamente configurado
- Asegúrate de que el backend esté corriendo en Railway
- Verifica que no haya `/` al final de la URL
