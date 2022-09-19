import React from 'react'
import ListAwards from './components/ListAwards'

function AwardsPages() {
  return (
    <>
      <div className='layout mt-8 md:mt-12'>
        <div className='flex justify-center'>
          <h2 className='text-2xl font-bold text-gray-900 md:text-3xl'>
            Awards & Certifications
          </h2>
        </div>

        <div className='mx-auto w-full md:w-max'>
          <div className='mt-12'>
            <ListAwards nameAwards={`Hack 36 3D Prize Winner`} />
          </div>

          <div className='mt-6'>
            <ListAwards nameAwards={`Mentor Open Code 19`} />
          </div>

          <div className='mt-6'>
            <ListAwards
              nameAwards={`Started North Indonesia First Student Design and Developer Conference`}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default AwardsPages
