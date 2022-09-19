import React from 'react'

function Tools({ imgTools }) {
  return (
    <>
      <div>
        <div className='mt-6 flex flex-wrap gap-6 md:gap-8'>
          <div className='w-10 ms:w-12'>
            <img src={`${imgTools}`} alt='HTML' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Tools
