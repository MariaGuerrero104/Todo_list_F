import TodoItem from "./TodoItem.jsx";
import { useState, useEffect } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export default function App() {
  const [tareas, setTareas] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dbStatus, setDbStatus] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    cargarTareas();
    verificarConexion();
  }, []);

  const verificarConexion = async () => {
    try {
      const response = await fetch(`${API_URL}/`);
      const data = await response.json();
      setDbStatus(data.database);
    } catch (err) {
      setDbStatus({ status: "disconnected", message: "No se pudo conectar al backend" });
    }
  };

  const cargarTareas = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/api/tareas?usuario_id=1`);
      if (!response.ok) throw new Error("Error al cargar tareas");
      const data = await response.json();
      setTareas(data);
    } catch (err) {
      setError(err.message);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const agregarTarea = async () => {
    if (!input.trim()) return;
    
    try {
      const response = await fetch(`${API_URL}/api/tareas`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          titulo: input,
          usuario_id: 1
        })
      });
      
      if (!response.ok) throw new Error("Error al agregar tarea");
      const nuevaTarea = await response.json();
      setTareas([...tareas, nuevaTarea]);
      setInput("");
      
      // Mostrar modal de éxito
      setShowSuccessModal(true);
      
      // Recargar después de 2 segundos
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      setError(err.message);
      console.error("Error:", err);
    }
  };

  const eliminarTarea = async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/tareas/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Error al eliminar tarea");
      setTareas(tareas.filter(t => t.id !== id));
    } catch (err) {
      setError(err.message);
      console.error("Error:", err);
    }
  };

  const toggleCompleted = async (id) => {
    const tarea = tareas.find(t => t.id === id);
    if (!tarea) return;

    try {
      const response = await fetch(`${API_URL}/api/tareas/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          titulo: tarea.titulo,
          completada: !tarea.completada,
          usuario_id: tarea.usuario_id
        })
      });
      
      if (!response.ok) throw new Error("Error al actualizar tarea");
      const tareaActualizada = await response.json();
      setTareas(tareas.map(t => t.id === id ? tareaActualizada : t));
    } catch (err) {
      setError(err.message);
      console.error("Error:", err);
    }
  };

  const editarTarea = async (id, nuevoTitulo) => {
    const tarea = tareas.find(t => t.id === id);
    if (!tarea) return;

    try {
      const response = await fetch(`${API_URL}/api/tareas/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          titulo: nuevoTitulo,
          completada: tarea.completada,
          usuario_id: tarea.usuario_id
        })
      });
      
      if (!response.ok) throw new Error("Error al editar tarea");
      const tareaActualizada = await response.json();
      setTareas(tareas.map(t => t.id === id ? tareaActualizada : t));
    } catch (err) {
      setError(err.message);
      console.error("Error:", err);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') agregarTarea();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl">
        {/* Efecto de brillo de fondo */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"></div>
        
        <div className="relative bg-black/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-pink-500/20 overflow-hidden">
          
          {/* Header con degradado rosa */}
          <div className="bg-gradient-to-r from-pink-600 via-pink-500 to-purple-600 p-8">
            <h1 className="text-5xl font-black text-white text-center tracking-tight">
              ✨ TODO LIST
            </h1>
            <p className="text-center text-white/90 mt-2 text-sm font-medium">Organiza tu día con estilo</p>
          </div>

          {/* Cuerpo */}
          <div className="p-8 bg-gradient-to-b from-gray-900/50 to-black">
            
            {/* Estado de la base de datos */}
            {dbStatus && (
              <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 backdrop-blur-sm ${
                dbStatus.status === 'connected' 
                  ? 'bg-green-500/10 border border-green-500/30 text-green-400' 
                  : 'bg-red-500/10 border border-red-500/30 text-red-400'
              }`}>
                <div className={`w-3 h-3 rounded-full ${
                  dbStatus.status === 'connected' ? 'bg-green-500' : 'bg-red-500'
                } animate-pulse shadow-lg`}></div>
                <span className="text-sm font-medium">{dbStatus.message}</span>
              </div>
            )}

            {/* Input para agregar tarea */}
            <div className="mb-8 flex gap-3">
              <input
                className="flex-1 px-5 py-4 bg-gray-900/70 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 transition-all font-medium"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="✨ Agregar nueva tarea..."
                disabled={loading}
              />
              <button
                className="px-8 py-4 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 text-white font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105 active:scale-95"
                onClick={agregarTarea}
                disabled={loading || !input.trim()}
              >
                <PlusIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Mensajes de error */}
            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border-2 border-red-500/50 rounded-xl text-red-400 backdrop-blur-sm">
                <p className="font-semibold">⚠️ {error}</p>
              </div>
            )}

            {/* Loading */}
            {loading && (
              <div className="text-center py-12">
                <div className="inline-block w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-400 mt-4 font-medium">Cargando tareas...</p>
              </div>
            )}

            {/* Lista de tareas */}
            <div className="space-y-3">
              {tareas.length === 0 && !loading ? (
                <div className="text-center py-16 bg-gray-900/30 rounded-xl border-2 border-dashed border-gray-700">
                  <p className="text-gray-400 text-lg font-semibold">No hay tareas aún</p>
                  <p className="text-gray-500 text-sm mt-2">¡Comienza agregando tu primera tarea! 🚀</p>
                </div>
              ) : (
                tareas.map((tarea) => (
                  <TodoItem
                    key={tarea.id}
                    tarea={tarea}
                    toggleCompleted={toggleCompleted}
                    eliminarTarea={eliminarTarea}
                    editarTarea={editarTarea}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal de éxito */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-pink-500 rounded-2xl p-8 max-w-md mx-4 shadow-2xl shadow-pink-500/50 animate-scale-in">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/50">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">¡Tarea Agregada!</h3>
              <p className="text-gray-400 mb-4">Tu tarea se ha guardado exitosamente</p>
              <div className="flex justify-center">
                <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
