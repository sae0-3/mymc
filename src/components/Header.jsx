import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='bg-[#5e2222] w-full'>
      <nav className='mx-auto container h-full'>
        <ul className='flex h-full gap-5'>
          {sections.map(({ icon, label, options }, idx) => (
            <li key={idx} className='relative group h-full'>
              <a className='text-white py-3 text-xl flex flex-col items-center hover:cursor-pointer group-hover:text-black duration-100'>
                <i className={`bi bi-${icon}`} />
                <span>{label}</span>
              </a>

              <ul className='hidden group-hover:flex absolute top-full left-0 shadow-md rounded flex-col z-10 w-48'>
                {options.map(({ label, link }, idx) => (
                  <li key={idx}>
                    <Link
                      to={link}
                      className='px-4 py-2 hover:bg-gray-100 text-black block bg-white text-sm'
                    >{label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

const sections = [
  {
    icon: 'person-circle',
    label: 'Clientes',
    options: [
      { label: 'Registrar cliente', link: '/#Registrar_cliente' },
      { label: 'Kardex del cliente', link: '/#Kardex_del_cliente' },
      { label: 'Lista de clientes', link: '/#Lista_de_clientes' },
      { label: 'Historial de compras', link: '/#Historial_de_compras' },
    ]
  },
  {
    icon: 'tag-fill',
    label: 'Productos',
    options: [
      { label: 'Añadir marco', link: '/#Añadir_marco' },
      { label: 'Personalizar marco', link: '/#Personalizar_marco' },
      { label: 'Ver todos los marcos', link: '/#Ver_todos_los_marcos' },
    ]
  },
  {
    icon: 'hammer',
    label: 'Materiales',
    options: [
      { label: 'Registrar material e insumo', link: '/#Registrar_material_e_insumo' },
      { label: 'Lista de materiales e insumos', link: '/#Lista_de_materiales_e_insumos' },
      { label: 'Inventario actual', link: '/#Inventario_actual' },
      { label: 'Especificaciones tecnicas', link: '/#Especificaciones_tecnicas' },
    ]
  },
  {
    icon: 'exclamation-triangle-fill',
    label: 'Reportes',
    options: [
      { label: 'Entregas concluidas', link: '/#Entregas_concluidas' },
      { label: 'Reporte de materiales', link: '/#Reporte_de_materiales' },
      { label: 'Fabricaciones mensuales', link: '/#Fabricaciones_mensuales' },
    ]
  },
  {
    icon: 'card-list',
    label: 'Pedidos',
    options: [
      { label: 'Registrar pedido', link: '/#Registrar_pedido' },
      { label: 'Lista de pedidos pendientes', link: '/#Lista_de_pedidos_pendientes' },
      { label: 'Actualizar estado de pedido', link: '/#Actualizar_estado_de_pedido' },
      { label: 'Control de carga de trabajo', link: '/#Control_de_carga_de_trabajo' },
    ]
  },
  {
    icon: 'person-fill-gear',
    label: 'Administración',
    options: [
      { label: 'Gestión de proveedores', link: '/#Gestión_de_proveedores' },
      { label: 'Registrar personal de trabajo', link: '/#Registrar_personal_de_trabajo' },
      { label: 'Kardex del personal', link: '/#Kardex_del_personal' },
      { label: 'Listado de todo el personal', link: '/#Listado_de_todo_el_personal' },
      { label: 'Soporte y ayuda', link: '/#Soporte_y_ayuda' },
    ]
  }
]
