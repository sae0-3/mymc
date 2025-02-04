import React, { useEffect, useState } from "react";
import { db } from "@/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const ViewAllFrames = () => {
  const [frames, setFrames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Obtener todos los marcos desde Firestore
  const fetchFrames = async () => {
    try {
      const framesCollection = collection(db, "marcos");
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

  useEffect(() => {
    fetchFrames();
  }, []);

  // Eliminar un marco
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este marco?");
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, "marcos", id));
        setFrames(frames.filter((frame) => frame.id !== id));
        setMessage("✅ Marco eliminado con éxito.");
      } catch (error) {
        console.error("Error al eliminar el marco:", error);
        setMessage("❌ Error al eliminar el marco.");
      }
    }
  };

  // Filtrar marcos por búsqueda
  const filteredFrames = frames.filter(
    (frame) =>
      frame.codigo?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      frame.material?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Ver Todos los Marcos</h1>

      {message && (
        <div className={`mb-4 p-3 text-white rounded-md ${message.includes("✅") ? "bg-green-600" : "bg-red-600"}`}>
          {message}
        </div>
      )}

      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Buscar por código o material..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded-md w-1/3 focus:outline-none focus:ring-2 focus:ring-[#5e2222]"
        />
        <button
          onClick={fetchFrames}
          className="bg-[#5e2222] text-white px-4 py-2 rounded-md hover:bg-[#451616] transition duration-150"
        >
          Refrescar
        </button>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Cargando marcos...</p>
      ) : filteredFrames.length === 0 ? (
        <p className="text-center text-gray-500">No hay marcos registrados.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Código</th>
              <th className="p-3 border">Dimensiones (L x A x H)</th>
              <th className="p-3 border">Material</th>
              <th className="p-3 border">Unidades</th>
              <th className="p-3 border">Precio Unitario (Bs)</th>
              <th className="p-3 border">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredFrames.map((frame) => (
              <tr key={frame.id} className="text-center hover:bg-gray-50">
                <td className="p-3 border">{frame.codigo}</td>
                <td className="p-3 border">
                  {frame.largo}cm x {frame.ancho}cm x {frame.alto}cm
                </td>
                <td className="p-3 border">{frame.material}</td>
                <td className="p-3 border">{frame.unidadesFabricar || frame.unidades}</td>
                <td className="p-3 border">{frame.precioUnitario}</td>
                <td className="p-3 border flex justify-center gap-2">
                  <button
                    onClick={() => navigate(`/editar-marco/${frame.id}`)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-150"
                  >
                    <i className="bi bi-pencil-square" /> Editar
                  </button>
                  <button
                    onClick={() => handleDelete(frame.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-150"
                  >
                    <i className="bi bi-trash-fill" /> Eliminar
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
