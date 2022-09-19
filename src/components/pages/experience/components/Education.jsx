import React from 'react'

function Education() {
  return (
    <>
      <div>
        <h2 className='text-2xl font-bold text-gray-900 md:text-3xl'>
          Education
        </h2>

        <div className='mt-8 flex items-center justify-between lg:mt-12'>
          <div>
            <h2 className='text-base font-semibold text-gray-900 md:text-lg'>
              2022 - Present
            </h2>
          </div>

          <div className='w-40 ms:w-52'>
            <h2 className='text-base font-semibold text-gray-900 lg:text-lg'>
              Universitas Pembangunan Jaya
            </h2>
            <span className='text-sm font-medium text-gray-700 lg:text-base'>
              Informatika
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Education
