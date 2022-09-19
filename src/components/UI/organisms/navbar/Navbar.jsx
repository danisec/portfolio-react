import React from 'react'
import LinkNavbar from '../../atoms/link-navbar/LinkNavbar'
import ButtonNavbar from '../../atoms/button-navbar/ButtonNavbar'

function Navbar() {
  return (
    <>
      <div className='layout sticky top-0 z-50 bg-white py-4 shadow-sm shadow-gray-200/90 md:py-8'>
        <div className='hidden md:block'>
          <ul className='flex flex-wrap items-center justify-end gap-8'>
            <LinkNavbar />
          </ul>
        </div>

        <div className='flex items-center justify-end md:hidden'>
          <ButtonNavbar />
        </div>
      </div>
    </>
  )
}

export default Navbar
