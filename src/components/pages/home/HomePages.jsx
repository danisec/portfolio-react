import React from 'react'
import Avatar from './components/avatar/Avatar'

function HomePages() {
  return (
    <>
      <div className='layout mt-8 md:mt-12'>
        <div className='grid items-center md:grid-flow-col md:gap-20'>
          <div>
            <div className='text-3xl font-bold text-gray-900 lg:text-5xl'>
              <h2>HI 👋, I'm Dani</h2>
              <h2 className='mt-4'>Front-end Developer</h2>
            </div>

            <div className='mt-6'>
              <p className='text-base font-medium text-gray-700 lg:text-lg'>
                I design and develop experiences that make people's lives
                simpler trough Web and Mobile apps. I work with Figma, HTML5,
                Tailwind CSS, JavaScript, React.
              </p>
            </div>

            <div className='mt-14 flex gap-4 md:gap-6'>
              <a
                href='https://www.linkedin.com/in/dani-aprilyanto-278258130'
                target='_blank'
              >
                <button className='h-12 w-28 border-2 border-black bg-white text-base font-bold uppercase hover:border-gray-600'>
                  Hire Me
                </button>
              </a>

              <a href='https://github.com/danisec' target='_blank'>
                <button className='h-12 w-48 bg-black text-base font-bold uppercase text-white hover:bg-gray-800'>
                  See My Project
                </button>
              </a>
            </div>
          </div>

          <div className='hidden h-auto md:block md:w-80'>
            <Avatar avaClass={`rounded-3xl`} />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePages
