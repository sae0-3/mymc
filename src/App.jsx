import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

import MainLayout from '@/layouts/MainLayout'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import ManageSuppliers from '@/pages/ManageSuppliers'
import RegisterSupplier from '@/pages/RegisterSupplier'
import RegisterClient from '@/pages/RegisterClient';
import ClientsList from "@/pages/ClientsList"; // Importar la nueva página

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' Component={Login} />

        <Route path='/' Component={MainLayout}>
          <Route index Component={Home} />
          <Route path='/gestionar-proveedores' Component={ManageSuppliers} />
          <Route path='/registrar-proveedor' Component={RegisterSupplier} />
          <Route path='/registrar-cliente' Component={RegisterClient} />
          <Route path="/lista_de_clientes" element={<ClientsList />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
