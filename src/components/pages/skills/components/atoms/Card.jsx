import React from 'react'

function Card({ imgCard, titleCard, descCard }) {
  return (
    <>
      <div className='w-80 rounded-md bg-white p-4 shadow-sm shadow-gray-100 transition-all hover:scale-105'>
        <img className='h-auto w-8' src={`${imgCard}`} alt='app' />
        <h2 className='mt-4 text-lg font-semibold text-gray-900'>
          {titleCard}
        </h2>
        <p className='mt-4 text-base font-normal text-gray-700'>{descCard}</p>
      </div>
    </>
  )
}

export default Card
