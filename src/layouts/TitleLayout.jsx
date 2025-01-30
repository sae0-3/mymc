export default function TitleLayout({ children, title }) {
  return (
    <div className='flex flex-col my-8 gap-8 container mx-auto'>
      <h1 className='font-semibold text-3xl'>
        {title}
      </h1>

      {children}
    </div>
  )
}
