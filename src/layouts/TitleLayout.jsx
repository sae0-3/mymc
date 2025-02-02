export default function TitleLayout({ children, title }) {
  return (
    <div className='flex flex-col mt-5 mb-8 gap-8 container mx-auto'>
      <h1 className='font-bold text-3xl'>
        {title}
      </h1>

      {children}
    </div>
  )
}
