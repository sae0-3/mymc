import React, { useState } from "react";
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";

const CustomizeFrame = () => {
  const [formData, setFormData] = useState({
    codigo: "",
    largo: "",
    alto: "",
    ancho: "",
    material: "",
    unidadesFabricar: "",
    precioUnitario: "",
    precioTotal: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      precioTotal: name === "unidadesFabricar" || name === "precioUnitario"
        ? (formData.unidadesFabricar * formData.precioUnitario || 0)
        : formData.precioTotal,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await addDoc(collection(db, "personalizaciones"), formData);
      setMessage("✅ Marco personalizado con éxito!");
      setFormData({
        codigo: "",
        largo: "",
        alto: "",
        ancho: "",
        material: "",
        unidadesFabricar: "",
        precioUnitario: "",
        precioTotal: "",
      });
    } catch (error) {
      console.error("Error al personalizar el marco:", error);
      setMessage("❌ Error al personalizar el marco.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Personalizar un marco</h2>

      {message && (
        <div className="mb-4 p-3 text-white bg-green-600 rounded-md">{message}</div>
      )}

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
        <input name="codigo" placeholder="Código del marco" value={formData.codigo} onChange={handleChange} className="border p-3 rounded-lg" required />
        <input name="largo" placeholder="Largo (cm)" type="number" value={formData.largo} onChange={handleChange} className="border p-3 rounded-lg" required />
        <input name="alto" placeholder="Alto (cm)" type="number" value={formData.alto} onChange={handleChange} className="border p-3 rounded-lg" required />
        <input name="ancho" placeholder="Ancho (cm)" type="number" value={formData.ancho} onChange={handleChange} className="border p-3 rounded-lg" required />
        <input name="material" placeholder="Material" value={formData.material} onChange={handleChange} className="border p-3 rounded-lg" required />
        <input name="unidadesFabricar" placeholder="Unidades a fabricar" type="number" value={formData.unidadesFabricar} onChange={handleChange} className="border p-3 rounded-lg" required />
        <input name="precioUnitario" placeholder="Precio unitario (bs)" type="number" value={formData.precioUnitario} onChange={handleChange} className="border p-3 rounded-lg" required />

        <div className="col-span-1 md:col-span-2">
          <label className="block text-gray-700 font-medium">Precio total:</label>
          <input
            name="precioTotal"
            value={formData.unidadesFabricar * formData.precioUnitario || 0}
            className="border p-3 rounded-lg bg-gray-100"
            readOnly
          />
        </div>

        <div className="col-span-1 md:col-span-2 flex justify-end gap-4">
          <button
            type="submit"
            className="bg-[#5e2222] text-white px-6 py-3 rounded-lg hover:bg-[#4a1b1b] transition duration-300"
            disabled={loading}
          >
            {loading ? "Guardando..." : "Guardar"}
          </button>

          <button
            type="button"
            className="bg-gray-400 text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition duration-300"
          >
            Salir
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomizeFrame;
