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

// ✅ Opciones del menú de navegación actualizadas
const sections = [
  {
    icon: 'person-circle',
    label: 'Clientes',
    options: [
      { label: 'Registrar cliente', link: '/registrar-cliente' },
      { label: 'Kardex del cliente', link: '/kardex-cliente' },
      { label: 'Lista de clientes', link: '/lista-de-clientes' },
      { label: 'Historial de compras', link: '/historial-compras' },
    ]
  },
  {
    icon: 'tag-fill',
    label: 'Productos',
    options: [
      { label: 'Añadir marco', link: '/añadir-marco' },               // ✅ Corregido
      { label: 'Personalizar marco', link: '/personalizar-marco' },   // ✅ Corregido
      { label: 'Ver todos los marcos', link: '/ver-todos-los-marcos' } // ✅ Corregido
    ]
  },
  {
    icon: 'hammer',
    label: 'Materiales',
    options: [
      { label: 'Registrar material e insumo', link: '/registrar-material' },
      { label: 'Lista de materiales e insumos', link: '/lista-materiales' },
      { label: 'Inventario actual', link: '/inventario-actual' },
      { label: 'Especificaciones técnicas', link: '/especificaciones-tecnicas' },
    ]
  },
  {
    icon: 'exclamation-triangle-fill',
    label: 'Reportes',
    options: [
      { label: 'Entregas concluidas', link: '/entregas-concluidas' },
      { label: 'Reporte de materiales', link: '/reporte-materiales' },
      { label: 'Fabricaciones mensuales', link: '/fabricaciones-mensuales' },
    ]
  },
  {
    icon: 'card-list',
    label: 'Pedidos',
    options: [
      { label: 'Registrar pedido', link: '/registrar-pedido' },
      { label: 'Lista de pedidos pendientes', link: '/pedidos-pendientes' },
      { label: 'Actualizar estado de pedido', link: '/actualizar-pedido' },
      { label: 'Control de carga de trabajo', link: '/control-carga' },
    ]
  },
  {
    icon: 'person-fill-gear',
    label: 'Administración',
    options: [
      { label: 'Gestión de proveedores', link: '/gestionar-proveedores' },
      { label: 'Registrar personal de trabajo', link: '/registrar-personal' },
      { label: 'Kardex del personal', link: '/kardex-personal' },
      { label: 'Listado de todo el personal', link: '/listado-personal' },
      { label: 'Soporte y ayuda', link: '/soporte' },
    ]
  }
];
