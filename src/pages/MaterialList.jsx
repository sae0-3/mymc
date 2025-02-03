import { useState } from 'react'

import { Table } from '@/components/Table'
import { Search } from '@/components/Search'
import TitleLayout from '@/layouts/TitleLayout'

const columns = [
  { accessorKey: 'nombre', header: 'Nombre' },
  { accessorKey: 'nit_ci', header: 'Proveedor' },
  { accessorKey: 'cantidad', header: 'Unidades' },
]

export default function MaterialList() {
  const [filteredData, setFilteredData] = useState(data)

  const onEdit = (row) => console.log('Editando:', row)
  const onDelete = (row) => console.log('Eliminando:', row)

  const handleSearch = (searchTerm) => {
    const numericTerm = Number(searchTerm)
    if (isNaN(numericTerm)) {
      setFilteredData(data)
      return
    }

    setFilteredData(data.filter(row => row.cantidad >= numericTerm))
  }

  return (
    <TitleLayout title='Gestión de materiales e insumos'>
      <section className='w-4/12'>
        <Search id='search_disponibilidad' label='Disponibilidad' action={handleSearch} />
      </section>

      <Table columns={columns} data={filteredData} actions={{ onEdit, onDelete }} />
    </TitleLayout>
  )
}

const data = [
  {
    nit_ci: '1001',
    material: 'Material',
    nombre: 'Mesa de roble',
    cantidad: 2,
    precio_unitario: 150.75,
    precio_total: 301.50,
    descripcion: 'Mesa de roble macizo con acabado pulido'
  },
  {
    nit_ci: '1002',
    material: 'Insumo',
    nombre: 'Tornillos de acero',
    cantidad: 50,
    precio_unitario: 0.50,
    precio_total: 25.00,
    descripcion: 'Tornillos resistentes para madera y metal'
  },
  {
    nit_ci: '1003',
    material: 'Material',
    nombre: 'Caja organizadora',
    cantidad: 5,
    precio_unitario: 20.00,
    precio_total: 100.00,
    descripcion: 'Caja de almacenamiento con tapa hermética'
  },
  {
    nit_ci: '1004',
    material: 'Insumo',
    nombre: 'Pegamento industrial',
    cantidad: 3,
    precio_unitario: 35.00,
    precio_total: 105.00,
    descripcion: 'Pegamento de alta resistencia para madera y plástico'
  },
  {
    nit_ci: '1005',
    material: 'Material',
    nombre: 'Estante de pared',
    cantidad: 3,
    precio_unitario: 120.00,
    precio_total: 360.00,
    descripcion: 'Estante de madera flotante con soportes metálicos'
  },
  {
    nit_ci: '1006',
    material: 'Insumo',
    nombre: 'Cinta métrica',
    cantidad: 10,
    precio_unitario: 15.00,
    precio_total: 150.00,
    descripcion: 'Cinta métrica de 5 metros con carcasa reforzada'
  },
  {
    nit_ci: '1007',
    material: 'Material',
    nombre: 'Lámpara de escritorio',
    cantidad: 4,
    precio_unitario: 45.50,
    precio_total: 182.00,
    descripcion: 'Lámpara LED con brazo ajustable'
  },
  {
    nit_ci: '1008',
    material: 'Insumo',
    nombre: 'Clavos galvanizados',
    cantidad: 200,
    precio_unitario: 0.10,
    precio_total: 20.00,
    descripcion: 'Clavos resistentes a la corrosión para madera'
  },
  {
    nit_ci: '1009',
    material: 'Material',
    nombre: 'Puerta de madera',
    cantidad: 1,
    precio_unitario: 450.00,
    precio_total: 450.00,
    descripcion: 'Puerta de madera maciza con diseño moderno'
  },
  {
    nit_ci: '1010',
    material: 'Insumo',
    nombre: 'Pintura acrílica',
    cantidad: 5,
    precio_unitario: 80.00,
    precio_total: 400.00,
    descripcion: 'Pintura de alta calidad para interiores y exteriores'
  },
  {
    nit_ci: '1011',
    material: 'Material',
    nombre: 'Panel de vidrio templado',
    cantidad: 2,
    precio_unitario: 230.00,
    precio_total: 460.00,
    descripcion: 'Vidrio templado de alta resistencia'
  },
  {
    nit_ci: '1012',
    material: 'Insumo',
    nombre: 'Lija de madera',
    cantidad: 20,
    precio_unitario: 5.00,
    precio_total: 100.00,
    descripcion: 'Lija de diferentes grosores para acabados finos'
  },
  {
    nit_ci: '1013',
    material: 'Material',
    nombre: 'Tablero MDF',
    cantidad: 6,
    precio_unitario: 180.00,
    precio_total: 1080.00,
    descripcion: 'Tablero de fibra de densidad media para carpintería'
  },
  {
    nit_ci: '1014',
    material: 'Insumo',
    nombre: 'Silicona en barra',
    cantidad: 10,
    precio_unitario: 2.50,
    precio_total: 25.00,
    descripcion: 'Barras de silicona para pistola de calor'
  },
  {
    nit_ci: '1015',
    material: 'Material',
    nombre: 'Revestimiento cerámico',
    cantidad: 8,
    precio_unitario: 95.00,
    precio_total: 760.00,
    descripcion: 'Revestimiento de cerámica para pisos y paredes'
  },
  {
    nit_ci: '1016',
    material: 'Insumo',
    nombre: 'Tubo PVC',
    cantidad: 12,
    precio_unitario: 25.00,
    precio_total: 300.00,
    descripcion: 'Tubo de PVC para instalaciones sanitarias'
  },
  {
    nit_ci: '1017',
    material: 'Material',
    nombre: 'Panel de aluminio compuesto',
    cantidad: 3,
    precio_unitario: 320.00,
    precio_total: 960.00,
    descripcion: 'Panel ligero y resistente para fachadas'
  },
  {
    nit_ci: '1018',
    material: 'Insumo',
    nombre: 'Cinta adhesiva industrial',
    cantidad: 15,
    precio_unitario: 8.00,
    precio_total: 120.00,
    descripcion: 'Cinta adhesiva de alta adherencia'
  },
  {
    nit_ci: '1019',
    material: 'Material',
    nombre: 'Malla metálica',
    cantidad: 7,
    precio_unitario: 145.00,
    precio_total: 1015.00,
    descripcion: 'Malla de acero galvanizado para construcción'
  },
  {
    nit_ci: '1020',
    material: 'Insumo',
    nombre: 'Cerradura de seguridad',
    cantidad: 2,
    precio_unitario: 180.00,
    precio_total: 360.00,
    descripcion: 'Cerradura con doble cilindro y llave maestra'
  }
]
