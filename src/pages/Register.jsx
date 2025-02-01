import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    pais: "",
    telefono: "",
    sexo: "Masculino",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        nombre: formData.nombre,
        apellido: formData.apellido,
        email: formData.email,
        pais: formData.pais,
        telefono: formData.telefono,
        sexo: formData.sexo,
        uid: user.uid,
      });

      alert("Usuario registrado con éxito");
      navigate("/login");
    } catch (error) {
      setError("Error: " + error.message);
    }
  };

  return (
    <div 
      className="h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: "url('/fondo.jpeg')" }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 backdrop-blur-md bg-opacity-80">
        <h2 className="text-xl font-semibold text-center">Registro de Usuario</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleRegister} className="flex flex-col">
          <input type="text" name="nombre" placeholder="Nombre" className="border p-2 my-2" onChange={handleChange} required />
          <input type="text" name="apellido" placeholder="Apellido" className="border p-2 my-2" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Correo electrónico" className="border p-2 my-2" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Contraseña" className="border p-2 my-2" onChange={handleChange} required />
          <input type="text" name="pais" placeholder="País" className="border p-2 my-2" onChange={handleChange} required />
          <input type="tel" name="telefono" placeholder="Número de teléfono" className="border p-2 my-2" onChange={handleChange} required />
          <select name="sexo" className="border p-2 my-2" onChange={handleChange}>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>
          <button type="submit" className="bg-green-500 text-white p-2 rounded-lg my-2">Registrarse</button>
          <button onClick={() => navigate("/login")} className="text-blue-500 underline">Volver al Login</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
