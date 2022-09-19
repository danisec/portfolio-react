import React from 'react'

function AboutPages() {
  return (
    <>
      <div className='layout mt-8 md:mt-12'>
        <div className='flex justify-center'>
          <h2 className='text-2xl font-bold text-gray-900 md:text-3xl'>
            About Me
          </h2>
        </div>

        <div className='my-6 rounded-md bg-indigo-100/30 p-8 shadow-gray-200 drop-shadow-sm backdrop-blur-lg'>
          <p className='text-base font-normal leading-relaxed text-gray-900 md:text-lg'>
            I'm a Front-end developer, making a web that is interactive to the
            user. I currently have a bachelor's degree at Pembangunan Jaya
            University in Indonesia. I am sharing an open source project on {''}
            <a
              className='font-medium underline'
              href='https://github.com/danisec'
              target='_blank'
            >
              Github
            </a>
            . <br />
            <br />
            Started learning programming from high school. I learned programming
            from HTML, CSS and JavaScript to build a website. Until now I'm
            learning about the React Framework. I always keep up to date with
            trending technology and explore personal computers.
            <br />
            <br />
            Contact me via email at ✉️ {''}
            <a
              className='font-medium underline'
              href='mailto:daniaprilyanto35@gmail.com'
            >
              daniaprilyanto35@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutPages
