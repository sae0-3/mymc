import { Outlet } from 'react-router-dom'

import { Header } from '@/components/Header'

export default function MainLayout() {
  return (
    <div className='flex flex-col h-screen'>
      <Header />

      <div className='flex-1'>
        <Outlet />
      </div>
    </div>
  )
}
