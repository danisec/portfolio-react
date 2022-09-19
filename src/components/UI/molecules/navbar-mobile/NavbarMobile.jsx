import React from 'react'
import LinkNavbar from '../../atoms/link-navbar/LinkNavbar'

function NavbarMobile() {
  return (
    <>
      <div className='absolute top-16 z-50 w-56 rounded-md bg-white shadow-sm shadow-gray-100'>
        <ul className='flex flex-col gap-6 p-4'>
          <LinkNavbar />
        </ul>
      </div>
    </>
  )
}

export default NavbarMobile
