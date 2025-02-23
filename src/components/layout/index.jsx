/* eslint-disable react/prop-types */

function Layout ({ children }) {
  return (
    <>
      <div className='flex flex-col items-center bg-[#272b33] mt-[50px]'>
        {children}
      </div>
    </>
  )
}

export default Layout
