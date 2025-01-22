import { Outlet } from 'react-router-dom'

import { Header } from '@/components/Header'

export default function MainLayout() {
  return (
    <main className='w-full min-h-screen bg-[url("@/assets/portada.jpeg")] bg-cover bg-fixed bg-center relative'>
      <div className='absolute inset-0 bg-white/40 z-0'></div>

      <div className='relative z-10'>
        <Header />
        <Outlet />
      </div>
    </main>
  );
}
