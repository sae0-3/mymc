import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ManageSuppliers from '@/pages/ManageSuppliers';
import RegisterSupplier from '@/pages/RegisterSupplier';
import RegisterClient from '@/pages/RegisterClient';
import ClientsList from "@/pages/ClientsList";
import CustomizeFrame from "@/pages/CustomizeFrame";
import AddFrame from "@/pages/AddFrame";
import ViewAllFrames from "@/pages/ViewAllFrames"; // ✅ Nueva Importación
import ProtectedRoute from "@/components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route
          path='/'
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path='/manage-suppliers' element={<ManageSuppliers />} />
          <Route path='/registrar-proveedor' element={<RegisterSupplier />} />
          <Route path='/registrar-cliente' element={<RegisterClient />} />
          <Route path='/lista_de_clientes' element={<ClientsList />} />
          <Route path='/añadir-marco' element={<AddFrame />} />               {/* ✅ Corrección */}
          <Route path='/personalizar-marco' element={<CustomizeFrame />} />   {/* ✅ Corrección */}
          <Route path='/ver-todos-los-marcos' element={<ViewAllFrames />} />  {/* ✅ Nueva Ruta */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
