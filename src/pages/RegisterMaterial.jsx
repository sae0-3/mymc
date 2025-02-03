import { useState } from 'react'
import { Link } from 'react-router-dom'

import TitleLayout from '@/layouts/TitleLayout'

export default function RegisterMaterial() {
  const options = [
    { id: 'material', label: 'Material' },
    { id: 'insumo', label: 'Insumo' }
  ]
  const [selected, setSelected] = useState(null)
  const [formData, setFormData] = useState({
    nit_ci: '',
    material: '',
    nombre: '',
    cantidad: 0,
    precio_unitario: 0,
    precio_total: 0,
    descripcion: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSelect = (id) => {
    setSelected(id)
    setFormData({ ...formData, material: id })
  }

  return (
    <TitleLayout title='Registro de materiales e insumos'>
      <form onSubmit={handleSubmit} className='flex flex-wrap gap-5 justify-between'>
        <div className='w-full'>
          <label className='block text-sm font-medium text-gray-700' htmlFor='nit_ci'>NIT/CI</label>
          <input
            onChange={handleChange}
            value={formData.nit_ci}
            id='nit_ci'
            name='nit_ci'
            type='text'
            className='mt-1 block w-[calc(50%-1rem)] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5e2222] focus:border-[#5e2222]' />
        </div>

        <div className='flex gap-4 w-full justify-evenly'>
          {options.map((option) => (
            <label key={option.id} className='flex items-center gap-8 cursor-pointer'>
              <input
                type='radio'
                name='opciones'
                value={option.id}
                checked={selected === option.id}
                onChange={() => handleSelect(option.id)}
                className='hidden'
              />
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selected === option.id ? 'border-[#451616]' : 'border-gray-400'}`}
              >
                {selected === option.id && (
                  <div className='w-3 h-3 bg-[#451616] rounded-full' />
                )}
              </div>
              <span className='text-gray-700'>{option.label}</span>
            </label>
          ))}
        </div>

        <div className='w-[calc(50%-1rem)]'>
          <label className='block text-sm font-medium text-gray-700' htmlFor='nombre'>Nombre</label>
          <input
            onChange={handleChange}
            value={formData.nombre}
            id='nombre'
            name='nombre'
            type='text'
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5e2222] focus:border-[#5e2222]' />
        </div>
        <div className='w-[calc(50%-1rem)]'>
          <label className='block text-sm font-medium text-gray-700' htmlFor='cantidad'>Cantidad</label>
          <input
            onChange={handleChange}
            value={formData.cantidad}
            id='cantidad'
            name='cantidad'
            type='text'
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5e2222] focus:border-[#5e2222]' />
        </div>
        <div className='w-[calc(50%-1rem)]'>
          <label className='block text-sm font-medium text-gray-700' htmlFor='precio_unitario'>Precio Unitario</label>
          <input
            onChange={handleChange}
            value={formData.precio_unitario}
            id='precio_unitario'
            name='precio_unitario'
            type='text'
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5e2222] focus:border-[#5e2222]' />
        </div>
        <div className='w-[calc(50%-1rem)]'>
          <label className='block text-sm font-medium text-gray-700' htmlFor='precio_total'>Precio Total</label>
          <input
            onChange={handleChange}
            value={formData.precio_total}
            id='precio_total'
            name='precio_total'
            type='text'
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5e2222] focus:border-[#5e2222]' />
        </div>
        <div className='w-full'>
          <label className='block text-sm font-medium text-gray-700' htmlFor='descripcion'>Descripción</label>
          <textarea
            onChange={handleChange}
            value={formData.descripcion}
            id='descripcion'
            name='descripcion'
            type='text'
            className='mt-1 block w-[calc(50%-1rem)] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5e2222] focus:border-[#5e2222]' />
        </div>

        <section className='w-full flex justify-end gap-5'>
          <button
            type='submit'
            className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#5e2222] hover:bg-[#451616] duration-100 focus:outline-none focus:ring-2 focus:ring-offset-2'
          >Guardar</button>
          <Link
            to='/lista_materiales'
            className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#5e2222] hover:bg-[#451616] duration-100 focus:outline-none focus:ring-2 focus:ring-offset-2'
          >Salir</Link>
        </section>
      </form>
    </TitleLayout>
  )
}
