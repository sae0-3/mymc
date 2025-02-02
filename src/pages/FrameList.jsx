import { useState } from 'react'

import { Search } from '@/components/Search'
import { Table } from '@/components/Table'
import TitleLayout from '@/layouts/TitleLayout'

export default function FrameList() {
  const [filteredData, setFilteredData] = useState(data)

  const onView = (row) => console.log('Viendo:', row)
  const onEdit = (row) => console.log('Editando:', row)
  const onDelete = (row) => console.log('Eliminando:', row)

  const handleSearch = (searchTerm) => {
    const lowercasedTerm = searchTerm.toLowerCase()
    setFilteredData(data.filter(row => row.codigo.toLowerCase().includes(lowercasedTerm)))
  }

  return (
    <TitleLayout title='Información de todos los marcos'>
      <section className='w-4/12'>
        <Search id='search_frame' label='Código' placeholder='Buscar marco' action={handleSearch} />
      </section>

      <Table data={filteredData} columns={columns} actions={{ onView, onEdit, onDelete }} />
    </TitleLayout>
  )
}

const data = [
  { id: 1, codigo: 'MRC001', material: 'Madera', disponibilidad: 15, precio_unitario: 120 },
  { id: 2, codigo: 'MRC002', material: 'Aluminio', disponibilidad: 10, precio_unitario: 140 },
  { id: 3, codigo: 'MRC003', material: 'Hierro', disponibilidad: 5, precio_unitario: 100 },
  { id: 4, codigo: 'MRC004', material: 'Plástico', disponibilidad: 20, precio_unitario: 80 },
  { id: 5, codigo: 'MRC005', material: 'Acero Inoxidable', disponibilidad: 8, precio_unitario: 200 },
  { id: 6, codigo: 'MRC006', material: 'Bronce', disponibilidad: 12, precio_unitario: 180 },
  { id: 7, codigo: 'MRC007', material: 'Níquel', disponibilidad: 6, precio_unitario: 160 },
  { id: 8, codigo: 'MRC008', material: 'Cobre', disponibilidad: 18, precio_unitario: 130 },
  { id: 9, codigo: 'MRC009', material: 'Titanio', disponibilidad: 3, precio_unitario: 300 },
  { id: 10, codigo: 'MRC010', material: 'Fibra de Carbono', disponibilidad: 7, precio_unitario: 250 },
  { id: 11, codigo: 'MRC011', material: 'Vidrio', disponibilidad: 11, precio_unitario: 90 },
  { id: 12, codigo: 'MRC012', material: 'Resina', disponibilidad: 22, precio_unitario: 75 },
  { id: 13, codigo: 'MRC013', material: 'Bambú', disponibilidad: 9, precio_unitario: 95 },
  { id: 14, codigo: 'MRC014', material: 'Grafito', disponibilidad: 4, precio_unitario: 110 },
  { id: 15, codigo: 'MRC015', material: 'Silicona', disponibilidad: 16, precio_unitario: 85 },
  { id: 16, codigo: 'MRC016', material: 'Cuarzo', disponibilidad: 2, precio_unitario: 170 },
  { id: 17, codigo: 'MRC017', material: 'Acetato', disponibilidad: 13, precio_unitario: 105 },
  { id: 18, codigo: 'MRC018', material: 'Policarbonato', disponibilidad: 19, precio_unitario: 120 },
  { id: 19, codigo: 'MRC019', material: 'Plata', disponibilidad: 1, precio_unitario: 500 },
  { id: 20, codigo: 'MRC020', material: 'Oro', disponibilidad: 0, precio_unitario: 1000 },
]

const columns = [
  {
    accessorKey: 'codigo',
    header: 'Código',
  },
  {
    accessorKey: 'material',
    header: 'Material',
  },
  {
    accessorKey: 'disponibilidad',
    header: 'Disponibilidad',
  },
  {
    accessorKey: 'precio_unitario',
    header: 'Precio Unitario (bs)',
  },
]
