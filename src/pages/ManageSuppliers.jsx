import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Search } from '@/components/Search'
import { Table } from '@/components/Table'
import TitleLayout from '@/layouts/TitleLayout'

const columns = [
  { accessorKey: 'nombre', header: 'Nombre' },
  { accessorKey: 'direccion', header: 'Dirección' },
  { accessorKey: 'contacto', header: 'Contacto' },
]

export default function ManageSuppliers() {
  const [filteredData, setFilteredData] = useState(data)

  const onView = (row) => console.log('Viendo:', row)
  const onEdit = (row) => console.log('Editando:', row)
  const onDelete = (row) => console.log('Eliminando:', row)

  const handleSearch = (searchTerm) => {
    const lowercasedTerm = searchTerm.toLowerCase()
    setFilteredData(data.filter(row => row.nit.toLowerCase().includes(lowercasedTerm)))
  }

  return (
    <TitleLayout title='Datos de los proveedores'>
      <section className='flex justify-between items-center'>
        <Search id='search_suppliers' label='NIT' placeholder='Buscar proveedor' action={handleSearch} />

        <Link
          to='/registrar-proveedor'
          className='bg-gray-300 p-3 rounded-md hover:bg-gray-400 duration-150'
        >
          Agregar proveedor <i className='bi bi-plus-lg ml-1' />
        </Link>
      </section>

      <Table data={filteredData} columns={columns} actions={{ onView, onEdit, onDelete }} />

      <section className='flex justify-end'>
        <button className='bg-gray-300 p-3 rounded-md hover:bg-gray-400 duration-150'>
          <i className='bi bi-printer-fill mr-1' />
          Imprimir
        </button>
      </section>
    </TitleLayout>
  )
}

const data = [
  { id: 1, nombre: "Marcos Elegantes S.A.", direccion: "Av. Bolívar 123, Ciudad A", contacto: "Juan Pérez", nit: "1002003001" },
  { id: 2, nombre: "MarcoArte", direccion: "Calle Fina 456, Ciudad B", contacto: "María Gómez", nit: "1002003002" },
  { id: 3, nombre: "Estilo en Marco", direccion: "Carrera 9 #12-34, Ciudad C", contacto: "Carlos Ramírez", nit: "1002003003" },
  { id: 4, nombre: "Diseño en Marcos", direccion: "Plaza Central 1, Ciudad D", contacto: "Ana Torres", nit: "1002003004" },
  { id: 5, nombre: "Mundo Marco", direccion: "Calle 21 #5-67, Ciudad E", contacto: "José Díaz", nit: "1002003005" },
  { id: 6, nombre: "Marco Premium", direccion: "Av. Principal 98, Ciudad F", contacto: "Sofía Herrera", nit: "1002003006" },
  { id: 7, nombre: "Artes y Marcos", direccion: "Zona Industrial 4, Ciudad G", contacto: "Pedro López", nit: "1002003007" },
  { id: 8, nombre: "Innovamarco", direccion: "Calle 15 #8-90, Ciudad H", contacto: "Lucía Martínez", nit: "1002003008" },
  { id: 9, nombre: "Marco Creativo", direccion: "Av. Los Pinos 56, Ciudad I", contacto: "Fernando Castro", nit: "1002003009" },
  { id: 10, nombre: "DecoMarco", direccion: "Carretera 3 #45-23, Ciudad J", contacto: "Laura Fernández", nit: "1002003010" },
  { id: 11, nombre: "Art & Frames", direccion: "Paseo del Arte 77, Ciudad K", contacto: "Gabriel Rojas", nit: "1002003011" },
  { id: 12, nombre: "Marcos del Futuro", direccion: "Calle 33 #6-12, Ciudad L", contacto: "Carmen Silva", nit: "1002003012" },
  { id: 13, nombre: "Marco Clásico", direccion: "Av. Dorada 99, Ciudad M", contacto: "Javier Ortega", nit: "1002003013" },
  { id: 14, nombre: "Marcos Express", direccion: "Zona Comercial 2, Ciudad N", contacto: "Rosa Moreno", nit: "1002003014" },
  { id: 15, nombre: "Marco Lujoso", direccion: "Calle 5 #44-76, Ciudad O", contacto: "Daniela Vargas", nit: "1002003015" },
  { id: 16, nombre: "Estructuras y Marcos", direccion: "Av. Reforma 88, Ciudad P", contacto: "Pablo Suárez", nit: "1002003016" },
  { id: 17, nombre: "Marco Perfecto", direccion: "Calle Real 32, Ciudad Q", contacto: "Andrea Delgado", nit: "1002003017" },
  { id: 18, nombre: "Galería Marco", direccion: "Zona Histórica 10, Ciudad R", contacto: "Luis Mendoza", nit: "1002003018" },
  { id: 19, nombre: "Estilo y Marcos", direccion: "Calle Mayor 55, Ciudad S", contacto: "Natalia Ríos", nit: "1002003019" },
  { id: 20, nombre: "MarcoVanguardia", direccion: "Av. Tecnológica 101, Ciudad T", contacto: "Oscar Jiménez", nit: "1002003020" }
]
