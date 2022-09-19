import React from 'react'
import CardComponent from './components/organisms/CardComponent'
import ToolsComponent from './components/organisms/ToolsComponent'

function SkillsPages() {
  return (
    <>
      <div className='layout my-8 md:my-12'>
        <div className='flex justify-center'>
          <div className='flex h-96 w-full justify-center bg-indigo-100/30 lg:w-8/12'>
            <h2 className='mt-8 text-2xl font-semibold text-gray-900 md:text-3xl'>
              Skills
            </h2>
          </div>
        </div>

        <CardComponent />

        <div className='mt-96 lg:mt-16'>
          <div className='flex justify-center'>
            <h2 className='mt-8 text-2xl font-semibold text-gray-900 md:text-3xl'>
              Languanges and Tools
            </h2>
          </div>

          <div className='mt-6 flex flex-wrap justify-center gap-6 md:gap-8'>
            <ToolsComponent />
          </div>
        </div>
      </div>
    </>
  )
}

export default SkillsPages
