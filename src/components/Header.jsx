import { Link } from 'react-router-dom';

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

              <ul className='hidden group-hover:flex absolute top-full left-0 shadow-md rounded flex-col z-50 w-48 bg-white'>
                {options.map(({ label, link }, idx) => (
                  <li key={idx}>
                    <Link
                      to={link}
                      className='px-4 py-2 hover:bg-gray-100 text-black block text-sm'
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

const sections = [
  {
    icon: 'person-circle',
    label: 'Clientes',
    options: [
      { label: 'Registrar cliente', link: '/registrar-cliente' },
      // { label: 'Kardex del cliente', link: '/kardex_cliente' },
      { label: 'Lista de clientes', link: '/lista_de_clientes' },
      // { label: 'Historial de compras', link: '/historial_compras' },
    ]
  },
  {
    icon: 'tag-fill',
    label: 'Productos',
    options: [
      { label: 'Añadir marco', link: '/añadir_marco' },
      // { label: 'Personalizar marco', link: '/personalizar_marco' },
      { label: 'Ver todos los marcos', link: '/lista_de_marcos' },
    ]
  },
  {
    icon: 'hammer',
    label: 'Materiales',
    options: [
      { label: 'Registrar material e insumo', link: '/registrar_material' },
      { label: 'Lista de materiales e insumos', link: '/lista_materiales' },
      // { label: 'Inventario actual', link: '/inventario_actual' },
      // { label: 'Especificaciones técnicas', link: '/especificaciones_tecnicas' },
    ]
  },
  // {
  //   icon: 'exclamation-triangle-fill',
  //   label: 'Reportes',
  //   options: [
  //     { label: 'Entregas concluidas', link: '/entregas_concluidas' },
  //     { label: 'Reporte de materiales', link: '/reporte_materiales' },
  //     { label: 'Fabricaciones mensuales', link: '/fabricaciones_mensuales' },
  //   ]
  // },
  // {
  //   icon: 'card-list',
  //   label: 'Pedidos',
  //   options: [
  //     { label: 'Registrar pedido', link: '/registrar_pedido' },
  //     { label: 'Lista de pedidos pendientes', link: '/pedidos_pendientes' },
  //     { label: 'Actualizar estado de pedido', link: '/actualizar_pedido' },
  //     { label: 'Control de carga de trabajo', link: '/control_carga' },
  //   ]
  // },
  {
    icon: 'person-fill-gear',
    label: 'Administración',
    options: [
      { label: 'Gestión de proveedores', link: '/gestionar-proveedores' },
      // { label: 'Registrar personal de trabajo', link: '/registrar_personal' },
      // { label: 'Kardex del personal', link: '/kardex_personal' },
      // { label: 'Listado de todo el personal', link: '/listado_personal' },
      // { label: 'Soporte y ayuda', link: '/soporte' },
    ]
  }
];
