import React from 'react'

function WorkExperience() {
  return (
    <>
      <div>
        <h2 className='text-2xl font-bold text-gray-900 md:text-3xl'>
          Work Experience
        </h2>

        <div className='mt-8 flex items-center justify-between lg:mt-12'>
          <div>
            <h2 className='text-base font-semibold text-gray-900 md:text-lg'>
              2022 - Present
            </h2>
          </div>

          <div className='w-40 ms:w-52'>
            <h2 className='text-base font-semibold text-gray-900 md:text-lg'>
              Web Development
            </h2>
            <span className='text-sm font-medium text-gray-700 lg:text-base'>
              Freelance
            </span>
          </div>
        </div>

        <hr className='mt-8' />

        <div className='mt-6 flex items-center justify-between'>
          <div>
            <h2 className='text-base font-semibold text-gray-900 md:text-lg'>
              2018 - 2020
            </h2>
          </div>

          <div className='w-40 ms:w-52'>
            <h2 className='text-base font-semibold text-gray-900 md:text-lg'>
              IT Support
            </h2>
            <span className='text-sm font-medium text-gray-700 lg:text-base'>
              PGM
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkExperience
