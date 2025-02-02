import { Link } from 'react-router-dom'

import TItleLayout from '@/layouts/TitleLayout'

export default function ManageSuppliers() {
  const data = [{
    id: 123, nombre: "dsd", direccion: "dasda", contacto: "dasa"
  }]

  const handleSearch = (e) => {
    e.preventDefault()
  }

  return (
    <TItleLayout title='Datos de los proveedores'>
      <section className='container mx-auto flex flex-col gap-5'>
        <section className='flex justify-between items-center'>
          <form className='flex gap-5 items-center' onSubmit={handleSearch}>
            <label htmlFor='id_proveeder' className='text-gray-700 font-medium'>
              NIT
            </label>
            <input
              type='search'
              id='id_proveeder'
              className='border-b border-gray-300 focus:border-gray-400 focus:outline-none focus:ring-0 p-2 w-full'
              placeholder='Buscar proveedor'
            />
            <button
              type='submit'
              className='bg-gray-300 hover:bg-gray-400 p-2 rounded-md transition duration-150'
            >
              <i className='bi bi-search text-lg' />
            </button>
          </form>

          <Link
            to='/registrar-proveedor'
            className='bg-gray-300 p-3 rounded-md hover:bg-gray-400 duration-150'
          >
            Agregar proveedor
            <i className='bi bi-plus-lg ml-1' />
          </Link>
        </section>

        <table className='w-full border-collapse border border-gray-300 table-fixed'>
          <thead className='bg-gray-200'>
            <tr>
              <th className='border border-gray-300 px-4 py-2 w-1/3'>Nombre</th>
              <th className='border border-gray-300 px-4 py-2 w-1/3'>Dirección</th>
              <th className='border border-gray-300 px-4 py-2 w-1/3'>Contacto</th>
              <th className='border border-gray-300 px-4 py-2 w-[10%]' />
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, nombre, direccion, contacto }) => (
              <tr key={id} className='hover:bg-gray-100'>
                <td className='border border-gray-300 px-4 py-2 truncate'>
                  {nombre}
                </td>
                <td className='border border-gray-300 px-4 py-2 truncate'>
                  {direccion}
                </td>
                <td className='border border-gray-300 px-4 py-2 truncate'>
                  {contacto}
                </td>
                <td className='border border-gray-300 py-2'>
                  <div className='flex justify-evenly'>
                    <button>
                      <i className='bi bi-eye-fill text-2xl' />
                    </button>
                    <button>
                      <i className='bi bi-pencil-square text-2xl' />
                    </button>
                    <button>
                      <i className='bi bi-trash-fill text-2xl' />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <section className='flex justify-end'>
          <button className='bg-gray-300 p-3 rounded-md hover:bg-gray-400 duration-150'>
            <i className='bi bi-printer-fill mr-1' />
            Imprimir
          </button>
        </section>
      </section>
    </TItleLayout>
  )
}
