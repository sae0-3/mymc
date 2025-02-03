import { useState } from 'react'
import { Link } from 'react-router-dom'

import TitleLayout from '@/layouts/TitleLayout'

export default function RegisterSupplier() {
  const data = []
  const [proveedor, setProveedor] = useState({
    nombre: '',
    nit: '',
    contacto: '',
    fechaRegistro: '',
    direccion: '',
    numeroReferencia: '',
    departamento: '',
    productos: [],
  })

  const handleChange = ({ target: { name, value } }) => {
    setProveedor({ ...proveedor, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(proveedor)
  }

  return (
    <TitleLayout title='Resgistrar nuevo proveedor'>
      <form onSubmit={handleSubmit} className='space-y-10'>
        {/* <section className=''>
          <h2 className='text-xl font-semibold mb-4'>Información del proveedor:</h2> */}

        <section className='flex flex-wrap space-y-5 justify-between'>
          <div className='w-full'>
            <label htmlFor='nombre' className='block text-sm font-medium text-gray-700'>Nombre</label>
            <input
              value={proveedor.nombre}
              onChange={handleChange}
              type='text'
              id='nombre'
              name='nombre'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5e2222] focus:border-[#5e2222]' />
          </div>
          <div className='w-[calc(50%-1rem)]'>
            <label htmlFor='nit' className='block text-sm font-medium text-gray-700'>NIT</label>
            <input
              value={proveedor.nit}
              onChange={handleChange}
              type='text'
              id='nit'
              name='nit'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5e2222] focus:border-[#5e2222]'
            />
          </div>
          <div className='w-[calc(50%-1rem)]'>
            <label htmlFor='contacto' className='block text-sm font-medium text-gray-700'>Contacto</label>
            <input
              value={proveedor.contacto}
              onChange={handleChange}
              type='text'
              id='contacto'
              name='contacto'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5e2222] focus:border-[#5e2222]'
            />
          </div>
          <div className='w-[calc(50%-1rem)]'>
            <label htmlFor='fechaRegistro' className='block text-sm font-medium text-gray-700'>Fecha de registro</label>
            <input
              value={proveedor.fechaRegistro}
              onChange={handleChange}
              type='date'
              id='fechaRegistro'
              name='fechaRegistro'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5e2222] focus:border-[#5e2222]'
            />
          </div>
          <div className='w-[calc(50%-1rem)]'>
            <label htmlFor='direccion' className='block text-sm font-medium text-gray-700'>Dirección</label>
            <input
              value={proveedor.direccion}
              onChange={handleChange}
              type='text'
              id='direccion'
              name='direccion'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5e2222] focus:border-[#5e2222]'
            />
          </div>
          <div className='w-[calc(50%-1rem)]'>
            <label htmlFor='numeroReferencia' className='block text-sm font-medium text-gray-700'>Número de referencia</label>
            <input
              value={proveedor.numeroReferencia}
              onChange={handleChange}
              type='text'
              id='numeroReferencia'
              name='numeroReferencia'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5e2222] focus:border-[#5e2222]'
            />
          </div>
          <div className='w-[calc(50%-1rem)]'>
            <label htmlFor='departamento' className='block text-sm font-medium text-gray-700'>Departamento</label>
            <input
              value={proveedor.departamento}
              onChange={handleChange}
              type='text'
              id='departamento'
              name='departamento'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5e2222] focus:border-[#5e2222]'
            />
          </div>
        </section>
        {/* </section> */}

        {/* <section>
          <section className='flex items-center space-x-3 mb-4'>
            <h2 className='text-xl font-semibold'>Productos</h2>
            <button className='p-2 bg-[#5e2222] hover:bg-[#451616] rounded-lg duration-100'>
              <i className='bi bi-plus text-white' />
            </button>
          </section>

          <table className='w-full border-collapse border border-gray-300 table-fixed'>
            <thead className='bg-gray-200'>
              <tr>
                <th className='border border-gray-300 px-4 py-2 w-1/3'>Nombre</th>
                <th className='border border-gray-300 px-4 py-2 w-1/3'>Descripción</th>
                <th className='border border-gray-300 px-4 py-2 w-[10%]' />
              </tr>
            </thead>
            <tbody>
              {data.map(({ id, nombre, descripcion }) => (
                <tr key={id} className='hover:bg-gray-100'>
                  <td className='border border-gray-300 px-4 py-2 truncate'>
                    {nombre}
                  </td>
                  <td className='border border-gray-300 px-4 py-2 truncate'>
                    {descripcion}
                  </td>
                  <td className='border border-gray-300 py-2'>
                    <div className='flex justify-evenly'>
                      <button>
                        <i className='bi bi-trash-fill text-2xl' />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section> */}

        <footer className='mt-6 flex space-x-4 justify-end'>
          <button
            type='submit'
            className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#5e2222] hover:bg-[#451616] duration-100 focus:outline-none focus:ring-2 focus:ring-offset-2'>
            Guardar
          </button>
          <Link
            to='/gestionar-proveedores'
            className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#5e2222] hover:bg-[#451616] duration-100 focus:outline-none focus:ring-2 focus:ring-offset-2'>
            Salir
          </Link>
        </footer>
      </form>
    </TitleLayout>
  )
}
