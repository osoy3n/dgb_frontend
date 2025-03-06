/* eslint-disable react/prop-types */

function Layout ({ children }) {
  return (
    <>
      <div className='flex flex-col items-center min-h-screen bg-[#272b33] pt-[80px]'>
        {children}
      </div>
    </>
  )
}

export default Layout
