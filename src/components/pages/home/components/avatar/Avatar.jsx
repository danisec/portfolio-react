import React from 'react'
import Profile from '../../../../../assets/profile/profile.jpeg'

function Avatar({ avaClass }) {
  return (
    <>
      <img className={`${avaClass}`} src={Profile} alt='profile' />
    </>
  )
}

export default Avatar
