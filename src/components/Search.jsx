import { useState } from 'react'

export const Search = ({ action, label, placeholder = '', id }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    action(searchTerm)
  }

  return (
    <form className='flex gap-5 items-center' onSubmit={handleSubmit}>
      <label htmlFor={id} className='text-gray-700 font-medium'>
        {label}
      </label>
      <input
        type='search'
        id={id}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='border-b border-gray-200 focus:border-gray-500 focus:outline-none focus:ring-0 p-2 w-full'
        placeholder={placeholder}
      />
      <button
        type='submit'
        className='bg-gray-300 hover:bg-gray-400 py-1 px-2 rounded-md transition'
      >
        <i className='bi bi-search text-lg' />
      </button>
    </form>
  )
}
