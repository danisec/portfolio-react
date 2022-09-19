import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function LinkNavbar() {
  const location = useLocation()
  const { pathname } = location
  const splitLocation = pathname.split('/')

  return (
    <>
      <li>
        <Link
          className={splitLocation[1] === '' ? 'active' : 'not__active'}
          to='/'
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          className={splitLocation[1] === 'about' ? 'active' : 'not__active'}
          to='/about'
        >
          About
        </Link>
      </li>

      <li>
        <Link
          className={
            splitLocation[1] === 'experience' ? 'active' : 'not__active'
          }
          to='/experience'
        >
          Experience
        </Link>
      </li>

      <li>
        <Link
          className={splitLocation[1] === 'skills' ? 'active' : 'not__active'}
          to='/skills'
        >
          Skills
        </Link>
      </li>

      <li>
        <Link
          className={splitLocation[1] === 'interest' ? 'active' : 'not__active'}
          to='/interest'
        >
          Interest
        </Link>
      </li>

      <li>
        <Link
          className={splitLocation[1] === 'awards' ? 'active' : 'not__active'}
          to='/awards'
        >
          Awards
        </Link>
      </li>
    </>
  )
}

export default LinkNavbar
