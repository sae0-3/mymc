import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register'; // Importamos la página de registro
import ManageSuppliers from '@/pages/ManageSuppliers';
import RegisterSupplier from '@/pages/RegisterSupplier';
import RegisterClient from '@/pages/RegisterClient';
import ClientsList from "@/pages/ClientsList";
import ProtectedRoute from "@/components/ProtectedRoute"; // Protección de rutas

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} /> {/* Página de registro */}

        {/* Rutas protegidas dentro de MainLayout */}
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path='/gestionar-proveedores' element={<ManageSuppliers />} />
          <Route path='/registrar-proveedor' element={<RegisterSupplier />} />
          <Route path='/registrar-cliente' element={<RegisterClient />} />
          <Route path='/lista_de_clientes' element={<ClientsList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
