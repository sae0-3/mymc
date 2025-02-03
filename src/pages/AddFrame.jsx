import { useState } from 'react'
import { Link } from 'react-router-dom'

import TitleLayout from '@/layouts/TitleLayout'

export default function AddFrame() {
  const [image, setImage] = useState(null)
  const [formData, setFormData] = useState({
    nit_ci: '',
    codigo_marco: '',
    largo: 0,
    alto: 0,
    ancho: 0,
    material: '',
    unidades_recibidas: 0,
    precio_unitario: 0,
    fecha_recepcion: '',
    precio_total: 0
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <TitleLayout title='Registrar nuevo marco'>
      <form onSubmit={handleSubmit} className='flex flex-wrap gap-5 justify-between'>
        <div className='w-[calc(50%-1rem)]'>
          <label className='block text-sm font-medium text-gray-700' htmlFor='nit_ci'>NIT/CI</label>
          <input
            onChange={handleChange}
            value={formData.nit_ci}
            id='nit_ci'
            name='nit_ci'
            type='text'
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5e2222] focus:border-[#5e2222]' />
        </div>
        <div className='w-[calc(50%-1rem)]'>
          <label className='block text-sm font-medium text-gray-700' htmlFor='codigo_marco'>Código del marco</label>
          <input
            onChange={handleChange}
            value={formData.codigo_marco}
            id='codigo_marco'
            name='codigo_marco'
            type='text'
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5e2222] focus:border-[#5e2222]' />
        </div>

        <section className='w-full space-y-2'>
          <h3 className='font-semibold text-xl'>Dimensiones</h3>

          <div className='flex justify-between gap-10'>
            <div className='w-full'>
              <label className='block text-sm font-medium text-gray-700' htmlFor='largo'>Largo</label>
              <input
                onChange={handleChange}
                value={formData.largo}
                id='largo'
                name='largo'
                type='number'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5e2222] focus:border-[#5e2222]' />
            </div>
            <div className='w-full'>
              <label className='block text-sm font-medium text-gray-700' htmlFor='alto'>Alto</label>
              <input
                onChange={handleChange}
                value={formData.alto}
                id='alto'
                name='alto'
                type='number'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5e2222] focus:border-[#5e2222]' />
            </div>
            <div className='w-full'>
              <label className='block text-sm font-medium text-gray-700' htmlFor='ancho'>Ancho</label>
              <input
                onChange={handleChange}
                value={formData.ancho}
                id='ancho'
                name='ancho'
                type='number'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5e2222] focus:border-[#5e2222]' />
            </div>
          </div>
        </section>

        <div className='w-full'>
          <label className='block text-sm font-medium text-gray-700' htmlFor='material'>Material</label>
          <input
            onChange={handleChange}
            value={formData.material}
            id='material'
            name='material'
            type='text'
            className='mt-1 block w-[calc(50%-1rem)] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5e2222] focus:border-[#5e2222]' />
        </div>
        <div className='w-[calc(50%-1rem)]'>
          <label className='block text-sm font-medium text-gray-700' htmlFor='unidades_recibidas'>Unidades Recibidas</label>
          <input
            onChange={handleChange}
            value={formData.unidades_recibidas}
            id='unidades_recibidas'
            name='unidades_recibidas'
            type='number'
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5e2222] focus:border-[#5e2222]' />
        </div>
        <div className='w-[calc(50%-1rem)]'>
          <label className='block text-sm font-medium text-gray-700' htmlFor='precio_unitario'>Precio unitario de entrega</label>
          <input
            onChange={handleChange}
            value={formData.precio_unitario}
            id='precio_unitario'
            name='precio_unitario'
            type='number'
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5e2222] focus:border-[#5e2222]' />
        </div>
        <div className='w-[calc(50%-1rem)]'>
          <label className='block text-sm font-medium text-gray-700' htmlFor='fecha_recepcion'>Fecha de recepción</label>
          <input
            onChange={handleChange}
            value={formData.fecha_recepcion}
            id='fecha_recepcion'
            name='fecha_recepcion'
            type='date'
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5e2222] focus:border-[#5e2222]' />
        </div>
        <div className='w-[calc(50%-1rem)]'>
          <label className='block text-sm font-medium text-gray-700' htmlFor='precio_total'>Precio total pagado</label>
          <input
            onChange={handleChange}
            value={formData.precio_total}
            id='precio_total'
            name='precio_total'
            type='number'
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5e2222] focus:border-[#5e2222]' />
        </div>

        <section className='w-full flex justify-around items-center'>
          <div className='flex items-center p-4 border-2 border-dashed rounded-lg w-96'>
            <label htmlFor='file-upload' className='cursor-pointer flex flex-col items-center gap-2'>
              <i className='bi bi-camera-fill text-3xl' />
            </label>
            <input id='file-upload' type='file' accept='image/*' onChange={handleImageUpload} className='hidden' />
            {image && (
              <img src={image} alt='Preview' className='ml-5 rounded-lg shadow-lg max-w-full h-auto mt-4' />
            )}
          </div>

          <div className='space-x-5'>
            <button
              type='submit'
              className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#5e2222] hover:bg-[#451616] duration-100 focus:outline-none focus:ring-2 focus:ring-offset-2'
            >Guardar</button>
            <Link
              to='/lista_de_marcos'
              className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#5e2222] hover:bg-[#451616] duration-100 focus:outline-none focus:ring-2 focus:ring-offset-2'
            >Salir</Link>
          </div>
        </section>
      </form>
    </TitleLayout>
  )
}
