import { db } from '@/firebase'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

import useGet from '@/hooks/useGet'

const ClientsList = () => {
  const { data: clients, loading, error } = useGet(async () => {
    const querySnapshot = await getDocs(collection(db, 'clientes'))
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  })
  const [filteredClients, setFilteredClients] = useState([])
  const [searchCI, setSearchCI] = useState('')

  useEffect(() => {
    setFilteredClients(clients)
  }, [clients])

  const handleSearch = () => {
    if (!searchCI) {
      setFilteredClients(clients)
    } else {
      const results = clients.filter(client => client.ci.includes(searchCI))
      setFilteredClients(results)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('¿Seguro que deseas eliminar este cliente?')) {
      try {
        await deleteDoc(doc(db, 'clientes', id))
        setClients(clients.filter(client => client.id !== id))
        setFilteredClients(filteredClients.filter(client => client.id !== id))
        alert('Cliente eliminado con éxito!')
      } catch (error) {
        console.error('Error al eliminar cliente:', error)
      }
    }
  }

  return (
    <div className='max-w-7xl mx-auto p-8 bg-white shadow-lg rounded-lg'>
      <h2 className='text-3xl font-bold mb-6 text-gray-800'>Datos personales de los clientes</h2>

      <div className='mb-4 flex items-center gap-3'>
        <label className='text-gray-700 font-medium'>Carnet de Identidad</label>
        <input
          type='text'
          value={searchCI}
          onChange={(e) => setSearchCI(e.target.value)}
          className='border border-gray-300 rounded-lg p-2 w-48'
          placeholder='Ingrese CI'
        />
        <button
          onClick={handleSearch}
          className='bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-700'
        >🔍 Buscar</button>
      </div>

      <table className='w-full border-collapse border border-gray-300'>
        <thead>
          <tr className='bg-gray-200'>
            <th className='border border-gray-300 p-2'>Nombres</th>
            <th className='border border-gray-300 p-2'>Apellidos</th>
            <th className='border border-gray-300 p-2'>CI</th>
            <th className='border border-gray-300 p-2'>Celular</th>
            <th className='border border-gray-300 p-2'>Sexo</th>
            <th className='border border-gray-300 p-2'>Domicilio</th>
            <th className='border border-gray-300 p-2'>Fecha de Nacimiento</th>
            <th className='border border-gray-300 p-2'>Departamento</th>
            <th className='border border-gray-300 p-2'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredClients.length === 0 ? (
            <tr>
              <td colSpan='9' className='text-center py-4'>No se encontraron clientes</td>
            </tr>
          ) : (
            filteredClients.map((client) => (
              <tr key={client.id} className='hover:bg-gray-100'>
                <td className='border border-gray-300 p-2'>{client.nombres}</td>
                <td className='border border-gray-300 p-2'>{client.apellidos}</td>
                <td className='border border-gray-300 p-2'>{client.ci}</td>
                <td className='border border-gray-300 p-2'>{client.celular}</td>
                <td className='border border-gray-300 p-2'>{client.sexo}</td>
                <td className='border border-gray-300 p-2'>{client.domicilio}</td>
                <td className='border border-gray-300 p-2'>{client.fechaNacimiento}</td>
                <td className='border border-gray-300 p-2'>{client.departamento}</td>
                <td className='border border-gray-300 p-2 flex gap-2'>
                  <button className='bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-700'>
                    ✏️
                  </button>
                  <button
                    onClick={() => handleDelete(client.id)}
                    className='bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700'
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className='flex justify-end gap-4 mt-4'>
        <button
          onClick={() => window.print()}
          className='bg-[#5e2222] text-white px-6 py-3 rounded-lg hover:bg-[#4a1b1b] transition duration-300'
        >
          Imprimir
        </button>
        <button
          onClick={() => window.history.back()}
          className='bg-gray-400 text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition duration-300'
        >
          Salir
        </button>
      </div>
    </div>
  )
}

export default ClientsList
