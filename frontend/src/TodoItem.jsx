import { TrashIcon, PencilIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function TodoItem({ tarea, toggleCompleted, eliminarTarea, editarTarea }) {
  const [editando, setEditando] = useState(false);
  const [nuevoTexto, setNuevoTexto] = useState(tarea.titulo || tarea.text);

  const guardarCambios = () => {
    if (nuevoTexto.trim()) {
      editarTarea(tarea.id, nuevoTexto);
      setEditando(false);
    }
  };

  const cancelarEdicion = () => {
    setNuevoTexto(tarea.titulo || tarea.text);
    setEditando(false);
  };

  return (
    <div className="group bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border-2 border-gray-700/50 rounded-xl p-5 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300">
      <div className="flex items-center gap-4">
        {editando ? (
          <>
            {/* Modo edición */}
            <div className="flex-1 flex gap-3">
              <input
                type="text"
                value={nuevoTexto}
                onChange={(e) => setNuevoTexto(e.target.value)}
                className="flex-1 bg-black/50 border-2 border-pink-500 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 font-medium"
                autoFocus
                onKeyPress={(e) => e.key === 'Enter' && guardarCambios()}
              />
              <button
                onClick={guardarCambios}
                className="px-4 py-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-green-500/30 hover:scale-105 active:scale-95"
                title="Guardar"
              >
                <CheckIcon className="w-5 h-5" />
              </button>
              <button
                onClick={cancelarEdicion}
                className="px-4 py-3 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-bold rounded-xl transition-all hover:scale-105 active:scale-95"
                title="Cancelar"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Checkbox moderno */}
            <button
              onClick={() => toggleCompleted(tarea.id)}
              className="flex-shrink-0 w-6 h-6"
            >
              <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
                (tarea.completada || tarea.completed)
                  ? 'bg-gradient-to-br from-pink-600 to-pink-500 border-pink-500 shadow-lg shadow-pink-500/30 scale-110' 
                  : 'bg-transparent border-gray-500 hover:border-pink-400 hover:scale-110'
              }`}>
                {(tarea.completada || tarea.completed) && (
                  <CheckIcon className="w-4 h-4 text-white" />
                )}
              </div>
            </button>

            {/* Texto de la tarea */}
            <span className={`flex-1 text-lg font-medium transition-all ${
              (tarea.completada || tarea.completed)
                ? 'line-through text-gray-500' 
                : 'text-white'
            }`}>
              {tarea.titulo || tarea.text}
            </span>

            {/* Botones de acción - siempre visibles y destacados */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setEditando(true)}
                className="p-2.5 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 text-white font-bold rounded-lg transition-all shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-110 active:scale-95"
                title="Editar"
              >
                <PencilIcon className="w-5 h-5" />
              </button>
              <button 
                onClick={() => eliminarTarea(tarea.id)}
                className="p-2.5 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold rounded-lg transition-all shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-110 active:scale-95"
                title="Eliminar"
              >
                <TrashIcon className="w-5 h-5" />
              </button>
            </div>
          </>
        )}
      </div>
      
      {/* Fecha de creación si está disponible */}
      {tarea.fecha_creacion && (
        <div className="mt-3 text-xs text-gray-500 ml-10 font-medium">
          📅 {new Date(tarea.fecha_creacion).toLocaleDateString('es-ES', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </div>
      )}
    </div>
  );
}
