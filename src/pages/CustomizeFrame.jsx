import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";

const materialsList = [
  { name: "Aluminio", price: 50 },
  { name: "Madera", price: 40 },
  { name: "PVC", price: 35 },
  { name: "Acero Inoxidable", price: 60 },
  { name: "Fibra de Vidrio", price: 70 },
  { name: "Hierro Forjado", price: 55 },
  { name: "Bronce", price: 80 },
  { name: "Compuestos", price: 65 }
];

const generateCode = () => `MC-${Math.floor(1000 + Math.random() * 9000)}`;

const CustomizeFrame = () => {
  const [formData, setFormData] = useState({
    codigo: generateCode(),
    largo: "",
    alto: "",
    ancho: "",
    material: [],
    unidadesFabricar: 0,
    precioUnitario: 0,
    precioTotal: 0,
    fechaRegistro: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showMaterialSelect, setShowMaterialSelect] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState("Seleccionar Materiales");
  const navigate = useNavigate();

  useEffect(() => {
    const totalMaterialPrice = formData.material.reduce((acc, mat) => {
      const materialData = materialsList.find((m) => m.name === mat);
      return acc + (materialData ? materialData.price : 0);
    }, 0);

    const precioUnitario = totalMaterialPrice;
    const precioTotal = precioUnitario * formData.unidadesFabricar;

    setFormData((prevData) => ({
      ...prevData,
      precioUnitario,
      precioTotal,
    }));
  }, [formData.material, formData.unidadesFabricar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMaterialClick = (material) => {
    setFormData({ ...formData, material: [material] });
    setSelectedMaterial(material);
    setShowMaterialSelect(false);
  };

  const handleChangeMaterial = () => {
    setFormData({ ...formData, material: [] });
    setSelectedMaterial("Seleccionar Materiales");
    setShowMaterialSelect(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (formData.unidadesFabricar <= 0) {
      setMessage("❌ Las unidades deben ser mayores a 0.");
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, "personalizaciones"), formData);
      setMessage("✅ ¡Marco personalizado con éxito!");
      setFormData({
        codigo: generateCode(),
        largo: "",
        alto: "",
        ancho: "",
        material: [],
        unidadesFabricar: 0,
        precioUnitario: 0,
        precioTotal: 0,
        fechaRegistro: ""
      });
      setSelectedMaterial("Seleccionar Materiales");
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
        <div className={`mb-4 p-3 text-white rounded-md ${message.includes("✅") ? "bg-green-600" : "bg-red-600"}`}>
          {message}
        </div>
      )}

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
        <label>Código del Marco
          <input name="codigo" value={formData.codigo} className="border p-3 rounded-lg bg-gray-100" readOnly />
        </label>

        <label>Largo (cm)
          <input name="largo" type="number" min="0" value={formData.largo} onChange={handleChange} className="border p-3 rounded-lg" required />
        </label>

        <label>Alto (cm)
          <input name="alto" type="number" min="0" value={formData.alto} onChange={handleChange} className="border p-3 rounded-lg" required />
        </label>

        <label>Ancho (cm)
          <input name="ancho" type="number" min="0" value={formData.ancho} onChange={handleChange} className="border p-3 rounded-lg" required />
        </label>

        {!formData.material.length && (
          <label>Material
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowMaterialSelect(!showMaterialSelect)}
                className="border p-3 rounded-lg bg-gray-200 hover:bg-gray-300 transition w-full text-left"
              >
                {selectedMaterial}
              </button>
              {showMaterialSelect && (
                <div className="absolute z-10 w-full border p-3 rounded-lg bg-white shadow-md mt-1">
                  {materialsList.map((mat) => (
                    <div
                      key={mat.name}
                      onClick={() => handleMaterialClick(mat.name)}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {mat.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </label>
        )}

        {formData.material.length > 0 && (
          <label>Material Seleccionado
            <div className="flex items-center gap-2">
              <input name="material" value={formData.material[0]} className="border p-3 rounded-lg bg-gray-100" readOnly />
              <button
                type="button"
                onClick={handleChangeMaterial}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Cambiar
              </button>
            </div>
          </label>
        )}

        <label>Unidades a Fabricar
          <input name="unidadesFabricar" type="number" min="1" value={formData.unidadesFabricar} onChange={handleChange} className="border p-3 rounded-lg" required />
        </label>

        <label>Precio Unitario (Bs)
          <input name="precioUnitario" value={formData.precioUnitario.toFixed(2)} className="border p-3 rounded-lg bg-gray-100" readOnly />
        </label>

        <label>Fecha de Registro
          <input name="fechaRegistro" type="date" value={formData.fechaRegistro} onChange={handleChange} className="border p-3 rounded-lg" required />
        </label>

        <div className="col-span-1 md:col-span-2">
          <label>Precio Total:
            <input name="precioTotal" value={formData.precioTotal.toFixed(2)} className="border p-3 rounded-lg bg-gray-100" readOnly />
          </label>
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
            onClick={() => navigate("/ver-todos-los-marcos")}
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
