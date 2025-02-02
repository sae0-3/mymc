import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useState } from 'react'

export const Table = ({ columns, data, actions = {} }) => {
  const [sorting, setSorting] = useState([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: { sorting },
    onSortingChange: setSorting,
  })

  return (
    <table className='w-full border-collapse border border-gray-300 table-fixed'>
      <thead className='bg-gray-200'>
        {table.getHeaderGroups().map((headerGroup, idx) => (
          <tr key={headerGroup.id || idx}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                onClick={() => header.column.toggleSorting()}
                className='px-4 py-2 cursor-pointer hover:bg-gray-300 transition select-none'
              >
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
            {Object.keys(actions).length > 0 && (
              <th className='px-4 py-2 w-[15%]' />
            )}
          </tr>
        ))}
      </thead>
      <tbody className='divide-y divide-gray-200 text-center'>
        {table.getRowModel().rows.map((row, idx) => (
          <tr key={row.id || idx} className='hover:bg-gray-100'>
            {row.getVisibleCells().map((cell, idx) => (
              <td key={cell.id || idx} className='px-4 py-2'>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
            {Object.keys(actions).length > 0 && (
              <td className='flex justify-center space-x-2 flex-wrap px-4 py-2'>
                {actions.onView && (
                  <button
                    onClick={() => actions.onView(row.original)}
                    className='text-2xl hover:opacity-20'
                  ><i className='bi bi-eye-fill' /></button>
                )}
                {actions.onEdit && (
                  <button
                    onClick={() => actions.onEdit(row.original)}
                    className='text-2xl hover:opacity-20'
                  ><i className='bi bi-pencil-square' /></button>
                )}
                {actions.onDelete && (
                  <button
                    onClick={() => actions.onDelete(row.original)}
                    className='text-2xl hover:opacity-20'
                  ><i className='bi bi-trash-fill' /></button>
                )}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
