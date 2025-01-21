
const icons = [
  { icon: 'person-circle', label: 'Clientes', options: [] },
  { icon: 'tag', label: 'Productos', options: [] },
  { icon: 'hammer', label: 'Materiales', options: [] },
  { icon: 'exclamation-triangle', label: 'Reportes', options: [] },
  { icon: 'card-list', label: 'Pedidos', options: [] },
  { icon: 'person-lock', label: 'Administración', options: [] },
]

export const Header = () => {
  return (
    <header className='bg-[#874a37be] w-full h-20'>
      <nav className='mx-auto container h-full'>
        <ul className='flex flex-end h-full items-center gap-2'>
          {icons.map(({ icon, label, options }, idx) => (
            <button key={idx} className='text-white text-32'>
              <i className={`bi bi-${icon} mr-1`}></i>
              {label}
            </button>
          ))}
        </ul>
      </nav>
    </header>
  )
}
