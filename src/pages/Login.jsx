import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Inicio de sesión exitoso");
      navigate("/");
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
        <h2 className="text-xl font-semibold text-center">Iniciar Sesión</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form className="flex flex-col">
          <input type="email" placeholder="Correo electrónico" className="border p-2 my-2" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Contraseña" className="border p-2 my-2" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded-lg my-2">
            Iniciar Sesión
          </button>
          <button type="button" onClick={() => navigate("/register")} className="bg-green-500 text-white p-2 rounded-lg my-2">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
