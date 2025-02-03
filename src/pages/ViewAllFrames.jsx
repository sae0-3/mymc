import React, { useEffect, useState } from "react";
import { db } from "@/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const ViewAllFrames = () => {
  const [frames, setFrames] = useState([]);
  const [loading, setLoading] = useState(true);

  // Obtener todos los marcos desde Firestore
  const fetchFrames = async () => {
    try {
      const framesCollection = collection(db, "marcos"); // Asegúrate que "marcos" es la colección correcta en Firestore
      const frameSnapshot = await getDocs(framesCollection);
      const frameList = frameSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFrames(frameList);
    } catch (error) {
      console.error("Error al obtener los marcos:", error);
    } finally {
      setLoading(false);
    }
  };

  // Eliminar un marco
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "marcos", id));
      setFrames(frames.filter((frame) => frame.id !== id)); // Actualizar la lista después de eliminar
    } catch (error) {
      console.error("Error al eliminar el marco:", error);
    }
  };

  // Cargar los marcos al iniciar la página
  useEffect(() => {
    fetchFrames();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Ver Todos los Marcos</h1>

      {loading ? (
        <p className="text-center text-gray-500">Cargando marcos...</p>
      ) : frames.length === 0 ? (
        <p className="text-center text-gray-500">No hay marcos registrados.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Código</th>
              <th className="p-3 border">Dimensiones (LxAxH)</th>
              <th className="p-3 border">Material</th>
              <th className="p-3 border">Unidades</th>
              <th className="p-3 border">Precio Unitario (Bs)</th>
              <th className="p-3 border">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {frames.map((frame) => (
              <tr key={frame.id} className="text-center hover:bg-gray-50">
                <td className="p-3 border">{frame.codigo}</td>
                <td className="p-3 border">
                  {frame.largo}cm x {frame.ancho}cm x {frame.alto}cm
                </td>
                <td className="p-3 border">{frame.material}</td>
                <td className="p-3 border">{frame.unidadesFabricar}</td>
                <td className="p-3 border">{frame.precioUnitario}</td>
                <td className="p-3 border flex justify-center gap-2">
                  <button
                    onClick={() => handleDelete(frame.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                  <button
                    onClick={() => alert(`Editar marco: ${frame.codigo}`)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewAllFrames;
