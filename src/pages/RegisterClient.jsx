import React, { useState } from "react";
import { db } from "@/firebase"; // Asegúrate de que la ruta sea correcta
import { collection, addDoc } from "firebase/firestore";

const RegisterClient = () => {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    ci: "",
    celular: "",
    sexo: "",
    domicilio: "",
    fechaNacimiento: "",
    departamento: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Función para manejar los cambios en los inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Función para enviar los datos a Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await addDoc(collection(db, "clientes"), formData);
      setMessage("✅ Cliente registrado con éxito!");
      
      // Limpiar formulario
      setFormData({
        nombres: "",
        apellidos: "",
        ci: "",
        celular: "",
        sexo: "",
        domicilio: "",
        fechaNacimiento: "",
        departamento: "",
      });
    } catch (error) {
      console.error("Error al registrar cliente:", error);
      setMessage("❌ Error al registrar el cliente. Revisa la consola.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Registrar nuevo cliente</h2>

      {message && (
        <div className="mb-4 p-3 text-white bg-green-600 rounded-md">{message}</div>
      )}

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>

        <div>
          <label className="block text-gray-700 font-medium">Nombres</label>
          <input type="text" name="nombres" value={formData.nombres} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-3"/>
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Apellidos</label>
          <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-3"/>
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Carnet de Identidad</label>
          <input type="text" name="ci" value={formData.ci} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-3"/>
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Celular</label>
          <input type="text" name="celular" value={formData.celular} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-3"/>
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Sexo</label>
          <select name="sexo" value={formData.sexo} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-3">
            <option value="">Seleccione</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Domicilio</label>
          <input type="text" name="domicilio" value={formData.domicilio} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-3"/>
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Fecha de Nacimiento</label>
          <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-3"/>
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Departamento</label>
          <select name="departamento" value={formData.departamento} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-3">
            <option value="">Seleccione</option>
            <option value="departamento1">Departamento 1</option>
            <option value="departamento2">Departamento 2</option>
          </select>
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

export default RegisterClient;
